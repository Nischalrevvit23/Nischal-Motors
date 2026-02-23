import React, { useState } from 'react';
import { FaTimes, FaUser, FaLock, FaMotorcycle } from 'react-icons/fa';

const LoginModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-dark-card w-full max-w-md rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
                >
                    <FaTimes className="text-xl" />
                </button>

                <div className="p-8">
                    <div className="text-center mb-8">
                        <div className="flex justify-center text-accent-blue text-4xl mb-3">
                            <FaMotorcycle />
                        </div>
                        <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
                        <p className="text-gray-400 text-sm">Login to your MotoMarket account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 flex items-center">
                                <FaUser className="mr-2 text-accent-blue" /> Email Address
                            </label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="nischal@motors.com"
                                className="w-full bg-dark border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-accent-blue transition"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 flex items-center">
                                <FaLock className="mr-2 text-accent-blue" /> Password
                            </label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full bg-dark border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-accent-blue transition"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-accent-blue hover:bg-blue-500 text-black font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-accent-blue/20"
                        >
                            Log In
                        </button>
                    </form>

                    <div className="mt-8 text-center border-t border-white/10 pt-6">
                        <p className="text-gray-400 text-xs">
                            Don't have an account? <button className="text-accent-blue hover:underline font-semibold">Sign Up</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
