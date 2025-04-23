import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
];

function HeroSection() {
  const [index, setIndex] = useState(0);
  const [startAnimation, setStartAnimation] = useState(true);
  const navigate = useNavigate();

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
    <div className="bg-origin-border md:bg-origin-padding">
      {/* Carousel Images */}
      <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`Hero image ${index + 1} - PetCure carousel`}
          aria-label="PetCure hero image carousel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative top-0 left-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Door Animation */}
      {startAnimation && (
        <>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-1/2 h-full bg-white/20 backdrop-blur-sm z-20"
          />
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-1/2 h-full bg-white/20 backdrop-blur-sm z-20"
          />
        </>
      )}

      {/* Tagline and Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute z-30 top-[60%] left-1/2 -translate-x-1/2 text-center flex flex-col items-center space-y-4"
      >
        <div className="px-6 py-4 rounded-xl bg-white/30 backdrop-blur-md">
          <div className="flex gap-2 justify-center text-3xl md:text-5xl font-bold text-pink-500 drop-shadow-lg">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2, duration: 0.6 }}>Perfect.</motion.span>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.8, duration: 0.6 }}>Polished.</motion.span>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.4, duration: 0.6 }}>Paws.</motion.span>
          </div>
        </div>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.2, duration: 0.6 }}
          onClick={() => navigate('/about')}
          className="px-6 py-2 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition"
        >
          Enter Now
        </motion.button>
      </motion.div>

      {/* Carousel Toggle Buttons */}
      <div className="absolute z-40 top-1/2 left-2 transform -translate-y-1/2">
        <button
          aria-label="Previous slide"
          onClick={prevImage}
          className="bg-white/60 backdrop-blur-sm text-pink-500 font-bold px-3 py-1 rounded hover:bg-white/80"
        >
          ◀
        </button>
      </div>
      <div className="absolute z-40 top-1/2 right-2 transform -translate-y-1/2">
        <button
          aria-label="Next slide"
          onClick={nextImage}
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
