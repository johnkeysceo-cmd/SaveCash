import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Careers() {
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
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Careers</h1>
          
          <h4 className="text-base font-normal text-gray-600 mb-8">Join a team that's building the future of personal finance</h4>
          
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            At SaveCash, we're not just creating a product — we're building a new financial standard. We value curiosity, bold ideas, and a relentless pursuit of simplicity.
          </p>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Whether you're an engineer, designer, or strategist, you'll shape technology that impacts millions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-10 text-base text-gray-700 leading-relaxed">
            
          {/* Our Culture */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Culture</h2>
            <div className="space-y-4">
              <p>
                We're building more than a company — we're creating a movement. Our culture is defined by intellectual curiosity, ethical decision-making, and a shared commitment to making financial freedom accessible to everyone.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Innovation First:</strong> We encourage bold ideas and calculated risks</li>
                <li><strong>Human-Centered:</strong> Every decision puts people before profits</li>
                <li><strong>Purpose-Driven:</strong> We're here to solve real problems for real people</li>
              </ul>
            </div>
          </section>

          {/* What We Offer */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
            <div className="space-y-4">
              <p>
                We believe that the best work happens when people feel valued, supported, and empowered to do their best work.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Competitive Compensation:</strong> Top-tier salaries and equity participation</li>
                <li><strong>Flexible Work:</strong> Remote-first with flexible hours and unlimited PTO</li>
                <li><strong>Growth Opportunities:</strong> Learning budget and career development support</li>
              </ul>
            </div>
          </section>

          {/* Open Positions */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Open Positions</h2>
            <p className="mb-4">
              We're looking for exceptional people to join our mission. Here are the roles we're currently hiring for:
            </p>
            <div className="space-y-8">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Senior Full-Stack Engineer</h3>
                <p className="text-sm text-gray-600 mb-3">Engineering • Remote • Full-time</p>
                <p className="mb-4">
                  Build the core platform that powers SaveCash's AI-driven financial automation. You'll work with cutting-edge technologies and shape the future of fintech.
                </p>
                <p className="text-sm font-medium text-gray-900 mb-2">Requirements:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
                  <li>5+ years full-stack experience</li>
                  <li>React, Node.js, Python</li>
                  <li>AI/ML experience preferred</li>
                  <li>Fintech background a plus</li>
                </ul>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI/ML Engineer</h3>
                <p className="text-sm text-gray-600 mb-3">Engineering • Remote • Full-time</p>
                <p className="mb-4">
                  Design and implement the AI algorithms that make SaveCash intelligent. You'll work on recommendation systems, fraud detection, and financial modeling.
                </p>
                <p className="text-sm font-medium text-gray-900 mb-2">Requirements:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
                  <li>3+ years ML experience</li>
                  <li>Python, TensorFlow/PyTorch</li>
                  <li>Financial data experience</li>
                  <li>PhD in relevant field preferred</li>
                </ul>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Product Designer</h3>
                <p className="text-sm text-gray-600 mb-3">Design • Remote • Full-time</p>
                <p className="mb-4">
                  Create intuitive, beautiful experiences that make complex financial concepts simple. You'll shape the visual and interaction design of our platform.
                </p>
                <p className="text-sm font-medium text-gray-900 mb-2">Requirements:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
                  <li>3+ years product design</li>
                  <li>Figma, prototyping skills</li>
                  <li>Fintech UX experience</li>
                  <li>Portfolio required</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Application Process */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Hiring Process</h2>
            <p className="mb-4">
              We've designed our process to be transparent, respectful, and focused on finding the right fit for both sides.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Application</h3>
                <p className="text-sm text-gray-600">1-2 days</p>
                <p>Submit your resume and cover letter. Tell us why you're excited about SaveCash.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Initial Screen</h3>
                <p className="text-sm text-gray-600">1 week</p>
                <p>30-minute video call to discuss your background and our mission.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Technical Interview</h3>
                <p className="text-sm text-gray-600">1-2 weeks</p>
                <p>Showcase your skills with a practical challenge relevant to the role.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Team Interview</h3>
                <p className="text-sm text-gray-600">1 week</p>
                <p>Meet the team and learn about our culture. We'll answer all your questions.</p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Questions?</h2>
            <p>
              Reach out to us at <a href="mailto:careers@savecash.com" className="text-blue-600 hover:underline">careers@savecash.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
