import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import BookCard from '../components/BookCard';
import { dummyBooksArray as dummyBooks } from '../data/dummyBooks';

const BookList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const category = searchParams.get('category') || 'All';

  React.useEffect(() => {
    const q = searchParams.get('q');
    if (q !== null) {
      setSearchTerm(q);
    }
  }, [searchParams]);

  const handleCategoryChange = (cat) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const categories = ['All', 'Fiction', 'Sci-Fi', 'Thriller', 'Self-Help', 'Technology', 'Business', 'Biography'];

  const filteredBooks = dummyBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || book.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Discover Books</h1>
          <p className="text-slate-400">Explore our vast collection of premium eBooks</p>
        </div>

        {/* Search and Filter */}
        <div className="flex w-full md:w-auto gap-4">
          <div className="relative flex-grow md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-500" />
            </div>
            <input
              type="text"
              placeholder="Search by title or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-slate-700 rounded-xl leading-5 bg-darker text-slate-300 placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary sm:text-sm transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-3 rounded-xl glass hover:bg-slate-800 text-slate-300 transition-colors border border-slate-700">
            <SlidersHorizontal className="w-5 h-5" />
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              category === cat
                ? 'bg-primary text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]'
                : 'glass text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results Info */}
      <div className="flex justify-between items-center mb-6 text-slate-400 text-sm">
        <span>Showing {filteredBooks.length} results</span>
        <button className="flex items-center gap-1 hover:text-white transition-colors">
          Sort by: Popularity <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Grid */}
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book, index) => (
            <BookCard key={book._id} book={book} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-slate-500">No books found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default BookList;
