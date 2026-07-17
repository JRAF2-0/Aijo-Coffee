import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { siteConfig } from "../../data/siteConfig";
import { playHeroTimeline } from "../../animations/heroTimeline";

interface HeroProps {
  startAnimation: boolean;
}

export default function Hero({ startAnimation }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (startAnimation) {
        playHeroTimeline();
      }
    },
    { scope: containerRef, dependencies: [startAnimation] }
  );

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white"
    >
      {/* Background - temporary gradient placeholder */}
      <div
        id="hero-bg"
        className="absolute inset-0 bg-gradient-to-br from-amber-900 via-neutral-900 to-black opacity-0 scale-110"
      />

      {/* Dark overlay para readable yung text sa ibabaw */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1
          id="hero-heading"
          className="text-4xl md:text-6xl font-bold leading-tight opacity-0 translate-y-8"
        >
          {siteConfig.tagline}
          <br />
          <span className="text-amber-400">{siteConfig.subTagline}</span>
        </h1>

        <button
          id="hero-button"
          className="mt-8 px-8 py-3 bg-amber-500 hover:bg-amber-600 transition-colors rounded-full text-sm uppercase tracking-widest font-medium opacity-0 translate-y-4"
        >
          Order Now
        </button>
      </div>
    </section>
  );
}