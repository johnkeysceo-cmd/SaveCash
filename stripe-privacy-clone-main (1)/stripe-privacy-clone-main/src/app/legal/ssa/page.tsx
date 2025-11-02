'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function SSAPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">SaveCash Services Agreement</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This SaveCash Services Agreement ("Agreement") governs your use of SaveCash's payment processing and related services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Services</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash provides payment processing services, including the ability to accept, process, and disburse payments to your bank account.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. Fees and Payment Terms</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Fees for our services are disclosed at the time you sign up and may change with 30 days' notice. All fees are deducted from your transactions before funds are disbursed to your account.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">3. Privacy and Data Protection</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Your use of SaveCash services is also governed by our Privacy Policy, which describes how we collect, use, and protect your personal information.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

