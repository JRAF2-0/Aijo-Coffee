import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateFadeIn } from "../../animations/scrollAnimations";

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (containerRef.current) {
        animateFadeIn("#about-content", containerRef.current);
      }
    },
    { scope: containerRef }
  );

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 bg-white">
      <div
        id="about-content"
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Image */}
        <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden bg-neutral-200">
          <img
            src="https://picsum.photos/seed/about-coffee/800/600"
            alt="Coffee beans being roasted"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Story */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Every cup is brewed with carefully selected beans from local
            farmers. At Aijo Coffee, we believe great coffee starts with
            great people — from the hands that harvest the beans to the
            barista who pulls your shot.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            What started as a small passion project has grown into a cozy
            corner where the community gathers, one cup at a time.
          </p>
        </div>
      </div>
    </section>
  );
}