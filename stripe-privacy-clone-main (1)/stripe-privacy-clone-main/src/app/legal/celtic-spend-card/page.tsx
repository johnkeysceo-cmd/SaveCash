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
                These terms govern the use of SaveCash-issued cards and bank accounts. When you use a SaveCash card or account, you agree to these terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Card Usage</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Your SaveCash card must be used in accordance with applicable card network rules and regulations. Misuse may result in card cancellation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. Account Responsibilities</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You are responsible for maintaining the security of your account and reporting any unauthorized transactions immediately.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

