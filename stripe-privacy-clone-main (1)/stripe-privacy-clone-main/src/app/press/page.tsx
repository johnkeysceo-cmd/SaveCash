'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function PressPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Press & Media</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">
                Resources for journalists, analysts, and media professionals.
              </p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Thank you for your interest in SaveCash. We're excited to share our story and vision for the future 
                of AI-powered financial management.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Media Contact</h2>
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6">
                <p className="text-[var(--color-text-primary)] mb-3">
                  <strong className="font-medium">Press Inquiries:</strong> privacy.savecash@gmail.com
                </p>
                <p className="text-[var(--color-text-primary)] mb-3">
                  <strong className="font-medium">Phone:</strong> +1 (555) 123-4567
                </p>
                <p className="text-[var(--color-text-primary)]">
                  <strong className="font-medium">Response Time:</strong> We aim to respond to all press inquiries within 24 hours.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Company Leadership</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Our leadership team is available for interviews and speaking engagements. For scheduling requests, please contact privacy.savecash@gmail.com.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

