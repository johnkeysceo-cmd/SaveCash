import React from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  Briefcase, 
  Users, 
  Newspaper, 
  TrendingUp, 
  Shield, 
  Code, 
  Link, 
  Activity,
  HelpCircle,
  FileText,
  BookOpen,
  MessageSquare,
  LifeBuoy,
  Lock,
  Scale,
  Cookie,
  Eye,
  Accessibility,
  AlertTriangle,
  ExternalLink
} from "lucide-react";
import { SecuritySwitch } from "./ui/SecuritySwitch";

export default function Footer() {
  const companyLinks = [
    { title: "About Us", href: "/about", icon: Users },
    { title: "Careers", href: "/careers", icon: Briefcase },
    { title: "Contact", href: "/contact", icon: Mail },
    { title: "Leadership", href: "/leadership", icon: Users },
    { title: "Press", href: "/press", icon: Newspaper },
    { title: "Investors", href: "/investors", icon: TrendingUp }
  ];

  const productLinks = [
    { title: "Features", href: "/features", icon: TrendingUp },
    { title: "Pricing", href: "/pricing", icon: TrendingUp },
    { title: "Security", href: "/security", icon: Shield },
    { title: "Security Overview", href: "/security-overview", icon: Shield },
    { title: "API", href: "/api", icon: Code },
    { title: "Integrations", href: "/integrations", icon: Link },
    { title: "Status", href: "/status", icon: Activity }
  ];

  const resourceLinks = [
    { title: "Help Center", href: "/help", icon: HelpCircle },
    { title: "FAQs", href: "/faq", icon: HelpCircle },
    { title: "Documentation", href: "/documentation", icon: FileText },
    { title: "Blog", href: "/blog", icon: BookOpen },
    { title: "Support", href: "/support", icon: LifeBuoy }
  ];

  const legalLinks = [
    { title: "Privacy Policy", href: "/privacy#privacy-investor-compliance", icon: Lock },
    { title: "Terms of Service", href: "/terms#terms-investor-appendix", icon: Scale },
    { title: "Cookie Policy", href: "/cookies#cookie-policy-full", icon: Cookie },
    { title: "Do Not Sell My Info", href: "/opt-out", icon: Eye },
    { title: "Accessibility", href: "/accessibility", icon: Accessibility },
    { title: "Legal Disclaimer", href: "/legal-disclaimer#disclaimer-appendix", icon: AlertTriangle },
    { title: "EULA", href: "/eula#eula-appendix", icon: FileText },
    { title: "Return Policy", href: "/return-policy", icon: FileText },
    { title: "Shipping Policy", href: "/shipping-policy", icon: FileText }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Company Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-gray-900 font-semibold text-lg mb-6">Company</h4>
            <p className="text-xs text-gray-600 mb-4">Learn more about who we are and how to reach us.</p>
            <div className="space-y-4">
              {companyLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
                  aria-label={`Company · ${link.title}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <link.icon className="w-4 h-4 text-gray-500 group-hover:text-purple-600 transition-colors duration-300" />
                  <span className="group-hover:underline">{link.title}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Product Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-gray-900 font-semibold text-lg mb-6">Product</h4>
            <p className="text-xs text-gray-600 mb-4">Explore features, pricing, and platform status.</p>
            <div className="space-y-4">
              {productLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
                  aria-label={`Product · ${link.title}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <link.icon className="w-4 h-4 text-gray-500 group-hover:text-purple-600 transition-colors duration-300" />
                  <span className="group-hover:underline flex items-center gap-2">
                    {link.title}
                    {link.title === "Security Overview" && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-100 text-purple-700 border border-purple-300">New</span>
                    )}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Resources Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-gray-900 font-semibold text-lg mb-6">Resources</h4>
            <p className="text-xs text-gray-600 mb-4">Help, docs, and resources for your success.</p>
            <div className="space-y-4">
              {resourceLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
                  aria-label={`Resources · ${link.title}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <link.icon className="w-4 h-4 text-gray-500 group-hover:text-purple-600 transition-colors duration-300" />
                  <span className="group-hover:underline">{link.title}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Legal Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-gray-900 font-semibold text-lg mb-6">Legal</h4>
            <p className="text-xs text-gray-600 mb-4">Policies, compliance, and user rights.</p>
            <div className="space-y-4">
              {legalLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
                  aria-label={`Legal · ${link.title}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <link.icon className="w-4 h-4 text-gray-500 group-hover:text-purple-600 transition-colors duration-300" />
                  <span className="group-hover:underline">
                    {link.title}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Footer Base */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <div className="text-gray-700 text-sm mb-2">
                © 2025 SaveCash. All rights reserved.
              </div>
              <div className="text-gray-600 text-xs">
                Select visual elements licensed via Shutterstock.
              </div>
              <div className="text-gray-600 text-xs mt-1">
                SaveCash is a registered trademark.
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 text-sm"
            >
              <motion.a
                href="/privacy"
                className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
                whileHover={{ 
                  scale: 1.05
                }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                viewport={{ once: true }}
              >
                Privacy
              </motion.a>
              <motion.a
                href="/terms"
                className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
                whileHover={{ 
                  scale: 1.05
                }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.75 }}
                viewport={{ once: true }}
              >
                Terms
              </motion.a>
              <motion.a
                href="/licenses"
                className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
                whileHover={{ 
                  scale: 1.05
                }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Licenses & Credits
              </motion.a>
              <motion.a
                href="/contact"
                className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
                whileHover={{ 
                  scale: 1.05
                }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.85 }}
                viewport={{ once: true }}
              >
                Contact
              </motion.a>
              {/* Security toggle (visual control) */}
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Security</span>
                <SecuritySwitch />
              </div>
            </motion.div>
            
            {/* Official Tagline */}
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-900 font-semibold text-base">
                SaveCash — Built in California. Operating globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}