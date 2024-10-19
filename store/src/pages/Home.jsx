import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hero from '@/assets/hero.jpg';
import jegena2 from '@/assets/jegena2.png';
import cards from '@/assets/cards.jpg';
import pool from '@/assets/pool.png';
import ImageSlider from '../components/ImageSlider';

function Home() {
  const trendingItems = [
    { img: cards, name: 'Chess', price: '200 birr' },
    { img: pool, name: 'Dart', price: '500 birr' },
    { img: jegena2, name: 'Jenga', price: '500 birr' },
    { img: pool, name: 'Dart', price: '500 birr' },
    { img: jegena2, name: 'Jenga', price: '500 birr' },
    { img: cards, name: 'Chess', price: '200 birr' },
  ];

  const recommendations = [
    { img: jegena2, name: 'Jenga', category: 'Table Top Games', price: '125.99 birr', originalPrice: '500.99 birr', discount: '-25%' },
    { img: cards, name: 'UNO', category: 'Table Top Games', price: '125.99 birr', originalPrice: '500.99 birr', discount: '-25%' },
    { img: pool, name: 'Dart', category: 'Physical Games', price: '125.99 birr', originalPrice: '500.99 birr', discount: '-25%' },
    { img: jegena2, name: 'Chess', category: 'Table Top Games', price: '125.99 birr', originalPrice: '500.99 birr', discount: '-25%' },
    { img: cards, name: 'Jackaroo', category: 'Table Top Games', price: '125.99 birr', originalPrice: '500.99 birr', discount: '-25%' },
    { img: pool, name: 'Dart', category: 'Physical Games', price: '125.99 birr', originalPrice: '500.99 birr', discount: '-25%' },
    { img: jegena2, name: 'Chess', category: 'Table Top Games', price: '125.99 birr', originalPrice: '500.99 birr', discount: '-25%' },
    { img: cards, name: 'Jackaroo', category: 'Table Top Games', price: '125.99 birr', originalPrice: '500.99 birr', discount: '-25%' },
    { img: jegena2, name: 'Jenga', category: 'Table Top Games', price: '125.99 birr', originalPrice: '500.99 birr', discount: '-25%' },
    { img: cards, name: 'UNO', category: 'Table Top Games', price: '125.99 birr', originalPrice: '500.99 birr', discount: '-25%' },
  ];



  const topRated = [
    { img: jegena2, name: 'Carrom', category: 'Table Top Games', price: '135.99 birr', originalPrice: '550.99 birr', discount: '-20%', rating: 4.5 },
    { img: cards, name: 'Pictionary', category: 'Party Games', price: '105.99 birr', originalPrice: '450.99 birr', discount: '-20%', rating: 4.0 },
    { img: pool, name: 'Dungeons & Dragons', category: 'Role Playing Games', price: '175.99 birr', originalPrice: '700.99 birr', discount: '-20%', rating: 5.0 },
    { img: jegena2, name: 'Ludo', category: 'Board Games', price: '85.99 birr', originalPrice: '350.99 birr', discount: '-25%', rating: 3.5 },
    { img: cards, name: 'Catan', category: 'Board Games', price: '199.99 birr', originalPrice: '799.99 birr', discount: '-20%', rating: 4.8 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(trendingItems.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = trendingItems.slice(startIndex, startIndex + itemsPerPage);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="text-yellow-400">
        {'★'.repeat(fullStars)}
        {halfStar && '☆'}
        {'☆'.repeat(emptyStars)}
      </div>
    );
  };

  return (
    <div>
      {/* Image Slider */}
      <div className="flex justify-center mb-8">
        <img src={hero} alt="" className="rounded-lg" />
      </div>

      <div className="" style={{ width: '80%', marginLeft: '10%' }}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-bold">Trending</h2>
          <div className="text-white">
            <button className="px-3 py-1 rounded-r" onClick={handlePrev} disabled={currentPage === 1}>
              &lt;
            </button>
            <span className="px-4">
              {currentPage} of {totalPages}
            </span>
            <button className="px-3 py-1 rounded-r" onClick={handleNext} disabled={currentPage === totalPages}>
              &gt;
            </button>
          </div>
        </div>

        <div className="flex space-x-4">
          {selectedItems.map((item, index) => (
            <div key={index} className="relative w-1/3 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src={item.img} alt={item.name} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent">
                <h3 className="text-white text-lg font-bold">{item.name}</h3>
                <p className="text-white mb-2">{item.price}</p>
                <div className="flex gap-2 items-center">
                <button 
                                onClick={() => addToCart(game)} // Call addToCart when clicked
                                className="mt-2 bg-green-600 text-white px-4 py-2 rounded-md"
                            >
                                Add to Cart
                            </button>
                  <Link
                    to="/favorite"
                    className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300"
                  >
                    Add to Wishlist
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-8" style={{ width: '80%', marginLeft: '10%' }}>
        <div className="container mx-auto">
          <h2 className="text-white text-3xl font-bold mb-6">Recommendation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recommendations.map((game, index) => (
              <Link key={index} to={`/games/${game.name}`}>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src={game.img} alt={game.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-white text-lg font-bold">{game.name}</h3>
                    <p className="text-gray-400 text-sm">{game.category}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="bg-green-500 text-white px-2 py-1 text-xs rounded">{game.discount}</span>
                      <div className="text-white">
                        <span className="line-through text-gray-400 text-sm mr-2">{game.originalPrice}</span>
                        <span className="text-lg">{game.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="text-left my-8" style={{ width: '80%', marginLeft: '10%' }}>
        <p className="text-2xl font-bold">Deal of the Week</p>
      </div>

      {/* Image Slider */}
      <ImageSlider />



      <div className="text-center mt-4">
        <p className="text-2xl font-bold">JACKAROO</p>
        <p className="text-gray-600">1500 deals</p>
        <button className="bg-green-600 text-white px-4 py-2 mt-2 rounded-lg">Purchase Now</button>
      </div>

      <div className="text-left my-8" style={{ width: '80%', marginLeft: '10%' }}>
        <p className="text-2xl font-bold">Top Rated</p>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-10" style={{ width: '80%', marginLeft: '10%' }}>
        {topRated.map((game, index) => (
          <Link key={index} to={`/games/${game.name}`}>
            <div className="shadow-lg rounded-md p-4">
              <img src={game.img} alt={game.name} className="w-full h-64 object-cover rounded-md" />
              <div className="text-center mt-4">
                <p className="text-xl font-bold text-white">{game.name}</p>
                <p className="text-gray-400">{game.category}</p>
                <div className="flex justify-center items-center mt-2">
                  <span className="text-green-400 text-sm mr-2">{game.discount}</span>
                  <span className="line-through text-gray-500 text-sm">{game.originalPrice}</span>
                </div>
                <p className="text-white text-lg">{game.price}</p>
                <div className="mt-2">{renderStars(game.rating)}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
