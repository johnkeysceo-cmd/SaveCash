import React, { memo } from 'react';
import { motion } from 'framer-motion';

const FeaturesHero = memo(() => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 px-6 py-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          SaveCash Pro
          <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Features
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Transform your financial future with AI-powered savings automation, 
          intelligent budgeting, and personalized financial insights.
        </motion.p>
      </div>
    </motion.section>
  );
});

FeaturesHero.displayName = 'FeaturesHero';

export default FeaturesHero;
