import React, { useRef, useEffect, memo, useMemo } from "react";
import { motion } from "motion/react";

export const ParticleBackground = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force hardware acceleration
    if (containerRef.current) {
      containerRef.current.style.transform = "translate3d(0, 0, 0)";
      containerRef.current.style.willChange = "transform";
      containerRef.current.style.backfaceVisibility = "hidden";
      containerRef.current.style.contain = "layout style paint";
    }
  }, []);

  // Memoize particle positions for better performance
  const particles = useMemo(() => 
    [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      xOffset: Math.random() * 50 - 25,
      duration: 8 + Math.random() * 4,
      delay: Math.random() * 5,
    })), []
  );

  const orbs = useMemo(() =>
    [...Array(8)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      xOffset: Math.random() * 100 - 50,
      duration: 12 + Math.random() * 6,
      delay: Math.random() * 8,
    })), []
  );

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{
        zIndex: -2,
        transform: "translate3d(0, 0, 0)",
        willChange: "transform",
        backfaceVisibility: "hidden",
        isolation: "isolate",
        contain: "layout style paint",
      }}
    >
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute w-1 h-1 rounded-full bg-purple-400/20"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            transform: "translate3d(0, 0, 0)",
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            contain: "layout style paint",
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1] as const, // Apple-style cubic-bezier
            type: "tween" as const,
            delay: particle.delay,
          }}
        />
      ))}

      {/* Larger floating orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={`orb-${orb.id}`}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10"
          style={{
            left: `${orb.left}%`,
            top: `${orb.top}%`,
            transform: "translate3d(0, 0, 0)",
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            contain: "layout style paint",
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, orb.xOffset, 0],
            opacity: [0, 0.3, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1] as const, // Apple-style cubic-bezier
            type: "tween" as const,
            delay: orb.delay,
          }}
        />
      ))}

      {/* Subtle grid lines */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: "translate3d(0, 0, 0)",
          willChange: "background-position",
          backfaceVisibility: "hidden",
          contain: "layout style paint",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
});

ParticleBackground.displayName = 'ParticleBackground';
