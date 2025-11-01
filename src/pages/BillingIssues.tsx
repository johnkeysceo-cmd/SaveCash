import React from "react";
import { ArrowLeft, CreditCard, Receipt, AlertCircle, CheckCircle2 } from "lucide-react";

export default function BillingIssues() {
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
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Payment or Billing Issues</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Resolve payment and billing problems with your SaveCash subscription. Update payment methods, understand charges, and manage your subscription.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. Understanding SaveCash Billing</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.1 Subscription Plans</h3>
            <p className="mb-4">SaveCash offers subscription tiers:</p>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Free Tier</p>
                <p className="text-sm text-gray-600">Basic features with limited savings opportunities</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Premium Tier</p>
                <p className="text-sm text-gray-600">Full access to all features and automated savings</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Enterprise Tier</p>
                <p className="text-sm text-gray-600">For businesses and advanced users with custom features</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.2 Billing Cycle</h3>
            <p className="mb-4">Subscriptions are billed:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Monthly: Charged on the same date each month</li>
              <li>Annual: Charged once per year with 2 months free</li>
              <li>Billing date is based on your signup date</li>
              <li>You'll receive email reminders before renewal</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Payment Method Issues</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.1 Updating Payment Method</h3>
            <p className="mb-4">To update your payment method:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Account Settings → Billing</li>
              <li>Click "Update Payment Method"</li>
              <li>Enter new card details or select different payment method</li>
              <li>Save changes</li>
              <li>Old method will be used for current billing cycle if update is mid-cycle</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.2 Payment Declined</h3>
            <p className="mb-4">If payment is declined:</p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Common Reasons</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Insufficient funds in account</li>
                <li>Card expired or closed</li>
                <li>Bank declined for fraud protection</li>
                <li>Card reached spending limit</li>
                <li>International transaction restrictions</li>
              </ul>
            </div>
            
            <p className="mb-4">What to do:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Check your bank account or card balance</li>
              <li>Verify card expiration date is correct</li>
              <li>Contact your bank to approve the transaction</li>
              <li>Update to a different payment method</li>
              <li>SaveCash will retry the payment automatically</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.3 Multiple Payment Attempts</h3>
            <p className="mb-4">SaveCash will:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Automatically retry failed payments up to 3 times</li>
              <li>Send email notifications for each failed attempt</li>
              <li>Provide a grace period before service interruption</li>
              <li>Allow you to update payment method anytime during grace period</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. Billing Questions</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.1 Understanding Charges</h3>
            <p className="mb-4">What you're charged for:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Monthly or annual subscription fee</li>
              <li>Charges appear on statement as "SaveCash" or "SaveCash Inc."</li>
              <li>No hidden fees or surprise charges</li>
              <li>All charges are clearly shown in your billing history</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.2 Viewing Billing History</h3>
            <p className="mb-4">Access your billing records:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Account Settings → Billing</li>
              <li>Click "Billing History"</li>
              <li>View all past invoices and payments</li>
              <li>Download invoices as PDF</li>
              <li>Export for tax or record-keeping purposes</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.3 Invoice Details</h3>
            <p className="mb-4">Each invoice includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Invoice number and date</li>
              <li>Service period covered</li>
              <li>Amount charged</li>
              <li>Payment method used</li>
              <li>Tax information (if applicable)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. Subscription Management</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 Changing Plans</h3>
            <p className="mb-4">To upgrade or downgrade:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Account Settings → Billing → Change Plan</li>
              <li>Select your desired plan</li>
              <li>Review pricing and features</li>
              <li>Confirm the change</li>
              <li>Prorated charges or credits apply based on billing cycle</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 Canceling Subscription</h3>
            <p className="mb-4">To cancel your subscription:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Account Settings → Billing</li>
              <li>Click "Cancel Subscription"</li>
              <li>Confirm cancellation</li>
              <li>You'll retain access until end of billing period</li>
              <li>No refunds for unused portion of current period</li>
            </ol>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
              <p className="text-sm"><strong>Important:</strong> Canceling your subscription stops automatic renewal but doesn't delete your account. You can reactivate anytime.</p>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.3 Reactivating Subscription</h3>
            <p className="mb-4">To reactivate after cancellation:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Go to Account Settings → Billing</li>
              <li>Click "Reactivate Subscription"</li>
              <li>Select your plan</li>
              <li>Update payment method if needed</li>
              <li>Full access restored immediately</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. Refunds and Credits</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.1 Refund Policy</h3>
            <p className="mb-4">SaveCash offers refunds in these cases:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Billing errors or duplicate charges</li>
              <li>Service unavailable for extended period</li>
              <li>Accidental multiple subscriptions</li>
              <li>Within 30 days of initial subscription (if unsatisfied)</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.2 Requesting a Refund</h3>
            <p className="mb-4">To request a refund:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Contact support at <a href="mailto:billing@savecash.com" className="text-blue-600 hover:underline">billing@savecash.com</a></li>
              <li>Provide invoice number and reason</li>
              <li>Allow 5-7 business days for processing</li>
              <li>Refunds appear on original payment method</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.3 Account Credits</h3>
            <p className="mb-4">Credits may be issued for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service interruptions</li>
              <li>Promotional adjustments</li>
              <li>Customer satisfaction cases</li>
              <li>Credits apply to next billing cycle automatically</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Automatic Renewal</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.1 How It Works</h3>
            <p className="mb-4">SaveCash subscriptions automatically renew:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>At the end of each billing period</li>
              <li>Using the payment method on file</li>
              <li>You'll receive email notification 3 days before renewal</li>
              <li>Renewal continues until you cancel</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.2 Disabling Auto-Renewal</h3>
            <p className="mb-4">To stop automatic renewal:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Cancel your subscription before renewal date</li>
              <li>You'll retain access until current period ends</li>
              <li>No charges after cancellation</li>
              <li>Can reactivate anytime</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.3 Renewal Reminders</h3>
            <p className="mb-4">You'll receive reminders:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>7 days before renewal</li>
              <li>3 days before renewal</li>
              <li>Day of renewal (confirmation)</li>
              <li>If payment fails (immediate notification)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Tax and Invoice Information</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.1 Tax Calculation</h3>
            <p className="mb-4">Taxes are calculated based on:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your billing address location</li>
              <li>Local tax regulations</li>
              <li>Tax-exempt status (if applicable)</li>
              <li>Tax amount shown clearly on invoices</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.2 Updating Billing Address</h3>
            <p className="mb-4">To update for tax purposes:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Account Settings → Billing</li>
              <li>Click "Update Billing Address"</li>
              <li>Enter new address</li>
              <li>Save changes</li>
              <li>Tax calculations update for future invoices</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.3 Business/Organization Billing</h3>
            <p className="mb-4">For business accounts:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide business name and tax ID</li>
              <li>Receive invoices suitable for business expense records</li>
              <li>Request W-9 or tax documents if needed</li>
              <li>Contact billing support for custom invoicing needs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">8. Disputing Charges</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8.1 Before Disputing</h3>
            <p className="mb-4">First, check:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your billing history to verify the charge</li>
              <li>Email for subscription renewal notifications</li>
              <li>If you recently upgraded or changed plans</li>
              <li>Your payment method for duplicate charges</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8.2 How to Dispute</h3>
            <p className="mb-4">To dispute a charge:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Contact billing support immediately</li>
              <li>Provide invoice number and charge details</li>
              <li>Explain why you're disputing</li>
              <li>We'll investigate within 2 business days</li>
              <li>You'll receive resolution and any necessary refunds</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8.3 Credit Card Disputes</h3>
            <p className="mb-4">If you file a chargeback with your bank:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact us first—we can usually resolve issues faster</li>
              <li>Chargebacks can delay resolution significantly</li>
              <li>We'll work with you and your bank to resolve</li>
              <li>False chargebacks may result in account suspension</li>
            </ul>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">9. Billing Support</h2>
            <p className="mb-4">For billing questions or issues:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: <a href="mailto:billing@savecash.com" className="text-blue-600 hover:underline">billing@savecash.com</a></li>
              <li>General Support: <a href="mailto:support@savecash.com" className="text-blue-600 hover:underline">support@savecash.com</a></li>
              <li>Response time: Within 24 hours for billing inquiries</li>
              <li>Visit our <a href="/support" className="text-blue-600 hover:underline">Support page</a></li>
            </ul>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Need More Help?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact billing support at <a href="mailto:billing@savecash.com" className="text-blue-600 hover:underline">billing@savecash.com</a></li>
              <li>Visit our <a href="/help" className="text-blue-600 hover:underline">Help Center</a></li>
              <li>See our <a href="/pricing" className="text-blue-600 hover:underline">Pricing page</a> for plan details</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

