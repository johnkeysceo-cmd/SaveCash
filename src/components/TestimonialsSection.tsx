import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote } from "lucide-react";

const preLaunchTestimonials = [
  {
    quote: "SaveCash feels like the future of how people interact with their money — effortless, automated, and actually intelligent.",
    author: "A.M.",
    role: "Early Access Waitlist Member",
    location: "Los Angeles",
  },
  {
    quote: "Think of it as the Tesla Autopilot for your finances. Once this launches, no one will go back to manual saving again.",
    author: "D.P.",
    role: "Private Beta Observer",
    location: "San Francisco",
  },
  {
    quote: "Finally — a financial platform that actually works for me, not against me. Can't wait for the launch.",
    author: "C.R.",
    role: "Local Business Owner",
    location: "New York",
  },
  {
    quote: "Our mission is simple: make everyone feel like they have a personal AI money team working 24/7.",
    author: "John",
    role: "Founder of SaveCash",
    location: "",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials every 6 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % preLaunchTestimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-3 sm:mb-4 text-white tracking-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            What People Are Saying
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-2 px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            From Early Supporters
          </motion.p>
          <motion.p
            className="text-xs sm:text-sm text-gray-500 px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            All quotes from verified SaveCash early supporters
          </motion.p>
        </motion.div>

        {/* Featured Testimonial - Large, Rotating */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-orange-900/20 rounded-2xl sm:rounded-3xl border border-white/10 backdrop-blur-sm p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {/* Subtle animated particles in background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-purple-400/20"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
                
                {/* Gradient background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-purple-400/40 mb-4 sm:mb-6 md:mb-8 relative z-10" />
                
                <motion.p 
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-6 sm:mb-8 md:mb-10 leading-relaxed relative z-10 font-light px-2"
                >
                  "{preLaunchTestimonials[currentTestimonial].quote}"
                </motion.p>
                
                <div className="flex items-center gap-3 sm:gap-4 relative z-10 px-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse flex-shrink-0" />
                  <div className="min-w-0">
                    <motion.p 
                      className="text-base sm:text-lg md:text-xl text-white font-medium mb-1 truncate"
                    >
                      {preLaunchTestimonials[currentTestimonial].author}
                      {preLaunchTestimonials[currentTestimonial].location && (
                        <span className="text-gray-400 font-normal">, {preLaunchTestimonials[currentTestimonial].location}</span>
                      )}
                    </motion.p>
                    <motion.p 
                      className="text-xs sm:text-sm text-gray-400 truncate"
                    >
                      {preLaunchTestimonials[currentTestimonial].role}
                    </motion.p>
                  </div>
                </div>

                {/* Navigation dots */}
                <div className="flex gap-2 mt-8 justify-center relative z-10">
                  {preLaunchTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentTestimonial(index);
                        setIsAutoPlaying(false);
                        setTimeout(() => setIsAutoPlaying(true), 10000);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? 'bg-purple-400 w-8'
                          : 'bg-white/20 hover:bg-white/40 w-2'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Grid of Additional Testimonials */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16"
        >
          {preLaunchTestimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group p-4 sm:p-6 md:p-8 bg-white/[0.02] rounded-xl sm:rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Subtle animated glow particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-pink-400/15"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 3,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-orange-500/0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              <Quote className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-400/30 mb-3 sm:mb-4 relative z-10" />
              
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed relative z-10 font-light">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-2 sm:gap-3 relative z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-white text-xs sm:text-sm font-medium truncate">
                    {testimonial.author}
                    {testimonial.location && (
                      <span className="text-gray-500 font-normal">, {testimonial.location}</span>
                    )}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center px-2"
        >
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-2">
            Join hundreds of early supporters already on the waitlist.
          </p>
          
          {/* Rotating ticker text */}
          <motion.div
            className="flex items-center justify-center gap-2 sm:gap-3 mt-4"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400" />
            <p className="text-xs sm:text-sm text-purple-400 font-medium tracking-wider">
              LAUNCHING SOON
            </p>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
