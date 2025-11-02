import React, { useEffect, useState } from "react";

interface LegalNavItem {
  title: string;
  href: string;
  subItems?: LegalNavItem[];
}

interface LegalNavSection {
  title?: string;
  items: LegalNavItem[];
}

const legalNavSections: LegalNavSection[] = [
  {
    items: [
      { title: "Terms of Service", href: "/terms" },
    ],
  },
  {
    title: "Privacy",
    items: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Cookie Policy", href: "/cookies" },
    ],
  },
  {
    title: "Legal",
    items: [
      { title: "Legal Disclaimer", href: "/legal-disclaimer" },
      { title: "End User License Agreement", href: "/eula" },
    ],
  },
  {
    title: "Policies",
    items: [
      { title: "Return Policy", href: "/return-policy" },
      { title: "Shipping Policy", href: "/shipping-policy" },
    ],
  },
  {
    items: [
      { title: "Opt Out", href: "/opt-out" },
    ],
  },
];

export default function LegalSidebar({ currentPath }: { currentPath: string }) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    // Get current active section from hash
    const hash = window.location.hash.slice(1);
    if (hash) {
      setActiveSection(hash);
    }
  }, []);

  const isActive = (href: string) => {
    return currentPath === href || currentPath.startsWith(href);
  };

  return (
    <nav>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {legalNavSections.map((section, sectionIdx) => (
          <React.Fragment key={sectionIdx}>
            {section.title && (
              <li style={{ marginBottom: "16px", marginTop: sectionIdx > 0 ? "24px" : "0" }}>
                <h2 
                  style={{ 
                    fontSize: "12px", 
                    fontWeight: 600, 
                    letterSpacing: "0.05em", 
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    color: "#1a1a1a",
                  }}
                >
                  {section.title}
                </h2>
              </li>
            )}
            {section.items.map((item) => (
              <li key={item.href} style={{ marginBottom: "4px" }}>
                <a
                  href={item.href}
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    textDecoration: "none",
                    display: "block",
                    padding: "8px 0",
                    color: isActive(item.href) ? "#1a1a1a" : "#6b7280",
                    fontWeight: isActive(item.href) ? 500 : 400,
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(item.href)) {
                      e.currentTarget.style.color = "#1a1a1a";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.href)) {
                      e.currentTarget.style.color = "#6b7280";
                    }
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, "", item.href);
                    window.dispatchEvent(new PopStateEvent("popstate"));
                  }}
                >
                  {item.title}
                </a>
                {item.subItems && (
                  <ul style={{ listStyle: "none", padding: "0 0 0 16px", margin: "4px 0 0 0" }}>
                    {item.subItems.map((subItem) => (
                      <li key={subItem.href} style={{ marginBottom: "4px" }}>
                        <a
                          href={subItem.href}
                          style={{
                            fontSize: "14px",
                            lineHeight: "1.5",
                            textDecoration: "none",
                            display: "block",
                            padding: "4px 0",
                            color: isActive(subItem.href) ? "#1a1a1a" : "#6b7280",
                            fontWeight: isActive(subItem.href) ? 500 : 400,
                            transition: "color 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            if (!isActive(subItem.href)) {
                              e.currentTarget.style.color = "#1a1a1a";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive(subItem.href)) {
                              e.currentTarget.style.color = "#6b7280";
                            }
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            window.history.pushState({}, "", subItem.href);
                            window.dispatchEvent(new PopStateEvent("popstate"));
                          }}
                        >
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}

