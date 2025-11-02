'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Security</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Security is fundamental to everything we do. We maintain industry-leading security practices to protect your data and ensure the integrity of our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Security Certifications</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We maintain the highest levels of security certification and compliance:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong className="font-medium">PCI DSS Level 1:</strong> The most stringent level of certification in the payments industry</li>
                <li><strong className="font-medium">SOC 2 Type II:</strong> Annual third-party audits of our security controls</li>
                <li><strong className="font-medium">ISO 27001:</strong> International standard for information security management</li>
                <li><strong className="font-medium">GDPR Compliant:</strong> Full compliance with European data protection regulations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Data Encryption</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                All data is encrypted both in transit and at rest:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong className="font-medium">Transport Layer Security (TLS):</strong> All connections use TLS 1.2 or higher</li>
                <li><strong className="font-medium">AES-256 Encryption:</strong> Database encryption using industry-standard algorithms</li>
                <li><strong className="font-medium">End-to-End Encryption:</strong> Sensitive data is encrypted throughout its lifecycle</li>
                <li><strong className="font-medium">Key Management:</strong> Secure key storage and rotation practices</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Infrastructure Security</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Our infrastructure is built with security as the foundation:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Multi-region redundancy for high availability</li>
                <li>Network isolation and segmentation</li>
                <li>Distributed denial-of-service (DDoS) protection</li>
                <li>Regular security patches and updates</li>
                <li>Intrusion detection and prevention systems</li>
                <li>24/7 security monitoring and incident response</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Access Controls</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We implement strict access controls to protect your data:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Role-based access control (RBAC) for all systems</li>
                <li>Multi-factor authentication (MFA) required for all employees</li>
                <li>Principle of least privilege for data access</li>
                <li>Regular access reviews and audits</li>
                <li>Immediate revocation upon employee departure</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Fraud Detection</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Advanced machine learning models protect against fraud:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Real-time transaction monitoring and risk scoring</li>
                <li>Behavioral analysis and anomaly detection</li>
                <li>Global fraud patterns database</li>
                <li>3D Secure authentication support</li>
                <li>Customizable fraud rules and blocking</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Security Audits</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We conduct regular security assessments:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Annual third-party security audits</li>
                <li>Quarterly penetration testing by external firms</li>
                <li>Continuous vulnerability scanning</li>
                <li>Bug bounty program for responsible disclosure</li>
                <li>Regular code security reviews</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Incident Response</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We maintain a comprehensive incident response program:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>24/7 security operations center (SOC)</li>
                <li>Defined incident response procedures</li>
                <li>Rapid containment and remediation protocols</li>
                <li>Post-incident analysis and improvement</li>
                <li>Transparent communication with affected parties</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Employee Security</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Our team is trained in security best practices:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Background checks for all employees</li>
                <li>Regular security awareness training</li>
                <li>Secure development lifecycle training</li>
                <li>Confidentiality and non-disclosure agreements</li>
                <li>Security-first culture and practices</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Data Privacy</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We respect your privacy and protect your data. Learn more about our data practices in our{' '}
                <a href="/privacy" className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] hover:underline transition-all duration-150">
                  Privacy Policy
                </a>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Responsible Disclosure</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                If you discover a security vulnerability, we appreciate responsible disclosure:
              </p>
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6 mt-4">
                <p className="text-[var(--color-text-primary)] mb-3">
                  <strong className="font-medium">Email:</strong> security@company.com
                </p>
                <p className="text-[var(--color-text-primary)]">
                  Please include detailed information about the vulnerability and steps to reproduce it. We commit to responding within 48 hours and will work with you to resolve the issue promptly.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Best Practices for Users</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Help us keep your account secure:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Use a strong, unique password</li>
                <li>Enable two-factor authentication</li>
                <li>Keep your contact information up to date</li>
                <li>Review account activity regularly</li>
                <li>Report suspicious activity immediately</li>
                <li>Never share your password or API keys</li>
              </ul>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
