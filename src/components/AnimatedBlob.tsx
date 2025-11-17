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
        zIndex: 0
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
        }}
        animate={{
          scale: [1, 1.3, 0.8, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
          x: [0, 50, -30, 40, 0],
          y: [0, -40, 60, -20, 0],
          borderRadius: [
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "60% 40% 30% 70% / 40% 60% 30% 70%",
            "40% 60% 70% 30% / 60% 30% 70% 40%",
            "30% 70% 60% 40% / 70% 30% 40% 60%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
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
        }}
        animate={{
          scale: [1.2, 0.9, 1.4, 0.7, 1.2],
          rotate: [360, 270, 180, 90, 0],
          x: [0, -60, 40, -20, 0],
          y: [0, 50, -30, 40, 0],
          borderRadius: [
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "70% 30% 60% 40% / 30% 70% 40% 60%",
            "30% 70% 40% 60% / 70% 30% 60% 40%",
            "60% 40% 70% 30% / 40% 60% 30% 70%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
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
        }}
        animate={{
          scale: [0.8, 1.3, 0.9, 1.1, 0.8],
          rotate: [180, 270, 0, 90, 180],
          x: [0, 30, -50, 20, 0],
          y: [0, -60, 40, -10, 0],
          borderRadius: [
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "40% 60% 30% 70% / 60% 40% 70% 30%",
            "60% 40% 70% 30% / 40% 60% 30% 70%",
            "30% 70% 40% 60% / 70% 30% 60% 40%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
          ],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
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
        }}
        animate={{
          scale: [1.1, 0.7, 1.3, 0.9, 1.1],
          rotate: [270, 0, 90, 180, 270],
          x: [0, -40, 60, -30, 0],
          y: [0, 30, -50, 20, 0],
          borderRadius: [
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "70% 30% 60% 40% / 30% 70% 40% 60%",
            "30% 70% 40% 60% / 70% 30% 60% 40%",
            "60% 40% 70% 30% / 40% 60% 30% 70%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
          ],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
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
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: [1, 1.4, 0.6, 1.2, 1],
          rotate: [0, 180, 360, 180, 0],
          x: [0, 40, -60, 30, 0],
          y: [0, -30, 50, -20, 0],
          borderRadius: [
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "60% 40% 70% 30% / 40% 60% 30% 70%",
            "40% 60% 30% 70% / 60% 40% 70% 30%",
            "70% 30% 40% 60% / 30% 70% 60% 40%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
          ],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </div>
  );
}