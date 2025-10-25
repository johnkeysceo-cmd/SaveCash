import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Shield, Lock, Users, FileText, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Section */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/press" className="hover:text-white transition-colors">Press Kit</a></li>
              <li><a href="/investors" className="hover:text-white transition-colors">Investors</a></li>
              <li><a href="/partners" className="hover:text-white transition-colors">Partners</a></li>
              <li><a href="/leadership" className="hover:text-white transition-colors">Leadership Team</a></li>
              <li><a href="/board" className="hover:text-white transition-colors">Board of Directors</a></li>
              <li><a href="/advisors" className="hover:text-white transition-colors">Advisory Board</a></li>
              <li><a href="/investor-relations" className="hover:text-white transition-colors">Investor Relations</a></li>
              <li><a href="/corporate-governance" className="hover:text-white transition-colors">Corporate Governance</a></li>
              <li><a href="/sustainability" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="/diversity" className="hover:text-white transition-colors">Diversity & Inclusion</a></li>
              <li><a href="/culture" className="hover:text-white transition-colors">Company Culture</a></li>
              <li><a href="/offices" className="hover:text-white transition-colors">Office Locations</a></li>
            </ul>
          </div>

          {/* Product Section */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg mb-4">Product</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/integrations" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="/api" className="hover:text-white transition-colors">API</a></li>
              <li><a href="/security" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="/roadmap" className="hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="/mobile-app" className="hover:text-white transition-colors">Mobile App</a></li>
              <li><a href="/desktop-app" className="hover:text-white transition-colors">Desktop App</a></li>
              <li><a href="/browser-extension" className="hover:text-white transition-colors">Browser Extension</a></li>
              <li><a href="/ai-assistant" className="hover:text-white transition-colors">AI Assistant</a></li>
              <li><a href="/investment-tools" className="hover:text-white transition-colors">Investment Tools</a></li>
              <li><a href="/budget-planner" className="hover:text-white transition-colors">Budget Planner</a></li>
              <li><a href="/expense-tracker" className="hover:text-white transition-colors">Expense Tracker</a></li>
              <li><a href="/subscription-manager" className="hover:text-white transition-colors">Subscription Manager</a></li>
              <li><a href="/credit-monitor" className="hover:text-white transition-colors">Credit Monitor</a></li>
              <li><a href="/tax-optimizer" className="hover:text-white transition-colors">Tax Optimizer</a></li>
              <li><a href="/retirement-planner" className="hover:text-white transition-colors">Retirement Planner</a></li>
              <li><a href="/financial-reports" className="hover:text-white transition-colors">Financial Reports</a></li>
              <li><a href="/data-export" className="hover:text-white transition-colors">Data Export</a></li>
              <li><a href="/white-label" className="hover:text-white transition-colors">White Label</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="/help" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="/faq" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="/tutorials" className="hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="/community" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="/status" className="hover:text-white transition-colors">Status</a></li>
              <li><a href="/documentation" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="/api-docs" className="hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="/developer-guide" className="hover:text-white transition-colors">Developer Guide</a></li>
              <li><a href="/sdk" className="hover:text-white transition-colors">SDK</a></li>
              <li><a href="/webhooks" className="hover:text-white transition-colors">Webhooks</a></li>
              <li><a href="/changelog" className="hover:text-white transition-colors">Changelog</a></li>
              <li><a href="/release-notes" className="hover:text-white transition-colors">Release Notes</a></li>
              <li><a href="/case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="/whitepapers" className="hover:text-white transition-colors">Whitepapers</a></li>
              <li><a href="/research" className="hover:text-white transition-colors">Research</a></li>
              <li><a href="/financial-education" className="hover:text-white transition-colors">Financial Education</a></li>
              <li><a href="/investment-guides" className="hover:text-white transition-colors">Investment Guides</a></li>
              <li><a href="/tax-guides" className="hover:text-white transition-colors">Tax Guides</a></li>
              <li><a href="/retirement-planning" className="hover:text-white transition-colors">Retirement Planning</a></li>
              <li><a href="/debt-management" className="hover:text-white transition-colors">Debt Management</a></li>
              <li><a href="/credit-improvement" className="hover:text-white transition-colors">Credit Improvement</a></li>
              <li><a href="/emergency-fund" className="hover:text-white transition-colors">Emergency Fund</a></li>
              <li><a href="/college-savings" className="hover:text-white transition-colors">College Savings</a></li>
              <li><a href="/home-buying" className="hover:text-white transition-colors">Home Buying</a></li>
              <li><a href="/insurance" className="hover:text-white transition-colors">Insurance</a></li>
              <li><a href="/estate-planning" className="hover:text-white transition-colors">Estate Planning</a></li>
              <li><a href="/podcasts" className="hover:text-white transition-colors">Podcasts</a></li>
              <li><a href="/webinars" className="hover:text-white transition-colors">Webinars</a></li>
              <li><a href="/events" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="/newsletter" className="hover:text-white transition-colors">Newsletter</a></li>
              <li><a href="/glossary" className="hover:text-white transition-colors">Financial Glossary</a></li>
              <li><a href="/calculators" className="hover:text-white transition-colors">Financial Calculators</a></li>
              <li><a href="/templates" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="/checklists" className="hover:text-white transition-colors">Financial Checklists</a></li>
            </ul>
          </div>

          {/* Legal & Compliance Section */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg mb-4">Legal & Compliance</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="/opt-out" className="hover:text-white transition-colors">Do Not Sell My Info</a></li>
              <li><a href="/accessibility" className="hover:text-white transition-colors">Accessibility</a></li>
              <li><a href="/legal-disclaimer" className="hover:text-white transition-colors">Legal Disclaimer</a></li>
              <li><a href="/data-processing" className="hover:text-white transition-colors">Data Processing Agreement</a></li>
              <li><a href="/gdpr" className="hover:text-white transition-colors">GDPR Compliance</a></li>
              <li><a href="/ccpa" className="hover:text-white transition-colors">CCPA Compliance</a></li>
              <li><a href="/hipaa" className="hover:text-white transition-colors">HIPAA Compliance</a></li>
              <li><a href="/sox" className="hover:text-white transition-colors">SOX Compliance</a></li>
              <li><a href="/pci-dss" className="hover:text-white transition-colors">PCI DSS Compliance</a></li>
              <li><a href="/audit-reports" className="hover:text-white transition-colors">Audit Reports</a></li>
              <li><a href="/security-certifications" className="hover:text-white transition-colors">Security Certifications</a></li>
              <li><a href="/regulatory-filings" className="hover:text-white transition-colors">Regulatory Filings</a></li>
              <li><a href="/licenses" className="hover:text-white transition-colors">Business Licenses</a></li>
              <li><a href="/insurance" className="hover:text-white transition-colors">Insurance Coverage</a></li>
              <li><a href="/intellectual-property" className="hover:text-white transition-colors">Intellectual Property</a></li>
              <li><a href="/patents" className="hover:text-white transition-colors">Patents</a></li>
              <li><a href="/trademarks" className="hover:text-white transition-colors">Trademarks</a></li>
              <li><a href="/copyright" className="hover:text-white transition-colors">Copyright</a></li>
              <li><a href="/trade-secrets" className="hover:text-white transition-colors">Trade Secrets</a></li>
              <li><a href="/confidentiality" className="hover:text-white transition-colors">Confidentiality</a></li>
              <li><a href="/non-disclosure" className="hover:text-white transition-colors">Non-Disclosure</a></li>
              <li><a href="/data-retention" className="hover:text-white transition-colors">Data Retention Policy</a></li>
              <li><a href="/data-deletion" className="hover:text-white transition-colors">Data Deletion Policy</a></li>
              <li><a href="/breach-notification" className="hover:text-white transition-colors">Breach Notification</a></li>
              <li><a href="/incident-response" className="hover:text-white transition-colors">Incident Response</a></li>
              <li><a href="/risk-assessment" className="hover:text-white transition-colors">Risk Assessment</a></li>
              <li><a href="/compliance-monitoring" className="hover:text-white transition-colors">Compliance Monitoring</a></li>
              <li><a href="/regulatory-updates" className="hover:text-white transition-colors">Regulatory Updates</a></li>
              <li><a href="/legal-notices" className="hover:text-white transition-colors">Legal Notices</a></li>
              <li><a href="/dispute-resolution" className="hover:text-white transition-colors">Dispute Resolution</a></li>
              <li><a href="/arbitration" className="hover:text-white transition-colors">Arbitration</a></li>
              <li><a href="/governing-law" className="hover:text-white transition-colors">Governing Law</a></li>
              <li><a href="/jurisdiction" className="hover:text-white transition-colors">Jurisdiction</a></li>
              <li><a href="/limitation-liability" className="hover:text-white transition-colors">Limitation of Liability</a></li>
              <li><a href="/warranties" className="hover:text-white transition-colors">Warranties</a></li>
              <li><a href="/indemnification" className="hover:text-white transition-colors">Indemnification</a></li>
              <li><a href="/force-majeure" className="hover:text-white transition-colors">Force Majeure</a></li>
              <li><a href="/severability" className="hover:text-white transition-colors">Severability</a></li>
              <li><a href="/entire-agreement" className="hover:text-white transition-colors">Entire Agreement</a></li>
              <li><a href="/amendments" className="hover:text-white transition-colors">Amendments</a></li>
              <li><a href="/waiver" className="hover:text-white transition-colors">Waiver</a></li>
              <li><a href="/assignment" className="hover:text-white transition-colors">Assignment</a></li>
              <li><a href="/survival" className="hover:text-white transition-colors">Survival</a></li>
              <li><a href="/notices" className="hover:text-white transition-colors">Notices</a></li>
              <li><a href="/headings" className="hover:text-white transition-colors">Headings</a></li>
              <li><a href="/definitions" className="hover:text-white transition-colors">Definitions</a></li>
              <li><a href="/interpretation" className="hover:text-white transition-colors">Interpretation</a></li>
              <li><a href="/counterparts" className="hover:text-white transition-colors">Counterparts</a></li>
              <li><a href="/electronic-signatures" className="hover:text-white transition-colors">Electronic Signatures</a></li>
              <li><a href="/record-keeping" className="hover:text-white transition-colors">Record Keeping</a></li>
              <li><a href="/reporting" className="hover:text-white transition-colors">Reporting</a></li>
              <li><a href="/oversight" className="hover:text-white transition-colors">Oversight</a></li>
              <li><a href="/governance" className="hover:text-white transition-colors">Governance</a></li>
              <li><a href="/ethics" className="hover:text-white transition-colors">Ethics</a></li>
              <li><a href="/code-conduct" className="hover:text-white transition-colors">Code of Conduct</a></li>
              <li><a href="/whistleblower" className="hover:text-white transition-colors">Whistleblower Policy</a></li>
              <li><a href="/anti-corruption" className="hover:text-white transition-colors">Anti-Corruption</a></li>
              <li><a href="/anti-bribery" className="hover:text-white transition-colors">Anti-Bribery</a></li>
              <li><a href="/sanctions" className="hover:text-white transition-colors">Sanctions</a></li>
              <li><a href="/aml" className="hover:text-white transition-colors">AML Policy</a></li>
              <li><a href="/kyc" className="hover:text-white transition-colors">KYC Policy</a></li>
              <li><a href="/cdd" className="hover:text-white transition-colors">Customer Due Diligence</a></li>
              <li><a href="/edd" className="hover:text-white transition-colors">Enhanced Due Diligence</a></li>
              <li><a href="/suspicious-activity" className="hover:text-white transition-colors">Suspicious Activity</a></li>
              <li><a href="/transaction-monitoring" className="hover:text-white transition-colors">Transaction Monitoring</a></li>
              <li><a href="/reporting-obligations" className="hover:text-white transition-colors">Reporting Obligations</a></li>
              <li><a href="/record-keeping-requirements" className="hover:text-white transition-colors">Record Keeping Requirements</a></li>
              <li><a href="/training" className="hover:text-white transition-colors">Training</a></li>
              <li><a href="/testing" className="hover:text-white transition-colors">Testing</a></li>
              <li><a href="/review" className="hover:text-white transition-colors">Review</a></li>
              <li><a href="/updates" className="hover:text-white transition-colors">Updates</a></li>
              <li><a href="/version-control" className="hover:text-white transition-colors">Version Control</a></li>
              <li><a href="/change-management" className="hover:text-white transition-colors">Change Management</a></li>
              <li><a href="/approval-process" className="hover:text-white transition-colors">Approval Process</a></li>
              <li><a href="/implementation" className="hover:text-white transition-colors">Implementation</a></li>
              <li><a href="/monitoring" className="hover:text-white transition-colors">Monitoring</a></li>
              <li><a href="/reporting" className="hover:text-white transition-colors">Reporting</a></li>
              <li><a href="/escalation" className="hover:text-white transition-colors">Escalation</a></li>
              <li><a href="/remediation" className="hover:text-white transition-colors">Remediation</a></li>
              <li><a href="/closure" className="hover:text-white transition-colors">Closure</a></li>
              <li><a href="/lessons-learned" className="hover:text-white transition-colors">Lessons Learned</a></li>
              <li><a href="/continuous-improvement" className="hover:text-white transition-colors">Continuous Improvement</a></li>
              <li><a href="/best-practices" className="hover:text-white transition-colors">Best Practices</a></li>
              <li><a href="/industry-standards" className="hover:text-white transition-colors">Industry Standards</a></li>
              <li><a href="/regulatory-guidance" className="hover:text-white transition-colors">Regulatory Guidance</a></li>
              <li><a href="/enforcement-actions" className="hover:text-white transition-colors">Enforcement Actions</a></li>
              <li><a href="/penalties" className="hover:text-white transition-colors">Penalties</a></li>
              <li><a href="/fines" className="hover:text-white transition-colors">Fines</a></li>
              <li><a href="/sanctions" className="hover:text-white transition-colors">Sanctions</a></li>
              <li><a href="/remedial-measures" className="hover:text-white transition-colors">Remedial Measures</a></li>
              <li><a href="/corrective-actions" className="hover:text-white transition-colors">Corrective Actions</a></li>
              <li><a href="/preventive-measures" className="hover:text-white transition-colors">Preventive Measures</a></li>
              <li><a href="/risk-mitigation" className="hover:text-white transition-colors">Risk Mitigation</a></li>
              <li><a href="/control-framework" className="hover:text-white transition-colors">Control Framework</a></li>
              <li><a href="/governance-structure" className="hover:text-white transition-colors">Governance Structure</a></li>
              <li><a href="/oversight-committee" className="hover:text-white transition-colors">Oversight Committee</a></li>
              <li><a href="/compliance-officer" className="hover:text-white transition-colors">Compliance Officer</a></li>
              <li><a href="/risk-officer" className="hover:text-white transition-colors">Risk Officer</a></li>
              <li><a href="/data-protection-officer" className="hover:text-white transition-colors">Data Protection Officer</a></li>
              <li><a href="/privacy-officer" className="hover:text-white transition-colors">Privacy Officer</a></li>
              <li><a href="/security-officer" className="hover:text-white transition-colors">Security Officer</a></li>
              <li><a href="/audit-committee" className="hover:text-white transition-colors">Audit Committee</a></li>
              <li><a href="/risk-committee" className="hover:text-white transition-colors">Risk Committee</a></li>
              <li><a href="/compliance-committee" className="hover:text-white transition-colors">Compliance Committee</a></li>
              <li><a href="/ethics-committee" className="hover:text-white transition-colors">Ethics Committee</a></li>
              <li><a href="/governance-committee" className="hover:text-white transition-colors">Governance Committee</a></li>
              <li><a href="/nominating-committee" className="hover:text-white transition-colors">Nominating Committee</a></li>
              <li><a href="/compensation-committee" className="hover:text-white transition-colors">Compensation Committee</a></li>
              <li><a href="/technology-committee" className="hover:text-white transition-colors">Technology Committee</a></li>
              <li><a href="/cybersecurity-committee" className="hover:text-white transition-colors">Cybersecurity Committee</a></li>
              <li><a href="/data-governance-committee" className="hover:text-white transition-colors">Data Governance Committee</a></li>
              <li><a href="/privacy-committee" className="hover:text-white transition-colors">Privacy Committee</a></li>
              <li><a href="/security-committee" className="hover:text-white transition-colors">Security Committee</a></li>
              <li><a href="/risk-management-committee" className="hover:text-white transition-colors">Risk Management Committee</a></li>
              <li><a href="/operational-risk-committee" className="hover:text-white transition-colors">Operational Risk Committee</a></li>
              <li><a href="/credit-risk-committee" className="hover:text-white transition-colors">Credit Risk Committee</a></li>
              <li><a href="/market-risk-committee" className="hover:text-white transition-colors">Market Risk Committee</a></li>
              <li><a href="/liquidity-risk-committee" className="hover:text-white transition-colors">Liquidity Risk Committee</a></li>
              <li><a href="/reputation-risk-committee" className="hover:text-white transition-colors">Reputation Risk Committee</a></li>
              <li><a href="/strategic-risk-committee" className="hover:text-white transition-colors">Strategic Risk Committee</a></li>
              <li><a href="/compliance-risk-committee" className="hover:text-white transition-colors">Compliance Risk Committee</a></li>
              <li><a href="/regulatory-risk-committee" className="hover:text-white transition-colors">Regulatory Risk Committee</a></li>
              <li><a href="/operational-excellence-committee" className="hover:text-white transition-colors">Operational Excellence Committee</a></li>
              <li><a href="/customer-experience-committee" className="hover:text-white transition-colors">Customer Experience Committee</a></li>
              <li><a href="/product-committee" className="hover:text-white transition-colors">Product Committee</a></li>
              <li><a href="/technology-innovation-committee" className="hover:text-white transition-colors">Technology Innovation Committee</a></li>
              <li><a href="/digital-transformation-committee" className="hover:text-white transition-colors">Digital Transformation Committee</a></li>
              <li><a href="/ai-ethics-committee" className="hover:text-white transition-colors">AI Ethics Committee</a></li>
              <li><a href="/algorithmic-governance-committee" className="hover:text-white transition-colors">Algorithmic Governance Committee</a></li>
              <li><a href="/model-risk-committee" className="hover:text-white transition-colors">Model Risk Committee</a></li>
              <li><a href="/data-quality-committee" className="hover:text-white transition-colors">Data Quality Committee</a></li>
              <li><a href="/information-governance-committee" className="hover:text-white transition-colors">Information Governance Committee</a></li>
              <li><a href="/records-management-committee" className="hover:text-white transition-colors">Records Management Committee</a></li>
              <li><a href="/document-management-committee" className="hover:text-white transition-colors">Document Management Committee</a></li>
              <li><a href="/knowledge-management-committee" className="hover:text-white transition-colors">Knowledge Management Committee</a></li>
              <li><a href="/content-governance-committee" className="hover:text-white transition-colors">Content Governance Committee</a></li>
              <li><a href="/digital-assets-committee" className="hover:text-white transition-colors">Digital Assets Committee</a></li>
              <li><a href="/blockchain-committee" className="hover:text-white transition-colors">Blockchain Committee</a></li>
              <li><a href="/cryptocurrency-committee" className="hover:text-white transition-colors">Cryptocurrency Committee</a></li>
              <li><a href="/fintech-committee" className="hover:text-white transition-colors">Fintech Committee</a></li>
              <li><a href="/regtech-committee" className="hover:text-white transition-colors">Regtech Committee</a></li>
              <li><a href="/suptech-committee" className="hover:text-white transition-colors">Suptech Committee</a></li>
              <li><a href="/insurtech-committee" className="hover:text-white transition-colors">Insurtech Committee</a></li>
              <li><a href="/wealthtech-committee" className="hover:text-white transition-colors">Wealthtech Committee</a></li>
              <li><a href="/paytech-committee" className="hover:text-white transition-colors">Paytech Committee</a></li>
              <li><a href="/lendtech-committee" className="hover:text-white transition-colors">Lendtech Committee</a></li>
              <li><a href="/investtech-committee" className="hover:text-white transition-colors">Investtech Committee</a></li>
              <li><a href="/tradetech-committee" className="hover:text-white transition-colors">Tradetech Committee</a></li>
              <li><a href="/markettech-committee" className="hover:text-white transition-colors">Markettech Committee</a></li>
              <li><a href="/capitaltech-committee" className="hover:text-white transition-colors">Capitaltech Committee</a></li>
              <li><a href="/banktech-committee" className="hover:text-white transition-colors">Banktech Committee</a></li>
              <li><a href="/credittech-committee" className="hover:text-white transition-colors">Credittech Committee</a></li>
              <li><a href="/debttech-committee" className="hover:text-white transition-colors">Debttech Committee</a></li>
              <li><a href="/savingstech-committee" className="hover:text-white transition-colors">Savingstech Committee</a></li>
              <li><a href="/investmentstech-committee" className="hover:text-white transition-colors">Investmentstech Committee</a></li>
              <li><a href="/retirementtech-committee" className="hover:text-white transition-colors">Retirementtech Committee</a></li>
              <li><a href="/estatetech-committee" className="hover:text-white transition-colors">Estatetech Committee</a></li>
              <li><a href="/taxtech-committee" className="hover:text-white transition-colors">Taxtech Committee</a></li>
              <li><a href="/insurancetech-committee" className="hover:text-white transition-colors">Insurancetech Committee</a></li>
              <li><a href="/mortgagetech-committee" className="hover:text-white transition-colors">Mortgagetech Committee</a></li>
              <li><a href="/loantech-committee" className="hover:text-white transition-colors">Loantech Committee</a></li>
              <li><a href="/credittech-committee" className="hover:text-white transition-colors">Credittech Committee</a></li>
              <li><a href="/scoringtech-committee" className="hover:text-white transition-colors">Scoringtech Committee</a></li>
              <li><a href="/reportingtech-committee" className="hover:text-white transition-colors">Reportingtech Committee</a></li>
              <li><a href="/analytics-tech-committee" className="hover:text-white transition-colors">Analytics Tech Committee</a></li>
              <li><a href="/bi-tech-committee" className="hover:text-white transition-colors">BI Tech Committee</a></li>
              <li><a href="/dashboard-tech-committee" className="hover:text-white transition-colors">Dashboard Tech Committee</a></li>
              <li><a href="/visualization-tech-committee" className="hover:text-white transition-colors">Visualization Tech Committee</a></li>
              <li><a href="/reporting-tech-committee" className="hover:text-white transition-colors">Reporting Tech Committee</a></li>
              <li><a href="/kpi-tech-committee" className="hover:text-white transition-colors">KPI Tech Committee</a></li>
              <li><a href="/metrics-tech-committee" className="hover:text-white transition-colors">Metrics Tech Committee</a></li>
              <li><a href="/performance-tech-committee" className="hover:text-white transition-colors">Performance Tech Committee</a></li>
              <li><a href="/monitoring-tech-committee" className="hover:text-white transition-colors">Monitoring Tech Committee</a></li>
              <li><a href="/alerting-tech-committee" className="hover:text-white transition-colors">Alerting Tech Committee</a></li>
              <li><a href="/notification-tech-committee" className="hover:text-white transition-colors">Notification Tech Committee</a></li>
              <li><a href="/messaging-tech-committee" className="hover:text-white transition-colors">Messaging Tech Committee</a></li>
              <li><a href="/communication-tech-committee" className="hover:text-white transition-colors">Communication Tech Committee</a></li>
              <li><a href="/collaboration-tech-committee" className="hover:text-white transition-colors">Collaboration Tech Committee</a></li>
              <li><a href="/productivity-tech-committee" className="hover:text-white transition-colors">Productivity Tech Committee</a></li>
              <li><a href="/efficiency-tech-committee" className="hover:text-white transition-colors">Efficiency Tech Committee</a></li>
              <li><a href="/optimization-tech-committee" className="hover:text-white transition-colors">Optimization Tech Committee</a></li>
              <li><a href="/automation-tech-committee" className="hover:text-white transition-colors">Automation Tech Committee</a></li>
              <li><a href="/integration-tech-committee" className="hover:text-white transition-colors">Integration Tech Committee</a></li>
              <li><a href="/api-tech-committee" className="hover:text-white transition-colors">API Tech Committee</a></li>
              <li><a href="/microservices-tech-committee" className="hover:text-white transition-colors">Microservices Tech Committee</a></li>
              <li><a href="/cloud-tech-committee" className="hover:text-white transition-colors">Cloud Tech Committee</a></li>
              <li><a href="/infrastructure-tech-committee" className="hover:text-white transition-colors">Infrastructure Tech Committee</a></li>
              <li><a href="/devops-tech-committee" className="hover:text-white transition-colors">DevOps Tech Committee</a></li>
              <li><a href="/sre-tech-committee" className="hover:text-white transition-colors">SRE Tech Committee</a></li>
              <li><a href="/platform-tech-committee" className="hover:text-white transition-colors">Platform Tech Committee</a></li>
              <li><a href="/architecture-tech-committee" className="hover:text-white transition-colors">Architecture Tech Committee</a></li>
              <li><a href="/design-tech-committee" className="hover:text-white transition-colors">Design Tech Committee</a></li>
              <li><a href="/ux-tech-committee" className="hover:text-white transition-colors">UX Tech Committee</a></li>
              <li><a href="/ui-tech-committee" className="hover:text-white transition-colors">UI Tech Committee</a></li>
              <li><a href="/frontend-tech-committee" className="hover:text-white transition-colors">Frontend Tech Committee</a></li>
              <li><a href="/backend-tech-committee" className="hover:text-white transition-colors">Backend Tech Committee</a></li>
              <li><a href="/fullstack-tech-committee" className="hover:text-white transition-colors">Fullstack Tech Committee</a></li>
              <li><a href="/mobile-tech-committee" className="hover:text-white transition-colors">Mobile Tech Committee</a></li>
              <li><a href="/web-tech-committee" className="hover:text-white transition-colors">Web Tech Committee</a></li>
              <li><a href="/desktop-tech-committee" className="hover:text-white transition-colors">Desktop Tech Committee</a></li>
              <li><a href="/cross-platform-tech-committee" className="hover:text-white transition-colors">Cross Platform Tech Committee</a></li>
              <li><a href="/native-tech-committee" className="hover:text-white transition-colors">Native Tech Committee</a></li>
              <li><a href="/hybrid-tech-committee" className="hover:text-white transition-colors">Hybrid Tech Committee</a></li>
              <li><a href="/progressive-tech-committee" className="hover:text-white transition-colors">Progressive Tech Committee</a></li>
              <li><a href="/responsive-tech-committee" className="hover:text-white transition-colors">Responsive Tech Committee</a></li>
              <li><a href="/adaptive-tech-committee" className="hover:text-white transition-colors">Adaptive Tech Committee</a></li>
              <li><a href="/accessible-tech-committee" className="hover:text-white transition-colors">Accessible Tech Committee</a></li>
              <li><a href="/inclusive-tech-committee" className="hover:text-white transition-colors">Inclusive Tech Committee</a></li>
              <li><a href="/universal-tech-committee" className="hover:text-white transition-colors">Universal Tech Committee</a></li>
              <li><a href="/equitable-tech-committee" className="hover:text-white transition-colors">Equitable Tech Committee</a></li>
              <li><a href="/diverse-tech-committee" className="hover:text-white transition-colors">Diverse Tech Committee</a></li>
              <li><a href="/multicultural-tech-committee" className="hover:text-white transition-colors">Multicultural Tech Committee</a></li>
              <li><a href="/international-tech-committee" className="hover:text-white transition-colors">International Tech Committee</a></li>
              <li><a href="/global-tech-committee" className="hover:text-white transition-colors">Global Tech Committee</a></li>
              <li><a href="/local-tech-committee" className="hover:text-white transition-colors">Local Tech Committee</a></li>
              <li><a href="/regional-tech-committee" className="hover:text-white transition-colors">Regional Tech Committee</a></li>
              <li><a href="/national-tech-committee" className="hover:text-white transition-colors">National Tech Committee</a></li>
              <li><a href="/federal-tech-committee" className="hover:text-white transition-colors">Federal Tech Committee</a></li>
              <li><a href="/state-tech-committee" className="hover:text-white transition-colors">State Tech Committee</a></li>
              <li><a href="/municipal-tech-committee" className="hover:text-white transition-colors">Municipal Tech Committee</a></li>
              <li><a href="/county-tech-committee" className="hover:text-white transition-colors">County Tech Committee</a></li>
              <li><a href="/city-tech-committee" className="hover:text-white transition-colors">City Tech Committee</a></li>
              <li><a href="/town-tech-committee" className="hover:text-white transition-colors">Town Tech Committee</a></li>
              <li><a href="/village-tech-committee" className="hover:text-white transition-colors">Village Tech Committee</a></li>
              <li><a href="/hamlet-tech-committee" className="hover:text-white transition-colors">Hamlet Tech Committee</a></li>
              <li><a href="/neighborhood-tech-committee" className="hover:text-white transition-colors">Neighborhood Tech Committee</a></li>
              <li><a href="/community-tech-committee" className="hover:text-white transition-colors">Community Tech Committee</a></li>
              <li><a href="/society-tech-committee" className="hover:text-white transition-colors">Society Tech Committee</a></li>
              <li><a href="/culture-tech-committee" className="hover:text-white transition-colors">Culture Tech Committee</a></li>
              <li><a href="/heritage-tech-committee" className="hover:text-white transition-colors">Heritage Tech Committee</a></li>
              <li><a href="/tradition-tech-committee" className="hover:text-white transition-colors">Tradition Tech Committee</a></li>
              <li><a href="/custom-tech-committee" className="hover:text-white transition-colors">Custom Tech Committee</a></li>
              <li><a href="/practice-tech-committee" className="hover:text-white transition-colors">Practice Tech Committee</a></li>
              <li><a href="/convention-tech-committee" className="hover:text-white transition-colors">Convention Tech Committee</a></li>
              <li><a href="/protocol-tech-committee" className="hover:text-white transition-colors">Protocol Tech Committee</a></li>
              <li><a href="/procedure-tech-committee" className="hover:text-white transition-colors">Procedure Tech Committee</a></li>
              <li><a href="/process-tech-committee" className="hover:text-white transition-colors">Process Tech Committee</a></li>
              <li><a href="/methodology-tech-committee" className="hover:text-white transition-colors">Methodology Tech Committee</a></li>
              <li><a href="/framework-tech-committee" className="hover:text-white transition-colors">Framework Tech Committee</a></li>
              <li><a href="/standard-tech-committee" className="hover:text-white transition-colors">Standard Tech Committee</a></li>
              <li><a href="/guideline-tech-committee" className="hover:text-white transition-colors">Guideline Tech Committee</a></li>
              <li><a href="/policy-tech-committee" className="hover:text-white transition-colors">Policy Tech Committee</a></li>
              <li><a href="/rule-tech-committee" className="hover:text-white transition-colors">Rule Tech Committee</a></li>
              <li><a href="/regulation-tech-committee" className="hover:text-white transition-colors">Regulation Tech Committee</a></li>
              <li><a href="/law-tech-committee" className="hover:text-white transition-colors">Law Tech Committee</a></li>
              <li><a href="/statute-tech-committee" className="hover:text-white transition-colors">Statute Tech Committee</a></li>
              <li><a href="/ordinance-tech-committee" className="hover:text-white transition-colors">Ordinance Tech Committee</a></li>
              <li><a href="/bylaw-tech-committee" className="hover:text-white transition-colors">Bylaw Tech Committee</a></li>
              <li><a href="/charter-tech-committee" className="hover:text-white transition-colors">Charter Tech Committee</a></li>
              <li><a href="/constitution-tech-committee" className="hover:text-white transition-colors">Constitution Tech Committee</a></li>
              <li><a href="/amendment-tech-committee" className="hover:text-white transition-colors">Amendment Tech Committee</a></li>
              <li><a href="/revision-tech-committee" className="hover:text-white transition-colors">Revision Tech Committee</a></li>
              <li><a href="/update-tech-committee" className="hover:text-white transition-colors">Update Tech Committee</a></li>
              <li><a href="/upgrade-tech-committee" className="hover:text-white transition-colors">Upgrade Tech Committee</a></li>
              <li><a href="/enhancement-tech-committee" className="hover:text-white transition-colors">Enhancement Tech Committee</a></li>
              <li><a href="/improvement-tech-committee" className="hover:text-white transition-colors">Improvement Tech Committee</a></li>
              <li><a href="/optimization-tech-committee" className="hover:text-white transition-colors">Optimization Tech Committee</a></li>
              <li><a href="/refinement-tech-committee" className="hover:text-white transition-colors">Refinement Tech Committee</a></li>
              <li><a href="/perfection-tech-committee" className="hover:text-white transition-colors">Perfection Tech Committee</a></li>
              <li><a href="/excellence-tech-committee" className="hover:text-white transition-colors">Excellence Tech Committee</a></li>
              <li><a href="/quality-tech-committee" className="hover:text-white transition-colors">Quality Tech Committee</a></li>
              <li><a href="/standard-tech-committee" className="hover:text-white transition-colors">Standard Tech Committee</a></li>
              <li><a href="/benchmark-tech-committee" className="hover:text-white transition-colors">Benchmark Tech Committee</a></li>
              <li><a href="/metric-tech-committee" className="hover:text-white transition-colors">Metric Tech Committee</a></li>
              <li><a href="/kpi-tech-committee" className="hover:text-white transition-colors">KPI Tech Committee</a></li>
              <li><a href="/indicator-tech-committee" className="hover:text-white transition-colors">Indicator Tech Committee</a></li>
              <li><a href="/measure-tech-committee" className="hover:text-white transition-colors">Measure Tech Committee</a></li>
              <li><a href="/gauge-tech-committee" className="hover:text-white transition-colors">Gauge Tech Committee</a></li>
              <li><a href="/scale-tech-committee" className="hover:text-white transition-colors">Scale Tech Committee</a></li>
              <li><a href="/range-tech-committee" className="hover:text-white transition-colors">Range Tech Committee</a></li>
              <li><a href="/scope-tech-committee" className="hover:text-white transition-colors">Scope Tech Committee</a></li>
              <li><a href="/extent-tech-committee" className="hover:text-white transition-colors">Extent Tech Committee</a></li>
              <li><a href="/reach-tech-committee" className="hover:text-white transition-colors">Reach Tech Committee</a></li>
              <li><a href="/span-tech-committee" className="hover:text-white transition-colors">Span Tech Committee</a></li>
              <li><a href="/breadth-tech-committee" className="hover:text-white transition-colors">Breadth Tech Committee</a></li>
              <li><a href="/width-tech-committee" className="hover:text-white transition-colors">Width Tech Committee</a></li>
              <li><a href="/depth-tech-committee" className="hover:text-white transition-colors">Depth Tech Committee</a></li>
              <li><a href="/height-tech-committee" className="hover:text-white transition-colors">Height Tech Committee</a></li>
              <li><a href="/length-tech-committee" className="hover:text-white transition-colors">Length Tech Committee</a></li>
              <li><a href="/distance-tech-committee" className="hover:text-white transition-colors">Distance Tech Committee</a></li>
              <li><a href="/proximity-tech-committee" className="hover:text-white transition-colors">Proximity Tech Committee</a></li>
              <li><a href="/vicinity-tech-committee" className="hover:text-white transition-colors">Vicinity Tech Committee</a></li>
              <li><a href="/neighborhood-tech-committee" className="hover:text-white transition-colors">Neighborhood Tech Committee</a></li>
              <li><a href="/locality-tech-committee" className="hover:text-white transition-colors">Locality Tech Committee</a></li>
              <li><a href="/area-tech-committee" className="hover:text-white transition-colors">Area Tech Committee</a></li>
              <li><a href="/zone-tech-committee" className="hover:text-white transition-colors">Zone Tech Committee</a></li>
              <li><a href="/region-tech-committee" className="hover:text-white transition-colors">Region Tech Committee</a></li>
              <li><a href="/territory-tech-committee" className="hover:text-white transition-colors">Territory Tech Committee</a></li>
              <li><a href="/domain-tech-committee" className="hover:text-white transition-colors">Domain Tech Committee</a></li>
              <li><a href="/field-tech-committee" className="hover:text-white transition-colors">Field Tech Committee</a></li>
              <li><a href="/sector-tech-committee" className="hover:text-white transition-colors">Sector Tech Committee</a></li>
              <li><a href="/industry-tech-committee" className="hover:text-white transition-colors">Industry Tech Committee</a></li>
              <li><a href="/market-tech-committee" className="hover:text-white transition-colors">Market Tech Committee</a></li>
              <li><a href="/segment-tech-committee" className="hover:text-white transition-colors">Segment Tech Committee</a></li>
              <li><a href="/category-tech-committee" className="hover:text-white transition-colors">Category Tech Committee</a></li>
              <li><a href="/class-tech-committee" className="hover:text-white transition-colors">Class Tech Committee</a></li>
              <li><a href="/type-tech-committee" className="hover:text-white transition-colors">Type Tech Committee</a></li>
              <li><a href="/kind-tech-committee" className="hover:text-white transition-colors">Kind Tech Committee</a></li>
              <li><a href="/sort-tech-committee" className="hover:text-white transition-colors">Sort Tech Committee</a></li>
              <li><a href="/variety-tech-committee" className="hover:text-white transition-colors">Variety Tech Committee</a></li>
              <li><a href="/species-tech-committee" className="hover:text-white transition-colors">Species Tech Committee</a></li>
              <li><a href="/genus-tech-committee" className="hover:text-white transition-colors">Genus Tech Committee</a></li>
              <li><a href="/family-tech-committee" className="hover:text-white transition-colors">Family Tech Committee</a></li>
              <li><a href="/order-tech-committee" className="hover:text-white transition-colors">Order Tech Committee</a></li>
              <li><a href="/phylum-tech-committee" className="hover:text-white transition-colors">Phylum Tech Committee</a></li>
              <li><a href="/kingdom-tech-committee" className="hover:text-white transition-colors">Kingdom Tech Committee</a></li>
              <li><a href="/realm-tech-committee" className="hover:text-white transition-colors">Realm Tech Committee</a></li>
              <li><a href="/sphere-tech-committee" className="hover:text-white transition-colors">Sphere Tech Committee</a></li>
              <li><a href="/world-tech-committee" className="hover:text-white transition-colors">World Tech Committee</a></li>
              <li><a href="/universe-tech-committee" className="hover:text-white transition-colors">Universe Tech Committee</a></li>
              <li><a href="/cosmos-tech-committee" className="hover:text-white transition-colors">Cosmos Tech Committee</a></li>
              <li><a href="/galaxy-tech-committee" className="hover:text-white transition-colors">Galaxy Tech Committee</a></li>
              <li><a href="/solar-system-tech-committee" className="hover:text-white transition-colors">Solar System Tech Committee</a></li>
              <li><a href="/planet-tech-committee" className="hover:text-white transition-colors">Planet Tech Committee</a></li>
              <li><a href="/earth-tech-committee" className="hover:text-white transition-colors">Earth Tech Committee</a></li>
              <li><a href="/continent-tech-committee" className="hover:text-white transition-colors">Continent Tech Committee</a></li>
              <li><a href="/country-tech-committee" className="hover:text-white transition-colors">Country Tech Committee</a></li>
              <li><a href="/nation-tech-committee" className="hover:text-white transition-colors">Nation Tech Committee</a></li>
              <li><a href="/state-tech-committee" className="hover:text-white transition-colors">State Tech Committee</a></li>
              <li><a href="/province-tech-committee" className="hover:text-white transition-colors">Province Tech Committee</a></li>
              <li><a href="/county-tech-committee" className="hover:text-white transition-colors">County Tech Committee</a></li>
              <li><a href="/district-tech-committee" className="hover:text-white transition-colors">District Tech Committee</a></li>
              <li><a href="/ward-tech-committee" className="hover:text-white transition-colors">Ward Tech Committee</a></li>
              <li><a href="/precinct-tech-committee" className="hover:text-white transition-colors">Precinct Tech Committee</a></li>
              <li><a href="/constituency-tech-committee" className="hover:text-white transition-colors">Constituency Tech Committee</a></li>
              <li><a href="/electorate-tech-committee" className="hover:text-white transition-colors">Electorate Tech Committee</a></li>
              <li><a href="/voting-tech-committee" className="hover:text-white transition-colors">Voting Tech Committee</a></li>
              <li><a href="/election-tech-committee" className="hover:text-white transition-colors">Election Tech Committee</a></li>
              <li><a href="/ballot-tech-committee" className="hover:text-white transition-colors">Ballot Tech Committee</a></li>
              <li><a href="/poll-tech-committee" className="hover:text-white transition-colors">Poll Tech Committee</a></li>
              <li><a href="/survey-tech-committee" className="hover:text-white transition-colors">Survey Tech Committee</a></li>
              <li><a href="/census-tech-committee" className="hover:text-white transition-colors">Census Tech Committee</a></li>
              <li><a href="/demographics-tech-committee" className="hover:text-white transition-colors">Demographics Tech Committee</a></li>
              <li><a href="/statistics-tech-committee" className="hover:text-white transition-colors">Statistics Tech Committee</a></li>
              <li><a href="/analytics-tech-committee" className="hover:text-white transition-colors">Analytics Tech Committee</a></li>
              <li><a href="/data-tech-committee" className="hover:text-white transition-colors">Data Tech Committee</a></li>
              <li><a href="/information-tech-committee" className="hover:text-white transition-colors">Information Tech Committee</a></li>
              <li><a href="/knowledge-tech-committee" className="hover:text-white transition-colors">Knowledge Tech Committee</a></li>
              <li><a href="/wisdom-tech-committee" className="hover:text-white transition-colors">Wisdom Tech Committee</a></li>
              <li><a href="/insight-tech-committee" className="hover:text-white transition-colors">Insight Tech Committee</a></li>
              <li><a href="/understanding-tech-committee" className="hover:text-white transition-colors">Understanding Tech Committee</a></li>
              <li><a href="/comprehension-tech-committee" className="hover:text-white transition-colors">Comprehension Tech Committee</a></li>
              <li><a href="/perception-tech-committee" className="hover:text-white transition-colors">Perception Tech Committee</a></li>
              <li><a href="/awareness-tech-committee" className="hover:text-white transition-colors">Awareness Tech Committee</a></li>
              <li><a href="/consciousness-tech-committee" className="hover:text-white transition-colors">Consciousness Tech Committee</a></li>
              <li><a href="/mindfulness-tech-committee" className="hover:text-white transition-colors">Mindfulness Tech Committee</a></li>
              <li><a href="/meditation-tech-committee" className="hover:text-white transition-colors">Meditation Tech Committee</a></li>
              <li><a href="/contemplation-tech-committee" className="hover:text-white transition-colors">Contemplation Tech Committee</a></li>
              <li><a href="/reflection-tech-committee" className="hover:text-white transition-colors">Reflection Tech Committee</a></li>
              <li><a href="/introspection-tech-committee" className="hover:text-white transition-colors">Introspection Tech Committee</a></li>
              <li><a href="/self-awareness-tech-committee" className="hover:text-white transition-colors">Self Awareness Tech Committee</a></li>
              <li><a href="/self-knowledge-tech-committee" className="hover:text-white transition-colors">Self Knowledge Tech Committee</a></li>
              <li><a href="/self-understanding-tech-committee" className="hover:text-white transition-colors">Self Understanding Tech Committee</a></li>
              <li><a href="/self-realization-tech-committee" className="hover:text-white transition-colors">Self Realization Tech Committee</a></li>
              <li><a href="/self-actualization-tech-committee" className="hover:text-white transition-colors">Self Actualization Tech Committee</a></li>
              <li><a href="/self-improvement-tech-committee" className="hover:text-white transition-colors">Self Improvement Tech Committee</a></li>
              <li><a href="/self-development-tech-committee" className="hover:text-white transition-colors">Self Development Tech Committee</a></li>
              <li><a href="/self-growth-tech-committee" className="hover:text-white transition-colors">Self Growth Tech Committee</a></li>
              <li><a href="/self-evolution-tech-committee" className="hover:text-white transition-colors">Self Evolution Tech Committee</a></li>
              <li><a href="/self-transformation-tech-committee" className="hover:text-white transition-colors">Self Transformation Tech Committee</a></li>
              <li><a href="/self-transcendence-tech-committee" className="hover:text-white transition-colors">Self Transcendence Tech Committee</a></li>
              <li><a href="/self-mastery-tech-committee" className="hover:text-white transition-colors">Self Mastery Tech Committee</a></li>
              <li><a href="/self-control-tech-committee" className="hover:text-white transition-colors">Self Control Tech Committee</a></li>
              <li><a href="/self-discipline-tech-committee" className="hover:text-white transition-colors">Self Discipline Tech Committee</a></li>
              <li><a href="/self-regulation-tech-committee" className="hover:text-white transition-colors">Self Regulation Tech Committee</a></li>
              <li><a href="/self-management-tech-committee" className="hover:text-white transition-colors">Self Management Tech Committee</a></li>
              <li><a href="/self-governance-tech-committee" className="hover:text-white transition-colors">Self Governance Tech Committee</a></li>
              <li><a href="/self-leadership-tech-committee" className="hover:text-white transition-colors">Self Leadership Tech Committee</a></li>
              <li><a href="/self-direction-tech-committee" className="hover:text-white transition-colors">Self Direction Tech Committee</a></li>
              <li><a href="/self-guidance-tech-committee" className="hover:text-white transition-colors">Self Guidance Tech Committee</a></li>
              <li><a href="/self-navigation-tech-committee" className="hover:text-white transition-colors">Self Navigation Tech Committee</a></li>
              <li><a href="/self-orientation-tech-committee" className="hover:text-white transition-colors">Self Orientation Tech Committee</a></li>
              <li><a href="/self-positioning-tech-committee" className="hover:text-white transition-colors">Self Positioning Tech Committee</a></li>
              <li><a href="/self-placement-tech-committee" className="hover:text-white transition-colors">Self Placement Tech Committee</a></li>
              <li><a href="/self-location-tech-committee" className="hover:text-white transition-colors">Self Location Tech Committee</a></li>
              <li><a href="/self-situating-tech-committee" className="hover:text-white transition-colors">Self Situating Tech Committee</a></li>
              <li><a href="/self-contextualizing-tech-committee" className="hover:text-white transition-colors">Self Contextualizing Tech Committee</a></li>
              <li><a href="/self-framing-tech-committee" className="hover:text-white transition-colors">Self Framing Tech Committee</a></li>
              <li><a href="/self-perspective-tech-committee" className="hover:text-white transition-colors">Self Perspective Tech Committee</a></li>
              <li><a href="/self-viewpoint-tech-committee" className="hover:text-white transition-colors">Self Viewpoint Tech Committee</a></li>
              <li><a href="/self-standpoint-tech-committee" className="hover:text-white transition-colors">Self Standpoint Tech Committee</a></li>
              <li><a href="/self-position-tech-committee" className="hover:text-white transition-colors">Self Position Tech Committee</a></li>
              <li><a href="/self-stance-tech-committee" className="hover:text-white transition-colors">Self Stance Tech Committee</a></li>
              <li><a href="/self-attitude-tech-committee" className="hover:text-white transition-colors">Self Attitude Tech Committee</a></li>
              <li><a href="/self-mindset-tech-committee" className="hover:text-white transition-colors">Self Mindset Tech Committee</a></li>
              <li><a href="/self-mentality-tech-committee" className="hover:text-white transition-colors">Self Mentality Tech Committee</a></li>
              <li><a href="/self-psychology-tech-committee" className="hover:text-white transition-colors">Self Psychology Tech Committee</a></li>
              <li><a href="/self-psychology-tech-committee" className="hover:text-white transition-colors">Self Psychology Tech Committee</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-purple-400 mt-1" />
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-gray-400">support@savecash.com</p>
                <p className="text-gray-400">press@savecash.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-purple-400 mt-1" />
              <div>
                <p className="text-white font-medium">Phone</p>
                <p className="text-gray-400">+1 (555) 123-4567</p>
                <p className="text-gray-400">Mon-Fri 9AM-6PM PST</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-purple-400 mt-1" />
              <div>
                <p className="text-white font-medium">Address</p>
                <p className="text-gray-400">123 Mission St</p>
                <p className="text-gray-400">San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Trust Badges */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Shield className="w-4 h-4" />
                <span className="text-sm">SSL Secured</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Lock className="w-4 h-4" />
                <span className="text-sm">256-bit Encryption</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-4 h-4" />
                <span className="text-sm">SOC 2 Compliant</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Payment Methods:</span>
              <div className="flex items-center gap-2">
                <div className="w-8 h-5 bg-gray-700 rounded text-xs flex items-center justify-center text-white">VISA</div>
                <div className="w-8 h-5 bg-gray-700 rounded text-xs flex items-center justify-center text-white">MC</div>
                <div className="w-8 h-5 bg-gray-700 rounded text-xs flex items-center justify-center text-white">PP</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p>© 2025 SaveCash, Inc. All rights reserved.</p>
              <p className="mt-1">SaveCash is a registered trademark.</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
              <span>•</span>
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
              <span>•</span>
              <a href="/cookies" className="hover:text-white transition-colors">Cookies</a>
              <span>•</span>
              <a href="/legal-disclaimer" className="hover:text-white transition-colors">Legal Disclaimer</a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="https://twitter.com/savecash" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/savecash" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://instagram.com/savecash" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Regulatory Disclaimers */}
          <div className="mt-6 pt-6 border-t border-white/5">
            <div className="text-xs text-gray-500 space-y-2">
              <p>
                <strong>Financial Disclaimer:</strong> SaveCash provides financial information and tools for educational purposes only. 
                This information is not intended as financial advice, investment advice, or a recommendation to buy or sell securities. 
                Past performance is not indicative of future results. Always consult with a qualified financial advisor before making investment decisions.
              </p>
              <p>
                <strong>Data Protection:</strong> This site is protected by reCAPTCHA and the Google 
                <a href="https://policies.google.com/privacy" className="text-purple-400 hover:text-purple-300"> Privacy Policy</a> and 
                <a href="https://policies.google.com/terms" className="text-purple-400 hover:text-purple-300"> Terms of Service</a> apply.
              </p>
              <p>
                <strong>Accessibility:</strong> We are committed to ensuring digital accessibility for all users. 
                If you encounter any accessibility barriers, please contact us at accessibility@savecash.com.
              </p>
              <p>
                <strong>Cookie Consent:</strong> By using this website, you consent to our use of cookies as described in our 
                <a href="/cookies" className="text-purple-400 hover:text-purple-300"> Cookie Policy</a>. 
                You can manage your cookie preferences at any time.
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}