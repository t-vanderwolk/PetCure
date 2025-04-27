// src/pages/Invest.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Invest() {
  return (
    <section className="bg-pink-50 pt-24 pb-20 min-h-screen overflow-x-hidden relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Floating Animated Badge */}
    {/* Floating Animated Badge (Centered under heading) */}
<motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2, duration: 1 }}
  className="mx-auto w-fit px-6 py-2 sm:px-4 sm:py-1 mt-8 mb-12 bg-pink-500 text-white text-sm sm:text-xs rounded-full shadow-lg backdrop-blur-md hover:scale-105 hover:shadow-pink-300 transition transform duration-300 ease-in-out"
>
  Now Accepting Early Investors
</motion.div>

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
          className="text-gray-700 text-lg max-w-3xl mx-auto mb-12"
        >
          PetCure is revolutionizing pet wellness with the first passive, luxury nail care solution. Be part of our journey to scale innovation, elevate pet care, and lead a booming industry.
        </motion.p>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mb-16"
        >
          <img 
            src="/images/invest-hero.png" 
            alt="Investment Banner" 
            className="rounded-2xl shadow-md mx-auto max-h-[400px] object-cover"
          />
        </motion.div>

        {/* Download Pitch Deck Button */}
        <motion.a
          href="/documents/petcure-pitch-deck.pdf"
          download
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="inline-block px-8 py-4 mb-16 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition text-lg font-semibold"
        >
          Download Full Pitch Deck
        </motion.a>

        {/* One Page Investment Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mb-20"
        >
          <img 
            src="/images/invest-sum.png" 
            alt="One Page Investment Summary" 
            className="rounded-2xl shadow-md mx-auto max-h-[500px] object-cover"
          />
        </motion.div>

        {/* Investor Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {[
            { title: 'Massive Market', text: 'The global pet care market is projected to surpass $250 billion by 2030.' },
            { title: 'First Mover Advantage', text: 'PetCure is the only passive nail grooming solution engineered for daily use.' },
            { title: 'Premium Branding', text: 'Luxury spa-style design meets functional wellness—positioned for pet owners who demand more.' }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-pink-200 shadow-md flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-pink-600 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.text}</p>
            </div>
          ))}
        </motion.div>

        {/* Financial Projections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mb-20"
        >
          <img 
            src="/images/invest-charts.png" 
            alt="Financial Projections and Cost Breakdown Charts" 
            className="rounded-2xl shadow-md mx-auto max-h-[500px] object-cover"
          />
        </motion.div>

        {/* Final CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="text-center"
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