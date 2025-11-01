import React from "react";
import { ArrowLeft, TrendingDown, Search, AlertCircle, CheckCircle2 } from "lucide-react";

export default function SavingsNotDetected() {
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
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Savings Not Being Detected</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Troubleshoot why SaveCash might not be detecting savings opportunities. Learn what to check and how to ensure optimal savings detection.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. Understanding Savings Detection</h2>
            <p className="mb-4">SaveCash uses AI to analyze your financial data and identify savings opportunities. If you're not seeing opportunities, here's what might be happening.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.1 Initial Analysis Period</h3>
            <p className="mb-4">After connecting accounts, SaveCash needs time to analyze:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Initial analysis typically takes 24-48 hours</li>
              <li>We analyze 90 days of transaction history</li>
              <li>More accounts = more comprehensive analysis</li>
              <li>You'll receive a notification when analysis is complete</li>
            </ul>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <p className="text-sm"><strong>Tip:</strong> If you just connected accounts, wait 48 hours before expecting to see savings opportunities. The AI needs sufficient data to identify patterns.</p>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.2 Data Requirements</h3>
            <p className="mb-4">For effective savings detection, SaveCash needs:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>At least 30 days of transaction history</li>
              <li>Multiple transactions to identify patterns</li>
              <li>Recurring charges (subscriptions, bills)</li>
              <li>Sufficient spending data across categories</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Common Reasons for No Savings Detection</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.1 Insufficient Transaction History</h3>
            <p className="mb-4">If you have limited transaction history:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Wait for more transactions to accumulate</li>
              <li>Connect accounts with longer history</li>
              <li>Make regular transactions so patterns emerge</li>
              <li>Give SaveCash at least 30-60 days of data</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.2 Already Optimized Finances</h3>
            <p className="mb-4">If you're already financially optimized:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You may already have minimal subscriptions</li>
              <li>Your bills may already be competitively priced</li>
              <li>You might already avoid unnecessary fees</li>
              <li>This is actually good news—but SaveCash will still monitor for new opportunities</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.3 Limited Account Connections</h3>
            <p className="mb-4">More accounts = more opportunities:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Connect all your credit cards (where you spend money)</li>
              <li>Connect all bank accounts</li>
              <li>Include investment accounts if applicable</li>
              <li>More data helps AI identify more patterns</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.4 New Account Status</h3>
            <p className="mb-4">Brand new accounts need time:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Initial analysis takes 24-48 hours</li>
              <li>First opportunities may take a week to identify</li>
              <li>Savings detection improves over time as AI learns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. Checking Your Settings</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.1 Automation Settings</h3>
            <p className="mb-4">Verify your automation settings allow savings detection:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Settings → Automation</li>
              <li>Ensure "Savings Detection" is enabled</li>
              <li>Check that notification preferences are set correctly</li>
              <li>Verify you haven't disabled specific savings types</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.2 Notification Preferences</h3>
            <p className="mb-4">Make sure you're receiving notifications:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Check email notification settings</li>
              <li>Verify push notifications are enabled (mobile app)</li>
              <li>Check spam/junk folders for missed emails</li>
              <li>Review notification frequency settings</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.3 Account Permissions</h3>
            <p className="mb-4">Ensure accounts have proper permissions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accounts must be actively connected</li>
              <li>Read access must be enabled</li>
              <li>Accounts shouldn't be in error status</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. What SaveCash Looks For</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 Subscription Opportunities</h3>
            <p className="mb-4">SaveCash identifies:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Unused subscriptions (90+ days without activity)</li>
              <li>Duplicate subscriptions (multiple services doing the same thing)</li>
              <li>Better pricing options (annual vs monthly, family plans)</li>
              <li>Competitor offers with better rates</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 Bill Negotiation Opportunities</h3>
            <p className="mb-4">Opportunities for:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Cable and internet providers (market rate comparison)</li>
              <li>Insurance companies (competitive quotes)</li>
              <li>Phone carriers (better plans available)</li>
              <li>Utilities (where rate negotiation is possible)</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.3 Fee Prevention</h3>
            <p className="mb-4">Detects and prevents:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Overdraft risks (low balance warnings)</li>
              <li>Late payment risks (bill due date reminders)</li>
              <li>ATM fees (alternative routing suggestions)</li>
              <li>Account maintenance fees (minimum balance management)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. Troubleshooting Steps</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.1 Verification Checklist</h3>
            <p className="mb-4">Run through this checklist:</p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>Accounts are connected and syncing properly</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>At least 30 days of transaction history available</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>Savings detection is enabled in settings</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>Notifications are enabled and working</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>You've waited 48 hours after initial connection</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>Multiple accounts are connected</span>
                </li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.2 Manual Refresh</h3>
            <p className="mb-4">Try forcing a new analysis:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Settings → Savings</li>
              <li>Click "Run New Analysis" or "Refresh Opportunities"</li>
              <li>Wait 1-2 hours for analysis to complete</li>
              <li>Check your dashboard for new opportunities</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.3 Contact Support</h3>
            <p className="mb-4">If you've checked everything and still see no opportunities:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact support with your account details</li>
              <li>Provide information about your connected accounts</li>
              <li>Share how long you've been using SaveCash</li>
              <li>Our team can investigate why opportunities aren't being detected</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Improving Savings Detection</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.1 Connect More Accounts</h3>
            <p className="mb-4">More accounts = more opportunities:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Connect all credit cards (where subscriptions are often charged)</li>
              <li>Add investment and savings accounts</li>
              <li>Include any accounts where you have recurring bills</li>
              <li>More data helps AI identify more patterns</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.2 Enable All Features</h3>
            <p className="mb-4">Enable all savings detection features:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Subscription optimization</li>
              <li>Bill negotiation</li>
              <li>Fee prevention</li>
              <li>Cashback optimization</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.3 Give It Time</h3>
            <p className="mb-4">Savings detection improves over time:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>AI learns your spending patterns</li>
              <li>More transaction history = better analysis</li>
              <li>Seasonal patterns emerge over months</li>
              <li>Opportunities increase as AI understands your finances better</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Viewing Opportunities</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.1 Where to Look</h3>
            <p className="mb-4">Savings opportunities appear in:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your main dashboard (savings overview section)</li>
              <li>Opportunities tab (dedicated section)</li>
              <li>Email notifications (if enabled)</li>
              <li>Mobile app push notifications</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.2 Opportunity Status</h3>
            <p className="mb-4">Opportunities can be in different states:</p>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Pending Review</p>
                <p className="text-sm text-gray-600">New opportunities waiting for your approval</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">In Progress</p>
                <p className="text-sm text-gray-600">SaveCash is actively working on these</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Completed</p>
                <p className="text-sm text-gray-600">Successfully implemented savings</p>
              </div>
            </div>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">8. Still Not Seeing Opportunities?</h2>
            <p className="mb-4">If you've tried everything and still don't see savings opportunities:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You may already be highly optimized (which is great!)</li>
              <li>Your financial patterns might be different than typical users</li>
              <li>Contact support for a personalized review</li>
              <li>Our team can manually review your account and identify opportunities</li>
            </ul>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Need More Help?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>See our <a href="/help/savings-opportunities" className="text-blue-600 hover:underline">Savings Opportunities guide</a></li>
              <li>Contact support at <a href="mailto:support@savecash.com" className="text-blue-600 hover:underline">support@savecash.com</a></li>
              <li>Visit our <a href="/help" className="text-blue-600 hover:underline">Help Center</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

