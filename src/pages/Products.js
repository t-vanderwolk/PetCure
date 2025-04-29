import React from 'react';
import { Link } from 'react-router-dom';
import ComingSoon from './ComingSoon';
import { motion } from 'framer-motion';

function Products() {
  return (
    <section className="pt-32 pb-24 min-h-screen overflow-x-hidden bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Products Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-pink-600 mb-4">
            Our Products
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Passive wellness, polished paws. Discover the PetCure collection designed for modern pet homes.
          </p>
        </motion.div>

        {/* Featured Products Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24"
        >
          {/* PediSteps Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="bg-white rounded-2xl shadow-md border border-pink-200 hover:border-pink-400 hover:shadow-xl p-8 flex flex-col items-center transition transform hover:-translate-y-2 duration-300"
          >
            <img 
              src="/images/pedi-steps1.jpg" 
              alt="PediSteps" 
              className="h-64 object-cover rounded-xl mb-6 shadow-sm"
            />
            <h2 className="text-3xl font-bold text-pink-500 mb-4">
              PediSteps
            </h2>
            <p className="text-gray-700 mb-6 text-center text-base">
              Elegant stair pads designed to file your pet’s nails naturally—each step is a step toward healthier paws.
            </p>
            <Link 
              to="/pedisteps"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow transition duration-300"
            >
              Buy Now
            </Link>
          </motion.div>

          {/* PediWalk Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="bg-white rounded-2xl shadow-md border border-pink-200 hover:border-pink-400 hover:shadow-xl p-8 flex flex-col items-center transition transform hover:-translate-y-2 duration-300"
          >
            <img 
              src="/images/pedi-walk1.jpeg" 
              alt="PediWalk" 
              className="h-64 object-cover rounded-xl mb-6 shadow-sm"
            />
            <h2 className="text-3xl font-bold text-pink-500 mb-4">
              PediWalk
            </h2>
            <p className="text-gray-700 mb-6 text-center text-base">
              The hallway essential for pet parents without stairs—natural filing with every cozy step.
            </p>
            <Link 
              to="/pediwalk"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow transition duration-300"
            >
              Buy Now
            </Link>
          </motion.div>
        </motion.div>

        {/* Coming Soon Section */}
        <div id="coming-soon" className="mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-pink-600 text-center"
          >
           
          </motion.h2>

          <ComingSoon />
        </div>

      </div>
    </section>
  );
}

export default Products;