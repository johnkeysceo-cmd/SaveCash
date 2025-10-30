import React from "react";
import { motion } from "motion/react";
import { Users, ArrowLeft, ExternalLink, MessageCircle, Star, TrendingUp, Award, Globe } from "lucide-react";
import { FloatingBlobs } from "../components/FloatingBlobs";

export default function Community() {
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
                <Users className="w-12 h-12 text-purple-400" />
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
              <h1 className="text-5xl md:text-7xl font-bold text-white">Community</h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-6"
            >
              The SaveCash Community connects innovators, developers, and early adopters who believe in smarter finance.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              Exchange ideas, share integrations, and shape what comes next — together.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-purple-400 font-semibold"
            >
              Innovation grows when it's shared.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        
        {/* Community Stats */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Community Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of users building the future of financial automation together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "15,000+", label: "Active Members", icon: Users, color: "from-purple-500 to-pink-500" },
              { number: "2,500+", label: "Integrations Built", icon: TrendingUp, color: "from-blue-500 to-cyan-500" },
              { number: "50+", label: "Countries Represented", icon: Globe, color: "from-green-500 to-emerald-500" },
              { number: "98%", label: "Satisfaction Rate", icon: Star, color: "from-yellow-500 to-orange-500" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Community Platforms */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join the Conversation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with fellow users, developers, and financial automation enthusiasts across our platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                platform: "Discord",
                description: "Real-time chat, voice channels, and instant support from the community",
                members: "8,500+ members",
                activity: "Very Active",
                features: ["Live support", "Voice channels", "Bot integrations", "Developer channels"],
                color: "from-indigo-500 to-purple-500",
                icon: MessageCircle
              },
              {
                platform: "GitHub",
                description: "Open source projects, integrations, and collaborative development",
                members: "2,300+ repositories",
                activity: "Highly Active",
                features: ["Open source", "Issue tracking", "Pull requests", "Documentation"],
                color: "from-gray-500 to-gray-600",
                icon: TrendingUp
              },
              {
                platform: "Reddit",
                description: "Community discussions, tips, and user-generated content",
                members: "12,000+ subscribers",
                activity: "Active",
                features: ["Discussions", "Tips & tricks", "User stories", "AMA sessions"],
                color: "from-orange-500 to-red-500",
                icon: Users
              }
            ].map((platform, index) => (
              <motion.div
                key={platform.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center`}>
                      <platform.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-green-400 font-semibold">{platform.activity}</div>
                      <div className="text-xs text-gray-500">{platform.members}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{platform.platform}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{platform.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {platform.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Join {platform.platform}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Projects */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover innovative integrations and tools built by our community members.
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                title: "SaveCash Slack Bot",
                description: "Get real-time spending alerts and savings insights directly in your Slack workspace.",
                author: "Alex Chen",
                stars: 234,
                language: "Python",
                category: "Integration",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Personal Finance Dashboard",
                description: "A beautiful React dashboard that visualizes your SaveCash data with custom charts and insights.",
                author: "Sarah Johnson",
                stars: 189,
                language: "React",
                category: "Dashboard",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Automated Budget Tracker",
                description: "Python script that automatically categorizes expenses and generates monthly budget reports.",
                author: "Mike Rodriguez",
                stars: 156,
                language: "Python",
                category: "Automation",
                color: "from-purple-500 to-pink-500"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <span>by {project.author}</span>
                          <span>•</span>
                          <span>{project.category}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-sm text-gray-400">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="text-sm text-gray-400">{project.language}</div>
                    </div>
                  </div>
                  <motion.button
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Community Guidelines */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Community Guidelines</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our community thrives on respect, collaboration, and shared innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Be Respectful",
                description: "Treat all community members with kindness and respect. We're here to learn and grow together.",
                icon: Users,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Share Knowledge",
                description: "Help others by sharing your experiences, code, and insights. Knowledge grows when shared.",
                icon: TrendingUp,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Stay On Topic",
                description: "Keep discussions relevant to financial automation, SaveCash, and related technologies.",
                icon: MessageCircle,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Follow Guidelines",
                description: "Respect platform rules and community standards. Report violations when you see them.",
                icon: Award,
                color: "from-yellow-500 to-orange-500"
              }
            ].map((guideline, index) => (
              <motion.div
                key={guideline.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${guideline.color} flex items-center justify-center`}>
                    <guideline.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{guideline.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{guideline.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Community</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Connect with innovators, developers, and early adopters who believe in smarter finance. 
              Exchange ideas, share integrations, and shape what comes next — together.
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
                  Join Discord
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              <motion.button
                className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View GitHub
              </motion.button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Questions about the community? Contact us at community@savecash.com
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
