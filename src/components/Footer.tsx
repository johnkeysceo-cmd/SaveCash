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
              <li><a href="/leadership" className="hover:text-white transition-colors">Leadership</a></li>
            </ul>
          </div>

          {/* Product Section */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg mb-4">Product</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/security" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="/api" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="/help" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="/faq" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="/documentation" className="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Legal & Compliance Section */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="/opt-out" className="hover:text-white transition-colors">Do Not Sell My Info</a></li>
              <li><a href="/accessibility" className="hover:text-white transition-colors">Accessibility</a></li>
              <li><a href="/legal-disclaimer" className="hover:text-white transition-colors">Legal Disclaimer</a></li>
              <li><a href="/data-processing" className="hover:text-white transition-colors">Data Processing</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>support@financely.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
          </div>
        </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Shield className="w-4 h-4" />
                <span>Bank-level Security</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Lock className="w-4 h-4" />
                <span>SOC 2 Compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
            </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Financely</h3>
                <p className="text-gray-400 text-sm">AI-Powered Financial Intelligence</p>
          </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-6">
                <span>© 2024 SaveCash Pro. All rights reserved.</span>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>English (US)</span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-xs">
                <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="/legal-disclaimer" className="hover:text-white transition-colors">Legal</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}