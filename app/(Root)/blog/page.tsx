"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Script from "next/script";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BannerGrid from "./components/BannerGrid";
import TopicGrid from "./components/TopicGrid";
import IntroBanner from "./components/IntroBanner";
import CTA from "./components/CTA";

export default function BlogHomePage() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // reset active index when query changes
    setActiveIndex(-1);
  }, [query]);

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
      subtitle: "Receive a reply within 72 hours",
      color: "bg-white",
      border: true,
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

  // Suggestions: combine lists and search only for suggestions (doesn't filter the page cards)
  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return [...trending, ...supportTopics].filter((it) =>
      (it.title + " " + it.excerpt).toLowerCase().includes(q)
    );
  }, [query]);

  useEffect(() => {
    setOpen(query.trim().length > 0 && suggestions.length > 0);
    setActiveIndex(-1);
  }, [query, suggestions.length]);

  function highlight(text: string, q: string) {
    if (!q) return text;
    const lc = text.toLowerCase();
    const qi = lc.indexOf(q.toLowerCase());
    if (qi === -1) return text;
    const before = text.slice(0, qi);
    const match = text.slice(qi, qi + q.length);
    const after = text.slice(qi + q.length);
    return (
      <>
        {before}
        <span className="bg-yellow-100 rounded px-0.5">{match}</span>
        {after}
      </>
    );
  }

  function selectSuggestion(s: { id: string; title: string }) {
    setQuery(s.title);
    setOpen(false);
    setActiveIndex(-1);
    inputRef.current?.blur();
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open) {
      if (e.key === "ArrowDown") setOpen(true);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && suggestions[activeIndex]) {
        selectSuggestion(suggestions[activeIndex]);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
    }
  }

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
    <main className="pb-18 pt-28">
      <div className="mx-auto max-w-7xl px-6">
        <header className="max-w-4xl mb-16">
          <h1 className="text-4xl font-semibold mb-4">How can we help you</h1>
          <div className="relative flex items-center gap-4">
            <div className="w-full">
              <Input
                aria-label="Search articles"
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Search our FAQs"
                className="rounded-full px-6 py-3 shadow-sm placeholder:text-muted-foreground"
                onFocus={() =>
                  setOpen(query.trim().length > 0 && suggestions.length > 0)
                }
              />

              {open && (
                <div
                  role="listbox"
                  aria-label="Search suggestions"
                  className="absolute left-0 right-0 mt-2 z-50 w-full rounded-md border bg-popover p-1 shadow-lg"
                >
                  <div className="px-3 py-2 text-sm font-medium">
                    Suggestions
                  </div>

                  {suggestions.slice(0, 6).map((s, idx) => (
                    <button
                      key={s.id}
                      role="option"
                      aria-selected={activeIndex === idx}
                      onMouseDown={(e) =>
                        e.preventDefault()
                      } /* keep input focus */
                      onClick={() => selectSuggestion(s)}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className={`w-full text-left px-4 py-3 ${
                        idx === activeIndex ? "bg-muted/10" : ""
                      }`}
                    >
                      <div className="text-sm font-medium">
                        {highlight(s.title, query)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {highlight(s.excerpt, query)}
                      </div>
                    </button>
                  ))}

                  {suggestions.length === 0 && (
                    <div className="px-4 py-3 text-sm text-muted-foreground">
                      No matching articles
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Bento grid (moved to component) */}
        <BannerGrid banners={banners} />

        <TopicGrid
          title="Trending topics"
          items={filteredTrending.slice(0, 6)}
        />

        <TopicGrid title="Support topics" items={filteredSupport.slice(0, 6)} />

        <IntroBanner />

        <CTA />
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
