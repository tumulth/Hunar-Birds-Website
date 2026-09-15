import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ArtPiece {
  id: string;
  title: string;
  type: "landscape" | "portrait";
  originalPrice: number;
  printPrice: number;
  description: string;
}

const artworks: ArtPiece[] = [
  { id: "misty-mountains", title: "Misty Mountains at Dawn", type: "landscape", originalPrice: 25000, printPrice: 3500, description: "Oil on canvas, capturing the ethereal beauty of mountain mornings" },
  { id: "golden-fields", title: "Golden Fields", type: "landscape", originalPrice: 22000, printPrice: 3000, description: "A warm landscape of wheat fields bathed in golden light" },
  { id: "silent-river", title: "The Silent River", type: "landscape", originalPrice: 28000, printPrice: 4000, description: "Peaceful riverside scene with reflections and soft colors" },
  { id: "village-morning", title: "Village Morning", type: "landscape", originalPrice: 20000, printPrice: 2800, description: "Rustic Indian village awakening to a new day" },
  { id: "monsoon-greens", title: "Monsoon Greens", type: "landscape", originalPrice: 26000, printPrice: 3500, description: "Lush monsoon landscape bursting with vibrant greens" },
  { id: "gentle-gaze", title: "The Gentle Gaze", type: "portrait", originalPrice: 30000, printPrice: 4500, description: "A soulful portrait capturing depth and emotion" },
  { id: "old-craftsman", title: "The Old Craftsman", type: "portrait", originalPrice: 35000, printPrice: 5000, description: "Portrait of a master artisan with weathered, skilled hands" },
  { id: "dancing-eyes", title: "Dancing Eyes", type: "portrait", originalPrice: 28000, printPrice: 4000, description: "Expressive portrait study with vibrant brushwork" },
  { id: "mother-child", title: "Mother & Child", type: "portrait", originalPrice: 32000, printPrice: 4500, description: "Tender moment between mother and child in warm tones" },
  { id: "forest-dreamer", title: "The Forest Dreamer", type: "portrait", originalPrice: 27000, printPrice: 3800, description: "Dreamy portrait set against a forest backdrop" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const ArtGallery = () => {
  const [filter, setFilter] = useState<"all" | "landscape" | "portrait">("all");

  const filtered = filter === "all" ? artworks : artworks.filter((a) => a.type === filter);

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
            The Art Gallery
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Original paintings & fine art prints. Each original is a one-of-a-kind masterpiece.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12">
          {(["all", "landscape", "portrait"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-sm text-xs font-sans font-medium uppercase tracking-wider transition-colors ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {f === "all" ? "All" : f === "landscape" ? "Landscapes" : "Portraits"}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((art, i) => (
            <motion.div
              key={art.id}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={i}
            >
              <Link to={`/art/${art.id}`}>
                <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                  <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
                    <span className="text-5xl opacity-30">🎨</span>
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-sans uppercase tracking-wider text-primary font-semibold">
                      {art.type}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-foreground mt-1">{art.title}</h3>
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{art.description}</p>
                    <div className="mt-4 flex items-center gap-4 text-sm font-sans">
                      <div>
                        <span className="text-muted-foreground text-xs block">Original</span>
                        <span className="text-foreground font-bold">₹{art.originalPrice.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="text-border">|</div>
                      <div>
                        <span className="text-muted-foreground text-xs block">Print</span>
                        <span className="text-foreground font-bold">₹{art.printPrice.toLocaleString("en-IN")}</span>
                      </div>
                    </div>
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

export default ArtGallery;
