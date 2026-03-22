import React from 'react';
import { BookOpen, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-darker mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="bg-gradient-to-br from-primary to-secondary p-1.5 rounded-lg">
                <BookOpen className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                NovaRead
              </span>
            </Link>
            <p className="text-slate-400 mt-4 max-w-sm">
              Discover your next favorite book with our AI-powered recommendation engine. 
              Read, track, and explore thousands of premium eBooks.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              {['Home', 'Discover Books', 'AI Recommendations', 'Trending Now'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              © {new Date().getFullYear()} NovaRead. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
