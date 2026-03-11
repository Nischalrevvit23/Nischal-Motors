import React, { useState } from 'react';
import { FaCalculator } from 'react-icons/fa';

const EMIBox = () => {
    const [downPayment, setDownPayment] = useState('');
    const [interestRate, setInterestRate] = useState('12');
    const [tenure, setTenure] = useState('3');

    return (
        <div className="bg-dark-card p-6 rounded-xl border border-white/10 shadow-xl">
            <div className="flex items-center space-x-2 text-accent-blue mb-6">
                <FaCalculator className="text-2xl" />
                <h3 className="text-xl font-bold">EMI Calculator</h3>
            </div>

            <div className="space-y-4"> 
                <div>
                    <label className="block text-gray-400 text-sm mb-1">Down Payment (Rs)</label>
                    <input
                        type="number"
                        placeholder="e.g. 50000"
                        value={downPayment}
                        onChange={(e) => setDownPayment(e.target.value)}
                        className="w-full bg-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-accent-blue transition"
                    />
                </div>

                <div>
                    <label className="block text-gray-400 text-sm mb-1">Interest Rate (%)</label>
                    <input
                        type="number"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                        className="w-full bg-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-accent-blue transition"
                    />
                </div>

                <div>
                    <label className="block text-gray-400 text-sm mb-1">Tenure (Years)</label>
                    <select
                        value={tenure}
                        onChange={(e) => setTenure(e.target.value)}
                        className="w-full bg-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-accent-blue transition"
                    >
                        <option value="1">1 Year</option>
                        <option value="2">2 Years</option>
                        <option value="3">3 Years</option>
                        <option value="4">4 Years</option>
                        <option value="5">5 Years</option>
                    </select>
                </div>

                <button className="w-full bg-accent-blue hover:bg-light-blue-500 text-black font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                    Calculate EMI
                </button>

                <div className="mt-6 p-4 bg-dark/50 border border-accent-blue/20 rounded-lg text-center">
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Estimated EMI</p>
                    <p className="text-2xl font-bold text-accent-blue">Rs 8,500/month</p>
                </div>
            </div>
        </div>
    );
};

export default EMIBox;
