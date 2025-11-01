import React from "react";
import { ArrowLeft } from "lucide-react";

export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif", lineHeight: "1.6", color: "#1a1a1a" }}>
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <div className="mb-6">
            <a href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </div>
          <h1 style={{ color: "#1a1a1a", fontSize: "28px", fontWeight: 600, margin: "0 0 32px 0", lineHeight: "1.4" }}>Return Policy</h1>
          <h4 className="text-base font-normal text-gray-600 mb-12">Effective Date: October 29, 2025</h4>
          <div className="mt-6 space-y-2 text-sm text-gray-600">
            <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", margin: "0 0 8px 0" }}><strong>Company:</strong> SaveCash ("we," "our," "us")</p>
            <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", margin: "0 0 8px 0" }}><strong>Address:</strong> 600 California Street, 11th Floor, San Francisco, CA 94108, United States</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-base text-gray-700 leading-relaxed">
        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>1. Overview</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
            This Return Policy describes procedures and standards regarding product and service returns, exchanges, and refund eligibility for SaveCash. Because we provide primarily digital products and AI-powered services, certain restrictions apply.
          </p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>2. General Return Policy</h2>
          <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Eligibility: Returns and exchanges are available for qualifying purchases as detailed below.</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Digital Products: Software downloads, AI modules, and subscriptions are non-returnable and non-refundable once accessed, downloaded, or activated.</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Physical Products (if applicable): Must be unused, in original packaging, and accompanied by proof of purchase.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>3. Return Authorization</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Obtain authorization before sending any item back. Email privacy.savecashpro@gmail.com with:</p>
          <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Your full name and order number</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Item(s) to be returned</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Reason for the return</li>
          </ul>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>4. Items Eligible for Return</h2>
          <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Returned within 7 days of purchase</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Unused and in original condition</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Includes proof of purchase or original invoice</li>
          </ul>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>5. Non-Returnable and Non-Refundable Items</h2>
          <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Digital goods, AI tools, downloadable content, licensed software</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Subscription plans once the billing cycle has started</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Items marked "final sale" or "non-returnable"</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Discounted items, promotional goods, purchases using coupons or credits</li>
          </ul>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>6. Exchanges and Store Credit</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>If approved, returns may be processed as an exchange or store credit. No cash refunds unless legally required.</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>7. Return Process</h2>
          <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Email for authorization and instructions</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Include proof of purchase in the package</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Postmark within 7 days of purchase</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Processing may take up to 7 business days</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Notification via email upon completion</li>
          </ul>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>8. Shipping Fees</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Customers are responsible for return shipping costs unless otherwise stated. Original shipping costs are non-refundable. We are not responsible for returns lost or damaged in transit.</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>9. Return Address</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>SaveCash, 600 California Street, San Francisco, CA, United States · ZIP: [Insert ZIP Code]</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>10. Restocking Fee</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>No restocking fee applies at this time. We reserve the right to introduce such fees for certain physical goods in the future.</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>11. Exceptions</h2>
          <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Evidence of misuse, tampering, or unauthorized software</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Bulk or wholesale orders</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Requests submitted after the return window</li>
          </ul>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>12. Customer Service Contact</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>privacy.savecashpro@gmail.com · (661) 812-3265</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>13. Policy Modifications</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>We may amend this policy. Changes will be posted at https://savecashpro.vercel.app/return-policy. Continued use indicates acceptance.</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>14. Legal Reference</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>This Policy forms part of the broader Terms of Use and is governed by the laws of California, United States.</p>
        </section>
      </div>
    </div>
  );
}


