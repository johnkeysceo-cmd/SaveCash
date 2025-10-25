import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export function AIAssistantChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI financial advisor. How can I help you optimize your finances today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isResponding, setIsResponding] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);
    setIsResponding(true);

    // Trigger quick response animation
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.playbackRate = 3; // 3x speed for quick response
      videoRef.current.play();
    }

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "I understand your question. Let me analyze your financial situation and provide personalized recommendations. Based on your profile, I suggest focusing on optimizing your monthly expenses and building an emergency fund. Would you like me to create a detailed financial plan for you?",
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
      setIsResponding(false);

      // Reset video to normal speed
      if (videoRef.current) {
        videoRef.current.playbackRate = 1;
      }
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header with AI Assistant Animation */}
      <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border-b border-white/10 p-6">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          {/* AI Assistant Animation Icon */}
          <motion.div 
            className="w-16 h-16 flex-shrink-0"
            animate={{
              scale: isResponding ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: 0.3,
              repeat: isResponding ? Infinity : 0,
              ease: [0.25, 0.1, 0.25, 1], // Ultra-smooth cubic-bezier
              type: "tween",
            }}
            style={{
              transform: "translateZ(0)",
              willChange: "transform",
              backfaceVisibility: "hidden",
              isolation: "isolate",
              contain: "layout style paint",
            }}
          >
            <div className="relative w-full h-full rounded-full overflow-hidden"
              style={{
                background: "transparent",
                border: "2px solid rgba(168, 85, 247, 0.5)",
                boxShadow: `
                  0 0 20px rgba(168, 85, 247, 0.6),
                  0 0 40px rgba(236, 72, 153, 0.4),
                  0 0 60px rgba(249, 115, 22, 0.3)
                `,
              }}
            >
              {/* AI Assistant Video */}
              <video
                ref={videoRef}
                src="/vecteezy_3d-render-abstract-smooth-shape-holographic-color-on-black_31705729.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                style={{
                  transform: "translateZ(0)",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                  imageRendering: "crisp-edges",
                  filter: "contrast(1.4) brightness(1.15) saturate(1.3) hue-rotate(8deg)",
                }}
              />
              
              {/* Premium Circular Frame Glow */}
              <div className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: `
                    conic-gradient(from 0deg at 50% 50%, 
                      rgba(168, 85, 247, 0.4) 0deg, 
                      rgba(236, 72, 153, 0.3) 90deg, 
                      rgba(249, 115, 22, 0.3) 180deg, 
                      rgba(168, 85, 247, 0.4) 270deg, 
                      rgba(168, 85, 247, 0.4) 360deg
                    )
                  `,
                  mixBlendMode: "screen",
                }}
              />
              
              {/* Animated Frame Border */}
              <motion.div 
                className="absolute inset-0 rounded-full pointer-events-none"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(236, 72, 153, 0.2)",
                    "0 0 40px rgba(168, 85, 247, 0.8), 0 0 80px rgba(236, 72, 153, 0.6)",
                    "0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(236, 72, 153, 0.2)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-white mb-1">AI Financial Advisor</h1>
            <p className="text-gray-400 text-sm">
              {isTyping ? "Typing..." : isResponding ? "Analyzing..." : "Online"}
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.3,
                  ease: [0.25, 0.1, 0.25, 1], // Ultra-smooth cubic-bezier
                  type: "tween",
                }}
                style={{
                  transform: "translateZ(0)",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                  isolation: "isolate",
                  contain: "layout style paint",
                }}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex items-start gap-3 max-w-[80%] ${message.isUser ? "flex-row-reverse" : "flex-row"}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isUser 
                      ? "bg-gradient-to-r from-purple-500 to-pink-500" 
                      : "bg-gradient-to-r from-blue-500 to-cyan-500"
                  }`}>
                    {message.isUser ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>
                  
                  <div className={`px-4 py-3 rounded-2xl ${
                    message.isUser
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "bg-white/[0.05] text-gray-100 border border-white/10"
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className="text-xs opacity-60 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: [0.25, 0.1, 0.25, 1], // Ultra-smooth cubic-bezier
                type: "tween",
              }}
              style={{
                transform: "translateZ(0)",
                willChange: "transform",
                backfaceVisibility: "hidden",
                isolation: "isolate",
                contain: "layout style paint",
              }}
              className="flex justify-start"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white/[0.05] border border-white/10 px-4 py-3 rounded-2xl">
                  <div className="flex gap-1">
                    <motion.div
                      className="w-2 h-2 bg-gray-400 rounded-full"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay: 0,
                        ease: [0.25, 0.1, 0.25, 1], // Ultra-smooth cubic-bezier
                        type: "tween",
                      }}
                      style={{
                        transform: "translateZ(0)",
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                        isolation: "isolate",
                        contain: "layout style paint",
                      }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-gray-400 rounded-full"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay: 0.2,
                        ease: [0.25, 0.1, 0.25, 1], // Ultra-smooth cubic-bezier
                        type: "tween",
                      }}
                      style={{
                        transform: "translateZ(0)",
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                        isolation: "isolate",
                        contain: "layout style paint",
                      }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-gray-400 rounded-full"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay: 0.4,
                        ease: [0.25, 0.1, 0.25, 1], // Ultra-smooth cubic-bezier
                        type: "tween",
                      }}
                      style={{
                        transform: "translateZ(0)",
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                        isolation: "isolate",
                        contain: "layout style paint",
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border-t border-white/10 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about your finances..."
                className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50"
                rows={1}
                style={{
                  minHeight: "48px",
                  maxHeight: "120px",
                }}
              />
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 0.2,
                ease: [0.25, 0.1, 0.25, 1], // Ultra-smooth cubic-bezier
                type: "tween",
              }}
              style={{
                transform: "translateZ(0)",
                willChange: "transform",
                backfaceVisibility: "hidden",
                isolation: "isolate",
                contain: "layout style paint",
              }}
            >
              <Button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
