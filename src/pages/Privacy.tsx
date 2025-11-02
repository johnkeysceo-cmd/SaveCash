import React from 'react';
import Footer from '../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']" style={{ backgroundColor: 'var(--color-primary-background)' }}>
      
      <main className="flex-1">
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          <article className="space-y-8">
            <div>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: January 16, 2025</p>
              <p className="text-[var(--color-text-primary)] leading-relaxed mb-4">
                This Privacy Policy includes important information about your personal data and we encourage you to read it carefully.
          </p>
      </div>

            <section className="space-y-4">
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">Welcome</h1>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We provide financial infrastructure for the internet. Individuals and businesses of all sizes use our technology and services to facilitate purchases, accept payments, send payouts, and manage online businesses.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This Privacy Policy ("Policy") describes the Personal Data that we collect, how we use and share it, and details on how you can reach us with privacy-related inquiries. The Policy also outlines your rights and choices as a data subject, including the right to object to certain uses of your Personal Data.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Depending on the activity, Stripe assumes the role of a "data controller" and/or "data processor" (or "service provider"). For more details about our privacy practices, including our role, the specific Stripe entity responsible under this Policy, and our legal bases for processing your Personal Data, please visit our Privacy Center.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Defined Terms</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                In this Policy, "Stripe", "we", "our," or "us" refers to the Stripe entity responsible for the collection, use, and handling of Personal Data as described in this document. Depending on your jurisdiction, the specific Stripe entity accountable for your Personal Data might vary. Learn More.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                "Personal Data" refers to any information associated with an identified or identifiable individual, which can include data that you provide to us, and that we collect about you during your interaction with our Services (such as device information, IP address, etc.).
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                "Services" refers to the products, services, devices, and applications, that we provide under the Stripe Services Agreement ("Business Services") or the Stripe Consumer Terms of Service ("End User Services"); websites ("Sites") like Stripe.com and Link.com; and other Stripe applications and online services. We provide Business Services to entities ("Business Users"). We provide End User Services directly to individuals for their personal use.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                "Financial Partners" are financial institutions, banks, and other partners such as payment method acquirers, payout providers, and card networks that we partner with to provide the Services.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Depending on the context, "you" might be an End Customer, End User, Representative, or Visitor:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>End Users.</strong> When you use an End User Service, such as saving a payment method with Link, for personal use we refer to you as an "End User."</li>
                <li><strong>End Customers.</strong> When you are not directly transacting with Stripe, but we receive your Personal Data to provide Services to a Business User, including when you make a purchase from a Business User on a Stripe Checkout page or receive payments from a Business User, we refer to you as an "End Customer."</li>
                <li><strong>Representatives.</strong> When you are acting on behalf of an existing or potential Business User—perhaps as a company founder, account administrator for a Business User, or a recipient of an employee credit card from a Business User via Stripe Issuing—we refer to you as a "Representative."</li>
                <li><strong>Visitors.</strong> When you interact with Stripe by visiting a Site without being logged into a Stripe account, or when your interaction with Stripe does not involve you being an End User, End Customer, or Representative, we refer to you as a "Visitor." For example, you are a Visitor when you send a message to Stripe asking for more information about our Services.</li>
                </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed mt-4">
                In this Policy, "Transaction Data" refers to data collected and used by Stripe to facilitate transactions you request. Some Transaction Data is Personal Data and may include: your name, email address, contact number, billing and shipping address, payment method information (like credit or debit card number, bank account details, or payment card image chosen by you), merchant and location details, amount and date of purchase, and in some instances, information about what was purchased.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Table of Contents</h2>
              <ol className="list-decimal pl-6 space-y-2 text-[var(--color-text-primary)]">
                <li>Personal Data that we collect and how we use and share it</li>
                <li>More ways we collect, use and share Personal Data</li>
                <li>Legal bases for processing data</li>
                <li>Your rights and choices</li>
                <li>Security and retention</li>
                <li>International data transfers</li>
                <li>Updates and notifications</li>
                <li>Jurisdiction-specific provisions</li>
                <li>Contact us</li>
                <li>US Consumer Privacy Notice</li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">1. Personal Data we collect and how we use and share it</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Our collection and use of Personal Data differs based on whether you are an End User, End Customer, Representative, or Visitor, and the specific Service that you are using. For example, if you're a sole proprietor who wants to use our Business Services, we may collect your Personal Data to onboard your business; at the same time, you might also be an End Customer if you've bought goods from another Business User that is using our Services for payment processing. You could also be an End User if you used our End User Service, such as Link, for those transactions.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">1.1 End Users</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We provide End User Services when we provide the Services directly to you for your personal use (e.g., Link). Additional details regarding our collection, usage, and sharing of End User Personal Data, including the legal bases we rely on for processing such data, can be found in our Privacy Center.
              </p>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">a. Personal Data we collect about End Users</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Using Link or Connecting your bank account.</strong> Stripe offers a service called "Link," which allows you to create an account and store information for future interactions with Stripe's Services and Business Users. You may save a number of different kinds of Personal Data using Link. For instance, you may save your name, payment method details, contact information, and address to conveniently use saved information to pay for transactions across our Business Users. When you choose to pay with Link, we will also collect Transaction Data associated with your transactions. Learn More.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                You can also share and save bank account details to your Link account using Stripe's Financial Connections product. When you use Financial Connections, Stripe will periodically collect and process your account information (such as bank account owner information, account balances, account number and details, account transactions, and, in some cases, log-in credentials). You can ask us to cease the collection of such data at any time. Learn More.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Finally, you can use Link to store your identity documents (such as your driver's license) so that you can share them in future interactions with Stripe or its Business Users.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Paying Stripe.</strong> When you purchase goods or services directly from Stripe, we receive your Transaction Data. For instance, when you make a payment to Stripe Climate, we collect information about the transaction, as well as your contact and payment method details.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Identity/Verification Services.</strong> We offer an identity verification service that automates the comparison of your identity document (such as a driver's license) with your image (such as a selfie). You can separately consent to us using your biometric data to enhance our verification technology, with the option to revoke your consent at any time. Learn More.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>More.</strong> For further information about other types of Personal Data that we may collect about End Users, including about your online activity and your engagement with our End User Services, please see the More ways we collect, use, and share Personal Data section below.
              </p>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">b. How we use and share Personal Data of End Users</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Services.</strong> We use and share your Personal Data to provide the End User Services to you, which includes support, personalization (such as language preferences and setting choices), and communication about our End User Services (such as communicating Policy updates and information about our Services). For example, Stripe may use cookies and similar technologies or the data you provide to our Business Users (such as when you input your email address on a Business User's website) to recognize you and help you use Link when visiting our Business User's website. Learn more about how we use cookies and similar technologies in Stripe's Cookie Policy.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Our Business Users.</strong> When you use Link to make payments with our Business Users, we share your Personal Data, including name, contact information, payment method details, and Transaction Data with those Business Users. Learn More. You can also direct Stripe to share your saved bank account information and identity documents with Business Users you do business with. Once we share your Personal Data with Business Users, we may process that Personal Data as a Data Processor for those Business Users, as detailed in Section 1.2 of this Policy. You should consult the privacy policies of the Business Users' you do business with for information on how they use the information shared with them.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Fraud Detection and Loss Prevention.</strong> We use your Personal Data collected across our Services to detect fraud and prevent financial losses for you, us, and our Business Users and Financial Partners, including detecting unauthorized purchases. We may provide Business Users and Financial Partners, including those that use our fraud prevention-related Business Services (such as Stripe Radar), with Personal Data about you (including your attempted transactions) so that they can assess the fraud or loss risk associated with the transaction. Learn more about how we may use technology to assess the fraud risk associated with an attempted transaction and what information we share with Business Users and Financial Partners here and here.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Advertising.</strong> Where permitted by applicable law, we may use your Personal Data, including Transaction Data, to assess your eligibility for, and offer you, other End User Services or promote existing End User Services, including through co-marketing with partners such as Stripe Business Users. Learn more. Subject to applicable law, including any consent requirements, we use and share End User Personal Data with third party partners to allow us to advertise our End User Services to you, including through interest-based advertising, and to track the efficacy of such ads. We do not transfer your Personal Data to third parties in exchange for payment, but we may provide your data to third-party partners, such as advertising partners, analytics providers, and social networks, who assist us in advertising our Services to you. Learn more.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>More.</strong> For further information about ways we may use and share End Users' Personal Data, please see the More ways we collect, use, and share Personal Data section below.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">1.2 End Customers</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Stripe provides various Business Services to our Business Users, which include processing in-person or online payments or payouts for those Business Users. When acting as a service provider—also referred to as a Data Processor—for a Business User, we process End Customer Personal Data in accordance with our agreement with the Business User and the Business User's lawful instructions. This happens, for example, when we process a payment for a Business User because you purchased a product from them, or when the Business User asks us to send you funds.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Business Users are responsible for ensuring that the privacy rights of their End Customers are respected, including obtaining appropriate consents and making disclosures about their own data collection and use associated with their products and services. If you're an End Customer, please refer to the privacy policy of the Business User you're doing business with for its privacy practices, choices, and controls.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We provide more comprehensive information about our collection, use, and sharing of End Customer Personal Data in our Privacy Center, including the legal bases we rely on for processing your Personal Data.
              </p>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">a. Personal Data we collect about End Customers</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Transaction Data.</strong> If you're an End Customer making payments to, receiving refunds or payments from, initiating a purchase or donation, or otherwise transacting with our Business User, whether in-person or online, we receive your Transaction Data. We may also receive your transaction history with the Business User. Learn More. Additionally, we may collect information entered into a checkout form even if you opt not to complete the form or transaction with the Business User. Learn More. A Business User who uses Stripe's Terminal Service to provide its goods or services to End Customers may use the Terminal Service to collect End Customer Personal Data (like your name, email, phone number, address, signature, or age) in accordance with its own privacy policy.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Identity/Verification Information.</strong> Stripe provides a verification and fraud prevention Service that our Business Users can use to verify Personal Data about you, such as your authorization to use a particular payment method. During the process, you'd be asked to share with us certain Personal Data (like your government ID and selfie for biometric verification, Personal Data you input, or Personal Data that is apparent from the physical payment method like a credit card image). To protect against fraud and determine if somebody is trying to impersonate you, we may cross-verify this data with information about you that we've collected from Business Users, Financial Partners, business affiliates, identity verification services, publicly available sources, and other third party service providers and sources. Learn More.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>More.</strong> For further information about other types of Personal Data that we may collect about End Customers, including about your online activity, please see the More ways we collect, use, and share Personal Data section below.
              </p>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">b. How we use and share Personal Data of End Customers</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                To provide our Business Services to our Business Users, we use and share End Customers' Personal Data with them. Where allowed, we also use End Customers' Personal Data for Stripe's own purposes such as enhancing security, improving and offering our Business Services, and preventing fraud, loss, and other damages, as described further below.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Payment processing and accounting.</strong> We use your Transaction Data to deliver Payment-related Business Services to Business Users — including online payment transactions processing, sales tax calculation, and invoice, bill, and dispute handling — and to help them determine their revenue, settle their bills, and execute accounting tasks. Learn More. We may also use your Personal Data to provide and improve our Business Services.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                During payment transactions, your Personal Data is shared with various entities in connection with your transaction. As a service provider or data processor, we share Personal Data to enable transactions as directed by Business Users. For instance, when you choose a payment method for your transaction, we may share your Transaction Data with your bank or other payment method provider, including as necessary to authenticate you, Learn More, process your transaction, prevent fraud, and handle disputes. The Business User you choose to do business with also receives Transaction Data and might share the data with others. Please review your merchant's, bank's, and payment method provider's privacy policies for more information about how they use and share your Personal Data.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Financial services.</strong> Certain Business Users leverage our Services to offer financial services to you via Stripe or our Financial Partners. For example, a Business User may issue a card product with which you can purchase goods and services. Such cards could carry the brand of Stripe, the bank partner, and/or the Business User. In addition to any Transaction Data we may generate or receive when these cards are used for purchases, we also collect and use your Personal Data to provide and manage these products, including assisting our Business Users in preventing misuse of the cards. Please review the privacy policies of the Business User and, if applicable, our bank partners associated with the financial service (the brands of which may be shown on the card) for more information.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Identity/Verification services.</strong> We use Personal Data about your identity to perform verification services for Stripe or for the Business Users that you are transacting with, to prevent fraud, and to enhance security. For these purposes we may use Personal Data you provide directly or Personal Data we obtain from our service providers, including for phone verification. Learn More. If you provide a selfie along with an image of your identity document, we may employ biometric technology to compare and calculate whether they match and verify your identity. Learn More.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Fraud detection and loss prevention.</strong> We use your Personal Data collected across our Services to detect and prevent losses for you, us, our Business Users, and Financial Partners. We may provide Business Users and Financial Partners, including those using our fraud prevention-related Business Services, with your Personal Data (including your attempted transactions) to help them assess the fraud or loss risk associated with a transaction. Learn more about how we may use technology to assess the fraud risk associated with an attempted transaction and what information we share with Business Users and Financial Partners here and here.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Our Business Users (and their authorized third parties).</strong> We share End Customers' Personal Data with their respective Business Users and parties directly authorized by those Business Users to receive such data. Here are common examples of such sharing:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li>When a Business User instructs Stripe to provide another Business User with access to its Stripe account, including data related to its End Customers, via Stripe Connect.</li>
                <li>Sharing information that you have provided to us with a Business User so that we can send payments to you on behalf of that Business User.</li>
                <li>Sharing information, documents, or images provided by an End Customer with a Business User when the latter uses Stripe Identity, our identity verification Service, to verify the identity of the End Customer.</li>
                  </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                The Business Users you choose to do business with may further share your Personal Data with third parties (like additional third party service providers other than Stripe). Please review the Business User's privacy policy for more information.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Advertising by Business Users.</strong> If you initiate a purchasing process with a Business User, the Business User receives your Personal Data from us in connection with our provision of Services even if you don't finish your purchase. The Business User may use your Personal Data to market and advertise their products or services, subject to the terms of their privacy policy. Please review the Business User's privacy policy for more information, including your rights to stop their use of your Personal Data for marketing purposes.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>More.</strong> For further information about additional ways by which we may use and share End Customers' Personal Data, please see the More ways we collect, use, and share Personal Data section below.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">1.3 Representatives</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We collect, use, and share Personal Data from Representatives of Business Users (for example, business owners) to provide our Business Services. For more information about how we collect, use, and share Personal Data from Representatives, as well as the legal bases we rely on for processing such Personal Data, please visit our Privacy Center.
              </p>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">a. Personal Data we collect about Representatives</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Registration and contact information.</strong> When you register for a Stripe account for a Business User (including incorporation of a Business), we collect your name and login credentials. If you register for or attend an event organized by Stripe or sign up to receive Stripe communications, we collect your registration and profile data. As a Representative, we may collect your Personal Data from third parties, including data providers, to advertise, market, and communicate with you as detailed further in the More ways we collect, use, and share Personal Data section below. We may also link a location with you to tailor the Services or information effectively to your needs. Learn More.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Identification Information.</strong> As a current or potential Business User, an owner of a Business User, or a shareholder, officer, or director of a Business User, we need your contact details, such as name, postal address, telephone number, and email address, to fulfill our Financial Partner and regulatory requirements, verify your identity, and prevent fraudulent activities and harm to the Stripe platform. We collect your Personal Data, such as ownership interest in the Business User, date of birth, government-issued identity documents, and associated identifiers, as well as any history of fraud or misuse, directly from you and/or from publicly available sources, third parties such as credit bureaus and via the Services we provide. Learn More. You may also choose to provide us with bank account information.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>More.</strong> For further information about other types of Personal Data that we may collect about Representatives, including your online activity, please see the More ways we collect, use, and share Personal Data section below.
              </p>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">b. How we use and share Personal Data of Representatives</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We typically use the Personal Data of Representatives to provide the Business Services to the corresponding Business Users. The ways we use and share this data are further described below.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Business Services.</strong> We use and share Representatives' Personal Data with Business Users to provide the Services requested by you or the Business User you represent.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                In some instances, we may have to submit your Personal Data to a government entity to provide our Business Services, for purposes such as the incorporation of a business, or calculating and paying applicable sales tax. For our tax-related Business Services, we may use your Personal Data to prepare tax documents and file taxes on behalf of the Business User you represent. For our Atlas business incorporation Services, we may use your Personal Data to submit forms to the IRS on your behalf and file documents with other government authorities, such as articles of incorporation in your state of incorporation.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We share Representatives' Personal Data with parties authorized by the corresponding Business User, such as Financial Partners servicing a financial product, or third party apps or services the Business User chooses to use alongside our Business Services. Here are common examples of such sharing:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li>Payment method providers, like Visa or WeChat Pay, require information about Business Users and their Representatives who accept their payment methods. This information is typically required during the onboarding process or for processing transactions and handling disputes for these Business Users. Learn More.</li>
                <li>A Business User may authorize Stripe to share your Personal Data with other Business Users for the facilitation of the provision of Services through Stripe Connect.</li>
                <li>The use of Personal Data by a third party authorized by a Business User is subject to the third party's privacy policy.</li>
                  </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                If you are a Business User who has chosen a name that includes Personal Data (for example, a sole proprietorship or family name in a company name), we will use and share such information for the provision of our Services in the same way we do with any company name. This may include, for example, displaying it on receipts and other transaction-identifying descriptions.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Fraud detection and loss prevention.</strong> We use Representatives' Personal Data to identify and manage risks that our Business Services might be used for fraudulent activities causing losses to Stripe, End Users, End Customers, Business Users, Financial Partners, and others. We also use information about you obtained from publicly available sources, third parties like credit bureaus and from our Services to address such risks, including to identify patterns of misuse and monitor for terms of service violations. Stripe may share Representatives' Personal Data with Business Users, our Financial Partners, and third party service providers, including phone verification providers, Learn More, to verify the information provided by you and identify risk indicators. Learn More. We also use and share Representatives' Personal Data to conduct due diligence, including conducting anti-money laundering and sanctions screening in accordance with applicable law.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Advertising.</strong> Where permitted by applicable law, and where required with your consent, we use and share Representatives' Personal Data with third parties, including Partners, so we can advertise and market our Services and Partner integrations. Subject to applicable law, including any consent requirements, we may advertise through interest-based advertising and track the efficacy of such ads. See our Cookie Policy. We do not transfer your Personal Data to third parties in exchange for payment. However, we may provide your data to third party partners, like advertising partners, analytics providers, and social networks, who assist us in advertising our Services. Learn more. We may also use your Personal Data, including your Stripe account activity, to evaluate your eligibility for and offer you Business Services or promote existing Business Services. Learn more.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>More.</strong> For further information about additional ways by which we may use and share Representatives' Personal Data, please see the More ways we collect, use, and share Personal Data section below.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">1.4 Visitors</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We collect, use, and share the Personal Data of Visitors. More details about how we collect, use, and share Visitors' Personal Data, along with the legal bases we rely on for processing such Personal Data, can be found in our Privacy Center.
              </p>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">a. Personal Data we collect about Visitors</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                When you browse our Sites, we receive your Personal Data, either provided directly by you or collected through our use of cookies and similar technologies. See our Cookie Policy for more information. If you opt to complete a form on the Site or third party websites where our advertisements are displayed (like LinkedIn or Facebook), we collect the information you included in the form. This may include your contact information and other information pertaining to your questions about our Services. We may also associate a location with your visit. Learn More.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>More.</strong> Further details about other types of Personal Data that we may collect from Visitors, including your online activity, can be found in the More ways we collect, use, and share Personal Data section below.
              </p>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">b. How we use and share Personal Data of Visitors</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Personalization.</strong> We use the data we collect about you using cookies and similar technologies to measure engagement with the content on the Sites, improve relevancy and navigation, customize your experience (such as language preference and region-specific content), and curate content about Stripe and our Services that's tailored to you. For instance, as not all of our Services are available globally, we may customize our responses based on your region.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Advertising.</strong> Where permitted by applicable law, and where required with your consent, we use and share Visitors' Personal Data with third parties, including Partners, so we can advertise and market our Services and Partner integrations. Subject to applicable law, including any consent requirements, we may advertise through interest-based advertising and track the efficacy of such ads. See our Cookie Policy. We do not transfer your Personal Data to third parties in exchange for payment, but we may provide your data to third party partners, like advertising partners, analytics providers, and social networks, who assist us in advertising our Services. Learn more.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Engagement.</strong> As you interact with our Sites, we use the information we collect about and through your devices to provide opportunities for further interactions, such as discussions about Services or interactions with chatbots, to address your questions.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>More.</strong> For more information about additional ways we may use and share Visitors' Personal Data, please see the More ways we collect, use, and share Personal Data section below.
            </p>
            </section>

            {/* Section 2 - More ways we collect, use, and share Personal Data */}
            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">2. More ways we collect, use, and share Personal Data</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                In addition to the ways described above, we also process your Personal Data as follows:
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">a. Collection of Personal Data</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Online Activity.</strong> Depending on the Service used and how our Business Services are implemented by the Business Users, we may collect information related to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li>The devices and browsers you use across our Sites and third party websites, apps, and other online services ("Third Party Sites").</li>
                <li>Usage data associated with those devices and browsers and your engagement with our Services, including data elements like IP address, plug-ins, language preference, time spent on Sites and Third Party Sites, pages visited, links clicked, payment methods used, and the pages that led you to our Sites and Third Party Sites. We also collect activity indicators, such as mouse activity indicators, to help us detect fraud. Learn More. See also our Cookie Policy.</li>
                </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Communication and Engagement Information.</strong> We also collect information you choose to share with us through various channels, such as support tickets, emails, or social media. If you respond to emails or surveys from Stripe, we collect your email address, name, and any other data you opt to include in your email or responses. If you engage with us over the phone, we collect your phone number and any other information you might provide during the call. Calls with Stripe or Stripe representatives may be recorded. Learn More. Additionally, we collect your engagement data, like your registration for, attendance at, or viewing of Stripe events and any other interactions with Stripe personnel.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Forums and Discussion Groups.</strong> If our Sites allow posting of content, we collect Personal Data that you provide in connection with the post.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">b. Use of Personal Data.</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Besides the use of Personal Data described above, we use Personal Data in the ways listed below:
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Analyzing, Improving, and Developing our Services.</strong> We collect and process Personal Data throughout our various Services, whether you are an End User, End Customer, Representative, or Visitor, to improve our Services, develop new Services, and support our efforts to make our Services more efficient, relevant, and useful to you. Learn More. We may use Personal Data to generate aggregate and statistical information to understand and explain how our Services are used. Examples of how we use Personal Data to analyze, improve, and develop our products and services include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li>Using analytics on our Sites, including as described in our Cookie Policy, to help us understand your use of our Sites and Services and diagnose technical issues.</li>
                <li>Training artificial intelligence models to power our Services and protect against fraud and other harm. Learn more.</li>
                <li>Analyzing and drawing inferences from Transaction Data to reduce costs, fraud, and disputes and increase authentication and authorization rates for Stripe and our Business Users.</li>
            </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Communications.</strong> We use the contact information we have about you to deliver our Services, Learn More, which may involve sending codes via SMS for your authentication. Learn More. If you are an End User, Representative, or Visitor, we may communicate with you using the contact information we have about you to provide information about our Services and our affiliates' services, invite you to participate in our events, surveys, or user research, or otherwise communicate with you for marketing purposes, in compliance with applicable law, including any consent or opt-out requirements. For example, when you provide your contact information to us or when we collect your business contact details through participation at trade shows or other events, we may use this data to follow up with you regarding an event, provide information requested about our Services, and include you in our marketing information campaigns. Where permitted under applicable law, we may record our calls with you to provide our Services, comply with our legal obligations, perform research and quality assurance, and for training purposes.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Social Media and Promotions.</strong> If you opt to submit Personal Data to engage in an offer, program, or promotion, we use the Personal Data you provide to manage the offer, program, or promotion. We also use the Personal Data you provide, along with the Personal Data you make available on social media platforms, for marketing purposes, unless we are not permitted to do so.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Fraud Prevention and Security.</strong> We collect and use Personal Data to help us identify and manage activities that could be fraudulent or harmful across our Services, enable our fraud detection Business Services, and secure our Services and transactions against unauthorized access, use, alteration or misappropriation of Personal Data, information, and funds. As part of the fraud prevention, detection, security monitoring, and compliance efforts for Stripe and its Business Users, we collect information from publicly available sources, third parties (such as credit bureaus), and via the Services we offer. In some instances, we may also collect information about you directly from you, or from our Business Users, Financial Partners, and other third parties for the same purposes. Furthermore, to protect our Services, we may receive details such as IP addresses and other identifying data about potential security threats from third parties. Learn More. Such information helps us verify identities, conduct credit checks where lawfully permitted, and prevent fraud. Additionally, we might use technology to evaluate the potential risk of fraud associated with individuals seeking to procure our Business Services or arising from attempted transactions by an End Customer or End User with our Business Users or Financial Partners.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Compliance with Legal Obligations.</strong> We use Personal Data to meet our contractual and legal obligations related to anti-money laundering, Know-Your-Customer ("KYC") laws, anti-terrorism activities, safeguarding vulnerable customers, export control, and prohibition of doing business with restricted persons or in certain business fields, among other legal obligations. For example, we may monitor transaction patterns and other online signals and use those insights to identify fraud, money laundering, and other harmful activity that could affect Stripe, our Financial Partners, End Users, Business Users and others. Learn More. Safety, security, and compliance for our Services are key priorities for us, and collecting and using Personal Data is crucial to this effort.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Minors.</strong> Our Services are not directed to children under the age of 13, and we request that they do not provide Personal Data to seek Services directly from Stripe. In certain jurisdictions, we may impose higher age limits as required by applicable law.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">c. Sharing of Personal Data.</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Besides the sharing of Personal Data described above, we share Personal Data in the ways listed below:
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Stripe Affiliates.</strong> We share Personal Data with other Stripe-affiliated entities for purposes identified in this Policy.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Service Providers or Processors.</strong> In order to provide, communicate, market, analyze, and advertise our Services, we depend on service providers. These providers offer critical services such as providing cloud infrastructure, conducting analytics for the assessment of the speed, accuracy, and/or security of our Services, verifying identities, identifying potentially harmful activity, and providing customer service and audit functions. We authorize these service providers to use or disclose the Personal Data we make available to them to perform services on our behalf and to comply with relevant legal obligations. We require these service providers to contractually commit to security and confidentiality obligations for the Personal Data they process on our behalf. The majority of our service providers are based in the European Union, the United States of America, and India. Learn More.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Financial Partners.</strong> We share Personal Data with certain Financial Partners to provide Services to Business Users and offer certain Services in conjunction with these Financial Partners. For instance, we may share certain Personal Data, such as payment processing volume, loan repayment data, and Representative contact information, with institutional investors and lenders who purchase loan receivables or provide financing related to Stripe Capital. Learn More.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Others with Consent.</strong> In some situations, we may not offer a service, but instead refer you to others (like professional service firms that we partner with to deliver the Atlas Service). In these instances, we will disclose the identity of the third party and the information to be shared with them, and seek your consent to share the information.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Corporate Transactions.</strong> If we enter or intend to enter a transaction that modifies the structure of our business, such as a reorganization, merger, sale, joint venture, assignment, transfer, change of control, or other disposition of all or part of our business, assets, or stock, we may share Personal Data with third parties in connection with such transaction. Any other entity that buys us or part of our business will have the right to continue to use your Personal Data, subject to the terms of this Policy.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                <strong>Compliance and Harm Prevention.</strong> We share Personal Data when we believe it is necessary to comply with applicable law; to abide by rules imposed by Financial Partners in connection with the use of their payment method; to enforce our contractual rights; to secure and protect the Services, rights, privacy, safety, and property of Stripe, you, and others, including against malicious or fraudulent activity; and to respond to valid legal requests from courts, law enforcement agencies, regulatory agencies, and other public and government authorities, which may include authorities outside your country of residence.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">3. Legal bases for processing Personal Data</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                For purposes of the General Data Protection Regulation (GDPR) and other applicable data protection laws, we rely on a number of legal bases to process your Personal Data. Learn More. For some jurisdictions, there may be additional legal bases, which are outlined in the Jurisdiction-Specific Provisions section below.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">a. Contractual and Pre-Contractual Business Relationships.</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We process Personal Data to enter into business relationships with prospective Business Users and End Users and fulfill our respective contractual obligations with them. These processing activities include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li>Creation and management of Stripe accounts and Stripe account credentials, including the assessment of applications to initiate or expand the use of our Services;</li>
                <li>Creation and management of Stripe Checkout accounts;</li>
                <li>Accounting, auditing, and billing activities; and</li>
                <li>Processing of payments and related activities, which include fraud detection, loss prevention, transaction optimization, communications about such payments, and related customer service activities.</li>
                </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">b. Legal Compliance.</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We process Personal Data to verify the identities of individuals and entities to comply with obligations related to fraud monitoring, prevention, and detection, laws associated with identifying and reporting illicit and illegal activities, such as those under the Anti-Money Laundering ("AML") and Know-Your-Customer ("KYC") regulations, and financial reporting obligations. For example, we may be required to record and verify a Business User's identity to comply with regulations designed to prevent money laundering, fraud, and financial crimes. These legal obligations may require us to report our compliance to third parties and subject ourselves to third party verification audits.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">c. Legitimate Interests.</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Where permitted under applicable law, we rely on our legitimate business interests to process your Personal Data. The following list provides an example of the business purposes for which we have a legitimate interest in processing your data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li>Detection, monitoring, and prevention of fraud and unauthorized payment transactions.</li>
                <li>Mitigation of financial loss, claims, liabilities or other harm to End Customers, End Users, Business Users, Financial Partners, and Stripe;</li>
                <li>Determination of eligibility for and offering new Stripe Services (Learn More).</li>
                <li>Response to inquiries, delivery of Service notices, and provision of customer support;</li>
                <li>Promotion, analysis, modification, and improvement of our Services, systems, and tools, as well as the development of new products and services, including enhancing the reliability of the Services;</li>
                <li>Management, operation, and improvement of the performance of our Sites and Services, through understanding their effectiveness and optimizing our digital assets;</li>
                <li>Analysis and advertisement of our Services, and related improvements;</li>
                <li>Aggregate analysis and development of business intelligence that enable us to operate, protect, make informed decisions about, and report on the performance of our business;</li>
                <li>Sharing of Personal Data with third party service providers that offer services on our behalf and business partners that help us in operating our business (Learn More).</li>
                <li>Enabling network and information security throughout Stripe and our Services; and</li>
                <li>Sharing of Personal Data among our affiliates.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">d. Consent.</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We may rely on consent or explicit consent to collect and process Personal Data regarding our interactions with you and the provision of our Services such as Link, Financial Connections, Atlas, and Identity. When we process your Personal Data based on your consent, you have the right to withdraw your consent at any time, and such a withdrawal will not impact the legality of processing performed based on the consent prior to its withdrawal.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">e. Substantial Public Interest.</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We may process special categories of Personal Data, as defined by the GDPR, when such processing is necessary for reasons of substantial public interest and consistent with applicable law, such as when we conduct politically-exposed person checks. We may also process Personal Data related to criminal convictions and offenses when such processing is authorized by applicable law, such as when we conduct sanctions screening to comply with AML and KYC obligations.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">f. Other valid legal bases.</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We may process Personal Data further to other valid legal bases as recognized under applicable law in specific jurisdictions. See the Jurisdiction-specific provisions section below for more information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">4. Your rights and choices</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Depending on your location and subject to applicable law, you may have choices regarding our collection, use, and disclosure of your Personal Data:
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">a. Opting out of receiving electronic communications from us</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                If you wish to stop receiving marketing-related emails from us, you can opt-out by clicking the unsubscribe link included in such emails or as described here. We'll try to process your request(s) as quickly as reasonably practicable. However, it's important to note that even if you opt out of receiving marketing-related emails from us, we retain the right to communicate with you about the Services you receive (like support and important legal notices) and our Business Users might still send you messages or instruct us to send you messages on their behalf.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">b. Your data protection rights</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Depending on your location and subject to applicable law, you may have the following rights regarding the Personal Data we process about you as a data controller:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li>The right to request confirmation of whether Stripe is processing Personal Data associated with you, the categories of personal data it has processed, and the third parties or categories of third parties with which your Personal Data is shared;</li>
                <li>The right to request access to the Personal Data Stripe processes about you (Learn More);</li>
                <li>The right to request that Stripe rectify or update your Personal Data if it's inaccurate, incomplete, or outdated;</li>
                <li>The right to request that Stripe erase your Personal Data in certain circumstances as provided by law (Learn More);</li>
                <li>The right to request that Stripe restrict the use of your Personal Data in certain circumstances, such as while Stripe is considering another request you've submitted (for instance, a request that Stripe update your Personal Data);</li>
                <li>The right to request that we export the Personal Data we hold about you to another company, provided it's technically feasible;</li>
                <li>The right to withdraw your consent if your Personal Data is being processed based on your previous consent;</li>
                <li>The right to object to the processing of your Personal Data if we are processing your data based on our legitimate interests; unless there are compelling legitimate grounds or the processing is necessary for legal reasons, we will cease processing your Personal Data upon your request; and</li>
                <li>You may have additional rights, depending on applicable law, over your Personal Data. For example, see the Jurisdiction-specific provisions section under United States below.</li>
                </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">c. Process for exercising your data protection rights</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                To exercise your data protection rights related to Personal Data we process as a data controller, visit our Privacy Center or contact us as outlined below. For Personal Data we process as a data processor, please reach out to the relevant data controller (Business User) to exercise your rights. If you contact us regarding your Personal Data we process as a data processor, we will refer you to the relevant data controller to the extent we are able to identify them.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">5. Security and retention</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We make reasonable efforts to provide a level of security appropriate to the risk associated with the processing of your Personal Data. We maintain organizational, technical, and administrative measures designed to protect the Personal Data covered by this Policy from unauthorized access, destruction, loss, alteration, or misuse. Learn More. Unfortunately, no data transmission or storage system can be guaranteed to be 100% secure.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We encourage you to assist us in protecting your Personal Data. If you hold a Stripe account, you can do so by using a strong password, safeguarding your password against unauthorized use, and avoiding using identical login credentials you use for other services or accounts for your Stripe account. If you suspect that your interaction with us is no longer secure (for instance, you believe that your Stripe account's security has been compromised), please contact us immediately.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We retain your Personal Data for as long as we continue to provide the Services to you or our Business Users, or for a period in which we reasonably foresee continuing to provide the Services. Even after we stop providing Services directly to you or to a Business User that you're doing business with, and even after you close your Stripe account or complete a transaction with a Business User, we may continue to retain your Personal Data to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li>Comply with legal and regulatory obligations.</li>
                <li>For fraud monitoring, detection, and prevention.</li>
                <li>To meet tax, accounting, and financial reporting obligations.</li>
                <li>To resolve disputes and enforce our agreements.</li>
          </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                In cases where we keep your Personal Data, we do so in accordance with any limitation periods and record retention obligations imposed by applicable law. Learn More.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">6. International data transfers</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                As a global business, it's sometimes necessary for us to transfer your Personal Data to countries other than your own, including the United States. These countries might have data protection regulations that are different from those in your country. When transferring data across borders, we take measures to comply with applicable data protection laws related to such transfer. In certain situations, we may be required to disclose Personal Data in response to lawful requests from officials, such as law enforcement or security authorities. Learn More.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                If you are located in the European Economic Area ("EEA"), the United Kingdom ("UK"), or Switzerland, please refer to our Privacy Center for additional details. When a data transfer mechanism is mandated by applicable law, we employ one or more of the following:
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Stripe, Inc. complies with the EU-U.S. Data Privacy Framework ("EU-U.S. DPF"), the UK Extension to the EU-U.S. DPF, and the Swiss-U.S. Data Privacy Framework as set forth by the U.S. Department of Commerce and as applicable. Learn More.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Stripe's privacy practices, as described in this Privacy Policy, comply with the Cross Border Privacy Rules System ("CBPR") and Privacy Rules for Processor ("PRP") systems. These systems provide a framework for organizations to ensure protection of personal data transferred among participating economies. Where CBPR and/or PRP are recognized as a valid transfer mechanism under applicable law, Stripe will transfer Personal Data in accordance with the CBPR and PRP certifications Stripe has obtained. More information about the framework can be found here and here. If you have unresolved privacy or data use concerns that we have not addressed satisfactorily, please contact our U.S. based third-party dispute resolution provider (free of charge) at https://feedback-form.truste.com/watchdog/request. To view the status of our certifications, please click here (CBPR) and here (PRP).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">7. Updates and notifications</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We may change this Policy from time to time to reflect new services, changes in our privacy practices or relevant laws. The "Last updated" legend at the top of this Policy indicates when this Policy was last materially revised. Any changes are effective the latter of when we post the revised Policy on the Services or otherwise provide notice of the update as required by law.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We may provide you with disclosures and alerts regarding the Policy or Personal Data collected by posting them on our website and, if you are an End User or Representative, by contacting you through your Stripe Dashboard, email address and/or the physical address listed in your Stripe account.
              </p>
            </section>

            {/* Section 11: Biometric Data and Facial Recognition Technologies */}
            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Section 11: Biometric Data and Facial Recognition Technologies</h2>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">11.1 Biometric Information Collection and Processing</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We collect, process, and retain biometric identifiers and biometric information ("Biometric Data") for identity verification, fraud prevention, and security purposes in accordance with applicable laws including but not limited to the Illinois Biometric Information Privacy Act (BIPA), Texas Capture or Use of Biometric Identifier Act (CUBI), Washington State's biometric privacy law, California's biometric privacy provisions under CCPA/CPRA, and the EU's GDPR Article 9 special categories of personal data provisions.
              </p>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">a. Types of Biometric Data Collected</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We may collect the following types of Biometric Data:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Facial Geometry Data:</strong> Unique mathematical representations of facial features including distance between eyes, nose width, jawline shape, and other distinctive facial characteristics derived from photographs or video captures.</li>
                <li><strong>Facial Recognition Templates:</strong> Mathematical faceprint templates generated through proprietary algorithms that cannot be reverse-engineered to recreate the original image.</li>
                <li><strong>Liveness Detection Data:</strong> Biometric data captured during liveness checks including micro-expressions, eye movements, depth mapping, and thermal imaging to prevent presentation attacks and spoofing.</li>
                <li><strong>Voice Biometrics:</strong> Voice patterns, pitch, tone, cadence, and other unique vocal characteristics when you interact with our voice-enabled services or customer support.</li>
                <li><strong>Fingerprint Data:</strong> Ridge patterns, minutiae points, and other unique fingerprint characteristics when using fingerprint authentication on compatible devices.</li>
                <li><strong>Iris and Retinal Patterns:</strong> Unique patterns in the colored ring of the eye or blood vessel patterns in the retina for advanced authentication methods.</li>
                <li><strong>Gait Analysis:</strong> Walking patterns and movement characteristics captured through device sensors for continuous authentication.</li>
                <li><strong>Keystroke Dynamics:</strong> Typing patterns including speed, rhythm, and pressure when entering information.</li>
                <li><strong>Behavioral Biometrics:</strong> Mouse movements, touchscreen interaction patterns, device holding angles, and navigation behaviors.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">b. Purposes for Biometric Data Processing</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We process Biometric Data for the following specific purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li>Identity verification and authentication to comply with Know Your Customer (KYC), Anti-Money Laundering (AML), and Customer Due Diligence (CDD) requirements</li>
                <li>Prevention of identity theft, account takeover, and synthetic identity fraud</li>
                <li>Detection of deepfakes, presentation attacks, and other advanced fraud techniques</li>
                <li>Multi-factor authentication and passwordless authentication methods</li>
                <li>Age verification and compliance with age-restricted services regulations</li>
                <li>Continuous authentication throughout user sessions to detect account hijacking</li>
                <li>Dispute resolution and investigation of fraudulent transactions</li>
                <li>Enhancement and improvement of biometric recognition algorithms through machine learning</li>
                <li>Compliance with regulatory requirements including sanctions screening and politically exposed person (PEP) checks</li>
                <li>Provision of accessibility features for users with disabilities</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">c. Consent and Notice Requirements</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                In accordance with applicable biometric privacy laws, we provide clear notice and obtain your informed written consent before collecting Biometric Data. Our consent process includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Written Notice:</strong> Clear, conspicuous written notice that Biometric Data is being collected, captured, or otherwise obtained, including the specific type of biometric identifier or information being collected.</li>
                <li><strong>Purpose Disclosure:</strong> Detailed explanation of the specific purpose and length of term for which Biometric Data is being collected, stored, and used.</li>
                <li><strong>Opt-In Consent:</strong> Affirmative opt-in consent obtained before any collection or use of Biometric Data, with clear ability to decline without negative consequences to basic service access.</li>
                <li><strong>Right to Withdraw:</strong> Clear information about your right to withdraw consent at any time and instructions for doing so.</li>
                <li><strong>Separate Consent:</strong> Consent for biometric collection obtained separately from general terms of service or privacy policy acceptance.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">d. Retention and Destruction of Biometric Data</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We maintain comprehensive retention and destruction schedules for Biometric Data:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Retention Period:</strong> Biometric Data is retained only for the time necessary to fulfill the specific purpose for which it was collected, or as required by applicable law, regulation, or legal obligation. Standard retention periods range from immediate deletion post-verification to a maximum of 3 years for fraud prevention purposes.</li>
                <li><strong>Automatic Deletion:</strong> Systems automatically delete Biometric Data upon: (a) satisfaction of the initial purpose; (b) termination of your relationship with us; (c) expiration of applicable retention periods; or (d) withdrawal of consent.</li>
                <li><strong>Secure Destruction:</strong> Biometric Data is permanently and irreversibly destroyed using industry-standard methods including cryptographic erasure, degaussing, and physical destruction of storage media.</li>
                <li><strong>Destruction Verification:</strong> We maintain auditable records of Biometric Data destruction including timestamps, methods used, and personnel responsible.</li>
                <li><strong>Backup Deletion:</strong> Biometric Data is purged from all backup systems, archives, and disaster recovery systems within 90 days of scheduled deletion from production systems.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">e. Biometric Data Security Measures</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We implement rigorous security measures that meet or exceed the care used to protect other confidential and sensitive information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Encryption in Transit:</strong> All Biometric Data transmitted over networks is encrypted using TLS 1.3 or higher with perfect forward secrecy (PFS) and authenticated encryption algorithms.</li>
                <li><strong>Encryption at Rest:</strong> Biometric Data at rest is encrypted using AES-256 encryption with hardware security modules (HSMs) for key management, meeting FIPS 140-2 Level 3 standards.</li>
                <li><strong>Tokenization:</strong> Original biometric images and raw data are immediately tokenized or converted to irreversible mathematical templates, with original data securely destroyed.</li>
                <li><strong>Access Controls:</strong> Strict role-based access controls (RBAC) with multi-factor authentication required for any personnel access to systems containing Biometric Data.</li>
                <li><strong>Segregation:</strong> Biometric Data stored in isolated, segregated databases with dedicated encryption keys separate from other personal data.</li>
                <li><strong>Monitoring:</strong> Continuous monitoring and logging of all access to Biometric Data with real-time anomaly detection and automated alerting.</li>
                <li><strong>Security Audits:</strong> Regular third-party security audits, penetration testing, and vulnerability assessments specifically focused on biometric systems.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">f. Prohibition on Sale or Profit from Biometric Data</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We strictly prohibit the sale, lease, trade, or other profit from Biometric Data. Specifically:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li>We will never sell, lease, or trade your Biometric Data to third parties</li>
                <li>We will never profit from or receive monetary consideration in exchange for Biometric Data</li>
                <li>Third-party service providers processing Biometric Data on our behalf are contractually prohibited from retaining, using, or disclosing Biometric Data except as necessary to perform services for us</li>
                <li>Biometric Data is never used for marketing, advertising, or commercial purposes unrelated to the specific purpose for which consent was obtained</li>
                <li>We do not include Biometric Data in any data sets sold, licensed, or monetized for secondary purposes</li>
          </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">g. Third-Party Disclosure of Biometric Data</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We may disclose Biometric Data to third parties only in the following limited circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Service Providers:</strong> Biometric Data may be disclosed to service providers who perform biometric authentication, liveness detection, or fraud prevention services on our behalf, subject to strict contractual confidentiality and data protection obligations.</li>
                <li><strong>Legal Compliance:</strong> Disclosure required by law, regulation, legal process, or government request, including law enforcement requests with proper legal authority.</li>
                <li><strong>Fraud Prevention:</strong> Disclosure to financial institutions, payment networks, or fraud prevention services when necessary to investigate or prevent fraudulent transactions.</li>
                <li><strong>Business Transfers:</strong> In the event of merger, acquisition, or sale of assets, Biometric Data may be transferred subject to the acquirer's commitment to honor this privacy policy or obtain new consent.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">h. Your Rights Regarding Biometric Data</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">You have specific rights regarding your Biometric Data under applicable laws:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Right to Withdraw Consent:</strong> You may withdraw your consent for biometric collection and processing at any time by contacting us at privacy@company.com. Withdrawal will not affect the lawfulness of processing before withdrawal.</li>
                <li><strong>Right to Deletion:</strong> You may request deletion of your Biometric Data at any time. We will permanently delete your Biometric Data within 30 days unless retention is required by law.</li>
                <li><strong>Right to Access:</strong> You may request information about what Biometric Data we have collected, how it is being used, and with whom it has been shared.</li>
                <li><strong>Right to Object:</strong> You may object to the processing of your Biometric Data for specific purposes and request alternative verification methods.</li>
                <li><strong>Right to Rectification:</strong> You may request correction of inaccurate Biometric Data, though in most cases we will need to recapture biometric information rather than modify existing data.</li>
                <li><strong>Right to Restrict Processing:</strong> You may request that we restrict processing of your Biometric Data while we investigate concerns you have raised.</li>
                <li><strong>Right to Data Portability:</strong> Where technically feasible, you may request a copy of your Biometric Data in a structured, commonly used format.</li>
                <li><strong>Private Right of Action:</strong> In jurisdictions providing private rights of action for biometric privacy violations (such as Illinois BIPA), you may have the right to seek damages for violations.</li>
          </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">i. Biometric Data Breach Notification</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                In the event of a breach involving Biometric Data, we will provide expedited notification in accordance with or exceeding legal requirements:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li>Notice to affected individuals within 72 hours of breach discovery, or sooner if required by applicable law</li>
                <li>Notification to relevant supervisory authorities and data protection agencies as required</li>
                <li>Detailed information about the nature of the breach, types of Biometric Data affected, and measures taken to mitigate harm</li>
                <li>Provision of identity theft protection services, credit monitoring, or other appropriate remedial measures at no cost to affected individuals</li>
                <li>Establishment of dedicated support channels for affected individuals to ask questions and receive assistance</li>
          </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">j. Jurisdiction-Specific Biometric Privacy Provisions</h4>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Illinois (BIPA):</strong> For Illinois residents, we comply with all BIPA requirements including written release, prohibition on profiting from biometric data, retention schedule publication, and reasonable care standard exceeding other confidential information.</li>
                <li><strong>Texas (CUBI):</strong> For Texas residents, we comply with CUBI requirements including consent for capture or disclosure, prohibition on sale, and notification of breach.</li>
                <li><strong>Washington:</strong> For Washington residents, we comply with state biometric privacy law including consent requirements and prohibition on enrollment without consent.</li>
                <li><strong>California (CCPA/CPRA):</strong> For California residents, biometric information is treated as sensitive personal information subject to additional protections including opt-in consent for sensitive data uses.</li>
                <li><strong>European Union (GDPR):</strong> For EU residents, biometric data is treated as a special category of personal data under Article 9, requiring explicit consent and additional safeguards.</li>
              </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed mt-4">
                For questions about our biometric data practices or to exercise your rights, contact us at biometrics@company.com or submit a request through our Privacy Center.
              </p>
            </section>
            
            {/* Section 12: Artificial Intelligence and Machine Learning Processing */}
            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Section 12: Artificial Intelligence and Machine Learning Processing</h2>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">12.1 AI-Powered Services and Automated Decision-Making</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We deploy advanced artificial intelligence (AI), machine learning (ML), deep learning, neural networks, and automated decision-making systems to provide, enhance, and secure our Services. This section provides comprehensive transparency about our AI/ML practices in accordance with GDPR Article 22, California's Automated Decision-Making Technology (ADMT) Accountability Act, the EU AI Act, and other emerging AI governance frameworks.
              </p>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">a. Types of AI/ML Systems Deployed</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We utilize the following categories of AI/ML systems:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Fraud Detection Models:</strong> Supervised and unsupervised machine learning models analyzing transaction patterns, user behavior, device fingerprints, and network analysis to detect fraudulent activities, account takeover attempts, and financial crimes in real-time.</li>
                <li><strong>Risk Scoring Systems:</strong> Ensemble models combining gradient boosting, random forests, and neural networks to assess credit risk, transaction risk, merchant risk, and compliance risk with confidence scores and explainability features.</li>
                <li><strong>Natural Language Processing (NLP):</strong> Large language models (LLMs) and transformer-based architectures for customer support automation, sentiment analysis, contract analysis, policy interpretation, and multilingual communication.</li>
                <li><strong>Computer Vision Systems:</strong> Convolutional neural networks (CNNs) for identity document verification, facial recognition, liveness detection, object detection, and optical character recognition (OCR).</li>
                <li><strong>Recommendation Engines:</strong> Collaborative filtering and content-based recommendation systems suggesting payment methods, financial products, and service features personalized to user preferences and behavior.</li>
                <li><strong>Predictive Analytics:</strong> Time-series forecasting models predicting transaction volumes, fraud trends, customer churn, revenue forecasting, and resource allocation optimization.</li>
                <li><strong>Anomaly Detection:</strong> Unsupervised learning algorithms including isolation forests, autoencoders, and one-class SVMs detecting unusual patterns indicating fraud, security threats, or system failures.</li>
                <li><strong>Reinforcement Learning Systems:</strong> RL agents optimizing dynamic pricing, fraud prevention strategies, customer engagement timing, and operational efficiency.</li>
                <li><strong>Generative AI:</strong> Generative adversarial networks (GANs), variational autoencoders (VAEs), and foundation models for synthetic data generation, data augmentation, and testing purposes (never for creating misleading content).</li>
                <li><strong>Autonomous Decision Systems:</strong> Automated systems making decisions about transaction approvals, account suspensions, verification requirements, and risk categorizations with varying degrees of human oversight.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">b. Automated Decision-Making with Legal or Similarly Significant Effects</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We employ automated decision-making systems that may produce legal or similarly significant effects. You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Right to Human Review:</strong> Request human review of automated decisions affecting you, including account suspensions, transaction declinations, application denials, and risk categorizations.</li>
                <li><strong>Right to Explanation:</strong> Receive meaningful information about the logic involved in automated decision-making, including key factors influencing the decision and their relative importance.</li>
                <li><strong>Right to Contest:</strong> Challenge automated decisions and provide additional context or evidence for reconsideration.</li>
                <li><strong>Right to Opt-Out:</strong> Where legally required, opt out of certain automated decision-making processes in favor of human decision-making.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">c. AI Model Training and Personal Data Usage</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We use Personal Data for AI/ML model training and improvement under the following conditions:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Data Minimization:</strong> We collect and use only the minimum Personal Data necessary for model training, employing privacy-preserving techniques including federated learning, differential privacy, and data anonymization.</li>
                <li><strong>Synthetic Data:</strong> Where possible, we generate synthetic data using GANs and other generative models that preserve statistical properties without containing actual Personal Data.</li>
                <li><strong>Federated Learning:</strong> Models trained across decentralized devices without centralizing Personal Data, keeping raw data on-device while only sharing encrypted model updates.</li>
                <li><strong>Differential Privacy:</strong> Mathematical guarantees added to training data and model outputs ensuring individual records cannot be identified or reconstructed from model behavior.</li>
                <li><strong>Homomorphic Encryption:</strong> Training models on encrypted data without decryption, enabling computation on encrypted Personal Data while maintaining privacy.</li>
                <li><strong>Secure Multi-Party Computation:</strong> Collaborative model training across organizations without sharing underlying Personal Data.</li>
                <li><strong>Data Compartmentalization:</strong> Training data segregated into isolated environments with strict access controls and encryption, separate from production systems.</li>
                <li><strong>Right to Opt-Out:</strong> You may opt out of having your Personal Data used for AI model training, subject to legitimate business and security needs.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">d. AI Bias Mitigation and Fairness</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We implement comprehensive bias detection and mitigation strategies:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Fairness Audits:</strong> Regular algorithmic audits assessing disparate impact across protected characteristics including race, ethnicity, gender, age, disability status, religion, national origin, and other protected classes under applicable anti-discrimination laws.</li>
                <li><strong>Fairness Metrics:</strong> Quantitative assessment using metrics including demographic parity, equalized odds, equal opportunity, calibration, and individual fairness measures.</li>
                <li><strong>Bias Correction:</strong> Implementation of pre-processing (data reweighting, resampling), in-processing (fairness constraints, adversarial debiasing), and post-processing (threshold optimization) techniques.</li>
                <li><strong>Diverse Training Data:</strong> Curation of representative training datasets reflecting diverse populations and edge cases, with oversampling of underrepresented groups.</li>
                <li><strong>Protected Attribute Handling:</strong> Careful handling of protected attributes, ensuring they are not used as direct features while monitoring for proxy variables that correlate with protected classes.</li>
                <li><strong>Intersectionality Analysis:</strong> Evaluation of model performance across intersectional groups (e.g., race × gender × age) to identify compound bias effects.</li>
                <li><strong>Third-Party Audits:</strong> Engagement of independent fairness auditors and civil rights organizations to review AI systems for bias and discrimination.</li>
                <li><strong>Continuous Monitoring:</strong> Real-time monitoring of model predictions in production for fairness drift and emergent biases.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">e. Explainable AI (XAI) and Transparency</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We prioritize AI explainability and transparency through:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Model Interpretability:</strong> Use of inherently interpretable models (decision trees, linear models, rule-based systems) where high-stakes decisions are made.</li>
                <li><strong>SHAP Values:</strong> SHapley Additive exPlanations providing consistent, locally accurate feature importance explanations for individual predictions.</li>
                <li><strong>LIME:</strong> Local Interpretable Model-agnostic Explanations generating human-understandable explanations for black-box model predictions.</li>
                <li><strong>Counterfactual Explanations:</strong> Providing "what-if" scenarios showing how changes to inputs would alter model predictions.</li>
                <li><strong>Feature Importance Rankings:</strong> Clear disclosure of which data features most influence model decisions, with relative importance scores.</li>
                <li><strong>Decision Pathways:</strong> Visual representations of decision logic paths through ensemble models and neural networks.</li>
                <li><strong>Confidence Scores:</strong> Transparent display of model confidence levels, with higher scrutiny applied to low-confidence predictions.</li>
                <li><strong>Model Cards:</strong> Comprehensive model documentation including intended use, training data characteristics, performance metrics, limitations, and fairness evaluations.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">f. AI Safety and Security Measures</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We implement rigorous AI safety and security controls:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Adversarial Robustness:</strong> Testing models against adversarial attacks including evasion attacks, poisoning attacks, model inversion, and membership inference attacks.</li>
                <li><strong>Input Validation:</strong> Rigorous validation and sanitization of inputs to prevent prompt injection, jailbreaking, and other manipulation techniques.</li>
                <li><strong>Output Filtering:</strong> Multi-layer filtering systems preventing generation or disclosure of harmful, illegal, or privacy-violating content.</li>
                <li><strong>Model Monitoring:</strong> Continuous monitoring for model drift, performance degradation, distribution shift, and anomalous behavior.</li>
                <li><strong>Rollback Capabilities:</strong> Ability to instantly rollback to previous model versions if safety or performance issues are detected.</li>
                <li><strong>Circuit Breakers:</strong> Automated kill switches stopping model deployment if safety thresholds are exceeded.</li>
                <li><strong>Red Team Testing:</strong> Regular adversarial testing by internal and external security researchers attempting to break AI systems.</li>
                <li><strong>Model Governance:</strong> Formal review boards assessing AI system deployments for safety, fairness, and compliance before production release.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">g. Third-Party AI Services and Data Sharing</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We may utilize third-party AI services (such as OpenAI, Google Cloud AI, Amazon AWS AI, Microsoft Azure AI) subject to strict data protection requirements:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Data Processing Agreements:</strong> All third-party AI providers are bound by comprehensive DPAs ensuring GDPR compliance, data confidentiality, and limited data retention.</li>
                <li><strong>No Training on Customer Data:</strong> Contractual prohibitions preventing third-party AI providers from using your Personal Data to train their general-purpose models.</li>
                <li><strong>Data Minimization:</strong> Only minimum necessary data shared with third-party AI services, with pre-processing to remove or pseudonymize identifiers.</li>
                <li><strong>Vendor Assessment:</strong> Rigorous security and privacy assessments of third-party AI providers including audits, certifications, and contractual safeguards.</li>
                <li><strong>Data Localization:</strong> Use of region-specific AI services to maintain data within required geographic boundaries.</li>
                <li><strong>Audit Rights:</strong> Reserved rights to audit third-party AI providers' data practices and security controls.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">h. AI-Generated Content Disclosure</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">When AI systems generate content that you interact with, we provide clear disclosure:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li>Customer support responses generated or assisted by AI are clearly labeled as such</li>
                <li>AI-generated summaries, recommendations, or insights are marked to distinguish from human-created content</li>
                <li>Synthetic or AI-augmented images, videos, or audio are watermarked and disclosed</li>
                <li>Chatbot and virtual assistant interactions clearly identify the AI nature of the interaction</li>
                <li>You may request escalation to human support agents at any time during AI interactions</li>
            </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">i. Emerging AI Technologies and Future-Proofing</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We monitor and prepare for emerging AI technologies:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Artificial General Intelligence (AGI):</strong> Monitoring developments in AGI with commitment to responsible deployment practices and enhanced safety protocols if AGI capabilities emerge.</li>
                <li><strong>Quantum Machine Learning:</strong> Preparing for quantum-enhanced ML algorithms with quantum-resistant security measures (see Quantum Computing section).</li>
                <li><strong>Neuromorphic Computing:</strong> Evaluating brain-inspired computing architectures with enhanced privacy and security considerations.</li>
                <li><strong>Edge AI:</strong> Deploying on-device AI processing to enhance privacy by minimizing data transmission to cloud servers.</li>
                <li><strong>AI Regulation Compliance:</strong> Proactive compliance with emerging AI regulations including EU AI Act, proposed US federal AI legislation, and sector-specific AI governance frameworks.</li>
            </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">j. Your AI-Related Rights and Choices</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">You have specific rights regarding AI processing of your Personal Data:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Right to Know:</strong> Request information about what AI systems process your data, for what purposes, and with what automated decision-making logic.</li>
                <li><strong>Right to Meaningful Explanation:</strong> Receive human-understandable explanations of automated decisions affecting you.</li>
                <li><strong>Right to Human Review:</strong> Request that automated decisions be reviewed and overridden by human decision-makers.</li>
                <li><strong>Right to Object:</strong> Object to AI processing of your Personal Data for specific purposes, including profiling and automated decision-making.</li>
                <li><strong>Right to Opt-Out of Training:</strong> Opt out of having your Personal Data used to train or improve AI models, subject to legitimate business needs.</li>
                <li><strong>Right to Correction:</strong> Correct inaccurate Personal Data used by AI systems, triggering model retraining or recalibration if necessary.</li>
                <li><strong>Right to Deletion:</strong> Request deletion of Personal Data from AI training datasets and model parameters where technically feasible.</li>
            </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed mt-4">
                To exercise your AI-related rights or ask questions about our AI practices, contact our AI Ethics and Governance team at ai-ethics@company.com or submit a request through our AI Transparency Center.
              </p>
          </section>

            {/* Section 13: Quantum Computing and Post-Quantum Cryptography */}
            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Section 13: Quantum Computing and Post-Quantum Cryptography</h2>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">13.1 Quantum Threat Assessment and Preparedness</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We recognize the emerging threat that large-scale quantum computers pose to current cryptographic systems and are implementing comprehensive quantum-resistant security measures to protect your Personal Data against both current and future quantum computing capabilities, including "harvest now, decrypt later" attacks where adversaries collect encrypted data today with the intent to decrypt it when quantum computers become available.
              </p>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">a. Post-Quantum Cryptography (PQC) Implementation</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We are transitioning to quantum-resistant cryptographic algorithms:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>NIST PQC Standards:</strong> Implementation of NIST-standardized post-quantum cryptographic algorithms including CRYSTALS-Kyber (key encapsulation), CRYSTALS-Dilithium (digital signatures), and SPHINCS+ (hash-based signatures) as primary cryptographic primitives for data protection.</li>
                <li><strong>Hybrid Cryptography:</strong> Deployment of hybrid encryption schemes combining classical algorithms (RSA-4096, ECC-384) with post-quantum algorithms to provide security against both classical and quantum attacks during the transition period.</li>
                <li><strong>Lattice-Based Cryptography:</strong> Utilization of lattice-based schemes including Learning With Errors (LWE), Ring-LWE, and Module-LWE constructions resistant to known quantum algorithms including Shor's algorithm and Grover's algorithm.</li>
                <li><strong>Code-Based Cryptography:</strong> Implementation of error-correcting code-based systems such as Classic McEliece for specific high-security applications.</li>
                <li><strong>Hash-Based Signatures:</strong> Deployment of stateful (XMSS, LMS) and stateless (SPHINCS+) hash-based signature schemes for long-term data integrity.</li>
                <li><strong>Multivariate Cryptography:</strong> Evaluation and selective deployment of multivariate polynomial-based schemes for specialized applications.</li>
                <li><strong>Isogeny-Based Cryptography:</strong> Monitoring developments in supersingular isogeny-based protocols (SIKE successors) for potential future deployment.</li>
            </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">b. Quantum-Safe Key Management</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">Our key management infrastructure is being enhanced with quantum-resistant capabilities:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Quantum Random Number Generators (QRNG):</strong> Integration of quantum-based true random number generators producing cryptographically secure random numbers with quantum-certified entropy for key generation.</li>
                <li><strong>Quantum Key Distribution (QKD):</strong> Evaluation and pilot deployment of QKD protocols (BB84, E91) for secure key exchange between geographically distributed data centers, providing information-theoretic security.</li>
                <li><strong>Post-Quantum Hardware Security Modules:</strong> Deployment of next-generation HSMs supporting post-quantum algorithms with quantum-resistant key storage and cryptographic operations.</li>
                <li><strong>Crypto-Agility Architecture:</strong> Implementation of algorithm-agnostic cryptographic architecture enabling rapid algorithm replacement without system redesign as quantum threats evolve.</li>
                <li><strong>Key Rotation Protocols:</strong> Accelerated key rotation schedules with automated migration to post-quantum algorithms, reducing exposure window for "harvest now, decrypt later" attacks.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">c. Quantum-Resistant Data Protection</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We implement layered quantum-resistant protection for Personal Data:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Re-Encryption Programs:</strong> Systematic re-encryption of historically encrypted data using post-quantum algorithms to protect against retroactive decryption by future quantum computers.</li>
                <li><strong>Quantum-Safe TLS:</strong> Deployment of post-quantum TLS 1.3 configurations for all data in transit, utilizing hybrid key exchange mechanisms combining classical and post-quantum algorithms.</li>
                <li><strong>Long-Term Archive Encryption:</strong> Special quantum-resistant encryption schemes for archived data intended for long-term retention (10+ years), assuming quantum computer availability within data retention period.</li>
                <li><strong>Blockchain and Distributed Ledger:</strong> Transition of any blockchain-based systems to quantum-resistant consensus mechanisms and digital signature schemes.</li>
                <li><strong>Quantum-Resistant Backups:</strong> All backup systems utilize post-quantum encryption with multiple algorithm diversity to ensure recoverability even if specific algorithms are compromised.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">d. Quantum Computing Applications and Benefits</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">While preparing defenses against quantum threats, we are also exploring beneficial quantum computing applications:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Quantum Machine Learning:</strong> Research into quantum-enhanced ML algorithms for fraud detection, risk analysis, and optimization problems while maintaining privacy through quantum-secure data handling.</li>
                <li><strong>Quantum Optimization:</strong> Utilization of quantum annealers and gate-based quantum computers for portfolio optimization, resource allocation, and route optimization, processing only anonymized or aggregated data.</li>
                <li><strong>Quantum-Safe Secure Computation:</strong> Development of quantum-secure multi-party computation protocols enabling privacy-preserving collaborative analytics.</li>
                <li><strong>Quantum-Enhanced Privacy:</strong> Exploration of quantum technologies for enhanced privacy protection including quantum-secure distributed computing and quantum anonymous communication.</li>
            </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">e. Quantum Threat Monitoring and Intelligence</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We maintain active quantum threat monitoring and intelligence capabilities:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Quantum Capability Tracking:</strong> Continuous monitoring of quantum computing advancements including qubit counts, error rates, gate fidelities, and coherence times from academic research, government programs, and commercial quantum computing companies.</li>
                <li><strong>Q-Day Estimation:</strong> Regular assessment of estimated timeline to "Q-Day" (when quantum computers can break current cryptography) informing migration schedules and risk assessments.</li>
                <li><strong>Cryptographic Bill of Materials:</strong> Comprehensive inventory of all cryptographic algorithms deployed across systems, enabling rapid identification of quantum-vulnerable components.</li>
                <li><strong>Quantum-Readiness Assessments:</strong> Regular assessments of organizational quantum readiness across infrastructure, applications, and third-party dependencies.</li>
                <li><strong>Standards Participation:</strong> Active participation in NIST post-quantum cryptography standardization, IETF quantum-safe protocols, and industry consortia developing quantum-resistant solutions.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">f. Quantum Migration Roadmap and Timeline</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">Our phased quantum migration roadmap:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Phase 1 (Current - 2025):</strong> Inventory of cryptographic systems, pilot implementations of hybrid cryptography, deployment of quantum random number generators, and re-encryption of highest-sensitivity long-term data.</li>
                <li><strong>Phase 2 (2025 - 2027):</strong> Broad deployment of hybrid post-quantum/classical cryptography across all systems, migration of all TLS to quantum-safe configurations, and implementation of post-quantum digital signatures for high-value transactions.</li>
                <li><strong>Phase 3 (2027 - 2030):</strong> Complete migration to pure post-quantum cryptography for all systems, decommissioning of classical-only algorithms, and full quantum-resistant infrastructure deployment.</li>
                <li><strong>Phase 4 (2030+):</strong> Continuous monitoring and algorithm updates as quantum computing capabilities evolve and new post-quantum standards emerge.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">g. Third-Party Quantum Readiness Requirements</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We require quantum readiness from our service providers and partners:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li>All third-party service providers handling Personal Data must maintain quantum migration roadmaps aligned with industry best practices</li>
                <li>Cloud service providers must support post-quantum cryptographic algorithms and provide quantum-safe key management services</li>
                <li>Payment networks and financial partners must demonstrate quantum readiness for payment processing and settlement systems</li>
                <li>Software vendors must provide quantum-safe versions of cryptographic libraries and security components</li>
                <li>Regular audits verify third-party compliance with quantum preparedness requirements</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">h. Quantum Computing Privacy Considerations</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">Beyond cryptographic security, we address quantum-specific privacy risks:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Quantum De-anonymization Risks:</strong> Assessment of quantum algorithms' potential to de-anonymize pseudonymized data through enhanced pattern matching and optimization capabilities.</li>
                <li><strong>Quantum-Enhanced Privacy Attacks:</strong> Preparation for quantum-accelerated attacks on differential privacy, k-anonymity, and other privacy-preserving techniques.</li>
                <li><strong>Side-Channel Resistance:</strong> Development of post-quantum algorithms resistant to quantum-specific side-channel attacks including quantum timing and power analysis.</li>
                <li><strong>Quantum Access Controls:</strong> If quantum computing services are utilized, implementation of strict access controls and auditing for any Personal Data processed on quantum systems.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">i. User Communication and Transparency</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We commit to transparent communication about quantum preparedness:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li>Regular updates on quantum migration progress through annual transparency reports</li>
                <li>Advance notice of major cryptographic algorithm changes that may impact user experience</li>
                <li>Educational resources explaining quantum threats and our protective measures</li>
                <li>Notification if historical encrypted data is re-encrypted with post-quantum algorithms</li>
                <li>Proactive disclosure if any quantum-vulnerable cryptography remains in use with associated risk assessments</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">j. Quantum Incident Response</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">Our quantum-specific incident response procedures:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Cryptographic Break Detection:</strong> Continuous monitoring for signs of successful quantum attacks on cryptographic systems including anomalous decryption patterns.</li>
                <li><strong>Emergency Algorithm Migration:</strong> Pre-planned emergency procedures for rapid algorithm replacement if quantum breakthroughs threaten current cryptography sooner than anticipated.</li>
                <li><strong>Quantum Breach Notification:</strong> Enhanced notification procedures if Personal Data is compromised through quantum computing attacks, including assessment of historical data exposure.</li>
                <li><strong>Retroactive Protection:</strong> Protocols for retroactive protection measures if previously encrypted data is at risk from quantum decryption.</li>
              </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed mt-4">
                For questions about our quantum computing preparedness or to request additional information about quantum-safe measures protecting your Personal Data, contact our Quantum Security Team at quantum-security@company.com or visit our Quantum Readiness Center.
              </p>
          </section>

            {/* Section 14: Blockchain, Cryptocurrency, and Web3 Technologies */}
            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Section 14: Blockchain, Cryptocurrency, and Web3 Technologies</h2>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">14.1 Blockchain and Distributed Ledger Technology (DLT) Data Processing</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                When you interact with blockchain-based services, cryptocurrency transactions, non-fungible tokens (NFTs), decentralized finance (DeFi) protocols, or other Web3 technologies through our platform, we collect and process specific categories of data subject to unique privacy considerations inherent to immutable, decentralized systems.
              </p>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">a. Blockchain Data Collection and On-Chain Privacy</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">Blockchain transactions create permanent, public records with unique privacy implications:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Wallet Addresses:</strong> Public blockchain addresses (Ethereum, Bitcoin, Polygon, etc.) associated with your account, which serve as pseudonymous identifiers but may be linkable to your identity through transaction patterns, address clustering, or off-chain data correlations.</li>
                <li><strong>Transaction Data:</strong> On-chain transaction records including sender/receiver addresses, amounts, timestamps, gas fees, smart contract interactions, token transfers, and transaction metadata permanently recorded on immutable public ledgers.</li>
                <li><strong>Smart Contract Interactions:</strong> Records of your interactions with decentralized applications (dApps), DeFi protocols, NFT marketplaces, and automated market makers (AMMs) including function calls, parameters, and emitted events.</li>
                <li><strong>NFT Ownership and Metadata:</strong> Records of NFT ownership, minting, transfers, and associated metadata including IPFS hashes, token URIs, and provenance history.</li>
                <li><strong>DeFi Activity:</strong> Lending, borrowing, staking, liquidity provision, yield farming, and governance participation recorded on-chain with publicly visible positions and returns.</li>
          </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">b. Immutability and Right to Erasure Considerations</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">Blockchain's immutable nature creates unique challenges for privacy rights, particularly the GDPR "right to be forgotten":</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Technical Immutability:</strong> Once data is recorded on a public blockchain, it cannot be deleted or modified due to the fundamental design of distributed consensus systems and cryptographic hash chains.</li>
                <li><strong>Off-Chain Data Management:</strong> We minimize Personal Data stored on-chain, maintaining identifiable information in off-chain databases where deletion rights can be fully exercised.</li>
                <li><strong>Pseudonymization:</strong> Only pseudonymous wallet addresses and transaction hashes are stored on-chain, never directly identifiable personal information (name, email, address, etc.).</li>
                <li><strong>Address Delink Protocol:</strong> Upon deletion request, we permanently delete all mappings between your identity and blockchain addresses in our systems, rendering on-chain data effectively anonymous.</li>
                <li><strong>Zero-Knowledge Proofs:</strong> Where feasible, implementation of ZK-SNARKs, ZK-STARKs, and other zero-knowledge cryptography to prove transaction validity without revealing Personal Data on-chain.</li>
                <li><strong>Private Blockchains:</strong> Use of permissioned blockchain networks with access controls and data governance for sensitive business applications where required.</li>
          </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">c. Cryptocurrency Transaction Processing</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">When processing cryptocurrency payments or transfers, we collect and process:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Wallet Information:</strong> Cryptocurrency wallet addresses, public keys, wallet type (custodial, non-custodial, hardware, software), and wallet provider information.</li>
                <li><strong>Transaction Details:</strong> Cryptocurrency type (BTC, ETH, USDC, etc.), transaction amounts, network fees, confirmation status, block numbers, and transaction identifiers (TxHash).</li>
                <li><strong>Exchange Rate Data:</strong> Fiat-to-crypto exchange rates at transaction time, conversion calculations, and price volatility risk assessments.</li>
                <li><strong>AML/KYC Compliance:</strong> Enhanced due diligence for cryptocurrency transactions including source of funds analysis, transaction monitoring, sanctions screening, and Chainalysis reports for high-risk transactions.</li>
                <li><strong>Privacy Coin Handling:</strong> Special procedures for privacy-focused cryptocurrencies (Monero, Zcash) including enhanced risk assessment and regulatory compliance measures.</li>
          </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">d. Decentralized Identity and Self-Sovereign Identity (SSI)</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We support decentralized identity standards and self-sovereign identity principles:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Decentralized Identifiers (DIDs):</strong> Support for W3C DID standard enabling user-controlled, blockchain-anchored identities that you own and manage independently.</li>
                <li><strong>Verifiable Credentials:</strong> Issuance and verification of cryptographically-signed credentials allowing selective disclosure of identity attributes without centralized authority.</li>
                <li><strong>Ethereum Name Service (ENS) / Blockchain Names:</strong> Support for human-readable blockchain names (yourname.eth) with associated metadata and reverse resolution capabilities.</li>
                <li><strong>Soulbound Tokens (SBTs):</strong> Non-transferable NFTs representing identity, credentials, affiliations, or reputation in decentralized ecosystems.</li>
                <li><strong>Decentralized Authentication:</strong> Support for Web3 wallet-based authentication (Sign-In with Ethereum, WalletConnect) as alternative to traditional username/password systems.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">e. Blockchain Analytics and Transaction Monitoring</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We employ blockchain analytics for security, compliance, and fraud prevention:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Transaction Tracing:</strong> Analysis of blockchain transaction flows to identify sources of funds, ultimate beneficiaries, and intermediary addresses using graph analysis and clustering algorithms.</li>
                <li><strong>Risk Scoring:</strong> Address-level risk assessment identifying connections to sanctioned entities, darknet markets, mixing services, stolen funds, ransomware payments, and other illicit activity.</li>
                <li><strong>Third-Party Analytics:</strong> Use of blockchain intelligence providers (Chainalysis, Elliptic, TRM Labs, CipherTrace) for compliance screening and investigations, subject to strict data processing agreements.</li>
                <li><strong>Travel Rule Compliance:</strong> Collection and exchange of customer information for cryptocurrency transfers exceeding regulatory thresholds (typically $1,000) in compliance with FATF Travel Rule requirements.</li>
                <li><strong>Mixer/Tumbler Detection:</strong> Identification of funds originating from cryptocurrency mixing services, CoinJoin transactions, or other privacy-enhancing technologies requiring enhanced due diligence.</li>
          </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">f. Smart Contract Privacy and Security</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">When deploying or interacting with smart contracts:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Privacy-Preserving Smart Contracts:</strong> Implementation of confidential transactions, private state channels, and encrypted on-chain storage where sensitive data must exist on-chain.</li>
                <li><strong>Oracle Privacy:</strong> When using blockchain oracles (Chainlink, Band Protocol) to bring off-chain data on-chain, data minimization and privacy-preserving oracle architectures.</li>
                <li><strong>Upgradeable Contracts:</strong> Use of proxy patterns and upgradeable contract architecture allowing privacy policy enforcement changes without blockchain immutability constraints.</li>
                <li><strong>Emergency Pause Mechanisms:</strong> Admin functions enabling contract pausing or data access restriction in event of security incidents or privacy violations.</li>
                <li><strong>Security Audits:</strong> Third-party smart contract security audits identifying vulnerabilities, including privacy leakage through event logs or public state variables.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">g. Web3 Wallet Connections and Permissions</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">When you connect Web3 wallets to our services:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Wallet Connection Protocols:</strong> Support for WalletConnect, MetaMask, Coinbase Wallet, and other Web3 wallet connection standards with explicit permission requests.</li>
                <li><strong>Permission Scoping:</strong> Granular permission controls allowing you to grant only necessary access (view addresses, propose transactions, sign messages) without exposing private keys.</li>
                <li><strong>Session Management:</strong> Temporary, revocable wallet connection sessions with automatic expiration and clear disconnection procedures.</li>
                <li><strong>Multi-Chain Support:</strong> Handling of multi-chain wallet configurations with chain-specific permission models (Ethereum, Polygon, BSC, Avalanche, Solana, etc.).</li>
                <li><strong>Transaction Simulation:</strong> Pre-transaction simulation showing expected outcomes before signature request, protecting against malicious contract interactions.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">h. Decentralized Storage and IPFS</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">When utilizing decentralized storage systems:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>IPFS Privacy:</strong> InterPlanetary File System (IPFS) content addressed by cryptographic hashes is public and persistent; we never store unencrypted Personal Data on public IPFS gateways.</li>
                <li><strong>Client-Side Encryption:</strong> All sensitive data encrypted client-side before IPFS upload, with encryption keys managed separately and securely.</li>
                <li><strong>Pinning Services:</strong> Use of pinning services (Pinata, Infura, Fleek) to ensure data availability while maintaining control over data persistence and potential removal.</li>
                <li><strong>Private IPFS Networks:</strong> Deployment of private IPFS clusters for business-sensitive data requiring access controls and data governance.</li>
                <li><strong>Filecoin and Arweave:</strong> When using permanent storage solutions (Arweave) or decentralized storage markets (Filecoin), clear disclosure of data permanence and encryption requirements.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">i. Regulatory Compliance for Digital Assets</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We maintain compliance with evolving cryptocurrency and digital asset regulations:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Virtual Asset Service Provider (VASP) Requirements:</strong> Compliance with FATF guidance for virtual asset service providers including Travel Rule implementation and enhanced due diligence.</li>
                <li><strong>Securities Law Compliance:</strong> Analysis of digital assets for securities characteristics under Howey Test and compliance with applicable securities regulations.</li>
                <li><strong>MiCA Compliance (EU):</strong> Preparation for EU Markets in Crypto-Assets Regulation including issuer disclosure requirements and consumer protection standards.</li>
                <li><strong>Stablecoin Regulations:</strong> Enhanced reserves disclosure and audit requirements for stablecoin-related services.</li>
                <li><strong>Tax Reporting:</strong> Cryptocurrency transaction reporting to tax authorities as required (IRS Form 1099-B, international equivalents) with user notification of reporting obligations.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">j. Your Rights in Blockchain Context</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">Your privacy rights apply with blockchain-specific considerations:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Right to Erasure (Modified):</strong> We will delete all off-chain linkages between your identity and blockchain addresses, rendering on-chain data pseudonymous and unattributable to you, though blockchain records themselves cannot be deleted.</li>
                <li><strong>Right to Access:</strong> Full disclosure of what blockchain addresses we associate with your identity and transaction history across all supported networks.</li>
                <li><strong>Right to Data Portability:</strong> Export of your blockchain transaction history, wallet information, and associated metadata in machine-readable formats.</li>
                <li><strong>Right to Object:</strong> Ability to object to blockchain analytics or transaction monitoring, though regulatory compliance requirements may limit this right.</li>
                <li><strong>Wallet Disassociation:</strong> Option to disassociate cryptocurrency wallets from your account, removing linkage between identity and blockchain activity in our systems.</li>
              </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed mt-4">
                For questions about blockchain privacy, cryptocurrency transaction data, or Web3 privacy practices, contact our Blockchain Privacy Office at blockchain-privacy@company.com or visit our Web3 Privacy Center.
              </p>
        </section>

            {/* Section 15: IoT, Smart Devices, and Wearable Technology */}
            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Section 15: IoT, Smart Devices, and Wearable Technology</h2>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">15.1 Internet of Things (IoT) Data Collection and Processing</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                When you use our Services through IoT devices, smart devices, wearables, or other connected hardware, we collect and process unique categories of Personal Data subject to enhanced privacy protections given the intimate and continuous nature of IoT data collection.
              </p>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">a. Types of IoT and Smart Device Data Collected</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We may collect the following categories of data from connected devices:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Point-of-Sale Devices:</strong> Payment terminal identifiers, device location, transaction logs, peripheral connections, firmware versions, security event logs, and operational status from our payment terminals and card readers.</li>
                <li><strong>Mobile Payment Devices:</strong> Mobile POS data including device type (iOS, Android), GPS coordinates, accelerometer data, proximity sensor data, NFC tap patterns, and Bluetooth beacon interactions.</li>
                <li><strong>Wearable Payment Devices:</strong> Smartwatch payment data, fitness tracker transaction history, contactless ring payments, and biometric authentication data from wearable payment devices.</li>
                <li><strong>Smart Home Integration:</strong> Voice assistant transaction data (Alexa, Google Assistant), smart speaker payment commands, and home automation system financial integrations.</li>
                <li><strong>Connected Vehicle Data:</strong> In-car payment system data, connected car commerce transactions, vehicle identification numbers (VIN), GPS routes to payment locations, and automotive telematics associated with payment events.</li>
                <li><strong>Industrial IoT (IIoT):</strong> Connected industrial equipment transaction data, machine-to-machine payment systems, supply chain sensor data, and automated inventory replenishment transactions.</li>
                <li><strong>Health and Fitness Wearables:</strong> Health-related payment data when using medical wearables, fitness subscriptions, health insurance integrations, and wellness program transaction data.</li>
                <li><strong>Smart Retail:</strong> Interactive kiosk data, digital signage interactions, electronic shelf label engagement, smart shopping cart data, and cashierless store transaction data.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">b. Device Identifiers and Fingerprinting</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">IoT devices generate unique identifiers used for authentication, fraud prevention, and service delivery:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Hardware Identifiers:</strong> Device serial numbers, MAC addresses, IMEI/MEID numbers, chip IDs, secure element identifiers, and Trusted Platform Module (TPM) attestations.</li>
                <li><strong>Software Identifiers:</strong> Device operating system, firmware version, installed app versions, SDK versions, and software configuration fingerprints.</li>
                <li><strong>Network Identifiers:</strong> IP addresses, Wi-Fi SSID/BSSID, cellular tower IDs, Bluetooth device names, NFC UIDs, and network topology mapping.</li>
                <li><strong>Environmental Fingerprints:</strong> Ambient sensor readings (temperature, pressure, humidity, light levels) creating unique device environment signatures for fraud detection.</li>
                <li><strong>Device Telemetry:</strong> Battery level, storage capacity, CPU usage, memory utilization, sensor calibration data, and device health metrics.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">c. Location Data from Connected Devices</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">IoT devices provide granular location data requiring enhanced privacy protections:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Precise Geolocation:</strong> GPS coordinates accurate to meters, used for merchant location verification, fraud detection (impossible travel), and location-based services with explicit opt-in consent.</li>
                <li><strong>Location History:</strong> Historical location patterns, frequent locations, geofencing events, dwell time analysis, and movement patterns creating detailed behavioral profiles.</li>
                <li><strong>Indoor Positioning:</strong> Wi-Fi triangulation, Bluetooth beacon proximity, ultra-wideband (UWB) positioning, and indoor navigation data revealing precise in-store movements.</li>
                <li><strong>Cross-Device Location Correlation:</strong> Location data aggregated across multiple IoT devices (phone, watch, car) creating comprehensive mobility profiles.</li>
                <li><strong>Sensitive Location Inference:</strong> Automated detection and special handling of visits to sensitive locations (medical facilities, religious sites, political venues, adult establishments) with enhanced privacy protections.</li>
          </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">d. Sensor Data and Environmental Context</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">Connected devices collect rich sensor data providing contextual information:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Motion and Orientation:</strong> Accelerometer, gyroscope, and magnetometer data revealing device handling patterns, user gait characteristics, and activity classification (walking, driving, stationary).</li>
                <li><strong>Ambient Sensors:</strong> Light sensors, proximity sensors, barometer, thermometer, and hygrometer readings providing environmental context and device usage patterns.</li>
                <li><strong>Biometric Sensors:</strong> Heart rate, blood oxygen (SpO2), skin conductance, body temperature, and other health metrics from wearables used for authentication or fraud detection.</li>
                <li><strong>Audio Sensors:</strong> Microphone usage logs, ambient noise levels, voice command detection (not audio content without explicit consent), and ultrasonic beacon detection.</li>
                <li><strong>Camera Sensors:</strong> Camera activation logs, QR code scanning events, augmented reality interactions, and visual search queries (image content processed locally when possible).</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">e. Device Security and Attestation</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We verify device security posture to protect your data and prevent fraud:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Device Integrity Verification:</strong> SafetyNet attestation (Android), DeviceCheck (iOS), and custom attestation protocols verifying devices are unmodified and not rooted/jailbroken.</li>
                <li><strong>Secure Boot Verification:</strong> Verification of secure boot status, bootloader lock state, and signed firmware ensuring device has not been tampered with.</li>
                <li><strong>Runtime Security Checks:</strong> Detection of debugging tools, emulators, screen recording, accessibility service abuse, and other security threats in real-time.</li>
                <li><strong>Secure Element Usage:</strong> Verification of secure element (SE) or trusted execution environment (TEE) usage for cryptographic operations and sensitive data storage.</li>
                <li><strong>Certificate Pinning:</strong> Enforcement of certificate pinning on IoT devices to prevent man-in-the-middle attacks with logging of pinning violations.</li>
          </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">f. Edge Computing and On-Device Processing</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We prioritize edge computing and on-device processing to enhance privacy:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Local Processing:</strong> Biometric authentication, fraud scoring, and personalization performed locally on device when feasible, minimizing data transmission to cloud servers.</li>
                <li><strong>Federated Learning:</strong> Machine learning model training distributed across IoT devices without centralizing raw data, preserving privacy while improving service quality.</li>
                <li><strong>Differential Privacy:</strong> When device data must be aggregated, differential privacy techniques add mathematical noise ensuring individual device data cannot be identified.</li>
                <li><strong>Data Minimization:</strong> IoT devices only transmit minimum necessary data to cloud servers, with local preprocessing, filtering, and aggregation reducing data volume and exposure.</li>
                <li><strong>Edge Caching:</strong> Frequently used data cached locally on devices reducing server queries and associated data transmission.</li>
          </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">g. Device-to-Device Communication and Mesh Networks</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">When devices communicate directly with each other:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Peer-to-Peer Transactions:</strong> Direct device-to-device payment data exchange using Bluetooth, NFC, or Wi-Fi Direct with end-to-end encryption and authentication.</li>
                <li><strong>Mesh Network Participation:</strong> Participation in IoT mesh networks (Thread, Zigbee) with privacy-preserving routing protocols and encrypted mesh traffic.</li>
                <li><strong>Matter Protocol:</strong> Support for Matter smart home standard with local control, minimal cloud dependency, and privacy-by-design principles.</li>
                <li><strong>Device Pairing Data:</strong> Bluetooth pairing records, device discovery logs, and persistent connection preferences managed securely with encryption.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">h. Firmware Updates and Remote Device Management</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">Device management and updates with privacy protections:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Over-the-Air (OTA) Updates:</strong> Encrypted firmware updates with signed packages, rollback capabilities, and update history logs accessible to device owners.</li>
                <li><strong>Remote Configuration:</strong> Remote device configuration changes require user authorization for privacy-impacting settings (location services, sensor access, data sharing).</li>
                <li><strong>Remote Diagnostics:</strong> Remote device diagnostic data collection with explicit opt-in consent, temporary access grants, and audit trails.</li>
                <li><strong>Device Decommissioning:</strong> Secure data wiping protocols for device end-of-life, return, or resale ensuring Personal Data is irrecoverably deleted.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">i. Third-Party IoT Ecosystems and Integrations</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">When integrating with third-party IoT platforms:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Smart Home Platform Integration:</strong> Integration with Apple HomeKit, Google Home, Amazon Alexa, Samsung SmartThings subject to platform-specific privacy policies and data sharing agreements.</li>
                <li><strong>Health Platform Integration:</strong> Apple HealthKit, Google Fit, Samsung Health integrations with explicit authorization for health data access and strict data minimization.</li>
                <li><strong>Automotive Platform Integration:</strong> Apple CarPlay, Android Auto, vehicle manufacturer platforms with limited data sharing scoped to necessary transaction facilitation.</li>
                <li><strong>IFTTT and Automation:</strong> Integration with automation platforms with granular permission controls and activity logs showing all automated data flows.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">j. IoT-Specific Privacy Rights and Controls</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">You have enhanced rights and controls for IoT data:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Device Data Dashboard:</strong> Centralized dashboard showing all connected devices, data collected from each device, and granular per-device privacy controls.</li>
                <li><strong>Selective Sensor Permissions:</strong> Ability to disable specific sensors (GPS, camera, microphone) or data collection types for individual devices without breaking core functionality.</li>
                <li><strong>Device Unlinking:</strong> Easy device unlinking process immediately stopping all data collection from specific IoT devices with retroactive data deletion option.</li>
                <li><strong>Local-Only Mode:</strong> Option to operate devices in local-only mode with no cloud connectivity for privacy-conscious users, though some features may be limited.</li>
                <li><strong>Data Retention Controls:</strong> Configurable data retention periods for IoT telemetry and sensor data, including option for immediate deletion after processing.</li>
                <li><strong>Export Device Data:</strong> Comprehensive export of all data collected from your IoT devices in machine-readable formats (CSV, JSON) for analysis or migration.</li>
              </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed mt-4">
                For questions about IoT data processing, smart device privacy, or to manage your connected devices, contact our IoT Privacy Team at iot-privacy@company.com or access your Device Privacy Center.
              </p>
        </section>

            {/* Section 16: Genetic, Health, and Medical Data Protection */}
            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">Section 16: Genetic, Health, and Medical Data Protection</h2>
              
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">16.1 Health-Related Personal Data Collection and Processing</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We recognize that health, medical, and genetic information constitutes highly sensitive Personal Data requiring the highest levels of protection under laws including HIPAA (US), GDPR Article 9 (EU), PIPEDA (Canada), My Health Records Act (Australia), and other health privacy regulations worldwide. This section describes our practices when health-related data intersects with financial services.
              </p>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">a. Categories of Health-Related Data</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We may collect or process the following health-related information in limited circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Healthcare Payment Processing:</strong> Transaction data for healthcare services, medical procedures, pharmaceutical purchases, health insurance premiums, and medical device purchases (amounts, dates, merchant categories, not diagnostic details).</li>
                <li><strong>Health Insurance Transactions:</strong> Insurance carrier information, policy numbers, explanation of benefits (EOB) processing, copayment amounts, deductible tracking, and claims payment facilitation.</li>
                <li><strong>Flexible Spending Accounts (FSA/HSA):</strong> Health savings account transactions, qualified medical expense verification, substantiation documentation, and dependent care account activity.</li>
                <li><strong>Telehealth Payment Data:</strong> Payment information for telemedicine consultations, remote patient monitoring services, and digital health platform subscriptions.</li>
                <li><strong>Wellness Program Payments:</strong> Corporate wellness program participation, fitness membership payments, mental health service transactions, and preventive care incentive payments.</li>
                <li><strong>Genetic Testing Services:</strong> Payment information for genetic testing services, ancestry services, pharmacogenomic testing, and direct-to-consumer genetic analysis (payment data only, never test results).</li>
                <li><strong>Medical Device Transactions:</strong> Purchase of medical equipment, wearable health monitors, continuous glucose monitors (CGM), CPAP machines, hearing aids, and other health technology.</li>
                <li><strong>Mental Health Services:</strong> Payment for therapy sessions, psychiatric consultations, mental health apps, substance abuse treatment, and counseling services.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">b. Genetic Information Protection (GINA Compliance)</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We comply with the Genetic Information Nondiscrimination Act (GINA) and similar international laws protecting genetic information:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>No Genetic Test Results Collection:</strong> We never collect, request, or require genetic test results, DNA sequences, genomic data, or interpretation of genetic predispositions for any purpose.</li>
                <li><strong>Non-Discrimination Policy:</strong> Genetic information will never be used for eligibility determinations, pricing decisions, risk assessments, or any form of differential treatment.</li>
                <li><strong>Family Medical History Exclusion:</strong> We do not collect family medical history or information about genetic diseases or disorders in family members.</li>
                <li><strong>Segregated Storage:</strong> Any inadvertently collected genetic information is immediately isolated in segregated databases with restricted access and expedited deletion procedures.</li>
                <li><strong>Third-Party Prohibition:</strong> Contractual prohibitions prevent service providers from collecting, using, or disclosing genetic information obtained through our systems.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">c. HIPAA Compliance and Business Associate Relationships</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">When we process Protected Health Information (PHI) on behalf of healthcare covered entities:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Business Associate Agreements (BAA):</strong> Executed BAAs with healthcare providers, health plans, and healthcare clearinghouses defining permitted uses and required safeguards for PHI.</li>
                <li><strong>Minimum Necessary Standard:</strong> Access to and use of PHI limited to minimum necessary for payment processing and healthcare operations as defined in BAAs.</li>
                <li><strong>HIPAA Security Rule:</strong> Administrative, physical, and technical safeguards meeting or exceeding HIPAA Security Rule requirements including encryption, access controls, and audit logs.</li>
                <li><strong>Breach Notification:</strong> HIPAA-compliant breach notification procedures including assessment, notification to covered entities within 60 days, and individual notification as required.</li>
                <li><strong>Subcontractor Management:</strong> Business Associate Agreements with all subcontractors who may access PHI, ensuring downstream HIPAA compliance.</li>
                <li><strong>Right of Access:</strong> Facilitation of individuals' HIPAA right of access to their PHI within 30 days of request through covered entity coordination.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">d. Health Data Minimization and De-Identification</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We employ aggressive data minimization for health-related information:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Payment Focus:</strong> Collection strictly limited to payment facilitation, never clinical data, diagnoses, treatment plans, lab results, prescriptions, or medical histories.</li>
                <li><strong>Merchant Category Codes:</strong> Healthcare transactions identified by merchant category codes (MCC) not specific procedure codes, maintaining privacy while enabling proper transaction processing.</li>
                <li><strong>De-Identification:</strong> Health-related data de-identified following HIPAA Expert Determination or Safe Harbor methods for research, analytics, or quality improvement when possible.</li>
                <li><strong>Aggregation:</strong> Health transaction data aggregated to population level for trend analysis, removing individual identifiability.</li>
                <li><strong>Tokenization:</strong> Account numbers and personal identifiers tokenized in healthcare payment systems, replacing sensitive data with non-sensitive equivalents.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">e. Mental Health Data Special Protections</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">Mental health information receives enhanced protections beyond standard PHI:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Psychotherapy Notes Exclusion:</strong> Never collect or process psychotherapy notes, which have heightened HIPAA protections requiring specific authorization.</li>
                <li><strong>Substance Use Disorder Protection:</strong> Compliance with 42 CFR Part 2 for substance use disorder treatment records requiring special consent for disclosure.</li>
                <li><strong>State-Specific Mental Health Laws:</strong> Compliance with stricter state laws governing mental health information (California, New York, Illinois, Massachusetts).</li>
                <li><strong>Stigma Prevention:</strong> Merchant descriptors for mental health services use neutral terminology preventing identification of service type on statements.</li>
                <li><strong>Crisis Intervention:</strong> Protocols for appropriate response if mental health crisis indicators detected during customer service interactions, prioritizing user safety.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">f. Reproductive Health Privacy Protections</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">We implement enhanced protections for reproductive healthcare transactions:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Sensitive Service Protection:</strong> Reproductive health services (contraception, fertility treatment, pregnancy care, abortion services) receive elevated privacy protections.</li>
                <li><strong>Location Data Minimization:</strong> Reduced location data retention for reproductive healthcare facilities with automatic deletion after transaction completion.</li>
                <li><strong>Discreet Descriptors:</strong> Neutral merchant descriptors on statements protecting privacy from family members, partners, or others with account access.</li>
                <li><strong>Law Enforcement Response:</strong> Strict protocols for law enforcement requests involving reproductive healthcare requiring valid legal process and escalation to legal counsel.</li>
                <li><strong>Multi-Jurisdiction Considerations:</strong> Recognition of varying state laws regarding reproductive healthcare with privacy protections meeting most stringent applicable standards.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">g. Disability and Accommodation Information</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">Information related to disabilities and accommodations is handled with special care:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>ADA Compliance:</strong> Accessibility accommodation requests (screen reader requirements, alternative formats, communication preferences) stored securely and used solely for accommodation provision.</li>
                <li><strong>Limited Access:</strong> Disability information accessible only to personnel directly involved in accommodation provision, segregated from general customer data.</li>
                <li><strong>Non-Discrimination:</strong> Disability status never used for eligibility, pricing, risk assessment, fraud scoring, or any discriminatory purpose in compliance with ADA and Rehabilitation Act.</li>
                <li><strong>Medical Device Transactions:</strong> Purchases of assistive technology and medical devices processed with privacy protections preventing inference of specific disabilities.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">h. Health Data Retention and Disposal</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">Health-related data subject to shortened retention periods and enhanced disposal procedures:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Reduced Retention:</strong> Health transaction data retained for minimum period required by applicable law (typically 6-7 years) then permanently deleted, shorter than standard transaction retention.</li>
                <li><strong>Secure Destruction:</strong> Health data destruction using NIST SP 800-88 media sanitization guidelines with certified destruction for physical media and cryptographic erasure for electronic records.</li>
                <li><strong>Backup Purging:</strong> Health data purged from all backups, archives, and disaster recovery systems within 90 days of scheduled deletion from production.</li>
                <li><strong>Destruction Documentation:</strong> Certificates of destruction maintained for audit purposes documenting date, method, and personnel responsible for health data disposal.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">i. Research and Public Health</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">Use of health data for research or public health purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Institutional Review Board (IRB):</strong> Research involving health data requires IRB approval or equivalent ethical review with documented determination of minimal risk and privacy safeguards.</li>
                <li><strong>De-Identified Data Sets:</strong> Research conducted on properly de-identified data sets meeting HIPAA Safe Harbor or Expert Determination standards when possible.</li>
                <li><strong>Public Health Reporting:</strong> Limited disclosure to public health authorities as required by law (communicable disease reporting, adverse event reporting) with minimum necessary information.</li>
                <li><strong>Epidemiological Studies:</strong> Participation in epidemiological research using aggregated, de-identified data for public health benefit (pandemic response, health outcomes research).</li>
                <li><strong>Opt-Out Rights:</strong> Ability to opt out of health data use for research purposes where legally permissible, though public health reporting may remain mandatory.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">j. Your Health Data Rights</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">You have specific rights regarding health-related Personal Data:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Right of Access:</strong> Access to all health-related transaction data we maintain, provided within 30 days (HIPAA compliance) or sooner under applicable privacy laws.</li>
                <li><strong>Right to Amendment:</strong> Request correction of inaccurate health information with documented rationale, though we may need covered entity concurrence for PHI.</li>
                <li><strong>Right to Accounting:</strong> Accounting of disclosures of health information for purposes other than treatment, payment, and operations in last 6 years.</li>
                <li><strong>Right to Restriction:</strong> Request restrictions on use or disclosure of health information, which we will honor unless required by law to disclose.</li>
                <li><strong>Right to Confidential Communication:</strong> Request communications about health information through alternative means or locations (different email, physical address, phone).</li>
                <li><strong>Right to Breach Notification:</strong> Notification of any breach affecting your health information within timelines required by law (60 days for HIPAA breaches).</li>
                <li><strong>Right to Copy:</strong> Electronic copy of health information in readily producible format (EHR, PDF, JSON) at no charge for first copy.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">k. Cross-Border Health Data Transfers</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">International transfers of health data subject to enhanced safeguards:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Data Localization Compliance:</strong> Compliance with health data localization requirements (Russia, China, Indonesia) requiring in-country storage and processing.</li>
                <li><strong>GDPR Article 9 Protections:</strong> Explicit consent and appropriate safeguards for cross-border transfers of health data (special category data under GDPR).</li>
                <li><strong>Standard Contractual Clauses:</strong> EU SCCs with supplementary measures (encryption, pseudonymization) for health data transfers to non-adequate countries.</li>
                <li><strong>Binding Corporate Rules:</strong> Internal BCRs governing health data transfers among corporate affiliates with enhanced protections for sensitive health information.</li>
              </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed mt-4">
                For questions about health data processing, HIPAA rights, or genetic information protections, contact our Health Privacy Officer at health-privacy@company.com or call our dedicated Health Privacy Hotline at 1-888-HEALTH-PRIVACY (1-888-432-5847). For HIPAA-related requests, visit our HIPAA Compliance Portal.
              </p>
        </section>

            {/* Section 8: Jurisdiction-Specific Provisions */}
            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">8. Jurisdiction-Specific Provisions - Global Coverage</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                This section provides jurisdiction-specific privacy rights, obligations, and disclosures for residents of various countries, states, and territories. These provisions supplement our main Privacy Policy and, where stricter, take precedence over general provisions.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">8.1 European Union (EU) and European Economic Area (EEA)</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">For residents of EU/EEA countries, we comply with the General Data Protection Regulation (GDPR):</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Data Controller:</strong> Stripe Technology Europe Limited (Dublin, Ireland) serves as data controller for EU/EEA users.</li>
                <li><strong>Legal Bases:</strong> Processing based on contract performance, legal obligations, legitimate interests (with balancing test), consent, and substantial public interest.</li>
                <li><strong>Data Protection Officer:</strong> Contact our DPO at dpo@company.com or DPO, Attn: Privacy, 1 Grand Canal Street Lower, Dublin 2, Ireland.</li>
                <li><strong>EU Representative:</strong> Our EU representative pursuant to Article 27 GDPR available at eu-representative@company.com.</li>
                <li><strong>Supervisory Authority:</strong> Right to lodge complaints with your national data protection authority (list available at edpb.europa.eu).</li>
                <li><strong>International Transfers:</strong> Data transfers outside EU/EEA use Standard Contractual Clauses (SCCs), Adequacy Decisions, or Binding Corporate Rules with supplementary measures.</li>
                <li><strong>GDPR Rights:</strong> Access, rectification, erasure, restriction, portability, objection, and automated decision-making rights fully supported.</li>
                <li><strong>Data Retention:</strong> Personal Data retained only as long as necessary for purposes collected, with specific retention schedules available upon request.</li>
                <li><strong>Special Categories:</strong> Article 9 special category data (biometric, health, genetic) processed only with explicit consent or legal authorization.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">8.2 United Kingdom</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">UK residents have rights under UK GDPR and Data Protection Act 2018:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>UK Data Controller:</strong> Stripe Payments UK Limited serves as data controller for UK users.</li>
                <li><strong>ICO Registration:</strong> Registered with Information Commissioner's Office (ICO), registration number available upon request.</li>
                <li><strong>UK Representative:</strong> UK representative pursuant to Article 27 UK GDPR at uk-representative@company.com.</li>
                <li><strong>Supervisory Authority:</strong> Information Commissioner's Office (ICO), Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF. ico.org.uk</li>
                <li><strong>International Transfers:</strong> UK International Data Transfer Agreement (IDTA) or Addendum to SCCs for transfers to non-adequate countries.</li>
                <li><strong>Brexit Adequacy:</strong> EU-UK adequacy decision enables free flow of data between UK and EU without additional safeguards.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">8.3 United States - Federal Laws</h3>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>HIPAA Business Associate:</strong> BAAs executed with covered entities, PHI protected per Security and Privacy Rules.</li>
                <li><strong>GLBA Compliance:</strong> Gramm-Leach-Bliley Act safeguards, privacy notices, and opt-out rights for financial institutions.</li>
                <li><strong>FCRA Compliance:</strong> Fair Credit Reporting Act compliance for credit reporting and adverse action notices.</li>
                <li><strong>COPPA:</strong> Children's Online Privacy Protection Act - no knowing collection from children under 13.</li>
                <li><strong>VPPA:</strong> Video Privacy Protection Act - video rental/streaming records protected.</li>
                <li><strong>TCPA:</strong> Telephone Consumer Protection Act - marketing calls/texts require consent.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">8.4 United States - State-Specific Provisions</h3>
              
              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">California (CCPA/CPRA)</h4>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Consumer Rights:</strong> Right to know, delete, correct, opt-out of sale/sharing, limit sensitive data use, and non-discrimination.</li>
                <li><strong>Sensitive Personal Information:</strong> SSN, driver's license, biometrics, health data, geolocation - opt-in required for secondary uses.</li>
                <li><strong>Do Not Sell/Share:</strong> We do not sell personal information. Opt-out available at donotsell@company.com.</li>
                <li><strong>Authorized Agent:</strong> Authorized agents may submit requests with proof of authorization.</li>
                <li><strong>CPRA Enhancements:</strong> Risk assessments, data minimization, automated decision-making disclosures.</li>
                <li><strong>California Privacy Rights Act (CPRA) Metrics:</strong> Annual privacy metrics report available at privacy-metrics.company.com.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">Virginia (VCDPA)</h4>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Rights:</strong> Access, correction, deletion, portability, opt-out of targeted advertising and sale.</li>
                <li><strong>Sensitive data consent required for:</strong> racial/ethnic origin, religious beliefs, health diagnosis, sexual orientation, citizenship, genetic/biometric data.</li>
                <li><strong>Data protection assessments</strong> conducted for high-risk processing activities.</li>
                <li><strong>Appeal process:</strong> Email appeals@company.com within 15 days of request decision.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">Colorado (CPA)</h4>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Universal opt-out mechanism</strong> supported for targeted advertising and sales.</li>
                <li><strong>Profiling in furtherance of automated decisions:</strong> right to opt-out and explanation.</li>
                <li><strong>Sensitive data inference prohibited</strong> without consent.</li>
                <li><strong>Data protection assessments</strong> for targeted advertising, sale, and profiling.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">Connecticut (CTDPA)</h4>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Consumer rights:</strong> Access, correction, deletion, data portability, opt-out.</li>
                <li><strong>Child data (13-16):</strong> Consent required for sale or targeted advertising.</li>
                <li><strong>Privacy notices include</strong> data retention schedules and third-party categories.</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">Utah (UCPA)</h4>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Consumer rights:</strong> Access, deletion, portability, opt-out of targeted advertising and sale.</li>
                <li><strong>Sensitive data consent required</strong> (racial origin, religious beliefs, mental/physical health, sexual orientation, citizenship, genetic/biometric data).</li>
              </ul>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">Additional US States</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We comply with privacy laws in all 50 states including Montana, Oregon, Texas, Illinois (BIPA), New York (SHIELD Act), Massachusetts, Nevada, Maine, Washington, Delaware, Indiana, Iowa, Kentucky, Minnesota, Nebraska, New Hampshire, New Jersey, Rhode Island, Tennessee, and all other states with state-specific privacy and security requirements.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">8.5 Canada</h3>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>PIPEDA Compliance:</strong> Personal Information Protection and Electronic Documents Act - consent, accuracy, safeguards, openness principles.</li>
                <li><strong>Provincial Laws:</strong> Alberta PIPA, British Columbia PIPA, Quebec Law 25 (Bill 64) compliance for applicable provinces.</li>
                <li><strong>Privacy Commissioner:</strong> Office of the Privacy Commissioner of Canada complaint process available.</li>
                <li><strong>Quebec Law 25:</strong> Enhanced rights for Quebec residents including data portability, de-indexing, and privacy impact assessments.</li>
                <li><strong>Canadian Representative:</strong> Canadian privacy representative at canada-privacy@company.com.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">8.6 Brazil (LGPD)</h3>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Lei Geral de Proteção de Dados:</strong> Brazilian General Data Protection Law compliance.</li>
                <li><strong>Data Protection Officer:</strong> DPO for Brazil (encarregado) at brazil-dpo@company.com.</li>
                <li><strong>Legal Bases:</strong> Consent, contract, legal obligation, legitimate interest, credit protection, health protection, or other LGPD bases.</li>
                <li><strong>ANPD Authority:</strong> National Data Protection Authority (Autoridade Nacional de Proteção de Dados) oversight.</li>
                <li><strong>Sensitive Data:</strong> Explicit consent required for racial/ethnic origin, religious beliefs, political opinions, health, biometric, genetic data.</li>
                <li><strong>International Transfers:</strong> Adequacy, SCCs, BCRs, or specific authorization for transfers outside Brazil.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">8.7 Mexico, Argentina, Colombia</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Compliance with local data protection authorities and privacy laws including consent requirements, cross-border transfer mechanisms, and individual rights.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">8.8 Australia (Privacy Act)</h3>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Australian Privacy Principles (APPs):</strong> 13 APPs governing collection, use, disclosure, and security.</li>
                <li><strong>Notifiable Data Breaches:</strong> OAIC notification within 30 days of awareness of eligible data breach.</li>
                <li><strong>Cross-Border Disclosure:</strong> Taking reasonable steps to ensure overseas recipients comply with APPs.</li>
                <li><strong>My Health Records:</strong> My Health Records Act compliance for health information.</li>
                <li><strong>Privacy Commissioner:</strong> Office of the Australian Information Commissioner (OAIC) complaint mechanism.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">8.9 Japan (APPI)</h3>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Act on Protection of Personal Information:</strong> Purpose specification, limitation, accuracy, and safety management.</li>
                <li><strong>Personal Information Protection Commission:</strong> Registered with PPC, compliance with guidance and orders.</li>
                <li><strong>Sensitive Data (要配慮個人情報):</strong> Opt-in consent for race, creed, social status, medical history, criminal records, discrimination/prejudice data.</li>
                <li><strong>Cross-Border Transfers:</strong> Consent, adequacy, contract, or PPC approval for transfers outside Japan.</li>
                <li><strong>Individual Rights:</strong> Disclosure, correction, suspension of use, and erasure rights.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">8.10 Singapore (PDPA)</h3>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Personal Data Protection Act:</strong> Consent, purpose limitation, notification, access and correction obligations.</li>
                <li><strong>Data Protection Officer:</strong> DPO contact available to individuals per Section 11(3) PDPA.</li>
                <li><strong>Do Not Call Registry:</strong> Compliance with DNC Registry for marketing communications.</li>
                <li><strong>Cross-Border Transfers:</strong> Standard of protection comparable to PDPA required for overseas transfers.</li>
                <li><strong>PDPC Compliance:</strong> Personal Data Protection Commission oversight and accountability.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">8.11 India (DPDPA 2023)</h3>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Digital Personal Data Protection Act:</strong> Preparing for full implementation of DPDPA 2023.</li>
                <li><strong>Consent Framework:</strong> Free, specific, informed, unconditional, and unambiguous consent with easy withdrawal.</li>
                <li><strong>Data Principal Rights:</strong> Access, correction, erasure, grievance redressal, and nominating data nominee.</li>
                <li><strong>Data Protection Board:</strong> Preparation for Data Protection Board of India jurisdiction.</li>
                <li><strong>Cross-Border Transfers:</strong> Government approval framework for transfers to notified countries.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">8.12 South Korea, Taiwan, Hong Kong, Philippines, Thailand, Indonesia, Malaysia, Vietnam</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Full compliance with personal information protection laws including PIPA (Korea), PDPA (Taiwan, Hong Kong), Data Privacy Act (Philippines), PDPA (Thailand, Malaysia), and regional data protection requirements.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">8.13 China (PIPL)</h3>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Personal Information Protection Law:</strong> Separate consent for each purpose, data minimization, and purpose limitation.</li>
                <li><strong>Sensitive Personal Information:</strong> Specific purpose and necessity plus separate consent for biometric, religious, health, financial, location, minor (under 14) data.</li>
                <li><strong>Data Localization:</strong> Critical information infrastructure operators (CIIO) must store personal information in China with security assessment for outbound transfers.</li>
                <li><strong>Cross-Border Transfers:</strong> Security assessment, standard contracts, or certification required for personal information transfers outside China.</li>
                <li><strong>Representative:</strong> China representative designated per PIPL Article 53 for non-China controllers/processors.</li>
                <li><strong>Individual Rights:</strong> Access, correction, deletion, explanation of processing rules, and portable copy rights.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">8.14 Israel, South Africa, UAE, Saudi Arabia, Kenya</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Compliance with regional data protection laws including Privacy Protection Law (Israel), POPIA (South Africa), data protection regulations (UAE/Saudi), and Data Protection Act (Kenya).
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">8.15 Switzerland, Norway, Iceland, Liechtenstein</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Swiss Federal Act on Data Protection (FADP), Norwegian Personal Data Act, and EEA member state compliance with data protection principles equivalent to GDPR standards.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">8.16 Special Jurisdictions</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Puerto Rico, Guam, US Virgin Islands: Federal US privacy laws apply plus territory-specific regulations. Gibraltar, Isle of Man, Jersey, Guernsey: UK GDPR extensions and local data protection laws. Macau: Separate data protection regime from mainland China.
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">8.17 Exercising Jurisdiction-Specific Rights</h3>
              <p className="text-[var(--color-text-primary)] leading-relaxed">To exercise your jurisdiction-specific privacy rights or for questions about local compliance:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li><strong>Global Privacy Portal:</strong> global-privacy-rights.company.com - Automated rights request system with jurisdiction detection.</li>
                <li><strong>Email:</strong> privacy@company.com with subject line "Jurisdiction: [Your Country/State]"</li>
                <li><strong>Phone:</strong> Global Privacy Hotline +1-888-PRIVACY-1 (24/7, multilingual support in 50+ languages)</li>
                <li><strong>Mail:</strong> Regional privacy offices listed at company.com/privacy-contacts</li>
                <li><strong>Authorized Agents:</strong> Authorized agent submission process with verification at company.com/authorized-agents</li>
              </ul>
        </section>

            {/* Section 9: Contact Us */}
            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">9. Contact us</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                If you have any questions or complaints about this Policy, please contact us.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                If you are an End Customer (i.e., an individual doing business or transacting with a Business User), please refer to the privacy policy or notice of the Business User for information regarding the Business User's privacy practices, choices and controls, or contact the Business User directly.
              </p>
        </section>

            {/* Section 10: US Consumer Privacy Notice */}
            <section className="space-y-4">
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">10. US Consumer Privacy Notice</h2>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                The following Consumer Privacy Notice applies to you if you are an individual who resides in the United States and obtains financial services from Stripe primarily for your own personal, family, or household purposes.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed mb-4">
                <strong>Last updated: January 16, 2025</strong>
              </p>

              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">FACTS</h3>
              
              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">WHAT DOES STRIPE DO WITH YOUR PERSONAL INFORMATION?</h4>
              
              <h5 className="text-lg font-semibold text-[var(--color-text-primary)] mt-4 mb-2">Why?</h5>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Financial companies choose how they share your personal information. Federal law gives consumers the right to limit some but not all sharing. Federal law also requires us to tell you how we collect, share, and protect your personal information. Please read this notice carefully to understand what we do.
              </p>

              <h5 className="text-lg font-semibold text-[var(--color-text-primary)] mt-4 mb-2">What?</h5>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                The types of personal information we collect and share depend on the product or service you have with us. This information can include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li>Social Security Number</li>
                <li>Contact details</li>
                <li>Account balances and transaction history</li>
                <li>Payment, transaction, and purchase information and history</li>
              </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                When you are no longer our customer, we continue to share your information as described in this notice.
              </p>

              <h5 className="text-lg font-semibold text-[var(--color-text-primary)] mt-4 mb-2">How?</h5>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                All financial companies need to share customers' personal information to run their everyday business. In the section below, we list the reasons financial companies can share their customers' personal information; the reasons Stripe chooses to share; and whether you can limit this sharing.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Reasons we can share your personal information</th>
                      <th className="border border-gray-300 px-4 py-2 text-center font-semibold">Does Stripe Share?</th>
                      <th className="border border-gray-300 px-4 py-2 text-center font-semibold">Can you limit this sharing</th>
                </tr>
              </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">For our everyday business purposes – such as to process your transactions, maintain your account(s), respond to court orders and legal investigations, or report to credit bureaus</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">No</td>
                </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">For our marketing purposes - to offer our products and Services to you</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">No</td>
                </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">For joint marketing with other financial companies</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">No</td>
                </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">For our affiliates' everyday business purposes - information about your transactions and experiences</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">No</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">For our affiliates' everyday business purposes - information about your creditworthiness</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">No</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">We don't share</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">For our affiliates to market to you</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">No</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">We don't share</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">For nonaffiliates to market to you (for data not collected through Financial Connections)</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">For nonaffiliates to market to you (for data collected through Financial Connections)</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">No</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">We don't share</td>
                </tr>
              </tbody>
            </table>
          </div>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">To limit our sharing</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Login to your Link account at app.link.com/settings and toggle off data sharing from the Messaging menu.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Please note: If you are a new customer, we can begin sharing your information 30 days from the date we sent this notice. When you are no longer our customer, we continue to share your information as described in this notice.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                However, you can contact us at any time to limit our sharing.
              </p>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">Questions?</h4>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Contact us at privacy@stripe.com or visit us at https://support.link.com
              </p>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">Who we are</h4>
              <h5 className="text-lg font-semibold text-[var(--color-text-primary)] mt-4 mb-2">Who is providing this notice?</h5>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Stripe, Inc., Stripe Payments Company, and their affiliates that provide consumers services in the U.S.
              </p>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">What we do</h4>
              
              <h5 className="text-lg font-semibold text-[var(--color-text-primary)] mt-4 mb-2">How does Stripe protect my personal information?</h5>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                To protect your personal information from unauthorized access, destruction, loss, alteration, or misuse we use security measures to comply with federal law. These measures include computer safeguards and secured files and buildings. We impose access controls along with ongoing monitoring to prevent data misuse, and we require our service providers to take similar steps to protect your information.
              </p>

              <h5 className="text-lg font-semibold text-[var(--color-text-primary)] mt-4 mb-2">How does Stripe collect my personal information?</h5>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We collect your personal information, for example, when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li>open a Link account;</li>
                <li>ask Stripe to process a payment for goods or services;</li>
                <li>provide bank account information to Stripe using Financial Connections</li>
          </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                We also collect your personal information from others, such as affiliates or other companies.
              </p>

              <h5 className="text-lg font-semibold text-[var(--color-text-primary)] mt-4 mb-2">Why can't I limit all sharing?</h5>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Federal law gives you the right to limit only:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-primary)] leading-relaxed">
                <li>sharing for affiliates' everyday business purposes — information about your creditworthiness</li>
                <li>affiliates from using your information to market to you</li>
                <li>sharing for nonaffiliates to market to you.</li>
              </ul>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                State laws and individual companies may give you additional rights to limit sharing. See the Other Important Information section below for more on your rights under state law.
              </p>

              <h5 className="text-lg font-semibold text-[var(--color-text-primary)] mt-4 mb-2">What happens when I limit sharing for an account I hold jointly with someone else?</h5>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Your choices will apply to everyone on your account.
              </p>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">Definitions</h4>
              
              <h5 className="text-lg font-semibold text-[var(--color-text-primary)] mt-4 mb-2">Affiliates</h5>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Companies related by common ownership or control. They can be financial and nonfinancial companies.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Our affiliates include companies operating under the Stripe name, such as Stripe Technology Europe, Ltd. and Stripe Payments UK, Ltd.
              </p>

              <h5 className="text-lg font-semibold text-[var(--color-text-primary)] mt-4 mb-2">Nonaffiliates</h5>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Companies not related by common ownership or control. They can be financial and nonfinancial companies.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Nonaffiliates with which we share personal information include service providers that perform services or functions on our behalf, Business Users with which you choose to transact, partners with which we share data to provide you with services, and advertising partners, analytics providers, and social networks, who assist us in advertising our Services to you.
              </p>

              <h5 className="text-lg font-semibold text-[var(--color-text-primary)] mt-4 mb-2">Joint Marketing</h5>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                A formal agreement between non-affiliated financial companies that together market financial products or services to you.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                Our joint marketing partners include financial companies we partner with to provide you with financial services.
              </p>

              <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mt-6 mb-3">Other important information</h4>
              
              <h5 className="text-lg font-semibold text-[var(--color-text-primary)] mt-4 mb-2">Vermont:</h5>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                If your account with us is associated with a Vermont billing address, we will not disclose information about your creditworthiness to our affiliates and will not disclose your personal information, financial information, credit report, or health information to nonaffiliated third parties to market to you, other than as permitted by Vermont law, unless you authorize us to make those disclosures. For joint marketing, we will only disclose your name, contact information, and information about your transactions. Additional information concerning our privacy policies can be found in our Privacy Policy and Privacy Center.
              </p>

              <h5 className="text-lg font-semibold text-[var(--color-text-primary)] mt-4 mb-2">California:</h5>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                If your account with us is associated with a California billing address, we will not disclose Personal Data we collect about you except to the extent permitted under California law. For instance, we may disclose your Personal Data as necessary to process transactions or provide products and services you request, at your instruction, as required for institution risk control, and to safeguard against fraud, identity theft, and unauthorized transactions.
              </p>
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                For additional information about our privacy practices, please visit the Stripe Privacy Center.
              </p>
        </section>
            
          </article>
      </div>
      </main>

      <Footer />
    </div>
  );
}
