import React from "react";
import { ArrowLeft, Shield, CheckCircle2, AlertCircle } from "lucide-react";

export default function ConnectingAccounts() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-6">
            <a 
              href="/help"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Help Center
            </a>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">How to Connect Your Bank Account</h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Connecting your financial accounts to SaveCash is secure, simple, and takes just a few minutes. This comprehensive guide covers everything you need to know about connecting and managing your accounts.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
            
            {/* Quick Start Section */}
            <section className="scroll-mt-8">
              <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quick Start: Connect Your Account</h2>
                <ol className="list-decimal pl-6 space-y-3 text-base">
                  <li><strong>Log in to SaveCash</strong> and go to the Accounts section</li>
                  <li><strong>Click "Add Account"</strong> or "Connect Bank Account"</li>
                  <li><strong>Search for your bank</strong> or financial institution</li>
                  <li><strong>Enter your bank credentials</strong> (same as you use for online banking)</li>
                  <li><strong>Select which accounts</strong> to connect (checking, savings, credit cards)</li>
                  <li><strong>Authorize the connection</strong> and wait for verification</li>
                  <li><strong>Start saving!</strong> SaveCash will begin analyzing your accounts within 24 hours</li>
                </ol>
                <p className="mt-4 text-sm text-gray-600">
                  <strong>Note:</strong> The connection process takes 2-5 minutes and is completely secure. We use bank-level encryption and never store your passwords.
                </p>
              </div>
            </section>
            
            {/* Section 1: Security Overview */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. Security and Privacy First</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Bank-Level Security</h3>
                    <p className="mb-2">
                      SaveCash uses the same security standards as major banks. Your data is encrypted with 256-bit SSL encryption, and we use read-only access, meaning we can analyze your spending but cannot make transactions or move your money.
                    </p>
                    <p>
                      We never store your banking credentials directly. Instead, we use OAuth connections through trusted providers like Plaid and Yodlee, which are used by thousands of financial institutions.
                    </p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">What We Can Do</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Read your transaction history</li>
                <li>Analyze your spending patterns</li>
                <li>Identify savings opportunities</li>
                <li>View account balances</li>
                <li>Monitor for unusual activity</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">What We Cannot Do</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Initiate transactions or transfers</li>
                <li>Make payments on your behalf</li>
                <li>Change your account settings</li>
                <li>Access your account without your permission</li>
                <li>Share your data with third parties without consent</li>
              </ul>
            </section>

            {/* Section 2: Supported Institutions */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Supported Financial Institutions</h2>
              
              <p className="mb-4">
                SaveCash supports thousands of financial institutions across the United States. We work with major banks, credit unions, credit card companies, investment firms, and more.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Major Banks</h3>
              <p className="mb-4">
                We support all major banks including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Chase</li>
                <li>Bank of America</li>
                <li>Wells Fargo</li>
                <li>Citibank</li>
                <li>U.S. Bank</li>
                <li>PNC Bank</li>
                <li>TD Bank</li>
                <li>Capital One</li>
                <li>And thousands more</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Credit Unions</h3>
              <p className="mb-4">
                SaveCash works with credit unions nationwide. If your credit union isn't immediately available, you can request it, and we'll work to add support.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Credit Card Providers</h3>
              <p className="mb-4">
                Connect credit cards from:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>American Express</li>
                <li>Discover</li>
                <li>Mastercard and Visa through any issuer</li>
                <li>Store credit cards</li>
                <li>And more</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Investment Accounts</h3>
              <p className="mb-4">
                Connect accounts from major brokerages:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Fidelity</li>
                <li>Charles Schwab</li>
                <li>Vanguard</li>
                <li>TD Ameritrade</li>
                <li>E*TRADE</li>
                <li>Robinhood</li>
                <li>And many others</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Other Accounts</h3>
              <p className="mb-4">
                You can also connect:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Retirement accounts (401k, IRA, 403b)</li>
                <li>Savings accounts</li>
                <li>Money market accounts</li>
                <li>Loan accounts</li>
                <li>Mortgage accounts</li>
              </ul>
            </section>

            {/* Section 3: Step-by-Step Connection */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. Step-by-Step Connection Process</h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-green-500 pl-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 1: Navigate to Account Settings</h3>
                  <p className="mb-3">
                    After logging into your SaveCash account, navigate to the "Accounts" section in your dashboard. You'll see a prominent "Add Account" or "Connect Account" button.
                  </p>
                  <p>
                    Alternatively, you can access account settings from the main menu by clicking on your profile icon and selecting "Connected Accounts."
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 2: Select Your Institution</h3>
                  <p className="mb-3">
                    You'll be presented with a searchable list of financial institutions. Type your bank or credit union name in the search box to find it quickly.
                  </p>
                  <p className="mb-3">
                    If your institution doesn't appear in the list, you have a few options:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-3">
                    <li>Check if it's listed under a different name or parent company</li>
                    <li>Use the "Request Institution" feature to ask us to add support</li>
                    <li>Try searching by routing number or institution ID</li>
                  </ul>
                  <p>
                    We regularly add new institutions based on user requests, so check back if your institution isn't available yet.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 3: Authenticate with Your Bank</h3>
                  <p className="mb-3">
                    Click on your institution to begin the connection process. You'll be redirected to your bank's secure login page (this happens on your bank's website, not SaveCash).
                  </p>
                  <p className="mb-3">
                    <strong>Important:</strong> You're logging in directly with your bank at this point. SaveCash never sees or stores your banking username or password.
                  </p>
                  <p className="mb-3">
                    Enter your banking credentials exactly as you would when logging into your bank's website or mobile app. This might include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-3">
                    <li>Username or account number</li>
                    <li>Password</li>
                    <li>Two-factor authentication code (if enabled)</li>
                    <li>Security questions (for some banks)</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 4: Grant Permissions</h3>
                  <p className="mb-3">
                    After authenticating, your bank will ask you to grant SaveCash permission to access your account information. This is a standard OAuth flow that you may have experienced with other financial apps.
                  </p>
                  <p className="mb-3">
                    You'll typically see:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-3">
                    <li>What information SaveCash will access (account balances, transaction history)</li>
                    <li>The duration of the connection</li>
                    <li>Your ability to revoke access at any time</li>
                  </ul>
                  <p>
                    Review the permissions carefully and click "Allow" or "Authorize" to proceed. Remember, SaveCash only has read-only access.
                  </p>
                </div>
                
                <div className="border-l-4 border-teal-500 pl-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 5: Select Accounts to Connect</h3>
                  <p className="mb-3">
                    After authorization, you'll see a list of all accounts associated with your bank login. This might include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-3">
                    <li>Checking accounts</li>
                    <li>Savings accounts</li>
                    <li>Credit cards</li>
                    <li>Investment accounts</li>
                    <li>Loans or lines of credit</li>
                  </ul>
                  <p className="mb-3">
                    Select which accounts you want to connect to SaveCash. You can connect all accounts or be selective. You can always add more accounts later.
                  </p>
                  <p>
                    <strong>Tip:</strong> For the best savings analysis, connect all accounts where you make regular transactions. This gives SaveCash a complete picture of your finances.
                  </p>
                </div>
                
                <div className="border-l-4 border-pink-500 pl-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 6: Complete Connection</h3>
                  <p className="mb-3">
                    Once you've selected your accounts, click "Finish" or "Connect Accounts." SaveCash will begin syncing your account data.
                  </p>
                  <p className="mb-3">
                    The initial sync typically takes a few minutes, but can take longer if you have extensive transaction history. You'll see a progress indicator and receive a notification when the sync is complete.
                  </p>
                  <p>
                    After syncing, your accounts will appear in your SaveCash dashboard, and our AI will begin analyzing your financial data for savings opportunities.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Connection Methods */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. Different Connection Methods</h2>
              
              <p className="mb-4">
                SaveCash offers multiple ways to connect your accounts, depending on what your institution supports:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 OAuth (Recommended)</h3>
              <p className="mb-4">
                OAuth is the most secure and convenient method. It redirects you to your bank's website where you log in directly. This is the method described in the step-by-step guide above.
              </p>
              <p className="mb-4">
                <strong>Benefits:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>You never share your banking credentials with SaveCash</li>
                <li>Works with most major banks</li>
                <li>Easy to revoke access directly from your bank</li>
                <li>Most secure option available</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 Credential-Based Connection</h3>
              <p className="mb-4">
                Some smaller institutions may use credential-based connections through secure partners like Plaid. In this case, you enter your credentials through a secure, encrypted interface.
              </p>
              <p className="mb-4">
                <strong>How it works:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Credentials are encrypted and sent directly to your bank</li>
                <li>SaveCash never stores your password in plain text</li>
                <li>Your credentials are tokenized for ongoing access</li>
                <li>You can change your bank password without reconnecting</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.3 Manual Account Entry</h3>
              <p className="mb-4">
                For institutions that don't support automatic connections, you can manually add accounts. While this provides limited functionality (no automatic transaction syncing), it still allows you to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Track savings goals</li>
                <li>Manually enter transactions</li>
                <li>Use budgeting features</li>
                <li>Receive general savings recommendations</li>
              </ul>
              <p>
                To manually add an account, select "Add Manual Account" from the connection options and follow the prompts.
              </p>
            </section>

            {/* Section 5: Troubleshooting Connection Issues */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. Troubleshooting Connection Issues</h2>
              
              <div className="space-y-6">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600" />
                    Institution Not Found
                  </h3>
                  <p className="mb-2">
                    If you can't find your bank or credit union:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Try searching by the parent company name</li>
                    <li>Check if your institution was recently acquired or merged</li>
                    <li>Use the "Request Institution" feature</li>
                    <li>Contact support for assistance</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    Connection Failed
                  </h3>
                  <p className="mb-2">
                    If connection fails after authentication:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Check your internet connection</li>
                    <li>Try again in a few minutes (banks sometimes have temporary outages)</li>
                    <li>Clear your browser cache and cookies</li>
                    <li>Try using a different browser</li>
                    <li>Disable browser extensions that might interfere</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-blue-600" />
                    Two-Factor Authentication Issues
                  </h3>
                  <p className="mb-2">
                    If you're having trouble with 2FA:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Make sure you have your 2FA device ready before starting</li>
                    <li>Some banks require you to enable 2FA before connecting to third-party apps</li>
                    <li>Check that your 2FA method is up to date</li>
                    <li>Try using an authenticator app instead of SMS if available</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-purple-600" />
                    Account Not Syncing
                  </h3>
                  <p className="mb-2">
                    If your account shows as connected but isn't syncing:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Wait up to 24 hours for initial sync to complete</li>
                    <li>Try disconnecting and reconnecting the account</li>
                    <li>Check if your bank password has changed</li>
                    <li>Verify your account is still active with your bank</li>
                    <li>Contact support if issues persist</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6: Managing Connected Accounts */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Managing Connected Accounts</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.1 Viewing Connected Accounts</h3>
              <p className="mb-4">
                All your connected accounts are visible in your SaveCash dashboard under "Connected Accounts." Each account shows:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Account name and type</li>
                <li>Last sync time</li>
                <li>Current balance (for checking/savings)</li>
                <li>Connection status</li>
                <li>Quick actions (sync now, disconnect, etc.)</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.2 Refreshing Account Data</h3>
              <p className="mb-4">
                SaveCash automatically syncs your accounts daily. You can also manually refresh an account:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Click on the account in your dashboard</li>
                <li>Select "Refresh Now" or "Sync Account"</li>
                <li>Wait a few moments for the sync to complete</li>
              </ul>
              <p>
                Manual refreshes are useful when you've made recent transactions and want immediate updates.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.3 Reconnecting Accounts</h3>
              <p className="mb-4">
                Sometimes accounts need to be reconnected, typically if:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>You changed your bank password</li>
                <li>The connection expired (some banks require periodic re-authentication)</li>
                <li>You're experiencing sync issues</li>
                <li>Your bank updated their security requirements</li>
              </ul>
              <p className="mb-4">
                To reconnect:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mb-6">
                <li>Go to Connected Accounts in your settings</li>
                <li>Click on the account that needs reconnecting</li>
                <li>Select "Reconnect" or "Update Connection"</li>
                <li>Follow the authentication process again</li>
              </ol>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.4 Disconnecting Accounts</h3>
              <p className="mb-4">
                You can disconnect any account at any time. To disconnect:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mb-6">
                <li>Navigate to Connected Accounts</li>
                <li>Find the account you want to disconnect</li>
                <li>Click "Disconnect" or "Remove Account"</li>
                <li>Confirm the disconnection</li>
              </ol>
              <p className="mb-4">
                <strong>Important:</strong> Disconnecting an account will:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Stop new transaction syncing</li>
                <li>Remove the account from your dashboard</li>
                <li>Not delete historical data (you can still view past transactions)</li>
              </ul>
              <p>
                Your historical data remains accessible for reference, but new transactions won't be tracked after disconnection.
              </p>
            </section>

            {/* Section 7: Security Best Practices */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Security Best Practices</h2>
              
              <p className="mb-4">
                While SaveCash uses bank-level security, following these practices will further protect your accounts:
              </p>
              
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Use Strong Authentication
                  </h3>
                  <p>
                    Always use two-factor authentication (2FA) on both your SaveCash account and your bank accounts for maximum security.
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Monitor Account Activity
                  </h3>
                  <p>
                    Regularly review your connected accounts in SaveCash and verify that all activity matches what you expect. Report any suspicious activity immediately.
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Keep Software Updated
                  </h3>
                  <p>
                    Use the latest version of your web browser and SaveCash mobile app to ensure you have the most recent security updates.
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Use Secure Networks
                  </h3>
                  <p>
                    Only connect accounts when using a secure, private internet connection. Avoid public Wi-Fi when possible, or use a VPN for added security.
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Review Permissions Regularly
                  </h3>
                  <p>
                    Periodically review which accounts are connected and disconnect any that you no longer use or need.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Multiple Accounts */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">8. Managing Multiple Accounts</h2>
              
              <p className="mb-4">
                Many users have multiple financial accounts across different institutions. SaveCash makes it easy to manage all of them in one place.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8.1 Benefits of Multiple Accounts</h3>
              <p className="mb-4">
                Connecting all your accounts provides several advantages:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Complete Financial Picture:</strong> See all your accounts in one dashboard</li>
                <li><strong>Better Savings Analysis:</strong> More data means more accurate savings opportunities</li>
                <li><strong>Cross-Account Insights:</strong> Understand how money flows between accounts</li>
                <li><strong>Comprehensive Goal Tracking:</strong> Track progress across all accounts</li>
                <li><strong>Unified Alerts:</strong> Get notified about opportunities across all accounts</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8.2 Organizing Accounts</h3>
              <p className="mb-4">
                SaveCash automatically organizes your accounts by type, but you can also:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Create custom account groups or categories</li>
                <li>Nickname accounts for easier identification</li>
                <li>Hide accounts you don't actively use (without disconnecting)</li>
                <li>Set up account-specific alerts and notifications</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8.3 Account Limits</h3>
              <p className="mb-4">
                SaveCash supports connecting up to 50 accounts per user. If you need to connect more accounts, contact our support team for assistance.
              </p>
            </section>

            {/* Section 9: Privacy and Data */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">9. Privacy and Data Handling</h2>
              
              <p className="mb-4">
                Your privacy is important to us. Here's how we handle your financial data:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">9.1 Data Usage</h3>
              <p className="mb-4">
                SaveCash uses your financial data solely to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Identify savings opportunities</li>
                <li>Analyze spending patterns</li>
                <li>Provide personalized recommendations</li>
                <li>Generate financial insights and reports</li>
                <li>Prevent fraud and unusual activity</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">9.2 Data Sharing</h3>
              <p className="mb-4">
                We never sell your financial data. We may share aggregated, anonymized data for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Improving our services</li>
                <li>Industry research and analysis</li>
                <li>Compliance with legal requirements</li>
              </ul>
              <p>
                Your personally identifiable information is never included in these aggregated reports. For complete details, see our <a href="/" className="text-blue-600 hover:underline">Privacy Policy</a>.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">9.3 Data Retention</h3>
              <p className="mb-4">
                We retain your financial data while your account is active. If you delete your SaveCash account, we will:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Disconnect all connected accounts</li>
                <li>Delete all stored financial data within 30 days</li>
                <li>Remove your personal information from our systems</li>
                <li>Keep anonymized, aggregated data for service improvement (no personal identifiers)</li>
              </ul>
            </section>

            {/* Section 10: Next Steps */}
            <section className="scroll-mt-8 border-t pt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">10. Next Steps</h2>
              
              <p className="mb-4">
                Now that you've connected your accounts, you're ready to start saving! Here's what to do next:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <a 
                  href="/help/getting-started"
                  className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                    Getting Started Guide →
                  </h3>
                  <p className="text-sm text-gray-600">
                    Learn the basics of using SaveCash effectively.
                  </p>
                </a>
                
                <a 
                  href="/help/savings-opportunities"
                  className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                    Understand Savings →
                  </h3>
                  <p className="text-sm text-gray-600">
                    Learn how SaveCash finds and implements savings.
                  </p>
                </a>
              </div>
              
              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
                <p className="mb-4 text-sm">
                  If you're having trouble connecting your accounts or have questions about the process:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Contact support at <a href="mailto:privacy.savecash@gmail.com" className="text-blue-600 hover:underline">privacy.savecash@gmail.com</a></li>
                  <li>Visit our <a href="/support" className="text-blue-600 hover:underline">Support page</a></li>
                  <li>Check our <a href="/faq" className="text-blue-600 hover:underline">FAQ</a> for common questions</li>
                </ul>
              </div>
            </section>

        </div>
      </div>
    </div>
  );
}

