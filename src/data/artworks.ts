import { formatPrice } from "@/data/products";

export type ArtType = "landscape" | "portrait";

export interface Artwork {
  id: string;
  title: string;
  type: ArtType;
  image: string;
  originalPrice: number;
  printPrice: number;
  description: string;
  longDescription: string;
  medium: string;
  printSize: string;
}

export const artTypeLabels: Record<ArtType, string> = {
  landscape: "Landscape",
  portrait: "Portrait",
};

export const artworks: Artwork[] = [
  {
    id: "sacred-cow-madhubani",
    title: "Sacred Cow – Madhubani",
    type: "portrait",
    image: "/paintings/painting-1.jpg",
    originalPrice: 9999,
    printPrice: 999,
    description: "A Madhubani-inspired sacred cow surrounded by lotus motifs and hand-drawn detail.",
    longDescription:
      "A sacred cow rests among blooming lotus flowers in this Madhubani-inspired work. Its intricate line work, floral border, and restrained red and green accents celebrate a traditional visual language with warmth and grace.",
    medium: "Original painting",
    printSize: "Fine art print",
  },
  {
    id: "divine-stillness",
    title: "Divine Stillness",
    type: "portrait",
    image: "/paintings/painting-2.jpg",
    originalPrice: 14999,
    printPrice: 999,
    description: "A contemplative Shiva lingam composition alive with flowers, texture, and deep color.",
    longDescription:
      "This devotional composition centers a Shiva lingam surrounded by flowers and richly layered colour. The dark, textured setting and luminous offerings create a quiet sense of reverence and stillness.",
    medium: "Original painting",
    printSize: "Fine art print",
  },
  {
    id: "royal-companions",
    title: "Royal Companions",
    type: "portrait",
    image: "/paintings/painting-3.jpg",
    originalPrice: 14999,
    printPrice: 999,
    description: "Two peacocks bring regal color and presence to an ornate palace setting.",
    longDescription:
      "Two peacocks stand before an ornate palace doorway in this richly coloured work. Jewel-toned feathers, golden architecture, and a calm, balanced composition give the painting a distinctly regal presence.",
    medium: "Original painting",
    printSize: "Fine art print",
  },
  {
    id: "three-forms-of-shakti",
    title: "Three Forms of Shakti",
    type: "portrait",
    image: "/paintings/painting-4.jpg",
    originalPrice: 11999,
    printPrice: 999,
    description: "Three powerful forms of Shakti, framed by symbolic detail and a watchful lion.",
    longDescription:
      "Three vibrant forms of Shakti fill this symbolic portrait, accompanied by a lion and sacred motifs. The strong colour palette and direct gazes bring energy, strength, and devotional beauty to the composition.",
    medium: "Original painting",
    printSize: "Fine art print",
  },
  {
    id: "devotion-of-hanuman",
    title: "The Devotion of Hanuman",
    type: "portrait",
    image: "/paintings/painting-5.jpg",
    originalPrice: 14999,
    printPrice: 999,
    description: "Hanuman in prayer against a radiant red and gold mountain landscape.",
    longDescription:
      "Hanuman sits in a moment of devotion beneath a glowing sky marked with the name of Ram. The radiant red, orange, and gold landscape amplifies the work's feeling of faith, strength, and serenity.",
    medium: "Original painting",
    printSize: "Fine art print",
  },
  {
    id: "at-the-temple-door",
    title: "At the Temple Door",
    type: "portrait",
    image: "/paintings/painting-6.jpg",
    originalPrice: 11999,
    printPrice: 999,
    description: "A quiet temple-side portrait illuminated by warm arches, bells, and jasmine.",
    longDescription:
      "A woman pauses at a temple door, framed by warm arches, hanging bells, and strands of jasmine. The intimate profile and glowing palette create a moment that feels both ceremonial and personal.",
    medium: "Original painting",
    printSize: "Fine art print",
  },
  {
    id: "road-to-the-mountains",
    title: "Road to the Mountains",
    type: "landscape",
    image: "/paintings/painting-7.jpg",
    originalPrice: 9999,
    printPrice: 999,
    description: "A winding road travels through bright hills, trees, and distant blue mountains.",
    longDescription:
      "A winding road leads through rolling green and blue hills toward the mountains beyond. Its simple, expressive shapes and bright colours invite the eye to travel slowly through a cheerful, open landscape.",
    medium: "Original painting",
    printSize: "Fine art print",
  },
  {
    id: "forest-companions",
    title: "Forest Companions",
    type: "landscape",
    image: "/paintings/painting-8.jpg",
    originalPrice: 4999,
    printPrice: 999,
    description: "A hoopoe and sparrows share a sunlit branch in a lush green forest.",
    longDescription:
      "A hoopoe and two sparrows gather on a branch surrounded by a lively forest canopy. Deep blues, fresh greens, and warm flashes of orange make this nature scene feel full of movement and companionship.",
    medium: "Original painting",
    printSize: "Fine art print",
  },
  {
    id: "the-divine-melody",
    title: "The Divine Melody",
    type: "portrait",
    image: "/paintings/painting-9.jpg",
    originalPrice: 9999,
    printPrice: 999,
    description: "Krishna plays a flute amid a vibrant cascade of flowers and peacock feathers.",
    longDescription:
      "Krishna is shown playing the flute amid flowers, rich drapery, and peacock-feather detail. The joyous colour and flowing composition turn this devotional portrait into a celebration of music and beauty.",
    medium: "Original painting",
    printSize: "Fine art print",
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
