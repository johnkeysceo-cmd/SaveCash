import React from "react";

import AIMLProcessingSection from "@/components/sections/ai-ml-processing-section";
import AdditionalCollectionMethods from "@/components/sections/additional-collection-methods";
import BlockchainCryptocurrencySection from "@/components/sections/blockchain-cryptocurrency-section";
import BiometricDataSection from "@/components/sections/biometric-data-section";
import ContactInfo from "@/components/sections/contact-info";
import DefinedTerms from "@/components/sections/defined-terms";
import Footer from "@/components/sections/footer";
import GeneticHealthDataSection from "@/components/sections/genetic-health-data-section";
import Header from "@/components/sections/header";
import InternationalTransfersSection from "@/components/sections/international-transfers";
import IoTSmartDevicesSection from "@/components/sections/iot-smart-devices-section";
import JurisdictionProvisions from "@/components/sections/jurisdiction-provisions";
import LegalBasesSection from "@/components/sections/legal-bases";
import OnThisPageNav from "@/components/sections/on-this-page-nav";
import PersonalDataCollection from "@/components/sections/personal-data-collection";
import PrivacyHero from "@/components/sections/privacy-hero";
import QuantumComputingSection from "@/components/sections/quantum-computing-section";
import RightsAndChoices from "@/components/sections/rights-and-choices";
import SecurityAndRetentionSection from "@/components/sections/security-retention";
import SidebarNavigation from "@/components/sections/sidebar-navigation";
import TableOfContents from "@/components/sections/table-of-contents";
import UpdatesNotifications from "@/components/sections/updates-notifications";
import USConsumerNotice from "@/components/sections/us-consumer-notice";
import WelcomeSection from "@/components/sections/welcome-section";

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
