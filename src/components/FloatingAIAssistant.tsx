import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, X, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { scrollToSignup as scrollToSignupUtil } from "../utils/scrollToSignup";

export function FloatingAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const scrollToSignup = () => {
    setIsOpen(false);
    scrollToSignupUtil();
  };

  return (
    <>
      {/* Floating AI Assistant Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1
        }}
      >
        {/* Tooltip on hover */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: -10 }}
              animate={{ opacity: 1, y: 0, x: -10 }}
              exit={{ opacity: 0, y: 10, x: -10 }}
              className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/90 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 whitespace-nowrap"
            >
              <p className="text-sm text-white">
                Hi! I'm FinBot 👋 — your AI money assistant
              </p>
              {/* Arrow pointing to button */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-white/20 border-b-8 border-b-transparent" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Circular Button */}
        <motion.button
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl overflow-hidden group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(249, 115, 22, 0.4), 0 0 40px rgba(168, 85, 247, 0.3), 0 0 60px rgba(236, 72, 153, 0.2)",
              "0 0 30px rgba(249, 115, 22, 0.6), 0 0 60px rgba(168, 85, 247, 0.5), 0 0 90px rgba(236, 72, 153, 0.4)",
              "0 0 20px rgba(249, 115, 22, 0.4), 0 0 40px rgba(168, 85, 247, 0.3), 0 0 60px rgba(236, 72, 153, 0.2)",
            ],
          }}
          transition={{
            boxShadow: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
            scale: {
              type: "spring",
              stiffness: 400,
              damping: 17,
            },
          }}
        >
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          />

          {/* Icon */}
          <Sparkles className="relative z-10 w-6 h-6 text-white" />
          
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/30"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>
      </motion.div>

      {/* Simplified Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Chat Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="fixed bottom-24 right-8 w-96 max-w-[calc(100vw-4rem)] bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 via-purple-500 to-pink-500 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">FinBot</p>
                    <p className="text-xs text-gray-400">AI Money Assistant</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              {/* Chat Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <p className="text-white text-sm leading-relaxed mb-2">
                        Hey there! I'll soon help you automate your savings 💰
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Join the waitlist and get early access.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Join Waitlist Button */}
                <Button
                  onClick={scrollToSignup}
                  className="w-full bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 hover:from-orange-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

