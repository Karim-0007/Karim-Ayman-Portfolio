import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Navbar } from "@/components/main/navbar";
import { Preloader } from "@/components/main/preloader";
import { StarsCanvas } from "@/components/main/star-background";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("bg-[#030014] overflow-y-scroll overflow-x-hidden")} >
        <Preloader />
        <SmoothScrollProvider>
          <StarsCanvas />
          <Navbar />
          {children}
        </SmoothScrollProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
