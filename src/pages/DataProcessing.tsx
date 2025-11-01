import React from "react";
import { ArrowLeft } from "lucide-react";

export default function DataProcessing() {
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
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Data Processing</h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Learn about how we process your personal data and your rights regarding data processing.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-10 text-base text-gray-700 leading-relaxed">
            
          {/* Processing Purposes */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Processing Purposes</h2>
            <p className="mb-4">
              We process your data for specific, legitimate purposes.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Provision</h3>
                <p className="mb-2">Processing your data to provide and improve our financial services</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Account management</li>
                  <li>Transaction processing</li>
                  <li>Service delivery</li>
                  <li>Customer support</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security & Fraud Prevention</h3>
                <p className="mb-2">Processing data to protect your account and prevent fraudulent activities</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Identity verification</li>
                  <li>Fraud detection</li>
                  <li>Security monitoring</li>
                  <li>Risk assessment</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics & Improvement</h3>
                <p className="mb-2">Processing data to analyze usage patterns and improve our services</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Usage analytics</li>
                  <li>Performance monitoring</li>
                  <li>Feature optimization</li>
                  <li>User experience</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Legal Compliance</h3>
                <p className="mb-2">Processing data to comply with legal and regulatory requirements</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Regulatory reporting</li>
                  <li>Tax compliance</li>
                  <li>Audit requirements</li>
                  <li>Legal obligations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Types of Data Processed */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Data Processed</h2>
            <p className="mb-4">
              We process different categories of personal data.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
                <p>Name, email, phone number, and identification details</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Data</h3>
                <p>Bank account details, transaction history, and financial goals</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Usage Data</h3>
                <p>How you interact with our platform and features</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Device Information</h3>
                <p>IP address, browser type, and device identifiers</p>
              </div>
            </div>
          </section>

          {/* Legal Basis for Processing */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Legal Basis for Processing</h2>
            <p className="mb-4">
              We process your data based on specific legal grounds.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contract Performance</h3>
                <p>Processing necessary to provide our services under our terms of service.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Legitimate Interest</h3>
                <p>Processing for our legitimate business interests, balanced against your rights.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Obligation</h3>
                <p>Processing required to comply with legal and regulatory requirements.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Consent</h3>
                <p>Processing based on your explicit consent, which you can withdraw at any time.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
