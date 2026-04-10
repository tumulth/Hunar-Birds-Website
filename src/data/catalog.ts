export type ProductCategory = "wearables" | "accessories" | "home";

export type ProductStockStatus =
  | "made-to-order"
  | "limited-ready"
  | "ready-to-ship";

export interface ProductReview {
  name: string;
  location: string;
  rating: number;
  quote: string;
}

export interface Product {
  id: string;
  name: string;
  priceInr: number;
  category: ProductCategory;
  images: string[];
  imageDescription: string;
  shortDescription: string;
  description: string;
  materials: string[];
  sizes: string[];
  dimensions: string[];
  care: string[];
  leadTime: string;
  colorOptions: string[];
  customizationNote: string;
  stockStatus: ProductStockStatus;
  tags: string[];
  collection: string;
  suitableFor: string;
  featured: boolean;
  bestSeller: boolean;
  sortOrder: number;
  review: ProductReview;
  seoDescription: string;
}

export const categoryLabels: Record<ProductCategory, string> = {
  wearables: "Wearables",
  accessories: "Accessories",
  home: "Home Decor",
};

export const stockStatusLabels: Record<ProductStockStatus, string> = {
  "made-to-order": "Made to order",
  "limited-ready": "Limited ready stock",
  "ready-to-ship": "Ready to ship",
};

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const gallery = (folder: string, files: string[]) =>
  files.map((file) => `/products/${folder}/${file}`);

export function formatPrice(priceInr: number) {
  return currencyFormatter.format(priceInr);
}

export function getAverageRating(product: Product) {
  return product.review.rating;
}

export function getProductImageAlt(product: Product, index: number) {
  if (index === 0) {
    return product.imageDescription;
  }

  return `${product.name} detail view ${index + 1}`;
}

export const products: Product[] = [
  {
    id: "ocean-bloom-crochet-top",
    name: "Ocean Bloom Crochet Top",
    priceInr: 2800,
    category: "wearables",
    images: gallery("ocean-bloom-crochet-top", ["1.png", "2.png", "3.png"]),
    imageDescription:
      "Ocean Bloom Crochet Top displayed with floral stitch details and a soft summer silhouette.",
    shortDescription:
      "Breathable cotton crochet with a flattering shape for summer styling.",
    description:
      "Handmade in cotton yarn with a light drape and custom-fit finishing for warm days and easy layering.",
    materials: ["Mercerized cotton yarn", "Optional soft lining on request"],
    sizes: ["XS", "S", "M", "L", "XL", "Custom fit"],
    dimensions: ["Length customized before making", "Bust fit confirmed on WhatsApp"],
    care: ["Hand wash cold", "Dry flat in shade", "Store folded"],
    leadTime: "4 to 6 days",
    colorOptions: ["Ocean blue", "Sage", "Ivory", "Custom palette"],
    customizationNote:
      "Bust, waist, length, and strap adjustments are available before production.",
    stockStatus: "made-to-order",
    tags: ["summer", "custom-fit", "bestseller", "wearable"],
    collection: "The Weaver's Nest",
    suitableFor: "Brunch outfits, holidays, and gifting",
    featured: true,
    bestSeller: true,
    sortOrder: 12,
    review: {
      name: "Riya",
      location: "Mumbai",
      rating: 5,
      quote: "The fit felt genuinely custom and the yarn was soft all day.",
    },
    seoDescription:
      "Shop the Ocean Bloom Crochet Top from Hunar Birds. Custom-fit handmade crochet in breathable cotton, crafted in India.",
  },
  {
    id: "heritage-floral-knit-skirt",
    name: "Heritage Floral Knit Skirt",
    priceInr: 3200,
    category: "wearables",
    images: gallery("heritage-floral-knit-skirt", ["1.png", "2.png", "3.png"]),
    imageDescription:
      "Heritage Floral Knit Skirt featuring statement crochet motifs and elegant movement.",
    shortDescription:
      "A floral crochet skirt designed for occasion dressing and slow fashion wardrobes.",
    description:
      "Made with a comfortable waist finish and a detailed floral pattern that stands out beautifully in motion.",
    materials: ["Soft acrylic-cotton blend", "Optional cotton lining"],
    sizes: ["XS", "S", "M", "L", "XL", "Custom waist and length"],
    dimensions: ["Waist and hip fit confirmed before making", "Mini, midi, or custom length"],
    care: ["Gentle hand wash", "Do not wring", "Steam lightly if needed"],
    leadTime: "5 to 7 days",
    colorOptions: ["Terracotta", "Olive", "Ivory", "Custom palette"],
    customizationNote:
      "Waist size, skirt length, and lining preference can all be customized.",
    stockStatus: "made-to-order",
    tags: ["custom-fit", "occasion", "wearable", "floral"],
    collection: "The Weaver's Nest",
    suitableFor: "Festive styling, vacation dressing, and custom wardrobes",
    featured: true,
    bestSeller: false,
    sortOrder: 11,
    review: {
      name: "Mitali",
      location: "Ahmedabad",
      rating: 5,
      quote: "The floral motif is gorgeous in person and the length was perfect.",
    },
    seoDescription:
      "Discover the Heritage Floral Knit Skirt from Hunar Birds. Handmade crochet with custom sizing and floral details.",
  },
  {
    id: "handmade-crochet-baby-frock-set",
    name: "Handmade Crochet Baby Frock Set",
    priceInr: 2000,
    category: "wearables",
    images: gallery("handmade-crochet-baby-frock-set", ["1.png", "2.png", "3.png"]),
    imageDescription:
      "Handmade Crochet Baby Frock Set arranged with delicate handmade details for gifting.",
    shortDescription:
      "A soft handmade baby set designed for gifting, keepsakes, and milestone moments.",
    description:
      "Made with gentle yarn and thoughtful finishing, this frock set works beautifully for baby showers and newborn gifts.",
    materials: ["Baby-safe cotton blend yarn", "Soft tie closures"],
    sizes: ["0-3 months", "3-6 months", "6-12 months", "Custom baby size"],
    dimensions: ["Age and chest can be adjusted", "Matching bonnet available on request"],
    care: ["Hand wash with mild detergent", "Dry flat on a towel", "Store away from velcro"],
    leadTime: "4 to 5 days",
    colorOptions: ["Ivory", "Blush", "Sunshine yellow", "Custom pastel palette"],
    customizationNote:
      "We can adjust age range, sleeve length, and add matching accessories.",
    stockStatus: "made-to-order",
    tags: ["baby-gift", "custom-fit", "soft-cotton", "giftable"],
    collection: "The Weaver's Nest",
    suitableFor: "Baby showers, announcements, and keepsake gifting",
    featured: false,
    bestSeller: true,
    sortOrder: 10,
    review: {
      name: "Priya",
      location: "Bengaluru",
      rating: 5,
      quote: "A precious gift set with very premium and baby-friendly finishing.",
    },
    seoDescription:
      "Order the Handmade Crochet Baby Frock Set from Hunar Birds. Soft handmade babywear crafted in India for gifting.",
  },
  {
    id: "terracotta-lace-headband",
    name: "Terracotta Lace Headband",
    priceInr: 900,
    category: "accessories",
    images: gallery("terracotta-lace-headband", ["1.png", "2.png", "3.png"]),
    imageDescription:
      "Terracotta Lace Headband with warm color and delicate crochet texture.",
    shortDescription:
      "A lightweight crochet headband that adds handmade texture to everyday looks.",
    description:
      "This headband can be adjusted for adults or children and works beautifully for festive or casual styling.",
    materials: ["Cotton yarn", "Elastic or tie-back finish"],
    sizes: ["Child", "Teen", "Adult", "Custom circumference"],
    dimensions: ["Approx. 2.5 inch width", "Fit adjusted before dispatch"],
    care: ["Spot clean or hand wash", "Reshape while damp", "Store flat"],
    leadTime: "2 to 3 days",
    colorOptions: ["Terracotta", "Rust", "Ivory"],
    customizationNote:
      "Circumference and closure style can be adapted for kids or adults.",
    stockStatus: "limited-ready",
    tags: ["giftable", "accessory", "festival", "ready-soon"],
    collection: "Everyday Craft",
    suitableFor: "Festive dressing, styling gifts, and matching sets",
    featured: false,
    bestSeller: false,
    sortOrder: 9,
    review: {
      name: "Shreya",
      location: "Jaipur",
      rating: 5,
      quote: "Comfortable all evening and the terracotta tone is beautiful.",
    },
    seoDescription:
      "Shop the Terracotta Lace Headband from Hunar Birds. Handmade crochet accessory with comfortable custom sizing.",
  },
  {
    id: "ocean-breeze-bandana",
    name: "Ocean Breeze Bandana",
    priceInr: 700,
    category: "accessories",
    images: gallery("ocean-breeze-bandana", ["1.png", "2.png"]),
    imageDescription:
      "Ocean Breeze Bandana styled flat with airy crochet stitches in calm blue tones.",
    shortDescription:
      "A tie-back bandana designed for easy styling and warm-weather wear.",
    description:
      "With calming blue tones and a comfortable tie-back, this bandana adds a handmade finish to casual everyday looks.",
    materials: ["Lightweight cotton yarn"],
    sizes: [],
    dimensions: ["Triangle drop about 11 inches", "Adjustable ties for flexible fit"],
    care: ["Hand wash cool", "Lay flat to dry", "Do not tumble dry"],
    leadTime: "2 to 4 days",
    colorOptions: ["Ocean blue", "Teal", "Custom two-tone request"],
    customizationNote:
      "Tie length and color blocking can be customized for a more secure or dramatic look.",
    stockStatus: "ready-to-ship",
    tags: ["summer", "accessory", "giftable", "ready-to-ship"],
    collection: "Everyday Craft",
    suitableFor: "Holiday styling, gifting, and daily wear",
    featured: false,
    bestSeller: true,
    sortOrder: 8,
    review: {
      name: "Apoorva",
      location: "Chennai",
      rating: 5,
      quote: "Easy to style and airy enough even in hot weather.",
    },
    seoDescription:
      "Buy the Ocean Breeze Bandana from Hunar Birds. Lightweight handmade crochet accessory ready to ship from India.",
  },
  {
    id: "lavender-edge-bandana",
    name: "Lavender Edge Bandana",
    priceInr: 700,
    category: "accessories",
    images: gallery("lavender-edge-bandana", ["1.png", "2.png", "3.png"]),
    imageDescription:
      "Lavender Edge Bandana with delicate edging and soft pastel tones.",
    shortDescription:
      "A soft lavender bandana finished with delicate edging for an elevated handmade look.",
    description:
      "Designed to frame the face gently, this bandana adds a romantic, handmade note to the accessory lineup.",
    materials: ["Lightweight cotton blend yarn"],
    sizes: [],
    dimensions: ["Triangle drop about 11 inches", "Tie-back fit for adults and teens"],
    care: ["Gentle hand wash", "Dry flat", "Store folded or rolled"],
    leadTime: "2 to 4 days",
    colorOptions: ["Lavender", "Dusty lilac", "Custom pastel edge"],
    customizationNote:
      "Edge color and tie length can be adjusted for a more personalized finish.",
    stockStatus: "limited-ready",
    tags: ["accessory", "giftable", "pastel", "ready-soon"],
    collection: "Everyday Craft",
    suitableFor: "Casual styling, gifting, and coordinated handmade looks",
    featured: false,
    bestSeller: false,
    sortOrder: 7,
    review: {
      name: "Tanvi",
      location: "Noida",
      rating: 5,
      quote: "The edging is beautiful and the lavender tone feels very wearable.",
    },
    seoDescription:
      "Shop the Lavender Edge Bandana by Hunar Birds. Handmade crochet bandana with delicate edging and soft color options.",
  },
  {
    id: "oatmeal-knit-fingerless-mitts",
    name: "Oatmeal Knit Fingerless Mitts",
    priceInr: 850,
    category: "accessories",
    images: gallery("oatmeal-knit-fingerless-mitts", ["1.png", "2.png", "gloves 2.3.png"]),
    imageDescription:
      "Oatmeal Knit Fingerless Mitts in a soft neutral shade with cozy handmade texture.",
    shortDescription:
      "Soft neutral mitts that add warmth without sacrificing movement.",
    description:
      "These fingerless mitts are easy to pair with everyday outfits and can be customized for a snug or relaxed fit.",
    materials: ["Warm acrylic-wool blend"],
    sizes: ["S/M", "M/L", "Custom fit"],
    dimensions: ["Length about 7 inches", "Thumb opening adjusted for comfort"],
    care: ["Cold hand wash", "Press gently in a towel", "Dry flat away from heat"],
    leadTime: "3 to 4 days",
    colorOptions: ["Oatmeal", "Mushroom", "Cocoa"],
    customizationNote:
      "Palm width and cuff length can be adapted for a more fitted or relaxed feel.",
    stockStatus: "ready-to-ship",
    tags: ["winter", "accessory", "giftable", "ready-to-ship"],
    collection: "Cozy Handcraft",
    suitableFor: "Cold-weather gifting and easy daily wear",
    featured: false,
    bestSeller: true,
    sortOrder: 6,
    review: {
      name: "Radhika",
      location: "Shimla",
      rating: 5,
      quote: "Warm, neat, and practical. I could still use my phone easily.",
    },
    seoDescription:
      "Explore the Oatmeal Knit Fingerless Mitts by Hunar Birds. Handmade cozy mitts in soft neutral tones, ready to ship in India.",
  },
  {
    id: "autumn-hug-fingerless-mitts",
    name: "Autumn Hug Fingerless Mitts",
    priceInr: 850,
    category: "accessories",
    images: gallery("autumn-hug-fingerless-mitts", ["1.png", "2.png", "3.png"]),
    imageDescription:
      "Autumn Hug Fingerless Mitts in warm earthy shades inspired by fall foliage.",
    shortDescription:
      "Warm-toned crochet mitts with a cozy palette inspired by autumn.",
    description:
      "Designed for comfort and color, these mitts add a cheerful handmade detail to cooler days.",
    materials: ["Warm acrylic-wool blend"],
    sizes: ["S/M", "M/L", "Custom fit"],
    dimensions: ["Length about 7 inches", "Stretch fit with shaped cuff"],
    care: ["Hand wash with mild detergent", "Avoid twisting", "Dry flat"],
    leadTime: "3 to 4 days",
    colorOptions: ["Rust", "Mustard", "Burnt orange", "Custom earthy mix"],
    customizationNote:
      "We can tweak the color mix and cuff snugness for a more personalized pair.",
    stockStatus: "limited-ready",
    tags: ["winter", "accessory", "giftable", "earthy"],
    collection: "Cozy Handcraft",
    suitableFor: "Seasonal gifting and handmade winter accessories",
    featured: false,
    bestSeller: false,
    sortOrder: 5,
    review: {
      name: "Megha",
      location: "Ludhiana",
      rating: 5,
      quote: "The colors are cheerful and the mitts feel soft without being bulky.",
    },
    seoDescription:
      "Order the Autumn Hug Fingerless Mitts from Hunar Birds. Handmade crochet mitts with warm seasonal colors and custom fit options.",
  },
  {
    id: "sunbeam-baby-blanket",
    name: "Sunbeam Baby Blanket",
    priceInr: 1800,
    category: "home",
    images: gallery("sunbeam-baby-blanket", ["1.png", "2.png"]),
    imageDescription:
      "Sunbeam Baby Blanket spread out to show a bright and comforting handmade pattern.",
    shortDescription:
      "A soft baby blanket with a bright, comforting handmade feel.",
    description:
      "Made for nurseries and gifting, this blanket balances warmth, softness, and keepsake value in one thoughtful piece.",
    materials: ["Baby-safe acrylic-cotton blend yarn"],
    sizes: [],
    dimensions: ["Approx. 34 x 42 inches"],
    care: ["Gentle hand wash", "Dry flat", "Avoid high heat"],
    leadTime: "4 to 5 days",
    colorOptions: ["Sunshine yellow", "Cream", "Custom nursery palette"],
    customizationNote:
      "Name initials and nursery colors can be discussed before making.",
    stockStatus: "made-to-order",
    tags: ["baby-gift", "home", "nursery", "giftable"],
    collection: "Home Comfort",
    suitableFor: "Nursery gifting, baby showers, and keepsake blankets",
    featured: false,
    bestSeller: true,
    sortOrder: 4,
    review: {
      name: "Komal",
      location: "Hyderabad",
      rating: 5,
      quote: "So soft and thoughtful. It made a lovely handmade baby gift.",
    },
    seoDescription:
      "Buy the Sunbeam Baby Blanket by Hunar Birds. Handmade nursery blanket crafted in India and customizable for gifting.",
  },
  {
    id: "mauve-mosaic-blanket",
    name: "Mauve Mosaic Blanket",
    priceInr: 2200,
    category: "home",
    images: gallery("mauve-mosaic-blanket", ["1.png", "2.png", "3.png"]),
    imageDescription:
      "Mauve Mosaic Blanket displayed fully to show its geometric stitch pattern and soft palette.",
    shortDescription:
      "A soothing crochet blanket with mosaic texture and a calming mauve palette.",
    description:
      "This blanket brings warmth and handcrafted detail to beds, reading corners, and thoughtful gifting.",
    materials: ["Soft acrylic yarn with easy-care finish"],
    sizes: [],
    dimensions: ["Approx. 42 x 56 inches"],
    care: ["Gentle hand wash", "Roll in a towel", "Dry flat and reshape"],
    leadTime: "5 to 7 days",
    colorOptions: ["Mauve", "Dusty rose", "Sage and cream mix"],
    customizationNote:
      "Color family and blanket size can be adjusted for throws or lap blankets.",
    stockStatus: "made-to-order",
    tags: ["home", "giftable", "cozy", "statement"],
    collection: "Home Comfort",
    suitableFor: "Reading nooks, couch styling, and meaningful gifting",
    featured: false,
    bestSeller: false,
    sortOrder: 3,
    review: {
      name: "Harini",
      location: "Coimbatore",
      rating: 5,
      quote: "The blanket adds such a soft handmade mood to my room.",
    },
    seoDescription:
      "Discover the Mauve Mosaic Blanket from Hunar Birds. Handmade crochet blanket for cozy home styling and gifting.",
  },
  {
    id: "sunloom-bloom-cushion-cover",
    name: "Sunloom Bloom Cushion Cover",
    priceInr: 1200,
    category: "home",
    images: gallery("sunloom-bloom-cushion-cover", ["1.png", "2.png", "Sunloom Bloom Cushion Cover 3.png"]),
    imageDescription:
      "Sunloom Bloom Cushion Cover with floral crochet design and warm decorative texture.",
    shortDescription:
      "A floral crochet cushion cover that instantly warms up a room.",
    description:
      "This decorative cover is designed to make corners feel considered, handmade, and brighter.",
    materials: ["Cotton yarn", "Envelope back finish"],
    sizes: [],
    dimensions: ["Fits a 16 x 16 inch insert", "Custom sizes available on request"],
    care: ["Remove insert before washing", "Hand wash only", "Dry flat"],
    leadTime: "3 to 5 days",
    colorOptions: ["Sunlit yellow", "Ivory", "Terracotta accents"],
    customizationNote:
      "Cover size and flower colors can be tailored to match your room palette.",
    stockStatus: "made-to-order",
    tags: ["home", "decor", "giftable", "bestseller"],
    collection: "Home Comfort",
    suitableFor: "Living room styling, festive decor, and housewarming gifts",
    featured: true,
    bestSeller: true,
    sortOrder: 2,
    review: {
      name: "Aditi",
      location: "Goa",
      rating: 5,
      quote: "It changed the whole mood of my sofa corner in the best way.",
    },
    seoDescription:
      "Shop the Sunloom Bloom Cushion Cover from Hunar Birds. Handmade floral crochet decor for cozy Indian homes.",
  },
  {
    id: "lemon-grove-table-runner",
    name: "Lemon Grove Table Runner",
    priceInr: 1500,
    category: "home",
    images: gallery("lemon-grove-table-runner", ["1.png", "2.png", "3.png"]),
    imageDescription:
      "Lemon Grove Table Runner laid across a table with fresh citrus-inspired color.",
    shortDescription:
      "A cheerful crochet table runner for bright, handmade tablescapes.",
    description:
      "Made to brighten dining spaces, this runner works for everyday tables, festive hosting, and gifting.",
    materials: ["Cotton yarn"],
    sizes: [],
    dimensions: ["Approx. 14 x 48 inches", "Custom lengths available"],
    care: ["Hand wash cool", "Dry flat", "Steam lightly after storage"],
    leadTime: "3 to 5 days",
    colorOptions: ["Lemon and cream", "Sage and ivory", "Custom table palette"],
    customizationNote:
      "Length and palette can be adjusted for dining tables, dressers, or consoles.",
    stockStatus: "made-to-order",
    tags: ["home", "decor", "festival", "giftable"],
    collection: "Home Comfort",
    suitableFor: "Tablescapes, festive hosting, and housewarming gifting",
    featured: false,
    bestSeller: false,
    sortOrder: 1,
    review: {
      name: "Srishti",
      location: "Jaipur",
      rating: 5,
      quote: "Fresh, bright, and beautifully handmade for my dining setup.",
    },
    seoDescription:
      "Order the Lemon Grove Table Runner from Hunar Birds. Handmade crochet table decor with custom lengths and colors.",
  },
  {
    id: "petal-knit-coaster-set",
    name: "Petal Knit Coaster Set",
    priceInr: 600,
    category: "home",
    images: gallery("petal-knit-coaster-set", ["1.png", "2.png", "3.png"]),
    imageDescription:
      "Petal Knit Coaster Set arranged as a handcrafted floral tabletop set.",
    shortDescription:
      "A giftable floral coaster set that adds a handcrafted accent to tea time.",
    description:
      "Small but memorable, this coaster set works beautifully for return gifts, housewarmings, and everyday use.",
    materials: ["Cotton yarn"],
    sizes: [],
    dimensions: ["Set of 4", "Each coaster about 4 inches wide"],
    care: ["Spot clean or hand wash", "Press flat after drying", "Store stacked"],
    leadTime: "2 to 3 days",
    colorOptions: ["Blush", "Ivory", "Terracotta", "Mixed floral palette"],
    customizationNote:
      "You can request a specific color mix for gifting sets or event favors.",
    stockStatus: "ready-to-ship",
    tags: ["home", "giftable", "bestseller", "ready-to-ship"],
    collection: "Small Joys",
    suitableFor: "Host gifts, housewarming hampers, and return favors",
    featured: true,
    bestSeller: true,
    sortOrder: 13,
    review: {
      name: "Jhanvi",
      location: "Udaipur",
      rating: 5,
      quote: "So pretty and giftable. I ordered a second set almost immediately.",
    },
    seoDescription:
      "Shop the Petal Knit Coaster Set by Hunar Birds. Handmade crochet coasters ready to gift or style at home.",
  },
  {
    id: "amethyst-granny-square-coaster-set",
    name: "Amethyst Granny Square Coaster Set",
    priceInr: 600,
    category: "home",
    images: gallery("amethyst-granny-square-coaster-set", ["1.png", "2.png", "3.png"]),
    imageDescription:
      "Amethyst Granny Square Coaster Set laid out to show its classic colorful motifs.",
    shortDescription:
      "Classic granny square coasters in an amethyst palette with a nostalgic handmade feel.",
    description:
      "This coaster set is perfect for homes that love color, texture, and a charming handmade detail.",
    materials: ["Cotton yarn"],
    sizes: [],
    dimensions: ["Set of 4", "Each coaster about 4.25 inches wide"],
    care: ["Hand wash if needed", "Dry flat", "Press lightly from the reverse side"],
    leadTime: "2 to 3 days",
    colorOptions: ["Amethyst", "Berry mix", "Custom vintage palette"],
    customizationNote:
      "Color palettes can be matched to gifting themes or home decor shades.",
    stockStatus: "ready-to-ship",
    tags: ["home", "giftable", "classic", "ready-to-ship"],
    collection: "Small Joys",
    suitableFor: "Colorful homes, gifting, and tabletop accents",
    featured: false,
    bestSeller: false,
    sortOrder: 14,
    review: {
      name: "Lavanya",
      location: "Visakhapatnam",
      rating: 5,
      quote: "The colors are gorgeous and the granny-square look feels timeless.",
    },
    seoDescription:
      "Buy the Amethyst Granny Square Coaster Set by Hunar Birds. Handmade crochet coasters in a classic colorful motif.",
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export const shopFilterTags = [
  { value: "all", label: "All pieces" },
  { value: "bestseller", label: "Best sellers" },
  { value: "custom-fit", label: "Custom fit" },
  { value: "giftable", label: "Giftable" },
  { value: "ready-to-ship", label: "Ready to ship" },
] as const;

export function getProductById(id?: string) {
  return products.find((product) => product.id === id);
}

export function getRelatedProducts(product: Product, limit = 3) {
  return products
    .filter((candidate) => candidate.id !== product.id)
    .map((candidate) => {
      const sharedTags = candidate.tags.filter((tag) =>
        product.tags.includes(tag),
      ).length;
      const sharedCategoryBonus = candidate.category === product.category ? 2 : 0;
      const featuredBonus = candidate.featured ? 1 : 0;

      return {
        candidate,
        score: sharedTags + sharedCategoryBonus + featuredBonus,
      };
    })
    .sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score;
      }

      return right.candidate.sortOrder - left.candidate.sortOrder;
    })
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}
