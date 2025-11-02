import React from 'react';
import Link from 'next/link';

const StripeLogo = () => (
  <svg
    width="60"
    height="25"
    viewBox="0 0 60 25"
    aria-hidden="true"
    fill="currentColor"
  >
    <title>Stripe logo</title>
    <path d="M60 25L60 0L0 0L0 25L10.375 25L10.375 16.0375L15.3125 16.0375L15.3125 25L24.875 25L24.875 5.075L19.9375 5.075L19.9375 0L33.0625 0L33.0625 5.075L28.125 5.075L28.125 25L37.6875 25L37.6875 16.0375L42.625 16.0375L42.625 25L60 25ZM46.1875 16.0375L46.1875 5.075L41.3125 5.075L41.3125 0L54.375 0L54.375 5.075L49.5 5.075L49.5 16.0375L46.1875 16.0375Z" />
  </svg>
);


const Header = () => {
    return (
      <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
        <div className="container flex items-center justify-start py-5 px-4 md:px-8">
          <h1 className="m-0 text-base font-normal leading-none">
            <Link
              href="/"
              aria-label="Stripe homepage"
              className="text-foreground transition-opacity hover:opacity-80"
              data-testid="header-stripe-logo"
            >
              <StripeLogo />
            </Link>
          </h1>
        </div>
      </header>
    );
};

export default Header;