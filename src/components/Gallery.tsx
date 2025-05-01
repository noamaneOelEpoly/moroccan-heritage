import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  description: string;
}

interface GalleryProps {
  title?: string;
  subtitle?: string;
  images?: GalleryImage[];
}

const Gallery = ({
  title = "Discover Morocco Through Images",
  subtitle = "A visual journey through the art, landscapes, and daily life of Morocco",
  images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1728323448865-3c7723f061b6?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Blue streets of Chefchaouen",
      category: "Landscapes",
      description:
        "The iconic blue-washed streets of Chefchaouen, known as the Blue Pearl of Morocco.",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80",
      alt: "Traditional Moroccan pottery",
      category: "Crafts",
      description:
        "Colorful traditional Moroccan pottery displayed in a market in Fes.",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
      alt: "Moroccan spice market",
      category: "Cuisine",
      description:
        "Vibrant spices in a traditional Moroccan souk, essential ingredients in local cuisine.",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1531501410720-c8d437636169?w=800&q=80",
      alt: "Sahara Desert",
      category: "Landscapes",
      description:
        "The majestic sand dunes of the Sahara Desert at sunset, a must-visit destination in Morocco.",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1512958789358-4dac96e98039?w=800&q=80",
      alt: "Moroccan tea ceremony",
      category: "Daily Life",
      description:
        "Traditional Moroccan mint tea being poured, an important ritual in Moroccan hospitality.",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1560543899-58ce3bc3c8fc?w=800&q=80",
      alt: "Moroccan textiles",
      category: "Crafts",
      description:
        "Handwoven Moroccan rugs and textiles displaying intricate patterns and vibrant colors.",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1553342237-bd609f0c9bcb?w=800&q=80",
      alt: "Hassan II Mosque",
      category: "Architecture",
      description:
        "The stunning Hassan II Mosque in Casablanca, featuring remarkable Islamic architecture.",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1570214476695-19bd467e6f7a?w=800&q=80",
      alt: "Moroccan doorway",
      category: "Architecture",
      description:
        "Ornate doorway in Marrakech showcasing traditional Moroccan craftsmanship and design.",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1528657249085-893f23f14265?w=800&q=80",
      alt: "Moroccan musicians",
      category: "Music",
      description:
        "Traditional Gnawa musicians performing in Essaouira, representing Morocco's rich musical heritage.",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1585670140617-9a3a2e8b7c76?w=800&q=80",
      alt: "Moroccan street scene",
      category: "Daily Life",
      description:
        "Bustling street scene in a Moroccan medina, showing the vibrant daily life in Morocco.",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1551634979-2b11f8c946fe?w=800&q=80",
      alt: "Moroccan tajine",
      category: "Cuisine",
      description:
        "Traditional Moroccan tajine dish, slow-cooked to perfection with aromatic spices.",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1590434003681-2c397bb5d3d9?w=800&q=80",
      alt: "Atlas Mountains",
      category: "Landscapes",
      description:
        "The breathtaking Atlas Mountains, offering stunning views and hiking opportunities.",
    },
  ],
}: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openModal = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "next" | "prev") => {
    if (direction === "next") {
      const nextIndex = (selectedIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    } else {
      const prevIndex = (selectedIndex - 1 + images.length) % images.length;
      setSelectedImage(images[prevIndex]);
      setSelectedIndex(prevIndex);
    }
  };

  // Categories for filtering
  const categories = Array.from(new Set(images.map((img) => img.category)));
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-amber-50 bg-opacity-60">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-amber-800 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={activeCategory === "All" ? "default" : "outline"}
            onClick={() => setActiveCategory("All")}
            className={`${activeCategory === "All" ? "bg-amber-700 hover:bg-amber-800" : "text-amber-800 border-amber-300 hover:bg-amber-100"}`}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`${activeCategory === category ? "bg-amber-700 hover:bg-amber-800" : "text-amber-800 border-amber-300 hover:bg-amber-100"}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className={`overflow-hidden rounded-lg shadow-md cursor-pointer ${index % 3 === 0 ? "row-span-2" : ""}`}
              onClick={() => openModal(image, filteredImages.indexOf(image))}
            >
              <div className="relative group h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white font-medium">{image.alt}</p>
                    <p className="text-amber-200 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for expanded view */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => !open && closeModal()}
      >
        <DialogContent className="max-w-5xl w-full bg-black/95 border-amber-800 p-0">
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

            {selectedImage && (
              <div className="flex flex-col h-full">
                <div className="relative flex-1 flex items-center justify-center p-4">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-h-[70vh] max-w-full object-contain"
                  />

                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage("prev");
                    }}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>

                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage("next");
                    }}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                </div>

                <div className="p-6 bg-amber-900/90">
                  <h3 className="text-xl font-bold text-amber-100 mb-1">
                    {selectedImage.alt}
                  </h3>
                  <p className="text-sm text-amber-200 mb-3">
                    {selectedImage.category}
                  </p>
                  <p className="text-white/90">{selectedImage.description}</p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
