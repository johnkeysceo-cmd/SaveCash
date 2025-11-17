import React from 'react';

const TableRow = ({ children, isEven }: { children: React.ReactNode; isEven: boolean }) => {
  return (
    <tr className={isEven ? 'bg-background-secondary' : 'bg-white'}>
      {children}
    </tr>
  );
};

export default function USConsumerNotice() {
  const sharingReasons = [
    {
      reason: "For our everyday business purposes – such as to process your transactions, maintain your account(s), respond to court orders and legal investigations, or report to credit bureaus",
      doesShare: "Yes",
      canLimit: "No",
    },
    {
      reason: "For our marketing purposes - to offer our products and Services to you",
      doesShare: "Yes",
      canLimit: "No",
    },
    {
      reason: "For joint marketing with other financial companies",
      doesShare: "Yes",
      canLimit: "No",
    },
    {
      reason: "For our affiliates' everyday business purposes - information about your transactions and experiences",
      doesShare: "Yes",
      canLimit: "No",
    },
    {
      reason: "For our affiliates' everyday business purposes - information about your creditworthiness",
      doesShare: "No",
      canLimit: "We don't share",
    },
    {
      reason: "For our affiliates to market to you",
      doesShare: "No",
      canLimit: "We don't share",
    },
    {
      reason: "For nonaffiliates to market to you (for data not collected through Financial Connections)",
      doesShare: "Yes",
      canLimit: "Yes",
    },
    {
      reason: "For nonaffiliates to market to you (for data collected through Financial Connections)",
      doesShare: "No",
      canLimit: "We don't share",
    },
  ];

  return (
    <section id="us-consumer-privacy-notice" className="scroll-mt-24 max-w-[800px] mx-auto text-text-primary font-normal">
      <h2 className="text-[36px] font-bold text-text-primary mt-12 mb-2">
        10. US Consumer Privacy Notice
      </h2>
      <p className="text-base text-text-secondary mb-4">
        The following Consumer Privacy Notice applies to you if you are an individual who resides in the United States and obtains financial services from SaveCash primarily for your own personal, family, or household purposes.
      </p>
      <p className="text-base text-text-secondary mb-8">Last updated: January 16, 2025</p>

      <div className="border border-[#e6e6e6] bg-white text-base">
        <div className="p-4 border-b border-[#e6e6e6]">
          <h3 className="text-center font-bold text-xl uppercase">FACTS</h3>
        </div>
        <div className="p-4 border-b border-[#e6e6e6]">
          <h3 className="font-bold text-base mb-2">WHAT DOES SaveCash DO WITH YOUR PERSONAL INFORMATION?</h3>
          <p className="mb-4">
            <span className="font-bold">Why?</span> Financial companies choose how they share your personal information. Federal law gives consumers the right to limit some but not all sharing. Federal law also requires us to tell you how we collect, share, and protect your personal information. Please read this notice carefully to understand what we do.
          </p>
          <p className="mb-4">
            <span className="font-bold">What?</span> The types of personal information we collect and share depend on the product or service you have with us. This information can include:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Social Security Number</li>
            <li>Contact details</li>
            <li>Account balances and transaction history</li>
            <li>Payment, transaction, and purchase information and history</li>
          </ul>
          <p>
            When you are no longer our customer, we continue to share your information as described in this notice.
          </p>
        </div>
        <div className="p-4 border-b border-[#e6e6e6]">
          <p>
            <span className="font-bold">How?</span> All financial companies need to share customers' personal information to run their everyday business. In the section below, we list the reasons financial companies can share their customers' personal information; the reasons SaveCash chooses to share; and whether you can limit this sharing.
          </p>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="bg-white">
              <th className="p-4 text-sm font-semibold text-[#424770] border-b border-[#e6e6e6] align-top">Reasons we can share your personal information</th>
              <th className="p-4 text-sm font-semibold text-[#424770] border-b border-[#e6e6e6] align-top">Does SaveCash Share?</th>
              <th className="p-4 text-sm font-semibold text-[#424770] border-b border-[#e6e6e6] align-top">Can you limit this sharing</th>
            </tr>
          </thead>
          <tbody>
            {sharingReasons.map((item, index) => (
              <TableRow key={index} isEven={index % 2 !== 0}>
                <td className="p-4 align-top">{item.reason}</td>
                <td className="p-4 align-top">{item.doesShare}</td>
                <td className="p-4 align-top">{item.canLimit}</td>
              </TableRow>
            ))}
          </tbody>
        </table>

        <div className="p-4 border-t border-[#e6e6e6] bg-background-secondary">
          <p className="font-bold">To limit our sharing</p>
          <p>
            Login to your Link account at{' '}
            <a href="https://app.link.com/settings" className="text-primary hover:text-accent-hover hover:underline">
              app.link.com/settings
            </a>{' '}
            and toggle off data sharing from the Messaging menu.
          </p>
          <p className="mt-4 text-sm">
            <span className="font-bold">Please note:</span> If you are a new customer, we can begin sharing your information 30 days from the date we sent this notice. When you are no longer our customer, we continue to share your information as described in this notice.
          </p>
          <p className="mt-2 text-sm">
            However, you can contact us at any time to limit our sharing.
          </p>
        </div>

        <div className="p-4 border-t border-[#e6e6e6]">
          <p className="font-bold">Questions?</p>
          <p>
            Contact us at <a href="mailto:privacy.savecash@gmail.com" className="text-primary hover:text-accent-hover hover:underline">privacy.savecash@gmail.com</a> or visit us at{' '}
            <a href="https://support.link.com" className="text-primary hover:text-accent-hover hover:underline">https://support.link.com</a>
          </p>
        </div>
      </div>

      <div className="mt-8 text-base">
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mb-8 pb-8 border-b border-[#e6e6e6]">
          <div>
            <h3 className="text-xl font-semibold mb-4">Who we are</h3>
            <p className="font-bold mb-1">Who is providing this notice?</p>
            <p>SaveCash, Inc., SaveCash Payments Company, and their affiliates that provide consumers services in the U.S.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">What we do</h3>
            <p className="font-bold mb-1">How does SaveCash protect my personal information?</p>
            <p>To protect your personal information from unauthorized access, destruction, loss, alteration, or misuse we use security measures to comply with federal law. These measures include computer safeguards and secured files and buildings. We impose access controls along with ongoing monitoring to prevent data misuse, and we require our service providers to take similar steps to protect your information.</p>
          </div>
          <div>
            <p className="font-bold mb-1">How does SaveCash collect my personal information?</p>
            <p className="mb-2">We collect your personal information, for example, when you</p>
            <ul className="list-disc pl-5 mb-2 space-y-1">
              <li>open a Link account;</li>
              <li>ask SaveCash to process a payment for goods or services;</li>
              <li>provide bank account information to SaveCash using Financial Connections</li>
            </ul>
            <p>We also collect your personal information from others, such as affiliates or other companies.</p>
          </div>
          <div>
            <p className="font-bold mb-1">Why can't I limit all sharing?</p>
            <p className="mb-2">Federal law gives you the right to limit only</p>
            <ul className="list-disc pl-5 mb-2 space-y-1">
              <li>sharing for affiliates' everyday business purposes — information about your creditworthiness</li>
              <li>affiliates from using your information to market to you</li>
              <li>sharing for nonaffiliates to market to you.</li>
            </ul>
            <p>State laws and individual companies may give you additional rights to limit sharing. See the Other Important Information section below for more on your rights under state law.</p>
          </div>
          <div>
            <p className="font-bold mb-1">What happens when I limit sharing for an account I hold jointly with someone else?</p>
            <p>Your choices will apply to everyone on your account.</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-8 mb-4">Definitions</h3>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mb-8 pb-8 border-b border-[#e6e6e6]">
          <div>
            <p className="font-bold mb-1">Affiliates</p>
            <p className="mb-2">Companies related by common ownership or control. They can be financial and nonfinancial companies.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Our affiliates include companies operating under the SaveCash name, such as SaveCash Technology Europe, Ltd. and SaveCash Payments UK, Ltd.</li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-1">Nonaffiliates</p>
            <p className="mb-2">Companies not related by common ownership or control. They can be financial and nonfinancial companies.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Nonaffiliates with which we share personal information include service providers that perform services or functions on our behalf, Business Users with which you choose to transact, partners with which we share data to provide you with services, and advertising partners, analytics providers, and social networks, who assist us in advertising our Services to you.</li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-1">Joint Marketing</p>
            <p className="mb-2">A formal agreement between non-affiliated financial companies that together market financial products or services to you.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Our joint marketing partners include financial companies we partner with to provide you with financial services.</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-8 mb-4">Other important information</h3>
        <p className="mb-4">
          <span className="font-bold">Vermont:</span> If your account with us is associated with a Vermont billing address, we will not disclose information about your creditworthiness to our affiliates and will not disclose your personal information, financial information, credit report, or health information to nonaffiliated third parties to market to you, other than as permitted by Vermont law, unless you authorize us to make those disclosures. For joint marketing, we will only disclose your name, contact information, and information about your transactions. Additional information concerning our privacy policies can be found in our Privacy Policy and Privacy Center.
        </p>
        <p className="mb-4">
          <span className="font-bold">California:</span> If your account with us is associated with a California billing address, we will not disclose Personal Data we collect about you except to the extent permitted under California law. For instance, we may disclose your Personal Data as necessary to process transactions or provide products and services you request, at your instruction, as required for institution risk control, and to safeguard against fraud, identity theft, and unauthorized transactions.
        </p>
        <p className="pb-12">
          For additional information about our privacy practices, please visit the SaveCash Privacy Center.
        </p>
      </div>
    </section>
  );
}