import React from "react";
import { motion } from "motion/react";
import { UserX, Mail, Shield, Settings, CheckCircle, AlertTriangle, ArrowRight, Mail as MailIcon, Home } from "lucide-react";
import { AnimatedBlob } from "../components/AnimatedBlob";

export default function OptOut() {
  const optOutOptions = [
    {
      icon: Mail,
      title: "Email Communications",
      description: "Opt out of marketing emails, newsletters, and promotional communications",
      details: ["Marketing emails", "Newsletter subscriptions", "Promotional offers", "Product updates"],
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: UserX,
      title: "Data Processing",
      description: "Request to stop processing your personal data for certain purposes",
      details: ["Analytics tracking", "Personalization", "Marketing profiling", "Third-party sharing"],
      color: "from-purple-400 to-violet-500"
    },
    {
      icon: Shield,
      title: "Account Deletion",
      description: "Request complete deletion of your account and associated data",
      details: ["Account removal", "Data deletion", "Profile elimination", "Complete opt-out"],
      color: "from-red-400 to-pink-500"
    },
    {
      icon: Settings,
      title: "Cookie Preferences",
      description: "Manage your cookie settings and tracking preferences",
      details: ["Analytics cookies", "Marketing cookies", "Preference cookies", "Tracking pixels"],
      color: "from-green-400 to-emerald-500"
    }
  ];

  const optOutMethods = [
    {
      title: "Email Opt-Out",
      description: "Unsubscribe from emails using the link in any email",
      icon: Mail,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Account Settings",
      description: "Manage your preferences in your account settings",
      icon: Settings,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Contact Support",
      description: "Contact our support team for assistance with opt-out requests",
      icon: Shield,
      color: "from-purple-400 to-violet-500"
    },
    {
      title: "Data Request",
      description: "Submit a formal data deletion or processing restriction request",
      icon: UserX,
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
              Opt Out Options
            </motion.h1>
            <motion.p 
              className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              You have the right to opt out of certain data processing and communications. Learn about your options.
            </motion.p>
            <motion.div 
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full text-green-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <CheckCircle className="w-5 h-5" />
              <span>Your Rights Protected</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Opt-Out Options */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Opt-Out Options</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose what communications and data processing you want to opt out of
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {optOutOptions.map((option, index) => (
              <motion.div
                key={option.title}
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
                  className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={false}
                />
                
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mb-6 relative z-10`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <option.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{option.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed relative z-10">{option.description}</p>
                <div className="space-y-2 relative z-10">
                  {option.details.map((detail, idx) => (
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

      {/* Opt-Out Methods */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-900/10 to-pink-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">How to Opt Out</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to exercise your opt-out rights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {optOutMethods.map((method, index) => (
              <motion.div
                key={method.title}
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
                  className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={false}
                />
                
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <method.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">{method.title}</h3>
                <p className="text-gray-300 relative z-10">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opt-Out Form */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Submit Opt-Out Request</h2>
            <p className="text-xl text-gray-300 mb-12">
              Use this form to submit your opt-out preferences
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
              <div className="flex items-center justify-between p-6 bg-white/[0.02] rounded-xl border border-white/10">
                  <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email Communications</h3>
                  <p className="text-gray-400">Opt out of marketing emails and newsletters</p>
                  </div>
                <div className="w-12 h-6 bg-gray-500 rounded-full flex items-center px-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center justify-between p-6 bg-white/[0.02] rounded-xl border border-white/10">
                  <div>
                  <h3 className="text-xl font-bold text-white mb-2">Data Processing</h3>
                  <p className="text-gray-400">Stop processing personal data for marketing</p>
                  </div>
                <div className="w-12 h-6 bg-gray-500 rounded-full flex items-center px-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center justify-between p-6 bg-white/[0.02] rounded-xl border border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Analytics Tracking</h3>
                  <p className="text-gray-400">Opt out of analytics and usage tracking</p>
                </div>
                <div className="w-12 h-6 bg-gray-500 rounded-full flex items-center px-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center justify-between p-6 bg-white/[0.02] rounded-xl border border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Account Deletion</h3>
                  <p className="text-gray-400">Request complete account and data deletion</p>
                </div>
                <div className="w-12 h-6 bg-gray-500 rounded-full flex items-center px-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <motion.button
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 80px -15px rgba(168,85,247,0.8)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <UserX className="w-5 h-5" />
                <span>Submit Request</span>
              </motion.button>
              <motion.button
                className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Support
              </motion.button>
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
            <h2 className="text-5xl font-bold text-white mb-8">Need Help with Opt-Out?</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Our privacy team is here to help you exercise your opt-out rights.
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
                <MailIcon className="w-5 h-5" />
                <span>Contact Privacy Team</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Privacy Settings
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}