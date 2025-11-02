import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Licenses() {
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
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Licenses & Credits</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {/* Footer Tagline */}
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-lg font-semibold text-gray-900">
              SaveCash — Built in California. Operating globally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
