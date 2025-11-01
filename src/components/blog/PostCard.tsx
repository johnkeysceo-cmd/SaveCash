import React from "react";
import { motion } from "motion/react";
import { Calendar, Clock, TrendingUp } from "lucide-react";
import { format } from "date-fns";

interface PostCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    featured_image?: string;
    published_date?: string;
    created_date: string;
    category: string;
    author_name: string;
    read_time: number;
    is_featured?: boolean;
  };
  featured?: boolean;
  index?: number;
  onPostClick?: (postId: string) => void;
}

export default function PostCard({ post, featured = false, index = 0, onPostClick }: PostCardProps) {
  const handleClick = () => {
    if (onPostClick) {
      onPostClick(post.id);
    } else {
      window.location.href = `/blog/post?id=${post.id}`;
    }
  };

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        className="group cursor-pointer border-b-[3px] border-double border-gray-700 pb-24 mb-24 relative"
        onClick={handleClick}
      >
        <div>
          {/* Featured badge */}
          <motion.div
            className="absolute -top-4 left-0 z-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 text-[11px] uppercase tracking-[0.25em] font-semibold flex items-center gap-2">
              <TrendingUp className="w-3 h-3" />
              Featured Story
            </div>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-20 items-center pt-8">
            <motion.div
              className="md:col-span-3 order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            >
              <motion.div
                className="text-[11px] uppercase tracking-[0.3em] text-gray-400 mb-6 flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.5 }}
              >
                <span className="px-4 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/50">{post.category}</span>
                <span className="h-[2px] w-8 bg-purple-500/50" />
                <span>{format(new Date(post.published_date || post.created_date), "MMM d, yyyy").toUpperCase()}</span>
              </motion.div>
              
              <h2 className="text-6xl md:text-7xl font-extrabold text-white mb-10 leading-[1.05] group-hover:text-purple-300 transition-all duration-800">
                {post.title}
              </h2>
              
              <p className="text-2xl text-gray-300 leading-[1.75] mb-10">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-400 border-t border-gray-700 pt-6">
                <span className="uppercase tracking-[0.18em] font-semibold text-white">{post.author_name}</span>
                <span className="text-purple-400">•</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.read_time} min read</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="md:col-span-2 order-1 md:order-2 relative aspect-[4/5] overflow-hidden border-[3px] border-gray-700 group"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ scale: 1.04, borderColor: '#a855f7' }}
            >
              <motion.img
                src={post.featured_image || "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200"}
                alt={post.title}
                className="w-full h-full object-cover grayscale"
                whileHover={{ filter: "grayscale(0%)", scale: 1.1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />
              <div className="absolute inset-0 border-[5px] border-white opacity-0 group-hover:opacity-15 transition-opacity duration-800 pointer-events-none" style={{margin: '12px'}} />
              
              {/* Corner ornaments */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
            </motion.div>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.18, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer border-b-[2px] border-gray-700 pb-14 mb-14 transition-all duration-700"
      onClick={handleClick}
    >
      <div className="grid md:grid-cols-4 gap-14">
        <div className="md:col-span-3">
          <motion.div
            className="text-[11px] uppercase tracking-[0.3em] text-gray-400 mb-5 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.18 + 0.3 }}
          >
            <span className="px-3 py-1 border border-gray-600 text-gray-400">{post.category}</span>
            <span className="h-[1px] w-6 bg-gray-600" />
            <span>{format(new Date(post.published_date || post.created_date), "MMM d").toUpperCase()}</span>
          </motion.div>
          
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.15] group-hover:text-purple-300 transition-all duration-600">
            {post.title}
          </h3>
          
          <p className="text-gray-300 text-lg leading-[1.8] mb-7 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center gap-5 text-sm text-gray-400">
            <span className="uppercase tracking-[0.18em] font-semibold text-white">{post.author_name}</span>
            <span className="text-purple-400">•</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.read_time} min</span>
            </div>
          </div>
        </div>
        
        <motion.div
          className="relative aspect-[3/4] overflow-hidden border-[2px] border-gray-700 group"
          whileHover={{ scale: 1.08, borderColor: '#a855f7' }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.img
            src={post.featured_image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800"}
            alt={post.title}
            className="w-full h-full object-cover grayscale"
            whileHover={{ filter: "grayscale(0%)", scale: 1.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
        </motion.div>
      </div>
    </motion.article>
  );
}

