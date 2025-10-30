import React from "react";
import { motion } from "motion/react";
import { AlertTriangle, FileText, Shield, Scale, CheckCircle, Users, ArrowRight, Mail, Home } from "lucide-react";
import { AnimatedBlob } from "../components/AnimatedBlob";

export default function LegalDisclaimer() {
  const disclaimers = [
    {
      icon: AlertTriangle,
      title: "General Information",
      content: "The information provided on SaveCash Pro is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the site.",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: FileText,
      title: "Financial Advice",
      content: "SaveCash Pro is not a financial advisor, investment advisor, or financial planner. The information provided is not intended as financial advice and should not be construed as such. Always consult with a qualified financial advisor before making any financial decisions.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Shield,
      title: "No Liability",
      content: "Under no circumstance shall SaveCash Pro have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.",
      color: "from-purple-400 to-violet-500"
    },
    {
      icon: Scale,
      title: "External Links",
      content: "Our site may contain links to external websites that are not provided or maintained by or in any way affiliated with SaveCash Pro. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.",
      color: "from-green-400 to-emerald-500"
    }
  ];

  const importantPoints = [
    {
      title: "Investment Risks",
      description: "All investments carry risk. Past performance does not guarantee future results.",
      icon: AlertTriangle,
      color: "from-red-400 to-pink-500"
    },
    {
      title: "Data Accuracy",
      description: "We strive for accuracy but cannot guarantee all information is current or complete.",
      icon: CheckCircle,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Service Availability",
      description: "We cannot guarantee uninterrupted service or that our platform will be error-free.",
      icon: Shield,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "User Responsibility",
      description: "Users are responsible for their own financial decisions and should seek professional advice.",
      icon: Users,
      color: "from-purple-400 to-violet-500"
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
              Legal Disclaimer
            </motion.h1>
            <motion.p 
              className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Important legal information about the use of our platform and services.
            </motion.p>
            <motion.div 
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <AlertTriangle className="w-5 h-5" />
              <span>Last updated: January 1, 2025</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer Sections */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {disclaimers.map((disclaimer, index) => (
              <motion.div
                key={disclaimer.title}
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
                  className={`absolute inset-0 bg-gradient-to-br ${disclaimer.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={false}
                />
                
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${disclaimer.color} rounded-2xl flex items-center justify-center mb-6 relative z-10`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <disclaimer.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-6 relative z-10">{disclaimer.title}</h3>
                <p className="text-gray-300 leading-relaxed relative z-10">{disclaimer.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Points */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-900/10 to-pink-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Important Points</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key information you should be aware of when using our platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {importantPoints.map((point, index) => (
              <motion.div
                key={point.title}
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
                  className={`absolute inset-0 bg-gradient-to-br ${point.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={false}
                />
                
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${point.color} rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <point.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">{point.title}</h3>
                <p className="text-gray-300 relative z-10">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Advice Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Seek Professional Advice</h2>
            <p className="text-xl text-gray-300 mb-12">
              Always consult with qualified professionals before making financial decisions
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
                <AlertTriangle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Financial Advisors</h3>
                  <p className="text-gray-300">Consult with licensed financial advisors for personalized investment advice.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/[0.02] rounded-xl border border-white/10">
                <Shield className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Tax Professionals</h3>
                  <p className="text-gray-300">Seek advice from qualified tax professionals for tax-related matters.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/[0.02] rounded-xl border border-white/10">
                <Scale className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Legal Counsel</h3>
                  <p className="text-gray-300">Consult with legal professionals for complex financial or legal matters.</p>
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
            <h2 className="text-5xl font-bold text-white mb-8">Questions About This Disclaimer?</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Our legal team is available to answer any questions about this disclaimer.
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
                <span>Contact Legal Team</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Disclaimer
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Appended: Disclaimer Policy (Full Legal Text)
export function DisclaimerPolicyAppendix() {
  return (
    <div className="border-t border-gray-800 bg-gray-900/40">
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-300 leading-relaxed">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Disclaimer Policy (Full Legal Text)</h2>
        <p className="mb-4">Effective Date: [Insert Date] · Company: SaveCash · Address: 600 California Street, 11th Floor, San Francisco, CA 94108</p>
        <h3 className="text-2xl font-semibold text-white mb-3">1. Overview</h3>
        <p className="mb-4">This Disclaimer governs your use of the SaveCash Platform. By using it, you agree to this Disclaimer.</p>
        <h3 className="text-2xl font-semibold text-white mb-3">2. No Warranties</h3>
        <p className="mb-4">Information and services are provided “as is” and “as available” without any warranties.</p>
        <h3 className="text-2xl font-semibold text-white mb-3">3. External Links</h3>
        <p className="mb-4">Links to third-party sites do not imply endorsement; review their policies before use.</p>
        <h3 className="text-2xl font-semibold text-white mb-3">4. Professional Disclaimer</h3>
        <p className="mb-4">Content is educational only and not legal, financial, or tax advice. Consult qualified professionals.</p>
        <h3 className="text-2xl font-semibold text-white mb-3">5. Affiliate Programs</h3>
        <p className="mb-4">We may use affiliate links; compensation does not influence editorial content. Disclosed per FTC rules.</p>
        <h3 className="text-2xl font-semibold text-white mb-3">6. Testimonials</h3>
        <p className="mb-4">Results vary; testimonials are real but not typical. Some edits for clarity/length.</p>
        <h3 className="text-2xl font-semibold text-white mb-3">7. AI-Generated Information</h3>
        <p className="mb-4">AI outputs may contain inaccuracies; verify independently before relying upon them.</p>
        <h3 className="text-2xl font-semibold text-white mb-3">8. Limitation of Liability</h3>
        <p className="mb-4">To the maximum extent permitted by law, SaveCash is not liable for indirect or consequential damages.</p>
        <h3 className="text-2xl font-semibold text-white mb-3">9. User Conduct</h3>
        <p className="mb-4">Users remain responsible for their actions and compliance with applicable laws.</p>
        <h3 className="text-2xl font-semibold text-white mb-3">10. Changes</h3>
        <p className="mb-4">Updates will be posted at https://savecashpro.vercel.app/disclaimer and are effective upon publication.</p>
        <h3 className="text-2xl font-semibold text-white mb-3">11. Governing Law</h3>
        <p className="mb-4">California law governs. Disputes resolved in San Francisco County, CA.</p>
        <h3 className="text-2xl font-semibold text-white mb-3">12. Contact</h3>
        <p>📧 privacy.savecashpro@gmail.com · 📞 (661) 812-3265 · 📍 600 California Street, 11th Floor, San Francisco, CA 94108</p>
      </div>
    </div>
  );
}