import React from "react";
import { ArrowLeft, Check, TrendingUp, Shield, Zap, Sparkles, DollarSign, ArrowRight, Calculator, Users, Building2, Lock, BarChart3, Target, Infinity as InfinityIcon, Headphones, Brain } from "lucide-react";

export default function Pricing() {
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
            Pricing Overview
          </h1>
          
          <p className="text-2xl text-gray-700 mb-4 font-light">
            Intelligent Savings, Simplified
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-700 font-semibold">Pre-Launch — Founder Pricing Available</span>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            Every dollar your business spends should create value. SaveCash was built to make sure it does.
            Our pricing is simple, transparent, and built to scale with you—from individual creators to global enterprises managing millions in spend.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-20 text-base text-gray-700 leading-relaxed">
          
          {/* Section 1: Our Philosophy */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Philosophy</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Innovation isn't just about technology; it's about fairness.
              That's why SaveCash pricing is designed around three principles:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="border-l-4 border-purple-500 pl-6 py-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Clarity</h3>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">
                  No hidden fees, no complex formulas. What you see is what you pay—one transparent monthly subscription that covers everything.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  We believe financial software shouldn't require a finance degree to understand. Our pricing structure is straightforward: choose your plan, pay one monthly fee, access all features within that tier. No usage-based charges that surprise you at month-end. No premium features that require separate subscriptions. No "basic" versions that feel incomplete.
                </p>
                <p className="text-base text-gray-700 mt-4 leading-relaxed">
                  This clarity extends beyond just pricing. Every feature is clearly documented. Every capability is explained in plain language. Every limitation is stated upfront. When you invest in SaveCash, you know exactly what you're getting—and exactly what it costs.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Alignment</h3>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">
                  You pay for automation that saves you money. Our success is measured by your savings, not by how much we can charge you.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Traditional financial software charges you regardless of results. SaveCash is different. We've built our pricing to align with value delivered. The more we help you save, the more valuable our platform becomes to you—and the more it proves its worth.
                </p>
                <p className="text-base text-gray-700 mt-4 leading-relaxed">
                  This alignment creates a partnership dynamic. We're incentivized to find you savings, optimize your operations, and continuously improve our detection algorithms. Your financial success directly correlates with our platform's effectiveness, creating a virtuous cycle where both parties win.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6 py-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalability</h3>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">
                  Whether you're a freelancer or a Fortune 500, SaveCash adjusts to your needs. Upgrade or downgrade instantly as your business evolves.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Financial needs aren't static. A startup today might be an enterprise tomorrow. A seasonal business might scale up and down throughout the year. SaveCash pricing recognizes this reality with instant plan changes that happen without contracts, without penalties, and without losing access to your historical data.
                </p>
                <p className="text-base text-gray-700 mt-4 leading-relaxed">
                  Our architecture scales with you. The same platform that serves individual creators can seamlessly handle enterprise-level complexity. This means you never outgrow SaveCash—you simply adjust your plan to match your current needs, knowing you can scale up when the time comes.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-8 mt-12">
              <p className="text-lg text-gray-900 font-semibold mb-4">
                These principles aren't marketing language—they're architectural decisions embedded in how SaveCash operates.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Every feature we build, every algorithm we train, every integration we create serves these three principles. When you choose SaveCash, you're choosing a financial platform that believes technology should serve people, not the other way around. You're choosing transparency over complexity, alignment over extraction, and flexibility over lock-in.
              </p>
            </div>
          </section>

          {/* Section 2: Plans That Grow With You */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Plans That Grow With You</h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              Three tiers designed for different stages of financial complexity, from individual creators to global enterprises.
            </p>
            
            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                    <th className="border border-gray-300 p-6 text-left font-bold text-lg">Plan</th>
                    <th className="border border-gray-300 p-6 text-left font-bold text-lg">Ideal For</th>
                    <th className="border border-gray-300 p-6 text-center font-bold text-lg">Monthly Price</th>
                    <th className="border border-gray-300 p-6 text-left font-bold text-lg">Key Features</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-300 p-6 font-bold text-gray-900 text-lg">Starter</td>
                    <td className="border border-gray-300 p-6 text-gray-700">Individuals & small teams discovering hidden savings</td>
                    <td className="border border-gray-300 p-6 text-center">
                      <span className="text-2xl font-bold text-purple-600">$30</span>
                      <span className="text-gray-600 text-sm block mt-1">/ month</span>
                    </td>
                    <td className="border border-gray-300 p-6 text-gray-700">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Smart spend tracking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Automatic receipt analysis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Email alerts</span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                    <td className="border border-gray-300 p-6 font-bold text-gray-900 text-lg">Professional</td>
                    <td className="border border-gray-300 p-6 text-gray-700">Businesses optimizing larger budgets</td>
                    <td className="border border-gray-300 p-6 text-center">
                      <span className="text-2xl font-bold text-blue-600">$99</span>
                      <span className="text-gray-600 text-sm block mt-1">/ month</span>
                    </td>
                    <td className="border border-gray-300 p-6 text-gray-700">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Advanced analytics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Multi-account linking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Predictive insights</span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-300 p-6 font-bold text-gray-900 text-lg">Enterprise</td>
                    <td className="border border-gray-300 p-6 text-gray-700">Large organizations or finance teams</td>
                    <td className="border border-gray-300 p-6 text-center">
                      <span className="text-2xl font-bold text-green-600">Custom</span>
                      <span className="text-gray-600 text-sm block mt-1">$299+ / month</span>
                    </td>
                    <td className="border border-gray-300 p-6 text-gray-700">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Dedicated support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>API access</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Multi-department automation</span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-12">
              <p className="text-base text-gray-900 font-semibold mb-2">
                All plans include continuous AI upgrades and data-security protection at no extra cost.
              </p>
              <p className="text-sm text-gray-700">
                As we improve our algorithms and add new features, all users receive these enhancements automatically. Your subscription includes ongoing platform improvements, security updates, and new capabilities—no additional fees required.
              </p>
            </div>
            
            {/* Detailed Feature Breakdown */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Starter Plan</h3>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-purple-600">$30</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">Perfect for individuals and small teams getting started with automated savings discovery.</p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Real-time transaction monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Automatic receipt and invoice analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Email alerts for savings opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Basic financial dashboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Mobile app access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Standard email support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Up to 5 connected accounts</span>
                  </li>
                </ul>
              </div>
              
              <div className="border-2 border-blue-500 rounded-lg p-6 hover:shadow-lg transition-shadow relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="flex items-center gap-3 mb-4 mt-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Professional Plan</h3>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-blue-600">$99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">Advanced features for businesses serious about optimizing their financial operations.</p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Everything in Starter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Advanced analytics and reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Multi-account and multi-entity linking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Predictive financial insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Custom savings goals and targets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Priority email and chat support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Unlimited connected accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Export capabilities for accounting systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Team collaboration features</span>
                  </li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Building2 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Enterprise Plan</h3>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-green-600">Custom</span>
                  <span className="text-gray-600 text-sm block">$299+ /month</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">Enterprise-grade solutions with dedicated support and advanced integrations.</p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Everything in Professional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Full API access and webhooks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Multi-department automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Custom integrations and SSO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>24/7 phone and priority support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>SLA guarantees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Onboarding and training</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Why Subscription? */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Subscription?</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Because real savings come from consistency. SaveCash isn't a one-time audit; it's a living system that keeps learning your spending patterns and uncovering new efficiencies every month.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-l-4 border-purple-500 rounded-r-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">Predictable Cost</h3>
                </div>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">
                  One flat monthly fee—no commissions, no surprise invoices.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Traditional financial consulting charges hourly rates that can spiral unpredictably. One audit becomes three. One recommendation requires five follow-up calls. Before you know it, you've spent thousands more than anticipated.
                </p>
                <p className="text-sm text-gray-700 mt-4 leading-relaxed">
                  SaveCash eliminates this unpredictability. $30, $99, or custom enterprise pricing—that's it. No hidden costs. No per-transaction fees. No charges for additional users or accounts within your plan tier. Budget with confidence, knowing exactly what SaveCash costs each month.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 border-l-4 border-blue-500 rounded-r-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <InfinityIcon className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Unlimited Discovery</h3>
                </div>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">
                  The more you spend, the more SaveCash finds. No limits on transactions analyzed or savings identified.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Many financial tools cap the number of transactions they'll analyze or charge extra for "premium" features. SaveCash operates differently. Our subscription model means unlimited analysis within your plan tier.
                </p>
                <p className="text-sm text-gray-700 mt-4 leading-relaxed">
                  Process 100 transactions or 100,000—your monthly fee stays the same. As your business grows, SaveCash scales with you automatically. This unlimited discovery model means you're never penalized for success.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-yellow-50 border-l-4 border-green-500 rounded-r-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">Instant Scalability</h3>
                </div>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">
                  Upgrade or downgrade anytime as your business evolves. No contracts, no penalties.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Business needs change. A startup might scale rapidly. A company might restructure. Seasonal businesses might need different capabilities at different times of year.
                </p>
                <p className="text-sm text-gray-700 mt-4 leading-relaxed">
                  SaveCash pricing adapts instantly. Need more features? Upgrade in seconds. Scaling down? Downgrade without losing historical data. This flexibility means SaveCash grows with you—not ahead of you, not behind you, but precisely where you are.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-900 text-white rounded-xl p-10 mt-12">
              <h3 className="text-2xl font-bold mb-6">The Continuous Improvement Model</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Unlike one-time audits that capture a moment in time, SaveCash provides ongoing optimization. Every month, our AI learns more about your spending patterns, identifies new inefficiencies, and discovers fresh savings opportunities.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Traditional Approach</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">×</span>
                      <span>One-time audit captures only current state</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">×</span>
                      <span>Savings opportunities expire as patterns change</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">×</span>
                      <span>Requires expensive repeat engagements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">×</span>
                      <span>No learning or adaptation over time</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-lg">SaveCash Approach</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Continuous monitoring captures evolving patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>New savings discovered every month automatically</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>One subscription, unlimited value</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>AI learns and improves with every transaction</span>
                    </li>
                  </ul>
                </div>
              </div>
              </div>
            </section>

          {/* Section 4: What You Get */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">What You Get</h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              Enterprise-level financial intelligence, accessible to businesses of every size.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Zap className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Automated Detection Engine</h3>
                </div>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">
                  Instantly identifies overpricing, duplicate charges, and under-budget receipts.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  Our AI-powered detection engine processes every transaction in real-time, comparing prices across vendors, identifying duplicate charges, and flagging receipts that don't match budget expectations. This isn't a periodic review—it's continuous monitoring that catches inefficiencies the moment they occur.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Real-time price comparison across vendors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Duplicate charge detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Budget variance alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Pattern anomaly detection</span>
                  </li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Brain className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Smart Recommendations</h3>
                </div>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">
                  Actionable insights to optimize vendors and pricing.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  Beyond just detecting problems, SaveCash provides solutions. Our recommendation engine analyzes your spending patterns and suggests specific optimizations: switch to a lower-cost vendor, renegotiate a contract, or consolidate services. Each recommendation includes projected savings and implementation steps.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Vendor optimization suggestions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Contract renegotiation opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Consolidation recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Priority-ordered action items</span>
                  </li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <BarChart3 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Live Dashboard</h3>
                </div>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">
                  Visualize your financial health in real time.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  Your SaveCash dashboard provides a comprehensive view of your financial operations. See savings opportunities at a glance, track spending trends, monitor progress toward goals, and understand your financial health through intuitive visualizations.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Real-time spending analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Savings opportunity visualization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Trend analysis and forecasting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Customizable reports and exports</span>
                  </li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Secure Infrastructure</h3>
                </div>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">
                  Enterprise-grade encryption and compliance.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  Financial data requires the highest levels of security. SaveCash implements bank-grade encryption, maintains SOC 2 Type II compliance, and follows industry-leading security practices to protect your sensitive financial information.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>256-bit SSL encryption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>SOC 2 Type II certified</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>GDPR and CCPA compliant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Regular security audits</span>
                  </li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow md:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Human-in-the-Loop Support</h3>
                </div>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">
                  Access to financial analysts for deeper reviews (Pro + Enterprise).
                </p>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  While SaveCash automates the heavy lifting, sometimes you need human expertise. Professional and Enterprise plans include access to financial analysts who can provide deeper insights, review complex situations, and help you implement advanced optimization strategies.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Professional Plan Includes:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Priority email and chat support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Monthly analyst review sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Custom report generation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Enterprise Plan Includes:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Dedicated account manager</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>24/7 phone and priority support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Quarterly strategic reviews</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Onboarding and training</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Upgrade Without Friction */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Upgrade Without Friction</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Switching tiers is instant. As your savings grow, your plan grows with you—seamlessly.
            </p>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-10 mb-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white rounded-lg">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">No Contracts</h3>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Month-to-month subscriptions mean you're never locked into a plan that no longer fits your needs. Upgrade, downgrade, or cancel anytime.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white rounded-lg">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">No Onboarding Fees</h3>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    When you upgrade to a higher tier, you get immediate access to new features. No setup fees, no training costs, no hidden charges.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white rounded-lg">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">No Downtime</h3>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Plan changes happen instantly. Your data remains intact. Your monitoring continues uninterrupted. Upgrade without disruption.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Upgrade Process</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Identify Your Needs</h4>
                    <p className="text-sm text-gray-700">
                      As your business grows or your financial complexity increases, you'll naturally need more advanced features. Maybe you need multi-account linking. Perhaps you want predictive insights. Or you might require API access for custom integrations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Upgrade in Seconds</h4>
                    <p className="text-sm text-gray-700">
                      Click upgrade in your dashboard. Select your new plan. Confirm payment. That's it. Your new features are available immediately, and you're charged the prorated difference for the current billing period.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Start Using New Features</h4>
                    <p className="text-sm text-gray-700">
                      No configuration required. No data migration. No waiting period. Your new plan tier's features are instantly available, and all your existing data and configurations remain exactly as they were.
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </section>

          {/* Section 7: Frequently Asked Snapshot */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Frequently Asked Snapshot</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Can I cancel anytime?</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Yes—your data remains secure and exportable. We never lock you into long-term contracts. Cancel your subscription anytime, and you'll retain access until the end of your current billing period. All your historical data remains exportable in standard formats (CSV, JSON) for up to 90 days after cancellation.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Do you offer trials?</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Early-access users receive a 30-day complimentary trial. This includes full access to all features within your selected plan tier, giving you time to experience SaveCash's capabilities and measure its impact before committing to a subscription.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Is there a setup fee?</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  None. Integration is fully automated. SaveCash connects to your financial accounts through secure, read-only API integrations. There are no setup fees, no onboarding costs, and no hidden charges. Your first month's subscription is all you pay to get started.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Do you support nonprofits or students?</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Yes—discounted plans available upon request. We believe financial optimization shouldn't be limited by budget constraints. Nonprofit organizations and students can request discounted pricing by contacting our team. Discounts typically range from 25-50% off standard pricing.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-base text-gray-900 font-semibold mb-2">
                Have more questions?
              </p>
              <p className="text-sm text-gray-700 mb-4">
                Visit our comprehensive <a href="/pricing/faq" className="text-blue-600 hover:underline font-medium">Pricing FAQ</a> page for detailed answers to all pricing-related questions, or <a href="/pricing/quote" className="text-blue-600 hover:underline font-medium">contact our team</a> directly.
              </p>
            </div>
          </section>

          {/* Section 8: Join the Waitlist */}
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Join the Waitlist</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We're currently onboarding pre-launch users in waves.
            </p>
            
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-xl p-12 mb-12">
              <p className="text-2xl font-bold mb-6">
                Join now to secure founder-tier pricing and lifetime benefits when SaveCash officially launches.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Founder-Tier Benefits:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                      <span>Locked-in pricing that never increases</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                      <span>30-day free trial when platform launches</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                      <span>Priority access to new features</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 mt-0.5 flex-shrink-0" />
                      <span>Direct input on product development</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Early Access Timeline:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <span>Join waitlist today</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <span>Invitation to closed beta (waves starting Q1 2025)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <span>Founder pricing locked in before public launch</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold">4</span>
                      </div>
                      <span>Full platform access at launch</span>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="/#signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Join the Waitlist
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            <div className="border-2 border-gray-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Join Early?</h3>
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                Early adopters don't just get better pricing—they get to shape the future of financial automation. Your feedback directly influences SaveCash's development, ensuring the platform solves the problems that matter most to businesses like yours.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Shape the Product</h4>
                  <p className="text-sm text-gray-700">
                    Your input drives feature development and platform improvements from day one.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Better Pricing</h4>
                  <p className="text-sm text-gray-700">
                    Lock in founder-tier pricing that's guaranteed to never increase, even as the platform evolves.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Community Access</h4>
                  <p className="text-sm text-gray-700">
                    Join an exclusive community of forward-thinking businesses optimizing their financial operations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9: In Summary */}
          <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-12">
            <h2 className="text-4xl font-bold mb-8">In Summary</h2>
            <p className="text-xl mb-8 leading-relaxed">
              SaveCash was designed to make financial optimization effortless.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              With pricing that's transparent, scalable, and performance-aligned, you get enterprise-level automation for a fraction of the cost—starting at just $30 a month.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Save Smarter</div>
                <p className="text-gray-300 text-sm">AI-powered detection finds savings automatically</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Spend Confidently</div>
                <p className="text-gray-300 text-sm">Real-time insights guide better decisions</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Live Efficiently</div>
                <p className="text-gray-300 text-sm">Automation handles the complexity</p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center">
              <a
                href="/#signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Experience the automation that pays for itself
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </section>

          {/* Pricing Resources Navigation */}
          <section className="border-t border-gray-200 pt-12 mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Our Pricing Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="/pricing/plans-features" className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2">Plans & Features</h3>
                <p className="text-sm text-gray-600">Detailed breakdown of pricing tiers</p>
              </a>
              
              <a href="/pricing/roi-calculator" className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2">ROI Calculator</h3>
                <p className="text-sm text-gray-600">Calculate your projected savings</p>
              </a>
              
              <a href="/pricing/early-access" className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2">Early Access</h3>
                <p className="text-sm text-gray-600">Founder-tier benefits</p>
              </a>
              
              <a href="/pricing/quote" className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 hover:shadow-md transition-all bg-purple-50 border-purple-200">
                <h3 className="font-semibold text-gray-900 mb-2">Request Quote</h3>
                <p className="text-sm text-gray-600">Custom pricing options</p>
              </a>
              </div>
            </section>

        </div>
      </div>
    </div>
  );
}
