import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { motion } from "framer-motion";


export default function SearchBar({ value, onChange, onSubmit }) {
  const [isFocused, setIsFocused] = React.useState(false);


  const handleSubmit = (e) => {
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
          boxShadow: isFocused ? '0 20px 60px rgba(0,0,0,0.15)' : '0 8px 30px rgba(0,0,0,0.08)'
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-[#8a847e] w-5 h-5 transition-all duration-500" style={{strokeWidth: isFocused ? 2.5 : 2}} />
        <Input
          type="text"
          placeholder="Search articles by title, excerpt, or content..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="pl-14 pr-6 py-7 text-lg border-2 border-[#d4cfc7] focus:border-[#1a1614] transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.08)] font-body hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] bg-[#fefdfb] text-[#1a1614] rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
          style={{fontFamily: 'Spectral, Georgia, serif', letterSpacing: '0.01em'}}
        />
      </motion.div>
    </motion.form>
  );
}