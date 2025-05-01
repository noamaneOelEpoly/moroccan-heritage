import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Default fallback images by category
export const defaultImages = {
  cuisine:
    "https://images.unsplash.com/photo-1565799515768-2dcfd834625c?w=800&q=80",
  crafts:
    "https://images.unsplash.com/photo-1560430760-d5b52575c77e?w=800&q=80",
  music:
    "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80",
  landmarks:
    "https://images.unsplash.com/photo-1553165558-1cf5f2d72c9a?w=800&q=80",
  history:
    "https://images.unsplash.com/photo-1548019979-e5c3c7fd74e9?w=800&q=80",
  desert:
    "https://images.unsplash.com/photo-1531501410720-c8d437636169?w=800&q=80",
  modern:
    "https://images.unsplash.com/photo-1577720643272-265f09367456?w=800&q=80",
  landscape:
    "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=80",
  architecture:
    "https://images.unsplash.com/photo-1553342237-bd609f0c9bcb?w=800&q=80",
  people:
    "https://images.unsplash.com/photo-1585670140617-9a3a2e8b7c76?w=800&q=80",
  food: "https://images.unsplash.com/photo-1551634979-2b11f8c946fe?w=800&q=80",
};

/**
 * Fetches an image from Unsplash based on a keyword
 * @param keyword The search term for the image
 * @param fallbackUrl A fallback URL to use if the API call fails
 * @returns A URL to an image
 */
export async function getUnsplashImage(
  keyword: string,
  fallbackUrl?: string,
): Promise<string> {
  // If no API key is provided, return the fallback URL
  if (!import.meta.env.VITE_UNSPLASH_ACCESS_KEY) {
    console.warn("No Unsplash API key provided. Using fallback image.");
    return fallbackUrl || defaultImages.landmarks;
  }

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(keyword)}&orientation=landscape`,
      {
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }

    const data = await response.json();
    return `${data.urls.regular}?w=800&q=80`;
  } catch (error) {
    console.error("Error fetching image from Unsplash:", error);
    return fallbackUrl || defaultImages.landmarks;
  }
}

/**
 * Gets multiple images from Unsplash based on keywords
 * @param keywords Array of search terms
 * @param count Number of images to return
 * @returns Array of image URLs
 */
export async function getMultipleUnsplashImages(
  keywords: string[],
  count: number = 10,
): Promise<string[]> {
  // If no API key is provided, return default images
  if (!import.meta.env.VITE_UNSPLASH_ACCESS_KEY) {
    console.warn("No Unsplash API key provided. Using fallback images.");
    return Object.values(defaultImages).slice(0, count);
  }

  try {
    const keywordString = keywords.join(",");
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(keywordString)}&count=${count}&orientation=landscape`,
      {
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }

    const data = await response.json();
    return data.map((item: any) => `${item.urls.regular}?w=800&q=80`);
  } catch (error) {
    console.error("Error fetching images from Unsplash:", error);
    return Object.values(defaultImages).slice(0, count);
  }
}
