import React from 'react';

const QuantumComputingSection = () => {
  return (
    <section id="quantum-computing-cryptography" className="scroll-mt-24 max-w-[800px]">
      <h2 className="mt-12 mb-6 text-[36px] font-bold text-[#1a1f36]">
        Section 13: Quantum Computing and Post-Quantum Cryptography
      </h2>
      
      <h3 className="mt-8 mb-4 text-[28px] font-semibold text-[#1a1f36]">
        13.1 Quantum Threat Assessment and Preparedness
      </h3>
      
      <p className="mb-6 text-base font-normal text-[#4a5568] leading-[1.6]">
        We recognize the emerging threat that large-scale quantum computers pose to current cryptographic systems and are implementing comprehensive quantum-resistant security measures to protect your Personal Data against both current and future quantum computing capabilities, including "harvest now, decrypt later" attacks where adversaries collect encrypted data today with the intent to decrypt it when quantum computers become available.
      </p>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        a. Post-Quantum Cryptography (PQC) Implementation
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We are transitioning to quantum-resistant cryptographic algorithms:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">NIST PQC Standards:</strong> Implementation of NIST-standardized post-quantum cryptographic algorithms including CRYSTALS-Kyber (key encapsulation), CRYSTALS-Dilithium (digital signatures), and SPHINCS+ (hash-based signatures) as primary cryptographic primitives for data protection.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Hybrid Cryptography:</strong> Deployment of hybrid encryption schemes combining classical algorithms (RSA-4096, ECC-384) with post-quantum algorithms to provide security against both classical and quantum attacks during the transition period.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Lattice-Based Cryptography:</strong> Utilization of lattice-based schemes including Learning With Errors (LWE), Ring-LWE, and Module-LWE constructions resistant to known quantum algorithms including Shor's algorithm and Grover's algorithm.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Code-Based Cryptography:</strong> Implementation of error-correcting code-based systems such as Classic McEliece for specific high-security applications.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Hash-Based Signatures:</strong> Deployment of stateful (XMSS, LMS) and stateless (SPHINCS+) hash-based signature schemes for long-term data integrity.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Multivariate Cryptography:</strong> Evaluation and selective deployment of multivariate polynomial-based schemes for specialized applications.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Isogeny-Based Cryptography:</strong> Monitoring developments in supersingular isogeny-based protocols (SIKE successors) for potential future deployment.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        b. Quantum-Safe Key Management
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        Our key management infrastructure is being enhanced with quantum-resistant capabilities:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Quantum Random Number Generators (QRNG):</strong> Integration of quantum-based true random number generators producing cryptographically secure random numbers with quantum-certified entropy for key generation.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Quantum Key Distribution (QKD):</strong> Evaluation and pilot deployment of QKD protocols (BB84, E91) for secure key exchange between geographically distributed data centers, providing information-theoretic security.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Post-Quantum Hardware Security Modules:</strong> Deployment of next-generation HSMs supporting post-quantum algorithms with quantum-resistant key storage and cryptographic operations.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Crypto-Agility Architecture:</strong> Implementation of algorithm-agnostic cryptographic architecture enabling rapid algorithm replacement without system redesign as quantum threats evolve.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Key Rotation Protocols:</strong> Accelerated key rotation schedules with automated migration to post-quantum algorithms, reducing exposure window for "harvest now, decrypt later" attacks.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        c. Quantum-Resistant Data Protection
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We implement layered quantum-resistant protection for Personal Data:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Re-Encryption Programs:</strong> Systematic re-encryption of historically encrypted data using post-quantum algorithms to protect against retroactive decryption by future quantum computers.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Quantum-Safe TLS:</strong> Deployment of post-quantum TLS 1.3 configurations for all data in transit, utilizing hybrid key exchange mechanisms combining classical and post-quantum algorithms.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Long-Term Archive Encryption:</strong> Special quantum-resistant encryption schemes for archived data intended for long-term retention (10+ years), assuming quantum computer availability within data retention period.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Blockchain and Distributed Ledger:</strong> Transition of any blockchain-based systems to quantum-resistant consensus mechanisms and digital signature schemes.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Quantum-Resistant Backups:</strong> All backup systems utilize post-quantum encryption with multiple algorithm diversity to ensure recoverability even if specific algorithms are compromised.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        d. Quantum Computing Applications and Benefits
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        While preparing defenses against quantum threats, we are also exploring beneficial quantum computing applications:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Quantum Machine Learning:</strong> Research into quantum-enhanced ML algorithms for fraud detection, risk analysis, and optimization problems while maintaining privacy through quantum-secure data handling.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Quantum Optimization:</strong> Utilization of quantum annealers and gate-based quantum computers for portfolio optimization, resource allocation, and route optimization, processing only anonymized or aggregated data.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Quantum-Safe Secure Computation:</strong> Development of quantum-secure multi-party computation protocols enabling privacy-preserving collaborative analytics.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Quantum-Enhanced Privacy:</strong> Exploration of quantum technologies for enhanced privacy protection including quantum-secure distributed computing and quantum anonymous communication.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        e. Quantum Threat Monitoring and Intelligence
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We maintain active quantum threat monitoring and intelligence capabilities:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Quantum Capability Tracking:</strong> Continuous monitoring of quantum computing advancements including qubit counts, error rates, gate fidelities, and coherence times from academic research, government programs, and commercial quantum computing companies.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Q-Day Estimation:</strong> Regular assessment of estimated timeline to "Q-Day" (when quantum computers can break current cryptography) informing migration schedules and risk assessments.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Cryptographic Bill of Materials:</strong> Comprehensive inventory of all cryptographic algorithms deployed across systems, enabling rapid identification of quantum-vulnerable components.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Quantum-Readiness Assessments:</strong> Regular assessments of organizational quantum readiness across infrastructure, applications, and third-party dependencies.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Standards Participation:</strong> Active participation in NIST post-quantum cryptography standardization, IETF quantum-safe protocols, and industry consortia developing quantum-resistant solutions.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        f. Quantum Migration Roadmap and Timeline
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        Our phased quantum migration roadmap:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Phase 1 (Current - 2025):</strong> Inventory of cryptographic systems, pilot implementations of hybrid cryptography, deployment of quantum random number generators, and re-encryption of highest-sensitivity long-term data.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Phase 2 (2025 - 2027):</strong> Broad deployment of hybrid post-quantum/classical cryptography across all systems, migration of all TLS to quantum-safe configurations, and implementation of post-quantum digital signatures for high-value transactions.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Phase 3 (2027 - 2030):</strong> Complete migration to pure post-quantum cryptography for all systems, decommissioning of classical-only algorithms, and full quantum-resistant infrastructure deployment.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Phase 4 (2030+):</strong> Continuous monitoring and algorithm updates as quantum computing capabilities evolve and new post-quantum standards emerge.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        g. Third-Party Quantum Readiness Requirements
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We require quantum readiness from our service providers and partners:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>All third-party service providers handling Personal Data must maintain quantum migration roadmaps aligned with industry best practices</li>
        <li>Cloud service providers must support post-quantum cryptographic algorithms and provide quantum-safe key management services</li>
        <li>Payment networks and financial partners must demonstrate quantum readiness for payment processing and settlement systems</li>
        <li>Software vendors must provide quantum-safe versions of cryptographic libraries and security components</li>
        <li>Regular audits verify third-party compliance with quantum preparedness requirements</li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        h. Quantum Computing Privacy Considerations
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        Beyond cryptographic security, we address quantum-specific privacy risks:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Quantum De-anonymization Risks:</strong> Assessment of quantum algorithms' potential to de-anonymize pseudonymized data through enhanced pattern matching and optimization capabilities.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Quantum-Enhanced Privacy Attacks:</strong> Preparation for quantum-accelerated attacks on differential privacy, k-anonymity, and other privacy-preserving techniques.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Side-Channel Resistance:</strong> Development of post-quantum algorithms resistant to quantum-specific side-channel attacks including quantum timing and power analysis.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Quantum Access Controls:</strong> If quantum computing services are utilized, implementation of strict access controls and auditing for any Personal Data processed on quantum systems.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        i. User Communication and Transparency
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We commit to transparent communication about quantum preparedness:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>Regular updates on quantum migration progress through annual transparency reports</li>
        <li>Advance notice of major cryptographic algorithm changes that may impact user experience</li>
        <li>Educational resources explaining quantum threats and our protective measures</li>
        <li>Notification if historical encrypted data is re-encrypted with post-quantum algorithms</li>
        <li>Proactive disclosure if any quantum-vulnerable cryptography remains in use with associated risk assessments</li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        j. Quantum Incident Response
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        Our quantum-specific incident response procedures:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Cryptographic Break Detection:</strong> Continuous monitoring for signs of successful quantum attacks on cryptographic systems including anomalous decryption patterns.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Emergency Algorithm Migration:</strong> Pre-planned emergency procedures for rapid algorithm replacement if quantum breakthroughs threaten current cryptography sooner than anticipated.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Quantum Breach Notification:</strong> Enhanced notification procedures if Personal Data is compromised through quantum computing attacks, including assessment of historical data exposure.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Retroactive Protection:</strong> Protocols for retroactive protection measures if previously encrypted data is at risk from quantum decryption.
        </li>
      </ul>

      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        For questions about our quantum computing preparedness or to request additional information about quantum-safe measures protecting your Personal Data, contact our Quantum Security Team at <a href="mailto:quantum-securityprivacy.savecash@gmail.com" className="text-[#635bff] hover:text-[#0a2540] hover:underline">quantum-securityprivacy.savecash@gmail.com</a> or visit our <a href="/quantum-readiness-center" className="text-[#635bff] hover:text-[#0a2540] hover:underline">Quantum Readiness Center</a>.
      </p>
    </section>
  );
};

export default QuantumComputingSection;
