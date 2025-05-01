import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";
import Gallery from "./Gallery";

const Home = () => {
  // Content data for different sections
  const cuisineData = {
    title: "Moroccan Cuisine",
    subtitle: "A Blend of Flavors and Traditions",
    description:
      "Moroccan cuisine is a culinary journey through centuries of cultural exchanges, featuring aromatic spices, slow-cooked tagines, fluffy couscous, and sweet pastries. Each dish tells a story of tradition, celebration, and the rich agricultural bounty of this North African nation.",
    items: [
      {
        title: "Tagine",
        description:
          "Slow-cooked stews named after the distinctive conical earthenware pots they're cooked in. Common varieties include chicken with preserved lemon and olives, lamb with prunes, and kefta (meatball) with eggs.",
        image:
          "https://images.unsplash.com/photo-1565799515768-2dcfd834625c?w=800&q=80",
      },
      {
        title: "Couscous",
        description:
          "The national dish traditionally served on Fridays, featuring steamed semolina topped with tender vegetables and meat, symbolizing prosperity and fertility.",
        image:
          "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80",
      },
      {
        title: "Mint Tea",
        description:
          'Known as "Moroccan whiskey," this sweet mint tea is a symbol of hospitality and friendship, ceremoniously poured from height to create a frothy top.',
        image:
          "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=800&q=80",
      },
    ],
    backgroundColor: "bg-amber-50",
  };

  const craftsData = {
    title: "Traditional Crafts",
    subtitle: "Artisanal Excellence Passed Through Generations",
    description:
      "Moroccan craftsmanship represents centuries of expertise passed down through generations. From intricate zellige tilework to hand-woven carpets, each piece showcases the remarkable skill and artistic vision of local artisans who preserve cultural heritage through their craft.",
    items: [
      {
        title: "Zellige",
        description:
          "Geometric mosaic tilework created by setting hand-cut tiles into plaster, forming intricate mathematical patterns that adorn fountains, walls, and floors.",
        image:
          "https://images.unsplash.com/photo-1560430760-d5b52575c77e?w=800&q=80",
      },
      {
        title: "Berber Carpets",
        description:
          "Hand-woven rugs made by Berber women, featuring distinctive geometric patterns and symbols that tell stories of tribal life and protect against evil spirits.",
        image:
          "https://images.unsplash.com/photo-1551392505-f4056032826e?w=800&q=80",
      },
      {
        title: "Leather Tanning",
        description:
          "Traditional leather production in Fez's ancient tanneries, where hides are soaked in natural dyes and treatments, creating world-renowned soft leather goods.",
        image:
          "https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=800&q=80",
      },
    ],
    backgroundColor: "bg-blue-50",
  };

  const musicData = {
    title: "Moroccan Music",
    subtitle: "Rhythms and Melodies of Cultural Heritage",
    description:
      "Music in Morocco reflects its diverse cultural influences, from Andalusian classical traditions to Berber folk music and contemporary fusion styles. Traditional instruments like the oud, qanun, and bendir create distinctive sounds that have evolved while maintaining their cultural roots.",
    items: [
      {
        title: "Gnawa",
        description:
          'Spiritual trance music with roots in sub-Saharan Africa, featuring the guembri (bass lute), metal castanets, and call-and-response vocals in healing ceremonies called "lilas."',
        image:
          "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80",
      },
      {
        title: "Andalusian Classical",
        description:
          "Sophisticated orchestral tradition dating back to Islamic Spain, performed by ensembles with string instruments, percussion, and vocals following specific melodic modes.",
        image:
          "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80",
      },
      {
        title: "Chaabi",
        description:
          "Popular folk music played at celebrations and gatherings, characterized by rhythmic percussion, stringed instruments, and lyrics about everyday life and love.",
        image:
          "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
      },
    ],
    backgroundColor: "bg-rose-50",
  };

  const landmarksData = {
    title: "Historical Landmarks",
    subtitle: "Architectural Treasures of Morocco",
    description:
      "Morocco's architectural landscape tells the story of its rich history, from ancient Roman ruins to imperial cities and traditional kasbahs. These structures showcase the artistic and engineering achievements of various dynasties and civilizations that have shaped the country.",
    items: [
      {
        title: "Hassan II Mosque",
        description:
          "Magnificent coastal mosque in Casablanca with the world's tallest minaret (210m), featuring breathtaking craftsmanship and a glass floor overlooking the Atlantic Ocean.",
        image:
          "https://images.unsplash.com/photo-1553165558-1cf5f2d72c9a?w=800&q=80",
      },
      {
        title: "Fez Medina",
        description:
          "UNESCO World Heritage site and the world's largest car-free urban area, with 9,000 narrow streets and alleys housing historic madrasas, fondouks, palaces, and the oldest university.",
        image:
          "https://images.unsplash.com/photo-1548019979-e5c3c7fd74e9?w=800&q=80",
      },
      {
        title: "Ait Ben Haddou",
        description:
          "Stunning fortified village (ksar) along the former caravan route between the Sahara and Marrakech, featured in numerous films and TV shows including Gladiator and Game of Thrones.",
        image:
          "https://images.unsplash.com/photo-1548759806-821effb9d1b0?w=800&q=80",
      },
    ],
    backgroundColor: "bg-orange-50",
  };

  const modernCultureData = {
    title: "Modern Cultural Expressions",
    subtitle: "Contemporary Morocco",
    description:
      "Today's Morocco blends traditional values with contemporary global influences, creating vibrant new expressions in art, fashion, and urban culture. Modern Moroccan creators honor their heritage while embracing innovation and addressing current social themes.",
    items: [
      {
        title: "Contemporary Art",
        description:
          "A thriving art scene centered in Marrakech and Casablanca, where galleries showcase artists exploring identity, migration, gender, and urbanization through modern techniques and traditional motifs.",
        image:
          "https://images.unsplash.com/photo-1577720643272-265f09367456?w=800&q=80",
      },
      {
        title: "Fashion Design",
        description:
          "Innovative designers reimagining traditional garments like caftans and djellabas with modern silhouettes and materials, gaining international recognition on global runways.",
        image:
          "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?w=800&q=80",
      },
      {
        title: "Street Culture",
        description:
          "Urban expression through music (rap, fusion), street art, and skateboarding, particularly in Casablanca, where youth culture creates new identities while commenting on social issues.",
        image:
          "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=800&q=80",
      },
    ],
    backgroundColor: "bg-emerald-50",
  };

  // Gallery images
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1539020140153-e8c237112e53?w=800&q=80",
      alt: "Blue city of Chefchaouen",
      title: "The Blue City",
      description:
        "Chefchaouen's distinctive blue-washed buildings create a dreamlike atmosphere in this mountain town.",
    },
    {
      src: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
      alt: "Moroccan spice market",
      title: "Spice Souk",
      description:
        "Colorful displays of spices in a traditional Moroccan market.",
    },
    {
      src: "https://images.unsplash.com/photo-1531501410720-c8d437636169?w=800&q=80",
      alt: "Desert landscape",
      title: "Sahara Dunes",
      description: "The majestic sand dunes of the Moroccan Sahara at sunset.",
    },
    {
      src: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80",
      alt: "Traditional Moroccan doors",
      title: "Ornate Doorways",
      description:
        "Intricately designed doors that serve as portals to Moroccan homes and riads.",
    },
    {
      src: "https://images.unsplash.com/photo-1512958789358-4dac0f999b80?w=800&q=80",
      alt: "Moroccan tea service",
      title: "Tea Ceremony",
      description:
        "Traditional mint tea service, a symbol of Moroccan hospitality.",
    },
    {
      src: "https://images.unsplash.com/photo-1535530705774-695729778c55?w=800&q=80",
      alt: "Moroccan tile patterns",
      title: "Geometric Artistry",
      description:
        "Complex geometric patterns that adorn Moroccan architecture.",
    },
    {
      src: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=80",
      alt: "Atlas Mountains",
      title: "Atlas Mountains",
      description: "The majestic mountain range that runs through Morocco.",
    },
    {
      src: "https://images.unsplash.com/photo-1570214476695-19bd467e6f7a?w=800&q=80",
      alt: "Moroccan pottery",
      title: "Ceramic Crafts",
      description:
        "Hand-painted pottery from the ceramic centers of Fez and Safi.",
    },
    {
      src: "https://images.unsplash.com/photo-1563237739-e433638dab9e?w=800&q=80",
      alt: "Moroccan lanterns",
      title: "Dancing Light",
      description:
        "Traditional metal lanterns casting intricate shadow patterns.",
    },
  ];

  // Navigation sections for the hero section
  const navSections = [
    { id: "cuisine", label: "Cuisine" },
    { id: "crafts", label: "Crafts" },
    { id: "music", label: "Music" },
    { id: "landmarks", label: "Landmarks" },
    { id: "modern", label: "Modern Culture" },
    { id: "gallery", label: "Gallery" },
  ];

  return (
    <div className="bg-background min-h-screen">
      <HeroSection navSections={navSections} />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="cuisine"
      >
        <ContentSection data={cuisineData} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="crafts"
      >
        <ContentSection data={craftsData} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="music"
      >
        <ContentSection data={musicData} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="landmarks"
      >
        <ContentSection data={landmarksData} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="modern"
      >
        <ContentSection data={modernCultureData} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="gallery"
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-2">
            Visual Journey
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Discover Morocco Through Images
          </p>
          <Gallery images={galleryImages} />
        </div>
      </motion.div>

      <footer className="bg-gradient-to-b from-slate-800 to-slate-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-amber-100">
                Moroccan Culture
              </h3>
              <p className="text-slate-300">
                Celebrating the rich heritage and traditions of Morocco through
                art, cuisine, music, and history.
              </p>
              <div className="flex space-x-4 pt-2">
                <a
                  href="#"
                  className="rounded-full bg-slate-700 p-2 text-amber-200 transition-colors hover:bg-amber-700 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="rounded-full bg-slate-700 p-2 text-amber-200 transition-colors hover:bg-amber-700 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="rounded-full bg-slate-700 p-2 text-amber-200 transition-colors hover:bg-amber-700 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-amber-100">Explore</h4>
              <ul className="space-y-3">
                {navSections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-slate-300 transition-colors hover:text-amber-200"
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-amber-100">
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-slate-300 transition-colors hover:text-amber-200"
                  >
                    Travel Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-300 transition-colors hover:text-amber-200"
                  >
                    History
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-300 transition-colors hover:text-amber-200"
                  >
                    Photo Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-300 transition-colors hover:text-amber-200"
                  >
                    Cultural Events
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-amber-100">
                Newsletter
              </h4>
              <p className="text-slate-300">
                Subscribe to receive updates on Moroccan culture and events.
              </p>
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-l-md border-0 bg-slate-700 px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button className="rounded-r-md bg-amber-600 px-4 py-2 font-medium text-white transition-colors hover:bg-amber-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-700 pt-8">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <p className="text-center text-slate-400 md:text-left">
                © {new Date().getFullYear()} Moroccan Culture Showcase. All
                rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-sm text-slate-400 hover:text-amber-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-slate-400 hover:text-amber-200"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-sm text-slate-400 hover:text-amber-200"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
