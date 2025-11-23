import React from "react";
import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is my data safe?",
    answer: "Absolutely. SaveCash uses bank-grade encryption (256-bit SSL) and never sells your data. Your privacy is our foundation.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "100%. No contracts, no hidden fees — just savings on your terms.",
  },
  {
    question: "How does AI find savings?",
    answer: "Our system monitors your transactions 24/7, detects patterns, and identifies hidden fees or better rates — automatically.",
  },
  {
    question: "Do I need a credit card to start?",
    answer: "Nope. You can explore SaveCash for free, no strings attached.",
  },
  {
    question: "How long does setup take?",
    answer: "Under 2 minutes. Connect, verify, and let AI take over.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={item}
      className="border-b border-white/10 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 sm:py-5 md:py-6 flex items-center justify-between gap-3 sm:gap-4 text-left group"
      >
        <motion.h3 
          className="text-base sm:text-lg md:text-xl text-white group-hover:text-purple-400 transition-colors duration-300 pr-2"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {faq.question}
        </motion.h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
        </motion.div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ 
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="overflow-hidden"
      >
        <motion.p 
          className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed pb-4 sm:pb-5 md:pb-6 pr-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, delay: isOpen ? 0.1 : 0 }}
        >
          {faq.answer}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 sm:mb-6 text-white tracking-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Questions?
          </motion.h2>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-6 sm:mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Answers.
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white/[0.02] rounded-2xl sm:rounded-3xl border border-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 lg:p-12"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
