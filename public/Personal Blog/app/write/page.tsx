import React, { useState, useEffect } from "react";
import { blogAPI } from "@/api/blogClient";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Save, Eye, Upload, Loader2, Info, CheckCircle } from "lucide-react";
import { createPageUrl } from "@/utils";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Checkbox } from "@/components/ui/checkbox";
import { motion, AnimatePresence } from "framer-motion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";


const CATEGORIES = ["Technology", "Design", "Business", "Lifestyle", "Travel", "Food", "Health", "Deep Dive"];


export default function Write() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('edit');
 
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "Technology",
    tags: "",
    featured_image: "",
    is_featured: false,
    read_time: 5,
  });
  const [isUploading, setIsUploading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeStep, setActiveStep] = useState(1);


  const queryClient = useQueryClient();


  useEffect(() => {
    blogAPI.auth.me().then(setUser).catch(() => {
      router.push(createPageUrl("home"));
    });
  }, []);


  const { data: existingPost } = useQuery({
    queryKey: ['post', editId],
    queryFn: async () => {
      if (!editId) return null;
      const posts = await blogAPI.entities.BlogPost.list();
      return posts.find(p => p.id === editId);
    },
    enabled: !!editId,
  });


  useEffect(() => {
    if (existingPost && user && existingPost.created_by === user.email) {
      setFormData({
        title: existingPost.title || "",
        excerpt: existingPost.excerpt || "",
        content: existingPost.content || "",
        category: existingPost.category || "Technology",
        tags: existingPost.tags?.join(", ") || "",
        featured_image: existingPost.featured_image || "",
        is_featured: existingPost.is_featured || false,
        read_time: existingPost.read_time || 5,
      });
    }
  }, [existingPost, user]);


  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;


    setIsUploading(true);
    try {
      const { file_url } = await blogAPI.integrations.Core.UploadFile({ file });
      setFormData(prev => ({ ...prev, featured_image: file_url }));
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
    }
    setIsUploading(false);
  };


  const saveMutation = useMutation({
    mutationFn: async (isDraft) => {
      const postData = {
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        category: formData.category,
        tags: formData.tags.split(",").map(t => t.trim()).filter(Boolean),
        featured_image: formData.featured_image,
        is_featured: formData.is_featured,
        read_time: formData.read_time,
        author_name: user?.full_name || user?.email || "Anonymous",
        author_bio: "Writer at The Journal",
        author_image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
        published_date: isDraft ? null : new Date().toISOString().split('T')[0],
      };


      if (editId) {
        return blogAPI.entities.BlogPost.update(editId, postData);
      } else {
        return blogAPI.entities.BlogPost.create(postData);
      }
    },
    onSuccess: (data, isDraft) => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      queryClient.invalidateQueries({ queryKey: ['myPosts'] });
      setShowSuccess(true);
      setTimeout(() => {
        router.push(createPageUrl("myposts"));
      }, 2000);
    },
    onError: (error) => {
      console.error("Error saving post:", error);
      alert("Failed to save post. Please try again.");
    },
  });


  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link'],
      ['clean']
    ],
  };


  const formats = [
    'header',
    'bold', 'italic', 'underline', 'blockquote',
    'list', 'bullet',
    'link'
  ];


  const isStepComplete = (step) => {
    switch(step) {
      case 1: return formData.title.length > 0;
      case 2: return formData.excerpt.length > 0;
      case 3: return formData.content.length > 0;
      case 4: return true;
      default: return false;
    }
  };


  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fefdfb]">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-[#1a1614]" />
          <p className="text-[#6b6560] font-serif" style={{fontFamily: 'EB Garamond, Georgia, serif'}}>Loading your writing studio...</p>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50"
          >
            <Alert className="bg-green-50 border-green-200 shadow-lg">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800 font-serif">
                Your article has been {formData.published_date ? 'published' : 'saved as draft'} successfully!
              </AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>


      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link href={createPageUrl("myposts")}>
            <Button
              variant="ghost"
              className="font-serif text-[#6b6560] hover:text-[#1a1614]"
              style={{fontFamily: 'Crimson Text, Georgia, serif'}}
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to My Posts
            </Button>
          </Link>
        </motion.div>


        {/* Progress Steps */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-between items-center max-w-2xl mx-auto">
            {[
              { num: 1, label: "Title" },
              { num: 2, label: "Excerpt" },
              { num: 3, label: "Content" },
              { num: 4, label: "Publish" }
            ].map((step, index) => (
              <div key={step.num} className="flex items-center">
                <div className="flex flex-col items-center">
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-serif font-semibold transition-all duration-300 ${
                      isStepComplete(step.num)
                        ? 'bg-[#1a1614] text-[#fefdfb]'
                        : activeStep === step.num
                        ? 'bg-[#6b6560] text-[#fefdfb]'
                        : 'bg-[#e8e5df] text-[#8a847e]'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {isStepComplete(step.num) ? <CheckCircle className="w-5 h-5" /> : step.num}
                  </motion.div>
                  <span className="text-xs mt-2 font-serif text-[#6b6560]" style={{fontFamily: 'Crimson Text, Georgia, serif'}}>
                    {step.label}
                  </span>
                </div>
                {index < 3 && (
                  <div className={`w-16 h-[2px] mx-2 mb-6 transition-all duration-300 ${
                    isStepComplete(step.num) ? 'bg-[#1a1614]' : 'bg-[#e8e5df]'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </motion.div>


        {/* Main Writing Area */}
        <motion.div
          className="bg-[#fefdfb] border-2 border-[#d4cfc7] shadow-lg p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-3 text-[#1a1614]" style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}>
              {editId ? 'Edit Your Article' : 'Write Your Article'}
            </h1>
            <p className="text-[#6b6560] font-serif" style={{fontFamily: 'EB Garamond, Georgia, serif'}}>
              Share your thoughts with the world
            </p>
          </div>


          <div className="space-y-8">
            {/* Step 1: Title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              onFocus={() => setActiveStep(1)}
            >
              <Label className="text-sm uppercase tracking-[0.15em] font-serif mb-3 block text-[#4a4440]" style={{fontFamily: 'Crimson Text, Georgia, serif'}}>
                1. Your Title *
              </Label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="text-3xl font-display border-0 border-b-2 border-[#d4cfc7] rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#1a1614] transition-all duration-300 bg-transparent"
                placeholder="Enter a captivating title..."
                style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}
              />
              <p className="text-xs mt-2 text-[#8a847e] font-serif" style={{fontFamily: 'EB Garamond, Georgia, serif'}}>
                Make it compelling—this is what draws readers in
              </p>
            </motion.div>


            {/* Step 2: Excerpt */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              onFocus={() => setActiveStep(2)}
            >
              <Label className="text-sm uppercase tracking-[0.15em] font-serif mb-3 block text-[#4a4440]" style={{fontFamily: 'Crimson Text, Georgia, serif'}}>
                2. Brief Summary *
              </Label>
              <Textarea
                value={formData.excerpt}
                onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                className="font-serif text-lg border-2 border-[#d4cfc7] focus:border-[#1a1614] min-h-24 transition-all duration-300 bg-transparent"
                placeholder="Write a brief summary that will appear in article previews..."
                style={{fontFamily: 'EB Garamond, Georgia, serif'}}
              />
              <p className="text-xs mt-2 text-[#8a847e] font-serif" style={{fontFamily: 'EB Garamond, Georgia, serif'}}>
                2-3 sentences that capture the essence of your piece
              </p>
            </motion.div>


            {/* Category and Settings */}
            <motion.div
              className="grid md:grid-cols-2 gap-6 p-6 bg-[#faf9f7] border border-[#e8e5df]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div>
                <Label className="text-sm uppercase tracking-[0.15em] font-serif mb-2 block text-[#4a4440]" style={{fontFamily: 'Crimson Text, Georgia, serif'}}>
                  Category *
                </Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                >
                  <SelectTrigger className="font-serif border-[#d4cfc7]" style={{fontFamily: 'EB Garamond, Georgia, serif'}}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map(cat => (
                      <SelectItem key={cat} value={cat} className="font-serif">{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs mt-1 text-[#8a847e] font-serif" style={{fontFamily: 'EB Garamond, Georgia, serif'}}>
                  Choose "Deep Dive" for 2-4 hour reads
                </p>
              </div>


              <div>
                <Label className="text-sm uppercase tracking-[0.15em] font-serif mb-2 block text-[#4a4440]" style={{fontFamily: 'Crimson Text, Georgia, serif'}}>
                  Reading Time (minutes)
                </Label>
                <Input
                  type="number"
                  min="1"
                  value={formData.read_time}
                  onChange={(e) => setFormData(prev => ({ ...prev, read_time: parseInt(e.target.value) || 5 }))}
                  className="font-serif border-[#d4cfc7]" style={{fontFamily: 'EB Garamond, Georgia, serif'}}
                />
              </div>


              <div className="md:col-span-2">
                <Label className="text-sm uppercase tracking-[0.15em] font-serif mb-2 block text-[#4a4440]" style={{fontFamily: 'Crimson Text, Georgia, serif'}}>
                  Tags (optional)
                </Label>
                <Input
                  value={formData.tags}
                  onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                  className="font-serif border-[#d4cfc7]" style={{fontFamily: 'EB Garamond, Georgia, serif'}}
                  placeholder="technology, AI, programming, etc."
                />
                <p className="text-xs mt-1 text-[#8a847e] font-serif" style={{fontFamily: 'EB Garamond, Georgia, serif'}}>
                  Separate with commas
                </p>
              </div>
            </motion.div>


            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Label className="text-sm uppercase tracking-[0.15em] font-serif mb-3 block text-[#4a4440]" style={{fontFamily: 'Crimson Text, Georgia, serif'}}>
                Featured Image (optional)
              </Label>
              <div className="space-y-4">
                {!formData.featured_image && (
                  <div className="border-2 border-dashed border-[#d4cfc7] p-8 text-center hover:border-[#1a1614] transition-all duration-300">
                    <Upload className="w-12 h-12 text-[#8a847e] mx-auto mb-4" />
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="font-serif border-[#d4cfc7]"
                      disabled={isUploading}
                      id="image-upload"
                      style={{fontFamily: 'EB Garamond, Georgia, serif'}}
                    />
                    {isUploading && (
                      <div className="flex items-center justify-center gap-2 text-sm text-[#6b6560] mt-4">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span className="font-serif">Uploading your image...</span>
                      </div>
                    )}
                  </div>
                )}
                {formData.featured_image && (
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <img
                      src={formData.featured_image}
                      alt="Preview"
                      className="w-full h-64 object-cover border-2 border-[#d4cfc7] grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => setFormData(prev => ({ ...prev, featured_image: "" }))}
                      className="absolute top-4 right-4 shadow-lg"
                    >
                      Remove Image
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>


            {/* Step 3: Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              onFocus={() => setActiveStep(3)}
            >
              <Label className="text-sm uppercase tracking-[0.15em] font-serif mb-3 block text-[#4a4440]" style={{fontFamily: 'Crimson Text, Georgia, serif'}}>
                3. Your Article *
              </Label>
              <div className="border-2 border-[#d4cfc7] bg-white focus-within:border-[#1a1614] transition-all duration-300">
                <ReactQuill
                  theme="snow"
                  value={formData.content}
                  onChange={(value) => setFormData(prev => ({ ...prev, content: value }))}
                  modules={modules}
                  formats={formats}
                  className="min-h-96"
                  placeholder="Begin writing your article here... Take your time and craft something meaningful."
                  style={{fontFamily: 'EB Garamond, Georgia, serif'}}
                />
              </div>
              <div className="mt-3 p-4 bg-[#faf9f7] border border-[#e8e5df]">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-[#6b6560] mt-1 flex-shrink-0" />
                  <p className="text-xs text-[#6b6560] font-serif leading-relaxed" style={{fontFamily: 'EB Garamond, Georgia, serif'}}>
                    <strong>Writing tips:</strong> Use headers to organize sections. Add emphasis with bold and italic. Include lists for clarity. Your article will be beautifully formatted in the classical style of The Journal.
                  </p>
                </div>
              </div>
            </motion.div>


            {/* Featured Post Toggle */}
            <motion.div
              className="flex items-center space-x-3 p-4 bg-[#faf9f7] border border-[#e8e5df]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              onFocus={() => setActiveStep(4)}
            >
              <Checkbox
                id="featured"
                checked={formData.is_featured}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_featured: checked }))}
              />
              <Label
                htmlFor="featured"
                className="text-sm font-serif cursor-pointer text-[#4a4440]"
                style={{fontFamily: 'Crimson Text, Georgia, serif'}}
              >
                Feature this article on the homepage (will appear as the main story)
              </Label>
            </motion.div>


            {/* Action Buttons */}
            <motion.div
              className="flex items-center gap-4 pt-8 border-t-2 border-[#d4cfc7]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Button
                onClick={() => saveMutation.mutate(true)}
                disabled={saveMutation.isPending || !formData.title || !formData.excerpt || !formData.content}
                variant="outline"
                className="font-serif uppercase tracking-[0.15em] rounded-none border-2 border-[#1a1614] hover:bg-[#faf9f7] flex-1"
                style={{fontFamily: 'Crimson Text, Georgia, serif'}}
              >
                {saveMutation.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save as Draft
                  </>
                )}
              </Button>
              <Button
                onClick={() => saveMutation.mutate(false)}
                disabled={saveMutation.isPending || !formData.title || !formData.excerpt || !formData.content}
                className="bg-[#1a1614] hover:bg-[#2d2824] text-[#fefdfb] font-serif uppercase tracking-[0.15em] rounded-none shadow-md hover:shadow-lg transition-all duration-300 flex-1"
                style={{fontFamily: 'Crimson Text, Georgia, serif', fontWeight: 600}}
              >
                {saveMutation.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Publishing...
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4 mr-2" />
                    Publish Now
                  </>
                )}
              </Button>
            </motion.div>


            {/* Help Text */}
            <motion.div
              className="text-center pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <p className="text-sm text-[#8a847e] font-serif italic" style={{fontFamily: 'EB Garamond, Georgia, serif'}}>
                Save as draft to continue later, or publish immediately to share with the world.
              </p>
            </motion.div>
          </div>
        </motion.div>


        {/* Writing Tips Sidebar */}
        <motion.div
          className="mt-12 p-8 bg-[#fefdfb] border-2 border-[#d4cfc7]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h3 className="text-2xl font-display font-semibold mb-6 text-[#1a1614]" style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}>
            Writing for The Journal
          </h3>
          <div className="space-y-4 text-[#4a4440] font-serif" style={{fontFamily: 'EB Garamond, Georgia, serif'}}>
            <p className="leading-relaxed">
              <strong>Take your time.</strong> The best articles emerge from careful thought and revision. Write, let it rest, then return with fresh eyes.
            </p>
            <p className="leading-relaxed">
              <strong>Be specific.</strong> Concrete details and examples bring ideas to life. Show, don't just tell.
            </p>
            <p className="leading-relaxed">
              <strong>Respect your reader.</strong> Write clearly, cite sources, acknowledge complexity. Trust your audience's intelligence.
            </p>
            <p className="leading-relaxed">
              <strong>For Deep Dives:</strong> These should be comprehensive explorations (2-4 hours of reading). Break into clear sections, use headers liberally, and build arguments methodically.
            </p>
          </div>
        </motion.div>
      </div>


      <style>{`
        .ql-editor {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 1.125rem;
          line-height: 1.875rem;
          color: #1a1614;
          min-height: 400px;
        }
        .ql-editor::before {
          font-family: 'EB Garamond', Georgia, serif;
          font-style: italic;
          color: #8a847e;
        }
        .ql-toolbar {
          border-color: #d4cfc7 !important;
          background: #faf9f7;
        }
        .ql-container {
          border-color: #d4cfc7 !important;
        }
      `}</style>
    </div>
  );
}
