import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaCreditCard,
  FaLock,
  FaTruck,
  FaArrowLeft,
  FaCheckCircle,
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCity,
} from "react-icons/fa";

const CheckoutPage = ({ cart, onClearCart }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setShowSuccess(true);
    setTimeout(() => {
      onClearCart();
      navigate("/");
    }, 4000);
  };

  if (cart.length === 0 && !showSuccess) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white px-4">
        <h2 className="text-3xl font-bold mb-4">Your cart is empty!</h2>
        <p className="text-gray-400 mb-8">
          Add something to your cart before checking out.
        </p>
        <Link
          to="/listings"
          className="bg-accent-blue text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition"
        >
          Explore Listings
        </Link>
      </div>
    );
  }

  if (showSuccess) {
    return (
      <div className="fixed inset-0 z-50 bg-dark flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-500">
        <div className="bg-dark-card p-12 rounded-3xl border border-accent-blue/20 shadow-2xl max-w-lg w-full">
          <FaCheckCircle className="text-8xl text-green-500 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]" />
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Order Placed!
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Congratulations! Your dream motorcycle is being prepared for
            delivery. A confirmation email has been sent to{" "}
            <span className="text-accent-blue font-semibold">
              {formData.email}
            </span>
            .
          </p>
          <div className="p-4 bg-accent-blue/5 border border-accent-blue/20 rounded-xl text-accent-blue text-sm font-semibold animate-pulse">
            Redirecting to home page shortly...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <Link
          to="/cart"
          className="inline-flex items-center text-accent-blue hover:underline mb-4 font-semibold"
        >
          <FaArrowLeft className="mr-2" />
          Back to Cart
        </Link>
        <h1 className="text-4xl font-bold text-white">Secure Checkout</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-3 gap-12"
      >
        {/* Shipping & Payment Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Shipping Information */}
          <section className="bg-dark-card p-8 rounded-2xl border border-white/10 shadow-xl space-y-6">
            <div className="flex items-center space-x-3 text-white mb-2">
              <FaTruck className="text-accent-blue text-2xl" />
              <h2 className="text-2xl font-bold">Shipping Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400 flex items-center">
                  <FaUser className="mr-2" /> Full Name
                </label>
                <input
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-dark border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-accent-blue transition"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 flex items-center">
                  <FaEnvelope className="mr-2" /> Email Address
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-dark border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-accent-blue transition"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm text-gray-400 flex items-center">
                  <FaMapMarkerAlt className="mr-2" /> Delivery Address
                </label>
                <input
                  required
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-dark border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-accent-blue transition"
                  placeholder="123 Motor Street, Kathmandu"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 flex items-center">
                  <FaCity className="mr-2" /> City
                </label>
                <input
                  required
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-dark border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-accent-blue transition"
                  placeholder="Kathmandu"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Zip Code</label>
                <input
                  required
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  className="w-full bg-dark border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-accent-blue transition"
                  placeholder="44600"
                />
              </div>
            </div>
          </section>

          {/* Payment Information */}
          <section className="bg-dark-card p-8 rounded-2xl border border-white/10 shadow-xl space-y-6">
            <div className="flex items-center space-x-3 text-white mb-2">
              <FaCreditCard className="text-accent-blue text-2xl" />
              <h2 className="text-2xl font-bold">Payment Details</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-2 md:col-span-4">
                <label className="text-sm text-gray-400 flex items-center">
                  <FaLock className="mr-2" /> Card Number
                </label>
                <div className="relative">
                  <input
                    required
                    maxLength="19"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="w-full bg-dark border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-accent-blue transition pl-12"
                    placeholder="0000 0000 0000 0000"
                  />
                  <FaCreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm text-gray-400">Expiry Date</label>
                <input
                  required
                  maxLength="5"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleChange}
                  className="w-full bg-dark border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-accent-blue transition"
                  placeholder="MM/YY"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm text-gray-400">CVV Code</label>
                <input
                  required
                  maxLength="3"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="w-full bg-dark border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-accent-blue transition"
                  placeholder="123"
                />
              </div>
            </div>

            <div className="p-4 bg-accent-blue/5 rounded-xl border border-accent-blue/10 flex items-start space-x-3 text-xs text-gray-400">
              <FaLock className="mt-0.5 text-accent-blue" />
              <p>
                Your transaction is encrypted with 256-bit SSL. MotoMarket does
                not store your card details.
              </p>
            </div>
          </section>
        </div>

        {/* Order Summary Sidebar */}
        <div className="space-y-6">
          <div className="bg-dark-card p-8 rounded-2xl border border-white/10 shadow-2xl sticky top-24">
            <h2 className="text-xl font-bold text-white mb-6">Final Summary</h2>

            <div className="space-y-4 mb-6 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
              {cart.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <img
                    src={item.image}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div className="flex-grow min-w-0">
                    <p className="text-white text-sm font-bold truncate">
                      {item.name}
                    </p>
                    <p className="text-accent-blue text-xs">
                      Rs {item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10 mb-8 text-sm">
              <div className="flex justify-between text-gray-400">
                <span>Items Subtotal</span>
                <span>Rs {total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Registration Fees</span>
                <span>Rs 5,500</span>
              </div>
              <div className="flex justify-between text-gray-400 italic">
                <span>Handling Fee</span>
                <span className="text-green-500 underline">WAIVED</span>
              </div>
              <div className="flex justify-between text-white font-bold text-lg pt-2">
                <span>Grand Total</span>
                <span className="text-accent-blue">
                  Rs {(total + 5500).toLocaleString()}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-accent-orange hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-accent-orange/30 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
            >
              <FaLock className="text-sm mb-0.5" />
              <span>Place Your Order</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
