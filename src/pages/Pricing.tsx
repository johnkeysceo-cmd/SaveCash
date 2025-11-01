import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Pricing() {
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
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Pricing</h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Choose the plan that works best for you. All plans include our core features with varying levels of automation and support.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-10 text-base text-gray-700 leading-relaxed">
            
            {/* 1. Pricing Overview */}
            <section id="pricing-overview" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Pricing Overview</h2>
              <div className="space-y-4">
                <p>
                  SaveCash offers flexible pricing plans designed to meet the needs of individuals and businesses at every stage of their financial journey.
                </p>
                <p>
                  All plans include our core AI-powered features: 24/7 transaction monitoring, automatic savings detection, bank-grade security, and access to our AI financial assistant.
                </p>
              </div>
            </section>

            {/* 2. Free Plan */}
            <section id="free-plan" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Free Plan</h2>
              <div className="space-y-4">
                <p>
                  Perfect for getting started with SaveCash. Explore our core features and see how AI can transform your financial management.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li>Basic AI transaction monitoring</li>
                  <li>Monthly savings reports</li>
                  <li>Basic alerts and insights</li>
                  <li>Financial dashboard access</li>
                  <li>Mobile app access</li>
                  <li>Community support</li>
                </ul>
              </div>
            </section>

            {/* 3. Premium Plan */}
            <section id="premium-plan" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Premium Plan</h2>
              <div className="space-y-4">
                <p>
                  For users who want advanced automation and deeper insights to maximize their savings potential.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li>Everything in Free plan</li>
                  <li>Advanced AI monitoring and analytics</li>
                  <li>Real-time savings alerts</li>
                  <li>Automatic savings automation</li>
                  <li>Bill optimization recommendations</li>
                  <li>Goal tracking and projections</li>
                  <li>Priority customer support</li>
                  <li>Advanced financial reports</li>
                </ul>
              </div>
            </section>

            {/* 4. Enterprise Plan */}
            <section id="enterprise-plan" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Enterprise Plan</h2>
              <div className="space-y-4">
                <p>
                  Custom solutions for businesses and teams looking to provide financial wellness tools to employees or manage business finances.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li>Everything in Premium plan</li>
                  <li>Custom integrations</li>
                  <li>Dedicated account manager</li>
                  <li>Custom reporting and analytics</li>
                  <li>SLA guarantees</li>
                  <li>Team management features</li>
                  <li>White-label options</li>
                  <li>API access</li>
                </ul>
              </div>
            </section>

            {/* 5. Billing & Payment */}
            <section id="billing" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Billing & Payment</h2>
              <div className="space-y-4">
                <p>
                  We accept all major credit cards and debit cards. All plans are billed monthly or annually, with discounts available for annual subscriptions.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><strong>Monthly Billing:</strong> Pay monthly with no long-term commitment</li>
                  <li><strong>Annual Billing:</strong> Save up to 20% with annual subscriptions</li>
                  <li><strong>Cancel Anytime:</strong> No contracts, cancel your subscription at any time</li>
                  <li><strong>Refund Policy:</strong> 30-day money-back guarantee on all paid plans</li>
                </ul>
              </div>
            </section>

            {/* 6. Contact Sales */}
            <section id="contact-sales" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Sales</h2>
              <div className="space-y-4">
                <p>
                  Need a custom solution or have questions about our pricing? Our sales team is here to help.
                </p>
                <p>
                  Email: <a href="mailto:sales@savecash.com" className="text-blue-600 hover:underline">sales@savecash.com</a>
                </p>
                <p>
                  Phone: <a href="tel:+15551234567" className="text-blue-600 hover:underline">+1 (555) 123-4567</a>
                </p>
              </div>
            </section>

        </div>
      </div>
    </div>
  );
}
