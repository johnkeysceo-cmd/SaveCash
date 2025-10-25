import React from "react";
import { motion } from "motion/react";
import { Quote } from "lucide-react";
// Removed Figma reference - using standard img tag

const testimonials = [
  {
    quote: "SaveCash found over $12,000 in hidden fees I didn't know existed. Game changer.",
    author: "David Chen",
    role: "Tech Entrepreneur",
    image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDQ3NDY0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    quote: "Within the first month, I recovered $847 in unnecessary charges. The ROI is insane.",
    author: "Rachel Martinez",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1634133472760-e5c2bd346787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZW50cmVwcmVuZXVyJTIwaGVhZHNob3R8ZW58MXx8fHwxNzYwNTA3NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    quote: "The AI saved me $23,000 annually. This isn't just an app, it's a revolution.",
    author: "Marcus Johnson",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDQ3NDY0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
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
            className="text-5xl md:text-7xl mb-6 text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Real people.
          </motion.h2>
          <motion.h2 
            className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Real savings.
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
              className="group p-10 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-500"
            >
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
