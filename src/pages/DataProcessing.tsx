import React from "react";
import { motion } from "motion/react";
import { Database, Shield, Lock, Eye, CheckCircle, AlertTriangle, ArrowRight, Mail, Home } from "lucide-react";
import { AnimatedBlob } from "../components/AnimatedBlob";

export default function DataProcessing() {
  const processingPurposes = [
    {
      icon: Database,
      title: "Service Provision",
      description: "Processing your data to provide and improve our financial services",
      details: ["Account management", "Transaction processing", "Service delivery", "Customer support"],
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Security & Fraud Prevention",
      description: "Processing data to protect your account and prevent fraudulent activities",
      details: ["Identity verification", "Fraud detection", "Security monitoring", "Risk assessment"],
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Eye,
      title: "Analytics & Improvement",
      description: "Processing data to analyze usage patterns and improve our services",
      details: ["Usage analytics", "Performance monitoring", "Feature optimization", "User experience"],
      color: "from-purple-400 to-violet-500"
    },
    {
      icon: Lock,
      title: "Legal Compliance",
      description: "Processing data to comply with legal and regulatory requirements",
      details: ["Regulatory reporting", "Tax compliance", "Audit requirements", "Legal obligations"],
      color: "from-orange-400 to-red-500"
    }
  ];

  const dataTypes = [
    {
      title: "Personal Information",
      description: "Name, email, phone number, and identification details",
      icon: Database,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Financial Data",
      description: "Bank account details, transaction history, and financial goals",
      icon: Shield,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Usage Data",
      description: "How you interact with our platform and features",
      icon: Eye,
      color: "from-purple-400 to-violet-500"
    },
    {
      title: "Device Information",
      description: "IP address, browser type, and device identifiers",
      icon: Lock,
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
              Data Processing
            </motion.h1>
            <motion.p 
              className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Learn about how we process your personal data and your rights regarding data processing.
            </motion.p>
            <motion.div 
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <CheckCircle className="w-5 h-5" />
              <span>GDPR Compliant</span>
            </motion.div>
          </motion.div>
      </div>
      </section>
      
      {/* Processing Purposes */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
            <h2 className="text-5xl font-bold text-white mb-6">Processing Purposes</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We process your data for specific, legitimate purposes
          </p>
        </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processingPurposes.map((purpose, index) => (
              <motion.div
                key={purpose.title}
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
                  className={`absolute inset-0 bg-gradient-to-br ${purpose.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={false}
                />
                
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${purpose.color} rounded-2xl flex items-center justify-center mb-6 relative z-10`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <purpose.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{purpose.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed relative z-10">{purpose.description}</p>
                <div className="space-y-2 relative z-10">
                  {purpose.details.map((detail, idx) => (
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

      {/* Data Types */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-900/10 to-pink-900/10">
        <div className="max-w-7xl mx-auto">
        <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
            <h2 className="text-5xl font-bold text-white mb-6">Types of Data Processed</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We process different categories of personal data
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataTypes.map((type, index) => (
              <motion.div
                key={type.title}
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
                  className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={false}
                />
                
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <type.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">{type.title}</h3>
                <p className="text-gray-300 relative z-10">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Basis */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
        <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
            <h2 className="text-5xl font-bold text-white mb-6">Legal Basis for Processing</h2>
            <p className="text-xl text-gray-300 mb-12">
              We process your data based on specific legal grounds
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
                  <h3 className="text-xl font-bold text-white mb-2">Contract Performance</h3>
                  <p className="text-gray-300">Processing necessary to provide our services under our terms of service.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/[0.02] rounded-xl border border-white/10">
                <Shield className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Legitimate Interest</h3>
                  <p className="text-gray-300">Processing for our legitimate business interests, balanced against your rights.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/[0.02] rounded-xl border border-white/10">
                <Lock className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Legal Obligation</h3>
                  <p className="text-gray-300">Processing required to comply with legal and regulatory requirements.</p>
                </div>
          </div>

              <div className="flex items-start gap-4 p-6 bg-white/[0.02] rounded-xl border border-white/10">
                <AlertTriangle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Consent</h3>
                  <p className="text-gray-300">Processing based on your explicit consent, which you can withdraw at any time.</p>
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
            <h2 className="text-5xl font-bold text-white mb-8">Questions About Data Processing?</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Our data protection team is here to answer any questions about how we process your data.
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
                <span>Contact Data Team</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Data Rights
              </motion.button>
          </div>
        </motion.div>
      </div>
      </section>
    </div>
  );
}