import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  description: string;
}

const Gallery: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [error, setError] = useState<string | null>(null);

  // Compute filtered images based on active category
  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  useEffect(() => {
    // Fetch Moroccan images via Unsplash search API
    const fetchImages = async () => {
      try {
        console.log("Unsplash key:", import.meta.env.VITE_UNSPLASH_ACCESS_KEY);
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=morocco&per_page=12&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
        );
        if (!response.ok) {
          const text = await response.text();
          throw new Error(`HTTP ${response.status}: ${text}`);
        }
        const data = await response.json();
        console.log("Unsplash response:", data);

        // Map API results into our GalleryImage type
        const mapped: GalleryImage[] = data.results.map(
          (img: any, idx: number) => ({
            id: img.id,
            src: img.urls.regular,
            alt: img.alt_description || "Moroccan view",
            category: [
              "Landscapes",
              "Crafts",
              "Cuisine",
              "Daily Life",
              "Architecture",
              "Music",
            ][idx % 6],
            description:
              img.description ||
              img.alt_description ||
              "Beautiful Moroccan view.",
          }),
        );

        setImages(mapped);
      } catch (err: any) {
        console.error("Failed to fetch images:", err);
        setError(err.message || "Unknown error");
      }
    };

    fetchImages();
  }, []);

  const openModal = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const navigateImage = (direction: "next" | "prev") => {
    if (selectedIndex === null) return;
    const len = filteredImages.length;
    const nextIdx =
      direction === "next"
        ? (selectedIndex + 1) % len
        : (selectedIndex - 1 + len) % len;
    setSelectedIndex(nextIdx);
  };

  // Build categories for filter buttons
  const categories = [
    "All",
    ...Array.from(new Set(images.map((img) => img.category))),
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-amber-50 bg-opacity-60">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        {/* Error or Loading State */}
        {error ? (
          <p className="text-red-500 text-center mb-4">Error: {error}</p>
        ) : images.length === 0 ? (
          <p className="text-center mb-4">Loading images...</p>
        ) : null}

        {/* Category Filter */}
        {images.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => setActiveCategory(cat)}
                className={`${
                  activeCategory === cat
                    ? "bg-amber-700 hover:bg-amber-800"
                    : "text-amber-800 border-amber-300 hover:bg-amber-100"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        )}

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Discover Morocco Through Images
          </h2>
          <p className="text-lg text-amber-800 max-w-3xl mx-auto">
            A visual journey through the art, landscapes, and daily life of
            Morocco
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className={`overflow-hidden rounded-lg shadow-md cursor-pointer ${
                idx % 3 === 0 ? "row-span-2" : ""
              }`}
              onClick={() => openModal(idx)}
            >
              <div className="relative group h-full">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white font-medium">{img.alt}</p>
                    <p className="text-amber-200 text-sm">{img.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Modal */}
      <Dialog
        open={selectedIndex !== null}
        onOpenChange={(open) => !open && closeModal()}
      >
        <DialogContent className="max-w-5xl w-full bg-black/95 border-amber-800 p-0">
          {selectedIndex !== null && (
            <div className="relative w-full h-full flex flex-col">
              <DialogClose className="absolute right-4 top-4 z-10">
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:bg-white/20 rounded-full"
                >
                  <X className="h-6 w-6" />
                </Button>
              </DialogClose>

              <div className="flex-1 flex items-center justify-center p-4 relative">
                <img
                  src={filteredImages[selectedIndex].src}
                  alt={filteredImages[selectedIndex].alt}
                  className="max-h-[70vh] max-w-full object-contain"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full"
                  onClick={() => navigateImage("prev")}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full"
                  onClick={() => navigateImage("next")}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </div>

              <div className="p-6 bg-amber-900/90">
                <h3 className="text-xl font-bold text-amber-100 mb-1">
                  {filteredImages[selectedIndex].alt}
                </h3>
                <p className="text-sm text-amber-200 mb-3">
                  {filteredImages[selectedIndex].category}
                </p>
                <p className="text-white/90">
                  {filteredImages[selectedIndex].description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
