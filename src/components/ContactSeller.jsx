import React, { useState } from 'react';
import { FaUser, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';

const ContactSeller = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message sent: ${message}`);
        setMessage('');
    };

    return (
        <div className="bg-dark-card p-6 rounded-xl border border-white/10 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-6">Contact Seller</h3>

            <div className="flex items-center space-x-4 mb-6 p-3 bg-dark/50 rounded-lg">
                <div className="bg-accent-orange/20 p-3 rounded-full text-accent-orange text-xl">
                    <FaUser />
                </div>
                <div>
                    <p className="text-white font-semibold">Nischal Motors</p>
                    <div className="flex items-center text-gray-400 text-sm">
                        <FaPhoneAlt className="mr-2 text-xs" />
                        <span>+977 9812345678</span>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-400 text-sm mb-1">Your Message</label>
                    <textarea
                        rows="4"
                        placeholder="I am interested in this bike..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-accent-orange transition resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-accent-orange hover:bg-orange-600 text-white font-bold py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-[1.02]"
                >
                    <FaPaperPlane />
                    <span>Send Message</span>
                </button>
            </form>
        </div>
    );
};

export default ContactSeller;
