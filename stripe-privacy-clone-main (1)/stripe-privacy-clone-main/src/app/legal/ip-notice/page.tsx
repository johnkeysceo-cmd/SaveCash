'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function IPNoticePage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Intellectual Property Notice</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This Intellectual Property Notice provides information about SaveCash's intellectual property rights and how to report potential infringements. SaveCash takes intellectual property protection seriously and respects the IP rights of others.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. SaveCash Intellectual Property</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                All content, features, functionality, trademarks, and intellectual property displayed on SaveCash services are owned by SaveCash Technology, Inc. or our licensors. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Software, APIs, and technical documentation</li>
                <li>Trademarks, service marks, and logos</li>
                <li>Website design and user interfaces</li>
                <li>Text, graphics, images, and audiovisual content</li>
                <li>Domain names and website content</li>
                <li>Proprietary AI algorithms and machine learning models</li>
                <li>Business methods, processes, and operational procedures</li>
                <li>User experience designs and interaction patterns</li>
                <li>Trade secrets and confidential information</li>
              </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash's intellectual property represents proprietary innovations protected by copyright, trademark, patent, trade secret, and unfair competition laws. Our platform embodies years of research, development, and investment in cutting-edge financial technology. Any unauthorized copying, reproduction, or use of SaveCash's intellectual property constitutes infringement and will be pursued aggressively through all available legal remedies.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">1.1 Prohibited Uses</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You may NOT, without SaveCash's express written consent:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Copy, reproduce, distribute, or display any SaveCash content, design, or functionality</li>
                <li>Reverse engineer, decompile, or disassemble any SaveCash software or technology</li>
                <li>Create derivative works based on SaveCash's intellectual property</li>
                <li>Use SaveCash's marks or branding in any manner</li>
                <li>Develop competing products using SaveCash's proprietary information</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. Reporting Infringement</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                If you believe that content on SaveCash services infringes your intellectual property rights, please provide notification to our designated agent at:
              </p>
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6 mt-4">
                <p className="text-[var(--color-text-primary)] mb-3">
                  <strong className="font-medium">Email:</strong> privacy.savecash@gmail.com
                </p>
                <p className="text-[var(--color-text-primary)]">
                  <strong className="font-medium">Subject Line:</strong> Intellectual Property Infringement Notice
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">3. Required Information</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Your notification must include:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Identification of the copyrighted work or IP right claimed to be infringed</li>
                <li>Location of the allegedly infringing material on SaveCash services</li>
                <li>Your contact information</li>
                <li>A statement of good faith belief that the use is not authorized</li>
                <li>A statement that the information is accurate</li>
              </ul>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

