import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Help() {
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
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Help Center</h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            The SaveCash Help Center is the fastest route to expert guidance. Each article is written, verified, and continuously updated by our product and support teams to ensure clarity, accuracy, and real-world relevance.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-10 text-base text-gray-700 leading-relaxed">
            
            {/* 1. Popular Articles */}
            <section id="popular" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Popular Articles</h2>
              <div className="space-y-4">
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><a href="/help/getting-started" className="text-blue-600 hover:underline">Getting Started with SaveCash</a></li>
                  <li><a href="/help/connecting-accounts" className="text-blue-600 hover:underline">How to Connect Your Bank Account</a></li>
                  <li><a href="/help/savings-opportunities" className="text-blue-600 hover:underline">Understanding Savings Opportunities</a></li>
                  <li><a href="/help/financial-goals" className="text-blue-600 hover:underline">Setting Up Financial Goals</a></li>
                  <li><a href="/help/mobile-app" className="text-blue-600 hover:underline">Using the Mobile App</a></li>
                </ul>
              </div>
            </section>

            {/* 2. Account Management */}
            <section id="account" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Account Management</h2>
              <div className="space-y-4">
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li>Creating and verifying your account</li>
                  <li>Updating your profile and preferences</li>
                  <li>Managing connected accounts</li>
                  <li>Changing your password</li>
                  <li>Deleting your account</li>
                </ul>
              </div>
            </section>

            {/* 3. Features & Functionality */}
            <section id="features-help" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Features & Functionality</h2>
              <div className="space-y-4">
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li>Using AI monitoring and alerts</li>
                  <li>Automated savings features</li>
                  <li>Bill management and reminders</li>
                  <li>Financial goal tracking</li>
                  <li>Reports and analytics</li>
                </ul>
              </div>
            </section>

            {/* 4. Troubleshooting */}
            <section id="troubleshooting-help" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Troubleshooting</h2>
              <div className="space-y-4">
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li>Account connection issues</li>
                  <li>Transaction sync problems</li>
                  <li>Savings not being detected</li>
                  <li>App not working correctly</li>
                  <li>Payment or billing issues</li>
                </ul>
              </div>
            </section>

            {/* 5. Security & Privacy */}
            <section id="security-help" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Security & Privacy</h2>
              <div className="space-y-4">
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li>How we protect your data</li>
                  <li>Bank-level security features</li>
                  <li>Managing your privacy settings</li>
                  <li>Two-factor authentication</li>
                  <li>Data export and deletion</li>
                </ul>
              </div>
            </section>

            {/* 6. Contact Support */}
            <section id="contact-help" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Still Need Help?</h2>
              <div className="space-y-4">
                <p>
                  Can't find the answer you're looking for? Our support team is available 24/7 to assist you.
                </p>
                <p>
                  <strong>Support Email:</strong> <a href="mailto:support@savecash.com" className="text-blue-600 hover:underline">support@savecash.com</a>
                </p>
                <p>
                  <strong>Support Page:</strong> <a href="/support" className="text-blue-600 hover:underline">Visit Support Page</a>
                </p>
              </div>
            </section>

        </div>
      </div>
    </div>
  );
}
