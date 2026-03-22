import React from 'react';
import { BookOpen, Clock, TrendingUp, Award, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import BookCard from '../components/BookCard';
import { dummyBooksArray } from '../data/dummyBooks';

const dummyHistory = [dummyBooksArray[0], dummyBooksArray[1]];

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header Profile */}
      <div className="glass rounded-3xl p-8 border border-slate-700 flex flex-col md:flex-row items-center justify-between mb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="flex gap-6 items-center z-10 w-full mb-6 md:mb-0">
           <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-secondary p-1">
              <img src="https://ui-avatars.com/api/?name=Alex+Doe&background=1e293b&color=fff" alt="Profile" className="w-full h-full rounded-full border-4 border-darker object-cover" />
           </div>
           <div>
              <h1 className="text-3xl font-bold text-white">Alex Doe</h1>
              <p className="text-slate-400">Avid Reader • Joined March 2026</p>
           </div>
        </div>
        
        <div className="flex gap-4 z-10 w-full md:w-auto justify-end">
          <button className="px-4 py-2 glass rounded-xl text-white hover:bg-slate-800 transition-colors border border-slate-700 flex items-center gap-2 text-sm font-medium whitespace-nowrap">
            <Settings className="w-4 h-4" /> Edit Profile
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
         {[
           { label: 'Books Read', value: '42', icon: <BookOpen className="w-6 h-6 text-primary" />, trend: '+3 this month' },
           { label: 'Reading Hours', value: '156h', icon: <Clock className="w-6 h-6 text-secondary" />, trend: 'Top 15%' },
           { label: 'Current Streak', value: '12 Days', icon: <TrendingUp className="w-6 h-6 text-green-500" />, trend: 'Personal best!' },
           { label: 'Achievements', value: '8', icon: <Award className="w-6 h-6 text-yellow-500" />, trend: '2 unlocked recently' },
         ].map((stat, i) => (
           <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="glass p-6 rounded-2xl border border-slate-700"
            >
              <div className="flex justify-between items-start mb-4">
                 <div className="p-3 bg-darker rounded-xl">{stat.icon}</div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-slate-400 font-medium mb-2">{stat.label}</p>
              <p className="text-xs text-slate-500">{stat.trend}</p>
           </motion.div>
         ))}
      </div>

      {/* Continue Reading & History */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-6">Continue Reading</h2>
          <div className="glass rounded-2xl p-6 border border-slate-700 mb-8 flex flex-col sm:flex-row gap-6 items-center">
             <img src={dummyHistory[0].coverImage} alt="Book" className="w-32 rounded-lg shadow-xl" />
             <div className="flex-1 w-full text-center sm:text-left">
                <p className="text-primary text-sm font-semibold mb-1 uppercase tracking-wider">Currently at Chapter 12</p>
                <h3 className="text-2xl font-bold text-white mb-2">{dummyHistory[0].title}</h3>
                <p className="text-slate-400 mb-6">{dummyHistory[0].author}</p>
                
                <div className="w-full bg-slate-800 rounded-full h-2.5 mb-2">
                  <div className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-slate-500 mb-6 font-medium">
                  <span>65% Completed</span>
                  <span>~2h 30m left</span>
                </div>
                
                <button className="px-6 py-2.5 bg-primary hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors w-full sm:w-auto">
                  Resume Reading
                </button>
             </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">Recently Finished</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {dummyHistory.map((book, i) => (
               <BookCard key={book._id} book={book} index={i} />
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div>
           <div className="glass p-6 rounded-2xl border border-slate-700 mb-8 w-full sticky top-24">
              <h3 className="text-lg font-bold text-white mb-6">Favorite Genres</h3>
              <div className="space-y-4">
                 {[
                   { name: 'Thriller', pct: 45, color: 'bg-primary' },
                   { name: 'Sci-Fi', pct: 30, color: 'bg-secondary' },
                   { name: 'Self-Help', pct: 15, color: 'bg-green-500' },
                   { name: 'Biography', pct: 10, color: 'bg-yellow-500' }
                 ].map((g, i) => (
                   <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-300 font-medium">{g.name}</span>
                        <span className="text-slate-400">{g.pct}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5">
                        <div className={`${g.color} h-1.5 rounded-full`} style={{ width: `${g.pct}%` }}></div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
