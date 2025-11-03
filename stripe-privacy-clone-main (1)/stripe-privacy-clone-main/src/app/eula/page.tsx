'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function EULAPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">End User License Agreement (EULA)</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This End User License Agreement ("Agreement") is a legal agreement between you and our company for the use of our software, applications, and related services ("Software"). By installing, accessing, or using the Software, you agree to be bound by the terms of this Agreement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. License Grant</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Subject to your compliance with this Agreement, we grant you a limited, non-exclusive, non-transferable, revocable license to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Download, install, and use the Software on devices you own or control</li>
                <li>Access and use the Software for your business or personal purposes</li>
                <li>Receive updates and support services as made available by us</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. License Restrictions</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Copy, modify, distribute, sell, or lease any part of the Software</li>
                <li>Reverse engineer, decompile, or disassemble the Software</li>
                <li>Remove, alter, or obscure any proprietary notices on the Software</li>
                <li>Use the Software in any way that violates applicable laws or regulations</li>
                <li>Use the Software to create a competing product or service</li>
                <li>Attempt to gain unauthorized access to any services or systems</li>
                <li>Use the Software to transmit viruses, malware, or other harmful code</li>
                <li>Rent, lease, lend, or sublicense the Software to third parties</li>
                <li>Extract or exploit proprietary algorithms, data models, or business methods</li>
                <li>Create derivative works based on the Software's functionality</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">3. Ownership</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                The Software is licensed, not sold. We and our licensors retain all right, title, and interest in and to the Software, including all intellectual property rights, proprietary algorithms, AI models, trade secrets, and business methods. This Agreement does not grant you any rights to our trademarks, service marks, or brand names.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Any unauthorized use, copying, or exploitation of our intellectual property constitutes infringement and will result in immediate termination of this license and severe legal consequences including injunctive relief and monetary damages.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">4. Updates and Modifications</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We may provide updates, patches, or modifications to the Software from time to time. These updates may be automatically downloaded and installed. You agree to receive such updates as part of your use of the Software.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We reserve the right to modify or discontinue the Software at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the Software.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">5. Data Collection and Privacy</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                The Software may collect certain data about your use, including technical information, usage patterns, and performance metrics. Our collection and use of this data is governed by our{' '}
                <a href="/privacy" className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] hover:underline transition-all duration-150">
                  Privacy Policy
                </a>
                .
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">6. Third-Party Components</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                The Software may include third-party software components that are subject to separate license terms. You agree to comply with all such third-party license terms. A list of third-party components and their licenses is available in the Software documentation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">7. Term and Termination</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This Agreement is effective from the date you first install or use the Software and continues until terminated. You may terminate this Agreement by uninstalling and ceasing all use of the Software.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We may terminate this Agreement immediately if you breach any of its terms. Upon termination, you must immediately cease all use of the Software and delete all copies in your possession.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">8. Warranty Disclaimer</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We do not warrant that the Software will be error-free, uninterrupted, or free from harmful components. You use the Software at your own risk.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">9. Limitation of Liability</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING FROM YOUR USE OF THE SOFTWARE.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Our total liability to you for all claims arising from this Agreement shall not exceed the amount you paid for the Software in the twelve months preceding the claim.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">10. Export Compliance</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                The Software may be subject to export control laws. You agree to comply with all applicable export and import laws and regulations. You represent that you are not located in, under the control of, or a national or resident of any restricted country.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">11. Governing Law</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is registered, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">12. Entire Agreement</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This Agreement constitutes the entire agreement between you and us regarding the Software and supersedes all prior agreements and understandings, whether written or oral.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">13. Contact Information</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                If you have any questions about this EULA, please{' '}
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
