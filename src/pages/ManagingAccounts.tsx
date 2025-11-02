import React from "react";
import { ArrowLeft, CreditCard, Plus, Trash2, RefreshCw } from "lucide-react";

export default function ManagingAccounts() {
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
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Managing Connected Accounts</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Learn how to add, remove, and manage your connected financial accounts in SaveCash.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. Viewing Your Connected Accounts</h2>
            <p className="mb-4">To view all your connected accounts:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Navigate to the dashboard</li>
              <li>Click on "Accounts" in the main menu</li>
              <li>You'll see all connected accounts listed with their current status</li>
            </ol>
            <p className="mb-4">Each account shows:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account name and type</li>
              <li>Current balance (for checking/savings accounts)</li>
              <li>Connection status (Connected, Syncing, Error)</li>
              <li>Last sync time</li>
              <li>Quick actions (Refresh, View Details, Disconnect)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Adding New Accounts</h2>
            <p className="mb-4">To connect a new financial account:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Accounts → Add Account</li>
              <li>Search for your financial institution</li>
              <li>Select your bank, credit union, or financial institution</li>
              <li>Authenticate using your bank's secure login</li>
              <li>Select which accounts to connect</li>
              <li>Confirm and wait for initial sync</li>
            </ol>
            <p className="mb-4">For detailed instructions, see our <a href="/help/connecting-accounts" className="text-blue-600 hover:underline">Connecting Your Bank Account</a> guide.</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. Refreshing Account Data</h2>
            <p className="mb-4">SaveCash automatically syncs accounts daily, but you can manually refresh:</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.1 Manual Refresh</h3>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to the Accounts section</li>
              <li>Click on the account you want to refresh</li>
              <li>Click "Refresh Now" or "Sync Account"</li>
              <li>Wait a few moments for the sync to complete</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.2 Refresh All Accounts</h3>
            <p className="mb-4">To refresh all accounts at once:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Go to Accounts</li>
              <li>Click "Refresh All Accounts"</li>
              <li>This will sync all connected accounts sequentially</li>
            </ol>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. Reconnecting Accounts</h2>
            <p className="mb-4">Sometimes accounts need to be reconnected. Common reasons include:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Changed bank password</li>
              <li>Expired connection (some banks require periodic re-authentication)</li>
              <li>Sync errors that persist</li>
              <li>Bank security policy updates</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 How to Reconnect</h3>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Accounts → Find the account with issues</li>
              <li>Click "Reconnect" or "Update Connection"</li>
              <li>Authenticate with your bank again</li>
              <li>Select accounts to reconnect</li>
              <li>Confirm and wait for sync</li>
            </ol>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. Disconnecting Accounts</h2>
            <p className="mb-4">To disconnect an account:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Accounts → Find the account</li>
              <li>Click on the account</li>
              <li>Click "Disconnect" or "Remove Account"</li>
              <li>Confirm the disconnection</li>
            </ol>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
              <p className="text-sm"><strong>Important:</strong> Disconnecting an account will stop new transaction syncing but won't delete your historical data. You can still view past transactions and reports.</p>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.1 When to Disconnect</h3>
            <p className="mb-4">You might want to disconnect an account if:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You've closed the account</li>
              <li>You no longer use the account</li>
              <li>You're experiencing persistent sync issues</li>
              <li>You want to simplify your dashboard</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Organizing Multiple Accounts</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.1 Account Groups</h3>
            <p className="mb-4">Organize accounts into custom groups:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Create groups like "Personal", "Business", "Shared"</li>
              <li>Assign accounts to groups</li>
              <li>Filter dashboard by group</li>
              <li>Set group-specific goals and alerts</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.2 Account Nicknames</h3>
            <p className="mb-4">Give accounts custom names for easier identification:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Click on an account</li>
              <li>Click "Edit" or the settings icon</li>
              <li>Enter a custom nickname</li>
              <li>Save changes</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.3 Hiding Accounts</h3>
            <p className="mb-4">Hide accounts without disconnecting:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accounts remain connected and synced</li>
              <li>They won't appear in your main dashboard</li>
              <li>You can still access them from Accounts page</li>
              <li>Useful for accounts you rarely check</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Account Limits</h2>
            <p className="mb-4">SaveCash supports connecting up to 50 accounts per user. This includes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Checking accounts</li>
              <li>Savings accounts</li>
              <li>Credit cards</li>
              <li>Investment accounts</li>
              <li>Loan accounts</li>
              <li>Mortgage accounts</li>
            </ul>
            <p className="mb-4">If you need to connect more than 50 accounts, contact our support team for assistance.</p>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">8. Troubleshooting Account Issues</h2>
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Account Won't Connect</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Verify your bank supports automatic connections</li>
                  <li>Check your internet connection</li>
                  <li>Try a different browser</li>
                  <li>Clear browser cache and cookies</li>
                  <li>Contact support if issues persist</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Account Not Syncing</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Wait 24 hours for initial sync to complete</li>
                  <li>Manually refresh the account</li>
                  <li>Disconnect and reconnect the account</li>
                  <li>Verify your bank password hasn't changed</li>
                  <li>Check if your account is still active</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Need More Help?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>See our <a href="/help/connecting-accounts" className="text-blue-600 hover:underline">Connecting Accounts guide</a></li>
              <li>Contact support at <a href="mailto:privacy.savecash@gmail.com" className="text-blue-600 hover:underline">privacy.savecash@gmail.com</a></li>
              <li>Visit our <a href="/help" className="text-blue-600 hover:underline">Help Center</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

