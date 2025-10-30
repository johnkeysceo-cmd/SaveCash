import React from "react";
import { motion } from "motion/react";
import { Cookie, Settings, Shield, Eye, Database, ArrowLeft, ToggleLeft, ToggleRight } from "lucide-react";

export default function Cookies() {
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
            <Cookie className="w-8 h-8 text-purple-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Cookie Policy</h1>
          </motion.div>
          
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
            >
            SaveCash uses cookies and similar technologies to enhance performance, improve analytics, and personalize your experience.
            </motion.p>
          
          <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-400 mt-4"
          >
            You can manage your cookie preferences anytime — we give you full control over what's stored, why, and for how long.
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
                  { id: "what-are-cookies", title: "What Are Cookies?", icon: Cookie },
                  { id: "types-of-cookies", title: "Types of Cookies", icon: Database },
                  { id: "how-we-use", title: "How We Use Cookies", icon: Eye },
                  { id: "third-party", title: "Third-Party Cookies", icon: Shield },
                  { id: "manage-preferences", title: "Manage Preferences", icon: Settings },
                  { id: "contact", title: "Contact Us", icon: Cookie }
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
            
            {/* What Are Cookies */}
            <section id="what-are-cookies" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <Cookie className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">What Are Cookies?</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Cookies are small text files that are stored on your device when you visit a website. They help websites remember information about your visit, such as your preferences and settings.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h4 className="text-white font-semibold mb-3">How Cookies Work</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">1.</span>
                      <div>
                        <span className="text-white font-medium">Website sends cookie:</span>
                        <span className="text-gray-400 ml-2">When you visit SaveCash, we send a small file to your browser</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">2.</span>
                      <div>
                        <span className="text-white font-medium">Browser stores cookie:</span>
                        <span className="text-gray-400 ml-2">Your browser saves the cookie on your device</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">3.</span>
                      <div>
                        <span className="text-white font-medium">Cookie is sent back:</span>
                        <span className="text-gray-400 ml-2">On future visits, your browser sends the cookie back to us</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6">
                  <h4 className="text-blue-400 font-semibold mb-3">Why We Use Cookies</h4>
                  <p className="text-sm text-blue-200">
                    Cookies help us provide you with a better experience by remembering your preferences, 
                    keeping you logged in, and understanding how you use our services so we can improve them.
                  </p>
          </div>
        </div>
      </section>

            {/* Types of Cookies */}
            <section id="types-of-cookies" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Types of Cookies</h2>
              </div>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  We use different types of cookies for different purposes. Here's how we categorize them:
                </p>
                
                {/* Essential Cookies */}
                <div className="bg-green-900/20 border border-green-800 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-green-400" />
                    <h3 className="text-xl font-bold text-white">Essential Cookies</h3>
                    <span className="bg-green-400 text-green-900 px-2 py-1 rounded text-xs font-semibold">Required</span>
                  </div>
                  <p className="text-sm text-green-200 mb-4">
                    These cookies are necessary for the website to function properly. They cannot be disabled.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Keep you logged in to your account</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Remember your security preferences</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Protect against fraud and security threats</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Load balance and ensure site stability</span>
                    </div>
          </div>
        </div>

                {/* Analytics Cookies */}
                <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-blue-400" />
                    <h3 className="text-xl font-bold text-white">Analytics Cookies</h3>
                    <span className="bg-blue-400 text-blue-900 px-2 py-1 rounded text-xs font-semibold">Optional</span>
                  </div>
                  <p className="text-sm text-blue-200 mb-4">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Track page views and user journeys</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Measure website performance and speed</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Identify popular features and content</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Improve user experience based on usage patterns</span>
                    </div>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="bg-purple-900/20 border border-purple-800 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Settings className="w-6 h-6 text-purple-400" />
                    <h3 className="text-xl font-bold text-white">Functional Cookies</h3>
                    <span className="bg-purple-400 text-purple-900 px-2 py-1 rounded text-xs font-semibold">Optional</span>
                  </div>
                  <p className="text-sm text-purple-200 mb-4">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Remember your language and region preferences</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Store your dashboard layout and settings</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Remember your notification preferences</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Enable chat support and help features</span>
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-orange-900/20 border border-orange-800 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Cookie className="w-6 h-6 text-orange-400" />
                    <h3 className="text-xl font-bold text-white">Marketing Cookies</h3>
                    <span className="bg-orange-400 text-orange-900 px-2 py-1 rounded text-xs font-semibold">Optional</span>
                  </div>
                  <p className="text-sm text-orange-200 mb-4">
                    These cookies are used to deliver advertisements more relevant to you and your interests.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Show relevant advertisements on other websites</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Measure the effectiveness of our marketing campaigns</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Limit the number of times you see an ad</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Provide social media features and content</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* How We Use Cookies */}
            <section id="how-we-use" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">How We Use Cookies</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  We use cookies to provide, protect, and improve our services. Here's a detailed breakdown of our cookie usage:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-400" />
                      Security & Authentication
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Session management and user authentication</li>
                      <li>• CSRF protection and security tokens</li>
                      <li>• Fraud detection and prevention</li>
                      <li>• Two-factor authentication state</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Settings className="w-5 h-5 text-blue-400" />
                      User Experience
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Remember your login preferences</li>
                      <li>• Store dashboard layout and settings</li>
                      <li>• Language and region preferences</li>
                      <li>• Notification and alert settings</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Database className="w-5 h-5 text-purple-400" />
                      Analytics & Performance
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Track feature usage and engagement</li>
                      <li>• Monitor website performance</li>
                      <li>• Identify and fix technical issues</li>
                      <li>• A/B testing and optimization</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Cookie className="w-5 h-5 text-orange-400" />
                      Marketing & Communication
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Personalized content recommendations</li>
                      <li>• Email campaign effectiveness</li>
                      <li>• Social media integration</li>
                      <li>• Retargeting and remarketing</li>
                    </ul>
                </div>
                </div>
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section id="third-party" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Third-Party Cookies</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  We work with trusted third-party services that may set their own cookies. These partners help us provide better services and analytics.
                </p>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                    <h4 className="text-white font-semibold mb-3">Our Trusted Partners</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-purple-400 font-medium mb-2">Analytics Partners</h5>
                        <ul className="space-y-1 text-sm text-gray-400">
                          <li>• Google Analytics (privacy-focused)</li>
                          <li>• Mixpanel (product analytics)</li>
                          <li>• Hotjar (user experience)</li>
                        </ul>
                      </div>
                <div>
                        <h5 className="text-purple-400 font-medium mb-2">Security Partners</h5>
                        <ul className="space-y-1 text-sm text-gray-400">
                          <li>• Cloudflare (security & performance)</li>
                          <li>• Auth0 (authentication)</li>
                          <li>• Sentry (error monitoring)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6">
                    <h4 className="text-blue-400 font-semibold mb-3">Third-Party Cookie Control</h4>
                    <p className="text-sm text-blue-200">
                      You can control third-party cookies through your browser settings or by using our cookie preference center. 
                      Note that disabling certain third-party cookies may affect the functionality of our services.
                    </p>
                </div>
                </div>
              </div>
            </section>

            {/* Manage Preferences */}
            <section id="manage-preferences" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Manage Your Cookie Preferences</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  You have full control over your cookie preferences. You can enable or disable different types of cookies at any time.
                </p>
                
                {/* Cookie Preference Controls */}
                <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
                  <h4 className="text-white font-semibold mb-6">Cookie Settings</h4>
                  
                  {/* Essential Cookies */}
                  <div className="flex items-center justify-between py-4 border-b border-gray-700">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-green-400" />
                      <div>
                        <h5 className="text-white font-medium">Essential Cookies</h5>
                        <p className="text-sm text-gray-400">Required for basic website functionality</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <ToggleRight className="w-6 h-6 text-green-400" />
                      <span className="text-sm text-gray-400">Always Active</span>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-center justify-between py-4 border-b border-gray-700">
                    <div className="flex items-center gap-3">
                      <Eye className="w-5 h-5 text-blue-400" />
                      <div>
                        <h5 className="text-white font-medium">Analytics Cookies</h5>
                        <p className="text-sm text-gray-400">Help us improve our services</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <ToggleRight className="w-6 h-6 text-green-400" />
                      <span className="text-sm text-gray-400">Active</span>
                    </div>
                  </div>

                  {/* Functional Cookies */}
                  <div className="flex items-center justify-between py-4 border-b border-gray-700">
                    <div className="flex items-center gap-3">
                      <Settings className="w-5 h-5 text-purple-400" />
                      <div>
                        <h5 className="text-white font-medium">Functional Cookies</h5>
                        <p className="text-sm text-gray-400">Remember your preferences</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <ToggleRight className="w-6 h-6 text-green-400" />
                      <span className="text-sm text-gray-400">Active</span>
                </div>
              </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-3">
                      <Cookie className="w-5 h-5 text-orange-400" />
                <div>
                        <h5 className="text-white font-medium">Marketing Cookies</h5>
                        <p className="text-sm text-gray-400">Personalized content and ads</p>
                      </div>
                </div>
                    <div className="flex items-center gap-2">
                      <ToggleLeft className="w-6 h-6 text-gray-400" />
                      <span className="text-sm text-gray-400">Inactive</span>
                </div>
              </div>
            </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                    Save Preferences
              </motion.button>
              <motion.button
                    className="w-full border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-medium hover:border-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                    Accept All Cookies
              </motion.button>
            </div>

                <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-6">
                  <h4 className="text-yellow-400 font-semibold mb-3">Browser Settings</h4>
                  <p className="text-sm text-yellow-200 mb-3">
                    You can also control cookies through your browser settings. Here's how:
                  </p>
                  <ul className="space-y-1 text-sm text-yellow-200">
                    <li>• <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                    <li>• <strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                    <li>• <strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                    <li>• <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                  </ul>
                </div>
        </div>
      </section>

            {/* Contact */}
            <section id="contact" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <Cookie className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Questions About Cookies?</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Privacy Team</h4>
                      <p className="text-sm text-gray-400 mb-2">privacy@savecash.com</p>
                      <p className="text-xs text-gray-500">For cookie and privacy questions</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3">Technical Support</h4>
                      <p className="text-sm text-gray-400 mb-2">support@savecash.com</p>
                      <p className="text-xs text-gray-500">For technical cookie issues</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Last updated: January 2025. We may update this Cookie Policy from time to time. 
                  We will notify you of any material changes by posting the updated policy on this page.
                </p>
            </div>
            </section>

          </motion.div>
        </div>
      </div>

      {/* Appended: Full Legal Cookie Policy (no deletions) */}
      <div className="border-t border-gray-800 bg-gray-900/40">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Cookie Policy (Full Legal Text)</h2>
            <p className="text-sm text-gray-500">Effective Date: October 29, 2025</p>
            <p className="text-gray-400 mt-3">
              Company: SaveCash (“Company”, “we”, “us”, “our”) · Website: https://savecashpro.vercel.app · Email: privacy.savecashpro@gmail.com · Address: 600 California Street, 11th Floor, San Francisco, CA 94108, United States
            </p>
          </motion.div>

          <div className="space-y-10 text-gray-300 leading-relaxed">
            <section>
              <h3 className="text-2xl font-semibold text-white mb-3">1. Introduction</h3>
              <p>
                This Cookie Policy explains how SaveCash uses cookies and similar technologies to recognize you when you visit our website, use our mobile app, or interact with our services (“Services”). It details what these technologies are, why we use them, and your rights to control their use in accordance with applicable data protection laws, including GDPR, CCPA, and the ePrivacy Directive.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-white mb-3">2. What Are Cookies?</h3>
              <p className="mb-3">
                Cookies are small data files stored on your device when you visit a website. They enable core functionality, improve performance, remember preferences, and deliver personalized content or ads.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="text-white font-medium">First-party cookies</span>: set directly by SaveCash.</li>
                <li><span className="text-white font-medium">Third-party cookies</span>: set by external vendors (e.g., analytics, advertising, embedded media).</li>
              </ul>
              <p className="mt-3">Cookies can also be:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="text-white font-medium">Session cookies</span>: deleted once you close your browser.</li>
                <li><span className="text-white font-medium">Persistent cookies</span>: remain on your device for a specified duration or until manually deleted.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-white mb-3">3. Why We Use Cookies</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ensure technical functionality and security</li>
                <li>Remember login, settings, and preferences</li>
                <li>Analyze behavior to improve performance</li>
                <li>Measure marketing campaign effectiveness</li>
                <li>Personalize browsing experience</li>
                <li>Provide consent management through our platform</li>
              </ul>
              <p className="mt-3 text-gray-400">We do not use cookies to store sensitive personal data such as passwords or payment details.</p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-white mb-3">4. Types of Cookies We Use</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">a. Strictly Necessary Cookies</h4>
                  <p className="text-gray-400 mb-3">Essential for basic operations and cannot be disabled.</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Session authentication</li>
                    <li>Security validation</li>
                    <li>Consent logging</li>
                    <li>Server load balancing</li>
                  </ul>
                  <div className="overflow-x-auto mt-3">
                    <table className="w-full text-sm">
                      <thead className="text-gray-400">
                        <tr className="text-left">
                          <th className="pr-4 py-2">Cookie Name</th>
                          <th className="pr-4 py-2">Provider</th>
                          <th className="pr-4 py-2">Purpose</th>
                          <th className="py-2">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">__cf_bm</td>
                          <td className="pr-4 py-2">Cloudflare</td>
                          <td className="pr-4 py-2">Bot detection & service integrity</td>
                          <td className="py-2">30 minutes</td>
                        </tr>
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">session_id</td>
                          <td className="pr-4 py-2">SaveCash</td>
                          <td className="pr-4 py-2">Maintains login state</td>
                          <td className="py-2">Session</td>
                        </tr>
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">consent_id</td>
                          <td className="pr-4 py-2">Termly / SaveCash CMP</td>
                          <td className="pr-4 py-2">Records user cookie preferences</td>
                          <td className="py-2">12 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">b. Functional Cookies</h4>
                  <p className="text-gray-400 mb-3">Enhance experience by remembering preferences.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="text-gray-400">
                        <tr className="text-left">
                          <th className="pr-4 py-2">Cookie Name</th>
                          <th className="pr-4 py-2">Provider</th>
                          <th className="pr-4 py-2">Purpose</th>
                          <th className="py-2">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">user_lang</td>
                          <td className="pr-4 py-2">SaveCash</td>
                          <td className="pr-4 py-2">Saves preferred language</td>
                          <td className="py-2">6 months</td>
                        </tr>
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">theme_mode</td>
                          <td className="pr-4 py-2">SaveCash</td>
                          <td className="pr-4 py-2">Stores UI theme choice</td>
                          <td className="py-2">6 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">c. Analytics and Performance Cookies</h4>
                  <p className="text-gray-400 mb-3">Help us understand interactions and optimize experience.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="text-gray-400">
                        <tr className="text-left">
                          <th className="pr-4 py-2">Cookie Name</th>
                          <th className="pr-4 py-2">Provider</th>
                          <th className="pr-4 py-2">Purpose</th>
                          <th className="py-2">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">_ga</td>
                          <td className="pr-4 py-2">Google Analytics</td>
                          <td className="pr-4 py-2">Tracks user sessions & usage</td>
                          <td className="py-2">2 years</td>
                        </tr>
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">_gid</td>
                          <td className="pr-4 py-2">Google Analytics</td>
                          <td className="pr-4 py-2">Distinguishes users</td>
                          <td className="py-2">24 hours</td>
                        </tr>
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">ajs_anonymous_id</td>
                          <td className="pr-4 py-2">Segment</td>
                          <td className="pr-4 py-2">Anonymized usage analytics</td>
                          <td className="py-2">12 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">d. Advertising and Targeting Cookies</h4>
                  <p className="text-gray-400 mb-3">Used to deliver relevant ads and measure performance.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="text-gray-400">
                        <tr className="text-left">
                          <th className="pr-4 py-2">Cookie Name</th>
                          <th className="pr-4 py-2">Provider</th>
                          <th className="pr-4 py-2">Purpose</th>
                          <th className="py-2">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">_fbp</td>
                          <td className="pr-4 py-2">Meta (Facebook)</td>
                          <td className="pr-4 py-2">Measures advertising effectiveness</td>
                          <td className="py-2">90 days</td>
                        </tr>
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">_gcl_au</td>
                          <td className="pr-4 py-2">Google Ads</td>
                          <td className="pr-4 py-2">Stores campaign click data</td>
                          <td className="py-2">90 days</td>
                        </tr>
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">li_sugr</td>
                          <td className="pr-4 py-2">LinkedIn</td>
                          <td className="pr-4 py-2">Tracks engagement for ads</td>
                          <td className="py-2">90 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Opt out via your browser or the NAI opt-out tool.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">e. AI and Feature Optimization Cookies</h4>
                  <p className="text-gray-400 mb-3">Support our AI modules and recommendation systems.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="text-gray-400">
                        <tr className="text-left">
                          <th className="pr-4 py-2">Cookie Name</th>
                          <th className="pr-4 py-2">Provider</th>
                          <th className="pr-4 py-2">Purpose</th>
                          <th className="py-2">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">ai_user_token</td>
                          <td className="pr-4 py-2">SaveCash</td>
                          <td className="pr-4 py-2">Tracks AI personalization session</td>
                          <td className="py-2">30 days</td>
                        </tr>
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">recommend_cache</td>
                          <td className="pr-4 py-2">SaveCash</td>
                          <td className="pr-4 py-2">Stores behavior data for recommendations</td>
                          <td className="py-2">14 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-white mb-3">5. Third-Party Cookies and Vendors</h3>
              <p>Our primary vendors include Google (Analytics/Tag Manager), Stripe, Meta, Segment, Vercel, and Termly. Each vendor adheres to GDPR-compliant DPAs and provides opt-out mechanisms.</p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-white mb-3">6. Consent and Control</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify cookie settings anytime via our Cookie Preferences Center</li>
                <li>Withdraw consent without affecting prior processing</li>
                <li>Block cookies via browser settings (may affect functionality)</li>
              </ul>
              <div className="mt-3 text-sm text-gray-400 space-y-1">
                <div>Chrome → Settings → Privacy and Security → Cookies</div>
                <div>Safari → Preferences → Privacy</div>
                <div>Firefox → Options → Privacy & Security</div>
                <div>Edge → Settings → Site Permissions → Cookies</div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-white mb-3">7. Google Consent Mode (v2)</h3>
              <p>We integrate Consent Mode v2 to dynamically adjust Google tags based on user consent choices.</p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-white mb-3">8. Data Retention and Expiry</h3>
              <p>We retain cookie data only as long as necessary for the stated purposes. Expired cookies are automatically deleted or anonymized.</p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-white mb-3">9. International Transfers</h3>
              <p>Where data is processed outside your country, we use SCCs and other safeguards to protect your data.</p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-white mb-3">10. Updates</h3>
              <p>The latest version will always be available at https://savecashpro.vercel.app/cookie-policy. Significant updates will be notified via banner or email.</p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-white mb-3">11. Contact Us</h3>
              <p>Email: privacy.savecashpro@gmail.com</p>
              <p>Address: SaveCash Privacy Office, 600 California Street, 11th Floor, San Francisco, CA 94108, United States</p>
            </section>
          </div>
        </div>
      </div>

    </div>
  );
}