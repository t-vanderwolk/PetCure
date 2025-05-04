// src/pages/EmeryKits.js
import React, { useState } from 'react';

const colorOptions = [
  { name: 'Pink', image: '/images/overlays/color-pink.png' },
  { name: 'Lilac', image: '/images/overlays/color-lilac.png' },
  { name: 'Blue', image: '/images/overlays/color-blue.png' }
];

const patternOptions = [
  { name: 'Herringbone', image: '/images/overlays/pattern-herringbone.png' },
  { name: 'Dots', image: '/images/overlays/pattern-dots.png' },
  { name: 'Chevron', image: '/images/overlays/pattern-chevron.png' }
];

function EmeryKits() {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const [selectedPattern, setSelectedPattern] = useState(patternOptions[0]);

  return (
    <section className="bg-pink-50 pt-24 pb-20 min-h-screen px-6">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <h1 className="text-5xl font-bold text-pink-600">Customize Your PediSteps</h1>

        {/* Preview Area */}
        <div className="relative w-full max-w-3xl mx-auto aspect-[3/2] border border-pink-200 rounded-xl shadow-md overflow-hidden">
          <img
            src="/images/fixed-pedisteps.png"
            alt="Fixed Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <img
            src={selectedColor.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
          />
          <img
            src={selectedPattern.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover z-20 pointer-events-none"
          />
        </div>

        {/* Swatch Selectors */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">Choose a Color</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {colorOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={() => setSelectedColor(option)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                    selectedColor.name === option.name ? 'bg-pink-500 text-white border-pink-600' : 'bg-white text-pink-500 border-pink-300'
                  }`}
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">Choose a Pattern</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {patternOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={() => setSelectedPattern(option)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                    selectedPattern.name === option.name ? 'bg-pink-500 text-white border-pink-600' : 'bg-white text-pink-500 border-pink-300'
                  }`}
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmeryKits;