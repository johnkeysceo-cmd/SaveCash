'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const sections = [
  { id: 'welcome', title: 'Welcome' },
  { id: 'defined-terms', title: 'Defined Terms' },
  { id: 'personal-data-we-collect-and-how-we-use-and-share-it', title: '1. Personal Data Collection' },
  { id: 'more-ways-we-collect-use-and-share-personal-data', title: '2. More Ways We Collect' },
  { id: 'legal-bases-for-processing-data', title: '3. Legal Bases' },
  { id: 'your-rights-and-choices', title: '4. Your Rights' },
  { id: 'security-and-retention', title: '5. Security & Retention' },
  { id: 'international-data-transfers', title: '6. International Transfers' },
  { id: 'updates-and-notifications', title: '7. Updates' },
  { id: 'biometric-data-and-facial-recognition', title: '11. Biometric Data & Facial Recognition' },
  { id: 'ai-ml-automated-processing', title: '12. AI & Machine Learning' },
  { id: 'quantum-computing-cryptography', title: '13. Quantum Computing & Post-Quantum Crypto' },
  { id: 'blockchain-cryptocurrency-web3', title: '14. Blockchain, Crypto & Web3' },
  { id: 'iot-smart-devices-wearables', title: '15. IoT & Smart Devices' },
  { id: 'genetic-health-medical-data', title: '16. Genetic & Health Data' },
  { id: 'jurisdiction-specific-provisions', title: '8. Global Jurisdiction Provisions' },
  { id: 'contact-us', title: '9. Contact Us' },
  { id: 'us-consumer-privacy-notice', title: '10. US Consumer Notice' },
];

export default function OnThisPageNav() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -80% 0px',
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <aside className="hidden xl:block fixed right-8 top-32 w-[240px] max-h-[calc(100vh-200px)] overflow-y-auto">
      <nav className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#6b7c93] mb-4">
          On this page
        </p>
        <ul className="space-y-2">
          {sections.map(({ id, title }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={cn(
                  'block text-sm py-1 px-2 rounded transition-colors border-l-2',
                  activeSection === id
                    ? 'border-primary text-primary font-medium bg-[#f6f9fc]'
                    : 'border-transparent text-[#425466] hover:text-[#0a2540] hover:bg-[#f6f9fc]'
                )}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}