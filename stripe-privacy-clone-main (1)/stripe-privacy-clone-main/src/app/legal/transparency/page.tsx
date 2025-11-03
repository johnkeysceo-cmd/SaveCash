'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function TransparencyPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Transparency Report</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This Transparency Report provides insight into SaveCash's commitment to user privacy, security practices, and government requests. We believe transparency builds trust and helps users make informed decisions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Government Requests and Data Disclosure</h2>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">1.1 Our Commitment</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash is committed to protecting user privacy and only discloses information when legally required. We carefully review all requests and push back on overbroad or unwarranted demands.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">1.2 2024 Statistics</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                In 2024, SaveCash received the following government requests:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Subpoenas:</strong> 0 requests received</li>
                <li><strong>Court Orders:</strong> 0 requests received</li>
                <li><strong>Search Warrants:</strong> 0 requests received</li>
                <li><strong>National Security Letters:</strong> 0 requests received</li>
                <li><strong>Other Government Requests:</strong> 0 requests received</li>
              </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We comply with applicable legal requirements while maximizing user privacy protections.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">1.3 Our Response Process</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                When we receive a government request:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>We verify the request is from a legitimate government authority</li>
                <li>We ensure the request is supported by appropriate legal process</li>
                <li>We narrow requests to the minimum data necessary</li>
                <li>We push back on overbroad or unconstitutional requests</li>
                <li>We notify affected users when legally permitted</li>
                <li>We require warrants for content access unless exigent circumstances exist</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. Security Incidents and Breaches</h2>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">2.1 2024 Incidents</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash maintains a robust security program. In 2024:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Confirmed data breaches:</strong> 0</li>
                <li><strong>Security incidents affecting user data:</strong> 0</li>
                <li><strong>Credential stuffing attacks:</strong> 0 successful</li>
                <li><strong>DDoS attacks:</strong> All mitigated successfully</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">2.2 Our Security Practices</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We maintain industry-leading security controls:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>End-to-end encryption of all sensitive data</li>
                <li>Regular security audits and penetration testing</li>
                <li>24/7 monitoring and incident response capabilities</li>
                <li>Employee security training and background checks</li>
                <li>Bug bounty program engaging ethical security researchers</li>
                <li>Compliance with SOC 2, PCI DSS, and ISO 27001 standards</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">2.3 Breach Notification Policy</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                In the event of a security incident affecting user data, SaveCash will:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Notify affected users within 72 hours of detection (where legally required)</li>
                <li>Report to relevant regulators per GDPR, CCPA, and state breach notification laws</li>
                <li>Provide clear information about the incident and steps taken to remediate</li>
                <li>Offer credit monitoring or identity theft protection when appropriate</li>
                <li>Update this Transparency Report with breach statistics</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">3. Content Moderation and Account Actions</h2>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">3.1 Account Suspensions</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                In 2024, SaveCash took the following account actions:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Accounts suspended for fraud:</strong> [Number]</li>
                <li><strong>Accounts closed for violations:</strong> [Number]</li>
                <li><strong>Accounts restricted pending verification:</strong> [Number]</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">3.2 Our Enforcement Process</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Before taking action, we:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Review account activity and transaction patterns</li>
                <li>Apply our Acceptable Use Policy consistently</li>
                <li>Provide users with notice and opportunity to appeal</li>
                <li>Document our reasoning for transparency and audit purposes</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">4. Third-Party Data Sharing</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash does not sell user data to third parties. We share data only with:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Partner banks providing deposit and payment services</li>
                <li>Service providers processing transactions (payment processors, Plaid, etc.)</li>
                <li>Compliance and verification vendors (identity verification, AML screening)</li>
                <li>Cloud infrastructure providers (AWS, Google Cloud) for hosting and storage</li>
              </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                All third parties are contractually required to protect your data and use it only for specified purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">5. Encryption and Security Controls</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                All sensitive data is encrypted:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>In transit:</strong> TLS 1.3 with perfect forward secrecy</li>
                <li><strong>At rest:</strong> AES-256 encryption</li>
                <li><strong>Key management:</strong> Hardware Security Modules (HSMs)</li>
                <li><strong>Authentication:</strong> Multi-factor authentication required</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">6. Accessibility and Compliance</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash is committed to accessibility:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>WCAG 2.1 AA compliance target</li>
                <li>Screen reader compatibility</li>
                <li>Keyboard navigation support</li>
                <li>Multi-language support (English, Spanish, more coming)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">7. Environmental and Social Responsibility</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash operates with environmental responsibility:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>100% renewable energy for cloud infrastructure</li>
                <li>Carbon-neutral operations since 2024</li>
                <li>Paperless operations and digital-first approach</li>
                <li>Supporting financial inclusion through accessible products</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">8. Updates to This Report</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This Transparency Report is updated annually and after material incidents. We strive to provide accurate, timely information while respecting legal and security constraints.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">9. Contact Information</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                For questions about this report:
              </p>
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6 mt-4">
                <p className="text-[var(--color-text-primary)] mb-3">
                  <strong className="font-medium">Transparency Team:</strong> privacy.savecash@gmail.com
                </p>
                <p className="text-[var(--color-text-primary)]">
                  <strong className="font-medium">Subject Line:</strong> Transparency Report Inquiry
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

