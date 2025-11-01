import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 origin-left z-[100]"
        style={{ scaleX }}
      />
      <motion.div
        className="fixed top-1 left-0 right-0 h-[2px] bg-white/30 origin-left z-[100]"
        style={{ scaleX }}
      />
    </>
  );
}

