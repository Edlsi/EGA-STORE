import React from 'react';
import { Link } from 'react-router-dom';
import cart from '@/assets/cart.jpg';

const Cart = ({ cartItems, setCartItems, clearCart }) => {
  const updateQuantity = (id, value) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + value) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-neutral-800 text-white mx-16 my-2 mb-10">
      <h1 className="text-3xl font-semibold mb-6">My Cart</h1>

      {/* Check if the cart is empty */}
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <img className="w-48" src={cart} alt="Empty Cart" />
          <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-gray-400 mb-4">Checkout what is trending.</p>
          <Link to="/filter">
            <button className="bg-green-600 px-6 py-2 rounded-3xl text-white">
              Add Items to Cart
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex gap-6">
          {/* Left Side: Cart Items */}
          <div className="w-2/5 ml-10"> 
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center bg-neutral-800 p-4 rounded-md border border-white mb-4 shadow-md">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                <div className="ml-4 w-full">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-400">Tabletop game</p>
                  <p className="text-gray-400">Age {item.age}</p>
                  <p className="font-bold mt-8">{item.price} Birr</p>
                </div>

                <div className="flex flex-col justify-between items-end h-full space-y-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      disabled={item.qty <= 1}
                      className="bg-green-600 p-1.5 rounded-sm disabled:opacity-50"
                    >
                      -
                    </button>
                    <span className="text-lg">{item.qty}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="bg-green-600 p-1.5 rounded-sm"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex items-center space-x-2 mt-5">
                    <button className="border-white text-sm p-2 w-40 rounded-lg mt-8">
                      <i className="fa-regular fa-heart"></i> Move to Wishlist
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="mt-8"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Order Summary */}
          <div className="w-full md:w-1/3 bg-gray-600 border-white p-6 rounded-3xl shadow-md ml-0 md:ml-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">Order Summary</h2>
            <hr className="border-white my-4" />
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-neutral-500 p-4 rounded-lg mb-4 text-white"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <div className="ml-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-300 text-sm">Qty: {item.qty}</p>
                </div>
                <span className="font-semibold">{item.price * item.qty} Birr</span>
              </div>
            ))}

            <div className="my-4">
              <input
                type="text"
                placeholder="Gift or discount code"
                className="w-2/3 p-2 bg-neutral-700 rounded-md text-gray-300 placeholder-gray-400 mr-4"
              />
              <button className="mt-2 bg-neutral-800 w-1/4 py-2 rounded-md text-white">
                Apply
              </button>
            </div>

            <hr className="border-white my-4" />

            <div className="flex justify-between items-center text-sm text-white">
              <span>Subtotal</span>
              <span>{totalAmount} Birr</span>
            </div>

            <div className="flex justify-between items-center text-2xl font-bold text-white">
              <span>Total</span>
              <span>{totalAmount + (0.05 * totalAmount)} Birr</span>
            </div>
            <div className="text-gray-400 text-sm mt-2">
              Including taxes of 5%
            </div>
            <Link to="/checkout">
              <button className="mt-6 bg-green-900 w-full py-3 rounded-lg text-white text-xl font-bold flex items-center justify-center">
                <span className="mr-10">{totalAmount + (0.05 * totalAmount)} Birr</span>
                Checkout
                <span className="ml-2">→</span>
              </button>
            </Link>

            {/* Clear Cart Button */}
            <button
              onClick={clearCart}
              className="mt-4 w-full py-2 rounded-lg bg-red-600 text-white font-bold"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
