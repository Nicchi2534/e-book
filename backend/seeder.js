const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('./models/Book');
const User = require('./models/User');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

const sampleBooks = [
  // THRILLER
  { 
    title: 'The Silent Patient', author: 'Alex Michaelides', category: 'Thriller', rating: 4.5, numReviews: 1245, views: 15400, price: 799, isTrending: true, 
    coverImage: '/books/1.jpg', 
    description: "Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer... One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word." 
  },

  // SELF-HELP
  { 
    title: 'Atomic Habits', author: 'James Clear', category: 'Self-Help', rating: 4.9, numReviews: 3200, views: 120500, price: 1199, isTrending: true, 
    coverImage: '/books/2.jpg', 
    description: "No matter your goals, Atomic Habits offers a proven framework for improving every day. James Clear reveals practical strategies..." 
  },
  { 
    title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson', category: 'Self-Help', rating: 4.6, numReviews: 29000, views: 340000, price: 999, isTrending: true, 
    coverImage: '/books/201.jpg', 
    description: "In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be 'positive' all the time so that we can truly become better, happier people." 
  },

  // SCI-FI
  { 
    title: 'Dune', author: 'Frank Herbert', category: 'Sci-Fi', rating: 4.8, numReviews: 2100, views: 89000, price: 0, isTrending: false, 
    coverImage: '/books/3.jpg', 
    description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world..." 
  },

  // TECHNOLOGY
  { 
    title: 'Clean Code', author: 'Robert C. Martin', category: 'Technology', rating: 4.7, numReviews: 950, views: 54000, price: 1599, isTrending: false, 
    coverImage: '/books/4.jpg', 
    description: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees..." 
  },
  { 
    title: 'The Pragmatic Programmer', author: 'David Thomas', category: 'Technology', rating: 4.8, numReviews: 12000, views: 95000, price: 2399, isTrending: true, 
    coverImage: '/books/401.jpg', 
    description: "The Pragmatic Programmer is one of those rare tech books you'll read, re-read, and read again over the years. It examines the core processes of software development." 
  },

  // FICTION
  { 
    title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', rating: 4.6, numReviews: 5400, views: 245000, price: 549, isTrending: true, 
    coverImage: '/books/5.jpg', 
    description: "The novel chronicles an era that Fitzgerald himself dubbed the Jazz Age. Gatsby's pursuit of wealth and his obsession with Daisy Buchanan..." 
  },
  { 
    title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Fiction', rating: 4.9, numReviews: 8100, views: 405000, price: 699, isTrending: false, 
    coverImage: '/books/7.jpg', 
    description: "Compassionate, dramatic, and deeply moving, To Kill A Mockingbird takes readers to the roots of human behavior—to innocence and experience, kindness and cruelty..." 
  },
  { 
    title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', category: 'Fiction', rating: 4.9, numReviews: 15400, views: 560000, price: 899, isTrending: true, 
    coverImage: '/books/11.jpg', 
    description: "Harry Potter has never played a sport while flying on a broomstick. He's never worn a cloak of invisibility, befriended a giant, or helped hatch a dragon..." 
  },
  { 
    title: 'The Alchemist', author: 'Paulo Coelho', category: 'Fiction', rating: 4.7, numReviews: 8500, views: 230000, price: 699, isTrending: false, 
    coverImage: '/books/12.jpg', 
    description: "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago..." 
  },

  // BUSINESS
  { 
    title: 'The Lean Startup', author: 'Eric Ries', category: 'Business', rating: 4.6, numReviews: 2900, views: 76000, price: 999, isTrending: false, 
    coverImage: '/books/9.jpg', 
    description: "Most startups fail. But many of those failures are preventable. The Lean Startup is a new approach being adopted across the globe..." 
  },

  // BIOGRAPHY
  { 
    title: 'Steve Jobs', author: 'Walter Isaacson', category: 'Biography', rating: 4.8, numReviews: 4100, views: 120000, price: 1299, isTrending: false, 
    coverImage: '/books/10.jpg', 
    description: "Based on more than forty interviews with Jobs conducted over two years—as well as interviews with more than a hundred family members, friends..." 
  },
  { 
    title: 'Becoming', author: 'Michelle Obama', category: 'Biography', rating: 4.9, numReviews: 65000, views: 800000, price: 1499, isTrending: true, 
    coverImage: '/books/1001.jpg', 
    description: "In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era." 
  },
  { 
    title: 'Educated', author: 'Tara Westover', category: 'Biography', rating: 4.8, numReviews: 42000, views: 650000, price: 949, isTrending: false, 
    coverImage: '/books/1002.jpg', 
    description: "Born to survivalists in the mountains of Idaho, Tara Westover was seventeen the first time she set foot in a classroom." 
  }
];

const importData = async () => {
  try {
    await Book.deleteMany(); // Clear existing books
    const createdBooks = await Book.insertMany(sampleBooks);
    console.log(`Data Imported! ${createdBooks.length} books added.`);
    process.exit();
  } catch (error) {
    console.error(`Error with data import: ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Book.deleteMany();
    await User.deleteMany();
    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error with data destruction: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
