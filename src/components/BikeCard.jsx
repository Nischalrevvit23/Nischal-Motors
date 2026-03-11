import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaTag, FaPlus } from 'react-icons/fa';

const BikeCard = ({ bike, addToCart }) => {
    const { id, name, price, location, image, brand } = bike;

    return (
        <div className="group bg-dark-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-accent-blue/20 border border-white/5 relative">
            <Link to={`/bike/${id}`} className="block overflow-hidden h-56 relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-accent-blue text-black text-xs font-bold px-2 py-1 rounded z-10">
                    {brand}
                </div>
            </Link> 

            <div className="p-5">
                <Link to={`/bike/${id}`} className="block">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-blue transition">{name}</h3>
                </Link>
                <div className="flex items-center text-gray-400 text-sm mb-4">
                    <FaMapMarkerAlt className="mr-1 text-accent-orange" />
                    <span>{location}</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center text-accent-blue text-lg font-bold">
                        <FaTag className="mr-2" />
                        <span>Rs {price.toLocaleString()}</span>
                    </div>

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart(bike);
                        }}
                        className="bg-accent-orange/10 hover:bg-accent-orange text-accent-orange hover:text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                        title="Add to Cart"
                    >
                        <FaPlus />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BikeCard;
