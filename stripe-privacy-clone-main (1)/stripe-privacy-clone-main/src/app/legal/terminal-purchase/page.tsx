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
                These Terminal Purchase Terms govern the purchase of SaveCash Terminal devices, accessories, and related products. By purchasing a Terminal, you agree to these terms in addition to your SaveCash Services Agreement and Terminal Device EULA.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Pricing and Payment</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Terminal pricing is displayed at checkout and includes applicable taxes and shipping fees unless otherwise stated. Payment is required in full before order processing and shipment, unless you qualify for installment payment plans or equipment financing options.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. Shipping</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Terminals are shipped to the address you provide. You are responsible for providing accurate shipping information. SaveCash is not liable for delays or issues caused by incorrect addresses or recipient unavailability.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">3. Returns and Refunds</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You may return unused Terminals within 30 days of receipt for a full refund, subject to a restocking fee. Terminals must be in original condition with all accessories, documentation, and packaging. Contact us at privacy.savecash@gmail.com to initiate returns.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">4. Warranties</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash Terminals come with a manufacturer's warranty covering defects in materials and workmanship. Warranty terms and coverage are provided with your Terminal purchase.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">5. Ownership and Use Restrictions</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Ownership of Terminal hardware is transferred to you upon payment, but all software, firmware, and intellectual property rights remain with SaveCash. You may not reverse engineer, modify, or create competing products using SaveCash terminals.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">6. Contact Information</h2>
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6 mt-4">
                <p className="text-[var(--color-text-primary)]">
                  <strong className="font-medium">Email:</strong> privacy.savecash@gmail.com
                </p>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
