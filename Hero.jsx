import React from 'react';
import { motion } from 'framer-motion';
import { FiSmartphone } from 'react-icons/fi';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-amber-600 overflow-hidden flex items-center justify-center text-white px-4 sm:px-8">
      {/* Background Gradient and Animation */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-amber-600 to-yellow-500 opacity-30 animate-pulse" />
        {/* Optional particle background or animation layer */}
      </div>

      {/* Branding Logo (SVG or PNG) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-6 left-6 flex items-center gap-3"
      >
        <img src="/logo.png" alt="MB Builders Logo" className="w-12 h-12" />
        <h1 className="text-xl font-bold tracking-wide">MB Builders</h1>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[clamp(2rem,6vw,4rem)] font-bold leading-tight mb-4"
        >
          Building Dreams. <br />Crafting Legacy.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[clamp(1rem,2vw,1.25rem)] text-white/90 max-w-xl"
        >
          MB Builders is Jaipur’s leading real estate brand, known for delivering
          architectural excellence and trusted homes for over a decade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 flex justify-center md:justify-start"
        >
          <button className="bg-white text-amber-600 font-semibold px-6 py-3 rounded-lg shadow hover:shadow-lg flex items-center gap-2 transition">
            <FiSmartphone className="text-xl" /> Schedule a Site Visit
          </button>
        </motion.div>
      </div>

      {/* 3D or visual element */}
      <motion.div
        className="hidden lg:block absolute right-8 bottom-0 w-1/3 z-10"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        {/* You can replace with a Spline embed or 3D model */}
        <img src="/3d-building.png" alt="3D building model" className="w-full h-auto" />
      </motion.div>
    </div>
  );
};

export default Hero;
