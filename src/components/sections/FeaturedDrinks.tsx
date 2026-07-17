import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { drinks } from "../../data/drinks";
import { animateCardStagger } from "../../animations/scrollAnimations";

export default function FeaturedDrinks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      animateCardStagger("#drinks-grid", ".drink-card");
    },
    { scope: containerRef }
  );

  return (
    <section id="menu" className="py-24 px-6 bg-neutral-50" ref={containerRef}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured Drinks
        </h2>
        <p className="text-neutral-500 mb-12">
          Handcrafted favorites, made fresh every day.
        </p>

        <div id="drinks-grid" className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {drinks.map((drink) => (
            <div
              key={drink.id}
              className="drink-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="w-full h-40 overflow-hidden">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-1">{drink.name}</h3>
                <p className="text-amber-600 font-medium">₱{drink.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}