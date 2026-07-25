const { db } = require('../config/database');

exports.getAllDepartments = (req, res, next) => {
  try {
    const departments = db.prepare(`
      SELECT 
        d.*,
        doc.id as head_doctor_id,
        u.full_name as head_doctor_name
      FROM departments d
      LEFT JOIN doctors doc ON d.head_doctor_id = doc.id
      LEFT JOIN users u ON doc.user_id = u.id
      WHERE d.is_active = 1
      ORDER BY d.display_order ASC
    `).all();

    res.json({ success: true, data: departments });
  } catch (error) {
    next(error);
  }
};

exports.getDepartment = (req, res, next) => {
  try {
    const department = db.prepare('SELECT * FROM departments WHERE id = ?')
      .get(req.params.id);

    if (!department) {
      return res.status(404).json({ success: false, message: 'بخش مورد نظر یافت نشد' });
    }

    res.json({ success: true, data: department });
  } catch (error) {
    next(error);
  }
};

exports.createDepartment = (req, res, next) => {
  try {
    const { name_fa, name_en, slug, description, icon, image, floor, phone, head_doctor_id, display_order } = req.body;

    const insert = db.prepare(`
      INSERT INTO departments (name_fa, name_en, slug, description, icon, image, floor, phone, head_doctor_id, display_order)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = insert.run(name_fa, name_en, slug, description, icon, image, floor, phone, head_doctor_id || null, display_order || 0);

    res.status(201).json({
      success: true,
      message: 'بخش با موفقیت ثبت شد',
      data: db.prepare('SELECT * FROM departments WHERE id = ?').get(result.lastInsertRowid)
    });
  } catch (error) {
    next(error);
  }
};

exports.updateDepartment = (req, res, next) => {
  try {
    const allowedFields = ['name_fa', 'name_en', 'slug', 'description', 'icon', 'image', 'floor', 'phone', 'head_doctor_id', 'is_active', 'display_order'];
    const updates = [];
    const values = [];

    Object.keys(req.body).forEach(key => {
      if (allowedFields.includes(key)) {
        updates.push(`${key} = ?`);
        values.push(req.body[key]);
      }
    });

    if (updates.length === 0) {
      return res.status(400).json({ success: false, message: 'هیچ فیلدی ارسال نشده' });
    }

    values.push(req.params.id);
    db.prepare(`UPDATE departments SET ${updates.join(', ')} WHERE id = ?`).run(...values);

    res.json({
      success: true,
      message: 'بخش به‌روزرسانی شد',
      data: db.prepare('SELECT * FROM departments WHERE id = ?').get(req.params.id)
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteDepartment = (req, res, next) => {
  try {
    const result = db.prepare('DELETE FROM departments WHERE id = ?').run(req.params.id);
    
    if (result.changes === 0) {
      return res.status(404).json({ success: false, message: 'بخش یافت نشد' });
    }

    res.json({ success: true, message: 'بخش حذف شد' });
  } catch (error) {
    next(error);
  }
};
