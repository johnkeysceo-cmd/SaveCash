"use client";
import React from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
export default function ConnectAccountPage() {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      {" "}
      <Header />{" "}
      <main className="flex-1">
        {" "}
        <div className="mx-auto max-w-[800px] px-6 py-16 md:px-12 md:py-20">
          {" "}
          <article className="space-y-8">
            {" "}
            <div>
              {" "}
              <h1 className="text-4xl font-semibold text-[var(--color-text-primary)] mb-6">
                SaveCash Connected Account Agreement
              </h1>{" "}
              <p className="text-sm text-[var(--color-text-secondary)] mb-8">
                Last updated: November 3, 2025
              </p>{" "}
            </div>{" "}
            <section className="space-y-4">
              {" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                This SaveCash Connected Account Agreement ("Agreement") is
                entered into between SaveCash ("SaveCash," "we," "us," or "our")
                and you ("Platform," "you," or "your") and governs your use of
                SaveCash Connect services. SaveCash Connect enables platforms
                and marketplaces to onboard and facilitate payments for third
                parties (each, a "Connected Account").{" "}
              </p>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                This Agreement supplements the SaveCash Services Agreement and
                applies specifically to your use of Connect features. All terms
                not defined herein have the meanings set forth in the SaveCash
                Services Agreement.{" "}
              </p>{" "}
            </section>{" "}
            <section className="space-y-4">
              {" "}
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">
                1. Definitions
              </h2>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                For purposes of this Agreement:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>
                  <strong>"Connected Account"</strong> means a third party
                  (person or business) that uses your platform and accepts
                  payments through Connect.
                </li>{" "}
                <li>
                  <strong>"Platform"</strong> means you, the entity integrating
                  Connect to facilitate payments for Connected Accounts.
                </li>{" "}
                <li>
                  <strong>"Connected Account Agreement"</strong> means the
                  agreement between a Connected Account and SaveCash.
                </li>{" "}
                <li>
                  <strong>"Connect"</strong> means SaveCash Connect services
                  that enable platforms to onboard and facilitate payments for
                  third parties.
                </li>{" "}
                <li>
                  <strong>"Platform Services"</strong> means your goods,
                  services, or other offerings provided to Connected Accounts
                  through your platform.
                </li>{" "}
              </ul>{" "}
            </section>{" "}
            <section className="space-y-4">
              {" "}
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">
                2. Connect Services
              </h2>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                Connect provides tools and functionality that enable you
                to:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>
                  Onboard Connected Accounts with customizable onboarding flows
                </li>{" "}
                <li>Facilitate payment acceptance for Connected Accounts</li>{" "}
                <li>Access Connected Account transaction and account data</li>{" "}
                <li>Manage Connected Account settings and compliance</li>{" "}
                <li>
                  Receive payments and split transactions with Connected
                  Accounts
                </li>{" "}
                <li>Handle disputes and chargebacks for Connected Accounts</li>{" "}
                <li>Manage Connected Account payouts and fees</li>{" "}
              </ul>{" "}
            </section>{" "}
            <section className="space-y-4">
              {" "}
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">
                3. Platform Obligations
              </h2>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                As a Platform using Connect, you agree to the following
                obligations:{" "}
              </p>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                3.1 Connected Account Onboarding
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                You must:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>
                  Use Connect API and hosted onboarding pages to onboard
                  Connected Accounts
                </li>{" "}
                <li>
                  Provide accurate and complete information about Connected
                  Accounts
                </li>{" "}
                <li>
                  Ensure Connected Accounts complete required identity
                  verification
                </li>{" "}
                <li>
                  Verify Connected Accounts' business legitimacy and compliance
                </li>{" "}
                <li>
                  Obtain required documentation and information from Connected
                  Accounts
                </li>{" "}
                <li>Maintain records of all onboarding activities</li>{" "}
              </ul>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                3.2 Connected Account Management
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                You must:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>
                  Monitor Connected Accounts for compliance with terms and
                  applicable laws
                </li>{" "}
                <li>
                  Promptly notify SaveCash of any suspected fraud or violations
                </li>{" "}
                <li>
                  Ensure Connected Accounts maintain accurate account
                  information
                </li>{" "}
                <li>
                  Handle Connected Account customer service inquiries
                  appropriately
                </li>{" "}
                <li>
                  Provide Connected Accounts with adequate support and
                  documentation
                </li>{" "}
              </ul>{" "}
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-8 mb-4">
                3.3 Compliance
              </h3>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                You must:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>
                  Ensure Connected Accounts comply with all applicable laws and
                  regulations
                </li>{" "}
                <li>
                  Verify Connected Accounts' business types are not prohibited
                </li>{" "}
                <li>Implement KYC/AML procedures for Connected Accounts</li>{" "}
                <li>Maintain compliance with card network rules</li>{" "}
                <li>
                  Report suspicious activity to appropriate authorities
                </li>{" "}
              </ul>{" "}
            </section>{" "}
            <section className="space-y-4">
              {" "}
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">
                4. Connected Account Agreements
              </h2>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                Each Connected Account must agree to SaveCash's Connected
                Account Agreement, which governs their use of Connect services.
                You must:{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                <li>
                  Ensure Connected Accounts review and accept the Connected
                  Account Agreement
                </li>{" "}
                <li>
                  Not modify or supplement the Connected Account Agreement
                  without our consent
                </li>{" "}
                <li>
                  Provide Connected Accounts with access to their agreement
                </li>{" "}
                <li>Comply with all notice and disclosure requirements</li>{" "}
              </ul>{" "}
            </section>{" "}
            <section className="space-y-4">
              {" "}
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">
                4. Fees and Payouts
              </h2>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                Transaction fees are assessed and may be split between you and
                Connected Accounts as specified in your platform agreement.
                Connected Accounts receive payouts according to schedules and
                methods determined by their Connected Account settings.{" "}
              </p>{" "}
            </section>{" "}
            <section className="space-y-4">
              {" "}
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">
                5. Platform Liability
              </h2>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                As a Platform using Connect services, you are responsible for
                Connected Account compliance and may be held liable for
                violations by Connected Accounts. You agree to indemnify
                SaveCash against any claims arising from Connected Account
                activities.{" "}
              </p>{" "}
            </section>{" "}
            <section className="space-y-4">
              {" "}
              <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mt-12 mb-6">
                6. Contact Information
              </h2>{" "}
              <p className="text-[var(--color-text-primary)] leading-relaxed">
                {" "}
                For questions about Connect, contact us at:{" "}
              </p>{" "}
              <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-divider)] rounded-lg p-6 mt-4">
                {" "}
                <p className="text-[var(--color-text-primary)]">
                  {" "}
                  <strong className="font-medium">Email:</strong>{" "}
                  privacy.savecash@gmail.com{" "}
                </p>{" "}
              </div>{" "}
            </section>{" "}
          </article>{" "}
        </div>{" "}
      </main>{" "}
      <Footer />{" "}
    </div>
  );
}
