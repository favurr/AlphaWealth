"use client";

import React from "react";
import { useEffect, useState } from "react";
import {
  BookOpen,
  UserCheck,
  CreditCard,
  ArrowUpRight,
  Tag,
  ShieldCheck,
  FileCheck,
  Bug,
  Code,
  Mail,
} from "lucide-react";

type Item = { id: string; title: string; icon?: string };

const ICON_MAP: Record<string, React.ReactNode> = {
  getting_started: <BookOpen className="size-4 mr-2" />,
  account: <UserCheck className="size-4 mr-2" />,
  buying: <CreditCard className="size-4 mr-2" />,
  withdrawals: <ArrowUpRight className="size-4 mr-2" />,
  fees: <Tag className="size-4 mr-2" />,
  security: <ShieldCheck className="size-4 mr-2" />,
  kyc: <FileCheck className="size-4 mr-2" />,
  troubleshooting: <Bug className="size-4 mr-2" />,
  integrations: <Code className="size-4 mr-2" />,
  contact: <Mail className="size-4 mr-2" />,
};

export default function SupportToc({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [items]);

  return (
    <nav className="sticky top-28 rounded border bg-background p-4">
      <strong className="block mb-2">Contents</strong>
      <ul className="space-y-1 text-sm">
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(it.id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                  history.replaceState(null, "", `#${it.id}`);
                }
              }}
              className={
                "flex items-center gap-2 rounded px-2 py-1 hover:bg-accent/5 " +
                (active === it.id
                  ? "font-semibold text-primary"
                  : "text-muted-foreground")
              }
            >
              <span className="flex items-center">
                {ICON_MAP[it.icon || it.id] ?? null}
              </span>
              <span>{it.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
