import React from "react";
import { ArrowLeft } from "lucide-react";
import { navigateToHomeWithScrollRestore } from "../utils/scrollRestore";

interface BackButtonProps {
  to?: string;
  label?: string;
  className?: string;
}

export function BackButton({ 
  to = "/", 
  label = "Back to Home",
  className = "inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
}: BackButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Save current page scroll position
    const currentPath = window.location.pathname;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    sessionStorage.setItem(`savecash_scroll_position_${currentPath}`, scrollPosition.toString());
    
    // Navigate using the utility function
    if (to === "/" || to === "") {
      navigateToHomeWithScrollRestore();
    } else {
      // For other routes, navigate normally
      window.history.pushState({}, "", to);
      window.dispatchEvent(new CustomEvent("navigate", {
        detail: { path: to }
      }));
    }
  };

  return (
    <a 
      href={to}
      onClick={handleClick}
      className={className}
    >
      <ArrowLeft className="w-4 h-4" />
      {label}
    </a>
  );
}

