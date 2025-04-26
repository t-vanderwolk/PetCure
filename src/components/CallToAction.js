// src/components/CallToAction.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function CallToAction() {
  return (
    <section className="w-full px-6 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.5, duration: 1 }}
        className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600">
          Ready to Step Up Your Pet’s Wellness?
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl">
          Discover the effortless way to support healthy paws, polished nails, and happier pets—without the stress.
        </p>

        {/* Button Group */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <Link
            to="/products"
            className="px-8 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600 transition text-lg"
          >
            Browse Products
          </Link>
          <Link
            to="/about"
            className="px-8 py-3 border border-pink-500 text-pink-500 font-semibold rounded-full hover:bg-pink-50 transition text-lg"
          >
            Learn More
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default CallToAction;