'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function PaymentTermsPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Payment Method Terms</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                These Payment Method Terms govern the various payment methods available through SaveCash services, including credit cards, debit cards, bank transfers, digital wallets, and alternative payment methods. These terms supplement your SaveCash Services Agreement and specify the unique terms, limitations, and requirements applicable to each payment method.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Credit and Debit Cards</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash accepts major credit and debit card brands including Visa, Mastercard, American Express, and Discover. Transactions are subject to network rules and processing fees.
              </p>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">1.1 Processing Requirements</h3>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Proper authorization must be obtained before completing transactions</li>
                <li>Cardholder identification may be required for certain transactions</li>
                <li>Transactions must comply with all applicable network rules</li>
                <li>You must retain transaction records for 7 years</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">1.2 Processing Times</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Most card transactions settle within 2 business days, though processing times may vary based on transaction type, risk factors, and settlement schedules.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">1.3 Fees</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Standard processing fees apply as disclosed in your pricing plan. Fees are deducted from transaction amounts before settlement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. ACH Transfers</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Automated Clearing House (ACH) transfers enable bank account-to-bank account transfers for various use cases.
              </p>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">2.1 Types of ACH Transactions</h3>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>ACH debits for collecting payments from bank accounts</li>
                <li>ACH credits for disbursing funds to bank accounts</li>
                <li>Same-day ACH for expedited processing</li>
                <li>Recurring ACH for subscriptions and installment payments</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">2.2 Processing Times</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Standard ACH transfers typically process within 3-5 business days. Same-day ACH transfers are available for an additional fee and typically settle the same business day.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">2.3 Authorization Requirements</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You must obtain proper authorization from customers before initiating ACH debits. Authorization must include account information, amount, frequency, and clear disclosure of terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">3. Digital Wallets</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash supports various digital wallet payment methods including Apple Pay, Google Pay, Samsung Pay, and other wallet services.
              </p>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">3.1 Supported Wallets</h3>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Apple Pay (iOS and web)</li>
                <li>Google Pay (Android and web)</li>
                <li>Samsung Pay (Samsung devices)</li>
                <li>Other wallet services as they become available</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">3.2 Processing and Fees</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Digital wallet transactions are processed as credit or debit card transactions and subject to the same fees and terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">4. Wire Transfers</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash facilitates domestic and international wire transfers for high-value transactions.
              </p>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">4.1 Processing Times</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Domestic wire transfers typically process the same business day if initiated before cutoff times. International wires may take 1-5 business days depending on the destination country.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">4.2 Fees</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Wire transfer fees apply as specified in your pricing plan. Fees are typically higher for international transfers.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">5. Alternative Payment Methods</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash may support additional payment methods including buy-now-pay-later options, local payment methods, and region-specific alternatives.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Terms, fees, and processing times for alternative payment methods vary by provider and will be disclosed when such methods are made available to you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">6. Contact Information</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                For questions about payment methods, contact us at:
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
