import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Leadership() {
  const leaders = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Former Goldman Sachs VP with 15+ years in fintech. Stanford MBA. Passionate about making financial success accessible to everyone.",
      achievements: ["15+ years Goldman Sachs", "Stanford MBA", "Founded 3 fintech companies"]
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      bio: "Ex-Google engineer with expertise in payment systems. Built infrastructure processing $50B+ annually. MIT graduate.",
      achievements: ["Ex-Google Engineer", "MIT Graduate", "$50B+ systems built"]
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI",
      bio: "MIT PhD in Machine Learning. Former DeepMind researcher. Leading our AI research and development efforts.",
      achievements: ["MIT PhD", "Ex-DeepMind", "20+ AI papers published"]
    },
    {
      name: "David Kim",
      role: "CFO",
      bio: "Former McKinsey consultant with Harvard MBA. Expert in financial strategy and operations. Leading our growth and expansion.",
      achievements: ["Ex-McKinsey", "Harvard MBA", "Led $100M+ deals"]
    }
  ];

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
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Leadership Team</h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Meet the experienced leaders driving SaveCash's mission to democratize financial success.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-10 text-base text-gray-700 leading-relaxed">
            
          {/* Leadership Team */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Meet Our Leaders</h2>
            <p className="mb-8">
              World-class talent from the most prestigious companies and universities
            </p>
            
            <div className="space-y-12">
              {leaders.map((leader, index) => (
                <div key={leader.name} className="border-b border-gray-200 pb-8 last:border-b-0">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-lg font-medium text-gray-700 mb-4">{leader.role}</p>
                  <p className="mb-4">{leader.bio}</p>
                  <div className="space-y-1">
                    {leader.achievements.map((achievement, idx) => (
                      <div key={idx} className="text-sm text-gray-600">
                        • {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Leadership Philosophy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Leadership Philosophy</h2>
            <p className="mb-6">
              We believe that great leadership is about empowering others to achieve their full potential. Our team is united by a shared vision of democratizing financial success and making advanced financial strategies accessible to everyone, regardless of their background or circumstances.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Empowerment</h3>
                <p>We empower our team to make decisions and drive impact</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                <p>We foster a culture of continuous learning and innovation</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrity</h3>
                <p>We lead with integrity and transparency in everything we do</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
