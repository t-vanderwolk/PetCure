// src/components/HeroSection.jsx
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-banner.jpeg')"}} id='hero_banner'>
      {/* Left Door */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-1/2 h-full bg-white/20 backdrop-blur-sm"
      />
      
      {/* Right Door */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-1/2 h-full bg-white/20 backdrop-blur-sm"
      />

      {/* Optional: Logo or CTA after doors open */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-pink drop-shadow-lg">Perfect. Polished. Paws.</h1>
      </motion.div>
    </div>
  );
};

export default HeroSection;