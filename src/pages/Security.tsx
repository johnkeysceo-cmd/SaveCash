import React from "react";
import { motion } from "motion/react";
import { Shield, Lock, Eye, CheckCircle, ArrowLeft, ExternalLink, AlertTriangle, Database } from "lucide-react";
import { FloatingBlobs } from "../components/FloatingBlobs";

export default function Security() {
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
              <h1 className="text-5xl md:text-7xl font-bold text-white">Security</h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-6"
            >
              Security is not a feature at SaveCash — it's the foundation.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              Every byte of data is encrypted with AES-256 standards, protected by multi-layer authentication and continuous threat monitoring.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-purple-400 font-semibold"
            >
              Trust engineered, not promised.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        
        {/* Security Overview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Security Overview</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We comply with SOC 2, GDPR, and financial-grade encryption frameworks, ensuring user trust at every level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lock,
                title: "AES-256 Encryption",
                description: "Military-grade encryption for all data at rest and in transit",
                details: ["256-bit encryption", "End-to-end security", "Zero-knowledge architecture"],
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Shield,
                title: "Multi-Factor Authentication",
                description: "Advanced authentication protocols to protect your account",
                details: ["2FA required", "Biometric support", "Hardware key support"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Eye,
                title: "Continuous Monitoring",
                description: "24/7 threat detection and response systems",
                details: ["Real-time monitoring", "AI threat detection", "Instant alerts"],
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Database,
                title: "Secure Infrastructure",
                description: "Enterprise-grade infrastructure with redundant security layers",
                details: ["SOC 2 compliant", "ISO 27001 certified", "Regular audits"],
                color: "from-red-500 to-orange-500"
              }
            ].map((security, index) => (
              <motion.div
                key={security.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${security.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <security.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{security.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{security.description}</p>
                  
                  <div className="space-y-2">
                    {security.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Compliance & Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Compliance & Certifications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We maintain the highest standards of security and compliance across all jurisdictions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-2xl p-8 border border-green-800/50">
                <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">SOC 2 Type II:</span>
                      <span className="text-gray-400 ml-2">Security, availability, and confidentiality controls</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">ISO 27001:</span>
                      <span className="text-gray-400 ml-2">Information security management system</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">PCI DSS Level 1:</span>
                      <span className="text-gray-400 ml-2">Payment card industry security standards</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">GDPR Compliant:</span>
                      <span className="text-gray-400 ml-2">European data protection regulation</span>
                    </div>
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
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Security Practices</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Regular Security Audits:</span>
                      <span className="text-gray-400 ml-2">Quarterly third-party security assessments</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Penetration Testing:</span>
                      <span className="text-gray-400 ml-2">Annual ethical hacking and vulnerability assessments</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Employee Training:</span>
                      <span className="text-gray-400 ml-2">Regular security awareness and phishing simulation</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Incident Response:</span>
                      <span className="text-gray-400 ml-2">24/7 security operations center with rapid response</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Data Protection</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your financial data is protected by multiple layers of security and privacy controls.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Data Encryption",
                description: "All data is encrypted using industry-standard AES-256 encryption",
                features: [
                  "Data encrypted at rest",
                  "Data encrypted in transit",
                  "End-to-end encryption",
                  "Zero-knowledge architecture"
                ],
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Access Controls",
                description: "Strict access controls ensure only authorized personnel can access data",
                features: [
                  "Role-based access control",
                  "Multi-factor authentication",
                  "Regular access reviews",
                  "Principle of least privilege"
                ],
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Data Privacy",
                description: "We never sell or share your personal data with third parties",
                features: [
                  "No data selling",
                  "Minimal data collection",
                  "User consent required",
                  "Right to deletion"
                ],
                color: "from-green-500 to-emerald-500"
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
                <h3 className="text-xl font-bold text-white mb-4">{protection.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{protection.description}</p>
                <div className="space-y-2">
                  {protection.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Security Metrics */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Security Metrics</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our security performance speaks for itself.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Uptime",
                value: "99.99%",
                description: "System availability",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Response Time",
                value: "< 5min",
                description: "Security incident response",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "False Positives",
                value: "< 0.1%",
                description: "AI threat detection accuracy",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Audit Score",
                value: "A+",
                description: "Third-party security rating",
                color: "from-yellow-500 to-orange-500"
              }
            ].map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mx-auto mb-4`}>
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-gray-300 font-medium mb-2">{metric.title}</div>
                  <div className="text-sm text-gray-500">{metric.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-12 border border-gray-700">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Security You Can Trust</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Explore how SaveCash keeps user data protected at every level. Our security infrastructure is designed to meet the highest standards of financial institutions.
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
                  Read Security Overview
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              <motion.button
                className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Security Report
              </motion.button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Questions about security? Contact us at security@savecash.com
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
