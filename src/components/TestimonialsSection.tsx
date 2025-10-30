import React from "react";
import { motion } from "motion/react";
import { Quote } from "lucide-react";
// Removed Figma reference - using standard img tag

const testimonials = [
  {
    quote: "It's like having a financial assistant that never sleeps.",
    author: "Sarah K.",
    role: "Early Adopter",
    savings: "$2,200",
    image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDQ3NDY0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    quote: "I found $220 in hidden charges in week one.",
    author: "Mike R.",
    role: "Beta User",
    savings: "$220",
    image: "https://images.unsplash.com/photo-1634133472760-e5c2bd346787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZW50cmVwcmVuZXVyJTIwaGVhZHNob3R8ZW58MXx8fHwxNzYwNTA3NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    quote: "I actually *feel in control* of my money now.",
    author: "Alex T.",
    role: "Power User",
    savings: "$1,500",
    image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDQ3NDY0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

// Mock "As Seen On" logos
const pressLogos = [
  { name: "TechCrunch", logo: "TC" },
  { name: "Forbes", logo: "Forbes" },
  { name: "Wired", logo: "Wired" },
  { name: "Fast Company", logo: "FC" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export function TestimonialsSection() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-7xl mb-8 text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Why people love SaveCash Pro
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group p-10 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Subtle glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-orange-500/0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                initial={false}
              />
              <Quote className="w-10 h-10 text-purple-400/40 mb-6" />
              
              <motion.p 
                className="text-lg text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                "{testimonial.quote}"
              </motion.p>
              
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <motion.p 
                    className="text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {testimonial.author}
                  </motion.p>
                  <motion.p 
                    className="text-sm text-gray-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {testimonial.role}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
