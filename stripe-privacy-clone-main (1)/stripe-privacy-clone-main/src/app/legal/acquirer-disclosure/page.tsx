'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function AcquirerDisclosurePage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Acquirer Disclosure</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This disclosure provides important information about the acquiring bank relationships that facilitate payment processing through SaveCash.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Acquiring Banks</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash works with various acquiring banks to process payments on your behalf. Each acquirer has specific terms and disclosure requirements that apply to your transactions.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

