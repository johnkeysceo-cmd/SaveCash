import React from 'react';

const GeneticHealthDataSection = () => {
  return (
    <section id="genetic-health-medical-data" className="scroll-mt-24 max-w-[800px]">
      <h2 className="mt-12 mb-6 text-[36px] font-bold text-[#1a1f36]">
        Section 16: Genetic, Health, and Medical Data Protection
      </h2>
      
      <h3 className="mt-8 mb-4 text-[28px] font-semibold text-[#1a1f36]">
        16.1 Health-Related Personal Data Collection and Processing
      </h3>
      
      <p className="mb-6 text-base font-normal text-[#4a5568] leading-[1.6]">
        We recognize that health, medical, and genetic information constitutes highly sensitive Personal Data requiring the highest levels of protection under laws including HIPAA (US), GDPR Article 9 (EU), PIPEDA (Canada), My Health Records Act (Australia), and other health privacy regulations worldwide. This section describes our practices when health-related data intersects with financial services.
      </p>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        a. Categories of Health-Related Data
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We may collect or process the following health-related information in limited circumstances:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Healthcare Payment Processing:</strong> Transaction data for healthcare services, medical procedures, pharmaceutical purchases, health insurance premiums, and medical device purchases (amounts, dates, merchant categories, not diagnostic details).
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Health Insurance Transactions:</strong> Insurance carrier information, policy numbers, explanation of benefits (EOB) processing, copayment amounts, deductible tracking, and claims payment facilitation.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Flexible Spending Accounts (FSA/HSA):</strong> Health savings account transactions, qualified medical expense verification, substantiation documentation, and dependent care account activity.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Telehealth Payment Data:</strong> Payment information for telemedicine consultations, remote patient monitoring services, and digital health platform subscriptions.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Wellness Program Payments:</strong> Corporate wellness program participation, fitness membership payments, mental health service transactions, and preventive care incentive payments.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Genetic Testing Services:</strong> Payment information for genetic testing services, ancestry services, pharmacogenomic testing, and direct-to-consumer genetic analysis (payment data only, never test results).
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Medical Device Transactions:</strong> Purchase of medical equipment, wearable health monitors, continuous glucose monitors (CGM), CPAP machines, hearing aids, and other health technology.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Mental Health Services:</strong> Payment for therapy sessions, psychiatric consultations, mental health apps, substance abuse treatment, and counseling services.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        b. Genetic Information Protection (GINA Compliance)
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We comply with the Genetic Information Nondiscrimination Act (GINA) and similar international laws protecting genetic information:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">No Genetic Test Results Collection:</strong> We never collect, request, or require genetic test results, DNA sequences, genomic data, or interpretation of genetic predispositions for any purpose.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Non-Discrimination Policy:</strong> Genetic information will never be used for eligibility determinations, pricing decisions, risk assessments, or any form of differential treatment.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Family Medical History Exclusion:</strong> We do not collect family medical history or information about genetic diseases or disorders in family members.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Segregated Storage:</strong> Any inadvertently collected genetic information is immediately isolated in segregated databases with restricted access and expedited deletion procedures.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Third-Party Prohibition:</strong> Contractual prohibitions prevent service providers from collecting, using, or disclosing genetic information obtained through our systems.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        c. HIPAA Compliance and Business Associate Relationships
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        When we process Protected Health Information (PHI) on behalf of healthcare covered entities:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Business Associate Agreements (BAA):</strong> Executed BAAs with healthcare providers, health plans, and healthcare clearinghouses defining permitted uses and required safeguards for PHI.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Minimum Necessary Standard:</strong> Access to and use of PHI limited to minimum necessary for payment processing and healthcare operations as defined in BAAs.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">HIPAA Security Rule:</strong> Administrative, physical, and technical safeguards meeting or exceeding HIPAA Security Rule requirements including encryption, access controls, and audit logs.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Breach Notification:</strong> HIPAA-compliant breach notification procedures including assessment, notification to covered entities within 60 days, and individual notification as required.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Subcontractor Management:</strong> Business Associate Agreements with all subcontractors who may access PHI, ensuring downstream HIPAA compliance.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right of Access:</strong> Facilitation of individuals' HIPAA right of access to their PHI within 30 days of request through covered entity coordination.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        d. Health Data Minimization and De-Identification
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We employ aggressive data minimization for health-related information:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Payment Focus:</strong> Collection strictly limited to payment facilitation, never clinical data, diagnoses, treatment plans, lab results, prescriptions, or medical histories.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Merchant Category Codes:</strong> Healthcare transactions identified by merchant category codes (MCC) not specific procedure codes, maintaining privacy while enabling proper transaction processing.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">De-Identification:</strong> Health-related data de-identified following HIPAA Expert Determination or Safe Harbor methods for research, analytics, or quality improvement when possible.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Aggregation:</strong> Health transaction data aggregated to population level for trend analysis, removing individual identifiability.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Tokenization:</strong> Account numbers and personal identifiers tokenized in healthcare payment systems, replacing sensitive data with non-sensitive equivalents.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        e. Mental Health Data Special Protections
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        Mental health information receives enhanced protections beyond standard PHI:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Psychotherapy Notes Exclusion:</strong> Never collect or process psychotherapy notes, which have heightened HIPAA protections requiring specific authorization.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Substance Use Disorder Protection:</strong> Compliance with 42 CFR Part 2 for substance use disorder treatment records requiring special consent for disclosure.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">State-Specific Mental Health Laws:</strong> Compliance with stricter state laws governing mental health information (California, New York, Illinois, Massachusetts).
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Stigma Prevention:</strong> Merchant descriptors for mental health services use neutral terminology preventing identification of service type on statements.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Crisis Intervention:</strong> Protocols for appropriate response if mental health crisis indicators detected during customer service interactions, prioritizing user safety.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        f. Reproductive Health Privacy Protections
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We implement enhanced protections for reproductive healthcare transactions:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Sensitive Service Protection:</strong> Reproductive health services (contraception, fertility treatment, pregnancy care, abortion services) receive elevated privacy protections.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Location Data Minimization:</strong> Reduced location data retention for reproductive healthcare facilities with automatic deletion after transaction completion.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Discreet Descriptors:</strong> Neutral merchant descriptors on statements protecting privacy from family members, partners, or others with account access.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Law Enforcement Response:</strong> Strict protocols for law enforcement requests involving reproductive healthcare requiring valid legal process and escalation to legal counsel.
        </li>
        <li>
          <strong className="font-medium  text-[#1a1f36]">Multi-Jurisdiction Considerations:</strong> Recognition of varying state laws regarding reproductive healthcare with privacy protections meeting most stringent applicable standards.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        g. Disability and Accommodation Information
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        Information related to disabilities and accommodations is handled with special care:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">ADA Compliance:</strong> Accessibility accommodation requests (screen reader requirements, alternative formats, communication preferences) stored securely and used solely for accommodation provision.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Limited Access:</strong> Disability information accessible only to personnel directly involved in accommodation provision, segregated from general customer data.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Non-Discrimination:</strong> Disability status never used for eligibility, pricing, risk assessment, fraud scoring, or any discriminatory purpose in compliance with ADA and Rehabilitation Act.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Medical Device Transactions:</strong> Purchases of assistive technology and medical devices processed with privacy protections preventing inference of specific disabilities.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        h. Health Data Retention and Disposal
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        Health-related data subject to shortened retention periods and enhanced disposal procedures:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Reduced Retention:</strong> Health transaction data retained for minimum period required by applicable law (typically 6-7 years) then permanently deleted, shorter than standard transaction retention.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Secure Destruction:</strong> Health data destruction using NIST SP 800-88 media sanitization guidelines with certified destruction for physical media and cryptographic erasure for electronic records.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Backup Purging:</strong> Health data purged from all backups, archives, and disaster recovery systems within 90 days of scheduled deletion from production.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Destruction Documentation:</strong> Certificates of destruction maintained for audit purposes documenting date, method, and personnel responsible for health data disposal.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        i. Research and Public Health</h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        Use of health data for research or public health purposes:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Institutional Review Board (IRB):</strong> Research involving health data requires IRB approval or equivalent ethical review with documented determination of minimal risk and privacy safeguards.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">De-Identified Data Sets:</strong> Research conducted on properly de-identified data sets meeting HIPAA Safe Harbor or Expert Determination standards when possible.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Public Health Reporting:</strong> Limited disclosure to public health authorities as required by law (communicable disease reporting, adverse event reporting) with minimum necessary information.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Epidemiological Studies:</strong> Participation in epidemiological research using aggregated, de-identified data for public health benefit (pandemic response, health outcomes research).
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Opt-Out Rights:</strong> Ability to opt out of health data use for research purposes where legally permissible, though public health reporting may remain mandatory.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        j. Your Health Data Rights
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        You have specific rights regarding health-related Personal Data:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Right of Access:</strong> Access to all health-related transaction data we maintain, provided within 30 days (HIPAA compliance) or sooner under applicable privacy laws.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Amendment:</strong> Request correction of inaccurate health information with documented rationale, though we may need covered entity concurrence for PHI.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Accounting:</strong> Accounting of disclosures of health information for purposes other than treatment, payment, and operations in last 6 years.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Restriction:</strong> Request restrictions on use or disclosure of health information, which we will honor unless required by law to disclose.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Confidential Communication:</strong> Request communications about health information through alternative means or locations (different email, physical address, phone).
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Breach Notification:</strong> Notification of any breach affecting your health information within timelines required by law (60 days for HIPAA breaches).
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Copy:</strong> Electronic copy of health information in readily producible format (EHR, PDF, JSON) at no charge for first copy.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        k. Cross-Border Health Data Transfers
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        International transfers of health data subject to enhanced safeguards:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Data Localization Compliance:</strong> Compliance with health data localization requirements (Russia, China, Indonesia) requiring in-country storage and processing.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">GDPR Article 9 Protections:</strong> Explicit consent and appropriate safeguards for cross-border transfers of health data (special category data under GDPR).
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Standard Contractual Clauses:</strong> EU SCCs with supplementary measures (encryption, pseudonymization) for health data transfers to non-adequate countries.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Binding Corporate Rules:</strong> Internal BCRs governing health data transfers among corporate affiliates with enhanced protections for sensitive health information.
        </li>
      </ul>

      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        For questions about health data processing, HIPAA rights, or genetic information protections, contact our Health Privacy Officer at <a href="mailto:health-privacyprivacy.savecash@gmail.com" className="text-[#635bff] hover:text-[#0a2540] hover:underline">health-privacyprivacy.savecash@gmail.com</a> or call our dedicated Health Privacy Hotline at 1-888-HEALTH-PRIVACY (1-888-432-5847). For HIPAA-related requests, visit our <a href="/hipaa-portal" className="text-[#635bff] hover:text-[#0a2540] hover:underline">HIPAA Compliance Portal</a>.
      </p>
    </section>
  );
};

export default GeneticHealthDataSection;