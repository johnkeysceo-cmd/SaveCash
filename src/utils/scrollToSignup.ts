/**
 * Utility function to navigate to home page and smoothly scroll to signup form
 * Works from any page - if not on home page, navigates there first, then scrolls
 */
export function scrollToSignup() {
  const currentPath = window.location.pathname;
  
  // If we're not on the home page, navigate there first
  if (currentPath !== "/" && currentPath !== "") {
    // Navigate to home page
    window.history.pushState({}, "", "/");
    
    // Dispatch custom navigation event for App.tsx to handle
    window.dispatchEvent(new CustomEvent("navigate", {
      detail: {
        path: "/",
        scrollToSignup: true
      }
    }));
    
    // Also try direct scrolling as fallback (in case event listener hasn't set up yet)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          scrollToSignupElement();
        }, 400);
      });
    });
  } else {
    // Already on home page, just scroll (with a small delay in case component isn't loaded yet)
    setTimeout(() => {
      scrollToSignupElement();
    }, 50);
  }
}

/**
 * Helper function to actually scroll to the signup form
 */
function scrollToSignupElement() {
  // Try multiple times in case the element isn't loaded yet
  const maxAttempts = 10;
  let attempts = 0;
  
  const tryScroll = () => {
    attempts++;
    const signupSection = document.getElementById("signup");
    
    if (signupSection) {
      // Found the element, scroll smoothly to it
      signupSection.scrollIntoView({ 
        behavior: "smooth", 
        block: "start",
      });
    } else if (attempts < maxAttempts) {
      // Element not found yet, try again after a short delay
      setTimeout(tryScroll, 100);
    } else {
      // Element not found after max attempts, scroll to bottom as fallback
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      });
    }
  };
  
  tryScroll();
}

