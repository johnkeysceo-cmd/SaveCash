import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Press() {
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
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Press</h1>
          <h4 className="text-base font-normal text-gray-600 mb-8">Media and press resources for SaveCash</h4>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Media Inquiries</h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            For media inquiries, interview requests, or press materials, please contact our communications team.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-base text-gray-700 mb-2">
              <strong>Email:</strong> <a href="mailto:press@savecash.com" className="text-blue-600 hover:underline">press@savecash.com</a>
            </p>
            <p className="text-base text-gray-700">
              <strong>Phone:</strong> <a href="tel:+14155551234" className="text-blue-600 hover:underline">+1 (415) 555-1234</a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Press Kit</h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            Download our press kit for logos, images, and company information.
          </p>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Company Logo</h3>
              <p className="text-base text-gray-700 mb-2">High-resolution SaveCash logos in various formats.</p>
              <a href="#" className="text-blue-600 hover:underline">Download Logo Pack</a>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Screenshots</h3>
              <p className="text-base text-gray-700 mb-2">Latest product screenshots and feature images.</p>
              <a href="#" className="text-blue-600 hover:underline">Download Screenshots</a>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Company Fact Sheet</h3>
              <p className="text-base text-gray-700 mb-2">Company overview, key facts, and statistics.</p>
              <a href="#" className="text-blue-600 hover:underline">Download Fact Sheet</a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recent News</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SaveCash Launches AI-Powered Financial Platform</h3>
              <p className="text-sm text-gray-600 mb-2">October 2025</p>
              <p className="text-base text-gray-700">
                SaveCash announces the launch of its revolutionary AI-powered financial optimization platform, designed to help users save money automatically through intelligent transaction monitoring and savings detection.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SaveCash Secures Pre-Seed Funding Round</h3>
              <p className="text-sm text-gray-600 mb-2">September 2025</p>
              <p className="text-base text-gray-700">
                SaveCash completes its pre-seed funding round to accelerate development of AI-powered financial tools and expand its engineering team.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Company Information</h2>
          <div className="space-y-2 text-base text-gray-700">
            <p><strong>Company Name:</strong> SaveCash</p>
            <p><strong>Founded:</strong> 2025</p>
            <p><strong>Headquarters:</strong> 600 California Street, 11th Floor, San Francisco, CA 94108, United States</p>
            <p><strong>Website:</strong> <a href="https://savecashpro.vercel.app" className="text-blue-600 hover:underline">https://savecashpro.vercel.app</a></p>
            <p><strong>Contact:</strong> <a href="mailto:press@savecash.com" className="text-blue-600 hover:underline">press@savecash.com</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}


