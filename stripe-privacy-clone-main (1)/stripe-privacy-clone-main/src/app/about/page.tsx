'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">About Us</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Our Mission</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We are committed to helping individuals and businesses automatically save more money through AI-powered financial insights. Our mission is to make financial management effortless, intelligent, and accessible to everyone, empowering people to achieve their financial goals.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Who We Are</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Founded with the vision of making financial wellness accessible to everyone, SaveCash uses cutting-edge artificial intelligence to analyze spending patterns and identify savings opportunities automatically. We serve thousands of users across the United States, helping them optimize their finances without the hassle.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We believe that everyone deserves to build wealth effortlessly. Our AI-powered platform continuously monitors your accounts, finds ways to save, and helps you achieve your financial goals—whether that's saving for a home, funding your retirement, or simply spending smarter.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Our Values</h2>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong className="font-medium">Move fast, with quality:</strong> We balance speed with craftsmanship, shipping products that we're proud of.</li>
                <li><strong className="font-medium">Think rigorously:</strong> We apply clear thinking to complex problems and make principled decisions.</li>
                <li><strong className="font-medium">Trust and amplify:</strong> We trust our colleagues and amplify their impact through collaboration.</li>
                <li><strong className="font-medium">Global optimization:</strong> We optimize for the company as a whole, not just our individual teams.</li>
                <li><strong className="font-medium">Be an owner:</strong> We act like owners, taking initiative and responsibility for our work.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Global Presence</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                With offices across North America, Europe, Asia-Pacific, and Latin America, we support businesses in over 45 countries and territories. Our global infrastructure ensures reliable service and local expertise wherever you operate.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We're continuously expanding our reach to help more businesses around the world access the tools they need to succeed in the digital economy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Innovation & Technology</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We invest heavily in artificial intelligence and machine learning to continuously improve our savings detection algorithms. Our proprietary technology analyzes transaction patterns, merchant relationships, and market trends to identify the best opportunities for our users to save money.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Privacy and security are paramount. We use bank-level encryption and never share your personal financial data. Our AI works locally and securely to provide you with intelligent recommendations without compromising your privacy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Security & Privacy</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Security is at the core of everything we do. We use bank-level encryption, multi-factor authentication, and industry-leading security practices to protect your financial data. We're compliant with all major financial regulations including SOC 2, GDPR, and CCPA.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Your privacy is our priority. We never sell your data. We use read-only access to analyze your transactions and never store sensitive credentials. Your data is encrypted in transit and at rest, giving you complete peace of mind.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Join Our Mission</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We're always looking for talented individuals who want to help democratize financial wellness through AI. If you're passionate about machine learning, financial technology, and making a real difference in people's lives, we'd love to hear from you.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <a href="/careers" className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] hover:underline transition-all duration-150">
                  Explore career opportunities
                </a> and help us build the future of financial management.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
