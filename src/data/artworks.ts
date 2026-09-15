import { formatPrice } from "@/data/products";

export type ArtType = "landscape" | "portrait";

export interface Artwork {
  id: string;
  title: string;
  type: ArtType;
  originalPrice: number;
  printPrice: number;
  description: string;
  longDescription: string;
  medium: string;
  printSize: string;
  paletteClassName: string;
}

export const artTypeLabels: Record<ArtType, string> = {
  landscape: "Landscape",
  portrait: "Portrait",
};

export const artworks: Artwork[] = [
  {
    id: "misty-mountains",
    title: "Misty Mountains at Dawn",
    type: "landscape",
    originalPrice: 25000,
    printPrice: 3500,
    description: "Oil on canvas capturing the quiet beauty of mountain mornings.",
    longDescription:
      "This original oil painting captures the moment dawn breaks over misty mountain peaks. Layers of translucent color create depth and atmosphere, bringing a slow, meditative mood into the room.",
    medium: "Oil on canvas",
    printSize: "A3 fine art print",
    paletteClassName:
      "bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(170,190,205,0.85)_35%,_rgba(82,98,116,0.95))]",
  },
  {
    id: "golden-fields",
    title: "Golden Fields",
    type: "landscape",
    originalPrice: 22000,
    printPrice: 3000,
    description: "A warm landscape of fields bathed in soft golden light.",
    longDescription:
      "Golden wheat and a wide-open sky create a painting that feels sunlit, warm, and expansive. It works beautifully in calm living spaces that want an earthy glow.",
    medium: "Acrylic on canvas",
    printSize: "A3 fine art print",
    paletteClassName:
      "bg-[radial-gradient(circle_at_top,_rgba(255,247,214,0.95),_rgba(223,187,109,0.9)_35%,_rgba(124,91,36,0.95))]",
  },
  {
    id: "silent-river",
    title: "The Silent River",
    type: "landscape",
    originalPrice: 28000,
    printPrice: 4000,
    description: "A peaceful riverside study of reflections, dusk, and stillness.",
    longDescription:
      "This painting explores water, reflection, and muted evening color. The result is a quiet scene that brings a sense of pause and calm to the wall it lives on.",
    medium: "Oil on canvas",
    printSize: "A3 fine art print",
    paletteClassName:
      "bg-[radial-gradient(circle_at_top,_rgba(234,244,246,0.95),_rgba(128,163,170,0.88)_35%,_rgba(50,76,86,0.95))]",
  },
  {
    id: "village-morning",
    title: "Village Morning",
    type: "landscape",
    originalPrice: 20000,
    printPrice: 2800,
    description: "A rustic Indian village slowly waking to the day.",
    longDescription:
      "Morning light filters through trees onto village homes in this intimate scene. Warm earth tones and gentle light give it a grounded, nostalgic feel.",
    medium: "Acrylic on canvas",
    printSize: "A3 fine art print",
    paletteClassName:
      "bg-[radial-gradient(circle_at_top,_rgba(255,236,210,0.95),_rgba(179,127,80,0.88)_35%,_rgba(96,63,37,0.95))]",
  },
  {
    id: "gentle-gaze",
    title: "The Gentle Gaze",
    type: "portrait",
    originalPrice: 30000,
    printPrice: 4500,
    description: "A soulful portrait study focused on quiet emotion and depth.",
    longDescription:
      "Soft modeling and carefully layered color bring the subject into focus while the background remains atmospheric. The result is intimate, calm, and emotionally direct.",
    medium: "Oil on canvas",
    printSize: "A3 fine art print",
    paletteClassName:
      "bg-[radial-gradient(circle_at_top,_rgba(246,225,219,0.95),_rgba(173,120,114,0.88)_35%,_rgba(89,56,58,0.95))]",
  },
  {
    id: "old-craftsman",
    title: "The Old Craftsman",
    type: "portrait",
    originalPrice: 35000,
    printPrice: 5000,
    description: "A portrait honoring the dignity and history in working hands.",
    longDescription:
      "This portrait pays tribute to years of learned skill. Rich textures and warm tones center the life and labor held in the subject's expression and posture.",
    medium: "Oil on canvas",
    printSize: "A3 fine art print",
    paletteClassName:
      "bg-[radial-gradient(circle_at_top,_rgba(244,231,218,0.95),_rgba(156,116,79,0.9)_35%,_rgba(81,55,38,0.95))]",
  },
];

export function getArtworkById(id?: string) {
  return artworks.find((artwork) => artwork.id === id);
}

export function getRelatedArtworks(artwork: Artwork, limit = 3) {
  return artworks
    .filter((candidate) => candidate.id !== artwork.id)
    .sort((left, right) => {
      if (left.type !== right.type) {
        return Number(right.type === artwork.type) - Number(left.type === artwork.type);
      }

      return right.originalPrice - left.originalPrice;
    })
    .slice(0, limit);
}

export { formatPrice };
