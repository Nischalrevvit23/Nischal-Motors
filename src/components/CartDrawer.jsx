import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaTrash, FaShoppingCart, FaMotorcycle } from 'react-icons/fa';

const CartDrawer = ({ isOpen, onClose, cartItems, onRemove }) => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] overflow-hidden">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Drawer */}
            <div className="absolute right-0 top-0 h-full w-full max-w-md bg-dark shadow-2xl animate-in slide-in-from-right duration-300 border-l border-white/10 flex flex-col">
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-white">
                        <FaShoppingCart className="text-xl text-accent-orange" />
                        <h2 className="text-xl font-bold">Your Cart ({cartItems.length})</h2>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition">
                        <FaTimes className="text-2xl" />
                    </button>
                </div>

                <div className="flex-grow overflow-y-auto p-6 space-y-4">
                    {cartItems.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                            <FaMotorcycle className="text-6xl opacity-20" />
                            <p className="text-lg">Your cart is empty</p>
                            <Link
                                to="/listings"
                                onClick={onClose}
                                className="text-accent-blue hover:underline font-semibold"
                            >
                                Browse Motorcycles
                            </Link>
                        </div>
                    ) : (
                        cartItems.map((item, index) => (
                            <div key={index} className="bg-dark-card p-4 rounded-xl border border-white/5 flex items-center space-x-4">
                                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                                <div className="flex-grow">
                                    <h3 className="font-bold text-white">{item.name}</h3>
                                    <p className="text-accent-blue font-semibold">Rs {item.price.toLocaleString()}</p>
                                </div>
                                <button
                                    onClick={() => onRemove(index)}
                                    className="text-gray-500 hover:text-red-500 transition p-2"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="p-6 border-t border-white/10 bg-dark-card space-y-4">
                        <div className="flex justify-between items-center text-white">
                            <span className="text-gray-400">Total Amount</span>
                            <span className="text-2xl font-bold text-accent-blue">Rs {total.toLocaleString()}</span>
                        </div>
                        <Link
                            to="/checkout"
                            onClick={onClose}
                            className="w-full bg-accent-orange hover:bg-orange-600 text-white text-center font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-accent-orange/20 block"
                        >
                            Proceed to Checkout
                        </Link>
                        <Link
                            to="/cart"
                            onClick={onClose}
                            className="w-full text-center text-gray-400 hover:text-white text-sm font-semibold transition underline"
                        >
                            View Full Cart
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
