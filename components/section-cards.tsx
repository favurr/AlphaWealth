"use client";

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bitcoin,
  ChartNoAxesCombined,
  ChevronDown,
  ChevronUp,
  CircleDollarSign,
  Tags,
  Wallet,
  TrendingUpDown,
  Megaphone,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

interface DashboardData {
  capitalBTC: number;
  capitalUSD: number;
  accumulativeBTC: number;
  accumulativeUSD: number;
  bonusBTC: number;
  profitBTC: number;
  profitUSD: number;
  tradeStatus: "WIN" | "LOSS";
  cryptoPlan: "SILVER" | "GOLD" | "DIAMOND" | "ELITE" | "EXCLUSIVE";
}

export default function SectionCards({ data }: { data: DashboardData }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "BINANCE:BTCUSDT", title: "BTC/USDT" },
        { proName: "BINANCE:ETHUSDT", title: "ETH/USDT" },
        { proName: "NASDAQ:AAPL", title: "AAPL" },
        { proName: "NASDAQ:TSLA", title: "TSLA" },
      ],
      colorTheme: theme === "dark" ? "dark" : "light",
      locale: "en",
      displayMode: "adaptive",
    });

    containerRef.current.appendChild(script);
  }, [theme]);

  const usd = (n: number) => `$${n.toFixed(2)}`;
  const btc = (n: number) => n.toFixed(8);

  return (
    <>
      <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Capital</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {usd(data.capitalUSD)}
            </CardTitle>
            <CardAction>
              <Wallet size={"32px"} />
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex justify-center items-center gap-2 font-medium">
              <Bitcoin className="size-3.5" /> BTC
            </div>
            <div className="text-muted-foreground">{btc(data.capitalBTC)}</div>
          </CardFooter>
        </Card>
        <Card className="@container/card">
          
          <CardHeader>
            
            <CardDescription>Accumulating Balance</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              
              {usd(data.accumulativeUSD)}
            </CardTitle>
            <CardAction>
              
              <CircleDollarSign size={"32px"} />
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            
            <div className="line-clamp-1 flex justify-center items-center gap-2 font-medium">
              
              <Bitcoin className="size-3.5" /> BTC
            </div>
            <div className="text-muted-foreground">{btc(data.accumulativeBTC)}</div>
          </CardFooter>
        </Card>
        <Card className="@container/card">
          
          <CardHeader>
            
            <CardDescription>Trade Status</CardDescription>
            <CardAction>
              
              <TrendingUpDown size={"32px"} />
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-row items-start gap-1.5 text-sm">
            
            <div className="flex-1">
              
              <div className="line-clamp-1 flex items-center gap-2 font-medium">
                
                <ChevronUp
                  strokeWidth={"10px"}
                  className="size-6 text-primary"
                />
                {data.tradeStatus === "WIN" ? "1" : "0"}
              </div>
              <div className="text-muted-foreground">Win</div>
            </div>
            <div className="">
              
              <div className="line-clamp-1 flex items-center gap-2 font-medium">
                
                <ChevronDown
                  strokeWidth={"10px"}
                  className="size-6 text-destructive"
                />
                {data.tradeStatus === "LOSS" ? "1" : "0"}
              </div>
              <div className="text-muted-foreground">Loss</div>
            </div>
          </CardFooter>
        </Card>
        <Card className="@container/card">
          
          <CardHeader>
            
            <CardDescription>Crypto Plan</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              
              <div className="line-clamp-1 flex gap-2 text-sm! font-normal!">
                
                Package Status:
              </div>
              {data.cryptoPlan}
            </CardTitle>
            <CardAction>
              
              <Tags size={"32px"} />
            </CardAction>
          </CardHeader>
        </Card>
      </div>
      <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-48 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-2">
        
        <Card className="@container/card min-w-[calc(100%+11rem)]!">
          
          <CardHeader>
            
            <CardDescription>Trending</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              
              Market
            </CardTitle>
            <CardAction>
              
              <Megaphone size={"32px"} />
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            
            <div className="tradingview-widget-container" ref={containerRef}>
              
              <div className="tradingview-widget-container__widget"></div>
            </div>
          </CardFooter>
        </Card>
        <Card className="@container/card px-4">
          
          <CardHeader>
            
            <CardDescription>Profit</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              
              {usd(data.profitUSD)}
            </CardTitle>
            <CardAction>
              
              <ChartNoAxesCombined size={"32px"} />
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-row gap-1.5 text-sm">
            
            <div className="flex-1">
              
              <div className="line-clamp-1 flex items-center gap-2 font-medium">
                
                <Bitcoin className="size-3.5" /> BTC
              </div>
              <div className="text-muted-foreground">{btc(data.profitBTC)}</div>
            </div>
            <div className="">
              
              <div className="line-clamp-1 flex items-center gap-2 font-medium">
                
                Bonus
              </div>
              <div className="text-muted-foreground">{usd(data.bonusBTC)}</div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
