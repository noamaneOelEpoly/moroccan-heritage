import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { getUnsplashImage } from "../lib/utils";

interface HeroSectionProps {
  onNavigate?: (section: string) => void;
  navSections?: Array<{ id: string; label: string }>;
}

const HeroSection = ({
  onNavigate = () => {},
  navSections = [
    { id: "cuisine", label: "Cuisine" },
    { id: "crafts", label: "Crafts" },
    { id: "music", label: "Music" },
    { id: "landmarks", label: "Landmarks" },
    { id: "modern", label: "Modern Culture" },
    { id: "gallery", label: "Gallery" },
  ],
}: HeroSectionProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [heroImage, setHeroImage] = useState<string>(
    "https://images.unsplash.com/photo-1539020140153-e8c237112e53?w=1200&q=80&auto=format",
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Fetch a hero image from Unsplash with a more specific keyword for better results
    setIsLoading(true);
    getUnsplashImage(
      "morocco blue city chefchaouen architecture medina",
      heroImage,
    )
      .then((url) => {
        setHeroImage(url);
        setIsLoading(false);
      })
      .catch(() => {
        // Keep the default image if fetch fails
        setIsLoading(false);
      });
  }, []);

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onNavigate(section);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-900">
      {/* Zellige Pattern Background */}
      <div className="absolute inset-0  opacity-20" />

      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
        style={{
          backgroundImage: `url('${heroImage}')`,
          transform: `translateY(${scrollY * 0.5}px)`,
          opacity: isLoading ? 0.5 : 1,
        }}
      />

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sectionHome">
        <div className="rounded-xl border border-white/20 bg-black/30 p-8 backdrop-blur-md transition-all duration-300 hover:bg-black/40 hover:shadow-xl md:p-10 lg:max-w-4xl cardContainer">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="mb-4 font-serif text-5xl font-bold md:text-7xl">
              المغرب الجميل
            </h1>
            <h2 className="text-3xl font-semibold  md:text-5xl">
              Beautiful Morocco
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mx-auto mb-10 max-w-2xl text-lg "
          >
            Discover the rich tapestry of Moroccan culture, from ancient medinas
            and vibrant souks to breathtaking landscapes and culinary delights
            that have captivated travelers for centuries.
          </motion.p>

          {/* Navigation Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {navSections.map((item) => (
              <Button
                key={item.id}
                variant="outline"
                onClick={() => handleNavClick(item.id)}
                className="border-amber-300/30 bg-black/40 text-amber-50 backdrop-blur-sm transition-all duration-300 hover:border-amber-300/60 hover:bg-black/50 hover:text-amber-100 hover:shadow-md"
              >
                {item.label}
              </Button>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 "
        >
          <div className="flex flex-col items-center">
            <span className="mb-2 text-sm font-medium text-amber-50">
              Scroll to explore
            </span>
            <ChevronDown className="h-6 w-6 animate-bounce text-amber-200" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
