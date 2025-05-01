// Content data for different sections of the Moroccan Culture website

export interface ContentSectionData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageKeyword: string;
  imagePosition?: "left" | "right";
  backgroundColor: string;
  textColor?: string;
  items: {
    title: string;
    description: string;
    imageUrl: string;
    imageKeyword: string;
  }[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export const cuisineData: ContentSectionData = {
  id: "cuisine",
  title: "Moroccan Cuisine",
  subtitle: "A Blend of Flavors and Traditions",
  description:
    "Moroccan cuisine is a culinary journey through centuries of cultural exchanges, featuring aromatic spices, slow-cooked tagines, fluffy couscous, and sweet pastries. Each dish tells a story of tradition, celebration, and the rich agricultural bounty of this North African nation.",
  imageUrl:
    "https://images.unsplash.com/photo-1565799515768-2dcfd834625c?w=800&q=80",
  imageKeyword: "moroccan food traditional cuisine tagine",
  imageAlt: "Traditional Moroccan tagine dish with couscous",
  backgroundColor: "bg-zellije-pattern",
  items: [
    {
      title: "Tagine",
      description:
        "Slow-cooked stews named after the distinctive conical earthenware pots they're cooked in. Common varieties include chicken with preserved lemon and olives, lamb with prunes, and kefta (meatball) with eggs.",
      imageUrl:
        "https://images.unsplash.com/photo-1565799515768-2dcfd834625c?w=800&q=80",
      imageKeyword: "moroccan tagine dish traditional food",
    },
    {
      title: "Couscous",
      description:
        "The national dish traditionally served on Fridays, featuring steamed semolina topped with tender vegetables and meat, symbolizing prosperity and fertility.",
      imageUrl:
        "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80",
      imageKeyword: "moroccan couscous dish traditional food",
    },
    {
      title: "Mint Tea",
      description:
        'Known as "Moroccan whiskey," this sweet mint tea is a symbol of hospitality and friendship, ceremoniously poured from height to create a frothy top.',
      imageUrl:
        "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=800&q=80",
      imageKeyword: "moroccan mint tea ceremony traditional",
    },
  ],
};

export const craftsData: ContentSectionData = {
  id: "crafts",
  title: "Traditional Crafts",
  subtitle: "Artisanal Excellence Passed Through Generations",
  description:
    "Moroccan craftsmanship represents centuries of expertise passed down through generations. From intricate zellige tilework to hand-woven carpets, each piece showcases the remarkable skill and artistic vision of local artisans who preserve cultural heritage through their craft.",
  imageUrl:
    "https://images.unsplash.com/photo-1560430760-d5b52575c77e?w=800&q=80",
  imageKeyword: "moroccan traditional crafts artisan zellige",
  imageAlt: "Intricate Moroccan zellige tilework",
  backgroundColor: "bg-blue-50",
  items: [
    {
      title: "Zellige",
      description:
        "Geometric mosaic tilework created by setting hand-cut tiles into plaster, forming intricate mathematical patterns that adorn fountains, walls, and floors.",
      imageUrl:
        "https://images.unsplash.com/photo-1560430760-d5b52575c77e?w=800&q=80",
      imageKeyword: "moroccan zellige tiles mosaic pattern",
    },
    {
      title: "Berber Carpets",
      description:
        "Hand-woven rugs made by Berber women, featuring distinctive geometric patterns and symbols that tell stories of tribal life and protect against evil spirits.",
      imageUrl:
        "https://images.unsplash.com/photo-1551392505-f4056032826e?w=800&q=80",
      imageKeyword: "moroccan berber carpet rug traditional",
    },
    {
      title: "Leather Tanning",
      description:
        "Traditional leather production in Fez's ancient tanneries, where hides are soaked in natural dyes and treatments, creating world-renowned soft leather goods.",
      imageUrl:
        "https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=800&q=80",
      imageKeyword: "fez morocco leather tannery traditional",
    },
  ],
};

export const musicData: ContentSectionData = {
  id: "music",
  title: "Moroccan Music",
  subtitle: "Rhythms and Melodies of Cultural Heritage",
  description:
    "Music in Morocco reflects its diverse cultural influences, from Andalusian classical traditions to Berber folk music and contemporary fusion styles. Traditional instruments like the oud, qanun, and bendir create distinctive sounds that have evolved while maintaining their cultural roots.",
  imageUrl:
    "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80",
  imageKeyword: "moroccan traditional music instruments",
  imageAlt: "Traditional Moroccan musicians performing",
  backgroundColor: "bg-rose-50",
  items: [
    {
      title: "Gnawa",
      description:
        'Spiritual trance music with roots in sub-Saharan Africa, featuring the guembri (bass lute), metal castanets, and call-and-response vocals in healing ceremonies called "lilas."',
      imageUrl:
        "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80",
      imageKeyword: "moroccan gnawa music traditional",
    },
    {
      title: "Andalusian Classical",
      description:
        "Sophisticated orchestral tradition dating back to Islamic Spain, performed by ensembles with string instruments, percussion, and vocals following specific melodic modes.",
      imageUrl:
        "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80",
      imageKeyword: "moroccan andalusian classical music",
    },
    {
      title: "Chaabi",
      description:
        "Popular folk music played at celebrations and gatherings, characterized by rhythmic percussion, stringed instruments, and lyrics about everyday life and love.",
      imageUrl:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
      imageKeyword: "moroccan chaabi folk music traditional",
    },
  ],
};

export const landmarksData: ContentSectionData = {
  id: "landmarks",
  title: "Historical Landmarks",
  subtitle: "Architectural Treasures of Morocco",
  description:
    "Morocco's architectural landscape tells the story of its rich history, from ancient Roman ruins to imperial cities and traditional kasbahs. These structures showcase the artistic and engineering achievements of various dynasties and civilizations that have shaped the country.",
  imageUrl:
    "https://images.unsplash.com/photo-1553165558-1cf5f2d72c9a?w=800&q=80",
  imageAlt: "Hassan II Mosque in Casablanca",
  backgroundColor: "bg-orange-50",
  items: [
    {
      title: "Hassan II Mosque",
      description:
        "Magnificent coastal mosque in Casablanca with the world's tallest minaret (210m), featuring breathtaking craftsmanship and a glass floor overlooking the Atlantic Ocean.",
      imageUrl:
        "https://images.unsplash.com/photo-1553165558-1cf5f2d72c9a?w=800&q=80",
    },
    {
      title: "Fez Medina",
      description:
        "UNESCO World Heritage site and the world's largest car-free urban area, with 9,000 narrow streets and alleys housing historic madrasas, fondouks, palaces, and the oldest university.",
      imageUrl:
        "https://images.unsplash.com/photo-1548019979-e5c3c7fd74e9?w=800&q=80",
    },
    {
      title: "Ait Ben Haddou",
      description:
        "Stunning fortified village (ksar) along the former caravan route between the Sahara and Marrakech, featured in numerous films and TV shows including Gladiator and Game of Thrones.",
      imageUrl:
        "https://images.unsplash.com/photo-1548759806-821effb9d1b0?w=800&q=80",
    },
  ],
};

export const modernCultureData: ContentSectionData = {
  id: "modern",
  title: "Modern Cultural Expressions",
  subtitle: "Contemporary Morocco",
  description:
    "Today's Morocco blends traditional values with contemporary global influences, creating vibrant new expressions in art, fashion, and urban culture. Modern Moroccan creators honor their heritage while embracing innovation and addressing current social themes.",
  imageUrl:
    "https://images.unsplash.com/photo-1577720643272-265f09367456?w=800&q=80",
  imageAlt: "Contemporary Moroccan art installation",
  backgroundColor: "bg-emerald-50",
  items: [
    {
      title: "Contemporary Art",
      description:
        "A thriving art scene centered in Marrakech and Casablanca, where galleries showcase artists exploring identity, migration, gender, and urbanization through modern techniques and traditional motifs.",
      imageUrl:
        "https://images.unsplash.com/photo-1577720643272-265f09367456?w=800&q=80",
    },
    {
      title: "Fashion Design",
      description:
        "Innovative designers reimagining traditional garments like caftans and djellabas with modern silhouettes and materials, gaining international recognition on global runways.",
      imageUrl:
        "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?w=800&q=80",
    },
    {
      title: "Street Culture",
      description:
        "Urban expression through music (rap, fusion), street art, and skateboarding, particularly in Casablanca, where youth culture creates new identities while commenting on social issues.",
      imageUrl:
        "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=800&q=80",
    },
  ],
};

export const historyData: ContentSectionData = {
  id: "history",
  title: "Moroccan History",
  subtitle: "A Journey Through Time",
  description:
    "Morocco's rich history spans thousands of years, from ancient Berber kingdoms and Phoenician trading posts to Roman provinces, Islamic caliphates, and European colonial influences. This diverse heritage has shaped the country's unique cultural identity and architectural landscape.",
  imageUrl:
    "https://images.unsplash.com/photo-1548019979-e5c3c7fd74e9?w=800&q=80",
  imageAlt: "Ancient ruins in Morocco",
  imagePosition: "left",
  backgroundColor: "bg-purple-50",
  items: [
    {
      title: "Ancient Berber Kingdoms",
      description:
        "The indigenous Amazigh (Berber) people established sophisticated societies across North Africa as early as 2000 BCE, developing distinctive languages, agricultural techniques, and artistic traditions that continue to influence Moroccan culture today.",
      imageUrl:
        "https://images.unsplash.com/photo-1512958789358-4dac0f999b80?w=800&q=80",
    },
    {
      title: "Islamic Golden Age",
      description:
        "Following the Arab conquest in the 7th century, Morocco flourished under various Islamic dynasties, particularly the Almoravids and Almohads (11th-13th centuries), who built magnificent cities, universities, and mosques while advancing science and philosophy.",
      imageUrl:
        "https://images.unsplash.com/photo-1539020140153-e8c237112e53?w=800&q=80",
    },
    {
      title: "Modern Independence",
      description:
        "After periods of Portuguese, Spanish, and French colonization, Morocco gained independence in 1956 under King Mohammed V, beginning a new era of nation-building that balanced modernization with traditional cultural values.",
      imageUrl:
        "https://images.unsplash.com/photo-1570214476695-19bd467e6f7a?w=800&q=80",
    },
  ],
};

export const desertLifeData: ContentSectionData = {
  id: "desert",
  title: "Desert Life",
  subtitle: "Surviving and Thriving in the Sahara",
  description:
    "The Sahara Desert shapes the lives and traditions of many Moroccan communities, particularly the nomadic Berber tribes who have developed unique adaptations to this harsh yet beautiful environment. Their knowledge of stars, water sources, and desert navigation has been passed down through generations.",
  imageUrl:
    "https://images.unsplash.com/photo-1531501410720-c8d437636169?w=800&q=80",
  imageAlt: "Camel caravan crossing Sahara dunes at sunset",
  imagePosition: "right",
  backgroundColor: "bg-yellow-50",
  items: [
    {
      title: "Nomadic Traditions",
      description:
        "Berber nomads follow seasonal migration patterns with their livestock, living in portable tents made of woven camel and goat hair that provide remarkable insulation against both heat and cold.",
      imageUrl:
        "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80",
    },
    {
      title: "Desert Architecture",
      description:
        "Communities on the desert edge have developed distinctive earthen architecture, including ksour (fortified villages) and kasbahs (fortified homes) with thick walls that keep interiors cool during scorching days and warm during cold nights.",
      imageUrl:
        "https://images.unsplash.com/photo-1548759806-821effb9d1b0?w=800&q=80",
    },
    {
      title: "Oasis Agriculture",
      description:
        "Ingenious irrigation systems allow for cultivation of date palms, olives, and vegetables in desert oases, creating microecosystems that have sustained communities for centuries through careful water management and sustainable farming practices.",
      imageUrl:
        "https://images.unsplash.com/photo-1512958789358-4dac0f999b80?w=800&q=80",
    },
  ],
};

export const galleryImages: GalleryImage[] = [
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
    description: "Complex geometric patterns that adorn Moroccan architecture.",
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

export const allSections = [
  { id: "cuisine", label: "Cuisine" },
  { id: "crafts", label: "Crafts" },
  { id: "music", label: "Music" },
  { id: "landmarks", label: "Landmarks" },
  { id: "history", label: "History" },
  { id: "desert", label: "Desert Life" },
  { id: "modern", label: "Modern Culture" },
  { id: "gallery", label: "Gallery" },
];

export const allSectionsData = [
  cuisineData,
  craftsData,
  musicData,
  landmarksData,
  historyData,
  desertLifeData,
  modernCultureData,
];
