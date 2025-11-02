'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function BankDebitPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">User Bank Debit Authorizations</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This document describes your authorization for SaveCash to debit your bank account. By providing your bank account information, you authorize SaveCash to initiate electronic transfers.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Authorization</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You authorize SaveCash to debit your bank account for fees, charges, and any amounts you owe, in accordance with your service agreement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. Revocation</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You may revoke this authorization at any time by contacting privacy.savecash@gmail.com. Revocation may affect your ability to use certain services.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

