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
      <body className={`${wixMadeforDisplay.variable} antialiased`}>
        {/* Start of Tawk.to Script */}
        <Script id="tawk" strategy="afterInteractive">
          {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/65ab0f638d261e1b5f559d12/1jd50u5i7';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`}
        </Script>
        {/* End of Tawk.to Script */}
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
