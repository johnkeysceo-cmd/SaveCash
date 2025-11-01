import { useEffect } from "react";
import { saveScrollPosition } from "../utils/scrollRestore";

/**
 * Component that tracks scroll position on the home page
 * Should only be rendered on the home page route
 */
export function ScrollTracker() {
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          saveScrollPosition("/");
          ticking = false;
        });
        ticking = true;
      }
    };

    // Throttled scroll listener - saves position efficiently
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}

