const { db } = require('../config/database');

// @desc    Get all appointments
// @route   GET /api/appointments
// @access  Private
exports.getAllAppointments = (req, res, next) => {
  try {
    const { status, doctor_id, patient_id, date, page = 1, limit = 20 } = req.query;
    
    let query = `
      SELECT 
        a.*,
        d.id as doctor_id,
        u1.full_name as doctor_name,
        s.name_fa as specialty_name,
        u2.full_name as patient_full_name
      FROM appointments a
      LEFT JOIN doctors d ON a.doctor_id = d.id
      LEFT JOIN users u1 ON d.user_id = u1.id
      LEFT JOIN specialties s ON d.specialty_id = s.id
      LEFT JOIN users u2 ON a.patient_id = u2.id
      WHERE 1=1
    `;
    
    const params = [];

    // Role-based filtering
    if (req.user.role === 'doctor') {
      const doctor = db.prepare('SELECT id FROM doctors WHERE user_id = ?')
        .get(req.user.id);
      
      if (doctor) {
        query += ' AND a.doctor_id = ?';
        params.push(doctor.id);
      }
    } else if (req.user.role === 'patient') {
      query += ' AND a.patient_id = ?';
      params.push(req.user.id);
    }

    if (status) {
      query += ' AND a.status = ?';
      params.push(status);
    }

    if (doctor_id) {
      query += ' AND a.doctor_id = ?';
      params.push(doctor_id);
    }

    if (patient_id && req.user.role === 'admin') {
      query += ' AND a.patient_id = ?';
      params.push(patient_id);
    }

    if (date) {
      query += ' AND a.appointment_date = ?';
      params.push(date);
    }

    query += ' ORDER BY a.appointment_date DESC, a.appointment_time DESC';

    // Pagination
    const offset = (page - 1) * limit;
    query += ` LIMIT ? OFFSET ?`;
    params.push(parseInt(limit), parseInt(offset));

    const appointments = db.prepare(query).all(...params);

    // Get total count
    let countQuery = query.split('ORDER BY')[0].replace(/SELECT .* FROM/, 'SELECT COUNT(*) as total FROM');
    const countParams = params.slice(0, -2); // Remove LIMIT and OFFSET params
    
    const { total } = db.prepare(countQuery).get(...countParams);

    res.json({
      success: true,
      data: appointments,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single appointment
// @route   GET /api/appointments/:id
// @access  Private
exports.getAppointment = (req, res, next) => {
  try {
    const appointment = db.prepare(`
      SELECT 
        a.*,
        d.id as doctor_id,
        u1.full_name as doctor_name,
        u1.phone as doctor_phone,
        d.office_address,
        s.name_fa as specialty_name,
        u2.full_name as patient_full_name,
        u2.email as patient_email
      FROM appointments a
      LEFT JOIN doctors d ON a.doctor_id = d.id
      LEFT JOIN users u1 ON d.user_id = u1.id
      LEFT JOIN specialties s ON d.specialty_id = s.id
      LEFT JOIN users u2 ON a.patient_id = u2.id
      WHERE a.id = ?
    `).get(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'نوبت مورد نظر یافت نشد'
      });
    }

    // Check permission
    if (req.user.role === 'doctor') {
      const doctor = db.prepare('SELECT id FROM doctors WHERE user_id = ?')
        .get(req.user.id);
      
      if (!doctor || appointment.doctor_id !== doctor.id) {
        return res.status(403).json({
          success: false,
          message: 'شما دسترسی به این نوبت را ندارید'
        });
      }
    } else if (req.user.role === 'patient' && appointment.patient_id !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'شما دسترسی به این نوبت را ندارید'
      });
    }

    res.json({
      success: true,
      data: appointment
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create appointment
// @route   POST /api/appointments
// @access  Private/Public
exports.createAppointment = (req, res, next) => {
  try {
    const {
      doctor_id,
      appointment_date,
      appointment_time,
      type,
      patient_name,
      patient_phone,
      patient_age,
      reason,
      notes
    } = req.body;

    // Validation
    if (!doctor_id || !appointment_date || !appointment_time || !type || !patient_name || !patient_phone) {
      return res.status(400).json({
        success: false,
        message: 'لطفاً تمام فیلدهای الزامی را پر کنید'
      });
    }

    // Check if doctor exists
    const doctor = db.prepare('SELECT id FROM doctors WHERE id = ? AND is_available = 1')
      .get(doctor_id);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: 'پزشک مورد نظر یافت نشد یا در حال حاضر قابل رزرو نیست'
      });
    }

    // Check if time slot is available
    const existingAppointment = db.prepare(`
      SELECT id FROM appointments 
      WHERE doctor_id = ? 
      AND appointment_date = ? 
      AND appointment_time = ?
      AND status != 'cancelled'
    `).get(doctor_id, appointment_date, appointment_time);

    if (existingAppointment) {
      return res.status(400).json({
        success: false,
        message: 'این زمان قبلاً رزرو شده است'
      });
    }

    const patient_id = req.user ? req.user.id : null;

    const insert = db.prepare(`
      INSERT INTO appointments (
        patient_id, doctor_id, appointment_date, appointment_time,
        type, patient_name, patient_phone, patient_age, reason, notes
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = insert.run(
      patient_id,
      doctor_id,
      appointment_date,
      appointment_time,
      type,
      patient_name,
      patient_phone,
      patient_age || null,
      reason || null,
      notes || null
    );

    const newAppointment = db.prepare('SELECT * FROM appointments WHERE id = ?')
      .get(result.lastInsertRowid);

    res.status(201).json({
      success: true,
      message: 'نوبت با موفقیت ثبت شد',
      data: newAppointment
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update appointment
// @route   PUT /api/appointments/:id
// @access  Private
exports.updateAppointment = (req, res, next) => {
  try {
    const appointmentId = req.params.id;
    
    // Get appointment
    const appointment = db.prepare('SELECT * FROM appointments WHERE id = ?')
      .get(appointmentId);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'نوبت مورد نظر یافت نشد'
      });
    }

    // Check permission
    if (req.user.role === 'patient' && appointment.patient_id !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'شما دسترسی به ویرایش این نوبت را ندارید'
      });
    }

    const allowedFields = ['appointment_date', 'appointment_time', 'type', 'notes', 'reason'];
    
    if (req.user.role === 'admin' || req.user.role === 'doctor') {
      allowedFields.push('status');
    }

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

    updates.push('updated_at = CURRENT_TIMESTAMP');
    values.push(appointmentId);

    const query = `UPDATE appointments SET ${updates.join(', ')} WHERE id = ?`;
    db.prepare(query).run(...values);

    const updatedAppointment = db.prepare('SELECT * FROM appointments WHERE id = ?')
      .get(appointmentId);

    res.json({
      success: true,
      message: 'نوبت با موفقیت به‌روزرسانی شد',
      data: updatedAppointment
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Cancel appointment
// @route   DELETE /api/appointments/:id
// @access  Private
exports.cancelAppointment = (req, res, next) => {
  try {
    const appointmentId = req.params.id;
    
    const appointment = db.prepare('SELECT patient_id FROM appointments WHERE id = ?')
      .get(appointmentId);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'نوبت مورد نظر یافت نشد'
      });
    }

    // Check permission
    if (req.user.role === 'patient' && appointment.patient_id !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'شما دسترسی به لغو این نوبت را ندارید'
      });
    }

    db.prepare('UPDATE appointments SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?')
      .run('cancelled', appointmentId);

    res.json({
      success: true,
      message: 'نوبت با موفقیت لغو شد'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get available time slots
// @route   GET /api/appointments/doctor/:doctorId/available-slots
// @access  Public
exports.getAvailableSlots = (req, res, next) => {
  try {
    const { doctorId } = req.params;
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({
        success: false,
        message: 'لطفاً تاریخ را مشخص کنید'
      });
    }

    // Get doctor's working hours
    const doctor = db.prepare('SELECT working_hours, consultation_fee FROM doctors WHERE id = ?')
      .get(doctorId);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: 'پزشک مورد نظر یافت نشد'
      });
    }

    const workingHours = doctor.working_hours ? JSON.parse(doctor.working_hours) : {};
    
    // Get day of week from date
    const dateObj = new Date(date);
    const dayOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][dateObj.getDay()];

    if (!workingHours[dayOfWeek] || !workingHours[dayOfWeek].enabled) {
      return res.json({
        success: true,
        data: {
          available_slots: [],
          message: 'پزشک در این روز حضور ندارد'
        }
      });
    }

    // Get booked appointments for this date
    const bookedSlots = db.prepare(`
      SELECT appointment_time 
      FROM appointments 
      WHERE doctor_id = ? 
      AND appointment_date = ? 
      AND status != 'cancelled'
    `).all(doctorId, date).map(a => a.appointment_time);

    // Generate available slots based on working hours
    const { start, end, duration = 30 } = workingHours[dayOfWeek];
    const availableSlots = [];
    
    let currentTime = start;
    while (currentTime < end) {
      if (!bookedSlots.includes(currentTime)) {
        availableSlots.push(currentTime);
      }
      
      // Add duration minutes
      const [hours, minutes] = currentTime.split(':').map(Number);
      const totalMinutes = hours * 60 + minutes + duration;
      currentTime = `${String(Math.floor(totalMinutes / 60)).padStart(2, '0')}:${String(totalMinutes % 60).padStart(2, '0')}`;
    }

    res.json({
      success: true,
      data: {
        date,
        day: dayOfWeek,
        available_slots: availableSlots,
        consultation_fee: doctor.consultation_fee
      }
    });
  } catch (error) {
    next(error);
  }
};
