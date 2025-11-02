import React from "react";
import { ArrowLeft, RefreshCw, AlertCircle, Clock, CheckCircle2 } from "lucide-react";

export default function SyncProblems() {
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
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Transaction Sync Problems</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Troubleshoot issues with transaction syncing. Learn why transactions might not appear and how to fix sync problems.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. Understanding Transaction Sync</h2>
            <p className="mb-4">SaveCash automatically syncs transactions from your connected accounts. Understanding how sync works helps troubleshoot issues.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.1 Sync Frequency</h3>
            <p className="mb-4">Transactions are synced:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Automatically:</strong> Daily at scheduled times</li>
              <li><strong>After Connection:</strong> Initial sync takes 24-48 hours for complete history</li>
              <li><strong>Manually:</strong> You can trigger sync anytime</li>
              <li><strong>Real-time (where supported):</strong> Some banks support instant transaction updates</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.2 What Gets Synced</h3>
            <p className="mb-4">SaveCash syncs:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Transaction amounts and dates</li>
              <li>Merchant names and categories</li>
              <li>Account balances</li>
              <li>Pending transactions (where available)</li>
              <li>Historical transactions (up to 90 days typically)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Common Sync Issues</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.1 Transactions Not Appearing</h3>
            <p className="mb-4">If new transactions don't show up:</p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-900 mb-1">Check Sync Status</h4>
                <p className="text-sm text-gray-600">Go to Accounts and check if the account shows "Syncing" or "Error" status.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-900 mb-1">Manual Refresh</h4>
                <p className="text-sm text-gray-600">Try manually refreshing the account. Some banks update slowly.</p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-900 mb-1">Pending Transactions</h4>
                <p className="text-sm text-gray-600">Transactions may be pending and not yet posted by your bank.</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-900 mb-1">Time Delay</h4>
                <p className="text-sm text-gray-600">Banks typically take 1-3 business days to post transactions. Check back later.</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.2 Outdated Transaction Data</h3>
            <p className="mb-4">If transactions are old or missing recent activity:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>The connection may have expired (reconnect required)</li>
              <li>Your bank password may have changed</li>
              <li>There may be a temporary connection issue</li>
              <li>Try manually refreshing the account</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.3 Duplicate Transactions</h3>
            <p className="mb-4">If you see the same transaction multiple times:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>This can happen during connection re-sync</li>
              <li>SaveCash automatically detects and removes duplicates</li>
              <li>If duplicates persist, contact support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. Troubleshooting Sync Issues</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.1 Basic Troubleshooting Steps</h3>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li><strong>Check Account Connection:</strong> Verify the account shows as "Connected" in your dashboard</li>
              <li><strong>Check Last Sync Time:</strong> See when the account last synced successfully</li>
              <li><strong>Manual Refresh:</strong> Click "Refresh Now" or "Sync Account" to trigger immediate sync</li>
              <li><strong>Wait 24 Hours:</strong> Initial syncs can take up to 24-48 hours to complete</li>
              <li><strong>Check Bank Website:</strong> Verify transactions appear on your bank's website</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.2 Reconnection Process</h3>
            <p className="mb-4">If manual refresh doesn't work:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Accounts → Select the problematic account</li>
              <li>Click "Reconnect" or "Update Connection"</li>
              <li>Authenticate with your bank again</li>
              <li>Select accounts to reconnect</li>
              <li>Wait for initial sync (may take 24-48 hours)</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.3 When Sync Takes Longer</h3>
            <p className="mb-4">Sync may take longer if:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You have extensive transaction history (90+ days)</li>
              <li>You're syncing multiple accounts simultaneously</li>
              <li>Your bank has rate limits on data access</li>
              <li>It's during peak usage times</li>
            </ul>
            <p className="mt-4">Be patient—extensive history can take up to 48 hours on first sync.</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. Bank-Specific Sync Issues</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 Bank Processing Delays</h3>
            <p className="mb-4">Some banks process transactions slowly:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Credit unions may take 2-3 days to post transactions</li>
              <li>Business accounts often have longer processing times</li>
              <li>International transactions can take 5-7 days</li>
              <li>Pending authorizations may not appear until finalized</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 Bank Restrictions</h3>
            <p className="mb-4">Some banks limit transaction data access:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>May only provide last 30 days of transactions</li>
              <li>Some banks don't provide pending transaction data</li>
              <li>Investment accounts may have read-only balance access</li>
              <li>Business accounts may require special authorization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. Transaction Categorization Issues</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.1 Incorrect Categories</h3>
            <p className="mb-4">If transactions are categorized incorrectly:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You can manually recategorize transactions</li>
              <li>SaveCash learns from your corrections over time</li>
              <li>Set up rules to automatically categorize specific merchants</li>
              <li>Report persistent categorization issues to support</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.2 Missing Merchant Names</h3>
            <p className="mb-4">Some banks don't provide detailed merchant information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>May show only transaction codes or abbreviations</li>
              <li>SaveCash attempts to identify merchants from limited data</li>
              <li>You can manually add merchant names for clarity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Sync Status Indicators</h2>
            
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Connected & Syncing</h3>
                </div>
                <p className="text-sm">Account is properly connected and syncing. Transactions should appear within 24 hours of posting.</p>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-6 h-6 text-yellow-600" />
                  <h3 className="font-semibold text-gray-900">Syncing...</h3>
                </div>
                <p className="text-sm">Sync is in progress. This is normal for initial connections or after reconnection. Wait up to 48 hours.</p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-2">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <h3 className="font-semibold text-gray-900">Sync Error</h3>
                </div>
                <p className="text-sm">There's a problem with the connection. Try reconnecting the account or contact support if issues persist.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Preventing Sync Issues</h2>
            
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Keep Credentials Updated</h3>
                <p className="text-sm">When you change your bank password, reconnect the account immediately to prevent sync failures.</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Monitor Connection Status</h3>
                <p className="text-sm">Check your accounts dashboard weekly to ensure all connections remain active.</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Don't Delete and Re-add Frequently</h3>
                <p className="text-sm">Frequent disconnections and reconnections can trigger security flags with your bank. Only reconnect when necessary.</p>
              </div>
            </div>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">8. Need More Help?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>See our <a href="/help/connection-issues" className="text-blue-600 hover:underline">Connection Issues guide</a></li>
              <li>Contact support at <a href="mailto:privacy.savecash@gmail.com" className="text-blue-600 hover:underline">privacy.savecash@gmail.com</a></li>
              <li>Visit our <a href="/help" className="text-blue-600 hover:underline">Help Center</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

