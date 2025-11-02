import React from "react";
import { ArrowLeft, Download, Trash2, FileText, AlertCircle } from "lucide-react";

export default function DataExportDeletion() {
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
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Exporting and Deleting Your Data</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Learn how to export your SaveCash data or permanently delete your account and all associated information.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. Exporting Your Data</h2>
            <p className="mb-4">You have the right to access all data SaveCash has about you. Exporting allows you to download your complete data profile.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.1 What Gets Exported</h3>
            <p className="mb-4">Your export includes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>All transaction history</li>
              <li>Account information and connections</li>
              <li>Financial goals and progress</li>
              <li>Savings opportunities and results</li>
              <li>Billing and subscription history</li>
              <li>Account settings and preferences</li>
              <li>Communication history (support tickets, emails)</li>
              <li>Analytics data (if applicable)</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.2 How to Export</h3>
            <p className="mb-4">Export your data:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Account Settings → Privacy</li>
              <li>Click "Export My Data"</li>
              <li>Select export format:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>JSON (structured data, best for developers)</li>
                  <li>CSV (spreadsheet format, best for analysis)</li>
                  <li>PDF (human-readable report)</li>
                </ul>
              </li>
              <li>Choose data categories to include (or select all)</li>
              <li>Set date range (all time or specific period)</li>
              <li>Click "Request Export"</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.3 Export Timeline</h3>
            <p className="mb-4">Export processing:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Small accounts: Usually ready within 24 hours</li>
              <li>Large accounts (extensive history): May take up to 7 days</li>
              <li>You'll receive email notification when ready</li>
              <li>Download link valid for 7 days</li>
              <li>Can request new export anytime</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.4 Downloading Your Export</h3>
            <p className="mb-4">Once export is ready:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Check email for notification</li>
              <li>Click download link (or go to Privacy Settings)</li>
              <li>Verify your identity if prompted</li>
              <li>Download file to secure location</li>
              <li>Store securely (encrypted if possible)</li>
            </ol>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Understanding Your Export</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.1 Export File Structure</h3>
            <p className="mb-4">Your export is organized by:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Data categories (transactions, accounts, goals, etc.)</li>
              <li>Chronological order (oldest to newest, or newest to oldest)</li>
              <li>Metadata included (timestamps, IDs, statuses)</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.2 File Formats Explained</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">JSON Format</p>
                <p className="text-sm text-gray-600">Machine-readable, structured data. Best for developers or importing into other tools.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">CSV Format</p>
                <p className="text-sm text-gray-600">Spreadsheet-compatible. Best for analysis in Excel, Google Sheets, or data tools.</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">PDF Format</p>
                <p className="text-sm text-gray-600">Human-readable report. Best for printing, sharing, or simple review.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. Partial Data Export</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.1 Export Specific Categories</h3>
            <p className="mb-4">You can export only what you need:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Transactions only</li>
              <li>Account information only</li>
              <li>Goals and progress only</li>
              <li>Billing history only</li>
              <li>Any combination of categories</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.2 Date Range Exports</h3>
            <p className="mb-4">Limit export to specific time periods:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Last 30 days</li>
              <li>Last year</li>
              <li>Custom date range</li>
              <li>Specific month or quarter</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. Deleting Your Account</h2>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <p className="font-semibold text-gray-900 mb-2">⚠️ Permanent Action</p>
              <p className="text-sm">Account deletion is permanent and cannot be undone. All your data will be permanently deleted.</p>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 What Gets Deleted</h3>
            <p className="mb-4">When you delete your account:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>All account information (email, name, preferences)</li>
              <li>All transaction history</li>
              <li>All connected bank accounts (disconnected)</li>
              <li>All financial goals and progress</li>
              <li>All savings data and opportunities</li>
              <li>Billing and subscription information</li>
              <li>Support ticket history</li>
              <li>All settings and customizations</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 What Happens to Your Subscription</h3>
            <p className="mb-4">Account deletion also:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cancels your subscription immediately</li>
              <li>No refunds for unused subscription time</li>
              <li>You'll receive final invoice confirmation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. How to Delete Your Account</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.1 Before Deleting</h3>
            <p className="mb-4">Important steps before deletion:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li><strong>Export your data first</strong> (if you want a copy)</li>
              <li>Disconnect all bank accounts (optional, but recommended)</li>
              <li>Cancel any active subscriptions</li>
              <li>Download any invoices or documents you need</li>
              <li>Review what will be lost</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.2 Deletion Process</h3>
            <p className="mb-4">To delete your account:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Account Settings → Privacy</li>
              <li>Scroll to "Delete Account" section</li>
              <li>Click "Delete My Account"</li>
              <li>Read the warning carefully</li>
              <li>Enter your password to confirm</li>
              <li>Complete 2FA verification if enabled</li>
              <li>Type "DELETE" to confirm final action</li>
              <li>Click "Permanently Delete Account"</li>
            </ol>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
              <p className="text-sm"><strong>Note:</strong> There's a 7-day grace period. You can cancel deletion within 7 days by logging back in.</p>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.3 Deletion Timeline</h3>
            <p className="mb-4">What happens after deletion request:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Immediately:</strong> Account access revoked, subscription cancelled</li>
              <li><strong>Within 24 hours:</strong> Data deletion begins</li>
              <li><strong>Within 7 days:</strong> Primary data deleted</li>
              <li><strong>Within 90 days:</strong> All backups deleted</li>
              <li>You'll receive confirmation when complete</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Partial Data Deletion</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.1 Delete Specific Data</h3>
            <p className="mb-4">You can delete specific data without deleting your account:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Delete old transactions (older than X months)</li>
              <li>Remove specific connected accounts</li>
              <li>Delete completed goals</li>
              <li>Clear analytics and usage data</li>
              <li>Remove specific categories of information</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.2 How to Delete Specific Data</h3>
            <p className="mb-4">To delete specific data:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Go to Account Settings → Privacy</li>
              <li>Click "Manage My Data"</li>
              <li>Select data category to delete</li>
              <li>Set criteria (date range, specific items)</li>
              <li>Confirm deletion</li>
            </ol>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Data Retention After Deletion</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.1 Immediate Deletion</h3>
            <p className="mb-4">Deleted immediately:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Account login access</li>
              <li>Active subscriptions</li>
              <li>Account settings and preferences</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.2 Short-Term Retention</h3>
            <p className="mb-4">Retained for 7-30 days (for recovery):</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Account data (in case you want to recover)</li>
              <li>Transaction history</li>
              <li>Connected account information</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.3 Backup Deletion</h3>
            <p className="mb-4">Backups deleted within 90 days:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All data removed from backups</li>
              <li>No recovery possible after this period</li>
              <li>You'll receive final confirmation email</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">8. Recovery After Deletion</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8.1 7-Day Grace Period</h3>
            <p className="mb-4">You can recover your account:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Within 7 days of deletion request</li>
              <li>Log in with your credentials</li>
              <li>Click "Restore Account"</li>
              <li>All data restored immediately</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8.2 After Grace Period</h3>
            <p className="mb-4">After 7 days:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Recovery may not be possible</li>
              <li>Contact support to inquire</li>
              <li>May need to create new account</li>
              <li>Previous data cannot be restored</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">9. Legal Requirements</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">9.1 Data We Must Retain</h3>
            <p className="mb-4">Some data may be retained for legal/compliance:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Billing records (tax compliance, 7 years)</li>
              <li>Fraud investigation records</li>
              <li>Legal dispute records</li>
              <li>Regulatory requirement data</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">9.2 Your Rights</h3>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request deletion of personal data</li>
              <li>Export all your data</li>
              <li>Know what data we have</li>
              <li>Object to data processing</li>
            </ul>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">10. Need Help?</h2>
            <p className="mb-4">If you have questions about exporting or deleting your data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: <a href="mailto:privacy@savecash.com" className="text-blue-600 hover:underline">privacy@savecash.com</a></li>
              <li>Contact support: <a href="mailto:privacy.savecash@gmail.com" className="text-blue-600 hover:underline">privacy.savecash@gmail.com</a></li>
              <li>See our <a href="/help/data-protection" className="text-blue-600 hover:underline">Data Protection guide</a></li>
              <li>Visit our <a href="/help" className="text-blue-600 hover:underline">Help Center</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

