import React from 'react';

const PrivacyHero = () => {
  return (
    <div className="mx-auto max-w-[800px]">
      <h1 className="mb-8 text-[32px] font-bold leading-[1.2] text-[#1a1f36] md:text-[48px]">
        Privacy Policy
      </h1>

      <div className="mb-6 rounded-lg bg-secondary p-4">
        <p className="text-[15px] leading-relaxed text-muted-foreground">
          We've recently added a new data controller, SaveCash Technology Company
          Limited, to our Privacy Center. For an overview of current SaveCash data
          controllers please visit our{' '}
          <a
            href="https://savecash.com/legal/privacy-center#which-savecash-entities-are-involved"
            className="text-primary"
          >
            Privacy Center
          </a>
          .
        </p>
      </div>

      <h4 className="mb-6 text-sm font-normal text-[#6b7c93]">
        Last updated: January 16, 2025
      </h4>

      <p className="text-base font-normal leading-[1.6] text-foreground">
        This Privacy Policy includes important information about your personal
        data and we encourage you to read it carefully.
      </p>
    </div>
  );
};

export default PrivacyHero;