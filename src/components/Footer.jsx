import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaMotorcycle } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark-card border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 text-accent-blue font-bold text-xl mb-4">
                            <FaMotorcycle className="text-2xl" />
                            <span>MotoMarket</span>
                        </div>
                        <p className="text-gray-400">
                            The premium marketplace for buying and selling motorcycles. Find your dream ride today.
                        </p>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h3 className="text-white font-semibold mb-2">Quick Links</h3>
                        <a href="/" className="text-gray-400 hover:text-accent-blue transition">Home</a>
                        <a href="/listings" className="text-gray-400 hover:text-accent-blue transition">All Listings</a>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-6 text-2xl">
                            <a href="#" className="text-gray-400 hover:text-accent-blue transition"><FaFacebook /></a>
                            <a href="#" className="text-gray-400 hover:text-accent-blue transition"><FaInstagram /></a>
                            <a href="#" className="text-gray-400 hover:text-accent-blue transition"><FaTwitter /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} MotoMarket. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
