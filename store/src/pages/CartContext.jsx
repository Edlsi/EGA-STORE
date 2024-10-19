import React, { createContext, useState, useContext } from 'react';

// Create a CartContext
export const CartContext = createContext();

// Custom hook to use the Cart context
export const useCart = () => {
    return useContext(CartContext);
};

// CartProvider component to wrap around the app
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add items to the cart
    const addToCart = (item) => {
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, qty: cartItem.qty + 1 }
                        : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, qty: 1 }]);
        }
    };

    // Function to update item quantity
    const updateQuantity = (id, value) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id ? { ...item, qty: Math.max(1, item.qty + value) } : item
            )
        );
    };

    // Function to remove item from cart
    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    // Total amount
    const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.qty,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                updateQuantity,
                removeItem,
                totalAmount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
