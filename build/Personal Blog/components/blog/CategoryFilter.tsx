import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


const categories = ["All", "Technology", "Design", "Business", "Lifestyle", "Travel", "Food", "Health", "Deep Dive"];


export default function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-6 justify-center font-serif">
      {categories.map((category, index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button
            variant="ghost"
            onClick={() => onCategoryChange(category)}
            className={`uppercase tracking-[0.2em] text-[13px] rounded-none border-b-[3px] transition-all duration-500 px-5 py-3 hover:bg-transparent ${
              activeCategory === category
                ? "border-[#1a1614] text-[#1a1614] font-bold"
                : "border-transparent text-[#6b6560] hover:text-[#1a1614] hover:border-[#8b7355]"
            }`}
            style={{
              fontFamily: 'Crimson Pro, Georgia, serif',
              fontWeight: activeCategory === category ? 700 : 500
            }}
          >
            <motion.span
              whileHover={{ y: -3, scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              {category}
            </motion.span>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}