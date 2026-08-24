const express = require('express');
const router = express.Router();
const { authenticate, authorize, optionalAuth } = require('../middleware/auth');
const {
  getAllDoctors,
  getDoctor,
  createDoctor,
  updateDoctor,
  deleteDoctor,
  getSchedule,
  updateSchedule,
  getScheduleDates,
  saveScheduleDate,
  deleteScheduleDate
} = require('../controllers/doctorController');

router.get('/', optionalAuth, getAllDoctors);
router.get('/:id', getDoctor);
router.post('/', authenticate, authorize('admin'), createDoctor);
router.put('/:id', authenticate, authorize('admin', 'doctor'), updateDoctor);
router.delete('/:id', authenticate, authorize('admin'), deleteDoctor);
router.get('/:id/schedule', getSchedule);
router.put('/:id/schedule', authenticate, authorize('admin', 'secretary', 'doctor'), updateSchedule);
router.get('/:id/schedule-dates', authenticate, authorize('admin', 'secretary', 'doctor'), getScheduleDates);
router.post('/:id/schedule-dates', authenticate, authorize('admin', 'secretary', 'doctor'), saveScheduleDate);
router.delete('/:id/schedule-dates/:date', authenticate, authorize('admin', 'secretary', 'doctor'), deleteScheduleDate);

module.exports = router;
