import React from "react";
import { motion } from "motion/react";
import { PageTemplate } from "../components/PageTemplate";
import { Shield, Lock, Eye, Database, UserCheck, Mail } from "lucide-react";

export function Privacy() {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Personal Information: Name, email address, phone number, and date of birth",
        "Financial Information: Bank account details, transaction history, and financial goals",
        "Usage Data: How you interact with our platform, features used, and time spent",
        "Device Information: IP address, browser type, operating system, and device identifiers",
        "Location Data: General geographic location for security and compliance purposes"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "Provide and improve our financial advisory services",
        "Process transactions and manage your account",
        "Detect and prevent fraud and security threats",
        "Comply with legal and regulatory requirements",
        "Send you important updates about your account and our services",
        "Personalize your experience and provide relevant recommendations"
      ]
    },
    {
      icon: Shield,
      title: "Data Security",
      content: [
        "256-bit SSL encryption for all data transmission",
        "Bank-level security infrastructure and monitoring",
        "Regular security audits and penetration testing",
        "Limited access to personal data on a need-to-know basis",
        "Secure data centers with 24/7 monitoring",
        "Regular staff training on data protection best practices"
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: [
        "Access: Request a copy of your personal data",
        "Correction: Update or correct inaccurate information",
        "Deletion: Request deletion of your personal data",
        "Portability: Export your data in a machine-readable format",
        "Restriction: Limit how we process your data",
        "Objection: Opt out of certain data processing activities"
      ]
    }
  ];

  return (
    <PageTemplate 
      title="Privacy Policy" 
      subtitle="Your privacy is our priority. Learn how we protect and use your information."
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
              <Lock className="w-10 h-10 text-purple-400" />
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Your Privacy Matters</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              At SaveCash, we're committed to protecting your privacy and ensuring the security of your personal and financial information. 
              This policy explains how we collect, use, and safeguard your data.
            </p>
            <div className="mt-8 text-sm text-gray-500">
              Last updated: January 15, 2025
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className="p-8 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-8 h-8 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Data Sharing */}
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
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-4">Data Sharing</h3>
                <div className="space-y-4 text-gray-400">
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:
                  </p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span>With your explicit consent</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span>To comply with legal obligations or court orders</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span>With trusted service providers who assist in our operations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span>To protect our rights, property, or safety, or that of our users</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center p-8 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
              <Mail className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Questions About Your Privacy?</h3>
            <p className="text-gray-400 mb-6">
              If you have any questions about this Privacy Policy or how we handle your data, 
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
