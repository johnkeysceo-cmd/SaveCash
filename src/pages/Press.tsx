import React from "react";
import { ArrowLeft, Mail, FileText, Download, Sparkles, Image, Palette, Quote, ArrowRight } from "lucide-react";

export default function Press() {
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
            Press & Media Resources
          </h1>
          
          <p className="text-2xl text-gray-700 mb-4 font-light">
            Clear Communication for a Transparent Brand
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-700 font-semibold">Pre-Launch — Media Kit Available</span>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            Welcome to the official SaveCash Press Room — a centralized space for journalists, media partners, and collaborators.
            Here you'll find our brand narrative, product overview, and verified materials for publication.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-20 text-base text-gray-700 leading-relaxed">
          
          {/* Section 1: Brand Overview */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Brand Overview</h2>
            </div>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              <strong className="text-gray-900">SaveCash</strong> is an intelligent automation platform built to simplify and optimize financial decision-making.
              Our system identifies overused pricing, underutilized budgets, and hidden inefficiencies — turning financial complexity into actionable clarity.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-purple-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mission:</h3>
                <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                  To empower every individual and organization to understand, manage, and maximize their money with precision and transparency.
                </blockquote>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tagline:</h3>
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  <em>"See your money clearly."</em>
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Headquarters:</p>
                  <p className="text-gray-700">Built in California. Operating globally.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Founded:</p>
                  <p className="text-gray-700">2025</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Focus:</p>
                  <p className="text-gray-700">AI-powered financial efficiency and cost-optimization</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Product Type:</p>
                  <p className="text-gray-700">SaaS (Software-as-a-Service)</p>
                </div>
                <div className="md:col-span-2">
                  <p className="font-semibold text-gray-900 mb-1">Model:</p>
                  <p className="text-gray-700">Subscription-based automation platform</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Media Summary */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Media Summary</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What SaveCash Does</h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  SaveCash uses data science and automation to continuously monitor financial transactions, detect anomalies, and surface cost-saving opportunities.
                  By integrating with accounting systems, it transforms manual audits into real-time intelligence.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why It Matters</h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Financial clarity enables growth. SaveCash helps users:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-base text-gray-700">Eliminate unnoticed waste in recurring expenses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-base text-gray-700">Improve operational budgeting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-base text-gray-700">Accelerate financial decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-base text-gray-700">Achieve measurable efficiency without manual tracking</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Who Uses SaveCash</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Freelancers, startups, SMBs, and enterprises seeking transparent, data-driven financial control.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Product Fact Sheet */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Product Fact Sheet</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                    <th className="border border-gray-300 p-4 text-left font-bold">Category</th>
                    <th className="border border-gray-300 p-4 text-left font-bold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Product Type</td>
                    <td className="border border-gray-300 p-4 text-gray-700">AI financial automation platform</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Launch Phase</td>
                    <td className="border border-gray-300 p-4 text-gray-700">Pre-launch / Closed beta</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Availability</td>
                    <td className="border border-gray-300 p-4 text-gray-700">Web platform (desktop and mobile)</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Plans</td>
                    <td className="border border-gray-300 p-4 text-gray-700">Starter ($30/mo), Professional ($99/mo), Enterprise ($299+/mo)</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Security</td>
                    <td className="border border-gray-300 p-4 text-gray-700">AES-256 encryption, SOC 2 compliance, GDPR alignment</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Integrations</td>
                    <td className="border border-gray-300 p-4 text-gray-700">QuickBooks, Xero, SAP, Slack, custom API</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Core Features</td>
                    <td className="border border-gray-300 p-4 text-gray-700">Spend optimization, predictive analytics, receipt scanning, financial dashboard</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Founder Vision */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Founder Vision</h2>
            </div>
            
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Every innovation begins with frustration — a problem waiting for someone to fix it.
              SaveCash was founded on one universal truth: <strong className="text-gray-900">every dollar deserves efficiency</strong>.
            </p>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our founder envisioned a world where financial intelligence isn't reserved for accountants or analysts but available to anyone, automatically.
              That vision drives everything we build — tools that simplify, clarify, and amplify the value of money in motion.
            </p>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-6">
              <Quote className="w-8 h-8 text-purple-600 mb-4" />
              <blockquote className="text-lg text-gray-900 italic leading-relaxed mb-4">
                "Automation should give you back control, not take it away.
                SaveCash exists to make understanding your finances as natural as spending itself."
              </blockquote>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-lg text-gray-900 font-semibold mb-2">
                The company's guiding philosophy:
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                <strong>Technology should remove friction and reveal opportunity — transparently, securely, and ethically.</strong>
              </p>
            </div>
          </section>

          {/* Section 5: Visual Identity & Brand Assets */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">5</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Visual Identity & Brand Assets</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Media outlets can access official SaveCash assets for articles and features.
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Available assets include:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Image className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">High-resolution SaveCash logos (light & dark themes)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Image className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">Product screenshots (dashboard, analytics view, mobile interface)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Image className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">Founder and team photos</span>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">Press-ready product descriptions (100-word, 250-word, and 500-word versions)</span>
                </div>
                <div className="flex items-start gap-3 md:col-span-2">
                  <Palette className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">Color and typography guidelines</span>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Usage Policy:</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Logos and assets must not be altered, recolored, or used in misleading contexts.
                Attribution: <em>"Courtesy of SaveCash"</em>.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-6">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                <Download className="w-5 h-5" />
                Download Media Kit (ZIP)
              </button>
              <p className="text-sm text-gray-600 mt-3">
                Press kit will be available upon launch. For immediate access to specific materials, please contact our communications team.
              </p>
            </div>
          </section>

          {/* Section 6: Featured Coverage */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">6</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Featured Coverage</h2>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
              <p className="text-lg text-gray-700 italic mb-2">(Placeholder section for future press links)</p>
              <p className="text-base text-gray-600">
                Coming soon: articles, interviews, and media features highlighting SaveCash's technology, market insights, and user impact stories.
              </p>
            </div>
          </section>

          {/* Section 7: Press Inquiries */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">7</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Press Inquiries</h2>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-8">
              <blockquote className="text-xl text-gray-900 font-semibold mb-6">
                For interviews, quotes, or data requests, please contact our media team directly:
              </blockquote>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-purple-600" />
                  <a 
                    href="mailto:privacy.savecash@gmail.com" 
                    className="text-xl text-purple-600 hover:text-purple-700 hover:underline font-semibold"
                  >
                    privacy.savecash@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xl">🌐</span>
                  <a 
                    href="/press" 
                    className="text-xl text-purple-600 hover:text-purple-700 hover:underline font-semibold"
                  >
                    www.savecash.ai/press
                  </a>
                </div>
              </div>
              <p className="text-base text-gray-700 mt-6">
                Include publication name, deadline, and topic summary — we respond within one business day.
              </p>
            </div>
          </section>

          {/* Section 8: Spokesperson & Availability */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">8</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Spokesperson & Availability</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our spokespersons can provide commentary on:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base text-gray-700">Financial automation and AI trends</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base text-gray-700">Ethical technology in finance</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base text-gray-700">Startups and operational efficiency</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base text-gray-700">The evolution of SaaS business models</span>
                </li>
              </ul>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              Virtual and in-person interviews are available upon request.
            </p>
          </section>

          {/* Section 9: Brand Statement */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">9</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Brand Statement</h2>
            </div>
            
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              <strong className="text-gray-900">SaveCash represents a shift in how we view financial control.</strong>
              Instead of manual reviews, spreadsheets, and uncertainty, we bring intelligence, automation, and confidence.
            </p>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our brand stands for:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <p className="text-lg font-semibold text-gray-900">Transparency</p>
                <p className="text-base text-gray-600">over opacity</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <p className="text-lg font-semibold text-gray-900">Value</p>
                <p className="text-base text-gray-600">over vanity metrics</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <p className="text-lg font-semibold text-gray-900">Empowerment</p>
                <p className="text-base text-gray-600">over restriction</p>
              </div>
            </div>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <blockquote className="text-xl text-gray-900 font-semibold italic">
                SaveCash isn't just software — it's the next standard for financial clarity.
              </blockquote>
            </div>
          </section>

          {/* Section 10: Press Contact */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">10</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Press Contact</h2>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-xl p-10">
              <h3 className="text-2xl font-bold mb-6">Press Relations Department</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6" />
                  <a 
                    href="mailto:privacy.savecash@gmail.com" 
                    className="text-xl font-semibold hover:underline"
                  >
                    privacy.savecash@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xl">🌐</span>
                  <a 
                    href="/press" 
                    className="text-xl font-semibold hover:underline"
                  >
                    www.savecash.ai/media
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Tagline */}
          <div className="text-center pt-12 border-t border-gray-200">
            <p className="text-2xl font-bold text-gray-900">
              SaveCash — Where Clarity Meets Innovation.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
