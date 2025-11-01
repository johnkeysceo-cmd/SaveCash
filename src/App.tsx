import React, { useEffect, useState, Suspense, lazy, memo } from "react";
import { FloatingBlobs } from "./components/FloatingBlobs";
import { FloatingAIAssistant } from "./components/FloatingAIAssistant";
import { initPerformanceOptimizations } from "./utils/performanceOptimizer";
import { HoneycombLoader } from "./components/ui/honeycomb-loader";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { saveScrollPosition, restoreScrollPosition } from "./utils/scrollRestore";
import { ScrollTracker } from "./components/ScrollTracker";

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
const PlansFeatures = lazy(() => import("./pages/PlansFeatures"));
const ROIValueCalculator = lazy(() => import("./pages/ROIValueCalculator"));
const PricingPhilosophy = lazy(() => import("./pages/PricingPhilosophy"));
const PricingFAQ = lazy(() => import("./pages/PricingFAQ"));
const EnterpriseSolutions = lazy(() => import("./pages/EnterpriseSolutions"));
const EarlyAccessPricing = lazy(() => import("./pages/EarlyAccessPricing"));
const CostComparison = lazy(() => import("./pages/CostComparison"));
const RequestQuote = lazy(() => import("./pages/RequestQuote"));
const ContactSupport = lazy(() => import("./pages/ContactSupport"));
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
const Licenses = lazy(() => import("./pages/Licenses"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const SecurityOverview = lazy(() => import("./pages/SecurityOverview"));
const EULA = lazy(() => import("./pages/EULA"));
const ReturnPolicy = lazy(() => import("./pages/ReturnPolicy"));
const ShippingPolicy = lazy(() => import("./pages/ShippingPolicy"));
const Press = lazy(() => import("./pages/Press"));
const Investors = lazy(() => import("./pages/Investors"));
const FinBotsMarketplace = lazy(() => import("./pages/FinBotsMarketplace"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const NotFound = lazy(() => import("./pages/NotFound"));
const GettingStarted = lazy(() => import("./pages/GettingStarted"));
const ConnectingAccounts = lazy(() => import("./pages/ConnectingAccounts"));
const SavingsOpportunities = lazy(() => import("./pages/SavingsOpportunities"));
const FinancialGoals = lazy(() => import("./pages/FinancialGoals"));
const MobileApp = lazy(() => import("./pages/MobileApp"));
// Account Management
const CreatingAccount = lazy(() => import("./pages/CreatingAccount"));
const UpdatingProfile = lazy(() => import("./pages/UpdatingProfile"));
const ManagingAccounts = lazy(() => import("./pages/ManagingAccounts"));
const ChangingPassword = lazy(() => import("./pages/ChangingPassword"));
const DeletingAccount = lazy(() => import("./pages/DeletingAccount"));
// Features & Functionality
const AIMonitoringAlerts = lazy(() => import("./pages/AIMonitoringAlerts"));
const AutomatedSavings = lazy(() => import("./pages/AutomatedSavings"));
const BillManagement = lazy(() => import("./pages/BillManagement"));
const GoalTracking = lazy(() => import("./pages/GoalTracking"));
const ReportsAnalytics = lazy(() => import("./pages/ReportsAnalytics"));
// Troubleshooting
const ConnectionIssues = lazy(() => import("./pages/ConnectionIssues"));
const SyncProblems = lazy(() => import("./pages/SyncProblems"));
const SavingsNotDetected = lazy(() => import("./pages/SavingsNotDetected"));
const AppIssues = lazy(() => import("./pages/AppIssues"));
const BillingIssues = lazy(() => import("./pages/BillingIssues"));
// Security & Privacy
const DataProtection = lazy(() => import("./pages/DataProtection"));
const BankSecurity = lazy(() => import("./pages/BankSecurity"));
const PrivacySettings = lazy(() => import("./pages/PrivacySettings"));
const TwoFactorAuth = lazy(() => import("./pages/TwoFactorAuth"));
const DataExportDeletion = lazy(() => import("./pages/DataExportDeletion"));

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
    let previousRoute = window.location.pathname;
    
    // Save scroll position when navigating away from home
    const saveScrollOnNavigate = () => {
      if (previousRoute === "/" || previousRoute === "") {
        // Save home page scroll position
        saveScrollPosition("/");
      }
    };

    const handleRouteChange = () => {
      const newRoute = window.location.pathname;
      
      // Save scroll position of the previous route before changing
      if (previousRoute !== newRoute) {
        saveScrollPosition(previousRoute);
        previousRoute = newRoute;
      }
      
      setCurrentRoute(newRoute);
      
      // Handle hash scrolling after route change (takes priority)
      if (window.location.hash) {
        setTimeout(() => {
          const element = document.querySelector(window.location.hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        // Restore scroll position if no hash
        if (newRoute === "/" || newRoute === "") {
          // Restore home page scroll position
          restoreScrollPosition("/", 200);
        } else {
          // For other pages, scroll to top initially
          window.scrollTo({ top: 0, behavior: 'auto' });
        }
      }
    };

    // Listen for popstate (browser back/forward)
    window.addEventListener("popstate", handleRouteChange);
    
    // Listen for custom navigation events (for programmatic navigation)
    const handleNavigation = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail?.path) {
        const newPath = customEvent.detail.path;
        
        // Save current route scroll position
        saveScrollPosition(previousRoute);
        previousRoute = newPath;
        
        setCurrentRoute(newPath);
        // Wait for components to load before scrolling
        setTimeout(() => {
          if (customEvent.detail.scrollToSignup) {
            const signupSection = document.getElementById("signup");
            if (signupSection) {
              signupSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          } else if (customEvent.detail.restoreScroll && (newPath === "/" || newPath === "")) {
            // Restore scroll position for home page
            restoreScrollPosition("/", 300);
          } else if (newPath === "/" || newPath === "") {
            // Try to restore scroll position for home
            restoreScrollPosition("/", 300);
          } else {
            // For other pages, scroll to top
            window.scrollTo({ top: 0, behavior: 'auto' });
          }
        }, 400);
      }
    };
    window.addEventListener("navigate", handleNavigation as EventListener);
    
    // Intercept all clicks on links to home page and restore scroll
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href="/"]') || target.closest('a[href=""]');
      
      if (link) {
        const href = link.getAttribute('href');
        if (href === "/" || href === "") {
          // Save current route scroll position before navigating
          const currentPath = window.location.pathname;
          if (currentPath !== "/" && currentPath !== "") {
            saveScrollPosition(currentPath);
          }
          
          // Prevent default navigation
          e.preventDefault();
          
          // Navigate and restore scroll
          window.history.pushState({}, "", "/");
          window.dispatchEvent(new CustomEvent("navigate", {
            detail: { path: "/", restoreScroll: true }
          }));
        }
      }
    };
    
    document.addEventListener("click", handleLinkClick);
    
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
      document.removeEventListener("click", handleLinkClick);
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

  if (currentRoute === "/pricing/plans-features") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <PlansFeatures />
      </Suspense>
    );
  }

  if (currentRoute === "/pricing/roi-calculator") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <ROIValueCalculator />
      </Suspense>
    );
  }

  if (currentRoute === "/pricing/philosophy") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <PricingPhilosophy />
      </Suspense>
    );
  }

  if (currentRoute === "/pricing/faq") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <PricingFAQ />
      </Suspense>
    );
  }

  if (currentRoute === "/pricing/enterprise") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <EnterpriseSolutions />
      </Suspense>
    );
  }

  if (currentRoute === "/pricing/early-access") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <EarlyAccessPricing />
      </Suspense>
    );
  }

  if (currentRoute === "/pricing/comparison") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <CostComparison />
      </Suspense>
    );
  }

  if (currentRoute === "/pricing/quote" || currentRoute === "/request-quote") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <RequestQuote />
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

  if (currentRoute === "/contact-support" || currentRoute === "/support-center") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <ContactSupport />
      </Suspense>
    );
  }

  if (currentRoute === "/licenses" || currentRoute === "/licenses-credits") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <Licenses />
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

  if (currentRoute === "/finbots-marketplace" || currentRoute === "/marketplace") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <FinBotsMarketplace />
      </Suspense>
    );
  }

  if (currentRoute === "/case-studies") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <CaseStudies />
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

  // Account Management Help Pages
  if (currentRoute === "/help/creating-account") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <CreatingAccount />
      </Suspense>
    );
  }

  if (currentRoute === "/help/updating-profile") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <UpdatingProfile />
      </Suspense>
    );
  }

  if (currentRoute === "/help/managing-accounts") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <ManagingAccounts />
      </Suspense>
    );
  }

  if (currentRoute === "/help/changing-password") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <ChangingPassword />
      </Suspense>
    );
  }

  if (currentRoute === "/help/deleting-account") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <DeletingAccount />
      </Suspense>
    );
  }

  // Features & Functionality Help Pages
  if (currentRoute === "/help/ai-monitoring-alerts") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <AIMonitoringAlerts />
      </Suspense>
    );
  }

  if (currentRoute === "/help/automated-savings") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <AutomatedSavings />
      </Suspense>
    );
  }

  if (currentRoute === "/help/bill-management") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <BillManagement />
      </Suspense>
    );
  }

  if (currentRoute === "/help/goal-tracking") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <GoalTracking />
      </Suspense>
    );
  }

  if (currentRoute === "/help/reports-analytics") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <ReportsAnalytics />
      </Suspense>
    );
  }

  // Troubleshooting Help Pages
  if (currentRoute === "/help/connection-issues") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <ConnectionIssues />
      </Suspense>
    );
  }

  if (currentRoute === "/help/sync-problems") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <SyncProblems />
      </Suspense>
    );
  }

  if (currentRoute === "/help/savings-not-detected") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <SavingsNotDetected />
      </Suspense>
    );
  }

  if (currentRoute === "/help/app-issues") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <AppIssues />
      </Suspense>
    );
  }

  if (currentRoute === "/help/billing-issues") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <BillingIssues />
      </Suspense>
    );
  }

  // Security & Privacy Help Pages
  if (currentRoute === "/help/data-protection") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <DataProtection />
      </Suspense>
    );
  }

  if (currentRoute === "/help/bank-security") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <BankSecurity />
      </Suspense>
    );
  }

  if (currentRoute === "/help/privacy-settings") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <PrivacySettings />
      </Suspense>
    );
  }

  if (currentRoute === "/help/two-factor-auth") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <TwoFactorAuth />
      </Suspense>
    );
  }

  if (currentRoute === "/help/data-export-deletion") {
    return renderWithBlobs(
      <Suspense fallback={<LoadingSpinner />}>
        <DataExportDeletion />
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
        <ScrollTracker />
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
