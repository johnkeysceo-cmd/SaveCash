'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import LegalSummaryModal from '@/components/LegalSummaryModal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <footer className="w-full border-t border-[var(--color-border-divider)] bg-white mt-20">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150">
                  Careers
                </Link>
              </li>
              <li>
                <a href="/blog" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150">
                  Blog
                </a>
              </li>
              <li>
                <a href="/press" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => setOpenModal('privacy')}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150 text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenModal('terms')}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150 text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenModal('cookies')}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150 text-left"
                >
                  Cookie Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenModal('eula')}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150 text-left"
                >
                  EULA
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenModal('acceptable-use')}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150 text-left"
                >
                  Acceptable Use Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenModal('disclaimer')}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150 text-left"
                >
                  Disclaimer
                </button>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="/help" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/documentation" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/api" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150">
                  API Reference
                </a>
              </li>
              <li>
                <a href="/status" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150">
                  System Status
                </a>
              </li>
              <li>
                <button
                  onClick={() => setOpenModal('security')}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150 text-left"
                >
                  Security
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenModal('bug-bounty')}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150 text-left"
                >
                  Bug Bounty
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenModal('accessibility')}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150 text-left"
                >
                  Accessibility
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border-divider)]">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-[var(--color-text-secondary)]">
                © {currentYear} SaveCash Technologies Inc. All rights reserved.
              </p>
              <p className="text-xs text-[var(--color-text-secondary)]">
                SaveCash™, FinBots™, SmartSave™ are trademarks of SaveCash Technologies Inc. Patent(s) pending.
              </p>
              <p className="text-xs text-[var(--color-text-secondary)] max-w-2xl">
                Unauthorized scraping, copying, reverse engineering, or use of SaveCash outputs to train competing models is strictly prohibited and will be enforced.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Summary Modals */}
      {openModal && (
        <LegalSummaryModal
          isOpen={!!openModal}
          onClose={() => setOpenModal(null)}
          type={openModal}
        />
      )}
    </footer>
  );
};

export default Footer;
