'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Cookie Policy</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This Cookie Policy explains how we use cookies and similar tracking technologies on our website and services. By using our services, you consent to the use of cookies as described in this policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">What Are Cookies?</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device after you close your browser, while session cookies are deleted when you close your browser.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">How We Use Cookies</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We use cookies for various purposes to enhance your experience and improve our services:
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">Essential Cookies</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                These cookies are necessary for our website to function properly. They enable core functionality such as:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Authentication and security</li>
                <li>Session management and user preferences</li>
                <li>Load balancing and performance optimization</li>
                <li>Fraud prevention and detection</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">Analytics Cookies</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                These cookies help us understand how visitors interact with our website by collecting anonymous information such as:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Pages visited and time spent on each page</li>
                <li>Traffic sources and navigation patterns</li>
                <li>Device and browser information</li>
                <li>Error messages and performance metrics</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">Functional Cookies</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                These cookies enable enhanced functionality and personalization, such as:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Remembering your preferences and settings</li>
                <li>Language and region selection</li>
                <li>Customized content and features</li>
                <li>Video and chat functionality</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">Marketing Cookies</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                These cookies are used to deliver relevant advertisements and measure campaign effectiveness:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Tracking ad impressions and clicks</li>
                <li>Retargeting and remarketing</li>
                <li>Social media integration</li>
                <li>Campaign performance analysis</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Third-Party Cookies</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We may use third-party services that set cookies on our website. These services include:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong className="font-medium">Google Analytics:</strong> For website analytics and user behavior tracking</li>
                <li><strong className="font-medium">Advertising Partners:</strong> For delivering targeted advertisements</li>
                <li><strong className="font-medium">Social Media Platforms:</strong> For social sharing and integration features</li>
                <li><strong className="font-medium">Payment Processors:</strong> For secure payment processing</li>
                <li><strong className="font-medium">Customer Support Tools:</strong> For live chat and support services</li>
              </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                These third parties have their own privacy policies governing how they use information collected through their cookies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Managing Your Cookie Preferences</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You have several options for managing cookies:
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">Browser Settings</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>View cookies stored on your device</li>
                <li>Delete existing cookies</li>
                <li>Block all cookies or specific categories</li>
                <li>Receive notifications when cookies are set</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">Cookie Consent Tool</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We provide a cookie consent tool on our website that allows you to customize your cookie preferences. You can access this tool at any time to update your choices.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">Opt-Out Links</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You can opt out of certain third-party tracking cookies:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Google Analytics:{' '}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] hover:underline transition-all duration-150">
                    Browser Add-on
                  </a>
                </li>
                <li>Digital Advertising Alliance:{' '}
                  <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] hover:underline transition-all duration-150">
                    Opt-Out Tool
                  </a>
                </li>
                <li>Network Advertising Initiative:{' '}
                  <a href="http://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] hover:underline transition-all duration-150">
                    Opt-Out Tool
                  </a>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Impact of Disabling Cookies</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                While you can disable cookies, please note that doing so may affect your experience on our website. Essential cookies are required for basic functionality, and disabling them may prevent you from using certain features.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Disabling analytics and marketing cookies will not affect core functionality but may result in a less personalized experience.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Do Not Track Signals</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Some browsers have a "Do Not Track" feature that signals websites that you do not want your online activity tracked. Currently, there is no industry standard for how to respond to Do Not Track signals. We do not currently respond to these signals, but we will update this policy if standards are adopted.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Updates to This Policy</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. The "Last updated" date at the top of this page indicates when the policy was last revised.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Contact Us</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                If you have questions about our use of cookies, please{' '}
                <a href="/contact" className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] hover:underline transition-all duration-150">
                  contact us
                </a>
                . For more information about how we handle your personal data, please review our{' '}
                <a href="/privacy" className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] hover:underline transition-all duration-150">
                  Privacy Policy
                </a>
                .
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
