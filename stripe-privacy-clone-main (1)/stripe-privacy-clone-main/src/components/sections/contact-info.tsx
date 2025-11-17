import React from 'react';

const ContactInfo = (): JSX.Element => {
  return (
    <section id="contact-us" className="scroll-mt-24" aria-labelledby="contact-us-heading">
      <h2
        id="contact-us-heading"
        className="mt-12 mb-6 text-[36px] font-bold text-text-primary"
      >
        9. Contact us
      </h2>
      <div className="space-y-4">
        <p className="text-[16px] font-normal leading-[1.6] text-[#4a5568]">
          If you have any questions or complaints about this Policy, please{' '}
          <a href="mailto:privacy.savecash@gmail.com" className="text-primary no-underline hover:underline">
            contact us
          </a>
          .
        </p>
        <p className="text-[16px] font-normal leading-[1.6] text-[#4a5568]">
          If you are an End Customer (i.e., an individual doing business or
          transacting with a Business User), please refer to the privacy policy
          or notice of the Business User for information regarding the Business
          User's privacy practices, choices and controls, or contact the
          Business User directly.
        </p>
      </div>
    </section>
  );
};

export default ContactInfo;