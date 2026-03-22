const express = require('express');
const router = express.Router();
const {
  getBooks,
  getBookById,
  createBook,
  trackReading,
} = require('../controllers/bookController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(getBooks).post(protect, admin, createBook);
router.route('/:id').get(getBookById);
router.route('/:id/read').post(protect, trackReading);

module.exports = router;
