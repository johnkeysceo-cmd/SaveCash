import { motion } from "motion/react";
import { Sparkles, Zap, TrendingUp, Shield, Brain, CheckCircle2, Wallet, Coins, Target, Lock, Eye, AlertCircle, DollarSign } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "24/7 AI Monitoring",
    description: "Always on guard — scanning every transaction to uncover hidden savings.",
    color: "from-purple-400 to-violet-500",
    bgColor: "from-purple-500/10 to-violet-500/10",
  },
  {
    icon: Zap,
    title: "Instant Insights",
    description: "Smart alerts when spending patterns shift or opportunities appear.",
    color: "from-yellow-400 to-orange-500",
    bgColor: "from-yellow-500/10 to-orange-500/10",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "256-bit SSL encryption and zero data-selling. Your privacy = our priority.",
    color: "from-blue-400 to-cyan-500",
    bgColor: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: DollarSign,
    title: "Effortless Savings",
    description: "Finds and stops waste automatically — so your money grows on autopilot.",
    color: "from-green-400 to-emerald-500",
    bgColor: "from-green-500/10 to-emerald-500/10",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: [0.25, 0.1, 0.25, 1], // Ultra-smooth cubic-bezier
      type: "tween",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // Ultra-smooth cubic-bezier
      type: "tween",
    },
  },
};

export function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-6 sm:mb-8 text-white tracking-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            AI that understands your finances.
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Real-time insights, automatic savings detection, and precision monitoring — all designed for people who want control, confidence, and compound growth without lifting a finger.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group p-4 sm:p-6 md:p-8 lg:p-10 bg-white/[0.02] rounded-2xl sm:rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-orange-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                initial={false}
              />
              
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/10 mb-4 sm:mb-6 relative"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -10, 10, -10, 0],
                }}
                transition={{ 
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1], // Ultra-smooth cubic-bezier
                  type: "tween",
                }}
                style={{
                  transform: "translate3d(0, 0, 0)",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                  isolation: "isolate",
                  contain: "layout style paint",
                }}
              >
                {/* Animated glow */}
                <motion.div
                  className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: [0.25, 0.1, 0.25, 1], // Ultra-smooth cubic-bezier
                    type: "tween",
                  }}
                />
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-400 relative z-10" />
              </motion.div>
              
              <motion.h3 
                className="text-lg sm:text-xl text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {feature.title}
              </motion.h3>
              
              <motion.p 
                className="text-sm sm:text-base text-gray-400 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
