import React from 'react';

interface NextJSPageWrapperProps {
  path: string;
}

// This component loads the Next.js app page from stripe-privacy-clone-main
// Assumes the Next.js app is running on port 3000 (default Next.js port)
// If different, change NEXTJS_APP_URL
// For production, update this to your Next.js app URL
// IMPORTANT: Make sure the Next.js app in stripe-privacy-clone-main/stripe-privacy-clone-main is running!
// Default Next.js dev server runs on port 3000
// To start: cd stripe-privacy-clone-main/stripe-privacy-clone-main && npm run dev
const NEXTJS_APP_URL = (import.meta as any).env?.VITE_NEXTJS_APP_URL || 'http://localhost:3000';

export default function NextJSPageWrapper({ path }: NextJSPageWrapperProps) {
  const fullUrl = `${NEXTJS_APP_URL}${path}`;
  
  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      <iframe
        src={fullUrl}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
          margin: 0,
          padding: 0,
        }}
        title={`Next.js Page: ${path}`}
        allowFullScreen
      />
    </div>
  );
}

