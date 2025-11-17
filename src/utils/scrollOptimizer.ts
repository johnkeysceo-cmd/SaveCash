// Ultra-smooth scroll performance optimizations
// Apple/Tesla-level scroll smoothness

let ticking = false;
let lastScrollY = 0;
let scrollVelocity = 0;

// Throttle scroll events for 60fps smoothness
export const throttleScroll = (callback: () => void, delay: number = 16) => {
  let timeoutId: number | null = null;
  let lastExecTime = 0;
  
  return () => {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      callback();
      lastExecTime = currentTime;
    } else {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = window.setTimeout(() => {
        callback();
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

// RequestAnimationFrame-based scroll handler for ultra-smooth performance
export const smoothScrollHandler = (callback: () => void) => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      callback();
      ticking = false;
    });
    ticking = true;
  }
};

// Optimize scroll performance
export const optimizeScrollPerformance = () => {
  if (typeof window === 'undefined') return;

  // Use passive event listeners for better scroll performance
  let passiveSupported = false;
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get() {
        passiveSupported = true;
        return false;
      }
    });
    window.addEventListener('test', () => {}, opts);
    window.removeEventListener('test', () => {}, opts);
  } catch (e) {
    // Passive listeners not supported
  }

  // Optimize scroll event handling
  const handleScroll = throttleScroll(() => {
    const currentScrollY = window.scrollY;
    scrollVelocity = currentScrollY - lastScrollY;
    lastScrollY = currentScrollY;
  }, 16); // ~60fps

  // Add optimized scroll listener
  window.addEventListener('scroll', handleScroll, passiveSupported ? { passive: true } : false);

  // Optimize smooth scrolling
  const originalScrollTo = window.scrollTo;
  window.scrollTo = function(options?: ScrollToOptions | number, y?: number) {
    if (typeof options === 'object' && options?.behavior === 'smooth') {
      // Use native smooth scroll with hardware acceleration
      originalScrollTo.call(window, {
        ...options,
        behavior: 'smooth',
      } as ScrollToOptions);
    } else {
      originalScrollTo.call(window, options as number, y);
    }
  };

  // Optimize scrollIntoView
  const originalScrollIntoView = Element.prototype.scrollIntoView;
  Element.prototype.scrollIntoView = function(options?: boolean | ScrollIntoViewOptions) {
    if (typeof options === 'object' && options?.behavior === 'smooth') {
      originalScrollIntoView.call(this, {
        ...options,
        behavior: 'smooth',
        block: options.block || 'start',
        inline: options.inline || 'nearest',
      });
    } else {
      originalScrollIntoView.call(this, options);
    }
  };

  // Force hardware acceleration on scroll container
  document.documentElement.style.transform = 'translate3d(0, 0, 0)';
  document.documentElement.style.willChange = 'scroll-position';
  document.body.style.transform = 'translate3d(0, 0, 0)';
  document.body.style.willChange = 'scroll-position';
};

// Get current scroll velocity
export const getScrollVelocity = () => scrollVelocity;

// Reset scroll tracking
export const resetScrollTracking = () => {
  lastScrollY = window.scrollY;
  scrollVelocity = 0;
};

