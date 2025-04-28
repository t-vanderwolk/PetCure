// src/pages/Products.js
import React from 'react';
import { Link } from 'react-router-dom';
import ComingSoon from './ComingSoon';

function Products() {
  return (
    <section className="pt-24 pb-20 min-h-screen overflow-x-hidden bg-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Products Heading */}
        <h1 className="text-5xl font-bold text-pink-600 mb-12 text-center">
          Our Products
        </h1>

        {/* Featured Products Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">

          {/* PediSteps Card */}
          <div className="group bg-white rounded-2xl shadow-md p-6 flex flex-col items-center border border-pink-200 
          transition transform hover:-translate-y-2 hover:shadow-xl hover:border-pink-400 duration-300 ease-in-out">
            <img 
              src="/images/pedi-steps1.jpg" 
              alt="PediSteps" 
              className="h-64 object-contain mb-6 rounded-xl"
            />
            <h2 className="text-2xl font-bold text-pink-500 mb-4">PediSteps</h2>
            <p className="text-gray-600 mb-6 text-center">
              Textured stair pads that naturally file your dog's nails through everyday movement.
            </p>
            <Link 
              to="/pedisteps"
              className="bg-pink-500 group-hover:shadow-lg group-hover:shadow-pink-200 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
            >
              Buy Now
            </Link>
          </div>

          {/* PediWalk Card */}
          <div className="group bg-white rounded-2xl shadow-md p-6 flex flex-col items-center border border-pink-200 
          transition transform hover:-translate-y-2 hover:shadow-xl hover:border-pink-400 duration-300 ease-in-out">
            <img 
              src="/images/pedi-walk1.jpeg" 
              alt="PediWalk" 
              className="h-64 object-contain mb-6 rounded-xl"
            />
            <h2 className="text-2xl font-bold text-pink-500 mb-4">PediWalk</h2>
            <p className="text-gray-600 mb-6 text-center">
              Hallway pads designed for homes without stairs — effortless, passive nail grooming.
            </p>
            <Link 
              to="/pediwalk"
              className="bg-pink-500 group-hover:shadow-lg group-hover:shadow-pink-200 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
            >
              Buy Now
            </Link>
          </div>

        </div>

        {/* Coming Soon Section */}
        <ComingSoon />

      </div>
    </section>
  );
}

export default Products;