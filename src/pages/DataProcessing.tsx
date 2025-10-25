import React from "react";
import { motion } from "motion/react";
import { PageTemplate } from "../components/PageTemplate";
import { AnimatedBlob } from "../components/AnimatedBlob";
import { Shield, Lock, Database, Eye, CheckCircle, AlertTriangle, FileText, Users, Globe, Clock } from "lucide-react";

export function DataProcessing() {
  const dataTypes = [
    {
      icon: Users,
      title: "Personal Information",
      description: "Name, email, phone number, and contact details",
      examples: ["Full name", "Email address", "Phone number", "Mailing address"],
      purpose: "Account creation, communication, and service delivery"
    },
    {
      icon: Database,
      title: "Financial Data",
      description: "Bank account information, transaction history, and financial metrics",
      examples: ["Account balances", "Transaction history", "Investment data", "Credit scores"],
      purpose: "Financial analysis, budgeting, and personalized recommendations"
    },
    {
      icon: Globe,
      title: "Usage Analytics",
      description: "How you interact with our platform and services",
      examples: ["Page views", "Feature usage", "Session duration", "Device information"],
      purpose: "Service improvement, feature optimization, and user experience enhancement"
    },
    {
      icon: FileText,
      title: "Communication Records",
      description: "Support tickets, feedback, and correspondence",
      examples: ["Support messages", "Feedback forms", "Survey responses", "Email communications"],
      purpose: "Customer service, product improvement, and relationship management"
    }
  ];

  const legalBasis = [
    {
      title: "Contract Performance",
      description: "Processing necessary to provide our financial services as agreed in our terms of service.",
      icon: CheckCircle,
      color: "text-green-400"
    },
    {
      title: "Legitimate Interest",
      description: "Processing for our legitimate business interests, such as improving our services and preventing fraud.",
      icon: Eye,
      color: "text-blue-400"
    },
    {
      title: "Legal Obligation",
      description: "Processing required by law, such as anti-money laundering and tax reporting requirements.",
      icon: Shield,
      color: "text-purple-400"
    },
    {
      title: "Consent",
      description: "Processing based on your explicit consent for marketing communications and optional features.",
      icon: Users,
      color: "text-pink-400"
    }
  ];

  const dataRights = [
    {
      title: "Right to Access",
      description: "You can request a copy of all personal data we hold about you.",
      icon: Eye,
      action: "Request Data Export"
    },
    {
      title: "Right to Rectification",
      description: "You can ask us to correct any inaccurate or incomplete personal data.",
      icon: CheckCircle,
      action: "Update Information"
    },
    {
      title: "Right to Erasure",
      description: "You can request deletion of your personal data in certain circumstances.",
      icon: AlertTriangle,
      action: "Request Deletion"
    },
    {
      title: "Right to Portability",
      description: "You can request your data in a structured, machine-readable format.",
      icon: Database,
      action: "Download Data"
    },
    {
      title: "Right to Restrict Processing",
      description: "You can limit how we process your personal data in certain situations.",
      icon: Lock,
      action: "Restrict Processing"
    },
    {
      title: "Right to Object",
      description: "You can object to processing based on legitimate interests or for marketing.",
      icon: Shield,
      action: "Object to Processing"
    }
  ];

  const securityMeasures = [
    {
      title: "Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption.",
      icon: Lock
    },
    {
      title: "Access Controls",
      description: "Strict role-based access controls ensure only authorized personnel can access your data.",
      icon: Shield
    },
    {
      title: "Regular Audits",
      description: "We conduct regular security audits and penetration testing to identify and address vulnerabilities.",
      icon: CheckCircle
    },
    {
      title: "Data Minimization",
      description: "We only collect and process the minimum amount of data necessary for our services.",
      icon: Database
    },
    {
      title: "Retention Policies",
      description: "We have strict data retention policies and automatically delete data when no longer needed.",
      icon: Clock
    },
    {
      title: "Incident Response",
      description: "We have comprehensive incident response procedures in case of any data security breach.",
      icon: AlertTriangle
    }
  ];

  return (
    <PageTemplate 
      title="Data Processing Agreement" 
      subtitle="Comprehensive information about how we collect, process, and protect your personal data in compliance with GDPR, CCPA, and other privacy regulations."
    >

        {/* Data Types We Collect */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-12 text-center text-white">Data Types We Collect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataTypes.map((type, index) => (
              <motion.div
                key={type.title}
                className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-3xl border border-white/10 p-8 shadow-2xl backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mr-4">
                    <type.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{type.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{type.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Examples:</h4>
                  <ul className="space-y-2">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-gray-400 flex items-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 bg-purple-500/10 rounded-2xl border border-purple-400/20">
                  <h4 className="text-purple-300 font-semibold mb-2">Purpose:</h4>
                  <p className="text-gray-300 text-sm">{type.purpose}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Legal Basis for Processing */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-12 text-center text-white">Legal Basis for Processing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {legalBasis.map((basis, index) => (
              <motion.div
                key={basis.title}
                className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-3xl border border-white/10 p-8 shadow-2xl backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mr-4">
                    <basis.icon className={`w-6 h-6 ${basis.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{basis.title}</h3>
                </div>
                <p className="text-gray-400">{basis.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Your Data Rights */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-12 text-center text-white">Your Data Rights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataRights.map((right, index) => (
              <motion.div
                key={right.title}
                className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-3xl border border-white/10 p-6 shadow-2xl backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4">
                  <right.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{right.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{right.description}</p>
                <button className="w-full py-2 px-4 bg-purple-500/20 text-purple-300 rounded-lg border border-purple-400/30 hover:bg-purple-500/30 transition-colors">
                  {right.action}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Measures */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-12 text-center text-white">Security Measures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityMeasures.map((measure, index) => (
              <motion.div
                key={measure.title}
                className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-3xl border border-white/10 p-6 shadow-2xl backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                  <measure.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{measure.title}</h3>
                <p className="text-gray-400 text-sm">{measure.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="text-center bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-3xl border border-white/10 p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-white">Questions About Your Data?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Our Data Protection Officer is available to answer any questions about how we process your personal data.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all">
              Contact DPO
            </button>
            <button className="px-8 py-4 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/10 transition-all">
              Download Full Agreement
            </button>
          </div>
        </motion.div>
        
        {/* Animated Blob Background */}
        <AnimatedBlob />
    </PageTemplate>
  );
}
