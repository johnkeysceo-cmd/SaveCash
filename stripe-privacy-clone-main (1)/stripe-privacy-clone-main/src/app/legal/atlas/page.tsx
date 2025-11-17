'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function AtlasPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">SaveCash Atlas Agreement</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This SaveCash Atlas Agreement ("Agreement") governs your use of SaveCash Atlas business formation and incorporation services. SaveCash Atlas provides technology-enabled services to help you form and manage business entities in various jurisdictions. By using SaveCash Atlas services, you agree to be bound by this Agreement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Services Provided</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash Atlas provides business formation and incorporation services including:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Business entity formation (LLCs, corporations, etc.)</li>
                <li>Registered agent services</li>
                <li>Business license and permit assistance</li>
                <li>EIN (Employer Identification Number) application</li>
                <li>Annual compliance and reporting support</li>
                <li>Business address and mail forwarding</li>
                <li>Compliance monitoring and alerts</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. Service Limitations</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash Atlas services are technology-enabled administrative tools that streamline business formation paperwork and filings. Our services:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Facilitate government filings and paperwork</li>
                <li>Provide access to registered agent services</li>
                <li>Assist with compliance documentation</li>
                <li>Do not constitute legal or tax advice</li>
                <li>May not cover all entity types in all jurisdictions</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">3. Not Legal Advice</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash Atlas services do not constitute legal, tax, or professional advice. You should consult with qualified legal, tax, and business advisors to determine the best structure and approach for your business. SaveCash is not a law firm and does not provide legal services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">4. Contact Information</h2>
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6 mt-4">
                <p className="text-[var(--color-text-primary)]">
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
