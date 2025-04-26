// src/components/HeroSection.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const images = [
  '/images/hero-banner1.jpeg',
  '/images/hero-banner2.jpeg',
  '/images/hero-banner3.jpeg',
  '/images/hero-banner4.jpeg',
  '/images/hero-banner5.jpeg',
  '/images/hero-banner6.jpeg',
  '/images/hero-banner7.jpeg',
  '/images/hero-banner8.jpeg',
  '/images/hero-banner9.jpeg',
  '/images/hero-banner10.jpeg',
  '/images/hero-banner11.jpeg',
  '/images/hero-banner12.jpeg',
  '/images/hero-banner13.jpeg'
];

function HeroSection() {
  const [index, setIndex] = useState(0);
  const [startAnimation, setStartAnimation] = useState(true);

  useEffect(() => {
    const doorTimer = setTimeout(() => setStartAnimation(false), 2000);
    const imageTimer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => {
      clearTimeout(doorTimer);
      clearInterval(imageTimer);
    };
  }, []);

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative shadow-lg min-h-screen flex flex-col justify-center">
      {/* Carousel Images */}
      <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`Hero image ${index + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-center"
        />
      </AnimatePresence>

      {/* Door Animation */}
      {startAnimation && (
        <>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 2 }}
            className="absolute top-0 left-0 w-1/2 h-full bg-white/20 backdrop-blur-md z-20"
          />
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 2 }}
            className="absolute top-0 right-0 w-1/2 h-full bg-white/20 backdrop-blur-md z-20"
          />
        </>
      )}

      {/* Tagline and CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative z-30 text-center px-6 flex flex-col items-center"
      >
        <div className="bg-white/40 backdrop-blur-md px-4 py-2 rounded-xl mb-6">
          <div className="flex flex-wrap justify-center gap-2 text-2xl sm:text-3xl md:text-5xl font-bold text-pink-500 drop-shadow-lg">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2, duration: 0.6 }}>Perfect.</motion.span>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.8, duration: 0.6 }}>Polished.</motion.span>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.4, duration: 0.6 }}>Paws.</motion.span>
          </div>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Link
            to="/about"
            className="px-6 py-3 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition text-lg font-semibold w-48 text-center"
          >
            Learn More
          </Link>
          <Link
            to="/products"
            className="px-6 py-3 bg-white/80 backdrop-blur-md text-pink-500 rounded-full shadow-md hover:bg-white transition text-lg font-semibold w-48 text-center"
          >
            Browse Products
          </Link>
        </motion.div>
      </motion.div>

      {/* Carousel Toggle Buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-40">
        <button
          onClick={prevImage}
          aria-label="Previous slide"
          className="bg-white/60 backdrop-blur-sm text-pink-500 font-bold px-3 py-1 rounded hover:bg-white/80"
        >
          ◀
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-40">
        <button
          onClick={nextImage}
          aria-label="Next slide"
          className="bg-white/60 backdrop-blur-sm text-pink-500 font-bold px-3 py-1 rounded hover:bg-white/80"
        >
          ▶
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${i === index ? 'bg-pink-500' : 'bg-white/70'} transition duration-300`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;