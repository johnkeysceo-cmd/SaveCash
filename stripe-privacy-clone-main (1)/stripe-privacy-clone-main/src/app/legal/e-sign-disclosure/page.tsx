'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function ESIGNDisclosurePage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">E-SIGN Disclosure and Consent</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This disclosure and consent agreement ("Disclosure") provides important information about your rights regarding electronic signatures, electronic records, and electronic disclosures in accordance with the Electronic Signatures in Global and National Commerce Act (15 U.S.C. §§ 7001 et seq.) ("E-SIGN Act"), the Uniform Electronic Transactions Act ("UETA"), and applicable state laws.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                By using SaveCash services, you acknowledge that you have read and understood this Disclosure, and you expressly consent to the use of electronic signatures, electronic records, and electronic delivery of all documents, notices, disclosures, agreements, and communications in connection with the SaveCash services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Scope of Electronic Communications</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Your consent to electronic communications applies to all documents, notices, disclosures, statements, and communications that we may be required or permitted to provide to you in connection with:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Your SaveCash account agreement and related terms of service</li>
                <li>Privacy policies, data processing agreements, and privacy disclosures</li>
                <li>Account statements, transaction histories, and financial records</li>
                <li>Fee schedules, pricing information, and billing notifications</li>
                <li>Notices of changes to terms, fees, or services</li>
                <li>Legal notices, disclosures, and regulatory communications</li>
                <li>Customer service communications and support documentation</li>
                <li>Tax forms and regulatory filings where applicable</li>
                <li>Fraud alerts and security notices</li>
                <li>Any other documents or communications related to your SaveCash services</li>
              </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This consent applies to all communications required to be in writing, including those required by applicable law, regulation, or regulatory guidance.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. System Requirements</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                To access and retain electronic documents and communications, you must have the following hardware and software capabilities:
              </p>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">2.1 Hardware Requirements</h3>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>A personal computer, tablet, or smartphone with internet connectivity</li>
                <li>Sufficient storage space to download and save documents</li>
                <li>A printer if you wish to print copies of electronic documents</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">2.2 Software Requirements</h3>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>A current web browser (Chrome, Firefox, Safari, or Edge) capable of displaying PDF documents</li>
                <li>Adobe Acrobat Reader or compatible PDF viewing software</li>
                <li>A valid email account and email software capable of receiving attachments</li>
                <li>Software to enable electronic signatures when signing documents</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">2.3 Ongoing Access</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You are responsible for ensuring that your system requirements remain current. If we change our system requirements and such changes materially affect your ability to access or retain electronic documents, we will provide you with advance notice and an opportunity to withdraw your consent to electronic delivery.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">3. Your Right to Paper Copies</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You have the right at any time to receive any document we provide electronically in paper form. You may request a paper copy by contacting us at privacy.savecash@gmail.com. We may charge a reasonable fee for providing paper copies as permitted by applicable law. If you request paper copies, we will continue to provide such documents electronically until such time as we have updated our systems to honor your request to receive paper copies only.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">4. Withdrawing Consent</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You may withdraw your consent to electronic communications at any time by notifying us at privacy.savecash@gmail.com. If you withdraw consent:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>We will begin sending you paper copies of all subsequent documents within 10 business days</li>
                <li>You may not be able to continue using certain online-only SaveCash services that require electronic consent</li>
                <li>Your withdrawal of consent will not affect the legal effectiveness, validity, or enforceability of electronic documents provided before such withdrawal</li>
                <li>We may suspend or terminate your access to SaveCash services if electronic consent is required for their use</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">5. Updating Contact Information</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You are responsible for providing us with accurate and current email addresses and other contact information. You must promptly notify us of any change to your email address or other contact information through your SaveCash account dashboard or by contacting us at privacy.savecash@gmail.com. We are not responsible for communications that are undelivered or delayed due to incorrect or outdated contact information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">6. Electronically Signed Documents</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                When you electronically sign documents through SaveCash services, the following terms apply:
              </p>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">6.1 Legal Effect</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Your electronic signature has the same legal effect, validity, and enforceability as a written signature. Electronically signed documents are legally binding and enforceable in any court of law or other legal proceeding.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">6.2 Signature Methods</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We may use various electronic signature methods, including:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Typing your name into a signature field</li>
                <li>Clicking an "I Agree" or "Accept" button</li>
                <li>Uploading an image of your handwritten signature</li>
                <li>Using a digital signature service</li>
                <li>Biometric authentication or fingerprint signing where available</li>
                <li>Multi-factor authentication combined with consent actions</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">6.3 Authentication</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                When you electronically sign documents through SaveCash, we may require you to authenticate your identity using:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Your SaveCash account credentials</li>
                <li>Multi-factor authentication</li>
                <li>Identity verification questions</li>
                <li>SMS or email verification codes</li>
                <li>Other security measures we deem appropriate</li>
              </ul>

            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">7. Storage and Access to Electronic Records</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash maintains electronic records of all documents and communications provided to you. You may access these records at any time through your SaveCash account dashboard. We will maintain copies of electronically signed documents and other records in accordance with applicable record retention requirements.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You are responsible for downloading, printing, or otherwise saving copies of electronic documents for your records. We recommend that you keep copies of all electronically signed agreements and important documents.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">8. Privacy and Security</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We employ industry-standard security measures to protect electronic documents and signatures, including:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Encryption of electronic communications and stored documents</li>
                <li>Secure transmission protocols (HTTPS, TLS)</li>
                <li>Access controls and authentication requirements</li>
                <li>Audit logging of all access and activities</li>
                <li>Regular security assessments and monitoring</li>
              </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                For more information about our security practices, please review our Privacy Policy and Security documentation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">9. Federal Law Compliance</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This Disclosure complies with the E-SIGN Act, which provides that electronic signatures and records have the same legal effect as their paper counterparts when certain requirements are met. The E-SIGN Act requires that we obtain your affirmative consent to conduct business electronically and provide this disclosure about your rights.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                The E-SIGN Act does not apply to certain types of documents, including wills, trusts, certain family law documents, notices of default or foreclosure, termination of utility services, eviction notices, and cancellation of health or life insurance. If you need to execute such documents in paper form, you may contact us to make appropriate arrangements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">10. State Law</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Many states have adopted UETA or similar laws that govern electronic transactions. This Disclosure is also intended to comply with applicable state electronic signature laws to the extent that they differ from or provide additional protections beyond the E-SIGN Act.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">11. Consent Confirmation</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                By clicking "I Agree," "Accept," or similar consent buttons, or by using SaveCash services, you confirm that:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>You have read and understood this E-SIGN Disclosure</li>
                <li>You agree to conduct business electronically with SaveCash</li>
                <li>You have access to the hardware and software required to receive and retain electronic documents</li>
                <li>You consent to receiving all documents and communications electronically as described in this Disclosure</li>
                <li>You understand that you may withdraw this consent at any time as described above</li>
                <li>You understand that electronic signatures have the same legal effect as written signatures</li>
                <li>You can print or download electronic documents for your records</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">12. Contact Information</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                If you have questions about this E-SIGN Disclosure or your electronic consent, please contact us at:
              </p>
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6 mt-4">
                <p className="text-[var(--color-text-primary)] mb-3">
                  <strong className="font-medium">Email:</strong> privacy.savecash@gmail.com
                </p>
                <p className="text-[var(--color-text-primary)]">
                  <strong className="font-medium">Website:</strong> <a href="/" className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] hover:underline">SaveCash Privacy Center</a>
                </p>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
