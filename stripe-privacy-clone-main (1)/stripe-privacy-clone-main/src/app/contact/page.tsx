'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Contact Us</h1>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                We're here to help. Choose the option that best fits your needs.
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Customer Support</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                For technical support, account questions, or general inquiries, our support team is available 24/7.
              </p>
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6 mt-4">
                <p className="text-[var(--color-text-primary)] mb-3">
                  <strong className="font-medium">Email:</strong> privacy.savecash@gmail.com
                </p>
                <p className="text-[var(--color-text-primary)] mb-3">
                  <strong className="font-medium">Phone:</strong> 1-888-XXX-XXXX
                </p>
                <p className="text-[var(--color-text-primary)]">
                  <strong className="font-medium">Hours:</strong> 24/7 support available
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Sales Inquiries</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Interested in our services? Our sales team can help you find the right solution for your business.
              </p>
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6 mt-4">
                <p className="text-[var(--color-text-primary)] mb-3">
                  <strong className="font-medium">Email:</strong> privacy.savecash@gmail.com
                </p>
                <p className="text-[var(--color-text-primary)] mb-3">
                  <strong className="font-medium">Phone:</strong> 1-888-XXX-XXXX
                </p>
                <p className="text-[var(--color-text-primary)]">
                  <strong className="font-medium">Hours:</strong> Monday - Friday, 9am - 6pm EST
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Privacy and Legal</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                For privacy-related questions, data requests, or legal inquiries, please contact our legal team.
              </p>
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6 mt-4">
                <p className="text-[var(--color-text-primary)] mb-3">
                  <strong className="font-medium">Email:</strong> privacy.savecash@gmail.com
                </p>
                <p className="text-[var(--color-text-primary)]">
                  <strong className="font-medium">Legal Email:</strong> privacy.savecash@gmail.com
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Press and Media</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                For press inquiries, media requests, or partnership opportunities, reach out to our communications team.
              </p>
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6 mt-4">
                <p className="text-[var(--color-text-primary)]">
                  <strong className="font-medium">Email:</strong> privacy.savecash@gmail.com
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Office Locations</h2>
              
              <div className="space-y-6">
                <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">Headquarters</h3>
                  <p className="text-[var(--color-text-primary)]">
                    123 Business Street<br />
                    San Francisco, CA 94103<br />
                    United States
                  </p>
                </div>

                <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">European Office</h3>
                  <p className="text-[var(--color-text-primary)]">
                    456 Business Avenue<br />
                    Dublin 2<br />
                    Ireland
                  </p>
                </div>

                <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">Asia Pacific Office</h3>
                  <p className="text-[var(--color-text-primary)]">
                    789 Business Boulevard<br />
                    Singapore 018956<br />
                    Singapore
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Social Media</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed mb-4">
                Connect with us on social media for updates, news, and community engagement:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] hover:underline transition-all duration-150">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] hover:underline transition-all duration-150">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] hover:underline transition-all duration-150">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] hover:underline transition-all duration-150">
                    Facebook
                  </a>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Report a Security Issue</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                If you've discovered a security vulnerability in our services, please report it responsibly to our security team. We take security seriously and will respond promptly to verified reports.
              </p>
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
