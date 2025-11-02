'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function AcceptableUsePage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Acceptable Use Policy</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This Acceptable Use Policy describes prohibited uses of our services. By using our services, you agree to comply with this policy. Violation of this policy may result in suspension or termination of your account.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Prohibited Activities</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You may not use our services to engage in, facilitate, or promote any of the following activities:
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">Illegal Activities</h3>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Any activity that violates applicable laws or regulations</li>
                <li>Money laundering or terrorist financing</li>
                <li>Sale of illegal drugs, substances, or controlled materials</li>
                <li>Sale of stolen goods or counterfeit items</li>
                <li>Illegal gambling or unlicensed gaming</li>
                <li>Human trafficking or exploitation</li>
                <li>Child exploitation or abuse materials</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">Fraudulent Activities</h3>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Credit card fraud or unauthorized transactions</li>
                <li>Identity theft or impersonation</li>
                <li>Phishing, scamming, or deceptive practices</li>
                <li>Pyramid schemes or multi-level marketing fraud</li>
                <li>False or misleading product claims</li>
                <li>Chargeback fraud or friendly fraud</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">Harmful Content</h3>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Distribution of malware, viruses, or harmful software</li>
                <li>Content promoting violence, hate speech, or discrimination</li>
                <li>Harassment, bullying, or threatening behavior</li>
                <li>Spam or unsolicited commercial communications</li>
                <li>Adult content without proper age verification</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">Intellectual Property Violations</h3>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Copyright infringement or piracy</li>
                <li>Trademark violations or brand impersonation</li>
                <li>Sale of counterfeit goods</li>
                <li>Unauthorized use of proprietary information</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Restricted Business Types</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                The following business types require special approval or are restricted from using our services:
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">High-Risk Businesses</h3>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Cryptocurrency exchanges and wallet services</li>
                <li>Firearms, ammunition, and weapons</li>
                <li>Tobacco, e-cigarettes, and vaping products</li>
                <li>Cannabis and CBD products (subject to jurisdiction)</li>
                <li>Adult entertainment services</li>
                <li>Gambling and betting services (without proper licensing)</li>
                <li>Financial services requiring licensing</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">Regulated Industries</h3>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Pharmaceuticals and medical devices (without approval)</li>
                <li>Travel services (without proper bonding)</li>
                <li>Money transmission services</li>
                <li>Legal cannabis (jurisdiction-dependent)</li>
                <li>Crowdfunding and lending platforms</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Technical Restrictions</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You may not:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt our services or servers</li>
                <li>Use automated systems (bots, scrapers) without authorization</li>
                <li>Reverse engineer, decompile, or disassemble our software</li>
                <li>Bypass security measures or access controls</li>
                <li>Overload our systems with excessive requests</li>
                <li>Probe, scan, or test vulnerabilities of our systems</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">User Conduct</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                When using our services, you must:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Provide accurate and truthful information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use your real identity (no fake accounts)</li>
                <li>Respond promptly to account verification requests</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect the rights of other users and third parties</li>
                <li>Honor customer refund and return policies</li>
                <li>Provide clear terms and conditions for your services</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Reporting Violations</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                If you become aware of any violation of this Acceptable Use Policy, please report it to us immediately. You can{' '}
                <a href="/contact" className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] hover:underline transition-all duration-150">
                  contact us
                </a>
                {' '}with details of the suspected violation.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We investigate all reports and take appropriate action, which may include warning, suspension, or termination of accounts violating this policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Consequences of Violations</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Violation of this Acceptable Use Policy may result in:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Warning and requirement to cease prohibited activity</li>
                <li>Temporary suspension of your account</li>
                <li>Permanent termination of your account</li>
                <li>Withholding of funds pending investigation</li>
                <li>Reporting to law enforcement authorities</li>
                <li>Legal action for damages or injunctive relief</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Policy Updates</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We may update this Acceptable Use Policy from time to time. Continued use of our services after changes constitutes acceptance of the updated policy. We encourage you to review this policy regularly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Questions</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                If you have questions about whether a specific use case is permitted under this policy, please{' '}
                <a href="/contact" className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] hover:underline transition-all duration-150">
                  contact us
                </a>
                {' '}before proceeding. We're here to help ensure you can use our services compliantly.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
