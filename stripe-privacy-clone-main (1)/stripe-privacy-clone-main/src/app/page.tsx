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
import BiometricDataSection from '@/components/sections/biometric-data-section';
import AIMLProcessingSection from '@/components/sections/ai-ml-processing-section';
import QuantumComputingSection from '@/components/sections/quantum-computing-section';
import BlockchainCryptocurrencySection from '@/components/sections/blockchain-cryptocurrency-section';
import IoTSmartDevicesSection from '@/components/sections/iot-smart-devices-section';
import GeneticHealthDataSection from '@/components/sections/genetic-health-data-section';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <div className="flex">
        <SidebarNavigation />
        
        <main className="flex-1 lg:ml-[280px] xl:mr-[280px]">
          <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
            <article className="space-y-12">
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
              <BiometricDataSection />
              <AIMLProcessingSection />
              <QuantumComputingSection />
              <BlockchainCryptocurrencySection />
              <IoTSmartDevicesSection />
              <GeneticHealthDataSection />
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