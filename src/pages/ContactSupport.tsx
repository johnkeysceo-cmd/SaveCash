import React from "react";
import { ArrowLeft, Mail, Phone, Headphones, FileText, Shield, Search, MessageSquare, Clock, CheckCircle, Lock, Sparkles, ArrowRight, ExternalLink } from "lucide-react";

export default function ContactSupport() {
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
            Contact & Support Center
          </h1>
          
          <p className="text-2xl text-gray-700 mb-4 font-light">
            We're Here to Help — 24/7
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-700 font-semibold">24/7 Support Available</span>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            Questions, feedback, or partnership ideas?
            The SaveCash Support Center connects you directly to the right team—quickly, securely, and without confusion.
            Whether you're a new user, beta tester, enterprise client, or press contact, we make sure your message reaches the right place.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-20 text-base text-gray-700 leading-relaxed">
          
          {/* Section 1: Self-Service Help Hub */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Self-Service Help Hub</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Before you write in, explore the <strong className="text-gray-900">Help Hub</strong>, our searchable knowledge base covering:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base text-gray-700">Getting started & onboarding</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base text-gray-700">Account setup and billing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base text-gray-700">Integrations & API usage</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base text-gray-700">Troubleshooting guides</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base text-gray-700">Security & privacy policies</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <ExternalLink className="w-5 h-5 text-purple-600" />
                <a href="/help" className="text-lg font-semibold text-purple-600 hover:text-purple-700 hover:underline">
                  Visit Help Hub →
                </a>
              </div>
              <p className="text-sm text-gray-700">
                Every article is written and maintained by real product specialists—not bots.
              </p>
            </div>
          </section>

          {/* Section 2: Live Support Channels */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Live Support Channels</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                    <th className="border border-gray-300 p-4 text-left font-bold">Channel</th>
                    <th className="border border-gray-300 p-4 text-left font-bold">Availability</th>
                    <th className="border border-gray-300 p-4 text-left font-bold">Typical Response Time</th>
                    <th className="border border-gray-300 p-4 text-left font-bold">Suitable For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">In-App Chat</td>
                    <td className="border border-gray-300 p-4 text-gray-700">24/7 for Enterprise · Business hours for all plans</td>
                    <td className="border border-gray-300 p-4 text-gray-700">&lt; 15 minutes</td>
                    <td className="border border-gray-300 p-4 text-gray-700">Quick technical questions</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Email Support</td>
                    <td className="border border-gray-300 p-4 text-gray-700">Always open</td>
                    <td className="border border-gray-300 p-4 text-gray-700">&lt; 24 hours</td>
                    <td className="border border-gray-300 p-4 text-gray-700">Billing, policy, feature requests</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Phone Support</td>
                    <td className="border border-gray-300 p-4 text-gray-700">Enterprise only (appointment based)</td>
                    <td className="border border-gray-300 p-4 text-gray-700">Scheduled</td>
                    <td className="border border-gray-300 p-4 text-gray-700">Complex implementation assistance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: General Contacts */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">General Contacts</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                    <th className="border border-gray-300 p-4 text-left font-bold">Purpose</th>
                    <th className="border border-gray-300 p-4 text-left font-bold">Email</th>
                    <th className="border border-gray-300 p-4 text-left font-bold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Customer Support</td>
                    <td className="border border-gray-300 p-4">
                      <a href="mailto:privacy.savecash@gmail.com" className="text-blue-600 hover:underline font-medium">
                        privacy.savecash@gmail.com
                      </a>
                    </td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">Product help, billing, account management</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Press Relations</td>
                    <td className="border border-gray-300 p-4">
                      <a href="mailto:privacy.savecash@gmail.com" className="text-blue-600 hover:underline font-medium">
                        privacy.savecash@gmail.com
                      </a>
                    </td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">Interviews and media requests</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Enterprise Solutions</td>
                    <td className="border border-gray-300 p-4">
                      <a href="mailto:privacy.savecash@gmail.com" className="text-blue-600 hover:underline font-medium">
                        privacy.savecash@gmail.com
                      </a>
                    </td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">Custom deployment and integration</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Investor Relations</td>
                    <td className="border border-gray-300 p-4">
                      <a href="mailto:privacy.savecash@gmail.com" className="text-blue-600 hover:underline font-medium">
                        privacy.savecash@gmail.com
                      </a>
                    </td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">Funding and strategic partnerships</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold text-gray-900">Security Desk</td>
                    <td className="border border-gray-300 p-4">
                      <a href="mailto:privacy.savecash@gmail.com" className="text-blue-600 hover:underline font-medium">
                        privacy.savecash@gmail.com
                      </a>
                    </td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">Responsible disclosure and privacy inquiries</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Submitting a Request */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Submitting a Request</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Go to support portal</h3>
                  <p className="text-base text-gray-700">Visit our support ticket system at support.savecash.ai/ticket</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose your category</h3>
                  <p className="text-base text-gray-700">Select Billing, Technical, General, or Enterprise</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Provide details</h3>
                  <p className="text-base text-gray-700">Include relevant information and attachments to help us assist you quickly</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Track your request</h3>
                  <p className="text-base text-gray-700">Receive a case ID and real-time status updates via email</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mt-8">
              <p className="text-base text-gray-900 font-semibold">
                All requests are encrypted in transit and logged transparently.
              </p>
            </div>
          </section>

          {/* Section 5: Response Philosophy */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">5</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Response Philosophy</h2>
            </div>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Every message deserves context, clarity, and closure.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We commit to:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-purple-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency First</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  You'll always know who's handling your case. Every interaction includes the name and role of the team member assisting you.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Empathy Over Automation</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  AI assists; humans decide. While automation helps route and categorize requests, every response is crafted by a real person who understands your specific situation.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Documentation for Learning</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Common questions become future knowledge-base articles. Your questions help us improve for everyone.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Service Status & Uptime */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">6</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Service Status & Uptime</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              System status and incident history are publicly available at <strong className="text-gray-900">status.savecash.ai</strong>.
            </p>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Enterprise clients receive automated uptime reports as part of their SLA commitments.
              </p>
            </div>
            
            <div className="mt-6">
              <a 
                href="/status" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
              >
                View Status Page
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* Section 7: Privacy & Data Protection */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">7</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Privacy & Data Protection</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              All support interactions follow SaveCash's Privacy Policy and GDPR guidelines.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <Lock className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Data Security</h3>
                <p className="text-sm text-gray-700">
                  No customer data is shared externally without explicit consent. All support communications are encrypted and stored securely.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Data Access Requests</h3>
                <p className="text-sm text-gray-700">
                  For data-access requests, email <a href="mailto:privacy.savecash@gmail.com" className="text-blue-600 hover:underline">privacy.savecash@gmail.com</a>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Feedback & Feature Requests */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">8</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Feedback & Feature Requests</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We listen closely to our users. To submit a feature idea or vote on existing requests:
            </p>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <ExternalLink className="w-5 h-5 text-purple-600" />
                <a href="/support" className="text-lg font-semibold text-purple-600 hover:text-purple-700 hover:underline">
                  feedback.savecash.ai
                </a>
              </div>
            </div>
            
            <p className="text-base text-gray-700 leading-relaxed">
              Quarterly review cycles evaluate the most-requested features for roadmap inclusion.
            </p>
          </section>

          {/* Section 9: Corporate & Legal Inquiries */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">9</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Corporate & Legal Inquiries</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Legal documents, terms of service, and privacy statements are available at <strong className="text-gray-900">legal.savecash.ai</strong>.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <a href="/terms" className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 hover:shadow-md transition-all">
                <FileText className="w-6 h-6 text-purple-600 mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Terms of Service</h3>
                <p className="text-sm text-gray-600">Read our terms and conditions</p>
              </a>
              
              <a href="/privacy" className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 hover:shadow-md transition-all">
                <Shield className="w-6 h-6 text-blue-600 mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Privacy Policy</h3>
                <p className="text-sm text-gray-600">View our privacy statement</p>
              </a>
            </div>
            
            <p className="text-base text-gray-700 leading-relaxed">
              For official correspondence or compliance verification, email <a href="mailto:privacy.savecash@gmail.com" className="text-blue-600 hover:underline font-medium">privacy.savecash@gmail.com</a>.
            </p>
          </section>

          {/* Section 10: Our Promise */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">10</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Our Promise</h2>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-xl p-12">
              <blockquote className="text-2xl font-bold mb-6 italic leading-relaxed">
                Fast responses, clear answers, no hidden policies.
              </blockquote>
              
              <p className="text-xl leading-relaxed mb-6">
                We measure our success not by tickets closed but by clarity delivered.
              </p>
              
              <p className="text-lg opacity-90 leading-relaxed">
                SaveCash Support exists to make finance—and communication—simpler.
              </p>
            </div>
          </section>

          {/* Footer Tagline */}
          <div className="text-center pt-12 border-t border-gray-200">
            <p className="text-2xl font-bold text-gray-900">
              SaveCash Support Center — Transparency in Every Response.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

