const { db } = require('../config/database');

exports.getAllReviews = (req, res, next) => {
  try {
    const { doctor_id, approved_only = 'true' } = req.query;
    
    let query = `
      SELECT r.*, u.full_name as patient_name, u.avatar as patient_avatar
      FROM reviews r
      LEFT JOIN users u ON r.patient_id = u.id
      WHERE 1=1
    `;
    
    const params = [];
    
    if (doctor_id) {
      query += ' AND r.doctor_id = ?';
      params.push(doctor_id);
    }
    
    if (approved_only === 'true') {
      query += ' AND r.is_approved = 1';
    }
    
    query += ' ORDER BY r.created_at DESC';
    
    const reviews = db.prepare(query).all(...params);
    
    res.json({ success: true, data: reviews });
  } catch (error) {
    next(error);
  }
};

exports.createReview = (req, res, next) => {
  try {
    const { doctor_id, rating, comment, appointment_id } = req.body;
    
    if (!doctor_id || !rating) {
      return res.status(400).json({ success: false, message: 'پزشک و امتیاز الزامی است' });
    }
    
    const insert = db.prepare(`
      INSERT INTO reviews (doctor_id, patient_id, appointment_id, rating, comment)
      VALUES (?, ?, ?, ?, ?)
    `);
    
    const result = insert.run(doctor_id, req.user.id, appointment_id || null, rating, comment || null);
    
    // Update doctor rating
    updateDoctorRating(doctor_id);
    
    res.status(201).json({
      success: true,
      message: 'نظر شما ثبت شد و پس از تایید نمایش داده می‌شود',
      data: db.prepare('SELECT * FROM reviews WHERE id = ?').get(result.lastInsertRowid)
    });
  } catch (error) {
    next(error);
  }
};

exports.approveReview = (req, res, next) => {
  try {
    db.prepare('UPDATE reviews SET is_approved = 1 WHERE id = ?').run(req.params.id);
    
    const review = db.prepare('SELECT doctor_id FROM reviews WHERE id = ?').get(req.params.id);
    if (review) {
      updateDoctorRating(review.doctor_id);
    }
    
    res.json({ success: true, message: 'نظر تایید شد' });
  } catch (error) {
    next(error);
  }
};

exports.deleteReview = (req, res, next) => {
  try {
    const review = db.prepare('SELECT doctor_id FROM reviews WHERE id = ?').get(req.params.id);
    
    db.prepare('DELETE FROM reviews WHERE id = ?').run(req.params.id);
    
    if (review) {
      updateDoctorRating(review.doctor_id);
    }
    
    res.json({ success: true, message: 'نظر حذف شد' });
  } catch (error) {
    next(error);
  }
};

function updateDoctorRating(doctorId) {
  const stats = db.prepare(`
    SELECT AVG(rating) as avg_rating, COUNT(*) as count
    FROM reviews
    WHERE doctor_id = ? AND is_approved = 1
  `).get(doctorId);
  
  db.prepare('UPDATE doctors SET rating = ?, review_count = ? WHERE id = ?')
    .run(stats.avg_rating || 0, stats.count, doctorId);
}
