"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTheme } from "next-themes";
import { useEffect, useRef, memo } from "react";
import { Badge } from "./ui/badge";
import NewTradeForm from "./new-trade-form";

export const description = "An interactive area chart";

export function ChartAreaInteractive() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      allow_symbol_change: true,
      calendar: false,
      details: false,
      hide_side_toolbar: true,
      hide_top_toolbar: true,
      hide_legend: true,
      hide_volume: false,
      hotlist: false,
      interval: "D",
      locale: "en",
      save_image: true,
      style: "1",
      symbol: "BITSTAMP:BTCUSD",
      colorTheme: theme === "dark" ? "dark" : "light",
      timezone: "Etc/UTC",
      backgroundColor: "rgba(242, 242, 242, 0)",
      gridColor: "rgba(242, 242, 242, 0.06)",
      watchlist: [],
      withUpdateranges: false,
      compareSymbols: [],
      studies: [],
      autosize: true,
      height: "410",
    });
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-92">
        <Card className="@container/card min-w-[calc(100%+22rem)]!">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              Bitcoin/
            </CardTitle>
            <CardDescription>U.S. Dollar.</CardDescription>
            <CardAction>
              <Badge>
                <div className="flex gap-6">
                  1D. <span>Interval</span>
                </div>
              </Badge>
            </CardAction>
          </CardHeader>
          <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
            <div
              className="tradingview-widget-container"
              ref={containerRef}
              style={{ height: "410", width: "100%" }}
            >
              <div
                className="tradingview-widget-container__widget"
                style={{ height: "calc(100% - 32px)", width: "100%" }}
              ></div>
            </div>
          </CardContent>
        </Card>
        <Card className="@container/card ">
          <CardHeader>
            <CardTitle>New Trade</CardTitle>
            <CardAction></CardAction>
          </CardHeader>
          <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
            <NewTradeForm />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
