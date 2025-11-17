'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function FeeCreditsPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Fee Credit Terms</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                These Fee Credit Terms govern promotional credits, fee offsets, and other pricing incentives offered by SaveCash. Fee credits may be offered through promotions, referral programs, volume discounts, or other initiatives.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Credit Terms</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Fee credits:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Have expiration dates as specified in the offer</li>
                <li>Are non-transferable to other accounts</li>
                <li>Cannot be redeemed for cash or refunded</li>
                <li>May have usage limits or restrictions</li>
                <li>Subject to terms and conditions in the promotional offer</li>
                <li>Cannot be applied retroactively to past charges</li>
                <li>May be revoked if terms are violated</li>
              </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash reserves the right to modify, suspend, or terminate any fee credit program at any time with or without notice. Fee credits are promotional benefits that may be discontinued at our discretion.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. Eligibility and Limitations</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Fee credits may be subject to various eligibility requirements and usage limitations:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Account must be in good standing</li>
                <li>May require minimum transaction volume</li>
                <li>One-time use only unless otherwise specified</li>
                <li>Cannot be combined with other offers without authorization</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">3. Contact Information</h2>
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
