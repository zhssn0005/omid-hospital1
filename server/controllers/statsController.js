const { db } = require('../config/database');

exports.getDashboardStats = (req, res, next) => {
  try {
    const stats = {
      users: {
        total: db.prepare('SELECT COUNT(*) as count FROM users').get().count,
        patients: db.prepare('SELECT COUNT(*) as count FROM users WHERE role = "patient"').get().count,
        doctors: db.prepare('SELECT COUNT(*) as count FROM users WHERE role = "doctor"').get().count,
        admins: db.prepare('SELECT COUNT(*) as count FROM users WHERE role = "admin"').get().count
      },
      doctors: {
        total: db.prepare('SELECT COUNT(*) as count FROM doctors').get().count,
        available: db.prepare('SELECT COUNT(*) as count FROM doctors WHERE is_available = 1').get().count,
        featured: db.prepare('SELECT COUNT(*) as count FROM doctors WHERE is_featured = 1').get().count
      },
      appointments: {
        total: db.prepare('SELECT COUNT(*) as count FROM appointments').get().count,
        pending: db.prepare('SELECT COUNT(*) as count FROM appointments WHERE status = "pending"').get().count,
        confirmed: db.prepare('SELECT COUNT(*) as count FROM appointments WHERE status = "confirmed"').get().count,
        completed: db.prepare('SELECT COUNT(*) as count FROM appointments WHERE status = "completed"').get().count,
        cancelled: db.prepare('SELECT COUNT(*) as count FROM appointments WHERE status = "cancelled"').get().count,
        today: db.prepare('SELECT COUNT(*) as count FROM appointments WHERE appointment_date = DATE("now")').get().count
      },
      reviews: {
        total: db.prepare('SELECT COUNT(*) as count FROM reviews').get().count,
        approved: db.prepare('SELECT COUNT(*) as count FROM reviews WHERE is_approved = 1').get().count,
        pending: db.prepare('SELECT COUNT(*) as count FROM reviews WHERE is_approved = 0').get().count,
        avgRating: db.prepare('SELECT AVG(rating) as avg FROM reviews WHERE is_approved = 1').get().avg || 0
      },
      specialties: {
        total: db.prepare('SELECT COUNT(*) as count FROM specialties WHERE is_active = 1').get().count
      },
      departments: {
        total: db.prepare('SELECT COUNT(*) as count FROM departments WHERE is_active = 1').get().count
      },
      blog: {
        total: db.prepare('SELECT COUNT(*) as count FROM blog_posts').get().count,
        published: db.prepare('SELECT COUNT(*) as count FROM blog_posts WHERE is_published = 1').get().count
      }
    };

    // Recent appointments
    stats.recentAppointments = db.prepare(`
      SELECT 
        a.id,
        a.appointment_date,
        a.appointment_time,
        a.status,
        a.patient_name,
        u.full_name as doctor_name,
        s.name_fa as specialty
      FROM appointments a
      LEFT JOIN doctors d ON a.doctor_id = d.id
      LEFT JOIN users u ON d.user_id = u.id
      LEFT JOIN specialties s ON d.specialty_id = s.id
      ORDER BY a.created_at DESC
      LIMIT 10
    `).all();

    // Top doctors
    stats.topDoctors = db.prepare(`
      SELECT 
        d.id,
        u.full_name,
        s.name_fa as specialty,
        d.rating,
        d.review_count
      FROM doctors d
      LEFT JOIN users u ON d.user_id = u.id
      LEFT JOIN specialties s ON d.specialty_id = s.id
      WHERE d.is_available = 1
      ORDER BY d.rating DESC, d.review_count DESC
      LIMIT 5
    `).all();

    res.json({ success: true, data: stats });
  } catch (error) {
    next(error);
  }
};

exports.getAppointmentStats = (req, res, next) => {
  try {
    const { period = '7days' } = req.query;
    
    let dateFilter = 'DATE("now", "-7 days")';
    if (period === '30days') dateFilter = 'DATE("now", "-30 days")';
    if (period === '90days') dateFilter = 'DATE("now", "-90 days")';
    
    const stats = db.prepare(`
      SELECT 
        appointment_date,
        COUNT(*) as count,
        SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completed,
        SUM(CASE WHEN status = 'cancelled' THEN 1 ELSE 0 END) as cancelled
      FROM appointments
      WHERE appointment_date >= ${dateFilter}
      GROUP BY appointment_date
      ORDER BY appointment_date ASC
    `).all();
    
    res.json({ success: true, data: stats });
  } catch (error) {
    next(error);
  }
};
