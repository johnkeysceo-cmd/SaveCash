"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SaveCashLogo = () => (
  <div className="text-2xl font-bold text-[#6366f1]">SaveCash</div>
);

const BACK_LINK_MAP: Record<string, { href: string; text: string }> = {
  // Home
  "/": { href: "/", text: "Back to Legal Pages" },

  // Privacy & Data Pages
  "/privacy-center": {
    href: "/privacy-center",
    text: "Back to Privacy Center",
  },
  "/legal/privacy-center": {
    href: "/legal/privacy-center",
    text: "Back to Privacy Center",
  },
  "/global-privacy-rights": {
    href: "/global-privacy-rights",
    text: "Back to Global Privacy Rights",
  },
  "/privacy-contacts": {
    href: "/privacy-contacts",
    text: "Back to Privacy Contacts",
  },
  "/authorized-agents": {
    href: "/authorized-agents",
    text: "Back to Authorized Agents",
  },
  "/device-privacy-center": {
    href: "/device-privacy-center",
    text: "Back to Device Privacy Center",
  },
  "/web3-privacy-center": {
    href: "/web3-privacy-center",
    text: "Back to Web3 Privacy Center",
  },
  "/quantum-readiness-center": {
    href: "/quantum-readiness-center",
    text: "Back to Quantum Readiness Center",
  },
  "/hipaa-portal": { href: "/hipaa-portal", text: "Back to HIPAA Portal" },
  "/ai-transparency-center": {
    href: "/ai-transparency-center",
    text: "Back to AI Transparency Center",
  },

  // Legal Pages - Main
  "/terms": { href: "/terms", text: "Back to Terms of Service" },
  "/cookies": { href: "/cookies", text: "Back to Cookie Policy" },
  "/eula": { href: "/eula", text: "Back to EULA" },
  "/acceptable-use": {
    href: "/acceptable-use",
    text: "Back to Acceptable Use Policy",
  },
  "/disclaimer": { href: "/disclaimer", text: "Back to Disclaimer" },
  "/dmca": { href: "/dmca", text: "Back to DMCA Policy" },
  "/refund": { href: "/refund", text: "Back to Refund Policy" },

  // Legal Pages - Agreements
  "/legal/ssa": {
    href: "/legal/ssa",
    text: "Back to SaveCash Services Agreement",
  },
  "/legal/connect-account": {
    href: "/legal/connect-account",
    text: "Back to Connected Account Agreement",
  },
  "/legal/spc": {
    href: "/legal/spc",
    text: "Back to SaveCash Payments Company Terms",
  },
  "/legal/consumer-terms": {
    href: "/legal/consumer-terms",
    text: "Back to Consumer Terms",
  },
  "/legal/payment-terms": {
    href: "/legal/payment-terms",
    text: "Back to Payment Method Terms",
  },
  "/legal/bank-debit-authorizations": {
    href: "/legal/bank-debit-authorizations",
    text: "Back to Bank Debit Authorizations",
  },

  // Legal Pages - Acquirer Terms
  "/legal/acquirer-disclosure": {
    href: "/legal/acquirer-disclosure",
    text: "Back to Acquirer Disclosure",
  },
  "/legal/crb": { href: "/legal/crb", text: "Back to Cross River Bank" },
  "/legal/deutsche-bank": {
    href: "/legal/deutsche-bank",
    text: "Back to Deutsche Bank",
  },
  "/legal/pathward": {
    href: "/legal/pathward",
    text: "Back to Pathward N.A.",
  },
  "/legal/pnc": { href: "/legal/pnc", text: "Back to PNC Bank" },
  "/legal/celtic-spend-card": {
    href: "/legal/celtic-spend-card",
    text: "Back to Issuing Bank Terms",
  },

  // Legal Pages - Products & Programs
  "/legal/terminal-device-eula": {
    href: "/legal/terminal-device-eula",
    text: "Back to Terminal Device EULA",
  },
  "/legal/terminal-purchase": {
    href: "/legal/terminal-purchase",
    text: "Back to Terminal Purchase Terms",
  },
  "/legal/terminal-reseller": {
    href: "/legal/terminal-reseller",
    text: "Back to Terminal Reseller Terms",
  },
  "/legal/climate-contributions": {
    href: "/legal/climate-contributions",
    text: "Back to Climate Contribution Terms",
  },
  "/legal/fee-credits": {
    href: "/legal/fee-credits",
    text: "Back to Fee Credit Terms",
  },
  "/legal/partner-ecosystem": {
    href: "/legal/partner-ecosystem",
    text: "Back to Partner Ecosystem",
  },
  "/legal/app-developer-agreement": {
    href: "/legal/app-developer-agreement",
    text: "Back to App Developer Agreement",
  },
  "/legal/app-marketplace-agreement": {
    href: "/legal/app-marketplace-agreement",
    text: "Back to App Marketplace Agreement",
  },

  // Legal Pages - Privacy & Data
  "/legal/data-privacy-framework": {
    href: "/legal/data-privacy-framework",
    text: "Back to Data Privacy Framework",
  },
  "/legal/service-providers": {
    href: "/legal/service-providers",
    text: "Back to Service Providers List",
  },
  "/legal/dpa": {
    href: "/legal/dpa",
    text: "Back to Data Processing Agreement",
  },
  "/legal/dta": { href: "/legal/dta", text: "Back to Data Transfers Addendum" },
  "/legal/data-retention": {
    href: "/legal/data-retention",
    text: "Back to Data Retention & Deletion",
  },

  // Legal Pages - Compliance & Security
  "/legal/compliance": {
    href: "/legal/compliance",
    text: "Back to Regulatory Compliance",
  },
  "/legal/kyc-aml": {
    href: "/legal/kyc-aml",
    text: "Back to KYC / AML Policy",
  },
  "/legal/risk-disclosure": {
    href: "/legal/risk-disclosure",
    text: "Back to Risk Disclosure",
  },
  "/legal/disputes": {
    href: "/legal/disputes",
    text: "Back to Complaints & Disputes",
  },
  "/legal/transparency": {
    href: "/legal/transparency",
    text: "Back to Transparency Report",
  },

  // Legal Pages - Intellectual Property
  "/legal/ip-notice": {
    href: "/legal/ip-notice",
    text: "Back to Intellectual Property Notice",
  },
  "/legal/marks-usage": {
    href: "/legal/marks-usage",
    text: "Back to Marks Usage",
  },
  "/legal/anti-competition": {
    href: "/legal/anti-competition",
    text: "Back to Anti-Competition Policy",
  },

  // Legal Pages - Other
  "/legal/e-sign-disclosure": {
    href: "/legal/e-sign-disclosure",
    text: "Back to E-SIGN Disclosure",
  },
  "/legal/licenses": { href: "/legal/licenses", text: "Back to Licenses" },
  "/legal/prohibited-restricted-businesses": {
    href: "/legal/prohibited-restricted-businesses",
    text: "Back to Prohibited & Restricted Businesses",
  },
  "/legal/sla": { href: "/legal/sla", text: "Back to Service Level Agreement" },

  // Support & Info Pages
  "/security": { href: "/security", text: "Back to Security" },
  "/accessibility": { href: "/accessibility", text: "Back to Accessibility" },
  "/help": { href: "/help", text: "Back to Help Center" },
  "/documentation": { href: "/documentation", text: "Back to Documentation" },
  "/api": { href: "/api", text: "Back to API Reference" },
  "/status": { href: "/status", text: "Back to System Status" },
  "/about": { href: "/about", text: "Back to About" },
  "/careers": { href: "/careers", text: "Back to Careers" },
  "/contact": { href: "/contact", text: "Back to Contact" },
  "/press": { href: "/press", text: "Back to Press" },

  // Blog
  "/blog": { href: "/blog", text: "Back to Blog" },
};

const Header = () => {
  const pathname = usePathname();
  const isLegalArchitecturePage = pathname === "/legal/legal-architecture";
  const [backLink, setBackLink] = useState<{
    href: string;
    text: string;
  } | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!isLegalArchitecturePage && pathname !== "/") {
      const previousPath = sessionStorage.getItem("previousPathname") || "";

      if (pathname.startsWith("/blog/") && !previousPath) {
        setBackLink({ href: "/blog", text: "Back to Blog" });
      } else if (previousPath && BACK_LINK_MAP[previousPath]) {
        setBackLink(BACK_LINK_MAP[previousPath]);
      } else if (previousPath && previousPath !== "/") {
        const pathParts = previousPath.split("/").filter(Boolean);
        const pageName = pathParts[pathParts.length - 1] || "Previous Page";
        const formattedName = pageName
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        setBackLink({ href: previousPath, text: `Back to ${formattedName}` });
      } else {
        if (pathname.startsWith("/blog/")) {
          setBackLink({ href: "/blog", text: "Back to Blog" });
        } else if (pathname.startsWith("/legal/")) {
          setBackLink({ href: "/", text: "Back to Legal Pages" });
        } else {
          setBackLink({ href: "/", text: "Back to Legal Pages" });
        }
      }
    }
  }, [pathname, isLegalArchitecturePage]);

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="container flex items-center justify-start py-5 px-4 md:px-8 gap-4">
        {!isLegalArchitecturePage && backLink && (
          <>
            <Link
              href={backLink.href}
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-150"
            >
              ← {backLink.text}
            </Link>
            <div className="h-4 w-px bg-[var(--color-border-divider)]" />
          </>
        )}
        <h1 className="m-0 text-base font-normal leading-none">
          <Link
            href="/"
            aria-label="SaveCash homepage"
            className="text-foreground transition-opacity hover:opacity-80"
            data-testid="header-savecash-logo"
          >
            <SaveCashLogo />
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
