import { gsap } from "../lib/gsap";

export function playHeroTimeline() {
  const tl = gsap.timeline();

  tl.to("#hero-bg", {
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: "power2.out",
  })
    .to(
      "#hero-heading",
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
      },
      "-=0.6"
    )
    .to(
      "#hero-button",
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.3"
    );

  return tl;
}