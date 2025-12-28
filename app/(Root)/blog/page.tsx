"use client";

import React, { useMemo, useState } from "react";
import Script from "next/script";

export default function BlogHomePage() {
  const [query, setQuery] = useState("");

  const banners = [
    {
      id: "priority-support",
      title: "Get Priority Support",
      subtitle: "Jump the queue — connect your wallet to qualify",
      color: "bg-blue-600",
      accent: "bg-yellow-300",
    },
    {
      id: "free-support",
      title: "Get Free Support",
      subtitle: "Receive a reply within 72 hours — ask our chatbot",
      color: "bg-white",
      border: true,
    },
    {
      id: "exclusive",
      title: "Premium for TWT holders",
      subtitle: "Lock 50 TWT for priority and exclusive services",
      color: "bg-gradient-to-r from-purple-600 to-pink-600",
    },
  ];

  const trending = [
    {
      id: "t1",
      title: "Market roundup: This week in crypto",
      excerpt: "Key moves, notable listings and a quick market health check.",
    },
    {
      id: "t2",
      title: "How to secure your account",
      excerpt: "Practical steps to protect your funds and recognise phishing.",
    },
    {
      id: "t3",
      title: "Margin trading 101",
      excerpt: "An intro to margin positions and risk management.",
    },
    {
      id: "t4",
      title: "Understanding network fees",
      excerpt: "Why fees change and how to minimise costs.",
    },
    {
      id: "t5",
      title: "Deposit guide: bank vs card",
      excerpt: "Choose the right method and avoid common mistakes.",
    },
    {
      id: "t6",
      title: "Intro to staking",
      excerpt: "Passive yield options for long-term holders.",
    },
  ];

  const supportTopics = [
    {
      id: "s1",
      title: "Verify your account",
      excerpt: "How to complete KYC and increase limits.",
    },
    {
      id: "s2",
      title: "Payment failures",
      excerpt: "Troubleshoot failed transactions and chargebacks.",
    },
    {
      id: "s3",
      title: "Withdrawals & transfers",
      excerpt: "Tips for faster and safer withdrawals.",
    },
    {
      id: "s4",
      title: "Two-factor auth",
      excerpt: "Enabling 2FA and recovery options.",
    },
    {
      id: "s5",
      title: "Suspicious activity",
      excerpt: "What to do if you suspect account compromise.",
    },
    {
      id: "s6",
      title: "Contact & reporting",
      excerpt: "How to open a ticket and what to include.",
    },
  ];

  const filteredTrending = useMemo(
    () =>
      trending.filter((t) =>
        (t.title + " " + t.excerpt).toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  const filteredSupport = useMemo(
    () =>
      supportTopics.filter((t) =>
        (t.title + " " + t.excerpt).toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  function openChat() {
    // Try to open Tawk widget if available, otherwise do nothing
    try {
      // @ts-ignore
      if (typeof window !== "undefined" && (window as any).Tawk_API) {
        // @ts-ignore
        (window as any).Tawk_API.maximize &&
          (window as any).Tawk_API.maximize();
        // @ts-ignore
        (window as any).Tawk_API.focus && (window as any).Tawk_API.focus();
      }
    } catch (e) {
      /* noop */
    }
  }

  return (
    <main className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <header className="max-w-4xl mb-10">
          <h1 className="text-4xl font-semibold mb-4">How can we help you</h1>
          <div className="flex items-center gap-4">
            <input
              aria-label="Search articles"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search our FAQs"
              className="w-full rounded-full border px-6 py-3 shadow-sm placeholder:text-muted-foreground"
            />
            <button
              className="rounded-full bg-primary px-4 py-2 text-white font-medium"
              onClick={(e) => e.preventDefault()}
            >
              Search
            </button>
          </div>
        </header>

        {/* Bento grid with 3 banners */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div
            className="lg:col-span-2 rounded-2xl p-8 text-white flex items-center justify-between"
            style={{ background: "linear-gradient(90deg,#0ea5e9,#3b82f6)" }}
          >
            <div>
              <h3 className="text-2xl font-semibold">{banners[0].title}</h3>
              <p className="mt-2 text-sm opacity-90">{banners[0].subtitle}</p>
              <div className="mt-4">
                <button
                  className="rounded-full bg-white text-blue-600 px-4 py-2 font-semibold mr-3"
                  onClick={(e) => e.preventDefault()}
                >
                  Connect Wallet
                </button>
                <button
                  className="rounded-full border border-white text-white px-4 py-2"
                  onClick={(e) => e.preventDefault()}
                >
                  Learn more
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-40 h-40 rounded-full bg-white/20" />
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-white border shadow-sm">
            <h3 className="text-xl font-semibold">{banners[1].title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {banners[1].subtitle}
            </p>
            <div className="mt-4">
              <button
                className="rounded-full bg-primary text-white px-4 py-2 mr-2"
                onClick={(e) => {
                  e.preventDefault();
                  openChat();
                }}
              >
                Ask our chatbot
              </button>
              <button
                className="rounded-full border px-4 py-2"
                onClick={(e) => e.preventDefault()}
              >
                Learn more
              </button>
            </div>
          </div>

          <div
            className="rounded-2xl p-6 text-white"
            style={{ background: "linear-gradient(90deg,#7c3aed,#ec4899)" }}
          >
            <h3 className="text-xl font-semibold">{banners[2].title}</h3>
            <p className="mt-2 text-sm opacity-90">{banners[2].subtitle}</p>
            <div className="mt-4">
              <button
                className="rounded-full bg-white text-purple-600 px-4 py-2"
                onClick={(e) => e.preventDefault()}
              >
                Connect wallet to access →
              </button>
            </div>
          </div>
        </section>

        {/* Trending topics */}
        <section className="mb-8">
          <div className="flex justify-between items-baseline">
            <h2 className="text-2xl font-semibold">Trending topics</h2>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-sm text-primary"
            >
              View all
            </a>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {filteredTrending.slice(0, 6).map((t) => (
              <article
                key={t.id}
                className="rounded-lg border p-4 bg-card shadow-sm"
              >
                <h3 className="font-semibold">{t.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {t.excerpt}
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-sm text-primary"
                  >
                    Read
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Support topics */}
        <section className="mb-8">
          <div className="flex justify-between items-baseline">
            <h2 className="text-2xl font-semibold">Support topics</h2>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-sm text-primary"
            >
              View all
            </a>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {filteredSupport.slice(0, 6).map((s) => (
              <article
                key={s.id}
                className="rounded-lg border p-4 bg-card shadow-sm"
              >
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {s.excerpt}
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-sm text-primary"
                  >
                    Read
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Introducing banner */}
        <section className="mb-6">
          <div
            className="rounded-2xl p-10 text-white"
            style={{ background: "linear-gradient(90deg,#111827,#0ea5e9)" }}
          >
            <h2 className="text-3xl font-semibold">Introducing AlphaWealth</h2>
            <p className="mt-2 text-lg opacity-90">
              Smart tools and insights to help you trade with confidence.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16 mt-4 flex items-center justify-between gap-6">
          <div>
            <p className="font-medium">Now what you are looking for?</p>
          </div>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                openChat();
              }}
              className="rounded-full bg-primary px-6 py-3 text-white font-semibold"
            >
              Ask our chatbot
            </button>
          </div>
        </section>
      </div>

      {/* Tawk.to script (will be loaded but chat open attempts will fallback if API missing) */}
      <Script id="tawk" strategy="afterInteractive">
        {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/65ab0f638d261e1b5f559d12/1jd50u5i7';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`}
      </Script>
    </main>
  );
}
