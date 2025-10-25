import React from "react";
import { motion } from "motion/react";
import { PageTemplate } from "../components/PageTemplate";
import { Accessibility, Eye, MousePointer, Volume2, Keyboard, Smartphone, Users, Heart } from "lucide-react";

export function Accessibility() {
  const accessibilityFeatures = [
    {
      icon: Eye,
      title: "Visual Accessibility",
      description: "Features to support users with visual impairments",
      features: [
        "High contrast mode and color schemes",
        "Screen reader compatibility",
        "Text size adjustment options",
        "Alternative text for all images",
        "Focus indicators and visual cues"
      ]
    },
    {
      icon: MousePointer,
      title: "Motor Accessibility",
      description: "Support for users with motor impairments",
      features: [
        "Keyboard navigation support",
        "Large click targets and touch areas",
        "Voice control integration",
        "Switch navigation support",
        "Customizable interaction timeouts"
      ]
    },
    {
      icon: Volume2,
      title: "Auditory Accessibility",
      description: "Features for users with hearing impairments",
      features: [
        "Visual alerts and notifications",
        "Closed captioning for videos",
        "Text alternatives for audio content",
        "Vibration alerts on mobile",
        "Visual status indicators"
      ]
    },
    {
      icon: Keyboard,
      title: "Cognitive Accessibility",
      description: "Support for users with cognitive differences",
      features: [
        "Clear and simple language",
        "Consistent navigation patterns",
        "Error prevention and recovery",
        "Progress indicators",
        "Customizable interface complexity"
      ]
    }
  ];

  const standards = [
    {
      name: "WCAG 2.1 AA",
      description: "Web Content Accessibility Guidelines Level AA compliance",
      status: "Compliant"
    },
    {
      name: "Section 508",
      description: "U.S. federal accessibility standards compliance",
      status: "Compliant"
    },
    {
      name: "ADA Compliance",
      description: "Americans with Disabilities Act compliance",
      status: "Compliant"
    },
    {
      name: "EN 301 549",
      description: "European accessibility standard compliance",
      status: "Compliant"
    }
  ];

  const assistiveTechnologies = [
    {
      name: "Screen Readers",
      description: "Compatible with NVDA, JAWS, VoiceOver, and TalkBack",
      icon: "🔊"
    },
    {
      name: "Voice Control",
      description: "Works with Dragon NaturallySpeaking and Voice Control",
      icon: "🎤"
    },
    {
      name: "Switch Navigation",
      description: "Supports single-switch and multi-switch navigation",
      icon: "🔄"
    },
    {
      name: "Magnification",
      description: "Compatible with screen magnification software",
      icon: "🔍"
    }
  ];

  return (
    <PageTemplate 
      title="Accessibility Statement" 
      subtitle="We're committed to making SaveCash accessible to everyone, regardless of ability."
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
              <Accessibility className="w-10 h-10 text-purple-400" />
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Accessibility Commitment</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              At SaveCash, we believe that financial success should be accessible to everyone. 
              We're committed to ensuring our platform is usable by people of all abilities, 
              following the highest standards of web accessibility.
            </p>
            <div className="mt-8 text-sm text-gray-500">
              Last updated: January 15, 2025
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Accessibility Features</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive support for users with diverse accessibility needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accessibilityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-8 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Compliance */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Standards Compliance</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We follow the highest international accessibility standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {standards.map((standard, index) => (
              <motion.div
                key={standard.name}
                className="p-6 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-2">{standard.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{standard.description}</p>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                  {standard.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assistive Technologies */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Assistive Technology Support</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Compatible with popular assistive technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assistiveTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="p-6 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
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
              <Heart className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">We Value Your Feedback</h3>
            <p className="text-gray-400 mb-6">
              If you encounter any accessibility barriers or have suggestions for improvement, 
              please let us know. We're committed to making SaveCash accessible to everyone.
            </p>
            <div className="space-y-2 text-gray-400">
              <p>Email: accessibility@savecash.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Mission St, San Francisco, CA 94105</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ongoing Commitment */}
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
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-4">Ongoing Accessibility Commitment</h3>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Accessibility is an ongoing process, not a one-time implementation. We continuously work to:
                  </p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span>Regular accessibility audits and testing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span>User feedback integration and improvement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span>Staff training on accessibility best practices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span>Staying current with evolving accessibility standards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTemplate>
  );
}
