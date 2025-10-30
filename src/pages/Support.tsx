import React from "react";
import { motion } from "motion/react";
import { Headphones, ArrowLeft, ExternalLink, Clock, MessageCircle, CheckCircle, Star, Globe } from "lucide-react";
import { FloatingBlobs } from "../components/FloatingBlobs";

export default function Support() {
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
                <Headphones className="w-12 h-12 text-purple-400" />
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
              <h1 className="text-5xl md:text-7xl font-bold text-white">Support</h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-6"
            >
              Real people. Real responses.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              Our global support team operates around the clock to resolve issues and keep your automation running flawlessly.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-purple-400 font-semibold"
            >
              Support that scales with you.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        
        {/* Support Channels */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get Help Now</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support channel that works best for you. We're here to help 24/7.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Live Chat",
                description: "Instant support from our expert team. Available 24/7 for immediate assistance.",
                responseTime: "< 2 minutes",
                availability: "24/7",
                features: ["Instant responses", "Screen sharing", "File uploads", "Chat history"],
                color: "from-green-500 to-emerald-500",
                icon: MessageCircle
              },
              {
                title: "Email Support",
                description: "Detailed technical support via email. Perfect for complex issues and documentation.",
                responseTime: "< 4 hours",
                availability: "24/7",
                features: ["Detailed responses", "Technical analysis", "Documentation", "Follow-up"],
                color: "from-blue-500 to-cyan-500",
                icon: Clock
              },
              {
                title: "Phone Support",
                description: "Direct voice support for urgent issues. Premium support for enterprise customers.",
                responseTime: "< 15 minutes",
                availability: "Business Hours",
                features: ["Voice support", "Urgent issues", "Enterprise priority", "Escalation"],
                color: "from-purple-500 to-pink-500",
                icon: Headphones
              }
            ].map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${channel.color} flex items-center justify-center`}>
                      <channel.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-green-400 font-semibold">{channel.responseTime}</div>
                      <div className="text-xs text-gray-500">{channel.availability}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{channel.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {channel.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start {channel.title}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Support Team */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our global support team brings expertise from finance, technology, and customer success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Senior Support Engineer",
                expertise: "API Integration, Technical Troubleshooting",
                location: "San Francisco, CA",
                experience: "5+ years",
                avatar: "SC",
                color: "from-blue-500 to-cyan-500"
              },
              {
                name: "Michael Rodriguez",
                role: "Financial Support Specialist",
                expertise: "Account Management, Financial Analysis",
                location: "New York, NY",
                experience: "7+ years",
                avatar: "MR",
                color: "from-green-500 to-emerald-500"
              },
              {
                name: "Emma Davis",
                role: "Customer Success Manager",
                expertise: "User Experience, Account Optimization",
                location: "London, UK",
                experience: "4+ years",
                avatar: "ED",
                color: "from-purple-500 to-pink-500"
              },
              {
                name: "Alex Thompson",
                role: "Technical Support Lead",
                expertise: "System Architecture, Performance Optimization",
                location: "Austin, TX",
                experience: "6+ years",
                avatar: "AT",
                color: "from-yellow-500 to-orange-500"
              },
              {
                name: "Lisa Wang",
                role: "Enterprise Support Manager",
                expertise: "Enterprise Integration, Security Compliance",
                location: "Singapore",
                experience: "8+ years",
                avatar: "LW",
                color: "from-red-500 to-orange-500"
              },
              {
                name: "James Park",
                role: "Developer Relations",
                expertise: "SDK Support, Developer Tools",
                location: "Seoul, South Korea",
                experience: "5+ years",
                avatar: "JP",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">{member.avatar}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{member.name}</h3>
                      <p className="text-purple-400 text-sm font-medium">{member.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.expertise}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Globe className="w-4 h-4" />
                      <span>{member.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Star className="w-4 h-4" />
                      <span>{member.experience}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Support Resources */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Self-Service Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers quickly with our comprehensive knowledge base and troubleshooting guides.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Knowledge Base",
                description: "Comprehensive guides covering setup, configuration, and troubleshooting",
                articles: "500+ articles",
                categories: ["Getting Started", "API Documentation", "Troubleshooting", "Best Practices"],
                color: "from-blue-500 to-cyan-500",
                icon: MessageCircle
              },
              {
                title: "Video Tutorials",
                description: "Step-by-step video guides for common tasks and advanced features",
                articles: "100+ videos",
                categories: ["Setup Walkthrough", "Feature Demos", "Integration Guides", "Advanced Tips"],
                color: "from-purple-500 to-pink-500",
                icon: Clock
              },
              {
                title: "Community Forum",
                description: "Connect with other users and get help from the community",
                articles: "Active community",
                categories: ["User Discussions", "Feature Requests", "Bug Reports", "Success Stories"],
                color: "from-green-500 to-emerald-500",
                icon: Headphones
              },
              {
                title: "Status Page",
                description: "Real-time updates on system status, maintenance, and incidents",
                articles: "Live updates",
                categories: ["System Status", "Maintenance Windows", "Incident Reports", "Performance Metrics"],
                color: "from-yellow-500 to-orange-500",
                icon: CheckCircle
              }
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center`}>
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{resource.title}</h3>
                      <p className="text-gray-400 text-sm">{resource.articles}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">{resource.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {resource.categories.map((category, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                        <span>{category}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Access {resource.title}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Support</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Can't find what you're looking for? Send us a message and we'll get back to you quickly.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Subject</label>
                  <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors duration-300">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Feature Request</option>
                    <option>Bug Report</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                    placeholder="Describe your issue or question in detail..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">We're Here to Help</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Our global support team operates around the clock to resolve issues and keep your automation running flawlessly. 
              Get direct assistance from SaveCash specialists.
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
                  Start Live Chat
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              <motion.button
                className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Email Support
              </motion.button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Need immediate assistance? Contact us at support@savecash.com
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
