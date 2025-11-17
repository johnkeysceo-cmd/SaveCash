import React from 'react';

const BlockchainCryptocurrencySection = () => {
  return (
    <section id="blockchain-cryptocurrency-web3" className="scroll-mt-24 max-w-[800px]">
      <h2 className="mt-12 mb-6 text-[36px] font-bold text-[#1a1f36]">
        Section 14: Blockchain, Cryptocurrency, and Web3 Technologies
      </h2>
      
      <h3 className="mt-8 mb-4 text-[28px] font-semibold text-[#1a1f36]">
        14.1 Blockchain and Distributed Ledger Technology (DLT) Data Processing
      </h3>
      
      <p className="mb-6 text-base font-normal text-[#4a5568] leading-[1.6]">
        When you interact with blockchain-based services, cryptocurrency transactions, non-fungible tokens (NFTs), decentralized finance (DeFi) protocols, or other Web3 technologies through our platform, we collect and process specific categories of data subject to unique privacy considerations inherent to immutable, decentralized systems.
      </p>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        a. Blockchain Data Collection and On-Chain Privacy
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        Blockchain transactions create permanent, public records with unique privacy implications:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Wallet Addresses:</strong> Public blockchain addresses (Ethereum, Bitcoin, Polygon, etc.) associated with your account, which serve as pseudonymous identifiers but may be linkable to your identity through transaction patterns, address clustering, or off-chain data correlations.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Transaction Data:</strong> On-chain transaction records including sender/receiver addresses, amounts, timestamps, gas fees, smart contract interactions, token transfers, and transaction metadata permanently recorded on immutable public ledgers.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Smart Contract Interactions:</strong> Records of your interactions with decentralized applications (dApps), DeFi protocols, NFT marketplaces, and automated market makers (AMMs) including function calls, parameters, and emitted events.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">NFT Ownership and Metadata:</strong> Records of NFT ownership, minting, transfers, and associated metadata including IPFS hashes, token URIs, and provenance history.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">DeFi Activity:</strong> Lending, borrowing, staking, liquidity provision, yield farming, and governance participation recorded on-chain with publicly visible positions and returns.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        b. Immutability and Right to Erasure Considerations
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        Blockchain's immutable nature creates unique challenges for privacy rights, particularly the GDPR "right to be forgotten":
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Technical Immutability:</strong> Once data is recorded on a public blockchain, it cannot be deleted or modified due to the fundamental design of distributed consensus systems and cryptographic hash chains.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Off-Chain Data Management:</strong> We minimize Personal Data stored on-chain, maintaining identifiable information in off-chain databases where deletion rights can be fully exercised.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Pseudonymization:</strong> Only pseudonymous wallet addresses and transaction hashes are stored on-chain, never directly identifiable personal information (name, email, address, etc.).
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Address Delink Protocol:</strong> Upon deletion request, we permanently delete all mappings between your identity and blockchain addresses in our systems, rendering on-chain data effectively anonymous.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Zero-Knowledge Proofs:</strong> Where feasible, implementation of ZK-SNARKs, ZK-STARKs, and other zero-knowledge cryptography to prove transaction validity without revealing Personal Data on-chain.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Private Blockchains:</strong> Use of permissioned blockchain networks with access controls and data governance for sensitive business applications where required.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        c. Cryptocurrency Transaction Processing
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        When processing cryptocurrency payments or transfers, we collect and process:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Wallet Information:</strong> Cryptocurrency wallet addresses, public keys, wallet type (custodial, non-custodial, hardware, software), and wallet provider information.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Transaction Details:</strong> Cryptocurrency type (BTC, ETH, USDC, etc.), transaction amounts, network fees, confirmation status, block numbers, and transaction identifiers (TxHash).
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Exchange Rate Data:</strong> Fiat-to-crypto exchange rates at transaction time, conversion calculations, and price volatility risk assessments.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">AML/KYC Compliance:</strong> Enhanced due diligence for cryptocurrency transactions including source of funds analysis, transaction monitoring, sanctions screening, and Chainalysis reports for high-risk transactions.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Privacy Coin Handling:</strong> Special procedures for privacy-focused cryptocurrencies (Monero, Zcash) including enhanced risk assessment and regulatory compliance measures.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        d. Decentralized Identity and Self-Sovereign Identity (SSI)
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We support decentralized identity standards and self-sovereign identity principles:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Decentralized Identifiers (DIDs):</strong> Support for W3C DID standard enabling user-controlled, blockchain-anchored identities that you own and manage independently.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Verifiable Credentials:</strong> Issuance and verification of cryptographically-signed credentials allowing selective disclosure of identity attributes without centralized authority.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Ethereum Name Service (ENS) / Blockchain Names:</strong> Support for human-readable blockchain names (yourname.eth) with associated metadata and reverse resolution capabilities.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Soulbound Tokens (SBTs):</strong> Non-transferable NFTs representing identity, credentials, affiliations, or reputation in decentralized ecosystems.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Decentralized Authentication:</strong> Support for Web3 wallet-based authentication (Sign-In with Ethereum, WalletConnect) as alternative to traditional username/password systems.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        e. Blockchain Analytics and Transaction Monitoring
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We employ blockchain analytics for security, compliance, and fraud prevention:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Transaction Tracing:</strong> Analysis of blockchain transaction flows to identify sources of funds, ultimate beneficiaries, and intermediary addresses using graph analysis and clustering algorithms.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Risk Scoring:</strong> Address-level risk assessment identifying connections to sanctioned entities, darknet markets, mixing services, stolen funds, ransomware payments, and other illicit activity.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Third-Party Analytics:</strong> Use of blockchain intelligence providers (Chainalysis, Elliptic, TRM Labs, CipherTrace) for compliance screening and investigations, subject to strict data processing agreements.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Travel Rule Compliance:</strong> Collection and exchange of customer information for cryptocurrency transfers exceeding regulatory thresholds (typically $1,000) in compliance with FATF Travel Rule requirements.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Mixer/Tumbler Detection:</strong> Identification of funds originating from cryptocurrency mixing services, CoinJoin transactions, or other privacy-enhancing technologies requiring enhanced due diligence.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        f. Smart Contract Privacy and Security
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        When deploying or interacting with smart contracts:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Privacy-Preserving Smart Contracts:</strong> Implementation of confidential transactions, private state channels, and encrypted on-chain storage where sensitive data must exist on-chain.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Oracle Privacy:</strong> When using blockchain oracles (Chainlink, Band Protocol) to bring off-chain data on-chain, data minimization and privacy-preserving oracle architectures.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Upgradeable Contracts:</strong> Use of proxy patterns and upgradeable contract architecture allowing privacy policy enforcement changes without blockchain immutability constraints.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Emergency Pause Mechanisms:</strong> Admin functions enabling contract pausing or data access restriction in event of security incidents or privacy violations.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Security Audits:</strong> Third-party smart contract security audits identifying vulnerabilities, including privacy leakage through event logs or public state variables.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        g. Web3 Wallet Connections and Permissions
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        When you connect Web3 wallets to our services:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Wallet Connection Protocols:</strong> Support for WalletConnect, MetaMask, Coinbase Wallet, and other Web3 wallet connection standards with explicit permission requests.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Permission Scoping:</strong> Granular permission controls allowing you to grant only necessary access (view addresses, propose transactions, sign messages) without exposing private keys.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Session Management:</strong> Temporary, revocable wallet connection sessions with automatic expiration and clear disconnection procedures.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Multi-Chain Support:</strong> Handling of multi-chain wallet configurations with chain-specific permission models (Ethereum, Polygon, BSC, Avalanche, Solana, etc.).
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Transaction Simulation:</strong> Pre-transaction simulation showing expected outcomes before signature request, protecting against malicious contract interactions.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        h. Decentralized Storage and IPFS
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        When utilizing decentralized storage systems:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">IPFS Privacy:</strong> InterPlanetary File System (IPFS) content addressed by cryptographic hashes is public and persistent; we never store unencrypted Personal Data on public IPFS gateways.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Client-Side Encryption:</strong> All sensitive data encrypted client-side before IPFS upload, with encryption keys managed separately and securely.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Pinning Services:</strong> Use of pinning services (Pinata, Infura, Fleek) to ensure data availability while maintaining control over data persistence and potential removal.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Private IPFS Networks:</strong> Deployment of private IPFS clusters for business-sensitive data requiring access controls and data governance.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Filecoin and Arweave:</strong> When using permanent storage solutions (Arweave) or decentralized storage markets (Filecoin), clear disclosure of data permanence and encryption requirements.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        i. Regulatory Compliance for Digital Assets
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We maintain compliance with evolving cryptocurrency and digital asset regulations:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Virtual Asset Service Provider (VASP) Requirements:</strong> Compliance with FATF guidance for virtual asset service providers including Travel Rule implementation and enhanced due diligence.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Securities Law Compliance:</strong> Analysis of digital assets for securities characteristics under Howey Test and compliance with applicable securities regulations.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">MiCA Compliance (EU):</strong> Preparation for EU Markets in Crypto-Assets Regulation including issuer disclosure requirements and consumer protection standards.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Stablecoin Regulations:</strong> Enhanced reserves disclosure and audit requirements for stablecoin-related services.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Tax Reporting:</strong> Cryptocurrency transaction reporting to tax authorities as required (IRS Form 1099-B, international equivalents) with user notification of reporting obligations.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        j. Your Rights in Blockchain Context
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        Your privacy rights apply with blockchain-specific considerations:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Erasure (Modified):</strong> We will delete all off-chain linkages between your identity and blockchain addresses, rendering on-chain data pseudonymous and unattributable to you, though blockchain records themselves cannot be deleted.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Access:</strong> Full disclosure of what blockchain addresses we associate with your identity and transaction history across all supported networks.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Data Portability:</strong> Export of your blockchain transaction history, wallet information, and associated metadata in machine-readable formats.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Right to Object:</strong> Ability to object to blockchain analytics or transaction monitoring, though regulatory compliance requirements may limit this right.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Wallet Disassociation:</strong> Option to disassociate cryptocurrency wallets from your account, removing linkage between identity and blockchain activity in our systems.
        </li>
      </ul>

      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        For questions about blockchain privacy, cryptocurrency transaction data, or Web3 privacy practices, contact our Blockchain Privacy Office at <a href="mailto:blockchain-privacyprivacy.savecash@gmail.com" className="text-[#635bff] hover:text-[#0a2540] hover:underline">blockchain-privacyprivacy.savecash@gmail.com</a> or visit our <a href="/web3-privacy-center" className="text-[#635bff] hover:text-[#0a2540] hover:underline">Web3 Privacy Center</a>.
      </p>
    </section>
  );
};

export default BlockchainCryptocurrencySection;