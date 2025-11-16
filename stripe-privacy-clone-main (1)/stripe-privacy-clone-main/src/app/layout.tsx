import type { Metadata } from "next";
import Script from "next/script";

import ErrorReporter from "@/components/ErrorReporter";
import NavigationTracker from "@/components/NavigationTracker";
import VisualEditsMessenger from "@/visual-edits/VisualEditsMessenger";

import "./globals.css";

export const metadata: Metadata = {
  title: "SaveCash",
  description:
    "Comprehensive privacy policy, terms of service, and legal documentation for SaveCash. Learn how we protect your data, handle compliance, and ensure transparency in our AI-powered financial management platform.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background overflow-x-hidden">
        <NavigationTracker />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "SaveCash", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
