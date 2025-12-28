export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags?: string[];
  isSupport?: boolean;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "welcome",
    title: "Welcome to Our Blog",
    excerpt:
      "Updates, product news, and guides for traders and builders. Start here to learn what's new.",
    date: "2025-12-01",
    tags: ["announcement"],
  },
  {
    slug: "announcing-features",
    title: "Announcing New Features",
    excerpt:
      "We shipped several improvements to deposits, KYC flow, and instant settlements—here's what's changed.",
    date: "2025-12-10",
    tags: ["product", "release"],
  },
  {
    slug: "security-best-practices",
    title: "Security Best Practices",
    excerpt:
      "Keep your account secure with these practical tips like enabling 2FA and recognising phishing attempts.",
    date: "2025-12-15",
    tags: ["security"],
  },
  {
    slug: "how-to-deposit",
    title: "How to Deposit Funds",
    excerpt:
      "A short walkthrough of deposit options, expected arrival times, and troubleshooting tips.",
    date: "2025-12-20",
  },
  {
    slug: "support",
    title: "Support & Help Center",
    excerpt:
      "Comprehensive support docs and quick contact options — full help center article.",
    date: "2025-12-28",
    tags: ["support"],
    isSupport: true,
  },
];
