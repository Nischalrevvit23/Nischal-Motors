import React from "react";
import { Link } from "react-router-dom";
import {
  FaTrash,
  FaArrowLeft,
  FaShoppingCart,
  FaMotorcycle,
} from "react-icons/fa";

const CartPage = ({ cart, onRemove }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center space-x-4 mb-12">
        <FaShoppingCart className="text-4xl text-accent-blue" />
        <h1 className="text-4xl font-bold text-white">Your Shopping Cart</h1>
      </div>

      {cart.length === 0 ? (
        <div className="bg-dark-card rounded-2xl p-16 text-center border border-white/10">
          <FaMotorcycle className="text-8xl text-gray-700 mx-auto mb-6 opacity-20" />
          <h2 className="text-2xl font-bold text-white mb-4">
            Your cart feels a bit light...
          </h2>
          <p className="text-gray-400 mb-8">
            Go ahead and add some horsepower to your collection!
          </p>
          <Link
            to="/listings"
            className="inline-block bg-accent-blue hover:bg-blue-500 text-black font-bold px-8 py-3 rounded-full transition-all transform hover:scale-105"
          >
            Browse Motorcycles
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-dark-card p-6 rounded-2xl border border-white/5 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 hover:border-accent-blue/30 transition shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full md:w-40 h-32 object-cover rounded-xl"
                />
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-accent-blue text-xs font-bold uppercase tracking-wider">
                        {item.brand}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {item.engine}
                      </p>
                    </div>
                    <p className="text-xl font-bold text-accent-orange">
                      Rs {item.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <Link
                      to={`/bike/${item.id}`}
                      className="text-gray-400 hover:text-accent-blue text-sm underline transition"
                    >
                      View Product Details
                    </Link>
                    <button
                      onClick={() => onRemove(index)}
                      className="text-gray-500 hover:text-red-500 transition-colors flex items-center space-x-2 text-sm font-semibold"
                    >
                      <FaTrash />
                      <span>Remove Item</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <Link
              to="/listings"
              className="inline-flex items-center text-accent-blue hover:underline font-semibold mt-4"
            >
              <FaArrowLeft className="mr-2" />
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-dark-card p-8 rounded-2xl border border-white/10 shadow-2xl sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal ({cart.length} items)</span>
                  <span className="text-white">
                    Rs {total.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping Cost</span>
                  <span className="text-green-500 font-semibold">FREE</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Taxes & Fees</span>
                  <span className="text-white">Calculated at checkout</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 mb-8 flex justify-between items-center">
                <span className="text-lg font-bold text-white">Total</span>
                <span className="text-3xl font-extrabold text-accent-blue">
                  Rs {total.toLocaleString()}
                </span>
              </div>

              <Link
                to="/checkout"
                className="block w-full bg-accent-blue hover:bg-blue-500 text-black text-center font-bold py-4 rounded-xl transition-all shadow-lg shadow-accent-blue/30 transform hover:scale-[1.02]"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
