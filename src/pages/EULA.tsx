import React from "react";
import { motion } from "motion/react";
import { FileText, ArrowLeft } from "lucide-react";

export default function EULA() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-6">
            <a href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex items-center gap-4 mb-2">
            <FileText className="w-8 h-8 text-purple-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">End User License Agreement (EULA)</h1>
          </motion.div>
          <p className="text-sm text-gray-500">Effective Date: [Insert Date] · Last Updated: [Insert Date]</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">1. Introduction</h2>
          <p>
            This End User License Agreement ("Agreement", "EULA") constitutes a legally binding agreement between you ("User") and SaveCash ("Company", "we", "our", "us"), governing your use of the Application, including any updates, enhancements, or supplements provided by the Company. By downloading, installing, accessing, or using the Application, you acknowledge that you have read, understood, and agree to be bound by this Agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">2. License Grant</h2>
          <p>
            The Company grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the Application solely for your personal or internal business purposes in accordance with this Agreement.
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Do not reproduce, copy, modify, distribute, sell, lease, or sublicense the Application.</li>
            <li>Do not reverse engineer, decompile, or disassemble any part of the Application.</li>
            <li>Do not access or use the Application in a way that could impair, disable, or interfere with the Company’s systems or other users.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">3. Scope of License</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>No commercial resale or redistribution.</li>
            <li>No circumvention of technical restrictions.</li>
            <li>No creation of derivative works.</li>
          </ul>
          <p className="mt-3">Violation may result in automatic termination of your rights under this license without notice.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">4. Firmware and Technical Requirements</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Requires firmware version 1.0.0 or higher.</li>
            <li>We recommend using the latest firmware.</li>
            <li>Users are responsible for ensuring device compatibility.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">5. Maintenance and Support</h2>
          <p>
            The Company may provide updates, bug fixes, and maintenance releases at its sole discretion. No guarantee of continuous availability or error-free performance. Support inquiries: privacy.savecashpro@gmail.com.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">6. User-Generated Content</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>You retain ownership of your content but grant the Company a worldwide, royalty-free, sublicensable license to use and display it within the Application.</li>
            <li>You are solely responsible for the content you submit.</li>
            <li>The Company may remove content that violates this Agreement or applicable laws.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">7. Privacy Policy</h2>
          <p>Your use of the Application is also governed by our Privacy Policy.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">8. Liability</h2>
          <p>
            Liability is limited to intent and gross negligence. For breaches of essential contractual obligations, liability extends to slight negligence but is limited to foreseeable, typical damages. This does not apply to injury to life, limb, or health.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">9. Warranty Period</h2>
          <p>Defects must be notified within 90 days of discovery at privacy.savecashpro@gmail.com. Beyond this period, no warranty for performance or error correction is provided.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">10. Industry-Specific Compliance</h2>
          <p>If applicable, the Company complies with regulations such as GDPR and CCPA. Users operating in regulated industries must ensure their own compliance.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">11. Additional Clauses</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>We may suspend or terminate access without notice.</li>
            <li>Terms may be modified with updates posted on the official website.</li>
            <li>We may enforce IP rights and pursue legal remedies for violations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">12. Governing Law</h2>
          <p>Governing law: State of California, United States, without regard to conflict of law provisions.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">13. Business Information</h2>
          <p>Registered Address: 600 California Street, San Francisco, CA, United States · ZIP: [Insert ZIP Code]</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">14. Contact Information</h2>
          <p>Email: privacy.savecashpro@gmail.com · Business Name: SaveCash</p>
          <p>Address: 600 California Street, San Francisco, CA, USA</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">15. Miscellaneous</h2>
          <p>
            If any provision is invalid or unenforceable, the remaining provisions remain in full force and effect. This Agreement constitutes the entire agreement and supersedes all prior understandings regarding the Application.
          </p>
          <p className="text-sm text-gray-500 mt-2">© [Year] SaveCash. All Rights Reserved.</p>
        </section>
      </div>
      
      {/* Appended: Additional EULA Legal Text (no deletions) */}
      <div className="border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">End User License Agreement (EULA)</h2>
            <p className="text-sm text-gray-500">Effective Date: October 28, 2025</p>
            <p className="text-gray-400 mt-2">Company: SaveCash · Website: https://savecashpro.vercel.app · Email: support.savecashpro@gmail.com · Address: 600 California Street, 11th Floor, San Francisco, CA 94108, United States</p>
          </div>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">1. Introduction</h3>
            <p>This Agreement governs access to and use of our digital software, mobile applications, AI modules, APIs, and associated online services (collectively, the “Software” or “Services”). By installing, accessing, or using the Software, you agree to be bound by this Agreement.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">2. License Grant</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access and use for personal or internal business purposes</li>
              <li>Download and install updates as provided</li>
              <li>Access cloud-based features subject to active account/subscription</li>
            </ul>
            <p className="text-sm text-gray-400 mt-2">Ownership/IP rights are not transferred. All rights reserved by SaveCash and licensors.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">3. Restrictions on Use</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>No copying, modifying, reverse-engineering, decompiling</li>
              <li>No distribution, sale, rent, or sublicense to third parties</li>
              <li>No circumvention of technical/security features</li>
              <li>No unauthorized automation (bots, scrapers)</li>
              <li>No illegal, deceptive, or unethical use</li>
              <li>No interference with users or SaveCash systems</li>
              <li>No misuse of AI-generated or proprietary output</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">4. Account Registration & Security</h3>
            <p>Create an account to access certain features; maintain accurate info and safeguard credentials. Notify SaveCash of unauthorized access. We are not liable for losses due to credential compromise.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">5. Updates and Modifications</h3>
            <p>Updates, patches, or feature enhancements are part of the Software and governed by this Agreement. We may modify or discontinue features without prior notice.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">6. Subscription and Payment Terms</h3>
            <p>Some features require paid subscriptions. Payments processed by third parties. Subscriptions auto-renew unless canceled before renewal. Manage via account or support.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">7. Ownership and Intellectual Property</h3>
            <p>All IP including algorithms, designs, trademarks, and technology belongs to SaveCash or licensors. Feedback becomes SaveCash property without compensation.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">8. User Data and Privacy</h3>
            <p>Use of the Software is governed by the Privacy Policy. You consent to processing and represent provided data is accurate and lawful.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">9. Termination</h3>
            <p>Either party may terminate. SaveCash may terminate for breach, fraud, or legal requirements. Upon termination, your license is revoked and access may be disabled.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">10. Limitation of Liability</h3>
            <p>No liability for indirect, incidental, consequential, or punitive damages. Aggregate liability limited to amounts paid in the preceding six (6) months where permitted by law.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">11. Disclaimer of Warranties</h3>
            <p>Software is provided “as is” and “as available,” without warranties of merchantability, fitness for a particular purpose, non-infringement, availability, or accuracy.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">12. Indemnification</h3>
            <p>You agree to indemnify SaveCash from claims arising from your use, breach, or rights infringement.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">13. Export and Compliance</h3>
            <p>Comply with U.S. and international export control laws. Not available to embargoed entities or individuals.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">14. Governing Law & Dispute Resolution</h3>
            <p>California law governs. Disputes resolved via binding arbitration in San Francisco, CA (AAA rules). Prevailing party may recover reasonable attorney’s fees.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">15. Miscellaneous</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Entire Agreement; Severability; Waiver</li>
              <li>No assignment without consent</li>
            </ul>
            <p className="text-sm text-gray-500 mt-2">Contact: SaveCash Legal Department · 600 California Street, 11th Floor, San Francisco, CA 94108 · legal.savecashpro@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}


