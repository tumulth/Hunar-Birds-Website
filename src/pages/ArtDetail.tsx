import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const artworks: Record<string, {
  title: string; type: string; originalPrice: number; printPrice: number;
  description: string; longDescription: string;
}> = {
  "misty-mountains": { title: "Misty Mountains at Dawn", type: "Landscape", originalPrice: 25000, printPrice: 3500, description: "Oil on canvas, capturing the ethereal beauty of mountain mornings", longDescription: "This original oil painting captures the magical moment when dawn breaks over misty mountain peaks. Layers of translucent color create depth and atmosphere, evoking the quiet majesty of nature awakening. Each brushstroke is deliberate, building texture that brings the scene to life." },
  "golden-fields": { title: "Golden Fields", type: "Landscape", originalPrice: 22000, printPrice: 3000, description: "A warm landscape of wheat fields bathed in golden light", longDescription: "Golden wheat sways under a vast sky in this luminous landscape painting. The warm palette of golds, ambers, and soft blues creates a sense of endless summer. This piece brings warmth and tranquility to any space." },
  "silent-river": { title: "The Silent River", type: "Landscape", originalPrice: 28000, printPrice: 4000, description: "Peaceful riverside scene with reflections and soft colors", longDescription: "A meditative study of water, light, and stillness. This painting captures a quiet river at dusk, with trees reflected in mirror-still water. The muted color palette and delicate brushwork create a deeply calming piece." },
  "village-morning": { title: "Village Morning", type: "Landscape", originalPrice: 20000, printPrice: 2800, description: "Rustic Indian village awakening to a new day", longDescription: "An intimate glimpse of rural India at its most peaceful. Morning light filters through trees onto village huts, while figures go about their daily rituals. Rich earth tones ground this nostalgic scene." },
  "monsoon-greens": { title: "Monsoon Greens", type: "Landscape", originalPrice: 26000, printPrice: 3500, description: "Lush monsoon landscape bursting with vibrant greens", longDescription: "The Indian monsoon transforms the landscape into a symphony of greens. This painting celebrates that transformation with bold, saturated colors and dynamic brushwork that captures the energy of rain-refreshed earth." },
  "gentle-gaze": { title: "The Gentle Gaze", type: "Portrait", originalPrice: 30000, printPrice: 4500, description: "A soulful portrait capturing depth and emotion", longDescription: "This portrait study explores the quiet intensity of human expression. Soft modeling and sensitive color work bring the subject to life, while the background dissolves into abstract warmth, keeping focus on the eyes." },
  "old-craftsman": { title: "The Old Craftsman", type: "Portrait", originalPrice: 35000, printPrice: 5000, description: "Portrait of a master artisan with weathered, skilled hands", longDescription: "A tribute to the hands that create. This portrait captures an elderly craftsman at work, his weathered hands telling stories of decades of skill. Rich textures and warm tones honor the dignity of handwork." },
  "dancing-eyes": { title: "Dancing Eyes", type: "Portrait", originalPrice: 28000, printPrice: 4000, description: "Expressive portrait study with vibrant brushwork", longDescription: "Bold, expressive brushwork captures the vivacity and spirit of the subject. This portrait breaks from traditional realism to embrace color and movement, creating a piece that is both intimate and dynamic." },
  "mother-child": { title: "Mother & Child", type: "Portrait", originalPrice: 32000, printPrice: 4500, description: "Tender moment between mother and child in warm tones", longDescription: "A universal story told through paint. This tender portrait captures the bond between mother and child with soft, enveloping warmth. The palette of earth tones and soft light creates an atmosphere of safety and love." },
  "forest-dreamer": { title: "The Forest Dreamer", type: "Portrait", originalPrice: 27000, printPrice: 3800, description: "Dreamy portrait set against a forest backdrop", longDescription: "Part portrait, part landscape, this piece blends the human figure with nature. The subject appears lost in thought amid dappled forest light, creating a dreamlike quality that draws the viewer in." },
};

const ArtDetail = () => {
  const { id } = useParams<{ id: string }>();
  const art = id ? artworks[id] : null;
  const [selectedType, setSelectedType] = useState<"original" | "print">("original");
  const [agreed, setAgreed] = useState(false);

  if (!art) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-foreground mb-4">Artwork not found</h1>
          <Link to="/art-gallery"><Button variant="hero">Back to Gallery</Button></Link>
        </div>
      </div>
    );
  }

  const currentPrice = selectedType === "original" ? art.originalPrice : art.printPrice;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <nav className="text-xs font-sans text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/art-gallery" className="hover:text-primary">Art Gallery</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{art.title}</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="aspect-[4/3] bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-6xl opacity-30">🎨</span>
            </div>

            <div>
              <span className="text-[10px] font-sans uppercase tracking-wider text-primary font-semibold">
                {art.type}
              </span>
              <h1 className="font-serif text-3xl font-bold text-foreground mt-1 mb-3">{art.title}</h1>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{art.longDescription}</p>

              {/* Original / Print Toggle */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => setSelectedType("original")}
                  className={`flex-1 py-3 rounded-sm text-sm font-sans font-medium transition-colors border ${
                    selectedType === "original"
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-border hover:border-primary"
                  }`}
                >
                  <span className="block text-xs opacity-70 mb-1">Original Painting</span>
                  <span className="font-bold">₹{art.originalPrice.toLocaleString("en-IN")}</span>
                  <span className="block text-[10px] opacity-60 mt-1">One-of-a-kind</span>
                </button>
                <button
                  onClick={() => setSelectedType("print")}
                  className={`flex-1 py-3 rounded-sm text-sm font-sans font-medium transition-colors border ${
                    selectedType === "print"
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-border hover:border-primary"
                  }`}
                >
                  <span className="block text-xs opacity-70 mb-1">Fine Art Print</span>
                  <span className="font-bold">₹{art.printPrice.toLocaleString("en-IN")}</span>
                  <span className="block text-[10px] opacity-60 mt-1">Multiple available</span>
                </button>
              </div>

              {/* Handmade Checkbox */}
              <div className="flex items-start gap-3 mb-6 p-4 bg-secondary/50 rounded-sm">
                <Checkbox
                  id="art-agree"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked === true)}
                  className="mt-0.5"
                />
                <label htmlFor="art-agree" className="text-xs text-muted-foreground leading-relaxed cursor-pointer font-sans">
                  I understand that since items are handmade, a 7–14 day crafting period applies and an unboxing video is required for any return/damage claims.
                </label>
              </div>

              <Button variant="hero" className="w-full">
                Add to Cart — ₹{currentPrice.toLocaleString("en-IN")}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArtDetail;
