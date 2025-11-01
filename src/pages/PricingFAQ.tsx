import React from "react";
import { ArrowLeft, HelpCircle, Sparkles } from "lucide-react";

export default function PricingFAQ() {
  const faqs = [
    {
      question: "When will pricing be announced?",
      answer: "Final pricing will be announced before our public launch. We're currently refining our pricing structure to ensure it aligns with our value-based philosophy and provides fair, transparent options for all clients."
    },
    {
      question: "What happens to early adopters?",
      answer: "Early adopters and beta partners receive exclusive access to all premium features at no cost during the trial period. We're committed to rewarding those who join us first with special early access benefits."
    },
    {
      question: "Will there be a free tier?",
      answer: "Yes, we're planning to offer a free tier that provides basic AI transaction monitoring and core features. This tier allows individuals to experience SaveCash's capabilities before committing to paid plans."
    },
    {
      question: "How does performance-based pricing work?",
      answer: "We're designing pricing models that align with the value and savings you receive. This means pricing that scales with outcomes rather than simply charging a flat fee regardless of results. Final details will be announced before launch."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. We're planning to offer flexible cancellation with no long-term contracts required. You'll be able to cancel your subscription at any time without penalties or hidden fees."
    },
    {
      question: "Are there discounts for annual subscriptions?",
      answer: "We're evaluating annual billing options that could provide savings compared to monthly subscriptions. Final discount structures will be announced with our pricing release."
    },
    {
      question: "What payment methods will be accepted?",
      answer: "We're planning to accept all major credit cards and debit cards. Enterprise clients may have additional payment options available through custom agreements."
    },
    {
      question: "Is there a refund policy?",
      answer: "We're designing refund policies that protect clients while ensuring fairness. Details about money-back guarantees and refund terms will be finalized before launch and clearly communicated."
    },
    {
      question: "How does enterprise pricing work?",
      answer: "Enterprise pricing will be customized based on your organization's size, requirements, and expected usage. Enterprise clients receive dedicated support, custom integrations, and tailored pricing agreements. Contact us for more information."
    },
    {
      question: "Will pricing change after launch?",
      answer: "We're committed to transparent pricing. Any pricing changes will be communicated well in advance, and existing clients will typically be grandfathered into their current pricing for a reasonable period."
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
          
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">Pricing FAQ</h1>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-700 font-semibold">Pre-Launch — Pricing Details Finalizing</span>
          </div>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Common questions about SaveCash pricing, billing, and payment options.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h2>
              <p className="text-base text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
          
          {/* Still Have Questions */}
          <section className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-base text-gray-700 mb-6">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Email:</p>
                <a href="mailto:privacy.savecash@gmail.com" className="text-purple-600 hover:underline">
                  privacy.savecash@gmail.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Phone:</p>
                <a href="tel:+16618123265" className="text-purple-600 hover:underline">
                  (661) 812-3265
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

