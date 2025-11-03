'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Regulatory Compliance & Certifications</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash maintains the highest standards of regulatory compliance, security, and operational excellence. We invest continuously in certifications, audits, and controls to ensure the security, privacy, and integrity of our platform and user data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Security Certifications</h2>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">1.1 SOC 2 Type II Compliance</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash has achieved SOC 2 Type II certification, demonstrating our commitment to secure, available, and reliable operations. Our SOC 2 attestation covers:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Security:</strong> Protection against unauthorized access and attacks through firewalls, encryption, and access controls</li>
                <li><strong>Availability:</strong> System uptime and operational performance meeting defined service levels</li>
                <li><strong>Processing Integrity:</strong> Accurate, complete, and authorized processing of transactions and data</li>
                <li><strong>Confidentiality:</strong> Restricted access to confidential information</li>
                <li><strong>Privacy:</strong> Collection, use, retention, and disclosure of personal information in accordance with privacy commitments</li>
              </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We undergo annual independent audits conducted by a leading accounting firm. SOC 2 Type II reports are available to enterprise customers under NDA.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">1.2 PCI DSS Level 1 Compliance</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash is certified as a PCI DSS Level 1 Service Provider, the highest level of certification for payment card data security. We maintain:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>End-to-end encryption of cardholder data in transit and at rest</li>
                <li>Network segmentation and firewall protection</li>
                <li>Comprehensive access controls and authentication mechanisms</li>
                <li>Regular security testing and vulnerability scans</li>
                <li>Encrypted storage and restricted data retention periods</li>
                <li>Quarterly external vulnerability assessments by Approved Scanning Vendors (ASVs)</li>
                <li>Annual on-site assessments by Qualified Security Assessors (QSAs)</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">1.3 ISO 27001 Information Security Management</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash is working toward ISO 27001 certification, implementing internationally recognized information security management system (ISMS) standards including:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Comprehensive risk assessments and management frameworks</li>
                <li>Information security policies and procedures</li>
                <li>Continuous improvement through regular audits and management reviews</li>
                <li>Employee awareness and training programs</li>
                <li>Business continuity and incident management procedures</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">1.4 Penetration Testing & Security Audits</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We conduct regular third-party penetration testing and security audits:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Annual penetration tests by CREST-certified security firms</li>
                <li>Quarterly application security assessments</li>
                <li>Continuous vulnerability scanning and remediation</li>
                <li>Bug bounty program with ethical security researchers</li>
                <li>Red team exercises testing incident response capabilities</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. Regulatory Compliance</h2>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">2.1 Bank Secrecy Act (BSA) & AML Compliance</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash maintains comprehensive anti-money laundering (AML) and Bank Secrecy Act compliance programs, including:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Customer identification and verification (KYC) procedures</li>
                <li>Suspicious activity monitoring and reporting to FinCEN</li>
                <li>Sanctions screening against OFAC and other watchlists</li>
                <li>Currency transaction reporting (CTR) compliance</li>
                <li>Structured transaction detection and prevention</li>
                <li>Ongoing AML training for all relevant personnel</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">2.2 GDPR & EU Data Protection</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash complies with the General Data Protection Regulation (GDPR) for European users:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Lawful basis for processing personal data</li>
                <li>Data minimization and purpose limitation principles</li>
                <li>User rights including access, rectification, erasure, portability, and objection</li>
                <li>Data Protection Impact Assessments (DPIAs) for high-risk processing</li>
                <li>Cross-border data transfer safeguards (Standard Contractual Clauses)</li>
                <li>GDPR-mandated data breach notification procedures</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">2.3 CCPA & California Privacy Rights</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                California residents have additional privacy rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Right to know what personal information is collected, used, and shared</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of the sale of personal information (SaveCash does not sell personal information)</li>
                <li>Right to non-discrimination for exercising privacy rights</li>
                <li>Transparent privacy policy disclosures</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">2.4 Money Transmitter Licenses</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash holds or is pursuing money transmitter licenses in all states where required. We maintain compliance with:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>State-specific licensing requirements and annual renewals</li>
                <li>Surety bonds and minimum net worth requirements</li>
                <li>Consumer protection and disclosure obligations</li>
                <li>Recordkeeping and regulatory reporting</li>
                <li>Examinations and audits by state regulators</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">2.5 OFAC Sanctions Compliance</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We maintain strict compliance with Office of Foreign Assets Control (OFAC) sanctions programs, blocking transactions with sanctioned individuals, entities, or jurisdictions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">3. Operational Controls</h2>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">3.1 Access Controls</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Robust access management ensures only authorized personnel access systems and data:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Multi-factor authentication (MFA) required for all system access</li>
                <li>Role-based access control (RBAC) with principle of least privilege</li>
                <li>Regular access reviews and role recertification</li>
                <li>Background checks for all employees and contractors</li>
                <li>Employee termination and offboarding procedures</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">3.2 Data Encryption</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                All sensitive data is encrypted using industry-standard algorithms:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>TLS 1.3 for data in transit with perfect forward secrecy</li>
                <li>AES-256 encryption for data at rest</li>
                <li>Key management through Hardware Security Modules (HSMs)</li>
                <li>Separate encryption keys for production, staging, and development environments</li>
                <li>Post-quantum cryptography initiatives for future-proof security</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">3.3 Incident Response & Business Continuity</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Comprehensive incident management and business continuity programs ensure rapid response to security events:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>24/7 security operations center (SOC) monitoring</li>
                <li>Defined incident response procedures and escalation paths</li>
                <li>Regular incident response drills and tabletop exercises</li>
                <li>Redundant infrastructure across multiple geographic regions</li>
                <li>Automated backup systems with tested disaster recovery procedures</li>
                <li>Regulatory breach notification processes aligned with GDPR, CCPA, and state requirements</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">4. Industry Standards & Frameworks</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash aligns with recognized industry frameworks and best practices:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>NIST Cybersecurity Framework:</strong> Identify, protect, detect, respond, and recover from cyber threats</li>
                <li><strong>OWASP Top 10:</strong> Protection against most critical web application security risks</li>
                <li><strong>FIDO2/WebAuthn:</strong> Passwordless authentication standards</li>
                <li><strong>FFIEC Guidelines:</strong> Banking industry security practices and risk management</li>
                <li><strong>BSIMM:</strong> Building Security In Maturity Model for secure software development</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">5. Third-Party Due Diligence</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                All vendors and service providers undergo rigorous security assessments:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Security questionnaires and risk assessments</li>
                <li>SOC 2 or equivalent certification requirements</li>
                <li>Contractual security and privacy obligations</li>
                <li>Continuous monitoring and periodic reassessments</li>
                <li>Incident notification requirements</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">6. Compliance Governance</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash maintains a robust compliance governance structure:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Dedicated compliance and security teams reporting to senior management</li>
                <li>Board-level oversight of security and compliance risks</li>
                <li>Regular compliance training and certification for all employees</li>
                <li>External legal and compliance advisors</li>
                <li>Continuous improvement programs based on audit findings and industry best practices</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">7. Contact Information</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                For compliance inquiries or to request audit reports:
              </p>
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6 mt-4">
                <p className="text-[var(--color-text-primary)] mb-3">
                  <strong className="font-medium">Compliance Team:</strong> privacy.savecash@gmail.com
                </p>
                <p className="text-[var(--color-text-primary)] mb-3">
                  <strong className="font-medium">Security Inquiries:</strong> privacy.savecash@gmail.com
                </p>
                <p className="text-[var(--color-text-primary)]">
                  <strong className="font-medium">Enterprise Sales:</strong> For SOC 2, PCI DSS, or ISO 27001 reports, contact enterprise@savecash.com
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

