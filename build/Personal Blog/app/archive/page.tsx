import React, { useState } from "react";
import { blogAPI } from "@/api/blogClient";
import { useQuery } from "@tanstack/react-query";
import PostCard from "../components/blog/PostCard";
import CategoryFilter from "../components/blog/CategoryFilter";
import SearchBar from "../components/blog/SearchBar";
import { Skeleton } from "@/components/ui/skeleton";
import { FileText } from "lucide-react";


export default function Archive() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");


  const { data: posts, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => blogAPI.entities.BlogPost.list("-published_date"),
    initialData: [],
  });


  const publishedPosts = posts.filter(post => post.published_date);


  const filteredPosts = publishedPosts.filter(post => {
    const matchesSearch =
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });


  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 py-20 text-center border-b border-gray-200">
        <h1 className="text-6xl font-serif font-bold mb-6" style={{fontFamily: 'Georgia, serif'}}>
          Archive
        </h1>
        <p className="text-xl text-gray-600 font-serif max-w-2xl mx-auto mb-8">
          Browse all articles by category or search for specific topics
        </p>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </section>


      <section className="max-w-5xl mx-auto px-6 py-8 border-b border-gray-200">
        <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      </section>


      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-gray-600 font-sans">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>
       
        {isLoading ? (
          <div className="space-y-8">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="border-b border-gray-200 pb-8">
                <Skeleton className="h-8 w-3/4 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        ) : filteredPosts.length > 0 ? (
          <div>
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg font-serif mb-2">No articles found</p>
            <p className="text-sm text-gray-400 font-sans">
              {searchQuery
                ? 'Try adjusting your search terms'
                : 'No articles available in this category yet'}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
