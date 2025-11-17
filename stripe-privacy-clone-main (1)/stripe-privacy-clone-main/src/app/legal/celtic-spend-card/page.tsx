'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function CelticSpendCardPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Issuing Bank Terms</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                These Issuing Bank Terms ("Terms") govern the use of SaveCash-issued payment cards and related services provided through our issuing bank partnerships. When you use a SaveCash-issued card or related banking services, you agree to be bound by these Terms in addition to your SaveCash Services Agreement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Card Issuance and Eligibility</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash issues payment cards through our issuing bank partners. To be eligible for a SaveCash card, you must meet certain requirements including:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Valid identification and verification of identity</li>
                <li>Active SaveCash account in good standing</li>
                <li>Compliance with applicable laws and regulations</li>
                <li>Completion of required onboarding processes</li>
                <li>Agreement to all applicable terms and disclosures</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. Card Usage</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Your SaveCash card may be used to make purchases and conduct transactions worldwide where the card network is accepted. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Use the card only for lawful purposes</li>
                <li>Not exceed available balances or credit limits</li>
                <li>Protect card security information (PIN, CVV, etc.)</li>
                <li>Report lost or stolen cards immediately</li>
                <li>Comply with all card network rules</li>
                <li>Use the card in accordance with applicable laws</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">3. Account Security and Responsibilities</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You are solely responsible for maintaining the security of your card and account information. This includes:
              </p>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">3.1 Security Obligations</h3>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Keep your card in a secure location</li>
                <li>Never share your PIN with anyone</li>
                <li>Monitor your account regularly for unauthorized activity</li>
                <li>Report suspicious transactions immediately</li>
                <li>Protect online banking credentials</li>
                <li>Keep contact information current for fraud alerts</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">3.2 Liability for Unauthorized Transactions</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You may be liable for unauthorized transactions if you fail to promptly report a lost or stolen card or if you negligently disclose your card information. Federal law limits your liability for unauthorized card transactions, but you must report them promptly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">4. Card Limits and Controls</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash may establish spending limits, daily transaction limits, or other restrictions on your card usage. These limits may be adjusted based on your account history, risk factors, and regulatory requirements. You can manage certain limits through your SaveCash account dashboard.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">5. Fees and Charges</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Various fees may apply to your card usage, including:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Monthly or annual card fees</li>
                <li>ATM withdrawal fees</li>
                <li>Foreign transaction fees</li>
                <li>Overdraft or insufficient funds fees</li>
                <li>Card replacement fees</li>
                <li>Inactivity fees</li>
              </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                All fees are disclosed in your account agreement and fee schedule. We will notify you of any fee changes in accordance with applicable law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">6. Card Cancellation and Expiration</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash may cancel, suspend, or restrict your card at any time for reasons including account closure, suspected fraud, violation of these Terms, or as required by law. Cards expire on the date indicated on the physical card. You are responsible for destroying expired cards.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">7. Dispute Resolution</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                If you have a dispute about a transaction on your card, you may contact us to file a dispute. We will investigate disputes in accordance with applicable law and card network rules. You must provide all requested information and documentation to support your dispute.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">8. Privacy and Data Protection</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Your use of SaveCash cards is subject to our Privacy Policy. We collect, use, and share card-related information as necessary to provide services, prevent fraud, comply with law, and for other purposes described in our Privacy Policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">9. Contact Information</h2>
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
