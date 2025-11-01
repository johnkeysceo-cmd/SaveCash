import React from "react";
import { ArrowLeft, Settings, Eye, Bell, Share2 } from "lucide-react";

export default function PrivacySettings() {
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
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Privacy Settings and Controls</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Control your privacy with SaveCash. Learn how to manage what data is collected, who can see it, and how it's used.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. Accessing Privacy Settings</h2>
            <p className="mb-4">Manage your privacy preferences:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Account Settings</li>
              <li>Click "Privacy" tab</li>
              <li>Review and adjust settings</li>
              <li>Changes save automatically</li>
            </ol>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Data Collection Preferences</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.1 Required Data</h3>
            <p className="mb-4">Some data is required for SaveCash to function:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Transaction data (for savings analysis)</li>
              <li>Account balances (for financial tracking)</li>
              <li>Bill information (for optimization)</li>
              <li>These cannot be disabled without affecting functionality</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.2 Optional Data</h3>
            <p className="mb-4">You can opt out of:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Usage analytics (how you use the app)</li>
              <li>Marketing communications</li>
              <li>Product improvement data</li>
              <li>Third-party data sharing (when applicable)</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.3 Location Data</h3>
            <p className="mb-4">Location settings:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Optional: Used only for fraud detection</li>
              <li>Never shared with third parties</li>
              <li>Can be disabled anytime</li>
              <li>Not required for core functionality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. Sharing and Visibility</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.1 Profile Visibility</h3>
            <p className="mb-4">Control who can see your information:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Profile information (name, email)</li>
              <li>Public profile settings (if applicable)</li>
              <li>Community features participation</li>
              <li>Anonymous data contribution</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.2 Data Sharing</h3>
            <p className="mb-4">Control third-party sharing:</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
              <p className="text-sm mb-2"><strong>Important:</strong> We never sell your data. These settings control sharing with service providers only.</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Analytics providers (anonymized usage data)</li>
                <li>Banking partners (for account connections)</li>
                <li>Customer support tools (for helping you)</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.3 Aggregated Data</h3>
            <p className="mb-4">Anonymous, aggregated data used for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Industry benchmarks (e.g., "average savings rate")</li>
              <li>Product improvements</li>
              <li>Research and analysis</li>
              <li>Never personally identifiable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. Notification Preferences</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 Email Notifications</h3>
            <p className="mb-4">Control email types:</p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="savings-alerts" defaultChecked />
                <label htmlFor="savings-alerts" className="text-sm">Savings opportunity alerts</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="bill-reminders" defaultChecked />
                <label htmlFor="bill-reminders" className="text-sm">Bill payment reminders</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="goal-updates" defaultChecked />
                <label htmlFor="goal-updates" className="text-sm">Goal progress updates</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="security-alerts" defaultChecked />
                <label htmlFor="security-alerts" className="text-sm">Security and account alerts</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="marketing" />
                <label htmlFor="marketing" className="text-sm">Marketing and promotional emails</label>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 Push Notifications</h3>
            <p className="mb-4">Mobile app notification controls:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Enable/disable all push notifications</li>
              <li>Choose notification types</li>
              <li>Set quiet hours</li>
              <li>Control notification frequency</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.3 SMS Notifications</h3>
            <p className="mb-4">Text message preferences:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Opt in/out of SMS alerts</li>
              <li>Critical alerts only option</li>
              <li>Frequency limits</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. Account Privacy</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.1 Profile Information</h3>
            <p className="mb-4">Control profile visibility:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Display name (can use pseudonym)</li>
              <li>Email visibility</li>
              <li>Profile picture</li>
              <li>Bio and other public information</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.2 Activity Visibility</h3>
            <p className="mb-4">Control what activity is visible:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Recent activity (can hide)</li>
              <li>Achievements and milestones</li>
              <li>Community participation</li>
              <li>Social features (if applicable)</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.3 Search Visibility</h3>
            <p className="mb-4">Control discoverability:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Searchable by email</li>
              <li>Searchable by username</li>
              <li>Appear in user searches</li>
              <li>Recommendation algorithms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Data Retention</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.1 Retention Preferences</h3>
            <p className="mb-4">Choose how long data is kept:</p>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Keep While Account Active</p>
                <p className="text-sm text-gray-600">Data retained while you use SaveCash (recommended for best experience)</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">1 Year Retention</p>
                <p className="text-sm text-gray-600">Data deleted after 1 year of inactivity</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Delete Immediately</p>
                <p className="text-sm text-gray-600">Request immediate deletion (may affect functionality)</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.2 Automatic Deletion</h3>
            <p className="mb-4">Automatically delete:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Old transaction data (set retention period)</li>
              <li>Completed goals after X months</li>
              <li>Inactive account data</li>
              <li>Old logs and analytics data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Cookie and Tracking</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.1 Cookie Preferences</h3>
            <p className="mb-4">Control cookie usage:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Essential cookies (required for functionality)</li>
              <li>Analytics cookies (track usage patterns)</li>
              <li>Marketing cookies (if applicable)</li>
              <li>Third-party cookies</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.2 Do Not Track</h3>
            <p className="mb-4">Respect browser settings:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>We honor "Do Not Track" browser signals</li>
              <li>Reduces tracking when enabled</li>
              <li>Essential functionality still works</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.3 Third-Party Tracking</h3>
            <p className="mb-4">Control external tracking:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Analytics services (Google Analytics, etc.)</li>
              <li>Advertising platforms</li>
              <li>Social media trackers</li>
              <li>Disable individually or all at once</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">8. Exporting and Deleting Data</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8.1 Export Your Data</h3>
            <p className="mb-4">Download all your data:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Privacy Settings</li>
              <li>Click "Export My Data"</li>
              <li>Choose export format (JSON, CSV)</li>
              <li>Select data categories to include</li>
              <li>Request export (delivered within 30 days)</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8.2 Delete Account</h3>
            <p className="mb-4">Permanently delete account:</p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
              <p className="text-sm mb-2"><strong>Warning:</strong> This action is permanent and cannot be undone.</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>All account data deleted</li>
                <li>All connected accounts disconnected</li>
                <li>Subscription cancelled</li>
                <li>Data removed from backups within 90 days</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8.3 Partial Deletion</h3>
            <p className="mb-4">Delete specific data categories:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Transaction history (older than X months)</li>
              <li>Goal data</li>
              <li>Analytics data</li>
              <li>Profile information</li>
            </ul>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">9. Privacy Tips</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Review Settings Regularly</h3>
                <p className="text-sm">Check privacy settings quarterly to ensure they still match your preferences.</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Use Strong Passwords</h3>
                <p className="text-sm">A strong account password is your first line of defense.</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Read Privacy Updates</h3>
                <p className="text-sm">We'll notify you of significant privacy policy changes—review them when they occur.</p>
              </div>
            </div>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Need More Help?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>See our <a href="/help/data-protection" className="text-blue-600 hover:underline">Data Protection guide</a></li>
              <li>Contact privacy team: <a href="mailto:privacy@savecash.com" className="text-blue-600 hover:underline">privacy@savecash.com</a></li>
              <li>Read our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a></li>
              <li>Visit our <a href="/help" className="text-blue-600 hover:underline">Help Center</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

