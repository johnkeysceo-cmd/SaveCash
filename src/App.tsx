import React from "react";
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
import { AIAssistantChat } from "./components/AIAssistantChat";
import { About } from "./pages/About";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { Contact } from "./pages/Contact";
import { Careers } from "./pages/Careers";
import { Features } from "./pages/Features";
import { Cookies } from "./pages/Cookies";
import { Accessibility } from "./pages/Accessibility";
import { LegalDisclaimer } from "./pages/LegalDisclaimer";
import { OptOut } from "./pages/OptOut";
import { Leadership } from "./pages/Leadership";
import { DataProcessing } from "./pages/DataProcessing";
import { useEffect, useState } from "react";
import { initPerformanceOptimizations } from "./utils/performanceOptimizer";

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentRoute(window.location.pathname);
    };

    window.addEventListener("popstate", handleRouteChange);
    
    // Handle initial route
    handleRouteChange();

    // Initialize performance optimizations
    initPerformanceOptimizations();

    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  // Simple client-side routing
  if (currentRoute === "/ai-chat") {
    return <AIAssistantChat />;
  }
  
  if (currentRoute === "/about") {
    return <About />;
  }
  
  if (currentRoute === "/privacy") {
    return <Privacy />;
  }
  
  if (currentRoute === "/terms") {
    return <Terms />;
  }
  
  if (currentRoute === "/contact") {
    return <Contact />;
  }
  
  if (currentRoute === "/careers") {
    return <Careers />;
  }
  
  if (currentRoute === "/features") {
    return <Features />;
  }
  
  if (currentRoute === "/cookies") {
    return <Cookies />;
  }
  
  if (currentRoute === "/accessibility") {
    return <Accessibility />;
  }
  
  if (currentRoute === "/legal-disclaimer") {
    return <LegalDisclaimer />;
  }
  
  if (currentRoute === "/opt-out") {
    return <OptOut />;
  }
  
  if (currentRoute === "/leadership") {
    return <Leadership />;
  }
  
  if (currentRoute === "/data-processing") {
    return <DataProcessing />;
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* 3D Floating Blobs */}
      <FloatingBlobs />
      
      <main className="relative">
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
