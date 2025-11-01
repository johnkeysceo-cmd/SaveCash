import React from "react";
import { ArrowLeft, Gift, Sparkles, Star, Zap } from "lucide-react";

export default function EarlyAccessPricing() {
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
            <Gift className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">Early Access & Beta Pricing</h1>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-700 font-semibold">Limited Time — Pre-Launch</span>
          </div>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Exclusive benefits for early adopters who join SaveCash before public launch.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          
          {/* Early Access Benefits */}
          <section className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Early Access Benefits</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Premium Access During Trial</h3>
                  <p className="text-gray-700">
                    Early adopters and beta partners receive exclusive access to all premium features at no cost during the trial period. Experience the full power of SaveCash before committing to any paid plan.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Influence Product Development</h3>
                  <p className="text-gray-700">
                    Your feedback during the early access period directly shapes SaveCash's features and capabilities. Early users have a voice in determining what gets built next.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Gift className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Grandfathered Pricing</h3>
                  <p className="text-gray-700">
                    Early adopters may be eligible for special pricing that's locked in for a period after launch, protecting you from future price increases.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Beta Program */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Beta Partner Program</h2>
            <p className="mb-6">
              Select organizations can participate in our beta partner program, which provides even deeper early access benefits in exchange for feedback and collaboration.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Beta Partner Benefits Include:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Extended free access period with all premium features</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Direct access to product team for feature requests and feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Priority support and dedicated communication channels</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Exclusive beta partner pricing terms</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Recognition as an early supporter in our community</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Timeline */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Early Access Timeline</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">Now</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Waitlist Registration</h3>
                <p className="text-gray-700">
                  Join our waitlist to secure your spot for early access. Waitlist members will be notified first when early access begins.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">Coming Soon</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Closed Beta Launch</h3>
                <p className="text-gray-700">
                  Select waitlist members will be invited to participate in our closed beta, with free access to all premium features.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">Q1 2025</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Public Launch</h3>
                <p className="text-gray-700">
                  Full public launch with finalized pricing. Early adopters maintain their benefits and may qualify for grandfathered pricing.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Secure Your Early Access</h2>
            <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
              Join the waitlist now to be among the first to experience SaveCash with free premium access during the trial period.
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

