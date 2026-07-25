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
    const { username, email, password, full_name, phone, role = 'patient' } = req.body;

    // Validation
    if (!username || !password || !full_name || !phone) {
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

    const result = insert.run(username, email, password_hash, full_name, phone, role);

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
          role
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
    if (!username || !password) {
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

    if (full_name) {
      updates.push('full_name = ?');
      values.push(full_name);
    }
    if (email) {
      updates.push('email = ?');
      values.push(email);
    }
    if (phone) {
      updates.push('phone = ?');
      values.push(phone);
    }
    if (avatar) {
      updates.push('avatar = ?');
      values.push(avatar);
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

    if (!current_password || !new_password) {
      return res.status(400).json({
        success: false,
        message: 'لطفاً رمز عبور فعلی و جدید را وارد کنید'
      });
    }

    // Get current password hash
    const user = db.prepare('SELECT password_hash FROM users WHERE id = ?')
      .get(userId);

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
