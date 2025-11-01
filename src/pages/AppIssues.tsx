import React from "react";
import { ArrowLeft, Smartphone, RefreshCw, AlertCircle, Settings } from "lucide-react";

export default function AppIssues() {
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
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">App Not Working Correctly</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Troubleshoot issues with the SaveCash mobile app. Fix crashes, performance problems, and functionality issues.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. App Won't Open or Crashes</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.1 Force Close and Restart</h3>
            <p className="mb-4">The simplest fix for most app issues:</p>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-900 mb-1">iOS</h4>
                <p className="text-sm text-gray-600">Double-tap home button (or swipe up on newer iPhones), swipe up on SaveCash app, then reopen it.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-900 mb-1">Android</h4>
                <p className="text-sm text-gray-600">Open recent apps, swipe SaveCash away, then reopen the app.</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.2 Update the App</h3>
            <p className="mb-4">Ensure you're using the latest version:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Check App Store (iOS) or Google Play (Android) for updates</li>
              <li>Enable auto-updates for future updates</li>
              <li>Latest version includes bug fixes and improvements</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.3 Restart Your Device</h3>
            <p className="mb-4">Sometimes device-level issues affect apps:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Power off and restart your phone</li>
              <li>Clears temporary memory issues</li>
              <li>Resolves conflicts with other apps</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Slow Performance</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.1 Clear App Cache</h3>
            <p className="mb-4">Clearing cache can improve performance:</p>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-900 mb-1">iOS</h4>
                <p className="text-sm text-gray-600">Delete and reinstall the app (your account data is safe, stored in cloud).</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-900 mb-1">Android</h4>
                <p className="text-sm text-gray-600">Settings → Apps → SaveCash → Storage → Clear Cache</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.2 Free Up Device Storage</h3>
            <p className="mb-4">Low storage can slow apps:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Check available storage on your device</li>
              <li>Free up space by deleting unused apps or files</li>
              <li>Ensure at least 1GB free space for optimal performance</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.3 Close Other Apps</h3>
            <p className="mb-4">Running too many apps can slow performance:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Close apps you're not using</li>
              <li>SaveCash needs memory to run smoothly</li>
              <li>Restart device if still slow after closing apps</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. Features Not Working</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.1 Login Issues</h3>
            <p className="mb-4">If you can't log in:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Verify you're using correct email and password</li>
              <li>Try resetting your password</li>
              <li>Check if your account is verified (check email)</li>
              <li>Ensure you have internet connection</li>
              <li>Try logging in on web first to verify credentials</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.2 Notifications Not Working</h3>
            <p className="mb-4">If you're not receiving notifications:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Check app notification permissions in device settings</li>
              <li>Verify notifications are enabled in SaveCash settings</li>
              <li>Check "Do Not Disturb" mode</li>
              <li>Restart the app after changing notification settings</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.3 Data Not Loading</h3>
            <p className="mb-4">If data doesn't appear:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Check internet connection</li>
              <li>Pull down to refresh</li>
              <li>Wait a few moments (may be syncing)</li>
              <li>Log out and log back in</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. Reinstalling the App</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 When to Reinstall</h3>
            <p className="mb-4">Consider reinstalling if:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>App crashes repeatedly</li>
              <li>Features consistently don't work</li>
              <li>Clearing cache didn't help</li>
              <li>After a major OS update</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 How to Reinstall</h3>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Uninstall the SaveCash app</li>
              <li>Restart your device</li>
              <li>Reinstall from App Store or Google Play</li>
              <li>Log in with your existing account</li>
              <li>All your data is safely stored and will sync back</li>
            </ol>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
              <p className="text-sm"><strong>Good News:</strong> Uninstalling doesn't delete your account or data. Everything is stored securely in the cloud and will sync back when you log in.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. Device Compatibility</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.1 iOS Requirements</h3>
            <p className="mb-4">SaveCash requires:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>iOS 14.0 or later</li>
              <li>iPhone 6s or newer</li>
              <li>iPad (5th generation) or newer</li>
            </ul>
            <p className="mb-4">If your device is older, you may experience issues. Consider updating your device or using the web version.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.2 Android Requirements</h3>
            <p className="mb-4">SaveCash requires:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Android 8.0 (Oreo) or later</li>
              <li>2GB RAM minimum (4GB recommended)</li>
              <li>Latest Google Play Services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Network and Connection Issues</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.1 Internet Connection Problems</h3>
            <p className="mb-4">If the app can't connect:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Check Wi-Fi or cellular data is active</li>
              <li>Try switching between Wi-Fi and cellular</li>
              <li>Restart your router if on Wi-Fi</li>
              <li>Move to an area with better signal</li>
              <li>Check if other apps can connect to internet</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.2 VPN Interference</h3>
            <p className="mb-4">VPNs can sometimes interfere:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Try disabling VPN temporarily</li>
              <li>Some VPN servers may be blocked</li>
              <li>Switch to a different VPN server if needed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Reporting Bugs</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.1 Before Reporting</h3>
            <p className="mb-4">Try these steps first:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Update the app to the latest version</li>
              <li>Restart the app</li>
              <li>Restart your device</li>
              <li>Check if the issue persists</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.2 How to Report</h3>
            <p className="mb-4">When reporting issues, include:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Device model and OS version</li>
              <li>App version (found in Settings → About)</li>
              <li>Steps to reproduce the issue</li>
              <li>Screenshots or screen recordings if possible</li>
              <li>When the issue started</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.3 Where to Report</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: <a href="mailto:support@savecash.com" className="text-blue-600 hover:underline">support@savecash.com</a></li>
              <li>In-app: Settings → Help & Support → Report Issue</li>
              <li>Support page: <a href="/support" className="text-blue-600 hover:underline">Visit Support</a></li>
            </ul>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">8. Need More Help?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>See our <a href="/help/mobile-app" className="text-blue-600 hover:underline">Mobile App guide</a></li>
              <li>Contact support at <a href="mailto:support@savecash.com" className="text-blue-600 hover:underline">support@savecash.com</a></li>
              <li>Visit our <a href="/help" className="text-blue-600 hover:underline">Help Center</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

