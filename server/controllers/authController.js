const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { db } = require('../config/database');

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '7d'
  });
};

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
exports.register = async (req, res, next) => {
  try {
    const { username, email, password, full_name, phone } = req.body;

    // Public registration can only create patient accounts.
    const validUsername = typeof username === 'string' && /^[a-zA-Z0-9_.-]{3,40}$/.test(username);
    const validPassword = typeof password === 'string' && password.length >= 8 && password.length <= 128;
    const validName = typeof full_name === 'string' && full_name.trim().length >= 2 && full_name.length <= 120;
    const validPhone = typeof phone === 'string' && /^[+\d][\d\s-]{7,19}$/.test(phone);
    const validEmail = email === undefined || email === null || email === '' ||
      (typeof email === 'string' && email.length <= 160 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));

    if (!validUsername || !validPassword || !validName || !validPhone || !validEmail) {
      return res.status(400).json({
        success: false,
        message: 'لطفاً تمام فیلدهای الزامی را پر کنید'
      });
    }

    // Check if user exists
    const existingUser = db.prepare('SELECT id FROM users WHERE username = ? OR phone = ?')
      .get(username, phone);

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'کاربری با این نام کاربری یا شماره تلفن قبلاً ثبت شده است'
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    // Insert user
    const insert = db.prepare(`
      INSERT INTO users (username, email, password_hash, full_name, phone, role)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    const result = insert.run(username.trim(), email || null, password_hash, full_name.trim(), phone.trim(), 'patient');

    // Generate token
    const token = generateToken(result.lastInsertRowid);

    res.status(201).json({
      success: true,
      message: 'ثبت‌نام با موفقیت انجام شد',
      data: {
        token,
        user: {
          id: result.lastInsertRowid,
          username,
          email,
          full_name,
          phone,
          role: 'patient'
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Validation
    if (typeof username !== 'string' || username.length < 3 || username.length > 160 ||
        typeof password !== 'string' || password.length < 1 || password.length > 128) {
      return res.status(400).json({
        success: false,
        message: 'لطفاً نام کاربری و رمز عبور را وارد کنید'
      });
    }

    // Get user
    const user = db.prepare(`
      SELECT * FROM users WHERE (username = ? OR phone = ?) AND is_active = 1
    `).get(username, username);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'نام کاربری یا رمز عبور اشتباه است'
      });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'نام کاربری یا رمز عبور اشتباه است'
      });
    }

    // Update last login
    db.prepare('UPDATE users SET updated_at = CURRENT_TIMESTAMP WHERE id = ?')
      .run(user.id);

    // Generate token
    const token = generateToken(user.id);

    // Remove password from response
    delete user.password_hash;

    res.json({
      success: true,
      message: 'ورود موفقیت‌آمیز بود',
      data: {
        token,
        user
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get current user
// @route   GET /api/auth/me
// @access  Private
exports.getMe = (req, res) => {
  res.json({
    success: true,
    data: req.user
  });
};

// @desc    Update profile
// @route   PUT /api/auth/profile
// @access  Private
exports.updateProfile = async (req, res, next) => {
  try {
    const { full_name, email, phone, avatar } = req.body;
    const userId = req.user.id;
    const updates = [];
    const values = [];
    const validEmail = email === undefined || email === null || email === '' ||
      (typeof email === 'string' && email.length <= 160 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    const validPhone = phone === undefined || (typeof phone === 'string' && /^[+\d][\d\s-]{7,19}$/.test(phone));
    const validName = full_name === undefined ||
      (typeof full_name === 'string' && full_name.trim().length >= 2 && full_name.length <= 120);

    if (!validEmail || !validPhone || !validName || (avatar !== undefined && typeof avatar !== 'string')) {
      return res.status(400).json({ success: false, message: 'اطلاعات پروفایل نامعتبر است' });
    }

    if (full_name !== undefined) {
      updates.push('full_name = ?');
      values.push(full_name.trim());
    }
    if (email !== undefined) {
      updates.push('email = ?');
      values.push(email || null);
    }
    if (phone !== undefined) {
      updates.push('phone = ?');
      values.push(phone.trim());
    }
    if (avatar !== undefined) {
      updates.push('avatar = ?');
      values.push(avatar.slice(0, 500));
    }

    if (updates.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'هیچ فیلدی برای به‌روزرسانی ارسال نشده است'
      });
    }

    updates.push('updated_at = CURRENT_TIMESTAMP');
    values.push(userId);

    const query = `UPDATE users SET ${updates.join(', ')} WHERE id = ?`;
    db.prepare(query).run(...values);

    // Get updated user
    const updatedUser = db.prepare(`
      SELECT id, username, email, full_name, phone, role, avatar, created_at 
      FROM users WHERE id = ?
    `).get(userId);

    res.json({
      success: true,
      message: 'پروفایل با موفقیت به‌روزرسانی شد',
      data: updatedUser
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Change password
// @route   PUT /api/auth/password
// @access  Private
exports.changePassword = async (req, res, next) => {
  try {
    const { current_password, new_password } = req.body;
    const userId = req.user.id;

    if (typeof current_password !== 'string' || typeof new_password !== 'string' ||
        new_password.length < 8 || new_password.length > 128) {
      return res.status(400).json({
        success: false,
        message: 'لطفاً رمز عبور فعلی و جدید را وارد کنید'
      });
    }

    // Get current password hash
    const user = db.prepare('SELECT password_hash FROM users WHERE id = ?')
      .get(userId);

    if (!user) {
      return res.status(401).json({ success: false, message: 'کاربر یافت نشد' });
    }

    // Verify current password
    const isMatch = await bcrypt.compare(current_password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'رمز عبور فعلی اشتباه است'
      });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(new_password, salt);

    // Update password
    db.prepare('UPDATE users SET password_hash = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?')
      .run(password_hash, userId);

    res.json({
      success: true,
      message: 'رمز عبور با موفقیت تغییر کرد'
    });
  } catch (error) {
    next(error);
  }
};
