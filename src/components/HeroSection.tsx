import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const benefits = [
  "Automated subscription cancellations",
  "Real-time spending insights",
  "AI investment suggestions",
];

export function HeroSection() {
  const [currentBenefit, setCurrentBenefit] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBenefit((prev) => (prev + 1) % benefits.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSignup = () => {
    const signupSection = document.getElementById("signup");
    signupSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDemo = () => {
    const howItWorks = document.querySelector("#how-it-works");
    howItWorks?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-32 relative">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm"
        >
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse" />
          <span className="text-sm text-gray-300">Save $500 – $25,000 per month</span>
        </motion.div>

        <motion.h1 
          variants={item}
          className="text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tight leading-[1.05]"
        >
          <span className="block text-white">
            Save smarter.
          </span>
          <span className="block text-white">
            Live better.
          </span>
        </motion.h1>
        
        <motion.p 
          variants={item}
          className="text-2xl md:text-3xl text-gray-400 mb-4 max-w-4xl mx-auto leading-relaxed"
        >
          Stop wasting money.
        </motion.p>

        <motion.p 
          variants={item}
          className="text-2xl md:text-3xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Let AI optimize your finances while you focus on what matters.
        </motion.p>
        
        <motion.div 
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            transition={{
              duration: 0.2,
              ease: [0.25, 0.1, 0.25, 1], // Ultra-smooth cubic-bezier
              type: "tween",
            }}
            style={{
              transform: "translateZ(0)",
              willChange: "transform",
              backfaceVisibility: "hidden",
              isolation: "isolate",
              contain: "layout style paint",
            }}
          >
            <Button
              onClick={() => {
                window.scrollTo({
                  top: document.documentElement.scrollHeight,
                  behavior: 'smooth'
                });
              }}
              className="group bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-12 py-8 text-lg rounded-full transition-all duration-500 shadow-[0_20px_60px_-15px_rgba(168,85,247,0.5)]"
            >
              Get started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Animated rotating benefits */}
        <motion.div 
          variants={item}
          className="h-16 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBenefit}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ 
                duration: 0.5, 
                ease: [0.25, 0.1, 0.25, 1], // Ultra-smooth cubic-bezier
                type: "tween",
              }}
              style={{
                transform: "translateZ(0)",
                willChange: "transform",
                backfaceVisibility: "hidden",
                isolation: "isolate",
                contain: "layout style paint",
              }}
              className="flex items-center gap-3 text-gray-400 text-lg"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
              <span>{benefits[currentBenefit]}</span>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
