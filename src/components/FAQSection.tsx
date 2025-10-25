import React from "react";
import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is my data safe?",
    answer: "We use bank-level encryption and never share your data without consent. Your privacy and security are our top priorities.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, cancel your subscription or plan at any time without penalties. No hidden fees, no questions asked.",
  },
  {
    question: "How does AI find savings?",
    answer: "It analyzes spending patterns and identifies opportunities to save money through subscription optimization, fee detection, and smart recommendations.",
  },
  {
    question: "Do I need a credit card to start?",
    answer: "No, you can use free features without providing payment info. Only upgrade when you're ready.",
  },
  {
    question: "How long does setup take?",
    answer: "Most users complete setup in under 5 minutes. Simply connect your accounts and set your preferences.",
  },
  {
    question: "What makes SaveCash different?",
    answer: "Unlike other apps that just track spending, we actively prevent waste and automatically optimize your finances with AI.",
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
        className="w-full py-6 flex items-center justify-between gap-4 text-left group"
      >
        <motion.h3 
          className="text-xl text-white group-hover:text-purple-400 transition-colors duration-300"
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
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
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
          className="text-gray-400 text-lg leading-relaxed pb-6"
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
    <section className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
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
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Questions?
          </motion.h2>
          <motion.h2 
            className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight"
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
          className="bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm p-8 md:p-12"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
