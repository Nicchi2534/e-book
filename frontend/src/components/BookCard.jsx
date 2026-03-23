import React from 'react';
import { Star, BookOpen, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BookCard = ({ book, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative rounded-2xl glass overflow-hidden hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-300 flex flex-col items-center p-4 h-full cursor-pointer hover:-translate-y-2 border border-slate-700/50"
    >
      <Link to={`/book/${book?._id || '1'}`} className="block w-full h-full relative z-10">
        
        {/* Book Cover Container */}
        <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden mb-4 shadow-2xl mx-auto max-w-[200px]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <img 
            src={book?.coverImage || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop'} 
            alt={book?.title || 'Book Cover'}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Hover Actions */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 flex justify-center gap-2">
            <button className="bg-primary/90 hover:bg-primary text-white p-2 rounded-full backdrop-blur-md">
              <BookOpen className="w-5 h-5" />
            </button>
          </div>

          {/* Badge */}
          {book?.isTrending && (
            <div className="absolute top-2 right-2 z-20 bg-secondary/90 backdrop-blur-md text-white px-2 py-1 rounded text-xs font-bold uppercase tracking-wider shadow-lg">
              Hot
            </div>
          )}
        </div>

        {/* Info */}
        <div className="w-full space-y-1 mt-auto text-left flex-1 flex flex-col justify-end">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-primary font-semibold">
              {book?.category || 'Fiction'}
            </span>
            <div className="flex items-center gap-1 text-slate-300">
              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              <span className="text-xs font-medium">{book?.rating || '4.8'}</span>
            </div>
          </div>
          <h3 className="font-bold text-white text-lg line-clamp-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-colors">
            {book?.title || 'The Art of Design'}
          </h3>
          <p className="text-sm text-slate-400 line-clamp-1">
            {book?.author || 'Alex Mitchell'}
          </p>
          <div className="flex items-center justify-between mt-3 text-slate-500 pt-3 border-t border-slate-700/50">
             <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span className="text-xs">{(book?.views || 1234).toLocaleString()} reads</span>
             </div>
             <span className="text-sm font-semibold text-white">
                {book?.price === 0 ? 'Free' : `₹${book?.price || '999'}`}
             </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BookCard;
