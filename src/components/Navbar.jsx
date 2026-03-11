import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMotorcycle, FaBars, FaTimes, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = ({ cartCount, onOpenCart, onOpenLogin }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-dark sticky top-0 z-50 border-b border-white/10 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2 text-accent-blue font-bold text-2xl">
                            <FaMotorcycle className="text-3xl" />
                            <span>MotoMarket</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/" className="text-white hover:text-accent-blue transition px-3 py-2 rounded-md font-medium text-sm lg:text-base">Home</Link>
                        <Link to="/listings" className="text-white hover:text-accent-blue transition px-3 py-2 rounded-md font-medium text-sm lg:text-base">Listings</Link>

                        <div className="h-6 w-[1px] bg-white/10 mx-2"></div>

                        <button
                            onClick={onOpenCart}
                            className="relative p-2 text-gray-400 hover:text-accent-blue transition group"
                        >
                            <FaShoppingCart className="text-xl" />
                            <span className="absolute -top-1 -right-1 bg-accent-orange text-black text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full group-hover:scale-110 transition">
                                {cartCount}
                            </span>
                        </button>

                        <button
                            onClick={onOpenLogin}
                            className="flex items-center space-x-2 bg-accent-blue hover:bg-blue-500 text-black px-5 py-2 rounded-full font-bold transition transform hover:scale-105 active:scale-95 shadow-lg shadow-accent-blue/20"
                        >
                            <FaUser className="text-sm" />
                            <span>Login</span>
                        </button>
                    </div>

                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={onOpenCart}
                            className="relative p-2 text-gray-400"
                        >
                            <FaShoppingCart className="text-xl" />
                            <span className="absolute top-1 right-1 bg-accent-orange text-black text-[8px] font-bold h-3 w-3 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-400 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu list*/}
            {isOpen && (
                <div className="md:hidden bg-dark-card border-b border-white/10 animate-in slide-in-from-top duration-300">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            to="/" 
                            onClick={() => setIsOpen(false)}
                            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-dark"
                        >
                            Home
                        </Link>
                        <Link
                            to="/listings"
                            onClick={() => setIsOpen(false)}
                            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-dark"
                        >
                            Listings
                        </Link>

                        <div className="border-t border-white/10 my-2 pt-2">
                            <button
                                onClick={() => { onOpenLogin(); setIsOpen(false); }}
                                className="w-full flex items-center space-x-3 text-white px-3 py-3 rounded-md text-base font-medium hover:bg-dark text-left"
                            >
                                <FaUser className="text-accent-blue" />
                                <span>Login</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
