'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Accessibility Statement</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Our Commitment to Accessibility</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We are committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards to ensure our services are accessible to all users.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Conformance Status</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and user-friendly for everyone.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Our website has been designed with accessibility in mind and includes features such as:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Semantic HTML markup for screen reader compatibility</li>
                <li>Keyboard navigation support throughout the interface</li>
                <li>Sufficient color contrast ratios for text readability</li>
                <li>Alternative text for images and visual content</li>
                <li>Responsive design that works with various assistive technologies</li>
                <li>Clear and consistent navigation structure</li>
                <li>Form labels and error messages for screen readers</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Assistive Technologies</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Our website is designed to be compatible with the following assistive technologies:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
                <li>Screen magnification software</li>
                <li>Voice recognition software</li>
                <li>Keyboard-only navigation</li>
                <li>Browser text resizing and zoom functions</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Known Limitations</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Despite our best efforts, some areas of our website may not be fully accessible. We are actively working to address the following known issues:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Some third-party embedded content may not be fully accessible</li>
                <li>Certain PDF documents may require updates for full accessibility</li>
                <li>Some complex interactive features are being enhanced for better screen reader support</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Feedback and Assistance</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We welcome your feedback on the accessibility of our website. If you encounter any barriers or have suggestions for improvement, please let us know:
              </p>
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6 mt-4">
                <p className="text-[var(--color-text-primary)] mb-3">
                  <strong className="font-medium">Email:</strong> accessibility@company.com
                </p>
                <p className="text-[var(--color-text-primary)]">
                  <strong className="font-medium">Phone:</strong> 1-888-XXX-XXXX
                </p>
              </div>
              <p className="text-[var(--color-text-primary)] leading-relaxed mt-4">
                We aim to respond to accessibility feedback within 5 business days and will work with you to provide the information you need in an accessible format.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Ongoing Improvements</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We regularly review our website and conduct accessibility audits to identify and fix issues. Our development team receives ongoing training on accessibility best practices to ensure new features are built with accessibility in mind from the start.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Technical Specifications</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                The accessibility of our website relies on the following technologies:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>WAI-ARIA (Web Accessibility Initiative – Accessible Rich Internet Applications)</li>
              </ul>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
