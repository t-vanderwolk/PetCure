import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section className="bg-pink-50 pt-24 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-pink-600 mb-4">About the Creator</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the founder of PetCure and the two pawsitively perfect pups who inspired it all.
          </p>
        </motion.div>

        {/* Origin Story */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="bg-white rounded-2xl shadow-md border border-pink-200 p-6 mb-10"
        >
          <p className="text-lg text-gray-800 mb-4">
            Hi, I’m <span className="font-bold text-pink-500">Taylor</span> — the creator of PetCure and a loving dog mom to two very different (but equally spoiled) pups: Karma, my sweet and spunky 5-year-old Pomsky, and Beatrix (or “Bea” for short), my loyal 4-year-old American Akita.
          </p>
          <p className="text-lg text-gray-800">
            They’ve been my inspiration, my motivation, and—let’s be honest—my product testers and live-in models from day one.
          </p>
        </motion.div>

        {/* Product Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="bg-white rounded-2xl shadow-md border border-pink-200 p-6 mb-10"
        >
          <p className="text-lg text-gray-800">
            The idea for PetCure was born from a real problem I faced as a pet parent: the stress, struggle, and expense of regular nail trims. Karma and Bea couldn’t be more different in size, personality, or lifestyle—making it nearly impossible to find a grooming solution that worked for both. That’s what pushed me to create a stress-free, passive nail care system for every kind of home.
          </p>
        </motion.div>

        {/* Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="bg-pink-50/60 backdrop-blur-md p-6 rounded-xl shadow-md border border-pink-200 mb-10"
        >
          <p className="text-lg font-medium text-gray-800 leading-relaxed">
            Our flagship product, <span className="font-semibold text-pink-500">PediSteps</span>, are textured stair pads that file your pet’s nails as they walk—no clippers, no groomer visits, no stress. And for homes without stairs, we’re excited to soon launch <span className="font-semibold text-pink-500">PediWalk</span>, a hallway version of the same paw-friendly innovation.
          </p>
        </motion.div>

        {/* Product Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="bg-white rounded-2xl shadow-md border border-pink-200 p-6 mb-10 flex flex-col items-center"
        >
          <h3 className="text-2xl font-bold text-pink-600 mb-4">Product Architecture</h3>
          <p className="text-gray-700 text-center max-w-2xl mb-4">
            Each PediStep and PediWalk features a carefully engineered dual-layer design—combining a textured emery surface with a studded, non-slip vinyl base. This ensures both function and comfort while blending seamlessly into your home.
          </p>
          <img
            src="/images/closeup.jpeg"
            alt="Close-up view showing PediSteps and PediWalk layers"
            className="w-full max-w-2xl rounded-lg border border-pink-200 shadow-sm"
          />
        </motion.div>

        {/* Nail Health Infographic */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="bg-white rounded-2xl shadow-md border border-pink-200 p-6 mb-10"
        >
          <h3 className="text-2xl font-bold text-pink-600 mb-4">Why Nail Health Matters</h3>
          <p className="text-lg text-gray-700 mb-4">
            Overgrown nails can cause your pet’s toes to splay, leading to poor paw posture, joint strain, and orthopedic issues. Regular filing supports proper weight distribution and healthy movement.
          </p>
          <img
            src="/images/nail-posture-infographic.jpeg"
            alt="Dog nail health posture infographic"
            className="w-full rounded-lg border border-pink-200 shadow-sm"
          />
        </motion.div>

        {/* Lifestyle Photo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="bg-pink-50/60 backdrop-blur-md p-6 rounded-xl shadow-md border border-pink-200 mb-10 flex flex-col items-center"
        >
          <h3 className="text-2xl font-bold text-pink-600 mb-4">Real Life Inspiration</h3>
          <p className="text-lg text-gray-700 text-center mb-4 max-w-2xl">
            Meet Karma and Bea—my ride-or-die duo. No, they’re not *actually* sisters... but Karma (the older sister and undeniable alpha) runs a tight ship. They’ve tested every prototype and approved every paw-filed step.
          </p>
          <img
            src="/images/karma-bea2.jpeg"
            alt="Taylor with Karma and Bea at home"
            className="w-full max-w-3xl rounded-xl border border-pink-200 shadow-md object-cover"
          />
        </motion.div>

        {/* Mission Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 1 }}
          className="text-lg text-center text-gray-800 max-w-3xl mx-auto mb-10"
        >
          At PetCure, our mission is simple: to make pet grooming safer, easier, and more comfortable for pets and their humans. Whether you live in a two-story house or a studio apartment, have a 100-pound Akita or a 10-pound tabby, PetCure is designed to fit seamlessly into your routine—and your home.
        </motion.p>

        {/* Tagline */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 1 }}
          className="text-pink-500 text-xl font-serif italic text-center"
        >
          “Because grooming should feel like care, not a chore. Because every pet deserves a Perfect. Polished. Paw.”
        </motion.blockquote>
      </div>
    </section>
  );
}

export default About;