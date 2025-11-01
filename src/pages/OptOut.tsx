import React from "react";
import { ArrowLeft } from "lucide-react";

export default function OptOut() {
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
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Opt Out Options</h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            You have the right to opt out of certain data processing and communications. Learn about your options.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-10 text-base text-gray-700 leading-relaxed">
            
          {/* Opt-Out Options */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Opt-Out Options</h2>
            <p className="mb-4">
              Choose what communications and data processing you want to opt out of.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Communications</h3>
                <p className="mb-2">Opt out of marketing emails, newsletters, and promotional communications</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Marketing emails</li>
                  <li>Newsletter subscriptions</li>
                  <li>Promotional offers</li>
                  <li>Product updates</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Processing</h3>
                <p className="mb-2">Request to stop processing your personal data for certain purposes</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Analytics tracking</li>
                  <li>Personalization</li>
                  <li>Marketing profiling</li>
                  <li>Third-party sharing</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Account Deletion</h3>
                <p className="mb-2">Request complete deletion of your account and associated data</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Account removal</li>
                  <li>Data deletion</li>
                  <li>Profile elimination</li>
                  <li>Complete opt-out</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cookie Preferences</h3>
                <p className="mb-2">Manage your cookie settings and tracking preferences</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Analytics cookies</li>
                  <li>Marketing cookies</li>
                  <li>Preference cookies</li>
                  <li>Tracking pixels</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How to Opt Out */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Opt Out</h2>
            <p className="mb-4">
              Multiple ways to exercise your opt-out rights.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Opt-Out</h3>
                <p>Unsubscribe from emails using the link in any email</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Settings</h3>
                <p>Manage your preferences in your account settings</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Support</h3>
                <p>Contact our support team for assistance with opt-out requests</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Request</h3>
                <p>Submit a formal data deletion or processing restriction request</p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help with Opt-Out?</h2>
            <p>
              Our privacy team is here to help you exercise your opt-out rights. Contact us at <a href="mailto:privacy@savecash.com" className="text-blue-600 hover:underline">privacy@savecash.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
