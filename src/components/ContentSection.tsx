import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Separator } from "./ui/separator";
import { getUnsplashImage, defaultImages } from "../lib/utils";

import { ContentSectionData } from "../data/homeContent";

interface ContentSectionProps {
  data: ContentSectionData;
}

const ContentSection = ({ data }: ContentSectionProps) => {
  const [mainImage, setMainImage] = useState<string>(data.imageUrl);
  const [itemImages, setItemImages] = useState<string[]>(
    data?.items?.map((item) => item?.imageUrl || "") || [],
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // Only fetch new images if the imageKeyword is provided
    if (data?.imageKeyword) {
      setIsLoading(true);
      getUnsplashImage(data.imageKeyword, data?.imageUrl || "")
        .then((url) => {
          setMainImage(url);
          setIsLoading(false);
        })
        .catch(() => {
          setMainImage(
            data?.imageUrl ||
              (data?.id ? defaultImages[data.id] : null) ||
              defaultImages.landmarks,
          );
          setIsLoading(false);
        });
    }

    // Fetch images for items if they have keywords
    const fetchItemImages = async () => {
      if (!data?.items || !Array.isArray(data.items)) {
        return;
      }

      const newItemImages = [...itemImages];
      let hasChanges = false;

      for (let i = 0; i < data.items.length; i++) {
        const item = data.items[i];
        if (item?.imageKeyword) {
          try {
            const url = await getUnsplashImage(
              item.imageKeyword,
              item?.imageUrl || "",
            );
            newItemImages[i] = url;
            hasChanges = true;
          } catch {
            // Keep the original URL if fetch fails
          }
        }
      }

      if (hasChanges) {
        setItemImages(newItemImages);
      }
    };

    fetchItemImages();
  }, [data?.id, data?.imageKeyword, data?.imageUrl, itemImages]);
  // Safely destructure data with default values
  const {
    id = "",
    title = "",
    subtitle = "",
    description = "",
    imageUrl = "",
    imageAlt = "",
    imagePosition = "right",
    backgroundColor = "bg-amber-50",
    textColor = "text-slate-800",
    items = [],
  } = data || {};
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const decorativePattern = (
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <div
        className="w-full h-full bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
    </div>
  );

  return (
    <section
      id={id}
      className={`relative overflow-hidden py-20 ${backgroundColor} ${textColor}`}
    >
      {decorativePattern}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl md:text-2xl opacity-80 mb-6">{subtitle}</p>
            )}
            <div className="flex justify-center">
              <Separator className="w-24 h-1 bg-amber-600" />
            </div>
          </motion.div>

          {/* Main content */}
          <motion.div
            className={`flex flex-col ${imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"} gap-8 mb-16 items-center`}
            variants={itemVariants}
          >
            <div className="md:w-1/2">
              <p className="text-lg leading-relaxed mb-6">{description}</p>
              <div className="h-1 w-16 bg-amber-600 mb-6"></div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                {isLoading ? (
                  <div className="w-full h-[500px] bg-gray-200 animate-pulse flex items-center justify-center">
                    <p className="text-gray-500">Loading image...</p>
                  </div>
                ) : (
                  <img
                    src={mainImage}
                    alt={imageAlt}
                    className="w-full h-auto object-cover"
                    style={{ maxHeight: "500px" }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        data.imageUrl ||
                        defaultImages[data.id] ||
                        defaultImages.landmarks;
                    }}
                  />
                )}
              </div>
            </div>
          </motion.div>

          {/* Items grid */}
          {items && items.length > 0 && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  variants={itemVariants}
                >
                  {(item.imageUrl || itemImages[index]) && (
                    <div className="mb-4 rounded-md overflow-hidden">
                      <img
                        src={
                          itemImages[index] ||
                          item.imageUrl ||
                          defaultImages.landmarks
                        }
                        alt={item.title}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = defaultImages.landmarks;
                        }}
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContentSection;
