import React from "react";
import { ArrowLeft, TrendingDown, Calculator, DollarSign, Sparkles } from "lucide-react";

export default function CostComparison() {
  const comparison = [
    {
      category: "Traditional Financial Consulting",
      annualCost: "$15,000 - $75,000",
      limitations: [
        "Hourly billing creates unpredictable costs",
        "Limited ongoing monitoring",
        "Requires manual engagement for each optimization",
        "High barrier to entry for small businesses"
      ],
      savecashAdvantage: "Continuous AI monitoring at a fraction of the cost"
    },
    {
      category: "Manual Expense Auditing",
      annualCost: "$8,000 - $30,000",
      limitations: [
        "Time-consuming manual review processes",
        "One-time audits miss ongoing inefficiencies",
        "Requires dedicated internal resources",
        "Limited scalability"
      ],
      savecashAdvantage: "Automated 24/7 monitoring with instant detection"
    },
    {
      category: "Multiple Point Solutions",
      annualCost: "$5,000 - $20,000",
      limitations: [
        "Need separate tools for budgeting, savings, bills",
        "No unified view of financial operations",
        "Integration complexity and costs",
        "Fragmented insights across platforms"
      ],
      savecashAdvantage: "Unified platform replacing multiple tools"
    },
    {
      category: "In-House Financial Team",
      annualCost: "$60,000 - $150,000+",
      limitations: [
        "Full-time salary and benefits costs",
        "Limited to business hours availability",
        "Manual processes prone to human error",
        "Single point of knowledge"
      ],
      savecashAdvantage: "AI-powered automation augmenting your team"
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">Cost Comparison</h1>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-700 font-semibold">Projected Savings — Pre-Launch</span>
          </div>
          
          <p className="text-base text-gray-700 leading-relaxed">
            See how SaveCash compares to traditional financial management approaches in terms of cost, efficiency, and value.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="space-y-12">
          
          {/* Comparison Table */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">SaveCash vs. Traditional Solutions</h2>
            <div className="space-y-8">
              {comparison.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.category}</h3>
                      <div className="inline-block px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full mb-3">
                        {item.annualCost} annually
                      </div>
                    </div>
                    <div className="ml-4 text-right">
                      <div className="text-sm text-gray-600 mb-1">SaveCash Advantage</div>
                      <div className="text-base font-semibold text-green-600">
                        <TrendingDown className="w-5 h-5 inline mr-1" />
                        Lower Cost
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Limitations:</h4>
                      <ul className="space-y-2">
                        {item.limitations.map((limitation, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-red-500 mt-1">×</span>
                            <span>{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-500 pl-4 py-3 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">SaveCash Advantage:</h4>
                      <p className="text-sm text-gray-700">{item.savecashAdvantage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Total Cost of Ownership */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Total Cost of Ownership Comparison</h2>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-8">
              <p className="mb-6 text-gray-700">
                Traditional financial management approaches often have hidden costs beyond the initial price tag: time spent managing multiple tools, missed savings opportunities, and the cost of inefficiencies that accumulate over time.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white border border-purple-200 rounded-lg p-6 text-center">
                  <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">Traditional</div>
                  <div className="text-base text-gray-600">$20K - $150K+</div>
                  <div className="text-sm text-gray-500 mt-2">Annual cost</div>
                </div>
                <div className="bg-white border border-green-200 rounded-lg p-6 text-center">
                  <TrendingDown className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">SaveCash</div>
                  <div className="text-base text-green-600 font-semibold">Projected lower</div>
                  <div className="text-sm text-gray-500 mt-2">Performance-based</div>
                </div>
                <div className="bg-white border border-blue-200 rounded-lg p-6 text-center">
                  <Calculator className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">Savings</div>
                  <div className="text-base text-blue-600 font-semibold">60-80%</div>
                  <div className="text-sm text-gray-500 mt-2">Potential reduction</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic mt-6 text-center">
                Based on projected pricing models and typical use cases. Actual savings will vary.
              </p>
            </div>
          </section>

          {/* Value Proposition */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why SaveCash Offers Better Value</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Continuous Monitoring vs. Periodic Reviews</h3>
                  <p className="text-gray-700">
                    Traditional consulting provides periodic reviews, while SaveCash offers 24/7 AI-powered monitoring that identifies savings opportunities as they arise, not just during scheduled audits.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Automation vs. Manual Processes</h3>
                  <p className="text-gray-700">
                    SaveCash automates financial optimization tasks that traditionally require manual effort, reducing the need for dedicated staff time and eliminating human error in financial management processes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Unified Platform vs. Multiple Tools</h3>
                  <p className="text-gray-700">
                    Instead of paying for separate budgeting, savings, and bill management tools, SaveCash provides a unified platform that handles all financial optimization needs in one integrated system.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Scalable Pricing vs. Fixed Costs</h3>
                  <p className="text-gray-700">
                    SaveCash pricing is designed to scale with your usage and outcomes, unlike traditional solutions with fixed costs regardless of results or utilization.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Reduce Your Costs?</h2>
            <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
              See how SaveCash can reduce your financial management costs while improving outcomes. Join the waitlist to learn more about our pricing structure.
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

