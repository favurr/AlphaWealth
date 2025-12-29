"use client";

import React from "react";
import { Card } from "@/components/ui/card";

export default function IntroBanner() {
  return (
    <section className="mb-6 md:mt-24 md:mb-12">
      <Card className="p-6 py-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Introducing AlphaWealth</h2>
          <p className="mt-2 text-lg opacity-90">
            Smart tools and insights to help you trade with confidence.
          </p>
        </div>
      </Card>
    </section>
  );
}
