import React from "react";
import LegalSidebar from "./LegalSidebar";

interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
  currentPath: string;
}

export default function LegalPageLayout({
  title,
  children,
  currentPath,
}: LegalPageLayoutProps) {
  return (
    <div
      className="min-h-screen bg-white"
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        lineHeight: "1.6",
        color: "#1a1a1a",
      }}
    >
      {/* Main Container - Matching Stripe's exact layout */}
      <div style={{ maxWidth: "100%", padding: "48px 24px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12" style={{ 
          maxWidth: "1280px", 
          margin: "0 auto"
        }}>
          {/* Left Sidebar - Legal Navigation */}
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <LegalSidebar currentPath={currentPath} />
          </aside>

          {/* Right Content Area */}
          <main className="lg:col-span-3">
            {/* Title Section */}
            <header style={{ marginBottom: "48px" }}>
              <h1
                style={{
                  fontSize: "32px",
                  fontWeight: 600,
                  lineHeight: "1.3",
                  color: "#1a1a1a",
                  marginBottom: "24px",
                  marginTop: 0,
                }}
              >
                {title}
              </h1>
            </header>

            {/* Content */}
            <div
              style={{
                fontSize: "17px",
                lineHeight: "1.8",
                color: "#4a4a4a",
              }}
            >
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

