'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function TerminalResellerPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">SaveCash Terminal Reseller Terms</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                These Terminal Reseller Terms govern relationships between SaveCash and authorized resellers of SaveCash Terminal devices. By becoming a reseller, you agree to these terms in addition to other applicable SaveCash agreements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Reseller Authorization</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                To become an authorized SaveCash Terminal reseller, you must complete our reseller application and approval process. Authorization is at our sole discretion and may be revoked at any time for any reason.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. Reseller Obligations</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                As a reseller, you must:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Comply with all applicable laws, regulations, and industry standards</li>
                <li>Provide proper customer support and assistance</li>
                <li>Maintain accurate records of all sales and inventory</li>
                <li>Report sales and provide required information to SaveCash</li>
                <li>Maintain confidentiality of proprietary information</li>
                <li>Not modify Terminals or their packaging</li>
                <li>Adhere to SaveCash branding and marketing guidelines</li>
                <li>Not reverse engineer or compete with SaveCash technology</li>
                <li>Protect SaveCash's intellectual property and trade secrets</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">3. Prohibited Activities</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Resellers are strictly prohibited from using access to SaveCash terminals for competitive analysis, reverse engineering, or development of competing payment processing technology. Violation results in immediate termination and legal action.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">4. Contact Information</h2>
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
