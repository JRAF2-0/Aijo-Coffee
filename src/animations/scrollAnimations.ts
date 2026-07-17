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

export function animateSlideIn(
  target: HTMLElement | string,
  trigger: HTMLElement,
  direction: "left" | "right" = "left"
) {
  const xStart = direction === "left" ? -60 : 60;

  gsap.set(target, { opacity: 0, x: xStart });

  gsap.to(target, {
    opacity: 1,
    x: 0,
    duration: 0.7,
    ease: "power2.out",
    scrollTrigger: {
      trigger,
      start: "top 75%",
      once: true,
    },
  });
}

export function animateFadeIn(
  target: HTMLElement | string,
  trigger: HTMLElement
) {
  gsap.set(target, { opacity: 0, y: 30 });

  gsap.to(target, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger,
      start: "top 80%",
      once: true,
    },
  });
}