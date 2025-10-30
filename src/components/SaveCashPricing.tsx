"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter",
    icon: Sparkles,
    color: "from-green-500 to-emerald-500",
    price: "Free",
    period: "14-day trial",
    savings: "$500-$5,000",
    savingsLabel: "Average Monthly Savings",
    description: "Perfect for individuals starting their savings journey",
    features: [
      "1 Active FinBot",
      "Subscription Scanner",
      "Basic Bill Negotiation",
      "Fee Elimination",
      "Monthly Reports",
      "Email Support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    icon: Zap,
    color: "from-blue-500 to-purple-500",
    price: "$49",
    period: "/month",
    savings: "$5,000-$25,000",
    savingsLabel: "Average Monthly Savings",
    description: "For serious savers ready to maximize their financial potential",
    features: [
      "5 Active FinBots",
      "Advanced Subscription Management",
      "AI Bill Negotiation",
      "Tax Optimization",
      "Investment Fee Analysis",
      "Spending Pattern Detection",
      "Weekly Reports",
      "Priority Support",
    ],
    cta: "Upgrade to Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Crown,
    color: "from-purple-500 to-pink-500",
    price: "Custom",
    period: "contact sales",
    savings: "$25,000-$50,000+",
    savingsLabel: "Average Monthly Savings",
    description: "Maximum savings for businesses and high-net-worth individuals",
    features: [
      "Unlimited FinBots",
      "White-Glove Service",
      "Dedicated Account Manager",
      "Advanced Tax Strategies",
      "Corporate Expense Optimization",
      "Multi-Account Management",
      "Real-Time Monitoring",
      "24/7 Concierge Support",
      "Custom Integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function SaveCashPricing() {
  return (
    <section className="py-24 px-6 bg-gray-900/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,200,120,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(180,140,230,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Choose Your <span className="savecash-text-gradient">Savings Plan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every plan pays for itself within the first week. Start saving today.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 border-2 transition-all hover:scale-105 ${
                tier.popular
                  ? "bg-gray-800 border-purple-500 shadow-2xl shadow-purple-500/20"
                  : "bg-gray-800/50 border-gray-700 hover:border-purple-500/50"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.color} p-4 mb-6`}>
                <tier.icon className="w-full h-full text-white" />
              </div>

              {/* Plan Name */}
              <h3 className="text-3xl font-bold mb-2 text-white">{tier.name}</h3>
              <p className="text-gray-300 mb-6 min-h-[3rem]">{tier.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">{tier.price}</span>
                  {tier.period && <span className="text-gray-400">{tier.period}</span>}
                </div>
              </div>

              {/* Savings Badge */}
              <div className="mb-8 p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <div className="text-sm text-gray-400 mb-1">{tier.savingsLabel}</div>
                <div className="text-2xl font-bold savecash-text-gradient">{tier.savings}</div>
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full mb-8 py-6 text-lg rounded-xl ${
                  tier.popular
                    ? "savecash-gradient text-white hover:opacity-90"
                    : "bg-gray-700 hover:bg-gray-600 text-white"
                }`}
              >
                {tier.cta}
              </Button>

              {/* Features */}
              <div className="space-y-3">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center p-6 rounded-2xl bg-purple-500/5 border border-purple-500/20 max-w-2xl mx-auto"
        >
          <div className="text-lg font-semibold mb-2 text-white">100% Money-Back Guarantee</div>
          <p className="text-gray-300">
            If our FinBots don't save you more than your subscription cost in the first 30 days,
            we'll refund you completely—no questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
