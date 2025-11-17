'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function AppDeveloperPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">App Developer Agreement</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This App Developer Agreement ("Agreement") governs developers ("Developers," "you," or "your") building applications that integrate with SaveCash services using our APIs, software development kits (SDKs), and related tools. By using SaveCash developer resources, you agree to be bound by this Agreement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Developer Access and APIs</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash provides API access and developer tools to enable you to build applications that integrate with our services. Your use of these resources is subject to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>API rate limits and usage guidelines</li>
                <li>Authentication and security requirements</li>
                <li>Documentation and technical specifications</li>
                <li>Quality standards and best practices</li>
                <li>Compliance with all applicable laws and regulations</li>
                <li>Prohibition on using APIs to build competing products</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. Application Requirements</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Applications you develop must:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Comply with all applicable laws and regulations</li>
                <li>Meet SaveCash security and quality standards</li>
                <li>Provide value to end users</li>
                <li>Not violate any third-party rights</li>
                <li>Include appropriate disclaimers and disclosures</li>
                <li>Not compete directly with SaveCash's core services</li>
                <li>Maintain adequate security measures</li>
                <li>Handle user data responsibly</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">3. Prohibited Uses</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You may NOT use SaveCash developer resources to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Build competing financial management or savings products</li>
                <li>Copy, replicate, or mimic SaveCash's core functionality</li>
                <li>Reverse engineer our APIs or technology</li>
                <li>Scrape or mine data from SaveCash services</li>
              </ul>
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
