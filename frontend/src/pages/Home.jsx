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
      {/* Ultra-Advanced Hero */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-dark">
        {/* Animated Mesh / Gradient Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
           <div className="absolute top-[-10%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-primary/20 blur-[120px] mix-blend-screen animate-blob" />
           <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-secondary/10 blur-[150px] mix-blend-screen animate-blob animation-delay-2000" />
           <div className="absolute top-[20%] right-[20%] w-[40vw] h-[40vw] rounded-full bg-indigo-500/20 blur-[100px] mix-blend-screen animate-blob animation-delay-4000" />
           {/* Grid Pattern overlay */}
           <div className="absolute inset-0 bg-[#ffffff02] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        {/* Huge Background Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden flex justify-center opacity-[0.03]">
            <h1 className="text-[15vw] font-black text-white leading-none tracking-tighter uppercase whitespace-nowrap">
                UNBOUND
            </h1>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-8 pt-10">
            
            {/* Left Content / Typography */}
            <div className="flex-1 text-left">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary uppercase tracking-[0.2em] text-xs font-bold mb-6 backdrop-blur-md">
                        <Sparkles className="w-3.5 h-3.5" /> Next Generation
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.05] mb-6 tracking-tight">
                        Read Without <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Boundaries
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-10 max-w-lg font-light leading-relaxed border-l-2 border-primary pl-4">
                        Step into a dimension of infinite stories. Our neural recommendation engine anticipates your next favorite read with pinpoint accuracy.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <Link to="/books" className="group relative px-8 py-3 bg-white text-dark rounded-full font-bold text-lg hover:text-white border border-white transition-all overflow-hidden flex justify-center items-center gap-2">
                            <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                            <span className="relative z-10 flex items-center gap-2 transition-colors">Explore Library <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link to="/ai-chat" className="px-8 py-3 rounded-full text-white font-bold text-lg hover:text-primary transition-colors flex justify-center items-center gap-2 bg-slate-800/50 backdrop-blur-md border border-slate-700 hover:border-primary/50">
                            <Sparkles className="w-5 h-5" /> Ask AI Finder
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Right Content / Advanced Floating Books Cluster */}
            <div className="flex-1 relative h-[500px] w-full hidden md:block perspective-[1200px]">
                {/* Book 1 (Center Front) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -15, 0], rotateZ: [0, 2, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", opacity: { duration: 1 }, scale: { duration: 1 } }}
                    className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-1/2 z-30"
                >
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-2xl group-hover:bg-primary/50 transition-all duration-700"></div>
                        <img src={dummyBooks[0].coverImage} alt="Book" className="w-[260px] rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.8)] border border-white/20 relative z-10 group-hover:scale-105 transition-transform duration-500" />
                    </div>
                </motion.div>

                {/* Book 2 (Left Back) */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 0.8, x: 0, y: [0, -10, 0], rotateZ: [-10, -8, -10] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1, opacity: { duration: 1 }, x: { duration: 1 } }}
                    className="absolute top-[20%] left-[5%] z-20"
                >
                    <img src={dummyBooks[1].coverImage} alt="Book" className="w-[180px] rounded-2xl shadow-2xl border border-white/10 filter blur-[1px] hover:blur-none hover:z-40 transition-all cursor-pointer" />
                </motion.div>

                {/* Book 3 (Right Back) */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 0.6, x: 0, y: [0, -20, 0], rotateZ: [10, 15, 10] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2, opacity: { duration: 1 }, x: { duration: 1 } }}
                    className="absolute top-[30%] right-[0%] z-10"
                >
                    <img src={dummyBooks[2].coverImage} alt="Book" className="w-[160px] rounded-2xl shadow-2xl border border-white/5 filter blur-[2px] hover:blur-none hover:z-40 transition-all cursor-pointer" />
                </motion.div>
                
                 {/* Floating Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5, opacity: { duration: 0.8 } }}
                    className="absolute bottom-[10%] left-[0%] z-40 bg-darker/60 border border-white/10 px-5 py-3 rounded-2xl flex items-center gap-3 shadow-2xl backdrop-blur-2xl"
                >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-lg">
                        <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-white font-bold text-sm">Infinite Library</p>
                        <p className="text-slate-400 text-xs tracking-wider uppercase mt-0.5">20M+ Titles Available</p>
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
