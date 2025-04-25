import React from 'react';

function PediSteps() {
  return (
    <div className="bg-white pb-16">
      {/* Hero Image */}


      {/* Product Description Section */}
      <div className="p-10 max-w-4xl mx-auto text-gray-800 font-sans">
        <h2 className="text-4xl font-bold text-pink-600 mb-6 font-serif">PediSteps</h2>
        <div className="mb-6">
          <img
            src="/images/pedi-steps.png"
            alt="PediSteps product preview"
            className="rounded-lg border border-pink-200 shadow-md w-full object-contain"
          />
        </div>
        <p className="text-lg leading-relaxed mb-6">
          Say goodbye to stressful nail trims. <span className="font-semibold text-pink-500">PediSteps</span> are stylish, functional stair pads that gently file your pet’s nails with every step—no buzzing clippers, no vet visits, just paws in motion.
        </p>
        <p className="text-lg leading-relaxed">
          Designed with a durable dual-layer system, PediSteps feature a non-slip vinyl base topped with a gentle 80-grit emery surface. They stay securely in place on carpeted stairs, blending beautifully with your home while promoting better joint alignment, paw posture, and comfort for every step your pet takes.
        </p>
      </div>
    </div>
  );
}

export default PediSteps;
