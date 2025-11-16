import React, { useRef, useEffect } from "react";
import { motion } from "motion/react";

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force hardware acceleration
    if (containerRef.current) {
      containerRef.current.style.transform = "translateZ(0)";
      containerRef.current.style.willChange = "transform";
      containerRef.current.style.backfaceVisibility = "hidden";
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{
        zIndex: -2,
        transform: "translateZ(0)",
        willChange: "transform",
        backfaceVisibility: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-purple-400/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0, 0.5, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1] as const,
            delay: Math.random() * 5,
            repeatType: "loop" as const,
          }}
        />
      ))}

      {/* Larger floating orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, Math.random() * 60 - 30, 0],
            opacity: [0, 0.25, 0],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1] as const,
            delay: Math.random() * 8,
            repeatType: "loop" as const,
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
          backgroundSize: '50px 50px'
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear" as const,
          repeatType: "loop" as const,
        }}
      />
    </div>
  );
}
