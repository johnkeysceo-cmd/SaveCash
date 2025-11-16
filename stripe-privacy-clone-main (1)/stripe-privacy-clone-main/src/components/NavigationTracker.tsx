"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function NavigationTracker() {
  const pathname = usePathname();
  const prevPathnameRef = useRef<string>("");
  const isInitialMount = useRef<boolean>(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // On first mount, check if there's a stored current pathname
    if (isInitialMount.current) {
      const stored = sessionStorage.getItem("currentPathname");

      if (stored && stored !== pathname) {
        // If stored pathname is different from current, it's the previous one
        prevPathnameRef.current = stored;
        sessionStorage.setItem("previousPathname", stored);
      } else if (stored) {
        prevPathnameRef.current = stored;
      }

      isInitialMount.current = false;
    }

    // If pathname changed from what we tracked, store the previous one
    if (prevPathnameRef.current && prevPathnameRef.current !== pathname) {
      sessionStorage.setItem("previousPathname", prevPathnameRef.current);
    }

    // Always update current pathname (including home page for tracking)
    sessionStorage.setItem("currentPathname", pathname);
    prevPathnameRef.current = pathname;
  }, [pathname]);

  return null; // This component doesn't render anything
}
