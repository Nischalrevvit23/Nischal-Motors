import React from "react";
import { Link } from "react-router-dom";
import { bikes } from "../data/bikes";
import BikeCard from "../components/BikeCard";

const Home = ({ addToCart }) => {
  const featuredBikes = bikes.slice(0, 3);
//small change
  return (
    <div className="space-y-16 pb-20">
      /* Hero Section */
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 scale-105"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 0.9)), url('https://images.unsplash.com/photo-1558981806-ec527ecb479c?q=80&w=2070&auto=format&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(2px)",
          }}
        ></div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Find Your Dream <span className="text-accent-blue">Motorcycle</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            The largest collection of certified pre-owned and new motorcycles at
            unbeatable prices.
          </p>
          <Link
            to="/listings"
            className="inline-block bg-accent-blue hover:bg-blue-500 text-black text-lg font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg shadow-accent-blue/50"
          >
            Browse Listings
          </Link>
        </div>
      </section>

      /* Featured Section */  
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2 font-display">
              Featured Rides
            </h2>
            <p className="text-gray-400">Hand-picked motorcycles for you</p>
          </div>
          <Link
            to="/listings"
            className="text-accent-blue hover:underline font-semibold mt-4 md:mt-0"
          >
            View All 
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBikes.map((bike) => (
            <BikeCard key={bike.id} bike={bike} addToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-dark-card/50 py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-400">
            <div className="p-6">
              <div className="text-accent-blue text-4xl mb-4 flex justify-center drop-shadow-[0_0_10px_rgba(0,210,255,0.3)]">
                🏍️
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Huge Selection
              </h3>
              <p>Over 500+ motorcycles from top brands across the country.</p>
            </div>
            <div className="p-6">
              <div className="text-accent-blue text-4xl mb-4 flex justify-center drop-shadow-[0_0_10px_rgba(0,210,255,0.3)]">
                🛡️
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Verified Sellers
              </h3>
              <p>Every listing goes through a strict verification process.</p>
            </div>
            <div className="p-6">
              <div className="text-accent-blue text-4xl mb-4 flex justify-center drop-shadow-[0_0_10px_rgba(0,210,255,0.3)]">
                💰
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Best Pricing
              </h3>
              <p>Transparent pricing with easy financing options.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
