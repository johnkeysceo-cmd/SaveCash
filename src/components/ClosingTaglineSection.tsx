import React from "react";
import { motion } from "motion/react";

export function ClosingTaglineSection() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <motion.h2 
            className="text-6xl md:text-8xl text-white tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Save smarter.
          </motion.h2>
          
          <motion.h2 
            className="text-6xl md:text-8xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Live freer.
          </motion.h2>
          
          <motion.p 
            className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            SaveCash Pro — AI that protects your wallet.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
