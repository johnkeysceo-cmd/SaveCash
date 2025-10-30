import React from "react";
import { motion } from "motion/react";
import { Code, Zap, ArrowLeft, ExternalLink, CheckCircle, Database, Lock, Cpu } from "lucide-react";
import { FloatingBlobs } from "../components/FloatingBlobs";

export default function API() {
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
                <Code className="w-12 h-12 text-purple-400" />
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
              <h1 className="text-5xl md:text-7xl font-bold text-white">API</h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-6"
            >
              The SaveCash API unlocks the full potential of automation.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              Developers can integrate our intelligence engine directly into their systems — enabling predictive insights, 
              automated cost optimization, and real-time financial analytics through a single, secure endpoint.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-purple-400 font-semibold"
            >
              Designed for scale, engineered for trust.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        
        {/* API Overview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">API Overview</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Code meets capital efficiency. Access SaveCash's developer tools and API documentation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Real-Time Processing",
                description: "Get instant financial insights and recommendations",
                features: ["Sub-100ms response times", "WebSocket support", "Real-time updates"],
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Lock,
                title: "Enterprise Security",
                description: "Bank-grade security with OAuth 2.0 and API keys",
                features: ["OAuth 2.0 authentication", "API key management", "Rate limiting"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Database,
                title: "Comprehensive Data",
                description: "Access to all financial data and AI insights",
                features: ["Transaction data", "AI recommendations", "Analytics endpoints"],
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Cpu,
                title: "Scalable Infrastructure",
                description: "Built to handle millions of requests per day",
                features: ["99.99% uptime", "Auto-scaling", "Global CDN"],
                color: "from-red-500 to-orange-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{feature.description}</p>
                  
                  <div className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* API Endpoints */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">API Endpoints</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every endpoint documented. Every function explained.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                method: "GET",
                endpoint: "/api/v1/transactions",
                description: "Retrieve user transaction data with AI insights",
                parameters: ["limit", "offset", "date_range", "category"]
              },
              {
                method: "POST",
                endpoint: "/api/v1/insights",
                description: "Generate AI-powered financial insights and recommendations",
                parameters: ["account_id", "analysis_type", "timeframe"]
              },
              {
                method: "GET",
                endpoint: "/api/v1/savings-opportunities",
                description: "Get personalized savings opportunities and optimizations",
                parameters: ["user_id", "optimization_type", "priority"]
              },
              {
                method: "POST",
                endpoint: "/api/v1/automation",
                description: "Create and manage automated financial rules",
                parameters: ["rule_type", "conditions", "actions", "schedule"]
              },
              {
                method: "GET",
                endpoint: "/api/v1/analytics",
                description: "Access comprehensive financial analytics and reports",
                parameters: ["report_type", "date_range", "metrics", "format"]
              },
              {
                method: "POST",
                endpoint: "/api/v1/webhooks",
                description: "Set up real-time notifications for financial events",
                parameters: ["event_types", "webhook_url", "secret", "retry_policy"]
              }
            ].map((endpoint, index) => (
              <motion.div
                key={endpoint.endpoint}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                    endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                    endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {endpoint.method}
                  </div>
                  <div className="flex-1">
                    <code className="text-white font-mono text-lg">{endpoint.endpoint}</code>
                    <p className="text-gray-300 mt-2">{endpoint.description}</p>
                    <div className="mt-3">
                      <span className="text-gray-400 text-sm">Parameters: </span>
                      <span className="text-gray-300 text-sm">{endpoint.parameters.join(", ")}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Code Examples */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Code Examples</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started quickly with our comprehensive code samples and SDKs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">JavaScript SDK</h3>
                <div className="bg-black/50 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
{`import { SaveCashAPI } from '@savecash/sdk';

const api = new SaveCashAPI({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Get AI insights
const insights = await api.insights.generate({
  accountId: 'acc_123',
  analysisType: 'spending_patterns'
});

console.log(insights.recommendations);`}
                  </pre>
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
                <h3 className="text-xl font-bold text-white mb-4">Python SDK</h3>
                <div className="bg-black/50 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-blue-400 text-sm">
{`from savecash import SaveCashAPI

api = SaveCashAPI(
    api_key="your-api-key",
    environment="production"
)

# Get savings opportunities
opportunities = api.savings.get_opportunities(
    user_id="user_123",
    optimization_type="automatic"
)

for opportunity in opportunities:
    print(f"Save ${opportunity.amount} by {opportunity.action}")`}
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* SDKs & Libraries */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">SDKs & Libraries</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Official SDKs for popular programming languages and frameworks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "JavaScript/Node.js",
                version: "v2.1.0",
                description: "Full-featured SDK for web and server applications",
                features: ["TypeScript support", "Promise-based", "WebSocket support"],
                color: "from-yellow-500 to-orange-500"
              },
              {
                name: "Python",
                version: "v1.8.2",
                description: "Comprehensive Python library with async support",
                features: ["Async/await", "Pandas integration", "Jupyter notebooks"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                name: "Go",
                version: "v1.3.1",
                description: "High-performance Go client for microservices",
                features: ["Concurrent requests", "Context support", "gRPC support"],
                color: "from-purple-500 to-pink-500"
              },
              {
                name: "Java",
                version: "v2.0.0",
                description: "Enterprise-grade Java SDK with Spring integration",
                features: ["Spring Boot", "Reactive streams", "Enterprise features"],
                color: "from-red-500 to-orange-500"
              },
              {
                name: "PHP",
                version: "v1.5.3",
                description: "Modern PHP client with Laravel support",
                features: ["Laravel integration", "PSR-7 compliant", "Async support"],
                color: "from-indigo-500 to-purple-500"
              },
              {
                name: "Ruby",
                version: "v1.2.1",
                description: "Elegant Ruby gem with Rails integration",
                features: ["Rails integration", "ActiveRecord support", "RSpec tests"],
                color: "from-pink-500 to-rose-500"
              }
            ].map((sdk, index) => (
              <motion.div
                key={sdk.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${sdk.color} flex items-center justify-center`}>
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm text-gray-400">{sdk.version}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{sdk.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{sdk.description}</p>
                <div className="space-y-1">
                  {sdk.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* API Limits & Pricing */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">API Limits & Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent pricing with generous free tiers and enterprise options.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Free Tier",
                requests: "1,000/month",
                price: "$0",
                features: [
                  "Basic API access",
                  "Standard rate limits",
                  "Community support",
                  "Basic documentation"
                ],
                color: "from-gray-500 to-gray-600"
              },
              {
                name: "Pro Tier",
                requests: "100,000/month",
                price: "$99/month",
                features: [
                  "Full API access",
                  "Higher rate limits",
                  "Priority support",
                  "Advanced features",
                  "Webhook support"
                ],
                color: "from-purple-500 to-pink-500"
              },
              {
                name: "Enterprise",
                requests: "Unlimited",
                price: "Custom",
                features: [
                  "Unlimited requests",
                  "Custom rate limits",
                  "Dedicated support",
                  "SLA guarantees",
                  "Custom integrations",
                  "White-label options"
                ],
                color: "from-blue-500 to-cyan-500"
              }
            ].map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-white mb-1">{tier.price}</div>
                  <div className="text-gray-400 text-sm">{tier.requests}</div>
                </div>
                <div className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Building with SaveCash API</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Access SaveCash's developer tools and API documentation. Build powerful financial applications with our comprehensive API.
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
                  View Developer Docs
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              <motion.button
                className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get API Key
              </motion.button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Questions about the API? Contact us at developers@savecash.com
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
