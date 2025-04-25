import React from 'react';

function About() {
  return (
    <div className="bg-white pt-24 pb-16 px-6 md:px-12 max-w-4xl mx-auto text-gray-800 font-sans">
      <h1 className="text-4xl font-serif font-bold text-pink-500 mb-6">About the Creator</h1>

      <p className="text-lg leading-relaxed mb-6">
        Hi, I’m <span className="font-bold text-pink-500">Taylor</span> — the creator of PetCure and a loving dog mom to two very different (but equally spoiled) pups: Karma, my sweet and spunky 5-year-old Pomsky, and Beatrix (or “Bea” for short), my loyal 4-year-old American Akita. They’ve been my inspiration, my motivation, and—let’s be honest—my product testers and live-in models from day one.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        The idea for PetCure was born out of a real problem I faced as a pet parent: the stress, struggle, and expense of regular nail trims. Karma and Bea couldn’t be more different in size, personality, or lifestyle needs, which made it nearly impossible to find one grooming solution that worked for both of them. That’s what pushed me to create something truly different—a natural, passive nail care system that works for all pets, in any type of home.
      </p>

      <div className="bg-pink-50/60 backdrop-blur-md p-6 rounded-lg shadow-md mb-6">
        <p className="text-lg font-medium leading-relaxed">
          Our flagship product, <span className="font-semibold text-pink-500">PediSteps</span>, are textured stair pads that file your pet’s nails as they walk—no clippers, no groomer visits, no stress. And for homes without stairs, we’re excited to soon launch <span className="font-semibold text-pink-500">PediWalk</span>, a hallway version of the same paw-friendly innovation.
        </p>
      </div>

      {/* Product Architecture Visual */}
      <div className="my-8 flex flex-col items-center bg-pink-50/60 backdrop-blur-md p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-pink-500 mb-2">Product Architecture</h3>
        <p className="text-base text-gray-700 mb-4 text-center max-w-2xl">
          Each PediStep and PediWalk features a carefully engineered dual-layer design—combining a textured emery surface with a studded, non-slip vinyl base. This ensures both function and comfort while blending seamlessly into your home.
        </p>
        <img
          src="/images/closeup.jpeg" // Replace with your actual close-up image
          alt="Close-up view showing the textured layers of PediSteps and PediWalk"
          className="w-full max-w-2xl rounded-lg border border-pink-200 shadow-md"
        />
      </div>

      {/* Nail Health Infographic */}
      <div className="my-10 p-6 bg-pink-50/60 backdrop-blur-md rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-pink-500 mb-4">Why Nail Health Matters</h3>
        <p className="text-lg text-gray-700 mb-4">
          Overgrown nails can cause your pet’s toes to splay unnaturally, leading to poor paw posture, joint strain, and long-term orthopedic issues. Keeping nails properly filed supports better weight distribution, natural gait, and overall joint health.
        </p>
        <img
          src="/images/nail-posture-infographic.jpeg"
          alt="Infographic showing how dog nail length affects posture"
          className="w-full rounded-lg border border-pink-200 shadow-sm"
        />
      </div>

      <p className="text-lg leading-relaxed mb-6">
        At PetCure, our mission is simple: to make pet grooming safer, easier, and more comfortable for pets and their humans. Whether you live in a two-story house or a studio apartment, have a 100-pound Akita or a 10-pound tabby, PetCure is designed to fit seamlessly into your routine—and your home.
      </p>

      <blockquote className="text-pink-500 text-xl font-serif italic text-center mt-8">
        “Because grooming should feel like care, not a chore. Because every pet deserves a Perfect. Polished. Paw.”
      </blockquote>
    </div>
  );
}

export default About;