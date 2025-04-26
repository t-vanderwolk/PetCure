// src/pages/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="bg-pink-50 pt-24 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold text-pink-600 mb-6">Welcome to PetCure</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Transforming pet grooming from a stressful chore into a seamless, stress-free experience.
          </p>
        </motion.div>

        {/* Problem/Solution */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="bg-white rounded-2xl shadow-md border border-pink-200 p-8 mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-pink-600 mb-4">Why PetCure?</h2>
          <p className="text-gray-700 mb-6">
            Because today’s pet parents expect better—and PetCure delivers. We eliminate the fear, stress, and hassle of nail care with a passive, science-backed solution pets and owners love.
            No sedation. No traumatic vet trips. No expensive grooming bills. Just effortless, natural nail health—engineered to fit beautifully into any modern home.
          </p>
          <p className="text-pink-500 font-semibold">Step. File. Repeat.</p>
        </motion.div>

        {/* Product Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
        >
          {/* PediSteps */}
          <div className="bg-white rounded-2xl shadow-lg border border-pink-200 p-6 flex flex-col justify-between items-center text-center">
            <img src="/images/pedi-steps1.jpg" alt="PediSteps" className="w-full rounded-xl mb-4" />
            <h3 className="text-2xl font-bold text-pink-600 mb-4">PediSteps</h3>
            <p className="text-gray-700 mb-6">
              Textured stair pads for multi-level homes. Files your pet’s nails naturally as they walk.
            </p>
            <Link
              to="/pedisteps"
              className="inline-block mt-4 px-6 py-3 text-white bg-pink-500 rounded-full shadow-md hover:bg-pink-600 transition font-semibold"
            >
              Buy Now
            </Link>
          </div>

          {/* PediWalk */}
          <div className="bg-white rounded-2xl shadow-lg border border-pink-200 p-6 flex flex-col justify-between items-center text-center">
            <img src="/images/pedi-walk1.jpeg" alt="PediWalk" className="w-full rounded-xl mb-4" />
            <h3 className="text-2xl font-bold text-pink-600 mb-4">PediWalk</h3>
            <p className="text-gray-700 mb-6">
              The hallway-friendly solution for single-level living. Same passive nail filing, no stairs needed.
            </p>
            <Link
              to="/pediwalk"
              className="inline-block mt-4 px-6 py-3 text-white bg-pink-500 rounded-full shadow-md hover:bg-pink-600 transition font-semibold"
            >
              Buy Now
            </Link>
          </div>
        </motion.div>

        {/* Product Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="bg-white rounded-2xl shadow-md border border-pink-200 p-8 mb-20 flex flex-col items-center"
        >
          <h3 className="text-2xl font-bold text-pink-600 mb-4">Product Architecture</h3>
          <p className="text-gray-700 text-center max-w-2xl mb-6">
            Each PediStep and PediWalk pad features a dual-layer design: a premium textured emery surface bonded to a non-slip, studded vinyl base. Designed for safety, durability, and style.
          </p>
          <img
            src="/images/closeup.jpeg"
            alt="PediSteps and PediWalk design layers"
            className="w-full max-w-2xl rounded-lg border border-pink-200 shadow-md"
          />
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 1 }}
          className="bg-white rounded-2xl shadow-md border border-pink-200 p-8 mb-20 text-center"
        >
          <h3 className="text-2xl font-bold text-pink-600 mb-4">How It Works</h3>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-6">
            Simply place PediSteps on your stairs or PediWalk in your hallway. As your pet walks, the textured emery surface gently files their nails—no clipping, no noise, no stress.
          </p>

          {/* Hero Visual */}
          <img
            src="/images/pedi-steps-hero.jpeg"
            alt="Dog using PediSteps"
            className="w-full max-w-2xl mx-auto rounded-xl border border-pink-200 shadow-lg"
          />
          <p className="text-gray-600 italic mt-4 text-sm">
            Real-life demo starring Bea: stair queen, nail model, house security.
          </p>

          {/* 3 Step Process */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: 1, title: "Step", desc: "Your pet walks up stairs or across the hallway." },
              { number: 2, title: "File", desc: "The emery surface gently shapes their nails with every step." },
              { number: 3, title: "Repeat", desc: "Effortless maintenance from everyday movement!" }
            ].map((step) => (
              <div key={step.number} className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-pink-100 rounded-full text-pink-600 font-bold text-xl mb-4">
                  {step.number}
                </div>
                <h4 className="font-semibold text-pink-600 mb-2">{step.title}</h4>
                <p className="text-gray-700 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Nail Health */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="bg-pink-50/60 backdrop-blur-md rounded-2xl shadow-md border border-pink-200 p-8 mb-20"
        >
          <h3 className="text-2xl font-bold text-pink-600 mb-4 text-center">Why Nail Health Matters</h3>
          <p className="text-gray-700 max-w-3xl mx-auto text-center mb-6">
            Overgrown nails distort paw posture, causing arthritis, joint pain, and instability. Passive filing keeps paws strong and pain-free.
          </p>
          <img
            src="/images/nail-posture-infographic.jpeg"
            alt="Nail health infographic"
            className="w-full max-w-3xl mx-auto rounded-lg border border-pink-200 shadow-md"
          />
        </motion.div>

        {/* Final Mission */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-pink-600 mb-4">Our Mission</h3>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8">
            PetCure creates safer, smarter, stress-free grooming solutions that protect pets’ health, comfort, and happiness—naturally.
          </p>
          <blockquote className="text-pink-500 italic text-xl font-serif">
            "Perfect. Polished. Paws."
          </blockquote>
        </motion.div>

      </div>
    </section>
  );
}

export default About;