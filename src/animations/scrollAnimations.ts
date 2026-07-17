import { gsap } from "../lib/gsap";

export function animateCardStagger(
  containerSelector: string,
  itemSelector: string
) {
  gsap.from(`${containerSelector} ${itemSelector}`, {
    opacity: 0,
    y: 50,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: containerSelector,
      start: "top 75%",
      once: true,
      markers: true,
    },
  });
}