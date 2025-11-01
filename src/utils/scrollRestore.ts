/**
 * Utility functions to save and restore scroll positions
 * Uses sessionStorage to persist scroll positions during navigation
 */

const SCROLL_POSITION_KEY = 'savecash_scroll_position';

/**
 * Save the current scroll position for the current route
 */
export function saveScrollPosition(path: string = window.location.pathname) {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const normalizedPath = path === "" ? "/" : path;
  sessionStorage.setItem(`${SCROLL_POSITION_KEY}_${normalizedPath}`, scrollPosition.toString());
}

/**
 * Restore the scroll position for a given route
 */
export function restoreScrollPosition(path: string = window.location.pathname, delay: number = 100) {
  const normalizedPath = path === "" ? "/" : path;
  const savedPosition = sessionStorage.getItem(`${SCROLL_POSITION_KEY}_${normalizedPath}`);
  
  if (savedPosition !== null) {
    const position = parseInt(savedPosition, 10);
    
    // Wait for content to load before restoring
    setTimeout(() => {
      window.scrollTo({
        top: position,
        behavior: 'auto' // Instant restore, not smooth
      });
    }, delay);
    
    return true;
  }
  
  return false;
}

/**
 * Clear saved scroll position for a route
 */
export function clearScrollPosition(path: string = window.location.pathname) {
  sessionStorage.removeItem(`${SCROLL_POSITION_KEY}_${path}`);
}

/**
 * Navigate to home and restore scroll position if available
 */
export function navigateToHomeWithScrollRestore() {
  // Save current scroll position before navigating
  const currentPath = window.location.pathname;
  if (currentPath !== "/" && currentPath !== "") {
    saveScrollPosition(currentPath);
  }
  
  // Navigate to home
  window.history.pushState({}, "", "/");
  
  // Dispatch custom navigation event
  window.dispatchEvent(new CustomEvent("navigate", {
    detail: {
      path: "/",
      restoreScroll: true
    }
  }));
}

