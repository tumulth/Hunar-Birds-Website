import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  customFit: boolean;
}

const products: Product[] = [
  // Wearables
  { id: "ocean-bloom-crochet-top", name: "Ocean Bloom Crochet Top", category: "Wearables", price: 3200, description: "Airy handmade crochet top inspired by coastal tones", customFit: true },
  { id: "heritage-floral-knit-skirt", name: "Heritage Floral Knit Skirt", category: "Wearables", price: 3800, description: "A floral-textured knit skirt with heirloom charm", customFit: true },
  { id: "handmade-crochet-baby-frock-set", name: "Handmade Crochet Baby Frock Set", category: "Wearables", price: 1800, description: "A soft handmade frock set crafted for little ones", customFit: true },
  // Accessories
  { id: "terracotta-lace-headband", name: "Terracotta Lace Headband", category: "Accessories", price: 500, description: "An elegant lace headband in warm terracotta tones", customFit: false },
  { id: "ocean-breeze-bandana", name: "Ocean Breeze Bandana", category: "Accessories", price: 650, description: "A breezy crochet bandana with a relaxed coastal feel", customFit: false },
  { id: "oatmeal-knit-fingerless-mitts", name: "Oatmeal Knit Fingerless Mitts", category: "Accessories", price: 900, description: "Soft fingerless mitts in a versatile oatmeal knit", customFit: false },
  { id: "lavender-edge-bandana", name: "Lavender Edge Bandana", category: "Accessories", price: 650, description: "A delicate bandana finished with a lavender edge", customFit: false },
  { id: "autumn-hug-fingerless-mitts", name: "Autumn Hug Fingerless Mitts", category: "Accessories", price: 900, description: "Cozy fingerless mitts designed for crisp autumn days", customFit: false },
  // Home
  { id: "sunloom-bloom-cushion-cover", name: "Sunloom Bloom Cushion Cover", category: "Home Nesting", price: 1200, description: "A blooming cushion cover to warm up your living space", customFit: false },
  { id: "sunbeam-baby-blanket", name: "Sunbeam Baby Blanket", category: "Home Nesting", price: 2200, description: "A cozy baby blanket stitched for softness and comfort", customFit: false },
  { id: "petal-knit-coaster-set", name: "Petal Knit Coaster Set", category: "Home Nesting", price: 600, description: "A set of petal-inspired coasters for everyday tables", customFit: false },
  { id: "mauve-mosaic-blanket", name: "Mauve Mosaic Blanket", category: "Home Nesting", price: 5500, description: "A full-size blanket with a rich mauve mosaic pattern", customFit: false },
  { id: "lemon-grove-table-runner", name: "Lemon Grove Table Runner", category: "Home Nesting", price: 3000, description: "A cheerful table runner with a fresh handcrafted finish", customFit: false },
  { id: "amethyst-granny-square-coaster-set", name: "Amethyst Granny Square Coaster Set", category: "Home Nesting", price: 700, description: "Classic granny square coasters in amethyst tones", customFit: false },
];

const categoryFilters = ["All", "Wearables", "Accessories", "Home Nesting"];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" as const },
  }),
};

const ShopCrochet = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? products : products.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Shop Crochet
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Handmade crochet clothing, accessories & home décor. Custom-fit wearables made to your measurements.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categoryFilters.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-sm text-xs font-sans font-medium uppercase tracking-wider transition-colors ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={i}
            >
              <Link to={`/product/${product.id}`}>
                <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 group">
                  <div className="aspect-square bg-secondary flex items-center justify-center">
                    <span className="text-4xl opacity-30">🧶</span>
                  </div>
                  <div className="p-5">
                    {product.customFit && (
                      <span className="text-[10px] font-sans uppercase tracking-wider text-primary font-semibold">
                        Custom Fit
                      </span>
                    )}
                    <h3 className="font-serif text-lg font-semibold text-foreground mt-1">{product.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
                    <p className="text-primary font-sans font-bold mt-3">₹{product.price.toLocaleString("en-IN")}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCrochet;
