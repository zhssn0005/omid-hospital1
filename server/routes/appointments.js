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
router.get('/:id', authenticate, getAppointment);
router.post('/', optionalAuth, createAppointment);
router.put('/:id', authenticate, updateAppointment);
router.delete('/:id', authenticate, cancelAppointment);
router.get('/doctor/:doctorId/available-slots', getAvailableSlots);

module.exports = router;
