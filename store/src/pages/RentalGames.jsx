import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function RentalGames() {
  const location = useLocation();
  const { game } = location.state || {}; // Retrieve the game data passed from Games component
  const [hours, setHours] = useState(1); // State to track selected rental duration

  if (!game) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-neutral-800 text-white">
        <h1 className="text-4xl">No Game Selected</h1>
      </div>
    );
  }

  // Rental pricing logic based on game category and duration
  const getRentalPrice = () => {
    let price = 0;
    if (game.category === 'Table Top Games') {
      if (hours <= 2) price = 100;
      else if (hours <= 4) price = 90;
      else if (hours <= 7) price = 75;
      else if (hours <= 12) price = 50;
    } else if (game.category === 'Physical Games') {
      if (hours <= 7) price = 50;
      else if (hours <= 12) price = 500;
    } else if (game.category === 'Digital Games') {
      if (game.name === 'PlayStation' && hours <= 7) price = 100;
      else if (game.name === 'PlayStation' && hours > 7) price = 1000;
      else if (game.name === 'Nintendo Switch' && hours <= 7) price = 200;
      else if (game.name === 'Nintendo Switch' && hours > 7) price = 2000;
      else if (game.name === 'VR' && hours <= 7) price = 1300;
      else if (game.name === 'VR' && hours > 7) price = 10000;
    }
    return price * hours;
  };

  const deliveryFee = 500;
  const facilitatorFee = 1000;

  return (
    <div className="min-h-screen flex flex-col ml-32 bg-neutral-800 text-white p-10">
      {/* Game Image and Description */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Image Section */}
        <div className="md:w-1/2 w-full items-center">
          <img src={game.img} alt={game.name} className="w-96 h-80 object-cover border border-gray-700" />
        </div>

        {/* Rental Info Section */}
        <div className="md:w-1/2 w-full ml-4 mt-6  md:mt-0"> {/* Reduced padding-left and adjusted margin */}
          <h2 className="text-2xl font-bold mb-4">Rental Information</h2>
          <p>Here, you can rent {game.name} for a certain period. Make sure to return it in good condition.</p>

          {/* Rental Hours Selection */}
          <div className="mt-4">
            <label htmlFor="hours" className="block mb-2">Select Rental Duration (in hours):</label>
            <input 
              type="number" 
              id="hours" 
              min="1" 
              max="12" 
              value={hours} 
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full p-2 border border-gray-700 bg-neutral-700 text-white"
            />
          </div>

          {/* Display Rental Cost */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Rental Cost: {getRentalPrice()} Birr</h3>
            <p className="mt-2">+ {deliveryFee} Birr for delivery (optional)</p>
            <p className="mt-2">+ {facilitatorFee} Birr per facilitator (optional)</p>
          </div>

          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-500 transition">
            Rent Now
          </button>
        </div>
      </div>

      {/* Rental Information */}
      <div className="mt-10">
        <h1 className="text-4xl font-bold mb-4">{game.name}</h1>
        <p className="text-gray-400 text-lg mb-4">{game.category}</p>

        {/* Free Games Offer */}
        {game.category === 'Table Top Games' && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Special Offer:</h3>
            <p>For every 3 games rented, you get 1 game free!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RentalGames;
