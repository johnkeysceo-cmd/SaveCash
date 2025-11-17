'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Terms of Service</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Welcome to our Terms of Service. These terms govern your use of our services and products. By accessing or using our services, you agree to be bound by these terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Acceptance of Terms</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                By creating an account, accessing, or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you may not use our services.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify you of any material changes through your account dashboard, email, or by posting a notice on our website. Your continued use of our services after such modifications constitutes your acceptance of the updated terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. Eligibility</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                To use our services, you must:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Be at least 18 years old or the age of majority in your jurisdiction</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Provide accurate and complete registration information</li>
                <li>Not be prohibited from using our services under applicable laws</li>
                <li>Not have had your account previously suspended or terminated by us</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">3. Account Registration and Security</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                When you create an account with us, you must provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Use a strong, unique password for your account</li>
                <li>Notify us immediately of any unauthorized access or security breach</li>
                <li>Not share your account credentials with any third party</li>
                <li>Take responsibility for all activities conducted through your account</li>
                <li>Keep your contact information up to date</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">4. Use of Services</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Our services provide payment processing, financial tools, and related business infrastructure. You agree to use our services only for lawful purposes and in accordance with these terms.
              </p>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">Permitted Uses</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You may use our services to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Accept and process payments from customers</li>
                <li>Manage your business operations and financial data</li>
                <li>Access reporting and analytics tools</li>
                <li>Integrate our services with your applications via our APIs</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">Prohibited Uses</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Process transactions for prohibited or restricted businesses</li>
                <li>Engage in fraudulent, deceptive, or misleading practices</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt the integrity or performance of our services</li>
                <li>Use our services to transmit malware, viruses, or harmful code</li>
                <li>Reverse engineer, decompile, or disassemble our software</li>
                <li>Use automated systems to access our services without authorization</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">5. Fees and Payment</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You agree to pay all fees associated with your use of our services according to our published pricing. Fees may include transaction fees, subscription fees, and other charges as specified in your service agreement.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We reserve the right to change our fees with 30 days' notice. Continued use of our services after fee changes constitutes acceptance of the new pricing.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">6. Intellectual Property and Anti-Competition</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                All content, features, and functionality of our services, including but not limited to software, text, graphics, logos, trademarks, proprietary AI algorithms, business methods, and trade secrets, are owned by us or our licensors and are protected by intellectual property laws.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We grant you a limited, non-exclusive, non-transferable license to access and use our services for your business purposes. This license does not include any rights to copy, modify, distribute, or create derivative works from our intellectual property.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You expressly agree NOT to copy, reverse engineer, or create competing products using our proprietary technology, algorithms, or business methods. SaveCash's intellectual property represents our core competitive advantages, and any unauthorized use will result in immediate termination and legal action.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">7. Data and Privacy</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Our collection, use, and protection of your personal data is governed by our{' '}
                <a href="/privacy" className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] hover:underline transition-all duration-150">
                  Privacy Policy
                </a>
                . By using our services, you consent to our data practices as described in the Privacy Policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">8. Termination</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Either party may terminate this agreement at any time. You may terminate by closing your account through your dashboard. We may terminate or suspend your access immediately, without prior notice, for any breach of these terms or for any other reason.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Upon termination, your right to use our services will immediately cease. We will process any pending transactions and remit funds according to our standard procedures.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">9. Disclaimers and Limitation of Liability</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, error-free, or completely secure.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">10. Indemnification</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You agree to indemnify and hold us harmless from any claims, damages, losses, liabilities, and expenses arising from your use of our services, your violation of these terms, or your violation of any rights of another party.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">11. Dispute Resolution</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Any disputes arising from these terms or your use of our services shall be resolved through binding arbitration in accordance with applicable arbitration rules, except where prohibited by law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">12. Governing Law</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is registered, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">13. Contact Information</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                If you have any questions about these Terms of Service, please{' '}
                <a href="/contact" className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] hover:underline transition-all duration-150">
                  contact us
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
