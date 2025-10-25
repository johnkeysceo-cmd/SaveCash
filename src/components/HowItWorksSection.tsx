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
    <section id="how-it-works" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-7xl mb-6 text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Simple to start.
          </motion.h2>
          <motion.h2 
            className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight"
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
          className="space-y-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={item}
              className="group relative"
            >
              <div className="p-8 md:p-12 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-500 flex items-center gap-8">
                <div className="flex-shrink-0">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center border border-white/10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="w-10 h-10 text-purple-400" />
                  </motion.div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <motion.span 
                      className="text-6xl bg-gradient-to-r from-purple-400/20 to-pink-400/20 bg-clip-text text-transparent"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {step.number}
                    </motion.span>
                    <motion.h3 
                      className="text-3xl text-white"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      {step.title}
                    </motion.h3>
                  </div>
                  <motion.p 
                    className="text-gray-400 text-lg leading-relaxed"
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
