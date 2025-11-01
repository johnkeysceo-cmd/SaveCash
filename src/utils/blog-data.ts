export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-revolutionizing-personal-finance",
    title: "How AI is Revolutionizing Personal Finance",
    excerpt: "Discover how artificial intelligence is changing the way people manage their money, from automated savings to predictive financial insights.",
    date: "2025-01-15",
    category: "AI & Automation",
    readTime: "5 min read"
  },
  {
    slug: "hidden-bank-fees",
    title: "10 Hidden Fees Banks Don't Want You to Know About",
    excerpt: "Learn about common bank fees that quietly drain your account and how SaveCash helps you identify and eliminate them automatically.",
    date: "2025-01-10",
    category: "Financial Tips",
    readTime: "7 min read"
  },
  {
    slug: "future-of-financial-automation",
    title: "The Future of Financial Automation",
    excerpt: "Explore the emerging trends in financial technology and how automation is making money management effortless for millions.",
    date: "2025-01-05",
    category: "Market Insights",
    readTime: "6 min read"
  }
];

export function getLatestPosts(count: number = 3): BlogPost[] {
  return blogPosts.slice(0, count).sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

