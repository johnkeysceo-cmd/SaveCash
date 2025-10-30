import React from "react";
import { motion } from "motion/react";
import { Truck, ArrowLeft } from "lucide-react";

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-6">
            <a href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex items-center gap-4 mb-2">
            <Truck className="w-8 h-8 text-purple-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Shipping Policy</h1>
          </motion.div>
          <p className="text-sm text-gray-500">Effective Date: [Insert Date]</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">1. Overview</h2>
          <p>This Shipping Policy explains how SaveCash manages fulfillment, delivery, and processing of digital and physical products. By placing an order, you agree to this Policy, our Terms, and Return Policy.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">2. Geographic Coverage</h2>
          <p>We ship within the United States and select international regions, subject to restrictions and local limitations.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">3. Free Shipping Eligibility</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Orders over $50 USD (before taxes, after discounts)</li>
            <li>Premium subscribers and SaveCash+ members (when available)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">4. Shipping Methods & Fees</h2>
          <div className="space-y-2 text-sm text-gray-400">
            <div>Standard: 5–7 business days (Free eligible, otherwise $7.95)</div>
            <div>Expedited: 2–3 business days ($19.95)</div>
            <div>Priority: 1–2 business days ($29.95)</div>
          </div>
          <p className="text-sm text-gray-400 mt-2">Times are estimates; external factors may affect delivery.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">5. Third-Party Fulfillment</h2>
          <p>Some products are fulfilled by trusted partners. Shipping data may be securely shared solely for fulfillment in compliance with GDPR/CCPA.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">6. Order Processing</h2>
          <p>Orders process in 1–2 business days. You will receive confirmation and tracking (if applicable).</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">7. Delayed Deliveries</h2>
          <p>If delayed, we’ll notify you with updates. Delays beyond 15 business days may be reviewed or canceled per terms.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">8. International Shipping</h2>
          <p>International orders may incur duties/taxes. Delivery times vary by customs/local carriers. Free shipping may not apply.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">9. Shipping Restrictions</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Some P.O. boxes/APO/FPO addresses</li>
            <li>Embargoed/Restricted regions</li>
            <li>Digital-only items</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">10. Order Pickups</h2>
          <p>We do not currently offer in-person pickups; all orders ship from fulfillment centers.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">11. Return Shipping Costs</h2>
          <p>Customers are responsible for return shipping unless due to verified defect/company error. Prepaid labels may be deducted from store credit.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">12. Lost or Damaged Packages</h2>
          <p>Contact privacy.savecashpro@gmail.com within 7 days of expected delivery with order number and photos (if applicable). We’ll work with the carrier for resolution.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">13. Title & Risk of Loss</h2>
          <p>Risk of loss and title pass upon delivery to the carrier.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">14. Updates</h2>
          <p>Updates posted at https://savecashpro.vercel.app/shipping-policy.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">15. Contact</h2>
          <p>📧 privacy.savecashpro@gmail.com · 📞 (661) 812-3265 · 📍 600 California Street, 11th Floor, San Francisco, CA 94108</p>
        </section>
      </div>
    </div>
  );
}


