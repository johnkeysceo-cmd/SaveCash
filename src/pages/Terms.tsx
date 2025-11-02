import React from "react";
import LegalPageLayout from "../components/LegalPageLayout";

export default function Terms() {
  return (
    <LegalPageLayout title="Terms of Service" currentPath="/terms">
      <div style={{ marginBottom: "32px" }}>
        <h4 className="text-base font-normal text-gray-600 mb-6" style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", margin: "0 0 24px 0" }}>
          Effective Date: October 28, 2025
        </h4>
        <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
          By accessing, downloading, installing, or using the SaveCash website, mobile application, APIs, or any related software, tools, or services (collectively, the "Services"), you ("User", "you", or "your") agree to be bound by these Terms and Conditions ("Terms"), our Privacy Policy, and any additional terms incorporated by reference.
        </p>
        <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
          If you do not agree, you must not access or use the Services.
        </p>
        <div className="mt-6 space-y-2 text-sm text-gray-600">
          <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", margin: "0 0 12px 0" }}><strong>Company:</strong> SaveCash ("Company", "we", "us", "our")</p>
          <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", margin: "0 0 8px 0" }}><strong>Email:</strong> <a href="mailto:privacy.savecash@gmail.com" className="text-blue-600 hover:underline">privacy.savecash@gmail.com</a></p>
          <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", margin: "0 0 8px 0" }}><strong>Address:</strong> Built in California. Operating globally.</p>
        </div>
      </div>

      <div className="space-y-10 text-base text-gray-700 leading-relaxed">
            
            {/* 1. Acceptance of Terms */}
            <section id="acceptance" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>1. Acceptance of Terms</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  By accessing, downloading, installing, or using the SaveCash website, mobile application, APIs, or any related software, tools, or services (collectively, the "Services"), you ("User", "you", or "your") agree to be bound by these Terms and Conditions ("Terms"), our Privacy Policy, and any additional terms incorporated by reference.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  If you do not agree, you must not access or use the Services.
                </p>
              </div>
            </section>

            {/* 2. Eligibility */}
            <section id="eligibility" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>2. Eligibility</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  You must be at least <strong>18 years of age</strong> (or older, where required by local law) to use the Services.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  By using the Services, you affirm that you are capable of forming a binding contract with the Company and are not barred from doing so under any applicable law or regulation.
                </p>
              </div>
            </section>

            {/* 3. Modifications to Terms */}
            <section id="modifications" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>3. Modifications to Terms</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  We reserve the right to modify these Terms at any time for operational, legal, or regulatory reasons, or to reflect updates to our Services.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  Users will be <strong>notified by email</strong> and/or <strong>in-app notice before updates become effective</strong>. Continued use of the Services after the effective date constitutes acceptance of the revised Terms.
                </p>
              </div>
            </section>

            {/* 4. The Services */}
            <section id="services" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>4. The Services</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  SaveCash provides an AI-powered savings optimization and financial-insight platform designed to help individuals and businesses track expenses, analyze spending patterns, and identify cost-saving opportunities.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  We may introduce new features, discontinue existing ones, or restrict access at any time, with or without prior notice.
                </p>
              </div>
            </section>

            {/* 5. Account Registration */}
            <section id="user-account" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>5. Account Registration</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  You may be required to register for an account to access certain features. When registering, you agree to:
                </p>
                <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Provide accurate, current, and complete information.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Maintain and promptly update your information.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Keep your login credentials secure and confidential.</li>
                </ul>
                <p className="mt-4" style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  You are responsible for all activities under your account, whether authorized by you or not.
                </p>
              </div>
            </section>

            {/* 6. Subscription and Payment Terms */}
            <section id="subscription-payment" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>6. Subscription and Payment Terms</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  Certain Services or features may require payment or a subscription. By purchasing a subscription, you agree to:
                </p>
                <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Provide valid and current payment information.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Authorize SaveCash or its third-party payment processors to charge recurring fees.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Cancel subscriptions prior to renewal dates to avoid automatic billing.</li>
                </ul>
                <p className="mt-4" style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  All fees are non-refundable except as expressly stated in our <a href="/terms" className="text-purple-400 hover:underline">Terms of Service</a> or required by law. For questions, please <a href="/contact" className="text-purple-400 hover:underline">contact us</a>.
                </p>
              </div>
            </section>

            {/* 7. Intellectual Property */}
            <section id="intellectual-property" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>7. Intellectual Property</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  All content, including but not limited to software, algorithms, design elements, graphics, logos, interfaces, text, and documentation, are owned or licensed by SaveCash and protected under applicable copyright, trademark, and patent laws.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Except where expressly permitted, you may not:</p>
                <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Copy, modify, distribute, transmit, perform, display, or create derivative works.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Reverse-engineer, decompile, or extract source code from the Services.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Use our intellectual property in a way that suggests partnership, sponsorship, or endorsement without our written consent.</li>
                </ul>
              </div>
            </section>

            {/* 8. User Conduct */}
            <section id="acceptable-use" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>8. User Conduct</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  You agree not to engage in any of the following prohibited activities:
                </p>
                <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Accessing the Services using automated systems (e.g., bots, crawlers) without authorization.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Attempting to gain unauthorized access to any part of the Services or related systems.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Interfering with the proper functioning or security of the Services.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Uploading, transmitting, or distributing malicious software.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Using the Services to violate laws, regulations, or third-party rights.</li>
                </ul>
                <p className="mt-4" style={{ color: "#4a4a4a", fontSize: "16px", lineHeight: "1.6", margin: "0 0 20px 0" }}>
                  Violation of this section may result in suspension or permanent termination of your account.
                </p>
              </div>
            </section>

            {/* 9. User-Generated Content */}
            <section id="user-content" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>9. User-Generated Content</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  Users may post, upload, or submit content such as reviews, feedback, or suggestions ("User Content").
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  You retain ownership of your User Content but grant SaveCash a <strong>worldwide, royalty-free, irrevocable, transferable, and sublicensable license</strong> to use, reproduce, modify, display, and distribute it in connection with operating and improving the Services.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  You represent that your User Content does not violate any third-party rights, applicable laws, or community standards.
                </p>
              </div>
            </section>

            {/* 10. Privacy and Data Protection */}
            <section id="privacy" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>10. Privacy and Data Protection</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  Your use of the Services is also governed by our <a href="/" className="text-purple-400 hover:underline">Privacy Policy</a>.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  We implement administrative, technical, and organizational measures to safeguard personal data and comply with applicable privacy laws including the <strong>GDPR</strong>, <strong>CCPA</strong>, and other data-protection regulations.
                </p>
              </div>
            </section>

            {/* 11. Third-Party Services and Links */}
            <section id="third-party" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>11. Third-Party Services and Links</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  Our Services may contain links or integrations to third-party platforms or content.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  SaveCash is <strong>not responsible</strong> for the availability, accuracy, or practices of such third parties.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  You access third-party content at your own risk and are encouraged to review their respective terms and policies.
                </p>
              </div>
            </section>

            {/* 12. Disclaimer of Warranties */}
            <section id="disclaimer-warranties" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>12. Disclaimer of Warranties</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  The Services are provided <strong>"as is" and "as available"</strong> without warranty of any kind, whether express, implied, or statutory.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  We make <strong>no warranties</strong> of merchantability, fitness for a particular purpose, non-infringement, or uninterrupted availability.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  Your use of the Services is solely at your own risk.
                </p>
              </div>
            </section>

            {/* 13. Limitation of Liability */}
            <section id="liability" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>13. Limitation of Liability</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  To the maximum extent permitted by law, SaveCash, its affiliates, directors, officers, employees, and agents shall <strong>not be liable</strong> for:
                </p>
                <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Indirect, incidental, consequential, punitive, or special damages.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Loss of profits, data, goodwill, or other intangible losses.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Any damages arising from unauthorized access or use of our servers or stored data.</li>
                </ul>
                <p className="mt-4" style={{ color: "#4a4a4a", fontSize: "16px", lineHeight: "1.6", margin: "0 0 20px 0" }}>
                  If we are found liable, our total aggregate liability shall <strong>not exceed the amount paid by you in the twelve (12) months preceding the claim</strong>.
                </p>
              </div>
            </section>

            {/* 14. Indemnification */}
            <section id="indemnification" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>14. Indemnification</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  You agree to indemnify and hold harmless SaveCash and its affiliates from and against any and all claims, damages, liabilities, losses, or expenses (including attorney fees) arising out of or related to your use of the Services, violation of these Terms, or infringement of any third-party rights.
                </p>
              </div>
            </section>

            {/* 15. Governing Law and Dispute Resolution */}
            <section id="governing-law" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>15. Governing Law and Dispute Resolution</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  These Terms shall be governed by and construed in accordance with the laws of the <strong>State of California, United States</strong>, without regard to conflict-of-law principles.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  Any disputes arising from these Terms shall be resolved exclusively in the <strong>state or federal courts located in San Francisco County, California</strong>, and you consent to their jurisdiction.
                </p>
              </div>
            </section>

            {/* 16. Termination */}
            <section id="termination" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>16. Termination</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  We may suspend or terminate your access to the Services at any time, with or without cause, and without liability.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  Upon termination, your right to use the Services ceases immediately. Sections relating to intellectual property, liability, indemnification, and governing law shall survive termination.
                </p>
              </div>
            </section>

            {/* 17. Entire Agreement */}
            <section id="entire-agreement" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>17. Entire Agreement</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  These Terms, together with our Privacy Policy, Cookie Policy, and other legal documents, constitute the <strong>entire agreement</strong> between you and SaveCash regarding your use of the Services and supersede all prior agreements.
                </p>
              </div>
            </section>

            {/* 18. Contact Information */}
            <section id="contact" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>18. Contact Information</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  SaveCash
                </p>
                <div className="space-y-2">
                  <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Built in California. Operating globally.</p>
                  <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Email: <a href="mailto:privacy.savecash@gmail.com" className="text-blue-600 hover:underline">privacy.savecash@gmail.com</a></p>
                </div>
              </div>
            </section>

            {/* Contact section removed per request */}

      </div>
    </LegalPageLayout>
  );
}

// Appended: Terms Investor & Legal Appendix
export function TermsInvestorLegalAppendix() {
  return (
    <div className="border-t border-gray-200 bg-white" id="terms-investor-appendix">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-base text-gray-700 leading-relaxed">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">Terms Investor & Legal Appendix</h2>
          <p className="text-base text-gray-600">Additional enforceable clauses and enterprise clarity.</p>
        </div>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Arbitration & Venue</h3>
          <p>Any dispute shall be resolved by binding arbitration in San Francisco, CA, under AAA rules. Parties waive class actions and agree to individual proceedings, except where prohibited by law.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Force Majeure</h3>
          <p>Neither party is liable for delays or failures caused by events beyond reasonable control, including but not limited to natural disasters, labor disputes, internet failures, cyberattacks, acts of government, or third‑party outages.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Notices</h3>
          <p>Formal notices to SaveCash must be sent to privacy.savecash@gmail.com. We may provide notices via email, in‑app messaging, or posting on the website.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Assignment</h3>
          <p>You may not assign these Terms without our prior written consent. We may assign in connection with a merger, acquisition, or sale of assets.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Severability & Waiver</h3>
          <p>If any provision is held unenforceable, the remainder stays in effect. No waiver of any term is a waiver of any other term, nor a continuing waiver.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Updates to Terms</h3>
          <p>We may update these Terms; material changes are communicated in advance. Continued use following effective date constitutes acceptance.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Entire Agreement</h3>
          <p>These Terms, along with referenced policies (Privacy, Cookie, Return, Shipping, EULA, Acceptable Use), form the entire agreement and supersede prior understandings.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Confidentiality</h3>
          <p>Both parties agree to keep Confidential Information strictly confidential and use it only as necessary to perform obligations under these Terms. Confidential Information excludes information that is public without breach, independently developed, or rightfully received from a third party.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Compliance Reports & Audit Rights</h3>
          <p>Upon reasonable request and NDA execution, SaveCash may provide summaries of third‑party audits or certifications (e.g., SOC 2 when available). Customer‑initiated audits are limited to document reviews and subject to reasonable scheduling and scope.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Order of Precedence</h3>
          <p>If a signed agreement conflicts with these online Terms, the signed agreement controls. Otherwise, these Terms and referenced policies together govern your use.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Survival</h3>
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
    <div className="border-t border-gray-200 bg-white" id="terms-additional-legal">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-base text-gray-700 leading-relaxed">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">Terms and Conditions</h2>
          <p className="text-base text-gray-600">Effective Date: October 28, 2025</p>
          <p className="text-base text-gray-700 mt-2">Company: SaveCash · Address: Built in California. Operating globally. · Email: privacy.savecash@gmail.com</p>
        </div>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h3>
          <p>By accessing, downloading, installing, or using the Services, you agree to be bound by these Terms, our Privacy Policy, and any additional terms incorporated by reference.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">2. Eligibility</h3>
          <p>You must be at least 13 years of age (or older where required by local law). You affirm you can form a binding contract and are not barred by applicable law.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">3. Modifications to Terms</h3>
          <p>We may modify these Terms for operational, legal, or regulatory reasons, or to reflect updates to our Services. Users will be notified prior to effectiveness.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">4. The Services</h3>
          <p>SaveCash provides an AI-powered savings optimization and financial-insight platform and may introduce or discontinue features at any time.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">5. Account Registration</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and promptly update your information</li>
            <li>Keep your login credentials secure and confidential</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">6. Subscription and Payment Terms</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide valid payment information and authorize recurring fees</li>
            <li>Cancel prior to renewal to avoid automatic billing</li>
            <li>Fees are non-refundable unless stated otherwise or required by law</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">7. Intellectual Property</h3>
          <p>All content and technology are owned or licensed by SaveCash and protected by law. You may not copy, reverse engineer, or imply endorsement without consent.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">8. User Conduct</h3>
          <p>Prohibited activities include unauthorized access, interference, malicious software, and violations of laws or third-party rights. Violations may result in termination.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">9. User-Generated Content</h3>
          <p>You retain ownership but grant SaveCash a worldwide, royalty-free, irrevocable, transferable, sublicensable license to operate and improve the Services.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">10. Privacy and Data Protection</h3>
          <p>Your use is governed by our Privacy Policy. We implement safeguards and comply with applicable laws (GDPR, CCPA, etc.).</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">11. Third-Party Services and Links</h3>
          <p>We are not responsible for third-party content or practices. Access at your own risk and review their terms.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">12. Disclaimer of Warranties</h3>
          <p>The Services are provided “as is” and “as available” without warranties of any kind.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">13. Limitation of Liability</h3>
          <p>To the maximum extent permitted, SaveCash is not liable for indirect or consequential damages. Aggregate liability is limited to amounts paid in the preceding 12 months.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">14. Indemnification</h3>
          <p>You agree to indemnify SaveCash for claims arising from your use, violations of these Terms, or infringement of rights.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">15. Governing Law and Dispute Resolution</h3>
          <p>Governed by California law. Disputes resolved exclusively in San Francisco County, CA courts (or as otherwise specified by policy).</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">16. Termination</h3>
          <p>We may suspend or terminate access with or without cause. Certain sections survive termination.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">17. Entire Agreement</h3>
          <p>These Terms, along with related policies, constitute the entire agreement.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">18. Contact Information</h3>
          <p>SaveCash · Built in California. Operating globally. · Email: privacy.savecash@gmail.com</p>
        </section>
      </div>
    </div>
  );
}
