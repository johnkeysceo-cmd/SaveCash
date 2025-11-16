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
          className="relative rounded-3xl overflow-hidden border border-purple-500/20 bg-gradient-to-br from-purple-500/10 via-purple-600/5 to-violet-500/10 p-12 md:p-16 lg:p-20"
          style={{
            boxShadow: "0 30px 80px -20px rgba(168, 85, 247, 0.4), 0 0 40px -10px rgba(139, 92, 246, 0.3)",
          }}
        >
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            {/* Main Headline */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight"
            >
              AI-powered financial intelligence
            </motion.h3>
            
            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-400 mb-8 font-medium"
            >
              Monitoring 24/7
            </motion.p>
            
            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Get real-time insights into your spending, saving, and investment opportunities — anytime, anywhere.
            </motion.p>

            {/* Bullet Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto"
            >
              <div className="flex flex-col items-center md:items-start gap-3 p-6 rounded-2xl bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-400/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-violet-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/50">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-200 font-medium text-center md:text-left">Real-time monitoring of your accounts</p>
              </div>
              
              <div className="flex flex-col items-center md:items-start gap-3 p-6 rounded-2xl bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-400/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-violet-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/50">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-200 font-medium text-center md:text-left">Smart alerts for unusual activity</p>
              </div>
              
              <div className="flex flex-col items-center md:items-start gap-3 p-6 rounded-2xl bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-400/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-violet-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/50">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-200 font-medium text-center md:text-left">Personalized recommendations to grow your savings</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
