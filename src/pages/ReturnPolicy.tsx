import React from "react";
import { motion } from "motion/react";
import { RotateCcw, ArrowLeft } from "lucide-react";

export default function ReturnPolicy() {
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
            <RotateCcw className="w-8 h-8 text-purple-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Return Policy</h1>
          </motion.div>
          <p className="text-sm text-gray-500">Effective Date: [Insert Date] · Last Updated: [Insert Date]</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">1. Overview</h2>
          <p>
            This Return Policy describes procedures and standards regarding product and service returns, exchanges, and refund eligibility for SaveCash. Because we provide primarily digital products and AI-powered services, certain restrictions apply.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">2. General Return Policy</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Eligibility: Returns and exchanges are available for qualifying purchases as detailed below.</li>
            <li>Digital Products: Software downloads, AI modules, and subscriptions are non-returnable and non-refundable once accessed, downloaded, or activated.</li>
            <li>Physical Products (if applicable): Must be unused, in original packaging, and accompanied by proof of purchase.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">3. Return Authorization</h2>
          <p>Obtain authorization before sending any item back. Email privacy.savecashpro@gmail.com with:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Your full name and order number</li>
            <li>Item(s) to be returned</li>
            <li>Reason for the return</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">4. Items Eligible for Return</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Returned within 7 days of purchase</li>
            <li>Unused and in original condition</li>
            <li>Includes proof of purchase or original invoice</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">5. Non-Returnable and Non-Refundable Items</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Digital goods, AI tools, downloadable content, licensed software</li>
            <li>Subscription plans once the billing cycle has started</li>
            <li>Items marked “final sale” or “non-returnable”</li>
            <li>Discounted items, promotional goods, purchases using coupons or credits</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">6. Exchanges and Store Credit</h2>
          <p>If approved, returns may be processed as an exchange or store credit. No cash refunds unless legally required.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">7. Return Process</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Email for authorization and instructions</li>
            <li>Include proof of purchase in the package</li>
            <li>Postmark within 7 days of purchase</li>
            <li>Processing may take up to 7 business days</li>
            <li>Notification via email upon completion</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">8. Shipping Fees</h2>
          <p>Customers are responsible for return shipping costs unless otherwise stated. Original shipping costs are non-refundable. We are not responsible for returns lost or damaged in transit.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">9. Return Address</h2>
          <p>SaveCash, 600 California Street, San Francisco, CA, United States · ZIP: [Insert ZIP Code]</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">10. Restocking Fee</h2>
          <p>No restocking fee applies at this time. We reserve the right to introduce such fees for certain physical goods in the future.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">11. Exceptions</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Evidence of misuse, tampering, or unauthorized software</li>
            <li>Bulk or wholesale orders</li>
            <li>Requests submitted after the return window</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">12. Customer Service Contact</h2>
          <p>privacy.savecashpro@gmail.com · (661) 812-3265</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">13. Policy Modifications</h2>
          <p>We may amend this policy. Changes will be posted at https://savecashpro.vercel.app/return-policy. Continued use indicates acceptance.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">14. Legal Reference</h2>
          <p>This Policy forms part of the broader Terms of Use and is governed by the laws of California, United States.</p>
        </section>
      </div>
    </div>
  );
}


