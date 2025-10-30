import React, { useEffect, useState } from 'react';
import { FloatingBlobs } from '../components/FloatingBlobs';

export default function Features() {
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(true);

         useEffect(() => {
           const fetchHtmlContent = async () => {
             try {
               const response = await fetch('/airtable-features.html');
               if (!response.ok) {
                 throw new Error(`HTTP error! status: ${response.status}`);
               }
               const text = await response.text();
               setHtmlContent(text);
             } catch (error) {
               console.error('Error loading features content:', error);
             } finally {
               setLoading(false);
             }
           };

           fetchHtmlContent();
         }, []);

  useEffect(() => {
    if (htmlContent) {
      // Delay customization to ensure DOM is fully rendered
      const timer = setTimeout(() => {
        customizeContent();
      }, 100); // Small delay to ensure DOM is ready

      return () => clearTimeout(timer);
    }
  }, [htmlContent]);

  const customizeContent = () => {
    // Apply SaveCash Pro specific styling and ensure our background shows through
    addSaveCashStyling();
  };

  const addSaveCashStyling = () => {
    // Add custom CSS for SaveCash Pro theme integration
    const style = document.createElement('style');
    style.textContent = `
      /* SaveCash Pro Theme Integration */
      body {
        background: transparent !important;
        position: relative !important;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
      }
      
      /* Ensure our animated background shows through */
      html {
        background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%) !important;
      }
      
      /* Make sure all content has proper z-index */
      .container, .header, .hero, .features, .stats, .footer {
        position: relative !important;
        z-index: 5 !important;
      }
      
      /* Enhance the existing styles */
      .header {
        background: rgba(255, 255, 255, 0.05) !important;
        backdrop-filter: blur(20px) !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
      }
      
      .feature-card {
        background: rgba(255, 255, 255, 0.05) !important;
        backdrop-filter: blur(20px) !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        transition: all 0.3s ease !important;
      }
      
      .feature-card:hover {
        transform: translateY(-5px) !important;
        box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2) !important;
        border-color: rgba(139, 92, 246, 0.3) !important;
      }
      
      .cta-button {
        background: linear-gradient(135deg, #8B5CF6, #EC4899) !important;
        transition: all 0.3s ease !important;
      }
      
      .cta-button:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4) !important;
      }
      
      /* Ensure text is visible */
      h1, h2, h3, h4, h5, h6, p, span, div, a, li {
        color: #ffffff !important;
      }
      
      .nav-links a, .footer-section a {
        color: #a1a1aa !important;
        transition: color 0.3s ease !important;
      }
      
      .nav-links a:hover, .footer-section a:hover {
        color: #8B5CF6 !important;
      }
      
      /* Stats animation enhancement */
      .stat-item h3 {
        background: linear-gradient(135deg, #8B5CF6, #EC4899) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-clip: text !important;
      }
      
      /* Logo enhancement */
      .logo {
        background: linear-gradient(135deg, #8B5CF6, #EC4899) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-clip: text !important;
      }
      
      /* Ensure content is above our animated background */
      #features-container {
        position: relative !important;
        z-index: 10 !important;
        background: transparent !important;
      }
    `;
    document.head.appendChild(style);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Floating Blobs Background */}
      <FloatingBlobs />
      
      {/* Main content container */}
      <div id="features-container" className="relative z-10">
        {loading ? (
          <div className="flex items-center justify-center min-h-screen text-white text-2xl">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mb-4"></div>
                <div>Loading Airtable Features...</div>
            </div>
          </div>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        )}
      </div>
    </div>
  );
}