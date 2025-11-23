import React from "react";
import { motion } from "motion/react";
import { Link2, Target, Sparkles, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Link2,
    number: "01",
    title: "Connect Your Accounts",
    description: "Securely link your bank accounts and subscriptions.",
  },
  {
    icon: Target,
    number: "02",
    title: "Set Your Goals",
    description: "Define your savings, budgeting, and investment preferences.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Let AI Optimize",
    description: "Our algorithms automatically find savings and smart opportunities for you.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Track & Grow",
    description: "Monitor your progress and get real-time insights.",
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -30 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 sm:mb-6 text-white tracking-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Simple to start.
          </motion.h2>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-6 sm:mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Powerful to use.
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4 sm:space-y-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={item}
              className="group relative"
            >
              <div className="p-4 sm:p-6 md:p-8 lg:p-12 bg-white/[0.02] rounded-2xl sm:rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-500 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <motion.div 
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-purple-400" />
                  </motion.div>
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                    <motion.span 
                      className="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-400/20 to-pink-400/20 bg-clip-text text-transparent"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {step.number}
                    </motion.span>
                    <motion.h3 
                      className="text-xl sm:text-2xl md:text-3xl text-white"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      {step.title}
                    </motion.h3>
                  </div>
                  <motion.p 
                    className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {step.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
