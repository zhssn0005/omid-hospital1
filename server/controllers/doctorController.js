const { db } = require('../config/database');

// @desc    Get all doctors
// @route   GET /api/doctors
// @access  Public
exports.getAllDoctors = (req, res, next) => {
  try {
    const { specialty, search, featured, available } = req.query;
    const page = Math.max(1, Math.min(10000, Number.parseInt(req.query.page, 10) || 1));
    const limit = Math.max(1, Math.min(100, Number.parseInt(req.query.limit, 10) || 20));
    
    let query = `
      SELECT 
        d.*,
        s.name_fa as specialty_name,
        s.slug as specialty_slug,
        u.full_name,
        u.avatar,
        CASE WHEN d.image_local IS NOT NULL AND d.image_local != '' 
             THEN '/assets/doctors/' || d.image_local 
             ELSE NULL END as image_url
      FROM doctors d
      LEFT JOIN specialties s ON d.specialty_id = s.id
      LEFT JOIN users u ON d.user_id = u.id
      WHERE (u.full_name IS NULL OR u.full_name NOT LIKE 'مرحوم%')
    `;
    
    const params = [];

    if (specialty) {
      query += ' AND s.slug = ?';
      params.push(specialty);
    }

    if (search) {
      query += ' AND (u.full_name LIKE ? OR d.bio LIKE ?)';
      params.push(`%${search}%`, `%${search}%`);
    }

    if (featured === 'true') {
      query += ' AND d.is_featured = 1';
    }

    if (available === 'true') {
      query += ' AND d.is_available = 1';
    }

    query += ' ORDER BY d.is_featured DESC, d.rating DESC';

    // Pagination
    const offset = (page - 1) * limit;
    query += ' LIMIT ? OFFSET ?';
    params.push(limit, offset);

    const doctors = db.prepare(query).all(...params);
    
    // Fix null full_name: extract name from bio, set image_url
    doctors.forEach(d => {
      if (!d.full_name && d.bio) {
        const parts = d.bio.split(' — ');
        d.full_name = parts[0].trim();
      }
      if (!d.full_name) d.full_name = 'پزشک متخصص';
    });

    // Get total count
    let countQuery = `
      SELECT COUNT(*) as total
      FROM doctors d
      LEFT JOIN specialties s ON d.specialty_id = s.id
      LEFT JOIN users u ON d.user_id = u.id
      WHERE (u.full_name IS NULL OR u.full_name NOT LIKE 'مرحوم%')
    `;
    
    const countParams = [];
    if (specialty) {
      countQuery += ' AND s.slug = ?';
      countParams.push(specialty);
    }
    if (search) {
      countQuery += ' AND (u.full_name LIKE ? OR d.bio LIKE ?)';
      countParams.push(`%${search}%`, `%${search}%`);
    }
    if (featured === 'true') {
      countQuery += ' AND d.is_featured = 1';
    }
    if (available === 'true') {
      countQuery += ' AND d.is_available = 1';
    }

    const { total } = db.prepare(countQuery).get(...countParams);

    res.json({
      success: true,
      data: doctors,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single doctor
// @route   GET /api/doctors/:id
// @access  Public
exports.getDoctor = (req, res, next) => {
  try {
    const doctor = db.prepare(`
      SELECT 
        d.*,
        s.name_fa as specialty_name,
        s.name_en as specialty_name_en,
        s.slug as specialty_slug,
        u.full_name,
        u.email,
        u.phone,
        u.avatar,
        CASE WHEN d.image_local IS NOT NULL AND d.image_local != '' 
             THEN '/assets/doctors/' || d.image_local 
             ELSE NULL END as image_url
      FROM doctors d
      LEFT JOIN specialties s ON d.specialty_id = s.id
      LEFT JOIN users u ON d.user_id = u.id
      WHERE d.id = ?
        AND (u.full_name IS NULL OR u.full_name NOT LIKE 'مرحوم%')
        AND (d.bio IS NULL OR d.bio NOT LIKE 'مرحوم%')
    `).get(req.params.id);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: 'پزشک مورد نظر یافت نشد'
      });
    }

    // Parse JSON fields
    if (doctor.working_hours) {
      doctor.working_hours = JSON.parse(doctor.working_hours);
    }
    if (doctor.insurance_types) {
      doctor.insurance_types = JSON.parse(doctor.insurance_types);
    }

    // Get reviews
    const reviews = db.prepare(`
      SELECT 
        r.*,
        u.full_name as patient_name,
        u.avatar as patient_avatar
      FROM reviews r
      LEFT JOIN users u ON r.patient_id = u.id
      WHERE r.doctor_id = ? AND r.is_approved = 1
      ORDER BY r.created_at DESC
      LIMIT 10
    `).all(req.params.id);

    doctor.reviews = reviews;

    res.json({
      success: true,
      data: doctor
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create doctor
// @route   POST /api/doctors
// @access  Private (Admin)
exports.createDoctor = async (req, res, next) => {
  try {
    const {
      user_id,
      medical_code,
      specialty_id,
      bio,
      education,
      experience_years,
      consultation_fee,
      office_address,
      office_phone,
      office_lat,
      office_lng,
      working_hours,
      accepts_insurance,
      insurance_types,
      is_featured,
      image
    } = req.body;

    // Validation
    if (!medical_code || !specialty_id) {
      return res.status(400).json({
        success: false,
        message: 'کد نظام پزشکی و تخصص الزامی است'
      });
    }

    // Check if medical code exists
    const existing = db.prepare('SELECT id FROM doctors WHERE medical_code = ?')
      .get(medical_code);

    if (existing) {
      return res.status(400).json({
        success: false,
        message: 'این کد نظام پزشکی قبلاً ثبت شده است'
      });
    }

    const insert = db.prepare(`
      INSERT INTO doctors (
        user_id, medical_code, specialty_id, bio, education, 
        experience_years, consultation_fee, office_address, office_phone,
        office_lat, office_lng, working_hours, accepts_insurance,
        insurance_types, is_featured, image
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = insert.run(
      user_id || null,
      medical_code,
      specialty_id,
      bio || null,
      education || null,
      experience_years || 0,
      consultation_fee || 0,
      office_address || null,
      office_phone || null,
      office_lat || null,
      office_lng || null,
      working_hours ? JSON.stringify(working_hours) : null,
      accepts_insurance || 0,
      insurance_types ? JSON.stringify(insurance_types) : null,
      is_featured || 0,
      image || null
    );

    const newDoctor = db.prepare('SELECT * FROM doctors WHERE id = ?')
      .get(result.lastInsertRowid);

    res.status(201).json({
      success: true,
      message: 'پزشک با موفقیت ثبت شد',
      data: newDoctor
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update doctor
// @route   PUT /api/doctors/:id
// @access  Private (Admin/Doctor)
exports.updateDoctor = (req, res, next) => {
  try {
    const doctorId = req.params.id;
    
    // Check permission
    if (req.user.role === 'doctor') {
      const doctor = db.prepare('SELECT user_id FROM doctors WHERE id = ?')
        .get(doctorId);
      
      if (!doctor || doctor.user_id !== req.user.id) {
        return res.status(403).json({
          success: false,
          message: 'شما دسترسی به ویرایش این پزشک را ندارید'
        });
      }
    }

    const allowedFields = req.user.role === 'admin'
      ? [
          'bio', 'education', 'experience_years', 'consultation_fee',
          'office_address', 'office_phone', 'office_lat', 'office_lng',
          'working_hours', 'accepts_insurance', 'insurance_types',
          'is_available', 'is_featured', 'image'
        ]
      : ['bio', 'education', 'office_address', 'office_phone', 'working_hours'];

    const updates = [];
    const values = [];

    Object.keys(req.body).forEach(key => {
      if (allowedFields.includes(key)) {
        updates.push(`${key} = ?`);
        
        if (key === 'working_hours' || key === 'insurance_types') {
          values.push(JSON.stringify(req.body[key]));
        } else {
          values.push(req.body[key]);
        }
      }
    });

    if (updates.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'هیچ فیلدی برای به‌روزرسانی ارسال نشده است'
      });
    }

    updates.push('updated_at = CURRENT_TIMESTAMP');
    values.push(doctorId);

    const query = `UPDATE doctors SET ${updates.join(', ')} WHERE id = ?`;
    db.prepare(query).run(...values);

    const updatedDoctor = db.prepare('SELECT * FROM doctors WHERE id = ?')
      .get(doctorId);

    res.json({
      success: true,
      message: 'اطلاعات پزشک با موفقیت به‌روزرسانی شد',
      data: updatedDoctor
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete doctor
// @route   DELETE /api/doctors/:id
// @access  Private (Admin)
exports.deleteDoctor = (req, res, next) => {
  try {
    const result = db.prepare('DELETE FROM doctors WHERE id = ?')
      .run(req.params.id);

    if (result.changes === 0) {
      return res.status(404).json({
        success: false,
        message: 'پزشک مورد نظر یافت نشد'
      });
    }

    res.json({
      success: true,
      message: 'پزشک با موفقیت حذف شد'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get doctor schedule
// @route   GET /api/doctors/:id/schedule
// @access  Public
exports.getSchedule = (req, res, next) => {
  try {
    const doctor = db.prepare('SELECT working_hours FROM doctors WHERE id = ?')
      .get(req.params.id);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: 'پزشک مورد نظر یافت نشد'
      });
    }

    const schedule = doctor.working_hours ? JSON.parse(doctor.working_hours) : {};

    res.json({
      success: true,
      data: schedule
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get date-specific schedule overrides
exports.getScheduleDates = (req, res, next) => {
  try {
    const rows = db.prepare(`
      SELECT id, doctor_id, schedule_date, enabled, start_time, end_time, slot_duration, note
      FROM doctor_schedule_dates WHERE doctor_id = ? ORDER BY schedule_date ASC
    `).all(req.params.id);
    res.json({ success: true, data: rows });
  } catch (error) { next(error); }
};

// @desc    Create or update one date-specific schedule override
exports.saveScheduleDate = (req, res, next) => {
  try {
    const doctorId = Number.parseInt(req.params.id, 10);
    const { schedule_date, enabled = true, start_time, end_time, slot_duration = 30, note } = req.body;
    if (!Number.isInteger(doctorId) || !/^\d{4}-\d{2}-\d{2}$/.test(String(schedule_date || ''))) {
      return res.status(400).json({ success: false, message: 'تاریخ میلادی معتبر الزامی است' });
    }
    const duration = Number(slot_duration);
    const validTime = value => /^([01]\d|2[0-3]):[0-5]\d$/.test(String(value || ''));
    if (enabled && (!validTime(start_time) || !validTime(end_time) || start_time >= end_time || !Number.isInteger(duration) || duration < 5 || duration > 240)) {
      return res.status(400).json({ success: false, message: 'بازه زمانی یا مدت نوبت نامعتبر است' });
    }
    if (!db.prepare('SELECT id FROM doctors WHERE id = ?').get(doctorId)) {
      return res.status(404).json({ success: false, message: 'پزشک مورد نظر یافت نشد' });
    }
    db.prepare(`
      INSERT INTO doctor_schedule_dates (doctor_id, schedule_date, enabled, start_time, end_time, slot_duration, note, created_by)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(doctor_id, schedule_date) DO UPDATE SET enabled=excluded.enabled, start_time=excluded.start_time,
        end_time=excluded.end_time, slot_duration=excluded.slot_duration, note=excluded.note,
        updated_at=CURRENT_TIMESTAMP
    `).run(doctorId, schedule_date, enabled ? 1 : 0, enabled ? start_time : null, enabled ? end_time : null, duration, typeof note === 'string' ? note.slice(0, 300) : null, req.user.id);
    res.json({ success: true, message: 'برنامه تاریخ با موفقیت ذخیره شد', data: db.prepare('SELECT * FROM doctor_schedule_dates WHERE doctor_id = ? AND schedule_date = ?').get(doctorId, schedule_date) });
  } catch (error) { next(error); }
};

exports.deleteScheduleDate = (req, res, next) => {
  try {
    const result = db.prepare('DELETE FROM doctor_schedule_dates WHERE doctor_id = ? AND schedule_date = ?').run(req.params.id, req.params.date);
    if (!result.changes) return res.status(404).json({ success: false, message: 'برنامه تاریخ یافت نشد' });
    res.json({ success: true, message: 'استثنای تاریخ حذف شد' });
  } catch (error) { next(error); }
};

// @desc    Update doctor schedule
// @route   PUT /api/doctors/:id/schedule
// @access  Private (Doctor)
exports.updateSchedule = (req, res, next) => {
  try {
    const doctorId = req.params.id;
    const { working_hours } = req.body;

    // Check permission
    const doctor = db.prepare('SELECT user_id FROM doctors WHERE id = ?')
      .get(doctorId);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: 'پزشک مورد نظر یافت نشد'
      });
    }

    if (!['admin', 'secretary'].includes(req.user.role) && doctor.user_id !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'شما دسترسی به ویرایش برنامه این پزشک را ندارید'
      });
    }

    db.prepare('UPDATE doctors SET working_hours = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?')
      .run(JSON.stringify(working_hours), doctorId);

    res.json({
      success: true,
      message: 'برنامه کاری با موفقیت به‌روزرسانی شد',
      data: working_hours
    });
  } catch (error) {
    next(error);
  }
};
