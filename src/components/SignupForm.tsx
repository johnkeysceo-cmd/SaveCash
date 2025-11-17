import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight, Sparkles } from "lucide-react";

export function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);

    try {
      // Submit to Google Sheets (existing)
      const sheetsResponse = await fetch(
        "https://script.google.com/macros/s/AKfycbyEkif3U-EzGAyv25uC5y-tdOAFeSL1KVA8bgt8zC1RkJMl6VKYdqfFr7kf3jp-iERG/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
          }),
        }
      );

      // Wait a bit for dramatic effect
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitting(false);
      setSubmitStatus("success");
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="signup" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          {submitStatus === "idle" ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center"
            >
              {/* Enhanced Headings with Urgency */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-purple-300 font-medium">Limited Early Access</span>
                </div>
              </motion.div>

              <motion.h2 
                className="text-6xl md:text-8xl mb-6 text-white tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Join the waitlist.
              </motion.h2>
              <motion.h2 
                className="text-6xl md:text-8xl mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-pink-300 bg-clip-text text-transparent tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Get early access.
              </motion.h2>

              <motion.p 
                className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Be among the first to experience AI-powered financial optimization. 
                <span className="text-purple-300 font-semibold"> Only 500 spots remaining.</span>
              </motion.p>

              {/* Form with glowing backdrop */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative max-w-4xl mx-auto"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-3xl opacity-20 blur-2xl" />
                
                {/* Form container */}
                <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Side-by-side inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        <Input
                          type="text"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          disabled={isSubmitting}
                          className="w-full h-16 px-6 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-2xl backdrop-blur-sm focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all text-lg"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <Input
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          disabled={isSubmitting}
                          className="w-full h-16 px-6 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-2xl backdrop-blur-sm focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all text-lg"
                        />
                      </motion.div>
                    </div>

                    {/* Submit button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-16 group bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white text-lg rounded-2xl transition-all duration-500 shadow-[0_20px_60px_-15px_rgba(168,85,247,0.6)] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                      >
                        {isSubmitting ? (
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <motion.div
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            Securing your spot...
                          </span>
                        ) : (
                          <>
                            <span className="relative z-10 flex items-center justify-center gap-2">
                              Reserve My Spot
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </>
                        )}
                        
                        {/* Shimmer effect */}
                        {!isSubmitting && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{
                              x: ["-200%", "200%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                          />
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          ) : isSubmitting ? (
            // LOADING STATE - Epic particle animation
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center min-h-[600px]"
            >
              {/* Central orb with particles */}
              <div className="relative">
                {/* Main pulsing orb */}
                <motion.div
                  className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 relative"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Inner glow */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 blur-xl opacity-60" />
                </motion.div>

                {/* Orbiting particles */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                    style={{
                      left: "50%",
                      top: "50%",
                      marginLeft: -6,
                      marginTop: -6,
                    }}
                    animate={{
                      x: Math.cos((i * Math.PI * 2) / 12) * 100,
                      y: Math.sin((i * Math.PI * 2) / 12) * 100,
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeOut",
                    }}
                  />
                ))}

                {/* Pulsing rings */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`ring-${i}`}
                    className="absolute inset-0 rounded-full border-2 border-purple-400/30"
                    animate={{
                      scale: [1, 2.5],
                      opacity: [0.6, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.6,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-12 text-center"
              >
                <motion.p
                  className="text-2xl text-white mb-2"
                  animate={{
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  Creating your account
                </motion.p>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ) : (
            // SUCCESS STATE - Sleek and minimalistic
            <motion.div
              key="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center min-h-[600px] relative"
            >
              {/* Minimal ripple effect */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-32 h-32 rounded-full border border-purple-400/20"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [1, 3],
                    opacity: [0.4, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    ease: "easeOut",
                  }}
                />
              ))}

              {/* Simple checkmark - ultra minimal */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="relative z-10 mb-8"
              >
                <motion.svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="50%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#ff7a00" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M20 6L9 17l-5-5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                  />
                </motion.svg>
              </motion.div>

              {/* Subtle success text */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-center"
              >
                <motion.p
                  className="text-2xl text-white mb-2"
                >
                  All set
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-base text-gray-500"
                >
                  You're ready to start saving
                </motion.p>
              </motion.div>

              {/* Minimal floating particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 rounded-full bg-purple-400/30"
                  style={{
                    left: `${30 + Math.random() * 40}%`,
                    top: `${30 + Math.random() * 40}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 0.4, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
}
