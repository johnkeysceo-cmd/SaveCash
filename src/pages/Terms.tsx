import React from "react";
import { motion } from "motion/react";
import { PageTemplate } from "../components/PageTemplate";
import { FileText, Scale, AlertTriangle, Shield, Users, Gavel } from "lucide-react";

export function Terms() {
  const sections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: [
        "By accessing or using SaveCash, you agree to be bound by these Terms of Service",
        "If you do not agree to these terms, please do not use our service",
        "We may update these terms from time to time, and continued use constitutes acceptance",
        "You must be at least 18 years old to use our service",
        "You must provide accurate and complete information when creating your account"
      ]
    },
    {
      icon: Shield,
      title: "Use of Service",
      content: [
        "SaveCash provides financial information and tools for educational purposes only",
        "Our AI advisor is not a substitute for professional financial advice",
        "You are responsible for your own financial decisions and their consequences",
        "You may not use our service for any illegal or unauthorized purpose",
        "You must not attempt to gain unauthorized access to our systems"
      ]
    },
    {
      icon: Scale,
      title: "User Responsibilities",
      content: [
        "Maintain the security of your account credentials",
        "Provide accurate and up-to-date information",
        "Comply with all applicable laws and regulations",
        "Respect the rights of other users and our staff",
        "Report any security vulnerabilities or suspicious activity"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitations and Disclaimers",
      content: [
        "SaveCash is not a licensed financial advisor or investment advisor",
        "Past performance does not guarantee future results",
        "Financial markets are subject to risk and volatility",
        "We do not guarantee the accuracy of our AI recommendations",
        "You should consult with qualified professionals before making financial decisions"
      ]
    }
  ];

  return (
    <PageTemplate 
      title="Terms of Service" 
      subtitle="Please read these terms carefully before using SaveCash."
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
              <Gavel className="w-10 h-10 text-purple-400" />
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Terms of Service</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              These Terms of Service govern your use of SaveCash and our AI-powered financial advisory platform. 
              By using our service, you agree to these terms.
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

      {/* Financial Disclaimer */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="p-8 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl border border-red-500/20 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-4">Important Financial Disclaimer</h3>
                <div className="space-y-4 text-gray-400">
                  <p>
                    <strong className="text-red-400">SaveCash is not a licensed financial advisor, investment advisor, or broker-dealer.</strong> 
                    Our AI provides educational information and general guidance only.
                  </p>
                  <p>
                    <strong>Not Financial Advice:</strong> The information provided by our AI is for educational purposes only and should not be considered as personalized financial advice.
                  </p>
                  <p>
                    <strong>Investment Risks:</strong> All investments carry risk, including the potential loss of principal. Past performance does not guarantee future results.
                  </p>
                  <p>
                    <strong>Professional Consultation:</strong> We strongly recommend consulting with qualified financial professionals before making any financial decisions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Account Termination */}
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
                <FileText className="w-8 h-8 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-4">Account Termination</h3>
                <div className="space-y-4 text-gray-400">
                  <p>
                    You may terminate your account at any time by contacting our support team or using the account deletion feature in your settings.
                  </p>
                  <p>
                    We may suspend or terminate your account if you violate these terms or engage in fraudulent activity.
                  </p>
                  <p>
                    Upon termination, your access to the service will cease, but certain provisions of these terms will survive termination.
                  </p>
                  <p>
                    We will retain your data according to our Privacy Policy and applicable legal requirements.
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
              <Scale className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Questions About These Terms?</h3>
            <p className="text-gray-400 mb-6">
              If you have any questions about these Terms of Service, please contact our legal team.
            </p>
            <div className="space-y-2 text-gray-400">
              <p>Email: legal@savecash.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Mission St, San Francisco, CA 94105</p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTemplate>
  );
}
