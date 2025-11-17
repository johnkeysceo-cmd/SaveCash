'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import SidebarNavigation from '@/components/sections/sidebar-navigation';
import OnThisPageNav from '@/components/sections/on-this-page-nav';
import PrivacyHero from '@/components/sections/privacy-hero';
import WelcomeSection from '@/components/sections/welcome-section';
import DefinedTerms from '@/components/sections/defined-terms';
import TableOfContents from '@/components/sections/table-of-contents';
import PersonalDataCollection from '@/components/sections/personal-data-collection';
import AdditionalCollectionMethods from '@/components/sections/additional-collection-methods';
import LegalBasesSection from '@/components/sections/legal-bases';
import RightsAndChoices from '@/components/sections/rights-and-choices';
import SecurityAndRetentionSection from '@/components/sections/security-retention';
import InternationalTransfersSection from '@/components/sections/international-transfers';
import UpdatesNotifications from '@/components/sections/updates-notifications';
import JurisdictionProvisions from '@/components/sections/jurisdiction-provisions';
import ContactInfo from '@/components/sections/contact-info';
import USConsumerNotice from '@/components/sections/us-consumer-notice';
import AIMLProcessingSection from '@/components/sections/ai-ml-processing-section';
import QuantumComputingSection from '@/components/sections/quantum-computing-section';
import BlockchainCryptocurrencySection from '@/components/sections/blockchain-cryptocurrency-section';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <div className="flex">
        <SidebarNavigation />
        
        <main className="flex-1 lg:ml-[280px] xl:mr-[280px]">
          <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
            <article className="space-y-12">
              {/* SaveCash Introduction */}
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6 mb-8">
                <p className="text-[var(--color-text-primary)] leading-relaxed mb-4">
                  <strong className="font-semibold">SaveCash</strong> is a beta-stage automated savings platform built to help users protect and grow their money securely.
                </p>
                <p className="text-[var(--color-text-primary)] leading-relaxed mb-4">
                  By using SaveCash, you agree that we may securely process transactions, analyze data to prevent fraud, and maintain compliance with U.S. and global financial standards.
                </p>
                <p className="text-[var(--color-text-primary)] leading-relaxed mb-4">
                  We never sell personal data. You remain the legal owner of your funds.
                </p>
                <p className="text-[var(--color-text-primary)] leading-relaxed">
                  Full terms below cover privacy, fraud protection, AI security, and account policies.
                </p>
              </div>
              <PrivacyHero />
              <WelcomeSection />
              <DefinedTerms />
              <TableOfContents />
              <PersonalDataCollection />
              <AdditionalCollectionMethods />
              <LegalBasesSection />
              <RightsAndChoices />
              <SecurityAndRetentionSection />
              <InternationalTransfersSection />
              <UpdatesNotifications />
              <AIMLProcessingSection />
              <QuantumComputingSection />
              <BlockchainCryptocurrencySection />
              <JurisdictionProvisions />
              <ContactInfo />
              <USConsumerNotice />
            </article>
          </div>
        </main>

        <OnThisPageNav />
      </div>

      <Footer />
    </div>
  );
}