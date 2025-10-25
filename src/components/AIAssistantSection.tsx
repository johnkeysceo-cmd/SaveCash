import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { MessageSquare, TrendingUp, Shield, Zap, Brain, BarChart3 } from "lucide-react";

export function AIAssistantSection() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Simple scroll-based opacity
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
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

      // SUBPIXEL SMOOTH FADE with cubic-bezier easing
      if (video.currentTime >= video.duration - 0.05 && forwardRef.current) {
        isTransitioningRef.current = true;
        startTimeRef.current = currentTime;
        
        const fadeOut = () => {
          const elapsed = performance.now() - startTimeRef.current;
          const progress = Math.min(elapsed / 200, 1); // 200ms fade
          const easedProgress = 1 - Math.pow(1 - progress, 4); // ultra-smooth cubic-bezier
          
          // Direct DOM manipulation - NO React re-renders
          videoOpacityRef.current = easedProgress;
          video.style.opacity = videoOpacityRef.current.toString();
          
          if (progress < 1) {
            rafRef.current = requestAnimationFrame(fadeOut);
          } else {
            // Reset and ultra-smooth fade in
            video.currentTime = 0;
            startTimeRef.current = performance.now();
            
            const fadeIn = () => {
              const inElapsed = performance.now() - startTimeRef.current;
              const inProgress = Math.min(inElapsed / 300, 1); // 300ms fade in
              const easedInProgress = Math.pow(inProgress, 3); // cubic-bezier ease-in
              
              videoOpacityRef.current = easedInProgress;
              video.style.opacity = videoOpacityRef.current.toString();
              
              if (inProgress < 1) {
                rafRef.current = requestAnimationFrame(fadeIn);
              } else {
                isTransitioningRef.current = false;
              }
            };
            rafRef.current = requestAnimationFrame(fadeIn);
          }
        };
        
        rafRef.current = requestAnimationFrame(fadeOut);
      }

      // ULTRA-SMOOTH ping-pong with GPU acceleration
      if (video.currentTime >= video.duration && forwardRef.current) {
        forwardRef.current = false;
        video.playbackRate = -1;
        video.play();
      } else if (video.currentTime <= 0 && !forwardRef.current) {
        forwardRef.current = true;
        video.playbackRate = 1;
        video.play();
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

  const handleStartChat = () => {
    // Navigate to separate AI chat page
    window.history.pushState({}, '', '/ai-chat');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const features = [
    { icon: Brain, label: "Advanced AI" },
    { icon: Shield, label: "Secure" },
    { icon: TrendingUp, label: "Growth Focused" },
    { icon: Zap, label: "Instant Answers" },
  ];

  return (
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
              {/* Icon Grid - Professional minimalist design */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    viewport={{ once: true }}
                           className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-black/70 border border-white/5 hover:bg-black/80 hover:border-white/10 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all">
                      <feature.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{feature.label}</span>
                  </motion.div>
                ))}
              </div>

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
                          src="/vecteezy_3d-render-abstract-smooth-shape-holographic-color-on-black_31705729.mp4"
                          muted
                          playsInline
                          autoPlay
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
                  className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  Get personalized financial advice 24/7. From smart budgeting to investment strategies, 
                  our AI analyzes your financial data to provide actionable insights and recommendations.
                </motion.p>
                
                {/* Capabilities grid */}
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  {[
                    "Smart budgeting",
                    "Investment advice",
                    "Tax optimization",
                    "Debt reduction",
                    "Retirement planning",
                    "Expense tracking",
                  ].map((topic, i) => (
                    <div
                      key={topic}
                             className="flex items-center justify-center gap-2 text-gray-400 py-2 px-4 rounded-full bg-black/70 border border-white/5"
                    >
                      <div className="w-1 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.9,
                    ease: [0.25, 0.1, 0.25, 1], // Ultra-smooth cubic-bezier
                    type: "tween",
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    transform: "translateZ(0)",
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    isolation: "isolate",
                    contain: "layout style paint",
                  }}
                >
                  <Button
                    onClick={handleStartChat}
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-12 py-6 text-lg rounded-full shadow-[0_20px_60px_-15px_rgba(168,85,247,0.4)] border border-white/10 hover:shadow-[0_25px_80px_-15px_rgba(168,85,247,0.6)] transition-all duration-300"
                  >
                    <MessageSquare className="mr-3 w-5 h-5" />
                    Chat with AI Advisor
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Subtle accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
