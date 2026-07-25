const { db } = require('../config/database');

// @desc    Get all specialties
// @route   GET /api/specialties
// @access  Public
exports.getAllSpecialties = (req, res, next) => {
  try {
    const { active_only = 'true' } = req.query;
    
    let query = 'SELECT * FROM specialties WHERE 1=1';
    
    if (active_only === 'true') {
      query += ' AND is_active = 1';
    }
    
    query += ' ORDER BY display_order ASC, name_fa ASC';
    
    const specialties = db.prepare(query).all();

    // Add doctor count for each specialty
    const specialtiesWithCount = specialties.map(specialty => {
      const { count } = db.prepare(`
        SELECT COUNT(*) as count 
        FROM doctors 
        WHERE specialty_id = ? AND is_available = 1
      `).get(specialty.id);
      
      return {
        ...specialty,
        doctor_count: count
      };
    });

    res.json({
      success: true,
      data: specialtiesWithCount
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single specialty
// @route   GET /api/specialties/:id
// @access  Public
exports.getSpecialty = (req, res, next) => {
  try {
    const specialty = db.prepare('SELECT * FROM specialties WHERE id = ? OR slug = ?')
      .get(req.params.id, req.params.id);

    if (!specialty) {
      return res.status(404).json({
        success: false,
        message: 'تخصص مورد نظر یافت نشد'
      });
    }

    // Get doctors in this specialty
    const doctors = db.prepare(`
      SELECT 
        d.*,
        u.full_name,
        u.avatar
      FROM doctors d
      LEFT JOIN users u ON d.user_id = u.id
      WHERE d.specialty_id = ? AND d.is_available = 1
      ORDER BY d.is_featured DESC, d.rating DESC
      LIMIT 10
    `).all(specialty.id);

    specialty.doctors = doctors;

    res.json({
      success: true,
      data: specialty
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create specialty
// @route   POST /api/specialties
// @access  Private (Admin)
exports.createSpecialty = (req, res, next) => {
  try {
    const { name_fa, name_en, slug, icon, description, image, display_order } = req.body;

    // Validation
    if (!name_fa || !name_en || !slug) {
      return res.status(400).json({
        success: false,
        message: 'نام فارسی، نام انگلیسی و نامک الزامی است'
      });
    }

    // Check if slug exists
    const existing = db.prepare('SELECT id FROM specialties WHERE slug = ?')
      .get(slug);

    if (existing) {
      return res.status(400).json({
        success: false,
        message: 'این نامک قبلاً ثبت شده است'
      });
    }

    const insert = db.prepare(`
      INSERT INTO specialties (name_fa, name_en, slug, icon, description, image, display_order)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    const result = insert.run(
      name_fa,
      name_en,
      slug,
      icon || null,
      description || null,
      image || null,
      display_order || 0
    );

    const newSpecialty = db.prepare('SELECT * FROM specialties WHERE id = ?')
      .get(result.lastInsertRowid);

    res.status(201).json({
      success: true,
      message: 'تخصص با موفقیت ثبت شد',
      data: newSpecialty
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update specialty
// @route   PUT /api/specialties/:id
// @access  Private (Admin)
exports.updateSpecialty = (req, res, next) => {
  try {
    const specialtyId = req.params.id;
    
    const allowedFields = ['name_fa', 'name_en', 'slug', 'icon', 'description', 'image', 'display_order', 'is_active'];

    const updates = [];
    const values = [];

    Object.keys(req.body).forEach(key => {
      if (allowedFields.includes(key)) {
        updates.push(`${key} = ?`);
        values.push(req.body[key]);
      }
    });

    if (updates.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'هیچ فیلدی برای به‌روزرسانی ارسال نشده است'
      });
    }

    values.push(specialtyId);

    const query = `UPDATE specialties SET ${updates.join(', ')} WHERE id = ?`;
    const result = db.prepare(query).run(...values);

    if (result.changes === 0) {
      return res.status(404).json({
        success: false,
        message: 'تخصص مورد نظر یافت نشد'
      });
    }

    const updatedSpecialty = db.prepare('SELECT * FROM specialties WHERE id = ?')
      .get(specialtyId);

    res.json({
      success: true,
      message: 'تخصص با موفقیت به‌روزرسانی شد',
      data: updatedSpecialty
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete specialty
// @route   DELETE /api/specialties/:id
// @access  Private (Admin)
exports.deleteSpecialty = (req, res, next) => {
  try {
    // Check if specialty has doctors
    const { count } = db.prepare('SELECT COUNT(*) as count FROM doctors WHERE specialty_id = ?')
      .get(req.params.id);

    if (count > 0) {
      return res.status(400).json({
        success: false,
        message: 'این تخصص دارای پزشک است و قابل حذف نیست'
      });
    }

    const result = db.prepare('DELETE FROM specialties WHERE id = ?')
      .run(req.params.id);

    if (result.changes === 0) {
      return res.status(404).json({
        success: false,
        message: 'تخصص مورد نظر یافت نشد'
      });
    }

    res.json({
      success: true,
      message: 'تخصص با موفقیت حذف شد'
    });
  } catch (error) {
    next(error);
  }
};
