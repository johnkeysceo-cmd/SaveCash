import React from "react";
import { motion } from "motion/react";
import { PageTemplate } from "../components/PageTemplate";
import { Brain, Shield, TrendingUp, Zap, BarChart3, CreditCard, PiggyBank, Target, Users, Clock, Smartphone, Lock } from "lucide-react";

export function Features() {
  const mainFeatures = [
    {
      icon: Brain,
      title: "AI Financial Advisor",
      description: "Get personalized financial advice powered by advanced AI that learns from your spending patterns and financial goals.",
      benefits: [
        "24/7 personalized financial guidance",
        "Smart budget recommendations",
        "Investment strategy optimization",
        "Debt payoff planning"
      ]
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your financial data is protected with enterprise-grade security, encryption, and fraud detection.",
      benefits: [
        "256-bit SSL encryption",
        "SOC 2 Type II compliance",
        "Real-time fraud monitoring",
        "Secure data storage"
      ]
    },
    {
      icon: TrendingUp,
      title: "Smart Savings",
      description: "Automatically find hidden savings opportunities and optimize your spending without changing your lifestyle.",
      benefits: [
        "Hidden fee detection",
        "Subscription optimization",
        "Bill negotiation service",
        "Cashback maximization"
      ]
    },
    {
      icon: BarChart3,
      title: "Investment Intelligence",
      description: "AI-powered investment recommendations and portfolio optimization based on your risk tolerance and goals.",
      benefits: [
        "Portfolio analysis and rebalancing",
        "Tax-loss harvesting",
        "Retirement planning",
        "Risk assessment"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: CreditCard,
      title: "Credit Optimization",
      description: "Improve your credit score with personalized strategies and monitoring."
    },
    {
      icon: PiggyBank,
      title: "Emergency Fund Builder",
      description: "Automated savings plans to build your emergency fund faster."
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set and track financial goals with AI-powered milestone planning."
    },
    {
      icon: Users,
      title: "Family Planning",
      description: "Comprehensive financial planning for families and couples."
    },
    {
      icon: Clock,
      title: "Real-Time Monitoring",
      description: "Instant alerts and notifications for important financial events."
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Full-featured mobile app for managing your finances on the go."
    }
  ];

  const integrations = [
    {
      name: "Banking",
      description: "Connect all your bank accounts securely",
      icon: "🏦"
    },
    {
      name: "Credit Cards",
      description: "Track and optimize credit card usage",
      icon: "💳"
    },
    {
      name: "Investment Accounts",
      description: "Monitor 401k, IRA, and brokerage accounts",
      icon: "📈"
    },
    {
      name: "Bill Pay",
      description: "Automated bill payment and tracking",
      icon: "📋"
    },
    {
      name: "Tax Software",
      description: "Integration with popular tax preparation tools",
      icon: "📊"
    },
    {
      name: "Real Estate",
      description: "Track mortgage and property investments",
      icon: "🏠"
    }
  ];

  return (
    <PageTemplate 
      title="Features" 
      subtitle="Discover the powerful tools and AI-driven insights that help you build wealth and achieve financial success."
    >
      {/* Main Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Core Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Our AI-powered platform combines cutting-edge technology with proven financial strategies 
              to help you save more, invest smarter, and build lasting wealth.
            </p>
          </motion.div>

          <div className="space-y-16">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <feature.icon className="w-10 h-10 text-purple-400" />
                  </div>
                  <h3 className="text-3xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-xl text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3 text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 flex items-center justify-center">
                    <feature.icon className="w-32 h-32 text-purple-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Additional Features</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive tools to manage every aspect of your financial life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-8 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Seamless Integrations</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Connect all your financial accounts for a complete picture of your financial health
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                className="p-8 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{integration.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{integration.name}</h3>
                <p className="text-gray-400">{integration.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Privacy */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 text-white">Security & Privacy</h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Your financial data is our top priority. We use bank-level security to protect your information 
                  and ensure your privacy is always respected.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Lock className="w-6 h-6 text-purple-400 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">256-bit SSL Encryption</h3>
                      <p>All data is encrypted in transit and at rest</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-purple-400 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">SOC 2 Type II Compliance</h3>
                      <p>Audited security controls and procedures</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-purple-400 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Real-time Fraud Detection</h3>
                      <p>Advanced AI monitors for suspicious activity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 flex items-center justify-center">
                <Shield className="w-32 h-32 text-purple-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Animated Blob Background */}
      <AnimatedBlob />
    </PageTemplate>
  );
}
