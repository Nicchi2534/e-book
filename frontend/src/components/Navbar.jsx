import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, User, Sparkles, Menu, X, Search, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/books?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Discover', path: '/books' },
    { name: 'AI Chat', path: '/ai-chat', icon: <Sparkles className="w-4 h-4 mr-1 text-secondary" /> },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <nav className="fixed w-full z-50 glass border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all">
              <BookOpen className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-gradient transition-all">
              NovaRead
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center text-sm font-medium transition-colors hover:text-white ${
                  location.pathname === link.path ? 'text-white' : 'text-slate-400'
                }`}
              >
                {link.icon && link.icon}
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-4 ml-6 pl-6 border-l border-slate-800">
              
              {/* Expandable Search */}
              <div className="relative flex items-center">
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.form
                      initial={{ opacity: 0, width: 0, paddingRight: 0 }}
                      animate={{ opacity: 1, width: 220, paddingRight: 40 }}
                      exit={{ opacity: 0, width: 0, paddingRight: 0 }}
                      onSubmit={handleSearchSubmit}
                      className="absolute right-0 top-1/2 -translate-y-1/2 overflow-hidden"
                    >
                      <input
                        autoFocus
                        type="text"
                        placeholder="Search books..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-darker border border-slate-700 rounded-full py-1.5 pl-4 pr-10 text-sm text-white focus:outline-none focus:border-primary"
                      />
                    </motion.form>
                  )}
                </AnimatePresence>
                <button 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className={`text-slate-400 hover:text-white transition-colors relative z-10 p-1.5 rounded-full ${isSearchOpen ? 'bg-primary/20 text-primary' : ''}`}
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
              
              <Link to="/cart" className="relative text-slate-400 hover:text-white transition-colors flex items-center">
                <ShoppingCart className="w-5 h-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Link>

              <Link to="/login" className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition-all">
                <User className="w-4 h-4" />
                Sign In
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden glass border-b border-slate-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-3 py-2 rounded-md justify-center text-base font-medium ${
                    location.pathname === link.path
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {link.icon && link.icon}
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
