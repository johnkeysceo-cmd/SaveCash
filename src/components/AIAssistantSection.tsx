import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { TrendingUp, Shield, Zap, Brain, BarChart3 } from "lucide-react";

const aiAlertCards = [
  {
    type: "Alert",
    color: "blue",
    icon: Zap,
    badge: "Detected automatically",
    message: "Your Spotify subscription increased by $2 this month.\nWant me to compare better rates or cancel it for you?",
    action: "Explore cheaper options",
    savings: "$24/year",
    borderColor: "border-blue-400/40",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    dotColor: "bg-blue-400",
    textColor: "text-blue-400/90",
  },
  {
    type: "Insight",
    color: "green",
    icon: TrendingUp,
    badge: "Savings opportunity",
    message: "You can save $243/month by combining Netflix + Hulu into a single optimized bundle.\nShould I set that up for you?",
    action: "Auto-Switch Ready",
    savings: "$2,916/year potential",
    borderColor: "border-green-400/40",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    dotColor: "bg-green-400",
    textColor: "text-green-400/90",
  },
  {
    type: "Warning",
    color: "yellow",
    icon: BarChart3,
    badge: "Unused subscription detected",
    message: "I noticed you're paying $89/month for a gym you haven't visited in 3 months.\nCancel and save $1,068/year?",
    action: "Cancel Membership",
    savings: "One-click cancel",
    borderColor: "border-yellow-400/40",
    bgGradient: "from-yellow-500/10 to-amber-500/10",
    dotColor: "bg-yellow-400",
    textColor: "text-yellow-400/90",
  },
  {
    type: "Notice",
    color: "orange",
    icon: Zap,
    badge: "Price anomaly detected",
    message: "Your electric bill is 23% higher than last month.\nI found a cheaper provider that could save you $45/month. Want details?",
    action: "Better rate available",
    savings: "$540/year",
    borderColor: "border-orange-400/40",
    bgGradient: "from-orange-500/10 to-amber-500/10",
    dotColor: "bg-orange-400",
    textColor: "text-orange-400/90",
  },
];

export function AIAssistantSection() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [showAIModal, setShowAIModal] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Simple scroll-based opacity
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Auto-rotate cards every 4 seconds (smooth infinite cycling)
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentCardIndex((prev) => (prev + 1) % aiAlertCards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  
  // BEYOND HUMAN PERCEPTION SMOOTHNESS - CINEMATIC LEVEL
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const forwardRef = useRef<boolean>(true);
  const videoOpacityRef = useRef<number>(1);
  const rafRef = useRef<number | undefined>(undefined);
  const lastTimeRef = useRef<number>(0);
  const isTransitioningRef = useRef<boolean>(false);
  const startTimeRef = useRef<number>(0);
  
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container || prefersReducedMotion) return;

    // GPU-ACCELERATED SMOOTH ANIMATION LOOP
    const animate = () => {
      const currentTime = performance.now();
      const deltaTime = currentTime - lastTimeRef.current;
      
      // 120fps max for ultra-smooth motion
      if (deltaTime < 8.33) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTimeRef.current = currentTime;

      // MICRO-PIXEL SMOOTHNESS - Ultra-precise ping-pong with seamless transitions
      if (video.currentTime >= video.duration - 0.01 && forwardRef.current) {
        // Micro-smooth transition to reverse
        forwardRef.current = false;
        video.playbackRate = -0.5; // Slower reverse for smoothness
        video.play();
      } else if (video.currentTime <= 0.01 && !forwardRef.current) {
        // Micro-smooth transition to forward
        forwardRef.current = true;
        video.playbackRate = 0.5; // Slower forward for smoothness
        video.play();
      }
      
      // Micro-pixel smooth interpolation for seamless looping
      if (forwardRef.current && video.currentTime >= video.duration - 0.1) {
        // Gradual slowdown before reverse
        const progress = (video.currentTime - (video.duration - 0.1)) / 0.1;
        video.playbackRate = 0.5 + (0.5 * (1 - progress)); // Smooth deceleration
      } else if (!forwardRef.current && video.currentTime <= 0.1) {
        // Gradual speedup after reverse
        const progress = (0.1 - video.currentTime) / 0.1;
        video.playbackRate = 0.5 + (0.5 * progress); // Smooth acceleration
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    // Start the ultra-smooth animation loop
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [prefersReducedMotion]);
  
  

  useEffect(() => {
    // Check for motion reduction preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const features = [
    { icon: Brain, label: "Advanced AI" },
    { icon: Shield, label: "Secure" },
    { icon: TrendingUp, label: "Growth Focused" },
    { icon: Zap, label: "Instant Answers" },
  ];

  return (
    <>
    <section ref={sectionRef} className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto relative">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.1, 0.25, 1], // Ultra-smooth cubic-bezier
            type: "tween",
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
          style={{
            transform: "translateZ(0)",
            willChange: "transform",
            backfaceVisibility: "hidden",
            isolation: "isolate",
            contain: "layout style paint",
          }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl mb-6 text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            style={{
              transform: "translateZ(0)",
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          >
            Your AI financial advisor.
          </motion.h2>
          <motion.h2 
            className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            style={{
              transform: "translateZ(0)",
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          >
            Always available.
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            style={{
              transform: "translateZ(0)",
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          >
            Get instant, personalized financial advice powered by advanced AI technology
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
                 {/* Professional container */}
                 <div className="relative bg-black/90 rounded-3xl border border-white/10 overflow-hidden backdrop-blur-sm"
                   style={{
                     boxShadow: "0 30px 80px -20px rgba(168, 85, 247, 0.2)",
                   }}
                 >
            {/* Subtle grid pattern */}
            <div 
              className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)`,
                backgroundSize: '32px 32px'
              }}
            />

            <div className="relative z-10 p-12 md:p-16">
              {/* Center content */}
              <div className="text-center max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  {/* SPECTACULAR Ultra-High Quality AI Animation */}
                  <div className="flex items-center justify-center mb-8">
                    <motion.div
                      className="relative w-32 h-32"
                      style={{
                        opacity: prefersReducedMotion ? 1 : opacity,
                      }}
                    >
                      {/* BEYOND HUMAN PERCEPTION - CINEMATIC LEVEL */}
                      <div 
                        ref={containerRef}
                        className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20"
                        style={{
                          transform: 'translate3d(0, 0, 0)',
                          willChange: 'transform',
                          backfaceVisibility: 'hidden',
                          isolation: 'isolate',
                          contain: 'layout style paint',
                          perspective: '1000px',
                        }}
                      >
                        <video
                          ref={videoRef}
                            src="/Ai%20%20brain%20board.webm"
                          muted
                          playsInline
                          autoPlay
                          loop
                          preload="auto"
                          className="w-full h-full object-cover"
                          style={{
                            transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
                            willChange: 'opacity, transform',
                            backfaceVisibility: 'hidden',
                            isolation: 'isolate',
                            contain: 'layout style paint',
                            imageRendering: 'crisp-edges',
                            filter: 'contrast(1.1) brightness(1.05) saturate(1.1) blur(0.5px)',
                            transition: 'none',
                            pointerEvents: 'none',
                            opacity: 1,
                          }}
                        />
                        <div 
                          className="absolute inset-0 bg-gradient-to-b from-white/5 to-black/10 pointer-events-none"
                          style={{
                            transform: 'translate3d(0, 0, 0)',
                            willChange: 'auto',
                            backfaceVisibility: 'hidden',
                            isolation: 'isolate',
                            contain: 'layout style paint',
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.h3 
                  className="text-3xl md:text-4xl text-white mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Advanced financial intelligence
                </motion.h3>
                
                <motion.p 
                  className="text-lg text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  Get personalized financial advice 24/7. From smart budgeting to investment strategies, 
                  our AI analyzes your financial data to provide actionable insights and recommendations.
                </motion.p>
                
                {/* Practical AI Examples - Animated Typing Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-10"
                >
                  <h4 className="text-xl text-white mb-8 font-semibold text-center">
                    See it in action
                  </h4>
                  
                  <div className="max-w-3xl mx-auto min-h-[400px]">
                    <AnimatePresence mode="wait">
                      {aiAlertCards.map((card, index) => {
                        if (index !== currentCardIndex) return null;
                        
                        const IconComponent = card.icon;
                        const shadowColor = {
                          blue: "rgba(59, 130, 246, 0.1)",
                          green: "rgba(74, 222, 128, 0.1)",
                          yellow: "rgba(250, 204, 21, 0.1)",
                          orange: "rgba(251, 146, 60, 0.1)",
                        }[card.color];
                        
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -40, scale: 0.95 }}
                            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                            className="group relative p-6 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                            style={{
                              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset",
                            }}
                            onMouseEnter={() => setIsAutoPlaying(false)}
                            onMouseLeave={() => setIsAutoPlaying(true)}
                          >
                            {/* Gradient glow on hover */}
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`} />
                            
                            {/* Message */}
                            <motion.p 
                              className="text-white/95 text-base md:text-lg leading-relaxed font-light whitespace-pre-line"
                            >
                              "{card.message}"
                            </motion.p>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                    

                  </div>
                </motion.div>
                
                {/* Premium Category Pills */}
                <motion.div 
                  className="flex flex-wrap items-center justify-center gap-3 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
                  viewport={{ once: true }}
                >
                  {[
                    "Smart Budgeting",
                    "Investment Guidance",
                    "Tax Optimization",
                  ].map((topic, i) => (
                    <motion.div
                      key={topic}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.5 + i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center justify-center gap-2 text-gray-300 py-2.5 px-6 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 cursor-default"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                      <span className="font-medium tracking-wide">{topic}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>

      {/* Minimalist Animated Logo Modal - Positioned over AI Assistant Section */}
      <AnimatePresence>
        {showAIModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-gradient-to-br from-black/95 via-purple-900/20 to-black/95 backdrop-blur-md rounded-3xl"
          >
            {/* Subtle particle background */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
                  animate={{
                    x: [0, Math.random() * 400],
                    y: [0, Math.random() * 400],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%',
                  }}
                />
              ))}
            </div>

            {/* Main content */}
            <div className="text-center relative z-10">
              {/* Animated Logo with Video */}
              <motion.div
                className="relative w-48 h-48 mx-auto mb-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Pulsing glow container */}
                <motion.div
                  className="relative w-full h-full rounded-full overflow-hidden"
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(168, 85, 247, 0.4)",
                      "0 0 60px rgba(168, 85, 247, 0.8)",
                      "0 0 30px rgba(168, 85, 247, 0.4)"
                    ],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Video background */}
                  <video
                    src="/Ai%20%20brain%20board.webm"
                    muted
                    playsInline
                    autoPlay
                    loop
                    className="w-full h-full object-cover rounded-full"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-black/20 rounded-full" />
                </motion.div>

                {/* Floating particles around logo */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    animate={{
                      x: [0, Math.cos(i * 45 * Math.PI / 180) * 140, 0],
                      y: [0, Math.sin(i * 45 * Math.PI / 180) * 140, 0],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                ))}

                {/* Light streaks */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1,
                    ease: "easeInOut"
                  }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-px h-16 bg-gradient-to-b from-purple-400 to-transparent"
                      animate={{
                        x: [0, 200, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.7,
                        ease: "easeInOut"
                      }}
                      style={{
                        left: `${25 + i * 25}%`,
                        top: '20%',
                        transform: 'rotate(45deg)',
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>

              {/* Text */}
              <motion.h1
                className="text-3xl md:text-4xl text-white mb-3 font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Automated Financial Savings
              </motion.h1>
              
              <motion.h2
                className="text-xl md:text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Launching Soon
              </motion.h2>
              
              <motion.p
                className="text-base text-gray-300 max-w-sm mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                The future of intelligent finance.
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}