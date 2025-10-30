import React from "react";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { Calendar, Clock, TrendingUp } from "lucide-react";
import { format } from "date-fns";
import { motion } from "framer-motion";


export default function PostCard({ post, featured = false, index = 0 }) {
  const postUrl = createPageUrl("post") + `?id=${post.id}`;


  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        className="group cursor-pointer border-b-[3px] border-double border-[#e8e5df] pb-24 mb-24 relative"
      >
        <Link href={postUrl}>
          <div>
            {/* Featured badge */}
            <motion.div
              className="absolute -top-4 left-0 z-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="bg-[#1a1614] text-[#fefdfb] px-6 py-2 text-[11px] uppercase tracking-[0.25em] font-sans flex items-center gap-2" style={{fontFamily: 'Crimson Pro, Georgia, serif', fontWeight: 700}}>
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
              className="text-[11px] uppercase tracking-[0.3em] text-[#8a847e] mb-6 font-sans flex items-center gap-4"
              style={{fontFamily: 'Crimson Pro, Georgia, serif', fontWeight: 600}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              <span className="px-4 py-1.5 bg-gradient-to-r from-[#1a1614] to-[#2d2824] text-[#fefdfb] border border-[#b8956a]">{post.category}</span>
              <span className="h-[2px] w-8 bg-[#b8956a]" />
              <span className="editorial-number">{format(new Date(post.published_date || post.created_date), "MMM d, yyyy").toUpperCase()}</span>
            </motion.div>
           
            <h2 className="text-6xl md:text-7xl font-display font-extrabold text-[#1a1614] mb-10 leading-[1.05] group-hover:text-[#4a4440] transition-all duration-800" style={{fontFamily: 'Playfair Display, Georgia, serif', letterSpacing: '-0.03em', fontWeight: 900, textShadow: '0 2px 16px rgba(184, 149, 106, 0.08)'}}>
              {post.title}
            </h2>
           
            <p className="text-2xl text-[#4a4440] leading-[1.75] mb-10 font-body" style={{fontFamily: 'Spectral, Georgia, serif', fontWeight: 400}}>
              {post.excerpt}
            </p>
           
            <div className="flex items-center gap-6 text-sm text-[#6b6560] font-sans border-t border-[#e8e5df] pt-6" style={{fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '14px'}}>
              <span className="uppercase tracking-[0.18em] font-semibold text-[#1a1614]">{post.author_name}</span>
              <span className="text-[#b8956a]">•</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.read_time} min read</span>
              </div>
            </div>
          </motion.div>
         
          <motion.div
            className="md:col-span-2 order-1 md:order-2 relative aspect-[4/5] overflow-hidden border-[3px] border-[#d4cfc7] group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ scale: 1.04, borderColor: '#b8956a' }}
          >
            <motion.img
              src={post.featured_image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200"}
              alt={post.title}
              className="w-full h-full object-cover grayscale"
              whileHover={{ filter: "grayscale(0%)", scale: 1.1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />
            <div className="absolute inset-0 border-[5px] border-[#1a1614] opacity-0 group-hover:opacity-15 transition-opacity duration-800 pointer-events-none" style={{margin: '12px'}} />
           
            {/* Corner ornaments */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#b8956a] opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#b8956a] opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#b8956a] opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#b8956a] opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
          </motion.div>
        </div>
          </div>
        </Link>
      </motion.article>
    );
  }


  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.18, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer border-b-[2px] border-[#e8e5df] pb-14 mb-14 transition-all duration-700"
    >
      <Link href={postUrl}>
      <div className="grid md:grid-cols-4 gap-14">
        <div className="md:col-span-3">
          <motion.div
            className="text-[11px] uppercase tracking-[0.3em] text-[#8a847e] mb-5 font-sans flex items-center gap-3"
            style={{fontFamily: 'Crimson Pro, Georgia, serif', fontWeight: 600}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.18 + 0.3 }}
          >
            <span className="px-3 py-1 border border-[#d4cfc7] text-[#6b6560]">{post.category}</span>
            <span className="h-[1px] w-6 bg-[#d4cfc7]" />
            <span className="editorial-number">{format(new Date(post.published_date || post.created_date), "MMM d").toUpperCase()}</span>
          </motion.div>
         
          <h3 className="text-4xl md:text-5xl font-display font-bold text-[#1a1614] mb-6 leading-[1.15] group-hover:text-[#4a4440] transition-all duration-600" style={{fontFamily: 'Playfair Display, Georgia, serif', letterSpacing: '-0.025em', fontWeight: 800}}>
            {post.title}
          </h3>
         
          <p className="text-[#4a4440] text-lg leading-[1.8] mb-7 font-body line-clamp-3" style={{fontFamily: 'Spectral, Georgia, serif'}}>
            {post.excerpt}
          </p>
         
          <div className="flex items-center gap-5 text-sm text-[#6b6560] font-sans" style={{fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '14px'}}>
            <span className="uppercase tracking-[0.18em] font-semibold text-[#1a1614]">{post.author_name}</span>
            <span className="text-[#b8956a]">•</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.read_time} min</span>
            </div>
          </div>
        </div>
       
        <motion.div
          className="relative aspect-[3/4] overflow-hidden border-[2px] border-[#d4cfc7] group"
          whileHover={{ scale: 1.08, borderColor: '#b8956a' }}
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1614]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
        </motion.div>
      </div>
      </Link>
    </motion.article>
  );
}