import React from "react";
import { motion } from "motion/react";
import { PageTemplate } from "../components/PageTemplate";
import { FloatingBlobs } from "../components/FloatingBlobs";
import { AnimatedBlob } from "../components/AnimatedBlob";
import { Users, Target, Award, Heart, Zap, Shield } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "User-Centric",
      description: "Every decision we make is guided by what's best for our users' financial success."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Your financial data is protected with bank-level security and encryption."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We're constantly pushing the boundaries of what's possible in fintech."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from product to service."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Former Goldman Sachs VP with 15+ years in fintech. Stanford MBA.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NjA0NzQ2NDJ8&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      bio: "Ex-Google engineer. Built payment systems processing $50B+ annually.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzYwNDc0NjQyfA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI",
      bio: "MIT PhD in Machine Learning. Former DeepMind researcher.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NjA0NzQ2NDJ8&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Vecteezy Video Background - Full Screen */}
      <div className="fixed inset-0 z-0">
        <video
          src="https://www.vecteezy.com/video/26659115-sphere-liquid-iridescent-background-multi-colour-gradient-multi-colour-4k-resolution"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{
            willChange: "transform",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Animated Blobs Background */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <FloatingBlobs />
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatedBlob />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-20">
        <PageTemplate 
          title="About SaveCash" 
          subtitle="We're on a mission to democratize financial success and help everyone build wealth."
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
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Our Mission</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We believe that financial success shouldn't be reserved for the wealthy or financially savvy. 
              Our AI-powered platform makes sophisticated financial strategies accessible to everyone, 
              helping people save more, invest smarter, and build lasting wealth.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-6 bg-white/[0.08] rounded-2xl border border-white/20 backdrop-blur-md"
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

      {/* Story Section */}
      <section className="py-20 px-6 bg-white/[0.05] backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 text-white">Our Story</h2>
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  SaveCash was born from a simple observation: most people are leaving thousands of dollars 
                  on the table every year through missed opportunities, hidden fees, and suboptimal financial decisions.
                </p>
                <p>
                  Our founder, Sarah Chen, spent 15 years at Goldman Sachs watching wealthy clients access 
                  sophisticated financial strategies while everyday people struggled with basic money management.
                </p>
                <p>
                  We built SaveCash to bridge that gap, using AI to democratize access to the same financial 
                  strategies that have helped the wealthy build and preserve their wealth for generations.
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

      {/* Video Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">See Our Vision in Action</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the future of financial technology through our innovative approach
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8">
              <video
                src="/about-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-auto rounded-2xl"
                style={{
                  willChange: "transform",
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
              />
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Meet Our Team</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're a team of financial experts, AI researchers, and product builders 
              united by our mission to democratize financial success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center p-6 bg-white/[0.08] rounded-2xl border border-white/20 backdrop-blur-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white/[0.05] backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">By the Numbers</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our impact speaks for itself
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Users Helped" },
              { number: "$2.4M+", label: "Total Savings Found" },
              { number: "98%", label: "User Satisfaction" },
              { number: "24/7", label: "AI Support" }
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
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        </PageTemplate>
      </div>

    </div>
  );
}
