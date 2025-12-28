"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Banner = {
  id: string;
  title: string;
  subtitle: string;
  color?: string;
  border?: boolean;
};

export default function BannerGrid({ banners }: { banners: Banner[] }) {
  function openChat() {
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
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <Card
        className="lg:col-span-2 p-8 text-white overflow-hidden"
        style={{ background: "linear-gradient(90deg,#0ea5e9,#3b82f6)" }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold">{banners[0].title}</h3>
            <p className="mt-2 text-sm opacity-90">{banners[0].subtitle}</p>
            <div className="mt-4 flex items-center">
              <Button
                onClick={(e) => e.preventDefault()}
                className="rounded-full bg-white text-blue-600 px-4 py-2 font-semibold mr-3"
              >
                Connect Wallet
              </Button>

              <Button
                onClick={(e) => e.preventDefault()}
                variant="outline"
                className="rounded-full border-white text-white px-4 py-2"
              >
                Learn more
              </Button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="w-40 h-40 rounded-full bg-white/20" />
          </div>
        </div>
      </Card>

      <Card className="p-6 flex flex-col justify-between text-left gap-2 dark:text-black">
        <h3 className="text-xl font-semibold">{banners[1].title}</h3>
        <p className="mt-2 text-sm text-muted-foreground dark:text-muted-foreground">
          {banners[1].subtitle}
        </p>
        <div className="mt-4">
          <Button
            onClick={(e) => {
              e.preventDefault();
              openChat();
            }}
            className="rounded-full bg-primary text-white px-4 py-2 mr-2"
          >
            Ask our chatbot
          </Button>
          <Button
            onClick={(e) => e.preventDefault()}
            variant="outline"
            className="rounded-full px-4 py-2"
          >
            Learn more
          </Button>
        </div>
      </Card>
    </section>
  );
}
