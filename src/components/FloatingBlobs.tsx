import React, { useRef, useEffect } from "react";
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
];

export function FloatingBlobs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force hardware acceleration on container
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
        transform: "translateZ(0)",
        willChange: "transform",
        backfaceVisibility: "hidden",
        isolation: "isolate",
      }}
    >
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className={`absolute ${blob.size} rounded-[40%_60%_70%_30%/60%_30%_70%_40%]`}
          style={{
            left: blob.initialX,
            top: blob.initialY,
            filter: "blur(60px)",
            transform: "translateZ(0)",
            willChange: "transform",
            backfaceVisibility: "hidden",
            isolation: "isolate",
            contain: "layout style paint",
          }}
          animate={{
            x: [0, 50, -25, 0],
            y: [0, -40, 30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for ultra-smooth motion
            type: "tween",
          }}
        >
          <div 
            className={`w-full h-full bg-gradient-to-br ${blob.gradient} rounded-[inherit] opacity-70`} 
            style={{
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3), 0 0 80px rgba(139, 92, 246, 0.2)",
              transform: "translateZ(0)",
              willChange: "transform",
              backfaceVisibility: "hidden",
              isolation: "isolate",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
