import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Products() {
  return (
    <section className="bg-pink-50 pt-24 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our paw-friendly grooming innovations designed to keep your pet's nails polished and healthy—without the stress.
          </p>
        </div>

        {/* Hero Image */}
        {/* <div className="w-full mb-16">
          <img
            src="/images/pedi-steps-hero.jpeg"
            alt="Dog walking on PediSteps"
            className="rounded-xl shadow-lg w-full object-cover max-h-[500px]"
          />
        </div> */}

        {/* Product Cards */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* PediSteps */}
          <div className="bg-white rounded-2xl shadow-md border border-pink-200 overflow-hidden">
            <img
              src="/images/pedi-steps1.jpg"
              alt="PediSteps"
              className="w-full object-contain"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-pink-600 mb-2">PediSteps</h3>
              <p className="text-gray-700 mb-4">
                Textured stair pads that gently file nails with every step. Designed for multi-level homes, these pads blend effortlessly into your décor.
              </p>
              <Link
                to="/pedisteps"
                className="inline-block px-5 py-2 text-white bg-pink-500 rounded-full hover:bg-pink-600 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* PediWalk */}
          <div className="bg-white rounded-2xl shadow-md border border-pink-200 overflow-hidden">

            <img
              src="/images/pedi-walk1.jpeg"
              alt="PediWalk"
              className="w-full object-contain"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold center text-pink-600 mb-2">PediWalk</h3>
              <p className="text-gray-700 mb-4">
                A hallway-friendly version of our flagship product. PediWalk is customizable in length and perfect for single-level homes.
              </p>
              <Link
                to="/pediwalk"
                className="inline-block px-5 py-2 text-white bg-pink-500 rounded-full hover:bg-pink-600 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      
      </div>
    </section>
  );
}

export default Products;
