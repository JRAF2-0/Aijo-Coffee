import { useRef } from "react";
import { Star } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";
import { reviews } from "../../data/reviews";

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  // Doblehin ang array para seamless yung infinite loop
  const loopedReviews = [...reviews, ...reviews];

  useGSAP(() => {
    if (!trackRef.current) return;

    const tween = gsap.to(trackRef.current, {
      xPercent: -50,
      duration: reviews.length * 6,
      ease: "none",
      repeat: -1,
    });

    tweenRef.current = tween;
  }, []);

  const handleMouseEnter = () => {
    tweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.play();
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center px-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Customer Reviews</h2>
      </div>

      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={trackRef} className="flex gap-6 w-max px-6">
          {loopedReviews.map((review, i) => (
            <div
              key={`${review.id}-${i}`}
              className="bg-neutral-50 rounded-2xl p-8 w-80 shrink-0 text-left"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, starI) => (
                  <Star
                    key={starI}
                    size={18}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-neutral-700 italic mb-6">
                "{review.comment}"
              </p>
              <p className="font-semibold">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}