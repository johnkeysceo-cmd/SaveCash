'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function SPCPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">SaveCash Payments Company Terms</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                These SaveCash Payments Company Terms ("Terms") govern the relationship between SaveCash Payments Company, a licensed money transmitter, and merchants ("Merchants," "you," or "your") using our payment services. SaveCash Payments Company acts as the merchant of record for transactions processed through the Services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Processing Services</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash Payments Company processes credit card and debit card transactions on your behalf, subject to applicable card network rules, federal and state regulations, and these Terms. As the merchant of record, we:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Submit transactions to card networks for authorization and settlement</li>
                <li>Accept funds on your behalf from card networks</li>
                <li>Disburse funds to your designated bank account</li>
                <li>Handle chargebacks and disputes in accordance with network rules</li>
                <li>Comply with all applicable regulatory requirements</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. Regulatory Compliance</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash Payments Company operates in compliance with all applicable federal and state money transmitter laws and regulations, including:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Bank Secrecy Act (BSA) and anti-money laundering requirements</li>
                <li>State money transmitter licensing requirements</li>
                <li>FinCEN registration and reporting obligations</li>
                <li>Office of Foreign Assets Control (OFAC) sanctions compliance</li>
                <li>Consumer Financial Protection Bureau (CFPB) regulations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">3. Transaction Processing</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Transactions are processed subject to network authorization, availability of funds, and compliance with applicable laws. We reserve the right to decline, hold, or reverse any transaction that we determine may violate applicable law or pose an unacceptable risk.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">4. Settlement and Fees</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Funds from approved transactions are settled to your designated account according to your selected schedule. All fees are disclosed in your pricing plan and deducted from transaction proceeds before settlement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">5. Contact Information</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                For questions about these terms, contact us at:
              </p>
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
