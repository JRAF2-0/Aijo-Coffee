import { gsap } from "../lib/gsap";

export function animateCardStagger(
  containerSelector: string,
  itemSelector: string
) {
  const items = gsap.utils.toArray<HTMLElement>(
    `${containerSelector} ${itemSelector}`
  );

  gsap.set(items, { opacity: 0, y: 50 });

  gsap.to(items, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: containerSelector,
      start: "top 75%",
      once: true,
    },
  });
}