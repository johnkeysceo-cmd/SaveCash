'use client';

import React, { useState } from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function BetaPage() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-12 md:py-20">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-[var(--color-text-primary)] mb-6">
                Join the SaveCash Private Beta
              </h1>
              <p className="text-xl text-[var(--color-text-secondary)] mb-4">
                Be among the first to experience the future of automated savings
              </p>
              <p className="text-lg text-[var(--color-text-secondary)]">
                Powered by FinBots™ — our revolutionary AI-powered financial orchestration engine
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 my-12">
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">AI-Powered Automation</h3>
                <p className="text-[var(--color-text-secondary)]">
                  Automated savings orchestration powered by advanced machine learning algorithms
                </p>
              </div>
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">Bank-Grade Security</h3>
                <p className="text-[var(--color-text-secondary)]">
                  256-bit encryption, SOC 2 in progress, and industry-leading security practices
                </p>
              </div>
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">Early Access</h3>
                <p className="text-[var(--color-text-secondary)]">
                  Shape the product roadmap and influence features before public launch
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-hover)] rounded-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">What You Get</h2>
              <ul className="space-y-3 text-lg">
                <li>✓ Exclusive access to FinBots™ automated savings engine</li>
                <li>✓ Priority integration options and API access</li>
                <li>✓ Direct line to product team and feature requests</li>
                <li>✓ Lifetime perks and waived fees for early adopters</li>
                <li>✓ Confidential beta with cutting-edge technology</li>
              </ul>
            </div>

            <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-8">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mb-6">Join the Beta Waitlist</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-[var(--color-border-divider)] rounded-lg bg-white text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)]"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    Company or Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 border border-[var(--color-border-divider)] rounded-lg bg-white text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)]"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="use_case" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    Primary Use Case (Optional)
                  </label>
                  <textarea
                    id="use_case"
                    name="use_case"
                    rows={3}
                    className="w-full px-4 py-2 border border-[var(--color-border-divider)] rounded-lg bg-white text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)]"
                    placeholder="Tell us how you plan to use SaveCash..."
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 w-4 h-4 text-[var(--color-accent-primary)] border-gray-300 rounded focus:ring-[var(--color-accent-primary)]"
                    required
                  />
                  <label htmlFor="agree" className="text-sm text-[var(--color-text-primary)]">
                    I agree to the{' '}
                    <a href="/beta-confidentiality" className="text-[var(--color-accent-primary)] hover:underline font-medium">
                      SaveCash Private Beta Confidentiality Terms
                    </a>
                    {' '}and acknowledge participation in a confidential beta program. I understand that misuse may result in legal action.
                  </label>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="agree_tos"
                    name="agree_tos"
                    className="mt-1 w-4 h-4 text-[var(--color-accent-primary)] border-gray-300 rounded focus:ring-[var(--color-accent-primary)]"
                    required
                  />
                  <label htmlFor="agree_tos" className="text-sm text-[var(--color-text-primary)]">
                    I agree to the{' '}
                    <a href="/terms" className="text-[var(--color-accent-primary)] hover:underline">
                      Terms of Service
                    </a>
                    {' '}and{' '}
                    <a href="/" className="text-[var(--color-accent-primary)] hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!agreed}
                  className="w-full py-4 bg-[var(--color-accent-primary)] text-white rounded-lg font-semibold text-lg hover:bg-[var(--color-accent-hover)] transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Join the Waitlist
                </button>
              </form>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">⚠️ Important Notice</h3>
              <p className="text-yellow-800">
                The SaveCash Private Beta is an invite-only program. Beta participants must abide by strict confidentiality terms and may not share, reproduce, or disclose any information about the Beta platform without prior written consent from SaveCash. Participation is at SaveCash's discretion.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

