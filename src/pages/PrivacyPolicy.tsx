import React from "react";
import { motion } from "motion/react";
import { Shield, ArrowLeft, ExternalLink, CheckCircle, Lock, Eye, Database, User } from "lucide-react";
import { FloatingBlobs } from "../components/FloatingBlobs";

export default function PrivacyPolicy() {
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
              <div className="relative">
                <Shield className="w-12 h-12 text-purple-400" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-purple-400/20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white">Privacy Policy</h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-6"
            >
              We take privacy seriously — because trust begins with protection.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              SaveCash's Privacy Policy outlines exactly what data we collect, how it's used, and the measures we take to ensure complete transparency and control.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-purple-400 font-semibold"
            >
              Data ownership, not data exploitation.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        
        {/* Key Principles */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Privacy Principles</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We never sell personal information. We never compromise user trust. Every policy decision begins with one principle: your data belongs to you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Transparency",
                description: "We clearly explain what data we collect and how we use it",
                icon: Eye,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Control",
                description: "You have complete control over your personal information",
                icon: User,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Security",
                description: "Bank-level encryption protects your data at all times",
                icon: Lock,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Minimal Collection",
                description: "We only collect data necessary to provide our services",
                icon: Database,
                color: "from-yellow-500 to-orange-500"
              }
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${principle.color} flex items-center justify-center mx-auto mb-6`}>
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{principle.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Data Collection */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What We Collect</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We collect only the data necessary to provide our financial automation services.
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                category: "Account Information",
                description: "Basic information needed to create and manage your account",
                data: [
                  "Email address and password",
                  "Name and contact information",
                  "Account preferences and settings",
                  "Profile information"
                ],
                purpose: "Account creation, authentication, and service delivery"
              },
              {
                category: "Financial Data",
                description: "Transaction and account data to provide AI-powered insights",
                data: [
                  "Bank account connections (read-only)",
                  "Transaction history and patterns",
                  "Spending categories and amounts",
                  "Financial goals and preferences"
                ],
                purpose: "AI analysis, savings recommendations, and financial insights"
              },
              {
                category: "Usage Data",
                description: "Information about how you interact with our platform",
                data: [
                  "App usage patterns and features used",
                  "Performance and error logs",
                  "Device information and browser type",
                  "IP address and general location"
                ],
                purpose: "Service improvement, security, and user experience optimization"
              },
              {
                category: "Communication Data",
                description: "Records of our interactions with you",
                data: [
                  "Support tickets and messages",
                  "Email communications",
                  "Feedback and survey responses",
                  "Customer service interactions"
                ],
                purpose: "Customer support, service improvement, and relationship management"
              }
            ].map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{section.category}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{section.description}</p>
                    <div className="bg-gray-700/50 rounded-lg p-4 mb-4">
                      <h4 className="text-white font-semibold mb-2">Data Collected:</h4>
                      <ul className="space-y-1">
                        {section.data.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-800/50">
                      <h4 className="text-purple-400 font-semibold mb-2">Purpose:</h4>
                      <p className="text-gray-300 text-sm">{section.purpose}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Data Protection */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How We Protect Your Data</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We implement industry-leading security measures to protect your personal and financial information.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Encryption",
                description: "All data is encrypted using AES-256 encryption both in transit and at rest",
                details: [
                  "End-to-end encryption for all communications",
                  "AES-256 encryption for stored data",
                  "TLS 1.3 for all data transmission",
                  "Regular encryption key rotation"
                ],
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Access Controls",
                description: "Strict access controls ensure only authorized personnel can access your data",
                details: [
                  "Multi-factor authentication for all staff",
                  "Role-based access permissions",
                  "Regular access audits and reviews",
                  "Principle of least privilege"
                ],
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Monitoring",
                description: "Continuous monitoring and threat detection protect against unauthorized access",
                details: [
                  "24/7 security monitoring",
                  "Automated threat detection",
                  "Real-time alert systems",
                  "Regular security assessments"
                ],
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Compliance",
                description: "We maintain compliance with global privacy and security standards",
                details: [
                  "SOC 2 Type II certification",
                  "GDPR compliance",
                  "CCPA compliance",
                  "Regular third-party audits"
                ],
                color: "from-yellow-500 to-orange-500"
              }
            ].map((protection, index) => (
              <motion.div
                key={protection.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${protection.color} flex items-center justify-center mb-6`}>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{protection.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{protection.description}</p>
                <div className="space-y-2">
                  {protection.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Your Rights */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Your Privacy Rights</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              You have complete control over your personal data. Here's how you can exercise your rights.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                right: "Access Your Data",
                description: "Request a copy of all personal data we have about you",
                action: "Download your data",
                timeframe: "Within 30 days"
              },
              {
                right: "Correct Your Data",
                description: "Update or correct any inaccurate personal information",
                action: "Update your profile",
                timeframe: "Immediately"
              },
              {
                right: "Delete Your Data",
                description: "Request deletion of your personal data from our systems",
                action: "Request deletion",
                timeframe: "Within 30 days"
              },
              {
                right: "Restrict Processing",
                description: "Limit how we process your personal data",
                action: "Manage preferences",
                timeframe: "Within 7 days"
              },
              {
                right: "Data Portability",
                description: "Export your data in a machine-readable format",
                action: "Export your data",
                timeframe: "Within 30 days"
              },
              {
                right: "Object to Processing",
                description: "Opt out of certain types of data processing",
                action: "Update preferences",
                timeframe: "Immediately"
              }
            ].map((right, index) => (
              <motion.div
                key={right.right}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{right.right}</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">{right.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>Response time: {right.timeframe}</span>
                    </div>
                  </div>
                  <motion.button
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {right.action}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-12 border border-gray-700">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Questions About Privacy?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Our privacy team is here to help. Contact us with any questions about how we handle your data.
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
                  Contact Privacy Team
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              <motion.button
                className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Privacy Settings
              </motion.button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Email us at privacy@savecash.com or call our privacy hotline at 1-800-SAVECASH
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
