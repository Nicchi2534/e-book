import React, { useState } from 'react';
import { Send, Sparkles, User, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const AIChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hello! I'm your AI reading assistant. Looking for your next great read? Let me know what genres, themes, or books you enjoy, and I'll find the perfect match.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let aiResponseText = "Based on your interest, I'd highly recommend exploring 'The Silent Patient' if you enjoy psychological thrillers, or 'Atomic Habits' for personal development. Would you like to hear about their plots?";
      
      if (userMsg.text.toLowerCase().includes('sci-fi') || userMsg.text.toLowerCase().includes('space')) {
        aiResponseText = "If you're looking for Sci-Fi, 'Dune' by Frank Herbert is an absolute masterpiece. We also just added a few contemporary Sci-Fi novellas to the Trending section!";
      }

      const aiRes = {
        id: Date.now() + 1,
        sender: 'ai',
        text: aiResponseText,
      };
      setMessages((prev) => [...prev, aiRes]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 h-[calc(100vh-140px)] flex flex-col">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2">
          <Sparkles className="w-8 h-8 text-secondary" />
          AI Reading Assistant
        </h1>
        <p className="text-slate-400">Your personalized recommender powered by advanced AI.</p>
      </div>

      <div className="flex-1 glass rounded-2xl border border-slate-700 flex flex-col overflow-hidden shadow-2xl relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth z-10">
          {messages.map((msg) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={msg.id}
              className={`flex gap-4 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  msg.sender === 'user' ? 'bg-primary text-white' : 'bg-secondary text-white'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
              </div>
              <div
                className={`max-w-[80%] p-4 rounded-2xl ${
                  msg.sender === 'user'
                    ? 'bg-primary text-white rounded-tr-none'
                    : 'glass text-slate-200 border border-slate-700/50 rounded-tl-none'
                }`}
              >
                <p className="leading-relaxed text-sm md:text-base">{msg.text}</p>
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
               <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                 <Bot className="w-5 h-5 text-white" />
               </div>
               <div className="glass p-4 rounded-2xl rounded-tl-none border border-slate-700/50 flex space-x-2 items-center">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
               </div>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-darker/50 border-t border-slate-800 z-10">
          <form onSubmit={handleSend} className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask for 'Sci-fi books like Dune' or 'Books about habits'..."
              className="w-full bg-slate-800/80 border border-slate-700 text-white rounded-full py-4 pl-6 pr-16 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary backdrop-blur-md transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="absolute right-2 p-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
