const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');
const { getStaff, createSecretary, updateStaffStatus } = require('../controllers/staffController');

router.use(authenticate, authorize('admin'));
router.get('/', getStaff);
router.post('/secretaries', createSecretary);
router.put('/:id/status', updateStaffStatus);

module.exports = router;
