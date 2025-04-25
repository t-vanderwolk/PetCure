// src/components/CallToAction.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function CallToAction() {
  return (
    <section className="bg-pink-50 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-pink-600 mb-6">Ready to Step Up Your Pet’s Wellness?</h2>
        <p className="text-lg text-gray-700 mb-8">
          Discover the effortless way to support healthy paws, polished nails, and happier pets—without the stress.
        </p>
        <Link
          to="/products"
          className="inline-block px-8 py-4 text-white bg-pink-500 hover:bg-pink-600 rounded-full text-lg font-semibold shadow transition"
        >
          Explore Our Products
        </Link>
      </motion.div>
    </section>
  );
}

export default CallToAction;