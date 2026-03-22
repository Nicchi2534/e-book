import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, BookOpen, Quote } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { dummyBooksArray as dummyBooks } from '../data/dummyBooks';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      
      {/* Ultra-Advanced Hero */}
      {/* Elegant, Classic Hero Section */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0A0F1E]">
        {/* Soft, minimal background glows */}
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50 mix-blend-screen" />
           <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px] opacity-40 mix-blend-screen" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            
            {/* Left Content / Typography */}
            <div className="flex-1 text-center lg:text-left z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="block text-primary font-semibold tracking-wider uppercase mb-4 text-sm px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 inline-block">
                        Your Digital Library
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                        Discover Your <br className="hidden md:block"/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">
                            Next Great Read
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                        Access millions of curated eBooks instantly. Immerse yourself in any universe, from thrilling mysteries to insightful biographies, completely tailored to you.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
                        <Link to="/books" className="px-8 py-3.5 bg-primary hover:bg-indigo-600 text-white rounded-full font-medium text-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/25 w-full sm:w-auto">
                            Start Reading <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link to="/ai-chat" className="px-8 py-3.5 bg-slate-800 text-white hover:bg-slate-700 rounded-full font-medium text-lg transition-colors flex items-center justify-center gap-2 border border-slate-700 w-full sm:w-auto">
                            <Sparkles className="w-5 h-5 text-secondary" /> AI Recommendations
                        </Link>
                    </div>
                    
                    <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-400">
                        <div className="flex -space-x-2">
                           {[1,2,3,4].map(i => (
                             <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-8 h-8 rounded-full border-2 border-[#0A0F1E] object-cover" />
                           ))}
                        </div>
                        <p>Over <strong className="text-white">100,000+</strong> active readers</p>
                    </div>
                </motion.div>
            </div>

            {/* Right Content / Elegant Book Fan */}
            <div className="flex-1 w-full flex justify-center items-center relative h-[350px] md:h-[500px] mt-10 lg:mt-0 perspective-1000">
                {/* Book 1 (Left Behind) */}
                <motion.div 
                    initial={{ opacity: 0, x: 0, rotate: 0 }}
                    animate={{ opacity: 0.9, x: -90, y: 30, rotate: -12 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="absolute z-10 hidden sm:block"
                >
                    <img src={dummyBooks[1].coverImage} alt="Book 2" className="w-[150px] md:w-[190px] h-auto shadow-2xl rounded object-cover border border-white/10" />
                </motion.div>

                {/* Book 3 (Right Behind) */}
                <motion.div 
                    initial={{ opacity: 0, x: 0, rotate: 0 }}
                    animate={{ opacity: 0.9, x: 90, y: 30, rotate: 12 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="absolute z-10 hidden sm:block"
                >
                    <img src={dummyBooks[2].coverImage} alt="Book 3" className="w-[150px] md:w-[190px] h-auto shadow-2xl rounded object-cover border border-white/10" />
                </motion.div>

                {/* Book 2 (Center Hero) */}
                <motion.div 
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="absolute z-30 cursor-pointer"
                >
                    <img src={dummyBooks[0].coverImage} alt="Featured Book" className="w-[180px] md:w-[240px] h-auto shadow-[0_30px_60px_rgba(0,0,0,0.6)] rounded-md border border-white/20" />
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white text-dark text-xs font-bold py-1 px-3 rounded-full shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                       <BookOpen className="w-3 h-3" /> Featured Collection
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Recommended Section (Simulated AI) */}
      <section className="py-20 bg-darker/50 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <div className="flex items-center gap-2 text-secondary mb-2 font-medium">
                <Sparkles className="w-4 h-4" /> Recommended For You
              </div>
              <h2 className="text-3xl font-bold text-white">Curated by AI</h2>
            </div>
            <Link to="/books" className="text-primary hover:text-indigo-400 font-medium flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dummyBooks.map((book, index) => (
              <BookCard key={book._id} book={book} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories / Genres */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-bold text-white mb-12">Browse by Category</h2>
           <div className="flex flex-wrap justify-center gap-4">
              {['Fiction', 'Sci-Fi', 'Romance', 'Thriller', 'Technology', 'Self-Help', 'Business', 'Biography'].map((genre, i) => (
                <motion.button 
                  key={genre}
                  onClick={() => navigate(`/books?category=${genre}`)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-full glass border border-slate-700/50 text-slate-300 hover:text-white hover:border-primary/50 transition-colors cursor-pointer"
                >
                  {genre}
                </motion.button>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
