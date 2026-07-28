import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Navbar } from "@/components/main/navbar";
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
      <body className={cn("bg-[#030014] overflow-y-scroll overflow-x-hidden")} >
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
