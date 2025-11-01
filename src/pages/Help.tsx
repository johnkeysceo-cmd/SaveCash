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
            The SaveCash Help Center is the fastest route to expert guidance. Each article is written and verified by our product and support teams to ensure clarity, accuracy, and real-world relevance.
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
                  <li><a href="/help/creating-account" className="text-blue-600 hover:underline">Creating and verifying your account</a></li>
                  <li><a href="/help/updating-profile" className="text-blue-600 hover:underline">Updating your profile and preferences</a></li>
                  <li><a href="/help/managing-accounts" className="text-blue-600 hover:underline">Managing connected accounts</a></li>
                  <li><a href="/help/changing-password" className="text-blue-600 hover:underline">Changing your password</a></li>
                  <li><a href="/help/deleting-account" className="text-blue-600 hover:underline">Deleting your account</a></li>
                </ul>
              </div>
            </section>

            {/* 3. Features & Functionality */}
            <section id="features-help" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Features & Functionality</h2>
              <div className="space-y-4">
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><a href="/help/ai-monitoring-alerts" className="text-blue-600 hover:underline">Using AI monitoring and alerts</a></li>
                  <li><a href="/help/automated-savings" className="text-blue-600 hover:underline">Automated savings features</a></li>
                  <li><a href="/help/bill-management" className="text-blue-600 hover:underline">Bill management and reminders</a></li>
                  <li><a href="/help/goal-tracking" className="text-blue-600 hover:underline">Financial goal tracking</a></li>
                  <li><a href="/help/reports-analytics" className="text-blue-600 hover:underline">Reports and analytics</a></li>
                </ul>
              </div>
            </section>

            {/* 4. Troubleshooting */}
            <section id="troubleshooting-help" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Troubleshooting</h2>
              <div className="space-y-4">
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><a href="/help/connection-issues" className="text-blue-600 hover:underline">Account connection issues</a></li>
                  <li><a href="/help/sync-problems" className="text-blue-600 hover:underline">Transaction sync problems</a></li>
                  <li><a href="/help/savings-not-detected" className="text-blue-600 hover:underline">Savings not being detected</a></li>
                  <li><a href="/help/app-issues" className="text-blue-600 hover:underline">App not working correctly</a></li>
                  <li><a href="/help/billing-issues" className="text-blue-600 hover:underline">Payment or billing issues</a></li>
                </ul>
              </div>
            </section>

            {/* 5. Security & Privacy */}
            <section id="security-help" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Security & Privacy</h2>
              <div className="space-y-4">
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><a href="/help/data-protection" className="text-blue-600 hover:underline">How we protect your data</a></li>
                  <li><a href="/help/bank-security" className="text-blue-600 hover:underline">Bank-level security features</a></li>
                  <li><a href="/help/privacy-settings" className="text-blue-600 hover:underline">Managing your privacy settings</a></li>
                  <li><a href="/help/two-factor-auth" className="text-blue-600 hover:underline">Two-factor authentication</a></li>
                  <li><a href="/help/data-export-deletion" className="text-blue-600 hover:underline">Data export and deletion</a></li>
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
