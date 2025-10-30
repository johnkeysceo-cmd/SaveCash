import React from "react";
import { motion } from "motion/react";
import { Shield, Lock, Database, AlertTriangle, RefreshCw, ArrowLeft } from "lucide-react";

export default function SecurityOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
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
            className="flex items-center gap-4 mb-2"
          >
            <Shield className="w-8 h-8 text-purple-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Security Overview</h1>
          </motion.div>
          <p className="text-sm text-gray-500">Enterprise summary of controls, encryption, incident response, and resilience.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Lock className="w-5 h-5 text-green-400" /> Encryption</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>TLS 1.2+ in transit; HSTS enabled</li>
            <li>Provider-managed encryption at rest</li>
            <li>Secrets isolated via environment management</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Database className="w-5 h-5 text-blue-400" /> Access Control</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>RBAC with least privilege</li>
            <li>MFA enforced for privileged access</li>
            <li>Quarterly access reviews and immediate revocation on exit</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-yellow-400" /> Incident Response</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Documented IRP with 24/7 triage</li>
            <li>Forensic logging and post-incident reviews</li>
            <li>Breach notifications aligned to GDPR/CCPA timelines</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><RefreshCw className="w-5 h-5 text-cyan-400" /> Backups & DR</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Automated snapshots with periodic restore tests</li>
            <li>Multi‑AZ provider availability</li>
            <li>Documented RTO/RPO targets for core systems</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2"><Shield className="w-5 h-5 text-purple-400" /> Secure SDLC</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Peer review, dependency scanning, CI checks</li>
            <li>Infrastructure as code with immutable deploys</li>
            <li>Change management with approvals and rollback plans</li>
          </ul>
        </section>

        <section>
          <div className="mt-8 flex flex-col sm:flex-row gap-6">
            <a
              href={
                "mailto:privacy.savecashpro@gmail.com?subject=" +
                encodeURIComponent("Security documentation request: SOC2/Audit/IRP") +
                "&body=" +
                encodeURIComponent(
                  "Hello SaveCash Security Team,%0D%0A%0D%0A" +
                  "Please share your latest security documentation (e.g., SOC 2 summary when available, IRP overview, subprocessor list, and security whitepaper).%0D%0A%0D%0A" +
                  "Company:%20%0D%0AUse%20case:%20%0D%0ATimeline:%20%0D%0A%0D%0AThank%20you!"
                )
              }
              className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              Request security docs
            </a>
            <a
              href="/privacy"
              className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
            >
              View privacy & compliance
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}


