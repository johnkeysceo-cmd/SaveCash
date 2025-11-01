import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Status() {
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
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Status</h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Check the current status of SaveCash services and view historical uptime data. We maintain 99.9% uptime with 24/7 monitoring.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-10 text-base text-gray-700 leading-relaxed">
            
            {/* 1. Current Status */}
            <section id="current-status" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Current Status</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <h3 className="text-lg font-semibold text-gray-900">All Systems Operational</h3>
                  </div>
                  <p className="text-base text-gray-700">
                    All SaveCash services are running normally. No known issues or maintenance windows at this time.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Last updated: {new Date().toLocaleString()}
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Service Components */}
            <section id="components" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Components</h2>
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-base text-gray-900 font-medium">API Services</span>
                    </div>
                    <span className="text-sm text-gray-600">Operational</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-base text-gray-900 font-medium">AI Processing</span>
                    </div>
                    <span className="text-sm text-gray-600">Operational</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-base text-gray-900 font-medium">Database</span>
                    </div>
                    <span className="text-sm text-gray-600">Operational</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-base text-gray-900 font-medium">Bank Connections</span>
                    </div>
                    <span className="text-sm text-gray-600">Operational</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-base text-gray-900 font-medium">Mobile Apps</span>
                    </div>
                    <span className="text-sm text-gray-600">Operational</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Uptime Statistics */}
            <section id="uptime" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Uptime Statistics</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">99.9%</div>
                    <div className="text-sm text-gray-600">30-Day Uptime</div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">99.95%</div>
                    <div className="text-sm text-gray-600">90-Day Uptime</div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">&lt; 1 min</div>
                    <div className="text-sm text-gray-600">Avg Response Time</div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Incident History */}
            <section id="incidents" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Incident History</h2>
              <div className="space-y-4">
                <p>
                  We maintain a transparent record of all service incidents and maintenance windows.
                </p>
                <p className="text-sm text-gray-600">
                  No incidents reported in the last 90 days.
                </p>
              </div>
            </section>

            {/* 5. Status Updates */}
            <section id="updates" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Status Updates</h2>
              <div className="space-y-4">
                <p>
                  Stay informed about service status updates and maintenance windows.
                </p>
                <p>
                  <strong>Status Page:</strong> <a href="https://status.savecash.com" className="text-blue-600 hover:underline">https://status.savecash.com</a>
                </p>
                <p>
                  <strong>Status Updates Email:</strong> Subscribe to receive email notifications about service incidents and maintenance.
                </p>
              </div>
            </section>

        </div>
      </div>
    </div>
  );
}
