'use client';

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function DPAPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Data Processing Agreement</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
            </div>

            <section className="space-y-4">
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This Data Processing Agreement ("DPA") is entered into between you ("Controller") and SaveCash Technology, Inc. ("Processor" or "SaveCash") and governs how SaveCash processes personal data on your behalf. This DPA forms part of and supplements the SaveCash Services Agreement or other agreement between you and SaveCash governing your use of our Services (collectively, the "Principal Agreement").
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This DPA applies whenever SaveCash acts as a processor or sub-processor of personal data in connection with the Services. Capitalized terms not defined in this DPA shall have the meanings set forth in the Principal Agreement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Definitions</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                For purposes of this DPA, the following terms shall have the meanings set forth below:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>"Controller"</strong> means the entity that determines the purposes and means of the processing of personal data.</li>
                <li><strong>"Data Subject"</strong> means an identified or identifiable natural person whose personal data is processed.</li>
                <li><strong>"EU Data Protection Law"</strong> means the General Data Protection Regulation (Regulation (EU) 2016/679) ("GDPR") and any applicable national implementing legislation.</li>
                <li><strong>"Personal Data"</strong> means any information relating to a Data Subject that is processed by SaveCash on your behalf in connection with the Services.</li>
                <li><strong>"Processing"</strong> means any operation performed on Personal Data, such as collection, recording, storage, adaptation, disclosure, erasure, or destruction.</li>
                <li><strong>"Processor"</strong> means the entity that processes Personal Data on behalf of the Controller.</li>
                <li><strong>"Security Incident"</strong> means any breach of security leading to the accidental or unlawful destruction, loss, alteration, or unauthorized disclosure of Personal Data.</li>
                <li><strong>"Sub-processor"</strong> means any third party engaged by SaveCash to process Personal Data on your behalf.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. Scope and Applicability</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This DPA applies to all Processing of Personal Data by SaveCash in connection with the Services. The subject matter, duration, nature and purpose of Processing, types of Personal Data, and categories of Data Subjects are described in Annex A to this DPA (or, if not specified in Annex A, as set forth in the Principal Agreement).
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This DPA is supplemental to and shall not replace any existing obligations between the parties. In the event of any conflict between this DPA and the Principal Agreement regarding data protection, this DPA shall prevail to the extent of such conflict.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">3. Processing of Personal Data</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash agrees to Process Personal Data only on your documented instructions, which include the Principal Agreement and any authorized use of the Services. You instruct SaveCash to Process Personal Data to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Provide, maintain, and improve the Services as described in the Principal Agreement</li>
                <li>Process payment transactions and related financial services</li>
                <li>Comply with applicable laws, regulations, and card network rules</li>
                <li>Detect and prevent fraud, abuse, and security threats</li>
                <li>Respond to your requests and provide customer support</li>
                <li>Generate reports, analytics, and insights as enabled by the Services</li>
                <li>Perform any other functions reasonably necessary to provide the Services</li>
              </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash will not Process Personal Data for any purpose other than those specified in this section without your prior written consent, except where required by applicable law. If SaveCash is required by law to Process Personal Data for a different purpose, SaveCash will inform you of this legal requirement before Processing, unless such disclosure is prohibited by applicable law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">4. Data Subject Rights</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash will assist you in responding to requests from Data Subjects to exercise their rights under applicable Data Protection Law, including:
              </p>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">4.1 Rights Under GDPR</h3>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Right of Access:</strong> Data Subjects may request copies of their Personal Data</li>
                <li><strong>Right to Rectification:</strong> Data Subjects may request correction of inaccurate Personal Data</li>
                <li><strong>Right to Erasure:</strong> Data Subjects may request deletion of their Personal Data in certain circumstances</li>
                <li><strong>Right to Restrict Processing:</strong> Data Subjects may request that Processing be limited</li>
                <li><strong>Right to Data Portability:</strong> Data Subjects may receive their Personal Data in a structured, machine-readable format</li>
                <li><strong>Right to Object:</strong> Data Subjects may object to certain types of Processing</li>
                <li><strong>Rights Related to Automated Decision-Making:</strong> Data Subjects may request human review of automated decisions</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">4.2 Assistance Obligations</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Upon your written request, SaveCash will provide reasonable assistance to enable you to respond to Data Subject requests, including:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Accessing and retrieving Personal Data from our systems</li>
                <li>Correcting or deleting Personal Data as instructed</li>
                <li>Providing Personal Data in a portable format</li>
                <li>Restricting Processing upon your request</li>
                <li>Responding to inquiries about our security measures</li>
              </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash may charge reasonable fees for excessive or repetitive requests, in accordance with applicable law. SaveCash may also refuse to act on instructions that, in SaveCash's reasonable opinion, infringe applicable Data Protection Law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">5. Security Measures</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash implements and maintains comprehensive technical and organizational security measures designed to protect Personal Data against Security Incidents. These measures include:
              </p>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">5.1 Technical Safeguards</h3>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Encryption of Personal Data both in transit and at rest using industry-standard encryption algorithms (AES-256, TLS 1.3)</li>
                <li>Access controls requiring authentication and authorization for all systems and databases containing Personal Data</li>
                <li>Multi-factor authentication for all personnel with access to Personal Data</li>
                <li>Regular security assessments, penetration testing, and vulnerability scans</li>
                <li>Network segmentation and firewall protections</li>
                <li>Intrusion detection and prevention systems</li>
                <li>Secure backup and disaster recovery procedures</li>
                <li>Regular patching and updates of all systems and software</li>
                <li>Secure software development lifecycle (SDLC) practices</li>
                <li>Code reviews and security testing of all software changes</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">5.2 Organizational Safeguards</h3>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Confidentiality agreements with all personnel who have access to Personal Data</li>
                <li>Regular security awareness and training programs for all employees</li>
                <li>Role-based access controls limiting access to Personal Data on a need-to-know basis</li>
                <li>Background checks for personnel with access to Personal Data</li>
                <li>Incident response and business continuity plans</li>
                <li>Regular audits and assessments of security measures</li>
                <li>Information security policies and procedures</li>
                <li>Physical security controls at all data center facilities</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">5.3 Compliance Certifications</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash maintains the following certifications and attestations, which you may rely upon as evidence of our security measures:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Level 1 PCI DSS certification (highest level of payment card security certification)</li>
                <li>ISO/IEC 27001 certification for information security management systems</li>
                <li>ISO/IEC 27018 certification for protection of personally identifiable information in public clouds</li>
                <li>SOC 2 Type II attestations for security, availability, confidentiality, and processing integrity</li>
                <li>Regular third-party security audits and assessments</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">6. Security Incidents</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                If SaveCash becomes aware of a Security Incident affecting Personal Data Processed on your behalf, SaveCash will:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Notify you without undue delay, and in any event within 72 hours of becoming aware of the Security Incident</li>
                <li>Provide you with sufficient information to allow you to meet any obligations to notify Data Subjects or supervisory authorities</li>
                <li>Investigate the Security Incident and provide you with updates as they become available</li>
                <li>Take appropriate remedial measures to mitigate the effects of the Security Incident</li>
                <li>Cooperate with you and any supervisory authorities in investigating and addressing the Security Incident</li>
              </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash's notification obligation does not apply to Security Incidents that are caused by you or your systems, or that do not present a real risk of harm to Data Subjects. SaveCash's determination of whether a Security Incident presents a real risk of harm is final and binding.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">7. Sub-processors</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You acknowledge and agree that SaveCash may engage Sub-processors to Process Personal Data in connection with the Services. SaveCash maintains a list of current Sub-processors, which is available upon request at privacy.savecash@gmail.com. SaveCash will:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Enter into written agreements with all Sub-processors containing data protection obligations substantially similar to those in this DPA</li>
                <li>Remain fully liable for the acts and omissions of Sub-processors</li>
                <li>Notify you of any intended changes to Sub-processors with reasonable prior notice</li>
                <li>Allow you to object to proposed Sub-processor changes on reasonable grounds within 30 days of notification</li>
                <li>Assess the security and privacy practices of Sub-processors on a regular basis</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">7.1 Sub-processor Categories</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash engages Sub-processors in the following categories:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Cloud Infrastructure:</strong> Hosting and storage services (AWS, Google Cloud Platform, Azure)</li>
                <li><strong>Payment Processing:</strong> Card networks, acquiring banks, and payment processors</li>
                <li><strong>Communication Services:</strong> Email delivery, SMS messaging, customer support platforms</li>
                <li><strong>Analytics and Monitoring:</strong> Performance monitoring, error tracking, analytics services</li>
                <li><strong>Security Services:</strong> Fraud detection, identity verification, threat intelligence</li>
                <li><strong>Compliance Services:</strong> KYC/AML screening, regulatory reporting, audit services</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">8. Data Retention and Deletion</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash will retain Personal Data only for as long as necessary to provide the Services or as required by applicable law. Unless otherwise required by law or legal process, SaveCash will delete Personal Data:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Upon termination of the Services and after any applicable retention period</li>
                <li>Upon your written request to delete specific Personal Data</li>
                <li>In accordance with your data retention policies communicated to SaveCash</li>
                <li>As required by applicable law or legal process</li>
              </ul>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">8.1 Retention Requirements</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Certain Personal Data may need to be retained longer due to legal, regulatory, or compliance obligations, including:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Transaction records required by financial regulations (typically 7 years)</li>
                <li>Tax and accounting records required by tax authorities</li>
                <li>Fraud prevention and AML compliance records</li>
                <li>Legal hold requirements for pending litigation or investigations</li>
                <li>Backup and disaster recovery archives</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">8.2 Secure Deletion</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                When deleting Personal Data, SaveCash will use secure deletion methods that render the data irrecoverable, including:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Overwriting storage media with random data multiple times</li>
                <li>Degaussing and physical destruction of storage media when appropriate</li>
                <li>Verification that deletion has been successful</li>
                <li>Deletion from all backup and archival systems</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">9. Audit Rights</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash shall make available to you, upon reasonable written request, information necessary to demonstrate compliance with this DPA. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Copies of relevant security policies and procedures</li>
                <li>Summary reports of security assessments and audits</li>
                <li>Certification and attestation reports (SOC 2, ISO 27001, etc.)</li>
                <li>Sub-processor lists and due diligence documentation</li>
                <li>Incident response reports (subject to confidentiality restrictions)</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">9.1 On-Site Audits</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                If the information provided is not sufficient to demonstrate compliance, you may request to conduct an on-site audit of SaveCash's facilities and systems. Such audits are subject to the following conditions:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Audits must be conducted during normal business hours</li>
                <li>You must provide at least 60 days' advance written notice</li>
                <li>Audits must be conducted by qualified third-party auditors acceptable to SaveCash</li>
                <li>Audits must not unreasonably interfere with SaveCash's business operations</li>
                <li>Auditors must sign SaveCash's standard confidentiality agreement</li>
                <li>You bear all costs of such audits</li>
                <li>Audits are limited to once per calendar year unless required by law or regulation</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">10. International Data Transfers</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                To provide the Services, SaveCash may transfer Personal Data across international borders. SaveCash ensures such transfers are conducted in compliance with applicable Data Protection Law through appropriate safeguards, including:
              </p>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">10.1 Transfer Mechanisms</h3>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Standard Contractual Clauses (SCCs):</strong> European Commission approved contracts for data transfers from the EEA to third countries</li>
                <li><strong>Adequacy Decisions:</strong> Transfers to countries determined by regulators to provide adequate data protection</li>
                <li><strong>Binding Corporate Rules (BCRs):</strong> Internal codes of conduct approved by supervisory authorities</li>
                <li><strong>Derogations:</strong> Where appropriate, reliance on GDPR Article 49 derogations for specific situations</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">10.2 Supplementary Measures</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash implements supplementary technical and organizational measures to ensure transferred Personal Data receives an essentially equivalent level of protection as required by GDPR, including:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Encryption of Personal Data in transit and at rest</li>
                <li>Access controls and pseudonymization where appropriate</li>
                <li>Regular risk assessments of transfer destinations</li>
                <li>Transparency reports about government access requests</li>
                <li>Challenges to government access requests where legally permissible</li>
              </ul>

              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Details of SaveCash's international data transfer practices are set forth in our Data Transfers Addendum, which is incorporated into this DPA by reference.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">11. Compliance Cooperation</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash will reasonably cooperate with you in responding to inquiries from supervisory authorities and regulators regarding the Processing of Personal Data under this DPA. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Providing information about our data protection practices</li>
                <li>Submitting to inspections and audits by supervisory authorities</li>
                <li>Participating in investigations and enforcement proceedings</li>
                <li>Proving evidence of compliance with applicable Data Protection Law</li>
                <li>Coordinating responses to supervisory authority inquiries</li>
              </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                SaveCash will inform you promptly if it receives any inquiry, inspection, or complaint from a supervisory authority regarding the Processing of Personal Data under this DPA, unless prohibited from doing so by applicable law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">12. Data Protection Impact Assessments</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Where required by applicable Data Protection Law, SaveCash will reasonably cooperate with you in conducting Data Protection Impact Assessments ("DPIAs"). SaveCash will:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li>Provide information about our Processing activities relevant to the DPIA</li>
                <li>Provide information about our security measures and safeguards</li>
                <li>Participate in discussions regarding potential risks and mitigations</li>
                <li>Implement agreed-upon mitigating measures where feasible</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">13. Liability and Indemnification</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Each party will indemnify the other against third-party claims to the extent caused by that party's breach of this DPA. SaveCash's total liability for all claims arising under this DPA shall not exceed the limitation of liability set forth in the Principal Agreement.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Neither party shall be liable for any indirect, special, incidental, or consequential damages arising under or in connection with this DPA, except to the extent required by mandatory applicable law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">14. Term and Termination</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This DPA takes effect upon the effective date of the Principal Agreement and continues in effect until the termination of the Principal Agreement or until all Personal Data has been deleted from SaveCash's systems, whichever is later.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Upon termination of this DPA, SaveCash will return or delete all Personal Data in accordance with Section 8, except where applicable law or retention obligations require continued storage.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">15. General Provisions</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This DPA is subject to the governing law and dispute resolution provisions set forth in the Principal Agreement. Any modification to this DPA must be in writing and signed by both parties. If any provision of this DPA is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This DPA does not create any third-party rights. The parties to the Principal Agreement are the sole beneficiaries of this DPA.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">16. Contact Information</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                For questions about this DPA, please contact us at:
              </p>
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6 mt-4">
                <p className="text-[var(--color-text-primary)] mb-3">
                  <strong className="font-medium">Email:</strong> privacy.savecash@gmail.com
                </p>
                <p className="text-[var(--color-text-primary)]">
                  <strong className="font-medium">Data Protection Officer:</strong> privacy.savecash@gmail.com
                </p>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

