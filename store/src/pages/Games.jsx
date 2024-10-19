import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Import game images
import jengaImage from '@/assets/jegena2.png';
import unoImage from '@/assets/uno.jpg';
import dartImage from '@/assets/dart.jpg';
// Import share icon and button icons
import shareIcon from '@/assets/share.png';
import cartImage from '@/assets/cart.png'; // Import cart icon
import heartImage from '@/assets/heart.png'; // Import heart icon (unliked state)
import heartFilledImage from '@/assets/filled.png'; // Import filled heart icon (liked state)
import faviconImage from '@/assets/heart.png'; // Import favicon icon

// Example game data
const otherGames = [
  { img: jengaImage, name: 'Jenga', category: 'Table Top Games', price: '125.99 birr', originalPrice: '500.99 birr', discount: '-25%' },
  { img: unoImage, name: 'UNO', category: 'Table Top Games', price: '125.99 birr', originalPrice: '500.99 birr', discount: '-25%' },
  { img: dartImage, name: 'Dart', category: 'Physical Games', price: '125.99 birr', originalPrice: '500.99 birr', discount: '-25%' },
];

// Expert feedback data
const feedbacks = [
  { text: "A fantastic game that combines strategy and fun! Highly recommended for family game nights.", author: "Alice" },
  { text: "This game is a staple in our household. It never gets old!", author: "Bob" },
  { text: "Perfect for parties and gatherings. Everyone loves it!", author: "Charlie" },
];

const Games = () => {
  const { gameName } = useParams();

  // Find the currently viewed game
  const currentGame = otherGames.find(game => game.name === gameName);

  if (!currentGame) {
    return <p className="text-center text-red-500 text-xl">Game not found.</p>;
  }

  // State to track which games are "liked"
  const [likedGames, setLikedGames] = useState({});

  // State to manage the current feedback index
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

  // Automatically change feedback every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeedbackIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Toggle the "liked" state for a specific game
  const toggleLiked = (gameName) => {
    setLikedGames((prev) => ({
      ...prev,
      [gameName]: !prev[gameName], // Toggle the like state for the given game
    }));
  };

  return (
    <div className="bg-neutral-800 min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow">
        {/* Game Detail Section */}
        <div className="flex justify-start items-start min-h-screen py-2 bg-neutral-800">
          <div className="p-6 md:p-10 max-w-5xl w-full mx-10 md:mx-auto">
            {/* Game Name and Category in the same line */}
            <div className="flex justify-start space-x-4 mb-4">
              <p className="text-3xl text-white font-bold">{currentGame.name}</p>
              <p className="text-3xl text-gray-300">{currentGame.category}</p>
            </div>

            {/* Layout with image, text, buttons, and video */}
            <div className="flex flex-col md:flex-row gap-28 items-start justify-start">
              {/* Left Side - Image */}
              <div className="relative w-full md:w-1/2">
                {/* Main Image */}
                <img 
                  src={currentGame.img} 
                  alt={currentGame.name} 
                  className="w-full h-64 object-cover justify-center border border-gray-700" 
                />
                
                {/* Heart icon for the main image */}
                <div className="absolute top-2 right-5">
                  <img
                    src={likedGames[currentGame.name] ? heartFilledImage : heartImage}
                    alt="Heart Icon"
                    className="w-13 h-12 cursor-pointer"
                    onClick={() => toggleLiked(currentGame.name)}
                  />
                </div>

                <p className="text-white text-center mt-4">4.7 ⭐⭐⭐⭐⭐</p>
                <div className='bg-neutral-800 py-4 px-2 mt-4 text-center rounded-3xl'>
                  <div className='bg-neutral-800 py-4 px-2 mt-0 text-center rounded-3xl w-40 h-40 mx-auto'>
                    <p className='text-white border-4 border-white h-full flex items-center justify-center text-4xl'>ADULT ONLY 18+</p>
                  </div>
                </div>

                {/* Buttons and Additional Information */}
                <div className="flex flex-col space-y-2 mt-4">
                  {/* Add to Cart Button */}
                  <Link
                    to="/cart"
                    className="bg-neutral-800 border-2 border-green-600 text-white px-6 py-3 rounded-md hover:bg-green-500 flex items-center justify-center"
                  >
                    <img src={cartImage} alt="Cart Icon" className="w-5 h-5 mr-2" />
                    Purchase
                  </Link>

                  {/* In Wishlist Button */}
                  <Link
                    to="/rental"
                    state={{ game: currentGame }} 
                    className="bg-neutral-800 border-2 border-green-600 text-white px-6 py-3 rounded-md hover:bg-green-500 flex items-center justify-center"
                  >
                   
                    click in to rent
                  </Link>

                  {/* Amount available and other info */}
                  <div className="mt-6 text-white">
                    {/* Flex container for "Amount available" and "4" */}
                    <div className="flex items-center space-x-40">
                      <p className="text-lg">Amount available</p>
                      <p className="text-2xl ">4</p>
                    </div>

                    {/* Green Line */}
                    <hr className="border-t-4 border-green-600 my-4" />

                    {/* Share Icon */}
                    <div className="flex justify-center mt-4 ml-72">
                      <img src={shareIcon} alt="Share Icon" className="w-10 h-10 cursor-pointer hover:opacity-75" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Text, Buttons, and Video */}
              <div className="w-full md:w-1/2 flex flex-col">
                {/* Instruction Text */}
                <p className="text-gray-400 text-lg  mb-5">Click the button below for more info</p>

                {/* Buttons */}
                <div className="flex space-x-16 mb-5">
                  <button className="bg-gray-600 text-2x1 text-white px-6 py-3 rounded-md hover:bg-gray-500 transition">Set Up</button>
                  <button className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-500 transition">Action Cards</button>
                  <button
                    onClick={() => alert(`You have purchased ${currentGame.name}`)}
                    className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-500 transition"
                  >
                    Gameplay
                  </button>
                </div>

                {/* Video */}
                <div className="border border-gray-700 p-4 rounded-lg">
                  <video className="w-full h-64 object-cover" controls>
                    <source src="path_to_your_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expert Feedback Section */}
        <div className="bg-neutral-800 py-6">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl text-start font-bold text-white mb-6 mt-0">⭐ Expert Feedback</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {feedbacks.map((feedback, index) => (
                <div key={index} className="bg-gray-700 p-4 rounded-lg text-left">
                  <p className="text-gray-400 mb-2">"{feedback.text}"</p>
                  <p className="text-white font-bold">- {feedback.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other Games Section */}
        <div className="container mx-auto py-8 px-4">
          <h2 className="text-2xl font-bold text-white mb-6">Similar Games</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {otherGames.map((game, index) => (
              <Link key={index} to={`/games/${game.name}`} className="block relative">
                <div className="hover:shadow-lg transition-shadow hover:scale-105 transform duration-300 bg-neutral-800 p-4 rounded-lg">
                  <img 
                    src={game.img} 
                    alt={game.name} 
                    className="w-full h-32 object-cover transition-transform duration-300 transform hover:scale-110 rounded-lg" 
                  />
                  
                  {/* Favicon for each game image */}
                  

                  <div className="text-center mt-4">
                    <p className="text-xl font-bold text-white">{game.name}</p>
                    <p className="text-gray-400">{game.category}</p>
                    <div className="flex justify-center items-center mt-2">
                      <span className="text-green-400 text-sm mr-2">{game.discount}</span>
                      <span className="line-through text-gray-500 text-sm">{game.originalPrice}</span>
                    </div>
                    <p className="text-white text-lg">{game.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Games;
