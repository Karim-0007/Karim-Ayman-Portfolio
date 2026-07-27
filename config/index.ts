import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Karim Ayman | BIM & Technical Office Portfolio",
  description: "Portfolio of Karim Ayman, BIM-ready Technical Office Draftsman and BIM Modeler specializing in civil and architectural projects.",
  keywords: ["Karim Ayman", "BIM Modeler", "Technical Office Draftsman", "AutoCAD", "Revit", "shop drawings", "rebar detailing", "GIS"],
  authors: { name: "Karim Ayman Abdelmaqsood Khalil" },
  icons: {
    icon: "/logo2.png",
    apple: "/logo2.png",
  },
} as const;
