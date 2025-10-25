import React from "react";
import { motion } from "motion/react";
import { PageTemplate } from "../components/PageTemplate";
import { Users, Zap, Heart, Award, MapPin, Clock, Briefcase, Code, BarChart3 } from "lucide-react";

export function Careers() {
  const benefits = [
    {
      icon: Zap,
      title: "Competitive Compensation",
      description: "Top-tier salary, equity, and performance bonuses"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage"
    },
    {
      icon: Award,
      title: "Professional Development",
      description: "Learning budget, conferences, and career growth opportunities"
    },
    {
      icon: Users,
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours and unlimited PTO"
    }
  ];

  const openPositions = [
    {
      title: "Senior Full-Stack Engineer",
      department: "Engineering",
      location: "San Francisco, CA (Remote OK)",
      type: "Full-time",
      description: "Build the next generation of AI-powered financial tools",
      requirements: [
        "5+ years of full-stack development experience",
        "Expertise in React, Node.js, and TypeScript",
        "Experience with AI/ML integration",
        "Strong problem-solving and communication skills"
      ]
    },
    {
      title: "AI/ML Engineer",
      department: "Engineering",
      location: "San Francisco, CA (Remote OK)",
      type: "Full-time",
      description: "Develop and improve our AI financial advisory algorithms",
      requirements: [
        "3+ years of ML/AI engineering experience",
        "Strong background in Python and TensorFlow/PyTorch",
        "Experience with financial data and NLP",
        "PhD or MS in Computer Science, AI, or related field"
      ]
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA (Remote OK)",
      type: "Full-time",
      description: "Lead product strategy and drive user experience improvements",
      requirements: [
        "3+ years of product management experience",
        "Background in fintech or financial services",
        "Strong analytical and user research skills",
        "Experience with AI-powered products"
      ]
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco, CA (Remote OK)",
      type: "Full-time",
      description: "Create intuitive and beautiful user experiences for financial tools",
      requirements: [
        "4+ years of UX/UI design experience",
        "Portfolio demonstrating fintech or complex product design",
        "Proficiency in Figma, Sketch, and prototyping tools",
        "Understanding of accessibility and inclusive design"
      ]
    }
  ];

  const values = [
    {
      icon: Code,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in fintech and AI"
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Every decision we make is guided by what's best for our users"
    },
    {
      icon: BarChart3,
      title: "Data-Driven",
      description: "We use data and metrics to guide our decisions and measure success"
    },
    {
      icon: Heart,
      title: "Inclusive Culture",
      description: "We value diversity and create an environment where everyone can thrive"
    }
  ];

  return (
    <PageTemplate 
      title="Join Our Team" 
      subtitle="Help us democratize financial success and build the future of AI-powered financial advice."
    >
      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Why Work at SaveCash?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We're building the future of financial advice, making sophisticated financial strategies 
              accessible to everyone through AI. Join us in democratizing wealth building and helping 
              millions of people achieve financial success.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Benefits & Perks</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We invest in our team's success and well-being
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center p-6 bg-white/[0.02] rounded-2xl border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Open Positions</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join our growing team and help shape the future of financial technology
            </p>
          </motion.div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                className="p-8 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-medium transition-all">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-400 mb-4">{position.description}</p>
                <div>
                  <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start gap-3 text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 text-white">Our Culture</h2>
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  At SaveCash, we believe that great products come from great teams. We're a diverse group 
                  of passionate individuals who are united by our mission to democratize financial success.
                </p>
                <p>
                  We value innovation, collaboration, and continuous learning. Our team members are encouraged 
                  to take risks, learn from failures, and always put our users first.
                </p>
                <p>
                  We're remote-first but maintain strong connections through regular team events, 
                  virtual coffee chats, and our annual company retreat in San Francisco.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 flex items-center justify-center">
                <Users className="w-32 h-32 text-purple-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Application Process</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our hiring process is designed to be fair, transparent, and efficient
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Apply", description: "Submit your application and resume" },
              { step: "2", title: "Screen", description: "Initial phone/video screening call" },
              { step: "3", title: "Interview", description: "Technical and cultural fit interviews" },
              { step: "4", title: "Offer", description: "Receive your offer and join the team!" }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{process.title}</h3>
                <p className="text-gray-400">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}
