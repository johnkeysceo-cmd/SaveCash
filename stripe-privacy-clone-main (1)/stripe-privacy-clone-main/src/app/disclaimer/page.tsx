'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Disclaimer</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">General Information</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                The information provided by our company on this website is for general informational purposes only. All information is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">No Professional Advice</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                The information on this website is not intended to constitute legal, financial, tax, accounting, or other professional advice. You should not rely upon this information as the sole basis for making decisions without consulting qualified professionals.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Any reliance you place on such information is strictly at your own risk. We recommend that you seek independent professional advice before acting on any information provided on this website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">External Links Disclaimer</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This website may contain links to external websites that are not provided or maintained by or in any way affiliated with our company. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them. We have no control over the nature, content, and availability of those sites.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Service Availability</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We strive to provide uninterrupted access to our services, but we cannot guarantee that our website or services will always be available, accessible, uninterrupted, timely, secure, accurate, complete, or error-free.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Our services may be subject to limitations, delays, and other problems inherent in the use of the internet and electronic communications. We are not responsible for any delays, delivery failures, or other damage resulting from such problems.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Errors and Omissions</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                While we make every effort to ensure that the information on this website is correct, we do not warrant its completeness or accuracy. We may make changes to the materials or services at any time without notice.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We do not commit to updating or maintaining the currency of information on this website. Historical information may no longer be current and is provided for reference only.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">No Warranties</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This website and our services are provided on an "as is" and "as available" basis. We expressly disclaim all warranties of any kind, whether express or implied, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Implied warranties of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Title</li>
                <li>Security or accuracy of data</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Limitation of Liability</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Under no circumstances shall we be liable for any direct, indirect, special, incidental, or consequential damages, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Loss of data or profit</li>
                <li>Business interruption</li>
                <li>Personal injury or property damage</li>
                <li>Loss of privacy</li>
              </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This limitation applies even if we have been advised of the possibility of such damages and regardless of the legal theory upon which the claim is based.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Jurisdiction</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This disclaimer is governed by and construed in accordance with the laws of the jurisdiction in which our company is registered. You agree to submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Changes to This Disclaimer</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We reserve the right to modify this disclaimer at any time. Any changes will be effective immediately upon posting to this website. Your continued use of this website following the posting of changes constitutes your acceptance of such changes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Contact Information</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                If you have any questions about this disclaimer, please{' '}
                <a href="/contact" className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] hover:underline transition-all duration-150">
                  contact us
                </a>.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
