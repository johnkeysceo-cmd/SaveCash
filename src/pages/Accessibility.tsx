import React from "react";
import { motion } from "motion/react";
import { Accessibility, Eye, Ear, Hand, CheckCircle, Users, Shield, ArrowRight, Mail, Home } from "lucide-react";
import { AnimatedBlob } from "../components/AnimatedBlob";

export default function Accessibility() {
  const features = [
    {
      icon: Eye,
      title: "Visual Accessibility",
      description: "High contrast mode, screen reader compatibility, and clear typography",
      details: ["High contrast themes", "Screen reader support", "Clear font sizes", "Color-blind friendly"],
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Hand,
      title: "Motor Accessibility",
      description: "Keyboard navigation and alternative input methods",
      details: ["Full keyboard navigation", "Large click targets", "Voice commands", "Gesture alternatives"],
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Ear,
      title: "Audio Accessibility",
      description: "Audio alternatives and visual indicators",
      details: ["Audio descriptions", "Visual alerts", "Subtitles available", "Volume controls"],
      color: "from-purple-400 to-violet-500"
    },
    {
      icon: Users,
      title: "Cognitive Accessibility",
      description: "Clear navigation and simplified interfaces",
      details: ["Simple language", "Clear instructions", "Consistent layout", "Error prevention"],
      color: "from-orange-400 to-red-500"
    }
  ];

  const standards = [
    {
      title: "WCAG 2.1 AA Compliance",
      description: "Meeting international accessibility standards",
      icon: CheckCircle,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Screen Reader Support",
      description: "Compatible with all major screen readers",
      icon: Eye,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Keyboard Navigation",
      description: "Full functionality available via keyboard",
      icon: Hand,
      color: "from-purple-400 to-violet-500"
    },
    {
      title: "Color Contrast",
      description: "High contrast ratios for better visibility",
      icon: Shield,
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative">
      <AnimatedBlob />
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-orange-900/20" />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back to Website Button */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-4 h-4" />
              <span>Back to Website</span>
            </motion.a>
          </motion.div>
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight"
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 0 40px rgba(255, 255, 255, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              Accessibility
            </motion.h1>
            <motion.p 
              className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              SaveCash Pro is committed to ensuring digital accessibility for all users, including those with disabilities.
            </motion.p>
            <motion.div 
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full text-green-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <CheckCircle className="w-5 h-5" />
              <span>WCAG 2.1 AA Compliant</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Accessibility Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We implement comprehensive accessibility features to ensure everyone can use our platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group bg-white/[0.02] rounded-3xl p-8 border border-white/10 backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Subtle glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={false}
                />
                
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 relative z-10`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed relative z-10">{feature.description}</p>
                <div className="space-y-2 relative z-10">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{detail}</span>
                  </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Compliance */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-900/10 to-pink-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Accessibility Standards</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We meet and exceed international accessibility standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {standards.map((standard, index) => (
              <motion.div
                key={standard.title}
                className="group bg-white/[0.02] rounded-3xl p-8 border border-white/10 backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-500 text-center relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Subtle glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${standard.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={false}
                />
                
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${standard.color} rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <standard.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">{standard.title}</h3>
                <p className="text-gray-300 relative z-10">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Accessibility Feedback</h2>
            <p className="text-xl text-gray-300 mb-12">
              We continuously improve our accessibility. Your feedback helps us serve everyone better.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/[0.02] rounded-3xl p-12 border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-white/[0.02] rounded-xl border border-white/10">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Report Accessibility Issues</h3>
                  <p className="text-gray-300">If you encounter any accessibility barriers, please let us know immediately.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/[0.02] rounded-xl border border-white/10">
                <Users className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Accessibility Testing</h3>
                  <p className="text-gray-300">We regularly test with users who have disabilities to ensure our platform works for everyone.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/[0.02] rounded-xl border border-white/10">
                <Shield className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Continuous Improvement</h3>
                  <p className="text-gray-300">We're committed to making our platform more accessible with each update.</p>
                </div>
            </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-8">Need Accessibility Support?</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Our accessibility team is here to help ensure you have the best possible experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-6 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 80px -15px rgba(168,85,247,0.8)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                <span>Contact Accessibility Team</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Accessibility Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}