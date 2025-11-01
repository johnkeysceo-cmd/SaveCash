import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Bot, Code, TrendingUp, Shield, Zap, BookOpen, Calendar, Clock, Sparkles, ArrowRight } from "lucide-react";
import { getLatestPosts } from "../utils/blog-data";

export default function Blog() {
  const latestPosts = getLatestPosts(3);
  const [mounted, setMounted] = useState(false);
  const [typedCode, setTypedCode] = useState("");
  
  const fullCode = `import { SaveCash } from '@savecash/finbots';

const savecash = new SaveCash({
  apiKey: process.env.SAVECASH_API_KEY
});

// Create an expense tracking FinBot
const expenseBot = await savecash.finbots.create({
  type: 'expense-tracker',
  config: {
    categories: ['food', 'transport', 'entertainment'],
    alertThreshold: 500
  }
});

// Get AI-powered insights
const insights = await expenseBot.analyze();
console.log(insights.recommendations);`;

  useEffect(() => {
    setMounted(true);
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullCode.length) {
        setTypedCode(fullCode.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-purple-500/5" />
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'float 20s ease-in-out infinite'
          }} />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-2 animate-bounce bg-purple-500/20 border-purple-500/50 text-purple-300" style={{ animationDuration: '2s' }}>
              <Zap className="h-3 w-3 mr-1 animate-pulse" />
              AI-Powered Financial Freedom
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-purple-400 bg-clip-text text-transparent">
              SaveCash
            </h1>
            
            <div className="relative inline-block mb-8">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Your AI Financial Assistant with Integratable{" "}
                <span className="text-purple-400 font-semibold relative inline-block animate-pulse">
                  FinBots
                  <Sparkles className="absolute -top-2 -right-6 h-4 w-4 text-purple-400 animate-spin" style={{ animationDuration: '3s' }} />
                </span>
              </p>
            </div>
            
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Automate savings, optimize investments, and integrate powerful AI financial agents 
              into all your projects with just a few lines of code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 bg-purple-600 hover:bg-purple-700"
              >
                <span className="relative z-10 flex items-center">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 hover:scale-105 bg-transparent text-white"
              >
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Powerful AI Financial Tools
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From personal finance to enterprise integration, SaveCash FinBots adapt to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Bot, title: "AI Financial Agents", desc: "Specialized FinBots that automate expense tracking, savings optimization, and investment strategies", delay: "0ms" },
            { icon: Code, title: "Easy Integration", desc: "Integrate FinBots into any project with our simple SDK. Just a few lines of code to add AI financial intelligence", delay: "100ms" },
            { icon: TrendingUp, title: "Smart Analytics", desc: "Real-time insights, predictive analytics, and personalized recommendations powered by machine learning", delay: "200ms" },
            { icon: Shield, title: "Bank-Level Security", desc: "AES-256 encryption, SOC 2 Type II compliance, and zero-trust architecture protect your financial data", delay: "300ms" },
            { icon: Zap, title: "Automated Savings", desc: "Let AI analyze your spending patterns and automatically optimize your savings without manual effort", delay: "400ms" },
            { icon: Bot, title: "Custom FinBots", desc: "Build and monetize your own FinBots in our marketplace. Create specialized agents for any financial use case", delay: "500ms" }
          ].map((feature, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-white/10 bg-gray-900/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <CardHeader className="relative z-10">
                <feature.icon className="h-10 w-10 text-purple-400 mb-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />
                <CardTitle className="group-hover:text-purple-400 transition-colors duration-300 text-white">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-400/80 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.desc}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-16 md:py-24 border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/30 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Integrate in Minutes
              </h2>
              <p className="text-lg text-gray-400">
                Add AI financial intelligence to your app with our developer-friendly SDK
              </p>
            </div>

            <Card className="bg-gray-900/80 backdrop-blur-sm border-white/10 overflow-hidden relative group">
              {/* Animated Border Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                animation: 'shimmer 3s infinite'
              }} />
              
              <CardContent className="p-6 relative">
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
                
                <pre className="bg-black/40 p-6 rounded-lg overflow-x-auto text-sm border border-white/5 relative group-hover:border-white/10 transition-colors duration-500">
                  <code className="text-white/90 font-mono">
                    {mounted ? typedCode : fullCode}
                    {mounted && typedCode.length < fullCode.length && (
                      <span className="inline-block w-2 h-4 bg-purple-400 ml-1 animate-pulse" />
                    )}
                  </code>
                </pre>
                
                {/* Floating Code Elements */}
                <div className="absolute -top-4 -right-4 text-6xl opacity-5 animate-spin" style={{ animationDuration: '20s' }}>
                  {'{}'}
                </div>
                <div className="absolute -bottom-4 -left-4 text-6xl opacity-5 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  {'</>'}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
              Latest from the Blog
            </h2>
            <p className="text-lg text-gray-400">
              Insights on AI finance, FinBots tutorials, and savings strategies
            </p>
          </div>
          <a href="/blog">
            <Button variant="outline" className="border-white/20 hover:border-white/40 hover:bg-white/5 group transition-all duration-300 bg-transparent text-white">
              <BookOpen className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              View All Posts
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post, index) => (
            <a 
              key={post.slug} 
              href={`/blog/${post.slug}`} 
              className="block group"
            >
              <Card className="overflow-hidden h-full transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 border-white/10 bg-gray-900/50 backdrop-blur-sm hover:border-purple-500/30 relative">
                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-purple-500/20 to-purple-500/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-purple-500/10 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    animation: 'float 10s ease-in-out infinite'
                  }} />
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-purple-500/20 border-purple-500/50 text-purple-300 backdrop-blur-sm">{post.category}</Badge>
                  </div>
                </div>
                
                <CardHeader className="relative z-10">
                  <CardTitle className="line-clamp-2 group-hover:text-purple-400 transition-colors duration-300 text-white">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 text-gray-400/80 group-hover:text-gray-300 transition-colors duration-300">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-1 group-hover:text-purple-400 transition-colors duration-300">
                      <Calendar className="h-3 w-3" />
                      <span className="text-xs">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 group-hover:text-purple-400 transition-colors duration-300">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs">{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands using SaveCash and FinBots to automate savings, 
            optimize investments, and achieve financial freedom.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="font-semibold text-lg px-8 group hover:scale-110 transition-all duration-300 hover:shadow-xl bg-white text-purple-600 hover:bg-gray-100"
          >
            Start Free Trial
            <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-400">SaveCash</h3>
              <p className="text-sm text-gray-400 mb-4">
                AI-powered financial savings application with integratable FinBots 
                for all your projects.
              </p>
              <p className="text-xs text-gray-500">
                &copy; 2024 SaveCash. All rights reserved.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/features" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Features</a></li>
                <li><a href="/pricing" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Pricing</a></li>
                <li><a href="/finbots-marketplace" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">FinBots Marketplace</a></li>
                <li><a href="/documentation" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Documentation</a></li>
                <li><a href="/api" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">API Reference</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/blog" className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 hover:translate-x-1">
                    <BookOpen className="h-3 w-3" />
                    Blog
                  </a>
                </li>
                <li><a href="/help" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Tutorials</a></li>
                <li><a href="/case-studies" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Case Studies</a></li>
                <li><a href="/community" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Community</a></li>
                <li><a href="/support" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Support</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">About Us</a></li>
                <li><a href="/careers" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Careers</a></li>
                <li><a href="/press" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Press Kit</a></li>
                <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400 animate-pulse" style={{ animationDuration: '3s' }}>
                Built with AI • Secured with Trust • Powered by Innovation
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
