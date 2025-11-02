import React from 'react';

const JurisdictionProvisions = () => {
  return (
    <section id="jurisdiction-specific-provisions" className="scroll-mt-24 max-w-[800px]">
      <h2 className="mt-12 mb-6 text-[36px] font-bold text-[#1a1f36]">
        8. Jurisdiction-Specific Provisions - Global Coverage
      </h2>
      
      <p className="mb-6 text-base font-normal text-[#4a5568] leading-[1.6]">
        This section provides jurisdiction-specific privacy rights, obligations, and disclosures for residents of various countries, states, and territories. These provisions supplement our main Privacy Policy and, where stricter, take precedence over general provisions.
      </p>

      {/* EUROPEAN UNION & EEA */}
      <h3 className="mt-8 mb-4 text-[28px] font-semibold text-[#1a1f36]">
        8.1 European Union (EU) and European Economic Area (EEA)
      </h3>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        For residents of EU/EEA countries, we comply with the General Data Protection Regulation (GDPR):
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li><strong className="font-medium text-[#1a1f36]">Data Controller:</strong> SaveCash Technology Europe Limited (Dublin, Ireland) serves as data controller for EU/EEA users.</li>
        <li><strong className="font-medium text-[#1a1f36]">Legal Bases:</strong> Processing based on contract performance, legal obligations, legitimate interests (with balancing test), consent, and substantial public interest.</li>
        <li><strong className="font-medium text-[#1a1f36]">Data Protection Officer:</strong> Contact our DPO at dpoprivacy.savecash@gmail.com or DPO, Attn: Privacy, 1 Grand Canal Street Lower, Dublin 2, Ireland.</li>
        <li><strong className="font-medium text-[#1a1f36]">EU Representative:</strong> Our EU representative pursuant to Article 27 GDPR available at eu-representativeprivacy.savecash@gmail.com.</li>
        <li><strong className="font-medium text-[#1a1f36]">Supervisory Authority:</strong> Right to lodge complaints with your national data protection authority (list available at edpb.europa.eu).</li>
        <li><strong className="font-medium text-[#1a1f36]">International Transfers:</strong> Data transfers outside EU/EEA use Standard Contractual Clauses (SCCs), Adequacy Decisions, or Binding Corporate Rules with supplementary measures.</li>
        <li><strong className="font-medium text-[#1a1f36]">GDPR Rights:</strong> Access, rectification, erasure, restriction, portability, objection, and automated decision-making rights fully supported.</li>
        <li><strong className="font-medium text-[#1a1f36]">Data Retention:</strong> Personal Data retained only as long as necessary for purposes collected, with specific retention schedules available upon request.</li>
        <li><strong className="font-medium text-[#1a1f36]">Special Categories:</strong> Article 9 special category data (biometric, health, genetic) processed only with explicit consent or legal authorization.</li>
      </ul>

      {/* UNITED KINGDOM */}
      <h3 className="mt-8 mb-4 text-[28px] font-semibold text-[#1a1f36]">
        8.2 United Kingdom
      </h3>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        UK residents have rights under UK GDPR and Data Protection Act 2018:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li><strong className="font-medium text-[#1a1f36]">UK Data Controller:</strong> SaveCash Payments UK Limited serves as data controller for UK users.</li>
        <li><strong className="font-medium text-[#1a1f36]">ICO Registration:</strong> Registered with Information Commissioner's Office (ICO), registration number available upon request.</li>
        <li><strong className="font-medium text-[#1a1f36]">UK Representative:</strong> UK representative pursuant to Article 27 UK GDPR at uk-representativeprivacy.savecash@gmail.com.</li>
        <li><strong className="font-medium text-[#1a1f36]">Supervisory Authority:</strong> Information Commissioner's Office (ICO), Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF. ico.org.uk</li>
        <li><strong className="font-medium text-[#1a1f36]">International Transfers:</strong> UK International Data Transfer Agreement (IDTA) or Addendum to SCCs for transfers to non-adequate countries.</li>
        <li><strong className="font-medium text-[#1a1f36]">Brexit Adequacy:</strong> EU-UK adequacy decision enables free flow of data between UK and EU without additional safeguards.</li>
      </ul>

      {/* UNITED STATES - FEDERAL */}
      <h3 className="mt-8 mb-4 text-[28px] font-semibold text-[#1a1f36]">
        8.3 United States - Federal Laws
      </h3>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li><strong className="font-medium text-[#1a1f36]">HIPAA Business Associate:</strong> BAAs executed with covered entities, PHI protected per Security and Privacy Rules.</li>
        <li><strong className="font-medium text-[#1a1f36]">GLBA Compliance:</strong> Gramm-Leach-Bliley Act safeguards, privacy notices, and opt-out rights for financial institutions.</li>
        <li><strong className="font-medium text-[#1a1f36]">FCRA Compliance:</strong> Fair Credit Reporting Act compliance for credit reporting and adverse action notices.</li>
        <li><strong className="font-medium text-[#1a1f36]">COPPA:</strong> Children's Online Privacy Protection Act - no knowing collection from children under 13.</li>
        <li><strong className="font-medium text-[#1a1f36]">VPPA:</strong> Video Privacy Protection Act - video rental/streaming records protected.</li>
        <li><strong className="font-medium text-[#1a1f36]">TCPA:</strong> Telephone Consumer Protection Act - marketing calls/texts require consent.</li>
      </ul>

      {/* ALL 50 US STATES */}
      <h3 className="mt-8 mb-4 text-[28px] font-semibold text-[#1a1f36]">
        8.4 United States - State-Specific Provisions
      </h3>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">California (CCPA/CPRA)</h4>
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li><strong className="font-medium text-[#1a1f36]">Consumer Rights:</strong> Right to know, delete, correct, opt-out of sale/sharing, limit sensitive data use, and non-discrimination.</li>
        <li><strong className="font-medium text-[#1a1f36]">Sensitive Personal Information:</strong> SSN, driver's license, biometrics, health data, geolocation - opt-in required for secondary uses.</li>
        <li><strong className="font-medium text-[#1a1f36]">Do Not Sell/Share:</strong> We do not sell personal information. Opt-out available at donotsellprivacy.savecash@gmail.com.</li>
        <li><strong className="font-medium text-[#1a1f36]">Authorized Agent:</strong> Authorized agents may submit requests with proof of authorization.</li>
        <li><strong className="font-medium text-[#1a1f36]">CPRA Enhancements:</strong> Risk assessments, data minimization, automated decision-making disclosures.</li>
        <li><strong className="font-medium text-[#1a1f36]">California Privacy Rights Act (CPRA) Metrics:</strong> Annual privacy metrics report available at privacy-metrics.company.com.</li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">Virginia (VCDPA)</h4>
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>Rights: Access, correction, deletion, portability, opt-out of targeted advertising and sale.</li>
        <li>Sensitive data consent required for: racial/ethnic origin, religious beliefs, health diagnosis, sexual orientation, citizenship, genetic/biometric data.</li>
        <li>Data protection assessments conducted for high-risk processing activities.</li>
        <li>Appeal process: Email appealsprivacy.savecash@gmail.com within 15 days of request decision.</li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">Colorado (CPA)</h4>
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>Universal opt-out mechanism supported for targeted advertising and sales.</li>
        <li>Profiling in furtherance of automated decisions: right to opt-out and explanation.</li>
        <li>Sensitive data inference prohibited without consent.</li>
        <li>Data protection assessments for targeted advertising, sale, and profiling.</li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">Connecticut (CTDPA)</h4>
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>Consumer rights: Access, correction, deletion, data portability, opt-out.</li>
        <li>Child data (13-16): Consent required for sale or targeted advertising.</li>
        <li>Privacy notices include data retention schedules and third-party categories.</li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">Utah (UCPA)</h4>
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>Consumer rights: Access, deletion, portability, opt-out of targeted advertising and sale.</li>
        <li>Sensitive data consent required (racial origin, religious beliefs, mental/physical health, sexual orientation, citizenship, genetic/biometric data).</li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">Additional US States (Comprehensive Coverage)</h4>
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">We comply with privacy laws in all 50 states including:</p>
      <ul className="mt-4 list-disc space-y-2 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li><strong>Montana, Oregon, Texas:</strong> Comprehensive privacy laws effective 2024-2025 with similar consumer rights.</li>
        <li><strong>Illinois (BIPA):</strong> Biometric Information Privacy Act - written consent before biometric collection (see Section 11).</li>
        <li><strong>New York (SHIELD Act):</strong> Enhanced data security requirements and breach notification.</li>
        <li><strong>Massachusetts:</strong> 201 CMR 17.00 comprehensive information security program requirements.</li>
        <li><strong>Nevada:</strong> Opt-out right for sale of covered information. Email nevada-optoutprivacy.savecash@gmail.com.</li>
        <li><strong>Maine:</strong> Opt-in consent required for sale of internet service provider customer data.</li>
        <li><strong>Washington:</strong> My Health My Data Act - consumer health data protections.</li>
        <li><strong>Delaware, Indiana, Iowa, Kentucky, Minnesota, Nebraska, New Hampshire, New Jersey, Rhode Island, Tennessee:</strong> State-specific privacy and security requirements fully complied with.</li>
      </ul>

      {/* CANADA */}
      <h3 className="mt-8 mb-4 text-[28px] font-semibold text-[#1a1f36]">
        8.5 Canada
      </h3>
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li><strong className="font-medium text-[#1a1f36]">PIPEDA Compliance:</strong> Personal Information Protection and Electronic Documents Act - consent, accuracy, safeguards, openness principles.</li>
        <li><strong className="font-medium text-[#1a1f36]">Provincial Laws:</strong> Alberta PIPA, British Columbia PIPA, Quebec Law 25 (Bill 64) compliance for applicable provinces.</li>
        <li><strong className="font-medium text-[#1a1f36]">Privacy Commissioner:</strong> Office of the Privacy Commissioner of Canada complaint process available.</li>
        <li><strong className="font-medium text-[#1a1f36]">Quebec Law 25:</strong> Enhanced rights for Quebec residents including data portability, de-indexing, and privacy impact assessments.</li>
        <li><strong className="font-medium text-[#1a1f36]">Canadian Representative:</strong> Canadian privacy representative at canada-privacyprivacy.savecash@gmail.com.</li>
      </ul>

      {/* LATIN AMERICA */}
      <h3 className="mt-8 mb-4 text-[28px] font-semibold text-[#1a1f36]">
        8.6 Brazil (LGPD)</h3>
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li><strong className="font-medium text-[#1a1f36]">Lei Geral de Proteção de Dados:</strong> Brazilian General Data Protection Law compliance.</li>
        <li><strong className="font-medium text-[#1a1f36]">Data Protection Officer:</strong> DPO for Brazil (encarregado) at brazil-dpoprivacy.savecash@gmail.com.</li>
        <li><strong className="font-medium text-[#1a1f36]">Legal Bases:</strong> Consent, contract, legal obligation, legitimate interest, credit protection, health protection, or other LGPD bases.</li>
        <li><strong className="font-medium text-[#1a1f36]">ANPD Authority:</strong> National Data Protection Authority (Autoridade Nacional de Proteção de Dados) oversight.</li>
        <li><strong className="font-medium text-[#1a1f36]">Sensitive Data:</strong> Explicit consent required for racial/ethnic origin, religious beliefs, political opinions, health, biometric, genetic data.</li>
        <li><strong className="font-medium text-[#1a1f36]">International Transfers:</strong> Adequacy, SCCs, BCRs, or specific authorization for transfers outside Brazil.</li>
      </ul>

      <h3 className="mt-8 mb-4 text-[28px] font-semibold text-[#1a1f36]">8.7 Mexico, Argentina, Colombia</h3>
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">Compliance with local data protection authorities and privacy laws including consent requirements, cross-border transfer mechanisms, and individual rights.</p>

      {/* ASIA-PACIFIC */}
      <h3 className="mt-8 mb-4 text-[28px] font-semibold text-[#1a1f36]">8.8 Australia (Privacy Act)</h3>
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li><strong className="font-medium text-[#1a1f36]">Australian Privacy Principles (APPs):</strong> 13 APPs governing collection, use, disclosure, and security.</li>
        <li><strong className="font-medium text-[#1a1f36]">Notifiable Data Breaches:</strong> OAIC notification within 30 days of awareness of eligible data breach.</li>
        <li><strong className="font-medium text-[#1a1f36]">Cross-Border Disclosure:</strong> Taking reasonable steps to ensure overseas recipients comply with APPs.</li>
        <li><strong className="font-medium text-[#1a1f36]">My Health Records:</strong> My Health Records Act compliance for health information.</li>
        <li><strong className="font-medium text-[#1a1f36]">Privacy Commissioner:</strong> Office of the Australian Information Commissioner (OAIC) complaint mechanism.</li>
      </ul>

      <h3 className="mt-8 mb-4 text-[28px] font-semibold text-[#1a1f36]">8.9 Japan (APPI)</h3>
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li><strong className="font-medium text-[#1a1f36]">Act on Protection of Personal Information:</strong> Purpose specification, limitation, accuracy, and safety management.</li>
        <li><strong className="font-medium text-[#1a1f36]">Personal Information Protection Commission:</strong> Registered with PPC, compliance with guidance and orders.</li>
        <li><strong className="font-medium text-[#1a1f36]">Sensitive Data (要配慮個人情報):</strong> Opt-in consent for race, creed, social status, medical history, criminal records, discrimination/prejudice data.</li>
        <li><strong className="font-medium text-[#1a1f36]">Cross-Border Transfers:</strong> Consent, adequacy, contract, or PPC approval for transfers outside Japan.</li>
        <li><strong className="font-medium text-[#1a1f36]">Individual Rights:</strong> Disclosure, correction, suspension of use, and erasure rights.</li>
      </ul>

      <h3 className="mt-8 mb-4 text-[28px] font-semibold text-[#1a1f36]">8.10 Singapore (PDPA)</h3>
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li><strong className="font-medium text-[#1a1f36]">Personal Data Protection Act:</strong> Consent, purpose limitation, notification, access and correction obligations.</li>
        <li><strong className="font-medium text-[#1a1f36]">Data Protection Officer:</strong> DPO contact available to individuals per Section 11(3) PDPA.</li>
        <li><strong className="font-medium text-[#1a1f36]">Do Not Call Registry:</strong> Compliance with DNC Registry for marketing communications.</li>
        <li><strong className="font-medium text-[#1a1f36]">Cross-Border Transfers:</strong> Standard of protection comparable to PDPA required for overseas transfers.</li>
        <li><strong className="font-medium text-[#1a1f36]">PDPC Compliance:</strong> Personal Data Protection Commission oversight and accountability.</li>
      </ul>

      <h3 className="mt-8 mb-4 text-[28px] font-semibold text-[#1a1f36]">8.11 India (DPDPA 2023)</h3>
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li><strong className="font-medium text-[#1a1f36]">Digital Personal Data Protection Act:</strong> Preparing for full implementation of DPDPA 2023.</li>
        <li><strong className="font-medium text-[#1a1f36]">Consent Framework:</strong> Free, specific, informed, unconditional, and unambiguous consent with easy withdrawal.</li>
        <li><strong className="font-medium text-[#1a1f36]">Data Principal Rights:</strong> Access, correction, erasure, grievance redressal, and nominating data nominee.</li>
        <li><strong className="font-medium text-[#1a1f36]">Data Protection Board:</strong> Preparation for Data Protection Board of India jurisdiction.</li>
        <li><strong className="font-medium text-[#1a1f36]">Cross-Border Transfers:</strong> Government approval framework for transfers to notified countries.</li>
      </ul>

      <h3 className="mt-8 mb-4 text-[28px] font-semibold text-[#1a1f36]">8.12 South Korea, Taiwan, Hong Kong, Philippines, Thailand, Indonesia, Malaysia, Vietnam</h3>
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">Full compliance with personal information protection laws including PIPA (Korea), PDPA (Taiwan, Hong Kong), Data Privacy Act (Philippines), PDPA (Thailand, Malaysia), and regional data protection requirements.</p>

      {/* CHINA */}
      <h3 className="mt-8 mb-4 text-[28px] font-semibold text-[#1a1f36]">8.13 China (PIPL)</h3>
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li><strong className="font-medium text-[#1a1f36]">Personal Information Protection Law:</strong> Separate consent for each purpose, data minimization, and purpose limitation.</li>
        <li><strong className="font-medium text-[#1a1f36]">Sensitive Personal Information:</strong> Specific purpose and necessity plus separate consent for biometric, religious, health, financial, location, minor (under 14) data.</li>
        <li><strong className="font-medium text-[#1a1f36]">Data Localization:</strong> Critical information infrastructure operators (CIIO) must store personal information in China with security assessment for outbound transfers.</li>
        <li><strong className="font-medium text-[#1a1f36]">Cross-Border Transfers:</strong> Security assessment, standard contracts, or certification required for personal information transfers outside China.</li>
        <li><strong className="font-medium text-[#1a1f36]">Representative:</strong> China representative designated per PIPL Article 53 for non-China controllers/processors.</li>
        <li><strong className="font-medium text-[#1a1f36]">Individual Rights:</strong> Access, correction, deletion, explanation of processing rules, and portable copy rights.</li>
      </ul>

      {/* MIDDLE EAST & AFRICA */}
      <h3 className="mt-8 mb-4 text-[28px] font-semibold text-[#1a1f36]">8.14 Israel, South Africa, UAE, Saudi Arabia, Kenya</h3>
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">Compliance with regional data protection laws including Privacy Protection Law (Israel), POPIA (South Africa), data protection regulations (UAE/Saudi), and Data Protection Act (Kenya).</p>

      {/* SWITZERLAND & OTHERS */}
      <h3 className="mt-8 mb-4 text-[28px] font-semibold text-[#1a1f36]">8.15 Switzerland, Norway, Iceland, Liechtenstein</h3>
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">Swiss Federal Act on Data Protection (FADP), Norwegian Personal Data Act, and EEA member state compliance with data protection principles equivalent to GDPR standards.</p>

      {/* TERRITORIAL & SPECIAL JURISDICTIONS */}
      <h3 className="mt-8 mb-4 text-[28px] font-semibold text-[#1a1f36]">8.16 Special Jurisdictions</h3>
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li><strong className="font-medium text-[#1a1f36]">Puerto Rico, Guam, US Virgin Islands:</strong> Federal US privacy laws apply plus territory-specific regulations.</li>
        <li><strong className="font-medium text-[#1a1f36]">Gibraltar, Isle of Man, Jersey, Guernsey:</strong> UK GDPR extensions and local data protection laws.</li>
        <li><strong className="font-medium text-[#1a1f36]">Macau:</strong> Separate data protection regime from mainland China.</li>
      </ul>

      {/* CONTACT FOR JURISDICTIONS */}
      <h3 className="mt-8 mb-4 text-[28px] font-semibold text-[#1a1f36]">8.17 Exercising Jurisdiction-Specific Rights</h3>
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        To exercise your jurisdiction-specific privacy rights or for questions about local compliance:
      </p>
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li><strong className="font-medium text-[#1a1f36]">Global Privacy Portal:</strong> <a href="/global-privacy-rights" className="text-[#635bff] hover:text-[#0a2540] hover:underline">global-privacy-rights.company.com</a> - Automated rights request system with jurisdiction detection.</li>
        <li><strong className="font-medium text-[#1a1f36]">Email:</strong> privacyprivacy.savecash@gmail.com with subject line "Jurisdiction: [Your Country/State]"</li>
        <li><strong className="font-medium text-[#1a1f36]">Phone:</strong> Global Privacy Hotline +1-888-PRIVACY-1 (24/7, multilingual support in 50+ languages)</li>
        <li><strong className="font-medium text-[#1a1f36]">Mail:</strong> Regional privacy offices listed at company.com/privacy-contacts</li>
        <li><strong className="font-medium text-[#1a1f36]">Authorized Agents:</strong> Authorized agent submission process with verification at company.com/authorized-agents</li>
      </ul>
    </section>
  );
};

export default JurisdictionProvisions;