import type { Metadata } from "next";

export const siteConfig: Metadata = {
  metadataBase: new URL("https://karim-ayman.com"),
  title: "Karim Ayman | BIM & Technical Office Portfolio",
  description: "Portfolio of Karim Ayman, BIM-ready Technical Office Draftsman and BIM Modeler specializing in civil and architectural projects.",
  keywords: ["Karim Ayman", "BIM Modeler", "Technical Office Draftsman", "AutoCAD", "Revit", "shop drawings", "rebar detailing", "GIS"],
  authors: { name: "Karim Ayman Abdelmaqsood Khalil" },
  icons: {
    icon: "/logo2.png",
    apple: "/logo2.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://karim-ayman.com",
    siteName: "Karim Ayman Portfolio",
    title: "Karim Ayman | BIM & Technical Office Portfolio",
    description: "Portfolio of Karim Ayman, BIM-ready Technical Office Draftsman and BIM Modeler specializing in civil and architectural projects.",
    images: [
      {
        url: "/logo2.png",
        width: 1200,
        height: 630,
        alt: "Karim Ayman Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karim Ayman | BIM & Technical Office Portfolio",
    description: "Portfolio of Karim Ayman, BIM-ready Technical Office Draftsman and BIM Modeler specializing in civil and architectural projects.",
    images: ["/logo2.png"],
  },
} as const;
