// Performance optimization utilities
export const optimizePerformance = () => {
  // Reduce motion for users who prefer it
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    // Disable all animations
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    document.documentElement.style.setProperty('--transition-duration', '0.01ms');
  }

  // Optimize video loading
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    // Add performance optimizations
    video.setAttribute('preload', 'metadata');
    video.style.willChange = 'transform';
    video.style.transform = 'translateZ(0)';
    video.style.backfaceVisibility = 'hidden';
  });

  // Optimize images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.style.willChange = 'auto';
    img.style.transform = 'translateZ(0)';
  });

  // Add intersection observer for lazy loading
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.style.willChange = 'transform';
        } else {
          const element = entry.target as HTMLElement;
          element.style.willChange = 'auto';
        }
      });
    });

    // Observe all motion elements
    const motionElements = document.querySelectorAll('[data-motion]');
    motionElements.forEach(el => observer.observe(el));
  }
};

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', optimizePerformance);
  } else {
    optimizePerformance();
  }

  // Re-run on route changes
  window.addEventListener('popstate', () => {
    setTimeout(optimizePerformance, 100);
  });
};
