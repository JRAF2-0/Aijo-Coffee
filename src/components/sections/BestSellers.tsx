import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { bestSellers } from "../../data/bestsellers";
import { animateImageZoom } from "../../animations/scrollAnimations";

export default function BestSellers() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      animateImageZoom("#bestsellers-grid", ".bestseller-item");
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-24 px-6 bg-neutral-900 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Best Sellers</h2>
        <p className="text-neutral-400 mb-12">
          Customer favorites you don't want to miss.
        </p>

        <div
          id="bestsellers-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {bestSellers.map((item) => (
            <div key={item.id} className="bestseller-item group cursor-pointer">
              <div className="w-full h-64 rounded-2xl overflow-hidden bg-neutral-800 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-neutral-400 text-sm mt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}