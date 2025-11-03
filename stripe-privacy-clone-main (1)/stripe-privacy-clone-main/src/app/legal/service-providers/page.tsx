'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function ServiceProvidersPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Service Providers List</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This Service Providers List identifies third-party service providers that SaveCash engages to deliver our services and process personal data on our behalf. These service providers are contractually bound to protect your data in accordance with our Data Processing Agreement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Cloud Infrastructure</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash utilizes leading cloud infrastructure providers for hosting, storage, and compute services:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Amazon Web Services (AWS) - Primary cloud infrastructure</li>
                <li>Google Cloud Platform (GCP) - Backup and disaster recovery</li>
                <li>Microsoft Azure - Additional infrastructure and services</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. Payment Processing</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Payment processing and related services are facilitated through:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Card Networks (Visa, Mastercard, American Express, Discover)</li>
                <li>Acquiring Banks (Cross River Bank, Deutsche Bank, Pathward N.A., PNC Bank)</li>
                <li>Payment Gateways and Financial Institutions</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">3. Communication Services</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Communication and messaging services provided by third parties include:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Email delivery and marketing services</li>
                <li>SMS and MMS messaging services</li>
                <li>Customer support platforms</li>
                <li>Notification and alert services</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">4. Analytics and Monitoring</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Analytics, monitoring, and performance services include:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Application performance monitoring</li>
                <li>Error tracking and diagnostics</li>
                <li>Usage analytics and insights</li>
                <li>User behavior analysis</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">5. Security and Fraud Prevention</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Security and fraud prevention services include:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Fraud detection and prevention tools</li>
                <li>Identity verification services</li>
                <li>Threat intelligence and security monitoring</li>
                <li>Compliance screening and KYC/AML services</li>
              </ul>
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

