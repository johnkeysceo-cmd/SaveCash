import React from "react";
import { ArrowLeft, Heart, Shield, TrendingUp, Target } from "lucide-react";

export default function PricingPhilosophy() {
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
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Pricing Philosophy</h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Our approach to pricing reflects our core values: transparency, fairness, and alignment with client success.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          
          {/* Core Principles */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Core Principles</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6 py-4">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Transparency First</h3>
                </div>
                <p>
                  We believe pricing should be clear, understandable, and free of hidden fees. Every client deserves to know exactly what they're paying for and why. Our pricing structure is designed to eliminate confusion and build trust through straightforward, honest communication.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Outcome-Based Value</h3>
                </div>
                <p>
                  Our pricing philosophy centers on value delivered, not just features provided. We're building a model where your investment in SaveCash directly correlates with the measurable savings and financial improvements you achieve. When you succeed, the platform's value is clear.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6 py-4">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Fairness and Accessibility</h3>
                </div>
                <p>
                  Financial optimization shouldn't be limited to those who can afford expensive consultants. SaveCash is designed to democratize access to intelligent financial management, with pricing that scales appropriately for individuals, small businesses, and large enterprises alike.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-6 py-4">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Performance Alignment</h3>
                </div>
                <p>
                  We're designing pricing structures that align our success with yours. When SaveCash identifies substantial savings for your organization, our pricing model ensures we're incentivized to continue delivering value rather than simply maintaining subscription revenue.
                </p>
              </div>
            </div>
          </section>

          {/* What This Means */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">What This Means for You</h2>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <p className="font-semibold text-gray-900">
                Our pricing philosophy means:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>No Surprises:</strong> Clear pricing with no hidden fees or unexpected charges</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>Value-Driven:</strong> Pricing that reflects the actual value and savings you receive</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>Scalable:</strong> Plans that grow with your needs without forcing premature upgrades</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>Fair:</strong> Transparent about what each tier includes and why</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>Flexible:</strong> Options that adapt to your business size and requirements</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Building Trust */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Building Trust Through Pricing</h2>
            <p className="mb-6">
              Trust is the foundation of any financial relationship. Our pricing philosophy is built on the principle that transparency and fairness create stronger, longer-lasting partnerships with our clients.
            </p>
            <p className="mb-6">
              We're committed to pricing that makes sense: you shouldn't pay more than the value you receive, and we shouldn't profit from your inefficiencies. Instead, our success should come from helping you eliminate those inefficiencies and achieve measurable financial improvements.
            </p>
            <p>
              This philosophy guides every decision we make about pricing, features, and service levels. It's why we're taking time to refine our pricing structure before launch — because getting it right matters more than getting it fast.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

