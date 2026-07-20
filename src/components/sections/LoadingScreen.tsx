import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { playLoaderTimeline } from "../../animations/loaderTimeline";
import { siteConfig } from "../../data/siteConfig";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      playLoaderTimeline(onComplete);
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      id="loading-screen"
      className="fixed inset-0 z-[200] bg-neutral-950 flex flex-col items-center justify-center text-white"
    >
      {/* Logo */}
      <div id="loading-logo" className="opacity-0 scale-90">
        <img src={siteConfig.logo} alt={siteConfig.name} className="h-20 w-auto" />
      </div>

      {/* Steam */}
      <div id="loading-steam" className="flex gap-1 mt-2">
        <span className="w-1 h-6 bg-neutral-400 rounded-full opacity-0" />
        <span className="w-1 h-8 bg-neutral-400 rounded-full opacity-0" />
        <span className="w-1 h-6 bg-neutral-400 rounded-full opacity-0" />
      </div>

      <p id="loading-text" className="mt-4 text-sm tracking-widest uppercase opacity-0">
        {siteConfig.name}
      </p>
    </div>
  );
}