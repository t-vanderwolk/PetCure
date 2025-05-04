// src/components/EmerySelector.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const colorOverlays = [
  { label: 'Blush Pink', src: '/images/overlays/color-pink.png' },
  { label: 'Lilac Purple', src: '/images/overlays/color-purple.png' },
  { label: 'Pastel Blue', src: '/images/overlays/color-blue.png' }
];

const patternOverlays = [
  { label: 'Herringbone', src: '/images/overlays/pattern-herringbone.png' },
  { label: 'Paw Prints', src: '/images/overlays/pattern-pawprint.png' },
  { label: 'Seasonal Leaves', src: '/images/overlays/pattern-leaves.png' }
];

function EmerySelector() {
  const [selectedColor, setSelectedColor] = useState(colorOverlays[0]);
  const [selectedPattern, setSelectedPattern] = useState(patternOverlays[0]);

  return (
    <section className="bg-pink-50 pt-24 pb-20 min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-pink-600 text-center mb-12"
        >
          Preview Your PediSteps Style
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-16 justify-center items-start">

          {/* Preview Area */}
          <div className="relative w-full max-w-3xl mx-auto aspect-[3/2]">
            <img
              src="/images/fixed-pedisteps.png"
              alt="Fixed PediSteps Staircase"
              className="w-full h-full object-cover rounded-2xl border border-pink-200 shadow-lg"
            />
            <img
              src={selectedColor.src}
              alt={selectedColor.label}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl pointer-events-none"
            />
            <img
              src={selectedPattern.src}
              alt={selectedPattern.label}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl pointer-events-none"
            />
          </div>

          {/* Selectors */}
          <div className="flex flex-col gap-12 w-full lg:w-[350px] mx-auto">

            {/* Color Selector */}
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-semibold text-pink-600">Choose a Color</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {colorOverlays.map((color) => (
                  <button
                    key={color.label}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                      selectedColor.label === color.label
                        ? 'bg-pink-500 text-white border-pink-600'
                        : 'bg-white text-pink-500 border-pink-300'
                    }`}
                  >
                    {color.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Pattern Selector */}
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-semibold text-pink-600">Choose a Pattern</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {patternOverlays.map((pattern) => (
                  <button
                    key={pattern.label}
                    onClick={() => setSelectedPattern(pattern)}
                    className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                      selectedPattern.label === pattern.label
                        ? 'bg-pink-500 text-white border-pink-600'
                        : 'bg-white text-pink-500 border-pink-300'
                    }`}
                  >
                    {pattern.label}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default EmerySelector;
