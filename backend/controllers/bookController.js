const Book = require('../models/Book');
const User = require('../models/User');

// @desc    Fetch all books
// @route   GET /api/books
// @access  Public
exports.getBooks = async (req, res) => {
  try {
    const keyword = req.query.keyword
      ? {
          title: {
            $regex: req.query.keyword,
            $options: 'i',
          },
        }
      : {};

    const category = req.query.category ? { category: req.query.category } : {};

    const books = await Book.find({ ...keyword, ...category }).sort({ createdAt: -1 });

    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Fetch single book
// @route   GET /api/books/:id
// @access  Public
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a book
// @route   POST /api/books
// @access  Private/Admin
exports.createBook = async (req, res) => {
  try {
    const { title, author, description, category, coverImage, fileUrl, price, isTrending } = req.body;

    const book = new Book({
      title,
      author,
      description,
      category,
      coverImage,
      fileUrl,
      price,
      isTrending,
    });

    const createdBook = await book.save();
    res.status(201).json(createdBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Track reading history
// @route   POST /api/books/:id/read
// @access  Private
exports.trackReading = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const book = await Book.findById(req.params.id);

    if (!user || !book) {
      return res.status(404).json({ message: 'User or Book not found' });
    }

    // Check if book already in history
    const existingHistory = user.readingHistory.find(
      (history) => history.bookId.toString() === book._id.toString()
    );

    if (existingHistory) {
      existingHistory.readAt = Date.now();
      if(req.body.timeSpent) {
         existingHistory.timeSpent += req.body.timeSpent;
      }
    } else {
      user.readingHistory.unshift({
        bookId: book._id,
        timeSpent: req.body.timeSpent || 0
      });
    }

    // Increment book views
    book.views += 1;
    await book.save();

    await user.save();
    res.json({ message: 'Reading tracked successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
