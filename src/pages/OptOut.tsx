import React, { useState } from "react";
import { motion } from "motion/react";
import { PageTemplate } from "../components/PageTemplate";
import { AnimatedBlob } from "../components/AnimatedBlob";
import { Shield, Mail, Phone, User, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export function OptOut() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle opt-out request
    console.log("Opt-out request:", formData);
    setIsSubmitted(true);
  };

  const rights = [
    {
      icon: Shield,
      title: "Right to Opt-Out",
      description: "You have the right to opt-out of the sale or sharing of your personal information"
    },
    {
      icon: User,
      title: "Right to Know",
      description: "You have the right to know what personal information we collect and how we use it"
    },
    {
      icon: Mail,
      title: "Right to Delete",
      description: "You have the right to request deletion of your personal information"
    },
    {
      icon: Phone,
      title: "Right to Correct",
      description: "You have the right to request correction of inaccurate personal information"
    }
  ];

  const dataTypes = [
    {
      category: "Personal Information",
      items: ["Name", "Email address", "Phone number", "Date of birth", "Address"]
    },
    {
      category: "Financial Information",
      items: ["Bank account details", "Transaction history", "Credit information", "Investment data"]
    },
    {
      category: "Usage Information",
      items: ["Website interactions", "App usage", "Feature usage", "Device information"]
    },
    {
      category: "Marketing Information",
      items: ["Preferences", "Communication history", "Survey responses", "Behavioral data"]
    }
  ];

  return (
    <PageTemplate 
      title="Do Not Sell My Personal Information" 
      subtitle="Exercise your privacy rights and control how your personal information is used."
    >
      {/* Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
              <Shield className="w-10 h-10 text-purple-400" />
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Your Privacy Rights</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Under the California Consumer Privacy Act (CCPA) and other privacy laws, you have the right to 
              opt-out of the sale or sharing of your personal information. We respect your privacy choices.
            </p>
            <div className="mt-8 text-sm text-gray-500">
              Last updated: January 15, 2025
            </div>
          </motion.div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Your Privacy Rights</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              You have several important privacy rights under applicable laws
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rights.map((right, index) => (
              <motion.div
                key={right.title}
                className="p-6 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <right.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{right.title}</h3>
                <p className="text-gray-400 text-sm">{right.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data We Collect */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Types of Data We Collect</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Understanding what personal information we collect and how it's used
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataTypes.map((type, index) => (
              <motion.div
                key={type.category}
                className="p-8 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">{type.category}</h3>
                <ul className="space-y-2">
                  {type.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opt-Out Form */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Opt-Out Request</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Submit your request to opt-out of the sale or sharing of your personal information
            </p>
          </motion.div>

          {!isSubmitted ? (
            <motion.div
              className="p-8 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">First Name</label>
                    <Input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Last Name</label>
                    <Input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email Address</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Phone Number (Optional)</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg rounded-full"
                  >
                    Submit Opt-Out Request
                  </Button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              className="p-8 bg-green-500/10 rounded-3xl border border-green-500/20 backdrop-blur-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Request Submitted Successfully</h3>
              <p className="text-gray-400 mb-6">
                Your opt-out request has been submitted. We will process your request within 30 days 
                and send you a confirmation email.
              </p>
              <div className="text-sm text-gray-500">
                <p>Request ID: #OPT-{Date.now().toString().slice(-6)}</p>
                <p>Submitted: {new Date().toLocaleDateString()}</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="p-8 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-8 h-8 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-4">Important Information</h3>
                <div className="space-y-4 text-gray-400">
                  <p>
                    <strong>Processing Time:</strong> We will process your opt-out request within 30 days of receipt.
                  </p>
                  <p>
                    <strong>Verification:</strong> We may need to verify your identity before processing your request.
                  </p>
                  <p>
                    <strong>Effectiveness:</strong> Your opt-out will apply to future sales and sharing of your information.
                  </p>
                  <p>
                    <strong>Contact:</strong> If you have questions about your opt-out request, contact us at privacy@savecash.com.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Animated Blob Background */}
      <AnimatedBlob />
    </PageTemplate>
  );
}
