import React, { useState } from "react";
import { blogAPI } from "@/api/blogClient";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Award, BookOpen, ExternalLink, Star, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";

// Type definitions
interface Book {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  category: string;
  description: string;
  cover_image?: string;
  publication_date?: string;
  pages?: number;
  price: number;
  isbn?: string;
  is_featured: boolean;
  is_bestseller: boolean;
  amazon_url?: string;
  preview_url?: string;
  awards?: string[];
  reviews?: Array<{
    source: string;
    quote: string;
  }>;
}

interface Review {
  source: string;
  quote: string;
}

export default function Books() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");


  const { data: books = [], isLoading } = useQuery<Book[]>({
    queryKey: ['books'],
    queryFn: () => blogAPI.entities.Book.list("-publication_date"),
  });


  const categories = ["All", "Technology", "Business", "Philosophy", "Science", "Biography", "Fiction", "Non-Fiction"];


  const filteredBooks = selectedCategory === "All"
    ? books
    : books.filter((book: Book) => book.category === selectedCategory);


  const featuredBook = books.find((book: Book) => book.is_featured) || books[0];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden border-b-4 border-double border-[#d4cfc7]"
        style={{
          background: 'linear-gradient(135deg, #fefdfb 0%, #faf8f4 50%, #f5f3ee 100%)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1614' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />


        <div className="max-w-7xl mx-auto px-8 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#1a1614] text-[#fefdfb] mb-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <BookOpen className="w-5 h-5" />
              <span className="text-sm uppercase tracking-[0.25em] font-sans" style={{fontFamily: 'Crimson Pro, Georgia, serif', fontWeight: 600}}>
                The Journal Library
              </span>
            </motion.div>


            <h1 className="text-7xl md:text-8xl font-display font-extrabold mb-8 text-[#1a1614] leading-[0.95]" style={{fontFamily: 'Playfair Display, Georgia, serif', letterSpacing: '-0.04em', textShadow: '0 4px 32px rgba(184, 149, 106, 0.12)'}}>
              Our Books
            </h1>


            <div className="w-32 h-[3px] bg-gradient-to-r from-transparent via-[#b8956a] to-transparent mx-auto mb-10" />


            <p className="text-2xl text-[#4a4440] max-w-3xl mx-auto leading-relaxed font-body mb-6" style={{fontFamily: 'Spectral, Georgia, serif'}}>
              Definitive works on technology, philosophy, and the human condition.<br/>
              <span className="text-xl italic text-[#6b6560]">Meticulously researched. Elegantly written. Built to last.</span>
            </p>


            <div className="flex items-center justify-center gap-6 text-sm text-[#8a847e] font-sans" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#b8956a]" />
                <span>Award-Winning</span>
              </div>
              <span className="text-[#d4cfc7]">•</span>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#b8956a]" />
                <span>Bestsellers</span>
              </div>
              <span className="text-[#d4cfc7]">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#b8956a]" />
                <span>Critically Acclaimed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>


      {/* Featured Book */}
      {featuredBook && !isLoading && (
        <motion.section
          className="max-w-7xl mx-auto px-8 py-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="mb-12 text-center">
            <motion.div
              className="inline-block px-4 py-2 border-2 border-[#b8956a] mb-6"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(184, 149, 106, 0.2)' }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-[#b8956a] font-sans font-bold" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                Featured Release
              </span>
            </motion.div>
          </div>


          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#b8956a]/20 to-[#8b7355]/20 blur-3xl group-hover:blur-4xl transition-all duration-700" />
              <img
                src={featuredBook.cover_image || "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800"}
                alt={featuredBook.title}
                className="relative z-10 w-full shadow-2xl border-4 border-[#fefdfb] group-hover:shadow-[0_32px_96px_rgba(26,22,20,0.25)] transition-all duration-700"
              />
              {featuredBook.is_bestseller && (
                <motion.div
                  className="absolute top-8 -right-4 bg-[#1a1614] text-[#fefdfb] px-6 py-3 rotate-3 shadow-xl z-20"
                  initial={{ rotate: 0, scale: 0 }}
                  animate={{ rotate: 3, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Star className="w-5 h-5 inline mr-2 fill-[#b8956a] text-[#b8956a]" />
                  <span className="text-sm uppercase tracking-[0.2em] font-bold" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                    Bestseller
                  </span>
                </motion.div>
              )}
            </motion.div>


            <div>
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <span className="text-sm uppercase tracking-[0.25em] text-[#8a847e] font-sans mb-3 block" style={{fontFamily: 'Crimson Pro, Georgia, serif', fontWeight: 600}}>
                  {featuredBook.category}
                </span>
                <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 text-[#1a1614] leading-[1.1]" style={{fontFamily: 'Playfair Display, Georgia, serif', letterSpacing: '-0.03em'}}>
                  {featuredBook.title}
                </h2>
                {featuredBook.subtitle && (
                  <p className="text-2xl text-[#6b6560] italic mb-6 font-body" style={{fontFamily: 'Spectral, Georgia, serif'}}>
                    {featuredBook.subtitle}
                  </p>
                )}
                <p className="text-xl text-[#4a4440] font-sans mb-2" style={{fontFamily: 'Crimson Pro, Georgia, serif', fontWeight: 600}}>
                  by {featuredBook.author}
                </p>
              </motion.div>


              <motion.div
                className="prose prose-lg max-w-none mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <p className="text-lg text-[#4a4440] leading-relaxed font-body" style={{fontFamily: 'Spectral, Georgia, serif'}}>
                  {featuredBook.description}
                </p>
              </motion.div>


              {/* Book Details */}
              <motion.div
                className="grid grid-cols-2 gap-6 mb-8 p-6 bg-[#faf8f4] border border-[#e8e5df]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#8a847e] mb-2 font-sans" style={{fontFamily: 'Crimson Pro, Georgia, serif', fontWeight: 600}}>
                    Pages
                  </div>
                  <div className="text-2xl font-display font-semibold text-[#1a1614]" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                    {featuredBook?.pages || 'TBD'}
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#8a847e] mb-2 font-sans" style={{fontFamily: 'Crimson Pro, Georgia, serif', fontWeight: 600}}>
                    Published
                  </div>
                  <div className="text-2xl font-display font-semibold text-[#1a1614]" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                    {featuredBook?.publication_date ? format(new Date(featuredBook.publication_date), 'yyyy') : 'TBD'}
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#8a847e] mb-2 font-sans" style={{fontFamily: 'Crimson Pro, Georgia, serif', fontWeight: 600}}>
                    Price
                  </div>
                  <div className="text-2xl font-display font-semibold text-[#1a1614]" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                    ${featuredBook?.price || 0}
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#8a847e] mb-2 font-sans" style={{fontFamily: 'Crimson Pro, Georgia, serif', fontWeight: 600}}>
                    ISBN
                  </div>
                  <div className="text-sm font-mono text-[#1a1614]">
                    {featuredBook?.isbn || 'TBD'}
                  </div>
                </div>
              </motion.div>


              {/* Awards */}
              {featuredBook?.awards && featuredBook.awards.length > 0 && (
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-[#b8956a]" />
                    <h3 className="text-sm uppercase tracking-[0.25em] font-sans text-[#4a4440]" style={{fontFamily: 'Crimson Pro, Georgia, serif', fontWeight: 700}}>
                      Awards & Recognition
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {featuredBook.awards.map((award: string, index: number) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 bg-[#b8956a]" />
                        <span className="text-[#4a4440] font-sans" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                          {award}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}


              {/* Reviews */}
              {featuredBook?.reviews && featuredBook.reviews.length > 0 && (
                <motion.div
                  className="mb-10 border-l-4 border-[#b8956a] pl-6 py-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  {featuredBook.reviews.map((review: Review, index: number) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <p className="text-lg text-[#4a4440] italic leading-relaxed mb-2 font-body" style={{fontFamily: 'Spectral, Georgia, serif'}}>
                        "{review.quote}"
                      </p>
                      <p className="text-sm text-[#8a847e] font-sans" style={{fontFamily: 'Crimson Pro, Georgia, serif', fontWeight: 600}}>
                        — {review.source}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}


              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                {featuredBook?.amazon_url && (
                  <motion.a
                    href={featuredBook.amazon_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 56px rgba(26, 22, 20, 0.3)' }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      size="lg"
                      className="bg-[#1a1614] hover:bg-[#2d2824] text-[#fefdfb] font-sans uppercase tracking-[0.25em] px-12 py-6 text-sm shadow-xl border-2 border-[#1a1614] hover:border-[#b8956a] transition-all duration-500"
                      style={{fontFamily: 'Crimson Pro, Georgia, serif', fontWeight: 700}}
                    >
                    <ShoppingCart className="w-5 h-5 mr-3" />
                    Buy on Amazon ${featuredBook?.price || 0}
                    </Button>
                  </motion.a>
                )}
                {featuredBook?.preview_url && (
                  <motion.a
                    href={featuredBook.preview_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="font-sans uppercase tracking-[0.25em] px-12 py-6 text-sm border-2 border-[#1a1614] hover:bg-[#faf8f4] transition-all duration-500"
                      style={{fontFamily: 'Crimson Pro, Georgia, serif', fontWeight: 600}}
                    >
                      <BookOpen className="w-5 h-5 mr-3" />
                      Read Preview
                    </Button>
                  </motion.a>
                )}
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}


      {/* Category Filter */}
      <motion.section
        className="border-y-2 border-[#e8e5df] bg-[#faf8f4] py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 text-sm uppercase tracking-[0.2em] font-sans transition-all duration-500 ${
                  selectedCategory === category
                    ? 'bg-[#1a1614] text-[#fefdfb] shadow-lg'
                    : 'bg-transparent text-[#6b6560] hover:text-[#1a1614] border border-[#d4cfc7] hover:border-[#1a1614]'
                }`}
                style={{fontFamily: 'Crimson Pro, Georgia, serif', fontWeight: selectedCategory === category ? 700 : 500}}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>


      {/* All Books Grid */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-12">
            {Array(6).fill(0).map((_, i) => (
              <div key={i}>
                <Skeleton className="h-[500px] w-full mb-6" />
                <Skeleton className="h-8 w-3/4 mb-3" />
                <Skeleton className="h-6 w-full" />
              </div>
            ))}
          </div>
        ) : filteredBooks.length > 0 ? (
          <motion.div
            className="grid md:grid-cols-3 gap-12"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredBooks.filter((book: Book) => book.id !== featuredBook?.id).map((book: Book, index: number) => (
                <motion.div
                  key={book.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group"
                >
                  <div className="relative mb-6 overflow-hidden">
                    <motion.img
                      src={book.cover_image || "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600"}
                      alt={book.title}
                      className="w-full shadow-xl border-2 border-[#e8e5df] group-hover:shadow-2xl transition-all duration-700"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    {book.is_bestseller && (
                      <div className="absolute top-4 left-4 bg-[#1a1614] text-[#fefdfb] px-3 py-1.5 shadow-lg">
                        <Star className="w-3 h-3 inline mr-1 fill-[#b8956a] text-[#b8956a]" />
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Bestseller</span>
                      </div>
                    )}
                  </div>


                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#8a847e] font-sans mb-2 block" style={{fontFamily: 'Crimson Pro, Georgia, serif', fontWeight: 600}}>
                      {book.category}
                    </span>
                    <h3 className="text-2xl font-display font-semibold mb-2 text-[#1a1614] leading-tight group-hover:text-[#4a4440] transition-colors duration-500" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                      {book.title}
                    </h3>
                    <p className="text-sm text-[#6b6560] font-sans mb-3" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                      by {book.author}
                    </p>
                    <p className="text-[#4a4440] line-clamp-3 font-body leading-relaxed" style={{fontFamily: 'Spectral, Georgia, serif', fontSize: '15px'}}>
                      {book.description}
                    </p>
                  </div>


                  <div className="flex items-center justify-between pt-4 border-t border-[#e8e5df]">
                    <span className="text-2xl font-display font-bold text-[#1a1614]" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                      ${book.price}
                    </span>
                    <div className="flex gap-2">
                      {book.amazon_url && (
                        <motion.a
                          href={book.amazon_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            size="sm"
                            className="bg-[#1a1614] hover:bg-[#2d2824] text-[#fefdfb] px-6 shadow-md"
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Buy
                          </Button>
                        </motion.a>
                      )}
                      {book.preview_url && (
                        <motion.a
                          href={book.preview_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#1a1614]"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <BookOpen className="w-16 h-16 text-[#d4cfc7] mx-auto mb-4" />
            <p className="text-xl text-[#6b6560] font-body" style={{fontFamily: 'Spectral, Georgia, serif'}}>
              No books found in this category.
            </p>
          </motion.div>
        )}
      </section>


      {/* Newsletter CTA */}
      <motion.section
        className="border-y-4 border-double border-[#d4cfc7] bg-[#faf8f4] py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-display font-bold mb-6 text-[#1a1614]" style={{fontFamily: 'Playfair Display, Georgia, serif', letterSpacing: '-0.02em'}}>
              Stay Updated
            </h2>
            <p className="text-xl text-[#4a4440] mb-8 font-body leading-relaxed" style={{fontFamily: 'Spectral, Georgia, serif'}}>
              Be the first to know about new releases, exclusive excerpts, and special offers from The Journal Library.
            </p>
            <div className="flex gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 border-2 border-[#d4cfc7] focus:border-[#1a1614] outline-none transition-all duration-500 text-lg font-sans"
                style={{fontFamily: 'Crimson Pro, Georgia, serif'}}
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 12px 32px rgba(26, 22, 20, 0.2)' }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-[#1a1614] hover:bg-[#2d2824] text-[#fefdfb] font-sans uppercase tracking-[0.2em] text-sm transition-all duration-500"
                style={{fontFamily: 'Crimson Pro, Georgia, serif', fontWeight: 700}}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
