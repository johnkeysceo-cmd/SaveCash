import React from "react";
import { ArrowLeft, TrendingUp, Shield, Repeat, Zap, Target, Sparkles, Building2, Users, Globe, BarChart3, Check, Mail, ArrowRight, FileText } from "lucide-react";

export default function Investors() {
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
            Investors & Partnerships
          </h1>
          
          <p className="text-2xl text-gray-700 mb-4 font-light">
            Fueling the Next Era of Intelligent Finance
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-700 font-semibold">Investment Opportunities — Pre-Launch</span>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            SaveCash was founded on a simple idea: every dollar deserves intelligence.
            We're building the automation infrastructure that redefines how individuals and enterprises understand spending, reduce waste, and compound efficiency.
            For investors and strategic partners, that mission translates into long-term value grounded in technology, data ethics, and scalable design.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-20 text-base text-gray-700 leading-relaxed">
          
          {/* Section 1: Vision for Growth */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Vision for Growth</h2>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Our market spans nearly every organization that manages recurring costs—businesses, freelancers, and global corporations alike.
              As automation becomes mandatory, SaveCash positions itself as the <strong className="text-gray-900">operating layer for financial efficiency</strong>.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core focus areas:</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-purple-500 pl-6 py-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">AI-driven spend visibility</h4>
                <p className="text-base text-gray-700">Real-time anomaly detection that identifies inefficiencies as they occur, not months later.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Predictive cost optimization</h4>
                <p className="text-base text-gray-700">Forecasting and vendor management that anticipates spending patterns before they become problems.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6 py-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Seamless ecosystem integration</h4>
                <p className="text-base text-gray-700">Native connections with existing accounting and ERP systems for frictionless adoption.</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6 py-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Transparent global scaling</h4>
                <p className="text-base text-gray-700">Subscription models designed for international expansion with regional compliance built-in.</p>
              </div>
            </div>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <p className="text-lg text-gray-900 font-semibold">
                We believe that <em>clarity creates value</em>. The more users see, the more they save—and the more our platform learns.
              </p>
            </div>
          </section>

          {/* Section 2: Why Investors Engage */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Why Investors Engage</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">Scalable Technology</h3>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  Built on modular micro-services and secure APIs. Our architecture scales horizontally, processing millions of transactions without performance degradation.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Universal Market Fit</h3>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  Every entity spends; every entity benefits from insight. Our market isn't limited to specific industries or company sizes—it's universal.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">Recurring Revenue Model</h3>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  Subscription structure ensures predictable growth. Low churn rates driven by measurable value delivery create sustainable revenue streams.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-orange-600" />
                  <h3 className="text-xl font-bold text-gray-900">Ethical Data Framework</h3>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  Zero data resale; monetization aligns directly with user success. We build trust through transparency, not data extraction.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">Continuous R&D</h3>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  Dedicated engineering for automation accuracy and real-time analytics. Our research investment ensures SaveCash remains at the forefront of financial AI technology.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-lg text-gray-900 font-semibold">
                Our design philosophy mirrors that of high-integrity engineering companies: focus on fundamentals, iterate fast, measure relentlessly.
              </p>
            </div>
          </section>

          {/* Section 3: Our Investor Ethos */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Our Investor Ethos</h2>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We choose investors the way we design software—with intention.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-purple-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Quarterly reports and milestone dashboards. Investors receive comprehensive updates on metrics, product development, and strategic initiatives. No surprises—just clear, data-driven communication.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Long-term Alignment</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Preference for patient capital that values compounding innovation over short cycles. We build for decades, not quarters. Our investors understand that sustainable growth takes time.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Impact Orientation</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Backing projects that modernize finance and improve global efficiency. We seek investors who care about creating lasting value for users, not just financial returns.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ethical Governance</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Clear data-handling policies and accountability at every level. We maintain independent advisory oversight and transparent governance structures.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Strategic Partnerships */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Strategic Partnerships</h2>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Partnerships accelerate adoption and expand capability. SaveCash collaborates with:
            </p>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                    <th className="border border-gray-300 p-4 text-left font-bold">Category</th>
                    <th className="border border-gray-300 p-4 text-left font-bold">Example Partner Types</th>
                    <th className="border border-gray-300 p-4 text-left font-bold">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Financial Institutions</td>
                    <td className="border border-gray-300 p-4 text-gray-700">Banks, payment processors</td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">Secure transaction analysis and co-branded insights</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Accounting / ERP Providers</td>
                    <td className="border border-gray-300 p-4 text-gray-700">Xero, QuickBooks, SAP</td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">Native integrations for seamless data flow</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">SaaS & API Platforms</td>
                    <td className="border border-gray-300 p-4 text-gray-700">Cloud storage, business intelligence</td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">Extending visibility into other tools</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Corporate Alliances</td>
                    <td className="border border-gray-300 p-4 text-gray-700">Procurement & operations networks</td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">Joint research and enterprise onboarding</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <p className="text-lg text-gray-900 font-semibold">
                We treat partners as co-builders, not resellers—every collaboration enriches the ecosystem.
              </p>
            </div>
          </section>

          {/* Section 5: Governance & Accountability */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">5</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Governance & Accountability</h2>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Responsible innovation demands structure.
              SaveCash maintains an independent advisory group overseeing:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <Shield className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Data Security & Privacy</h3>
                <p className="text-sm text-gray-700">Regular policy reviews and security audits to ensure user data protection at the highest standards.</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <Check className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Compliance Oversight</h3>
                <p className="text-sm text-gray-700">SOC 2 Type II, GDPR, and relevant financial regulations compliance monitoring and certification.</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <FileText className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Transparency Reporting</h3>
                <p className="text-sm text-gray-700">Audit trails and transparency reports for enterprise clients and regulatory requirements.</p>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-lg text-gray-900 font-semibold">
                Integrity is the most valuable currency we hold.
              </p>
            </div>
          </section>

          {/* Section 6: Growth Roadmap */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">6</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Growth Roadmap</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-purple-600">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pre-Launch Phase</h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Closed beta, waitlist expansion, feedback integration. We're currently building the foundation, refining algorithms, and gathering early adopter feedback to ensure product-market fit from day one.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-blue-600">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Public Launch</h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Official product release, onboarding for first 10,000 users. Targeted marketing, partner integrations, and scaling infrastructure to handle initial demand.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-green-600">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Global Expansion</h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Regional pricing parity, multilingual support, partner localization. Expanding into European, Asian, and Latin American markets with region-specific compliance and partnerships.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-orange-600">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Deepening</h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Advanced analytics, vertical-specific modules. Developing industry-specific solutions for healthcare, manufacturing, retail, and other verticals with specialized requirements.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-pink-600">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Open Ecosystem</h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Developer API, predictive-spend marketplace, AI insights network. Creating a platform where third-party developers can build on SaveCash infrastructure, extending capabilities and creating network effects.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mt-8">
              <p className="text-lg text-gray-900 font-semibold">
                Each stage builds momentum without sacrificing reliability or ethics.
              </p>
            </div>
          </section>

          {/* Section 7: Investment Opportunities */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">7</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Investment Opportunities</h2>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              SaveCash welcomes accredited investors and institutional partners who share our long-term vision.
              Opportunities include:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <TrendingUp className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Equity Participation</h3>
                <p className="text-sm text-gray-700">Participation in current or future funding rounds. Connect with our team to discuss available opportunities and terms.</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <Building2 className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Strategic Co-Development</h3>
                <p className="text-sm text-gray-700">Partnerships for AI analytics and data infrastructure development. Joint R&D initiatives that accelerate innovation.</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <Users className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Corporate Innovation</h3>
                <p className="text-sm text-gray-700">Partnerships with cost-optimization divisions. Corporate venture arms seeking strategic alignment and innovation.</p>
              </div>
            </div>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <p className="text-base text-gray-900 font-semibold mb-2">
                We evaluate partnerships based on strategic alignment, cultural fit, and commitment to responsible growth.
              </p>
              <p className="text-sm text-gray-700 italic">
                All investment discussions occur privately under appropriate regulatory frameworks.
              </p>
            </div>
          </section>

          {/* Section 8: Contact & Pitch Deck Requests */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">8</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Contact & Pitch Deck Requests</h2>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-xl p-12">
              <blockquote className="text-2xl font-bold mb-8 italic">
                To explore investment or partnership opportunities with SaveCash, reach out through our dedicated relations team.
              </blockquote>
              
              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-lg font-semibold mb-3">Email:</p>
                  <a 
                    href="mailto:privacy.savecash@gmail.com" 
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    privacy.savecash@gmail.com
                  </a>
                </div>
                
                <div>
                  <p className="text-lg font-semibold mb-3">Investor Portal:</p>
                  <a 
                    href="/investors" 
                    className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-400 transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    View Investor Resources
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <p className="text-base opacity-90">
                Upon verification, you'll receive access to our investor portal and briefing materials.
              </p>
            </div>
          </section>

          {/* Footer Tagline */}
          <div className="text-center pt-12 border-t border-gray-200">
            <p className="text-2xl font-bold text-gray-900 mb-2">
              SaveCash — Building the world's most transparent financial-efficiency platform.
            </p>
            <p className="text-xl text-gray-700 mb-4">
              Invest in clarity. Partner in innovation.
            </p>
            <p className="text-base text-gray-600 font-medium">
              Built in California. Operating globally.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
