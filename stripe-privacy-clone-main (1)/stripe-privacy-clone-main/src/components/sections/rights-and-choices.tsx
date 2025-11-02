import React from 'react';

export const RightsAndChoices = () => {
  return (
    <section id="your-rights-and-choices" className="scroll-mt-24 w-full max-w-[800px] mx-auto text-foreground">
      <h2 className="text-[36px] font-bold text-foreground mt-12 mb-6">4. Your rights and choices</h2>
      <p className="text-base font-normal leading-[1.6] mb-6">
        Depending on your location and subject to applicable law, you may have choices regarding our collection, use, and disclosure of your Personal Data:
      </p>
      
      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">a. Opting out of receiving electronic communications from us</h3>
      <p className="text-base font-normal leading-[1.6] mb-6">
        If you wish to stop receiving marketing-related emails from us, you can opt-out by clicking the unsubscribe link included in such emails or as described <a href="#" className="text-primary hover:text-foreground hover:underline">here</a>. We'll try to process your request(s) as quickly as reasonably practicable. However, it's important to note that even if you opt out of receiving marketing-related emails from us, we retain the right to communicate with you about the Services you receive (like support and important legal notices) and our Business Users might still send you messages or instruct us to send you messages on their behalf.
      </p>
      
      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">b. Your data protection rights</h3>
      <p className="text-base font-normal leading-[1.6] mb-6">
        Depending on your location and subject to applicable law, you may have the following rights regarding the Personal Data we process about you as a data controller:
      </p>
      <ul className="list-disc pl-4 text-base font-normal leading-[1.6] space-y-2">
        <li>
          <strong className="font-medium">The right to request confirmation</strong> of whether Stripe is processing Personal Data associated with you, the categories of personal data it has processed, and the third parties or categories of third parties with which your Personal Data is shared;
        </li>
        <li>
          <strong className="font-medium">The right to request access</strong> to the Personal Data Stripe processes about you (<a href="#" className="text-primary hover:text-foreground hover:underline">Learn More</a>);
        </li>
        <li>
          <strong className="font-medium">The right to request that Stripe rectify or update your Personal Data</strong> if it's inaccurate, incomplete, or outdated;
        </li>
        <li>
          <strong className="font-medium">The right to request that Stripe erase your Personal Data</strong> in certain circumstances as provided by law (<a href="#" className="text-primary hover:text-foreground hover:underline">Learn More</a>);
        </li>
        <li>
          <strong className="font-medium">The right to request that Stripe restrict the use of your Personal Data</strong> in certain circumstances, such as while Stripe is considering another request you've submitted (for instance, a request that Stripe update your Personal Data);
        </li>
        <li>
          <strong className="font-medium">The right to request that we export the Personal Data</strong> we hold about you to another company, provided it's technically feasible;
        </li>
        <li>
          <strong className="font-medium">The right to withdraw your consent</strong> if your Personal Data is being processed based on your previous consent;
        </li>
        <li>
          <strong className="font-medium">The right to object to the processing of your Personal Data</strong> if we are processing your data based on our legitimate interests; unless there are compelling legitimate grounds or the processing is necessary for legal reasons, we will cease processing your Personal Data upon your request; and
        </li>
        <li>
          You may have additional rights, depending on applicable law, over your Personal Data. For example, see the Jurisdiction-specific provisions section under United States below.
        </li>
      </ul>
      
      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">c. Process for exercising your data protection rights</h3>
      <p className="text-base font-normal leading-[1.6] mb-6">
        To exercise your data protection rights related to Personal Data we process as a data controller, visit our <a href="/legal/privacy-center" className="text-primary hover:text-foreground hover:underline">Privacy Center</a> or contact us as outlined below. For Personal Data we process as a data processor, please reach out to the relevant data controller (Business User) to exercise your rights. If you contact us regarding your Personal Data we process as a data processor, we will refer you to the relevant data controller to the extent we are able to identify them.
      </p>
    </section>
  );
};

export default RightsAndChoices;