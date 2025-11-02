import React from "react";
import { ArrowLeft, User, Mail, Bell, Shield } from "lucide-react";

export default function UpdatingProfile() {
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
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Updating Your Profile and Preferences</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Learn how to update your profile information, customize preferences, and manage your SaveCash account settings.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. Accessing Your Profile Settings</h2>
            <p className="mb-4">To update your profile, navigate to your account settings:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Click on your profile icon in the top right corner of the dashboard</li>
              <li>Select "Account Settings" or "Profile" from the dropdown menu</li>
              <li>You'll see various sections: Profile, Preferences, Security, and Notifications</li>
            </ol>
            <p>You can also access settings directly from the mobile app by tapping the menu icon and selecting "Settings".</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Updating Personal Information</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.1 Changing Your Name</h3>
            <p className="mb-4">To update your name:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Profile Settings → Personal Information</li>
              <li>Click "Edit" next to your name</li>
              <li>Enter your new name</li>
              <li>Click "Save Changes"</li>
            </ol>
            <p className="mb-4"><strong>Note:</strong> Your name must match the name on your connected bank accounts for optimal matching. If you've legally changed your name, you may need to update it with your bank as well.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.2 Changing Your Email Address</h3>
            <p className="mb-4">Updating your email requires verification:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Profile Settings → Email</li>
              <li>Click "Change Email"</li>
              <li>Enter your new email address</li>
              <li>Enter your current password to confirm</li>
              <li>Click "Send Verification Email"</li>
              <li>Check your new email inbox for the verification link</li>
              <li>Click the verification link to complete the change</li>
            </ol>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
              <p className="text-sm"><strong>Important:</strong> After changing your email, you'll need to verify the new address before it becomes active. Your old email will remain active until verification is complete.</p>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.3 Updating Phone Number</h3>
            <p className="mb-4">To add or update your phone number:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Profile Settings → Contact Information</li>
              <li>Click "Add Phone" or "Edit" next to your existing number</li>
              <li>Enter your phone number with country code</li>
              <li>Choose your preferred verification method (SMS or call)</li>
              <li>Enter the verification code sent to your phone</li>
              <li>Click "Save"</li>
            </ol>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. Managing Preferences</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.1 Financial Preferences</h3>
            <p className="mb-4">Customize how SaveCash works for you:</p>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-900 mb-2">Savings Preferences</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Default savings goals and priorities</li>
                  <li>Preferred savings methods (automatic vs manual approval)</li>
                  <li>Minimum savings threshold alerts</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-900 mb-2">Budget Preferences</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Monthly spending limits by category</li>
                  <li>Budget reset frequency</li>
                  <li>Overspending alert thresholds</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-900 mb-2">Investment Preferences</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Risk tolerance level</li>
                  <li>Investment goals and timeline</li>
                  <li>Automatic investment rules</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.2 Display Preferences</h3>
            <p className="mb-4">Customize your dashboard appearance:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Currency:</strong> Set your preferred currency for all displays</li>
              <li><strong>Date Format:</strong> Choose between MM/DD/YYYY, DD/MM/YYYY, or YYYY-MM-DD</li>
              <li><strong>Time Zone:</strong> Set your local time zone for accurate timestamps</li>
              <li><strong>Number Format:</strong> Choose how numbers are displayed (e.g., 1,000 vs 1000)</li>
              <li><strong>Theme:</strong> Light, dark, or system preference</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. Notification Preferences</h2>
            <p className="mb-4">Control when and how you receive notifications from SaveCash:</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 Email Notifications</h3>
            <p className="mb-4">Manage which emails you receive:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Account Emails</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Account security alerts</li>
                  <li>Password changes</li>
                  <li>Email address updates</li>
                  <li>Login notifications</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Savings Emails</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>New savings opportunities</li>
                  <li>Savings implemented successfully</li>
                  <li>Monthly savings summary</li>
                  <li>Goal progress updates</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Alert Emails</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Bill due date reminders</li>
                  <li>Low balance warnings</li>
                  <li>Unusual activity alerts</li>
                  <li>Fee prevention notifications</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Marketing Emails</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Product updates</li>
                  <li>Tips and best practices</li>
                  <li>Feature announcements</li>
                  <li>Educational content</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 Push Notifications (Mobile)</h3>
            <p className="mb-4">Control push notifications on your mobile device:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Enable/disable push notifications entirely</li>
              <li>Customize notification types (savings, alerts, goals)</li>
              <li>Set quiet hours (when notifications are paused)</li>
              <li>Choose notification sound and vibration preferences</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.3 SMS Notifications</h3>
            <p className="mb-4">If you've added a phone number, you can enable SMS for critical alerts:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Security alerts (suspicious login attempts)</li>
              <li>Critical account changes</li>
              <li>High-priority savings opportunities</li>
              <li>Payment failure notifications</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">SMS notifications are limited to critical alerts to avoid message fatigue. Standard and premium SMS rates may apply.</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. Privacy and Data Preferences</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.1 Data Sharing Preferences</h3>
            <p className="mb-4">Control how your data is used:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Analytics:</strong> Allow SaveCash to use anonymized data to improve services</li>
              <li><strong>Personalization:</strong> Enable personalized recommendations based on your spending</li>
              <li><strong>Research:</strong> Opt into contributing to financial research (fully anonymized)</li>
              <li><strong>Third-Party Sharing:</strong> Control sharing with partners (for features like credit score monitoring)</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.2 Visibility Settings</h3>
            <p className="mb-4">Control what's visible in your account:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hide account balances (shown as asterisks)</li>
              <li>Enable biometric login for quick access</li>
              <li>Auto-lock timeout settings</li>
              <li>Hide transaction details from notifications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Language and Regional Settings</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.1 Language Preferences</h3>
            <p className="mb-4">SaveCash is currently available in English, with more languages coming soon. When available, you can:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Change interface language</li>
              <li>Set language for emails and notifications</li>
              <li>Choose language for support communications</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.2 Regional Settings</h3>
            <p className="mb-4">Adjust settings based on your location:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Set your country/region</li>
              <li>Choose appropriate tax settings</li>
              <li>Enable region-specific features</li>
              <li>Access localized savings opportunities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Exporting Your Profile Data</h2>
            <p className="mb-4">You can export all your profile and preference data at any time:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Profile Settings → Privacy</li>
              <li>Click "Export My Data"</li>
              <li>Choose what to export (profile, preferences, settings)</li>
              <li>Select export format (JSON or CSV)</li>
              <li>Click "Generate Export"</li>
              <li>You'll receive an email when the export is ready (usually within 24 hours)</li>
              <li>Download the file from the link in your email</li>
            </ol>
            <p className="mb-4">Exports are available for 7 days after generation. You can request a new export at any time.</p>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">8. Best Practices</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Keep Information Current</h3>
                <p className="text-sm">Update your profile whenever your circumstances change to ensure accurate recommendations.</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Review Preferences Regularly</h3>
                <p className="text-sm">Check your preferences quarterly to ensure they still match your financial goals and lifestyle.</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Balance Notifications</h3>
                <p className="text-sm">Enable notifications for important alerts but don't overload yourself—customize to your preferences.</p>
              </div>
            </div>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Need More Help?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Visit our <a href="/help" className="text-blue-600 hover:underline">Help Center</a></li>
              <li>Contact support at <a href="mailto:privacy.savecash@gmail.com" className="text-blue-600 hover:underline">privacy.savecash@gmail.com</a></li>
              <li>Check our <a href="/faq" className="text-blue-600 hover:underline">FAQ page</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

