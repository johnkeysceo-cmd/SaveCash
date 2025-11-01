import React from "react";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { navigateToHomeWithScrollRestore } from "../utils/scrollRestore";

export default function Contact() {
  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateToHomeWithScrollRestore();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-6">
            <a 
              href="/"
              onClick={handleBackClick}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Contact Us</h1>
          
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            Ready to transform your financial future? Let's start the conversation.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="max-w-2xl">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:privacy.savecash@gmail.com" className="text-base text-purple-600 hover:text-purple-700 hover:underline mb-1 block">
                      privacy.savecash@gmail.com
                    </a>
                    <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                    <a href="tel:+16618123265" className="text-base text-gray-700 hover:text-blue-600 mb-1 block">
                      (661) 812-3265
                    </a>
                    <p className="text-sm text-gray-600">Mon-Fri, 9AM-6PM PST</p>
                  </div>
                </div>
                
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-green-100 rounded-lg">
                          <MapPin className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                          <p className="text-base text-gray-700 mb-1">Built in California. Operating globally.</p>
                          <p className="text-sm text-gray-600">Virtual HQ — global operations</p>
                        </div>
                      </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Response Time</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-base text-gray-700">General Inquiries</span>
                  <span className="text-base font-medium text-gray-900">24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-base text-gray-700">Technical Support</span>
                  <span className="text-base font-medium text-gray-900">12 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-base text-gray-700">Enterprise Sales</span>
                  <span className="text-base font-medium text-gray-900">4 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
