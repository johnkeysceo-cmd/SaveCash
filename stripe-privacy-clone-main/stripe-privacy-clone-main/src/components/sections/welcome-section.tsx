import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="max-w-[800px]" aria-labelledby="welcome">
      <h2
        id="welcome"
        className="font-bold text-[#1a1f36] mb-6 text-[32px]"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Welcome
      </h2>
      <div className="space-y-4">
        <p className="text-[16px] font-normal text-[#4a5568] leading-[1.6]">
          We provide financial infrastructure for the internet. Individuals and businesses of all sizes use our
          technology and services to facilitate purchases, accept payments, send payouts, and manage online
          businesses.
        </p>
        <p className="text-[16px] font-normal text-[#4a5568] leading-[1.6]">
          This Privacy Policy (“Policy”) describes the Personal Data that we collect, how we use and share it, and
          details on how you can reach us with privacy-related inquiries. The Policy also outlines your rights and
          choices as a data subject, including the right to object to certain uses of your Personal Data.
        </p>
        <p className="text-[16px] font-normal text-[#4a5568] leading-[1.6]">
          Depending on the activity, Stripe assumes the role of a “data controller” and/or “data processor” (or
          “service provider”). For more details about our privacy practices, including our role, the specific
          Stripe entity responsible under this Policy, and our legal bases for processing your Personal Data, please
          visit our{' '}
          <a href="https://stripe.com/legal/privacy-center">
            Privacy Center
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;