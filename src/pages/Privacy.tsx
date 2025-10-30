import React from "react";
import { motion } from "motion/react";
import { Shield, Lock, Eye, Database, FileText, ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
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
            className="flex items-center gap-4 mb-6"
          >
            <Shield className="w-8 h-8 text-purple-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            SaveCash is committed to protecting your privacy. Our Privacy Policy explains how we collect, store, and process your information when you use our services — including what data we collect, why we collect it, and the controls you have to manage or delete it.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-400 mt-4"
          >
            We never sell personal information. All data practices follow global standards for transparency, consent, and security compliance (including GDPR, CCPA, and SOC 2 frameworks).
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-8">
              <h3 className="text-white font-semibold text-lg mb-6">Quick Navigation</h3>
              <nav className="space-y-3">
                {[
                  { id: "data-collection", title: "Data Collection", icon: Database },
                  { id: "data-usage", title: "How We Use Data", icon: Eye },
                  { id: "data-sharing", title: "Data Sharing", icon: FileText },
                  { id: "data-security", title: "Data Security", icon: Lock },
                  { id: "your-rights", title: "Your Rights", icon: Shield },
                  { id: "contact", title: "Contact Us", icon: FileText }
                ].map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    <item.icon className="w-4 h-4 group-hover:text-purple-400 transition-colors duration-300" />
                    <span className="group-hover:underline">{item.title}</span>
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-2 space-y-12"
          >
            
            {/* Data Collection */}
            <section id="data-collection" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Data Collection</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h4 className="text-white font-semibold mb-3">Information We Collect:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Account information (name, email, phone number)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Financial data (transaction history, account balances)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Usage data (how you interact with our platform)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Device information (IP address, browser type, operating system)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Usage */}
            <section id="data-usage" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">How We Use Data</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  We use your information to provide, maintain, and improve our services, process transactions, and communicate with you.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <h4 className="text-white font-semibold mb-2">Service Delivery</h4>
                    <p className="text-sm text-gray-400">Process transactions, provide customer support, and maintain your account.</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <h4 className="text-white font-semibold mb-2">Security & Fraud Prevention</h4>
                    <p className="text-sm text-gray-400">Detect and prevent fraud, protect against security threats.</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <h4 className="text-white font-semibold mb-2">Product Improvement</h4>
                    <p className="text-sm text-gray-400">Analyze usage patterns to improve our AI algorithms and features.</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <h4 className="text-white font-semibold mb-2">Legal Compliance</h4>
                    <p className="text-sm text-gray-400">Meet regulatory requirements and respond to legal requests.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Sharing */}
            <section id="data-sharing" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Data Sharing</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:
                </p>
                <div className="bg-red-900/20 border border-red-800 rounded-lg p-6">
                  <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    We Never Sell Your Data
                  </h4>
                  <p className="text-sm text-red-200">
                    SaveCash does not sell personal information to third parties. This is a core principle of our business and will never change.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <div>
                      <span className="text-white font-medium">Service Providers:</span>
                      <span className="text-gray-400 ml-2">Trusted partners who help us operate our platform (with strict data protection agreements)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <div>
                      <span className="text-white font-medium">Legal Requirements:</span>
                      <span className="text-gray-400 ml-2">When required by law or to protect our rights and safety</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <div>
                      <span className="text-white font-medium">Business Transfers:</span>
                      <span className="text-gray-400 ml-2">In connection with a merger, acquisition, or sale of assets (with user notification)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section id="data-security" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Data Security</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Lock className="w-5 h-5 text-green-400" />
                      Encryption
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• 256-bit SSL encryption for data in transit</li>
                      <li>• AES-256 encryption for data at rest</li>
                      <li>• End-to-end encryption for sensitive data</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-400" />
                      Access Controls
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Multi-factor authentication required</li>
                      <li>• Role-based access permissions</li>
                      <li>• Regular security audits and monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section id="your-rights" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Your Rights</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  You have control over your personal information. Depending on your location, you may have the following rights:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Access", desc: "Request a copy of your personal data" },
                    { title: "Rectification", desc: "Correct inaccurate or incomplete data" },
                    { title: "Erasure", desc: "Request deletion of your personal data" },
                    { title: "Portability", desc: "Export your data in a machine-readable format" },
                    { title: "Restriction", desc: "Limit how we process your data" },
                    { title: "Objection", desc: "Opt out of certain data processing" }
                  ].map((right, index) => (
                    <motion.div
                      key={right.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-purple-500/50 transition-colors duration-300"
                    >
                      <h4 className="text-white font-semibold mb-2">{right.title}</h4>
                      <p className="text-sm text-gray-400">{right.desc}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="bg-purple-900/20 border border-purple-800 rounded-lg p-6">
                  <h4 className="text-purple-400 font-semibold mb-3">Exercise Your Rights</h4>
                  <p className="text-sm text-purple-200 mb-3">
                    To exercise any of these rights, contact us at privacy@savecash.com or use our self-service portal.
                  </p>
                  <a 
                    href="mailto:privacy@savecash.com"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    Contact Privacy Team →
                  </a>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Privacy Team</h4>
                      <p className="text-sm text-gray-400 mb-2">privacy@savecash.com</p>
                      <p className="text-xs text-gray-500">Response within 48 hours</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3">Data Protection Officer</h4>
                      <p className="text-sm text-gray-400 mb-2">dpo@savecash.com</p>
                      <p className="text-xs text-gray-500">For complex privacy matters</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Last updated: January 2025. We may update this Privacy Policy from time to time. 
                  We will notify you of any material changes by posting the new Privacy Policy on this page.
                </p>
              </div>
            </section>

          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Appended Comprehensive Privacy Policy (no deletions to prior content)
// ---------------------------------------------------------------------------

export function PrivacyPolicyLegalAppendix() {
  return (
    <div className="border-t border-gray-800 bg-gray-900/40">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">SaveCash Privacy Policy (Full Legal Text)</h2>
          <p className="text-sm text-gray-500">Effective Date: [Insert Effective Date] · Last Updated: [Insert Last Updated Date]</p>
        </motion.div>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">1. Introduction</h3>
            <p>
              Welcome to SaveCash (“we,” “us,” “our”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website https://savecashpro.vercel.app, our mobile applications, and any other digital platform operated by SaveCash (collectively, the “Services”). By accessing or using our Services, you agree to this Privacy Policy.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">2. Information We Collect</h3>
            <h4 className="text-xl font-semibold text-white mt-2">2.1 Personal Information</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name, username, or display name</li>
              <li>Email address and contact details</li>
              <li>Account credentials</li>
              <li>Payment information (processed by secure third-party processors)</li>
              <li>Communication preferences and support submissions</li>
            </ul>
            <h4 className="text-xl font-semibold text-white mt-4">2.2 Automatically Collected Data</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Device information, OS version, unique identifiers</li>
              <li>Browser type and version</li>
              <li>IP address, geolocation, connection data</li>
              <li>Referring URLs, usage behavior, pages visited, time spent</li>
              <li>Cookie identifiers and tracking pixels</li>
            </ul>
            <h4 className="text-xl font-semibold text-white mt-4">2.3 Cookies and Tracking Technologies</h4>
            <p>We use cookies, local storage, and similar technologies to authenticate users, analyze usage, and deliver personalized content and marketing. See our Cookie Policy for details.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">3. How We Use Your Information</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Account registration, verification, and authentication</li>
              <li>Providing and improving Services and features</li>
              <li>Processing transactions and maintaining payment records</li>
              <li>Customer support, bug fixes, and feedback handling</li>
              <li>Administrative messages and promotional communications (with consent)</li>
              <li>Enforcing Terms and compliance with laws</li>
              <li>Analyzing performance and security</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">4. Legal Basis for Processing (GDPR & Global)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Performance of Contract</li>
              <li>Legitimate Interests</li>
              <li>Consent</li>
              <li>Legal Obligation</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">5. Data Sharing & Disclosure</h3>
            <p>We do not sell personal information. We may share data with service providers, legal authorities, during business transfers, or with affiliates/partners with your consent.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">6. Data Retention</h3>
            <p>We retain Personal Data only as long as necessary for the purposes outlined or as required by law, after which it is securely deleted, anonymized, or archived.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">7. Your Privacy Rights</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access, Rectification, Erasure</li>
              <li>Restriction and Objection</li>
              <li>Data Portability</li>
              <li>Withdraw Consent</li>
            </ul>
            <p className="text-sm text-gray-400 mt-2">Contact: privacy.savecashpro@gmail.com</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">8. International Data Transfers</h3>
            <p>Data may be transferred outside your jurisdiction. We implement Standard Contractual Clauses and similar safeguards.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">9. Data Security</h3>
            <p>We implement administrative, technical, and physical measures to protect your information. No method is 100% secure.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">10. Third-Party Links & Integrations</h3>
            <p>Our Services may contain links to third parties. We are not responsible for their privacy practices. Review their policies separately.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">11. Children’s Privacy</h3>
            <p>Our Services are not directed to users under 13. We do not knowingly collect data from minors. Contact us if you believe we have.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">12. Changes to This Policy</h3>
            <p>We may update this Privacy Policy periodically. Changes take effect when posted with an updated “Last Modified” date.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">13. Contact Us</h3>
            <p>Email: privacy.savecashpro@gmail.com</p>
            <p>Address: 600 California Street, Floor 11, San Francisco, CA 94108, United States</p>
          </section>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Appended: Additional Privacy Policy Text Provided (no deletions)
// ---------------------------------------------------------------------------

export function PrivacyPolicyAdditionalText() {
  return (
    <div className="border-t border-gray-800 bg-gray-900/40">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-gray-300 leading-relaxed">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Privacy Policy</h2>
          <p className="text-sm text-gray-500">Last updated: [Month DD, YYYY]</p>
          <p className="mt-4">
            Thank you for choosing to be part of our community at SaveCash (“Company”, “we”, “us”, or “our”). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://savecashpro.vercel.app, use our mobile application, or engage with our services (collectively, the “Services”). By using our Services, you agree to the terms of this Privacy Policy.
          </p>
        </div>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">1. Information We Collect</h3>
          <p>We collect information that you voluntarily provide and information automatically collected when you use our Services.</p>
          <h4 className="text-xl font-semibold text-white mt-3">1.1. Information You Provide</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><span className="text-white font-medium">Account Information:</span> name, email address, and other contact details.</li>
            <li><span className="text-white font-medium">Communications:</span> messages, feedback, or customer support inquiries.</li>
            <li><span className="text-white font-medium">Payment Information:</span> billing details for premium services or subscriptions.</li>
            <li><span className="text-white font-medium">User Content:</span> files, preferences, or AI module configurations.</li>
          </ul>
          <h4 className="text-xl font-semibold text-white mt-3">1.2. Automatically Collected Information</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Usage data (IP address, browser type, device identifiers, pages visited)</li>
            <li>Cookies and tracking technologies (site and ad interactions)</li>
            <li>Log data (timestamps, OS version, app performance metrics)</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">2. How We Use Your Information</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Operate, maintain, and improve the Services</li>
            <li>Process transactions and manage subscriptions</li>
            <li>Communicate updates, security alerts, and policy changes</li>
            <li>Personalize experience and recommend relevant content</li>
            <li>Comply with legal obligations or enforce our Terms of Service</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">3. Cookies and Tracking Technologies</h3>
          <p>We use cookies, web beacons, and similar technologies for analytics, security, and advertising. You can manage preferences through your browser or our cookie banner.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">4. Disclosure of Your Information</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>With service providers (hosting, analytics, customer service)</li>
            <li>To comply with laws or lawful requests</li>
            <li>During a business transfer (merger or acquisition)</li>
            <li>With your consent or direction</li>
          </ul>
          <p className="text-sm text-gray-400 mt-2">We do not sell or rent your personal data to third parties.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">5. Data Retention</h3>
          <p>We retain information as long as necessary for the purposes described or as required by law. When no longer needed, data is securely deleted or anonymized.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">6. Your Privacy Rights</h3>
          <p>Depending on your location, you may have the right to access, correct, delete, object, or withdraw consent. Contact: privacy.savecashpro@gmail.com.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">7. Children’s Privacy</h3>
          <p>Our Services are not intended for users under 16. We do not knowingly collect data from minors.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">8. Data Security</h3>
          <p>We use administrative, technical, and physical safeguards to protect personal information. No system is completely secure.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">9. International Transfers</h3>
          <p>Your information may be processed in other countries, including the United States.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">10. Updates to This Policy</h3>
          <p>The latest version will always be available at https://savecashpro.vercel.app/privacy-policy. Material updates will be notified via email or platform alerts.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">11. Contact Us</h3>
          <p>SaveCash · 600 California Street, San Francisco, CA · Email: privacy.savecashpro@gmail.com · Website: https://savecashpro.vercel.app</p>
        </section>
      </div>
    </div>
  );
}

// Appended: Investor & Compliance Appendix (Privacy)
export function PrivacyInvestorComplianceAppendix() {
  return (
    <div className="border-t border-gray-800 bg-gray-900/40">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-gray-300 leading-relaxed">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Privacy Investor & Compliance Appendix</h2>
          <p className="text-sm text-gray-500">Enterprise details for legal, security, and investor diligence.</p>
        </div>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">Data Protection Officer (DPO)</h3>
          <p>Contact: privacy.savecashpro@gmail.com · Address: 600 California Street, 11th Floor, San Francisco, CA 94108</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">Records of Processing Activities (RoPA) – Summary</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Data categories: account, usage, device, billing metadata</li>
            <li>Purposes: service delivery, security, analytics, support, legal compliance</li>
            <li>Lawful bases: contract, legitimate interests, consent, legal obligation</li>
            <li>Retention: purpose-limited; periodic reviews; anonymization for analytics</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">Data Protection Impact Assessments (DPIA)</h3>
          <p>We conduct DPIAs for high-risk features (e.g., AI personalization, financial optimization). Risk mitigations include pseudonymization, access controls, encryption, and vendor DPAs.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">Subprocessors (Primary)</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Hosting/Telemetry: Vercel (US/EU)</li>
            <li>Payments: Stripe (US/EU)</li>
            <li>Analytics: Google Analytics / Vercel Analytics</li>
            <li>Support/CRM (if enabled): HubSpot/Mailchimp</li>
          </ul>
          <p className="text-sm text-gray-400 mt-2">All subprocessors are bound by DPAs/SCCs; list will be updated prior to material changes.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">Security Controls – Overview</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Encryption: TLS in transit; provider-managed encryption at rest</li>
            <li>Access: RBAC, MFA for admin, least-privilege</li>
            <li>Monitoring: audit logs, anomaly detection</li>
            <li>Secure SDLC: dependency scanning, code reviews</li>
            <li>Backups: routine snapshots; disaster recovery testing</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">Breach Notification Policy</h3>
          <p>We assess incidents promptly; notify regulators and impacted users without undue delay in accordance with GDPR/CCPA timelines and applicable laws. Containment, forensic review, and corrective actions are documented.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">Data Subject Requests (DSAR) – SLA</h3>
          <p>Requests are acknowledged within 7 days and fulfilled within 30 days (extendable where permitted). Identity verification is required to protect user data.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">International Transfers</h3>
          <p>We implement SCCs and equivalent safeguards for cross-border transfers; regional hosting may be used where feasible.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">Subprocessor Register (Detailed)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-gray-400">
                <tr className="text-left">
                  <th className="pr-4 py-2">Provider</th>
                  <th className="pr-4 py-2">Purpose</th>
                  <th className="pr-4 py-2">Data Categories</th>
                  <th className="pr-4 py-2">Region</th>
                  <th className="pr-4 py-2">DPA/SCC</th>
                  <th className="py-2">Update Cadence</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-t border-gray-800">
                  <td className="pr-4 py-2">Vercel</td>
                  <td className="pr-4 py-2">Hosting/Telemetry</td>
                  <td className="pr-4 py-2">IP, request metadata</td>
                  <td className="pr-4 py-2">US/EU</td>
                  <td className="pr-4 py-2">DPA + SCCs</td>
                  <td className="py-2">Quarterly review</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="pr-4 py-2">Stripe</td>
                  <td className="pr-4 py-2">Payments</td>
                  <td className="pr-4 py-2">Billing metadata</td>
                  <td className="pr-4 py-2">US/EU</td>
                  <td className="pr-4 py-2">DPA + SCCs</td>
                  <td className="py-2">Quarterly review</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="pr-4 py-2">Google Analytics</td>
                  <td className="pr-4 py-2">Analytics</td>
                  <td className="pr-4 py-2">Usage, device data</td>
                  <td className="pr-4 py-2">Global</td>
                  <td className="pr-4 py-2">DPA + SCCs</td>
                  <td className="py-2">Quarterly review</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="pr-4 py-2">HubSpot/Mailchimp</td>
                  <td className="pr-4 py-2">CRM/Comms (if enabled)</td>
                  <td className="pr-4 py-2">Contact, preferences</td>
                  <td className="pr-4 py-2">US/EU</td>
                  <td className="pr-4 py-2">DPA + SCCs</td>
                  <td className="py-2">Quarterly review</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">Advance notice will be provided for material changes to subprocessors.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">Audit Readiness (SOC 2-style Mapping)</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>CC1 Governance: documented policies; annual review and approval</li>
            <li>CC2 Communication: user disclosures; incident comms runbook</li>
            <li>CC3 Risk Assessment: risk register; DPIAs for high-risk features</li>
            <li>CC6 Access: RBAC, MFA, quarterly access reviews</li>
            <li>CC7 Change: Git-based change control, peer reviews, CI checks</li>
            <li>CC8 Monitoring: logs, alerts, incident response playbook</li>
          </ul>
          <p className="text-sm text-gray-400 mt-2">SOC 2 report availability can be provided under NDA when available.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">Vendor Risk Management</h3>
          <p>New vendors are assessed for security posture and contractual safeguards (DPA/SCC). Annual reassessments and breach-history checks are performed.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">Change & Release Management</h3>
          <p>All changes follow peer review, lint/type checks, and staged deploys. Hotfixes are logged and retro-reviewed within 5 business days.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">Access Review Cadence</h3>
          <p>Quarterly entitlement reviews for production, analytics, and billing tools. Immediate revocation on role change or termination.</p>
        </section>
      </div>
    </div>
  );
}