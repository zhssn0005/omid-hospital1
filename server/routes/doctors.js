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
  updateSchedule
} = require('../controllers/doctorController');

router.get('/', optionalAuth, getAllDoctors);
router.get('/:id', getDoctor);
router.post('/', authenticate, authorize('admin'), createDoctor);
router.put('/:id', authenticate, authorize('admin', 'doctor'), updateDoctor);
router.delete('/:id', authenticate, authorize('admin'), deleteDoctor);
router.get('/:id/schedule', getSchedule);
router.put('/:id/schedule', authenticate, authorize('admin', 'doctor'), updateSchedule);

module.exports = router;
