import React from "react";
import { ArrowLeft } from "lucide-react";

export default function ShippingPolicy() {
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
          <h1 style={{ color: "#1a1a1a", fontSize: "28px", fontWeight: 600, margin: "0 0 32px 0", lineHeight: "1.4" }}>Shipping Policy</h1>
          <h4 className="text-base font-normal text-gray-600 mb-12">Effective Date: October 29, 2025</h4>
          <div className="mt-6 space-y-2 text-sm text-gray-600">
            <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", margin: "0 0 8px 0" }}><strong>Company:</strong> SaveCash ("the Company," "we," "our," or "us")</p>
            <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", margin: "0 0 8px 0" }}><strong>Address:</strong> 600 California Street, 11th Floor, San Francisco, CA 94108, United States</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-base text-gray-700 leading-relaxed">
        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>1. Overview</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>This Shipping Policy explains how SaveCash manages fulfillment, delivery, and processing of digital and physical products. By placing an order, you agree to this Policy, our Terms, and Return Policy.</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>2. Geographic Coverage</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>We ship within the United States and select international regions, subject to restrictions and local limitations.</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>3. Free Shipping Eligibility</h2>
          <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Orders over $50 USD (before taxes, after discounts)</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Premium subscribers and SaveCash+ members (when available)</li>
          </ul>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>4. Shipping Methods & Fees</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <div>Standard: 5–7 business days (Free eligible, otherwise $7.95)</div>
            <div>Expedited: 2–3 business days ($19.95)</div>
            <div>Priority: 1–2 business days ($29.95)</div>
          </div>
          <p className="text-sm mt-2">Times are estimates; external factors may affect delivery.</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>5. Third-Party Fulfillment</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Some products are fulfilled by trusted partners. Shipping data may be securely shared solely for fulfillment in compliance with GDPR/CCPA.</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>6. Order Processing</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Orders process in 1–2 business days. You will receive confirmation and tracking (if applicable).</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>7. Delayed Deliveries</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>If delayed, we’ll notify you with updates. Delays beyond 15 business days may be reviewed or canceled per terms.</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>8. International Shipping</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>International orders may incur duties/taxes. Delivery times vary by customs/local carriers. Free shipping may not apply.</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>9. Shipping Restrictions</h2>
          <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Some P.O. boxes/APO/FPO addresses</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Embargoed/Restricted regions</li>
            <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Digital-only items</li>
          </ul>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>10. Order Pickups</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>We do not currently offer in-person pickups; all orders ship from fulfillment centers.</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>11. Return Shipping Costs</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Customers are responsible for return shipping unless due to verified defect/company error. Prepaid labels may be deducted from store credit.</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>12. Lost or Damaged Packages</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Contact privacy.savecashpro@gmail.com within 7 days of expected delivery with order number and photos (if applicable). We’ll work with the carrier for resolution.</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>13. Title & Risk of Loss</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Risk of loss and title pass upon delivery to the carrier.</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>14. Updates</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Updates posted at https://savecashpro.vercel.app/shipping-policy.</p>
        </section>

        <section>
          <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>15. Contact</h2>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Email: privacy.savecashpro@gmail.com</p>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Phone: (661) 812-3265</p>
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>Address: 600 California Street, 11th Floor, San Francisco, CA 94108</p>
        </section>
      </div>
    </div>
  );
}


