import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  '/images/hero-banner10.jpeg'
];

function HeroSection() {
  const [index, setIndex] = useState(0);
  const [startAnimation, setStartAnimation] = useState(true);

  useEffect(() => {
    const doorTimer = setTimeout(() => setStartAnimation(false), 2000);
    const imageTimer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => {
      clearTimeout(doorTimer);
      clearInterval(imageTimer);
    };
  }, []);

  return (
    <div className="relative w-full h-screen pt-24 overflow-hidden">
      {/* Carousel Images */}
      <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`PetCure Hero ${index + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full"
        />
      </AnimatePresence>

      {/* Left Door */}
      {startAnimation && (
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-1/2 h-full bg-white/20 backdrop-blur-sm z-20"
        />
      )}

      {/* Right Door */}
      {startAnimation && (
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-1/2 h-full bg-white/20 backdrop-blur-sm z-20"
        />
      )}

      {/* Tagline */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute z-30 top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-pink-500 drop-shadow-lg">
          Perfect. Polished. Paws.
        </h1>
      </motion.div> */}
    </div>
  );
}

export default HeroSection;