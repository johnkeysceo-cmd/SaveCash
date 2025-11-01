// Custom blog API client - replace with your actual API implementation
export const blogAPI = {
  entities: {
    BlogPost: {
      list: async (sortBy?: string) => {
        // Mock data - replace with actual API call
        return [
          {
            id: '1',
            title: 'The Future of AI-Powered Financial Automation',
            slug: 'future-of-ai-powered-financial-automation',
            excerpt: 'How artificial intelligence is transforming personal finance, from predictive analytics to automated decision-making. We explore the latest trends and what they mean for everyday consumers.',
            content: '<p>This is the full content of the blog post. It contains rich HTML formatting and demonstrates the beautiful typography of The Journal.</p><p>Here we explore themes of mindfulness, creativity, and the art of living intentionally in our modern world.</p><h2>A New Beginning</h2><p>Every journey begins with a single step, and this blog represents our commitment to thoughtful reflection and meaningful discourse.</p>',
            published_date: new Date().toISOString(),
            created_date: new Date().toISOString(),
            is_featured: true,
            category: 'AI, Finance',
            author_name: 'Sarah Chen',
            author_bio: 'Financial technology expert exploring the intersection of AI and personal finance.',
            author_image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
            created_by: 'sarah@example.com',
            read_time: 8,
            featured_image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200',
            tags: ['AI', 'finance', 'automation']
          },
          {
            id: '2',
            title: 'Building Trust in AI Financial Services',
            slug: 'building-trust-in-ai-financial-services',
            excerpt: 'How transparency and explainability are crucial for user adoption of AI-powered financial tools.',
            content: '<p>Trust is the foundation of any financial relationship, and AI-powered services are no exception.</p>',
            published_date: new Date(Date.now() - 86400000 * 3).toISOString(),
            created_date: new Date(Date.now() - 86400000 * 3).toISOString(),
            is_featured: false,
            category: 'AI Ethics',
            author_name: 'Michael Rodriguez',
            author_bio: 'AI ethics researcher and fintech consultant.',
            author_image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
            created_by: 'michael@example.com',
            read_time: 6,
            featured_image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800',
            tags: ['AI-ethics', 'trust', 'finance']
          },
          {
            id: '3',
            title: 'The Psychology of Automated Savings',
            slug: 'psychology-of-automated-savings',
            excerpt: 'Understanding user behavior patterns and designing AI systems that work with human psychology.',
            content: '<p>Automated savings systems must align with how humans actually think and behave.</p>',
            published_date: new Date(Date.now() - 86400000 * 5).toISOString(),
            created_date: new Date(Date.now() - 86400000 * 5).toISOString(),
            is_featured: false,
            category: 'Behavioral Finance',
            author_name: 'Dr. Lisa Wang',
            author_bio: 'Behavioral finance expert and cognitive psychologist.',
            author_image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
            created_by: 'lisa@example.com',
            read_time: 7,
            featured_image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
            tags: ['psychology', 'savings', 'behavioral-finance']
          },
          {
            id: '4',
            title: 'API Design Principles for Fintech',
            slug: 'api-design-principles-fintech',
            excerpt: 'Best practices for building developer-friendly financial APIs that scale with user needs.',
            content: '<p>Well-designed APIs are crucial for modern financial applications.</p>',
            published_date: new Date(Date.now() - 86400000 * 7).toISOString(),
            created_date: new Date(Date.now() - 86400000 * 7).toISOString(),
            is_featured: false,
            category: 'Engineering',
            author_name: 'Alex Thompson',
            author_bio: 'Senior engineer specializing in fintech infrastructure.',
            author_image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
            created_by: 'alex@example.com',
            read_time: 5,
            featured_image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800',
            tags: ['API', 'engineering', 'fintech']
          },
          {
            id: '5',
            title: 'Privacy-First Financial Data Processing',
            slug: 'privacy-first-financial-data-processing',
            excerpt: 'How we implement zero-knowledge architecture to protect user data while enabling powerful AI.',
            content: '<p>Privacy and security are not optional when dealing with financial data.</p>',
            published_date: new Date(Date.now() - 86400000 * 10).toISOString(),
            created_date: new Date(Date.now() - 86400000 * 10).toISOString(),
            is_featured: false,
            category: 'Security',
            author_name: 'Sarah Chen',
            author_bio: 'Security engineer focused on financial data protection.',
            author_image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
            created_by: 'sarah@example.com',
            read_time: 9,
            featured_image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
            tags: ['privacy', 'security', 'data-protection']
          },
          {
            id: '6',
            title: 'The Economics of Financial Automation',
            slug: 'economics-of-financial-automation',
            excerpt: 'Analyzing the cost-benefit of AI automation for both consumers and financial institutions.',
            content: '<p>The economics of automation extend far beyond simple cost savings.</p>',
            published_date: new Date(Date.now() - 86400000 * 12).toISOString(),
            created_date: new Date(Date.now() - 86400000 * 12).toISOString(),
            is_featured: false,
            category: 'Economics',
            author_name: 'Dr. James Park',
            author_bio: 'Economist specializing in fintech and financial innovation.',
            author_image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
            created_by: 'james@example.com',
            read_time: 8,
            featured_image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800',
            tags: ['economics', 'automation', 'fintech']
          }
        ];
      },
      create: async (postData: any) => {
        console.log('Creating post:', postData);
        await new Promise(resolve => setTimeout(resolve, 500));
        return {
          id: Date.now().toString(),
          ...postData,
          created_date: new Date().toISOString(),
          created_by: 'user@example.com'
        };
      },
      update: async (id: string, postData: any) => {
        console.log('Updating post:', id, postData);
        await new Promise(resolve => setTimeout(resolve, 500));
        return {
          id,
          ...postData,
          updated_date: new Date().toISOString()
        };
      },
      delete: async (id: string) => {
        console.log('Deleting post:', id);
        await new Promise(resolve => setTimeout(resolve, 500));
        return { success: true, id };
      }
    }
  },
  auth: {
    me: async () => {
      return {
        email: 'user@example.com',
        name: 'User',
        full_name: 'User',
        id: '1'
      };
    }
  }
};

