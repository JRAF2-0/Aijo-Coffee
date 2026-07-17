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

export function animateImageZoom(
  containerSelector: string,
  itemSelector: string
) {
  const items = gsap.utils.toArray<HTMLElement>(
    `${containerSelector} ${itemSelector}`
  );

  gsap.set(items, { opacity: 0, scale: 1.15 });

  gsap.to(items, {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    stagger: 0.12,
    ease: "power2.out",
    scrollTrigger: {
      trigger: containerSelector,
      start: "top 75%",
      once: true,
    },
  });
}

export function animateBeansParallax(container: HTMLElement | string) {
  const beans = gsap.utils.toArray<HTMLElement>(
    typeof container === "string"
      ? `${container} .bean-item`
      : container.querySelectorAll(".bean-item")
  );

  beans.forEach((bean, i) => {
    const distance = i % 2 === 0 ? 60 : -80;

    gsap.to(bean, {
      y: distance,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  });
}
