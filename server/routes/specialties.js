const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');
const {
  getAllSpecialties,
  getSpecialty,
  createSpecialty,
  updateSpecialty,
  deleteSpecialty
} = require('../controllers/specialtyController');

router.get('/', getAllSpecialties);
router.get('/:id', getSpecialty);
router.post('/', authenticate, authorize('admin'), createSpecialty);
router.put('/:id', authenticate, authorize('admin'), updateSpecialty);
router.delete('/:id', authenticate, authorize('admin'), deleteSpecialty);

module.exports = router;
