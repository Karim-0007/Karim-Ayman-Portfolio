"use client";

import dynamic from "next/dynamic";

// Dynamically import Preloader with SSR disabled to prevent hydration mismatch
const Preloader = dynamic(() => import("@/components/main/preloader").then((mod) => ({ default: mod.Preloader })), {
  ssr: false,
});

export const PreloaderWrapper = () => {
  return <Preloader />;
};
