// src/components/CallToAction.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function CallToAction() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="bg-pink-50 py-16 px-6 relative z-10"
    >
      <div className="max-w-5xl mx-auto text-center bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-lg">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-pink-600 mb-6"
        >
          Ready to Step Up Your Pet’s Wellness?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto"
        >
          Discover the effortless way to support healthy paws, polished nails, and happier pets—without the stress.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <Link
            to="/products"
            className="inline-block px-8 py-4 bg-pink-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-pink-600 transition"
          >
            Explore Our Products
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default CallToAction;