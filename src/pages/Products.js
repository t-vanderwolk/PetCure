import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Products() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="bg-pink-50 pt-24 pb-20 min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our paw-friendly grooming innovations designed to keep your pet’s nails polished and healthy—without the stress.
          </p>
        </div>

        {/* Product Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* PediSteps */}
          <div className="bg-white rounded-2xl shadow-lg border border-pink-200 overflow-hidden flex flex-col">
            <div className="overflow-hidden">
              <img
                src="/images/pedi-steps1.jpg"
                alt="PediSteps"
                className="w-full"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between items-center text-center">
              <h3 className="text-3xl font-bold text-pink-600 mb-2">PediSteps</h3>
              <p className="text-gray-700 text-base mb-4">
                Textured stair pads that naturally file your pet’s nails with every step. Blending seamlessly into your home, they offer a passive and stylish grooming solution for multi-level living.
              </p>
              <Link
                to="/pedisteps"
                className="px-5 py-2 text-white bg-pink-500 rounded-full shadow hover:bg-pink-600 transition font-medium"
              >
                Buy Now
              </Link>
            </div>
          </div>

          {/* PediWalk */}
          <div className="bg-white rounded-2xl shadow-lg border border-pink-200 overflow-hidden flex flex-col">
            <div className="overflow-hidden">
              <img
                src="/images/pedi-walk1.jpeg"
                alt="PediWalk"
                className="w-full"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between items-center text-center">
              <h3 className="text-3xl font-bold text-pink-600 mb-2">PediWalk</h3>
              <p className="text-gray-700 text-base mb-4">
                A hallway-friendly version of our flagship product. Designed for single-level homes, PediWalk is elegant, customizable, and made for stylish daily wear and tear.
              </p>
              <Link
                to="/pediwalk"
                className="px-5 py-2 text-white bg-pink-500 rounded-full shadow hover:bg-pink-600 transition font-medium"
              >
                Buy Now
              </Link>
            </div>
          </div>

          {/* Placeholder for future image */}
          <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-pink-300 rounded-2xl bg-pink-100/50 text-center">
            <h4 className="text-pink-500 font-bold text-xl mb-2">Future Product Image</h4>
            <p className="text-gray-600 text-sm max-w-xs">
              Placeholder for a new PediSteps variant or lifestyle photo.
            </p>
          </div>

          {/* Another Placeholder */}
          <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-pink-300 rounded-2xl bg-pink-100/50 text-center">
            <h4 className="text-pink-500 font-bold text-xl mb-2">New Launch Visual</h4>
            <p className="text-gray-600 text-sm max-w-xs">
              Placeholder for PediWalk premium pattern editions or hardwood version.
            </p>
          </div>

        </motion.div>
      </div>
    </motion.section>
  );
}

export default Products;