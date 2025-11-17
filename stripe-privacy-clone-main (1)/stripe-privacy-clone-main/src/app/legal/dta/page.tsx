'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function DTAPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Data Transfers Addendum</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This Data Transfers Addendum ("Addendum") supplements the Data Processing Agreement and specifies the mechanisms and safeguards SaveCash employs to facilitate lawful international transfers of personal data. This Addendum is incorporated by reference into the Data Processing Agreement and applies to all cross-border data transfers conducted by SaveCash in connection with the Services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Transfer Mechanisms</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                To enable lawful international transfers, SaveCash relies on various approved transfer mechanisms depending on the origin and destination of the data:
              </p>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">1.1 Standard Contractual Clauses (SCCs)</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                For transfers from the EEA, UK, and Switzerland to third countries, SaveCash uses the European Commission's Standard Contractual Clauses (Module Two for processor-to-processor transfers and Module Three for processor-to-controller transfers) as approved by the European Data Protection Board.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">1.2 Adequacy Decisions</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash transfers personal data to countries recognized by the European Commission or other regulatory authorities as providing adequate levels of data protection, including Andorra, Argentina, Canada, Faroe Islands, Guernsey, Israel, Isle of Man, Japan, Jersey, New Zealand, Republic of Korea, Switzerland, and the UK.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">1.3 Binding Corporate Rules</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash's intra-group data transfers are governed by Binding Corporate Rules that have been approved by relevant supervisory authorities, ensuring consistent data protection standards across all SaveCash entities.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">1.4 Derogations</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                In limited circumstances where other mechanisms are not available, SaveCash may rely on GDPR Article 49 derogations, such as explicit consent, necessity for contract performance, or establishment of legal claims.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. Supplementary Measures</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Following the European Court of Justice's Schrems II decision, SaveCash implements supplementary technical and organizational measures to ensure transferred data receives essentially equivalent protection:
              </p>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">2.1 Technical Measures</h3>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>End-to-end encryption for data in transit (TLS 1.3)</li>
                <li>Encryption at rest using AES-256</li>
                <li>Pseudonymization where appropriate</li>
                <li>Secure deletion and key management</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">2.2 Organizational Measures</h3>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Contractual commitments from sub-processors</li>
                <li>Internal governance and policies</li>
                <li>Regular security training and awareness</li>
                <li>Transparency reports on government access requests</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">2.3 Transfer Impact Assessments</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash conducts Transfer Impact Assessments to evaluate risks associated with specific transfer destinations and implements appropriate mitigations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">3. Contact Information</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                For questions about international data transfers, contact us at:
              </p>
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6 mt-4">
                <p className="text-[var(--color-text-primary)] mb-3">
                  <strong className="font-medium">Email:</strong> privacy.savecash@gmail.com
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
