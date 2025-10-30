import React from "react";
import { blogAPI } from "@/api/blogClient";
import { useQuery } from "@tanstack/react-query";
import { createPageUrl } from "@/utils";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";


export default function DeepDives() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['deepDivePosts'],
    queryFn: async () => {
      const allPosts = await blogAPI.entities.BlogPost.list("-published_date");
      return allPosts.filter(post => post.category === "Deep Dive" && post.published_date);
    },
    initialData: [],
  });


  return (
    <div className="min-h-screen">
      <motion.section
        className="max-w-5xl mx-auto px-6 py-20 border-b border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <BookOpen className="w-16 h-16 text-gray-900 mx-auto" />
          </motion.div>
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6" style={{fontFamily: 'Georgia, serif'}}>
            Deep Dives
          </h1>
          <p className="text-xl text-gray-600 font-serif max-w-2xl mx-auto leading-relaxed">
            Exhaustive, multi-hour explorations of complex subjects. These are not articles—they are treatises,
            meant to be read slowly, contemplated deeply, and returned to often.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-sm text-gray-500 font-sans">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>2-4 hour reads</span>
            </div>
            <span>•</span>
            <span>{posts.length} {posts.length === 1 ? 'essay' : 'essays'}</span>
          </div>
        </div>
      </motion.section>


      <section className="max-w-5xl mx-auto px-6 py-16">
        {isLoading ? (
          <div className="space-y-12">
            {Array(3).fill(0).map((_, i) => (
              <div key={i} className="border-b border-gray-200 pb-12">
                <Skeleton className="h-12 w-3/4 mb-4" />
                <Skeleton className="h-6 w-full mb-3" />
                <Skeleton className="h-6 w-full mb-3" />
                <Skeleton className="h-6 w-2/3 mb-6" />
                <Skeleton className="h-4 w-48" />
              </div>
            ))}
          </div>
        ) : posts.length > 0 ? (
          <div className="space-y-16">
            {posts.map((post, index) => (
              <Link href={createPageUrl("post") + `?id=${post.id}`}>
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group cursor-pointer border-b border-gray-200 pb-16 last:border-b-0"
                >
                <div className="grid md:grid-cols-3 gap-8">
                  {post.featured_image && (
                    <motion.div
                      className="md:col-span-1 relative aspect-[3/4] overflow-hidden"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-full object-cover grayscale"
                        whileHover={{ filter: "grayscale(0%)" }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.div>
                  )}
                  <div className={post.featured_image ? "md:col-span-2" : "md:col-span-3"}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-gray-900 text-white text-xs uppercase tracking-widest font-sans">
                        Deep Dive
                      </span>
                      <div className="flex items-center gap-2 text-sm text-gray-600 font-sans">
                        <Clock className="w-4 h-4" />
                        <span>{post.read_time} min read</span>
                      </div>
                    </div>
                   
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight group-hover:text-gray-600 transition-colors duration-500" style={{fontFamily: 'Georgia, serif'}}>
                      {post.title}
                    </h2>
                   
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 font-serif">
                      {post.excerpt}
                    </p>
                   
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-sm text-gray-500 font-sans">
                        <span className="uppercase tracking-wider">{post.author_name}</span>
                        <span>•</span>
                        <span>{format(new Date(post.published_date), "MMMM d, yyyy")}</span>
                      </div>
                     
                      <motion.div
                        className="flex items-center gap-2 text-sm uppercase tracking-wider text-gray-900 font-sans font-semibold"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        Read Essay
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                   
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-6">
                        {post.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 border border-gray-300 text-xs text-gray-600 font-sans">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
              </Link>
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg font-serif mb-2">No deep dives published yet.</p>
            <p className="text-sm text-gray-400 font-sans">
              Check back soon for extensive explorations of complex topics.
            </p>
          </motion.div>
        )}
      </section>
    </div>
  );
}
