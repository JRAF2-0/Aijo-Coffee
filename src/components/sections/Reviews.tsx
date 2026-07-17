import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { reviews } from "../../data/reviews";

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const current = reviews[index];

  const goNext = () => setIndex((prev) => (prev + 1) % reviews.length);
  const goPrev = () =>
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Customer Reviews
        </h2>

        <div className="bg-neutral-50 rounded-2xl p-10">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
            ))}
          </div>

          <p className="text-lg text-neutral-700 italic mb-6">
            "{current.comment}"
          </p>
          <p className="font-semibold">{current.name}</p>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={goPrev}
            aria-label="Previous review"
            className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goNext}
            aria-label="Next review"
            className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}