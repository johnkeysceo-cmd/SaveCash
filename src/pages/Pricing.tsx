import React from "react";
import { motion } from "motion/react";
import { DollarSign, CheckCircle, ArrowLeft, ExternalLink, Star, Shield, Zap } from "lucide-react";
import { FloatingBlobs } from "../components/FloatingBlobs";
import SaveCashPricing from "../components/SaveCashPricing";
import GlassPlanSelector from "../components/GlassPlanSelector";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Floating Blobs Background */}
      <FloatingBlobs />
      
      {/* Header */}
      <div className="relative z-10 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
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
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <DollarSign className="w-12 h-12 text-purple-400" />
              <h1 className="text-5xl md:text-7xl font-bold text-white">Pricing</h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-6"
            >
              Our pricing is built on one principle: <span className="text-purple-400 font-semibold">fairness through transparency.</span>
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              Every plan is structured to ensure that users <em>earn more value than they spend.</em>
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-purple-400 font-semibold"
            >
              Built to grow with you, not against you.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        
        {/* Plan Selector (Glass Radio Group) */}
        <div className="flex justify-center mb-12">
          <GlassPlanSelector />
        </div>

        {/* New Pricing Component */}
        <SaveCashPricing />

        {/* Value Proposition */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Our Pricing Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've designed our pricing to ensure you always get more value than you pay.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "No Hidden Fees",
                description: "What you see is what you pay. No surprise charges or hidden costs.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Zap,
                title: "Instant ROI",
                description: "Most users save more than their subscription cost within the first month.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Star,
                title: "Cancel Anytime",
                description: "No long-term contracts. Cancel whenever you want, no questions asked.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: CheckCircle,
                title: "Money-Back Guarantee",
                description: "Not satisfied? Get a full refund within 30 days, no questions asked.",
                color: "from-yellow-500 to-orange-500"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ROI Calculator */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Calculate Your Savings</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how much SaveCash could save you based on your current spending patterns.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Average User Savings</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Monthly subscription cost</span>
                    <span className="text-red-400 font-semibold">-$9.99</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Average monthly savings</span>
                    <span className="text-green-400 font-semibold">+$127</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Hidden fee detection</span>
                    <span className="text-green-400 font-semibold">+$43</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Optimization opportunities</span>
                    <span className="text-green-400 font-semibold">+$89</span>
                  </div>
                  <div className="flex justify-between items-center py-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg px-4">
                    <span className="text-white font-bold text-lg">Net monthly benefit</span>
                    <span className="text-green-400 font-bold text-xl">+$249.01</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">ROI Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div>
                      <span className="text-white font-medium">Month 1:</span>
                      <span className="text-gray-400 ml-2">Break even + $117 savings</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div>
                      <span className="text-white font-medium">Month 3:</span>
                      <span className="text-gray-400 ml-2">$747 total savings</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">6</div>
                    <div>
                      <span className="text-white font-medium">Month 6:</span>
                      <span className="text-gray-400 ml-2">$1,494 total savings</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">12</div>
                    <div>
                      <span className="text-white font-medium">Year 1:</span>
                      <span className="text-gray-400 ml-2">$2,988 total savings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pricing FAQ</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common questions about our transparent pricing model.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Is there really a free plan?",
                answer: "Yes! Our Starter plan is completely free forever. You get basic expense tracking, AI insights, and monthly reports at no cost."
              },
              {
                question: "What's included in the Pro plan?",
                answer: "Pro includes everything in Starter plus advanced AI recommendations, real-time optimization, priority support, custom savings goals, and API access."
              },
              {
                question: "Can I cancel anytime?",
                answer: "Absolutely. There are no long-term contracts or cancellation fees. You can cancel your subscription at any time from your account settings."
              },
              {
                question: "Do you offer refunds?",
                answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with SaveCash, we'll refund your payment in full."
              },
              {
                question: "How do you calculate ROI?",
                answer: "We track your actual savings from fee detection, optimization opportunities, and smart recommendations. Most users see positive ROI within the first month."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also pay via invoice."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-12 border border-gray-700">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Saving?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Join thousands of users who are already saving more with SaveCash. Start your free trial today and see the difference AI can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-6 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 80px -15px rgba(168,85,247,0.8)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Free Trial
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              <motion.button
                className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Pricing Model
              </motion.button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Questions about pricing? Contact us at pricing@savecash.com
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
