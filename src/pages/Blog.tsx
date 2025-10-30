import React from "react";
import { motion } from "motion/react";
import { PenTool, ArrowLeft, ExternalLink, Clock, User, Tag, Calendar } from "lucide-react";
import { FloatingBlobs } from "../components/FloatingBlobs";

export default function Blog() {
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
                <PenTool className="w-12 h-12 text-purple-400" />
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
              <h1 className="text-5xl md:text-7xl font-bold text-white">Blog</h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-6"
            >
              The SaveCash Blog shares insights at the intersection of AI, finance, and user experience.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              Expect deep dives into automation, product updates, and original research that shapes 
              how money moves in the digital era.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-purple-400 font-semibold"
            >
              Perspective that defines progress.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        
        {/* Featured Article */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Article</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore thought leadership and product updates from our latest insights.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold">Featured</span>
                  <span className="text-gray-400 text-sm">January 15, 2025</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  The Future of AI-Powered Financial Automation
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  How artificial intelligence is transforming personal finance, from predictive analytics 
                  to automated decision-making. We explore the latest trends and what they mean for everyday consumers.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-400">
                    <User className="w-4 h-4" />
                    <span className="text-sm">Sarah Chen</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">8 min read</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Tag className="w-4 h-4" />
                    <span className="text-sm">AI, Finance</span>
                  </div>
                </div>
                <motion.button
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read Article →
                </motion.button>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-800/50">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                    <PenTool className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Deep Dive Series</h4>
                  <p className="text-gray-300 text-sm">
                    Comprehensive analysis of emerging technologies and their impact on financial services.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Latest Articles */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Latest Articles</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with our latest insights and product developments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Building Trust in AI Financial Services",
                excerpt: "How transparency and explainability are crucial for user adoption of AI-powered financial tools.",
                author: "Michael Rodriguez",
                date: "January 12, 2025",
                readTime: "6 min read",
                category: "AI Ethics",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "The Psychology of Automated Savings",
                excerpt: "Understanding user behavior patterns and designing AI systems that work with human psychology.",
                author: "Dr. Lisa Wang",
                date: "January 10, 2025",
                readTime: "7 min read",
                category: "Behavioral Finance",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "API Design Principles for Fintech",
                excerpt: "Best practices for building developer-friendly financial APIs that scale with user needs.",
                author: "Alex Thompson",
                date: "January 8, 2025",
                readTime: "5 min read",
                category: "Engineering",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Privacy-First Financial Data Processing",
                excerpt: "How we implement zero-knowledge architecture to protect user data while enabling powerful AI.",
                author: "Sarah Chen",
                date: "January 5, 2025",
                readTime: "9 min read",
                category: "Security",
                color: "from-red-500 to-orange-500"
              },
              {
                title: "The Economics of Financial Automation",
                excerpt: "Analyzing the cost-benefit of AI automation for both consumers and financial institutions.",
                author: "Dr. James Park",
                date: "January 3, 2025",
                readTime: "8 min read",
                category: "Economics",
                color: "from-yellow-500 to-orange-500"
              },
              {
                title: "User Experience in Financial Apps",
                excerpt: "Design principles for creating intuitive financial applications that users actually want to use.",
                author: "Emma Davis",
                date: "January 1, 2025",
                readTime: "6 min read",
                category: "UX Design",
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
                      <PenTool className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-purple-400 font-semibold">{article.category}</div>
                      <div className="text-xs text-gray-500">{article.readTime}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Newsletter Signup */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Stay Informed</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get the latest insights delivered to your inbox. No spam, just valuable content.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  />
                </div>
                <motion.button
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Join 10,000+ subscribers getting weekly insights on AI and finance.
              </p>
            </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Browse by Topic</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our content organized by subject matter and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "AI & Machine Learning", count: 24, color: "from-purple-500 to-pink-500" },
              { title: "Financial Technology", count: 18, color: "from-blue-500 to-cyan-500" },
              { title: "User Experience", count: 15, color: "from-green-500 to-emerald-500" },
              { title: "Security & Privacy", count: 12, color: "from-red-500 to-orange-500" },
              { title: "Product Updates", count: 20, color: "from-yellow-500 to-orange-500" },
              { title: "Industry Insights", count: 16, color: "from-indigo-500 to-purple-500" },
              { title: "Engineering", count: 14, color: "from-pink-500 to-rose-500" },
              { title: "Research", count: 10, color: "from-teal-500 to-cyan-500" }
            ].map((category, index) => (
              <motion.button
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-left group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <PenTool className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                <div className="text-gray-400 text-sm">{category.count} articles</div>
              </motion.button>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Explore Our Insights</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover thought leadership, product updates, and original research that shapes the future of financial technology.
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
                  Read the Blog
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              <motion.button
                className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe to Newsletter
              </motion.button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Questions about our content? Contact us at blog@savecash.com
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
