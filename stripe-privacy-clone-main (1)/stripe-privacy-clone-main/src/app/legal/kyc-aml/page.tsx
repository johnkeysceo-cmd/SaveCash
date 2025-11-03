'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function KYCPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">KYC / AML Policy</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash is committed to preventing money laundering, terrorist financing, and other financial crimes. This Know Your Customer ("KYC") and Anti-Money Laundering ("AML") Policy establishes our procedures for verifying user identities, monitoring transactions, and complying with applicable regulations including the Bank Secrecy Act (BSA), USA PATRIOT Act, FinCEN regulations, and international AML standards.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. KYC Procedures</h2>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">1.1 Identity Verification</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Prior to account activation, all users must undergo identity verification:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Government-issued identification:</strong> Valid driver's license, passport, or state-issued ID card with photo</li>
                <li><strong>Address verification:</strong> Utility bills, bank statements, or government correspondence not older than 90 days</li>
                <li><strong>Date of birth verification:</strong> Official documents confirming date of birth</li>
                <li><strong>Social Security Number (SSN) or Tax ID:</strong> For US residents and businesses</li>
                <li><strong>Liveness detection:</strong> Biometric verification using facial recognition and document authenticity checks</li>
                <li><strong>Email and phone verification:</strong> Confirmed contact information with active verification codes</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">1.2 Enhanced Due Diligence (EDD)</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Enhanced verification procedures apply to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Politically Exposed Persons (PEPs) and their close associates</li>
                <li>Individuals from high-risk jurisdictions designated by FATF or OFAC</li>
                <li>Businesses operating in cash-intensive or high-risk industries</li>
                <li>Transactions exceeding regulatory thresholds ($3,000 per transaction, $10,000 cumulative monthly)</li>
                <li>Any activity that triggers our automated risk scoring system</li>
                <li>Corporate accounts and beneficial ownership structures</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">1.3 Ongoing Monitoring</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We continuously monitor accounts for suspicious activities including:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Unusual transaction patterns or velocity changes</li>
                <li>Transactions to high-risk jurisdictions or sanctioned entities</li>
                <li>Potential structuring to avoid reporting thresholds</li>
                <li>Account relationships with sanctioned individuals or entities</li>
                <li>Changes in account behavior or user profile information</li>
                <li>Multiple accounts linked to the same individual or device</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. AML Compliance</h2>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">2.1 Suspicious Activity Reporting</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash is required by law to file Suspicious Activity Reports (SARs) with FinCEN when we detect potentially suspicious transactions. We maintain robust SAR filing procedures:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Automated detection systems analyzing millions of transaction patterns in real-time</li>
                <li>Manual review by trained compliance analysts and AML specialists</li>
                <li>Documentation and investigation of all flagged activities</li>
                <li>Filing SARs within required timeframes (no later than 30 days after detection)</li>
                <li>Extension requests filed when complex investigations require additional time</li>
                <li>Strict confidentiality and prohibited tipping off subjects of investigations</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">2.2 Currency Transaction Reports (CTRs)</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We file CTRs for transactions exceeding $10,000 in value and monitor for patterns indicating structuring or smurfing.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">2.3 OFAC Sanctions Screening</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                All users and transactions are screened against Office of Foreign Assets Control (OFAC) sanctions lists and other government watchlists. We maintain a zero-tolerance policy for interactions with sanctioned entities and will immediately freeze or close accounts identified on sanctions lists.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">3. Risk-Based Approach</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash employs a comprehensive risk-based approach to compliance, categorizing users into risk tiers and applying proportional controls:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Low Risk:</strong> Standard KYC procedures, periodic reviews every 24-36 months</li>
                <li><strong>Medium Risk:</strong> Enhanced verification, annual reviews, additional transaction monitoring</li>
                <li><strong>High Risk:</strong> Continuous monitoring, quarterly reviews, mandatory senior management approval for any account changes</li>
                <li><strong>Prohibited:</strong> Immediate account closure and reporting to authorities</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">4. Customer Due Diligence Requirements</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                For business accounts, we require:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Business registration documents and incorporation certificates</li>
                <li>Articles of incorporation, operating agreements, or partnership agreements</li>
                <li>Tax identification numbers and business licenses</li>
                <li>Beneficial ownership information for all owners with 25% or more equity</li>
                <li>Identity verification for all authorized signatories and account administrators</li>
                <li>Ultimate beneficial owner (UBO) identification for complex corporate structures</li>
                <li>Proof of business address and physical premises</li>
                <li>Business purpose and expected transaction volumes</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">5. Recordkeeping and Data Retention</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We maintain comprehensive records of:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>All KYC documentation and identity verification records for 5 years after account closure</li>
                <li>Transaction records for 5 years from transaction date, as required by BSA</li>
                <li>SAR filings and supporting documentation for 5 years from filing date</li>
                <li>Suspicious activity investigation files for regulatory compliance and audit purposes</li>
                <li>Training records and certifications for compliance personnel</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">6. Sanctions Compliance</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash strictly complies with all applicable sanctions programs administered by OFAC, the United Nations, the European Union, and other relevant authorities. We:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Screen all users against sanctions lists during onboarding and continuously thereafter</li>
                <li>Block transactions to or from sanctioned jurisdictions or entities</li>
                <li>Maintain restricted party screening databases updated daily</li>
                <li>Immediately freeze assets and close accounts of sanctioned individuals or entities</li>
                <li>Report violations to appropriate regulatory authorities</li>
                <li>Conduct regular sanctions compliance training for all personnel</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">7. Compliance Training and Testing</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash maintains a robust compliance training program:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Mandatory annual AML training for all employees</li>
                <li>Role-specific training for compliance, operations, and customer service personnel</li>
                <li>Ongoing updates on emerging money laundering typologies and regulatory changes</li>
                <li>Third-party compliance assessments and external audits</li>
                <li>Independent testing of AML systems and controls</li>
                <li>Management oversight and board-level governance</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">8. Regulatory Cooperation</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash cooperates fully with law enforcement, regulatory authorities, and financial intelligence units. We respond promptly to information requests, subpoenas, and regulatory examinations while maintaining appropriate confidentiality protocols.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">9. User Obligations</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Users must:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Provide accurate, complete, and current information during account registration and verification</li>
                <li>Promptly update any changes to personal or business information</li>
                <li>Not use SaveCash services for any illegal or fraudulent purpose</li>
                <li>Cooperate with any requests for additional information or documentation</li>
                <li>Understand that we may suspend or close accounts that fail verification or exhibit suspicious behavior</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">10. Contact Information</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                For questions about our KYC/AML compliance or to report suspicious activity:
              </p>
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6 mt-4">
                <p className="text-[var(--color-text-primary)] mb-3">
                  <strong className="font-medium">Compliance Department:</strong> privacy.savecash@gmail.com
                </p>
                <p className="text-[var(--color-text-primary)]">
                  <strong className="font-medium">Regulatory Inquiries:</strong> privacy.savecash@gmail.com
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

