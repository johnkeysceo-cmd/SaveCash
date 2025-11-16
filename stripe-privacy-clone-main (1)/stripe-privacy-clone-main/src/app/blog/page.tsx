"use client";
import React from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Link from "next/link";
type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
};
export default function BlogPage() {
  const blogPostsByCategory: Record<string, BlogPost[]> = {
    "Product Updates": [
      {
        title: "Introducing AI-Powered Savings Recommendations",
        excerpt:
          "Learn how SaveCash uses advanced AI to identify personalized savings opportunities.",
        date: "November 7, 2025",
        author: "SaveCash Team",
        slug: "ai-powered-savings-recommendations",
      },
      {
        title: "New Mobile App Features: Budget Tracking and Bill Reminders",
        excerpt:
          "Discover the latest features in our mobile app designed to help you stay on top of your finances.",
        date: "November 6, 2025",
        author: "SaveCash Team",
        slug: "new-mobile-app-features",
      },
    ],
    "AI Finance": [
      {
        title: "How AI is Revolutionizing Personal Finance: A Deep Dive",
        excerpt:
          "Explore the transformative impact of artificial intelligence on personal finance and money management.",
        date: "November 5, 2025",
        author: "SaveCash Team",
        slug: "ai-revolutionizing-personal-finance",
      },
      {
        title: "Machine Learning in Credit Scoring: Fairness and Accuracy",
        excerpt:
          "Understanding how machine learning models are making credit decisions more accurate and fair.",
        date: "November 5, 2025",
        author: "SaveCash Team",
        slug: "machine-learning-credit-scoring",
      },
      {
        title: "Predictive Analytics: Forecasting Your Financial Future",
        excerpt:
          "How AI uses predictive analytics to help you plan for major life events and financial goals.",
        date: "November 4, 2025",
        author: "SaveCash Team",
        slug: "predictive-analytics-financial-future",
      },
    ],
    Finbots: [
      {
        title:
          "Meet Your AI Financial Assistant: How Finbots Are Changing Money Management",
        excerpt:
          "Discover how AI-powered financial bots are helping users manage their money more effectively.",
        date: "November 4, 2025",
        author: "SaveCash Team",
        slug: "ai-financial-assistant-finbots",
      },
      {
        title:
          "Chatbot vs. Finbot: Understanding the Difference in Financial Technology",
        excerpt:
          "Learn how finbots differ from traditional chatbots and why they matter for your finances.",
        date: "November 3, 2025",
        author: "SaveCash Team",
        slug: "chatbot-vs-finbot",
      },
      {
        title:
          "The Future of Conversational Banking: AI-Powered Financial Conversations",
        excerpt:
          "Exploring how conversational AI is transforming the way we interact with financial services.",
        date: "November 3, 2025",
        author: "SaveCash Team",
        slug: "conversational-banking-ai",
      },
    ],
    "Industry Insights": [
      {
        title: "The Future of Financial Technology",
        excerpt:
          "Exploring how artificial intelligence is transforming personal finance and money management.",
        date: "November 2, 2025",
        author: "SaveCash Team",
        slug: "future-of-financial-technology",
      },
      {
        title: "Decentralized Finance (DeFi): Opportunities and Risks",
        excerpt:
          "A comprehensive guide to understanding DeFi, its potential, and what investors need to know.",
        date: "October 29, 2025",
        author: "SaveCash Team",
        slug: "defi-opportunities-risks",
      },
      {
        title: "The Rise of Embedded Finance: Banking Where You Are",
        excerpt:
          "How financial services are being integrated into non-financial apps and platforms.",
        date: "October 28, 2025",
        author: "SaveCash Team",
        slug: "embedded-finance-banking",
      },
      {
        title: "Regulatory Changes in 2025: What They Mean for Consumers",
        excerpt:
          "Understanding new financial regulations and how they impact your money management.",
        date: "October 29, 2025",
        author: "SaveCash Team",
        slug: "regulatory-changes-2025",
      },
    ],
    "Financial Tips": [
      {
        title: "How to Maximize Your Savings in 2025",
        excerpt:
          "Practical tips and strategies for building wealth and achieving financial freedom.",
        date: "October 30, 2025",
        author: "SaveCash Team",
        slug: "maximize-savings-2025",
      },
      {
        title: "Building an Emergency Fund: A Complete Guide",
        excerpt:
          "Step-by-step instructions for building and maintaining an emergency fund that protects your financial future.",
        date: "November 1, 2025",
        author: "SaveCash Team",
        slug: "building-emergency-fund",
      },
      {
        title: "Debt Payoff Strategies: Which Method Works Best for You?",
        excerpt:
          "Comparing different debt payoff methods and finding the right strategy for your situation.",
        date: "October 31, 2025",
        author: "SaveCash Team",
        slug: "debt-payoff-strategies",
      },
      {
        title: "Investing for Beginners: Your First $1,000 Investment Guide",
        excerpt:
          "A beginner-friendly guide to getting started with investing, even with limited funds.",
        date: "October 31, 2025",
        author: "SaveCash Team",
        slug: "investing-beginners-guide",
      },
      {
        title: "Tax Optimization Strategies for 2025: Maximize Your Refund",
        excerpt:
          "Legitimate strategies to optimize your tax situation and keep more of your hard-earned money.",
        date: "October 30, 2025",
        author: "SaveCash Team",
        slug: "tax-optimization-strategies-2025",
      },
      {
        title:
          "Retirement Planning in Your 20s and 30s: Start Now, Retire Rich",
        excerpt:
          "Why starting retirement planning early matters and how to build wealth over decades.",
        date: "October 28, 2025",
        author: "SaveCash Team",
        slug: "retirement-planning-20s-30s",
      },
    ],
    "Security & Privacy": [
      {
        title: "Protecting Your Financial Data: A Complete Security Guide",
        excerpt:
          "Essential security practices to protect your financial information from cyber threats.",
        date: "October 28, 2025",
        author: "SaveCash Team",
        slug: "protecting-financial-data",
      },
      {
        title:
          "Identity Theft Prevention: How to Safeguard Your Financial Identity",
        excerpt:
          "Comprehensive strategies to prevent identity theft and protect your financial accounts.",
        date: "October 28, 2025",
        author: "SaveCash Team",
        slug: "identity-theft-prevention",
      },
    ],
    "Case Studies": [
      {
        title:
          "How Sarah Saved $15,000 in One Year Using AI-Powered Recommendations",
        excerpt:
          "A forward-looking case study on how our upcoming AI-powered savings tools could transform someone’s financial situation.",
        date: "November 2, 2025",
        author: "SaveCash Team",
        slug: "case-study-sarah-savings",
      },
      {
        title: "From Debt to Financial Freedom: Mark's Journey",
        excerpt:
          "A hypothetical scenario detailing how SaveCash’s planned tools could help eliminate $50,000 in debt.",
        date: "November 1, 2025",
        author: "SaveCash Team",
        slug: "case-study-mark-debt-freedom",
      },
    ],
  };
  const categories = Object.keys(blogPostsByCategory);
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      {" "}
      <Header />{" "}
      <main className="flex-1">
        {" "}
        <div className="mx-auto max-w-[900px] px-6 py-16 md:px-12 md:py-20">
          {" "}
          <article className="space-y-8">
            {" "}
            <div>
              {" "}
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">
                {" "}
                Blog{" "}
              </h1>{" "}
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">
                {" "}
                Insights, updates, and stories from the SaveCash team.{" "}
              </p>{" "}
            </div>{" "}
            <div className="space-y-16">
              {" "}
              {categories.map((category) => (
                <section key={category} className="space-y-6">
                  {" "}
                  <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] border-b border-[var(--color-border-divider)] pb-3">
                    {" "}
                    {category}{" "}
                  </h2>{" "}
                  <div className="space-y-8">
                    {" "}
                    {blogPostsByCategory[category].map(
                      (post: BlogPost, index: number) => (
                        <article
                          key={index}
                          className="border-b border-[var(--color-border-divider)] pb-6 last:border-b-0"
                        >
                          {" "}
                          <div className="mb-3">
                            {" "}
                            <span className="text-sm font-medium text-[var(--color-accent-primary)]">
                              {" "}
                              {category}{" "}
                            </span>{" "}
                          </div>{" "}
                          <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-3 hover:text-[var(--color-accent-primary)] transition-colors">
                            {" "}
                            <Link
                              href={`/blog/${post.slug}`}
                              className="hover:underline"
                            >
                              {" "}
                              {post.title}{" "}
                            </Link>{" "}
                          </h3>{" "}
                          <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                            {" "}
                            {post.excerpt}{" "}
                          </p>{" "}
                          <div className="flex items-center text-sm text-[var(--color-text-secondary)]">
                            {" "}
                            <span>{post.author}</span>{" "}
                            <span className="mx-2">•</span>{" "}
                            <span>{post.date}</span>{" "}
                          </div>{" "}
                        </article>
                      ),
                    )}{" "}
                  </div>{" "}
                </section>
              ))}{" "}
            </div>{" "}
            <section className="space-y-4 mt-16">
              {" "}
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                {" "}
                Subscribe{" "}
              </h2>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                Stay updated with the latest from SaveCash. Subscribe to our
                newsletter.{" "}
              </p>{" "}
              <div className="flex gap-4 mt-4">
                {" "}
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-[var(--color-border-divider)] rounded-lg focus:outline-none focus:border-[var(--color-accent-primary)]"
                />{" "}
                <button className="px-6 py-2 bg-[var(--color-accent-primary)] text-white rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors">
                  {" "}
                  Subscribe{" "}
                </button>{" "}
              </div>{" "}
            </section>{" "}
          </article>{" "}
        </div>{" "}
      </main>{" "}
      <Footer />{" "}
    </div>
  );
}
