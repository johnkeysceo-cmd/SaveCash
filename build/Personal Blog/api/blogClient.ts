// Custom blog API client - replace with your actual API implementation
export const blogAPI = {
  entities: {
    BlogPost: {
      list: async (sortBy?: string) => {
        // Mock data - replace with actual API call
        return [
          {
            id: '1',
            title: 'Welcome to The Journal',
            slug: 'welcome-to-the-journal',
            excerpt: 'A place for thoughtful essays and reflections on life, work, and everything in between.',
            content: '<p>This is the full content of the blog post. It contains rich HTML formatting and demonstrates the beautiful typography of The Journal.</p><p>Here we explore themes of mindfulness, creativity, and the art of living intentionally in our modern world.</p><h2>A New Beginning</h2><p>Every journey begins with a single step, and this blog represents our commitment to thoughtful reflection and meaningful discourse.</p>',
            published_date: new Date().toISOString(),
            created_date: new Date().toISOString(),
            is_featured: true,
            category: 'Lifestyle',
            author_name: 'John Doe',
            author_bio: 'Writer and philosopher exploring the depths of human experience.',
            author_image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
            created_by: 'john@example.com',
            read_time: 5,
            featured_image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
            tags: ['welcome', 'philosophy', 'mindfulness']
          },
          {
            id: '2',
            title: 'The Art of Slow Living',
            slug: 'the-art-of-slow-living',
            excerpt: 'In a world that moves too fast, we explore the beauty of taking things slow.',
            content: '<p>In our hyperconnected world, the art of slow living has become a revolutionary act. This essay explores how we can reclaim our time and attention.</p><blockquote>Slow down and enjoy the journey, for life is not a race.</blockquote><p>The benefits of slow living extend far beyond personal well-being...</p>',
            published_date: new Date(Date.now() - 86400000).toISOString(),
            created_date: new Date(Date.now() - 86400000).toISOString(),
            is_featured: false,
            category: 'Lifestyle',
            author_name: 'Jane Smith',
            author_bio: 'Wellness advocate and slow living enthusiast.',
            author_image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
            created_by: 'jane@example.com',
            read_time: 7,
            featured_image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
            tags: ['slow-living', 'wellness', 'mindfulness']
          },
          {
            id: '3',
            title: 'Digital Minimalism',
            slug: 'digital-minimalism',
            excerpt: 'How to reclaim your attention and focus in an age of constant distraction.',
            content: '<p>Digital minimalism is not about rejecting technology, but about using it intentionally. This guide will help you create a healthier relationship with your devices.</p><h3>The Principles of Digital Minimalism</h3><p>Cal Newport outlines three key principles...</p>',
            published_date: new Date(Date.now() - 172800000).toISOString(),
            created_date: new Date(Date.now() - 172800000).toISOString(),
            is_featured: false,
            category: 'Technology',
            author_name: 'Mike Johnson',
            author_bio: 'Tech writer focused on digital wellness and productivity.',
            author_image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
            created_by: 'mike@example.com',
            read_time: 6,
            featured_image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800',
            tags: ['digital-minimalism', 'productivity', 'technology']
          },
          {
            id: '4',
            title: 'The Future of AI in Creative Arts: A Deep Dive',
            slug: 'future-of-ai-in-creative-arts-deep-dive',
            excerpt: 'An extensive exploration into how artificial intelligence is transforming the landscape of music, visual arts, and literature.',
            content: '<p>AI is no longer just a tool for automation; it\'s becoming a collaborator in the creative process...</p>',
            published_date: new Date(Date.now() - 259200000).toISOString(),
            created_date: new Date(Date.now() - 259200000).toISOString(),
            is_featured: false,
            category: 'Deep Dive',
            author_name: 'Alice Wonderland',
            author_bio: 'AI ethicist and art enthusiast.',
            author_image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150',
            created_by: 'alice@example.com',
            read_time: 180,
            featured_image: 'https://images.unsplash.com/photo-1696258686012-f502b01a371c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            tags: ['AI', 'art', 'creativity', 'deep-dive']
          },
          {
            id: '5',
            title: 'Sustainable Design Principles',
            slug: 'sustainable-design-principles',
            excerpt: 'How designers can create beautiful, functional solutions that respect our planet.',
            content: '<p>Sustainable design isn\'t just about using eco-friendly materials—it\'s about creating solutions that last...</p>',
            published_date: new Date(Date.now() - 345600000).toISOString(),
            created_date: new Date(Date.now() - 345600000).toISOString(),
            is_featured: false,
            category: 'Design',
            author_name: 'Sarah Green',
            author_bio: 'Sustainable design advocate and environmental consultant.',
            author_image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
            created_by: 'sarah@example.com',
            read_time: 12,
            featured_image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
            tags: ['sustainability', 'design', 'environment']
          },
          {
            id: '6',
            title: 'Building Resilient Teams',
            slug: 'building-resilient-teams',
            excerpt: 'The psychology and practices behind creating teams that thrive under pressure.',
            content: '<p>Resilient teams don\'t just survive challenges—they grow stronger from them...</p>',
            published_date: new Date(Date.now() - 432000000).toISOString(),
            created_date: new Date(Date.now() - 432000000).toISOString(),
            is_featured: false,
            category: 'Business',
            author_name: 'David Chen',
            author_bio: 'Organizational psychologist and team dynamics expert.',
            author_image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
            created_by: 'david@example.com',
            read_time: 15,
            featured_image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800',
            tags: ['leadership', 'teams', 'psychology', 'business']
          }
        ];
      },
      create: async (postData: any) => {
        // Mock post creation - replace with actual API call
        console.log('Creating post:', postData);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        return {
          id: Date.now().toString(),
          ...postData,
          created_date: new Date().toISOString(),
          created_by: 'john@example.com'
        };
      },
      update: async (id: string, postData: any) => {
        // Mock post update - replace with actual API call
        console.log('Updating post:', id, postData);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        return {
          id,
          ...postData,
          updated_date: new Date().toISOString()
        };
      },
      delete: async (id: string) => {
        // Mock post deletion - replace with actual API call
        console.log('Deleting post:', id);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        return { success: true, id };
      }
    },
    Book: {
      list: async (sortBy?: string) => {
        // Mock book data - replace with actual API call
        return [
          {
            id: '1',
            title: 'The Architecture of Thought',
            subtitle: 'How We Build Mental Models of the World',
            author: 'Dr. Sarah Chen',
            category: 'Philosophy',
            description: 'A groundbreaking exploration of how the human mind constructs meaning from chaos. Dr. Chen presents a unified theory of cognition that bridges neuroscience, philosophy, and artificial intelligence. This comprehensive work challenges our fundamental assumptions about consciousness and offers new pathways for understanding intelligence.',
            cover_image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800',
            publication_date: '2024-03-15',
            pages: 384,
            price: 28.99,
            isbn: '978-0-123456-78-9',
            is_featured: true,
            is_bestseller: true,
            amazon_url: 'https://amazon.com/dp/0123456789',
            preview_url: 'https://preview.example.com/architecture-of-thought',
            awards: [
              'National Book Award for Philosophy',
              'Cognitive Science Society Outstanding Book',
              'Philosophy Today Book of the Year'
            ],
            reviews: [
              {
                source: 'The New York Times',
                quote: 'A masterpiece that will reshape how we think about thinking itself.'
              },
              {
                source: 'Nature',
                quote: 'Chen has given us the most comprehensive theory of cognition since Chomsky.'
              }
            ]
          },
          {
            id: '2',
            title: 'Silicon Dreams',
            subtitle: 'The Future of Human-Computer Interaction',
            author: 'Marcus Rodriguez',
            category: 'Technology',
            description: 'An insider\'s look at the next frontier of computing. Rodriguez explores emerging technologies that will fundamentally change how humans interact with machines, from brain-computer interfaces to quantum computing applications.',
            cover_image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
            publication_date: '2024-01-20',
            pages: 312,
            price: 24.99,
            isbn: '978-0-123456-79-6',
            is_featured: false,
            is_bestseller: true,
            amazon_url: 'https://amazon.com/dp/0123456796',
            preview_url: 'https://preview.example.com/silicon-dreams',
            awards: [],
            reviews: []
          },
          {
            id: '3',
            title: 'The Mindful Entrepreneur',
            subtitle: 'Building Businesses with Purpose and Presence',
            author: 'Elena Vasquez',
            category: 'Business',
            description: 'A revolutionary approach to entrepreneurship that integrates mindfulness practices with business strategy. Vasquez shows how conscious leadership can create more sustainable, profitable, and meaningful companies.',
            cover_image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
            publication_date: '2023-11-08',
            pages: 256,
            price: 22.99,
            isbn: '978-0-123456-80-2',
            is_featured: false,
            is_bestseller: false,
            amazon_url: 'https://amazon.com/dp/0123456802',
            preview_url: 'https://preview.example.com/mindful-entrepreneur',
            awards: [],
            reviews: []
          },
          {
            id: '4',
            title: 'Quantum Consciousness',
            subtitle: 'Exploring the Mysteries of Mind and Matter',
            author: 'Dr. James Mitchell',
            category: 'Science',
            description: 'A deep dive into the intersection of quantum physics and consciousness studies. Mitchell presents compelling evidence for quantum effects in biological systems and their implications for understanding the nature of mind.',
            cover_image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800',
            publication_date: '2023-09-12',
            pages: 448,
            price: 32.99,
            isbn: '978-0-123456-81-9',
            is_featured: false,
            is_bestseller: false,
            amazon_url: 'https://amazon.com/dp/0123456819',
            preview_url: 'https://preview.example.com/quantum-consciousness',
            awards: [],
            reviews: []
          },
          {
            id: '5',
            title: 'The Digital Detox',
            subtitle: 'Reclaiming Your Life in the Age of Distraction',
            author: 'Amanda Foster',
            category: 'Non-Fiction',
            description: 'A practical guide to reducing digital overwhelm and reclaiming focus in our hyperconnected world. Foster provides actionable strategies for creating healthier relationships with technology.',
            cover_image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
            publication_date: '2023-07-25',
            pages: 224,
            price: 19.99,
            isbn: '978-0-123456-82-6',
            is_featured: false,
            is_bestseller: true,
            amazon_url: 'https://amazon.com/dp/0123456826',
            preview_url: 'https://preview.example.com/digital-detox',
            awards: [],
            reviews: []
          },
          {
            id: '6',
            title: 'The Art of Deep Work',
            subtitle: 'Mastering Focus in a Distracted World',
            author: 'Cal Newport',
            category: 'Business',
            description: 'Building on his previous work, Newport provides a comprehensive framework for achieving deep, meaningful work in an age of constant interruption. Essential reading for knowledge workers.',
            cover_image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800',
            publication_date: '2023-05-18',
            pages: 304,
            price: 26.99,
            isbn: '978-0-123456-83-3',
            is_featured: false,
            is_bestseller: true,
            amazon_url: 'https://amazon.com/dp/0123456833',
            preview_url: 'https://preview.example.com/deep-work',
            awards: [],
            reviews: []
          },
          {
            id: '7',
            title: 'The Innovator\'s Dilemma',
            subtitle: 'When New Technologies Cause Great Firms to Fail',
            author: 'Clayton Christensen',
            category: 'Business',
            description: 'A groundbreaking analysis of how successful companies can do everything right and still lose their market leadership. Christensen explains the phenomenon of disruptive innovation and its implications for business strategy.',
            cover_image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
            publication_date: '2023-03-10',
            pages: 320,
            price: 18.99,
            isbn: '978-0-123456-84-0',
            is_featured: false,
            is_bestseller: true,
            amazon_url: 'https://amazon.com/dp/0123456840',
            preview_url: 'https://preview.example.com/innovators-dilemma',
            awards: [
              'Harvard Business Review Best Business Book',
              'Financial Times Business Book of the Year'
            ],
            reviews: [
              {
                source: 'Harvard Business Review',
                quote: 'One of the most influential business books of our time.'
              },
              {
                source: 'The Wall Street Journal',
                quote: 'Essential reading for anyone in business or technology.'
              }
            ]
          },
          {
            id: '8',
            title: 'Sapiens',
            subtitle: 'A Brief History of Humankind',
            author: 'Yuval Noah Harari',
            category: 'Non-Fiction',
            description: 'An exploration of how Homo sapiens came to dominate the world. Harari examines the cognitive, agricultural, and scientific revolutions that shaped human history and our current global society.',
            cover_image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
            publication_date: '2023-01-15',
            pages: 512,
            price: 16.99,
            isbn: '978-0-123456-85-7',
            is_featured: false,
            is_bestseller: true,
            amazon_url: 'https://amazon.com/dp/0123456857',
            preview_url: 'https://preview.example.com/sapiens',
            awards: [
              'National Jewish Book Award',
              'Goodreads Choice Award for History & Biography'
            ],
            reviews: [
              {
                source: 'The Guardian',
                quote: 'A fascinating account of human history that challenges conventional wisdom.'
              }
            ]
          }
        ];
      }
    },
    User: {
      list: async () => {
        // Mock user data - replace with actual API call
        return [
          {
            id: '1',
            email: 'john@example.com',
            full_name: 'John Doe',
            created_date: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 year ago
            is_active: true
          },
          {
            id: '2',
            email: 'jane@example.com',
            full_name: 'Jane Smith',
            created_date: new Date(Date.now() - 200 * 24 * 60 * 60 * 1000).toISOString(), // 200 days ago
            is_active: true
          },
          {
            id: '3',
            email: 'mike@example.com',
            full_name: 'Mike Johnson',
            created_date: new Date(Date.now() - 150 * 24 * 60 * 60 * 1000).toISOString(), // 150 days ago
            is_active: true
          }
        ];
      }
    },
    UserProfile: {
      list: async () => {
        // Mock user profile data - replace with actual API call
        return [
          {
            id: '1',
            user_email: 'john@example.com',
            profile_image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
            cover_image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200',
            title: 'Senior Writer & Philosopher',
            company: 'The Journal',
            bio: 'A passionate writer exploring the intersection of technology, philosophy, and human experience. With over a decade of experience in digital media, I believe in the power of thoughtful discourse to shape our understanding of the world.',
            location: 'San Francisco, CA',
            website: 'https://johndoe.com',
            phone: '+1 (555) 123-4567',
            twitter: 'johndoe_writes',
            linkedin: 'https://linkedin.com/in/johndoe',
            instagram: 'johndoe_photos',
            github: 'johndoe',
            medium: 'https://medium.com/@johndoe',
            interests: ['Philosophy', 'Technology', 'Mindfulness', 'Writing', 'Digital Wellness', 'Cognitive Science'],
            achievements: [
              'Published author of 3 books on digital philosophy',
              'Keynote speaker at TechCrunch Disrupt 2023',
              'Winner of the Digital Writing Excellence Award 2022',
              'Featured writer in The New York Times Technology section',
              'Mentor to 50+ aspiring writers through The Journal program'
            ],
            featured_work: [
              {
                title: 'The Philosophy of Digital Minimalism',
                description: 'A comprehensive exploration of how technology shapes our consciousness and the path to digital wellness.',
                url: 'https://johndoe.com/philosophy-digital-minimalism'
              },
              {
                title: 'Mindful Technology Design',
                description: 'Principles for creating technology that enhances rather than diminishes human flourishing.',
                url: 'https://johndoe.com/mindful-technology-design'
              }
            ]
          },
          {
            id: '2',
            user_email: 'jane@example.com',
            profile_image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400',
            cover_image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
            title: 'Wellness Advocate & Lifestyle Writer',
            company: 'Mindful Living Co.',
            bio: 'Dedicated to exploring the art of slow living and mindful practices in our fast-paced world. I write about wellness, sustainable living, and finding balance in the digital age.',
            location: 'Portland, OR',
            website: 'https://janewellness.com',
            phone: '+1 (555) 987-6543',
            twitter: 'jane_wellness',
            linkedin: 'https://linkedin.com/in/janesmith',
            instagram: 'jane_mindful',
            github: 'janesmith',
            medium: 'https://medium.com/@janewellness',
            interests: ['Wellness', 'Mindfulness', 'Sustainable Living', 'Yoga', 'Meditation', 'Slow Living'],
            achievements: [
              'Certified yoga instructor with 500+ hours of training',
              'Author of "The Art of Slow Living" bestseller',
              'Featured in Oprah\'s Book Club recommendations',
              'Wellness columnist for Mindful Magazine',
              'Founder of the Slow Living Movement community'
            ],
            featured_work: [
              {
                title: 'The Slow Living Manifesto',
                description: 'A guide to reclaiming time and attention in our hyperconnected world.',
                url: 'https://janewellness.com/slow-living-manifesto'
              },
              {
                title: 'Mindful Parenting in the Digital Age',
                description: 'Strategies for raising conscious children in a technology-saturated world.',
                url: 'https://janewellness.com/mindful-parenting'
              }
            ]
          },
          {
            id: '3',
            user_email: 'mike@example.com',
            profile_image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
            cover_image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200',
            title: 'Tech Writer & Digital Wellness Expert',
            company: 'Digital Balance Inc.',
            bio: 'Technology writer focused on digital wellness and productivity. I help people create healthier relationships with technology while maximizing their potential in the digital age.',
            location: 'Austin, TX',
            website: 'https://mikedigital.com',
            phone: '+1 (555) 456-7890',
            twitter: 'mike_digital',
            linkedin: 'https://linkedin.com/in/mikejohnson',
            instagram: 'mike_digital',
            github: 'mikejohnson',
            medium: 'https://medium.com/@mikedigital',
            interests: ['Technology', 'Productivity', 'Digital Wellness', 'AI Ethics', 'Remote Work', 'Focus'],
            achievements: [
              'Author of "Digital Minimalism" methodology',
              'Tech columnist for Wired Magazine',
              'Speaker at SXSW Interactive 2023',
              'Advisor to 3 successful productivity startups',
              'Creator of the Digital Detox Challenge program'
            ],
            featured_work: [
              {
                title: 'The Digital Minimalism Framework',
                description: 'A systematic approach to reducing digital clutter and reclaiming focus.',
                url: 'https://mikedigital.com/digital-minimalism-framework'
              },
              {
                title: 'AI Ethics in Practice',
                description: 'Real-world applications of ethical AI principles in modern technology.',
                url: 'https://mikedigital.com/ai-ethics-practice'
              }
            ]
          },
          {
            id: '4',
            user_email: 'sarah@example.com',
            profile_image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
            cover_image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200',
            title: 'Sustainable Design Consultant',
            company: 'Green Design Studio',
            bio: 'Passionate about creating beautiful, functional solutions that respect our planet. I specialize in sustainable design principles and environmental consulting for forward-thinking companies.',
            location: 'Seattle, WA',
            website: 'https://sarahgreen.design',
            phone: '+1 (555) 234-5678',
            twitter: 'sarah_green',
            linkedin: 'https://linkedin.com/in/sarahgreen',
            instagram: 'sarah_green_design',
            github: 'sarahgreen',
            medium: 'https://medium.com/@sarahgreen',
            interests: ['Sustainable Design', 'Environmental Consulting', 'Green Technology', 'Circular Economy', 'Eco-Friendly Materials'],
            achievements: [
              'LEED Certified Professional',
              'Winner of the Sustainable Design Award 2023',
              'Featured in Architectural Digest Green Issue',
              'Consultant for Fortune 500 sustainability initiatives',
              'Author of "Designing for Tomorrow"'
            ],
            featured_work: [
              {
                title: 'Circular Design Principles',
                description: 'How to design products and systems that eliminate waste and pollution.',
                url: 'https://sarahgreen.design/circular-design-principles'
              },
              {
                title: 'The Future of Sustainable Architecture',
                description: 'Emerging trends in eco-friendly building design and construction.',
                url: 'https://sarahgreen.design/future-sustainable-architecture'
              }
            ]
          }
        ];
      },
      create: async (profileData: any) => {
        // Mock profile creation - replace with actual API call
        console.log('Creating profile:', profileData);

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));

        return {
          id: Date.now().toString(),
          ...profileData,
          created_date: new Date().toISOString()
        };
      },
      update: async (id: string, profileData: any) => {
        // Mock profile update - replace with actual API call
        console.log('Updating profile:', id, profileData);

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));

        return {
          id,
          ...profileData,
          updated_date: new Date().toISOString()
        };
      }
    }
  },
  auth: {
    me: async () => {
      // Mock user - replace with actual auth implementation
      return {
        email: 'john@example.com',
        name: 'John Doe',
        full_name: 'John Doe',
        id: '1'
      };
    },
    redirectToLogin: async (redirectUrl: string) => {
      // Mock login redirect - replace with actual auth implementation
      console.log('Redirecting to login with URL:', redirectUrl);
      // In a real implementation, this would redirect to your auth provider
      alert('Login functionality would redirect to auth provider');
    }
  },
  integrations: {
    Core: {
      UploadFile: async ({ file }: { file: File }) => {
        // Mock file upload - replace with actual upload implementation
        console.log('Uploading file:', file.name);
        
        // Simulate upload delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Return mock URL - in real implementation, this would be the actual uploaded file URL
        return {
          file_url: `https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop&crop=center`
        };
      }
    }
  }
};
