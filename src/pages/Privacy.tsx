import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif", lineHeight: "1.6", color: "#1a1a1a" }}>
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <div className="mb-6">
            <a 
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </div>
          
          <h1 style={{ color: "#1a1a1a", fontSize: "28px", fontWeight: 600, margin: "0 0 32px 0", lineHeight: "1.4" }}>
            Privacy Policy
          </h1>
          
          <h4 className="text-base font-normal text-gray-600 mb-12">Last updated: [Month DD, YYYY]</h4>
          
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
            Thank you for choosing to be part of our community at SaveCash ("Company", "we", "us", or "our"). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://savecashpro.vercel.app, use our mobile application, or engage with our services (collectively, the "Services").
          </p>
          
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
            Please read this privacy policy carefully. By using our Services, you agree to the terms of this Privacy Policy.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="space-y-10 text-base text-gray-700 leading-relaxed">
            
            {/* 1. Information We Collect */}
            <section id="data-collection" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>1. Information We Collect</h2>
              <div className="space-y-6">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  We collect information that you voluntarily provide and information automatically collected when you use our Services.
                </p>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "32px" }}>1.1. Information You Provide</h3>
                  <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><strong>Account Information:</strong> name, email address, and other contact details when registering for an account.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><strong>Communications:</strong> messages, feedback, or customer support inquiries.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><strong>Payment Information:</strong> billing details when purchasing premium services or subscriptions.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><strong>User Content:</strong> files, preferences, or AI module configurations you upload or save through the platform.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "32px" }}>1.2. Automatically Collected Information</h3>
                  <p className="mb-3" style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>When you access our website or mobile app, we automatically collect:</p>
                  <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><strong>Usage data:</strong> IP address, browser type, device identifiers, and pages visited.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><strong>Cookies and tracking technologies:</strong> information about interactions with our site and ads.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><strong>Log data:</strong> timestamps, operating system version, app performance metrics.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 2. How We Use Your Information */}
            <section id="data-usage" className="scroll-mt-8">
                  <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>2. How We Use Your Information</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  We may use your information for purposes including:
                </p>
                <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>To operate, maintain, and improve the Services.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>To process transactions and manage subscriptions.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>To communicate updates, security alerts, and policy changes.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>To personalize user experience and recommend relevant content.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>To comply with legal obligations or enforce our Terms of Service.</li>
                </ul>
              </div>
            </section>

            {/* 3. Cookies and Tracking Technologies */}
            <section id="cookies-tracking" className="scroll-mt-8">
                  <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>3. Cookies and Tracking Technologies</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  We use cookies, web beacons, and similar technologies for analytics, security, and advertising.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  You can manage your cookie preferences through your browser settings or our cookie banner.
                </p>
              </div>
            </section>

            {/* 4. Disclosure of Your Information */}
            <section id="data-sharing" className="scroll-mt-8">
                  <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>4. Disclosure of Your Information</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  We may share your information:
                </p>
                <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>With service providers assisting in operations (hosting, analytics, customer service).</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>To comply with applicable laws or respond to lawful requests.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>During a business transfer such as a merger or acquisition.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>With your consent or at your direction.</li>
                </ul>
                <p className="mt-4" style={{ color: "#1a1a1a", fontSize: "17px", lineHeight: "1.8", margin: "24px 0 28px 0", fontWeight: 600 }}>
                  We do not sell or rent your personal data to third parties.
                </p>
              </div>
            </section>

            {/* 5. Data Retention */}
            <section id="data-retention" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>5. Data Retention</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  We retain your information only as long as necessary for the purposes described above or as required by law. When no longer needed, data will be securely deleted or anonymized.
                </p>
              </div>
            </section>

            {/* 6. Your Privacy Rights */}
            <section id="your-rights" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>6. Your Privacy Rights</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  Depending on your location, you may have the right to:
                </p>
                <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Access or obtain a copy of your data.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Request correction or deletion.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Object to processing or withdraw consent.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>File a complaint with a data protection authority.</li>
                </ul>
                <p className="mt-4" style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  To exercise these rights, contact us at <a href="mailto:privacy.savecashpro@gmail.com" className="text-blue-600 hover:underline">privacy.savecashpro@gmail.com</a>.
                </p>
              </div>
            </section>

            {/* 7. Children's Privacy */}
            <section id="children-privacy" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>7. Children's Privacy</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  Our Services are not intended for users under 16 years old. We do not knowingly collect data from minors. If we become aware of such collection, we will delete the information promptly.
                </p>
              </div>
            </section>

            {/* 8. Data Security */}
            <section id="data-security" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>8. Data Security</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  We use administrative, technical, and physical safeguards to protect your personal information. However, no system is completely secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </section>

            {/* 9. International Transfers */}
            <section id="international-transfers" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>9. International Transfers</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  Your information may be processed and stored in countries other than your own. By using our Services, you consent to the transfer of your data to the United States and other jurisdictions where we or our partners operate.
                </p>
              </div>
            </section>

            {/* 10. Updates to This Policy */}
            <section id="policy-updates" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>10. Updates to This Policy</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  We may update this Privacy Policy periodically. The latest version will always be available at <a href="https://savecashpro.vercel.app/privacy-policy" className="text-blue-600 hover:underline">https://savecashpro.vercel.app/privacy-policy</a>.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  Material updates will be notified via email or platform alerts.
                </p>
              </div>
            </section>

            {/* 11. Contact Us */}
            <section id="contact" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>11. Contact Us</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  If you have questions or concerns about this Privacy Policy, please contact us at:
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900" style={{ color: "#1a1a1a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>SaveCash</p>
                  <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 8px 0" }}>600 California Street, San Francisco, CA</p>
                  <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 8px 0" }}>Email: <a href="mailto:privacy.savecashpro@gmail.com" className="text-blue-600 hover:underline">privacy.savecashpro@gmail.com</a></p>
                  <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 8px 0" }}>Website: <a href="https://savecashpro.vercel.app" className="text-blue-600 hover:underline">https://savecashpro.vercel.app</a></p>
                </div>
              </div>
            </section>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Appended Comprehensive Privacy Policy (no deletions to prior content)
// ---------------------------------------------------------------------------

export function PrivacyPolicyLegalAppendix() {
  return (
    <div className="border-t border-gray-200 bg-white" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif", lineHeight: "1.6", color: "#1a1a1a" }}>
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="mb-12">
          <h2 style={{ color: "#1a1a1a", fontSize: "28px", fontWeight: 600, margin: "0 0 16px 0", lineHeight: "1.4" }}>SaveCash Privacy Policy (Full Legal Text)</h2>
          <p className="text-base text-gray-600">Effective Date: [Insert Effective Date] · Last Updated: [Insert Last Updated Date]</p>
        </div>

        <div className="space-y-10 text-base text-gray-700 leading-relaxed">
          <section>
            <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>1. Introduction</h3>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
              Welcome to SaveCash ("we," "us," "our"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website https://savecashpro.vercel.app, our mobile applications, and any other digital platform operated by SaveCash (collectively, the "Services"). By accessing or using our Services, you agree to this Privacy Policy.
            </p>
          </section>

          <section>
            <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>2. Information We Collect</h3>
            <h4 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "32px" }}>2.1 Personal Information</h4>
            <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Name, username, or display name</li>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Email address and contact details</li>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Account credentials</li>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Payment information (processed by secure third-party processors)</li>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Communication preferences and support submissions</li>
            </ul>
            <h4 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "32px" }}>2.2 Automatically Collected Data</h4>
            <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Device information, OS version, unique identifiers</li>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Browser type and version</li>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>IP address, geolocation, connection data</li>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Referring URLs, usage behavior, pages visited, time spent</li>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Cookie identifiers and tracking pixels</li>
            </ul>
            <h4 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "32px" }}>2.3 Cookies and Tracking Technologies</h4>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>We use cookies, local storage, and similar technologies to authenticate users, analyze usage, and deliver personalized content and marketing. See our Cookie Policy for details.</p>
          </section>

          <section>
            <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>3. How We Use Your Information</h3>
            <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Account registration, verification, and authentication</li>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Providing and improving Services and features</li>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Processing transactions and maintaining payment records</li>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Customer support, bug fixes, and feedback handling</li>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Administrative messages and promotional communications (with consent)</li>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Enforcing Terms and compliance with laws</li>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Analyzing performance and security</li>
            </ul>
          </section>

          <section>
            <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>4. Legal Basis for Processing (GDPR & Global)</h3>
            <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Performance of Contract</li>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Legitimate Interests</li>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Consent</li>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Legal Obligation</li>
            </ul>
          </section>

          <section>
            <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>5. Data Sharing & Disclosure</h3>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>We do not sell personal information. We may share data with service providers, legal authorities, during business transfers, or with affiliates/partners with your consent.</p>
          </section>

          <section>
            <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>6. Data Retention</h3>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>We retain Personal Data only as long as necessary for the purposes outlined or as required by law, after which it is securely deleted, anonymized, or archived.</p>
          </section>

          <section>
            <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>7. Your Privacy Rights</h3>
            <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Access, Rectification, Erasure</li>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Restriction and Objection</li>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Data Portability</li>
              <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Withdraw Consent</li>
            </ul>
            <p className="mt-2" style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "24px 0 28px 0" }}>Contact: <a href="mailto:privacy.savecashpro@gmail.com" className="text-blue-600 hover:underline">privacy.savecashpro@gmail.com</a></p>
          </section>

          <section>
            <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>8. International Data Transfers</h3>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Data may be transferred outside your jurisdiction. We implement Standard Contractual Clauses and similar safeguards.</p>
          </section>

          <section>
            <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>9. Data Security</h3>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>We implement administrative, technical, and physical measures to protect your information. No method is 100% secure.</p>
          </section>

          <section>
            <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>10. Third-Party Links & Integrations</h3>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Our Services may contain links to third parties. We are not responsible for their privacy practices. Review their policies separately.</p>
          </section>

          <section>
            <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>11. Children's Privacy</h3>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Our Services are not directed to users under 13. We do not knowingly collect data from minors. Contact us if you believe we have.</p>
          </section>

          <section>
            <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>12. Changes to This Policy</h3>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>We may update this Privacy Policy periodically. Changes take effect when posted with an updated "Last Modified" date.</p>
          </section>

          <section>
            <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>13. Contact Us</h3>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 8px 0" }}>Email: privacy.savecashpro@gmail.com</p>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Address: 600 California Street, Floor 11, San Francisco, CA 94108, United States</p>
          </section>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Appended: Additional Privacy Policy Text Provided (no deletions)
// ---------------------------------------------------------------------------

export function PrivacyPolicyAdditionalText() {
  return (
    <div className="border-t border-gray-200 bg-white" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif", lineHeight: "1.6", color: "#1a1a1a" }}>
      <div className="max-w-4xl mx-auto px-8 py-16 space-y-8 text-base text-gray-700 leading-relaxed">
        <div>
          <h2 style={{ color: "#1a1a1a", fontSize: "28px", fontWeight: 600, margin: "0 0 16px 0", lineHeight: "1.4" }}>Privacy Policy</h2>
          <p className="text-base text-gray-600">Last updated: [Month DD, YYYY]</p>
          <p className="mt-4" style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "16px 0 28px 0" }}>
            Thank you for choosing to be part of our community at SaveCash ("Company", "we", "us", or "our"). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://savecashpro.vercel.app, use our mobile application, or engage with our services (collectively, the "Services"). By using our Services, you agree to the terms of this Privacy Policy.
          </p>
        </div>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>1. Information We Collect</h3>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>We collect information that you voluntarily provide and information automatically collected when you use our Services.</p>
          <h4 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "32px" }}>1.1. Information You Provide</h4>
          <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><span className="text-gray-900 font-semibold">Account Information:</span> name, email address, and other contact details.</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><span className="text-gray-900 font-semibold">Communications:</span> messages, feedback, or customer support inquiries.</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><span className="text-gray-900 font-semibold">Payment Information:</span> billing details for premium services or subscriptions.</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><span className="text-gray-900 font-semibold">User Content:</span> files, preferences, or AI module configurations.</li>
          </ul>
          <h4 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "32px" }}>1.2. Automatically Collected Information</h4>
          <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Usage data (IP address, browser type, device identifiers, pages visited)</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Cookies and tracking technologies (site and ad interactions)</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Log data (timestamps, OS version, app performance metrics)</li>
          </ul>
        </section>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>2. How We Use Your Information</h3>
          <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Operate, maintain, and improve the Services</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Process transactions and manage subscriptions</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Communicate updates, security alerts, and policy changes</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Personalize experience and recommend relevant content</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Comply with legal obligations or enforce our Terms of Service</li>
          </ul>
        </section>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>3. Cookies and Tracking Technologies</h3>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>We use cookies, web beacons, and similar technologies for analytics, security, and advertising. You can manage preferences through your browser or our cookie banner.</p>
        </section>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>4. Disclosure of Your Information</h3>
          <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>With service providers (hosting, analytics, customer service)</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>To comply with laws or lawful requests</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>During a business transfer (merger or acquisition)</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>With your consent or direction</li>
          </ul>
          <p className="mt-2 font-semibold text-gray-900">We do not sell or rent your personal data to third parties.</p>
        </section>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>5. Data Retention</h3>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>We retain information as long as necessary for the purposes described or as required by law. When no longer needed, data is securely deleted or anonymized.</p>
        </section>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>6. Your Privacy Rights</h3>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Depending on your location, you may have the right to access, correct, delete, object, or withdraw consent. Contact: privacy.savecashpro@gmail.com.</p>
        </section>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>7. Children’s Privacy</h3>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Our Services are not intended for users under 16. We do not knowingly collect data from minors.</p>
        </section>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>8. Data Security</h3>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>We use administrative, technical, and physical safeguards to protect personal information. No system is completely secure.</p>
        </section>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>9. International Transfers</h3>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Your information may be processed in other countries, including the United States.</p>
        </section>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>10. Updates to This Policy</h3>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>The latest version will always be available at https://savecashpro.vercel.app/privacy-policy. Material updates will be notified via email or platform alerts.</p>
        </section>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>11. Contact Us</h3>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>SaveCash · 600 California Street, San Francisco, CA · Email: privacy.savecashpro@gmail.com · Website: https://savecashpro.vercel.app</p>
        </section>
      </div>
    </div>
  );
}

// Appended: Investor & Compliance Appendix (Privacy)
export function PrivacyInvestorComplianceAppendix() {
  return (
    <div className="border-t border-gray-200 bg-white" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif", lineHeight: "1.6", color: "#1a1a1a" }}>
      <div className="max-w-4xl mx-auto px-8 py-16 space-y-10 text-base text-gray-700 leading-relaxed">
        <div>
          <h2 style={{ color: "#1a1a1a", fontSize: "28px", fontWeight: 600, margin: "0 0 16px 0", lineHeight: "1.4" }}>Privacy Investor & Compliance Appendix</h2>
          <p className="text-base text-gray-600">Enterprise details for legal, security, and investor diligence.</p>
        </div>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>Data Protection Officer (DPO)</h3>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Contact: privacy.savecashpro@gmail.com · Address: 600 California Street, 11th Floor, San Francisco, CA 94108</p>
        </section>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>Records of Processing Activities (RoPA) – Summary</h3>
          <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Data categories: account, usage, device, billing metadata</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Purposes: service delivery, security, analytics, support, legal compliance</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Lawful bases: contract, legitimate interests, consent, legal obligation</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Retention: purpose-limited; periodic reviews; anonymization for analytics</li>
          </ul>
        </section>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>Data Protection Impact Assessments (DPIA)</h3>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>We conduct DPIAs for high-risk features (e.g., AI personalization, financial optimization). Risk mitigations include pseudonymization, access controls, encryption, and vendor DPAs.</p>
        </section>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>Subprocessors (Primary)</h3>
          <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Hosting/Telemetry: Vercel (US/EU)</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Payments: Stripe (US/EU)</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Analytics: Google Analytics / Vercel Analytics</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Support/CRM (if enabled): HubSpot/Mailchimp</li>
          </ul>
          <p className="text-base text-gray-700 mt-2" style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>All subprocessors are bound by DPAs/SCCs; list will be updated prior to material changes.</p>
        </section>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>Security Controls – Overview</h3>
          <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Encryption: TLS in transit; provider-managed encryption at rest</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Access: RBAC, MFA for admin, least-privilege</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Monitoring: audit logs, anomaly detection</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Secure SDLC: dependency scanning, code reviews</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Backups: routine snapshots; disaster recovery testing</li>
          </ul>
        </section>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>Breach Notification Policy</h3>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>We assess incidents promptly; notify regulators and impacted users without undue delay in accordance with GDPR/CCPA timelines and applicable laws. Containment, forensic review, and corrective actions are documented.</p>
        </section>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>Data Subject Requests (DSAR) – SLA</h3>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Requests are acknowledged within 7 days and fulfilled within 30 days (extendable where permitted). Identity verification is required to protect user data.</p>
        </section>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>International Transfers</h3>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>We implement SCCs and equivalent safeguards for cross-border transfers; regional hosting may be used where feasible.</p>
        </section>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>Subprocessor Register (Detailed)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-gray-400">
                <tr className="text-left">
                  <th className="pr-4 py-2">Provider</th>
                  <th className="pr-4 py-2">Purpose</th>
                  <th className="pr-4 py-2">Data Categories</th>
                  <th className="pr-4 py-2">Region</th>
                  <th className="pr-4 py-2">DPA/SCC</th>
                  <th className="py-2">Update Cadence</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-t border-gray-800">
                  <td className="pr-4 py-2">Vercel</td>
                  <td className="pr-4 py-2">Hosting/Telemetry</td>
                  <td className="pr-4 py-2">IP, request metadata</td>
                  <td className="pr-4 py-2">US/EU</td>
                  <td className="pr-4 py-2">DPA + SCCs</td>
                  <td className="py-2">Quarterly review</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="pr-4 py-2">Stripe</td>
                  <td className="pr-4 py-2">Payments</td>
                  <td className="pr-4 py-2">Billing metadata</td>
                  <td className="pr-4 py-2">US/EU</td>
                  <td className="pr-4 py-2">DPA + SCCs</td>
                  <td className="py-2">Quarterly review</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="pr-4 py-2">Google Analytics</td>
                  <td className="pr-4 py-2">Analytics</td>
                  <td className="pr-4 py-2">Usage, device data</td>
                  <td className="pr-4 py-2">Global</td>
                  <td className="pr-4 py-2">DPA + SCCs</td>
                  <td className="py-2">Quarterly review</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="pr-4 py-2">HubSpot/Mailchimp</td>
                  <td className="pr-4 py-2">CRM/Comms (if enabled)</td>
                  <td className="pr-4 py-2">Contact, preferences</td>
                  <td className="pr-4 py-2">US/EU</td>
                  <td className="pr-4 py-2">DPA + SCCs</td>
                  <td className="py-2">Quarterly review</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2" style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Advance notice will be provided for material changes to subprocessors.</p>
        </section>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>Audit Readiness (SOC 2-style Mapping)</h3>
          <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>CC1 Governance: documented policies; annual review and approval</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>CC2 Communication: user disclosures; incident comms runbook</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>CC3 Risk Assessment: risk register; DPIAs for high-risk features</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>CC6 Access: RBAC, MFA, quarterly access reviews</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>CC7 Change: Git-based change control, peer reviews, CI checks</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>CC8 Monitoring: logs, alerts, incident response playbook</li>
          </ul>
          <p className="text-sm text-gray-400 mt-2" style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>SOC 2 report availability can be provided under NDA when available.</p>
        </section>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>Vendor Risk Management</h3>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>New vendors are assessed for security posture and contractual safeguards (DPA/SCC). Annual reassessments and breach-history checks are performed.</p>
        </section>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>Change & Release Management</h3>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>All changes follow peer review, lint/type checks, and staged deploys. Hotfixes are logged and retro-reviewed within 5 business days.</p>
        </section>

        <section>
          <h3 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>Access Review Cadence</h3>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Quarterly entitlement reviews for production, analytics, and billing tools. Immediate revocation on role change or termination.</p>
        </section>
      </div>
    </div>
  );
}