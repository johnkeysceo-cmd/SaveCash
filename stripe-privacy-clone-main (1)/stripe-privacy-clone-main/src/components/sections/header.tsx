import React from 'react';
import Link from 'next/link';

const SaveCashLogo = () => (
  <div className="text-2xl font-bold text-[#6366f1]">
    SaveCash
  </div>
);


const Header = () => {
    return (
      <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
        <div className="container flex items-center justify-start py-5 px-4 md:px-8">
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