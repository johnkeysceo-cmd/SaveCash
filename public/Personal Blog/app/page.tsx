import React, { useState } from "react";
import { blogAPI } from "@/api/blogClient";
import { useQuery } from "@tanstack/react-query";
import PostCard from "../components/blog/PostCard";
import CategoryFilter from "../components/blog/CategoryFilter";
import SearchBar from "../components/blog/SearchBar";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";


export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");


  const { data: posts, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => blogAPI.entities.BlogPost.list("-published_date"),
    initialData: [],
  });


  const publishedPosts = posts.filter(post => post.published_date);
  const featuredPost = publishedPosts.find(post => post.is_featured) || publishedPosts[0];
  const recentPosts = publishedPosts.filter(post => post.id !== featuredPost?.id);


  const filteredPosts = recentPosts.filter(post => {
    const matchesSearch =
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 py-24 md:py-32">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative element */}
          <motion.div
            className="w-20 h-[3px] bg-gradient-to-r from-transparent via-[#8b7355] to-transparent mx-auto mb-10"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
         
          <motion.h1
            className="text-6xl md:text-8xl font-display font-bold text-[#1a1614] mb-8 leading-[1.1]"
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              letterSpacing: '-0.03em',
              fontWeight: 800
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            The Journal
          </motion.h1>
         
          <motion.div
            className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#1a1614] to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
         
          <motion.p
            className="text-2xl text-[#4a4440] max-w-3xl mx-auto leading-relaxed font-body mb-12"
            style={{fontFamily: 'Spectral, Georgia, serif', fontWeight: 400}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Essays, stories, and reflections on life, work, and everything in between.
            <span className="block mt-4 text-xl text-[#6b6560] italic">Where depth matters more than speed.</span>
          </motion.p>
         
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </motion.div>


        {/* Featured Post */}
        {featuredPost && !isLoading && (
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <PostCard post={featuredPost} featured={true} />
          </motion.div>
        )}


        {isLoading && !featuredPost && (
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Skeleton className="h-[500px] w-full" />
          </motion.div>
        )}
      </section>


      {/* Category Filter */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-12 border-y-2 border-[#e8e5df]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      </motion.section>


      {/* Recent Posts */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        {searchQuery && (
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="text-[#6b6560] font-sans text-lg" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
              {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'} for <span className="font-semibold text-[#1a1614]">"{searchQuery}"</span>
            </p>
          </motion.div>
        )}


        {isLoading ? (
          <div className="space-y-12">
            {Array(5).fill(0).map((_, i) => (
              <motion.div
                key={i}
                className="border-b-2 border-[#e8e5df] pb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Skeleton className="h-10 w-3/4 mb-6" />
                <Skeleton className="h-5 w-full mb-3" />
                <Skeleton className="h-5 w-2/3" />
              </motion.div>
            ))}
          </div>
        ) : filteredPosts.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {filteredPosts.map((post, index) => (
                <PostCard key={post.id} post={post} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div
            className="text-center py-32"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#6b6560] text-2xl font-display mb-3" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
              {searchQuery ? 'No articles found matching your search.' : 'No articles found in this category.'}
            </p>
            {searchQuery && (
              <p className="text-base text-[#8a847e] font-sans" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                Try different keywords or browse all articles
              </p>
            )}
          </motion.div>
        )}
      </section>
    </motion.div>
  );
}
