import Callout from "./components/ui/Callout";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  isSupport?: boolean;
  content?: string; // rich HTML
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "support",
    title: "Support & Help Center",
    date: "2025-12-15",
    excerpt:
      "Everything you need to know about using AlphaWealth — account setup, verification, deposits, withdrawals, security, and how to get help.",
    isSupport: true,
    content: `
  <p>
    Welcome to the <strong>AlphaWealth Support & Help Center</strong>. This guide helps you navigate
    the platform confidently — from account setup to security and contacting support.
  </p>

  <Callout type="support">
    If you’re new, start with <em>Getting Started</em>. Facing an issue?
    Jump directly to the relevant section below.
  </Callout>

  <hr />

  <h2 id="getting-started">Getting started</h2>
  <p>
    AlphaWealth is built to be simple, secure, and transparent. Getting started takes just a few minutes.
  </p>

  <img
    src="https://images.unsplash.com/photo-1556742049-908f2bccf6a0"
    alt="Getting started with AlphaWealth"
  />

  <ol>
    <li>Create an account using a valid email address</li>
    <li>Verify your email to activate your account</li>
    <li>Secure your account with a strong password and 2FA</li>
    <li>Complete identity verification to unlock higher limits</li>
  </ol>

  <hr />

  <h2 id="account-verification">Account & verification</h2>
  <p>
    Verification helps keep the platform safe and compliant. The process ensures that your identity is secure.
  </p>

  <img
    src="https://images.unsplash.com/photo-1601597112504-ef7bcf7d981f"
    alt="Account verification"
  />

  <h3 id="creating-account">Creating an account</h3>
  <p>
    Sign up with your email and choose a strong password. Use a password manager to generate and store your credentials securely.
  </p>

  <ul>
    <li>Passwords should be at least 12 characters long</li>
    <li>Avoid reusing passwords from other services</li>
    <li>Never share your login details</li>
  </ul>

  <h3 id="verification-process">Verification process (KYC)</h3>
  <p>
    Depending on your region and activity, you may need:
  </p>

  <ul>
    <li>A government-issued photo ID</li>
    <li>A selfie or live photo</li>
    <li>Proof of address in some cases</li>
  </ul>

  <Callout type="tip">
    Verification usually completes within a few hours, but may take
    24–48 hours during peak periods.
  </Callout>

  <h3 id="lost-access">Lost access / account recovery</h3>
  <p>
    If you lose access, contact support with:
  </p>

  <ul>
    <li>Registered email address</li>
    <li>Last successful login date (approximate)</li>
    <li>Any relevant transaction references</li>
  </ul>

  <hr />

  <h2 id="buying-and-deposits">Buying & deposits</h2>
  <p>
    AlphaWealth supports multiple funding methods depending on your region.
  </p>

  <img
    src="https://images.unsplash.com/photo-1621504450181-5d356f61d307"
    alt="Depositing funds"
  />

  <h3 id="deposit-funds">How to deposit funds</h3>
  <ol>
    <li>Navigate to Wallet or Deposit page</li>
    <li>Select the asset to deposit</li>
    <li>Choose a payment method (crypto, bank, or card)</li>
    <li>Follow on-screen instructions carefully</li>
  </ol>

  <h3 id="payment-failures">Payment failures</h3>
  <p>
    Payment failures can happen due to:
  </p>

  <ul>
    <li>Insufficient balance</li>
    <li>Bank/card restrictions</li>
    <li>Network congestion</li>
    <li>Provider-side issues</li>
  </ul>

  <Callout type="warning">
    If funds are deducted but not credited, contact support with the
    transaction reference before retrying.
  </Callout>

  <hr />

  <h2 id="withdrawals">Withdrawals & transfers</h2>
  <p>
    Withdrawals may require additional verification depending on your activity.
  </p>

  <img
    src="https://images.unsplash.com/photo-1591696331115-097ed312df9f"
    alt="Withdrawals and transfers"
  />

  <ul>
    <li>Double-check destination addresses</li>
    <li>Ensure the correct network is selected</li>
    <li>Be aware of applicable network fees</li>
  </ul>

  <Callout type="warning">
    Blockchain transactions cannot be reversed once sent.
    Always confirm details before submitting.
  </Callout>

  <hr />

  <h2 id="fees-limits">Fees & limits</h2>
  <p>
    Fees and limits depend on verification level and the service used.
  </p>

  <ul>
    <li>Trading fees are displayed before confirmation</li>
    <li>Network fees vary with blockchain conditions</li>
    <li>Higher verification levels unlock higher limits</li>
  </ul>

  <hr />

  <h2 id="security">Security best practices</h2>
  <p>
    Keep your account secure with these recommended steps:
  </p>

  <img
    src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
    alt="Account security"
  />

  <ul>
    <li>Enable two-factor authentication (2FA)</li>
    <li>Use a password manager</li>
    <li>Never share recovery codes</li>
    <li>Bookmark the official AlphaWealth domain</li>
  </ul>

  <h3 id="suspicious-activity">Suspicious activity</h3>
  <p>
    If you notice unusual logins, withdrawals, or emails claiming to be from AlphaWealth:
  </p>

  <ol>
    <li>Change your password immediately</li>
    <li>Disable active sessions</li>
    <li>Contact support with full details</li>
  </ol>

  <Callout type="security">
    AlphaWealth staff will never ask for your password,
    2FA codes, or recovery phrases.
  </Callout>

  <hr />

  <h2 id="contact-reporting">Contact & reporting</h2>
  <p>
    Our support team is here to help you resolve issues quickly.
  </p>

  <ul>
    <li>Use the in-app chat widget for general support</li>
    <li>Email <a href="mailto:support@example.com">support@example.com</a> for account-related issues</li>
    <li>Include screenshots and transaction IDs when applicable</li>
  </ul>

  <Callout type="support">
    Thank you for choosing AlphaWealth.
    We’re committed to providing a secure, transparent,
    and reliable experience for all users.
  </Callout>
  `,
  },
];

export default BLOG_POSTS;
