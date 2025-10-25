import React, { useState } from "react";
import { motion } from "motion/react";
import { PageTemplate } from "../components/PageTemplate";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, HelpCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@savecash.com",
      hours: "24/7 response within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      hours: "Mon-Fri 9AM-6PM PST"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with AI assistant",
      contact: "Available 24/7",
      hours: "Instant responses"
    }
  ];

  const departments = [
    {
      icon: HelpCircle,
      title: "General Support",
      description: "Account questions, technical issues, general inquiries",
      email: "support@savecash.com"
    },
    {
      icon: Users,
      title: "Business Partnerships",
      description: "Partnership opportunities, integrations, enterprise solutions",
      email: "partnerships@savecash.com"
    },
    {
      icon: Mail,
      title: "Press & Media",
      description: "Media inquiries, press releases, interview requests",
      email: "press@savecash.com"
    }
  ];

  return (
    <PageTemplate 
      title="Contact Us" 
      subtitle="We're here to help. Get in touch with our team for any questions or support."
    >
      {/* Contact Methods */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Get in Touch</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the best way to reach us based on your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="p-8 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <method.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 mb-4">{method.description}</p>
                <p className="text-purple-400 font-medium mb-2">{method.contact}</p>
                <p className="text-sm text-gray-500">{method.hours}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Send us a Message</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </motion.div>

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
                  <label className="block text-white font-medium mb-2">Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Subject</label>
                <Input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full h-32 px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="Tell us more about your question or concern..."
                  required
                />
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-8 py-3 text-lg rounded-full"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Specific Departments</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Reach out to the right team for your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.title}
                className="p-8 bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <dept.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{dept.title}</h3>
                <p className="text-gray-400 mb-4">{dept.description}</p>
                <p className="text-purple-400 font-medium">{dept.email}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 text-white">Visit Our Office</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Address</h3>
                    <p className="text-gray-400">
                      123 Mission St<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-400">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 flex items-center justify-center">
                <MapPin className="w-32 h-32 text-purple-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTemplate>
  );
}
