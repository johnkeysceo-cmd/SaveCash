import React from "react";
import { motion } from "motion/react";
import { Scale, FileText, Shield, AlertTriangle, ArrowLeft, CheckCircle, XCircle } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <a 
              href="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4 mb-6"
          >
            <Scale className="w-8 h-8 text-purple-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Terms of Service</h1>
          </motion.div>
          
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
            >
            Our Terms of Service define the legal agreement between you and SaveCash. They outline your rights, responsibilities, and permitted uses of the platform.
            </motion.p>
          
          <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-400 mt-4"
          >
            We've written these terms in clear, human language — no unnecessary legal jargon — to ensure complete transparency about what you can expect from us, and what we expect from you.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-8">
              <h3 className="text-white font-semibold text-lg mb-6">Quick Navigation</h3>
              <nav className="space-y-3">
                {[
                  { id: "acceptance", title: "Acceptance of Terms", icon: CheckCircle },
                  { id: "services", title: "Our Services", icon: FileText },
                  { id: "user-account", title: "User Account", icon: Shield },
                  { id: "acceptable-use", title: "Acceptable Use", icon: AlertTriangle },
                  { id: "privacy", title: "Privacy & Data", icon: Shield },
                  { id: "liability", title: "Limitation of Liability", icon: AlertTriangle },
                  { id: "termination", title: "Termination", icon: XCircle },
                  { id: "changes", title: "Changes to Terms", icon: FileText }
                ].map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    <item.icon className="w-4 h-4 group-hover:text-purple-400 transition-colors duration-300" />
                    <span className="group-hover:underline">{item.title}</span>
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-2 space-y-12"
          >
            
            {/* Acceptance of Terms */}
            <section id="acceptance" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold text-white">Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  By accessing or using SaveCash's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                </p>
                <div className="bg-green-900/20 border border-green-800 rounded-lg p-6">
                  <h4 className="text-green-400 font-semibold mb-3">Agreement to Terms</h4>
                  <p className="text-sm text-green-200">
                    If you do not agree with any of these terms, you are prohibited from using or accessing this service. 
                    Your continued use of the service constitutes acceptance of any modifications to these terms.
                  </p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h4 className="text-white font-semibold mb-3">Key Points:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>You must be at least 18 years old to use our services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>You are responsible for maintaining the security of your account</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>You agree to provide accurate and complete information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>You understand that our services are provided "as is"</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Our Services */}
            <section id="services" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Our Services</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  SaveCash provides AI-powered financial automation services designed to help you save money, optimize spending, and manage your finances more effectively.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      What We Provide
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• AI-powered expense monitoring</li>
                      <li>• Automated savings recommendations</li>
                      <li>• Financial insights and analytics</li>
                      <li>• Secure data processing and storage</li>
                      <li>• 24/7 customer support</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-400" />
                      What We Don't Provide
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Financial, legal, or tax advice</li>
                      <li>• Investment recommendations</li>
                      <li>• Banking or lending services</li>
                      <li>• Guaranteed savings amounts</li>
                      <li>• Third-party financial products</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* User Account */}
            <section id="user-account" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">User Account</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  To access our services, you must create an account and provide accurate, complete, and current information.
                </p>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                    <h4 className="text-white font-semibold mb-3">Account Responsibilities</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-purple-400 font-medium mb-2">You Must:</h5>
                        <ul className="space-y-1 text-sm text-gray-400">
                          <li>• Provide accurate information</li>
                          <li>• Keep your password secure</li>
                          <li>• Notify us of security breaches</li>
                          <li>• Update information when it changes</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-red-400 font-medium mb-2">You Must Not:</h5>
                        <ul className="space-y-1 text-sm text-gray-400">
                          <li>• Share your account credentials</li>
                          <li>• Create multiple accounts</li>
                          <li>• Use another person's identity</li>
                          <li>• Provide false information</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6">
                    <h4 className="text-blue-400 font-semibold mb-3">Account Security</h4>
                    <p className="text-sm text-blue-200">
                      You are responsible for all activities that occur under your account. 
                      We recommend using strong passwords and enabling two-factor authentication when available.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Acceptable Use */}
            <section id="acceptable-use" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Acceptable Use</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  You agree to use our services only for lawful purposes and in accordance with these Terms of Service.
                </p>
                <div className="bg-red-900/20 border border-red-800 rounded-lg p-6">
                  <h4 className="text-red-400 font-semibold mb-3">Prohibited Activities</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <span>Violating any applicable laws or regulations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <span>Attempting to gain unauthorized access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <span>Interfering with service operations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <span>Transmitting malicious code or viruses</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <span>Reverse engineering our software</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <span>Reselling or redistributing our services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <span>Engaging in fraudulent activities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <span>Harassing other users or our staff</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Privacy & Data */}
            <section id="privacy" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Privacy & Data</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h4 className="text-white font-semibold mb-3">Data Handling</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-white font-medium">Data Security:</span>
                        <span className="text-gray-400 ml-2">We implement industry-standard security measures to protect your data</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-white font-medium">No Data Selling:</span>
                        <span className="text-gray-400 ml-2">We never sell your personal information to third parties</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-white font-medium">Transparency:</span>
                        <span className="text-gray-400 ml-2">We clearly explain what data we collect and how we use it</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section id="liability" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Limitation of Liability</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  To the maximum extent permitted by law, SaveCash shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
                </p>
                <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-6">
                  <h4 className="text-yellow-400 font-semibold mb-3">Important Disclaimers</h4>
                  <ul className="space-y-2 text-sm text-yellow-200">
                    <li>• Our services are provided "as is" without warranties of any kind</li>
                    <li>• We do not guarantee specific savings amounts or financial outcomes</li>
                    <li>• You use our services at your own risk</li>
                    <li>• We are not responsible for third-party services or integrations</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h4 className="text-white font-semibold mb-3">Maximum Liability</h4>
                  <p className="text-sm text-gray-400">
                    In no event shall SaveCash's total liability exceed the amount you paid us for the services in the 12 months preceding the claim.
                  </p>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section id="termination" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-6 h-6 text-red-400" />
                <h2 className="text-2xl font-bold text-white">Termination</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Either party may terminate this agreement at any time. We may suspend or terminate your account if you violate these terms.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                    <h4 className="text-white font-semibold mb-3">You May Terminate</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Close your account at any time</li>
                      <li>• Stop using our services</li>
                      <li>• Request data deletion</li>
                      <li>• Contact support for assistance</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                    <h4 className="text-white font-semibold mb-3">We May Terminate</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• For violation of these terms</li>
                      <li>• For fraudulent activity</li>
                      <li>• For security reasons</li>
                      <li>• With 30 days notice</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Changes to Terms */}
            <section id="changes" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Changes to Terms</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  We may update these Terms of Service from time to time. We will notify you of any material changes.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h4 className="text-white font-semibold mb-3">How We Notify You</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Email notification to your registered address</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>In-app notification when you log in</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Updated terms posted on our website</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6">
                  <h4 className="text-blue-400 font-semibold mb-3">Your Options</h4>
                  <p className="text-sm text-blue-200">
                    If you disagree with the updated terms, you may close your account. 
                    Continued use of our services after changes constitutes acceptance of the new terms.
                  </p>
            </div>
        </div>
      </section>

            {/* Contact Information */}
            <section className="scroll-mt-8">
              <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6">Questions About These Terms?</h2>
                <p className="text-gray-300 mb-6">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Legal Team</h4>
                    <p className="text-sm text-gray-400 mb-2">legal@savecash.com</p>
                    <p className="text-xs text-gray-500">For terms and legal questions</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">General Support</h4>
                    <p className="text-sm text-gray-400 mb-2">support@savecash.com</p>
                    <p className="text-xs text-gray-500">For general account questions</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-6">
                  Last updated: January 2025. These terms are effective immediately upon posting.
                </p>
            </div>
            </section>

          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Appended: Terms Investor & Legal Appendix
export function TermsInvestorLegalAppendix() {
  return (
    <div className="border-t border-gray-800 bg-gray-900/40">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-gray-300 leading-relaxed">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Terms Investor & Legal Appendix</h2>
          <p className="text-sm text-gray-500">Additional enforceable clauses and enterprise clarity.</p>
        </div>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">Arbitration & Venue</h3>
          <p>Any dispute shall be resolved by binding arbitration in San Francisco, CA, under AAA rules. Parties waive class actions and agree to individual proceedings, except where prohibited by law.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">Force Majeure</h3>
          <p>Neither party is liable for delays or failures caused by events beyond reasonable control, including but not limited to natural disasters, labor disputes, internet failures, cyberattacks, acts of government, or third‑party outages.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">Notices</h3>
          <p>Formal notices to SaveCash must be sent to privacy.savecashpro@gmail.com and to 600 California Street, 11th Floor, San Francisco, CA 94108. We may provide notices via email, in‑app messaging, or posting on the website.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">Assignment</h3>
          <p>You may not assign these Terms without our prior written consent. We may assign in connection with a merger, acquisition, or sale of assets.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">Severability & Waiver</h3>
          <p>If any provision is held unenforceable, the remainder stays in effect. No waiver of any term is a waiver of any other term, nor a continuing waiver.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">Updates to Terms</h3>
          <p>We may update these Terms; material changes are communicated in advance. Continued use following effective date constitutes acceptance.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">Entire Agreement</h3>
          <p>These Terms, along with referenced policies (Privacy, Cookie, Return, Shipping, EULA, Acceptable Use), form the entire agreement and supersede prior understandings.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">Confidentiality</h3>
          <p>Both parties agree to keep Confidential Information strictly confidential and use it only as necessary to perform obligations under these Terms. Confidential Information excludes information that is public without breach, independently developed, or rightfully received from a third party.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">Compliance Reports & Audit Rights</h3>
          <p>Upon reasonable request and NDA execution, SaveCash may provide summaries of third‑party audits or certifications (e.g., SOC 2 when available). Customer‑initiated audits are limited to document reviews and subject to reasonable scheduling and scope.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">Order of Precedence</h3>
          <p>If a signed agreement conflicts with these online Terms, the signed agreement controls. Otherwise, these Terms and referenced policies together govern your use.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">Survival</h3>
          <p>Sections concerning IP ownership, confidentiality, indemnification, limitations of liability, dispute resolution, and payment obligations survive termination.</p>
        </section>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Appended: Full Terms & Conditions (Additional Legal Text) – no deletions
// ---------------------------------------------------------------------------

export function TermsAdditionalLegalText() {
  return (
    <div className="border-t border-gray-800 bg-gray-900/40">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-gray-300 leading-relaxed">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Terms and Conditions</h2>
          <p className="text-sm text-gray-500">Effective Date: October 28, 2025</p>
          <p className="text-gray-400 mt-2">Company: SaveCash · Website: https://savecashpro.vercel.app · Address: 600 California Street, 11th Floor, San Francisco, CA 94108, United States · Email: privacy.savecashpro@gmail.com</p>
        </div>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">1. Acceptance of Terms</h3>
          <p>By accessing, downloading, installing, or using the Services, you agree to be bound by these Terms, our Privacy Policy, and any additional terms incorporated by reference.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">2. Eligibility</h3>
          <p>You must be at least 13 years of age (or older where required by local law). You affirm you can form a binding contract and are not barred by applicable law.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">3. Modifications to Terms</h3>
          <p>We may modify these Terms for operational, legal, or regulatory reasons, or to reflect updates to our Services. Users will be notified prior to effectiveness.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">4. The Services</h3>
          <p>SaveCash provides an AI-powered savings optimization and financial-insight platform and may introduce or discontinue features at any time.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">5. Account Registration</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and promptly update your information</li>
            <li>Keep your login credentials secure and confidential</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">6. Subscription and Payment Terms</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide valid payment information and authorize recurring fees</li>
            <li>Cancel prior to renewal to avoid automatic billing</li>
            <li>Fees are non-refundable unless stated otherwise or required by law</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">7. Intellectual Property</h3>
          <p>All content and technology are owned or licensed by SaveCash and protected by law. You may not copy, reverse engineer, or imply endorsement without consent.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">8. User Conduct</h3>
          <p>Prohibited activities include unauthorized access, interference, malicious software, and violations of laws or third-party rights. Violations may result in termination.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">9. User-Generated Content</h3>
          <p>You retain ownership but grant SaveCash a worldwide, royalty-free, irrevocable, transferable, sublicensable license to operate and improve the Services.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">10. Privacy and Data Protection</h3>
          <p>Your use is governed by our Privacy Policy. We implement safeguards and comply with applicable laws (GDPR, CCPA, etc.).</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">11. Third-Party Services and Links</h3>
          <p>We are not responsible for third-party content or practices. Access at your own risk and review their terms.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">12. Disclaimer of Warranties</h3>
          <p>The Services are provided “as is” and “as available” without warranties of any kind.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">13. Limitation of Liability</h3>
          <p>To the maximum extent permitted, SaveCash is not liable for indirect or consequential damages. Aggregate liability is limited to amounts paid in the preceding 12 months.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">14. Indemnification</h3>
          <p>You agree to indemnify SaveCash for claims arising from your use, violations of these Terms, or infringement of rights.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">15. Governing Law and Dispute Resolution</h3>
          <p>Governed by California law. Disputes resolved exclusively in San Francisco County, CA courts (or as otherwise specified by policy).</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">16. Termination</h3>
          <p>We may suspend or terminate access with or without cause. Certain sections survive termination.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">17. Entire Agreement</h3>
          <p>These Terms, along with related policies, constitute the entire agreement.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-3">18. Contact Information</h3>
          <p>SaveCash · 600 California Street, 11th Floor, San Francisco, CA 94108 · Email: privacy.savecashpro@gmail.com</p>
        </section>
      </div>
    </div>
  );
}