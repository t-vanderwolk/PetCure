// src/pages/Invest.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Invest() {
  return (
    <section className="bg-pink-50 pt-24 pb-20 min-h-screen overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-pink-600 mb-6"
        >
          Invest in PetCure
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-gray-700 text-lg max-w-3xl mx-auto mb-10"
        >
          PetCure is revolutionizing pet wellness with the first passive, luxury nail care solution. Be part of our journey to scale innovation, elevate pet care, and lead a booming industry.
        </motion.p>

        {/* Download Pitch Deck */}
        <motion.a
          href="/documents/petcure-pitch-deck.pdf"
          download
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="inline-block px-8 py-4 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition text-lg font-semibold mb-8"
        >
          Download Pitch Deck
        </motion.a>

        {/* Investor Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-20"
        >
          <div className="bg-white rounded-2xl shadow-md p-6 border border-pink-200">
            <h3 className="text-2xl font-bold text-pink-600 mb-2">Massive Market</h3>
            <p className="text-gray-700 text-sm">
              The global pet care market is projected to surpass $250 billion by 2030.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 border border-pink-200">
            <h3 className="text-2xl font-bold text-pink-600 mb-2">First Mover Advantage</h3>
            <p className="text-gray-700 text-sm">
              PetCure is the only passive nail grooming solution engineered for daily use.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 border border-pink-200">
            <h3 className="text-2xl font-bold text-pink-600 mb-2">Premium Branding</h3>
            <p className="text-gray-700 text-sm">
              Luxury spa-style design meets functional wellness—positioned for pet owners who demand more.
            </p>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white/70 backdrop-blur-md text-pink-500 rounded-full shadow-md hover:bg-white transition text-lg font-semibold"
          >
            Contact for Investment Inquiry
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Invest;
