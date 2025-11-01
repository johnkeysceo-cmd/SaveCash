import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Integrations() {
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
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Integrations</h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Connect SaveCash with your favorite tools and services. Integrate with banks, accounting software, investment platforms, and more to create a complete financial ecosystem.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-10 text-base text-gray-700 leading-relaxed">
            
            {/* 1. Bank Connections */}
            <section id="banks" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Bank Connections</h2>
              <div className="space-y-4">
                <p>
                  Securely connect your bank accounts, credit cards, and financial institutions to enable automatic transaction monitoring and savings detection.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li>Major banks and credit unions (Chase, Bank of America, Wells Fargo, etc.)</li>
                  <li>Credit card providers (Visa, Mastercard, American Express)</li>
                  <li>Investment accounts (Fidelity, Vanguard, Schwab)</li>
                  <li>Cryptocurrency exchanges (Coinbase, Binance)</li>
                  <li>Payment services (PayPal, Venmo, Cash App)</li>
                </ul>
                <p>
                  All connections use bank-level security with 256-bit SSL encryption and OAuth authentication. We never store your banking credentials.
                </p>
              </div>
            </section>

            {/* 2. Accounting Software */}
            <section id="accounting" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Accounting Software</h2>
              <div className="space-y-4">
                <p>
                  Sync your financial data with popular accounting platforms for streamlined bookkeeping and financial reporting.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li>QuickBooks (Online and Desktop)</li>
                  <li>Xero</li>
                  <li>FreshBooks</li>
                  <li>Wave Accounting</li>
                  <li>Zoho Books</li>
                  <li>Sage</li>
                </ul>
              </div>
            </section>

            {/* 3. Investment Platforms */}
            <section id="investments" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Investment Platforms</h2>
              <div className="space-y-4">
                <p>
                  Connect investment accounts to get a complete view of your financial portfolio and receive AI-powered investment insights.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li>Fidelity</li>
                  <li>Vanguard</li>
                  <li>Charles Schwab</li>
                  <li>TD Ameritrade</li>
                  <li>E*TRADE</li>
                  <li>Robinhood</li>
                </ul>
              </div>
            </section>

            {/* 4. Budgeting Apps */}
            <section id="budgeting" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Budgeting Apps</h2>
              <div className="space-y-4">
                <p>
                  Export your SaveCash insights and data to your favorite budgeting applications.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li>Mint</li>
                  <li>YNAB (You Need A Budget)</li>
                  <li>PocketGuard</li>
                  <li>Goodbudget</li>
                  <li>Personal Capital</li>
                </ul>
              </div>
            </section>

            {/* 5. Business Tools */}
            <section id="business" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Business Tools</h2>
              <div className="space-y-4">
                <p>
                  Integrate SaveCash with business tools for expense management, invoicing, and financial reporting.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li>Expensify</li>
                  <li>Receipt Bank</li>
                  <li>Stripe</li>
                  <li>Square</li>
                  <li>Shopify</li>
                  <li>Zapier (for custom workflows)</li>
                </ul>
              </div>
            </section>

            {/* 6. Custom Integrations */}
            <section id="custom" className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Custom Integrations</h2>
              <div className="space-y-4">
                <p>
                  Build custom integrations using our REST API or webhooks. Connect SaveCash with any service that supports webhooks or API access.
                </p>
                <p>
                  <strong>API Documentation:</strong> <a href="/api" className="text-blue-600 hover:underline">View API Documentation</a>
                </p>
                <p>
                  <strong>Integration Support:</strong> <a href="mailto:integrations@savecash.com" className="text-blue-600 hover:underline">integrations@savecash.com</a>
                </p>
              </div>
            </section>

        </div>
      </div>
    </div>
  );
}
