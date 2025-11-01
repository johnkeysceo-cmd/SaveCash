import React from "react";
import { ArrowLeft, Shield, Smartphone, Key, CheckCircle2 } from "lucide-react";

export default function TwoFactorAuth() {
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
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Two-Factor Authentication (2FA)</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Protect your SaveCash account with two-factor authentication. Learn how to enable 2FA and secure your financial data.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. What is Two-Factor Authentication?</h2>
            <p className="mb-4">Two-factor authentication adds an extra layer of security to your account by requiring two forms of verification:</p>
            
            <div className="space-y-3 mb-6">
              <div className="border-l-4 border-blue-500 pl-6 py-3">
                <h3 className="font-semibold text-gray-900 mb-1">Something You Know</h3>
                <p className="text-sm text-gray-600">Your password (first factor)</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6 py-3">
                <h3 className="font-semibold text-gray-900 mb-1">Something You Have</h3>
                <p className="text-sm text-gray-600">Your phone, authenticator app, or security key (second factor)</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.1 Why Use 2FA?</h3>
            <p className="mb-4">2FA dramatically increases account security:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>99.9% reduction in account takeover risk</li>
              <li>Protection even if password is compromised</li>
              <li>Required for sensitive financial operations</li>
              <li>Industry best practice for financial accounts</li>
            </ul>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
              <p className="text-sm"><strong>Recommendation:</strong> We strongly recommend enabling 2FA on your SaveCash account, especially if you have connected bank accounts.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Types of 2FA Methods</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.1 Authenticator Apps (Recommended)</h3>
            <p className="mb-4">Authenticator apps are the most secure 2FA method:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Google Authenticator</li>
              <li>Microsoft Authenticator</li>
              <li>Authy</li>
              <li>1Password</li>
              <li>LastPass Authenticator</li>
            </ul>
            <p className="mb-4">Advantages:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Works offline (no phone signal needed)</li>
              <li>More secure than SMS</li>
              <li>Works on multiple devices</li>
              <li>Time-based codes (expire every 30 seconds)</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.2 SMS/Text Message</h3>
            <p className="mb-4">Receive codes via text message:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Easiest to set up</li>
              <li>No app installation required</li>
              <li>Codes sent to your phone number</li>
            </ul>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
              <p className="text-sm"><strong>Note:</strong> SMS is less secure than authenticator apps due to SIM swapping risks, but better than no 2FA.</p>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.3 Email Verification</h3>
            <p className="mb-4">Receive codes via email:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Backup method if phone unavailable</li>
              <li>Less secure (email can be compromised)</li>
              <li>Best used as secondary option</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.4 Hardware Security Keys</h3>
            <p className="mb-4">Physical security devices:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>YubiKey, Titan Security Key</li>
              <li>Most secure option available</li>
              <li>USB or NFC connection</li>
              <li>Resistant to phishing attacks</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. Setting Up 2FA</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.1 Using Authenticator App</h3>
            <p className="mb-4">Step-by-step setup:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Account Settings → Security</li>
              <li>Click "Enable Two-Factor Authentication"</li>
              <li>Select "Authenticator App"</li>
              <li>Open your authenticator app (Google Authenticator, etc.)</li>
              <li>Scan the QR code displayed on screen</li>
              <li>Enter the 6-digit code from your app</li>
              <li>Save backup codes (important!)</li>
              <li>Confirm and complete setup</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.2 Using SMS</h3>
            <p className="mb-4">To set up SMS 2FA:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Account Settings → Security</li>
              <li>Click "Enable Two-Factor Authentication"</li>
              <li>Select "SMS/Text Message"</li>
              <li>Enter your phone number</li>
              <li>Verify phone with code sent via SMS</li>
              <li>Confirm and complete setup</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.3 Backup Codes</h3>
            <p className="mb-4">Always save backup codes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Generated when you enable 2FA</li>
              <li>Use if you lose access to your 2FA device</li>
              <li>Store securely (password manager, safe location)</li>
              <li>Each code can only be used once</li>
              <li>Regenerate codes anytime in settings</li>
            </ul>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
              <p className="text-sm"><strong>Critical:</strong> If you lose your 2FA device AND backup codes, you may be permanently locked out. Always save backup codes!</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. Using 2FA</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 During Login</h3>
            <p className="mb-4">When logging in with 2FA enabled:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Enter your email and password</li>
              <li>Click "Log In"</li>
              <li>Enter 2FA code when prompted</li>
              <li>Code from authenticator app (6 digits, 30-second timer)</li>
              <li>Or enter code received via SMS/email</li>
              <li>Access granted after verification</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 Trusted Devices</h3>
            <p className="mb-4">Save time on trusted devices:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Mark devices as "Trusted" for 30 days</li>
              <li>Skip 2FA on trusted devices</li>
              <li>Still required for sensitive operations</li>
              <li>Manage trusted devices in Security settings</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.3 Sensitive Operations</h3>
            <p className="mb-4">2FA always required for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Changing password</li>
              <li>Disconnecting bank accounts</li>
              <li>Exporting data</li>
              <li>Deleting account</li>
              <li>Changing email address</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. Managing 2FA</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.1 Changing 2FA Method</h3>
            <p className="mb-4">To switch methods:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Security Settings</li>
              <li>Click "Change 2FA Method"</li>
              <li>Verify with current 2FA method</li>
              <li>Select new method and set it up</li>
              <li>Disable old method</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.2 Disabling 2FA</h3>
            <p className="mb-4">To disable (not recommended):</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Security Settings</li>
              <li>Click "Disable Two-Factor Authentication"</li>
              <li>Verify with 2FA code or backup code</li>
              <li>Confirm disabling</li>
            </ol>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
              <p className="text-sm"><strong>Warning:</strong> Disabling 2FA significantly reduces your account security. We strongly advise keeping it enabled.</p>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.3 Regenerating Backup Codes</h3>
            <p className="mb-4">Generate new backup codes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Go to Security Settings → Backup Codes</li>
              <li>Click "Generate New Codes"</li>
              <li>Old codes become invalid</li>
              <li>Save new codes immediately</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Troubleshooting</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.1 Lost Access to 2FA Device</h3>
            <p className="mb-4">If you lost your phone or device:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Use backup codes to log in</li>
              <li>Go to Security Settings</li>
              <li>Disable current 2FA method</li>
              <li>Set up new 2FA method</li>
              <li>Generate new backup codes</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.2 Codes Not Working</h3>
            <p className="mb-4">If codes aren't accepted:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Ensure device time is synchronized correctly</li>
              <li>Wait for new code (30-second timer)</li>
              <li>Check you're using the correct account in app</li>
              <li>Try backup codes if available</li>
              <li>Contact support if issues persist</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.3 SMS Not Arriving</h3>
            <p className="mb-4">If SMS codes don't arrive:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Check phone signal and service</li>
              <li>Wait up to 2 minutes</li>
              <li>Check spam/blocked messages</li>
              <li>Verify phone number is correct</li>
              <li>Request new code</li>
              <li>Use backup method if available</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.4 Account Recovery</h3>
            <p className="mb-4">If you're locked out:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact support with account details</li>
              <li>Provide proof of identity</li>
              <li>May take 24-48 hours to verify and recover</li>
              <li>This is why backup codes are critical</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Best Practices</h2>
            
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Use Authenticator App</h3>
                <p className="text-sm">More secure than SMS. Use Google Authenticator, Microsoft Authenticator, or Authy.</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Save Backup Codes</h3>
                <p className="text-sm">Store backup codes in a password manager or secure location. Don't lose them!</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Multiple Devices</h3>
                <p className="text-sm">Set up 2FA on multiple devices (phone + tablet) for redundancy.</p>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Regular Review</h3>
                <p className="text-sm">Check trusted devices quarterly and remove devices you no longer use.</p>
              </div>
            </div>
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

