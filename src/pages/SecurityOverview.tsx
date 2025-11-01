import React from "react";
import { ArrowLeft } from "lucide-react";

export default function SecurityOverview() {
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
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Security Overview</h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Learn about SaveCash's comprehensive security measures and how we protect your data.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-10 text-base text-gray-700 leading-relaxed">
          <p>See our <a href="/security" className="text-blue-600 hover:underline">Security page</a> for detailed information.</p>
        </div>
      </div>
    </div>
  );
}
