import React from "react";
import { ArrowLeft, Check, Sparkles, Zap, BarChart3, Building2, Shield, Users, Headphones, Settings, FileText, Gift, ArrowRight } from "lucide-react";

export default function PlansFeatures() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="mb-6">
            <a 
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Plans & Features
          </h1>
          
          <p className="text-2xl text-gray-700 mb-4 font-light">
            Automation that Pays for Itself
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-700 font-semibold">Pre-Launch — Founder Pricing Available</span>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            Every plan unlocks the same core promise—<strong className="text-gray-900">spend less, see more, and move faster</strong>—scaled precisely to your business size.
            No tricks, no asterisks. Just technology that works the way finance should.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-20 text-base text-gray-700 leading-relaxed">
          
          {/* At a Glance Table */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">At a Glance</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                    <th className="border border-gray-300 p-6 text-left font-bold text-lg">Plan</th>
                    <th className="border border-gray-300 p-6 text-left font-bold text-lg">Monthly Price</th>
                    <th className="border border-gray-300 p-6 text-left font-bold text-lg">Ideal For</th>
                    <th className="border border-gray-300 p-6 text-left font-bold text-lg">Core Features</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-6 font-bold text-gray-900 text-lg">SaveCash Starter</td>
                    <td className="border border-gray-300 p-6">
                      <span className="text-2xl font-bold text-purple-600">$30</span>
                      <span className="text-gray-600 text-sm"> / mo</span>
                    </td>
                    <td className="border border-gray-300 p-6 text-gray-700">Freelancers & small teams discovering hidden savings</td>
                    <td className="border border-gray-300 p-6 text-gray-700 text-sm">AI receipt analysis • Smart alerts • Basic dashboard • Up to 3 connected accounts</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 p-6 font-bold text-gray-900 text-lg">SaveCash Professional</td>
                    <td className="border border-gray-300 p-6">
                      <span className="text-2xl font-bold text-blue-600">$99</span>
                      <span className="text-gray-600 text-sm"> / mo</span>
                    </td>
                    <td className="border border-gray-300 p-6 text-gray-700">Growing companies optimizing multiple budgets</td>
                    <td className="border border-gray-300 p-6 text-gray-700 text-sm">Advanced analytics • Predictive insights • Unlimited accounts • Priority support</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-6 font-bold text-gray-900 text-lg">SaveCash Enterprise</td>
                    <td className="border border-gray-300 p-6">
                      <span className="text-2xl font-bold text-green-600">$299</span>
                      <span className="text-gray-600 text-sm"> / mo + / Custom</span>
                    </td>
                    <td className="border border-gray-300 p-6 text-gray-700">Large organizations & finance departments</td>
                    <td className="border border-gray-300 p-6 text-gray-700 text-sm">Dedicated analyst • Custom APIs • Department-level automation • 24/7 support</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SaveCash Starter */}
          <section className="border-l-4 border-purple-500 pl-8">
            <div className="flex items-center gap-4 mb-6">
              <Zap className="w-10 h-10 text-purple-600" />
              <h2 className="text-4xl font-bold text-gray-900">SaveCash Starter</h2>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Designed for individuals and early-stage teams who want automation without complexity.
              Think of it as your personal finance co-pilot—watching every receipt, every vendor, every charge.
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Includes:</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">AI-powered receipt scanning & categorization</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">Automated pricing-error detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">Instant email & in-app alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">Savings timeline & progress tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">Up to 3 connected accounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">30-day complimentary trial</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <p className="text-base text-gray-900 font-semibold">
                <strong>Perfect for:</strong> freelancers, consultants, and startups ready to control their spending from day one.
              </p>
            </div>
          </section>

          {/* SaveCash Professional */}
          <section className="border-l-4 border-blue-500 pl-8">
            <div className="flex items-center gap-4 mb-6">
              <BarChart3 className="w-10 h-10 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">SaveCash Professional</h2>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              For fast-moving businesses that need deeper intelligence.
              Professional takes everything in Starter and layers in forecasting, advanced analytics, and proactive recommendations—your financial autopilot.
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Includes:</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">Unlimited connected accounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">Predictive insights based on historical patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">Vendor optimization recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">Shared workspaces for finance teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">Priority chat & email support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">Early access to beta features</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-base text-gray-900 font-semibold">
                <strong>Ideal for:</strong> small-to-mid organizations ready to scale without losing control of their spend.
              </p>
            </div>
          </section>

          {/* SaveCash Enterprise */}
          <section className="border-l-4 border-green-500 pl-8">
            <div className="flex items-center gap-4 mb-6">
              <Building2 className="w-10 h-10 text-green-600" />
              <h2 className="text-4xl font-bold text-gray-900">SaveCash Enterprise</h2>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Built for large-scale operations that demand full customization, compliance, and dedicated partnership.
              Enterprise connects directly into your existing systems and scales across departments.
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Includes:</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">Dedicated financial analyst & account manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">Custom API integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">Advanced permissions & role-based dashboards</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">Enterprise-grade encryption & compliance monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">SLA-backed 24/7 support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">On-premise or hybrid deployment options</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-base text-gray-900 font-semibold">
                <strong>Ideal for:</strong> enterprises, financial institutions, and global organizations that treat efficiency as strategy.
              </p>
            </div>
          </section>

          {/* Core Technology */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Core Technology</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-4 text-left font-bold text-gray-900">Capability</th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-gray-900">All Plans</th>
                    <th className="border border-gray-300 p-4 text-left font-bold text-gray-900">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Real-time Expense Monitoring</td>
                    <td className="border border-gray-300 p-4 text-center"><Check className="w-6 h-6 text-green-600 mx-auto" /></td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">Tracks every transaction as it happens</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">AI Savings Engine</td>
                    <td className="border border-gray-300 p-4 text-center"><Check className="w-6 h-6 text-green-600 mx-auto" /></td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">Detects overspending & suggests optimizations</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Predictive Analytics</td>
                    <td className="border border-gray-300 p-4 text-center text-gray-600">Pro / Enterprise</td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">Forecasts spend & potential savings</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Multi-User Workspaces</td>
                    <td className="border border-gray-300 p-4 text-center text-gray-600">Pro / Enterprise</td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">Collaborate across teams</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">API Access</td>
                    <td className="border border-gray-300 p-4 text-center text-gray-600">Enterprise</td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">Integrate with ERP / accounting software</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Data Encryption</td>
                    <td className="border border-gray-300 p-4 text-center"><Check className="w-6 h-6 text-green-600 mx-auto" /></td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">AES-256 enterprise standard</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Custom Reports</td>
                    <td className="border border-gray-300 p-4 text-center text-gray-600">Pro / Enterprise</td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">Tailored analytics exports</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Add-Ons & Enhancements */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Add-Ons & Enhancements</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Choose from optional modules to tailor SaveCash even further.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-4 text-left font-bold text-gray-900">Add-On</th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-gray-900">Monthly Fee</th>
                    <th className="border border-gray-300 p-4 text-left font-bold text-gray-900">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Dedicated Analyst</td>
                    <td className="border border-gray-300 p-4 text-center"><span className="text-lg font-bold text-purple-600">$199</span> / mo</td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">A financial expert monitors anomalies & advises optimizations.</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Custom Integrations</td>
                    <td className="border border-gray-300 p-4 text-center"><span className="text-lg font-bold text-purple-600">From $49</span> / mo</td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">Connect SaveCash with CRM, billing, or ERP tools.</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Priority 24/7 Support</td>
                    <td className="border border-gray-300 p-4 text-center"><span className="text-lg font-bold text-purple-600">$29</span> / mo</td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">Direct chat line to senior support engineers.</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Advanced Reporting Suite</td>
                    <td className="border border-gray-300 p-4 text-center"><span className="text-lg font-bold text-purple-600">$59</span> / mo</td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">Deep-dive visualizations and exportable KPIs.</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Beta Feature Access</td>
                    <td className="border border-gray-300 p-4 text-center"><span className="text-lg font-bold text-green-600">Free</span> (Invite-Only)</td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">Early access to experimental automation tools.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Scales with You */}
          <section className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Scales with You</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Upgrade or downgrade instantly—no downtime, no data loss.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              SaveCash grows with your business and evolves through constant AI learning.
            </p>
            <p className="text-lg text-gray-900 font-semibold mt-6">
              Your plan is more than a subscription; it's a relationship built on measurable efficiency.
            </p>
          </section>

          {/* Get Started CTA */}
          <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Get Started</h2>
            <blockquote className="text-xl mb-8 italic leading-relaxed">
              Join the Waitlist to lock in founder-tier pricing and receive 30 days free once SaveCash launches.
            </blockquote>
            <a
              href="/#signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Join Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </section>

          {/* Footer Tagline */}
          <div className="text-center pt-12 border-t border-gray-200">
            <p className="text-2xl font-bold text-gray-900">
              SaveCash — Because every dollar should work harder for you.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
