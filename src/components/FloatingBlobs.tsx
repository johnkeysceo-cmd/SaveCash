import React from "react";
import { motion } from "motion/react";


export function FloatingBlobs() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{
        zIndex: -1,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'transparent'
      }}
    >
      {/* First Blob - Top Left */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background: "linear-gradient(135deg, #F59E0B 0%, #F97316 25%, #EF4444 50%, #8B5CF6 75%, #F59E0B 100%)",
          filter: "blur(80px)",
          top: "10%",
          left: "10%",
        }}
        animate={{
          scale: [1, 1.05, 0.98, 1.02, 1],
          rotate: [0, 45, 90, 135, 180],
          x: [0, 20, -15, 10, 0],
          y: [0, -20, 15, -10, 0],
          borderRadius: [
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "55% 45% 35% 65% / 45% 55% 35% 65%",
            "45% 55% 65% 35% / 55% 45% 65% 35%",
            "35% 65% 55% 45% / 65% 35% 45% 55%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
     
      {/* Second Blob - Top Right */}
      <motion.div
        className="absolute w-80 h-80 rounded-full"
        style={{
          background: "linear-gradient(135deg, #F97316 0%, #EF4444 25%, #8B5CF6 50%, #F59E0B 75%, #F97316 100%)",
          filter: "blur(80px)",
          top: "15%",
          right: "15%",
        }}
        animate={{
          scale: [1, 1.03, 0.99, 1.01, 1],
          rotate: [0, -45, -90, -135, -180],
          x: [0, -15, 20, -10, 0],
          y: [0, 12, -18, 8, 0],
          borderRadius: [
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "45% 55% 65% 35% / 55% 35% 65% 45%",
            "55% 45% 35% 65% / 45% 55% 35% 65%",
            "65% 35% 45% 55% / 35% 65% 55% 45%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
          ],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />


      {/* Third Blob - Bottom Left */}
      <motion.div
        className="absolute w-72 h-72 rounded-full"
        style={{
          background: "linear-gradient(135deg, #EF4444 0%, #8B5CF6 25%, #F59E0B 50%, #F97316 75%, #EF4444 100%)",
          filter: "blur(80px)",
          bottom: "15%",
          left: "20%",
        }}
        animate={{
          scale: [1, 1.08, 0.95, 1.05, 1],
          rotate: [0, 90, 180, 270, 360],
          x: [0, 20, -12, 15, 0],
          y: [0, -15, 20, -8, 0],
          borderRadius: [
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "65% 35% 45% 55% / 35% 65% 55% 45%",
            "35% 65% 55% 45% / 65% 35% 45% 55%",
            "55% 45% 35% 65% / 45% 55% 35% 65%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
          ],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />


      {/* Fourth Blob - Bottom Right */}
      <motion.div
        className="absolute w-88 h-88 rounded-full"
        style={{
          background: "linear-gradient(135deg, #8B5CF6 0%, #F59E0B 25%, #F97316 50%, #EF4444 75%, #8B5CF6 100%)",
          filter: "blur(80px)",
          bottom: "10%",
          right: "10%",
        }}
        animate={{
          scale: [1, 0.98, 1.06, 0.97, 1],
          rotate: [0, -90, -180, -270, -360],
          x: [0, -20, 12, -15, 0],
          y: [0, 15, -20, 8, 0],
          borderRadius: [
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "45% 55% 65% 35% / 55% 35% 65% 45%",
            "65% 35% 45% 55% / 35% 65% 55% 45%",
            "35% 65% 55% 45% / 65% 35% 45% 55%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
          ],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
      />


      {/* Fifth Blob - Center */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: "linear-gradient(135deg, #F59E0B 0%, #F97316 25%, #EF4444 50%, #8B5CF6 75%, #F59E0B 100%)",
          filter: "blur(80px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: [1, 1.1, 0.9, 1.05, 1],
          rotate: [0, 180, 360, 540, 720],
          borderRadius: [
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "55% 45% 35% 65% / 45% 55% 35% 65%",
            "45% 55% 65% 35% / 55% 45% 65% 35%",
            "65% 35% 45% 55% / 35% 65% 55% 45%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
          ],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}
