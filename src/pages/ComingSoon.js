import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ComingSoon() {
  return (
    <section className="bg-pink-50 pt-24 pb-20 min-h-screen overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-pink-600 mb-6"
        >
          What's Coming Next
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-gray-700 text-lg max-w-3xl mx-auto mb-12"
        >
          At PetCure, we're always a step ahead. Here’s a peek at the exciting new releases we're preparing to polish your pet’s wellness journey even further.
        </motion.p>

        {/* Product Expansion Highlights */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >

        {/* Translucent, Colored, Patterned Emery Sheets */}
<motion.div 
  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
  className="bg-white rounded-2xl shadow-md p-8 border border-pink-200 flex flex-col items-stretch justify-between"
>
  <div className="flex flex-col flex-grow">
    <h3 className="text-2xl font-bold text-pink-600 mb-4">
      Translucent, Colored & Patterned Emery Sheets
    </h3>
    <p className="text-gray-700 text-base mb-8">
      Soon, you’ll be able to customize your PediSteps and PediWalk with translucent, blush-toned, and elegant patterned emery paper options—perfect for blending seamlessly into any style of home décor.
    </p>
  </div>

  <div className="w-full h-64 flex items-center justify-center overflow-hidden mt-auto mb-6">
    <img 
      src="/images/emery-kits.png" 
      alt="Emery Replacement Kits" 
      className="h-full object-contain"
    />
  </div>

  <a
    href="/emerykits"
    className="inline-block mt-auto px-6 py-3 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition text-base font-semibold text-center"
  >
    Learn More
  </a>
</motion.div>

          {/* Hardwood Version */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="bg-white rounded-2xl shadow-md p-8 border border-pink-200 flex flex-col items-stretch justify-between"
          >
            <div className="flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-pink-600 mb-4">Hardwood-Friendly Versions</h3>
              <p className="text-gray-700 text-base mb-8">
                Launching soon: PediSteps and PediWalk with a non-slip hardwood-compatible base, paired with a choice of classic black or translucent emery finishes. 
                Stylish, safe, and perfect for smooth flooring.
              </p>
            </div>
            <div className="w-full h-64 flex items-center justify-center overflow-hidden mt-auto">
              <img 
                src="/images/hardwood-version.jpeg" 
                alt="Hardwood Version" 
                className="h-full object-contain"
              />
            </div>
          </motion.div>

        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16"
        >
          <p className="text-gray-700 mb-6">
            Want to be the first to know when these launch?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition text-lg font-semibold"
          >
            Join Our VIP Waitlist
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default ComingSoon;
