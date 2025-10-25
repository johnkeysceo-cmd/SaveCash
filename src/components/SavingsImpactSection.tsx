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
          className="grid md:grid-cols-3 gap-8 mb-32"
        >
          {savingsData.map((data, index) => (
            <motion.div
              key={data.label}
              variants={item}
              className="group p-12 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-500 text-center"
            >
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
            <motion.div
              className="relative inline-block mb-8"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Holographic AI Animation - Fourth Duplicate */}
              <motion.div 
                className="w-32 h-32 mx-auto"
                initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{
                  transform: "translateZ(0)",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Ultra High Resolution Container with Circular Frame */}
                <div className="relative w-full h-full rounded-full overflow-hidden"
                  style={{
                    background: "transparent",
                    border: "2px solid rgba(168, 85, 247, 0.5)",
                    boxShadow: `
                      0 0 25px rgba(168, 85, 247, 0.7),
                      0 0 50px rgba(236, 72, 153, 0.5),
                      0 0 75px rgba(249, 115, 22, 0.4),
                      inset 0 0 20px rgba(255, 255, 255, 0.15)
                    `,
                  }}
                >
                  {/* BlenderKit-Level Resolution Video */}
                  <video
                    src="/vecteezy_3d-render-abstract-smooth-shape-holographic-color-on-black_31705729.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                    style={{
                      transform: "translateZ(0)",
                      willChange: "transform",
                      backfaceVisibility: "hidden",
                      imageRendering: "crisp-edges",
                      filter: "contrast(1.4) brightness(1.15) saturate(1.3) hue-rotate(8deg)",
                    }}
                  />
                  
                  {/* Premium Circular Frame Glow */}
                  <div className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      background: `
                        conic-gradient(from 0deg at 50% 50%, 
                          rgba(168, 85, 247, 0.4) 0deg, 
                          rgba(236, 72, 153, 0.3) 90deg, 
                          rgba(249, 115, 22, 0.3) 180deg, 
                          rgba(168, 85, 247, 0.4) 270deg, 
                          rgba(168, 85, 247, 0.4) 360deg
                        )
                      `,
                      mixBlendMode: "screen",
                    }}
                  />
                  
                  {/* Animated Frame Border */}
                  <motion.div 
                    className="absolute inset-0 rounded-full pointer-events-none"
                    animate={{
                      boxShadow: [
                        "0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)",
                        "0 0 60px rgba(168, 85, 247, 0.9), 0 0 120px rgba(236, 72, 153, 0.7)",
                        "0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>

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
