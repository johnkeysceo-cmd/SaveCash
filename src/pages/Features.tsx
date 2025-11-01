import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Features() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-6">
            <a 
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Features</h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            SaveCash provides AI-powered financial automation that helps you save more, spend smarter, and achieve your financial goals. Explore our comprehensive suite of features designed to transform how you manage money.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-10 text-base text-gray-700 leading-relaxed">
            
            {/* 1. AI-Powered Monitoring */}
            <section id="ai-monitoring" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. 24/7 AI Monitoring</h2>
              <div className="space-y-4">
                <p>
                  Our advanced AI continuously monitors your financial transactions, spending patterns, and account activity to identify savings opportunities and potential issues in real-time.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><strong>Real-time Transaction Analysis:</strong> Every transaction is analyzed instantly for patterns, anomalies, and savings opportunities.</li>
                  <li><strong>Automatic Savings Detection:</strong> AI identifies hidden fees, duplicate charges, and opportunities to switch to better rates automatically.</li>
                  <li><strong>Spending Pattern Recognition:</strong> Learn your habits and alert you when spending patterns shift or unusual activity occurs.</li>
                  <li><strong>Continuous Optimization:</strong> The system gets smarter over time, learning your preferences and financial goals.</li>
                </ul>
              </div>
            </section>

            {/* 2. Instant Insights & Alerts */}
            <section id="instant-insights" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Instant Insights & Alerts</h2>
              <div className="space-y-4">
                <p>
                  Get notified immediately when important financial events occur or when opportunities to save money are detected.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><strong>Smart Alerts:</strong> Receive notifications when spending patterns shift, bills are due, or savings opportunities appear.</li>
                  <li><strong>Personalized Recommendations:</strong> Get tailored advice based on your financial behavior and goals.</li>
                  <li><strong>Opportunity Detection:</strong> Instant alerts when better rates, discounts, or financial products become available.</li>
                  <li><strong>Risk Warnings:</strong> Early warnings about potential financial risks or unusual account activity.</li>
                </ul>
              </div>
            </section>

            {/* 3. Bank-Grade Security */}
            <section id="security" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Bank-Grade Security</h2>
              <div className="space-y-4">
                <p>
                  Your financial data is protected with military-grade encryption and zero-knowledge architecture. We never sell your data, and your privacy is our foundation.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><strong>256-bit SSL Encryption:</strong> All data is encrypted in transit and at rest using bank-grade security standards.</li>
                  <li><strong>Zero Data Selling:</strong> We never sell or rent your personal information to third parties.</li>
                  <li><strong>Multi-Factor Authentication:</strong> Advanced security protocols to protect your account from unauthorized access.</li>
                  <li><strong>Regular Security Audits:</strong> Continuous monitoring and regular third-party security assessments.</li>
                  <li><strong>SOC 2 Compliant:</strong> Meeting the highest standards for security, availability, and confidentiality.</li>
                </ul>
              </div>
            </section>

            {/* 4. Effortless Savings Automation */}
            <section id="automation" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Effortless Savings Automation</h2>
              <div className="space-y-4">
                <p>
                  Automatically find and eliminate financial waste so your money grows on autopilot without requiring constant attention.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><strong>Automatic Fee Detection:</strong> Identify and eliminate hidden fees, duplicate charges, and unnecessary subscriptions.</li>
                  <li><strong>Smart Bill Negotiation:</strong> AI-powered suggestions for negotiating better rates on recurring bills.</li>
                  <li><strong>Subscription Management:</strong> Track all subscriptions and identify opportunities to cancel or switch to better deals.</li>
                  <li><strong>Automatic Savings Transfers:</strong> Set up rules to automatically transfer money to savings based on your spending patterns.</li>
                  <li><strong>Goal-Based Automation:</strong> Automatically adjust savings strategies based on your financial goals and timelines.</li>
                </ul>
              </div>
            </section>

            {/* 5. Financial Intelligence Dashboard */}
            <section id="dashboard" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Financial Intelligence Dashboard</h2>
              <div className="space-y-4">
                <p>
                  A comprehensive, easy-to-understand dashboard that gives you complete visibility into your financial health.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><strong>Real-time Financial Overview:</strong> See your complete financial picture at a glance with intuitive visualizations.</li>
                  <li><strong>Spending Analysis:</strong> Detailed breakdowns of where your money goes with category insights and trends.</li>
                  <li><strong>Savings Tracking:</strong> Monitor your progress toward financial goals with clear, actionable metrics.</li>
                  <li><strong>Predictive Analytics:</strong> Forecast future spending and savings based on historical patterns and trends.</li>
                  <li><strong>Customizable Reports:</strong> Generate detailed financial reports tailored to your needs and preferences.</li>
                </ul>
              </div>
            </section>

            {/* 6. AI Financial Assistant */}
            <section id="ai-assistant" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. AI Financial Assistant</h2>
              <div className="space-y-4">
                <p>
                  Get personalized financial advice and answers to your money questions from our AI-powered assistant, available 24/7.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><strong>Natural Language Questions:</strong> Ask questions in plain English and get instant, accurate answers.</li>
                  <li><strong>Personalized Recommendations:</strong> Receive advice tailored to your financial situation and goals.</li>
                  <li><strong>Budget Planning:</strong> Get help creating and managing budgets that work for your lifestyle.</li>
                  <li><strong>Investment Guidance:</strong> Access insights and recommendations for investment decisions (not financial advice).</li>
                  <li><strong>Financial Education:</strong> Learn about personal finance topics through interactive conversations.</li>
                </ul>
              </div>
            </section>

            {/* 7. Goal Setting & Tracking */}
            <section id="goals" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Goal Setting & Tracking</h2>
              <div className="space-y-4">
                <p>
                  Set financial goals and track your progress with intelligent automation and personalized recommendations.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><strong>Multiple Goal Types:</strong> Set savings goals, debt payoff goals, investment targets, and more.</li>
                  <li><strong>Smart Milestones:</strong> Break down large goals into manageable milestones with automatic progress tracking.</li>
                  <li><strong>Automated Progress Updates:</strong> Receive regular updates on your progress toward each goal.</li>
                  <li><strong>Goal Recommendations:</strong> Get AI suggestions for realistic goals based on your income and spending patterns.</li>
                  <li><strong>Visual Progress Tracking:</strong> See your progress with clear, motivating visualizations.</li>
                </ul>
              </div>
            </section>

            {/* 8. Bill Management & Reminders */}
            <section id="bills" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Bill Management & Reminders</h2>
              <div className="space-y-4">
                <p>
                  Never miss a payment again with intelligent bill tracking and automated reminders.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><strong>Automatic Bill Detection:</strong> AI identifies recurring bills and creates a comprehensive bill calendar.</li>
                  <li><strong>Payment Reminders:</strong> Get timely reminders before bills are due, helping you avoid late fees.</li>
                  <li><strong>Bill Optimization:</strong> Analyze bills for opportunities to reduce costs or switch to better providers.</li>
                  <li><strong>Payment History:</strong> Track all bill payments in one place with detailed history and categorization.</li>
                  <li><strong>Subscription Tracking:</strong> Monitor all subscriptions and identify unused or duplicate services.</li>
                </ul>
              </div>
            </section>

            {/* 9. Integrations & Connections */}
            <section id="integrations" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Integrations & Connections</h2>
              <div className="space-y-4">
                <p>
                  Connect SaveCash with your banks, credit cards, investment accounts, and other financial services for a complete financial picture.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><strong>Bank Account Connections:</strong> Securely connect checking, savings, and credit card accounts.</li>
                  <li><strong>Investment Account Integration:</strong> Link investment accounts for comprehensive portfolio tracking.</li>
                  <li><strong>Bill Payment Integration:</strong> Connect with bill payment services for automated bill management.</li>
                  <li><strong>Third-Party Apps:</strong> Integrate with popular financial apps and services for enhanced functionality.</li>
                  <li><strong>Secure API Access:</strong> Use our API to build custom integrations and workflows.</li>
                </ul>
              </div>
            </section>

            {/* 10. Mobile Apps & Accessibility */}
            <section id="mobile" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Mobile Apps & Accessibility</h2>
              <div className="space-y-4">
                <p>
                  Access your financial information and manage your savings from anywhere with our mobile applications.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li><strong>iOS & Android Apps:</strong> Full-featured mobile apps for iPhone and Android devices.</li>
                  <li><strong>Real-time Sync:</strong> All your data syncs instantly across all devices.</li>
                  <li><strong>Mobile Notifications:</strong> Get important alerts and insights on your mobile device.</li>
                  <li><strong>Biometric Security:</strong> Use fingerprint or face ID for quick, secure access.</li>
                  <li><strong>Offline Access:</strong> View key information even when offline.</li>
                </ul>
              </div>
            </section>

        </div>
      </div>
    </div>
  );
}
