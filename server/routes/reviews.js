const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');
const {
  getAllReviews,
  createReview,
  approveReview,
  deleteReview
} = require('../controllers/reviewController');

router.get('/', getAllReviews);
router.post('/', authenticate, createReview);
router.put('/:id/approve', authenticate, authorize('admin'), approveReview);
router.delete('/:id', authenticate, authorize('admin'), deleteReview);

module.exports = router;
