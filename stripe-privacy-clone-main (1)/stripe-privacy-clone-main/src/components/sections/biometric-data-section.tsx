import React from 'react';

const BiometricDataSection = () => {
  return (
    <section id="biometric-data-and-facial-recognition" className="scroll-mt-24 max-w-[800px]">
      <h2 className="mt-12 mb-6 text-[36px] font-bold text-[#1a1f36]">
        Section 11: Biometric Data and Facial Recognition Technologies
      </h2>
      
      <h3 className="mt-8 mb-4 text-[28px] font-semibold text-[#1a1f36]">
        11.1 Biometric Information Collection and Processing
      </h3>
      
      <p className="mb-6 text-base font-normal text-[#4a5568] leading-[1.6]">
        We collect, process, and retain biometric identifiers and biometric information ("Biometric Data") for identity verification, fraud prevention, and security purposes in accordance with applicable laws including but not limited to the Illinois Biometric Information Privacy Act (BIPA), Texas Capture or Use of Biometric Identifier Act (CUBI), Washington State's biometric privacy law, California's biometric privacy provisions under CCPA/CPRA, and the EU's GDPR Article 9 special categories of personal data provisions.
      </p>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        a. Types of Biometric Data Collected
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We may collect the following types of Biometric Data:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Facial Geometry Data:</strong> Unique mathematical representations of facial features including distance between eyes, nose width, jawline shape, and other distinctive facial characteristics derived from photographs or video captures.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Facial Recognition Templates:</strong> Mathematical faceprint templates generated through proprietary algorithms that cannot be reverse-engineered to recreate the original image.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Liveness Detection Data:</strong> Biometric data captured during liveness checks including micro-expressions, eye movements, depth mapping, and thermal imaging to prevent presentation attacks and spoofing.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Voice Biometrics:</strong> Voice patterns, pitch, tone, cadence, and other unique vocal characteristics when you interact with our voice-enabled services or customer support.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Fingerprint Data:</strong> Ridge patterns, minutiae points, and other unique fingerprint characteristics when using fingerprint authentication on compatible devices.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Iris and Retinal Patterns:</strong> Unique patterns in the colored ring of the eye or blood vessel patterns in the retina for advanced authentication methods.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Gait Analysis:</strong> Walking patterns and movement characteristics captured through device sensors for continuous authentication.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Keystroke Dynamics:</strong> Typing patterns including speed, rhythm, and pressure when entering information.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Behavioral Biometrics:</strong> Mouse movements, touchscreen interaction patterns, device holding angles, and navigation behaviors.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        b. Purposes for Biometric Data Processing
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We process Biometric Data for the following specific purposes:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>Identity verification and authentication to comply with Know Your Customer (KYC), Anti-Money Laundering (AML), and Customer Due Diligence (CDD) requirements</li>
        <li>Prevention of identity theft, account takeover, and synthetic identity fraud</li>
        <li>Detection of deepfakes, presentation attacks, and other advanced fraud techniques</li>
        <li>Multi-factor authentication and passwordless authentication methods</li>
        <li>Age verification and compliance with age-restricted services regulations</li>
        <li>Continuous authentication throughout user sessions to detect account hijacking</li>
        <li>Dispute resolution and investigation of fraudulent transactions</li>
        <li>Enhancement and improvement of biometric recognition algorithms through machine learning</li>
        <li>Compliance with regulatory requirements including sanctions screening and politically exposed person (PEP) checks</li>
        <li>Provision of accessibility features for users with disabilities</li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        c. Consent and Notice Requirements
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        In accordance with applicable biometric privacy laws, we provide clear notice and obtain your informed written consent before collecting Biometric Data. Our consent process includes:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Written Notice:</strong> Clear, conspicuous written notice that Biometric Data is being collected, captured, or otherwise obtained, including the specific type of biometric identifier or information being collected.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Purpose Disclosure:</strong> Detailed explanation of the specific purpose and length of term for which Biometric Data is being collected, stored, and used.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Opt-In Consent:</strong> Affirmative opt-in consent obtained before any collection or use of Biometric Data, with clear ability to decline without negative consequences to basic service access.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Withdraw:</strong> Clear information about your right to withdraw consent at any time and instructions for doing so.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Separate Consent:</strong> Consent for biometric collection obtained separately from general terms of service or privacy policy acceptance.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        d. Retention and Destruction of Biometric Data
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We maintain comprehensive retention and destruction schedules for Biometric Data:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Retention Period:</strong> Biometric Data is retained only for the time necessary to fulfill the specific purpose for which it was collected, or as required by applicable law, regulation, or legal obligation. Standard retention periods range from immediate deletion post-verification to a maximum of 3 years for fraud prevention purposes.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Automatic Deletion:</strong> Systems automatically delete Biometric Data upon: (a) satisfaction of the initial purpose; (b) termination of your relationship with us; (c) expiration of applicable retention periods; or (d) withdrawal of consent.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Secure Destruction:</strong> Biometric Data is permanently and irreversibly destroyed using industry-standard methods including cryptographic erasure, degaussing, and physical destruction of storage media.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Destruction Verification:</strong> We maintain auditable records of Biometric Data destruction including timestamps, methods used, and personnel responsible.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Backup Deletion:</strong> Biometric Data is purged from all backup systems, archives, and disaster recovery systems within 90 days of scheduled deletion from production systems.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        e. Biometric Data Security Measures
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We implement rigorous security measures that meet or exceed the care used to protect other confidential and sensitive information:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Encryption in Transit:</strong> All Biometric Data transmitted over networks is encrypted using TLS 1.3 or higher with perfect forward secrecy (PFS) and authenticated encryption algorithms.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Encryption at Rest:</strong> Biometric Data at rest is encrypted using AES-256 encryption with hardware security modules (HSMs) for key management, meeting FIPS 140-2 Level 3 standards.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Tokenization:</strong> Original biometric images and raw data are immediately tokenized or converted to irreversible mathematical templates, with original data securely destroyed.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Access Controls:</strong> Strict role-based access controls (RBAC) with multi-factor authentication required for any personnel access to systems containing Biometric Data.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Segregation:</strong> Biometric Data stored in isolated, segregated databases with dedicated encryption keys separate from other personal data.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Monitoring:</strong> Continuous monitoring and logging of all access to Biometric Data with real-time anomaly detection and automated alerting.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Security Audits:</strong> Regular third-party security audits, penetration testing, and vulnerability assessments specifically focused on biometric systems.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        f. Prohibition on Sale or Profit from Biometric Data
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We strictly prohibit the sale, lease, trade, or other profit from Biometric Data. Specifically:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>We will never sell, lease, or trade your Biometric Data to third parties</li>
        <li>We will never profit from or receive monetary consideration in exchange for Biometric Data</li>
        <li>Third-party service providers processing Biometric Data on our behalf are contractually prohibited from retaining, using, or disclosing Biometric Data except as necessary to perform services for us</li>
        <li>Biometric Data is never used for marketing, advertising, or commercial purposes unrelated to the specific purpose for which consent was obtained</li>
        <li>We do not include Biometric Data in any data sets sold, licensed, or monetized for secondary purposes</li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        g. Third-Party Disclosure of Biometric Data
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We may disclose Biometric Data to third parties only in the following limited circumstances:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Service Providers:</strong> Biometric Data may be disclosed to service providers who perform biometric authentication, liveness detection, or fraud prevention services on our behalf, subject to strict contractual confidentiality and data protection obligations.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Legal Compliance:</strong> Disclosure required by law, regulation, legal process, or government request, including law enforcement requests with proper legal authority.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Fraud Prevention:</strong> Disclosure to financial institutions, payment networks, or fraud prevention services when necessary to investigate or prevent fraudulent transactions.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Business Transfers:</strong> In the event of merger, acquisition, or sale of assets, Biometric Data may be transferred subject to the acquirer's commitment to honor this privacy policy or obtain new consent.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        h. Your Rights Regarding Biometric Data
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        You have specific rights regarding your Biometric Data under applicable laws:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Withdraw Consent:</strong> You may withdraw your consent for biometric collection and processing at any time by contacting us at privacyprivacy.savecash@gmail.com. Withdrawal will not affect the lawfulness of processing before withdrawal.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Deletion:</strong> You may request deletion of your Biometric Data at any time. We will permanently delete your Biometric Data within 30 days unless retention is required by law.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Access:</strong> You may request information about what Biometric Data we have collected, how it is being used, and with whom it has been shared.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Object:</strong> You may object to the processing of your Biometric Data for specific purposes and request alternative verification methods.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Rectification:</strong> You may request correction of inaccurate Biometric Data, though in most cases we will need to recapture biometric information rather than modify existing data.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Restrict Processing:</strong> You may request that we restrict processing of your Biometric Data while we investigate concerns you have raised.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Data Portability:</strong> Where technically feasible, you may request a copy of your Biometric Data in a structured, commonly used format.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Private Right of Action:</strong> In jurisdictions providing private rights of action for biometric privacy violations (such as Illinois BIPA), you may have the right to seek damages for violations.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        i. Biometric Data Breach Notification
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        In the event of a breach involving Biometric Data, we will provide expedited notification in accordance with or exceeding legal requirements:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>Notice to affected individuals within 72 hours of breach discovery, or sooner if required by applicable law</li>
        <li>Notification to relevant supervisory authorities and data protection agencies as required</li>
        <li>Detailed information about the nature of the breach, types of Biometric Data affected, and measures taken to mitigate harm</li>
        <li>Provision of identity theft protection services, credit monitoring, or other appropriate remedial measures at no cost to affected individuals</li>
        <li>Establishment of dedicated support channels for affected individuals to ask questions and receive assistance</li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        j. Jurisdiction-Specific Biometric Privacy Provisions
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        <strong className="font-medium text-[#1a1f36]">Illinois (BIPA):</strong> For Illinois residents, we comply with all BIPA requirements including written release, prohibition on profiting from biometric data, retention schedule publication, and reasonable care standard exceeding other confidential information.
      </p>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        <strong className="font-medium text-[#1a1f36]">Texas (CUBI):</strong> For Texas residents, we comply with CUBI requirements including consent for capture or disclosure, prohibition on sale, and notification of breach.
      </p>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        <strong className="font-medium text-[#1a1f36]">Washington:</strong> For Washington residents, we comply with state biometric privacy law including consent requirements and prohibition on enrollment without consent.
      </p>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        <strong className="font-medium text-[#1a1f36]">California (CCPA/CPRA):</strong> For California residents, biometric information is treated as sensitive personal information subject to additional protections including opt-in consent for sensitive data uses.
      </p>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        <strong className="font-medium text-[#1a1f36]">European Union (GDPR):</strong> For EU residents, biometric data is treated as a special category of personal data under Article 9, requiring explicit consent and additional safeguards.
      </p>

      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        For questions about our biometric data practices or to exercise your rights, contact us at <a href="mailto:biometricsprivacy.savecash@gmail.com" className="text-[#635bff] hover:text-[#0a2540] hover:underline">biometricsprivacy.savecash@gmail.com</a> or submit a request through our <a href="/privacy-center" className="text-[#635bff] hover:text-[#0a2540] hover:underline">Privacy Center</a>.
      </p>
    </section>
  );
};

export default BiometricDataSection;
