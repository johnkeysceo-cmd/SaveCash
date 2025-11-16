"use client";
import React from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
export default function SSAPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      {" "}
      <Header />{" "}
      <main className="flex-1">
        {" "}
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          {" "}
          <article className="space-y-8">
            {" "}
            <div>
              {" "}
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">
                SaveCash Services Agreement
              </h1>{" "}
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">
                Last updated: November 3, 2025
              </p>{" "}
            </div>{" "}
            <section className="space-y-4">
              {" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                This SaveCash Services Agreement ("Agreement") is entered into
                between SaveCash ("SaveCash," "we," "us," or "our") and you
                ("Merchant," "you," or "your") and governs your use of
                SaveCash's payment processing and related financial services. By
                accessing or using any SaveCash services, you agree to be bound
                by this Agreement and all applicable terms referenced
                herein.{" "}
              </p>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                This Agreement constitutes a legally binding contract. Please
                read it carefully before using our services. If you do not agree
                with any part of this Agreement, you may not use SaveCash
                services.{" "}
              </p>{" "}
            </section>{" "}
            <section className="space-y-4">
              {" "}
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">
                1. Definitions
              </h2>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                Throughout this Agreement, certain terms shall have specific
                meanings as defined below:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>
                  <strong>"Account"</strong> means your SaveCash account through
                  which you access our Services.
                </li>{" "}
                <li>
                  <strong>"API"</strong> means our application programming
                  interface that allows you to integrate our Services into your
                  platform.
                </li>{" "}
                <li>
                  <strong>"Chargeback"</strong> means a reversal of a
                  transaction initiated by a Cardholder's issuing bank.
                </li>{" "}
                <li>
                  <strong>"Fees"</strong> means all fees, charges, and costs
                  associated with your use of our Services, as set forth in your
                  pricing plan.
                </li>{" "}
                <li>
                  <strong>"Merchant"</strong> means any individual or entity
                  that uses our Services to accept payments.
                </li>{" "}
                <li>
                  <strong>"Payment Data"</strong> means any data relating to
                  payment transactions, including card numbers, account numbers,
                  and transaction amounts.
                </li>{" "}
                <li>
                  <strong>"Services"</strong> means all payment processing,
                  financial, and related services provided by SaveCash.
                </li>{" "}
                <li>
                  <strong>"Transaction"</strong> means a payment processed
                  through our Services.
                </li>{" "}
              </ul>{" "}
            </section>{" "}
            <section className="space-y-4">
              {" "}
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">
                2. Services Provided
              </h2>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                SaveCash provides comprehensive payment processing services that
                enable you to accept, process, and manage payments from your
                customers. Our Services include, but are not limited to:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>
                  Credit and debit card processing through major card networks
                  (Visa, Mastercard, American Express, Discover)
                </li>{" "}
                <li>
                  Digital wallet processing (Apple Pay, Google Pay, Samsung Pay)
                </li>{" "}
                <li>Automated Clearing House (ACH) transfers</li>{" "}
                <li>Wire transfers and international remittances</li>{" "}
                <li>Payment gateway and API access for custom integrations</li>{" "}
                <li>Subscription and recurring billing management</li>{" "}
                <li>Point-of-sale (POS) terminal services</li>{" "}
                <li>Fraud detection and prevention tools</li>{" "}
                <li>Multi-currency processing and foreign exchange</li>{" "}
                <li>Real-time reporting and analytics dashboard</li>{" "}
                <li>Customer payment data management</li>{" "}
                <li>Dispute and chargeback management</li>{" "}
                <li>Automated compliance and regulatory reporting</li>{" "}
                <li>White-label payment solutions</li>{" "}
              </ul>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                We reserve the right to add, remove, or modify any Service at
                any time with notice to you. Your continued use of affected
                Services after such changes constitutes acceptance of the
                modifications.{" "}
              </p>{" "}
            </section>{" "}
            <section className="space-y-4">
              {" "}
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">
                3. Merchant Obligations
              </h2>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                As a Merchant using our Services, you agree to the following
                obligations and responsibilities:{" "}
              </p>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                3.1 Compliance Requirements
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                You must comply with all applicable laws, regulations, and
                industry standards, including:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>
                  Payment Card Industry Data Security Standard (PCI DSS)
                </li>{" "}
                <li>
                  General Data Protection Regulation (GDPR) and similar privacy
                  laws
                </li>{" "}
                <li>
                  Anti-money laundering (AML) and counter-terrorism financing
                  regulations
                </li>{" "}
                <li>Know Your Customer (KYC) requirements</li>{" "}
                <li>U.S. sanctions and trade restrictions</li>{" "}
                <li>All relevant consumer protection laws</li>{" "}
                <li>
                  Fair Credit Reporting Act (FCRA) and similar credit reporting
                  requirements
                </li>{" "}
                <li>
                  Electronic signature regulations (E-SIGN Act, UETA)
                </li>{" "}
              </ul>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                3.2 Business Information
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                You must provide accurate, current, and complete information
                about your business, including:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>Legal business name and registered address</li>{" "}
                <li>Tax identification numbers (EIN, VAT, etc.)</li>{" "}
                <li>Business registration and incorporation documents</li>{" "}
                <li>Bank account information for fund settlement</li>{" "}
                <li>
                  Names and identification of beneficial owners and authorized
                  representatives
                </li>{" "}
                <li>Complete description of products and services you offer</li>{" "}
                <li>Website URL and customer-facing materials</li>{" "}
                <li>
                  Any licenses or permits required for your business activities
                </li>{" "}
              </ul>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                You must promptly notify us of any changes to this information
                within 10 business days of such changes.{" "}
              </p>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                3.3 Transaction Handling
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                You agree to handle all transactions in accordance with best
                practices and applicable regulations:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>
                  Only process transactions for legitimate goods and services
                </li>{" "}
                <li>
                  Obtain proper authorization before processing any payment
                </li>{" "}
                <li>Provide clear and accurate transaction descriptions</li>{" "}
                <li>
                  Maintain records of all transactions for at least 7 years
                </li>{" "}
                <li>Honor all refund requests in a timely manner</li>{" "}
                <li>Respond to customer inquiries and disputes promptly</li>{" "}
                <li>
                  Never process transactions on behalf of another merchant
                </li>{" "}
                <li>Not split transactions to avoid fees or limits</li>{" "}
              </ul>{" "}
            </section>{" "}
            <section className="space-y-4">
              {" "}
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">
                4. Fees and Payment Terms
              </h2>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                You agree to pay all Fees associated with your use of our
                Services according to the pricing plan you selected during
                registration. Our Fees structure includes the following
                components:{" "}
              </p>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                4.1 Transaction Fees
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                Transaction fees are assessed on each payment you process
                through our Services:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>
                  Per-transaction processing fee (typically 2.9% + $0.30 for
                  credit/debit cards)
                </li>{" "}
                <li>ACH transfer fees (typically $0.50 per transaction)</li>{" "}
                <li>
                  Wire transfer fees (typically $25 per domestic wire, $50 per
                  international wire)
                </li>{" "}
                <li>
                  Currency conversion fees (typically 1% of transaction amount)
                </li>{" "}
                <li>
                  Cross-border transaction fees for international payments
                </li>{" "}
              </ul>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                4.2 Subscription and Monthly Fees
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                Certain pricing plans include monthly subscription fees for
                access to premium features and enhanced support:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>Base subscription fees (varies by plan tier)</li>{" "}
                <li>POS terminal rental fees (if applicable)</li>{" "}
                <li>Advanced reporting and analytics fees</li>{" "}
                <li>White-label solution fees</li>{" "}
                <li>Priority support access fees</li>{" "}
              </ul>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                4.3 Other Fees
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                Additional fees may apply for specific Services or
                circumstances:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>Chargeback fees (typically $25 per chargeback)</li>{" "}
                <li>Account reactivation fees after suspension</li>{" "}
                <li>Data export and custom reporting fees</li>{" "}
                <li>Setup and onboarding fees for enterprise accounts</li>{" "}
                <li>Late payment penalties for overdue amounts</li>{" "}
                <li>Returned check or failed ACH fees</li>{" "}
                <li>Compliance and verification fees</li>{" "}
                <li>Excess transaction volume fees beyond plan limits</li>{" "}
              </ul>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                4.4 Fee Changes and Notification
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                We reserve the right to modify our Fees at any time. We will
                provide you with at least 30 days' written notice of any Fee
                increases. Fee decreases may be implemented immediately. Your
                continued use of our Services after the effective date of any
                Fee change constitutes your acceptance of the new pricing.{" "}
              </p>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                4.5 Payment and Settlement
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                We will settle funds to your designated bank account according
                to your selected settlement schedule (typically T+2 for card
                transactions). All Fees will be deducted from your transactions
                before settlement. In the event your account balance is
                insufficient to cover outstanding Fees, we reserve the right to
                withhold settlement or charge your designated payment method on
                file.{" "}
              </p>{" "}
            </section>{" "}
            <section className="space-y-4">
              {" "}
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">
                5. Payment Card Processing
              </h2>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                When you process payment card transactions through our Services,
                the following terms apply:{" "}
              </p>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                5.1 Authorization and Capture
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                All card transactions must be properly authorized before you
                complete the sale. You agree to:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>
                  Obtain authorization for the exact amount of the transaction
                </li>{" "}
                <li>Verify the cardholder's identity when required</li>{" "}
                <li>
                  Not charge a card unless you have authorization or approval
                </li>{" "}
                <li>
                  Complete the transaction only after authorization is obtained
                </li>{" "}
                <li>
                  Not split a single transaction into multiple smaller
                  transactions
                </li>{" "}
                <li>
                  Obtain additional authorization if the transaction amount
                  changes
                </li>{" "}
              </ul>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                5.2 Card Network Rules
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                You must comply with all card network rules, including Visa's
                Card Acceptance Guidelines, Mastercard's Rules, American
                Express's Operating Regulations, and Discover's Operating
                Regulations. These rules govern:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>How and when you can accept cards</li>{" "}
                <li>Transaction processing requirements and standards</li>{" "}
                <li>Disclosure and customer communication requirements</li>{" "}
                <li>Dispute and chargeback handling procedures</li>{" "}
                <li>Fraud prevention and security requirements</li>{" "}
                <li>
                  Special rules for recurring transactions, subscriptions, and
                  installment payments
                </li>{" "}
                <li>Refund and return policies</li>{" "}
                <li>Prohibited and restricted business practices</li>{" "}
              </ul>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                5.3 Chargebacks and Disputes
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                Cardholders may dispute transactions for various reasons. When a
                chargeback occurs:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>
                  The disputed amount will be debited from your account
                </li>{" "}
                <li>
                  We will assess a chargeback fee as set forth in our fee
                  schedule
                </li>{" "}
                <li>
                  You must respond to chargeback notices promptly and provide
                  requested documentation
                </li>{" "}
                <li>
                  Failure to respond may result in automatic chargeback loss
                </li>{" "}
                <li>
                  Excessive chargeback rates may result in account restriction
                  or termination
                </li>{" "}
              </ul>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                SaveCash will assist you in managing disputes and chargebacks,
                but you are ultimately responsible for the outcome and any
                associated costs.{" "}
              </p>{" "}
            </section>{" "}
            <section className="space-y-4">
              {" "}
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">
                6. Security and Data Protection
              </h2>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                The security of Payment Data and personal information is
                paramount. Both parties have specific obligations under this
                section:{" "}
              </p>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                6.1 PCI DSS Compliance
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                You must maintain PCI DSS compliance at all times if you handle,
                store, or process cardholder data:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>
                  Complete annual PCI DSS self-assessment questionnaires
                </li>{" "}
                <li>Undergo periodic PCI DSS security scans</li>{" "}
                <li>
                  Implement and maintain security controls as required by PCI
                  DSS
                </li>{" "}
                <li>
                  Restrict access to cardholder data to only authorized
                  personnel
                </li>{" "}
                <li>
                  Use encryption for cardholder data both in transit and at rest
                </li>{" "}
                <li>
                  Maintain secure network configurations and firewall protection
                </li>{" "}
                <li>Regularly test security systems and processes</li>{" "}
                <li>
                  Maintain an information security policy for personnel
                </li>{" "}
              </ul>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                6.2 Data Handling Requirements
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                You agree to handle all Payment Data and personal information in
                accordance with best practices:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>Never store CVV/CVC codes after authorization</li>{" "}
                <li>Never store full magnetic stripe data</li>{" "}
                <li>
                  Mask primary account numbers (PANs) in displays and logs
                </li>{" "}
                <li>
                  Limit data retention to only what is necessary for business
                  purposes
                </li>{" "}
                <li>Securely delete data when no longer needed</li>{" "}
                <li>
                  Implement strong access controls and authentication for
                  systems handling Payment Data
                </li>{" "}
                <li>Regularly update and patch all systems and software</li>{" "}
                <li>
                  Monitor systems for security breaches and unauthorized access
                </li>{" "}
              </ul>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                6.3 Security Breach Notification
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                You must immediately notify SaveCash of any suspected or actual
                security breach involving Payment Data or our Services. Such
                notification must include:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>Description of the breach and compromised data</li>{" "}
                <li>Timeline of when the breach occurred and was discovered</li>{" "}
                <li>Number of records potentially affected</li>{" "}
                <li>Immediate remediation steps taken</li>{" "}
                <li>Details of any law enforcement involvement</li>{" "}
                <li>
                  All documentation requested by SaveCash or regulatory
                  authorities
                </li>{" "}
              </ul>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                6.4 SaveCash Security Measures
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                SaveCash implements comprehensive security measures to protect
                data processed through our Services:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>
                  Level 1 PCI DSS certification and ongoing compliance
                </li>{" "}
                <li>
                  End-to-end encryption of all Payment Data in transit and at
                  rest
                </li>{" "}
                <li>
                  Regular third-party security audits and penetration testing
                </li>{" "}
                <li>Multi-factor authentication for all system access</li>{" "}
                <li>
                  24/7 security monitoring and incident response capabilities
                </li>{" "}
                <li>Regular security training for all personnel</li>{" "}
                <li>Redundant, geographically distributed data centers</li>{" "}
                <li>
                  Comprehensive disaster recovery and business continuity
                  planning
                </li>{" "}
              </ul>{" "}
            </section>{" "}
            <section className="space-y-4">
              {" "}
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">
                7. Prohibited Activities
              </h2>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                You are prohibited from using our Services in connection with
                certain types of businesses and activities. Prohibited uses
                include, but are not limited to:{" "}
              </p>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                7.1 Prohibited Business Types
              </h3>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>Illegal activities or businesses</li>{" "}
                <li>
                  Adult content and services, including pornography and adult
                  websites
                </li>{" "}
                <li>
                  Gambling, including online casinos, sports betting, and
                  lotteries
                </li>{" "}
                <li>Cryptocurrency and virtual currency exchanges</li>{" "}
                <li>Pharmaceutical and pharmaceutical resellers</li>{" "}
                <li>Weapons and ammunition sales</li>{" "}
                <li>Multi-level marketing and pyramid schemes</li>{" "}
                <li>Debt collection and credit repair services</li>{" "}
                <li>Money service businesses without proper licensing</li>{" "}
                <li>High-risk financial products and payday loans</li>{" "}
                <li>
                  Counterfeit goods and intellectual property infringement
                </li>{" "}
                <li>Stolen goods or goods obtained through fraud</li>{" "}
              </ul>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                7.2 Prohibited Activities
              </h3>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>Money laundering or terrorist financing</li>{" "}
                <li>Fraudulent or deceptive business practices</li>{" "}
                <li>
                  Processing transactions for another merchant (factoring)
                </li>{" "}
                <li>Circumventing transaction limits or fees</li>{" "}
                <li>
                  Processing refunds to a different card than the original
                  transaction
                </li>{" "}
                <li>Accepting cards issued to you personally</li>{" "}
                <li>Processing transactions without authorization</li>{" "}
                <li>Engaging in transactions intended to launder money</li>{" "}
                <li>Misrepresenting your business or products</li>{" "}
                <li>Violating any card network rules</li>{" "}
                <li>Attempting to gain unauthorized access to our systems</li>{" "}
                <li>
                  Reverse engineering or unauthorized use of our APIs
                </li>{" "}
              </ul>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                This list is not exhaustive. We reserve the right to refuse
                service to any business or activity at our sole discretion.
                Violation of these prohibitions will result in immediate account
                suspension or termination.{" "}
              </p>{" "}
            </section>{" "}
            <section className="space-y-4">
              {" "}
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">
                8. Account Suspension and Termination
              </h2>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                We may suspend or terminate your access to our Services under
                various circumstances:{" "}
              </p>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                8.1 Suspension
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                We may suspend your account immediately and without prior notice
                if we have reasonable grounds to believe:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>
                  You have violated this Agreement or any applicable laws
                </li>{" "}
                <li>
                  Your account poses an unacceptable risk to SaveCash or other
                  parties
                </li>{" "}
                <li>There is evidence of fraudulent or suspicious activity</li>{" "}
                <li>
                  Your chargeback or refund ratio exceeds acceptable thresholds
                </li>{" "}
                <li>You have failed to pay Fees when due</li>{" "}
                <li>
                  You have provided false, misleading, or incomplete information
                </li>{" "}
                <li>
                  Required compliance certifications have expired or been
                  revoked
                </li>{" "}
                <li>
                  You are subject to legal action or regulatory investigation
                </li>{" "}
              </ul>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                8.2 Termination by Merchant
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                You may terminate this Agreement at any time by providing 30
                days' written notice and closing your account through your
                dashboard. You will remain responsible for all obligations
                arising from transactions processed before termination.{" "}
              </p>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                8.3 Termination by SaveCash
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                We may terminate this Agreement immediately and without notice
                for material breach, violation of prohibited activities, or at
                our discretion with 90 days' notice. Upon termination:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>Your right to use our Services ceases immediately</li>{" "}
                <li>All pending transactions will be processed and settled</li>{" "}
                <li>
                  You must cease all use of our APIs, trademarks, and
                  intellectual property
                </li>{" "}
                <li>
                  We may withhold funds as necessary to cover outstanding
                  obligations
                </li>{" "}
                <li>
                  You remain liable for all Fees incurred prior to termination
                </li>{" "}
                <li>
                  We will retain your data as required by law or for legitimate
                  business purposes
                </li>{" "}
              </ul>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                8.4 Post-Termination Obligations
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                After termination, you must:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>
                  Return or destroy all SaveCash materials and confidential
                  information
                </li>{" "}
                <li>Cancel all recurring transactions and subscriptions</li>{" "}
                <li>Provide alternative payment methods to your customers</li>{" "}
                <li>Cooperate in the orderly transition of your account</li>{" "}
                <li>
                  Continue to fulfill obligations for transactions processed
                  prior to termination
                </li>{" "}
                <li>
                  Remain liable for chargebacks and disputes for up to 180 days
                  post-termination
                </li>{" "}
              </ul>{" "}
            </section>{" "}
            <section className="space-y-4">
              {" "}
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">
                9. Intellectual Property and Confidentiality
              </h2>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                All intellectual property rights in the Services, including
                software, documentation, trademarks, and trade secrets, belong
                to SaveCash and our licensors. You receive a limited,
                non-exclusive, non-transferable, revocable license to use the
                Services during the term of this Agreement solely for your
                business purposes.{" "}
              </p>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                You may not copy, modify, distribute, sell, lease, or create
                derivative works of any SaveCash intellectual property. You must
                maintain the confidentiality of all non-public information about
                our Services, technology, business practices, and pricing that
                you receive in connection with this Agreement.{" "}
              </p>{" "}
            </section>{" "}
            <section className="space-y-4">
              {" "}
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">
                10. Warranties and Disclaimers
              </h2>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                Each party represents and warrants that:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>
                  It has the full power and authority to enter into this
                  Agreement
                </li>{" "}
                <li>It will comply with all applicable laws and regulations</li>{" "}
                <li>
                  All information provided to the other party is accurate and
                  complete
                </li>{" "}
                <li>It will not infringe upon any third party rights</li>{" "}
              </ul>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                EXCEPT AS EXPRESSLY PROVIDED HEREIN, SAVECASH MAKES NO
                WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
                NON-INFRINGEMENT. OUR SERVICES ARE PROVIDED "AS IS" AND "AS
                AVAILABLE." WE DO NOT GUARANTEE THAT OUR SERVICES WILL BE
                UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.{" "}
              </p>{" "}
            </section>{" "}
            <section className="space-y-4">
              {" "}
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">
                11. Limitation of Liability and Indemnification
              </h2>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, SAVECASH SHALL NOT BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST DATA, OR BUSINESS
                INTERRUPTION, ARISING FROM OR RELATED TO YOUR USE OF OUR
                SERVICES, REGARDLESS OF THE THEORY OF LIABILITY.{" "}
              </p>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR
                RELATED TO THIS AGREEMENT SHALL NOT EXCEED THE FEES WE RECEIVED
                FROM YOU IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.{" "}
              </p>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                You agree to indemnify and hold SaveCash and our officers,
                directors, employees, and agents harmless from any and all
                claims, losses, damages, liabilities, and expenses (including
                attorneys' fees) arising from your breach of this Agreement,
                violation of any laws, or infringement of any third party
                rights.{" "}
              </p>{" "}
            </section>{" "}
            <section className="space-y-4">
              {" "}
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">
                12. Dispute Resolution and Governing Law
              </h2>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                Except where prohibited by law, any disputes arising from this
                Agreement shall be resolved through binding arbitration in
                accordance with the rules of the American Arbitration
                Association. The arbitration will be conducted in the state
                where our headquarters are located, and judgment on the arbitral
                award may be entered in any court having jurisdiction
                thereof.{" "}
              </p>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                This Agreement shall be governed by and construed in accordance
                with the laws of the State of California, United States, without
                regard to its conflict of law provisions. The parties waive any
                right to a jury trial.{" "}
              </p>{" "}
            </section>{" "}
            <section className="space-y-4">
              {" "}
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">
                13. Intellectual Property and Anti-Competition Protections
              </h2>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                SaveCash is a proprietary financial technology company that has
                invested substantial resources in developing our revolutionary
                AI-powered savings platform. Our intellectual property
                represents decades of innovation and constitutes one of the most
                valuable assets in the fintech industry.{" "}
              </p>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                13.1 Proprietary Technology and Trade Secrets
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                SaveCash's platform, algorithms, AI models, user interfaces,
                APIs, documentation, business methods, and all related
                technology constitute confidential, proprietary information and
                trade secrets owned exclusively by SaveCash. This includes but
                is not limited to:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>
                  Proprietary machine learning algorithms for savings detection
                  and optimization
                </li>{" "}
                <li>Advanced fraud detection and prevention systems</li>{" "}
                <li>Risk assessment and credit analysis methodologies</li>{" "}
                <li>
                  User experience designs, workflows, and interface elements
                </li>{" "}
                <li>Security protocols and data protection mechanisms</li>{" "}
                <li>Integration patterns and API architectures</li>{" "}
                <li>
                  Business processes, operational procedures, and optimization
                  strategies
                </li>{" "}
                <li>Customer data analytics and personalization engines</li>{" "}
                <li>
                  Backend infrastructure, database schemas, and system
                  architectures
                </li>{" "}
                <li>All source code, object code, and executable code</li>{" "}
                <li>
                  Trademarks, service marks, brand names, logos, and trade dress
                </li>{" "}
                <li>Patent-pending and patented technologies</li>{" "}
              </ul>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                You acknowledge that our proprietary technology provides
                SaveCash with a significant competitive advantage in the
                marketplace. Any unauthorized disclosure, reproduction, or use
                of our trade secrets constitutes irreparable harm that cannot be
                adequately compensated by monetary damages alone.{" "}
              </p>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                13.2 Strict Prohibition on Competition and Copying
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                By using SaveCash Services, you expressly agree that you will
                not, directly or indirectly:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>
                  Copy, mimic, reverse engineer, or attempt to replicate any
                  aspect of SaveCash's platform, services, or intellectual
                  property
                </li>{" "}
                <li>
                  Develop, create, fund, or participate in any competing
                  financial technology business that offers similar services to
                  SaveCash
                </li>{" "}
                <li>
                  Use SaveCash Services, APIs, documentation, or any proprietary
                  information to build competing products or services
                </li>{" "}
                <li>
                  Scrape, crawl, or extract data from SaveCash platforms for use
                  in competitive products
                </li>{" "}
                <li>
                  Hire, recruit, or solicit SaveCash employees, contractors, or
                  partners to work on competitive ventures
                </li>{" "}
                <li>
                  Disclose, share, or transfer any proprietary information to
                  competitors or potential competitors
                </li>{" "}
                <li>
                  Create derivative works based on SaveCash's intellectual
                  property
                </li>{" "}
                <li>
                  Use SaveCash's trademarks, service marks, or branding in any
                  manner that suggests endorsement or affiliation with competing
                  products
                </li>{" "}
                <li>
                  Engage in any activity that would enable a third party to
                  compete with SaveCash using our proprietary technology or
                  confidential information
                </li>{" "}
                <li>
                  Participate in, support, or provide resources to any entity
                  developing competing financial services
                </li>{" "}
              </ul>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                This prohibition extends for a period of five (5) years
                following your last use of SaveCash Services and applies
                globally. SaveCash's proprietary technology and business methods
                are protected under federal and state trade secret laws,
                copyright laws, and patent laws. Violation of these terms will
                result in immediate termination of your access and potential
                legal action seeking injunctive relief, monetary damages, and
                attorneys' fees.{" "}
              </p>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                13.3 Market Position and Competitive Advantage
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                SaveCash is positioned to become the dominant leader in
                AI-powered financial management, with strategic advantages that
                set us apart from all competitors:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>
                  State-of-the-art artificial intelligence capable of analyzing
                  millions of transactions in real-time
                </li>{" "}
                <li>
                  Proprietary savings algorithms that identify opportunities
                  traditional methods cannot detect
                </li>{" "}
                <li>
                  Industry-leading security infrastructure and fraud prevention
                  systems
                </li>{" "}
                <li>
                  Seamless integration capabilities with major financial
                  institutions and payment networks
                </li>{" "}
                <li>
                  Superior user experience design optimized for financial
                  engagement and trust
                </li>{" "}
                <li>
                  Scalable technology architecture built to serve millions of
                  users globally
                </li>{" "}
                <li>
                  Established partnerships with leading banks, card networks,
                  and financial service providers
                </li>{" "}
                <li>
                  Comprehensive regulatory compliance frameworks across multiple
                  jurisdictions
                </li>{" "}
                <li>Vast proprietary datasets and analytics capabilities</li>{" "}
                <li>
                  Proven track record of delivering measurable financial value
                  to users
                </li>{" "}
              </ul>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                You acknowledge and agree that SaveCash represents a paradigm
                shift in financial technology, combining cutting-edge artificial
                intelligence with deep financial expertise to create
                unprecedented value for consumers and businesses alike. Our
                position as a market leader is the result of substantial
                investment, innovation, and execution excellence.{" "}
              </p>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                13.4 Injunctive Relief and Remedies
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                You acknowledge that any breach of these intellectual property
                and anti-competition provisions will cause SaveCash irreparable
                harm for which monetary damages would be inadequate. SaveCash
                shall have the right to seek and obtain preliminary and
                permanent injunctive relief, specific performance, and other
                equitable remedies to enforce these provisions, without the
                necessity of proving actual damages or posting bond.{" "}
              </p>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                In addition to injunctive relief, SaveCash shall be entitled to
                recover all monetary damages, including but not limited to lost
                profits, disgorgement of improperly obtained benefits,
                litigation costs, and reasonable attorneys' fees. SaveCash may
                also seek statutory damages under applicable intellectual
                property laws, which can include treble or punitive damages for
                willful infringement.{" "}
              </p>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                13.5 Survival of Obligations
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                All intellectual property, confidentiality, and anti-competition
                obligations set forth in this Agreement shall survive
                termination of your use of SaveCash Services and shall remain in
                full force and effect indefinitely. Your obligations with
                respect to trade secrets shall survive until such information
                becomes publicly available through no breach of your obligations
                under this Agreement.{" "}
              </p>{" "}
            </section>{" "}
            <section className="space-y-4">
              {" "}
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">
                14. General Provisions
              </h2>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                This Agreement, together with our Privacy Policy and any other
                agreements referenced herein, constitutes the entire agreement
                between you and SaveCash regarding the Services and supersedes
                all prior agreements. If any provision of this Agreement is
                found to be invalid or unenforceable, the remaining provisions
                will remain in full force and effect. Our failure to enforce any
                provision does not constitute a waiver of our rights. This
                Agreement is not assignable by you without our prior written
                consent, but we may assign this Agreement without restriction.
                All notices required under this Agreement must be delivered in
                writing via email to the contact addresses we each
                designate.{" "}
              </p>{" "}
            </section>{" "}
            <section className="space-y-4">
              {" "}
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">
                15. Contact Information
              </h2>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                If you have questions about this SaveCash Services Agreement,
                please contact us at:{" "}
              </p>{" "}
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6 mt-4">
                {" "}
                <p className="text-[var(--color-text-primary)] mb-3">
                  {" "}
                  <strong className="font-medium">Email:</strong>{" "}
                  privacy.savecash@gmail.com{" "}
                </p>{" "}
                <p className="text-[var(--color-text-primary)]">
                  {" "}
                  <strong className="font-medium">Website:</strong>{" "}
                  <a
                    href="/"
                    className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] hover:underline"
                  >
                    SaveCash Privacy Center
                  </a>{" "}
                </p>{" "}
              </div>{" "}
            </section>{" "}
          </article>{" "}
        </div>{" "}
      </main>{" "}
      <Footer />{" "}
    </div>
  );
}
