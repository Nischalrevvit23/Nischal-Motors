import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import BikeDetails from './pages/BikeDetails';
import CartDrawer from './components/CartDrawer';
import LoginModal from './components/LoginModal';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const addToCart = (bike) => {
    setCart([...cart, bike]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-dark selection:bg-accent-blue selection:text-black">
        <Navbar
          cartCount={cart.length}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenLogin={() => setIsLoginOpen(true)}
        />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/listings" element={<Listings addToCart={addToCart} />} />
            <Route path="/bike/:id" element={<BikeDetails addToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cart={cart} onRemove={removeFromCart} />} />
            <Route path="/checkout" element={<CheckoutPage cart={cart} onClearCart={clearCart} />} />
          </Routes>
        </main>

        <Footer />

        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cart}
          onRemove={removeFromCart}
        />

        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;
