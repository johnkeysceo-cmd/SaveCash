import React from "react";
import { motion, Variants } from "motion/react";
import { Shield, Lock, Eye, CheckCircle2, FileCheck, Server, Key, Zap, AlertCircle, BadgeCheck } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: [0.25, 0.1, 0.25, 1],
      type: "tween",
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      type: "tween",
    },
  },
};

const securityFeatures = [
  {
    icon: Shield,
    title: "256-Bit SSL Encryption",
    description: "Your data is encrypted in transit and at rest using industry-standard AES-256 and TLS 1.2+ — the same level banks rely on to protect financial information.",
    color: "from-blue-400 to-cyan-500",
    bgColor: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Lock,
    title: "Zero-Knowledge Architecture",
    description: "We never store your banking credentials. All financial connections use secure, read-only OAuth tokens that you can revoke at any time.",
    color: "from-purple-400 to-violet-500",
    bgColor: "from-purple-500/10 to-violet-500/10",
  },
  {
    icon: Eye,
    title: "Privacy by Design",
    description: "Minimal data collection. End-to-end encryption. Automatic deletion of non-essential data. Your financial information stays under your control at every step.",
    color: "from-pink-400 to-rose-500",
    bgColor: "from-pink-500/10 to-rose-500/10",
  },
  {
    icon: Server,
    title: "SOC 2 Type II (In Progress)",
    description: "SaveCash is architected to meet SOC 2 Type II standards. We follow strict controls for data security, system availability, and confidentiality as we move toward full certification.",
    color: "from-green-400 to-emerald-500",
    bgColor: "from-green-500/10 to-emerald-500/10",
  },
];

const complianceBadges = [
  { name: "SOC 2 Type II", description: "Enterprise security controls", note: "(in progress)" },
  { name: "GDPR", description: "EU-level data protection" },
  { name: "PCI DSS", description: "Secure financial data handling" },
  { name: "ISO 27001", description: "Information security management" },
  { name: "CCPA", description: "California consumer privacy rights" },
  { name: "AES-256", description: "Military-grade encryption standard" },
];

export function SecuritySection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 mb-4 sm:mb-6"
          >
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-purple-400" />
          </motion.div>
          
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 sm:mb-6 text-white tracking-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Security is always
          </motion.h2>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-6 sm:mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            our priority.
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Bank-grade encryption, zero-knowledge architecture principles, and privacy-first engineering. 
            SaveCash is being built with the same security standards trusted by major financial institutions.
          </motion.p>
        </motion.div>

        {/* Security Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20"
        >
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300"
            >
              {/* Gradient glow on hover */}
              <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10`} />
              
              <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.bgColor} flex items-center justify-center mb-4 sm:mb-6 border border-white/10 group-hover:border-purple-400/30 transition-all duration-300 relative`}>
                <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-400`} />
              </div>
              
              <h3 className="text-lg sm:text-xl md:text-2xl text-white mb-3 sm:mb-4 font-semibold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Compliance Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl text-white text-center mb-3 sm:mb-4 font-semibold px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Trusted Security Standards
          </motion.h3>
          <motion.p
            className="text-center text-gray-400 mb-6 sm:mb-8 text-xs sm:text-sm px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Built to meet or exceed
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
            {complianceBadges.map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 text-center"
              >
                <BadgeCheck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-white font-semibold mb-1 text-xs sm:text-sm">
                  {badge.name}
                  {badge.note && <span className="text-gray-500 font-normal ml-1 text-xs">{badge.note}</span>}
                </div>
                <div className="text-gray-500 text-[10px] sm:text-xs">{badge.description}</div>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            className="text-center text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto font-medium px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-500">Pre-launch note:</span> SaveCash is designed to achieve these standards upon full release.
          </motion.p>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-purple-500/10 border border-purple-400/20 backdrop-blur-xl"
        >
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 flex items-center justify-center mx-auto sm:mx-0">
              <Lock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl sm:text-2xl text-white mb-3 sm:mb-4 font-semibold">
                Your data never touches our servers
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg mb-4">
                All financial connections use secure, read-only access through trusted partners such as Plaid and Yodlee — 
                the same infrastructure used by thousands of banks and fintech apps.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                  <span className="font-medium">Read-only access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                  <span className="font-medium">No ability to move or change funds</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                  <span className="font-medium">Tokens can be revoked instantly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                  <span className="font-medium">No sensitive data stored on SaveCash servers</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

