import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Investors() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-6">
            <a href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Investors</h1>
          <h4 className="text-base font-normal text-gray-600 mb-8">Information for current and prospective investors</h4>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Investor Relations</h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            SaveCash is committed to transparency and providing timely information to our investors and stakeholders.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Company Overview</h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            SaveCash is an AI-powered financial optimization platform that helps individuals and businesses automatically identify and realize savings opportunities through intelligent transaction monitoring and analysis.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mission</h3>
              <p className="text-base text-gray-700">
                To democratize financial intelligence by making AI-powered savings optimization accessible to everyone, helping users save money automatically without the complexity of traditional financial management tools.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Vision</h3>
              <p className="text-base text-gray-700">
                To become the leading AI-powered financial optimization platform, trusted by millions of users worldwide to maximize their savings potential through intelligent automation.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pre-Launch Waitlist</h3>
              <p className="text-3xl font-bold text-purple-600 mb-2">500+</p>
              <p className="text-sm text-gray-600">Early access signups</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Funding Stage</h3>
              <p className="text-3xl font-bold text-purple-600 mb-2">Pre-Seed</p>
              <p className="text-sm text-gray-600">Completed September 2025</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch Timeline</h3>
              <p className="text-3xl font-bold text-purple-600 mb-2">Q1 2026</p>
              <p className="text-sm text-gray-600">Public launch planned</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Size</h3>
              <p className="text-3xl font-bold text-purple-600 mb-2">10+</p>
              <p className="text-sm text-gray-600">Engineers and specialists</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Investor Relations</h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            For investor inquiries, partnership opportunities, or additional information, please contact our investor relations team.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-base text-gray-700 mb-2">
              <strong>Email:</strong> <a href="mailto:investors@savecash.com" className="text-blue-600 hover:underline">investors@savecash.com</a>
            </p>
            <p className="text-base text-gray-700">
              <strong>Address:</strong> 600 California Street, 11th Floor, San Francisco, CA 94108, United States
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Financial Information</h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            As a privately held company, SaveCash does not publicly disclose detailed financial information. For qualified investors and potential partners, certain information may be available under appropriate confidentiality agreements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Compliance and Legal</h2>
          <div className="space-y-4">
            <p className="text-base text-gray-700 leading-relaxed">
              SaveCash is committed to maintaining the highest standards of legal and regulatory compliance. Our platform adheres to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>GDPR (General Data Protection Regulation) compliance</li>
              <li>CCPA (California Consumer Privacy Act) compliance</li>
              <li>PCI DSS standards for payment processing</li>
              <li>SOC 2 Type II certification (in progress)</li>
              <li>Bank-grade security and encryption</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}


