import React from "react";
import { ArrowLeft, Bot, Download, Star, Code, Zap, Sparkles } from "lucide-react";

export default function FinBotsMarketplace() {
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
          
          <div className="flex items-center gap-3 mb-4">
            <Bot className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">FinBots Marketplace</h1>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-700 font-semibold">Coming Soon — Pre-Launch</span>
          </div>
          
          <p className="text-base text-gray-700 leading-relaxed">
            The future of financial automation. Discover and integrate intelligent AI financial agents (FinBots) that will automate your financial workflows and maximize savings like never before.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">What is the FinBots Marketplace?</h2>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-6">
              <p className="mb-4 font-medium text-gray-900">
                We're building something revolutionary — and it's coming soon.
              </p>
              <p className="mb-4">
                The FinBots Marketplace will be a platform where developers create specialized AI financial agents for specific use cases, users discover and install FinBots that solve their unique problems, and creators earn revenue from downloads and subscriptions.
              </p>
              <p className="mb-0">
                FinBots are intelligent AI agents designed to handle specific financial tasks with the expertise of a professional financial advisor, the consistency of automation, and the personalization that only machine learning can provide. This isn't just a product launch — it's the next evolution of financial technology.
              </p>
            </div>
          </section>

          {/* Popular FinBots */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">FinBots Coming Soon</h2>
            <p className="text-base text-gray-600 mb-6">These powerful AI agents are in development and will be available at launch:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow opacity-75">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Expense Tracker FinBot</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-sm text-gray-500 italic">Launching Q1 2025</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Automatically categorizes every transaction, identifies spending patterns, and flags unusual expenses.
                </p>
                <button className="w-full px-4 py-2 bg-gray-400 cursor-not-allowed text-white rounded-lg" disabled>
                  Coming Soon
                </button>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow opacity-75">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Download className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Savings Optimizer FinBot</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-sm text-gray-500 italic">Launching Q1 2025</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Analyzes income patterns and automatically transfers optimal amounts to savings.
                </p>
                <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Install FinBot
                </button>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow opacity-75">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Code className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Bill Negotiator FinBot</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-sm text-gray-500 italic">Launching Q1 2025</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Monitors recurring bills and actively negotiates lower rates on your behalf.
                </p>
                <button className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                  Install FinBot
                </button>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow opacity-75">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Bot className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Investment Advisor FinBot</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-sm text-gray-500 italic">Launching Q1 2025</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Provides personalized investment recommendations and portfolio optimization.
                </p>
                <button className="w-full px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors">
                  Install FinBot
                </button>
              </div>
            </div>
          </section>

          {/* Categories */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Categories Coming at Launch</h2>
            <p className="text-base text-gray-600 mb-6">Explore specialized FinBot categories designed to solve every financial challenge:</p>
            <div className="grid md:grid-cols-3 gap-4">
              {["Savings & Budgeting", "Investment Management", "Bill Management", "Debt Payoff", "Tax Optimization", "Fraud Detection"].map((category) => (
                <div
                  key={category}
                  className="border border-gray-200 rounded-lg p-4 bg-gray-50 text-center opacity-75"
                >
                  <span className="text-base text-gray-600 font-medium">{category}</span>
                  <span className="block text-xs text-gray-500 mt-1">Coming Soon</span>
                </div>
              ))}
            </div>
          </section>

          {/* For Developers */}
          <section className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-8">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-purple-700 font-semibold">Developer Program Opening Soon</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">For Developers</h2>
            <p className="mb-6 text-gray-700">
              We're building a developer ecosystem that will allow you to create, publish, and monetize intelligent financial agents for the SaveCash community. This is your chance to be part of the next generation of financial technology.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Developer SDK (Coming Soon)</h3>
                  <p className="text-sm text-gray-700">
                    Complete toolkit for building FinBots with our comprehensive SDK and documentation. Early access available to select developers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Monetization Opportunities</h3>
                  <p className="text-sm text-gray-700">
                    Earn revenue through free, paid, or subscription-based FinBot models. Revenue share models designed to reward innovation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Early Access Program</h3>
                  <p className="text-sm text-gray-700">
                    Join our developer waitlist to be among the first to build on the FinBots platform. Limited spots available.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-purple-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-700 mb-2">
                <strong className="text-gray-900">Interested in building FinBots?</strong>
              </p>
              <p className="text-sm text-gray-600">
                The developer program will launch alongside the marketplace. We're accepting early interest applications now. Be part of the future of financial automation.
              </p>
            </div>
            <button className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
              Join Developer Waitlist (Coming Soon)
            </button>
            <p className="mt-3 text-xs text-gray-600 text-center">
              Developer program details will be announced before launch. Stay tuned for updates.
            </p>
          </section>

          {/* Early Access CTA */}
          <section className="border-2 border-purple-300 rounded-lg p-8 text-center bg-gradient-to-br from-purple-50 to-pink-50">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Be Among the First</h2>
            <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
              The FinBots Marketplace is launching soon, and early adopters will get exclusive access to the most powerful financial automation tools ever created. Join the waitlist to be notified when we launch.
            </p>
            <a
              href="/#signup"
              className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
            >
              Join the Waitlist
            </a>
          </section>

        </div>
      </div>
    </div>
  );
}

