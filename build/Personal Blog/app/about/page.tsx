import React, { useState, useEffect } from "react";
import { blogAPI } from "@/api/blogClient";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { PenSquare, BookOpen, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";


export default function About() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    blogAPI.auth.me().then(setUser).catch(() => {});
  }, []);


  return (
    <div className="pb-20">
      <motion.section
        className="max-w-3xl mx-auto px-6 py-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <BookOpen className="w-16 h-16 text-[#1a1614] mx-auto mb-6" />
          <h1 className="text-6xl md:text-7xl font-display font-semibold mb-6 text-[#1a1614]" style={{fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '-0.02em'}}>
            About The Journal
          </h1>
          <div className="w-24 h-[2px] bg-[#1a1614] mx-auto"></div>
        </motion.div>


        <motion.div
          className="prose prose-lg max-w-none font-serif space-y-8"
          style={{fontFamily: 'EB Garamond, Georgia, serif', fontSize: '1.2rem', lineHeight: '2rem'}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-2xl leading-relaxed mb-8 text-[#1a1614] font-semibold first-letter:text-6xl first-letter:font-display first-letter:mr-1 first-letter:float-left first-letter:leading-[3.5rem]">
            The Journal is a space for thoughtful writing and meaningful conversation—a digital publication where ideas are explored with depth, care, and intellectual rigor.
          </p>


          <p className="text-xl leading-relaxed text-[#2d2824]">
            We believe in the power of the written word to inspire, inform, and connect people across distances and differences. This platform was created as a home for writers who value depth over speed, and readers who appreciate careful thought and clear expression.
          </p>


          <p className="text-xl leading-relaxed text-[#2d2824]">
            Every article published here represents someone's time, attention, and expertise. We are committed to maintaining high editorial standards while providing a welcoming space for diverse voices and perspectives.
          </p>


          <motion.div
            className="my-16 p-8 bg-[#faf9f7] border-l-4 border-[#1a1614]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-semibold mt-0 mb-6 text-[#1a1614]" style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}>Our Values</h2>


            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#1a1614]">Quality over quantity.</h3>
                <p className="text-lg text-[#4a4440] mb-0">We believe in publishing less, but better. Each piece should offer genuine value to readers, whether through novel insights, careful analysis, or beautiful prose.</p>
              </div>


              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#1a1614]">Respect for readers.</h3>
                <p className="text-lg text-[#4a4440] mb-0">We write clearly, cite sources honestly, and respect our readers' time and intelligence. Every article is edited for clarity, accuracy, and readability.</p>
              </div>


              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#1a1614]">Open discourse.</h3>
                <p className="text-lg text-[#4a4440] mb-0">We welcome different viewpoints and encourage thoughtful discussion, always with respect and good faith. The best ideas emerge from rigorous debate.</p>
              </div>


              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#1a1614]">Intellectual honesty.</h3>
                <p className="text-lg text-[#4a4440] mb-0">We acknowledge uncertainty, admit when we're wrong, and update our views when evidence warrants. Truth-seeking requires humility.</p>
              </div>
            </div>
          </motion.div>


          <h2 className="text-4xl font-display font-semibold mt-16 mb-6 text-[#1a1614]" style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}>Who Can Publish Here</h2>


          <p className="text-xl leading-relaxed text-[#2d2824]">
            The Journal is an <em>open platform</em>. Any registered user can write and publish articles across our categories: Technology, Design, Business, Lifestyle, Travel, Food, Health, and our signature Deep Dives—long-form essays requiring hours of reading and contemplation.
          </p>


          <p className="text-xl leading-relaxed text-[#2d2824]">
            We believe great writing can come from anywhere. You don't need credentials or permission—just something worth saying and the dedication to say it well. Our platform provides the tools; you provide the ideas.
          </p>


          <motion.div
            className="grid md:grid-cols-3 gap-8 my-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center p-6 bg-[#faf9f7] border border-[#d4cfc7]">
              <PenSquare className="w-12 h-12 text-[#1a1614] mx-auto mb-4" />
              <h3 className="text-xl font-display font-semibold mb-3 text-[#1a1614]" style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}>Write</h3>
              <p className="text-[#4a4440] leading-relaxed">Create articles in our rich text editor with full formatting support, images, and draft management.</p>
            </div>


            <div className="text-center p-6 bg-[#faf9f7] border border-[#d4cfc7]">
              <Users className="w-12 h-12 text-[#1a1614] mx-auto mb-4" />
              <h3 className="text-xl font-display font-semibold mb-3 text-[#1a1614]" style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}>Publish</h3>
              <p className="text-[#4a4440] leading-relaxed">Share your work instantly with our community. Your articles appear alongside established writers.</p>
            </div>


            <div className="text-center p-6 bg-[#faf9f7] border border-[#d4cfc7]">
              <Award className="w-12 h-12 text-[#1a1614] mx-auto mb-4" />
              <h3 className="text-xl font-display font-semibold mb-3 text-[#1a1614]" style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}>Build</h3>
              <p className="text-[#4a4440] leading-relaxed">Establish your presence as a writer. Build a portfolio of published work visible to our readers.</p>
            </div>
          </motion.div>


          <h2 className="text-4xl font-display font-semibold mt-16 mb-6 text-[#1a1614]" style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}>What We Publish</h2>


          <p className="text-xl leading-relaxed text-[#2d2824]">
            We welcome articles across diverse categories, from short 5-minute reads to extensive Deep Dives requiring multiple hours. Whether you're writing about emerging technologies, design principles, business strategy, lifestyle reflections, travel narratives, culinary explorations, or health insights, we provide the platform for your voice.
          </p>


          <p className="text-xl leading-relaxed text-[#2d2824]">
            Our <strong>Deep Dives</strong> section showcases particularly ambitious work: comprehensive explorations of complex topics requiring extended reading sessions. These are not casual blog posts but serious intellectual projects—essays, analyses, and meditations that demand and reward sustained attention.
          </p>


          <h2 className="text-4xl font-display font-semibold mt-16 mb-6 text-[#1a1614]" style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}>Get Started</h2>


          <p className="text-xl leading-relaxed text-[#2d2824]">
            Whether you're a writer looking to share your thoughts or a reader seeking meaningful content, you're welcome here. Join our community and be part of the conversation.
          </p>


          {user ? (
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Link href={createPageUrl("write")}>
                <Button
                  className="bg-[#1a1614] hover:bg-[#2d2824] text-[#fefdfb] font-serif text-base uppercase tracking-[0.15em] rounded-none shadow-md hover:shadow-lg transition-all duration-300 px-8 py-6"
                  style={{fontFamily: 'Crimson Text, Georgia, serif', fontWeight: 600}}
                >
                  <PenSquare className="w-5 h-5 mr-3" />
                  Start Writing Your First Article
                </Button>
              </Link>
              <p className="mt-4 text-sm text-[#6b6560] italic" style={{fontFamily: 'EB Garamond, Georgia, serif'}}>
                You're logged in as {user.full_name || user.email}
              </p>
            </motion.div>
          ) : (
            <motion.div
              className="mt-12 p-8 bg-[#faf9f7] border border-[#d4cfc7] text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-lg text-[#4a4440] mb-4">
                Create an account to start publishing your own articles on The Journal.
              </p>
              <Button
                onClick={() => blogAPI.auth.redirectToLogin(window.location.href)}
                className="bg-[#1a1614] hover:bg-[#2d2824] text-[#fefdfb] font-serif text-base uppercase tracking-[0.15em] rounded-none shadow-md hover:shadow-lg transition-all duration-300 px-8 py-4"
                style={{fontFamily: 'Crimson Text, Georgia, serif', fontWeight: 600}}
              >
                Sign Up to Write
              </Button>
            </motion.div>
          )}


          <motion.div
            className="mt-20 pt-12 border-t-2 border-[#d4cfc7] text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-[#4a4440] italic leading-relaxed max-w-2xl mx-auto">
              "To write well is to think clearly. That's why it's so hard."
            </p>
            <p className="text-sm text-[#8a847e] mt-3" style={{fontFamily: 'Crimson Text, Georgia, serif'}}>
              — David McCullough
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
