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
                This End User License Agreement ("EULA") governs your use of SaveCash Terminal devices, including hardware, firmware, and associated software (collectively, "Terminal" or "Device"). By using a SaveCash Terminal, you agree to be bound by this EULA in addition to your SaveCash Services Agreement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. License Grant</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash grants you a limited, non-exclusive, non-transferable, non-sublicensable license to use the Terminal solely for processing payments through SaveCash services during the term of your SaveCash Services Agreement. This license includes:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Use of the Terminal hardware and embedded software</li>
                <li>Access to Terminal firmware updates and security patches</li>
                <li>Installation of approved Terminal software applications</li>
                <li>Use of Terminal features and functionality as provided</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. Restrictions</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You may not:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Reverse engineer, decompile, disassemble, or otherwise attempt to derive source code from Terminal software</li>
                <li>Modify, alter, or create derivative works of Terminal hardware or software</li>
                <li>Remove, bypass, or circumvent any security measures or technical limitations</li>
                <li>Use the Terminal for any purpose other than processing SaveCash transactions</li>
                <li>Transfer, lease, sublicense, or rent the Terminal to third parties</li>
                <li>Tamper with the Terminal or attempt unauthorized access</li>
                <li>Install unapproved software or applications</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">3. Ownership</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                The Terminal and all associated intellectual property rights remain the exclusive property of SaveCash and its licensors. This EULA does not grant you any ownership rights in the Terminal or related intellectual property. The Terminal's proprietary design, software, firmware, and technology are protected by copyright, trademark, patent, and trade secret laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">4. Prohibited Uses</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You may not use the Terminal for any unauthorized purpose, including reverse engineering, competitive analysis, or developing competing payment processing technology. Any unauthorized use constitutes infringement and will result in immediate termination of this license and potential legal action.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">5. Contact Information</h2>
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
