import React from "react";
import { motion } from "motion/react";
import { LifeBuoy, ArrowLeft, ExternalLink, CheckCircle, Search, BookOpen, Clock, Star } from "lucide-react";
import { FloatingBlobs } from "../components/FloatingBlobs";

export default function Help() {
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
                <LifeBuoy className="w-12 h-12 text-purple-400" />
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
              <h1 className="text-5xl md:text-7xl font-bold text-white">Help Center</h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-6"
            >
              The SaveCash Help Center is the fastest route to expert guidance.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              Each article is written, verified, and continuously updated by our product and support teams 
              to ensure clarity, accuracy, and real-world relevance.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-purple-400 font-semibold"
            >
              Reliable answers. Zero friction.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        
        {/* Search Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Find detailed guides and troubleshooting steps</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Search our comprehensive knowledge base for instant answers to your questions.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search help articles..."
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
              />
            </div>
          </div>
        </motion.section>

        {/* Popular Articles */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Popular Articles</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Most helpful articles from our community and support team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Getting Started with SaveCash",
                description: "Complete setup guide for new users",
                category: "Getting Started",
                readTime: "5 min read",
                helpful: "98%",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Connecting Your Bank Account",
                description: "Step-by-step guide to securely link your accounts",
                category: "Account Setup",
                readTime: "3 min read",
                helpful: "95%",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Understanding AI Recommendations",
                description: "How our AI analyzes your spending patterns",
                category: "AI Features",
                readTime: "7 min read",
                helpful: "92%",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Setting Up Automated Savings",
                description: "Configure smart savings rules and goals",
                category: "Automation",
                readTime: "4 min read",
                helpful: "89%",
                color: "from-yellow-500 to-orange-500"
              },
              {
                title: "Security and Privacy Settings",
                description: "Manage your data privacy and security preferences",
                category: "Security",
                readTime: "6 min read",
                helpful: "94%",
                color: "from-red-500 to-orange-500"
              },
              {
                title: "Troubleshooting Common Issues",
                description: "Solutions for frequently encountered problems",
                category: "Troubleshooting",
                readTime: "8 min read",
                helpful: "87%",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${article.color} flex items-center justify-center`}>
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-purple-400 font-semibold">{article.category}</div>
                      <div className="text-xs text-gray-500">{article.readTime}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{article.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{article.helpful} helpful</span>
                    </div>
                    <motion.button
                      className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-300"
                      whileHover={{ x: 4 }}
                    >
                      Read Article →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Categories */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Browse by Category</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find help articles organized by topic and use case.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Getting Started",
                description: "New to SaveCash? Start here",
                articles: 12,
                icon: BookOpen,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Account Management",
                description: "Manage your account and settings",
                articles: 18,
                icon: LifeBuoy,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "AI Features",
                description: "Understanding AI recommendations",
                articles: 15,
                icon: Star,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Security & Privacy",
                description: "Keep your data safe and secure",
                articles: 10,
                icon: CheckCircle,
                color: "from-red-500 to-orange-500"
              },
              {
                title: "Automation",
                description: "Set up smart financial automation",
                articles: 14,
                icon: Clock,
                color: "from-yellow-500 to-orange-500"
              },
              {
                title: "Troubleshooting",
                description: "Solve common problems",
                articles: 22,
                icon: Search,
                color: "from-indigo-500 to-purple-500"
              },
              {
                title: "Integrations",
                description: "Connect third-party services",
                articles: 16,
                icon: ExternalLink,
                color: "from-pink-500 to-rose-500"
              },
              {
                title: "Billing & Plans",
                description: "Manage your subscription",
                articles: 8,
                icon: BookOpen,
                color: "from-teal-500 to-cyan-500"
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
                <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{category.articles} articles</span>
                    <motion.button
                      className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-300"
                      whileHover={{ x: 4 }}
                    >
                      Browse →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Video Tutorials */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Video Tutorials</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch step-by-step guides to master SaveCash features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SaveCash Overview",
                description: "Complete platform walkthrough",
                duration: "8:32",
                views: "12.5K",
                thumbnail: "https://via.placeholder.com/400x225/1a1a1a/ffffff?text=SaveCash+Overview"
              },
              {
                title: "Setting Up AI Automation",
                description: "Configure smart savings rules",
                duration: "5:18",
                views: "8.7K",
                thumbnail: "https://via.placeholder.com/400x225/1a1a1a/ffffff?text=AI+Automation"
              },
              {
                title: "Bank Account Integration",
                description: "Connect your accounts securely",
                duration: "3:45",
                views: "15.2K",
                thumbnail: "https://via.placeholder.com/400x225/1a1a1a/ffffff?text=Bank+Integration"
              }
            ].map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2">{video.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{video.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{video.views} views</span>
                      <motion.button
                        className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-300"
                        whileHover={{ x: 4 }}
                      >
                        Watch Now →
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Support */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-12 border border-gray-700">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Can't find what you're looking for? Our support team is here to help with personalized assistance.
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
                Explore Help Center
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
