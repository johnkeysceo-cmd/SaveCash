import React from "react";
import { ArrowLeft, Receipt, Bell, Calendar, DollarSign } from "lucide-react";

export default function BillManagement() {
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
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Bill Management and Reminders</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Never miss a bill payment again. Learn how SaveCash tracks your bills, sends reminders, and helps you optimize your recurring expenses.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. Automatic Bill Detection</h2>
            <p className="mb-4">SaveCash automatically identifies recurring bills by analyzing your transaction history:</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.1 How Bills Are Detected</h3>
            <p className="mb-4">Our AI recognizes bills through:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Regular payment amounts that occur monthly, quarterly, or annually</li>
              <li>Merchant names that match known billers</li>
              <li>Consistent payment dates</li>
              <li>Transaction patterns indicating recurring charges</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.2 Bill Categories</h3>
            <p className="mb-4">Bills are automatically categorized:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Utilities</h4>
                <p className="text-sm">Electric, water, gas, internet, phone</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Subscriptions</h4>
                <p className="text-sm">Streaming, software, memberships</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Insurance</h4>
                <p className="text-sm">Health, auto, home, life insurance</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Loans</h4>
                <p className="text-sm">Mortgage, car loans, student loans</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Bill Reminders</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.1 Reminder Schedule</h3>
            <p className="mb-4">You'll receive reminders at strategic times:</p>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">7 Days Before</p>
                <p className="text-sm text-gray-600">Initial reminder so you have time to prepare</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">3 Days Before</p>
                <p className="text-sm text-gray-600">Important reminder as due date approaches</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">1 Day Before</p>
                <p className="text-sm text-gray-600">Urgent reminder for immediate action</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Due Date</p>
                <p className="text-sm text-gray-600">Final alert if payment not detected</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.2 Reminder Channels</h3>
            <p className="mb-4">Receive reminders via:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Email notifications</li>
              <li>Push notifications (mobile app)</li>
              <li>SMS alerts (for critical bills)</li>
              <li>In-app dashboard alerts</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.3 Customizing Reminders</h3>
            <p className="mb-4">Personalize your reminder preferences:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Set reminder timing (earlier or later)</li>
              <li>Choose which bills get reminders</li>
              <li>Select notification channels per bill type</li>
              <li>Enable quiet hours for non-urgent reminders</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. Bill Tracking Dashboard</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.1 Upcoming Bills View</h3>
            <p className="mb-4">See all upcoming bills in one place:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Chronological list of all bills</li>
              <li>Due dates clearly marked</li>
              <li>Payment amounts shown</li>
              <li>Payment status (paid, pending, due)</li>
              <li>Total amount due in current month</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.2 Bill History</h3>
            <p className="mb-4">Track your bill payment history:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>View all past bill payments</li>
              <li>See payment trends over time</li>
              <li>Identify bills that have increased</li>
              <li>Export history for records</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.3 Spending Insights</h3>
            <p className="mb-4">Understand your bill spending:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Monthly bill spending trends</li>
              <li>Largest bills identification</li>
              <li>Total annual bill spending</li>
              <li>Comparison to previous periods</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. Bill Optimization</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 Automatic Bill Negotiation</h3>
            <p className="mb-4">SaveCash can negotiate lower rates on your bills:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Cable and internet providers</li>
              <li>Insurance companies</li>
              <li>Phone carriers</li>
              <li>Utility companies (where applicable)</li>
            </ul>
            <p className="mb-4">The system contacts providers, negotiates better rates, and implements savings automatically with your approval.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 Better Plan Recommendations</h3>
            <p className="mb-4">SaveCash identifies when better plans are available:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Cheaper plans that meet your needs</li>
              <li>Annual plans vs monthly (save 15-20%)</li>
              <li>Bundle opportunities</li>
              <li>Promotional rates from competitors</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.3 Duplicate Bill Detection</h3>
            <p className="mb-4">Identify when you're paying for the same service twice:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Multiple subscriptions to similar services</li>
              <li>Overlapping insurance coverage</li>
              <li>Duplicate utility services</li>
              <li>Recommendations to consolidate</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. Auto-Pay Management</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.1 Setting Up Auto-Pay</h3>
            <p className="mb-4">SaveCash helps you set up auto-pay for bills:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Identify bills eligible for auto-pay</li>
              <li>Guide you through provider setup process</li>
              <li>Track auto-pay status for each bill</li>
              <li>Send reminders before auto-pay processes</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.2 Auto-Pay Safety</h3>
            <p className="mb-4">Safety features for auto-pay:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Low balance warnings before auto-pay</li>
              <li>Alerts when auto-pay amounts change</li>
              <li>Ability to pause auto-pay temporarily</li>
              <li>Notifications when auto-pay fails</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.3 Managing Auto-Pay</h3>
            <p className="mb-4">View and manage all auto-pay settings:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>See which bills are on auto-pay</li>
              <li>Update payment methods</li>
              <li>Change auto-pay dates</li>
              <li>Cancel auto-pay when needed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Manual Bill Entry</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.1 Adding Bills Manually</h3>
            <p className="mb-4">For bills that aren't automatically detected:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Bills → Add Bill</li>
              <li>Enter bill details (name, amount, due date)</li>
              <li>Set payment frequency (monthly, quarterly, etc.)</li>
              <li>Save and start receiving reminders</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.2 Editing Bill Information</h3>
            <p className="mb-4">Update bills when details change:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Adjust amounts when bills increase or decrease</li>
              <li>Update due dates if they change</li>
              <li>Change payment frequency</li>
              <li>Mark bills as inactive when you stop paying</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Bill Payment Tracking</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.1 Payment Confirmation</h3>
            <p className="mb-4">SaveCash confirms payments by:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Matching transactions to expected bill amounts</li>
              <li>Verifying payment dates align with due dates</li>
              <li>Sending confirmation when payment is detected</li>
              <li>Updating bill status to "Paid"</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.2 Late Payment Alerts</h3>
            <p className="mb-4">Get notified if payments are late:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Immediate alert if payment not detected on due date</li>
              <li>Follow-up reminders until payment is confirmed</li>
              <li>Late fee risk warnings</li>
              <li>Suggestions for catching up on missed payments</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.3 Payment History</h3>
            <p className="mb-4">Track your payment reliability:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>See on-time payment percentage</li>
              <li>Identify bills you frequently pay late</li>
              <li>Track payment trends over time</li>
              <li>Export payment history for your records</li>
            </ul>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">8. Best Practices</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Review Bills Monthly</h3>
                <p className="text-sm">Check your bill dashboard monthly to catch increases or errors early.</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Use Auto-Pay Wisely</h3>
                <p className="text-sm">Enable auto-pay for consistent bills, but monitor accounts regularly for unexpected changes.</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Act on Optimization Opportunities</h3>
                <p className="text-sm">When SaveCash identifies better rates or plans, take action to maximize savings.</p>
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

