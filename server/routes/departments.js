const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');
const {
  getAllDepartments,
  getDepartment,
  createDepartment,
  updateDepartment,
  deleteDepartment
} = require('../controllers/departmentController');

router.get('/', getAllDepartments);
router.get('/:id', getDepartment);
router.post('/', authenticate, authorize('admin'), createDepartment);
router.put('/:id', authenticate, authorize('admin'), updateDepartment);
router.delete('/:id', authenticate, authorize('admin'), deleteDepartment);

module.exports = router;
