'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function ESIGNDisclosurePage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">E-SIGN Disclosure</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This disclosure provides information about electronic signatures and records in accordance with the Electronic Signatures in Global and National Commerce Act (E-SIGN Act).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Consent to Electronic Communications</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                By using SaveCash services, you consent to receive agreements, disclosures, and other documents in electronic format rather than paper copies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. System Requirements</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                To access and retain electronic documents, you must have appropriate hardware and software capable of displaying PDF documents.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

