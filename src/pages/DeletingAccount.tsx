import React from "react";
import { ArrowLeft, Trash2, AlertTriangle, Download, CheckCircle2 } from "lucide-react";

export default function DeletingAccount() {
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
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Deleting Your Account</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Learn how to permanently delete your SaveCash account and understand what happens to your data.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          <section>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Important: Account Deletion is Permanent</h3>
                  <p className="text-sm">Deleting your account is irreversible. All your data, including transaction history, goals, and preferences, will be permanently deleted. Make sure you've exported any data you want to keep before proceeding.</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. Before You Delete Your Account</h2>
            <p className="mb-4">Before deleting your account, consider these important steps:</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.1 Export Your Data</h3>
            <p className="mb-4">Download all your data that you may need in the future:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Account Settings → Privacy</li>
              <li>Click "Export My Data"</li>
              <li>Select all data types (transactions, goals, preferences, etc.)</li>
              <li>Choose export format (JSON recommended for complete data)</li>
              <li>Click "Generate Export"</li>
              <li>Download the file when you receive the email (usually within 24 hours)</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.2 Cancel Any Active Savings</h3>
            <p className="mb-4">Review and cancel any ongoing automated savings or subscriptions:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Stop automated savings actions</li>
              <li>Cancel any recurring bill negotiations</li>
              <li>Disable any active goals</li>
              <li>Review pending savings opportunities</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.3 Disconnect All Accounts</h3>
            <p className="mb-4">For security, disconnect all connected financial accounts before deletion. This ensures we can't access your accounts after deletion.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.4 Contact Support First (Optional)</h3>
            <p className="mb-4">If you're deleting due to issues or concerns, consider contacting support first—we may be able to help resolve your concerns without needing to delete your account.</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. How to Delete Your Account</h2>
            <p className="mb-4">To permanently delete your SaveCash account:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Log into your SaveCash account</li>
              <li>Go to Account Settings → Privacy</li>
              <li>Scroll down to "Account Deletion" section</li>
              <li>Click "Delete My Account"</li>
              <li>Read the deletion warning carefully</li>
              <li>Enter your password to confirm</li>
              <li>Type "DELETE" in the confirmation box</li>
              <li>Click "Permanently Delete Account"</li>
            </ol>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
              <p className="text-sm"><strong>Warning:</strong> This action cannot be undone. Once you confirm deletion, the process begins immediately and cannot be stopped.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. What Gets Deleted</h2>
            <p className="mb-4">When you delete your account, the following data is permanently removed:</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.1 Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Name, email address, phone number</li>
              <li>Profile information and preferences</li>
              <li>Account settings and configurations</li>
              <li>Security questions and backup codes</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.2 Financial Data</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>All transaction history</li>
              <li>Connected account information</li>
              <li>Savings records and achievements</li>
              <li>Financial goals and progress</li>
              <li>Budget information and categories</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.3 Application Data</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Notification preferences</li>
              <li>Dashboard customizations</li>
              <li>Saved reports and analytics</li>
              <li>App usage history</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. What Happens During Deletion</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 Immediate Actions</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>All active sessions are terminated immediately</li>
              <li>You'll be logged out of all devices</li>
              <li>Email notifications about the deletion are sent</li>
              <li>All connected accounts are automatically disconnected</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 Data Deletion Timeline</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Immediately (0-1 hour)</p>
                <p className="text-sm text-gray-600">Account marked for deletion, all active sessions terminated</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Within 24 hours</p>
                <p className="text-sm text-gray-600">Personal information and account settings deleted</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Within 7 days</p>
                <p className="text-sm text-gray-600">Financial data and transaction history deleted</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Within 30 days</p>
                <p className="text-sm text-gray-600">Backup systems purged, all data permanently removed</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.3 Recovery Period</h3>
            <p className="mb-4">There is a 14-day grace period after account deletion during which you can contact support to recover your account if the deletion was accidental. After 14 days, recovery is not possible.</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. What Is Retained</h2>
            <p className="mb-4">Some information may be retained for legal and compliance purposes:</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.1 Legal Requirements</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Transaction records required by law (tax records, if applicable)</li>
              <li>Records related to ongoing disputes or legal matters</li>
              <li>Compliance and audit records</li>
            </ul>
            <p className="mb-4">These records are anonymized where possible and retained only as required by law.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.2 Aggregated Data</h3>
            <p className="mb-4">We may retain anonymized, aggregated data that cannot identify you personally. This data is used for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service improvement and analytics</li>
              <li>Industry research</li>
              <li>Product development</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Alternative to Deletion</h2>
            <p className="mb-4">Instead of deleting your account, you might consider:</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.1 Account Deactivation</h3>
            <p className="mb-4">Temporarily deactivate your account:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your data remains intact</li>
              <li>You can reactivate at any time</li>
              <li>No new data is collected while deactivated</li>
              <li>All connected accounts are disconnected</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.2 Privacy Settings Adjustment</h3>
            <p className="mb-4">Adjust your privacy settings to minimize data collection:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Disable data sharing preferences</li>
              <li>Opt out of marketing communications</li>
              <li>Limit analytics tracking</li>
              <li>Remove connected accounts if desired</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.3 Disconnect Accounts Only</h3>
            <p className="mb-4">Simply disconnect all financial accounts without deleting your SaveCash account. This stops new data collection while preserving your account for potential future use.</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. After Account Deletion</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.1 Email Confirmation</h3>
            <p className="mb-4">You'll receive a confirmation email when your account deletion is initiated. This email contains:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Confirmation of deletion request</li>
              <li>Deletion timeline information</li>
              <li>Instructions for account recovery (within 14 days)</li>
              <li>Contact information if you need assistance</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.2 Creating a New Account</h3>
            <p className="mb-4">If you delete your account and later want to use SaveCash again:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You can create a new account with the same or different email</li>
              <li>Your previous data will not be available</li>
              <li>You'll need to start fresh with account setup</li>
              <li>All connected accounts will need to be reconnected</li>
            </ul>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">8. Need Help?</h2>
            <p className="mb-4">If you're considering account deletion due to issues, please contact us first:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email support at <a href="mailto:support@savecash.com" className="text-blue-600 hover:underline">support@savecash.com</a></li>
              <li>Visit our <a href="/support" className="text-blue-600 hover:underline">Support page</a></li>
              <li>Check our <a href="/help" className="text-blue-600 hover:underline">Help Center</a> for solutions to common issues</li>
            </ul>
            <p className="mt-4">We're here to help and may be able to resolve your concerns without needing to delete your account.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

