import React from "react";
import { motion } from "motion/react";
import { FileCode, ArrowLeft, ExternalLink, CheckCircle, Code, Zap, Database, Lock } from "lucide-react";
import { FloatingBlobs } from "../components/FloatingBlobs";

export default function Documentation() {
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
                <FileCode className="w-12 h-12 text-purple-400" />
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
              <h1 className="text-5xl md:text-7xl font-bold text-white">Documentation</h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-6"
            >
              SaveCash Documentation is built for developers and integrators who need precision.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              Complete with REST API references, authentication flows, and code samples, 
              it reflects the same discipline we put into our engineering.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-purple-400 font-semibold"
            >
              Every endpoint documented. Every function explained.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        
        {/* Quick Start */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Quick Start</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access the official SaveCash developer documentation and get started in minutes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Get API Key",
                description: "Sign up for a free account and generate your API key",
                code: "curl -X POST https://api.savecash.com/v1/auth \\\n  -H 'Content-Type: application/json' \\\n  -d '{\"email\": \"your@email.com\"}'",
                color: "from-green-500 to-emerald-500"
              },
              {
                step: "02",
                title: "Make First Request",
                description: "Test your connection with a simple API call",
                code: "curl -X GET https://api.savecash.com/v1/insights \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: "03",
                title: "Build Integration",
                description: "Integrate SaveCash into your application",
                code: "import { SaveCashAPI } from '@savecash/sdk';\n\nconst api = new SaveCashAPI({\n  apiKey: 'your-api-key'\n});",
                color: "from-purple-500 to-pink-500"
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">{step.description}</p>
                  <div className="bg-black/50 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm whitespace-pre-wrap">{step.code}</pre>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* API Reference */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">API Reference</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete API documentation with examples and response schemas.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                method: "GET",
                endpoint: "/api/v1/transactions",
                description: "Retrieve user transaction data with AI insights",
                parameters: [
                  { name: "limit", type: "integer", required: false, description: "Number of transactions to return (max 100)" },
                  { name: "offset", type: "integer", required: false, description: "Number of transactions to skip" },
                  { name: "date_range", type: "string", required: false, description: "Date range filter (e.g., '30d', '90d')" },
                  { name: "category", type: "string", required: false, description: "Filter by transaction category" }
                ],
                example: {
                  request: "GET /api/v1/transactions?limit=10&date_range=30d",
                  response: "{\n  \"transactions\": [...],\n  \"total\": 150,\n  \"ai_insights\": {...}\n}"
                }
              },
              {
                method: "POST",
                endpoint: "/api/v1/insights",
                description: "Generate AI-powered financial insights and recommendations",
                parameters: [
                  { name: "account_id", type: "string", required: true, description: "Unique account identifier" },
                  { name: "analysis_type", type: "string", required: true, description: "Type of analysis to perform" },
                  { name: "timeframe", type: "string", required: false, description: "Analysis timeframe" }
                ],
                example: {
                  request: "POST /api/v1/insights\n{\n  \"account_id\": \"acc_123\",\n  \"analysis_type\": \"spending_patterns\"\n}",
                  response: "{\n  \"insights\": [...],\n  \"recommendations\": [...],\n  \"confidence_score\": 0.95\n}"
                }
              },
              {
                method: "GET",
                endpoint: "/api/v1/savings-opportunities",
                description: "Get personalized savings opportunities and optimizations",
                parameters: [
                  { name: "user_id", type: "string", required: true, description: "Unique user identifier" },
                  { name: "optimization_type", type: "string", required: false, description: "Type of optimization to find" },
                  { name: "priority", type: "string", required: false, description: "Priority level (low, medium, high)" }
                ],
                example: {
                  request: "GET /api/v1/savings-opportunities?user_id=user_123&priority=high",
                  response: "{\n  \"opportunities\": [...],\n  \"potential_savings\": 250.00,\n  \"timeframe\": \"monthly\"\n}"
                }
              }
            ].map((endpoint, index) => (
              <motion.div
                key={endpoint.endpoint}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                    endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                    endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {endpoint.method}
                  </div>
                  <div className="flex-1">
                    <code className="text-white font-mono text-xl">{endpoint.endpoint}</code>
                    <p className="text-gray-300 mt-2">{endpoint.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-white font-semibold mb-4">Parameters</h4>
                    <div className="space-y-3">
                      {endpoint.parameters.map((param, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <code className="text-purple-400 font-mono">{param.name}</code>
                              <span className="text-gray-400 text-sm">({param.type})</span>
                              {param.required && <span className="text-red-400 text-xs">required</span>}
                            </div>
                            <p className="text-gray-300 text-sm mt-1">{param.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-4">Example</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="text-gray-400 text-sm mb-2">Request:</div>
                        <div className="bg-black/50 rounded-lg p-3 overflow-x-auto">
                          <pre className="text-blue-400 text-sm whitespace-pre-wrap">{endpoint.example.request}</pre>
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm mb-2">Response:</div>
                        <div className="bg-black/50 rounded-lg p-3 overflow-x-auto">
                          <pre className="text-green-400 text-sm whitespace-pre-wrap">{endpoint.example.response}</pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SDKs */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "JavaScript/Node.js",
                version: "v2.1.0",
                description: "Full-featured SDK for web and server applications",
                features: ["TypeScript support", "Promise-based", "WebSocket support", "React hooks"],
                install: "npm install @savecash/sdk",
                color: "from-yellow-500 to-orange-500"
              },
              {
                name: "Python",
                version: "v1.8.2",
                description: "Comprehensive Python library with async support",
                features: ["Async/await", "Pandas integration", "Jupyter notebooks", "Django support"],
                install: "pip install savecash",
                color: "from-blue-500 to-cyan-500"
              },
              {
                name: "Go",
                version: "v1.3.1",
                description: "High-performance Go client for microservices",
                features: ["Concurrent requests", "Context support", "gRPC support", "Gin integration"],
                install: "go get github.com/savecash/go-sdk",
                color: "from-purple-500 to-pink-500"
              },
              {
                name: "Java",
                version: "v2.0.0",
                description: "Enterprise-grade Java SDK with Spring integration",
                features: ["Spring Boot", "Reactive streams", "Enterprise features", "Maven/Gradle"],
                install: "maven: com.savecash:java-sdk:2.0.0",
                color: "from-red-500 to-orange-500"
              },
              {
                name: "PHP",
                version: "v1.5.3",
                description: "Modern PHP client with Laravel support",
                features: ["Laravel integration", "PSR-7 compliant", "Async support", "Composer package"],
                install: "composer require savecash/php-sdk",
                color: "from-indigo-500 to-purple-500"
              },
              {
                name: "Ruby",
                version: "v1.2.1",
                description: "Elegant Ruby gem with Rails integration",
                features: ["Rails integration", "ActiveRecord support", "RSpec tests", "Gem package"],
                install: "gem install savecash-ruby",
                color: "from-pink-500 to-rose-500"
              }
            ].map((sdk, index) => (
              <motion.div
                key={sdk.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sdk.color} flex items-center justify-center`}>
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-gray-400">{sdk.version}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{sdk.name}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{sdk.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {sdk.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-black/50 rounded-lg p-3 mb-4">
                    <code className="text-green-400 text-sm">{sdk.install}</code>
                  </div>
                  
                  <motion.button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Documentation
                  </motion.button>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Building Today</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Access the official SaveCash developer documentation and start building powerful financial applications.
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
                  Open Docs
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
