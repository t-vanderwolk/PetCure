// src/pages/Invest.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function Invest() {
  return (
    <section className="bg-pink-50 pt-24 pb-20 min-h-screen overflow-x-hidden relative">
      <div className="max-w-7xl mx-auto px-6 space-y-20 text-center">

        {/* Badge */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-fit mx-auto px-6 py-2 bg-pink-500 text-white text-sm rounded-full shadow-lg hover:scale-105 transition"
        >
          Now Accepting Early Investors
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-5xl font-bold text-pink-600"
        >
          Invest in PetCure
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-700 text-lg max-w-3xl mx-auto"
        >
          PetCure is revolutionizing pet wellness with the first passive, luxury nail care solution. Be part of our journey to scale innovation, elevate pet care, and lead a booming industry.
        </motion.p>

        {/* Hero Image */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/images/invest-hero.png"
            alt="Investment Banner"
            className="rounded-2xl shadow-md border border-pink-200 mx-auto max-h-[400px] object-cover"
          />
        </motion.div>

        {/* Pitch Deck Button */}
        <motion.a
          href="/documents/petcure-pitch-deck.pdf"
          download
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-block px-8 py-4 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition text-lg font-semibold"
        >
          Download Full Pitch Deck
        </motion.a>

        {/* One Page Summary */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/images/invest-sum.png"
            alt="One Page Investment Summary"
            className="rounded-2xl shadow-md border border-pink-200 mx-auto max-h-[500px] object-cover"
          />
        </motion.div>

        {/* Highlights */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { title: 'Massive Market', text: 'The global pet care market is projected to surpass $250 billion by 2030.' },
            { title: 'First Mover Advantage', text: 'PetCure is the only passive nail grooming solution engineered for daily use.' },
            { title: 'Premium Branding', text: 'Luxury spa-style design meets functional wellness—positioned for pet owners who demand more.' }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-pink-200 shadow-md text-center">
              <h3 className="text-2xl font-bold text-pink-600 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.text}</p>
            </div>
          ))}
        </motion.div>

        {/* Financial Charts */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/images/invest-charts.png"
            alt="Financial Charts"
            className="rounded-2xl shadow-md border border-pink-200 mx-auto max-h-[500px] object-cover"
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
