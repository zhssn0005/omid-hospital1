const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');
const {
  getDashboardStats,
  getAppointmentStats
} = require('../controllers/statsController');

router.get('/dashboard', authenticate, authorize('admin'), getDashboardStats);
router.get('/appointments', authenticate, authorize('admin'), getAppointmentStats);

module.exports = router;
