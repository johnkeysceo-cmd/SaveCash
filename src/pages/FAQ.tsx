import React from "react";
import { motion } from "motion/react";
import { HelpCircle, ArrowLeft, ExternalLink, CheckCircle, Clock, Star, Shield, Zap } from "lucide-react";
import { FloatingBlobs } from "../components/FloatingBlobs";

export default function FAQ() {
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
              <div className="relative">
                <HelpCircle className="w-12 h-12 text-purple-400" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-purple-400/20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white">FAQs</h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-6"
            >
              Quick, direct, and practical.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              The SaveCash FAQ addresses the most common questions about our technology, data, and platform behavior — 
              explained in language anyone can understand.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-purple-400 font-semibold"
            >
              Complex technology, human explanations.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        
        {/* FAQ Categories */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Answers to the most frequent SaveCash questions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our most common questions organized by category.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "General", count: 8, color: "from-blue-500 to-cyan-500" },
              { title: "Security", count: 6, color: "from-green-500 to-emerald-500" },
              { title: "AI Features", count: 7, color: "from-purple-500 to-pink-500" },
              { title: "Billing", count: 5, color: "from-yellow-500 to-orange-500" }
            ].map((category, index) => (
              <motion.button
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-left"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-3`}>
                  <HelpCircle className="w-4 h-4 text-white" />
                </div>
                <div className="text-white font-semibold">{category.title}</div>
                <div className="text-gray-400 text-sm">{category.count} questions</div>
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* FAQ Items */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {[
            {
              question: "What is SaveCash and how does it work?",
              answer: "SaveCash is an AI-powered financial automation platform that analyzes your spending patterns, identifies savings opportunities, and helps you optimize your finances. Our AI continuously monitors your transactions, learns your habits, and provides personalized recommendations to help you save more money without changing your lifestyle.",
              category: "General",
              helpful: "94%"
            },
            {
              question: "Is my financial data safe with SaveCash?",
              answer: "Absolutely. We use bank-grade AES-256 encryption to protect all your data. We're SOC 2 compliant, never sell your personal information, and follow strict privacy protocols. Your data is encrypted both in transit and at rest, and we use zero-knowledge architecture to ensure even our team can't access your sensitive financial information.",
              category: "Security",
              helpful: "97%"
            },
            {
              question: "How does the AI find savings opportunities?",
              answer: "Our AI analyzes your transaction history, spending patterns, and financial behavior to identify areas where you can save money. It looks for things like unused subscriptions, better rates on services you use, spending anomalies, and optimization opportunities. The AI gets smarter over time as it learns more about your financial habits.",
              category: "AI Features",
              helpful: "91%"
            },
            {
              question: "What banks and financial institutions do you support?",
              answer: "We support over 10,000 banks and credit unions in the US, including all major institutions like Chase, Bank of America, Wells Fargo, Capital One, and American Express. We use secure, read-only connections through Plaid and other trusted financial data providers to ensure your accounts are safely connected.",
              category: "General",
              helpful: "89%"
            },
            {
              question: "How much does SaveCash cost?",
              answer: "SaveCash offers a free tier with basic features, and our Pro plan is $9.99/month with advanced AI features and automation. Most users save more than their subscription cost within the first month. We also offer enterprise plans for businesses. All plans include our money-back guarantee if you're not satisfied.",
              category: "Billing",
              helpful: "93%"
            },
            {
              question: "Can I cancel my subscription anytime?",
              answer: "Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees or long-term contracts. If you cancel, you'll continue to have access to your account until the end of your current billing period. You can also pause your subscription if you need a temporary break.",
              category: "Billing",
              helpful: "96%"
            },
            {
              question: "How accurate are the AI recommendations?",
              answer: "Our AI recommendations have a 99.7% accuracy rate. The AI is trained on millions of financial transactions and continuously learns from user feedback. It provides conservative, well-researched recommendations and always explains the reasoning behind each suggestion. You're always in control and can accept or decline any recommendation.",
              category: "AI Features",
              helpful: "88%"
            },
            {
              question: "Do you sell my personal information?",
              answer: "Never. We have a strict no-data-selling policy. Your personal and financial information is never sold, shared, or rented to third parties. We only use your data to provide our services and improve our AI. This is a core principle of our business and will never change.",
              category: "Security",
              helpful: "95%"
            },
            {
              question: "How quickly can I start seeing savings?",
              answer: "Most users see their first savings within 24-48 hours of connecting their accounts. The AI immediately starts analyzing your transactions and can identify quick wins like unused subscriptions or better rates. For more complex optimizations, it may take a few weeks to build a complete picture of your financial patterns.",
              category: "General",
              helpful: "87%"
            },
            {
              question: "What if I disagree with an AI recommendation?",
              answer: "You're always in control. You can decline any recommendation, and the AI will learn from your preferences. You can also provide feedback on recommendations to help the AI better understand your financial goals and preferences. The AI is designed to be helpful, not pushy.",
              category: "AI Features",
              helpful: "92%"
            },
            {
              question: "Is SaveCash available outside the US?",
              answer: "Currently, SaveCash is only available in the United States. We're working on expanding to other countries, starting with Canada and the UK. If you're interested in SaveCash for your country, you can join our waitlist and we'll notify you when we launch in your region.",
              category: "General",
              helpful: "85%"
            },
            {
              question: "How do you ensure data privacy and security?",
              answer: "We use multiple layers of security including AES-256 encryption, multi-factor authentication, regular security audits, and compliance with SOC 2 and GDPR standards. Our infrastructure is hosted on secure cloud platforms with enterprise-grade security. We also have a dedicated security team that monitors for threats 24/7.",
              category: "Security",
              helpful: "94%"
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <HelpCircle className="w-4 h-4 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">{faq.question}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded">{faq.category}</span>
                      <div className="flex items-center gap-1 text-sm text-gray-400">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span>{faq.helpful}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Still Have Questions */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-12 border border-gray-700">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Can't find the answer you're looking for? Our support team is here to help with personalized assistance.
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
                  Contact Support
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              <motion.button
                className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View FAQs
              </motion.button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Average response time: 2 hours • Available 24/7
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
