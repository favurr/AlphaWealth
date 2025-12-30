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
    src="https://images.unsplash.com/photo-1762330462333-18eb75514c62"
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
    src="https://images.unsplash.com/photo-1762340275855-ae8f4c2c144e"
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
    src="https://images.unsplash.com/photo-1642403711604-3908e90960ce"
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
    src="https://images.unsplash.com/photo-1616077168712-fc6c788db4af"
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
    src="https://images.unsplash.com/photo-1617228679684-890412dc57a5"
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
  {
    slug: "new-users",
    title: "New to AlphaWealth?",
    date: "2025-12-30",
    excerpt:
      "Read the Overview to quickly get up to speed with AlphaWealth’s platform, features, and best practices for new users.",
    content: `
    <p>
      Welcome to <strong>AlphaWealth</strong>! This guide is designed to help new users understand the platform quickly and start managing their portfolio confidently.
    </p>

    <Callout type="tip">
      If you’re new, start with the Overview. This section will guide you through the basics, key features, and best practices.
    </Callout>

    <hr />

    <h2 id="overview">Overview</h2>
    <p>
      AlphaWealth is an intelligent financial platform that combines portfolio management, investment insights, and secure transactions. Whether you’re a beginner or an experienced investor, the platform is designed to simplify your financial journey.
    </p>

    <ul>
      <li>Track your portfolio in real time</li>
      <li>Buy, sell, and swap assets securely</li>
      <li>Receive intelligent insights and recommendations</li>
      <li>Maintain top-level security with 2FA and account monitoring</li>
    </ul>

    <hr />

    <h2 id="getting-started">Getting Started</h2>
    <p>
      To begin, follow these steps to set up your AlphaWealth account:
    </p>

    <ol>
      <li>Create an account using a valid email address</li>
      <li>Verify your email to activate your account</li>
      <li>Set a strong password and enable two-factor authentication (2FA)</li>
      <li>Complete identity verification (KYC) for higher limits and full platform access</li>
    </ol>

    <Callout type="support">
      Need help? Visit our <a href="/blog/support">Support Center</a> for step-by-step instructions.
    </Callout>

    <hr />

    <h2 id="navigating-alphawealth">Navigating AlphaWealth</h2>
    <p>
      The platform is divided into key sections to help you manage your finances:
    </p>

    <ul>
      <li><strong>Wallet:</strong> Deposit, withdraw, and manage your assets.</li>
      <li><strong>Swap:</strong> Exchange assets quickly and securely.</li>
      <li><strong>Buy Crypto:</strong> Purchase cryptocurrencies using various payment methods.</li>
      <li><strong>Security:</strong> Manage your account settings, 2FA, and recovery options.</li>
      <li><strong>Blog & Insights:</strong> Stay informed with investment tips, news, and updates.</li>
    </ul>

    <hr />

    <h2 id="best-practices">Best Practices for New Users</h2>
    <ul>
      <li>Always enable two-factor authentication (2FA)</li>
      <li>Use a password manager to generate strong, unique passwords</li>
      <li>Double-check addresses when transferring funds</li>
      <li>Keep your recovery codes safe and private</li>
      <li>Check the official AlphaWealth domain to avoid phishing</li>
    </ul>

    <Callout type="tip">
      Bookmark this guide and the Support Center. They are your go-to resources as you learn the platform.
    </Callout>

    <hr />

    <h2 id="next-steps">Next Steps</h2>
    <p>
      After getting familiar with the platform, consider exploring:
    </p>

    <ul>
      <li>Setting up your first portfolio</li>
      <li>Learning about risk levels and investment strategies</li>
      <li>Following AlphaWealth blog updates and tutorials</li>
    </ul>

    <p>
      With these steps, you’ll be ready to use AlphaWealth effectively and securely. Welcome aboard!
    </p>
  `,
  },
  {
    slug: "transfer-to-bank",
    title: "Transfer Funds to Bank Account",
    date: "2025-12-30",
    excerpt:
      "Learn how to safely withdraw your crypto from AlphaWealth to your bank account or swap it within the platform.",
    content: `
    <p>
      At <strong>AlphaWealth</strong>, you have multiple ways to manage your crypto. You can withdraw funds directly to your bank account, swap them for other assets, or keep them in your wallet for future trades. This guide focuses on transferring funds to your bank account.
    </p>

    <Callout type="tip">
      Always double-check your bank details before confirming any withdrawal.
    </Callout>

    <hr />

    <h2 id="prepare-your-account">Prepare Your Account</h2>
    <p>
      Before transferring funds, make sure your account is ready:
    </p>
    <ul>
      <li>Complete identity verification (KYC) to unlock higher withdrawal limits.</li>
      <li>Enable two-factor authentication (2FA) to secure your account.</li>
      <li>Ensure your wallet balance has enough funds for the withdrawal amount.</li>
    </ul>

    <hr />

    <h2 id="transfer-funds">Step-by-Step: Transfer to Bank</h2>
    <ol>
      <li>Log in to your AlphaWealth account and open the <strong>Wallet</strong> page.</li>
      <li>Select the cryptocurrency you want to withdraw.</li>
      <li>Click <strong>Withdraw</strong> and choose <strong>Bank Transfer</strong> as your method.</li>
      <li>Enter your verified bank account details and the amount to transfer.</li>
      <li>Review transaction fees applied by AlphaWealth and your bank.</li>
      <li>Confirm the withdrawal and authorize via 2FA if prompted.</li>
      <li>Wait for the funds to appear in your bank account. Transfer times vary depending on your bank.</li>
    </ol>

    <Callout type="warning">
      Transfers to unverified bank accounts are not supported. Double-check your details to avoid delays.
    </Callout>

    <hr />

    <h2 id="alternative-options">Other Ways to Use Your Funds</h2>
    <p>
      AlphaWealth also allows you to:
    </p>
    <ul>
      <li>Swap your crypto for other supported assets directly within the platform.</li>
      <li>Keep your funds in the wallet for future trades or investments.</li>
      <li>Use the portfolio dashboard to track asset performance before selling or withdrawing.</li>
    </ul>

    <hr />

    <h2 id="tips-for-smooth-transfers">Tips for Smooth Transfers</h2>
    <ul>
      <li>Verify your bank account before initiating withdrawals.</li>
      <li>Check network fees and platform fees to optimize your transfers.</li>
      <li>Keep a record of your transaction reference numbers for support or auditing.</li>
    </ul>

    <Callout type="support">
      Need help? Visit our <a href="/blog/support">Support Center</a> for assistance with withdrawals or swaps.
    </Callout>

    <hr />

    <h2 id="next-steps">Next Steps</h2>
    <p>
      Once your funds are in your bank account, you can:
    </p>
    <ul>
      <li>Use them for personal expenses or reinvest them on AlphaWealth.</li>
      <li>Track your transactions for accounting or tax purposes.</li>
      <li>Explore swapping or portfolio management features to optimize your assets.</li>
    </ul>

    <p>
      AlphaWealth gives you the flexibility to move funds securely, swap assets, and manage your portfolio — all in one place.
    </p>
  `,
  },
  {
    slug: "report-scam-fraud",
    title: "Report a Scam or Fraud",
    date: "2025-12-30",
    excerpt:
      "Learn how to identify and report suspicious activity or scams safely on AlphaWealth.",
    isSupport: true,
    content: `
    <p>
      At <strong>AlphaWealth</strong>, your security is our top priority. If you encounter a scam, phishing attempt, or suspicious transaction, it’s important to report it immediately. This guide shows you how to act quickly and safely.
    </p>

    <Callout type="warning">
      Never share your password, 2FA codes, or recovery phrases with anyone claiming to be AlphaWealth staff.
    </Callout>

    <hr />

    <h2 id="identifying-scams">Identifying Scams</h2>
    <p>Common signs of scams or fraud include:</p>
    <ul>
      <li>Unsolicited messages asking for passwords or 2FA codes</li>
      <li>Suspicious links or emails that do not come from official AlphaWealth domains</li>
      <li>Promises of guaranteed profits or unrealistic returns</li>
      <li>Requests to send crypto to unknown accounts</li>
    </ul>

    <hr />

    <h2 id="reporting-scams">How to Report a Scam</h2>
    <ol>
      <li>Do not interact with the suspicious message or link.</li>
      <li>Take screenshots or note transaction IDs if relevant.</li>
      <li>Go to the <a href="/blog/support">Support Center</a> on AlphaWealth.</li>
      <li>Submit a report detailing the suspicious activity, including any screenshots and relevant transaction details.</li>
      <li>Follow instructions from the support team to secure your account if needed.</li>
    </ol>

    <Callout type="support">
      Our support team will investigate all reports and provide guidance to keep your account safe.
    </Callout>

    <hr />

    <h2 id="protecting-yourself">Protecting Yourself</h2>
    <ul>
      <li>Enable 2FA for all accounts</li>
      <li>Use strong, unique passwords for your email and AlphaWealth account</li>
      <li>Only use official AlphaWealth links and apps</li>
      <li>Monitor your wallet and transactions regularly</li>
    </ul>

    <hr />

    <h2 id="next-steps">Next Steps</h2>
    <p>
      After reporting, keep an eye on your account for unusual activity and follow any instructions from AlphaWealth support. Reporting scams helps protect you and the entire community.
    </p>
  `,
  },
  {
    slug: "wrong-network-transfer",
    title: "Sent Crypto to the Wrong Network?",
    date: "2025-12-30",
    excerpt:
      "Learn how to avoid sending crypto to the wrong network and what steps to take if it happens on AlphaWealth.",
    isSupport: true,
    content: `
    <p>
      Sending crypto to the wrong network is a common mistake that can lead to lost funds. At <strong>AlphaWealth</strong>, we want you to understand how to prevent this and what to do if it happens.
    </p>

    <Callout type="warning">
      Blockchain transactions are irreversible. Always double-check the network before sending any funds.
    </Callout>

    <hr />

    <h2 id="how-it-happens">How Sending to the Wrong Network Happens</h2>
    <p>
      Crypto assets exist on specific networks. For example, USDT can exist on Ethereum (ERC-20), Binance Smart Chain (BEP-20), and others. Sending USDT on Ethereum to a BEP-20 address without using a bridge can result in a lost transaction.
    </p>

    <ul>
      <li>Choosing the wrong network when withdrawing from your AlphaWealth wallet.</li>
      <li>Copying the wrong wallet address format for the network.</li>
      <li>Using third-party platforms without verifying supported networks.</li>
    </ul>

    <hr />

    <h2 id="steps-to-prevent">Steps to Prevent Wrong Network Transfers</h2>
    <ul>
      <li>Always check the network of the recipient address before confirming a transfer.</li>
      <li>Verify that the asset you are sending is supported on the chosen network.</li>
      <li>Use the AlphaWealth wallet interface to confirm network details carefully.</li>
      <li>If unsure, do a small test transfer first before sending large amounts.</li>
    </ul>

    <hr />

    <h2 id="if-it-happens">If You Accidentally Send to the Wrong Network</h2>
    <p>
      While transactions are generally irreversible, you can take the following steps:
    </p>
    <ul>
      <li>Do not repeat the transfer — avoid further transactions until resolved.</li>
      <li>Check if the receiving wallet supports cross-network recovery.</li>
      <li>Gather all transaction details (hash, amount, sender/recipient addresses).</li>
      <li>Contact the recipient platform's support to see if recovery is possible.</li>
      <li>For AlphaWealth transactions, contact our <a href="/blog/support">Support Center</a> immediately with all relevant details.</li>
    </ul>

    <Callout type="support">
      Our team can guide you on potential recovery options if the network and asset allow it.
    </Callout>

    <hr />

    <h2 id="best-practices">Best Practices</h2>
    <ul>
      <li>Always confirm the network before sending crypto.</li>
      <li>Use official AlphaWealth wallet addresses and interface.</li>
      <li>Enable 2FA to secure your transactions.</li>
      <li>Keep a record of your transaction hashes for reference.</li>
    </ul>

    <p>
      By following these precautions, you can minimize the risk of sending funds to the wrong network and protect your crypto assets.
    </p>
  `,
  },
  {
    slug: "selling-crypto-fails",
    title: "What to Do If Selling Crypto Fails",
    date: "2025-12-30",
    excerpt:
      "A practical guide for users on handling failed crypto sales safely and efficiently on AlphaWealth.",
    isSupport: true,
    content: `
    <p>
      Sometimes, selling crypto can fail due to network issues, insufficient balance, or payment processing errors. At <strong>AlphaWealth</strong>, you can follow these steps to troubleshoot and resolve failed transactions safely.
    </p>

    <Callout type="warning">
      Never attempt to sell the same amount multiple times without confirming the previous transaction status, as it could cause errors or double spending.
    </Callout>

    <hr />

    <h2 id="common-reasons">Common Reasons for Sale Failures</h2>
    <ul>
      <li>Network congestion or delays on the blockchain.</li>
      <li>Insufficient wallet balance or pending transactions.</li>
      <li>Incorrect or unsupported payment method selected.</li>
      <li>Temporary issues with your bank or payment provider.</li>
    </ul>

    <hr />

    <h2 id="steps-to-resolve">Steps to Resolve Failed Sales</h2>
    <ol>
      <li>Check your wallet balance to ensure the funds were not deducted.</li>
      <li>Review the transaction history for pending or failed entries.</li>
      <li>Wait a few minutes if the failure is due to network congestion.</li>
      <li>Confirm that your selected payment method is supported and active.</li>
      <li>If the issue persists, gather your transaction ID, crypto type, and amount.</li>
      <li>Contact the <a href="/blog/support">Support Center</a> with all relevant details for assistance.</li>
    </ol>

    <Callout type="support">
      Our support team can verify the transaction status and help recover funds if needed.
    </Callout>

    <hr />

    <h2 id="preventing-future-failures">Preventing Future Failures</h2>
    <ul>
      <li>Double-check the amount and crypto type before confirming sales.</li>
      <li>Ensure your wallet balance covers both the sale amount and any transaction fees.</li>
      <li>Use verified payment methods and ensure they are active.</li>
      <li>Enable 2FA for all transactions to secure your account.</li>
    </ul>

    <p>
      By following these steps, you can safely handle failed crypto sales and minimize the risk of losing funds.
    </p>
  `,
  },
];

export default BLOG_POSTS;

// https://images.unsplash.com/photo-1620228885847-9eab2a1adddc
