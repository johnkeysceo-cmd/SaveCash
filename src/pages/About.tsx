import React from "react";
import { ArrowLeft } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif", lineHeight: "1.6", color: "#1a1a1a" }}>
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <div className="mb-6">
            <a 
              href="/"
              onClick={(e) => {
                e.preventDefault();
                // Save current scroll before navigating
                const scrollPos = window.scrollY || document.documentElement.scrollTop;
                sessionStorage.setItem('savecash_scroll_position_about', scrollPos.toString());
                // Navigate and restore home scroll
                window.history.pushState({}, "", "/");
                window.dispatchEvent(new CustomEvent("navigate", {
                  detail: { path: "/", restoreScroll: true }
                }));
              }}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </div>
          
          <h1 style={{ color: "#1a1a1a", fontSize: "28px", fontWeight: 600, margin: "0 0 32px 0", lineHeight: "1.4" }}>
            About SaveCash
          </h1>
          
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
            SaveCash is redefining how people experience money. Our mission is simple: make every dollar smarter.
          </p>
          
          <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
            Founded on the belief that financial freedom should be effortless, SaveCash blends automation, intelligence, and design into one seamless ecosystem that helps users save more, spend smarter, and live better — all powered by ethical, transparent AI.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="space-y-10 text-base text-gray-700 leading-relaxed">
            
          {/* Our Story */}
          <section>
            <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>
              Our Story
            </h2>
            <div className="space-y-4">
              <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                Every great innovation starts with a simple question: "What if it could be better?"
              </p>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "32px" }}>The Problem We Saw</h3>
                <p className="mb-3" style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  Traditional financial tools are complex, fragmented, and designed for institutions — not people. We watched millions struggle with outdated systems that made managing money feel like a burden, not an opportunity.
                </p>
                <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Hidden fees eating into savings</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Complex interfaces that confuse users</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>No intelligent automation or insights</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "32px" }}>Our Vision</h3>
                <p className="mb-3" style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  We believe financial technology should be invisible, intelligent, and empowering. SaveCash represents a new paradigm where AI doesn't replace human judgment — it amplifies human potential.
                </p>
                <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>AI that works for you, not against you</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Transparent, ethical automation</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Financial freedom made effortless</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section>
            <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>
              Our Values
            </h2>
            <p className="mb-4" style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 32px 0" }}>
              These principles guide every decision we make and every line of code we write.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Transparency First</h3>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  We believe in open, honest communication. Every algorithm, every decision, every change is explained clearly and simply.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Human-Centered</h3>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  Technology should serve people, not the other way around. Every feature we build puts human needs and emotions first.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Intelligent Simplicity</h3>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  Complex problems deserve elegant solutions. We make the sophisticated feel effortless and intuitive.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Ethical AI</h3>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  Our artificial intelligence is designed with ethics at its core. We build AI that empowers, not exploits.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Community Driven</h3>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  We're building more than a product — we're fostering a community of people who believe in financial freedom.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Continuous Innovation</h3>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  We never settle. Every day brings new opportunities to make our users' financial lives better.
                </p>
              </div>
            </div>
          </section>

          {/* Our Technology */}
          <section>
            <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>
              Our Technology
            </h2>
            <p className="mb-4" style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 32px 0" }}>
              SaveCash leverages cutting-edge artificial intelligence and machine learning to deliver personalized financial insights and automated savings solutions. Our platform represents years of research, development, and refinement to create the most intelligent financial management system available.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Advanced AI Algorithms</h3>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  Our proprietary algorithms analyze spending patterns, income flows, and financial behaviors to identify opportunities for savings without compromising your lifestyle or financial goals. Built on transformer architectures and reinforcement learning, our AI continuously adapts to your unique financial situation, learning from millions of anonymized transactions to provide increasingly accurate predictions and recommendations.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  The system employs deep neural networks trained on diverse financial datasets, enabling it to recognize patterns invisible to traditional rule-based systems. Whether it's identifying subscription redundancies, suggesting optimal bill payment timing, or detecting anomalous spending patterns, our AI works silently in the background to optimize your finances.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Real-Time Processing</h3>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  Our platform processes millions of transactions in real-time, delivering instant insights and recommendations when they matter most. Built on a distributed microservices architecture, SaveCash can handle peak loads while maintaining sub-second response times, ensuring your financial decisions are always supported by the most current data available.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  We use event-driven processing pipelines that update your financial dashboard the moment transactions occur, giving you immediate visibility into your spending patterns. Our real-time fraud detection system monitors every transaction for suspicious activity, alerting you instantly if anything unusual is detected while minimizing false positives through advanced pattern recognition.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Bank-Level Security</h3>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  We implement enterprise-grade encryption, multi-factor authentication, and regular security audits to ensure your financial data remains protected at all times. All data is encrypted using AES-256 encryption both in transit and at rest, and we employ zero-knowledge architecture principles wherever possible, meaning even our team cannot access your sensitive financial information.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  Our security infrastructure undergoes continuous penetration testing by independent third-party auditors, and we maintain SOC 2 Type II and ISO 27001 certifications. We use hardware security modules (HSMs) for key management, implement strict access controls following the principle of least privilege, and maintain comprehensive audit logs of all system access. Your financial data is backed up in geographically distributed, encrypted data centers to ensure business continuity and data integrity.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Privacy-First Architecture</h3>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  Privacy isn't an afterthought — it's built into every layer of our technology stack. We use differential privacy techniques to learn from aggregate user data while preserving individual anonymity. Our machine learning models are trained on federated learning principles, ensuring your personal data never leaves your device in an unencrypted form.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Scalable Infrastructure</h3>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  Built on cloud-native infrastructure, SaveCash scales seamlessly from thousands to millions of users without compromising performance. Our infrastructure automatically adjusts to demand, ensuring fast response times during peak usage periods. We maintain 99.99% uptime through redundant systems, automated failover mechanisms, and comprehensive monitoring.
                </p>
              </div>
            </div>
          </section>

          {/* Our Team */}
          <section>
            <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>
              Our Team
            </h2>
            <p className="mb-4" style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 32px 0" }}>
              We're a diverse team of financial experts, AI researchers, engineers, and designers united by a single mission: democratizing financial intelligence. With team members spanning four continents and representing over 15 countries, we bring together the best minds in technology, finance, and design.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Our Expertise</h3>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  Our team combines deep industry knowledge with cutting-edge technical expertise:
                </p>
                <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Former fintech executives from leading companies like Stripe, Square, and PayPal with decades of combined experience in building financial products at scale</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Machine learning specialists with advanced degrees from top universities including Stanford, MIT, and Carnegie Mellon, with published research in financial AI</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Security experts who've protected billions in assets, including former security engineers from major banks and financial institutions</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>UX designers focused on accessibility and simplicity, with awards for inclusive design from leading tech organizations</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Product managers with experience launching financial products used by millions of users worldwide</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Compliance and regulatory experts ensuring we meet the highest standards across multiple jurisdictions</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Our Culture</h3>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  We believe the best products emerge from diverse perspectives and collaborative environments. Our team values:
                </p>
            <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Continuous learning and professional development opportunities</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Work-life balance with flexible schedules and remote-first policies</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Open communication and transparency across all levels of the organization</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Impact-driven work that makes a real difference in people's financial lives</li>
            </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Join Our Team</h3>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  We're always looking for talented individuals who share our passion for financial empowerment. Whether you're an engineer, designer, data scientist, or have expertise in finance and compliance, we'd love to hear from you. Visit our <a href="/careers" className="text-blue-600 hover:underline">Careers page</a> to explore open positions and learn more about what it's like to work at SaveCash.
                </p>
              </div>
            </div>
          </section>

          {/* Our Partnerships */}
          <section>
            <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>
              Our Partnerships
            </h2>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
              We collaborate with leading financial institutions, technology partners, and security experts to provide you with the most comprehensive and secure financial management solution available. These strategic partnerships enable us to deliver features and capabilities that would be impossible to build alone.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Banking and Financial Services</h3>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  We partner with major banks and credit unions to provide seamless account integration, enabling you to connect all your financial accounts in one place. These partnerships are built on secure APIs that comply with the highest banking industry standards, ensuring your data is transmitted safely and in compliance with all financial regulations.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  Through our partnerships, we can offer features like automatic account aggregation, real-time balance updates, and intelligent transaction categorization that works across hundreds of financial institutions.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Security and Compliance Partners</h3>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  As we prepare for launch, we're actively establishing partnerships with the world's leading cybersecurity firms and compliance experts to ensure our platform meets or exceeds industry standards from day one. We're building relationships with security partners who will conduct regular audits, penetration testing, and vulnerability assessments, ensuring we maintain the highest levels of data protection as we scale.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  Our compliance strategy is designed to stay ahead of evolving financial regulations across multiple jurisdictions—from GDPR in Europe to CCPA in California and beyond. Built in California, we're operating globally with a commitment to meeting regional standards wherever we serve. We're positioning SaveCash to be the most trusted, compliant financial AI platform in the market, and we're seeking partnerships with compliance experts who share our vision for the future of financial technology.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Technology Infrastructure</h3>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  We're building SaveCash on a foundation designed to scale to millions of users from the start. Our architecture leverages partnerships with leading cloud providers and infrastructure companies to create a platform that's not just scalable and reliable—it's revolutionary. These strategic partnerships will give us access to cutting-edge AI and machine learning tools, powerful data processing capabilities, and global infrastructure that ensures lightning-fast performance regardless of where our users are located. We're not just building an app; we're building the infrastructure for the next generation of financial technology.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Research and Development</h3>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  Innovation is at the core of everything we do. We're actively engaging with top academic institutions and research organizations to advance the state of financial AI. These partnerships will enable us to incorporate the latest research findings directly into our products, ensuring SaveCash doesn't just keep up with financial technology innovation—we're setting the pace. We're not following trends; we're creating them. Join us as we redefine what's possible in personal finance.
                </p>
              </div>
            </div>
          </section>

          {/* Our Commitment */}
          <section>
            <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>
              Our Commitment to You
            </h2>
            <p className="mb-4" style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 32px 0" }}>
              We're committed to your financial success. Here's what that means in concrete terms:
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Privacy and Data Protection</h3>
                <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>We'll never sell your personal financial data — not to advertisers, data brokers, or anyone else. Your financial information belongs to you, period.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>You have complete control over your data. You can export it, delete it, or restrict how we use it at any time through simple controls in your account settings.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>We use your data exclusively to improve your financial experience — to provide better insights, identify savings opportunities, and personalize recommendations. Nothing more.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Transparency and Honesty</h3>
                <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>We'll always be transparent about our fees and practices. No hidden charges, no surprise costs. What you see is what you get.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>We clearly explain how our AI makes recommendations and decisions. If you ever want to know why SaveCash suggested something, we'll show you the reasoning behind it.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>We communicate changes clearly and in advance. If we're updating our terms, changing features, or modifying how we operate, you'll know about it with plenty of notice.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Continuous Improvement</h3>
                <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>We'll continuously improve our platform based on your feedback. Every feature request, bug report, and suggestion is reviewed and taken seriously by our product team.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>We release updates regularly, not just fixing issues but adding new capabilities that help you save more and manage your finances better.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>We maintain a public roadmap so you can see what we're building and provide input on features before they're released.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Your Financial Well-Being First</h3>
            <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>We'll put your financial well-being above our profits. This means we won't recommend products or services that aren't in your best interest, even if it would benefit us financially.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Our AI is designed with ethical guidelines that prioritize your long-term financial health over short-term gains or engagement metrics.</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>We're committed to helping you achieve genuine financial freedom, not just keeping you engaged with our platform. Your success is our success.</li>
            </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Accessibility and Inclusion</h3>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  We're committed to making SaveCash accessible to everyone, regardless of their technical expertise, financial situation, or abilities. Our platform is designed with accessibility standards in mind, and we continuously work to improve the experience for users with disabilities.
                </p>
              </div>
            </div>
          </section>

          {/* Join Us */}
          <section>
            <h2 style={{ color: "#1a1a1a", fontSize: "22px", fontWeight: 600, margin: "48px 0 24px 0", lineHeight: "1.4" }}>
              Join Us on This Journey
            </h2>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
              Financial freedom shouldn't be a luxury reserved for the few. It should be accessible to everyone. Join thousands of users who are taking control of their financial future with SaveCash. Our community grows every day as more people discover the power of intelligent financial automation.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>What You Can Expect</h3>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  When you join SaveCash, you're not just getting a financial tool — you're joining a movement toward smarter, more transparent financial management. You'll have access to:
                </p>
                <ul style={{ margin: "24px 0", paddingLeft: "24px" }}>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>AI-powered insights that learn and adapt to your unique financial situation</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Automated savings strategies that work quietly in the background</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>A supportive community of people committed to financial wellness</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Regular updates and new features based on user feedback</li>
                  <li style={{ marginBottom: "12px", color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8" }}>Responsive customer support when you need assistance</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>Get Started Today</h3>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  Getting started with SaveCash takes just minutes. Sign up for free, connect your accounts securely, and let our AI begin analyzing your financial patterns. Within days, you'll start seeing personalized recommendations and automated savings begin to accumulate.
                </p>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  No credit card required to start. No commitment. Just intelligent financial management that grows smarter the longer you use it.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: "16px", marginTop: "0" }}>We're Here to Help</h3>
                <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 24px 0" }}>
                  Have questions or want to learn more? We'd love to hear from you. Our team is always available to help you understand how SaveCash can work for your unique financial situation.
                </p>
            <p style={{ color: "#4a4a4a", fontSize: "17px", lineHeight: "1.8", margin: "0 0 28px 0" }}>
                  Reach out to our team at <a href="mailto:support.savecashpro@gmail.com" className="text-blue-600 hover:underline">support.savecashpro@gmail.com</a>, visit our <a href="/help" className="text-blue-600 hover:underline">Help Center</a>, or join our <a href="/community" className="text-blue-600 hover:underline">Community</a> to connect with other SaveCash users and share tips, strategies, and success stories.
            </p>
              </div>
            </div>
          </section>
          
          {/* Tagline */}
          <div className="border-t border-gray-200 mt-16 pt-12 text-center">
            <p style={{ color: "#1a1a1a", fontSize: "18px", fontWeight: 600, lineHeight: "1.6", margin: "0" }}>
              SaveCash — Built in California. Operating globally.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
