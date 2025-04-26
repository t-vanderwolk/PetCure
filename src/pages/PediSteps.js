// src/pages/PediSteps.js
import React from 'react';
import { motion } from 'framer-motion';

function PediSteps() {
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
          <h1 className="text-5xl font-bold text-pink-600 mb-4">PediSteps</h1>
          <p className="text-xl font-semibold text-pink-400 mb-6">Elevate Every Step.</p>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Turn your staircase into a natural nail salon—beautifully designed for seamless paw wellness.
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
            src="/images/pedi-steps1.jpg"
            alt="Dog walking down PediSteps"
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
            { title: 'Step 1', subtitle: 'Climb & Descend Naturally', description: 'Your pet uses the stairs daily, no training or coaxing needed.' },
            { title: 'Step 2', subtitle: 'Subtle Nail Filing', description: 'Each step features a textured emery surface that gently files nails as pets move.' },
            { title: 'Step 3', subtitle: 'Healthier Joints & Posture', description: 'Proper nail length supports better weight distribution and mobility.' }
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
          <h3 className="text-2xl font-bold text-pink-600 mb-4">Luxury You Can Step Into</h3>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            PediSteps are thoughtfully designed for both pets and interiors—combining effortless wellness with elegant home aesthetics.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default PediSteps;