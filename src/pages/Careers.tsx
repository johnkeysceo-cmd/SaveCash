import React from "react";
import { motion } from "motion/react";
import { Briefcase, Rocket, Users, Target, Zap, Heart, ArrowLeft, ExternalLink } from "lucide-react";
import { FloatingBlobs } from "../components/FloatingBlobs";

export default function Careers() {
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
              <Briefcase className="w-12 h-12 text-purple-400" />
              <h1 className="text-5xl md:text-7xl font-bold text-white">Careers</h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-6"
            >
              Join a team that's building the future of personal finance.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              At SaveCash, we're not just creating a product — we're building a new financial standard. 
              We value curiosity, bold ideas, and a relentless pursuit of simplicity.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-purple-400 font-semibold"
            >
              Whether you're an engineer, designer, or strategist, you'll shape technology that impacts millions.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        
        {/* Mission Statement */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">We Don't Hire Employees</h2>
            <p className="text-2xl text-purple-400 font-semibold mb-8">We Recruit Visionaries</p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every person at SaveCash is here because they believe in a future where financial technology 
              serves humanity, not the other way around.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Our Culture</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We're building more than a company — we're creating a movement. Our culture is defined by 
                  intellectual curiosity, ethical decision-making, and a shared commitment to making financial 
                  freedom accessible to everyone.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Rocket className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Innovation First:</span>
                      <span className="text-gray-400 ml-2">We encourage bold ideas and calculated risks</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Human-Centered:</span>
                      <span className="text-gray-400 ml-2">Every decision puts people before profits</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Purpose-Driven:</span>
                      <span className="text-gray-400 ml-2">We're here to solve real problems for real people</span>
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
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-800/50">
                <h3 className="text-2xl font-bold text-white mb-4">What We Offer</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We believe that the best work happens when people feel valued, supported, and empowered 
                  to do their best work.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Competitive Compensation:</span>
                      <span className="text-gray-400 ml-2">Top-tier salaries and equity participation</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Flexible Work:</span>
                      <span className="text-gray-400 ml-2">Remote-first with flexible hours and unlimited PTO</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Growth Opportunities:</span>
                      <span className="text-gray-400 ml-2">Learning budget and career development support</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

      {/* Open Positions */}
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          className="mb-20"
          >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Open Positions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're looking for exceptional people to join our mission. Here are the roles we're currently hiring for:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Senior Full-Stack Engineer",
                department: "Engineering",
                location: "Remote",
                type: "Full-time",
                description: "Build the core platform that powers SaveCash's AI-driven financial automation. You'll work with cutting-edge technologies and shape the future of fintech.",
                requirements: ["5+ years full-stack experience", "React, Node.js, Python", "AI/ML experience preferred", "Fintech background a plus"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "AI/ML Engineer",
                department: "Engineering",
                location: "Remote",
                type: "Full-time",
                description: "Design and implement the AI algorithms that make SaveCash intelligent. You'll work on recommendation systems, fraud detection, and financial modeling.",
                requirements: ["3+ years ML experience", "Python, TensorFlow/PyTorch", "Financial data experience", "PhD in relevant field preferred"],
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Product Designer",
                department: "Design",
                location: "Remote",
                type: "Full-time",
                description: "Create intuitive, beautiful experiences that make complex financial concepts simple. You'll shape the visual and interaction design of our platform.",
                requirements: ["3+ years product design", "Figma, prototyping skills", "Fintech UX experience", "Portfolio required"],
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Growth Marketing Manager",
                department: "Marketing",
                location: "Remote",
                type: "Full-time",
                description: "Drive user acquisition and growth through creative marketing strategies. You'll help us reach millions of people who need better financial tools.",
                requirements: ["3+ years growth marketing", "B2C SaaS experience", "Data-driven approach", "Creative problem solver"],
                color: "from-orange-500 to-red-500"
              },
              {
                title: "DevOps Engineer",
                department: "Engineering",
                location: "Remote",
                type: "Full-time",
                description: "Build and maintain the infrastructure that keeps SaveCash running smoothly. You'll ensure our platform is secure, scalable, and reliable.",
                requirements: ["3+ years DevOps experience", "AWS, Kubernetes, Docker", "Security-focused mindset", "Fintech compliance knowledge"],
                color: "from-indigo-500 to-purple-500"
              },
              {
                title: "Customer Success Manager",
                department: "Operations",
                location: "Remote",
                type: "Full-time",
                description: "Help our users get the most value from SaveCash. You'll be the bridge between our product and our community, ensuring exceptional user experiences.",
                requirements: ["2+ years customer success", "Fintech experience preferred", "Excellent communication", "Problem-solving mindset"],
                color: "from-pink-500 to-rose-500"
              }
            ].map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${position.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">{position.department}</div>
                      <div className="text-sm text-gray-500">{position.location}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                  <div className="text-sm text-purple-400 mb-4">{position.type}</div>
                  <p className="text-gray-300 leading-relaxed mb-6">{position.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <motion.button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Apply Now
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Join Us */}
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          className="mb-20"
          >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Join SaveCash?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just building a product — we're creating a movement that will change how people think about money.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Shape the Future",
                description: "Be part of the team that's redefining financial technology for the next generation.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Heart,
                title: "Make a Difference",
                description: "Help millions of people achieve financial freedom through intelligent automation.",
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: Zap,
                title: "Learn & Grow",
                description: "Work with cutting-edge AI technology and learn from the best minds in fintech.",
                color: "from-yellow-500 to-orange-500"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Application Process */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Hiring Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've designed our process to be transparent, respectful, and focused on finding the right fit for both sides.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Application",
                description: "Submit your resume and cover letter. Tell us why you're excited about SaveCash.",
                duration: "1-2 days"
              },
              {
                step: "02",
                title: "Initial Screen",
                description: "30-minute video call to discuss your background and our mission.",
                duration: "1 week"
              },
              {
                step: "03",
                title: "Technical Interview",
                description: "Showcase your skills with a practical challenge relevant to the role.",
                duration: "1-2 weeks"
              },
              {
                step: "04",
                title: "Team Interview",
                description: "Meet the team and learn about our culture. We'll answer all your questions.",
                duration: "1 week"
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
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{step.description}</p>
                  <div className="text-xs text-gray-500">{step.duration}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build the Future?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              If you're passionate about using technology to solve real problems and want to be part of something bigger than yourself, we'd love to hear from you.
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
                  View Open Roles
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              <motion.button
                className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn About Our Culture
              </motion.button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Questions? Reach out to us at careers@savecash.com
            </p>
          </div>
        </motion.section>

        </div>
        </div>
  );
}