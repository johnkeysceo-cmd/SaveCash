'use client';

import React, { useState } from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function BlogPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxI5mo_0yAaKOpx4borTucZsWRA9gqFEEIwMG6SzRmnq2hGY9SCoggSbd348p7S5H7yLQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          email: email,
        }),
      });

      // Since we're using no-cors, we can't read the response
      // But we'll assume success if no error is thrown
      setSubmitStatus('success');
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitStatus('error');
      
      // Reset error message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const blogPosts = [
    {
      title: 'Introducing AI-Powered Savings Recommendations',
      excerpt: 'Learn how SaveCash uses advanced AI to identify personalized savings opportunities.',
      date: 'February 1, 2025',
      author: 'SaveCash Team',
      category: 'Product Updates'
    },
    {
      title: 'The Future of Financial Technology',
      excerpt: 'Exploring how artificial intelligence is transforming personal finance and money management.',
      date: 'January 25, 2025',
      author: 'Sarah Chen',
      category: 'Industry Insights'
    },
    {
      title: 'How to Maximize Your Savings in 2025',
      excerpt: 'Practical tips and strategies for building wealth and achieving financial freedom.',
      date: 'January 15, 2025',
      author: 'Michael Johnson',
      category: 'Financial Tips'
    }
  ];

  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[900px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Blog</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">
                Insights, updates, and stories from the SaveCash team.
              </p>
            </div>

            <div className="space-y-12">
              {blogPosts.map((post, index) => (
                <article key={index} className="border-b border-[var(--color-border-divider)] pb-8 last:border-b-0">
                  <div className="mb-3">
                    <span className="text-sm font-medium text-[var(--color-accent-primary)]">{post.category}</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-3 hover:text-[var(--color-accent-primary)] transition-colors">
                    <a href="#" className="hover:underline">{post.title}</a>
                  </h2>
                  <p className="text-[var(--color-text-secondary)] mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-[var(--color-text-secondary)]">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                </article>
              ))}
            </div>

            <section className="space-y-4 mt-12">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mb-6">Subscribe</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Stay updated with the latest from SaveCash. Subscribe to our newsletter.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 mt-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2 border border-[var(--color-border-divider)] rounded-lg focus:outline-none focus:border-[var(--color-accent-primary)] disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button 
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="px-6 py-2 bg-[var(--color-accent-primary)] text-white rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              {submitStatus === 'success' && (
                <p className="text-green-600 text-sm mt-2">
                  ✓ Successfully subscribed! Check your email for confirmation.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm mt-2">
                  ✗ Something went wrong. Please try again.
                </p>
              )}
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

