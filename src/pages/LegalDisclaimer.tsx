import React from "react";
import { motion } from "motion/react";
import { PageTemplate } from "../components/PageTemplate";
import { AnimatedBlob } from "../components/AnimatedBlob";
import { AlertTriangle, Scale, Shield, FileText, Gavel, Users, Copyright, ExternalLink, Video, Image, Music, Code } from "lucide-react";

export function LegalDisclaimer() {
  const disclaimers = [
    {
      icon: AlertTriangle,
      title: "Not Financial Advice",
      content: [
        "SaveCash provides educational information and general guidance only",
        "Our AI recommendations are not personalized financial advice",
        "You should consult with qualified financial professionals before making decisions",
        "We are not licensed financial advisors, investment advisors, or broker-dealers",
        "All financial decisions are your sole responsibility"
      ]
    },
    {
      icon: Scale,
      title: "Investment Risks",
      content: [
        "All investments carry risk, including the potential loss of principal",
        "Past performance does not guarantee future results",
        "Market conditions can change rapidly and unpredictably",
        "Diversification does not eliminate investment risk",
        "You should only invest money you can afford to lose"
      ]
    },
    {
      icon: Shield,
      title: "Data and Security",
      content: [
        "We implement industry-standard security measures to protect your data",
        "No system is 100% secure, and we cannot guarantee absolute security",
        "You are responsible for maintaining the security of your account credentials",
        "We are not liable for unauthorized access to your account",
        "You should regularly monitor your account for suspicious activity"
      ]
    },
    {
      icon: FileText,
      title: "Service Availability",
      content: [
        "We strive for 99.9% uptime but cannot guarantee uninterrupted service",
        "Scheduled maintenance may temporarily affect service availability",
        "We are not liable for service interruptions or technical issues",
        "Third-party integrations may experience outages beyond our control",
        "We reserve the right to modify or discontinue services at any time"
      ]
    }
  ];

  const limitations = [
    {
      title: "Limitation of Liability",
      description: "SaveCash shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of our services."
    },
    {
      title: "No Warranties",
      description: "Our services are provided 'as is' without warranties of any kind, either express or implied, including but not limited to warranties of merchantability or fitness for a particular purpose."
    },
    {
      title: "User Responsibility",
      description: "You are solely responsible for your financial decisions and their consequences. We provide tools and information, but you make the final decisions."
    },
    {
      title: "Third-Party Services",
      description: "We are not responsible for the actions, content, or services of third-party providers, including banks, investment platforms, or other financial institutions."
    }
  ];

  return (
    <PageTemplate 
      title="Legal Disclaimer" 
      subtitle="Important legal information about using SaveCash and our AI-powered financial services."
    >
      {/* Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
              <Gavel className="w-10 h-10 text-red-400" />
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Legal Disclaimer</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              This Legal Disclaimer contains important information about the limitations of our services, 
              your responsibilities as a user, and the legal framework governing your use of SaveCash.
            </p>
            <div className="mt-8 text-sm text-gray-500">
              Last updated: January 15, 2025
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Disclaimers */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Important Disclaimers</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Please read these disclaimers carefully before using our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {disclaimers.map((disclaimer, index) => (
              <motion.div
                key={disclaimer.title}
                className="p-8 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <disclaimer.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{disclaimer.title}</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {disclaimer.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Limitations and Exclusions</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Understanding the scope and limitations of our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {limitations.map((limitation, index) => (
              <motion.div
                key={limitation.title}
                className="p-8 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <Scale className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{limitation.title}</h3>
                    <p className="text-gray-400">{limitation.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Information */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl border border-blue-500/20 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-4">Regulatory Information</h3>
                <div className="space-y-4 text-gray-400">
                  <p>
                    <strong className="text-blue-400">SaveCash is not a licensed financial advisor, investment advisor, or broker-dealer.</strong> 
                    We provide educational information and general guidance only.
                  </p>
                  <p>
                    <strong>No Investment Recommendations:</strong> We do not provide specific investment advice, 
                    recommendations, or solicitations to buy or sell securities.
                  </p>
                  <p>
                    <strong>Educational Purpose:</strong> Our AI and tools are designed for educational purposes 
                    and general financial guidance, not personalized financial advice.
                  </p>
                  <p>
                    <strong>Professional Consultation:</strong> We strongly recommend consulting with qualified 
                    financial professionals, including certified financial planners, investment advisors, 
                    and tax professionals, before making any financial decisions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Licensing and Attributions */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
              <Copyright className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Licensing & Attributions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              SaveCash respects intellectual property rights and properly licenses all third-party content used in our platform. 
              This section provides comprehensive information about our licensing agreements and attributions.
            </p>
          </motion.div>

          {/* Video Content Licensing */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl border border-blue-500/20 backdrop-blur-sm">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Video className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-4">Video Content Licensing</h3>
                  <p className="text-gray-400 mb-6">
                    All video content used on SaveCash is properly licensed and attributed according to the respective licensing terms.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white/[0.05] rounded-2xl border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Video className="w-5 h-5 text-blue-400" />
                    Vecteezy Video Content
                  </h4>
                  <div className="space-y-3 text-gray-400">
                    <p><strong className="text-white">Source:</strong> Vecteezy.com</p>
                    <p><strong className="text-white">License:</strong> Free License with Attribution Required</p>
                    <p><strong className="text-white">Usage:</strong> Background videos for About page and promotional content</p>
                    <div className="mt-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <p className="text-sm text-blue-300 font-medium mb-2">Required Attribution:</p>
                      <a 
                        href="https://www.vecteezy.com/free-videos/holographic" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
                      >
                        Holographic Stock Videos by Vecteezy
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white/[0.05] rounded-2xl border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Video className="w-5 h-5 text-purple-400" />
                    About Page Video
                  </h4>
                  <div className="space-y-3 text-gray-400">
                    <p><strong className="text-white">Source:</strong> Vecteezy Video ID 26659115</p>
                    <p><strong className="text-white">Title:</strong> Sphere Liquid Iridescent Background</p>
                    <p><strong className="text-white">Resolution:</strong> Multi-colour 4K</p>
                    <div className="mt-4 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <p className="text-sm text-purple-300 font-medium mb-2">Direct Link:</p>
                      <a 
                        href="https://www.vecteezy.com/video/26659115-sphere-liquid-iridescent-background-multi-colour-gradient-multi-colour-4k-resolution" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2 text-sm"
                      >
                        View Original Video
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image and Asset Licensing */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="p-8 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-3xl border border-green-500/20 backdrop-blur-sm">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Image className="w-8 h-8 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-4">Image and Asset Licensing</h3>
                  <p className="text-gray-400 mb-6">
                    All images, icons, and visual assets used on SaveCash are properly licensed and attributed.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white/[0.05] rounded-2xl border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Image className="w-5 h-5 text-green-400" />
                    Unsplash Images
                  </h4>
                  <div className="space-y-3 text-gray-400">
                    <p><strong className="text-white">Source:</strong> Unsplash.com</p>
                    <p><strong className="text-white">License:</strong> Unsplash License (Free to use)</p>
                    <p><strong className="text-white">Usage:</strong> Team member photos and stock imagery</p>
                    <div className="mt-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                      <p className="text-sm text-green-300 font-medium mb-2">Attribution:</p>
                      <p className="text-sm text-green-400">Photos by Unsplash contributors</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white/[0.05] rounded-2xl border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5 text-orange-400" />
                    Lucide Icons
                  </h4>
                  <div className="space-y-3 text-gray-400">
                    <p><strong className="text-white">Source:</strong> Lucide.dev</p>
                    <p><strong className="text-white">License:</strong> ISC License</p>
                    <p><strong className="text-white">Usage:</strong> UI icons and interface elements</p>
                    <div className="mt-4 p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                      <p className="text-sm text-orange-300 font-medium mb-2">License Details:</p>
                      <a 
                        href="https://lucide.dev/license" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-2 text-sm"
                      >
                        View ISC License
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Software and Technology Licensing */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl border border-purple-500/20 backdrop-blur-sm">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <Code className="w-8 h-8 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-4">Software and Technology Licensing</h3>
                  <p className="text-gray-400 mb-6">
                    SaveCash is built using open-source technologies and libraries. All dependencies are properly licensed and compliant.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white/[0.05] rounded-2xl border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">React & Dependencies</h4>
                  <div className="space-y-2 text-gray-400 text-sm">
                    <p><strong className="text-white">React:</strong> MIT License</p>
                    <p><strong className="text-white">TypeScript:</strong> Apache 2.0</p>
                    <p><strong className="text-white">Vite:</strong> MIT License</p>
                    <p><strong className="text-white">Tailwind CSS:</strong> MIT License</p>
                  </div>
                </div>

                <div className="p-6 bg-white/[0.05] rounded-2xl border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Animation Libraries</h4>
                  <div className="space-y-2 text-gray-400 text-sm">
                    <p><strong className="text-white">Framer Motion:</strong> MIT License</p>
                    <p><strong className="text-white">Motion React:</strong> MIT License</p>
                    <p><strong className="text-white">CSS Animations:</strong> Custom</p>
                  </div>
                </div>

                <div className="p-6 bg-white/[0.05] rounded-2xl border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">UI Components</h4>
                  <div className="space-y-2 text-gray-400 text-sm">
                    <p><strong className="text-white">Radix UI:</strong> MIT License</p>
                    <p><strong className="text-white">Class Variance Authority:</strong> MIT License</p>
                    <p><strong className="text-white">Tailwind Merge:</strong> MIT License</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Compliance and Standards */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="p-8 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-3xl border border-yellow-500/20 backdrop-blur-sm">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-4">Compliance and Standards</h3>
                  <p className="text-gray-400 mb-6">
                    SaveCash maintains compliance with all applicable licensing requirements and industry standards.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Licensing Compliance</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                      <span>All third-party content properly attributed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                      <span>Open-source licenses respected and complied with</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                      <span>Commercial licenses obtained where required</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                      <span>Regular audits of licensing compliance</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Industry Standards</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                      <span>W3C accessibility standards compliance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                      <span>GDPR and CCPA privacy compliance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                      <span>Security best practices implementation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                      <span>Regular security and compliance audits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact for Licensing Questions */}
          <motion.div
            className="text-center p-8 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl border border-indigo-500/20 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
              <FileText className="w-8 h-8 text-indigo-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Licensing Questions?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              If you have questions about our licensing agreements, need to report a licensing issue, 
              or want to discuss commercial licensing opportunities, please contact our legal team.
            </p>
            <div className="space-y-2 text-gray-400">
              <p><strong className="text-white">Email:</strong> legal@savecash.com</p>
              <p><strong className="text-white">Phone:</strong> +1 (555) 123-4567</p>
              <p><strong className="text-white">Address:</strong> 123 Mission St, San Francisco, CA 94105</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center p-8 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
              <Users className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Questions About This Disclaimer?</h3>
            <p className="text-gray-400 mb-6">
              If you have any questions about this Legal Disclaimer or need clarification on any points, 
              please contact our legal team.
            </p>
            <div className="space-y-2 text-gray-400">
              <p>Email: legal@savecash.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Mission St, San Francisco, CA 94105</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Animated Blob Background */}
      <AnimatedBlob />
    </PageTemplate>
  );
}
