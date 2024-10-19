import React, { useState } from 'react';
import jegena2 from '@/assets/jegena2.png';
import cards from '@/assets/cards.jpg';
import pool from '@/assets/pool.png';

const games = [
    { id: 1, img: jegena2, name: 'Jenga', category: 'Table Top Games', price: '200 Birr', rating: 4 },
    { id: 2, img: cards, name: 'UNO', category: 'Table Top Games', price: '150 Birr', rating: 4 },
    { id: 3, img: pool, name: 'Dart', category: 'Table Top Games', price: '200 Birr', rating: 4 },
    { id: 4, img: cards, name: 'UNO', category: 'Table Top Games', price: '150 Birr', rating: 4 },
    { id: 5, img: pool, name: 'Dart', category: 'Table Top Games', price: '200 Birr', rating: 4 },
    { id: 6, img: jegena2, name: 'Jenga', category: 'Table Top Games', price: '200 Birr', rating: 4 },
    { id: 7, img: cards, name: 'UNO', category: 'Table Top Games', price: '150 Birr', rating: 4 },
    { id: 8, img: cards, name: 'UNO', category: 'Table Top Games', price: '150 Birr', rating: 4 },
    { id: 9, img: pool, name: 'Dart', category: 'Table Top Games', price: '200 Birr', rating: 4 },
    { id: 10, img: cards, name: 'UNO', category: 'Table Top Games', price: '150 Birr', rating: 4 }
];

const FilterSection = ({ addToCart }) => { // Accept addToCart as a prop
    const [selectedFilters, setSelectedFilters] = useState({
        priceRange: '',
        publishedAt: '',
        alphabet: '',
        age: '',
    });

    const [appliedFilters, setAppliedFilters] = useState([]);

    const handleApplyFilters = () => {
        const filtersToApply = [];
        for (const key in selectedFilters) {
            if (selectedFilters[key]) {
                filtersToApply.push(selectedFilters[key]);
            }
        }
        setAppliedFilters(filtersToApply);
    };

    const removeAppliedFilter = (filterToRemove) => {
        setAppliedFilters(appliedFilters.filter((filter) => filter !== filterToRemove));
    };

    const clearAllFilters = () => {
        setSelectedFilters({
            priceRange: '',
            publishedAt: '',
            alphabet: '',
            age: '',
        });
        setAppliedFilters([]);
    };

    // Function to render stars based on rating
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <div className="flex text-yellow-400 mt-2">
                {'★'.repeat(fullStars)}
                {halfStar && '★'}
                {'☆'.repeat(emptyStars)}
            </div>
        );
    };

    return (
        <div className="px-6 md:px-12 lg:px-24">
            {/* Filter Inputs */}
            <div className="flex space-x-4 mb-4">
                <select
                    className="bg-neutral-800 border border-gray-200 text-white px-4 py-2 rounded-full shadow focus:outline-none"
                    value={selectedFilters.priceRange}
                    onChange={(e) => setSelectedFilters({ ...selectedFilters, priceRange: e.target.value })}
                >
                    <option value="">Price range</option>
                    <option value="Under $50">Under $50</option>
                    <option value="$50 - $100">$50 - $100</option>
                    <option value="Above $100">Above $100</option>
                </select>

                <select
                    className="bg-neutral-800 border border-gray-200 text-white px-4 py-2 rounded-full shadow focus:outline-none"
                    value={selectedFilters.publishedAt}
                    onChange={(e) => setSelectedFilters({ ...selectedFilters, publishedAt: e.target.value })}
                >
                    <option value="">Published at</option>
                    <option value="Today">Today</option>
                    <option value="This week">This week</option>
                    <option value="This year">This year</option>
                </select>

                <select
                    className="bg-neutral-800 border border-gray-200 text-white px-4 py-2 rounded-full shadow focus:outline-none"
                    value={selectedFilters.alphabet}
                    onChange={(e) => setSelectedFilters({ ...selectedFilters, alphabet: e.target.value })}
                >
                    <option value="">Alphabet</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>

                <select
                    className="bg-neutral-800 border border-gray-200 text-white px-4 py-2 rounded-full shadow focus:outline-none"
                    value={selectedFilters.age}
                    onChange={(e) => setSelectedFilters({ ...selectedFilters, age: e.target.value })}
                >
                    <option value="">Age</option>
                    <option value="18+">18+</option>
                    <option value="30+">30+</option>
                    <option value="All Ages">All Ages</option>
                </select>

                <button
                    onClick={handleApplyFilters}
                    className="bg-neutral-800 border border-gray-200 text-white px-4 py-2 rounded-full shadow hover:bg-green-700 transition"
                >
                    Apply Filters
                </button>
            </div>
            <hr className="border-white my-4" />
            {/* Applied Filters */}
            <div className="flex flex-wrap space-x-2 space-y-2 mb-4">
                {appliedFilters.map((filter, index) => (
                    <div
                        key={index}
                        className="flex items-center bg-neutral-800 border border-gray-200 text-white px-4 py-2 rounded-full shadow hover:bg-gray-700"
                    >
                        {filter}
                        <button className="ml-6" onClick={() => removeAppliedFilter(filter)}>
                            ✕
                        </button>
                    </div>
                ))}
                {appliedFilters.length > 0 && (
                    <button
                        className="flex items-center bg-white text-black px-4 py-2 rounded-full shadow hover:bg-gray-300"
                        onClick={clearAllFilters}
                    >
                        Clear All
                    </button>
                )}
            </div>

            {/* Display Games */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
                {games.map((game, index) => (
                    <div key={index} className=" rounded-lg shadow-lg overflow-hidden w-full">
                        {/* Image */}
                        <div className="relative">
                            <img src={game.img} alt={game.name} className="w-full h-48 object-cover" />
                            {/* Wishlist Icon */}
                            <button className="absolute top-2 right-2 text-white">
                                <i className="fa-regular fa-heart"></i>
                            </button>
                        </div>

                        {/* Card Content */}
                        <div className="p-4">
                            <p className="text-gray-400 text-xs">{game.category}</p>
                            <p className="text-white text-sm font-bold">{game.name}</p>
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-gray-300 text-xs"> <i className="fa-solid fa-cart-shopping"></i></p>
                                <p className="text-white font-bold text-sm">{game.price}</p>
                            </div>

                            {/* Rating */}
                            {renderStars(game.rating)}

                            {/* Add to Cart Button */}
                            <button 
                                onClick={() => addToCart(game)} // Call addToCart when clicked
                                className="mt-2 bg-green-600 text-white px-4 py-2 rounded-md"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterSection;
