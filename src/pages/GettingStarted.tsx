import React from "react";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";

export default function GettingStarted() {
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
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Getting Started with SaveCash</h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Welcome to SaveCash! This comprehensive guide will walk you through everything you need to know to get started and maximize your savings potential.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
            
            {/* Section 1: Introduction */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. What is SaveCash?</h2>
              
              <p className="mb-4">
                SaveCash is an AI-powered financial optimization platform designed to help you save money automatically. Our intelligent system monitors your spending patterns, identifies savings opportunities, and takes action to ensure you never miss a chance to save.
              </p>
              
              <p className="mb-4">
                Unlike traditional budgeting apps that require manual tracking and constant input, SaveCash works in the background, learning from your financial behavior and proactively finding ways to reduce your expenses. Whether it's negotiating better rates, finding discounts, or preventing unnecessary charges, SaveCash is your 24/7 financial assistant.
              </p>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-6">
                <h3 className="font-semibold text-gray-900 mb-2">Key Benefits:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Automated savings detection and optimization</li>
                  <li>Real-time alerts for potential savings opportunities</li>
                  <li>Bank-grade security with 256-bit SSL encryption</li>
                  <li>AI-powered insights into your spending patterns</li>
                  <li>Zero manual tracking required</li>
                </ul>
              </div>
            </section>

            {/* Section 2: Account Creation */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Creating Your Account</h2>
              
              <p className="mb-4">
                Getting started with SaveCash is quick and straightforward. Follow these steps to create your account:
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6 py-2">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 1: Sign Up</h3>
                  <p className="mb-3">
                    Visit our website and click on the "Get Early Access" button. You'll be prompted to enter your name and email address. We'll send you a confirmation email to verify your account.
                  </p>
                  <p>
                    Make sure to use an email address you check regularly, as this is where we'll send important notifications about your savings and account updates.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6 py-2">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 2: Email Verification</h3>
                  <p className="mb-3">
                    Check your inbox for the verification email from SaveCash. Click on the verification link to activate your account. If you don't see the email, check your spam folder.
                  </p>
                  <p>
                    The verification link is valid for 24 hours. If it expires, you can request a new verification email from the signup page.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6 py-2">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 3: Complete Your Profile</h3>
                  <p className="mb-3">
                    Once verified, you'll be directed to complete your profile. This includes setting up a secure password and optionally providing additional information about your financial goals and preferences.
                  </p>
                  <p>
                    The more information you provide, the better SaveCash can tailor its savings recommendations to your specific needs and circumstances.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Initial Setup */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. Initial Setup Process</h2>
              
              <p className="mb-4">
                After creating your account, you'll want to complete the initial setup to start maximizing your savings. Here's what you need to do:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.1 Security Setup</h3>
              <p className="mb-4">
                Security is paramount at SaveCash. During setup, you'll be prompted to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Create a strong, unique password (at least 12 characters with mix of letters, numbers, and symbols)</li>
                <li>Enable two-factor authentication (2FA) for added security</li>
                <li>Set up security questions for account recovery</li>
                <li>Review and accept our privacy policy and terms of service</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.2 Connecting Your Accounts</h3>
              <p className="mb-4">
                To start saving, you'll need to connect your financial accounts. SaveCash uses bank-level encryption and read-only access, meaning we can analyze your spending but cannot initiate transactions.
              </p>
              <p className="mb-4">
                Supported institutions include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>All major banks (Chase, Bank of America, Wells Fargo, etc.)</li>
                <li>Credit unions nationwide</li>
                <li>Credit card providers</li>
                <li>Investment accounts</li>
                <li>Retirement accounts (401k, IRA)</li>
              </ul>
              <p>
                For detailed instructions on connecting accounts, see our <a href="/help/connecting-accounts" className="text-blue-600 hover:underline">Connecting Your Bank Account</a> guide.
              </p>
            </section>

            {/* Section 4: Understanding the Dashboard */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. Understanding Your Dashboard</h2>
              
              <p className="mb-4">
                Your SaveCash dashboard is your command center for monitoring savings and financial insights. Here's what you'll see:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 Savings Overview</h3>
              <p className="mb-4">
                At the top of your dashboard, you'll see your total savings to date. This includes all automated savings, negotiated discounts, and prevented charges since you started using SaveCash.
              </p>
              <p className="mb-4">
                You can view savings by different time periods:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Today's savings</li>
                <li>This week's savings</li>
                <li>This month's savings</li>
                <li>This year's savings</li>
                <li>All-time savings</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 Active Opportunities</h3>
              <p className="mb-4">
                The Active Opportunities section shows real-time savings that SaveCash has identified and is working on. This might include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Subscription optimizations (finding cheaper plans or canceling unused subscriptions)</li>
                <li>Bill negotiation opportunities (lowering monthly bills)</li>
                <li>Fee prevention (avoiding overdraft or late fees)</li>
                <li>Cashback opportunities (maximizing rewards)</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.3 Spending Analytics</h3>
              <p className="mb-4">
                Your spending analytics provide insights into your financial behavior:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Category breakdown (food, transportation, entertainment, etc.)</li>
                <li>Trends over time (are you spending more or less?)</li>
                <li>Unusual spending patterns that might indicate errors or fraud</li>
                <li>Comparison to similar users (anonymized for privacy)</li>
              </ul>
            </section>

            {/* Section 5: First Savings Actions */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. Your First Savings Actions</h2>
              
              <p className="mb-4">
                Once your accounts are connected, SaveCash will immediately start analyzing your financial data. Here's what happens next:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.1 Initial Analysis</h3>
              <p className="mb-4">
                SaveCash performs a comprehensive analysis of your financial history (typically going back 90 days). This analysis includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Identifying recurring subscriptions and memberships</li>
                <li>Analyzing bill payment history and patterns</li>
                <li>Detecting fees and charges that might be avoidable</li>
                <li>Finding opportunities for better rates or deals</li>
              </ul>
              <p className="mb-4">
                This initial analysis typically takes 24-48 hours. You'll receive a notification when it's complete.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.2 Savings Recommendations</h3>
              <p className="mb-4">
                After the analysis, SaveCash will present you with personalized savings recommendations. Each recommendation includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Potential savings amount</li>
                <li>Explanation of the opportunity</li>
                <li>Estimated time to implement</li>
                <li>Your action required (if any)</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.3 Automated Actions</h3>
              <p className="mb-4">
                Many savings opportunities can be handled automatically by SaveCash. With your permission, we can:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Cancel unused subscriptions on your behalf</li>
                <li>Switch you to better plans automatically</li>
                <li>Set up bill negotiation (where applicable)</li>
                <li>Prevent fees through proactive alerts</li>
              </ul>
              <p>
                You'll always be notified before any automated action is taken, and you can review or cancel any action in your settings.
              </p>
            </section>

            {/* Section 6: Setting Goals */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Setting Financial Goals</h2>
              
              <p className="mb-4">
                Setting financial goals helps SaveCash prioritize savings opportunities and provides you with motivation. Learn more about this in our dedicated <a href="/help/financial-goals" className="text-blue-600 hover:underline">Setting Up Financial Goals</a> guide.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.1 Types of Goals</h3>
              <p className="mb-4">
                SaveCash supports various types of financial goals:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Emergency Fund:</strong> Building a safety net for unexpected expenses</li>
                <li><strong>Vacation Savings:</strong> Saving for a specific trip or experience</li>
                <li><strong>Debt Payoff:</strong> Accelerating debt repayment</li>
                <li><strong>Major Purchase:</strong> Saving for a car, home, or other large expense</li>
                <li><strong>Retirement:</strong> Long-term wealth building</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.2 Goal Tracking</h3>
              <p className="mb-4">
                Once you set a goal, SaveCash will:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Track your progress automatically</li>
                <li>Prioritize savings opportunities that align with your goals</li>
                <li>Send you progress updates and milestones</li>
                <li>Suggest adjustments if you're ahead or behind schedule</li>
              </ul>
            </section>

            {/* Section 7: Mobile App Setup */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Setting Up the Mobile App</h2>
              
              <p className="mb-4">
                For the best SaveCash experience, download our mobile app. It provides real-time notifications, quick access to your dashboard, and on-the-go savings management. See our comprehensive <a href="/help/mobile-app" className="text-blue-600 hover:underline">Using the Mobile App</a> guide for detailed instructions.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.1 Download and Install</h3>
              <p className="mb-4">
                The SaveCash mobile app is available for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>iOS (iPhone and iPad) - Available on the App Store</li>
                <li>Android - Available on Google Play</li>
              </ul>
              <p className="mb-4">
                Simply search for "SaveCash" in your device's app store and download. The app is free to download and use.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.2 Logging In</h3>
              <p className="mb-4">
                Use the same credentials you created on the web to log into the mobile app. If you've enabled two-factor authentication, you'll be prompted for your 2FA code.
              </p>
            </section>

            {/* Section 8: Understanding Savings Opportunities */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">8. Understanding Savings Opportunities</h2>
              
              <p className="mb-4">
                SaveCash identifies various types of savings opportunities. For a deep dive into how we find and implement these, check out our <a href="/help/savings-opportunities" className="text-blue-600 hover:underline">Understanding Savings Opportunities</a> guide.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8.1 Subscription Optimization</h3>
              <p className="mb-4">
                Many people have subscriptions they no longer use or could get cheaper elsewhere. SaveCash identifies:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Unused subscriptions (no activity in 90+ days)</li>
                <li>Duplicate subscriptions (multiple services doing the same thing)</li>
                <li>Better pricing options (annual plans vs monthly, family plans, etc.)</li>
                <li>Competitor offers (same service for less)</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8.2 Bill Negotiation</h3>
              <p className="mb-4">
                SaveCash can help negotiate lower bills for services like:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Cable and internet providers</li>
                <li>Insurance companies</li>
                <li>Phone carriers</li>
                <li>Streaming services</li>
                <li>Utilities (where applicable)</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8.3 Fee Prevention</h3>
              <p className="mb-4">
                SaveCash proactively prevents fees by:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Alerting you before overdraft situations</li>
                <li>Notifying you of upcoming bill due dates</li>
                <li>Identifying late payment risks</li>
                <li>Suggesting balance adjustments to avoid fees</li>
              </ul>
            </section>

            {/* Section 9: Tips for Maximum Savings */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">9. Tips for Maximum Savings</h2>
              
              <p className="mb-4">
                To get the most out of SaveCash, follow these best practices:
              </p>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Connect All Accounts
                  </h3>
                  <p>
                    The more accounts you connect, the more comprehensive our analysis. Don't forget credit cards, investment accounts, and any secondary bank accounts.
                  </p>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    Enable All Notifications
                  </h3>
                  <p>
                    Allow SaveCash to send you notifications so you never miss a savings opportunity or important alert.
                  </p>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600" />
                    Review Recommendations Regularly
                  </h3>
                  <p>
                    Check your dashboard weekly to review new savings opportunities and approve automated actions.
                  </p>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600" />
                    Keep Information Updated
                  </h3>
                  <p>
                    Update your financial goals and preferences as your situation changes so SaveCash can adjust its recommendations.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10: Troubleshooting */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">10. Common Questions and Troubleshooting</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Why haven't I seen any savings yet?</h3>
              <p className="mb-4">
                After connecting your accounts, SaveCash needs 24-48 hours to complete its initial analysis. You'll receive a notification when the analysis is complete and recommendations are ready.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Is my financial data safe?</h3>
              <p className="mb-4">
                Yes! SaveCash uses bank-level 256-bit SSL encryption and follows industry best practices for data security. We have read-only access to your accounts and cannot initiate transactions. Learn more in our <a href="/security" className="text-blue-600 hover:underline">Security</a> documentation.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Can I disconnect an account?</h3>
              <p className="mb-4">
                Yes, you can disconnect any account at any time from your account settings. Disconnecting an account will stop new analysis, but your historical data will remain for reference.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">What if I don't want automated actions?</h3>
              <p className="mb-4">
                You can control automation levels in your settings. Choose to require manual approval for all actions, or customize which types of actions can be automated.
              </p>
            </section>

            {/* Section 11: Next Steps */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">11. Next Steps</h2>
              
              <p className="mb-4">
                Congratulations! You've completed the getting started guide. Here's what to do next:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <a 
                  href="/help/connecting-accounts"
                  className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                    Connect Your Accounts →
                  </h3>
                  <p className="text-sm text-gray-600">
                    Learn how to securely connect your bank accounts and credit cards.
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
                    Create personalized savings goals to maximize your progress.
                  </p>
                </a>
                
                <a 
                  href="/help/mobile-app"
                  className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                    Download Mobile App →
                  </h3>
                  <p className="text-sm text-gray-600">
                    Get the full SaveCash experience on your mobile device.
                  </p>
                </a>
                
                <a 
                  href="/help/savings-opportunities"
                  className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                    Understand Savings →
                  </h3>
                  <p className="text-sm text-gray-600">
                    Learn how SaveCash identifies and implements savings opportunities.
                  </p>
                </a>
              </div>
            </section>

            {/* Section 12: Getting Help */}
            <section className="scroll-mt-8 border-t pt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">12. Need More Help?</h2>
              
              <p className="mb-4">
                If you have questions or need assistance, we're here to help:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Visit our <a href="/help" className="text-blue-600 hover:underline">Help Center</a> for more guides</li>
                <li>Check our <a href="/faq" className="text-blue-600 hover:underline">FAQ page</a> for common questions</li>
                <li>Contact support at <a href="mailto:support@savecash.com" className="text-blue-600 hover:underline">support@savecash.com</a></li>
                <li>Visit our <a href="/support" className="text-blue-600 hover:underline">Support page</a> for additional resources</li>
              </ul>
            </section>

        </div>
      </div>
    </div>
  );
}

