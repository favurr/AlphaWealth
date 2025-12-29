"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TopicGrid({
  title,
  items,
}: {
  title: string;
  items: { id: string; title: string; excerpt: string }[];
}) {
  return (
    <section className="mb-8 md:mb-16">
      <div className="flex justify-between items-baseline">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-sm text-primary"
        >
          View all
        </a>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((it) => (
          <Card key={it.id} className="p-4">
            <div className="space-y-2">
              <h3 className="font-semibold">{it.title}</h3>
              <p className="text-sm text-muted-foreground">{it.excerpt}</p>
            </div>
            <div className="mt-4">
              <Button
                onClick={(e) => e.preventDefault()}
                variant="link"
                size="sm"
              >
                Read
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
