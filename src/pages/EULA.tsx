import React from "react";
import LegalPageLayout from "../components/LegalPageLayout";

export default function EULA() {
  return (
    <LegalPageLayout title="End User License Agreement (EULA)" currentPath="/eula">
      <div style={{ marginBottom: "32px" }}>
        <h4 className="text-base font-normal text-gray-600 mb-6" style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", margin: "0 0 24px 0" }}>
          Effective Date: October 28, 2025
        </h4>
        <div className="mt-6 space-y-2 text-sm text-gray-600">
          <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", margin: "0 0 8px 0" }}><strong>Company:</strong> SaveCash ("Company", "we", "us", or "our")</p>
          <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", margin: "0 0 8px 0" }}><strong>Email:</strong> <a href="mailto:privacy.savecash@gmail.com" className="text-blue-600 hover:underline">privacy.savecash@gmail.com</a></p>
          <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", margin: "0 0 8px 0" }}><strong>Address:</strong> Built in California. Operating globally.</p>
        </div>
      </div>

      <div className="space-y-8 text-base text-gray-700 leading-relaxed">
        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>1. Introduction</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
            This End User License Agreement ("Agreement", "EULA") constitutes a legally binding agreement between you ("User") and SaveCash ("Company", "we", "our", "us"), governing your use of the Application, including any updates, enhancements, or supplements provided by the Company. By downloading, installing, accessing, or using the Application, you acknowledge that you have read, understood, and agree to be bound by this Agreement.
          </p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>2. License Grant</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
            The Company grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the Application solely for your personal or internal business purposes in accordance with this Agreement.
          </p>
          <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Do not reproduce, copy, modify, distribute, sell, lease, or sublicense the Application.</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Do not reverse engineer, decompile, or disassemble any part of the Application.</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Do not access or use the Application in a way that could impair, disable, or interfere with the Company's systems or other users.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>3. Scope of License</h2>
          <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>No commercial resale or redistribution.</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>No circumvention of technical restrictions.</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>No creation of derivative works.</li>
          </ul>
          <p className="mt-3" style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Violation may result in automatic termination of your rights under this license without notice.</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>4. Firmware and Technical Requirements</h2>
          <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Requires firmware version 1.0.0 or higher.</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>We recommend using the latest firmware.</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Users are responsible for ensuring device compatibility.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>5. Maintenance and Support</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
            The Company may provide updates, bug fixes, and maintenance releases at its sole discretion. No guarantee of continuous availability or error-free performance. Support inquiries: privacy.savecash@gmail.com.
          </p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>6. User-Generated Content</h2>
          <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>You retain ownership of your content but grant the Company a worldwide, royalty-free, sublicensable license to use and display it within the Application.</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>You are solely responsible for the content you submit.</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>The Company may remove content that violates this Agreement or applicable laws.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>7. Privacy Policy</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Your use of the Application is also governed by our Privacy Policy.</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>8. Liability</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
            Liability is limited to intent and gross negligence. For breaches of essential contractual obligations, liability extends to slight negligence but is limited to foreseeable, typical damages. This does not apply to injury to life, limb, or health.
          </p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>9. Warranty Period</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Defects must be notified within 90 days of discovery at privacy.savecash@gmail.com. Beyond this period, no warranty for performance or error correction is provided.</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>10. Industry-Specific Compliance</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>If applicable, the Company complies with regulations such as GDPR and CCPA. Users operating in regulated industries must ensure their own compliance.</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>11. Additional Clauses</h2>
          <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>We may suspend or terminate access without notice.</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Terms may be modified with updates posted on the official website.</li>
            <li>We may enforce IP rights and pursue legal remedies for violations.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>12. Governing Law</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Governing law: State of California, United States, without regard to conflict of law provisions.</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>13. Business Information</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Registered Address: Built in California. Operating globally.</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>14. Contact Information</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Email: privacy.savecash@gmail.com · Business Name: SaveCash</p>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Address: Built in California. Operating globally.</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>15. Miscellaneous</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
            If any provision is invalid or unenforceable, the remaining provisions remain in full force and effect. This Agreement constitutes the entire agreement and supersedes all prior understandings regarding the Application.
          </p>
          <p className="text-sm text-gray-500 mt-2">© [Year] SaveCash. All Rights Reserved.</p>
        </section>
      </div>
      
      {/* Appended: Additional EULA Legal Text (no deletions) */}
      <div className="border-t border-gray-800" id="eula-appendix">
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">End User License Agreement (EULA)</h2>
            <p className="text-sm text-gray-500">Effective Date: October 28, 2025</p>
            <p className="text-gray-400 mt-2">Company: SaveCash · Email: privacy.savecash@gmail.com · Address: Built in California. Operating globally.</p>
          </div>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">1. Introduction</h3>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>This Agreement governs access to and use of our digital software, mobile applications, AI modules, APIs, and associated online services (collectively, the “Software” or “Services”). By installing, accessing, or using the Software, you agree to be bound by this Agreement.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">2. License Grant</h3>
            <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
              <li>Access and use for personal or internal business purposes</li>
              <li>Download and install updates as provided</li>
              <li>Access cloud-based features subject to active account/subscription</li>
            </ul>
            <p className="text-sm text-gray-400 mt-2">Ownership/IP rights are not transferred. All rights reserved by SaveCash and licensors.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">3. Restrictions on Use</h3>
            <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
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
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Create an account to access certain features; maintain accurate info and safeguard credentials. Notify SaveCash of unauthorized access. We are not liable for losses due to credential compromise.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">5. Updates and Modifications</h3>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Updates, patches, or feature enhancements are part of the Software and governed by this Agreement. We may modify or discontinue features without prior notice.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">6. Subscription and Payment Terms</h3>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Some features require paid subscriptions. Payments processed by third parties. Subscriptions auto-renew unless canceled before renewal. Manage via account or support.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">7. Ownership and Intellectual Property</h3>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>All IP including algorithms, designs, trademarks, and technology belongs to SaveCash or licensors. Feedback becomes SaveCash property without compensation.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">8. User Data and Privacy</h3>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Use of the Software is governed by the Privacy Policy. You consent to processing and represent provided data is accurate and lawful.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">9. Termination</h3>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Either party may terminate. SaveCash may terminate for breach, fraud, or legal requirements. Upon termination, your license is revoked and access may be disabled.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">10. Limitation of Liability</h3>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>No liability for indirect, incidental, consequential, or punitive damages. Aggregate liability limited to amounts paid in the preceding six (6) months where permitted by law.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">11. Disclaimer of Warranties</h3>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Software is provided “as is” and “as available,” without warranties of merchantability, fitness for a particular purpose, non-infringement, availability, or accuracy.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">12. Indemnification</h3>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>You agree to indemnify SaveCash from claims arising from your use, breach, or rights infringement.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">13. Export and Compliance</h3>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Comply with U.S. and international export control laws. Not available to embargoed entities or individuals.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">14. Governing Law & Dispute Resolution</h3>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>California law governs. Disputes resolved via binding arbitration in San Francisco, CA (AAA rules). Prevailing party may recover reasonable attorney’s fees.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-white mb-3">15. Miscellaneous</h3>
            <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
              <li>Entire Agreement; Severability; Waiver</li>
              <li>No assignment without consent</li>
            </ul>
            <p className="text-sm text-gray-500 mt-2">Contact: SaveCash Legal Department · Built in California. Operating globally. · privacy.savecash@gmail.com</p>
          </section>
        </div>
      </div>
    </LegalPageLayout>
  );
}


