'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function TerminalDeviceEULAPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">SaveCash Terminal Device EULA</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This End User License Agreement ("EULA") governs your use of SaveCash Terminal devices and associated software.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. License Grant</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash grants you a limited, non-exclusive, non-transferable license to use the Terminal device and software solely for processing payments through SaveCash services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. Restrictions</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You may not reverse engineer, modify, or create derivative works of the Terminal software. You must use the device only in accordance with these terms.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

