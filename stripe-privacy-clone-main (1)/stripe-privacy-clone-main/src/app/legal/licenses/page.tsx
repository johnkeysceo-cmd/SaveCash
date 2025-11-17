'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function LicensesPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Licenses</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This Licenses page provides information about licenses, registrations, and regulatory approvals held by SaveCash and our payment processing entities.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Money Transmitter Licenses</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash maintains money transmitter licenses in various U.S. states and jurisdictions as required by applicable laws. Our licensing enables us to provide payment processing and money transmission services nationwide.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. Regulatory Registration</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash is registered with FinCEN (Financial Crimes Enforcement Network) as a money services business and complies with all applicable federal regulations including anti-money laundering and Bank Secrecy Act requirements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">3. Compliance Certifications</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash maintains compliance certifications including PCI DSS Level 1, SOC 2 Type II, and meets standards for GDPR, CCPA, and other applicable privacy regulations.
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

