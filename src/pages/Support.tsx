import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Support() {
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
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Support</h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Real people. Real responses. Our global support team operates around the clock to resolve issues and keep your automation running flawlessly.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-10 text-base text-gray-700 leading-relaxed">
            
            {/* 1. Contact Support */}
            <section id="contact-support" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Contact Support</h2>
              <div className="space-y-4">
                <p>
                  Our support team is available 24/7 to help you with any questions or issues.
                </p>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                    <p>
                      <a href="mailto:support@savecash.com" className="text-blue-600 hover:underline">support@savecash.com</a>
                    </p>
                    <p className="text-sm text-gray-600">Average response time: 2-4 hours</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                    <p>
                      Available in-app and on our website. Look for the chat widget in the bottom-right corner.
                    </p>
                    <p className="text-sm text-gray-600">Available 24/7</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
                    <p>
                      <a href="tel:+15551234567" className="text-blue-600 hover:underline">+1 (555) 123-4567</a>
                    </p>
                    <p className="text-sm text-gray-600">Monday-Friday, 9AM-6PM PST</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Support Response Times */}
            <section id="response-times" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Support Response Times</h2>
              <div className="space-y-4">
                <p>
                  We're committed to getting you the help you need as quickly as possible.
                </p>
                <div className="space-y-3">
                  <div className="border-b border-gray-200 pb-3">
                    <div className="flex justify-between items-center">
                      <span className="text-base text-gray-700">General Inquiries</span>
                      <span className="text-base font-medium text-gray-900">24 hours</span>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <div className="flex justify-between items-center">
                      <span className="text-base text-gray-700">Technical Support</span>
                      <span className="text-base font-medium text-gray-900">12 hours</span>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <div className="flex justify-between items-center">
                      <span className="text-base text-gray-700">Billing Issues</span>
                      <span className="text-base font-medium text-gray-900">4 hours</span>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <div className="flex justify-between items-center">
                      <span className="text-base text-gray-700">Account Security</span>
                      <span className="text-base font-medium text-gray-900">1 hour</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-base text-gray-700">Enterprise Support</span>
                      <span className="text-base font-medium text-gray-900">30 minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Self-Service Resources */}
            <section id="self-service" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Self-Service Resources</h2>
              <div className="space-y-4">
                <p>
                  Find answers quickly using our self-service resources:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><a href="/help" className="text-blue-600 hover:underline">Help Center</a> - Comprehensive articles and guides</li>
                  <li><a href="/faq" className="text-blue-600 hover:underline">FAQ</a> - Frequently asked questions</li>
                  <li><a href="/documentation" className="text-blue-600 hover:underline">Documentation</a> - Technical documentation</li>
                  <li><a href="/status" className="text-blue-600 hover:underline">Status Page</a> - Service status and incidents</li>
                </ul>
              </div>
            </section>

            {/* 4. Community Support */}
            <section id="community-support" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Community Support</h2>
              <div className="space-y-4">
                <p>
                  Connect with other SaveCash users and get help from the community.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><a href="/community" className="text-blue-600 hover:underline">Community Forums</a> - Ask questions and share tips</li>
                  <li>Community Discord - Real-time chat with other users</li>
                  <li>User Groups - Local and online meetups</li>
                </ul>
              </div>
            </section>

            {/* 5. Enterprise Support */}
            <section id="enterprise" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Enterprise Support</h2>
              <div className="space-y-4">
                <p>
                  Enterprise customers receive dedicated support with guaranteed response times and priority handling.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li>Dedicated account manager</li>
                  <li>24/7 phone and email support</li>
                  <li>Guaranteed 30-minute response time</li>
                  <li>Custom SLA agreements</li>
                  <li>Onboarding and training assistance</li>
                </ul>
                <p>
                  <strong>Enterprise Sales:</strong> <a href="mailto:enterprise@savecash.com" className="text-blue-600 hover:underline">enterprise@savecash.com</a>
                </p>
              </div>
            </section>

        </div>
      </div>
    </div>
  );
}
