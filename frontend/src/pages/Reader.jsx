import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ZoomIn, ZoomOut, Bookmark, Settings, List, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { dummyBooksDict as dummyBooks } from '../data/dummyBooks';

// Mock Reader
const Reader = () => {
  const { id } = useParams();
  const book = dummyBooks[id] || { _id: 'default', title: 'Loading eBook...', author: 'Unknown' };
  
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 336;
  const [showMenu, setShowMenu] = useState(false);
  
  const nextPage = () => setCurrentPage(p => Math.min(p + 1, totalPages));
  const prevPage = () => setCurrentPage(p => Math.max(p - 1, 1));

  return (
    <div className="fixed inset-0 z-[100] bg-[#1a1c23] flex flex-col font-serif">
      
      {/* Top Navbar */}
      <div className="h-16 bg-[#252831] border-b border-slate-700/50 flex items-center justify-between px-4 sm:px-6 shrink-0">
        <div className="flex items-center gap-4">
          <Link to={`/book/${id}`} className="text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className="hidden sm:block">
            <h1 className="text-white font-semibold line-clamp-1">{book.title}</h1>
            <p className="text-slate-400 text-xs">{book.author}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 text-slate-400">
          <button className="hover:text-white transition-colors"><List className="w-5 h-5" /></button>
          <button className="hover:text-white transition-colors"><Bookmark className="w-5 h-5" /></button>
          <div className="w-px h-6 bg-slate-700 hidden sm:block"></div>
          <button className="hover:text-white transition-colors hidden sm:block"><ZoomOut className="w-5 h-5" /></button>
          <button className="hover:text-white transition-colors hidden sm:block"><ZoomIn className="w-5 h-5" /></button>
          <button className="hover:text-white transition-colors" onClick={() => setShowMenu(!showMenu)}>
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Reader Content Area (Mock) */}
      <div className="flex-1 relative overflow-hidden flex justify-center items-center bg-[#1a1c23]">
        
        {/* Mock Page Content */}
        <div className="w-full h-full max-w-4xl bg-white text-black p-8 sm:p-16 md:p-24 overflow-y-auto shadow-2xl relative transition-all duration-300">
          <div className="max-w-2xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed">
            <h2 className="text-2xl font-bold mb-8 font-sans text-center">Chapter {Math.ceil(currentPage / 15)}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>
            <p>
              (Page {currentPage} content simulation for dummy book: <strong>{book.title}</strong>). In a real application, this view would embed a PDF.js viewer or an EPUB.js iframe to render the actual book file loaded from the database's `fileUrl`.
            </p>
          </div>
        </div>

        {/* Page Navigation Zones */}
        <div className="absolute inset-y-0 left-0 w-1/6 cursor-pointer hover:bg-black/10 transition-colors flex items-center justify-start p-4 group" onClick={prevPage}>
           <div className="w-12 h-12 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
             <ChevronLeft className="w-8 h-8" />
           </div>
        </div>
        <div className="absolute inset-y-0 right-0 w-1/6 cursor-pointer hover:bg-black/10 transition-colors flex items-center justify-end p-4 group" onClick={nextPage}>
           <div className="w-12 h-12 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
             <ChevronRight className="w-8 h-8" />
           </div>
        </div>

      </div>

      {/* Bottom Progress Bar */}
      <div className="h-12 bg-[#252831] border-t border-slate-700/50 flex items-center justify-between px-6 shrink-0 text-slate-400 text-sm">
        <span>{Math.round((currentPage/totalPages)*100)}%</span>
        <div className="flex-1 mx-6 relative flex items-center">
            <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
               <div className="h-full bg-primary" style={{ width: `${(currentPage/totalPages)*100}%` }}></div>
            </div>
            <div className="absolute h-4 w-4 bg-white rounded-full shadow cursor-grab" style={{ left: `calc(${(currentPage/totalPages)*100}% - 8px)` }}></div>
        </div>
        <span>Page {currentPage} of {totalPages}</span>
      </div>

      {/* Settings Panel Overlay */}
      <AnimatePresence>
        {showMenu && (
           <motion.div 
             initial={{ opacity: 0, scale: 0.95, y: -10 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             exit={{ opacity: 0, scale: 0.95, y: -10 }}
             className="absolute top-20 right-6 w-72 glass border border-slate-700 rounded-2xl p-6 shadow-2xl z-[150]"
           >
              <h3 className="text-white font-semibold mb-4 text-lg border-b border-slate-700 pb-2">Appearance</h3>
              
              <div className="mb-4">
                <p className="text-slate-400 text-sm mb-2">Theme</p>
                <div className="flex gap-2">
                   <button className="flex-1 h-10 rounded-lg bg-white border-2 border-primary"></button>
                   <button className="flex-1 h-10 rounded-lg bg-[#f4ecd8] border-2 border-transparent"></button>
                   <button className="flex-1 h-10 rounded-lg bg-[#1a1c23] border-2 border-transparent"></button>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-slate-400 text-sm mb-2">Font Size</p>
                <div className="flex items-center gap-4 bg-darker rounded-lg p-1">
                   <button className="flex-1 py-1 text-center hover:bg-slate-700 rounded text-slate-300">A-</button>
                   <button className="flex-1 py-1 text-center bg-slate-700 rounded text-white font-bold">A</button>
                   <button className="flex-1 py-1 text-center hover:bg-slate-700 rounded text-slate-300">A+</button>
                </div>
              </div>
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Reader;
