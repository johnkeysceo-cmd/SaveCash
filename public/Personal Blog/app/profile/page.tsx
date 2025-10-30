import React, { useState, useEffect } from "react";
import { blogAPI } from "@/api/blogClient";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Mail, Phone, Globe, MapPin, Calendar, Edit, Award,
  BookOpen, Twitter, Linkedin, Instagram, Github, MessageCircle,
  ExternalLink, Briefcase, Clock, TrendingUp, ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { createPageUrl } from "@/utils";
import { format } from "date-fns";
import PostCard from "../components/blog/PostCard";
import Link from "next/link";
import { useSearchParams } from "next/navigation";


export default function Profile() {
  const searchParams = useSearchParams();
  const profileEmail = searchParams.get('email');
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    blogAPI.auth.me().then(setCurrentUser).catch(() => {});
  }, []);


  // Fetch the user whose profile we're viewing
  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: () => blogAPI.entities.User.list(),
    initialData: [],
  });


  const profileUser = users.find(u => u.email === profileEmail);


  // Fetch profile data
  const { data: profiles } = useQuery({
    queryKey: ['profiles'],
    queryFn: () => blogAPI.entities.UserProfile.list(),
    initialData: [],
  });


  const userProfile = profiles.find(p => p.user_email === profileEmail);


  // Fetch user's posts
  const { data: posts, isLoading: postsLoading } = useQuery({
    queryKey: ['userPosts', profileEmail],
    queryFn: async () => {
      const allPosts = await blogAPI.entities.BlogPost.list("-published_date");
      return allPosts.filter(post => post.created_by === profileEmail && post.published_date);
    },
    enabled: !!profileEmail,
    initialData: [],
  });


  if (!profileEmail || !profileUser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4 text-[#1a1614]" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
            Profile Not Found
          </h1>
          <p className="text-[#6b6560] mb-6">This user profile doesn't exist.</p>
          <Link href={createPageUrl("home")}>
            <Button>
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }


  const isOwnProfile = currentUser && currentUser.email === profileEmail;
  const memberSince = format(new Date(profileUser.created_date), "MMMM yyyy");
  const memberDays = Math.floor((Date.now() - new Date(profileUser.created_date).getTime()) / (1000 * 60 * 60 * 24));


  return (
    <div className="min-h-screen bg-[#fefdfb]">
      {/* Cover Image */}
      <motion.div
        className="relative h-80 overflow-hidden border-b-2 border-[#d4cfc7]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#f5f3ee] via-[#faf8f4] to-[#fefdfb]"
          style={{
            backgroundImage: userProfile?.cover_image ? `url(${userProfile.cover_image})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fefdfb] via-transparent to-transparent" />
      </motion.div>


      {/* Profile Content */}
      <div className="max-w-6xl mx-auto px-6 -mt-32 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Sidebar */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-[#fefdfb] border-2 border-[#d4cfc7] p-8 shadow-lg">
              {/* Profile Image */}
              <motion.div
                className="relative w-48 h-48 mx-auto mb-6 overflow-hidden border-4 border-[#fefdfb] shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={userProfile?.profile_image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"}
                  alt={profileUser.full_name}
                  className="w-full h-full object-cover"
                />
              </motion.div>


              {/* Name & Title */}
              <div className="text-center mb-6 pb-6 border-b border-[#e8e5df]">
                <h1 className="text-3xl font-display font-bold mb-2 text-[#1a1614]" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                  {profileUser.full_name || "Writer"}
                </h1>
                {userProfile?.title && (
                  <p className="text-[#6b6560] font-sans mb-2" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                    {userProfile.title}
                  </p>
                )}
                {userProfile?.company && (
                  <p className="text-sm text-[#8a847e] font-sans flex items-center justify-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    {userProfile.company}
                  </p>
                )}
              </div>


              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-[#e8e5df]">
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-[#1a1614]" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                    {posts.length}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#8a847e] font-sans" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                    Articles
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-[#1a1614]" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                    {memberDays}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#8a847e] font-sans" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                    Days
                  </div>
                </div>
              </div>


              {/* Member Since */}
              <div className="flex items-center gap-3 mb-4 text-[#6b6560] font-sans" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                <Calendar className="w-5 h-5 text-[#8b7355]" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#8a847e]">Member Since</div>
                  <div className="font-semibold">{memberSince}</div>
                </div>
              </div>


              {/* Location */}
              {userProfile?.location && (
                <div className="flex items-center gap-3 mb-4 text-[#6b6560] font-sans" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                  <MapPin className="w-5 h-5 text-[#8b7355]" />
                  <div>{userProfile.location}</div>
                </div>
              )}


              {/* Contact Info */}
              <div className="space-y-3 mb-6 pb-6 border-b border-[#e8e5df]">
                {userProfile?.phone && (
                  <motion.a
                    href={`tel:${userProfile.phone}`}
                    className="flex items-center gap-3 text-[#6b6560] hover:text-[#1a1614] transition-colors font-sans"
                    style={{fontFamily: 'Crimson Pro, Georgia, serif'}}
                    whileHover={{ x: 4 }}
                  >
                    <Phone className="w-5 h-5 text-[#8b7355]" />
                    <span>{userProfile.phone}</span>
                  </motion.a>
                )}
                <motion.a
                  href={`mailto:${profileEmail}`}
                  className="flex items-center gap-3 text-[#6b6560] hover:text-[#1a1614] transition-colors font-sans"
                  style={{fontFamily: 'Crimson Pro, Georgia, serif'}}
                  whileHover={{ x: 4 }}
                >
                  <Mail className="w-5 h-5 text-[#8b7355]" />
                  <span>{profileEmail}</span>
                </motion.a>
                {userProfile?.website && (
                  <motion.a
                    href={userProfile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#6b6560] hover:text-[#1a1614] transition-colors font-sans"
                    style={{fontFamily: 'Crimson Pro, Georgia, serif'}}
                    whileHover={{ x: 4 }}
                  >
                    <Globe className="w-5 h-5 text-[#8b7355]" />
                    <span>Website</span>
                  </motion.a>
                )}
              </div>


              {/* Social Links */}
              <div className="space-y-3 mb-6">
                {userProfile?.twitter && (
                  <motion.a
                    href={`https://twitter.com/${userProfile.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#6b6560] hover:text-[#1a1614] transition-colors font-sans"
                    style={{fontFamily: 'Crimson Pro, Georgia, serif'}}
                    whileHover={{ x: 4 }}
                  >
                    <Twitter className="w-5 h-5 text-[#8b7355]" />
                    <span>@{userProfile.twitter}</span>
                  </motion.a>
                )}
                {userProfile?.linkedin && (
                  <motion.a
                    href={userProfile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#6b6560] hover:text-[#1a1614] transition-colors font-sans"
                    style={{fontFamily: 'Crimson Pro, Georgia, serif'}}
                    whileHover={{ x: 4 }}
                  >
                    <Linkedin className="w-5 h-5 text-[#8b7355]" />
                    <span>LinkedIn</span>
                  </motion.a>
                )}
                {userProfile?.instagram && (
                  <motion.a
                    href={`https://instagram.com/${userProfile.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#6b6560] hover:text-[#1a1614] transition-colors font-sans"
                    style={{fontFamily: 'Crimson Pro, Georgia, serif'}}
                    whileHover={{ x: 4 }}
                  >
                    <Instagram className="w-5 h-5 text-[#8b7355]" />
                    <span>@{userProfile.instagram}</span>
                  </motion.a>
                )}
                {userProfile?.github && (
                  <motion.a
                    href={`https://github.com/${userProfile.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#6b6560] hover:text-[#1a1614] transition-colors font-sans"
                    style={{fontFamily: 'Crimson Pro, Georgia, serif'}}
                    whileHover={{ x: 4 }}
                  >
                    <Github className="w-5 h-5 text-[#8b7355]" />
                    <span>@{userProfile.github}</span>
                  </motion.a>
                )}
                {userProfile?.medium && (
                  <motion.a
                    href={userProfile.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#6b6560] hover:text-[#1a1614] transition-colors font-sans"
                    style={{fontFamily: 'Crimson Pro, Georgia, serif'}}
                    whileHover={{ x: 4 }}
                  >
                    <ExternalLink className="w-5 h-5 text-[#8b7355]" />
                    <span>Medium</span>
                  </motion.a>
                )}
              </div>


              {/* Contact Button */}
              <motion.div whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(139, 115, 85, 0.2)' }}>
                <Button
                  onClick={() => window.location.href = `mailto:${profileEmail}`}
                  className="w-full bg-[#1a1614] hover:bg-[#2d2824] text-[#fefdfb] font-sans uppercase tracking-[0.15em] text-sm py-6"
                  style={{fontFamily: 'Crimson Pro, Georgia, serif', fontWeight: 600}}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </motion.div>


              {isOwnProfile && (
                <motion.div
                  className="mt-4"
                  whileHover={{ scale: 1.03 }}
                >
                  <Link href={createPageUrl("editprofile")}>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-[#d4cfc7] hover:border-[#8b7355] font-sans uppercase tracking-[0.15em] text-sm py-6"
                      style={{fontFamily: 'Crimson Pro, Georgia, serif'}}
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>


          {/* Main Content */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Bio */}
            {userProfile?.bio && (
              <div className="bg-[#fefdfb] border-2 border-[#d4cfc7] p-8 mb-8 shadow-lg">
                <h2 className="text-2xl font-display font-bold mb-4 text-[#1a1614] flex items-center gap-3" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                  <BookOpen className="w-6 h-6 text-[#8b7355]" />
                  About
                </h2>
                <p className="text-[#4a4440] leading-relaxed font-body text-lg" style={{fontFamily: 'Spectral, Georgia, serif'}}>
                  {userProfile.bio}
                </p>
              </div>
            )}


            {/* Interests */}
            {userProfile?.interests && userProfile.interests.length > 0 && (
              <div className="bg-[#fefdfb] border-2 border-[#d4cfc7] p-8 mb-8 shadow-lg">
                <h2 className="text-2xl font-display font-bold mb-4 text-[#1a1614] flex items-center gap-3" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                  <TrendingUp className="w-6 h-6 text-[#8b7355]" />
                  Interests & Expertise
                </h2>
                <div className="flex flex-wrap gap-3">
                  {userProfile.interests.map((interest, index) => (
                    <motion.span
                      key={index}
                      className="px-4 py-2 border-2 border-[#d4cfc7] text-[#4a4440] font-sans"
                      style={{fontFamily: 'Crimson Pro, Georgia, serif'}}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, borderColor: '#8b7355', boxShadow: '0 4px 12px rgba(139, 115, 85, 0.15)' }}
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}


            {/* Achievements */}
            {userProfile?.achievements && userProfile.achievements.length > 0 && (
              <div className="bg-[#fefdfb] border-2 border-[#d4cfc7] p-8 mb-8 shadow-lg">
                <h2 className="text-2xl font-display font-bold mb-6 text-[#1a1614] flex items-center gap-3" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                  <Award className="w-6 h-6 text-[#8b7355]" />
                  Achievements
                </h2>
                <div className="space-y-4">
                  {userProfile.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-[#8b7355] mt-2 flex-shrink-0" />
                      <p className="text-[#4a4440] font-sans leading-relaxed" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}


            {/* Featured Work */}
            {userProfile?.featured_work && userProfile.featured_work.length > 0 && (
              <div className="bg-[#fefdfb] border-2 border-[#d4cfc7] p-8 mb-8 shadow-lg">
                <h2 className="text-2xl font-display font-bold mb-6 text-[#1a1614] flex items-center gap-3" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                  <ExternalLink className="w-6 h-6 text-[#8b7355]" />
                  Featured Work
                </h2>
                <div className="space-y-4">
                  {userProfile.featured_work.map((work, index) => (
                    <motion.div
                      key={index}
                      className="border border-[#e8e5df] p-4 hover:border-[#8b7355] transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-[#1a1614] mb-2" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                            {work.title}
                          </h3>
                          <p className="text-[#4a4440] mb-3 font-sans leading-relaxed" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                            {work.description}
                          </p>
                          <motion.a
                            href={work.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#8b7355] hover:text-[#1a1614] transition-colors font-sans"
                            style={{fontFamily: 'Crimson Pro, Georgia, serif'}}
                            whileHover={{ x: 4 }}
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>View Project</span>
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}


            {/* Published Articles */}
            <div className="bg-[#fefdfb] border-2 border-[#d4cfc7] p-8 mb-8 shadow-lg">
              <h2 className="text-2xl font-display font-bold mb-6 text-[#1a1614] flex items-center gap-3" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                <BookOpen className="w-6 h-6 text-[#8b7355]" />
                Published Articles ({posts.length})
              </h2>


              {postsLoading ? (
                <div className="space-y-6">
                  {Array(3).fill(0).map((_, i) => (
                    <div key={i}>
                      <Skeleton className="h-8 w-3/4 mb-3" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  ))}
                </div>
              ) : posts.length > 0 ? (
                <div className="space-y-8">
                  {posts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <PostCard post={post} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-[#6b6560] text-center py-12 font-sans italic" style={{fontFamily: 'Spectral, Georgia, serif'}}>
                  No published articles yet.
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
