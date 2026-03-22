const Book = require('../models/Book');
const User = require('../models/User');

// @desc    Get AI Recommendations for User
// @route   GET /api/recommend/:userId
// @access  Private
exports.getRecommendations = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('readingHistory.bookId');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // 1. Content-Based Filtering: Books in user's preferred categories
    const preferredCategories = user.preferences;
    let contentBasedBooks = [];
    if (preferredCategories.length > 0) {
      contentBasedBooks = await Book.find({
        category: { $in: preferredCategories },
        _id: { $nin: user.readingHistory.map(h => h.bookId._id) },
      }).limit(5);
    }

    // 2. Collaborative Filtering (Simplified): "Users like you also read"
    // Find users who have read the same books as this user
    const userReadBookIds = user.readingHistory.map(h => h.bookId._id);
    
    let collaborativeBooks = [];
    if (userReadBookIds.length > 0) {
      const similarUsers = await User.find({
        'readingHistory.bookId': { $in: userReadBookIds },
        _id: { $ne: user._id }
      });
      
      const similarUsersReadBookIds = similarUsers.flatMap(u => 
        u.readingHistory.map(h => h.bookId.toString())
      );
      
      // Get unique books that similar users read, but the current user hasn't
      const uniqueRecommendedIds = [...new Set(similarUsersReadBookIds)].filter(
        id => !userReadBookIds.includes(id)
      );

      collaborativeBooks = await Book.find({
        _id: { $in: uniqueRecommendedIds }
      }).limit(5);
    }

    // 3. Trending Algorithm
    const trendingBooks = await Book.find()
      .sort({ views: -1, rating: -1 })
      .limit(5);

    // Combine and process the recommendations logic
    const recommendations = {
      contentBased: contentBasedBooks,
      collaborative: collaborativeBooks,
      trending: trendingBooks,
      personalizedRecs: [...contentBasedBooks, ...collaborativeBooks].slice(0, 10) // Mix
    };

    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
