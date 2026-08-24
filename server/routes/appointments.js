const express = require('express');
const router = express.Router();
const { authenticate, authorize, optionalAuth } = require('../middleware/auth');
const {
  getAllAppointments,
  getAppointment,
  createAppointment,
  updateAppointment,
  cancelAppointment,
  getAvailableSlots
} = require('../controllers/appointmentController');

router.get('/', authenticate, getAllAppointments);
router.get('/doctor/:doctorId/available-slots', getAvailableSlots);
router.post('/', optionalAuth, createAppointment);
router.get('/:id', authenticate, getAppointment);
router.put('/:id', authenticate, updateAppointment);
router.delete('/:id', authenticate, cancelAppointment);

module.exports = router;
