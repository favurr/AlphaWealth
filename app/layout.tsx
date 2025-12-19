import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const wixMadeforDisplay = localFont({
  src: [
    {
      path: "../public/fonts/WixMadeforDisplay-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/WixMadeforDisplay-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/WixMadeforDisplay-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/WixMadeforDisplay-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/WixMadeforDisplay-ExtraBold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-wix-madefor-display",
});

export const metadata: Metadata = {
  title: "AlphaWealth - Crypto Trading Platform & Broker",
  description:
    "AlphaWealth - Advanced crypto trading platform, broker services, and investment management. Trade Bitcoin, Ethereum, and 1000+ cryptocurrencies with professional tools.",
  keywords:
    "crypto trading, cryptocurrency broker, Bitcoin, Ethereum, trading platform, digital assets",
  authors: [{ name: "AlphaWealth" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "AlphaWealth - Crypto Trading Platform & Broker",
    description:
      "Trade cryptocurrencies on a professional platform with advanced tools and secure broker services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="chatgo-widget" strategy="afterInteractive">
          {`(function(){
           var s=document.createElement('script');
           s.src='https://www.chatgonow.com/api/widget.js?key=d5a63a14f9dde85a03dacd504007c301123552bec6a2dd23';
           s.async=true;document.head.appendChild(s);
         })();`}
        </Script>
      </head>
      <body className={`${wixMadeforDisplay.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
