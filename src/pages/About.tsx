import React from "react";
import { motion } from "motion/react";
import { Infinity, ArrowLeft, Users, Target, Zap, Shield, Heart } from "lucide-react";
import { FloatingBlobs } from "../components/FloatingBlobs";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Floating Blobs Background */}
      <FloatingBlobs />
      
      {/* Header */}
      <div className="relative z-10 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <a 
              href="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <Infinity className="w-12 h-12 text-purple-400" />
              <h1 className="text-5xl md:text-7xl font-bold text-white">About SaveCash</h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-6"
            >
              SaveCash is redefining how people experience money.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-purple-400 font-semibold mb-8"
            >
              Our mission is simple: make every dollar smarter.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed"
            >
              Founded on the belief that financial freedom should be effortless, SaveCash blends automation, 
              intelligence, and design into one seamless ecosystem that helps users save more, spend smarter, 
              and live better — all powered by ethical, transparent AI.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        
        {/* Our Story */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every great innovation starts with a simple question: "What if it could be better?"
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">The Problem We Saw</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Traditional financial tools are complex, fragmented, and designed for institutions — not people. 
                  We watched millions struggle with outdated systems that made managing money feel like a burden, 
                  not an opportunity.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-400">Hidden fees eating into savings</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-400">Complex interfaces that confuse users</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-400">No intelligent automation or insights</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-800/50">
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We believe financial technology should be invisible, intelligent, and empowering. 
                  SaveCash represents a new paradigm where AI doesn't replace human judgment — 
                  it amplifies human potential.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-400">AI that works for you, not against you</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-400">Transparent, ethical automation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-400">Financial freedom made effortless</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Our Values */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide every decision we make and every line of code we write.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Transparency First",
                description: "We believe in open, honest communication. Every algorithm, every decision, every change is explained clearly and simply.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Heart,
                title: "Human-Centered",
                description: "Technology should serve people, not the other way around. Every feature we build puts human needs and emotions first.",
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: Zap,
                title: "Intelligent Simplicity",
                description: "Complex problems deserve elegant solutions. We make the sophisticated feel effortless and intuitive.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: Target,
                title: "Ethical AI",
                description: "Our artificial intelligence is designed with ethics at its core. We build AI that empowers, not exploits.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Users,
                title: "Community Driven",
                description: "We're building more than a product — we're fostering a community of people who believe in financial freedom.",
                color: "from-purple-500 to-violet-500"
              },
              {
                icon: Infinity,
                title: "Continuous Innovation",
                description: "We never settle. Every day brings new opportunities to make our users' financial lives better.",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Our Impact */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're just getting started, but our vision is already taking shape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-800/50">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300">Early Access Users</div>
                <div className="text-sm text-gray-500 mt-2">Growing community of financial innovators</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl p-8 border border-blue-800/50">
                <div className="text-4xl font-bold text-white mb-2">$2.3M+</div>
                <div className="text-gray-300">Potential Savings Identified</div>
                <div className="text-sm text-gray-500 mt-2">AI-powered insights for our users</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-800/50">
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Target</div>
                <div className="text-sm text-gray-500 mt-2">Reliable, always-available service</div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Join Our Mission */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-12 border border-gray-700">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Experience the Future of Saving?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Join the waitlist for early access to SaveCashPro — where AI automation helps you keep more of what you earn and spend smarter.
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
              Be among the first to experience the platform that's redefining financial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-6 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 80px -15px rgba(168,85,247,0.8)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Join the Waitlist
                  <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform rotate-180" />
                </span>
              </motion.button>
              <motion.button
                className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}