import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.set("#about-image", { opacity: 0, x: -80 });
      gsap.set("#about-text", { opacity: 0, x: 80 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          once: true,
        },
      });

      tl.to("#about-image", {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
      }).to(
        "#about-text",
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.7"
      );
    },
    { scope: containerRef }
  );

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div
          id="about-image"
          className="w-full h-80 md:h-96 rounded-2xl overflow-hidden bg-neutral-200"
        >
          <img
            src="/images/about-coffee.jpg"
            alt="Coffee beans being roasted"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Story */}
        <div id="about-text">
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