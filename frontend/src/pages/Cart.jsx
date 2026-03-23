import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ArrowRight, BookOpen, CreditCard, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
  const { cartItems, removeFromCart, getCartTotal, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate API call for checkout
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderSuccess(true);
      clearCart();
    }, 2000);
  };

  if (orderSuccess) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center flex flex-col items-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6"
        >
          <ShieldCheck className="w-12 h-12" />
        </motion.div>
        <h1 className="text-4xl font-bold text-white mb-4">Payment Successful!</h1>
        <p className="text-slate-400 text-lg mb-8">
          Thank you for your purchase. Your eBooks have been added to your dashboard.
        </p>
        <button 
          onClick={() => navigate('/dashboard')}
          className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-indigo-600 transition-colors shadow-[0_0_20px_rgba(99,102,241,0.4)]"
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20 glass rounded-2xl border border-slate-700">
          <BookOpen className="w-16 h-16 text-slate-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-300 mb-2">Your cart is empty</h2>
          <p className="text-slate-500 mb-8">Looks like you haven't added any books yet.</p>
          <Link to="/books" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-indigo-600 transition-colors">
            Discover Books
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Cart Items */}
          <div className="lg:w-2/3 space-y-4">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="glass flex items-center gap-6 p-4 rounded-2xl border border-slate-700 relative"
                >
                  <img src={item.coverImage} alt={item.title} className="w-24 aspect-[2/3] object-cover rounded-lg shadow-lg" />
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                       <div>
                         <span className="text-xs text-primary font-bold uppercase tracking-widest">{item.category}</span>
                         <h3 className="text-xl font-bold text-white mb-1 line-clamp-1">{item.title}</h3>
                         <p className="text-slate-400">{item.author}</p>
                       </div>
                       <p className="text-xl font-bold text-white">₹{item.price}</p>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item._id)}
                      className="mt-4 flex items-center gap-1 text-sm text-red-400 hover:text-red-300 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" /> Remove
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="glass p-6 rounded-2xl border border-slate-700 sticky top-24">
              <h2 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-slate-300">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>₹{getCartTotal()}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Tax</span>
                  <span>₹0</span>
                </div>
              </div>
              
              <div className="border-t border-slate-700 pt-4 mb-8">
                <div className="flex justify-between text-xl font-bold text-white">
                  <span>Total</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">₹{getCartTotal()}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-indigo-600 transition-colors disabled:opacity-70 flex justify-center items-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
              >
                {isCheckingOut ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>Checkout <ArrowRight className="w-5 h-5" /></>
                )}
              </button>
              
              <p className="text-xs text-slate-500 text-center flex items-center justify-center gap-1 mt-4">
                <ShieldCheck className="w-4 h-4" /> Secure SSL Checkout
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
