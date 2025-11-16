"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
}

interface NavGroup {
  title: string;
  isTopLevelLink?: boolean;
  href?: string;
  items?: NavItem[];
}

const navigationData: NavGroup[] = [
  {
    title: "SaveCash Services Agreement",
    href: "/legal/ssa",
    isTopLevelLink: true,
  },
  {
    title: "SaveCash Connected Account Agreement",
    href: "/legal/connect-account",
    isTopLevelLink: true,
  },
  {
    title: "SaveCash Payments Company Terms",
    href: "/legal/spc",
    isTopLevelLink: true,
  },
  {
    title: "Acquirer Terms",
    items: [
      { title: "Acquirer Disclosure", href: "/legal/acquirer-disclosure" },
      { title: "Cross River Bank", href: "/legal/crb" },
      { title: "Deutsche Bank", href: "/legal/deutsche-bank" },
      { title: "Pathward N.A.", href: "/legal/pathward" },
      { title: "PNC Bank", href: "/legal/pnc" },
    ],
  },
  {
    title: "Issuing Bank Terms",
    href: "/legal/celtic-spend-card",
    isTopLevelLink: true,
  },
  {
    title: "Payment Method Terms",
    href: "/legal/payment-terms",
    isTopLevelLink: true,
  },
  {
    title: "User Bank Debit Authorizations",
    href: "/legal/bank-debit-authorizations",
    isTopLevelLink: true,
  },
  {
    title: "Prohibited & Restricted Businesses",
    href: "/legal/prohibited-restricted-businesses",
    isTopLevelLink: true,
  },
  {
    title: "Other Products and Programs",
    items: [
      {
        title: "SaveCash Terminal Device EULA",
        href: "/legal/terminal-device-eula",
      },
      {
        title: "SaveCash Terminal Purchase Terms",
        href: "/legal/terminal-purchase",
      },
      {
        title: "SaveCash Terminal Reseller Terms",
        href: "/legal/terminal-reseller",
      },
      {
        title: "SaveCash Climate Contribution Terms",
        href: "/legal/climate-contributions",
      },
      { title: "SaveCash Fee Credit Terms", href: "/legal/fee-credits" },
      { title: "SaveCash Partner Ecosystem", href: "/legal/partner-ecosystem" },
    ],
  },
  {
    title: "SaveCash Apps",
    items: [
      {
        title: "App Developer Agreement",
        href: "/legal/app-developer-agreement",
      },
      {
        title: "App Marketplace Agreement",
        href: "/legal/app-marketplace-agreement",
      },
    ],
  },
  {
    title: "Privacy & Data",
    items: [
      { title: "Privacy Policy", href: "/" },
      { title: "Cookies Policy", href: "/cookies" },
      {
        title: "Data Privacy Framework",
        href: "/legal/data-privacy-framework",
      },
      { title: "Service Providers List", href: "/legal/service-providers" },
      { title: "Data Processing Agreement", href: "/legal/dpa" },
      { title: "Data Transfers Addendum", href: "/legal/dta" },
      { title: "Data Retention & Deletion", href: "/legal/data-retention" },
    ],
  },
  {
    title: "Compliance & Security",
    items: [
      { title: "Regulatory Compliance", href: "/legal/compliance" },
      { title: "KYC / AML Policy", href: "/legal/kyc-aml" },
      { title: "Risk Disclosure", href: "/legal/risk-disclosure" },
      { title: "Complaints & Disputes", href: "/legal/disputes" },
      { title: "Transparency Report", href: "/legal/transparency" },
    ],
  },
  {
    title: "Intellectual Property",
    items: [
      { title: "Intellectual Property Notice", href: "/legal/ip-notice" },
      { title: "Marks Usage", href: "/legal/marks-usage" },
      { title: "Anti-Competition Policy", href: "/legal/anti-competition" },
    ],
  },
  {
    title: "E-SIGN Disclosure",
    href: "/legal/e-sign-disclosure",
    isTopLevelLink: true,
  },
  { title: "Licenses", href: "/legal/licenses", isTopLevelLink: true },
  {
    title: "Consumer Terms",
    href: "/legal/consumer-terms",
    isTopLevelLink: true,
  },
];

const activePath = "/";

const SidebarNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const sidebarContent = (
    <nav className="pt-20 lg:pt-[60px] pb-8 font-['Inter']">
      <ul>
        {navigationData.map((group, groupIndex) =>
          group.isTopLevelLink && group.href ? (
            <li key={group.href} className="px-2">
              <a
                href={group.href}
                className="block py-[16px] px-4 text-sm font-semibold text-[#424770] hover:bg-[#f6f9fc] rounded transition-colors"
              >
                {group.title}
              </a>
            </li>
          ) : (
            <li key={group.title}>
              <Accordion
                type="single"
                collapsible
                defaultValue={
                  group.items?.some((item) => item.href === activePath)
                    ? `group-${groupIndex}`
                    : undefined
                }
              >
                <AccordionItem
                  value={`group-${groupIndex}`}
                  className="border-b-0"
                >
                  <AccordionTrigger className="mt-6 px-6 py-0 text-xs text-[#424770] uppercase font-semibold tracking-wide hover:no-underline [&[data-state=open]>svg]:rotate-90 [&_svg]:transition-transform">
                    {group.title}
                  </AccordionTrigger>
                  <AccordionContent className="pt-1 pb-0">
                    <ul className="pl-6 pr-2">
                      {group.items?.map((item) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            className={cn(
                              "block py-3 pl-4 text-sm rounded transition-colors",
                              item.href === activePath
                                ? "text-primary font-medium"
                                : "text-muted-foreground hover:bg-[#f6f9fc] hover:text-foreground",
                            )}
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
          ),
        )}
      </ul>
    </nav>
  );

  return (
    <>
      <button
        className="lg:hidden fixed top-5 left-5 z-[60] p-2 bg-background border rounded-md shadow-sm"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/30 transition-opacity duration-200 ease-in-out lg:hidden",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        aria-hidden="true"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <aside
        className={cn(
          "fixed top-0 left-0 h-screen w-[280px] bg-background border-r border-[#e6e6e6] z-50 shadow-lg lg:shadow-none",
          "transform transition-transform duration-300 ease-in-out will-change-transform",
          "lg:translate-x-0 lg:pointer-events-auto",
          isMobileMenuOpen
            ? "translate-x-0 pointer-events-auto"
            : "-translate-x-full pointer-events-none",
        )}
      >
        <div className="h-full w-full overflow-y-auto scroll-smooth">
          {sidebarContent}
        </div>
      </aside>
    </>
  );
};

export default SidebarNavigation;
