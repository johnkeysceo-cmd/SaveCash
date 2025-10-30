import React from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { FloatingBlobs } from "../components/FloatingBlobs";
import SaveCashPricing from "../components/SaveCashPricing";

export default function PricingDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Floating Blobs Background */}
      <FloatingBlobs />
      
      {/* Header */}
      <div className="relative z-10 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <a 
              href="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              New Pricing Component Demo
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              This is a demo of the new SaveCash pricing component you can integrate into your existing pricing page.
            </p>
          </motion.div>
        </div>
      </div>

      {/* New Pricing Component */}
      <div className="relative z-10">
        <SaveCashPricing />
      </div>
    </div>
  );
}
