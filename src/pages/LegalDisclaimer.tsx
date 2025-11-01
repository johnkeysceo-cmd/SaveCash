import React from "react";
import { ArrowLeft } from "lucide-react";

export default function LegalDisclaimer() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif", lineHeight: "1.6", color: "#1a1a1a" }}>
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <div className="mb-6">
            <a 
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </div>
          
          <h1 style={{ color: "#1a1a1a", fontSize: "28px", fontWeight: 600, margin: "0 0 32px 0", lineHeight: "1.4" }}>Legal Disclaimer</h1>
          
          <div className="mt-6 space-y-2 text-sm text-gray-600">
            <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", margin: "0 0 8px 0" }}><strong>Company:</strong> SaveCash ("Company", "we", "us", or "our")</p>
            <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", margin: "0 0 8px 0" }}><strong>Website:</strong> <a href="https://savecashpro.vercel.app" className="text-blue-600 hover:underline">https://savecashpro.vercel.app</a></p>
            <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", margin: "0 0 8px 0" }}><strong>Email:</strong> <a href="mailto:privacy.savecashpro@gmail.com" className="text-blue-600 hover:underline">privacy.savecashpro@gmail.com</a></p>
            <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", margin: "0 0 8px 0" }}><strong>Address:</strong> 600 California Street, 11th Floor, San Francisco, CA 94108, United States</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-10 text-base text-gray-700 leading-relaxed">
            
            {/* 1. General Information */}
            <section id="general-information" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>1. General Information</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  The information provided on SaveCash is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the site.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  Under no circumstance shall SaveCash have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
                </p>
              </div>
            </section>

            {/* 2. Financial Advice */}
            <section id="financial-advice" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>2. Financial Advice</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  SaveCash is not a financial advisor, investment advisor, or financial planner. The information provided is not intended as financial advice and should not be construed as such. Always consult with a qualified financial advisor before making any financial decisions.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  All investments carry risk. Past performance does not guarantee future results. We cannot guarantee that any investment, savings strategy, or financial decision will be profitable or suitable for your individual circumstances.
                </p>
              </div>
            </section>

            {/* 3. No Liability */}
            <section id="no-liability" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>3. No Liability</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  Under no circumstance shall SaveCash have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  We cannot guarantee uninterrupted service or that our platform will be error-free. We strive for accuracy but cannot guarantee all information is current or complete.
                </p>
              </div>
            </section>

            {/* 4. External Links */}
            <section id="external-links" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>4. External Links</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  Our site may contain links to external websites that are not provided or maintained by or in any way affiliated with SaveCash. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                </p>
              </div>
            </section>

            {/* 5. User Responsibility */}
            <section id="user-responsibility" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>5. User Responsibility</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  Users are responsible for their own financial decisions and should seek professional advice when appropriate. You acknowledge that you use the Services at your own risk and that you are solely responsible for any decisions made based on information provided through our Services.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  We recommend that you consult with qualified professionals, including financial advisors, accountants, and legal counsel, before making significant financial decisions.
                </p>
              </div>
            </section>

            {/* 6. Service Availability */}
            <section id="service-availability" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>6. Service Availability</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  We cannot guarantee uninterrupted service or that our platform will be error-free. The Services are provided "as is" and "as available" without warranties of any kind, either express or implied.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  We reserve the right to modify, suspend, or discontinue any part of the Services at any time, with or without notice.
                </p>
              </div>
            </section>

            {/* 7. Data Accuracy */}
            <section id="data-accuracy" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>7. Data Accuracy</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  We strive for accuracy but cannot guarantee all information is current or complete. Financial data, market information, and other content may contain errors or become outdated.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  We are not responsible for any errors or omissions, or for the results obtained from the use of this information.
                </p>
              </div>
            </section>

            {/* 8. Investment Risks */}
            <section id="investment-risks" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>8. Investment Risks</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  All investments carry risk. Past performance does not guarantee future results. The value of investments may fluctuate, and you may lose money.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  You should carefully consider whether any investment, savings strategy, or financial decision is suitable for your individual circumstances and risk tolerance.
                </p>
              </div>
            </section>

            {/* 9. Changes to Disclaimer */}
            <section id="changes" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>9. Changes to Disclaimer</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  We reserve the right to update this Legal Disclaimer at any time. Changes will be effective immediately upon posting to the website.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  Your continued use of the Services after any changes to this Disclaimer constitutes your acceptance of such changes.
                </p>
              </div>
            </section>

            {/* 10. Contact */}
            <section id="contact" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>10. Contact</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  If you have any questions about this Legal Disclaimer, please contact us at:
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  <strong>Email:</strong> <a href="mailto:privacy.savecashpro@gmail.com" className="text-blue-600 hover:underline">privacy.savecashpro@gmail.com</a>
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  <strong>Address:</strong> 600 California Street, 11th Floor, San Francisco, CA 94108, United States
                </p>
              </div>
            </section>

            {/* Appendix Section for Footer Link */}
            <div className="border-t border-gray-200 bg-white mt-12 pt-12" id="disclaimer-appendix">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>Appendix: Additional Information</h2>
              <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  This Legal Disclaimer is part of SaveCash's comprehensive legal framework. For additional information, please refer to our Terms of Service, Privacy Policy, Cookie Policy, and End User License Agreement (EULA).
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  This document is maintained in accordance with applicable laws and regulations, including but not limited to consumer protection laws, financial services regulations, and digital commerce standards.
                </p>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
}
