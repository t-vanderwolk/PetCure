import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Compare from './Compare';
import Invest from './Invest';

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function About() {
  return (
    <section className="bg-pink-50 pt-24 pb-20 min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* Hero Section */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-pink-600 mb-4">Welcome to PetCure</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Transforming pet grooming from a stressful chore into a seamless, luxurious experience.
          </p>
        </motion.div>

        {/* Problem/Solution */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md border border-pink-200 p-8 text-center"
        >
          <h2 className="text-4xl font-bold text-pink-600 mb-6">Why PetCure?</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-6">
            Today’s pet parents expect better—and PetCure delivers. We eliminate the fear, stress, and hassle of nail care with a passive, science-backed solution pets and owners love.
          </p>
          <p className="text-pink-500 font-semibold text-xl">Step. File. Repeat.</p>
        </motion.div>

        {/* Product Highlights */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* PediSteps */}
          <div className="bg-white rounded-2xl shadow-lg border border-pink-200 p-8 flex flex-col items-center text-center">
            <img src="/images/pedi-steps1.jpg" alt="PediSteps" className="w-full rounded-xl mb-6" />
            <h3 className="text-2xl font-bold text-pink-600 mb-4">PediSteps</h3>
            <p className="text-gray-700 mb-6">
              Textured stair pads that naturally file your pet’s nails—blending seamlessly into multi-level homes.
            </p>
            <Link
              to="/pedisteps"
              className="px-6 py-3 text-white bg-pink-500 rounded-full shadow-md hover:bg-pink-600 transition font-semibold"
            >
              Shop PediSteps
            </Link>
          </div>

          {/* PediWalk */}
          <div className="bg-white rounded-2xl shadow-lg border border-pink-200 p-8 flex flex-col items-center text-center">
            <img src="/images/pedi-walk1.jpeg" alt="PediWalk" className="w-full rounded-xl mb-6" />
            <h3 className="text-2xl font-bold text-pink-600 mb-4">PediWalk</h3>
            <p className="text-gray-700 mb-6">
              Hallway-friendly nail filing, perfect for single-level homes—no clippers, no stress.
            </p>
            <Link
              to="/pediwalk"
              className="px-6 py-3 text-white bg-pink-500 rounded-full shadow-md hover:bg-pink-600 transition font-semibold"
            >
              Shop PediWalk
            </Link>
          </div>
        </motion.div>

        {/* Product Architecture */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md border border-pink-200 p-10 text-center"
        >
          <h3 className="text-3xl font-bold text-pink-600 mb-4">Product Architecture</h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Each pad features a premium textured emery surface bonded to a non-slip, studded vinyl base—crafted for safety, durability, and style.
          </p>
          <img
            src="/images/closeup.jpeg"
            alt="Closeup of PediSteps and PediWalk"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-md border border-pink-200"
          />
        </motion.div>

        {/* How It Works */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md border border-pink-200 p-10 text-center"
        >
          <h3 className="text-3xl font-bold text-pink-600 mb-6">How It Works</h3>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8">
            Simply place PediSteps on stairs or PediWalk in the hallway. Your pet walks. Nature does the rest.
          </p>
          <img
            src="/images/pedi-steps-hero.jpeg"
            alt="Dog using PediSteps"
            className="w-full max-w-3xl mx-auto rounded-xl shadow-lg border border-pink-200"
          />
          <p className="text-gray-600 italic text-sm mt-4">Featuring Bea — our stair queen and paw model.</p>

          {/* 3-Step Icons */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: 1, title: "Step", desc: "Natural walking motion." },
              { number: 2, title: "File", desc: "The emery surface gently shapes their nails." },
              { number: 3, title: "Repeat", desc: "Effortless daily grooming." }
            ].map((item) => (
              <div key={item.number} className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-pink-100 rounded-full text-pink-600 font-bold text-xl mb-4">
                  {item.number}
                </div>
                <h4 className="font-semibold text-pink-600 mb-2">{item.title}</h4>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Nail Health */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-pink-50/60 backdrop-blur-md rounded-2xl shadow-md border border-pink-200 p-10 text-center"
        >
          <h3 className="text-3xl font-bold text-pink-600 mb-6">Why Nail Health Matters</h3>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            Healthy nails = healthy paws. Overgrown nails alter posture, cause pain, and limit mobility. Passive filing is natural prevention.
          </p>
          <img
            src="/images/nail-posture-infographic.jpeg"
            alt="Nail health infographic"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-md border border-pink-200"
          />
        </motion.div>

        {/* Mission Section */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-pink-600 mb-4">Our Mission</h3>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8">
            PetCure champions safer, smarter, and more natural pet care innovations—because every paw deserves perfect polish.
          </p>
          <blockquote className="text-pink-500 italic text-2xl font-serif">
            "Perfect. Polished. Paws."
          </blockquote>
        </motion.div>
          <motion.hr
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="my-16 border-t-4 border-pink-200 w-3/4 mx-auto rounded-full"
              />

        {/* Compare */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="compare"
        >
          <Compare />
        </motion.div>

            <motion.hr
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="my-16 border-t-4 border-pink-200 w-3/4 mx-auto rounded-full"
                />

        {/* Invest */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="invest"
        >
          <Invest />
        </motion.div>

        <button 
           
            className="fixed bottom-6 right-6 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-5 rounded-full shadow-lg transition duration-300"
            aria-label="Back to Top"
          >
            ↑ Top
          </button>

      </div>
    </section>
  );
}

export default About;