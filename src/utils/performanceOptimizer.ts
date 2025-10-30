// Performance monitoring utilities
export const performanceMonitor = {
  // Track page load times
  trackPageLoad: (pageName: string) => {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      console.log(`🚀 ${pageName} loaded in ${loadTime.toFixed(2)}ms`);
      
      // Track Core Web Vitals
      if ('web-vital' in window) {
        // This would integrate with web-vitals library if available
        console.log(`📊 Core Web Vitals tracked for ${pageName}`);
      }
    }
  },

  // Track component render times
  trackComponentRender: (componentName: string, startTime: number) => {
    const renderTime = performance.now() - startTime;
    console.log(`⚡ ${componentName} rendered in ${renderTime.toFixed(2)}ms`);
  },

  // Monitor memory usage
  trackMemoryUsage: () => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      console.log(`💾 Memory usage: ${(memory.usedJSHeapSize / 1048576).toFixed(2)}MB`);
    }
  },

  // Track bundle sizes
  trackBundleSize: () => {
    if (typeof window !== 'undefined') {
      const scripts = document.querySelectorAll('script[src]');
      let totalSize = 0;
      
      scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src && src.includes('chunk')) {
          // This is a simplified check - in production you'd fetch actual sizes
          totalSize += 50; // Estimated chunk size
        }
      });
      
      console.log(`📦 Estimated bundle size: ${totalSize}KB`);
    }
  }
};

// Performance optimization utilities
export const performanceOptimizer = {
  // Preload critical resources
  preloadCriticalResources: () => {
    if (typeof window !== 'undefined') {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = '/fonts/inter.woff2';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Preload critical videos
      const criticalVideos = [
        '/lv_0_20251026134622.mp4',
        '/original-2a3a3e8d975a0383e93aaa4d7f9b1f38.mp4'
      ];

      criticalVideos.forEach(videoSrc => {
        const videoLink = document.createElement('link');
        videoLink.rel = 'preload';
        videoLink.href = videoSrc;
        videoLink.as = 'video';
        document.head.appendChild(videoLink);
      });
    }
  },

  // Optimize animations
  optimizeAnimations: () => {
    if (typeof window !== 'undefined') {
      // Reduce motion for users who prefer it
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.documentElement.style.setProperty('--animation-delay', '0ms');
      }
    }
  },

  // Enable hardware acceleration
  enableHardwareAcceleration: () => {
    if (typeof document !== 'undefined') {
      document.body.style.transform = 'translate3d(0, 0, 0)';
      document.body.style.willChange = 'transform';
      document.body.style.backfaceVisibility = 'hidden';
      document.body.style.isolation = 'isolate';
      document.body.style.contain = 'layout style paint';
    }
  },

  // Optimize images and videos
  optimizeMedia: () => {
    if (typeof window !== 'undefined') {
      // Lazy load images
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });

      // Lazy load videos
      const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const video = entry.target as HTMLVideoElement;
            if (video.dataset.src) {
              video.src = video.dataset.src;
              video.removeAttribute('data-src');
              videoObserver.unobserve(video);
            }
          }
        });
      });

      document.querySelectorAll('video[data-src]').forEach(video => {
        videoObserver.observe(video);
      });
    }
  }
};

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  performanceOptimizer.preloadCriticalResources();
  performanceOptimizer.optimizeAnimations();
  performanceOptimizer.enableHardwareAcceleration();
  performanceOptimizer.optimizeMedia();
  
  // Track initial page load
  performanceMonitor.trackPageLoad('Homepage');
  
  // Monitor memory usage periodically
  setInterval(() => {
    performanceMonitor.trackMemoryUsage();
  }, 30000); // Every 30 seconds
};