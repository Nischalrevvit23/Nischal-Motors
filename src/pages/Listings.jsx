import React from 'react';
import { bikes } from '../data/bikes';
import BikeCard from '../components/BikeCard';

const Listings = ({ addToCart }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">All Listings</h1>
                <p className="text-gray-400">Explore our complete collection of motorcycles.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {bikes.map(bike => (
                    <BikeCard key={bike.id} bike={bike} addToCart={addToCart} />
                ))}
            </div>

            {bikes.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-400 text-xl">No motorcycles found.</p>
                </div>
            )}
        </div>
    );
};

export default Listings;
