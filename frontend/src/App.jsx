import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookList from './pages/BookList';
import BookDetails from './pages/BookDetails';
import Dashboard from './pages/Dashboard';
import AIChat from './pages/AIChat';
import Cart from './pages/Cart';
import Reader from './pages/Reader';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-dark w-full">
          <Navbar />
          <main className="flex-grow pt-20 pb-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<BookList />} />
              <Route path="/book/:id" element={<BookDetails />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/ai-chat" element={<AIChat />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/read/:id" element={<Reader />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
