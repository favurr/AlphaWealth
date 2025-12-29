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
    slug: "welcome",
    title: "Welcome to Modernize",
    date: "2025-12-01",
    excerpt: "An intro to the Modernize demo site and project goals.",
    content: `
      <p>Welcome to <strong>Modernize</strong> — a demo Next.js project showcasing modern patterns, components, and content-driven pages.</p>
      <h2 id="what-is-modernize">What is Modernize?</h2>
      <p>Modernize is an opinionated starter that demonstrates the App Router, shadcn/ui, Tailwind, and straightforward content patterns for blogs and support docs.</p>
      <h3 id="getting-started">Getting started</h3>
      <ul>
        <li>Browse the blog index to see demos of article pages and search.</li>
        <li>Open the support docs to view a long-form article with a generated table of contents.</li>
        <li>Use the search box to try the lightweight autocomplete demo.</li>
      </ul>
      <p>Check out the code in the <a href="https://github.com/your-repo">repository</a> to learn how the pieces fit together.</p>
    `,
  },

  {
    slug: "announcing-features",
    title: "Announcing New Features",
    date: "2025-11-20",
    excerpt: "A rundown of features released in the latest update.",
    content: `
      <p>We're excited to ship several improvements to the platform this month.</p>
      <h2 id="performance">Performance improvements</h2>
      <p>Page loads are faster and some common operations have been optimized to reduce server work.</p>
      <h2 id="ui-enhancements">UI & accessibility</h2>
      <p>We polished several screens and added keyboard-friendly interactions in the search and modal components.</p>
      <h2 id="developer-experience">Developer experience</h2>
      <ol>
        <li>Improved TypeScript types across the app.</li>
        <li>Refactored components into smaller, testable units.</li>
        <li>Standardized layout primitives for consistent spacing.</li>
      </ol>
      <p>Thanks to the contributors and the community for the feedback.</p>
    `,
  },

  {
    slug: "security-best-practices",
    title: "Security Best Practices",
    date: "2025-10-10",
    excerpt: "Practical tips to keep your account and funds safe.",
    content: `
      <p>Security is paramount — here are recommended steps for protecting accounts.</p>
      <h2 id="use-2fa">Use two-factor authentication (2FA)</h2>
      <p>Enable TOTP-based 2FA from the Security settings to add an extra layer of protection.</p>
      <h2 id="phishing-awareness">Phishing and account safety</h2>
      <ul>
        <li>Never share your password or recovery codes.</li>
        <li>Verify domain names and avoid clicking links from unknown senders.</li>
        <li>Use a password manager to generate and store strong passwords.</li>
      </ul>
      <h2 id="suspicious-activity">Reporting suspicious activity</h2>
      <p>Report any suspicious activity to our support team and include timestamps or transaction IDs when possible.</p>
    `,
  },

  {
    slug: "how-to-deposit",
    title: "How to Deposit Funds",
    date: "2025-09-03",
    excerpt:
      "Step-by-step guide to depositing crypto or fiat into your account.",
    content: `
      <p>Depositing funds is simple: choose asset, choose payment method, confirm.</p>
      <h2 id="crypto-deposits">Crypto deposits</h2>
      <p>Send tokens to the provided deposit address. Always double-check the network and the address before sending.</p>
      <h2 id="bank-and-card">Bank transfers & cards</h2>
      <p>Card and bank payments are supported via third-party providers — check estimated arrival times at checkout.</p>
      <h2 id="expected-times">Expected arrival times</h2>
      <ul>
        <li>On-chain confirms: depends on network congestion.</li>
        <li>Bank transfers: 1-3 business days (varies by region).</li>
        <li>Card payments: usually instant but may be subject to provider checks.</li>
      </ul>
      <p>If your deposit does not arrive, provide the transaction ID to support for investigation.</p>
    `,
  },

  {
    slug: "support",
    title: "Support & Help Center",
    date: "2025-12-15",
    excerpt:
      "Comprehensive support article covering common questions and workflows.",
    isSupport: true,
    content: `
      <p>Welcome to the Support & Help Center — find practical help and contact options below.</p>

      <h2 id="getting-started">Getting started</h2>
      <p>To get started, create an account, verify your email, and complete identity verification for higher limits.</p>

      <h2 id="account-verification">Account & verification</h2>
      <h3 id="creating-account">Creating an account</h3>
      <p>Create an account with your email and set a strong password. Enable 2FA for added security.</p>

      <h3 id="verification-process">Verification process</h3>
      <p>Verification requires a government-issued ID and occasionally a proof of address.</p>

      <h3 id="lost-access">Lost access</h3>
      <p>If you lose access, contact support with your registered email and relevant details to start recovery.</p>

      <h2 id="buying-and-deposits">Buying & deposits</h2>
      <p>We support crypto transfers, bank transfers, and card payments where available.</p>

      <h3 id="deposit-funds">How to deposit funds</h3>
      <p>Choose asset and payment method, then follow provider instructions. On-chain deposits require confirmations.</p>

      <h3 id="payment-failures">Payment failures</h3>
      <p>If a payment fails, check the provider or bank status and forward transaction details to support.</p>

      <h2 id="withdrawals">Withdrawals & transfers</h2>
      <p>Withdrawals may require additional verification and will incur network fees. Always validate destination addresses.</p>

      <h2 id="fees-limits">Fees & limits</h2>
      <p>Fees are shown at checkout and depend on provider and network conditions. Limits depend on verification level.</p>

      <h2 id="security">Security</h2>
      <p>Enable 2FA, use a password manager, and report suspicious activity immediately.</p>

      <h2 id="contact-reporting">Contact & reporting</h2>
      <p>Use the contact widget to reach support or email support@example.com for urgent issues.</p>
    `,
  },
];

export default BLOG_POSTS;
