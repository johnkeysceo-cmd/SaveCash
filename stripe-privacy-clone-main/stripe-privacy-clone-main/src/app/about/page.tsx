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
                We are committed to increasing the GDP of the internet by building economic infrastructure for the digital economy. Our mission is to provide businesses of all sizes with the tools they need to accept payments, manage operations, and grow their revenue.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Who We Are</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Founded with the vision of making online commerce easier and more accessible, we serve millions of businesses worldwide—from startups to Fortune 500 companies. Our platform handles billions in transactions annually, providing secure and reliable payment processing infrastructure.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We believe that enabling transactions is just the beginning. Our suite of products includes everything a business needs to run their operations online, from payment processing and business financing to fraud prevention and billing software.
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
                We invest heavily in research and development, building cutting-edge technology that powers the future of commerce. From machine learning for fraud detection to instant payouts and flexible payment methods, we're constantly innovating to meet the evolving needs of businesses.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Our developer-first approach means we provide robust APIs, comprehensive documentation, and powerful tools that give businesses complete control over their payment infrastructure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Security & Compliance</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Security is at the core of everything we do. We're certified to the highest industry standards, including PCI Service Provider Level 1—the most stringent level of certification available in the payments industry.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We use advanced security measures including encryption, machine learning fraud detection, and continuous monitoring to protect your business and your customers' data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Join Our Team</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We're always looking for talented individuals who want to help us build the future of online commerce. If you're passionate about technology, problem-solving, and making an impact, we'd love to hear from you.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <a href="/contact" className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] hover:underline transition-all duration-150">
                  Contact us
                </a> to learn more about career opportunities at our company.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
