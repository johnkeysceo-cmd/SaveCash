import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { motion } from "motion/react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
}

export default function SearchBar({ value, onChange, onSubmit }: SearchBarProps) {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit();
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="relative max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <motion.div
        animate={{
          scale: isFocused ? 1.02 : 1,
          boxShadow: isFocused ? '0 20px 60px rgba(168,85,247,0.15)' : '0 8px 30px rgba(168,85,247,0.08)'
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-all duration-500" />
        <Input
          type="text"
          placeholder="Search articles by title, excerpt, or content..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="pl-14 pr-6 py-7 text-lg border-2 border-gray-700 focus:border-purple-500 transition-all duration-500 shadow-[0_8px_30px_rgba(168,85,247,0.08)] bg-gray-800/50 text-white placeholder-gray-500 rounded-lg focus-visible:ring-0 focus-visible:ring-offset-0 hover:shadow-[0_12px_40px_rgba(168,85,247,0.12)]"
        />
      </motion.div>
    </motion.form>
  );
}

