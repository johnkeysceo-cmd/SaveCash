import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { scrollToSignup } from "../utils/scrollToSignup";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
      ease: [0.4, 0, 0.2, 1] as const, // Smoother cubic-bezier
      type: "tween" as const,
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
      ease: [0.4, 0, 0.2, 1] as const, // Smoother cubic-bezier
      type: "tween" as const,
    },
  },
};

const benefits = [
  "24/7 AI Monitoring — Always on guard",
  "Instant Insights — Smart alerts when patterns shift",
  "Bank-Grade Security — 256-bit SSL encryption",
  "Effortless Savings — Money grows on autopilot",
];

export function HeroSection() {
  const [currentBenefit, setCurrentBenefit] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBenefit((prev) => (prev + 1) % benefits.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
          <span className="text-sm text-gray-300">Trusted by 1,200+ early adopters</span>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm text-gray-400"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span>Bank-level Security</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <span>SOC 2 Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-400" />
            <span>GDPR Ready</span>
          </div>
        </motion.div>

        <motion.h1 
          variants={item}
          className="text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tight leading-[1.05] relative"
          whileHover={{ 
            scale: 1.01,
            transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }
          }}
        >
          <motion.span 
            className="block text-white"
            whileHover={{ 
              textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
              transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] as const }
            }}
          >
            Your money.
          </motion.span>
          <motion.span 
            className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Smarter.
          </motion.span>
        </motion.h1>
        
        <motion.p 
          variants={item}
          className="text-2xl md:text-3xl text-gray-400 mb-4 max-w-4xl mx-auto leading-relaxed"
        >
          SaveCash watches, learns, and protects your wallet 24/7 — so you never miss a chance to save.
        </motion.p>

        {/* Value Snapshot */}
        <motion.p 
          variants={item}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Powered by real-time AI. Designed for people who want control, confidence, and compound savings — without lifting a finger.
        </motion.p>
        
        <motion.div 
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
                 <motion.div
                   whileHover={{ 
                     scale: 1.05,
                     boxShadow: "0 25px 80px -15px rgba(168,85,247,0.8)"
                   }}
                   whileTap={{ scale: 0.95 }}
                   animate={{
                     boxShadow: [
                       "0 20px 60px -15px rgba(168,85,247,0.5)",
                       "0 25px 80px -15px rgba(168,85,247,0.7)",
                       "0 20px 60px -15px rgba(168,85,247,0.5)"
                     ]
                   }}
                   transition={{
                     duration: 0.2,
                     ease: [0.4, 0, 0.2, 1], // Smoother cubic-bezier
                     type: "tween",
                     boxShadow: {
                       duration: 2,
                       repeat: Infinity,
                       ease: [0.4, 0, 0.2, 1] as const, // Smoother cubic-bezier
                       type: "tween",
                       repeatType: "loop" as const,
                     }
                   }}
                   style={{
                     transform: "translate3d(0, 0, 0)",
                     willChange: "transform, box-shadow",
                     backfaceVisibility: "hidden",
                     isolation: "isolate",
                     contain: "layout style paint",
                   }}
                 >
                   <Button
                     onClick={scrollToSignup}
                     className="group relative bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-12 py-8 text-lg rounded-full transition-all duration-500 overflow-hidden"
                   >
                     <span className="relative z-10 flex items-center">
                       Join the Waitlist
                       <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                     </span>
                     
                     {/* Animated background shimmer */}
                     <motion.div
                       className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                       animate={{
                         x: ["-200%", "200%"],
                       }}
                       transition={{
                         duration: 2,
                         repeat: Infinity,
                         ease: [0.4, 0, 0.2, 1] as const,
                         repeatType: "loop" as const,
                       }}
                     />
                   </Button>
                 </motion.div>
                 
                 <Button
                   variant="outline"
                   onClick={scrollToSignup}
                   className="group relative border-2 border-purple-500/30 text-white hover:bg-purple-500/10 px-12 py-8 text-lg rounded-full transition-all duration-500"
                 >
                   <span className="relative z-10 flex items-center">
                     Activate AI Savings
                   </span>
                 </Button>
        </motion.div>

        <motion.p 
          variants={item}
          className="text-sm text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Early users get lifetime perks. Be among the first 500 to try SaveCash.
        </motion.p>

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
                ease: [0.4, 0, 0.2, 1] as const, // Smoother cubic-bezier
                type: "tween" as const,
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
