const bcrypt = require('bcryptjs');
const { db } = require('../config/database');

const validPhone = value => /^[+\d][\d\s-]{7,19}$/.test(value || '');
const validEmail = value => !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const publicUser = user => ({
  id: user.id,
  username: user.username,
  email: user.email,
  full_name: user.full_name,
  phone: user.phone,
  role: user.role,
  is_active: user.is_active,
  created_at: user.created_at
});

exports.getStaff = (req, res, next) => {
  try {
    const role = ['secretary', 'doctor'].includes(req.query.role) ? req.query.role : 'secretary';
    const users = db.prepare(`
      SELECT id, username, email, full_name, phone, role, is_active, created_at
      FROM users WHERE role = ? ORDER BY created_at DESC
    `).all(role);
    res.json({ success: true, data: users });
  } catch (error) { next(error); }
};

exports.createSecretary = async (req, res, next) => {
  try {
    const { username, password, full_name, phone, email } = req.body || {};
    if (typeof username !== 'string' || !/^[a-zA-Z0-9_.-]{3,40}$/.test(username) ||
        typeof password !== 'string' || password.length < 8 || password.length > 128 ||
        typeof full_name !== 'string' || full_name.trim().length < 2 || full_name.trim().length > 120 ||
        !validPhone(phone) || !validEmail(email)) {
      return res.status(400).json({ success: false, message: 'اطلاعات منشی نامعتبر است' });
    }
    const exists = db.prepare('SELECT id FROM users WHERE username = ? OR phone = ? OR (email IS NOT NULL AND email = ?)')
      .get(username.trim(), phone.trim(), email ? email.trim() : null);
    if (exists) return res.status(409).json({ success: false, message: 'نام کاربری، تلفن یا ایمیل قبلاً ثبت شده است' });
    const passwordHash = await bcrypt.hash(password, 10);
    const result = db.prepare(`
      INSERT INTO users (username, email, password_hash, full_name, phone, role, is_active)
      VALUES (?, ?, ?, ?, ?, 'secretary', 1)
    `).run(username.trim(), email ? email.trim() : null, passwordHash, full_name.trim(), phone.trim());
    res.status(201).json({ success: true, message: 'حساب منشی با موفقیت ایجاد شد', data: publicUser(db.prepare('SELECT * FROM users WHERE id = ?').get(result.lastInsertRowid)) });
  } catch (error) { next(error); }
};

exports.updateStaffStatus = (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    const isActive = req.body?.is_active;
    if (!Number.isInteger(id) || ![true, false, 0, 1].includes(isActive)) {
      return res.status(400).json({ success: false, message: 'وضعیت نامعتبر است' });
    }
    const result = db.prepare("UPDATE users SET is_active = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ? AND role = 'secretary'")
      .run(isActive === true || isActive === 1 ? 1 : 0, id);
    if (!result.changes) return res.status(404).json({ success: false, message: 'منشی مورد نظر یافت نشد' });
    res.json({ success: true, message: 'وضعیت منشی به‌روزرسانی شد' });
  } catch (error) { next(error); }
};
