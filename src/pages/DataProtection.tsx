import React from "react";
import { ArrowLeft, Shield, Lock, Eye, Database } from "lucide-react";

export default function DataProtection() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-6">
            <a href="/help" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Help Center
            </a>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Data Protection and Privacy</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Learn how SaveCash protects your financial data with bank-level security, encryption, and privacy-first design.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. Our Security Philosophy</h2>
            <p className="mb-4">At SaveCash, we believe your financial data is sacred. We've built our entire platform with security and privacy as foundational principles, not afterthoughts.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.1 Zero-Trust Architecture</h3>
            <p className="mb-4">We implement zero-trust security, meaning:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Every request is authenticated, no exceptions</li>
              <li>Every action is logged and monitored</li>
              <li>No component trusts another by default</li>
              <li>Continuous verification, not one-time authentication</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.2 Privacy by Design</h3>
            <p className="mb-4">Privacy isn't added—it's built in from the ground up:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Minimal data collection (only what's necessary)</li>
              <li>Data encrypted at rest and in transit</li>
              <li>Automatic data deletion when no longer needed</li>
              <li>User control over data sharing and retention</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Encryption Standards</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.1 Data at Rest Encryption</h3>
            <p className="mb-4">All stored data is encrypted using:</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li><strong>AES-256 encryption:</strong> Industry-standard, bank-level encryption</li>
                <li><strong>Separate encryption keys per user:</strong> Your data can't be accessed with another user's key</li>
                <li><strong>Hardware security modules:</strong> Keys stored in tamper-resistant hardware</li>
                <li><strong>Key rotation:</strong> Encryption keys rotated regularly</li>
                <li><strong>Backup encryption:</strong> Even backups are fully encrypted</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.2 Data in Transit Encryption</h3>
            <p className="mb-4">All data transmission uses:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>TLS 1.3:</strong> Latest transport layer security protocol</li>
              <li><strong>Perfect forward secrecy:</strong> Past sessions can't be decrypted even if keys are compromised</li>
              <li><strong>Certificate pinning:</strong> Prevents man-in-the-middle attacks</li>
              <li><strong>HTTPS only:</strong> No unencrypted connections allowed</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.3 End-to-End Encryption</h3>
            <p className="mb-4">For sensitive operations:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bank account credentials encrypted before leaving your device</li>
              <li>We never see your bank passwords in plain text</li>
              <li>Use read-only access tokens (not passwords)</li>
              <li>You can revoke access at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. What Data We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.1 Financial Data</h3>
            <p className="mb-4">To provide our service, we collect:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Transaction history (amounts, dates, merchants)</li>
              <li>Account balances</li>
              <li>Bill due dates and amounts</li>
              <li>Account connection information (not passwords)</li>
            </ul>
            <p className="mb-4">We do NOT collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bank account passwords (we use secure tokens)</li>
              <li>Social Security numbers</li>
              <li>Credit card CVV codes</li>
              <li>Complete account numbers (only last 4 digits for identification)</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.2 Account Information</h3>
            <p className="mb-4">Basic account data:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Name and email address</li>
              <li>Password (hashed, never stored in plain text)</li>
              <li>Preferences and settings</li>
              <li>App usage data (for improving service)</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.3 Usage Analytics</h3>
            <p className="mb-4">We collect anonymized usage data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Feature usage (which features you use)</li>
              <li>Performance metrics (app speed, errors)</li>
              <li>Aggregated, anonymized patterns</li>
              <li>No personally identifiable information in analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. How We Protect Your Data</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 Physical Security</h3>
            <p className="mb-4">Our data centers have:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>24/7 on-site security personnel</li>
              <li>Biometric access controls</li>
              <li>Video surveillance</li>
              <li>Fire suppression systems</li>
              <li>Redundant power and cooling</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 Network Security</h3>
            <p className="mb-4">Network protection includes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Firewalls and intrusion detection systems</li>
              <li>DDoS protection and mitigation</li>
              <li>Regular security audits and penetration testing</li>
              <li>Vulnerability scanning</li>
              <li>Security monitoring 24/7</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.3 Access Controls</h3>
            <p className="mb-4">Who can access your data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Only authorized employees with business need</li>
              <li>Multi-factor authentication required for all staff</li>
              <li>Access logs track who viewed what data</li>
              <li>Regular access reviews and revocations</li>
              <li>No third-party access without your consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. Data Sharing and Third Parties</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.1 We Never Sell Your Data</h3>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
              <p className="font-semibold text-gray-900 mb-2">Our Commitment</p>
              <p className="text-sm">We will NEVER sell your financial data to advertisers, marketers, or data brokers. Your data is yours, period.</p>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.2 Service Providers</h3>
            <p className="mb-4">We work with trusted partners for essential services:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Banking partners:</strong> Secure data aggregators for account connections</li>
              <li><strong>Cloud infrastructure:</strong> AWS, Google Cloud with SOC 2 certification</li>
              <li><strong>Payment processors:</strong> Stripe, PayPal for subscription billing</li>
            </ul>
            <p className="mb-4">All partners must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Meet our security standards</li>
              <li>Sign data protection agreements</li>
              <li>Only access data necessary for their service</li>
              <li>Comply with applicable privacy laws</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.3 Legal Requirements</h3>
            <p className="mb-4">We may share data if legally required:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Court orders or legal subpoenas</li>
              <li>Government investigations (with legal basis)</li>
              <li>Fraud prevention and security investigations</li>
              <li>We notify you when possible (unless legally prohibited)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Your Data Rights</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.1 Access Your Data</h3>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>View all data we have about you</li>
              <li>Download your data in standard formats (JSON, CSV)</li>
              <li>Export transaction history and account information</li>
              <li>Request a copy of your complete data profile</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.2 Correct Your Data</h3>
            <p className="mb-4">You can update:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Account information (name, email, preferences)</li>
              <li>Transaction categories and tags</li>
              <li>Financial goals and targets</li>
              <li>Notification preferences</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.3 Delete Your Data</h3>
            <p className="mb-4">You can request deletion of:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your entire account and all associated data</li>
              <li>Specific data categories</li>
              <li>Historical transactions (after export if desired)</li>
            </ul>
            <p className="mb-4">Deletion process:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Request deletion through account settings</li>
              <li>We'll confirm the request</li>
              <li>Data is permanently deleted within 30 days</li>
              <li>Backups are also deleted within retention period</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.4 Restrict Data Processing</h3>
            <p className="mb-4">You can limit how we use your data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Opt out of marketing communications</li>
              <li>Disable usage analytics</li>
              <li>Choose which data categories to share</li>
              <li>Set data retention preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Compliance and Certifications</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.1 Security Certifications</h3>
            <p className="mb-4">SaveCash maintains:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">SOC 2 Type II</h4>
                <p className="text-sm">Third-party audited security controls</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">ISO 27001</h4>
                <p className="text-sm">International security management standard</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">PCI DSS Level 1</h4>
                <p className="text-sm">Highest payment security standards</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Regular Audits</h4>
                <p className="text-sm">Annual third-party security assessments</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.2 Privacy Compliance</h3>
            <p className="mb-4">We comply with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>GDPR:</strong> Full data protection for EU users</li>
              <li><strong>CCPA:</strong> California privacy rights protection</li>
              <li><strong>PIPEDA:</strong> Canadian privacy laws</li>
              <li><strong>Other regional laws:</strong> As applicable to our users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">8. Data Breach Response</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8.1 Our Response Plan</h3>
            <p className="mb-4">If a security incident occurs:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Immediate containment of the threat</li>
              <li>Assessment of impact and data affected</li>
              <li>Notification to affected users within 72 hours</li>
              <li>Cooperation with law enforcement if needed</li>
              <li>Full transparency about what happened</li>
              <li>Remediation and prevention measures</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8.2 What You'll Be Told</h3>
            <p className="mb-4">We'll notify you of:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>What data was potentially accessed</li>
              <li>What we're doing to respond</li>
              <li>Steps you should take to protect yourself</li>
              <li>How to contact us with questions</li>
            </ul>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">9. Questions About Data Protection?</h2>
            <p className="mb-4">We're here to help:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Privacy inquiries: <a href="mailto:privacy@savecash.com" className="text-blue-600 hover:underline">privacy@savecash.com</a></li>
              <li>Security concerns: <a href="mailto:security@savecash.com" className="text-blue-600 hover:underline">security@savecash.com</a></li>
              <li>Read our full <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a></li>
              <li>Review our <a href="/security" className="text-blue-600 hover:underline">Security Overview</a></li>
            </ul>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Need More Help?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>See our <a href="/help/privacy-settings" className="text-blue-600 hover:underline">Privacy Settings guide</a></li>
              <li>Contact security at <a href="mailto:security@savecash.com" className="text-blue-600 hover:underline">security@savecash.com</a></li>
              <li>Visit our <a href="/help" className="text-blue-600 hover:underline">Help Center</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

