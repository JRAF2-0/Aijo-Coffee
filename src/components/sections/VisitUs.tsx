import { MapPin, Phone, Clock } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export default function VisitUs() {
  return (
    <section id="contact" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Map */}
        <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden bg-neutral-200">
          <iframe
            src={siteConfig.mapEmbedUrl}
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            title="Aijo Coffee location"
          />
        </div>

        {/* Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Us</h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <MapPin className="text-amber-600 mt-1" size={20} />
              <p className="text-neutral-600">{siteConfig.address}</p>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="text-amber-600 mt-1" size={20} />
              <div className="text-neutral-600">
                {siteConfig.hours.map((h) => (
                  <p key={h.day}>
                    {h.day}: {h.time}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="text-amber-600 mt-1" size={20} />
              <p className="text-neutral-600">{siteConfig.phone}</p>
            </div>
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              siteConfig.address,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-amber-500 hover:bg-amber-600 transition-colors rounded-full text-sm uppercase tracking-widest font-medium text-white"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
