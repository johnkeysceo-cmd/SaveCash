import React from "react";
import { ArrowLeft, Bell, Brain, TrendingUp, Shield } from "lucide-react";

export default function AIMonitoringAlerts() {
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
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Using AI Monitoring and Alerts</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Learn how SaveCash's AI monitors your finances 24/7 and sends you intelligent alerts to help you save money and avoid fees.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. How AI Monitoring Works</h2>
            <p className="mb-4">SaveCash uses advanced artificial intelligence to continuously monitor your financial accounts and identify opportunities, risks, and important events.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.1 Continuous Analysis</h3>
            <p className="mb-4">Our AI system:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Analyzes transactions in real-time as they occur</li>
              <li>Identifies spending patterns and trends</li>
              <li>Monitors account balances and upcoming bills</li>
              <li>Detects unusual or suspicious activity</li>
              <li>Compares your spending to market rates</li>
              <li>Learns from your financial behavior over time</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.2 Pattern Recognition</h3>
            <p className="mb-4">The AI identifies various patterns:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Recurring Charges</h4>
                <p className="text-sm">Subscriptions, memberships, and regular bills</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Spending Trends</h4>
                <p className="text-sm">Increases, decreases, and seasonal patterns</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Fee Patterns</h4>
                <p className="text-sm">When and why fees occur</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Opportunities</h4>
                <p className="text-sm">Potential savings and optimizations</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Types of AI-Generated Alerts</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.1 Savings Opportunities</h3>
            <p className="mb-4">The AI identifies ways you can save money:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Unused Subscriptions:</strong> Services you pay for but don't use</li>
              <li><strong>Better Plans Available:</strong> Lower-cost options for services you use</li>
              <li><strong>Bill Negotiation:</strong> Opportunities to reduce monthly bills</li>
              <li><strong>Cashback Offers:</strong> Promotional cashback you're eligible for</li>
              <li><strong>Fee Prevention:</strong> Ways to avoid upcoming fees</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.2 Risk Alerts</h3>
            <p className="mb-4">Alerts that help prevent financial problems:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Low Balance Warnings:</strong> When your account balance is getting low</li>
              <li><strong>Overdraft Risk:</strong> Potential for overdraft fees based on upcoming transactions</li>
              <li><strong>Bill Due Reminders:</strong> Upcoming bills that need payment</li>
              <li><strong>Unusual Activity:</strong> Transactions that don't match your normal patterns</li>
              <li><strong>Price Increases:</strong> Subscriptions or bills that have increased</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.3 Goal Progress Alerts</h3>
            <p className="mb-4">Updates on your financial goals:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Milestone achievements</li>
              <li>Progress updates</li>
              <li>Timeline adjustments needed</li>
              <li>Goal completion celebrations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. Customizing Your Alerts</h2>
            <p className="mb-4">You have full control over which alerts you receive:</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.1 Alert Types</h3>
            <p className="mb-4">Choose which types of alerts to receive:</p>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">High Priority</p>
                <p className="text-sm text-gray-600">Critical alerts like overdraft risk and security issues</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Savings Opportunities</p>
                <p className="text-sm text-gray-600">New ways to save money</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Bill Reminders</p>
                <p className="text-sm text-gray-600">Upcoming bills and due dates</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Goal Updates</p>
                <p className="text-sm text-gray-600">Progress on your financial goals</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.2 Alert Frequency</h3>
            <p className="mb-4">Set how often you want to receive alerts:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Real-time:</strong> Immediate alerts as events occur</li>
              <li><strong>Daily Digest:</strong> One email per day with all alerts</li>
              <li><strong>Weekly Summary:</strong> Weekly summary of important alerts</li>
              <li><strong>Custom:</strong> Set specific times for alerts</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.3 Notification Channels</h3>
            <p className="mb-4">Choose how you receive alerts:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email notifications</li>
              <li>Push notifications (mobile app)</li>
              <li>SMS alerts (for critical alerts only)</li>
              <li>In-app notifications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. Understanding Alert Priority Levels</h2>
            
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Critical Alerts (Always On)</h3>
                <p className="text-sm mb-2">These alerts cannot be disabled for your security:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Suspicious login attempts</li>
                  <li>Account security breaches</li>
                  <li>Password changes</li>
                  <li>Critical account changes</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">High Priority</h3>
                <p className="text-sm mb-2">Important financial alerts:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Overdraft risk warnings</li>
                  <li>Bill due today</li>
                  <li>Large unusual transactions</li>
                  <li>Account connection failures</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Medium Priority</h3>
                <p className="text-sm mb-2">Informational alerts:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>New savings opportunities</li>
                  <li>Bill due in 3 days</li>
                  <li>Goal progress updates</li>
                  <li>Account balance updates</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Low Priority</h3>
                <p className="text-sm mb-2">Optional informational updates:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Weekly spending summaries</li>
                  <li>Product tips and recommendations</li>
                  <li>Feature announcements</li>
                  <li>Educational content</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. AI Learning and Personalization</h2>
            <p className="mb-4">SaveCash's AI learns from your behavior to provide better alerts over time:</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.1 Learning Your Preferences</h3>
            <p className="mb-4">The AI observes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Which alerts you act on vs ignore</li>
              <li>Your response times to different alert types</li>
              <li>Your spending patterns and habits</li>
              <li>Your financial goals and priorities</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.2 Personalized Recommendations</h3>
            <p className="mb-4">Over time, alerts become more relevant:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Alerts are prioritized based on your history</li>
              <li>Recommendations match your financial style</li>
              <li>Timing of alerts adjusts to when you're most responsive</li>
              <li>Alert frequency adapts to your preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Managing Alert Fatigue</h2>
            <p className="mb-4">Too many alerts can be overwhelming. Here's how to manage them:</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.1 Alert Bundling</h3>
            <p className="mb-4">Enable alert bundling to group related alerts:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Multiple savings opportunities combined into one alert</li>
              <li>Daily digest instead of individual alerts</li>
              <li>Weekly summary for non-urgent items</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.2 Quiet Hours</h3>
            <p className="mb-4">Set quiet hours when you don't want to receive alerts (except critical ones):</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Choose your quiet hours (e.g., 10 PM - 7 AM)</li>
              <li>Critical alerts still come through</li>
              <li>All other alerts are queued until quiet hours end</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.3 Smart Filtering</h3>
            <p className="mb-4">Use AI-powered filtering to reduce noise:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>AI learns which alerts matter most to you</li>
              <li>Automatically filters out less relevant alerts</li>
              <li>You can always view all alerts in your dashboard</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Acting on Alerts</h2>
            <p className="mb-4">When you receive an alert, you can:</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.1 Quick Actions</h3>
            <p className="mb-4">Many alerts include quick action buttons:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Approve:</strong> Accept a savings opportunity</li>
              <li><strong>View Details:</strong> See more information</li>
              <li><strong>Dismiss:</strong> Mark as read if not relevant</li>
              <li><strong>Snooze:</strong> Remind me later</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.2 Alert History</h3>
            <p className="mb-4">View all your alerts in one place:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>See all alerts, not just unread ones</li>
              <li>Filter by type, date, or priority</li>
              <li>Search for specific alerts</li>
              <li>Export alert history</li>
            </ul>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">8. Best Practices</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Enable Important Alerts</h3>
                <p className="text-sm">Don't disable alerts for critical items like security, overdraft risk, and bill reminders.</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Review Alerts Regularly</h3>
                <p className="text-sm">Check your alerts daily to stay on top of opportunities and risks.</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Customize to Your Needs</h3>
                <p className="text-sm">Adjust alert settings to match your lifestyle and preferences. The AI will learn your preferences over time.</p>
              </div>
            </div>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Need More Help?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>See our <a href="/help/automated-savings" className="text-blue-600 hover:underline">Automated Savings guide</a></li>
              <li>Contact support at <a href="mailto:support@savecash.com" className="text-blue-600 hover:underline">support@savecash.com</a></li>
              <li>Visit our <a href="/help" className="text-blue-600 hover:underline">Help Center</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

