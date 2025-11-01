import React from "react";
import { ArrowLeft, Smartphone, Bell, BarChart3, Shield, Zap } from "lucide-react";

export default function MobileApp() {
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
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Using the Mobile App</h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            The SaveCash mobile app puts your savings at your fingertips. Get real-time notifications, manage your account on the go, and never miss a savings opportunity. This comprehensive guide covers everything you need to know about using the SaveCash mobile app.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
            
            {/* Section 1: Getting the App */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. Downloading and Installing the App</h2>
              
              <p className="mb-4">
                The SaveCash mobile app is available for both iOS and Android devices. Getting started is quick and easy.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.1 iOS (iPhone and iPad)</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <p className="mb-3">
                  <strong>Requirements:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
                  <li>iOS 14.0 or later</li>
                  <li>iPhone 6s or newer, or iPad (5th generation) or newer</li>
                  <li>Active internet connection</li>
                </ul>
                <p className="mb-3">
                  <strong>Installation Steps:</strong>
                </p>
                <ol className="list-decimal pl-6 space-y-1 text-sm">
                  <li>Open the App Store on your iPhone or iPad</li>
                  <li>Search for "SaveCash"</li>
                  <li>Tap "Get" or the download button</li>
                  <li>Authenticate with Face ID, Touch ID, or your Apple ID password</li>
                  <li>Wait for the app to download and install</li>
                  <li>Tap "Open" or find the SaveCash icon on your home screen</li>
                </ol>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.2 Android</h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <p className="mb-3">
                  <strong>Requirements:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
                  <li>Android 8.0 (Oreo) or later</li>
                  <li>2GB RAM minimum (4GB recommended)</li>
                  <li>Active internet connection</li>
                </ul>
                <p className="mb-3">
                  <strong>Installation Steps:</strong>
                </p>
                <ol className="list-decimal pl-6 space-y-1 text-sm">
                  <li>Open the Google Play Store on your Android device</li>
                  <li>Search for "SaveCash"</li>
                  <li>Tap "Install"</li>
                  <li>Review permissions and tap "Accept"</li>
                  <li>Wait for the app to download and install</li>
                  <li>Tap "Open" or find the SaveCash icon in your app drawer</li>
                </ol>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.3 First Launch</h3>
              <p className="mb-4">
                When you first open the app, you'll be asked to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Log in with your SaveCash account credentials (same as web)</li>
                <li>Enable biometric authentication (Face ID, Touch ID, or fingerprint) for quick access</li>
                <li>Allow notifications (highly recommended for real-time alerts)</li>
                <li>Review and accept terms of service</li>
              </ul>
            </section>

            {/* Section 2: App Features */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Key Features of the Mobile App</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border border-purple-200 rounded-lg p-6 bg-purple-50">
                  <Smartphone className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Dashboard Overview</h3>
                  <p className="text-sm">
                    See your total savings, active opportunities, and account balances at a glance. Swipe between different views for detailed insights.
                  </p>
                </div>
                
                <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
                  <Bell className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Notifications</h3>
                  <p className="text-sm">
                    Get instant alerts for savings opportunities, bill due dates, fee risks, and account updates. Customize which notifications you receive.
                  </p>
                </div>
                
                <div className="border border-green-200 rounded-lg p-6 bg-green-50">
                  <BarChart3 className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Savings Analytics</h3>
                  <p className="text-sm">
                    View detailed breakdowns of your savings by category, time period, and source. Track progress toward your financial goals.
                  </p>
                </div>
                
                <div className="border border-orange-200 rounded-lg p-6 bg-orange-50">
                  <Shield className="w-8 h-8 text-orange-600 mb-3" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Actions</h3>
                  <p className="text-sm">
                    Approve savings opportunities, review recommendations, and manage your account settings—all with just a few taps.
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2.1 Navigation</h3>
              <p className="mb-4">
                The SaveCash app uses an intuitive bottom navigation bar with five main sections:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6 py-3">
                  <h4 className="font-semibold text-gray-900 mb-1">Home</h4>
                  <p className="text-sm">
                    Your main dashboard showing savings overview, recent activity, and quick stats.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6 py-3">
                  <h4 className="font-semibold text-gray-900 mb-1">Opportunities</h4>
                  <p className="text-sm">
                    Browse active and pending savings opportunities. Filter by type, amount, or status.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6 py-3">
                  <h4 className="font-semibold text-gray-900 mb-1">Goals</h4>
                  <p className="text-sm">
                    View all your financial goals, track progress, and create new goals.
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6 py-3">
                  <h4 className="font-semibold text-gray-900 mb-1">Accounts</h4>
                  <p className="text-sm">
                    Manage connected accounts, view balances, and review transaction history.
                  </p>
                </div>
                
                <div className="border-l-4 border-pink-500 pl-6 py-3">
                  <h4 className="font-semibold text-gray-900 mb-1">More</h4>
                  <p className="text-sm">
                    Access settings, help center, support, and account management options.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Notifications */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. Managing Notifications</h2>
              
              <p className="mb-4">
                Notifications are one of the most powerful features of the SaveCash mobile app. They keep you informed and help you act on opportunities quickly.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.1 Types of Notifications</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Savings Opportunities</h4>
                  <p className="text-sm mb-2">
                    Alerts when SaveCash identifies new ways to save:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Subscription optimizations</li>
                    <li>Bill negotiation opportunities</li>
                    <li>Fee prevention alerts</li>
                    <li>Cashback offers</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Account Alerts</h4>
                  <p className="text-sm mb-2">
                    Important account updates:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Bill due date reminders</li>
                    <li>Low balance warnings</li>
                    <li>Overdraft risk alerts</li>
                    <li>Account connection status</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Goal Progress</h4>
                  <p className="text-sm mb-2">
                    Updates on your financial goals:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Milestone achievements</li>
                    <li>Monthly progress reports</li>
                    <li>Goal completion celebrations</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">System Updates</h4>
                  <p className="text-sm mb-2">
                    App and service updates:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>New features and improvements</li>
                    <li>Maintenance notifications</li>
                    <li>Security updates</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3.2 Customizing Notifications</h3>
              <p className="mb-4">
                You have full control over which notifications you receive:
              </p>
              
              <ol className="list-decimal pl-6 space-y-2 mb-4">
                <li>Open the SaveCash app</li>
                <li>Go to "More" → "Settings" → "Notifications"</li>
                <li>Toggle notifications on or off for each category</li>
                <li>Set notification frequency (instant, daily digest, weekly summary)</li>
                <li>Choose notification sound and vibration preferences</li>
              </ol>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3.3 Quick Actions from Notifications</h3>
              <p className="mb-4">
                Many notifications include quick actions you can take directly:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Swipe to approve:</strong> Approve savings opportunities right from the notification</li>
                <li><strong>Tap to view:</strong> Open the app directly to the relevant section</li>
                <li><strong>Snooze:</strong> Remind me later if you're not ready to act</li>
                <li><strong>Dismiss:</strong> Mark as read if you don't need to take action</li>
              </ul>
            </section>

            {/* Section 4: Using the Dashboard */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. Navigating the Dashboard</h2>
              
              <p className="mb-4">
                The dashboard is your command center. Here's how to make the most of it:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 Savings Overview Card</h3>
              <p className="mb-4">
                At the top of the dashboard, you'll see:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Total savings (all-time, this month, today)</li>
                <li>Active opportunities count</li>
                <li>Goal progress summary</li>
                <li>Quick stats (savings rate, average per month)</li>
              </ul>
              <p>
                Tap on any metric to see detailed breakdowns.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 Recent Activity</h3>
              <p className="mb-4">
                Scroll down to see your recent savings activity:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Recently completed savings</li>
                <li>New opportunities identified</li>
                <li>Account updates</li>
                <li>Goal milestones reached</li>
              </ul>
              <p>
                Tap any activity item to view full details.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.3 Quick Actions</h3>
              <p className="mb-4">
                The dashboard includes quick action buttons for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Review pending opportunities</li>
                <li>Create a new goal</li>
                <li>Connect a new account</li>
                <li>View detailed analytics</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.4 Pull to Refresh</h3>
              <p className="mb-4">
                Pull down on the dashboard to manually refresh your data. This is useful when you want to see the latest updates immediately.
              </p>
            </section>

            {/* Section 5: Managing Opportunities */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. Managing Savings Opportunities</h2>
              
              <p className="mb-4">
                The Opportunities section is where you'll interact with most of SaveCash's savings recommendations.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.1 Viewing Opportunities</h3>
              <p className="mb-4">
                Opportunities are organized by status:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-6 py-3">
                  <h4 className="font-semibold text-gray-900 mb-1">Pending Review</h4>
                  <p className="text-sm">
                    New opportunities waiting for your approval. Tap to view details and take action.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6 py-3">
                  <h4 className="font-semibold text-gray-900 mb-1">In Progress</h4>
                  <p className="text-sm">
                    Opportunities that SaveCash is actively working on. Track their progress here.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6 py-3">
                  <h4 className="font-semibold text-gray-900 mb-1">Completed</h4>
                  <p className="text-sm">
                    Successfully implemented savings. Review what was saved and when.
                  </p>
                </div>
                
                <div className="border-l-4 border-gray-400 pl-6 py-3">
                  <h4 className="font-semibold text-gray-900 mb-1">Declined</h4>
                  <p className="text-sm">
                    Opportunities you chose not to pursue. You can revisit these anytime.
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5.2 Reviewing an Opportunity</h3>
              <p className="mb-4">
                When you tap on an opportunity, you'll see:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Potential savings amount</li>
                <li>Detailed explanation of the opportunity</li>
                <li>What action will be taken (if any)</li>
                <li>Timeline for implementation</li>
                <li>Any risks or considerations</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5.3 Taking Action</h3>
              <p className="mb-4">
                For each opportunity, you can:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Approve:</strong> Let SaveCash proceed with the savings</li>
                <li><strong>Decline:</strong> Pass on this opportunity</li>
                <li><strong>Snooze:</strong> Remind me later (1 day, 1 week, 1 month)</li>
                <li><strong>Request More Info:</strong> Get additional details before deciding</li>
              </ul>
            </section>

            {/* Section 6: Goals on Mobile */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Managing Goals on Mobile</h2>
              
              <p className="mb-4">
                The mobile app provides full goal management functionality:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.1 Viewing Goals</h3>
              <p className="mb-4">
                The Goals section shows:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>All your active goals with progress bars</li>
                <li>Completed goals</li>
                <li>Paused goals</li>
                <li>Goal summaries (amount saved, percentage complete, days remaining)</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.2 Creating Goals</h3>
              <p className="mb-4">
                Creating a goal on mobile is quick:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mb-4">
                <li>Tap the "+" button or "Create Goal"</li>
                <li>Select goal type or choose custom</li>
                <li>Enter target amount</li>
                <li>Set target date</li>
                <li>Choose priority level</li>
                <li>Select funding accounts</li>
                <li>Review and create</li>
              </ol>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.3 Goal Details</h3>
              <p className="mb-4">
                Tap any goal to see:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Detailed progress visualization</li>
                <li>Savings history and trends</li>
                <li>Contributions breakdown</li>
                <li>Edit goal settings</li>
                <li>View related opportunities</li>
              </ul>
            </section>

            {/* Section 7: Account Management */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Managing Accounts on Mobile</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.1 Viewing Connected Accounts</h3>
              <p className="mb-4">
                The Accounts section displays:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>All connected accounts with current balances</li>
                <li>Account status (connected, syncing, error)</li>
                <li>Last sync time</li>
                <li>Quick account actions</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.2 Connecting New Accounts</h3>
              <p className="mb-4">
                To connect a new account:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mb-4">
                <li>Tap "Add Account" or the "+" button</li>
                <li>Search for your financial institution</li>
                <li>Authenticate with your bank (using mobile browser or in-app)</li>
                <li>Select which accounts to connect</li>
                <li>Confirm and wait for initial sync</li>
              </ol>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.3 Refreshing Accounts</h3>
              <p className="mb-4">
                To manually refresh an account:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tap on the account</li>
                <li>Pull down to refresh or tap "Sync Now"</li>
                <li>Wait for the sync to complete</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.4 Viewing Transactions</h3>
              <p className="mb-4">
                Tap any account to view:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Recent transactions</li>
                <li>Transaction history (with filters)</li>
                <li>Spending by category</li>
                <li>Transaction details</li>
              </ul>
            </section>

            {/* Section 8: Security & Privacy */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">8. Security and Privacy on Mobile</h2>
              
              <p className="mb-4">
                Mobile security is just as important as web security. SaveCash implements multiple layers of protection:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8.1 Biometric Authentication</h3>
              <p className="mb-4">
                Enable Face ID, Touch ID, or fingerprint login for quick and secure access:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Go to Settings → Security → Enable Biometric Login</li>
                <li>Follow the prompts to set up</li>
                <li>You can still use password if biometric fails</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8.2 Auto-Lock</h3>
              <p className="mb-4">
                The app automatically locks after a period of inactivity:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Default: 5 minutes of inactivity</li>
                <li>Customizable: 1, 5, 15, or 30 minutes</li>
                <li>Immediate lock available in settings</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8.3 Secure Connection</h3>
              <p className="mb-4">
                All app data is transmitted over encrypted connections:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>256-bit SSL encryption</li>
                <li>Certificate pinning for additional security</li>
                <li>No data stored in plain text on device</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8.4 Privacy Settings</h3>
              <p className="mb-4">
                Control your privacy:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Disable biometric authentication if desired</li>
                <li>Control what data is cached locally</li>
                <li>Manage location permissions (for ATM finder)</li>
                <li>Review connected devices</li>
              </ul>
            </section>

            {/* Section 9: Tips & Best Practices */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">9. Tips for Best Mobile Experience</h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Enable All Notifications</h3>
                  <p className="text-sm">
                    Don't miss savings opportunities—allow notifications so you can act on them quickly.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Use Biometric Login</h3>
                  <p className="text-sm">
                    Faster access and better security—enable Face ID, Touch ID, or fingerprint authentication.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Check Daily</h3>
                  <p className="text-sm">
                    Make it a habit to check the app daily. Quick reviews help you stay on top of opportunities and progress.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-red-50 border border-pink-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Keep App Updated</h3>
                  <p className="text-sm">
                    Always use the latest version for security updates, bug fixes, and new features.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Use Quick Actions</h3>
                  <p className="text-sm">
                    Take advantage of notification quick actions and swipe gestures for faster workflow.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10: Troubleshooting */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">10. Troubleshooting Common Issues</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">App Won't Open or Crashes</h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Force close and restart the app</li>
                    <li>Update to the latest version</li>
                    <li>Restart your device</li>
                    <li>Clear app cache (Settings → Apps → SaveCash → Clear Cache)</li>
                    <li>Reinstall the app if issues persist</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Not Receiving Notifications</h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Check app notification settings</li>
                    <li>Verify device notification permissions</li>
                    <li>Check "Do Not Disturb" mode settings</li>
                    <li>Ensure you're logged in</li>
                    <li>Review notification preferences in app settings</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Accounts Not Syncing</h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Check your internet connection</li>
                    <li>Pull down to manually refresh</li>
                    <li>Disconnect and reconnect the account</li>
                    <li>Update app to latest version</li>
                    <li>Contact support if issue persists</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Slow Performance</h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Close other apps to free up memory</li>
                    <li>Clear app cache</li>
                    <li>Update to latest app version</li>
                    <li>Check available device storage</li>
                    <li>Restart your device</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 11: Next Steps */}
            <section className="scroll-mt-8 border-t pt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">11. Get Started Today</h2>
              
              <p className="mb-4">
                The SaveCash mobile app puts powerful savings tools in your pocket. Download it today and start saving on the go!
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
                    Complete your setup and learn the basics.
                  </p>
                </a>
                
                <a 
                  href="/help"
                  className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                    More Help Resources →
                  </h3>
                  <p className="text-sm text-gray-600">
                    Browse all help center articles.
                  </p>
                </a>
              </div>
            </section>

        </div>
      </div>
    </div>
  );
}

