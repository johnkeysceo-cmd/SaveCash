import React, { useState, useEffect } from "react";
import { blogAPI } from "@/api/blogClient";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, Upload, Loader2, Plus, X } from "lucide-react";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function EditProfile() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    bio: "",
    title: "",
    company: "",
    location: "",
    phone: "",
    website: "",
    profile_image: "",
    cover_image: "",
    twitter: "",
    linkedin: "",
    instagram: "",
    github: "",
    medium: "",
    interests: [],
    achievements: [],
    featured_work: [],
  });
  const [newInterest, setNewInterest] = useState("");
  const [newAchievement, setNewAchievement] = useState("");
  const [newWork, setNewWork] = useState({ title: "", description: "", url: "" });


  const queryClient = useQueryClient();


  useEffect(() => {
    blogAPI.auth.me().then(setUser).catch(() => {
      router.push(createPageUrl("home"));
    });
  }, []);


  const { data: profiles } = useQuery({
    queryKey: ['profiles'],
    queryFn: () => blogAPI.entities.UserProfile.list(),
    initialData: [],
  });


  const existingProfile = profiles.find(p => p.user_email === user?.email);


  useEffect(() => {
    if (existingProfile) {
      setFormData({
        bio: existingProfile.bio || "",
        title: existingProfile.title || "",
        company: existingProfile.company || "",
        location: existingProfile.location || "",
        phone: existingProfile.phone || "",
        website: existingProfile.website || "",
        profile_image: existingProfile.profile_image || "",
        cover_image: existingProfile.cover_image || "",
        twitter: existingProfile.twitter || "",
        linkedin: existingProfile.linkedin || "",
        instagram: existingProfile.instagram || "",
        github: existingProfile.github || "",
        medium: existingProfile.medium || "",
        interests: existingProfile.interests || [],
        achievements: existingProfile.achievements || [],
        featured_work: existingProfile.featured_work || [],
      });
    }
  }, [existingProfile]);


  const handleImageUpload = async (e, type) => {
    const file = e.target.files?.[0];
    if (!file) return;


    setIsUploading(true);
    try {
      const { file_url } = await blogAPI.integrations.Core.UploadFile({ file });
      setFormData(prev => ({ ...prev, [type]: file_url }));
    } catch (error) {
      alert("Failed to upload image. Please try again.");
    }
    setIsUploading(false);
  };


  const saveMutation = useMutation({
    mutationFn: async () => {
      const profileData = {
        ...formData,
        user_email: user.email,
      };


      if (existingProfile) {
        return blogAPI.entities.UserProfile.update(existingProfile.id, profileData);
      } else {
        return blogAPI.entities.UserProfile.create(profileData);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profiles'] });
      router.push(createPageUrl("profile") + `?email=${user.email}`);
    },
    onError: (error) => {
      alert("Failed to save profile. Please try again.");
    },
  });


  const addInterest = () => {
    if (newInterest.trim()) {
      setFormData(prev => ({ ...prev, interests: [...prev.interests, newInterest.trim()] }));
      setNewInterest("");
    }
  };


  const removeInterest = (index) => {
    setFormData(prev => ({ ...prev, interests: prev.interests.filter((_, i) => i !== index) }));
  };


  const addAchievement = () => {
    if (newAchievement.trim()) {
      setFormData(prev => ({ ...prev, achievements: [...prev.achievements, newAchievement.trim()] }));
      setNewAchievement("");
    }
  };


  const removeAchievement = (index) => {
    setFormData(prev => ({ ...prev, achievements: prev.achievements.filter((_, i) => i !== index) }));
  };


  const addFeaturedWork = () => {
    if (newWork.title.trim() && newWork.description.trim() && newWork.url.trim()) {
      setFormData(prev => ({ ...prev, featured_work: [...prev.featured_work, { ...newWork }] }));
      setNewWork({ title: "", description: "", url: "" });
    }
  };


  const removeFeaturedWork = (index) => {
    setFormData(prev => ({ ...prev, featured_work: prev.featured_work.filter((_, i) => i !== index) }));
  };


  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#8b7355]" />
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-[#fefdfb]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link href={createPageUrl("profile") + `?email=${user.email}`}>
            <Button
              variant="ghost"
              className="font-sans text-[#6b6560] hover:text-[#1a1614]"
              style={{fontFamily: 'Crimson Pro, Georgia, serif'}}
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Profile
            </Button>
          </Link>
        </motion.div>


        <motion.div
          className="bg-[#fefdfb] border-2 border-[#d4cfc7] p-10 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-display font-bold mb-8 text-[#1a1614]" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
            Edit Your Profile
          </h1>


          <div className="space-y-8">
            {/* Images */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="text-sm uppercase tracking-[0.15em] mb-3 block" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                  Profile Image
                </Label>
                <div className="space-y-3">
                  {formData.profile_image && (
                    <img src={formData.profile_image} alt="Profile" className="w-32 h-32 object-cover border-2 border-[#d4cfc7]" />
                  )}
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'profile_image')}
                    disabled={isUploading}
                  />
                </div>
              </div>


              <div>
                <Label className="text-sm uppercase tracking-[0.15em] mb-3 block" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                  Cover Image
                </Label>
                <div className="space-y-3">
                  {formData.cover_image && (
                    <img src={formData.cover_image} alt="Cover" className="w-full h-24 object-cover border-2 border-[#d4cfc7]" />
                  )}
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'cover_image')}
                    disabled={isUploading}
                  />
                </div>
              </div>
            </div>


            {/* Basic Info */}
            <div>
              <Label className="text-sm uppercase tracking-[0.15em] mb-3 block" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                Professional Title
              </Label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="e.g. Senior Writer, Technology Journalist"
              />
            </div>


            <div>
              <Label className="text-sm uppercase tracking-[0.15em] mb-3 block" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                Bio
              </Label>
              <Textarea
                value={formData.bio}
                onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                placeholder="Tell readers about yourself..."
                className="min-h-32"
              />
            </div>


            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="text-sm uppercase tracking-[0.15em] mb-3 block" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                  Company/Organization
                </Label>
                <Input
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  placeholder="e.g. The Journal"
                />
              </div>


              <div>
                <Label className="text-sm uppercase tracking-[0.15em] mb-3 block" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                  Location
                </Label>
                <Input
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="e.g. New York, NY"
                />
              </div>
            </div>


            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="text-sm uppercase tracking-[0.15em] mb-3 block" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                  Phone
                </Label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+1 (555) 123-4567"
                />
              </div>


              <div>
                <Label className="text-sm uppercase tracking-[0.15em] mb-3 block" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                  Website
                </Label>
                <Input
                  value={formData.website}
                  onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                  placeholder="https://yourwebsite.com"
                />
              </div>
            </div>


            {/* Social Links */}
            <div className="border-t-2 border-[#e8e5df] pt-8">
              <h3 className="text-2xl font-display font-bold mb-6 text-[#1a1614]" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                Social Links
              </h3>


              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-sm uppercase tracking-[0.15em] mb-3 block" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                    Twitter/X
                  </Label>
                  <Input
                    value={formData.twitter}
                    onChange={(e) => setFormData(prev => ({ ...prev, twitter: e.target.value }))}
                    placeholder="username"
                  />
                </div>


                <div>
                  <Label className="text-sm uppercase tracking-[0.15em] mb-3 block" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                    LinkedIn
                  </Label>
                  <Input
                    value={formData.linkedin}
                    onChange={(e) => setFormData(prev => ({ ...prev, linkedin: e.target.value }))}
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>


                <div>
                  <Label className="text-sm uppercase tracking-[0.15em] mb-3 block" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                    Instagram
                  </Label>
                  <Input
                    value={formData.instagram}
                    onChange={(e) => setFormData(prev => ({ ...prev, instagram: e.target.value }))}
                    placeholder="username"
                  />
                </div>


                <div>
                  <Label className="text-sm uppercase tracking-[0.15em] mb-3 block" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                    GitHub
                  </Label>
                  <Input
                    value={formData.github}
                    onChange={(e) => setFormData(prev => ({ ...prev, github: e.target.value }))}
                    placeholder="username"
                  />
                </div>


                <div>
                  <Label className="text-sm uppercase tracking-[0.15em] mb-3 block" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                    Medium
                  </Label>
                  <Input
                    value={formData.medium}
                    onChange={(e) => setFormData(prev => ({ ...prev, medium: e.target.value }))}
                    placeholder="https://medium.com/@username"
                  />
                </div>
              </div>
            </div>


            {/* Interests */}
            <div className="border-t-2 border-[#e8e5df] pt-8">
              <h3 className="text-2xl font-display font-bold mb-6 text-[#1a1614]" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                Interests & Expertise
              </h3>


              <div className="flex gap-3 mb-4">
                <Input
                  value={newInterest}
                  onChange={(e) => setNewInterest(e.target.value)}
                  placeholder="Add an interest..."
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addInterest())}
                />
                <Button onClick={addInterest} type="button">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>


              <div className="flex flex-wrap gap-3">
                {formData.interests.map((interest, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 border-2 border-[#d4cfc7] bg-[#faf8f4]">
                    <span>{interest}</span>
                    <button onClick={() => removeInterest(index)} className="text-[#8b7355] hover:text-[#1a1614]">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>


            {/* Achievements */}
            <div className="border-t-2 border-[#e8e5df] pt-8">
              <h3 className="text-2xl font-display font-bold mb-6 text-[#1a1614]" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                Achievements
              </h3>


              <div className="flex gap-3 mb-4">
                <Input
                  value={newAchievement}
                  onChange={(e) => setNewAchievement(e.target.value)}
                  placeholder="Add an achievement..."
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addAchievement())}
                />
                <Button onClick={addAchievement} type="button">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>


              <div className="space-y-2">
                {formData.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border-2 border-[#d4cfc7] bg-[#faf8f4]">
                    <span className="flex-1">{achievement}</span>
                    <button onClick={() => removeAchievement(index)} className="text-[#8b7355] hover:text-[#1a1614]">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>


            {/* Featured Work */}
            <div className="border-t-2 border-[#e8e5df] pt-8">
              <h3 className="text-2xl font-display font-bold mb-6 text-[#1a1614]" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                Featured Work
              </h3>


              <div className="space-y-4 mb-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label className="text-sm uppercase tracking-[0.15em] mb-2 block" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                      Title
                    </Label>
                    <Input
                      value={newWork.title}
                      onChange={(e) => setNewWork(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Project or article title"
                    />
                  </div>
                  <div>
                    <Label className="text-sm uppercase tracking-[0.15em] mb-2 block" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                      Description
                    </Label>
                    <Input
                      value={newWork.description}
                      onChange={(e) => setNewWork(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Brief description"
                    />
                  </div>
                  <div>
                    <Label className="text-sm uppercase tracking-[0.15em] mb-2 block" style={{fontFamily: 'Crimson Pro, Georgia, serif'}}>
                      URL
                    </Label>
                    <Input
                      value={newWork.url}
                      onChange={(e) => setNewWork(prev => ({ ...prev, url: e.target.value }))}
                      placeholder="https://example.com"
                    />
                  </div>
                </div>
                <Button onClick={addFeaturedWork} type="button" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Featured Work
                </Button>
              </div>


              <div className="space-y-3">
                {formData.featured_work.map((work, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border-2 border-[#d4cfc7] bg-[#faf8f4]">
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#1a1614] mb-1">{work.title}</h4>
                      <p className="text-sm text-[#4a4440] mb-2">{work.description}</p>
                      <a href={work.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8b7355] hover:text-[#1a1614]">
                        {work.url}
                      </a>
                    </div>
                    <button onClick={() => removeFeaturedWork(index)} className="text-[#8b7355] hover:text-[#1a1614]">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>


            {/* Save Button */}
            <div className="flex justify-end gap-4 pt-8 border-t-2 border-[#e8e5df]">
              <Link href={createPageUrl("profile") + `?email=${user.email}`}>
                <Button variant="outline">
                  Cancel
                </Button>
              </Link>
              <Button
                onClick={() => saveMutation.mutate()}
                disabled={saveMutation.isPending}
                className="bg-[#1a1614] hover:bg-[#2d2824] text-[#fefdfb]"
              >
                {saveMutation.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save Profile
                  </>
                )}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
