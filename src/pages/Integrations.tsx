import React from "react";
import { motion } from "motion/react";
import { Link, ArrowLeft, ExternalLink, CheckCircle, Zap, Shield, Database } from "lucide-react";
import { FloatingBlobs } from "../components/FloatingBlobs";

export default function Integrations() {
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
                <Link className="w-12 h-12 text-purple-400" />
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
              <h1 className="text-5xl md:text-7xl font-bold text-white">Integrations</h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-6"
            >
              SaveCash seamlessly integrates with platforms users already trust.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              From banks and wallets to CRMs and accounting systems — with secure, one-click connections and real-time syncing, 
              you can bring financial automation into your existing workflow effortlessly.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-purple-400 font-semibold"
            >
              Frictionless connectivity for the modern financial stack.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        
        {/* Integration Categories */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Integration Categories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              View which platforms SaveCash integrates with instantly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Database,
                title: "Banking & Finance",
                description: "Connect with major banks and financial institutions",
                integrations: ["Chase", "Bank of America", "Wells Fargo", "Capital One", "American Express"],
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Zap,
                title: "Payment Processors",
                description: "Integrate with popular payment platforms",
                integrations: ["Stripe", "PayPal", "Square", "Venmo", "Apple Pay"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Shield,
                title: "Accounting Software",
                description: "Sync with accounting and bookkeeping tools",
                integrations: ["QuickBooks", "Xero", "FreshBooks", "Wave", "Sage"],
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Link,
                title: "Business Tools",
                description: "Connect with CRM and productivity platforms",
                integrations: ["Salesforce", "HubSpot", "Slack", "Microsoft 365", "Google Workspace"],
                color: "from-red-500 to-orange-500"
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{category.description}</p>
                  
                  <div className="space-y-2">
                    {category.integrations.map((integration, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{integration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Popular Integrations */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Popular Integrations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most requested integrations with detailed setup guides.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Chase Bank",
                category: "Banking",
                description: "Connect your Chase accounts for automatic transaction tracking and AI insights",
                features: ["Real-time sync", "Transaction categorization", "Spending analysis"],
                setupTime: "2 minutes",
                color: "from-blue-600 to-blue-800"
              },
              {
                name: "QuickBooks",
                category: "Accounting",
                description: "Sync financial data with QuickBooks for seamless bookkeeping",
                features: ["Automatic categorization", "Expense tracking", "Report generation"],
                setupTime: "3 minutes",
                color: "from-green-600 to-green-800"
              },
              {
                name: "Stripe",
                category: "Payments",
                description: "Integrate Stripe payment data for comprehensive financial analysis",
                features: ["Revenue tracking", "Fee analysis", "Cash flow insights"],
                setupTime: "5 minutes",
                color: "from-purple-600 to-purple-800"
              },
              {
                name: "Salesforce",
                category: "CRM",
                description: "Connect Salesforce data for business intelligence and financial forecasting",
                features: ["Sales data integration", "Revenue forecasting", "Customer insights"],
                setupTime: "10 minutes",
                color: "from-blue-500 to-cyan-500"
              },
              {
                name: "PayPal",
                category: "Payments",
                description: "Sync PayPal transactions for complete payment visibility",
                features: ["Transaction sync", "Fee tracking", "Multi-currency support"],
                setupTime: "2 minutes",
                color: "from-yellow-500 to-orange-500"
              },
              {
                name: "Xero",
                category: "Accounting",
                description: "Integrate with Xero for automated accounting and financial reporting",
                features: ["Chart of accounts sync", "Invoice tracking", "Tax preparation"],
                setupTime: "4 minutes",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${integration.color} flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">{integration.name.charAt(0)}</span>
                    </div>
                    <span className="text-sm text-gray-400">{integration.setupTime}</span>
                  </div>
                  
                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-white">{integration.name}</h3>
                    <span className="text-sm text-purple-400">{integration.category}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{integration.description}</p>
                  
                  <div className="space-y-1 mb-4">
                    {integration.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Connect Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Integration Process */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How Integrations Work</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple, secure, and fast — connecting your tools takes just minutes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Choose Platform",
                description: "Select from our library of supported integrations",
                icon: Link
              },
              {
                step: "02",
                title: "Authenticate",
                description: "Securely connect using OAuth or API keys",
                icon: Shield
              },
              {
                step: "03",
                title: "Sync Data",
                description: "Automatically import and categorize your data",
                icon: Database
              },
              {
                step: "04",
                title: "Get Insights",
                description: "Start receiving AI-powered recommendations",
                icon: Zap
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className="text-3xl font-bold text-purple-400 mb-4">{step.step}</div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Security & Privacy */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Security & Privacy</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your data security is our top priority in every integration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-2xl p-8 border border-green-800/50">
                <h3 className="text-2xl font-bold text-white mb-6">Security Standards</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">OAuth 2.0 Authentication:</span>
                      <span className="text-gray-400 ml-2">Industry-standard secure authentication</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">AES-256 Encryption:</span>
                      <span className="text-gray-400 ml-2">All data encrypted in transit and at rest</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">SOC 2 Compliance:</span>
                      <span className="text-gray-400 ml-2">Audited security controls and procedures</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Regular Audits:</span>
                      <span className="text-gray-400 ml-2">Third-party security assessments</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Privacy Controls</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Data Minimization:</span>
                      <span className="text-gray-400 ml-2">Only collect data necessary for functionality</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">User Consent:</span>
                      <span className="text-gray-400 ml-2">Clear consent for all data sharing</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Right to Delete:</span>
                      <span className="text-gray-400 ml-2">Users can revoke access anytime</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">No Data Selling:</span>
                      <span className="text-gray-400 ml-2">We never sell your personal data</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Connect Your Tools Today</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              See all integrations available and start connecting your favorite tools to SaveCash. 
              Transform your financial workflow with seamless automation.
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
                  See All Integrations
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              <motion.button
                className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Integration
              </motion.button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Need help with integrations? Contact us at integrations@savecash.com
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
