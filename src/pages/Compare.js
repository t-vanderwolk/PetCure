// src/pages/Compare.js
import React from 'react';
import { motion } from 'framer-motion';
import CallToAction from '../components/CallToAction'; // adjust path if needed

function Compare() {
  return (
    <section className="bg-pink-50 pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-pink-600 mb-4">How PetCure Stacks Up</h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            A side-by-side comparison of PetCure versus traditional nail care methods.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="overflow-x-auto"
        >
          <table className="w-full table-auto bg-white rounded-2xl shadow-lg border border-pink-200">
            <thead className="bg-pink-100">
              <tr>
                <th className="py-4 px-6 text-left text-pink-600 text-xl font-bold">Feature</th>
                <th className="py-4 px-6 text-center text-pink-600 text-xl font-bold">PetCure</th>
                <th className="py-4 px-6 text-center text-pink-600 text-xl font-bold">Traditional Clipping/Grinding</th>
                <th className="py-4 px-6 text-center text-pink-600 text-xl font-bold">Scratch Boards</th>
                <th className="py-4 px-6 text-center text-pink-600 text-xl font-bold">Grooming Hammocks</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-center">
              {/* Passive Grooming */}
              <tr className="border-t border-pink-100">
                <td className="py-4 px-6 font-semibold text-left">Passive Grooming</td>
                <td>✅</td>
                <td>❌</td>
                <td>✅ (Front Paws Only)</td>
                <td>❌</td>
              </tr>

              {/* No Restraints Needed */}
              <tr className="border-t border-pink-100">
                <td className="py-4 px-6 font-semibold text-left">No Restraints Needed</td>
                <td>✅</td>
                <td>❌</td>
                <td>✅</td>
                <td>❌</td>
              </tr>

              {/* Full Body Movement */}
              <tr className="border-t border-pink-100">
                <td className="py-4 px-6 font-semibold text-left">Full Body Movement Allowed</td>
                <td>✅</td>
                <td>❌</td>
                <td>✅</td>
                <td>❌</td>
              </tr>

              {/* Covers Front and Back Paws */}
              <tr className="border-t border-pink-100">
                <td className="py-4 px-6 font-semibold text-left">Covers Front & Back Paws</td>
                <td>✅</td>
                <td>✅</td>
                <td>❌ (Front Paws Only)</td>
                <td>❌</td>
              </tr>

              {/* Fear-Free Experience */}
              <tr className="border-t border-pink-100">
                <td className="py-4 px-6 font-semibold text-left">Fear-Free & Stress-Free</td>
                <td>✅</td>
                <td>❌</td>
                <td>✅</td>
                <td>❌</td>
              </tr>

              {/* Professional Appearance */}
              <tr className="border-t border-pink-100">
                <td className="py-4 px-6 font-semibold text-left">Stylish Home Integration</td>
                <td>✅</td>
                <td>❌</td>
                <td>❌</td>
                <td>❌</td>
              </tr>

              {/* Unique Market Position */}
              <tr className="border-t border-pink-100 bg-pink-50">
                <td className="py-4 px-6 font-semibold text-left">Only Passive Nail Care Brand</td>
                <td>✅</td>
                <td>❌</td>
                <td>❌</td>
                <td>❌</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Optional note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-center text-gray-600 text-sm mt-6"
        >
          ✅ = Fully supports natural, fear-free grooming | ❌ = Requires stress, restraint, or risk
        </motion.p>

        {/* Call To Action */}
        <CallToAction />

      </div>
    </section>
  );
}

export default Compare;