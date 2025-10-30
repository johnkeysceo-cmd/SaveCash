import React, { memo, useRef, useEffect } from 'react';

interface OptimizedVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  preload?: 'auto' | 'metadata' | 'none';
  style?: React.CSSProperties;
}

export const OptimizedVideo = memo<OptimizedVideoProps>(({
  src,
  className = '',
  autoPlay = false,
  loop = false,
  muted = true,
  playsInline = true,
  preload = 'metadata',
  style = {}
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Optimize video loading
    const optimizeVideo = () => {
      // Set video properties for optimal performance
      video.style.transform = 'translate3d(0, 0, 0)';
      video.style.willChange = 'opacity, transform';
      video.style.backfaceVisibility = 'hidden';
      video.style.isolation = 'isolate';
      video.style.contain = 'layout style paint';
      
      // Enable hardware acceleration
      video.style.filter = 'none';
      video.style.opacity = '1';
      
      // Optimize for mobile
      video.setAttribute('webkit-playsinline', 'true');
      video.setAttribute('playsinline', 'true');
    };

    // Apply optimizations when video loads
    video.addEventListener('loadeddata', optimizeVideo);
    video.addEventListener('canplay', optimizeVideo);

    // Cleanup
    return () => {
      video.removeEventListener('loadeddata', optimizeVideo);
      video.removeEventListener('canplay', optimizeVideo);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={preload}
      style={{
        ...style,
        transform: 'translate3d(0, 0, 0)',
        willChange: 'opacity, transform',
        backfaceVisibility: 'hidden',
        isolation: 'isolate',
        contain: 'layout style paint'
      }}
    />
  );
});

OptimizedVideo.displayName = 'OptimizedVideo';

// Video preloader utility
export const videoPreloader = {
  // Preload critical videos
  preloadCriticalVideos: () => {
    if (typeof window !== 'undefined') {
      const criticalVideos = [
        '/lv_0_20251026134622.mp4',
        '/original-2a3a3e8d975a0383e93aaa4d7f9b1f38.mp4'
      ];

      criticalVideos.forEach(videoSrc => {
        const video = document.createElement('video');
        video.src = videoSrc;
        video.preload = 'metadata';
        video.muted = true;
        video.style.display = 'none';
        document.body.appendChild(video);
        
        // Remove after preloading
        video.addEventListener('loadedmetadata', () => {
          document.body.removeChild(video);
        });
      });
    }
  },

  // Lazy load videos when they come into view
  lazyLoadVideos: () => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
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
      }, {
        rootMargin: '50px 0px',
        threshold: 0.1
      });

      // Observe all videos with data-src
      document.querySelectorAll('video[data-src]').forEach(video => {
        videoObserver.observe(video);
      });
    }
  }
};
