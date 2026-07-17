import { useState } from "react";
import { X } from "lucide-react";
import { galleryImages } from "../../data/gallery";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Coffee Gallery
        </h2>
        <p className="text-neutral-500 mb-12">
          Moments brewed and captured.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img.image)}
              className="aspect-square rounded-xl overflow-hidden bg-neutral-200 cursor-pointer group"
            >
              <img
                src={img.image}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6 cursor-zoom-out"
        >
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged gallery view"
            className="max-w-full max-h-full rounded-lg object-contain"
          />
        </div>
      )}
    </section>
  );
}