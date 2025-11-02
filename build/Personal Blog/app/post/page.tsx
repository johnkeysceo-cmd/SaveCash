import React, { useState, useEffect } from "react";
import { blogAPI } from "@/api/blogClient";
import { useQuery } from "@tanstack/react-query";
import { Calendar, ArrowLeft, Clock, Tag, Share2, Bookmark, ExternalLink } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import ReadingProgress from "../components/ReadingProgress";
import Link from "next/link";
import { useSearchParams } from "next/navigation";


export default function Post() {
  const searchParams = useSearchParams();
  const postId = searchParams.get('id');
  const [user, setUser] = useState(null);
  const [bookmarked, setBookmarked] = useState(false);


  useEffect(() => {
    blogAPI.auth.me().then(setUser).catch(() => {});
  }, []);


  const { data: post, isLoading, error } = useQuery({
    queryKey: ['post', postId],
    queryFn: async () => {
      const posts = await blogAPI.entities.BlogPost.list();
      return posts.find(p => p.id === postId);
    },
    enabled: !!postId,
  });


  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };


  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-10 py-16">
        <Skeleton className="h-12 w-32 mb-12" />
        <Skeleton className="h-6 w-24 mb-6" />
        <Skeleton className="h-20 w-full mb-12" />
        <Skeleton className="h-8 w-3/4 mb-6" />
        <Skeleton className="h-[500px] w-full mb-12" />
        <Skeleton className="h-6 w-full mb-4" />
        <Skeleton className="h-6 w-full mb-4" />
        <Skeleton className="h-6 w-2/3" />
      </div>
    );
  }


  if (error || !post) {
    return (
      <motion.div
        className="max-w-4xl mx-auto px-10 py-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-serif font-bold mb-6 text-[#1a1614]" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
          Post Not Found
        </h1>
        <p className="text-[#6b6560] mb-12 font-body text-xl" style={{fontFamily: 'Spectral, Georgia, serif'}}>
          The article you're looking for doesn't exist or has been removed.
        </p>
        <Link href={createPageUrl("home")}>
          <Button
            variant="outline"
            className="rounded-none font-sans uppercase tracking-[0.2em] border-2 border-[#1a1614] hover:bg-[#1a1614] hover:text-[#fefdfb] transition-all duration-500"
            style={{fontFamily: 'Crimson Pro, Georgia, serif'}}
          >
            <ArrowLeft className="w-4 h-4 mr-3" /> Return Home
          </Button>
        </Link>
      </motion.div>
    );
  }


  const isAuthor = user && post.created_by === user.email;


  return (
    <>
      <ReadingProgress />
      <motion.article
        className="pb-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-10 py-16">
          <motion.div
            className="flex items-center justify-between mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div whileHover={{ x: -6 }} transition={{ duration: 0.3 }}>
              <Link href={createPageUrl("home")}>
                <Button
                  variant="ghost"
                  className="font-sans text-[#6b6560] hover:text-[#1a1614] uppercase tracking-[0.2em] text-[13px]"
                  style={{fontFamily: 'Crimson Pro, Georgia, serif'}}
                >
                  <ArrowLeft className="w-4 h-4 mr-3" /> Back
                </Button>
              </Link>
            </motion.div>
            <div className="flex gap-3">
              <motion.div whileHover={{ scale: 1.08, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleShare}
                  className="text-[#6b6560] hover:text-[#1a1614]"
                  title="Share article"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.08, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setBookmarked(!bookmarked)}
                  className={`${bookmarked ? 'text-[#b8956a]' : 'text-[#6b6560]'} hover:text-[#1a1614]`}
                  title="Bookmark article"
                >
                  <Bookmark className={`w-5 h-5 ${bookmarked ? 'fill-current' : ''}`} />
                </Button>
              </motion.div>
              {isAuthor && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.06, boxShadow: '0 8px 24px rgba(139, 115, 85, 0.2)' }}
                >
                  <Link href={createPageUrl("write") + `?edit=${post.id}`}>
                    <Button
                      variant="outline"
                      className="rounded-none font-sans uppercase tracking-[0.2em] text-[13px] border-2 border-[#b8956a] hover:bg-[#b8956a] hover:text-[#fefdfb] transition-all duration-500"
                      style={{fontFamily: 'Crimson Pro, Georgia, serif', fontWeight: 600}}
                    >
                      Edit Post
                    </Button>
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>


          <motion.div
            className="text-[12px] uppercase tracking-[0.3em] text-[#8a847e] mb-8 font-sans text-center"
            style={{fontFamily: 'Crimson Pro, Georgia, serif', fontWeight: 600}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {post.category}
          </motion.div>


          <motion.h1
            className="text-6xl md:text-7xl font-serif font-bold mb-12 leading-[1.1] text-center text-[#1a1614]"
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              letterSpacing: '-0.03em',
              textShadow: '0 4px 24px rgba(184, 149, 106, 0.1)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            {post.title}
          </motion.h1>


          {post.excerpt && (
            <motion.p
              className="text-2xl text-[#4a4440] leading-relaxed mb-12 font-serif text-center max-w-3xl mx-auto"
              style={{fontFamily: 'Spectral, Georgia, serif', fontStyle: 'italic'}}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {post.excerpt}
            </motion.p>
          )}


          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mb-16 pb-12 border-b-2 border-double border-[#e8e5df]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-sm text-[#6b6560] font-sans uppercase tracking-[0.15em]" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
              By <span className="font-semibold text-[#1a1614]">{post.author_name}</span>
            </div>
            <span className="text-[#b8956a]">•</span>
            <div className="flex items-center gap-2 text-sm text-[#6b6560] font-sans" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
              <Calendar className="w-4 h-4" />
              {format(new Date(post.published_date || post.created_date), "MMMM d, yyyy")}
            </div>
            <span className="text-[#b8956a]">•</span>
            <div className="flex items-center gap-2 text-sm text-[#6b6560] font-sans" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
              <Clock className="w-4 h-4" />
              {post.read_time} min read
            </div>
          </motion.div>


          {post.featured_image && (
            <motion.figure
              className="mb-16 overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
              <motion.img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-auto grayscale"
                whileHover={{ filter: "grayscale(0%)", scale: 1.02 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 border-4 border-[#b8956a] opacity-0 hover:opacity-30 transition-opacity duration-700 pointer-events-none" style={{margin: '12px'}} />
            </motion.figure>
          )}


          <motion.div
            className="prose prose-xl max-w-none font-serif article-content"
            style={{
              fontFamily: 'Spectral, Georgia, serif',
              fontSize: '1.2rem',
              lineHeight: '2rem',
              color: '#1a1614'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />


          {post.tags && post.tags.length > 0 && (
            <motion.div
              className="mt-20 pt-12 border-t-2 border-double border-[#e8e5df]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Tag className="w-5 h-5 text-[#b8956a]" />
                <h3 className="text-sm uppercase tracking-[0.25em] text-[#6b6560] font-sans" style={{fontFamily: 'Crimson Pro, Georgia, serif', fontWeight: 600}}>Tagged</h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {post.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 border-2 border-[#d4cfc7] text-sm text-[#4a4440] font-sans hover:border-[#b8956a] hover:bg-[#faf8f4] hover:text-[#1a1614] transition-all cursor-pointer"
                    style={{fontFamily: 'Crimson Pro, Georgia, serif'}}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.06 }}
                    whileHover={{ y: -3, scale: 1.06, boxShadow: '0 8px 24px rgba(184, 149, 106, 0.15)' }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}


          {/* Author Info - Enhanced */}
          <motion.div
            className="mt-20 pt-12 border-t-2 border-double border-[#e8e5df]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <Link href={createPageUrl("profile") + `?email=${post.created_by}`}>
              <motion.div
                className="flex items-start gap-8 p-8 bg-[#faf8f4] border-2 border-[#d4cfc7] hover:border-[#8b7355] transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(139, 115, 85, 0.15)' }}
                transition={{ duration: 0.4 }}
              >
              <motion.img
                src={post.author_image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"}
                alt={post.author_name}
                className="w-32 h-32 object-cover border-4 border-[#fefdfb] shadow-lg"
                whileHover={{ scale: 1.1, borderColor: '#8b7355' }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-3xl font-display font-bold text-[#1a1614]" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                    {post.author_name}
                  </h3>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink className="w-5 h-5 text-[#8b7355]" />
                  </motion.div>
                </div>
                <p className="text-[#6b6560] font-sans leading-relaxed text-lg mb-4" style={{fontFamily: 'Spectral, Georgia, serif'}}>
                  {post.author_bio || "Writer at The Journal"}
                </p>
                <motion.div
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-[#8b7355] font-sans"
                  style={{fontFamily: 'Crimson Pro, Georgia, serif', fontWeight: 600}}
                  whileHover={{ x: 4 }}
                >
                  View Full Profile
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </motion.div>
              </div>
            </motion.div>
            </Link>
          </motion.div>
        </div>


        <style>{`
          .article-content h1,
          .article-content h2,
          .article-content h3 {
            font-family: 'Playfair Display', Georgia, serif;
            font-weight: 700;
            color: #1a1614;
            margin-top: 3rem;
            margin-bottom: 1.5rem;
            letter-spacing: -0.025em;
          }
          .article-content h1 { font-size: 2.5rem; }
          .article-content h2 { font-size: 2.125rem; }
          .article-content h3 { font-size: 1.75rem; }
          .article-content p {
            margin-bottom: 2rem;
            line-height: 2rem;
          }
          .article-content ul,
          .article-content ol {
            margin: 2rem 0;
            padding-left: 2.5rem;
          }
          .article-content li {
            margin-bottom: 1rem;
            line-height: 1.95rem;
          }
          .article-content blockquote {
            border-left: 6px solid #b8956a;
            padding-left: 2.5rem;
            margin: 3rem 0;
            font-style: italic;
            color: #4a4440;
            font-size: 1.35rem;
            line-height: 2.1rem;
            font-family: 'Cormorant', Georgia, serif;
          }
          .article-content a {
            color: #8b7355;
            font-weight: 500;
            transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
            text-decoration: underline;
            text-decoration-color: #d4cfc7;
            text-underline-offset: 4px;
          }
          .article-content a:hover {
            color: #1a1614;
            text-decoration-color: #b8956a;
          }
          .article-content strong {
            font-weight: 600;
            color: #1a1614;
          }
          .article-content em {
            font-style: italic;
            font-family: 'Cormorant', Georgia, serif;
          }
          .article-content p:first-of-type::first-letter {
            font-family: 'Playfair Display', Georgia, serif;
            float: left;
            font-size: 5.5rem;
            line-height: 4.5rem;
            padding-right: 0.15em;
            margin-top: 0.1em;
            font-weight: 700;
            color: #8b7355;
          }
        `}</style>
      </motion.article>
    </>
  );
}
