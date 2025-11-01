import React from "react";
import { ArrowLeft, Wifi, AlertCircle, CheckCircle2, RefreshCw } from "lucide-react";

export default function ConnectionIssues() {
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
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Account Connection Issues</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Troubleshoot problems connecting your financial accounts to SaveCash. Find solutions to common connection issues and get your accounts syncing properly.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. Common Connection Problems</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.1 Institution Not Found</h3>
            <p className="mb-4">If your bank or credit union doesn't appear in the list:</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Quick Fixes</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Search by the parent company name (e.g., search "Chase" if it's a Chase credit card)</li>
                <li>Try searching by routing number</li>
                <li>Check if your institution was recently acquired or merged</li>
                <li>Use the "Request Institution" feature to ask us to add support</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.2 Connection Timeout</h3>
            <p className="mb-4">Connection fails or times out during setup:</p>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-900 mb-1">Check Your Internet Connection</h4>
                <p className="text-sm text-gray-600">Ensure you have a stable internet connection. Try refreshing the page and attempting connection again.</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-900 mb-1">Clear Browser Cache</h4>
                <p className="text-sm text-gray-600">Old cached data can interfere. Clear your browser cache and cookies, then try again.</p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-900 mb-1">Try Different Browser</h4>
                <p className="text-sm text-gray-600">Some browsers have compatibility issues. Try Chrome, Firefox, or Safari.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-900 mb-1">Disable Extensions</h4>
                <p className="text-sm text-gray-600">Ad blockers or security extensions can interfere with the connection process.</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.3 Authentication Errors</h3>
            <p className="mb-4">Problems logging into your bank during connection:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Verify you're using the correct username and password</li>
              <li>Check if your bank requires two-factor authentication (have your phone ready)</li>
              <li>Ensure your bank account is not locked or suspended</li>
              <li>Try logging into your bank's website directly first to verify credentials</li>
              <li>Some banks require you to enable third-party access in settings first</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Two-Factor Authentication Issues</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.1 Common 2FA Problems</h3>
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">SMS Codes Not Arriving</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Check your phone signal and service</li>
                  <li>Wait up to 2 minutes for delivery</li>
                  <li>Verify your phone number is correct with your bank</li>
                  <li>Try requesting a new code</li>
                  <li>Use an authenticator app instead if available</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Authenticator App Issues</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Ensure your device's time is synchronized correctly</li>
                  <li>Check that the authenticator app is properly set up</li>
                  <li>Verify you're using the correct account in the app</li>
                  <li>Generate a new code and use it quickly (codes expire)</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Security Questions</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Answer exactly as you set them up (case-sensitive)</li>
                  <li>Try common variations if you're unsure</li>
                  <li>Contact your bank to reset security questions if needed</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. Bank-Specific Issues</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.1 Bank Maintenance Windows</h3>
            <p className="mb-4">Banks perform maintenance that can temporarily disrupt connections:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Most banks schedule maintenance during off-peak hours (late night/early morning)</li>
              <li>Maintenance typically lasts 1-4 hours</li>
              <li>Check your bank's status page or contact them for maintenance schedules</li>
              <li>Try connecting again after the maintenance window</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.2 Bank Security Policies</h3>
            <p className="mb-4">Some banks have strict security policies:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>May require you to enable third-party access in account settings</li>
              <li>Some banks require a phone call to enable API access</li>
              <li>Corporate or business accounts may have additional restrictions</li>
              <li>International accounts may have limited support</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.3 Account Type Restrictions</h3>
            <p className="mb-4">Certain account types may have limitations:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Joint accounts may require both account holders to authorize</li>
              <li>Trust accounts or custodial accounts may not be supported</li>
              <li>Some investment accounts have read-only access restrictions</li>
              <li>Business accounts may require different connection methods</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. Step-by-Step Troubleshooting</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 Initial Troubleshooting Steps</h3>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li><strong>Verify Institution Support:</strong> Check that your bank is listed in supported institutions</li>
              <li><strong>Test Bank Login:</strong> Log into your bank's website directly to ensure your credentials work</li>
              <li><strong>Check Account Status:</strong> Verify your account is active and not frozen</li>
              <li><strong>Review Browser:</strong> Use an updated, compatible browser (Chrome, Firefox, Safari, Edge)</li>
              <li><strong>Disable Extensions:</strong> Temporarily disable ad blockers and security extensions</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 Advanced Troubleshooting</h3>
            <p className="mb-4">If basic steps don't work:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Clear browser cache and cookies completely</li>
              <li>Try incognito/private browsing mode</li>
              <li>Disable VPN if you're using one</li>
              <li>Check if your bank requires special authorization for third-party apps</li>
              <li>Verify your bank account password hasn't changed</li>
              <li>Wait 24 hours and try again (banks sometimes have temporary restrictions)</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.3 When to Contact Support</h3>
            <p className="mb-4">Contact SaveCash support if:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your bank is listed but connection consistently fails</li>
              <li>You receive specific error messages we can investigate</li>
              <li>Connection worked before but now fails</li>
              <li>You've tried all troubleshooting steps without success</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. Reconnection After Issues</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.1 When to Reconnect</h3>
            <p className="mb-4">You may need to reconnect if:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your bank password changed</li>
              <li>Connection expired (some banks require periodic re-authentication)</li>
              <li>Account was locked and then unlocked</li>
              <li>You changed banks or account numbers</li>
              <li>Continuous sync failures occur</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.2 How to Reconnect</h3>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Accounts → Find the problematic account</li>
              <li>Click "Reconnect" or "Update Connection"</li>
              <li>Follow the authentication process again</li>
              <li>Select which accounts to reconnect</li>
              <li>Wait for initial sync to complete</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.3 Disconnect and Reconnect</h3>
            <p className="mb-4">For persistent issues, try a full disconnect and reconnect:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Disconnect the account completely</li>
              <li>Wait 5 minutes</li>
              <li>Add the account again as if it's new</li>
              <li>Complete the full connection process</li>
            </ol>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Error Messages and Solutions</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.1 Common Error Messages</h3>
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">"Invalid Credentials"</h4>
                <p className="text-sm mb-2">Your username or password is incorrect:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Double-check your login credentials</li>
                  <li>Try logging into your bank's website first</li>
                  <li>Reset your bank password if needed</li>
                  <li>Ensure caps lock is off and special characters are correct</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">"Connection Timed Out"</h4>
                <p className="text-sm mb-2">The connection took too long:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Check your internet connection</li>
                  <li>Try again in a few minutes</li>
                  <li>Your bank may be experiencing high traffic</li>
                  <li>Contact support if issue persists</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">"Bank Not Supported"</h4>
                <p className="text-sm mb-2">Your institution isn't currently supported:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Request support for your institution</li>
                  <li>Check if it's listed under a different name</li>
                  <li>Try manual account entry as an alternative</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Prevention and Best Practices</h2>
            
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Keep Credentials Updated</h3>
                <p className="text-sm">If you change your bank password, reconnect the account in SaveCash immediately to avoid sync failures.</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Monitor Connection Status</h3>
                <p className="text-sm">Check your accounts dashboard regularly to ensure all connections are active and syncing properly.</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Use Secure Networks</h3>
                <p className="text-sm">When connecting accounts, use a secure, private internet connection. Avoid public Wi-Fi.</p>
              </div>
            </div>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">8. Still Having Issues?</h2>
            <p className="mb-4">If you've tried all troubleshooting steps and still can't connect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact SaveCash support at <a href="mailto:support@savecash.com" className="text-blue-600 hover:underline">support@savecash.com</a></li>
              <li>Include your bank name and any error messages you received</li>
              <li>Visit our <a href="/support" className="text-blue-600 hover:underline">Support page</a> for additional resources</li>
              <li>See our <a href="/help/connecting-accounts" className="text-blue-600 hover:underline">Connecting Accounts guide</a> for detailed instructions</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

