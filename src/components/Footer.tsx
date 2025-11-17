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


export default function Footer() {
  // Next.js app URL - points to stripe-privacy-clone-main folder
  // IMPORTANT: In Vercel, set environment variable VITE_NEXTJS_APP_URL to your deployed Next.js app URL
  // Example: https://your-nextjs-app.vercel.app
  // For development, defaults to http://localhost:3000
 
  // Access Vite environment variable correctly
  const envUrl = (import.meta as any).env?.VITE_NEXTJS_APP_URL;
  const isProduction = typeof window !== 'undefined' &&
    window.location.hostname !== 'localhost' &&
    window.location.hostname !== '127.0.0.1';
 
  // Debug: Log the URL being used (remove in production if desired)
  if (typeof window !== 'undefined') {
    console.log('Next.js App URL:', envUrl || 'Using fallback');
    console.log('Is Production:', isProduction);
  }
 
  // Ensure we always have a full URL (http:// or https://) so links open in new tab
  // In production, you MUST set VITE_NEXTJS_APP_URL environment variable in Vercel
  // to point to your deployed Next.js app (from stripe-privacy-clone-main folder)
  const NEXTJS_APP_URL = envUrl ||
    (isProduction 
      ? (() => {
          // If no env var set in production, log warning but don't break
          if (typeof window !== 'undefined') {
            console.warn('⚠️ VITE_NEXTJS_APP_URL not set! Footer links will not work in production.');
            console.warn('   Deploy the Next.js app from stripe-privacy-clone-main (1) to Vercel');
            console.warn('   Then set VITE_NEXTJS_APP_URL in your Vercel project environment variables');
          }
          // Return empty string so links fail gracefully instead of going to placeholder
          return '';
        })()
      : 'http://localhost:3000');
 
  // Helper function to ensure URL is absolute
  const getAbsoluteUrl = (path: string) => {
    // If path already starts with http:// or https://, return as is
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }
    // If NEXTJS_APP_URL is empty (production without env var), return '#' to prevent broken links
    if (!NEXTJS_APP_URL) {
      return '#';
    }
    // Otherwise, prepend the base URL
    return `${NEXTJS_APP_URL}${path.startsWith('/') ? path : '/' + path}`;
  };


  const companyLinks = [
    { title: "About Us", href: getAbsoluteUrl('/about'), icon: Users },
    { title: "Contact", href: getAbsoluteUrl('/contact'), icon: Mail }
  ];


  const productLinks = [
    { title: "Security", href: getAbsoluteUrl('/security'), icon: Shield }
  ];


  const resourceLinks = [
    { title: "Accessibility", href: getAbsoluteUrl('/accessibility'), icon: Accessibility }
  ];


  const legalLinks = [
    { title: "Privacy Policy", href: getAbsoluteUrl('/'), icon: Lock },
    { title: "Terms of Service", href: getAbsoluteUrl('/terms'), icon: Scale },
    { title: "Cookie Policy", href: getAbsoluteUrl('/cookies'), icon: Cookie },
    { title: "EULA", href: getAbsoluteUrl('/eula'), icon: FileText },
    { title: "Acceptable Use", href: getAbsoluteUrl('/acceptable-use'), icon: AlertTriangle },
    { title: "Disclaimer", href: getAbsoluteUrl('/disclaimer'), icon: AlertTriangle },
    { title: "Accessibility", href: getAbsoluteUrl('/accessibility'), icon: Accessibility }
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
                  target="_blank"
                  rel="noopener noreferrer"
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
                  target="_blank"
                  rel="noopener noreferrer"
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
                  target="_blank"
                  rel="noopener noreferrer"
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
                  target="_blank"
                  rel="noopener noreferrer"
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
            </motion.div>
           
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 text-sm"
            >
              <motion.a
                href={getAbsoluteUrl('/')}
                target="_blank"
                rel="noopener noreferrer"
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
                href={getAbsoluteUrl('/terms')}
                target="_blank"
                rel="noopener noreferrer"
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
                href={getAbsoluteUrl('/cookies')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
                whileHover={{
                  scale: 1.05
                }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Cookies
              </motion.a>
              <motion.a
                href={getAbsoluteUrl('/contact')}
                target="_blank"
                rel="noopener noreferrer"
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
