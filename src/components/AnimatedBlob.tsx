import React, { useRef, useEffect } from "react";
import { motion } from "motion/react";

export function AnimatedBlob() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force hardware acceleration
    if (containerRef.current) {
      containerRef.current.style.transform = "translateZ(0)";
      containerRef.current.style.willChange = "transform";
      containerRef.current.style.backfaceVisibility = "hidden";
    }
    if (blobRef.current) {
      blobRef.current.style.transform = "translateZ(0)";
      blobRef.current.style.willChange = "transform";
      blobRef.current.style.backfaceVisibility = "hidden";
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-96 flex items-center justify-center overflow-hidden"
      style={{
        transform: "translateZ(0)",
        willChange: "transform",
        backfaceVisibility: "hidden",
        isolation: "isolate",
        contain: "layout style paint",
      }}
    >
      {/* Animated 3D Blob */}
      <motion.div
        ref={blobRef}
        className="relative w-80 h-80"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          rotateZ: [0, 180],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: [0.25, 0.1, 0.25, 1], // Ultra-smooth cubic-bezier
          type: "tween",
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
          willChange: "transform",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
          isolation: "isolate",
          contain: "layout style paint",
        }}
      >
        {/* Main blob shape */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            borderRadius: [
              "40% 60% 70% 30% / 60% 30% 70% 40%",
              "60% 40% 30% 70% / 40% 60% 30% 70%",
              "30% 70% 60% 40% / 70% 30% 40% 60%",
              "70% 30% 40% 60% / 30% 70% 60% 40%",
              "40% 60% 70% 30% / 60% 30% 70% 40%",
            ],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1], // Ultra-smooth cubic-bezier
            type: "tween",
          }}
          style={{
            background: `
              linear-gradient(135deg, 
                #8B5CF6 0%, 
                #A855F7 25%, 
                #EC4899 50%, 
                #F97316 75%, 
                #F59E0B 100%
              )
            `,
            filter: "blur(0px)",
            boxShadow: `
              0 0 60px rgba(168, 85, 247, 0.4),
              0 0 120px rgba(236, 72, 153, 0.3),
              0 0 180px rgba(249, 115, 22, 0.2)
            `,
            willChange: "transform",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
            isolation: "isolate",
            contain: "layout style paint",
          }}
        />
        
        {/* Secondary blob for depth */}
        <motion.div
          className="absolute inset-4 rounded-full"
          animate={{
            borderRadius: [
              "60% 40% 30% 70% / 40% 60% 30% 70%",
              "40% 60% 70% 30% / 60% 30% 70% 40%",
              "70% 30% 40% 60% / 30% 70% 60% 40%",
              "30% 70% 60% 40% / 70% 30% 40% 60%",
              "60% 40% 30% 70% / 40% 60% 30% 70%",
            ],
            scale: [0.8, 1.1, 0.9, 1.2, 0.8],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1], // Ultra-smooth cubic-bezier
            type: "tween",
            delay: 1,
          }}
          style={{
            background: `
              linear-gradient(45deg, 
                #EC4899 0%, 
                #F97316 30%, 
                #F59E0B 60%, 
                #8B5CF6 100%
              )
            `,
            filter: "blur(1px)",
            opacity: 0.7,
            willChange: "transform",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
            isolation: "isolate",
            contain: "layout style paint",
          }}
        />
        
        {/* Inner highlight blob */}
        <motion.div
          className="absolute inset-8 rounded-full"
          animate={{
            borderRadius: [
              "30% 70% 60% 40% / 70% 30% 40% 60%",
              "70% 30% 40% 60% / 30% 70% 60% 40%",
              "40% 60% 70% 30% / 60% 30% 70% 40%",
              "60% 40% 30% 70% / 40% 60% 30% 70%",
              "30% 70% 60% 40% / 70% 30% 40% 60%",
            ],
            scale: [1, 0.8, 1.3, 0.9, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1], // Ultra-smooth cubic-bezier
            type: "tween",
            delay: 2,
          }}
          style={{
            background: `
              linear-gradient(225deg, 
                #F59E0B 0%, 
                #F97316 40%, 
                #EC4899 80%, 
                #A855F7 100%
              )
            `,
            filter: "blur(0.5px)",
            opacity: 0.8,
            willChange: "transform",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
            isolation: "isolate",
            contain: "layout style paint",
          }}
        />
        
        {/* Fourth outer glow blob */}
        <motion.div
          className="absolute inset-2 rounded-full"
          animate={{
            borderRadius: [
              "50% 50% 50% 50% / 50% 50% 50% 50%",
              "60% 40% 60% 40% / 40% 60% 40% 60%",
              "40% 60% 40% 60% / 60% 40% 60% 40%",
              "50% 50% 50% 50% / 50% 50% 50% 50%",
            ],
            scale: [1, 1.05, 0.98, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1], // Ultra-smooth cubic-bezier
            type: "tween",
            delay: 0.5,
          }}
          style={{
            background: `
              linear-gradient(90deg, 
                #8B5CF6 0%, 
                #EC4899 50%, 
                #F97316 100%
              )
            `,
            filter: "blur(2px)",
            opacity: 0.4,
            willChange: "transform",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
            isolation: "isolate",
            contain: "layout style paint",
          }}
        />
      </motion.div>
      
      {/* Ambient lighting effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at center, 
              rgba(168, 85, 247, 0.1) 0%, 
              rgba(236, 72, 153, 0.05) 50%, 
              transparent 100%
            )
          `,
        }}
      />
    </div>
  );
}
