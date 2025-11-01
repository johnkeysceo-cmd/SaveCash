import React from "react";
import { ArrowLeft, TrendingUp, DollarSign, Users, BarChart3, Sparkles } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Small Business Potential: $12,000 Annual Savings",
      company: "Tech Startup (50 employees) — Projected",
      savings: "$12,000/year",
      category: "Business",
      description: "Based on our analysis, a growing tech startup could use SaveCash to identify and eliminate redundant subscriptions, optimize vendor contracts, and automate savings. Our models project over $1,000 in potential monthly savings across multiple categories.",
      results: [
        "Potential subscription cost reduction up to 40%",
        "Vendor contract optimization could save $6,000/year",
        "Automated savings transfers could increase emergency fund by 25%"
      ]
    },
    {
      title: "Family Potential: $800 Monthly Expense Reduction",
      company: "Family of 4 — Projected Scenario",
      savings: "$800/month",
      category: "Personal",
      description: "Our AI monitoring could help a family identify spending patterns and automate savings. The platform is designed to help cut unnecessary expenses and build emergency funds through intelligent automation.",
      results: [
        "Potential elimination of unused subscriptions saving $150/month",
        "Insurance policy optimization could save $200/month",
        "Automated savings could help achieve goals faster"
      ]
    },
    {
      title: "Enterprise Potential: 18% Operational Cost Reduction",
      company: "Mid-Size Corporation (500 employees) — Projected",
      savings: "$450,000/year",
      category: "Enterprise",
      description: "A mid-size corporation implementing SaveCash across all departments could optimize financial operations. Our platform is designed to provide comprehensive insights and automated cost-saving recommendations.",
      results: [
        "Potential identification of $450K in annual savings opportunities",
        "Streamlined vendor management processes",
        "Improved financial visibility across all departments"
      ]
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
            <BarChart3 className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">Case Studies</h1>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-700 font-semibold">Projected Results — Pre-Launch</span>
          </div>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Projected scenarios showing the potential impact SaveCash could have for businesses and individuals. These estimates are based on our analysis and simulations — real results will be documented after launch.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          
          {/* Stats Summary */}
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-8">
            <p className="text-sm text-purple-700 font-semibold mb-2">Projected Metrics</p>
            <p className="text-sm text-gray-700">
              The following metrics are projections based on our analysis and simulations. Actual results will be documented after launch.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6 text-center opacity-90">
              <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">$2M+</div>
              <div className="text-sm text-gray-600">Projected Savings Potential</div>
              <div className="text-xs text-gray-500 mt-1 italic">Based on simulations</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 border border-blue-200 rounded-lg p-6 text-center opacity-90">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">5,000+</div>
              <div className="text-sm text-gray-600">Waitlist Signups</div>
              <div className="text-xs text-gray-500 mt-1 italic">Growing daily</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-yellow-50 border border-green-200 rounded-lg p-6 text-center opacity-90">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">32%</div>
              <div className="text-sm text-gray-600">Projected Average Savings</div>
              <div className="text-xs text-gray-500 mt-1 italic">Based on analysis</div>
            </div>
          </div>

          {/* Case Studies */}
          {caseStudies.map((study, index) => (
            <section key={index} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow bg-white">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
                      {study.category}
                    </div>
                    <span className="text-xs text-gray-500 italic">Projected Scenario</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">{study.title}</h2>
                  <p className="text-base text-gray-600">{study.company}</p>
                </div>
                <div className="text-right ml-4">
                  <div className="text-2xl font-bold text-purple-600 mb-1">{study.savings}</div>
                  <div className="text-sm text-gray-600">Potential Savings</div>
                  <div className="text-xs text-gray-500 italic">Projected</div>
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6">
                <p className="text-sm text-blue-800 font-medium mb-1">📊 Projection Based on Analysis</p>
                <p className="text-sm text-blue-700">
                  This scenario is based on our financial modeling and analysis. Actual results may vary and will be documented post-launch.
                </p>
              </div>
              
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                {study.description}
              </p>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Potential Outcomes:</h3>
                <ul className="space-y-2">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-base text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}

          {/* CTA */}
          <section className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-purple-700 font-semibold">Pre-Launch — Join Early</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Achieve Similar Results?</h2>
            <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
              Join thousands on our waitlist who are preparing to optimize their finances and achieve their savings goals with SaveCash. Be among the first to experience these projected benefits when we launch.
            </p>
            <a
              href="/#signup"
              className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
            >
              Join the Waitlist
            </a>
            <p className="mt-4 text-sm text-gray-600">
              Early access will be granted to waitlist members. Launch coming soon.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

