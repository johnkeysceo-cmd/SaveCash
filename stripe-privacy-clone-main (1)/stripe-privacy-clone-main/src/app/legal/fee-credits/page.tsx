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
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">SaveCash Fee Credit Terms</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                These terms govern fee credits and promotional pricing available through SaveCash. Fee credits may be applied to offset processing fees.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Credits and Promotions</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Fee credits have expiration dates and terms as specified in the promotional offer. Credits are non-transferable and non-refundable.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

