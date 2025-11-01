import React from "react";
import { motion } from "motion/react";

const blobs = [
  {
    id: 1,
    gradient: "from-blue-500 via-purple-500 to-pink-500",
    size: "w-72 h-72",
    initialX: "10%",
    initialY: "10%",
    duration: 20,
  },
  {
    id: 2,
    gradient: "from-cyan-400 via-blue-500 to-purple-600",
    size: "w-96 h-96",
    initialX: "80%",
    initialY: "20%",
    duration: 25,
  },
  {
    id: 3,
    gradient: "from-purple-500 via-pink-500 to-orange-400",
    size: "w-80 h-80",
    initialX: "70%",
    initialY: "60%",
    duration: 22,
  },
  {
    id: 4,
    gradient: "from-orange-400 via-pink-500 to-purple-500",
    size: "w-64 h-64",
    initialX: "15%",
    initialY: "70%",
    duration: 18,
  },
];

export function FloatingBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className={`absolute ${blob.size} rounded-[40%_60%_70%_30%/60%_30%_70%_40%]`}
          style={{
            left: blob.initialX,
            top: blob.initialY,
            background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
            filter: "blur(60px)",
            transform: "translateZ(50px)",
            mixBlendMode: "screen",
          }}
          animate={{
            x: [0, 150, -100, 120, -80, 0],
            y: [0, -120, 100, -80, 120, 0],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.3, 0.85, 1.2, 0.9, 1],
            borderRadius: [
              "40% 60% 70% 30% / 60% 30% 70% 40%",
              "60% 40% 30% 70% / 40% 60% 30% 70%",
              "30% 70% 60% 40% / 70% 30% 40% 60%",
              "70% 30% 40% 60% / 30% 70% 60% 40%",
              "50% 50% 50% 50% / 50% 50% 50% 50%",
              "40% 60% 70% 30% / 60% 30% 70% 40%",
            ],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        >
          <div 
            className={`w-full h-full bg-gradient-to-br ${blob.gradient} rounded-[inherit] opacity-70`} 
            style={{
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3), 0 0 80px rgba(139, 92, 246, 0.2)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
