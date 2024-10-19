import React, { useState, useEffect } from 'react';
import jegena2 from '@/assets/jegena2.png';
import cards from '@/assets/cards.jpg';
import pool from '@/assets/pool.png';
import telebirr from '@/assets/telebirr.jpg';


const PaymentPage = () => {
    const [selectedPayment, setSelectedPayment] = useState('Pay at Pickup'); // Default payment method
    const [timer, setTimer] = useState(72 * 60 * 60); // 72 hours countdown in seconds

    const cartItems = [
        { id: 1, name: 'Uno', price: 300, qty: 1, image: cards },
        { id: 2, name: 'Jenga', price: 500, qty: 2, image: jegena2 },
        { id: 3, name: 'Chess', price: 1000, qty: 1, image: pool },
    ];

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

    // Countdown timer for "Pay at Pickup"
    useEffect(() => {
        if (selectedPayment === 'Pay at Pickup') {
            const countdown = setInterval(() => {
                setTimer((prev) => (prev > 0 ? prev - 1 : 0));
            }, 1000);

            return () => clearInterval(countdown); // Cleanup timer
        }
    }, [selectedPayment]);

    const formatTimer = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="min-h-screen bg-neutral-800 text-white flex mx-20" >
            {/* Left Side: Payment Methods */}
            <div className="w-2/5 p-6">
                <h1 className="text-3xl font-bold mb-6">My Cart</h1>

                <h2 className="text-xl font-semibold mb-4">Payment</h2>
                <hr className="border-white my-4" />
                {/* Payment Options */}
                <div className="mb-6">
                    <p className="font-semibold mb-2">Pay With:</p>
                    <div className="flex items-center mb-4">
                        <label className="mr-4">
                            <input
                                type="radio"
                                value="Telebirr"
                                checked={selectedPayment === 'Telebirr'}
                                onChange={(e) => setSelectedPayment(e.target.value)}
                                className="mr-2"
                            />
                            Telebirr
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Pay at Pickup"
                                checked={selectedPayment === 'Pay at Pickup'}
                                onChange={(e) => setSelectedPayment(e.target.value)}
                                className="mr-2"
                            />
                            Pay at Pickup
                        </label>
                    </div>
                </div>

                {/* Conditional Display Based on Payment Method */}
                {selectedPayment === 'Telebirr' ? (
                    <div className="bg-neutral-800 p-10 rounded-lg">
                        <img
                            src={telebirr}
                            alt="Telebirr"
                            className="w-3/4  mb-2"
                        />
                    </div>
                ) : (
                    <div className="bg-neutral-800 p-6 items-center">
                        <h3 className="text-2xl font-bold mb-2">Pay at Pickup</h3>
                        <p className="text-gray-400 mb-2">Expires in <span className="text-green-500">{formatTimer(timer)}</span> hours</p>
                        <button className="bg-green-600 px-6 py-3 rounded-lg w-full">Pay <span className="text-lg font-bold">{totalAmount + (0.05 * totalAmount)} </span>Birr when you pick up</button>
                    </div>
                )}

                <p className="text-gray-500 mt-6">
                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                </p>
            </div>

            {/* Right Side: Order Summary */}
            <div className="w-1/3 bg-gray-500 p-6 rounded-3xl shadow-md ml-20 h-full">
                <h2 className="text-2xl font-semibold mb-4 text-white">Order Summary</h2>
                <hr className="border-white my-4" />
                {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center bg-gray-700 p-4 rounded-lg mb-4 text-white">
                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                        <div className="ml-4">
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-gray-300 text-sm">Qty: {item.qty}</p>
                        </div>
                        <span className="font-semibold">{item.price * item.qty} Birr</span>
                    </div>
                ))}

                <hr className="border-white my-4" />

                <div className="flex justify-between items-center text-sm text-white">
                    <span>Subtotal</span>
                    <span>{totalAmount} Birr</span>
                </div>

                <div className="flex justify-between items-center text-2xl font-bold text-white">
                    <span>Total</span>
                    <span>{totalAmount + (0.05 * totalAmount)} Birr</span>
                </div>

                <p className="text-gray-400 text-sm mt-2 text-center">Including taxes of 5%</p>
            </div>
        </div >
    );
};

export default PaymentPage;
