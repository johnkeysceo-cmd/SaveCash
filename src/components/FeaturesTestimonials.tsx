import React, { memo } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Financial Advisor",
    content: "SaveCash Pro has revolutionized how I manage my clients' finances. The AI insights are incredibly accurate and the automation saves hours of manual work.",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Small Business Owner",
    content: "I've saved over $2,000 in the first month using SaveCash Pro's automated savings strategies. The predictive alerts have prevented several overspending incidents.",
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Freelance Designer",
    content: "The expense categorization and goal tracking features have helped me build a solid financial foundation. I can't imagine managing my finances without it.",
    avatar: "ER"
  }
];

const FeaturesTestimonials = memo(() => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their financial lives with SaveCash Pro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
});

FeaturesTestimonials.displayName = 'FeaturesTestimonials';

export default FeaturesTestimonials;
