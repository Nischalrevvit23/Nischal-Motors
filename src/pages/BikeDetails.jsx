import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { bikes } from "../data/bikes";
import EMIBox from "../components/EMIBox";
import ContactSeller from "../components/ContactSeller";
import {
  FaCalendarAlt,
  FaTachometerAlt,
  FaCogs,
  FaMapMarkerAlt,
  FaArrowLeft,
  FaShoppingCart,
} from "react-icons/fa";

const BikeDetails = ({ addToCart }) => {
  const { id } = useParams();
  const bike = bikes.find((b) => b.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!bike) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl mb-4 text-accent-blue">Bike not found!</h2>
        <Link
          to="/listings"
          className="bg-dark-card border border-white/10 px-6 py-2 rounded-full hover:bg-dark transition"
        >
          Back to Listings
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        to="/listings"
        className="inline-flex items-center text-accent-blue hover:text-white transition mb-8 group"
      >
        <FaArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" />
        <span>Back to Listings</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group">
            <img
              src={bike.image}
              alt={bike.name}
              className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <button
                onClick={() => addToCart(bike)}
                className="bg-accent-blue hover:bg-white text-black font-bold px-8 py-4 rounded-xl flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <FaShoppingCart />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>

          <div className="bg-dark-card p-8 rounded-2xl border border-white/10">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <span className="text-accent-blue font-semibold uppercase tracking-widest text-sm">
                  {bike.brand}
                </span>
                <h1 className="text-4xl font-bold text-white mt-1">
                  {bike.name}
                </h1>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-3xl font-extrabold text-accent-blue">
                  Rs {bike.price.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-dark p-4 rounded-xl border border-white/5 text-center">
                <FaCalendarAlt className="mx-auto text-accent-orange text-xl mb-2" />
                <p className="text-gray-500 text-xs uppercase">Year</p>
                <p className="text-white font-bold">{bike.year}</p>
              </div>
              <div className="bg-dark p-4 rounded-xl border border-white/5 text-center">
                <FaTachometerAlt className="mx-auto text-accent-orange text-xl mb-2" />
                <p className="text-gray-500 text-xs uppercase">KM Driven</p>
                <p className="text-white font-bold">
                  {bike.kmDriven.toLocaleString()} km
                </p>
              </div>
              <div className="bg-dark p-4 rounded-xl border border-white/5 text-center">
                <FaCogs className="mx-auto text-accent-orange text-xl mb-2" />
                <p className="text-gray-500 text-xs uppercase">Engine</p>
                <p className="text-white font-bold">{bike.engine}</p>
              </div>
              <div className="bg-dark p-4 rounded-xl border border-white/5 text-center">
                <FaMapMarkerAlt className="mx-auto text-accent-orange text-xl mb-2" />
                <p className="text-gray-500 text-xs uppercase">Location</p>
                <p className="text-white font-bold">
                  {bike.location.split(",")[0]}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <h3 className="text-xl font-bold text-white">Full Description</h3>
              <p>{bike.description}</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <ContactSeller />
          <EMIBox />
        </div>
      </div>
    </div>
  );
};

export default BikeDetails;
