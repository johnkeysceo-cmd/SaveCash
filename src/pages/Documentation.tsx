import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Documentation() {
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
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Documentation</h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Comprehensive documentation for SaveCash. Learn how to use our platform, integrate with our API, and get the most out of our features.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-10 text-base text-gray-700 leading-relaxed">
            
            {/* 1. Getting Started */}
            <section id="getting-started" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Getting Started</h2>
              <div className="space-y-4">
                <p>
                  New to SaveCash? Start here to learn the basics and get up and running quickly.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><a href="#account-setup" className="text-blue-600 hover:underline">Account Setup</a></li>
                  <li><a href="#connecting-accounts" className="text-blue-600 hover:underline">Connecting Your First Account</a></li>
                  <li><a href="#understanding-dashboard" className="text-blue-600 hover:underline">Understanding the Dashboard</a></li>
                  <li><a href="#first-savings" className="text-blue-600 hover:underline">Finding Your First Savings Opportunity</a></li>
                </ul>
              </div>
            </section>

            {/* 2. User Guide */}
            <section id="user-guide" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. User Guide</h2>
              <div className="space-y-4">
                <p>
                  Detailed guides for using all SaveCash features and capabilities.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><a href="#ai-monitoring" className="text-blue-600 hover:underline">Using AI Monitoring</a></li>
                  <li><a href="#setting-goals" className="text-blue-600 hover:underline">Setting Financial Goals</a></li>
                  <li><a href="#automated-savings" className="text-blue-600 hover:underline">Automated Savings Features</a></li>
                  <li><a href="#bill-management" className="text-blue-600 hover:underline">Bill Management</a></li>
                  <li><a href="#reports" className="text-blue-600 hover:underline">Financial Reports</a></li>
                </ul>
              </div>
            </section>

            {/* 3. API Documentation */}
            <section id="api-docs" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. API Documentation</h2>
              <div className="space-y-4">
                <p>
                  Complete reference for integrating with SaveCash programmatically.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><a href="/api#authentication" className="text-blue-600 hover:underline">Authentication</a></li>
                  <li><a href="/api#endpoints" className="text-blue-600 hover:underline">API Endpoints</a></li>
                  <li><a href="/api#webhooks" className="text-blue-600 hover:underline">Webhooks</a></li>
                  <li><a href="/api#rate-limits" className="text-blue-600 hover:underline">Rate Limits</a></li>
                  <li><a href="/api#error-handling" className="text-blue-600 hover:underline">Error Handling</a></li>
                </ul>
                <p>
                  <strong>Full API Docs:</strong> <a href="/api" className="text-blue-600 hover:underline">View API Documentation</a>
                </p>
              </div>
            </section>

            {/* 4. Integrations */}
            <section id="integrations-docs" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Integrations</h2>
              <div className="space-y-4">
                <p>
                  Learn how to connect SaveCash with your favorite financial services and tools.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><a href="/integrations#banks" className="text-blue-600 hover:underline">Bank Connections</a></li>
                  <li><a href="/integrations#accounting" className="text-blue-600 hover:underline">Accounting Software</a></li>
                  <li><a href="/integrations#investments" className="text-blue-600 hover:underline">Investment Platforms</a></li>
                  <li><a href="/integrations#business" className="text-blue-600 hover:underline">Business Tools</a></li>
                </ul>
                <p>
                  <strong>Integration Guide:</strong> <a href="/integrations" className="text-blue-600 hover:underline">View Integration Options</a>
                </p>
              </div>
            </section>

            {/* 5. Troubleshooting */}
            <section id="troubleshooting" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Troubleshooting</h2>
              <div className="space-y-4">
                <p>
                  Common issues and solutions to help you resolve problems quickly.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li>Account connection issues</li>
                  <li>Transaction sync problems</li>
                  <li>Savings detection not working</li>
                  <li>Mobile app troubleshooting</li>
                  <li>Payment and billing questions</li>
                </ul>
              </div>
            </section>

            {/* 6. FAQ */}
            <section id="faq-docs" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Frequently Asked Questions</h2>
              <div className="space-y-4">
                <p>
                  Quick answers to the most common questions about SaveCash.
                </p>
                <p>
                  <strong>Full FAQ:</strong> <a href="/faq" className="text-blue-600 hover:underline">View FAQ Page</a>
                </p>
              </div>
            </section>

            {/* 7. Support */}
            <section id="support-docs" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Need More Help?</h2>
              <div className="space-y-4">
                <p>
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <p>
                  <strong>Support Email:</strong> <a href="mailto:support@savecash.com" className="text-blue-600 hover:underline">support@savecash.com</a>
                </p>
                <p>
                  <strong>Help Center:</strong> <a href="/help" className="text-blue-600 hover:underline">Visit Help Center</a>
                </p>
              </div>
            </section>

        </div>
      </div>
    </div>
  );
}
