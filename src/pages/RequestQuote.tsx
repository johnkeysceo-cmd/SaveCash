import React, { useState } from "react";
import { ArrowLeft, Mail, Phone, Building2, Send, Sparkles } from "lucide-react";

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    companySize: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", phone: "", companySize: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

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
          
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">Request a Quote</h1>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-700 font-semibold">Custom Pricing — Pre-Launch</span>
          </div>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Interested in custom pricing or enterprise solutions? Fill out the form below and our team will provide a personalized quote based on your specific needs.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get Your Custom Quote</h2>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="companySize" className="block text-sm font-semibold text-gray-900 mb-2">
                    Company Size
                  </label>
                  <select
                    id="companySize"
                    value={formData.companySize}
                    onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select size</option>
                    <option value="individual">Individual</option>
                    <option value="small">Small Business (1-50)</option>
                    <option value="mid">Mid-Market (51-500)</option>
                    <option value="enterprise">Enterprise (500+)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Tell Us About Your Needs
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Describe your requirements, expected savings, or any specific features you need..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Request Quote
                </button>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <p className="text-green-800 font-semibold mb-2">✓ Thank You!</p>
                <p className="text-green-700 text-sm">
                  We've received your request and will contact you within 24 hours with a personalized quote.
                </p>
              </div>
            )}
          </div>
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <a 
                      href="mailto:privacy.savecash@gmail.com" 
                      className="text-purple-600 hover:underline font-medium"
                    >
                      privacy.savecash@gmail.com
                    </a>
                    <p className="text-sm text-gray-600 mt-2">Response within 24 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                    <a 
                      href="tel:+16618123265" 
                      className="text-blue-600 hover:underline font-medium"
                    >
                      (661) 812-3265
                    </a>
                    <p className="text-sm text-gray-600 mt-2">Monday-Friday, 9AM-6PM PST</p>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="bg-purple-100 text-purple-700 font-semibold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs">1</span>
                    <span>We review your requirements and financial profile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-purple-100 text-purple-700 font-semibold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs">2</span>
                    <span>Our team prepares a customized pricing proposal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-purple-100 text-purple-700 font-semibold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs">3</span>
                    <span>We schedule a call to discuss options and answer questions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-purple-100 text-purple-700 font-semibold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs">4</span>
                    <span>You receive a detailed quote with all pricing details</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

