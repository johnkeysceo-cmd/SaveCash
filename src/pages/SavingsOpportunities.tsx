import React from "react";
import { ArrowLeft, TrendingDown, DollarSign, Zap, Target } from "lucide-react";

export default function SavingsOpportunities() {
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
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Understanding Savings Opportunities</h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            SaveCash uses advanced AI to identify and implement savings opportunities automatically. This comprehensive guide explains how we find savings, what types of opportunities exist, and how they're implemented.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
            
            {/* Section 1: How SaveCash Finds Savings */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. How SaveCash Identifies Savings Opportunities</h2>
              
              <p className="mb-4">
                SaveCash uses a sophisticated combination of artificial intelligence, machine learning, and financial data analysis to identify savings opportunities. Here's how it works:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.1 Transaction Pattern Analysis</h3>
              <p className="mb-4">
                Our AI analyzes your transaction history to identify patterns:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Recurring Charges:</strong> Identifies subscriptions, memberships, and recurring bills</li>
                <li><strong>Spending Trends:</strong> Tracks how your spending changes over time</li>
                <li><strong>Category Analysis:</strong> Breaks down spending by category to identify optimization areas</li>
                <li><strong>Unusual Activity:</strong> Flags unexpected charges or fee increases</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.2 Market Intelligence</h3>
              <p className="mb-4">
                SaveCash continuously monitors the market for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Competitive pricing across services you use</li>
                <li>Promotional offers and discounts</li>
                <li>Better plan options from your current providers</li>
                <li>Cashback and reward opportunities</li>
                <li>Fee structures and how to avoid them</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.3 Predictive Modeling</h3>
              <p className="mb-4">
                Using machine learning, SaveCash predicts:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>When bills are likely to increase</li>
                <li>Which subscriptions are rarely used</li>
                <li>Optimal times to negotiate bills</li>
                <li>Risk of fees based on account patterns</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.4 Comparative Analysis</h3>
              <p className="mb-4">
                SaveCash compares your spending to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Similar users (anonymized) to identify outliers</li>
                <li>Industry benchmarks for various services</li>
                <li>Historical data to spot increases or anomalies</li>
                <li>Regional pricing differences</li>
              </ul>
            </section>

            {/* Section 2: Types of Savings Opportunities */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Types of Savings Opportunities</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border border-purple-200 rounded-lg p-6 bg-purple-50">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingDown className="w-6 h-6 text-purple-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Subscription Optimization</h3>
                  </div>
                  <p className="text-sm">
                    Finding better plans, canceling unused subscriptions, and consolidating services.
                  </p>
                </div>
                
                <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
                  <div className="flex items-center gap-3 mb-3">
                    <DollarSign className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Bill Negotiation</h3>
                  </div>
                  <p className="text-sm">
                    Negotiating lower rates for cable, internet, insurance, and other recurring bills.
                  </p>
                </div>
                
                <div className="border border-green-200 rounded-lg p-6 bg-green-50">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Fee Prevention</h3>
                  </div>
                  <p className="text-sm">
                    Preventing overdraft fees, late fees, and other avoidable charges through proactive alerts.
                  </p>
                </div>
                
                <div className="border border-orange-200 rounded-lg p-6 bg-orange-50">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="w-6 h-6 text-orange-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Cashback & Rewards</h3>
                  </div>
                  <p className="text-sm">
                    Maximizing cashback opportunities and optimizing reward program usage.
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2.1 Subscription Optimization</h3>
              <p className="mb-4">
                Many people have subscriptions they don't fully utilize or could get cheaper. SaveCash identifies:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Unused Subscriptions</h4>
                <p className="mb-3 text-sm">
                  Subscriptions with no activity for 90+ days are flagged as potentially unused. SaveCash will:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Alert you to the unused subscription</li>
                  <li>Show how much you've spent on it</li>
                  <li>Offer to cancel it automatically (with your approval)</li>
                  <li>Suggest alternatives if you actually need the service</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Better Pricing Options</h4>
                <p className="mb-3 text-sm">
                  SaveCash compares your current subscriptions to available plans:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Annual plans vs monthly (often 15-20% savings)</li>
                  <li>Family plans vs individual (better value for multiple users)</li>
                  <li>Student discounts you might be eligible for</li>
                  <li>Promotional rates from competitors</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Duplicate Services</h4>
                <p className="mb-3 text-sm">
                  If you're paying for multiple services that do the same thing, SaveCash will:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Identify duplicate subscriptions (e.g., multiple streaming services with same content)</li>
                  <li>Recommend consolidating to a single service</li>
                  <li>Calculate your potential savings</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2.2 Bill Negotiation</h3>
              <p className="mb-4">
                SaveCash can help negotiate lower bills for various services. Our approach includes:
              </p>
              
              <p className="mb-4">
                <strong>Cable & Internet:</strong> We monitor for promotional rates and competitor offers, then help you negotiate with your current provider or switch to a better deal.
              </p>
              
              <p className="mb-4">
                <strong>Insurance:</strong> We identify when your insurance premiums are higher than market rates and help you:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Request quotes from competitors</li>
                <li>Negotiate with current provider for better rates</li>
                <li>Identify discounts you may qualify for</li>
                <li>Suggest bundling policies for better rates</li>
              </ul>
              
              <p className="mb-4">
                <strong>Phone Carriers:</strong> SaveCash helps you:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Find plans that match your actual usage</li>
                <li>Negotiate better rates on current plans</li>
                <li>Switch to family plans if applicable</li>
                <li>Take advantage of promotions and discounts</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2.3 Fee Prevention</h3>
              <p className="mb-4">
                SaveCash proactively prevents fees through intelligent monitoring:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-6 py-2">
                  <h4 className="font-semibold text-gray-900 mb-2">Overdraft Fee Prevention</h4>
                  <p className="text-sm mb-2">
                    SaveCash monitors your account balance and upcoming transactions to predict overdraft risk. When a risk is detected:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>You receive an immediate alert</li>
                    <li>We suggest transferring funds from savings</li>
                    <li>We recommend postponing non-essential transactions</li>
                    <li>We can set up automatic transfers (with your approval)</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6 py-2">
                  <h4 className="font-semibold text-gray-900 mb-2">Late Payment Prevention</h4>
                  <p className="text-sm mb-2">
                    SaveCash tracks all your bills and sends reminders:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>7 days before due date (initial reminder)</li>
                    <li>3 days before due date (important reminder)</li>
                    <li>1 day before due date (urgent reminder)</li>
                    <li>On due date if not yet paid (final alert)</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-6 py-2">
                  <h4 className="font-semibold text-gray-900 mb-2">Other Fee Prevention</h4>
                  <p className="text-sm mb-2">
                    SaveCash also helps prevent:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>ATM fees (by locating fee-free ATMs)</li>
                    <li>Foreign transaction fees (with currency exchange alerts)</li>
                    <li>Account maintenance fees (by meeting minimum balance requirements)</li>
                    <li>Returned payment fees (by ensuring sufficient funds)</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2.4 Cashback & Rewards Optimization</h3>
              <p className="mb-4">
                SaveCash helps maximize your rewards and cashback:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Identifies credit cards with better rewards for your spending patterns</li>
                <li>Suggests which card to use for different purchase categories</li>
                <li>Alerts you to promotional cashback offers</li>
                <li>Tracks reward points and suggests redemption strategies</li>
                <li>Identifies unused rewards that are about to expire</li>
              </ul>
            </section>

            {/* Section 3: How Savings Are Implemented */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. How Savings Are Implemented</h2>
              
              <p className="mb-4">
                SaveCash uses different methods to implement savings, depending on the type of opportunity:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.1 Automated Actions</h3>
              <p className="mb-4">
                Many savings can be implemented automatically with your permission:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Automatic Subscription Cancellation</h4>
                  <p className="text-sm mb-2">
                    For unused subscriptions, SaveCash can cancel them automatically after:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>You approve the cancellation</li>
                    <li>We verify no recent activity (90+ days)</li>
                    <li>We confirm there are no contractual penalties</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Plan Downgrades</h4>
                  <p className="text-sm mb-2">
                    When a cheaper plan meets your needs, SaveCash can:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Switch you to the better plan automatically</li>
                    <li>Ensure no service interruption</li>
                    <li>Handle the transition seamlessly</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Balance Transfers</h4>
                  <p className="text-sm mb-2">
                    To prevent fees, SaveCash can (with your approval):
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Set up automatic transfers from savings to checking</li>
                    <li>Maintain minimum balances to avoid fees</li>
                    <li>Move funds proactively before overdraft risk</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.2 Assisted Actions</h3>
              <p className="mb-4">
                Some savings require your direct involvement, but SaveCash guides you through the process:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-blue-500 pl-6 py-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Bill Negotiation Scripts</h4>
                  <p className="text-sm mb-2">
                    SaveCash provides you with:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Scripts tailored to your specific situation</li>
                    <li>Talking points highlighting competitor offers</li>
                    <li>Information about your account history</li>
                    <li>Follow-up suggestions if initial negotiation fails</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6 py-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Provider Switching</h4>
                  <p className="text-sm mb-2">
                    When switching providers is the best option, SaveCash:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Compares available options side-by-side</li>
                    <li>Handles the signup process for you</li>
                    <li>Manages cancellation of old service</li>
                    <li>Ensures no service gap during transition</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.3 Notification-Based Savings</h3>
              <p className="mb-4">
                Some savings opportunities require you to take action, and SaveCash notifies you:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Cashback offers you should activate</li>
                <li>Promotional rates available for limited time</li>
                <li>Deadlines for reward redemption</li>
                <li>Special discounts you qualify for</li>
              </ul>
            </section>

            {/* Section 4: Savings Timeline */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. Understanding the Savings Timeline</h2>
              
              <p className="mb-4">
                Different types of savings take different amounts of time to implement and realize:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 Immediate Savings</h3>
              <p className="mb-4">
                These savings take effect right away:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Subscription Cancellations:</strong> Effective immediately (next billing cycle)</li>
                <li><strong>Fee Prevention:</strong> Prevents fees from occurring</li>
                <li><strong>Plan Downgrades:</strong> Next billing cycle</li>
                <li><strong>Cashback Activation:</strong> Immediate upon activation</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 Short-Term Savings (1-3 months)</h3>
              <p className="mb-4">
                These savings require some setup time:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Bill Negotiations:</strong> Typically takes 1-2 billing cycles to complete</li>
                <li><strong>Provider Switching:</strong> 2-4 weeks for transition and activation</li>
                <li><strong>Credit Card Optimizations:</strong> Next billing cycle after application</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.3 Long-Term Savings (3+ months)</h3>
              <p className="mb-4">
                These savings accumulate over time:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Annual Plan Conversions:</strong> Savings realized over 12 months</li>
                <li><strong>Reward Accumulation:</strong> Builds up over months</li>
                <li><strong>Interest Optimization:</strong> Compounds over time</li>
              </ul>
            </section>

            {/* Section 5: Monitoring Your Savings */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. Monitoring Your Savings</h2>
              
              <p className="mb-4">
                SaveCash provides comprehensive tracking of all your savings:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.1 Savings Dashboard</h3>
              <p className="mb-4">
                Your dashboard shows:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Total savings to date (all-time)</li>
                <li>Savings by time period (today, week, month, year)</li>
                <li>Breakdown by category (subscriptions, bills, fees, etc.)</li>
                <li>Projected annual savings</li>
                <li>Savings trends over time</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.2 Savings Reports</h3>
              <p className="mb-4">
                Detailed reports include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Individual savings opportunities and their outcomes</li>
                <li>Comparison to previous periods</li>
                <li>Savings rate (percentage of income saved)</li>
                <li>ROI on SaveCash subscription</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.3 Notifications</h3>
              <p className="mb-4">
                You'll receive notifications for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>When savings are successfully implemented</li>
                <li>Monthly savings summaries</li>
                <li>New opportunities identified</li>
                <li>Milestones reached (e.g., $100 saved, $1000 saved)</li>
              </ul>
            </section>

            {/* Section 6: Maximizing Your Savings */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Tips for Maximizing Your Savings</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Connect All Accounts</h3>
                  <p className="text-sm">
                    The more accounts you connect, the more comprehensive our analysis. Don't forget credit cards, investment accounts, and any secondary bank accounts.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Enable Automation</h3>
                  <p className="text-sm">
                    Allow SaveCash to take automated actions when appropriate. This ensures you never miss an opportunity due to inaction.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Review Recommendations Promptly</h3>
                  <p className="text-sm">
                    Check your dashboard regularly and act on recommendations quickly. Some opportunities, like promotional rates, have expiration dates.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-red-50 border border-pink-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Keep Information Updated</h3>
                  <p className="text-sm">
                    Update your preferences and goals as your situation changes. This helps SaveCash prioritize the most relevant opportunities for you.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Be Open to Switching</h3>
                  <p className="text-sm">
                    Sometimes the best savings come from switching providers. SaveCash makes the transition seamless, so don't hesitate when significant savings are available.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Common Questions */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Common Questions About Savings Opportunities</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">How accurate are the savings estimates?</h3>
                  <p className="mb-4">
                    SaveCash uses real market data and your actual spending patterns to calculate savings estimates. While we can't guarantee exact amounts (especially for negotiations), our estimates are typically within 5-10% of actual savings.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Will I lose features if I downgrade plans?</h3>
                  <p className="mb-4">
                    SaveCash analyzes your actual usage before recommending plan changes. We only suggest downgrades if you're not using the features that would be lost. If you do use those features, we'll recommend optimizing other areas instead.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">What if I don't want to cancel a subscription?</h3>
                  <p className="mb-4">
                    That's perfectly fine! You're always in control. Simply decline the cancellation recommendation, and SaveCash will note your preference and won't suggest it again. You can always change this in your settings.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">How often are new opportunities identified?</h3>
                  <p className="mb-4">
                    SaveCash continuously monitors your accounts and the market. New opportunities are identified daily, and you'll be notified whenever something significant is found. You can also check your dashboard anytime for the latest recommendations.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I see what savings were attempted but failed?</h3>
                  <p className="mb-4">
                    Yes! Your dashboard includes a "Saved Opportunities" section that shows all attempted savings, including those that didn't work out. This helps you understand what was tried and why it might not have been successful.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Next Steps */}
            <section className="scroll-mt-8 border-t pt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">8. Next Steps</h2>
              
              <p className="mb-4">
                Now that you understand how SaveCash finds and implements savings, here's what to do next:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <a 
                  href="/help/getting-started"
                  className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                    Getting Started →
                  </h3>
                  <p className="text-sm text-gray-600">
                    If you haven't already, complete the getting started guide.
                  </p>
                </a>
                
                <a 
                  href="/help/financial-goals"
                  className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                    Set Financial Goals →
                  </h3>
                  <p className="text-sm text-gray-600">
                    Create goals to help SaveCash prioritize opportunities.
                  </p>
                </a>
                
                <a 
                  href="/help/connecting-accounts"
                  className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                    Connect More Accounts →
                  </h3>
                  <p className="text-sm text-gray-600">
                    More accounts mean more comprehensive savings analysis.
                  </p>
                </a>
                
                <a 
                  href="/dashboard"
                  className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                    View Your Dashboard →
                  </h3>
                  <p className="text-sm text-gray-600">
                    Check your current savings opportunities and progress.
                  </p>
                </a>
              </div>
            </section>

        </div>
      </div>
    </div>
  );
}

