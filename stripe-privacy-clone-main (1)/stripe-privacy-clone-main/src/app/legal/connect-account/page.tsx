'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function ConnectAccountPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">SaveCash Connected Account Agreement</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This Connected Account Agreement governs the relationship between SaveCash, Connected Accounts, and your use of SaveCash Connect.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Connected Accounts</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash Connect enables you to accept payments on behalf of Connected Accounts. You are responsible for ensuring your Connected Accounts comply with all applicable terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. Funds Flow</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Payment processing fees will be deducted from transaction amounts before funds are disbursed to Connected Accounts, as specified in your platform agreement.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

