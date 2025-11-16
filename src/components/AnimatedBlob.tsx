import React from "react";
import { motion } from "motion/react";

export function AnimatedBlob() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        transform: "translate3d(0, 0, 0)",
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      {/* First Blob - Top Left */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background: "linear-gradient(135deg, #8B5CF6 0%, #A855F7 25%, #EC4899 50%, #F97316 75%, #06B6D4 100%)",
          filter: "blur(80px)",
          top: "10%",
          left: "10%",
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
          backfaceVisibility: "hidden",
          isolation: "isolate",
        }}
        animate={{
          scale: [1, 1.2, 0.9, 1.15, 1],
          x: [0, 40, -25, 35, 0],
          y: [0, -30, 45, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: [0.4, 0, 0.2, 1] as const,
          repeatType: "loop" as const,
        }}
      />

      {/* Second Blob - Top Right */}
      <motion.div
        className="absolute w-80 h-80 rounded-full"
        style={{
          background: "linear-gradient(135deg, #EC4899 0%, #F97316 25%, #06B6D4 50%, #8B5CF6 75%, #A855F7 100%)",
          filter: "blur(70px)",
          top: "15%",
          right: "15%",
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
          backfaceVisibility: "hidden",
          isolation: "isolate",
        }}
        animate={{
          scale: [1.2, 0.95, 1.25, 0.85, 1.2],
          x: [0, -50, 35, -15, 0],
          y: [0, 40, -25, 35, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: [0.4, 0, 0.2, 1] as const,
          delay: 2,
          repeatType: "loop" as const,
        }}
      />

      {/* Third Blob - Bottom Left */}
      <motion.div
        className="absolute w-72 h-72 rounded-full"
        style={{
          background: "linear-gradient(135deg, #06B6D4 0%, #8B5CF6 25%, #A855F7 50%, #EC4899 75%, #F97316 100%)",
          filter: "blur(65px)",
          bottom: "20%",
          left: "20%",
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
          backfaceVisibility: "hidden",
          isolation: "isolate",
        }}
        animate={{
          scale: [0.8, 1.25, 0.95, 1.1, 0.8],
          x: [0, 25, -40, 15, 0],
          y: [0, -50, 35, -8, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: [0.4, 0, 0.2, 1] as const,
          delay: 4,
          repeatType: "loop" as const,
        }}
      />

      {/* Fourth Blob - Bottom Right */}
      <motion.div
        className="absolute w-88 h-88 rounded-full"
        style={{
          background: "linear-gradient(135deg, #F97316 0%, #06B6D4 25%, #8B5CF6 50%, #A855F7 75%, #EC4899 100%)",
          filter: "blur(75px)",
          bottom: "10%",
          right: "10%",
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
          backfaceVisibility: "hidden",
          isolation: "isolate",
        }}
        animate={{
          scale: [1.1, 0.85, 1.25, 0.95, 1.1],
          x: [0, -35, 50, -25, 0],
          y: [0, 25, -40, 15, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: [0.4, 0, 0.2, 1] as const,
          delay: 1,
          repeatType: "loop" as const,
        }}
      />

      {/* Fifth Blob - Center */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: "linear-gradient(135deg, #A855F7 0%, #EC4899 25%, #F97316 50%, #06B6D4 75%, #8B5CF6 100%)",
          filter: "blur(60px)",
          top: "50%",
          left: "50%",
          transform: "translate3d(-50%, -50%, 0)",
          willChange: "transform",
          backfaceVisibility: "hidden",
          isolation: "isolate",
        }}
        animate={{
          scale: [1, 1.3, 0.75, 1.15, 1],
          x: [0, 35, -50, 25, 0],
          y: [0, -25, 40, -15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: [0.4, 0, 0.2, 1] as const,
          delay: 3,
          repeatType: "loop" as const,
        }}
      />
    </div>
  );
}