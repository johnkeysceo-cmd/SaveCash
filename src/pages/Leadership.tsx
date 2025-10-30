import React from "react";
import { motion } from "motion/react";
import { Linkedin, Award, Users, TrendingUp, Shield, Brain, ArrowRight, Home } from "lucide-react";
import { AnimatedBlob } from "../components/AnimatedBlob";

export default function Leadership() {
  const leaders = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Former Goldman Sachs VP with 15+ years in fintech. Stanford MBA. Passionate about making financial success accessible to everyone.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NjA0NzQ2NDJ8&ixlib=rb-4.1.0&q=80&w=1080",
      linkedin: "https://linkedin.com/in/sarahchen",
      achievements: ["15+ years Goldman Sachs", "Stanford MBA", "Founded 3 fintech companies"],
      color: "from-purple-400 to-violet-500"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      bio: "Ex-Google engineer with expertise in payment systems. Built infrastructure processing $50B+ annually. MIT graduate.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzYwNDc0NjQyfA&ixlib=rb-4.1.0&q=80&w=1080",
      linkedin: "https://linkedin.com/in/marcusrodriguez",
      achievements: ["Ex-Google Engineer", "MIT Graduate", "$50B+ systems built"],
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI",
      bio: "MIT PhD in Machine Learning. Former DeepMind researcher. Leading our AI research and development efforts.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NjA0NzQ2NDJ8&ixlib=rb-4.1.0&q=80&w=1080",
      linkedin: "https://linkedin.com/in/emilywatson",
      achievements: ["MIT PhD", "Ex-DeepMind", "20+ AI papers published"],
      color: "from-green-400 to-emerald-500"
    },
    {
      name: "David Kim",
      role: "CFO",
      bio: "Former McKinsey consultant with Harvard MBA. Expert in financial strategy and operations. Leading our growth and expansion.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzYwNDc0NjQyfA&ixlib=rb-4.1.0&q=80&w=1080",
      linkedin: "https://linkedin.com/in/davidkim",
      achievements: ["Ex-McKinsey", "Harvard MBA", "Led $100M+ deals"],
      color: "from-orange-400 to-red-500"
    }
  ];

  const stats = [
    { number: "50+", label: "Years Combined Experience", icon: Award },
    { number: "4", label: "Top Universities", icon: Brain },
    { number: "15+", label: "Previous Companies", icon: TrendingUp },
    { number: "100%", label: "Mission-Driven", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-black relative">
        <AnimatedBlob />
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-orange-900/20" />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back to Website Button */}
        <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-4 h-4" />
              <span>Back to Website</span>
            </motion.a>
        </motion.div>
            <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight"
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 0 40px rgba(255, 255, 255, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              Leadership Team
            </motion.h1>
            <motion.p 
              className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Meet the experienced leaders driving SaveCash Pro's mission to democratize financial success.
            </motion.p>
            </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
        <motion.div
                key={stat.label}
                className="text-center p-8 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
            >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-white" />
              </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
        <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
            <h2 className="text-5xl font-bold text-white mb-6">Meet Our Leaders</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              World-class talent from the most prestigious companies and universities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                className="group bg-white/[0.02] rounded-3xl p-8 border border-white/10 backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Subtle glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${leader.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={false}
                />
                
                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                  <motion.div 
                    className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full overflow-hidden border-4 border-white/10 flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-2">{leader.name}</h3>
                    <p className={`text-lg font-semibold mb-4 bg-gradient-to-r ${leader.color} bg-clip-text text-transparent`}>
                      {leader.role}
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">{leader.bio}</p>
                    
                    <div className="space-y-2 mb-6">
                      {leader.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                    
                    <motion.a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>Connect on LinkedIn</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 px-6 bg-gradient-to-br from-purple-900/10 to-pink-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-8">Our Leadership Philosophy</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              We believe that great leadership is about empowering others to achieve their full potential. 
              Our team is united by a shared vision of democratizing financial success and making advanced 
              financial strategies accessible to everyone, regardless of their background or circumstances.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Empowerment</h3>
                <p className="text-gray-300">We empower our team to make decisions and drive impact</p>
              </div>
              <div className="text-center">
                <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">We foster a culture of continuous learning and innovation</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Integrity</h3>
                <p className="text-gray-300">We lead with integrity and transparency in everything we do</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-8">Ready to Join Our Mission?</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Work alongside world-class leaders who are building the future of financial technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-6 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 80px -15px rgba(168,85,247,0.8)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Open Positions</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn About Our Culture
              </motion.button>
          </div>
        </motion.div>
      </div>
      </section>
    </div>
  );
}