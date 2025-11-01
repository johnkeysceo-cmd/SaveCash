import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Accessibility() {
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
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Accessibility</h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            SaveCash is committed to ensuring digital accessibility for all users, including those with disabilities.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-10 text-base text-gray-700 leading-relaxed">
            
          {/* Accessibility Features */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accessibility Features</h2>
            <p className="mb-4">
              We implement comprehensive accessibility features to ensure everyone can use our platform.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Visual Accessibility</h3>
                <p className="mb-2">High contrast mode, screen reader compatibility, and clear typography</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>High contrast themes</li>
                  <li>Screen reader support</li>
                  <li>Clear font sizes</li>
                  <li>Color-blind friendly</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Motor Accessibility</h3>
                <p className="mb-2">Keyboard navigation and alternative input methods</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Full keyboard navigation</li>
                  <li>Large click targets</li>
                  <li>Voice commands</li>
                  <li>Gesture alternatives</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Audio Accessibility</h3>
                <p className="mb-2">Audio alternatives and visual indicators</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Audio descriptions</li>
                  <li>Visual alerts</li>
                  <li>Subtitles available</li>
                  <li>Volume controls</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cognitive Accessibility</h3>
                <p className="mb-2">Clear navigation and simplified interfaces</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Simple language</li>
                  <li>Clear instructions</li>
                  <li>Consistent layout</li>
                  <li>Error prevention</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Accessibility Standards */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accessibility Standards</h2>
            <p className="mb-4">
              We meet and exceed international accessibility standards.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">WCAG 2.1 AA Compliance</h3>
                <p>Meeting international accessibility standards</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Screen Reader Support</h3>
                <p>Compatible with all major screen readers</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Keyboard Navigation</h3>
                <p>Full functionality available via keyboard</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Color Contrast</h3>
                <p>High contrast ratios for better visibility</p>
              </div>
            </div>
          </section>

          {/* Accessibility Feedback */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accessibility Feedback</h2>
            <p className="mb-4">
              We continuously improve our accessibility. Your feedback helps us serve everyone better.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Report Accessibility Issues</h3>
                <p>If you encounter any accessibility barriers, please let us know immediately.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessibility Testing</h3>
                <p>We regularly test with users who have disabilities to ensure our platform works for everyone.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Improvement</h3>
                <p>We're committed to making our platform more accessible with each update.</p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Accessibility Support?</h2>
            <p>
              Our accessibility team is here to help ensure you have the best possible experience. Contact us at <a href="mailto:accessibility@savecash.com" className="text-blue-600 hover:underline">accessibility@savecash.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
