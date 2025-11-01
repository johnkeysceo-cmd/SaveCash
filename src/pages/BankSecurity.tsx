import React from "react";
import { ArrowLeft, Building2, Shield, Lock, Key } from "lucide-react";

export default function BankSecurity() {
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
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Bank Account Security</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Learn how SaveCash securely connects to your bank accounts and protects your financial information with bank-level security.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. How We Connect to Your Bank</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.1 Secure Connection Methods</h3>
            <p className="mb-4">SaveCash uses industry-standard, secure methods to connect:</p>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-900 mb-1">OAuth 2.0 / Open Banking</h4>
                <p className="text-sm text-gray-600">Preferred method: Direct API connections through your bank's secure authentication. You authorize access without sharing passwords.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-900 mb-1">Secure Aggregators</h4>
                <p className="text-sm text-gray-600">Trusted partners like Plaid, Yodlee provide encrypted connections to banks that don't offer direct APIs.</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-900 mb-1">Read-Only Access</h4>
                <p className="text-sm text-gray-600">We can view your transactions and balances, but cannot move money or make changes.</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.2 What We Never Store</h3>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
              <p className="font-semibold text-gray-900 mb-2">We Never Store:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Your bank account passwords</li>
                <li>Social Security numbers</li>
                <li>Complete account numbers (only last 4 digits)</li>
                <li>Credit card CVV codes</li>
                <li>Biometric authentication data</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Security Measures</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.1 Encryption</h3>
            <p className="mb-4">All bank data is encrypted:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>AES-256 encryption for data at rest</li>
              <li>TLS 1.3 for data in transit</li>
              <li>Separate encryption keys per user</li>
              <li>Hardware security modules for key management</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.2 Access Tokens</h3>
            <p className="mb-4">We use secure tokens instead of passwords:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>OAuth tokens that you can revoke anytime</li>
              <li>Time-limited access tokens that expire automatically</li>
              <li>Scoped permissions (read-only, never write access)</li>
              <li>No persistent password storage</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.3 Monitoring and Alerts</h3>
            <p className="mb-4">Continuous security monitoring:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>24/7 anomaly detection</li>
              <li>Automatic alerts for suspicious activity</li>
              <li>Account freezing if threats detected</li>
              <li>Real-time fraud monitoring</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. Bank Partnerships</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.1 Verified Partners</h3>
            <p className="mb-4">We work with trusted data aggregators:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Plaid (used by thousands of financial apps)</li>
              <li>Yodlee (trusted by major banks)</li>
              <li>Finicity (Mastercard-owned)</li>
              <li>Direct bank APIs where available</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.2 Partner Security</h3>
            <p className="mb-4">All partners must meet strict requirements:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>SOC 2 Type II certification</li>
              <li>PCI DSS compliance</li>
              <li>Regular security audits</li>
              <li>GDPR and privacy law compliance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. Your Control</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 Revoking Access</h3>
            <p className="mb-4">You can disconnect accounts anytime:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Accounts → Select account</li>
              <li>Click "Disconnect Account"</li>
              <li>Confirm disconnection</li>
              <li>Access is immediately revoked</li>
              <li>You can also revoke at your bank's website</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 Granular Permissions</h3>
            <p className="mb-4">Control what we can access:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Choose which accounts to connect</li>
              <li>Select specific account types</li>
              <li>Set date ranges for historical data</li>
              <li>Limit access to specific features</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.3 Activity Logs</h3>
            <p className="mb-4">View all access activity:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>See when we accessed your accounts</li>
              <li>View what data was retrieved</li>
              <li>Check connection history</li>
              <li>Export access logs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. What If My Bank Is Hacked?</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.1 SaveCash Security vs Bank Security</h3>
            <p className="mb-4">Important distinction:</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
              <p className="text-sm mb-2"><strong>SaveCash breach:</strong> Attackers could see your financial data we've collected, but cannot access your bank accounts or move money.</p>
              <p className="text-sm"><strong>Bank breach:</strong> Attackers could potentially access your accounts directly. SaveCash's read-only access doesn't increase this risk.</p>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.2 Our Response</h3>
            <p className="mb-4">If your bank is compromised:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>We'll notify you immediately</li>
              <li>Recommend disconnecting affected accounts</li>
              <li>Help you change bank passwords</li>
              <li>Reconnect securely after bank resolves issue</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.3 Fraud Protection</h3>
            <p className="mb-4">If unauthorized activity detected:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We'll alert you immediately</li>
              <li>Temporarily freeze account connections</li>
              <li>Work with your bank if needed</li>
              <li>Assist with fraud reporting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Best Practices</h2>
            
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Use Strong Bank Passwords</h3>
                <p className="text-sm">Even though we don't store them, strong passwords protect you from direct bank breaches.</p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Enable Two-Factor Authentication</h3>
                <p className="text-sm">Add an extra layer of security at your bank level.</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Monitor Your Accounts</h3>
                <p className="text-sm">Check your bank statements regularly, not just SaveCash summaries.</p>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Disconnect When Not Using</h3>
                <p className="text-sm">If you stop using SaveCash for extended periods, disconnect accounts to minimize risk surface.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Compliance and Insurance</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.1 Regulatory Compliance</h3>
            <p className="mb-4">We comply with:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Gramm-Leach-Bliley Act (GLBA)</li>
              <li>Bank Secrecy Act requirements</li>
              <li>State and federal financial regulations</li>
              <li>International banking regulations where applicable</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.2 Insurance Coverage</h3>
            <p className="mb-4">SaveCash maintains:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cybersecurity insurance</li>
              <li>Errors and omissions insurance</li>
              <li>Data breach response coverage</li>
              <li>Protection for you in case of our negligence</li>
            </ul>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">8. Reporting Security Concerns</h2>
            <p className="mb-4">If you notice suspicious activity:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email security team: <a href="mailto:security@savecash.com" className="text-blue-600 hover:underline">security@savecash.com</a></li>
              <li>Contact your bank immediately if unauthorized transactions</li>
              <li>File fraud reports with appropriate agencies</li>
              <li>We'll work with you to investigate and resolve</li>
            </ul>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Need More Help?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>See our <a href="/help/data-protection" className="text-blue-600 hover:underline">Data Protection guide</a></li>
              <li>Contact security at <a href="mailto:security@savecash.com" className="text-blue-600 hover:underline">security@savecash.com</a></li>
              <li>Visit our <a href="/help" className="text-blue-600 hover:underline">Help Center</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

