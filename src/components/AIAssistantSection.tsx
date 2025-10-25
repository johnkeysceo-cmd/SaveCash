import React from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { MessageSquare, TrendingUp, Shield, Zap, Brain, BarChart3 } from "lucide-react";

export function AIAssistantSection() {
  const handleStartChat = () => {
    // Navigate to separate AI chat page
    window.history.pushState({}, '', '/ai-chat');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const features = [
    { icon: Brain, label: "Advanced AI" },
    { icon: Shield, label: "Secure" },
    { icon: TrendingUp, label: "Growth Focused" },
    { icon: Zap, label: "Instant Answers" },
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto relative">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.1, 0.25, 1], // Ultra-smooth cubic-bezier
            type: "tween",
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
          style={{
            transform: "translateZ(0)",
            willChange: "transform",
            backfaceVisibility: "hidden",
            isolation: "isolate",
            contain: "layout style paint",
          }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl mb-6 text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            style={{
              transform: "translateZ(0)",
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          >
            Your AI financial advisor.
          </motion.h2>
          <motion.h2 
            className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            style={{
              transform: "translateZ(0)",
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          >
            Always available.
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            style={{
              transform: "translateZ(0)",
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          >
            Get instant, personalized financial advice powered by advanced AI technology
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Professional container */}
          <div className="relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-3xl border border-white/10 overflow-hidden backdrop-blur-sm"
            style={{
              boxShadow: "0 30px 80px -20px rgba(168, 85, 247, 0.2)",
            }}
          >
            {/* Subtle grid pattern */}
            <div 
              className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)`,
                backgroundSize: '32px 32px'
              }}
            />

            <div className="relative z-10 p-12 md:p-16">
              {/* Icon Grid - Professional minimalist design */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all">
                      <feature.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{feature.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Center content */}
              <div className="text-center max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  {/* Holographic AI Animation - Third Duplicate */}
                  <div className="flex items-center justify-center mb-8">
                        <motion.div
                      className="w-20 h-20"
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
                            0 0 20px rgba(168, 85, 247, 0.7),
                            0 0 40px rgba(236, 72, 153, 0.5),
                            0 0 60px rgba(249, 115, 22, 0.4),
                            inset 0 0 15px rgba(255, 255, 255, 0.15)
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
                            imageRendering: "high-quality",
                            imageRendering: "-webkit-optimize-contrast",
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
                              "0 0 25px rgba(168, 85, 247, 0.5), 0 0 50px rgba(236, 72, 153, 0.3)",
                              "0 0 50px rgba(168, 85, 247, 0.9), 0 0 100px rgba(236, 72, 153, 0.7)",
                              "0 0 25px rgba(168, 85, 247, 0.5), 0 0 50px rgba(236, 72, 153, 0.3)",
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
                  </div>
                </motion.div>

                <motion.h3 
                  className="text-3xl md:text-4xl text-white mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Advanced financial intelligence
                </motion.h3>
                
                <motion.p 
                  className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  Get personalized financial advice 24/7. From smart budgeting to investment strategies, 
                  our AI analyzes your financial data to provide actionable insights and recommendations.
                </motion.p>
                
                {/* Capabilities grid */}
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  {[
                    "Smart budgeting",
                    "Investment advice",
                    "Tax optimization",
                    "Debt reduction",
                    "Retirement planning",
                    "Expense tracking",
                  ].map((topic, i) => (
                    <div
                      key={topic}
                      className="flex items-center justify-center gap-2 text-gray-400 py-2 px-4 rounded-full bg-white/[0.02] border border-white/5"
                    >
                      <div className="w-1 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.9,
                    ease: [0.25, 0.1, 0.25, 1], // Ultra-smooth cubic-bezier
                    type: "tween",
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    transform: "translateZ(0)",
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    isolation: "isolate",
                    contain: "layout style paint",
                  }}
                >
                  <Button
                    onClick={handleStartChat}
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-12 py-6 text-lg rounded-full shadow-[0_20px_60px_-15px_rgba(168,85,247,0.4)] border border-white/10 hover:shadow-[0_25px_80px_-15px_rgba(168,85,247,0.6)] transition-all duration-300"
                  >
                    <MessageSquare className="mr-3 w-5 h-5" />
                    Chat with AI Advisor
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Subtle accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
