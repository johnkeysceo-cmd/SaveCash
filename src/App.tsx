import React, { useEffect, useState, Suspense, lazy, memo } from "react";
import { FloatingBlobs } from "./components/FloatingBlobs";
import { FloatingAIAssistant } from "./components/FloatingAIAssistant";
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
const EULA = lazy(() => import("./pages/EULA"));
const ReturnPolicy = lazy(() => import("./pages/ReturnPolicy"));
const ShippingPolicy = lazy(() => import("./pages/ShippingPolicy"));
const Press = lazy(() => import("./pages/Press"));
const Investors = lazy(() => import("./pages/Investors"));
const NotFound = lazy(() => import("./pages/NotFound"));
const GettingStarted = lazy(() => import("./pages/GettingStarted"));
const ConnectingAccounts = lazy(() => import("./pages/ConnectingAccounts"));
const SavingsOpportunities = lazy(() => import("./pages/SavingsOpportunities"));
const FinancialGoals = lazy(() => import("./pages/FinancialGoals"));
const MobileApp = lazy(() => import("./pages/MobileApp"));

// Optimized loading component (uses premium Honeycomb)
const LoadingSpinner = memo(() => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
    <div className="flex flex-col items-center gap-4">
      <HoneycombLoader />
      <div className="text-white text-lg font-medium">Loading SaveCash...</div>
    </div>
  </div>
));

LoadingSpinner.displayName = 'LoadingSpinner';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentRoute(window.location.pathname);
      
      // Handle hash scrolling after route change
      if (window.location.hash) {
        setTimeout(() => {
          const element = document.querySelector(window.location.hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    // Listen for popstate (browser back/forward)
    window.addEventListener("popstate", handleRouteChange);
    
    // Listen for custom navigation events (for programmatic navigation)
    const handleNavigation = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail?.path) {
        setCurrentRoute(customEvent.detail.path);
        // Wait for components to load before scrolling
        setTimeout(() => {
          if (customEvent.detail.scrollToSignup) {
            const signupSection = document.getElementById("signup");
            if (signupSection) {
              signupSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }, 400);
      }
    };
    window.addEventListener("navigate", handleNavigation as EventListener);
    
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

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener("navigate", handleNavigation as EventListener);
    };
  }, []);

  // Render FloatingBlobs once for ALL routes at root level
  const renderWithBlobs = (content: React.ReactNode) => (
    <ErrorBoundary>
      {/* Persistent background — mount once here */}
      <FloatingBlobs />
      
      {/* Main app content above the background */}
      <div className="relative z-10">
        {content}
        {/* FLOATING AI ASSISTANT BUTTON - ALWAYS VISIBLE ON ALL PAGES */}
        <FloatingAIAssistant />
      </div>
    </ErrorBoundary>
  );

  // Simple client-side routing with Suspense for lazy loading
  if (currentRoute === "/ai-chat") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <AIAssistantChat />
      </Suspense>
    );
  }
  
  if (currentRoute === "/about") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
    );
  }
  
  if (currentRoute === "/privacy") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <Privacy />
      </Suspense>
    );
  }
  
  if (currentRoute === "/terms") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <Terms />
      </Suspense>
    );
  }
  
  if (currentRoute === "/contact") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
    );
  }
  
  if (currentRoute === "/careers") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <Careers />
      </Suspense>
    );
  }
  
  if (currentRoute === "/features") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <Features />
      </Suspense>
    );
  }
  
  if (currentRoute === "/cookies") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <Cookies />
      </Suspense>
    );
  }
  
  if (currentRoute === "/accessibility") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <Accessibility />
      </Suspense>
    );
  }
  
  if (currentRoute === "/legal-disclaimer") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <LegalDisclaimer />
      </Suspense>
    );
  }
  
  if (currentRoute === "/opt-out") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <OptOut />
      </Suspense>
    );
  }
  
  if (currentRoute === "/leadership") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <Leadership />
      </Suspense>
    );
  }
  
  if (currentRoute === "/data-processing") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <DataProcessing />
      </Suspense>
    );
  }
  
  if (currentRoute === "/pricing") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <Pricing />
      </Suspense>
    );
  }
  
  if (currentRoute === "/security") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <Security />
      </Suspense>
    );
  }
  
  if (currentRoute === "/api") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <API />
      </Suspense>
    );
  }
  
  if (currentRoute === "/integrations") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <Integrations />
      </Suspense>
    );
  }
  
  if (currentRoute === "/status") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <Status />
      </Suspense>
    );
  }
  
  if (currentRoute === "/help") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <Help />
      </Suspense>
    );
  }
  
  if (currentRoute === "/faq") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <FAQ />
      </Suspense>
    );
  }
  
  if (currentRoute === "/documentation") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <Documentation />
      </Suspense>
    );
  }
  
  if (currentRoute === "/blog") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <Blog />
      </Suspense>
    );
  }
  
  if (currentRoute === "/community") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <Community />
      </Suspense>
    );
  }
  
  if (currentRoute === "/support") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <Support />
      </Suspense>
    );
  }
  
  if (currentRoute === "/privacy-policy") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <PrivacyPolicy />
      </Suspense>
    );
  }

  if (currentRoute === "/security-overview") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <SecurityOverview />
      </Suspense>
    );
  }

  if (currentRoute === "/eula") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <EULA />
      </Suspense>
    );
  }

  if (currentRoute === "/return-policy") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <ReturnPolicy />
      </Suspense>
    );
  }

  if (currentRoute === "/shipping-policy") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <ShippingPolicy />
      </Suspense>
    );
  }

  if (currentRoute === "/press") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <Press />
      </Suspense>
    );
  }

  if (currentRoute === "/investors") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <Investors />
      </Suspense>
    );
  }

  // Help Center Pages
  if (currentRoute === "/help/getting-started") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <GettingStarted />
      </Suspense>
    );
  }

  if (currentRoute === "/help/connecting-accounts") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <ConnectingAccounts />
      </Suspense>
    );
  }

  if (currentRoute === "/help/savings-opportunities") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <SavingsOpportunities />
      </Suspense>
    );
  }

  if (currentRoute === "/help/financial-goals") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <FinancialGoals />
      </Suspense>
    );
  }

  if (currentRoute === "/help/mobile-app") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <MobileApp />
      </Suspense>
    );
  }

  // Home page (default route)
  if (currentRoute === "/" || currentRoute === "") {
    return renderWithBlobs(
      <main 
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
    );
  }

  // Catch-all: Not Found
  return renderWithBlobs(
    <Suspense fallback={<LoadingSpinner />}>
      <NotFound />
    </Suspense>
  );
}
