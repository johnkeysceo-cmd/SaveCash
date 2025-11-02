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
                These terms govern the various payment methods available through SaveCash services, including credit cards, debit cards, bank transfers, and alternative payment methods.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Accepted Payment Methods</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash accepts various payment methods, each subject to network rules, fees, and processing times as disclosed in your account dashboard.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. Processing Times</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Funds from different payment methods settle at different times, typically within 1-7 business days depending on the method and risk factors.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

