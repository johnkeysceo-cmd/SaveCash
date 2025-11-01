import React from "react";
import { ArrowLeft, Building2, Shield, Zap, Users, Headphones, Sparkles, Settings, Globe, BarChart3, Target, Check, ArrowRight, Mail } from "lucide-react";

export default function EnterpriseSolutions() {
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
            Enterprise & Custom Solutions
          </h1>
          
          <p className="text-2xl text-gray-700 mb-4 font-light">
            Automation That Scales With You
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-700 font-semibold">Custom Solutions — Pre-Launch</span>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            For organizations operating at scale, financial efficiency is not a luxury—it's a requirement.
            SaveCash Enterprise delivers automation, intelligence, and partnership designed to match the complexity of modern finance while maintaining the simplicity your teams need.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-20 text-base text-gray-700 leading-relaxed">
          
          {/* Section 1: Built for Scale */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Built for Scale</h2>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Every enterprise handles thousands of transactions, vendors, and cost centers.
              SaveCash maps that complexity automatically:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900 mb-1">AI-driven pattern recognition for bulk transactions.</p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Our machine learning algorithms process thousands of transactions simultaneously, identifying patterns and anomalies that would be impossible for human analysts to detect at scale. This enables real-time detection of inefficiencies across your entire organization.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900 mb-1">Vendor normalization across currencies and subsidiaries.</p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Enterprises operate globally with multiple currencies, subsidiaries, and vendor relationships. SaveCash automatically normalizes vendor names, consolidates duplicate relationships, and provides unified reporting regardless of geographic or organizational boundaries.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900 mb-1">Department-level dashboards with unified visibility.</p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Finance teams need both granular department insights and executive-level summaries. SaveCash provides role-based dashboards that show each department its specific spending patterns while maintaining a unified view for CFOs and finance leadership.
                  </p>
                </div>
              </li>
            </ul>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <p className="text-lg text-gray-900 font-semibold mb-2">
                The result: a single, living view of spend—clean, current, and controllable.
              </p>
            </div>
          </section>

          {/* Section 2: Custom Integration Framework */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Custom Integration Framework</h2>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Your systems are unique; our API respects that.
              SaveCash connects seamlessly to:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Accounting Suites</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>QuickBooks Online</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Xero</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>NetSuite</span>
                  </li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">ERP Systems</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>SAP S/4HANA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Oracle</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Workday</span>
                  </li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">CRM & Productivity</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Salesforce</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>HubSpot</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Slack</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-base text-gray-900 font-semibold mb-2">
                Our integration engineers collaborate directly with your IT teams to ensure zero workflow disruption and minimal implementation time.
              </p>
            </div>
          </section>

          {/* Section 3: Enterprise-Grade Security */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Enterprise-Grade Security</h2>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Trust is the foundation of automation.
              SaveCash implements multi-layer security that meets or exceeds enterprise standards:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                  <h3 className="text-lg font-bold text-gray-900">Encryption</h3>
                </div>
                <p className="text-sm text-gray-700">AES-256 at rest, TLS 1.3 in transit</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-bold text-gray-900">Identity</h3>
                </div>
                <p className="text-sm text-gray-700">SSO / SAML 2.0, role-based permissions</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Check className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-900">Compliance</h3>
                </div>
                <p className="text-sm text-gray-700">SOC 2 Type II and GDPR alignment</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                  <h3 className="text-lg font-bold text-gray-900">Monitoring</h3>
                </div>
                <p className="text-sm text-gray-700">Real-time anomaly detection and audit logs</p>
              </div>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <p className="text-lg text-gray-900 font-semibold">
                Security isn't an add-on—it's built into every operation.
              </p>
            </div>
          </section>

          {/* Section 4: Data Intelligence as a Service */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Data Intelligence as a Service</h2>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Beyond dashboards, SaveCash Enterprise delivers bespoke analytics:
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                    <th className="border border-gray-300 p-4 text-left font-bold">Layer</th>
                    <th className="border border-gray-300 p-4 text-left font-bold">Deliverable</th>
                    <th className="border border-gray-300 p-4 text-left font-bold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Insight</td>
                    <td className="border border-gray-300 p-4 text-gray-700">Executive reports</td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">Monthly summaries of spend trends, inefficiencies, and risk areas</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Predictive</td>
                    <td className="border border-gray-300 p-4 text-gray-700">AI forecasting</td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">Anticipates vendor fluctuations and seasonal patterns</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Advisory</td>
                    <td className="border border-gray-300 p-4 text-gray-700">Strategic sessions</td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">Quarterly reviews with financial-data specialists</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <p className="text-lg text-gray-900 font-semibold">
                You gain an always-on analytical partner—an extension of your finance team.
              </p>
            </div>
          </section>

          {/* Section 5: Dedicated Partnership */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">5</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Dedicated Partnership</h2>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Every enterprise account includes a <strong className="text-gray-900">Customer Success Lead</strong>—a real person whose role is to ensure measurable outcomes.
              That partnership includes:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-purple-600" />
                  <h3 className="text-lg font-bold text-gray-900">Personalized Onboarding</h3>
                </div>
                <p className="text-sm text-gray-700">Dedicated setup and training tailored to your organization's workflows and requirements.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-bold text-gray-900">Performance Reviews</h3>
                </div>
                <p className="text-sm text-gray-700">Scheduled check-ins to measure outcomes, optimize configurations, and plan improvements.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-900">Priority Feature Requests</h3>
                </div>
                <p className="text-sm text-gray-700">Direct input into product roadmap with fast-track consideration for enterprise needs.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Headphones className="w-6 h-6 text-orange-600" />
                  <h3 className="text-lg font-bold text-gray-900">24/7 Support Guarantees</h3>
                </div>
                <p className="text-sm text-gray-700">SLA-backed response times with dedicated channels for critical issues.</p>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-lg text-gray-900 font-semibold">
                We align our success metrics with yours.
              </p>
            </div>
          </section>

          {/* Section 6: Global Capability */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">6</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Global Capability</h2>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Operating internationally?
              SaveCash supports multi-currency reporting, tax localization, and regional data residency.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <Globe className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Multi-Currency Reporting</h3>
                <p className="text-sm text-gray-700">Unified financial views across currencies with real-time exchange rate integration.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Tax Localization</h3>
                <p className="text-sm text-gray-700">Region-specific tax rules and compliance reporting tailored to local requirements.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <Settings className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Regional Data Residency</h3>
                <p className="text-sm text-gray-700">Data storage and processing in compliance with regional data protection regulations.</p>
              </div>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <p className="text-lg text-gray-900 font-semibold">
                Our global infrastructure keeps performance consistent and compliant across markets.
              </p>
            </div>
          </section>

          {/* Section 7: Custom Pricing Model */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">7</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Custom Pricing Model</h2>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Enterprise engagements are flexible:
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                    <th className="border border-gray-300 p-4 text-left font-bold">Model</th>
                    <th className="border border-gray-300 p-4 text-left font-bold">Ideal For</th>
                    <th className="border border-gray-300 p-4 text-left font-bold">Basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Usage-Based</td>
                    <td className="border border-gray-300 p-4 text-gray-700">High-volume transaction environments</td>
                    <td className="border border-gray-300 p-4 text-gray-700">Number of records processed</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Per-Seat</td>
                    <td className="border border-gray-300 p-4 text-gray-700">Departmental rollouts</td>
                    <td className="border border-gray-300 p-4 text-gray-700">Active team members</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Flat-Rate Contract</td>
                    <td className="border border-gray-300 p-4 text-gray-700">Multi-year partnerships</td>
                    <td className="border border-gray-300 p-4 text-gray-700">Custom-negotiated scope</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <p className="text-base text-gray-900 font-semibold">
                Each model includes access to all enterprise-grade security, integrations, and support.
              </p>
            </div>
          </section>

          {/* Section 8: Innovation Partnership */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">8</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Innovation Partnership</h2>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Large clients often co-develop new capabilities with us—features shaped by real-world complexity that later benefit the entire network.
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-8">
              <p className="text-lg text-gray-900 font-semibold mb-4">
                By joining as an enterprise partner, you help define the future of automated finance.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Your unique challenges inform our product development. Features we build together become part of SaveCash's core platform, creating value for all users while ensuring your specific needs are met from day one.
              </p>
            </div>
          </section>

          {/* Section 9: Implementation Lifecycle */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">9</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Implementation Lifecycle</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-purple-600">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery & Scope</h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Assess spend architecture, integrations, and compliance needs. Our solutions architects work with your team to understand current workflows, identify integration points, and define success metrics.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-blue-600">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Integration & Testing</h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Connect data sources in a controlled environment. We test integrations thoroughly before production deployment, ensuring data accuracy and system reliability.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-green-600">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Deployment & Training</h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Roll out to finance teams with live dashboards. Comprehensive training ensures your team can leverage all SaveCash capabilities from day one.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-orange-600">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Optimization</h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Quarterly reviews refine automation accuracy and savings insight. Continuous improvement ensures SaveCash delivers increasing value over time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10: Contact the Enterprise Team */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">10</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Contact the Enterprise Team</h2>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-xl p-12">
              <blockquote className="text-2xl font-bold mb-8 italic">
                Ready to explore enterprise automation?
              </blockquote>
              <p className="text-xl mb-8">
                Schedule a consultation with our solutions architects to design a custom plan for your organization.
              </p>
              <div className="flex flex-wrap gap-6">
                <a 
                  href="mailto:privacy.savecash@gmail.com" 
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  privacy.savecash@gmail.com
                </a>
                <a 
                  href="/pricing/quote" 
                  className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-400 transition-colors"
                >
                  Request a Quote
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          {/* Footer Tagline */}
          <div className="text-center pt-12 border-t border-gray-200">
            <p className="text-2xl font-bold text-gray-900">
              SaveCash Enterprise — Clarity, Control, and Intelligence at Scale.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
