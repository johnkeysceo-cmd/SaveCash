import React, { useEffect, useState, Suspense, lazy } from "react";
import { HeroSection } from "./components/HeroSection";
import { SavingsImpactSection } from "./components/SavingsImpactSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { AIAssistantSection } from "./components/AIAssistantSection";
import { FAQSection } from "./components/FAQSection";
import { SignupForm } from "./components/SignupForm";
import { Footer } from "./components/Footer";
import { FloatingBlobs } from "./components/FloatingBlobs";
import { ParticleBackground } from "./components/ParticleBackground";
import { initPerformanceOptimizations } from "./utils/performanceOptimizer";

// Lazy load page components for better performance
const AIAssistantChat = lazy(() => import("./components/AIAssistantChat").then(module => ({ default: module.AIAssistantChat })));
const About = lazy(() => import("./pages/About").then(module => ({ default: module.About })));
const Privacy = lazy(() => import("./pages/Privacy").then(module => ({ default: module.Privacy })));
const Terms = lazy(() => import("./pages/Terms").then(module => ({ default: module.Terms })));
const Contact = lazy(() => import("./pages/Contact").then(module => ({ default: module.Contact })));
const Careers = lazy(() => import("./pages/Careers").then(module => ({ default: module.Careers })));
const Features = lazy(() => import("./pages/Features").then(module => ({ default: module.Features })));
const Cookies = lazy(() => import("./pages/Cookies").then(module => ({ default: module.Cookies })));
const Accessibility = lazy(() => import("./pages/Accessibility").then(module => ({ default: module.Accessibility })));
const LegalDisclaimer = lazy(() => import("./pages/LegalDisclaimer").then(module => ({ default: module.LegalDisclaimer })));
const OptOut = lazy(() => import("./pages/OptOut").then(module => ({ default: module.OptOut })));
const Leadership = lazy(() => import("./pages/Leadership").then(module => ({ default: module.Leadership })));
const DataProcessing = lazy(() => import("./pages/DataProcessing").then(module => ({ default: module.DataProcessing })));

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentRoute(window.location.pathname);
    };

    window.addEventListener("popstate", handleRouteChange);
    
    // Handle initial route
    handleRouteChange();

    // Initialize ULTRA-SMOOTH performance optimizations
    initPerformanceOptimizations();
    
    // Force hardware acceleration on body for ultra-smooth performance
    document.body.style.transform = "translate3d(0, 0, 0)";
    document.body.style.willChange = "transform";
    document.body.style.backfaceVisibility = "hidden";
    document.body.style.isolation = "isolate";
    document.body.style.contain = "layout style paint";

    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  // Simple client-side routing with Suspense for lazy loading
  if (currentRoute === "/ai-chat") {
    return (
      <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
        <AIAssistantChat />
      </Suspense>
    );
  }
  
  if (currentRoute === "/about") {
    return (
      <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
        <About />
      </Suspense>
    );
  }
  
  if (currentRoute === "/privacy") {
    return (
      <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
        <Privacy />
      </Suspense>
    );
  }
  
  if (currentRoute === "/terms") {
    return (
      <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
        <Terms />
      </Suspense>
    );
  }
  
  if (currentRoute === "/contact") {
    return (
      <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
        <Contact />
      </Suspense>
    );
  }
  
  if (currentRoute === "/careers") {
    return (
      <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
        <Careers />
      </Suspense>
    );
  }
  
  if (currentRoute === "/features") {
    return (
      <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
        <Features />
      </Suspense>
    );
  }
  
  if (currentRoute === "/cookies") {
    return (
      <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
        <Cookies />
      </Suspense>
    );
  }
  
  if (currentRoute === "/accessibility") {
    return (
      <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
        <Accessibility />
      </Suspense>
    );
  }
  
  if (currentRoute === "/legal-disclaimer") {
    return (
      <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
        <LegalDisclaimer />
      </Suspense>
    );
  }
  
  if (currentRoute === "/opt-out") {
    return (
      <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
        <OptOut />
      </Suspense>
    );
  }
  
  if (currentRoute === "/leadership") {
    return (
      <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
        <Leadership />
      </Suspense>
    );
  }
  
  if (currentRoute === "/data-processing") {
    return (
      <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
        <DataProcessing />
      </Suspense>
    );
  }

        return (
          <div className="min-h-screen bg-black overflow-hidden">
            {/* Background Effects */}
            <ParticleBackground />
            <FloatingBlobs />
            
            <main 
              className="relative z-10"
              style={{
                transform: "translate3d(0, 0, 0)",
                willChange: "transform",
                backfaceVisibility: "hidden",
                isolation: "isolate",
                contain: "layout style paint",
              }}
            >
              <HeroSection />
              <SavingsImpactSection />
              <FeaturesSection />
              <HowItWorksSection />
              <TestimonialsSection />
              <AIAssistantSection />
              <FAQSection />
              <SignupForm />
              <Footer />
            </main>
          </div>
        );
}
