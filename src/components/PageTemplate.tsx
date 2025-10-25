import React from "react";
import { motion } from "motion/react";
import { AnimatedBlob } from "./AnimatedBlob";
import { FloatingBlobs } from "./FloatingBlobs";

interface PageTemplateProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function PageTemplate({ title, subtitle, children }: PageTemplateProps) {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* 3D Floating Blobs Background */}
      <FloatingBlobs />
      <div className="fixed inset-0 pointer-events-none">
        <AnimatedBlob />
      </div>
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-32 px-6 relative">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-7xl mb-6 text-white tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                className="text-xl text-gray-400 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </section>

        {/* Page Content */}
        <div className="relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
}
