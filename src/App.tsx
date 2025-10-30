import React, { useEffect, useState, Suspense, lazy, memo } from "react";
import { FloatingBlobs } from "./components/FloatingBlobs";
import { initPerformanceOptimizations } from "./utils/performanceOptimizer";
import { HoneycombLoader } from "./components/ui/honeycomb-loader";
import { ErrorBoundary } from "./components/ErrorBoundary";

// Lazy load ALL components for maximum performance
const HeroSection = lazy(() => import("./components/HeroSection").then(module => ({ default: module.HeroSection })));
const SavingsImpactSection = lazy(() => import("./components/SavingsImpactSection").then(module => ({ default: module.SavingsImpactSection })));
const FeaturesSection = lazy(() => import("./components/FeaturesSection").then(module => ({ default: module.FeaturesSection })));
const HowItWorksSection = lazy(() => import("./components/HowItWorksSection").then(module => ({ default: module.HowItWorksSection })));
const TestimonialsSection = lazy(() => import("./components/TestimonialsSection").then(module => ({ default: module.TestimonialsSection })));
const AIAssistantSection = lazy(() => import("./components/AIAssistantSection").then(module => ({ default: module.AIAssistantSection })));
const FAQSection = lazy(() => import("./components/FAQSection").then(module => ({ default: module.FAQSection })));
const ClosingTaglineSection = lazy(() => import("./components/ClosingTaglineSection").then(module => ({ default: module.ClosingTaglineSection })));
const SignupForm = lazy(() => import("./components/SignupForm").then(module => ({ default: module.SignupForm })));
const Footer = lazy(() => import("./components/Footer"));

// Lazy load page components for better performance
const AIAssistantChat = lazy(() => import("./components/AIAssistantChat").then(module => ({ default: module.AIAssistantChat })));
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Contact = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/Careers"));
const Features = lazy(() => import("./pages/Features"));
const Cookies = lazy(() => import("./pages/Cookies"));
const Accessibility = lazy(() => import("./pages/Accessibility"));
const LegalDisclaimer = lazy(() => import("./pages/LegalDisclaimer"));
const OptOut = lazy(() => import("./pages/OptOut"));
const Leadership = lazy(() => import("./pages/Leadership"));
const DataProcessing = lazy(() => import("./pages/DataProcessing"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Security = lazy(() => import("./pages/Security"));
const API = lazy(() => import("./pages/API"));
const Integrations = lazy(() => import("./pages/Integrations"));
const Status = lazy(() => import("./pages/Status"));
const Help = lazy(() => import("./pages/Help"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Documentation = lazy(() => import("./pages/Documentation"));
const Blog = lazy(() => import("./pages/Blog"));
const Community = lazy(() => import("./pages/Community"));
const Support = lazy(() => import("./pages/Support"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const SecurityOverview = lazy(() => import("./pages/SecurityOverview"));

// Optimized loading component (uses premium Honeycomb)
const LoadingSpinner = memo(() => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
    <div className="flex flex-col items-center gap-4">
      <HoneycombLoader />
      <div className="text-white text-lg font-medium">Loading SaveCash Pro...</div>
    </div>
  </div>
));

LoadingSpinner.displayName = 'LoadingSpinner';

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
      <Suspense fallback={<LoadingSpinner />}>
        <AIAssistantChat />
      </Suspense>
    );
  }
  
  if (currentRoute === "/about") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
    );
  }
  
  if (currentRoute === "/privacy") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Privacy />
      </Suspense>
    );
  }
  
  if (currentRoute === "/terms") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Terms />
      </Suspense>
    );
  }
  
  if (currentRoute === "/contact") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
    );
  }
  
  if (currentRoute === "/careers") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Careers />
      </Suspense>
    );
  }
  
  if (currentRoute === "/features") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Features />
      </Suspense>
    );
  }
  
  if (currentRoute === "/cookies") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Cookies />
      </Suspense>
    );
  }
  
  if (currentRoute === "/accessibility") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Accessibility />
      </Suspense>
    );
  }
  
  if (currentRoute === "/legal-disclaimer") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <LegalDisclaimer />
      </Suspense>
    );
  }
  
  if (currentRoute === "/opt-out") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <OptOut />
      </Suspense>
    );
  }
  
  if (currentRoute === "/leadership") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Leadership />
      </Suspense>
    );
  }
  
  if (currentRoute === "/data-processing") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <DataProcessing />
      </Suspense>
    );
  }
  
  if (currentRoute === "/pricing") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Pricing />
      </Suspense>
    );
  }
  
  if (currentRoute === "/security") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Security />
      </Suspense>
    );
  }
  
  if (currentRoute === "/api") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <API />
      </Suspense>
    );
  }
  
  if (currentRoute === "/integrations") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Integrations />
      </Suspense>
    );
  }
  
  if (currentRoute === "/status") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Status />
      </Suspense>
    );
  }
  
  if (currentRoute === "/help") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Help />
      </Suspense>
    );
  }
  
  if (currentRoute === "/faq") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <FAQ />
      </Suspense>
    );
  }
  
  if (currentRoute === "/documentation") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Documentation />
      </Suspense>
    );
  }
  
  if (currentRoute === "/blog") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Blog />
      </Suspense>
    );
  }
  
  if (currentRoute === "/community") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Community />
      </Suspense>
    );
  }
  
  if (currentRoute === "/support") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Support />
      </Suspense>
    );
  }
  
  if (currentRoute === "/privacy-policy") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <PrivacyPolicy />
      </Suspense>
    );
  }

  if (currentRoute === "/security-overview") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <SecurityOverview />
      </Suspense>
    );
  }

        return (
          <ErrorBoundary>
            <div className="min-h-screen overflow-hidden">
              {/* PERMANENT FLOATING BLOBS BACKGROUND */}
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
                <Suspense fallback={<HoneycombLoader className="h-screen" />}>
                  <HeroSection />
                </Suspense>
                
                <Suspense fallback={<HoneycombLoader className="h-96" />}>
                  <SavingsImpactSection />
                </Suspense>
                
                <Suspense fallback={<HoneycombLoader className="h-96" />}>
                  <FeaturesSection />
                </Suspense>
                
                <Suspense fallback={<HoneycombLoader className="h-96" />}>
                  <HowItWorksSection />
                </Suspense>
                
                <Suspense fallback={<HoneycombLoader className="h-96" />}>
                  <TestimonialsSection />
                </Suspense>
                
                <Suspense fallback={<HoneycombLoader className="h-96" />}>
                  <AIAssistantSection />
                </Suspense>
                
                <Suspense fallback={<HoneycombLoader className="h-96" />}>
                  <FAQSection />
                </Suspense>
                
                <Suspense fallback={<HoneycombLoader className="h-96" />}>
                  <ClosingTaglineSection />
                </Suspense>
                
                <Suspense fallback={<HoneycombLoader className="h-96" />}>
                  <SignupForm />
                </Suspense>
                
                <Suspense fallback={<HoneycombLoader className="h-64" />}>
                  <Footer />
                </Suspense>
              </main>
            </div>
          </ErrorBoundary>
        );
}
