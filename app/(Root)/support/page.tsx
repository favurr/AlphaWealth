import React from "react";
import ContactWidget from "@/components/contact-widget";
import SupportToc from "@/components/support-toc";
import { Gemini, MagicUI, Replit } from "@/components/logos";

export default function SupportPage() {
  return (
    <main className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-[1fr_240px_360px] lg:gap-12">
        {/* Left: Article / Blog style support */}
        <div className="lg:col-span-1">
          <article className="prose mx-auto w-full max-w-3xl lg:pr-0 prose-a:underline prose-a:text-primary">
            <h1 className="text-4xl font-semibold mb-2">
              Support & Help Center
            </h1>
            <p className="text-muted-foreground">
              Comprehensive support docs and quick contact options — jump to a
              section using the links below.
            </p>

            <section id="getting-started" className="scroll-mt-24">
              <h2>Getting started</h2>
              <p>
                Welcome — to buy, sell, or transfer crypto on our platform
                you'll need a verified account. Start by creating an account,
                then verify your email and complete identity verification for
                higher limits.
              </p>
            </section>

            <section id="account-verification" className="scroll-mt-24">
              <h2>Account & verification</h2>
              <h3 id="creating-account">Creating an account</h3>
              <p>
                Create an account with your email address and set a strong
                password. We recommend enabling 2FA in Security settings after
                signup.
              </p>

              <h3 id="verification-process">Verification process</h3>
              <p>
                Identity verification (KYC) requires official documents and may
                vary by region. Typical documents include passport or driving
                licence and a proof of address.
              </p>

              <h3 id="lost-access">Lost access or locked accounts</h3>
              <p>
                If you lose access to your account, please contact support with
                your registered email and a description of the issue. For
                account locks due to security, our team will guide you through
                identity checks.
              </p>
            </section>

            <section id="buying-and-deposits" className="scroll-mt-24">
              <h2>Buying & deposits</h2>
              <p>
                We support multiple payment methods: crypto transfers, bank
                transfers, cards, and selected third-party providers. During
                checkout we surface expected fees, estimated arrival, and any
                provider-specific instructions.
              </p>

              <h3 id="deposit-funds">How to deposit funds</h3>
              <p>
                Choose the asset and payment method, follow the provider
                instructions, and confirm the transaction. On-chain deposits
                will appear after the required number of confirmations — this
                varies per blockchain and token.
              </p>

              <div className="mt-4 flex items-center gap-3">
                <span className="text-sm text-muted-foreground">
                  Supported providers:
                </span>
                <div className="flex items-center gap-3">
                  <Gemini />
                  <MagicUI />
                  <Replit />
                </div>
              </div>

              <h3 id="payment-failures">Payment failures</h3>
              <p>
                If a payment fails, check the provider or your bank for status
                and contact support with the transaction reference and timestamp
                for faster investigation.
              </p>

              <h3 id="region-specifics">Region specifics</h3>
              <p>
                Availability of payment methods varies by country. Some
                providers only support local bank transfers, others support
                cards in certain regions. If you don’t see a method you expect,
                check the country selector during checkout or contact support
                for alternatives.
              </p>
            </section>

            <section id="withdrawals-and-transfers" className="scroll-mt-24">
              <h2>Withdrawals & transfers</h2>
              <p>
                Withdrawals may require additional verification and can include
                network fees. Always confirm the destination address and
                double-check network compatibility for tokens.
              </p>
            </section>

            <section id="payments-fees-limits" className="scroll-mt-24">
              <h2>Payments, fees & limits</h2>
              <p>
                All fees and limits are displayed before you confirm a
                transaction. Fees may include provider fees, blockchain network
                fees, and platform fees.
              </p>

              <h3 id="fee-types">Fee types</h3>
              <ul>
                <li>
                  <strong>Network fees:</strong> Paid to miners/validators —
                  varies with network congestion.
                </li>
                <li>
                  <strong>Provider fees:</strong> Card and payment processor
                  fees (shown at checkout).
                </li>
                <li>
                  <strong>Platform fees:</strong> Small spread or service fee
                  for conversions or instant settlement.
                </li>
              </ul>

              <h3 id="limits">Limits & verification</h3>
              <p>
                Default limits are modest — increasing them requires completing
                additional KYC verification. For large transfers or business
                accounts, please contact support to discuss bespoke limits and
                onboarding.
              </p>
            </section>

            <section id="security" className="scroll-mt-24">
              <h2>Security</h2>
              <h3 id="two-factor">Two-factor authentication</h3>
              <p>
                Enable 2FA (TOTP) to add an additional protection layer. If you
                lose your 2FA device, contact support for recovery options.
              </p>

              <h3 id="suspicious-activity">Suspicious activity</h3>
              <p>
                Report suspicious activity immediately. We may pause account
                actions and require additional verification to protect your
                funds.
              </p>
            </section>

            <section id="kyc-and-compliance" className="scroll-mt-24">
              <h2>KYC & compliance</h2>
              <p>
                Compliance requirements depend on the jurisdiction and the
                selected services. We will prompt for identity verification
                where required.
              </p>
            </section>

            <section id="troubleshooting" className="scroll-mt-24">
              <h2>Troubleshooting</h2>
              <h3 id="tx-not-arrived">Transaction hasn't arrived</h3>
              <p>
                Confirm the transaction ID on a block explorer and check
                required confirmations. If you believe funds were sent but not
                credited, open a support ticket with the TXID.
              </p>

              <h3 id="app-errors">App or interface errors</h3>
              <p>
                Try clearing cache and cookies, or use an incognito window. If
                errors persist, provide screenshots and console logs to support
                for faster diagnosis.
              </p>
            </section>

            <section id="integrations-api" className="scroll-mt-24">
              <h2>Integrations & API</h2>
              <p>
                Our public APIs and integrations are documented separately. For
                production access, request API credentials through support and
                follow rate limits and security guidelines.
              </p>
            </section>

            <section id="contact-reporting" className="scroll-mt-24">
              <h2>Contact & reporting</h2>
              <p>
                Use the contact form on the right for general inquiries, or
                email support@example.com for urgent issues. For abuse,
                phishing, or security incidents, include as much detail as
                possible.
              </p>
            </section>
          </article>
        </div>
      </div>

      {/* Middle: TOC column (aligned left next to content) */}
      <div className="hidden lg:block lg:col-start-2">
        <div className="sticky top-28">
          <SupportToc />
        </div>
      </div>

      {/* Right: Contact column */}
      <div className="hidden lg:block lg:col-start-3">
        <div className="sticky top-28 max-h-[calc(100vh-112px)] overflow-auto">
          <ContactWidget />
        </div>
      </div>

      {/* Mobile: show contact below article */}
      <div className="lg:hidden mx-auto max-w-3xl px-6 mt-8">
        <ContactWidget />
      </div>
    </main>
  );
}
