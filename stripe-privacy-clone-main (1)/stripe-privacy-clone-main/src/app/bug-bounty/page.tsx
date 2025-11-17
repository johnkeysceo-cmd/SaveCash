'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function BugBountyPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Responsible Disclosure & Bug Bounty</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash welcomes responsible security research. We value the security community's contributions to keeping our platform safe.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Scope</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed mb-4">
                The following scope applies to SaveCash systems and services:
              </p>
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6 mt-4">
                <p className="text-[var(--color-text-primary)] mb-3 font-semibold">✓ In scope:</p>
                <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)]">
                  <li>savecash.com, api.savecash.com</li>
                  <li>Web applications and dashboards</li>
                  <li>Mobile applications published by SaveCash</li>
                  <li>Production infrastructure and APIs</li>
                </ul>
                <p className="text-[var(--color-text-primary)] mb-3 mt-6 font-semibold">✗ Out of scope:</p>
                <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)]">
                  <li>Third-party services and integrations</li>
                  <li>Partner or customer systems</li>
                  <li>Social engineering or physical attacks</li>
                  <li>Denial of service (DoS) attacks</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Safe Harbor</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                If you follow this policy and act in good faith, SaveCash will not pursue legal action against you for actions reasonably necessary to demonstrate a security issue. We commit to working collaboratively with researchers to resolve vulnerabilities.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">How to Report</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed mb-4">
                Email <a href="mailto:privacy.savecash@gmail.com" className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] hover:underline transition-all duration-150">privacy.savecash@gmail.com</a> with:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong className="font-medium">Summary:</strong> A concise description of the vulnerability</li>
                <li><strong className="font-medium">Steps to reproduce:</strong> Detailed POC code or methodology</li>
                <li><strong className="font-medium">Impact assessment:</strong> Potential damage and affected data</li>
                <li><strong className="font-medium">Suggested remediation:</strong> Your recommendations for fixing the issue</li>
                <li><strong className="font-medium">Supporting evidence:</strong> Screenshots, logs, or code examples</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Response & Rewards</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed mb-4">
                We will:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Acknowledge reports within 72 hours</li>
                <li>Triage and assign severity using industry standards (CVSS)</li>
                <li>Provide status updates within 5 business days</li>
                <li>Work with you to verify and remediate the issue</li>
              </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed mt-4">
                <strong className="font-medium">Rewards:</strong> Verified, non-duplicative reports may be eligible for bounties of up to $10,000 depending on severity, impact, and quality of the report.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Severity Guidelines</h2>
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6 mt-4">
                <div className="space-y-4">
                  <div>
                    <p className="text-[var(--color-text-primary)] font-semibold mb-2">Critical ($5,000 - $10,000)</p>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-[var(--color-text-primary)]">
                      <li>Remote code execution</li>
                      <li>Complete authentication bypass</li>
                      <li>Mass data exfiltration</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[var(--color-text-primary)] font-semibold mb-2">High ($2,000 - $5,000)</p>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-[var(--color-text-primary)]">
                      <li>SQL injection or XXE</li>
                      <li>Privilege escalation</li>
                      <li>Financial transaction manipulation</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[var(--color-text-primary)] font-semibold mb-2">Medium ($500 - $2,000)</p>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-[var(--color-text-primary)]">
                      <li>Cross-site scripting (XSS)</li>
                      <li>CSRF vulnerabilities</li>
                      <li>Information disclosure</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[var(--color-text-primary)] font-semibold mb-2">Low ($100 - $500)</p>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-[var(--color-text-primary)]">
                      <li>Minor info leaks</li>
                      <li>UI/UX improvements</li>
                      <li>Defense-in-depth suggestions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Restrictions</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed mb-4">
                To qualify for rewards and safe harbor, you must:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Not exploit vulnerabilities beyond necessary verification</li>
                <li>Not access, exfiltrate, or modify user data</li>
                <li>Not perform social engineering, phishing, or impersonation</li>
                <li>Not launch denial of service attacks or destructive actions</li>
                <li>Not disclose the issue publicly before we have a chance to remediate</li>
                <li>Not violate any applicable laws or breach any agreements</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Recognition</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                With your permission, we may recognize your contribution on our Hall of Fame page. We respect your privacy and will only include your name/handle if you explicitly consent.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Contact</h2>
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6 mt-4">
                <p className="text-[var(--color-text-primary)] mb-3">
                  <strong className="font-medium">Security Email:</strong>{' '}
                  <a href="mailto:privacy.savecash@gmail.com" className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] hover:underline transition-all duration-150">
                    privacy.savecash@gmail.com
                  </a>
                </p>
                <p className="text-[var(--color-text-primary)]">
                  Please encrypt sensitive submissions when possible. We will provide a PGP key upon request.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Thank You</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We appreciate the security community's efforts to help keep SaveCash and our users safe. Thank you for practicing responsible disclosure.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

