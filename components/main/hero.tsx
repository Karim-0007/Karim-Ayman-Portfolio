import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div id="about-me" className="relative flex flex-col h-full w-full scroll-mt-20 md:scroll-mt-24 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="rotate-180 absolute top-[-200px] sm:top-[-280px] md:top-[-340px] left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
