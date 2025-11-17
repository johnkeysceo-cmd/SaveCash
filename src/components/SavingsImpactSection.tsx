import React from "react";
import { motion, Variants } from "motion/react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export function SavingsImpactSection() {
  const savingsData = [
    {
      amount: "$500",
      label: "Individual",
      description: "Hidden fees and unused subscriptions",
    },
    {
      amount: "$2,500",
      label: "Small teams",
      description: "Duplicate tools and licenses",
    },
    {
      amount: "$25,000",
      label: "Businesses",
      description: "Enterprise optimization",
    },
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-7xl mb-6 text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Save thousands.
          </motion.h2>
          <motion.h2 
            className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Every month.
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {savingsData.map((data, index) => (
            <motion.div
              key={data.label}
              variants={item}
              className="group p-12 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-500 text-center relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Subtle glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-orange-500/0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                initial={false}
              />
              <motion.div 
                className="text-6xl md:text-7xl mb-4 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {data.amount}
              </motion.div>
              <motion.h3 
                className="text-xl text-white mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {data.label}
              </motion.h3>
              <motion.p 
                className="text-gray-400 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {data.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated AI Financial Intelligence */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 p-16"
          style={{
            boxShadow: "0 30px 80px -20px rgba(168, 85, 247, 0.3)",
          }}
        >
          <div className="relative z-10 text-center">
            <div className="relative inline-block mb-8">
              {/* BlenderKit-Level Quality Video Animation */}
              <div className="w-16 h-16 mx-auto rounded-full overflow-hidden">
                <video
                  src="/lv_0_20251026134622.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                  style={{
                    transform: "translateZ(0)",
                    willChange: "auto",
                    backfaceVisibility: "hidden",
                    imageRendering: "crisp-edges",
                    filter: "contrast(1.4) brightness(1.2) saturate(1.3) hue-rotate(5deg)",
                    isolation: "isolate",
                    contain: "layout style paint",
                    perspective: "1000px",
                  }}
                />
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl text-white mb-2"
            >
              AI-powered financial intelligence
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-400"
            >
              Monitoring 24/7
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
