import React from "react";
import { ArrowLeft, Zap, TrendingUp, Shield, Settings } from "lucide-react";

export default function AutomatedSavings() {
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
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Automated Savings Features</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Learn how SaveCash automatically identifies savings opportunities and implements them to help you build wealth without manual effort.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. What is Automated Savings?</h2>
            <p className="mb-4">Automated savings removes the willpower requirement from building wealth. Instead of manually deciding to save each month, SaveCash automatically identifies opportunities and implements them on your behalf.</p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">The Psychology Behind Automation</h3>
              <p className="text-sm mb-2">Studies show that people who automate savings save 3x more than those who save manually. Why? Because automation removes decision fatigue and prevents you from spending money before you save it.</p>
              <p className="text-sm">The best savings plan is the one that requires zero willpower—that's what automated savings provides.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. How Automated Savings Works</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.1 Detection Phase</h3>
            <p className="mb-4">SaveCash continuously monitors your financial activity to identify savings opportunities:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Analyzes transaction patterns for recurring charges</li>
              <li>Compares your bills to market rates</li>
              <li>Identifies unused subscriptions and services</li>
              <li>Detects fee prevention opportunities</li>
              <li>Finds cashback and reward optimizations</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.2 Analysis Phase</h3>
            <p className="mb-4">Each opportunity is evaluated for:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Potential savings amount</li>
              <li>Risk level and impact on service quality</li>
              <li>Implementation complexity</li>
              <li>Time to realize savings</li>
              <li>Alignment with your financial goals</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.3 Implementation Phase</h3>
            <p className="mb-4">Based on your automation preferences, SaveCash will:</p>
            <div className="space-y-3">
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Fully Automated</p>
                <p className="text-sm text-gray-600">Take action immediately for low-risk, high-confidence opportunities</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Approval Required</p>
                <p className="text-sm text-gray-600">Notify you and wait for approval before implementing</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Recommendation Only</p>
                <p className="text-sm text-gray-600">Present opportunities for you to review and decide</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. Types of Automated Savings</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.1 Subscription Optimization</h3>
            <p className="mb-4">SaveCash automatically:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Cancels unused subscriptions after 90 days of inactivity</li>
              <li>Downgrades plans when you're not using premium features</li>
              <li>Switches to annual plans for 15-20% savings</li>
              <li>Identifies duplicate services and consolidates</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.2 Bill Negotiation</h3>
            <p className="mb-4">Automated bill negotiation works for:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Cable and internet providers</li>
              <li>Insurance companies</li>
              <li>Phone carriers</li>
              <li>Streaming services</li>
            </ul>
            <p className="mb-4">The system contacts providers, negotiates rates, and implements better deals automatically.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.3 Fee Prevention</h3>
            <p className="mb-4">Proactive fee prevention includes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Automatic balance transfers to prevent overdrafts</li>
              <li>Bill payment reminders and auto-pay setup</li>
              <li>Minimum balance maintenance</li>
              <li>ATM fee avoidance routing</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.4 Smart Transfers</h3>
            <p className="mb-4">Automated savings transfers that adapt to your cash flow:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Round-up savings on every purchase</li>
              <li>Surplus cash detection and transfer</li>
              <li>Payday-based automatic savings</li>
              <li>Goal-based savings allocation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. Setting Up Automation</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 Automation Levels</h3>
            <p className="mb-4">Choose your comfort level:</p>
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Aggressive Automation</h4>
                <p className="text-sm mb-2">Maximum savings, minimal involvement</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Fully automated for low-risk opportunities</li>
                  <li>Approval required only for high-impact changes</li>
                  <li>Best for users who want hands-off savings</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Balanced Automation</h4>
                <p className="text-sm mb-2">Good savings with oversight (Recommended)</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Automated for routine optimizations</li>
                  <li>Approval required for subscriptions and bills</li>
                  <li>Best for most users</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Conservative Automation</h4>
                <p className="text-sm mb-2">Recommendations only, you decide</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>All actions require approval</li>
                  <li>Notifications for every opportunity</li>
                  <li>Best for users who want full control</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 Custom Rules</h3>
            <p className="mb-4">Set custom automation rules:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Never cancel subscriptions in specific categories</li>
              <li>Always get approval for changes over $X amount</li>
              <li>Exclude certain accounts from automation</li>
              <li>Set specific times for transfers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. Monitoring Automated Savings</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.1 Dashboard Overview</h3>
            <p className="mb-4">Your dashboard shows:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Total automated savings to date</li>
              <li>Savings by category (subscriptions, bills, fees, etc.)</li>
              <li>Recent automated actions</li>
              <li>Pending opportunities waiting for approval</li>
              <li>Projected annual savings</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.2 Activity Feed</h3>
            <p className="mb-4">See every automated action:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>When actions were taken</li>
              <li>What was changed and why</li>
              <li>Savings amounts achieved</li>
              <li>Status (successful, pending, failed)</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.3 Notifications</h3>
            <p className="mb-4">Stay informed with notifications for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Successfully implemented savings</li>
              <li>Actions that need your approval</li>
              <li>Failed attempts (with reasons and next steps)</li>
              <li>Monthly savings summaries</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Safety and Controls</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.1 Safety Features</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-900 mb-1">Read-Only Account Access</h4>
                <p className="text-sm">SaveCash never has permission to initiate transfers from your accounts. All savings come from optimizations, not account access.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-900 mb-1">Immediate Override</h4>
                <p className="text-sm">You can cancel any automated action within 24 hours with a single click, and undo any changes if needed.</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6 py-3">
                <h4 className="font-semibold text-gray-900 mb-1">Risk Assessment</h4>
                <p className="text-sm">Every opportunity is risk-assessed. High-risk changes always require your approval, even with aggressive automation enabled.</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.2 Pausing Automation</h3>
            <p className="mb-4">You can pause automation at any time:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Settings → Automation</li>
              <li>Click "Pause All Automation"</li>
              <li>Choose duration (1 day, 1 week, 1 month, or indefinitely)</li>
              <li>Resume anytime with one click</li>
            </ol>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Maximizing Automated Savings</h2>
            
            <div className="space-y-4">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Connect All Accounts</h3>
                <p className="text-sm">More accounts = more comprehensive analysis = more savings opportunities identified.</p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Enable Aggressive Automation</h3>
                <p className="text-sm">Users with aggressive automation save 40% more than those with conservative settings.</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Review Regularly</h3>
                <p className="text-sm">Check your dashboard weekly to stay informed about automated actions and ensure they align with your preferences.</p>
              </div>
            </div>
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

