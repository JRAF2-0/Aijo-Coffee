import { gsap } from "../lib/gsap";

export function playLoaderTimeline(onComplete: () => void) {
  const tl = gsap.timeline({
    onComplete,
  });

  tl.to("#loading-logo", {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "power2.out",
  })
    .to(
      "#loading-steam span",
      {
        opacity: 1,
        y: -6,
        duration: 0.6,
        stagger: 0.15,
        ease: "power1.out",
      },
      "-=0.3"
    )
    .to("#loading-text", {
      opacity: 1,
      duration: 0.5,
      ease: "power1.out",
    })
    .to({}, { duration: 0.5 }) // konting hold, para hindi biglaan
    .to("#loading-screen", {
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut",
      pointerEvents: "none",
    });

  return tl;
}