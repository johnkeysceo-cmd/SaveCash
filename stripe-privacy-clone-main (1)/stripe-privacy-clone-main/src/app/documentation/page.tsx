'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function DocumentationPage() {
  const docSections = [
    {
      title: 'Quick Start',
      description: 'Get up and running in minutes',
      link: '#'
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation',
      link: '#'
    },
    {
      title: 'Integration Guides',
      description: 'Step-by-step integration tutorials',
      link: '#'
    },
    {
      title: 'SDKs & Libraries',
      description: 'Client libraries for popular languages',
      link: '#'
    },
    {
      title: 'Webhooks',
      description: 'Receive real-time event notifications',
      link: '#'
    },
    {
      title: 'Authentication',
      description: 'Learn about our security and auth',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[900px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Documentation</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">
                Comprehensive guides and reference materials for developers.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {docSections.map((section, index) => (
                <a 
                  key={index}
                  href={section.link}
                  className="block border border-[var(--color-border-divider)] rounded-lg p-6 hover:border-[var(--color-accent-primary)] transition-colors group"
                >
                  <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent-primary)]">
                    {section.title}
                  </h2>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {section.description}
                  </p>
                </a>
              ))}
            </div>

            <section className="space-y-4 mt-12">
              <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">Popular Articles</h2>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] hover:underline">
                    Building Your First Integration
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] hover:underline">
                    Handling Webhook Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] hover:underline">
                    Error Handling Best Practices
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] hover:underline">
                    Rate Limiting & Performance
                  </a>
                </li>
              </ul>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

