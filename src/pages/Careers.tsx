import React, { useState } from "react";
import { ArrowLeft, Mail, Send, Sparkles } from "lucide-react";

export default function Careers() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this to your backend or email service
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setRole("");
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
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">Careers</h1>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            We're building something new — and soon, we'll be building a team.
          </h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8 rounded-r-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              SaveCash is still in pre-launch, but we're not just building a product — we're building a movement that will redefine how millions of people experience money.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              We're not hiring publicly just yet, but we're <strong className="text-gray-900">always interested in connecting</strong> with talented builders, designers, and thinkers who want to shape the future of financial technology.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
            
          {/* Early Interest Form */}
          <section className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Be One of the First to Join Our Journey</h2>
            <p className="mb-6 text-gray-700">
              We'll be hiring engineers, designers, marketers, and other talented people as we scale. 
              Interested in being part of the team that builds the next generation of financial AI?
            </p>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    Role You're Interested In (Optional)
                  </label>
                  <input
                    type="text"
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., Software Engineer, Product Designer, Marketing"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Join Our Talent List
                </button>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <p className="text-green-800 font-semibold">
                  ✓ Thanks! We'll reach out when the time's right.
                </p>
              </div>
            )}
          </section>

          {/* Upcoming Opportunities */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Upcoming Opportunities</h2>
            <p className="mb-6 text-gray-700">
              We're planning to open these roles as we prepare for launch and scale. While we're not actively hiring yet, 
              we're already thinking about the incredible people we'll need:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-purple-200 rounded-lg p-6 bg-purple-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">💻 Software Engineering</h3>
                <p className="text-sm text-gray-600 mb-3">Frontend, Backend, Full-Stack • Remote</p>
                <p className="text-sm text-gray-700">
                  Build the core platform that powers SaveCash's AI-driven financial automation with cutting-edge technologies.
                </p>
              </div>
              
              <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">🤖 AI/ML Engineering</h3>
                <p className="text-sm text-gray-600 mb-3">Machine Learning, Data Science • Remote</p>
                <p className="text-sm text-gray-700">
                  Design and implement the AI algorithms that make SaveCash intelligent — recommendation systems, fraud detection, and more.
                </p>
              </div>
              
              <div className="border border-green-200 rounded-lg p-6 bg-green-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">🎨 Product Design</h3>
                <p className="text-sm text-gray-600 mb-3">UX/UI, Design Systems • Remote</p>
                <p className="text-sm text-gray-700">
                  Create intuitive, beautiful experiences that make complex financial concepts simple and accessible.
                </p>
              </div>
              
              <div className="border border-orange-200 rounded-lg p-6 bg-orange-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">📈 Growth & Marketing</h3>
                <p className="text-sm text-gray-600 mb-3">Marketing, Growth, Community • Remote</p>
                <p className="text-sm text-gray-700">
                  Help millions discover SaveCash and build a community of people taking control of their financial future.
                </p>
              </div>
            </div>
          </section>

          {/* Our Vision */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why You'll Want to Join</h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                We're not following trends — we're creating them. SaveCash is positioned to become the most trusted, 
                innovative financial AI platform in the market.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Build from the ground up:</strong> Shape the foundation of a company that will impact millions</li>
                <li><strong>Cutting-edge technology:</strong> Work with the latest AI, machine learning, and financial technology</li>
                <li><strong>Meaningful impact:</strong> Help people achieve financial freedom and peace of mind</li>
                <li><strong>Early equity opportunity:</strong> Join at a stage where your contributions directly shape the company's future</li>
                <li><strong>Remote-first culture:</strong> Work from anywhere, with flexibility and autonomy</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Connect?</h2>
            <p className="mb-4 text-gray-700">
              If that sounds like you, drop us a note at <a href="mailto:careers@savecash.com" className="text-purple-600 hover:underline font-semibold">careers@savecash.com</a> or use the form above to join our talent list.
            </p>
            <p className="text-sm text-gray-600">
              We'll announce roles here first, so stay tuned. The future of personal finance is being built right now — 
              and we'd love for you to be part of it.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
