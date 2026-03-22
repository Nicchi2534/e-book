import b1 from '../assets/books/1.jpg';
import b2 from '../assets/books/2.jpg';
import b3 from '../assets/books/3.jpg';
import b4 from '../assets/books/4.jpg';
import b5 from '../assets/books/5.jpg';
import b7 from '../assets/books/7.jpg';
import b9 from '../assets/books/9.jpg';
import b10 from '../assets/books/10.jpg';
import b11 from '../assets/books/11.jpg';
import b12 from '../assets/books/12.jpg';
import b201 from '../assets/books/201.jpg';
import b401 from '../assets/books/401.jpg';
import b1001 from '../assets/books/1001.jpg';
import b1002 from '../assets/books/1002.jpg';

export const dummyBooksArray = [
  // THRILLER
  { 
    _id: '1', title: 'The Silent Patient', author: 'Alex Michaelides', category: 'Thriller', rating: 4.5, reviews: 1245, views: 15400, price: 9.99, pages: 336, published: '2019', isTrending: true, 
    coverImage: b1, 
    description: "Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer... One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word." 
  },

  // SELF-HELP
  { 
    _id: '2', title: 'Atomic Habits', author: 'James Clear', category: 'Self-Help', rating: 4.9, reviews: 3200, views: 120500, price: 14.99, pages: 320, published: '2018', isTrending: true, 
    coverImage: b2, 
    description: "No matter your goals, Atomic Habits offers a proven framework for improving every day. James Clear reveals practical strategies..." 
  },
  { 
    _id: '201', title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson', category: 'Self-Help', rating: 4.6, reviews: 29000, views: 340000, price: 12.99, pages: 224, published: '2016', isTrending: true, 
    coverImage: b201, 
    description: "In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be 'positive' all the time so that we can truly become better, happier people." 
  },

  // SCI-FI
  { 
    _id: '3', title: 'Dune', author: 'Frank Herbert', category: 'Sci-Fi', rating: 4.8, reviews: 2100, views: 89000, price: 0, pages: 412, published: '1965', isTrending: false, 
    coverImage: b3, 
    description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world..." 
  },

  // TECHNOLOGY
  { 
    _id: '4', title: 'Clean Code', author: 'Robert C. Martin', category: 'Technology', rating: 4.7, reviews: 950, views: 54000, price: 19.99, pages: 464, published: '2008', isTrending: false, 
    coverImage: b4, 
    description: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees..." 
  },
  { 
    _id: '401', title: 'The Pragmatic Programmer', author: 'David Thomas', category: 'Technology', rating: 4.8, reviews: 12000, views: 95000, price: 29.99, pages: 352, published: '1999', isTrending: true, 
    coverImage: b401, 
    description: "The Pragmatic Programmer is one of those rare tech books you'll read, re-read, and read again over the years. It examines the core processes of software development." 
  },

  // FICTION
  { 
    _id: '5', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', rating: 4.6, reviews: 5400, views: 245000, price: 6.99, pages: 180, published: '1925', isTrending: true, 
    coverImage: b5, 
    description: "The novel chronicles an era that Fitzgerald himself dubbed the Jazz Age. Gatsby's pursuit of wealth and his obsession with Daisy Buchanan..." 
  },
  { 
    _id: '7', title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Fiction', rating: 4.9, reviews: 8100, views: 405000, price: 8.99, pages: 281, published: '1960', isTrending: false, 
    coverImage: b7, 
    description: "Compassionate, dramatic, and deeply moving, To Kill A Mockingbird takes readers to the roots of human behavior—to innocence and experience, kindness and cruelty..." 
  },
  { 
    _id: '11', title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', category: 'Fiction', rating: 4.9, reviews: 15400, views: 560000, price: 10.99, pages: 309, published: '1997', isTrending: true, 
    coverImage: b11, 
    description: "Harry Potter has never played a sport while flying on a broomstick. He's never worn a cloak of invisibility, befriended a giant, or helped hatch a dragon..." 
  },
  { 
    _id: '12', title: 'The Alchemist', author: 'Paulo Coelho', category: 'Fiction', rating: 4.7, reviews: 8500, views: 230000, price: 8.99, pages: 208, published: '1988', isTrending: false, 
    coverImage: b12, 
    description: "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago..." 
  },

  // BUSINESS
  { 
    _id: '9', title: 'The Lean Startup', author: 'Eric Ries', category: 'Business', rating: 4.6, reviews: 2900, views: 76000, price: 12.99, pages: 336, published: '2011', isTrending: false, 
    coverImage: b9, 
    description: "Most startups fail. But many of those failures are preventable. The Lean Startup is a new approach being adopted across the globe..." 
  },

  // BIOGRAPHY
  { 
    _id: '10', title: 'Steve Jobs', author: 'Walter Isaacson', category: 'Biography', rating: 4.8, reviews: 4100, views: 120000, price: 15.99, pages: 630, published: '2011', isTrending: false, 
    coverImage: b10, 
    description: "Based on more than forty interviews with Jobs conducted over two years—as well as interviews with more than a hundred family members, friends..." 
  },
  { 
    _id: '1001', title: 'Becoming', author: 'Michelle Obama', category: 'Biography', rating: 4.9, reviews: 65000, views: 800000, price: 18.99, pages: 426, published: '2018', isTrending: true, 
    coverImage: b1001, 
    description: "In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era." 
  },
  { 
    _id: '1002', title: 'Educated', author: 'Tara Westover', category: 'Biography', rating: 4.8, reviews: 42000, views: 650000, price: 11.99, pages: 334, published: '2018', isTrending: false, 
    coverImage: b1002, 
    description: "Born to survivalists in the mountains of Idaho, Tara Westover was seventeen the first time she set foot in a classroom." 
  }
];

export const dummyBooksDict = dummyBooksArray.reduce((acc, book) => {
  acc[book._id] = book;
  return acc;
}, {});
