import React from "react";
import { motion } from "motion/react";
import { PageTemplate } from "../components/PageTemplate";
import { AnimatedBlob } from "../components/AnimatedBlob";
import { Users, Award, TrendingUp, Shield, Brain, Zap } from "lucide-react";

export function Leadership() {
  const leadership = [
    {
      name: "Sarah Chen",
      title: "CEO & Founder",
      bio: "Former Goldman Sachs VP with 15+ years in fintech. Stanford MBA with expertise in financial technology and AI-driven solutions.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NjA0NzQ2NDJ8&ixlib=rb-4.1.0&q=80&w=1080",
      expertise: ["Financial Technology", "AI Strategy", "Leadership", "Innovation"]
    },
    {
      name: "Marcus Rodriguez",
      title: "Chief Technology Officer",
      bio: "Ex-Google engineer with 12+ years building scalable systems. Built payment infrastructure processing $50B+ annually.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzYwNDc0NjQyfA&ixlib=rb-4.1.0&q=80&w=1080",
      expertise: ["System Architecture", "Cloud Infrastructure", "Security", "Scalability"]
    },
    {
      name: "Dr. Emily Watson",
      title: "Head of AI & Machine Learning",
      bio: "MIT PhD in Machine Learning with 8+ years at DeepMind. Leading our AI research and development initiatives.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NjA0NzQ2NDJ8&ixlib=rb-4.1.0&q=80&w=1080",
      expertise: ["Machine Learning", "AI Ethics", "Research", "Data Science"]
    },
    {
      name: "David Kim",
      title: "Chief Financial Officer",
      bio: "Former JP Morgan investment banker with 10+ years in financial services. Harvard MBA specializing in fintech investments.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzYwNDc0NjQyfA&ixlib=rb-4.1.0&q=80&w=1080",
      expertise: ["Financial Strategy", "Investment Banking", "Risk Management", "Corporate Finance"]
    },
    {
      name: "Lisa Thompson",
      title: "Chief Product Officer",
      bio: "Former Apple product manager with 8+ years building consumer fintech products. Stanford MS in Human-Computer Interaction.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NjA0NzQ2NDJ8&ixlib=rb-4.1.0&q=80&w=1080",
      expertise: ["Product Strategy", "User Experience", "Design", "Innovation"]
    },
    {
      name: "James Wilson",
      title: "Chief Security Officer",
      bio: "Former NSA cybersecurity expert with 15+ years protecting financial institutions. CISSP and CISM certified.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzYwNDc0NjQyfA&ixlib=rb-4.1.0&q=80&w=1080",
      expertise: ["Cybersecurity", "Risk Management", "Compliance", "Security Architecture"]
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in financial technology, constantly exploring new ways to serve our users better."
    },
    {
      icon: Shield,
      title: "Security & Trust",
      description: "Your financial data is our highest priority. We implement bank-level security measures and maintain the highest standards of trust."
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Every decision we make is guided by what's best for our users' financial success and long-term prosperity."
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "We believe in continuous learning, improvement, and helping our users achieve their financial goals through innovative solutions."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from product development to customer service and user experience."
    },
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description: "We move fast, iterate quickly, and deliver value to our users at the speed of modern financial technology."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Blob Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <AnimatedBlob />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto py-20 px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-10 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Leadership Team
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the visionary leaders driving SaveCash's mission to democratize financial success through innovative AI-powered solutions.
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {leadership.map((leader, index) => (
            <motion.div
              key={leader.name}
              className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-3xl border border-white/10 p-8 shadow-2xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/10">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                <p className="text-purple-400 font-semibold mb-4">{leader.title}</p>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{leader.bio}</p>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {leader.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-400/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership Values */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-white">Our Leadership Values</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The principles that guide our leadership team and shape our company culture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="text-center p-6 bg-white/[0.02] rounded-2xl border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <value.icon className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Company Stats */}
        <motion.div
          className="mt-20 pt-16 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Leadership Impact</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The results of our leadership team's vision and execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Users Helped", description: "Active users benefiting from our platform" },
              { number: "$2.4M+", label: "Total Savings", description: "Money saved by our users collectively" },
              { number: "98%", label: "Satisfaction", description: "User satisfaction rating" },
              { number: "24/7", label: "AI Support", description: "Round-the-clock AI assistance available" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-semibold mb-2">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Animated Blob Background */}
      <AnimatedBlob />
    </div>
  );
}
