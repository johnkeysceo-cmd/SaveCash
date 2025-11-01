import React from "react";
import { Button } from "../ui/button";
import { motion } from "motion/react";

const categories = ["All", "AI, Finance", "AI Ethics", "Behavioral Finance", "Engineering", "Security", "Economics", "UX Design"];

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
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
                ? "border-purple-400 text-purple-300 font-bold"
                : "border-transparent text-gray-400 hover:text-purple-300 hover:border-purple-500/50"
            }`}
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

