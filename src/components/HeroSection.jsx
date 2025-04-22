import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen pt-24 overflow-hidden">
      {/* Responsive full-screen image */}
      <img
        src="/images/hero-banner4.jpeg"
        alt="PetCure Hero"
     className="absolute top-0 left-0 w-full h-full"
      />

      {/* Left Door */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-1/2 h-full bg-white/20 backdrop-blur-sm z-20"
      />

      {/* Right Door */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-1/2 h-full bg-white/20 backdrop-blur-sm z-20"
      />
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 2, duration: 1 }}
  className="absolute z-30 top-[88%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
>
  <h1 className="text-3xl md:text-5xl font-bold text-pink-500 drop-shadow-lg">
    Perfect. Polished. Paws.
  </h1>
</motion.div>
    </div>
  );
};

export default HeroSection;