import { Coffee, Home, Wifi, Users, Wallet } from "lucide-react";

const features = [
  { icon: Coffee, label: "Fresh Beans" },
  { icon: Home, label: "Cozy Place" },
  { icon: Wifi, label: "Fast WiFi" },
  { icon: Users, label: "Friendly Staff" },
  { icon: Wallet, label: "Affordable" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-amber-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center">
                <feature.icon size={28} />
              </div>
              <p className="font-medium text-sm">{feature.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}