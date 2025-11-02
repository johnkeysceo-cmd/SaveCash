import React from "react";
import LegalPageLayout from "../components/LegalPageLayout";

export default function Cookies() {
  return (
    <LegalPageLayout title="Cookie Policy" currentPath="/cookies">
      <div style={{ marginBottom: "32px" }}>
        <h4 className="text-base font-normal text-gray-600 mb-6" style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", margin: "0 0 24px 0" }}>
          Effective Date: October 29, 2025
        </h4>
        <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
          This Cookie Policy explains how SaveCash uses cookies and similar technologies to recognize you when you visit our website, use our mobile app, or interact with our services ("Services"). It details what these technologies are, why we use them, and your rights to control their use in accordance with applicable data protection laws, including GDPR, CCPA, and the ePrivacy Directive.
        </p>
        <div className="mt-6 space-y-2 text-sm text-gray-600">
          <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", margin: "0 0 8px 0" }}><strong>Company:</strong> SaveCash ("Company", "we", "us", "our")</p>
          <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", margin: "0 0 8px 0" }}><strong>Email:</strong> <a href="mailto:privacy.savecash@gmail.com" className="text-blue-600 hover:underline">privacy.savecash@gmail.com</a></p>
          <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", margin: "0 0 8px 0" }}><strong>Address:</strong> Built in California. Operating globally.</p>
        </div>
      </div>

      <div className="space-y-10 text-base text-gray-700 leading-relaxed">
            
            {/* 1. Introduction */}
            <section id="what-are-cookies" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>1. Introduction</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  This Cookie Policy explains how SaveCash uses cookies and similar technologies to recognize you when you visit our website, use our mobile app, or interact with our services ("Services"). It details what these technologies are, why we use them, and your rights to control their use in accordance with applicable data protection laws, including GDPR, CCPA, and the ePrivacy Directive.
                </p>
              </div>
            </section>

            {/* 2. What Are Cookies? */}
            <section id="what-are-cookies-detail" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>2. What Are Cookies?</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  Cookies are small data files stored on your device (computer, smartphone, tablet) when you visit a website. They serve various functions, such as enabling core website functionality, improving performance, remembering user preferences, and delivering personalized content or advertisements.
                </p>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Cookies may be:</h4>
                  <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><strong>First-party cookies:</strong> set directly by SaveCash.</li>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><strong>Third-party cookies:</strong> set by external vendors or partners (e.g., analytics, advertising, or embedded media).</li>
                  </ul>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 mt-4">Cookies can also be classified as:</h4>
                  <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><strong>Session cookies:</strong> deleted once you close your browser.</li>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><strong>Persistent cookies:</strong> remain on your device for a specified duration or until manually deleted.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Types of Cookies */}
            <section id="types-of-cookies" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>3. Types of Cookies</h2>
              <div className="space-y-6">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  We use different types of cookies for different purposes. Here's how we categorize them:
                </p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                  <p className="mb-3" style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                    These cookies are necessary for the website to function properly. They cannot be disabled.
                  </p>
                  <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Keep you logged in to your account</li>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Remember your security preferences</li>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Protect against fraud and security threats</li>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Load balance and ensure site stability</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
                  <p className="mb-3" style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Track page views and user journeys</li>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Measure website performance and speed</li>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Identify popular features and content</li>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Improve user experience based on usage patterns</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Functional Cookies</h3>
                  <p className="mb-3" style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences.
                  </p>
                  <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Remember your language and region preferences</li>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Store your dashboard layout and settings</li>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Remember your notification preferences</li>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Enable chat support and help features</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
                  <p className="mb-3" style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                    These cookies are used to deliver advertisements more relevant to you and your interests.
                  </p>
                  <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Show relevant advertisements on other websites</li>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Measure the effectiveness of our marketing campaigns</li>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Limit the number of times you see an ad</li>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Provide social media features and content</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Cookies */}
            <section id="how-we-use" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>4. How We Use Cookies</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  We use cookies to provide, protect, and improve our services. Here's a detailed breakdown of our cookie usage:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Security & Authentication</h4>
                    <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Session management and user authentication</li>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>CSRF protection and security tokens</li>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Fraud detection and prevention</li>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Two-factor authentication state</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">User Experience</h4>
                    <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Remember your login preferences</li>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Store dashboard layout and settings</li>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Language and region preferences</li>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Notification and alert settings</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Analytics & Performance</h4>
                    <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Track feature usage and engagement</li>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Monitor website performance</li>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Identify and fix technical issues</li>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>A/B testing and optimization</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Marketing & Communication</h4>
                    <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Personalized content recommendations</li>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Email campaign effectiveness</li>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Social media integration</li>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Retargeting and remarketing</li>
                    </ul>
                </div>
                </div>
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section id="third-party" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>5. Third-Party Cookies</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  We work with trusted third-party services that may set their own cookies. These partners help us provide better services and analytics.
                </p>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                    <h4 className="text-white font-semibold mb-3">Our Trusted Partners</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-purple-400 font-medium mb-2">Analytics Partners</h5>
                        <ul className="space-y-1 text-sm text-gray-400">
                          <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>• Google Analytics (privacy-focused)</li>
                          <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>• Mixpanel (product analytics)</li>
                          <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>• Hotjar (user experience)</li>
                        </ul>
                      </div>
                <div>
                        <h5 className="text-purple-400 font-medium mb-2">Security Partners</h5>
                        <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                          <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>• Cloudflare (security & performance)</li>
                          <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>• Auth0 (authentication)</li>
                          <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>• Sentry (error monitoring)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6">
                    <h4 className="text-blue-400 font-semibold mb-3">Third-Party Cookie Control</h4>
                    <p className="text-sm text-blue-200">
                      You can control third-party cookies through your browser settings or by using our cookie preference center. 
                      Note that disabling certain third-party cookies may affect the functionality of our services.
                    </p>
                </div>
                </div>
              </div>
            </section>

            {/* Manage Preferences */}
            <section id="manage-preferences" className="scroll-mt-8">
              <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>6. Manage Your Cookie Preferences</h2>
              <div className="space-y-4">
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  You have full control over your cookie preferences. You can enable or disable different types of cookies at any time through your browser settings or our cookie preference center.
                </p>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1. Cookie Settings</h3>
                  <p className="mb-3" style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>You can manage your cookie preferences as follows:</p>
                  <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><strong>Essential Cookies:</strong> Required for basic website functionality. These cannot be disabled.</li>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><strong>Analytics Cookies:</strong> Help us improve our services by analyzing how visitors use our website.</li>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><strong>Functional Cookies:</strong> Remember your preferences and settings.</li>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><strong>Marketing Cookies:</strong> Used to deliver personalized content and advertisements.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2. Browser Settings</h3>
                  <p className="mb-3" style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                    Most browsers allow you to control cookies through their settings. Here's how to manage cookies in popular browsers:
                  </p>
                  <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                  </ul>
                </div>
              </div>
            </section>

      </div>

      {/* Appended: Full Legal Cookie Policy (no deletions) */}
      <div className="border-t border-gray-200 bg-white" id="cookie-policy-full">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">Cookie Policy (Full Legal Text)</h2>
            <p className="text-base text-gray-600">Effective Date: October 29, 2025</p>
            <p className="text-base text-gray-700 mt-3">
              Company: SaveCash ("Company", "we", "us", "our") · Email: privacy.savecash@gmail.com · Address: Built in California. Operating globally.
            </p>
          </div>

          <div className="space-y-10 text-base text-gray-700 leading-relaxed">
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">1. Introduction</h3>
              <p>
                This Cookie Policy explains how SaveCash uses cookies and similar technologies to recognize you when you visit our website, use our mobile app, or interact with our services (“Services”). It details what these technologies are, why we use them, and your rights to control their use in accordance with applicable data protection laws, including GDPR, CCPA, and the ePrivacy Directive.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">2. What Are Cookies?</h3>
              <p className="mb-3">
                Cookies are small data files stored on your device when you visit a website. They enable core functionality, improve performance, remember preferences, and deliver personalized content or ads.
              </p>
                  <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><span className="text-white font-medium">First-party cookies</span>: set directly by SaveCash.</li>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><span className="text-white font-medium">Third-party cookies</span>: set by external vendors (e.g., analytics, advertising, embedded media).</li>
              </ul>
              <p className="mt-3">Cookies can also be:</p>
                  <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><span className="text-white font-medium">Session cookies</span>: deleted once you close your browser.</li>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}><span className="text-white font-medium">Persistent cookies</span>: remain on your device for a specified duration or until manually deleted.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">3. Why We Use Cookies</h3>
                  <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Ensure technical functionality and security</li>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Remember login, settings, and preferences</li>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Analyze behavior to improve performance</li>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Measure marketing campaign effectiveness</li>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Personalize browsing experience</li>
                      <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Provide consent management through our platform</li>
              </ul>
              <p className="mt-3 text-gray-400">We do not use cookies to store sensitive personal data such as passwords or payment details.</p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">4. Types of Cookies We Use</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">a. Strictly Necessary Cookies</h4>
                  <p className="text-gray-400 mb-3">Essential for basic operations and cannot be disabled.</p>
                  <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Session authentication</li>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Security validation</li>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Consent logging</li>
                    <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Server load balancing</li>
                  </ul>
                  <div className="overflow-x-auto mt-3">
                    <table className="w-full text-sm">
                      <thead className="text-gray-400">
                        <tr className="text-left">
                          <th className="pr-4 py-2">Cookie Name</th>
                          <th className="pr-4 py-2">Provider</th>
                          <th className="pr-4 py-2">Purpose</th>
                          <th className="py-2">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">__cf_bm</td>
                          <td className="pr-4 py-2">Cloudflare</td>
                          <td className="pr-4 py-2">Bot detection & service integrity</td>
                          <td className="py-2">30 minutes</td>
                        </tr>
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">session_id</td>
                          <td className="pr-4 py-2">SaveCash</td>
                          <td className="pr-4 py-2">Maintains login state</td>
                          <td className="py-2">Session</td>
                        </tr>
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">consent_id</td>
                          <td className="pr-4 py-2">Termly / SaveCash CMP</td>
                          <td className="pr-4 py-2">Records user cookie preferences</td>
                          <td className="py-2">12 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">b. Functional Cookies</h4>
                  <p className="text-gray-400 mb-3">Enhance experience by remembering preferences.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="text-gray-400">
                        <tr className="text-left">
                          <th className="pr-4 py-2">Cookie Name</th>
                          <th className="pr-4 py-2">Provider</th>
                          <th className="pr-4 py-2">Purpose</th>
                          <th className="py-2">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">user_lang</td>
                          <td className="pr-4 py-2">SaveCash</td>
                          <td className="pr-4 py-2">Saves preferred language</td>
                          <td className="py-2">6 months</td>
                        </tr>
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">theme_mode</td>
                          <td className="pr-4 py-2">SaveCash</td>
                          <td className="pr-4 py-2">Stores UI theme choice</td>
                          <td className="py-2">6 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">c. Analytics and Performance Cookies</h4>
                  <p className="text-gray-400 mb-3">Help us understand interactions and optimize experience.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="text-gray-400">
                        <tr className="text-left">
                          <th className="pr-4 py-2">Cookie Name</th>
                          <th className="pr-4 py-2">Provider</th>
                          <th className="pr-4 py-2">Purpose</th>
                          <th className="py-2">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">_ga</td>
                          <td className="pr-4 py-2">Google Analytics</td>
                          <td className="pr-4 py-2">Tracks user sessions & usage</td>
                          <td className="py-2">2 years</td>
                        </tr>
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">_gid</td>
                          <td className="pr-4 py-2">Google Analytics</td>
                          <td className="pr-4 py-2">Distinguishes users</td>
                          <td className="py-2">24 hours</td>
                        </tr>
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">ajs_anonymous_id</td>
                          <td className="pr-4 py-2">Segment</td>
                          <td className="pr-4 py-2">Anonymized usage analytics</td>
                          <td className="py-2">12 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">d. Advertising and Targeting Cookies</h4>
                  <p className="text-gray-400 mb-3">Used to deliver relevant ads and measure performance.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="text-gray-400">
                        <tr className="text-left">
                          <th className="pr-4 py-2">Cookie Name</th>
                          <th className="pr-4 py-2">Provider</th>
                          <th className="pr-4 py-2">Purpose</th>
                          <th className="py-2">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">_fbp</td>
                          <td className="pr-4 py-2">Meta (Facebook)</td>
                          <td className="pr-4 py-2">Measures advertising effectiveness</td>
                          <td className="py-2">90 days</td>
                        </tr>
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">_gcl_au</td>
                          <td className="pr-4 py-2">Google Ads</td>
                          <td className="pr-4 py-2">Stores campaign click data</td>
                          <td className="py-2">90 days</td>
                        </tr>
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">li_sugr</td>
                          <td className="pr-4 py-2">LinkedIn</td>
                          <td className="pr-4 py-2">Tracks engagement for ads</td>
                          <td className="py-2">90 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Opt out via your browser or the NAI opt-out tool.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">e. AI and Feature Optimization Cookies</h4>
                  <p className="text-gray-400 mb-3">Support our AI modules and recommendation systems.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="text-gray-400">
                        <tr className="text-left">
                          <th className="pr-4 py-2">Cookie Name</th>
                          <th className="pr-4 py-2">Provider</th>
                          <th className="pr-4 py-2">Purpose</th>
                          <th className="py-2">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">ai_user_token</td>
                          <td className="pr-4 py-2">SaveCash</td>
                          <td className="pr-4 py-2">Tracks AI personalization session</td>
                          <td className="py-2">30 days</td>
                        </tr>
                        <tr className="border-t border-gray-800">
                          <td className="pr-4 py-2">recommend_cache</td>
                          <td className="pr-4 py-2">SaveCash</td>
                          <td className="pr-4 py-2">Stores behavior data for recommendations</td>
                          <td className="py-2">14 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">5. Third-Party Cookies and Vendors</h3>
              <p>Our primary vendors include Google (Analytics/Tag Manager), Stripe, Meta, Segment, Vercel, and Termly. Each vendor adheres to GDPR-compliant DPAs and provides opt-out mechanisms.</p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">6. Consent and Control</h3>
                  <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                <li>Modify cookie settings anytime via our Cookie Preferences Center</li>
                <li>Withdraw consent without affecting prior processing</li>
                <li>Block cookies via browser settings (may affect functionality)</li>
              </ul>
              <div className="mt-3 text-sm text-gray-400 space-y-1">
                <div>Chrome → Settings → Privacy and Security → Cookies</div>
                <div>Safari → Preferences → Privacy</div>
                <div>Firefox → Options → Privacy & Security</div>
                <div>Edge → Settings → Site Permissions → Cookies</div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">7. Google Consent Mode (v2)</h3>
              <p>We integrate Consent Mode v2 to dynamically adjust Google tags based on user consent choices.</p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">8. Data Retention and Expiry</h3>
              <p>We retain cookie data only as long as necessary for the stated purposes. Expired cookies are automatically deleted or anonymized.</p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">9. International Transfers</h3>
              <p>Where data is processed outside your country, we use SCCs and other safeguards to protect your data.</p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">10. Updates</h3>
              <p>The latest version will always be available on our Cookie Policy page. Significant updates will be notified via banner or email.</p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">11. Contact Us</h3>
              <p>Email: privacy.savecash@gmail.com</p>
              <p>Address: Built in California. Operating globally.</p>
            </section>
          </div>
        </div>
      </div>
    </LegalPageLayout>
  );
}