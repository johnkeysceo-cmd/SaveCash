import React from "react";
import { ArrowLeft } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "Is my data safe?",
      answer: "Absolutely. SaveCash uses bank-grade encryption (256-bit SSL) and never sells your data. Your privacy is our foundation."
    },
    {
      question: "Can I cancel anytime?",
      answer: "100%. No contracts, no hidden fees — just savings on your terms."
    },
    {
      question: "How does AI find savings?",
      answer: "Our system monitors your transactions 24/7, detects patterns, and identifies hidden fees or better rates — automatically."
    },
    {
      question: "Do I need a credit card to start?",
      answer: "Nope. You can explore SaveCash for free, no strings attached."
    },
    {
      question: "How long does setup take?",
      answer: "Under 2 minutes. Connect, verify, and let AI take over."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-6">
            <a 
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">FAQs</h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Quick, direct, and practical. The SaveCash FAQ addresses the most common questions about our technology, data, and platform behavior — explained in language anyone can understand.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h2>
              <p className="text-base text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
