import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Security() {
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
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Security</h1>
          
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            Security is not a feature at SaveCash — it's the foundation.
          </p>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Every byte of data is encrypted with AES-256 standards, protected by multi-layer authentication and continuous threat monitoring.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-10 text-base text-gray-700 leading-relaxed">
            
          {/* Security Overview */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security Overview</h2>
            <p className="mb-4">
              We comply with SOC 2, GDPR, and financial-grade encryption frameworks, ensuring user trust at every level.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AES-256 Encryption</h3>
                <p className="mb-2">Military-grade encryption for all data at rest and in transit</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>256-bit encryption</li>
                  <li>End-to-end security</li>
                  <li>Zero-knowledge architecture</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Factor Authentication</h3>
                <p className="mb-2">Advanced authentication protocols to protect your account</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>2FA required</li>
                  <li>Biometric support</li>
                  <li>Hardware key support</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Monitoring</h3>
                <p className="mb-2">24/7 threat detection and response systems</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Real-time monitoring</li>
                  <li>AI threat detection</li>
                  <li>Instant alerts</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Infrastructure</h3>
                <p className="mb-2">Enterprise-grade infrastructure with redundant security layers</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>SOC 2 compliant</li>
                  <li>ISO 27001 certified</li>
                  <li>Regular audits</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Compliance & Certifications */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Compliance & Certifications</h2>
            <p className="mb-4">
              We maintain the highest standards of security and compliance across all jurisdictions.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Certifications</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>SOC 2 Type II:</strong> Security, availability, and confidentiality controls</li>
                  <li><strong>ISO 27001:</strong> Information security management system</li>
                  <li><strong>PCI DSS Level 1:</strong> Payment card industry security standards</li>
                  <li><strong>GDPR Compliant:</strong> European data protection regulation</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Security Practices</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Regular Security Audits:</strong> Quarterly third-party security assessments</li>
                  <li><strong>Penetration Testing:</strong> Annual ethical hacking and vulnerability assessments</li>
                  <li><strong>Employee Training:</strong> Regular security awareness and phishing simulation</li>
                  <li><strong>Incident Response:</strong> 24/7 security operations center with rapid response</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection</h2>
            <p className="mb-4">
              Your financial data is protected by multiple layers of security and privacy controls.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Encryption</h3>
                <p className="mb-2">All data is encrypted using industry-standard AES-256 encryption</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Data encrypted at rest</li>
                  <li>Data encrypted in transit</li>
                  <li>End-to-end encryption</li>
                  <li>Zero-knowledge architecture</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Access Controls</h3>
                <p className="mb-2">Strict access controls ensure only authorized personnel can access data</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Role-based access control</li>
                  <li>Multi-factor authentication</li>
                  <li>Regular access reviews</li>
                  <li>Principle of least privilege</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Privacy</h3>
                <p className="mb-2">We never sell or share your personal data with third parties</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>No data selling</li>
                  <li>Minimal data collection</li>
                  <li>User consent required</li>
                  <li>Right to deletion</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Security Metrics */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security Metrics</h2>
            <p className="mb-4">Our security performance speaks for itself.</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold text-gray-900">99.99%</div>
                <div className="text-sm text-gray-600">Uptime</div>
                <div className="text-xs text-gray-500">System availability</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">&lt; 5min</div>
                <div className="text-sm text-gray-600">Response Time</div>
                <div className="text-xs text-gray-500">Security incident response</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">&lt; 0.1%</div>
                <div className="text-sm text-gray-600">False Positives</div>
                <div className="text-xs text-gray-500">AI threat detection accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">A+</div>
                <div className="text-sm text-gray-600">Audit Score</div>
                <div className="text-xs text-gray-500">Third-party security rating</div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
