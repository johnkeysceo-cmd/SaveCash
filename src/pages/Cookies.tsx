import React from "react";
import { motion } from "motion/react";
import { PageTemplate } from "../components/PageTemplate";
import { Cookie, Settings, Shield, Eye, Database, Lock } from "lucide-react";

export function Cookies() {
  const cookieTypes = [
    {
      icon: Settings,
      title: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly and cannot be disabled.",
      examples: [
        "Authentication and login status",
        "Security and fraud prevention",
        "Basic website functionality",
        "User preferences and settings"
      ],
      required: true
    },
    {
      icon: Database,
      title: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website.",
      examples: [
        "Page views and user behavior",
        "Performance metrics and errors",
        "Feature usage statistics",
        "A/B testing and optimization"
      ],
      required: false
    },
    {
      icon: Eye,
      title: "Marketing Cookies",
      description: "These cookies are used to deliver relevant advertisements and track campaign performance.",
      examples: [
        "Ad targeting and personalization",
        "Campaign performance tracking",
        "Social media integration",
        "Retargeting and remarketing"
      ],
      required: false
    },
    {
      icon: Shield,
      title: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization features.",
      examples: [
        "Language and region preferences",
        "Customized content delivery",
        "Third-party integrations",
        "Advanced user features"
      ],
      required: false
    }
  ];

  const cookieDetails = [
    {
      name: "_savecash_session",
      purpose: "Maintains your login session and security state",
      duration: "Session",
      type: "Essential"
    },
    {
      name: "_ga",
      purpose: "Google Analytics - tracks user behavior and website performance",
      duration: "2 years",
      type: "Analytics"
    },
    {
      name: "_gid",
      purpose: "Google Analytics - distinguishes unique users",
      duration: "24 hours",
      type: "Analytics"
    },
    {
      name: "cookie_consent",
      purpose: "Remembers your cookie preferences",
      duration: "1 year",
      type: "Essential"
    },
    {
      name: "user_preferences",
      purpose: "Stores your personalized settings and preferences",
      duration: "6 months",
      type: "Functional"
    }
  ];

  return (
    <PageTemplate 
      title="Cookie Policy" 
      subtitle="Learn about how we use cookies to improve your experience and protect your privacy."
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
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
              <Cookie className="w-10 h-10 text-purple-400" />
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Cookie Policy</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              This Cookie Policy explains how SaveCash uses cookies and similar technologies to enhance your experience, 
              analyze usage patterns, and provide personalized services while respecting your privacy.
            </p>
            <div className="mt-8 text-sm text-gray-500">
              Last updated: January 15, 2025
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="p-8 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                <Database className="w-8 h-8 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-4">What Are Cookies?</h3>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Cookies are small text files that are stored on your device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences and 
                    understanding how you use our services.
                  </p>
                  <p>
                    We use both session cookies (which expire when you close your browser) and persistent cookies 
                    (which remain on your device for a set period of time) to enhance your experience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Types of Cookies We Use</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We use different types of cookies for various purposes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={type.title}
                className="p-8 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <type.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-white">{type.title}</h3>
                      {type.required && (
                        <span className="px-2 py-1 text-xs bg-red-500/20 text-red-400 rounded-full">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{type.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {type.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-start gap-3 text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Details */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Specific Cookies We Use</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Detailed information about the cookies we set on your device
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-6 text-white font-semibold">Cookie Name</th>
                  <th className="text-left p-6 text-white font-semibold">Purpose</th>
                  <th className="text-left p-6 text-white font-semibold">Duration</th>
                  <th className="text-left p-6 text-white font-semibold">Type</th>
                </tr>
              </thead>
              <tbody>
                {cookieDetails.map((cookie, index) => (
                  <motion.tr
                    key={cookie.name}
                    className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <td className="p-6 text-purple-400 font-mono text-sm">{cookie.name}</td>
                    <td className="p-6 text-gray-400">{cookie.purpose}</td>
                    <td className="p-6 text-gray-400">{cookie.duration}</td>
                    <td className="p-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        cookie.type === 'Essential' 
                          ? 'bg-red-500/20 text-red-400' 
                          : cookie.type === 'Analytics'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-green-500/20 text-green-400'
                      }`}>
                        {cookie.type}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="p-8 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                <Settings className="w-8 h-8 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-4">Managing Your Cookie Preferences</h3>
                <div className="space-y-4 text-gray-400">
                  <p>
                    You have control over which cookies you accept. You can manage your preferences through:
                  </p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span>Our cookie consent banner when you first visit our site</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span>Your browser settings to block or delete cookies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span>Third-party opt-out tools for advertising cookies</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">
                    <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website and your user experience.
                  </p>
                </div>
              </div>
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
              <Lock className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Questions About Cookies?</h3>
            <p className="text-gray-400 mb-6">
              If you have any questions about our use of cookies or this Cookie Policy, 
              please don't hesitate to contact us.
            </p>
            <div className="space-y-2 text-gray-400">
              <p>Email: privacy@savecash.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Mission St, San Francisco, CA 94105</p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTemplate>
  );
}
