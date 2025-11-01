import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Blog() {
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
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Blog</h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            The SaveCash Blog shares insights at the intersection of AI, finance, and user experience. Expect deep dives into automation, product updates, and original research that shapes how money moves in the digital era.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-10 text-base text-gray-700 leading-relaxed">
            
            {/* Blog Categories */}
            <section id="categories" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Blog Categories</h2>
              <div className="space-y-4">
                <p>
                  Explore our blog content organized by topic:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><strong>AI & Automation:</strong> Learn how artificial intelligence is transforming personal finance</li>
                  <li><strong>Financial Tips:</strong> Practical advice for saving money and building wealth</li>
                  <li><strong>Product Updates:</strong> Latest features, improvements, and announcements</li>
                  <li><strong>Case Studies:</strong> Real stories from SaveCash users</li>
                  <li><strong>Market Insights:</strong> Analysis of financial trends and opportunities</li>
                  <li><strong>Security & Privacy:</strong> Updates on security best practices and data protection</li>
                </ul>
              </div>
            </section>

            {/* Featured Posts */}
            <section id="featured" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Featured Posts</h2>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">How AI is Revolutionizing Personal Finance</h3>
                  <p className="text-sm text-gray-600 mb-3">Published: January 15, 2025</p>
                  <p className="text-base text-gray-700">
                    Discover how artificial intelligence is changing the way people manage their money, from automated savings to predictive financial insights.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">10 Hidden Fees Banks Don't Want You to Know About</h3>
                  <p className="text-sm text-gray-600 mb-3">Published: January 10, 2025</p>
                  <p className="text-base text-gray-700">
                    Learn about common bank fees that quietly drain your account and how SaveCash helps you identify and eliminate them automatically.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">The Future of Financial Automation</h3>
                  <p className="text-sm text-gray-600 mb-3">Published: January 5, 2025</p>
                  <p className="text-base text-gray-700">
                    Explore the emerging trends in financial technology and how automation is making money management effortless for millions.
                  </p>
                </div>
              </div>
            </section>

            {/* Newsletter */}
            <section id="newsletter" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
              <div className="space-y-4">
                <p>
                  Get the latest articles, tips, and product updates delivered to your inbox.
                </p>
                <p>
                  Email: <a href="mailto:blog@savecash.com" className="text-blue-600 hover:underline">blog@savecash.com</a>
                </p>
              </div>
            </section>

        </div>
      </div>
    </div>
  );
}
