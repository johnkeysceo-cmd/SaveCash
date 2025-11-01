import React, { useState } from "react";
import { ArrowLeft, Calculator, TrendingUp, DollarSign, Sparkles } from "lucide-react";

export default function ROIValueCalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState("");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [projectedSavings, setProjectedSavings] = useState<string | null>(null);

  const calculateSavings = () => {
    const revenue = parseFloat(monthlyRevenue);
    const expenses = parseFloat(monthlyExpenses);
    
    if (!isNaN(revenue) && !isNaN(expenses) && expenses > 0) {
      // Projected 15-25% savings on operational inefficiencies
      const savingsPercent = 0.20; // 20% average
      const calculated = expenses * savingsPercent;
      setProjectedSavings(calculated.toFixed(2));
    } else {
      setProjectedSavings(null);
    }
  };

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
            <Calculator className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">ROI & Value Calculator</h1>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-700 font-semibold">Projected ROI — Pre-Launch</span>
          </div>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Understand the potential return on investment with SaveCash. Our models project savings based on typical inefficiencies found in financial operations.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          
          {/* Calculator */}
          <section className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Calculate Your Projected Savings</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Monthly Expenses / Operating Costs
                </label>
                <input
                  type="number"
                  value={monthlyExpenses}
                  onChange={(e) => {
                    setMonthlyExpenses(e.target.value);
                    calculateSavings();
                  }}
                  placeholder="Enter monthly expenses"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div className="bg-white border border-purple-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-base text-gray-700">Projected Monthly Savings</span>
                  <span className="text-3xl font-bold text-purple-600">
                    {projectedSavings ? `$${parseFloat(projectedSavings).toLocaleString()}` : "$0"}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-base text-gray-700">Projected Annual Savings</span>
                  <span className="text-2xl font-bold text-green-600">
                    {projectedSavings ? `$${(parseFloat(projectedSavings) * 12).toLocaleString()}` : "$0"}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-4 italic">
                  Based on industry analysis showing 15-25% savings on operational inefficiencies. Actual results may vary.
                </p>
              </div>
            </div>
          </section>

          {/* Value Proposition */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Understanding ROI with SaveCash</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance-Based Value</h3>
                <p className="text-base text-gray-700">
                  SaveCash pricing is designed to align with your success. We're building a model where clients pay based on measurable savings and outcomes, ensuring that your investment directly correlates with the value you receive.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Typical Savings Ranges</h3>
                <p className="text-base text-gray-700 mb-3">
                  Based on our analysis of common financial inefficiencies, typical clients could see:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><strong>Small Businesses:</strong> $500 - $2,000 monthly savings potential</li>
                  <li><strong>Mid-Market Companies:</strong> $2,000 - $10,000 monthly savings potential</li>
                  <li><strong>Enterprise Organizations:</strong> $10,000+ monthly savings potential</li>
                </ul>
                <p className="text-sm text-gray-600 italic mt-4">
                  These are projections based on industry analysis. Actual savings will vary based on individual circumstances.
                </p>
              </div>
            </div>
          </section>

          {/* Cost Breakdown */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Where Savings Come From</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <TrendingUp className="w-6 h-6 text-purple-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Subscription Optimization</h3>
                <p className="text-sm text-gray-700">
                  Identifying and eliminating redundant or underutilized subscriptions can save 10-20% on recurring costs.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <DollarSign className="w-6 h-6 text-blue-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Vendor Contract Optimization</h3>
                <p className="text-sm text-gray-700">
                  Negotiating better rates and identifying contract inefficiencies can reduce vendor costs by 15-30%.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <Calculator className="w-6 h-6 text-green-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Operational Inefficiencies</h3>
                <p className="text-sm text-gray-700">
                  Detecting hidden costs and process inefficiencies can uncover 5-15% in operational savings.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <TrendingUp className="w-6 h-6 text-orange-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Automated Savings</h3>
                <p className="text-sm text-gray-700">
                  Automated savings transfers and optimization can increase savings rates by 20-40% without manual effort.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Calculate Your ROI?</h2>
            <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
              Join our waitlist to be notified when the full ROI calculator and detailed savings analysis tools become available.
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

