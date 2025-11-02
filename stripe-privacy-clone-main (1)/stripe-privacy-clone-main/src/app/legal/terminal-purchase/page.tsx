'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function TerminalPurchasePage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">SaveCash Terminal Purchase Terms</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                These terms govern the purchase of SaveCash Terminal devices and accessories. By purchasing a Terminal, you agree to these terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Pricing and Payment</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Terminal pricing is provided at the time of purchase. Payment must be made in full before shipment unless otherwise agreed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. Shipping and Returns</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Shipping terms and return policies are provided during checkout. You may return unused devices within 30 days for a full refund.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

