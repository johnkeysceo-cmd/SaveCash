'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function HelpPage() {
  const helpCategories = [
    {
      title: 'Getting Started',
      items: [
        { title: 'Account Setup', description: 'Learn how to create and configure your account' },
        { title: 'Connecting Your Accounts', description: 'Link your bank accounts and credit cards' },
        { title: 'First Steps', description: 'Get the most out of SaveCash right away' }
      ]
    },
    {
      title: 'Using SaveCash',
      items: [
        { title: 'Understanding Savings Opportunities', description: 'How our AI identifies ways to save' },
        { title: 'Setting Financial Goals', description: 'Define and track your financial objectives' },
        { title: 'Managing Notifications', description: 'Customize your alerts and updates' }
      ]
    },
    {
      title: 'Account Management',
      items: [
        { title: 'Security Settings', description: 'Keep your account and data secure' },
        { title: 'Billing & Subscription', description: 'Manage your plan and payments' },
        { title: 'Data & Privacy', description: 'Control how your information is used' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[900px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Help Center</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">
                Find answers to your questions and learn how to get the most from SaveCash.
              </p>
            </div>

            <div className="mb-8">
              <input
                type="search"
                placeholder="Search for help..."
                className="w-full px-4 py-3 border border-[var(--color-border-divider)] rounded-lg focus:outline-none focus:border-[var(--color-accent-primary)]"
              />
            </div>

            <div className="space-y-12">
              {helpCategories.map((category, catIndex) => (
                <section key={catIndex}>
                  <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">{category.title}</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {category.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="border border-[var(--color-border-divider)] rounded-lg p-6 hover:border-[var(--color-accent-primary)] transition-colors cursor-pointer"
                      >
                        <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2 hover:text-[var(--color-accent-primary)]">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[var(--color-text-secondary)]">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <section className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-4">Still Need Help?</h2>
              <p className="text-[var(--color-text-primary)] mb-4">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/contact" 
                  className="px-6 py-3 bg-[var(--color-accent-primary)] text-white rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors"
                >
                  Contact Support
                </a>
                <a 
                  href="mailto:privacy.savecash@gmail.com"
                  className="px-6 py-3 border border-[var(--color-border-divider)] text-[var(--color-text-primary)] rounded-lg hover:border-[var(--color-accent-primary)] transition-colors"
                >
                  Email Us
                </a>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

