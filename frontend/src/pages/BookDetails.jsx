import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Clock, BookOpen, Share2, Heart, Download, ShoppingCart, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { dummyBooksDict as dummyBooks } from '../data/dummyBooks';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();
  const book = dummyBooks[id] || dummyBooks['1'];

  const inCart = cartItems.some(item => item._id === book._id);

  const handleBuyNow = () => {
    addToCart(book);
    navigate('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Left Col - Image & Actions */}
        <div className="md:w-1/3 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-sm rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700/50 mb-8 relative group"
          >
            <img src={book.coverImage} alt={book.title} className="w-full aspect-[2/3] object-cover" />
            <Link to={`/read/${book._id}`} className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm z-20">
                <button className="bg-white/20 hover:bg-white/30 p-4 rounded-full backdrop-blur-md transition-colors text-white">
                  <BookOpen className="w-8 h-8" />
                </button>
            </Link>
          </motion.div>
          
          <div className="flex flex-col w-full gap-3 max-w-sm">
            {book.price === 0 ? (
               <Link to={`/read/${book._id}`} className="w-full bg-primary hover:bg-indigo-600 text-white py-3 rounded-xl font-bold flex justify-center items-center gap-2 transition-all shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                 <BookOpen className="w-5 h-5" /> Read For Free
               </Link>
            ) : (
               <>
                 <Link to={`/read/${book._id}`} className="w-full bg-primary hover:bg-indigo-600 text-white py-3 rounded-xl font-bold flex justify-center items-center gap-2 transition-all shadow-[0_0_15px_rgba(99,102,241,0.4)] mb-1">
                   <BookOpen className="w-5 h-5" /> Read Now
                 </Link>
                 <button onClick={handleBuyNow} className="w-full bg-secondary hover:bg-pink-600 text-white py-3 rounded-xl font-bold flex justify-center items-center gap-2 transition-all shadow-[0_0_15px_rgba(236,72,153,0.4)]">
                   <CreditCard className="w-5 h-5" /> Buy Now - ${book.price}
                 </button>
                 <button 
                   onClick={() => addToCart(book)}
                   disabled={inCart}
                   className={`w-full py-3 rounded-xl font-bold flex justify-center items-center gap-2 transition-all border ${inCart ? 'bg-slate-800 text-slate-500 border-slate-700' : 'glass text-slate-200 hover:bg-slate-800 border-slate-700'}`}
                 >
                   <ShoppingCart className="w-5 h-5" /> {inCart ? 'In Cart' : 'Add to Cart'}
                 </button>
               </>
            )}
            
            <div className="flex gap-4 mt-2">
              <button className="flex-1 px-4 py-3 glass rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700 flex justify-center">
                <Heart className="w-5 h-5" />
              </button>
              <button className="flex-1 px-4 py-3 glass rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700 flex justify-center">
                 <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Col - Info */}
        <div className="md:w-2/3">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 glass rounded-full text-xs font-semibold text-primary uppercase tracking-wider border border-primary/20">
                {book.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-slate-400">
                 <Clock className="w-4 h-4" /> {(book.views).toLocaleString()} reads
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">{book.title}</h1>
            <p className="text-xl text-slate-400 mb-6">by <span className="text-slate-200 font-medium hover:text-primary cursor-pointer transition-colors">{book.author}</span></p>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(book.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-slate-600'}`} />
                ))}
              </div>
              <span className="text-white font-bold">{book.rating}</span>
              <span className="text-slate-500 text-sm">({book.reviews} reviews)</span>
            </div>

            <div className="glass rounded-2xl p-6 border border-slate-700 mb-8">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-slate-700">
                  <div className="text-center px-4">
                     <p className="text-slate-500 text-sm mb-1">Price</p>
                     <p className="text-white font-bold">{book.price === 0 ? 'Free' : `$${book.price}`}</p>
                  </div>
                  <div className="text-center px-4">
                     <p className="text-slate-500 text-sm mb-1">Pages</p>
                     <p className="text-white font-bold">{book.pages}</p>
                  </div>
                  <div className="text-center px-4">
                     <p className="text-slate-500 text-sm mb-1">Published</p>
                     <p className="text-white font-bold">{book.published}</p>
                  </div>
                  <div className="text-center px-4 flex justify-center items-center">
                      <button className="text-primary hover:text-indigo-400 font-medium flex items-center gap-1 text-sm">
                        <Download className="w-4 h-4"/> Download
                      </button>
                  </div>
               </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Synopsis</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                {book.description}
              </p>
            </div>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
