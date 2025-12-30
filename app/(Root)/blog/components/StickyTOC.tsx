"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

interface StickyTOCProps {
  containerId: string; // ID of the article container
}

interface HeadingItem {
  id: string;
  text: string;
}

export default function StickyTOC({ containerId }: StickyTOCProps) {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const h2s = Array.from(
      container.querySelectorAll<HTMLHeadingElement>("h2[id]")
    );

    const items = h2s.map((h) => ({
      id: h.id,
      text: h.innerText,
    }));

    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-120px 0px -60% 0px",
        threshold: 0.1,
      }
    );

    h2s.forEach((h) => observer.observe(h));

    return () => observer.disconnect();
  }, [containerId]);

  if (headings.length === 0) return null;

  return (
    <aside className="hidden xl:block fixed right-10 top-28 w-64">
      <div className="rounded-lg border bg-background p-4 shadow-sm">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          On this page
        </p>

        <nav>
          <ul className="space-y-2 text-sm">
            {headings.map((h) => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  className={clsx(
                    "block transition-colors hover:text-primary",
                    activeId === h.id
                      ? "font-medium text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
