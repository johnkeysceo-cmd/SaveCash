import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";


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
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b8956a] via-[#8b7355] to-[#b8956a] origin-left z-[100]"
        style={{ scaleX }}
      />
      <motion.div
        className="fixed top-1 left-0 right-0 h-[2px] bg-white/30 origin-left z-[100]"
        style={{ scaleX }}
      />
    </>
  );
}