import React from "react";
import { HoneycombLoader } from "./ui/honeycomb-loader";

type ErrorBoundaryState = { hasError: boolean };

export class ErrorBoundary extends React.Component<React.PropsWithChildren, ErrorBoundaryState> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    // Optionally log to monitoring service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
          <div className="flex flex-col items-center gap-4">
            <HoneycombLoader />
            <div className="text-white/80">Something went wrong. Trying to recover…</div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}


