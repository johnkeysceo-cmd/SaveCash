import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Community() {
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
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Community</h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Join the SaveCash community to connect with other users, share tips, learn best practices, and stay updated on the latest features and announcements.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-10 text-base text-gray-700 leading-relaxed">
            
            {/* 1. Community Forums */}
            <section id="forums" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Community Forums</h2>
              <div className="space-y-4">
                <p>
                  Participate in discussions, ask questions, and share your experiences with other SaveCash users.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li>General discussions about saving money and financial management</li>
                  <li>Product feedback and feature requests</li>
                  <li>Troubleshooting and technical support</li>
                  <li>Success stories and tips</li>
                  <li>AI and automation insights</li>
                </ul>
                <p>
                  <strong>Forums:</strong> <a href="https://community.savecash.com" className="text-blue-600 hover:underline">https://community.savecash.com</a>
                </p>
              </div>
            </section>

            {/* 2. Social Media */}
            <section id="social" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Social Media</h2>
              <div className="space-y-4">
                <p>
                  Follow SaveCash on social media for tips, updates, and community highlights.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li>Twitter: <a href="https://twitter.com/savecash" className="text-blue-600 hover:underline">@savecash</a></li>
                  <li>LinkedIn: <a href="https://linkedin.com/company/savecash" className="text-blue-600 hover:underline">SaveCash Company</a></li>
                  <li>Facebook: <a href="https://facebook.com/savecash" className="text-blue-600 hover:underline">SaveCash</a></li>
                  <li>Instagram: <a href="https://instagram.com/savecash" className="text-blue-600 hover:underline">@savecash</a></li>
                </ul>
              </div>
            </section>

            {/* 3. User Groups */}
            <section id="groups" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Groups</h2>
              <div className="space-y-4">
                <p>
                  Join local or online user groups to connect with SaveCash users in your area or with similar interests.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li>Local meetups and events</li>
                  <li>Industry-specific groups (small business, freelancers, etc.)</li>
                  <li>Beginner-friendly learning groups</li>
                  <li>Advanced automation workshops</li>
                </ul>
              </div>
            </section>

            {/* 4. Contribute */}
            <section id="contribute" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Contribute to the Community</h2>
              <div className="space-y-4">
                <p>
                  Help grow the SaveCash community by sharing your knowledge and experiences.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li>Write blog posts or tutorials</li>
                  <li>Answer questions in the forums</li>
                  <li>Share your success stories</li>
                  <li>Provide feedback on new features</li>
                  <li>Help translate content</li>
                </ul>
                <p>
                  <strong>Contact:</strong> <a href="mailto:community@savecash.com" className="text-blue-600 hover:underline">community@savecash.com</a>
                </p>
              </div>
            </section>

        </div>
      </div>
    </div>
  );
}
