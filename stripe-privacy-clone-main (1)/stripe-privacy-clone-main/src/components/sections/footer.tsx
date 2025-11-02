'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
                <Link href="/" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/eula" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150">
                  EULA
                </Link>
              </li>
              <li>
                <Link href="/acceptable-use" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150">
                  Acceptable Use Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150">
                  Disclaimer
                </Link>
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
                <Link href="/security" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border-divider)]">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-[var(--color-text-secondary)]">
              © {currentYear} SaveCash. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
