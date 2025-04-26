// src/pages/PediWalk.js
import React from 'react';
import { motion } from 'framer-motion';

function PediWalk() {
  return (
    <section className="bg-pink-50 pt-24 pb-20 min-h-screen overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-pink-600 mb-4">PediWalk</h1>
          <p className="text-xl font-semibold text-pink-400 mb-6">No stairs? No problem.</p>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            The hallway hero your home deserves—effortlessly filing nails, one stylish step at a time.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="w-full mb-20"
        >
          <img
            src="/images/pedi-walk1.jpeg"
            alt="Dog walking on PediWalk mat"
            className="rounded-2xl shadow-lg p-6 border border-pink-200 object-cover max-h-[500px] mx-auto"
          />
        </motion.div>

        {/* How It Works - 3 Step Flow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-24"
        >
          {[
            { title: 'Step 1', subtitle: 'Walk Naturally', description: 'Your pet moves across the PediWalk during their daily routine—no learning curve needed.' },
            { title: 'Step 2', subtitle: 'Gentle Filing', description: 'The textured emery surface softly buffs and maintains nails with every step.' },
            { title: 'Step 3', subtitle: 'Healthier Paws', description: 'Shorter nails improve posture, joint alignment, and daily mobility.' }
          ].map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-white rounded-2xl shadow-md p-6 border border-pink-200 flex flex-col items-center"
            >
              <div className="text-2xl font-bold text-pink-500 mb-2">{step.title}</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">{step.subtitle}</div>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Callout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="bg-white rounded-2xl shadow-lg border border-pink-200 p-8 mb-24 text-center"
        >
          <h3 className="text-2xl font-bold text-pink-600 mb-4">The Only Passive Grooming Solution</h3>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            PediWalk delivers spa-quality, stress-free nail care—without clippers, grinding noise, or fear. Built for elegance. Engineered for everyday life.
          </p>
        </motion.div>


      </div>
    </section>
  );
}

export default PediWalk;