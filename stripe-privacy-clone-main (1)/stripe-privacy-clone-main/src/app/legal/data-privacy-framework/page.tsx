'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function DataPrivacyFrameworkPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Data Privacy Framework</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This framework outlines SaveCash's commitment to data privacy and protection. We are committed to maintaining the highest standards of data security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Privacy Principles</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash adheres to principles of transparency, data minimization, purpose limitation, and user control over personal information.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

