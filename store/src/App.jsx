import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Filter from './pages/Filter';
import Contact from './pages/Contact';
import Games from './pages/Games';
import Cart from './pages/Cart';
import PaymentPage from './pages/PaymentPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modal from './components/Modal'; // Import the modal component
import RentalGames from './pages/RentalGames';

function App() {
  const [cartItems, setCartItems] = useState([]); // State to manage cart items
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Function to open the modal
  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to add items to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, qty: 1 }];
    });
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    
    <Router>
      <div className="bg-neutral-800 min-h-screen text-white">
        {/* Pass the openModal function to Navbar and clearCart function */}
        <Navbar openModal={openModal} clearCart={clearCart} />

        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filter" element={<Filter addToCart={addToCart} />} /> {/* Pass addToCart to Filter */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/games/:gameName" element={<Games />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} clearCart={clearCart} />} /> {/* Pass clearCart to Cart */}
            <Route path="/checkout" element={<PaymentPage />} />
            <Route path="/rental" element={<RentalGames />} />
            <Route path="/" element={<Home addToCart={addToCart} />} />

          </Routes>

        </div>

        {/* Pass the openModal function to Footer */}
        <Footer openModal={openModal} />

        {/* Render the modal and pass the closeModal function */}
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </Router>
  );
}

export default App;
