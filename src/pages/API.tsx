import React from "react";
import { ArrowLeft } from "lucide-react";

export default function API() {
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
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">API</h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Build powerful integrations with SaveCash using our comprehensive REST API. Access our platform's capabilities programmatically and create custom solutions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-10 text-base text-gray-700 leading-relaxed">
            
            {/* 1. API Overview */}
            <section id="api-overview" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. API Overview</h2>
              <div className="space-y-4">
                <p>
                  The SaveCash API provides programmatic access to our financial automation platform, enabling developers to build custom integrations and applications.
                </p>
                <p>
                  Our API follows RESTful principles and uses JSON for request and response formats. All API requests require authentication via API keys.
                </p>
                <div className="bg-gray-50 border-l-4 border-purple-500 p-4 rounded-r-lg my-4">
                  <p className="font-bold text-black text-lg mb-2">Base URL:</p>
                  <code className="bg-gray-900 text-white px-4 py-2 rounded text-base font-bold block text-center">https://api.savecash.com/v1</code>
                </div>
          </div>
            </section>

            {/* 2. Authentication */}
            <section id="authentication" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Authentication</h2>
              <div className="space-y-4">
                <p>
                  All API requests require authentication using API keys. Include your API key in the Authorization header of each request.
                </p>
                <p>
                  <strong>Header Format:</strong> <code className="bg-gray-100 px-2 py-1 rounded text-sm">Authorization: Bearer YOUR_API_KEY</code>
                </p>
                <p>
                  API keys can be generated in your SaveCash account settings. Keep your API keys secure and never expose them in client-side code or public repositories.
            </p>
          </div>
            </section>

            {/* 3. Rate Limits */}
            <section id="rate-limits" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Rate Limits</h2>
              <div className="space-y-4">
                <p>
                  To ensure fair usage and system stability, API requests are subject to rate limits.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><strong>Free Tier:</strong> 100 requests per minute</li>
                  <li><strong>Premium Tier:</strong> 500 requests per minute</li>
                  <li><strong>Enterprise Tier:</strong> Custom rate limits based on agreement</li>
                </ul>
                <p>
                  Rate limit information is included in response headers: <code className="bg-gray-100 px-2 py-1 rounded text-sm">X-RateLimit-Limit</code>, <code className="bg-gray-100 px-2 py-1 rounded text-sm">X-RateLimit-Remaining</code>, and <code className="bg-gray-100 px-2 py-1 rounded text-sm">X-RateLimit-Reset</code>.
                </p>
              </div>
            </section>

            {/* 4. API Endpoints */}
            <section id="endpoints" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. API Endpoints</h2>
              <div className="space-y-4">
                <p>
                  Our API provides endpoints for accessing accounts, transactions, insights, and more.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><strong>Accounts:</strong> <code className="bg-gray-100 px-2 py-1 rounded text-sm">GET /accounts</code> - List all connected accounts</li>
                  <li><strong>Transactions:</strong> <code className="bg-gray-100 px-2 py-1 rounded text-sm">GET /transactions</code> - Retrieve transaction history</li>
                  <li><strong>Insights:</strong> <code className="bg-gray-100 px-2 py-1 rounded text-sm">GET /insights</code> - Get AI-generated financial insights</li>
                  <li><strong>Savings:</strong> <code className="bg-gray-100 px-2 py-1 rounded text-sm">GET /savings</code> - Access savings opportunities</li>
                  <li><strong>Goals:</strong> <code className="bg-gray-100 px-2 py-1 rounded text-sm">GET /goals</code> - Manage financial goals</li>
                </ul>
              </div>
            </section>

            {/* 5. Webhooks */}
            <section id="webhooks" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Webhooks</h2>
              <div className="space-y-4">
                <p>
                  Webhooks allow you to receive real-time notifications when events occur in your SaveCash account.
                </p>
                <p>
                  Supported webhook events include new transactions, savings opportunities detected, goal milestones reached, and account updates.
                </p>
                <p>
                  Configure webhooks in your account settings by providing a valid callback URL. We will send POST requests to your endpoint when events occur.
            </p>
          </div>
            </section>

            {/* 6. Documentation & Support */}
            <section id="docs-support" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Documentation & Support</h2>
              <div className="space-y-4">
                <p>
                  Full API documentation with code examples, request/response schemas, and error codes is available in our developer portal.
                </p>
                <p>
                  <strong>Developer Portal:</strong> <a href="https://developers.savecash.com" className="text-blue-600 hover:underline">https://developers.savecash.com</a>
                </p>
                <p>
                  <strong>API Support:</strong> <a href="mailto:api@savecash.com" className="text-blue-600 hover:underline">api@savecash.com</a>
            </p>
          </div>
            </section>

        </div>
      </div>
    </div>
  );
}
