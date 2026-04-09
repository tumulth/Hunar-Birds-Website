import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

// Combined product data
const allProducts: Record<string, {
  name: string; price: number; description: string; customFit: boolean; category: string;
  materials: string; careInstructions: string;
}> = {
  "ocean-bloom-crochet-top": { name: "Ocean Bloom Crochet Top", price: 3200, description: "An airy handmade crochet top with soft coastal color notes and a flattering custom fit.", customFit: true, category: "Wearables", materials: "Soft cotton blend yarn with breathable stitchwork", careInstructions: "Hand wash only in cold water. Lay flat to dry." },
  "heritage-floral-knit-skirt": { name: "Heritage Floral Knit Skirt", price: 3800, description: "A floral-textured knit skirt with graceful drape and heirloom-inspired detail.", customFit: true, category: "Wearables", materials: "Premium cotton yarn with a flexible waistband", careInstructions: "Hand wash only in cold water. Lay flat to dry." },
  "handmade-crochet-baby-frock-set": { name: "Handmade Crochet Baby Frock Set", price: 1800, description: "A sweet handmade frock set crafted in soft, skin-friendly yarn for little ones.", customFit: true, category: "Wearables", materials: "Ultra-soft baby-grade cotton yarn, hypoallergenic", careInstructions: "Hand wash only in lukewarm water. Lay flat to dry." },
  "oatmeal-knit-fingerless-mitts": { name: "Oatmeal Knit Fingerless Mitts", price: 900, description: "Soft fingerless mitts in a cozy oatmeal knit, perfect for cool mornings.", customFit: false, category: "Accessories", materials: "Wool-blend yarn for warmth", careInstructions: "Hand wash in cold water. Lay flat to dry." },
  "ocean-breeze-bandana": { name: "Ocean Breeze Bandana", price: 650, description: "A breezy crochet bandana that adds a light, coastal accent to any outfit.", customFit: false, category: "Accessories", materials: "Lightweight cotton yarn", careInstructions: "Hand wash in cold water. Lay flat to dry." },
  "terracotta-lace-headband": { name: "Terracotta Lace Headband", price: 500, description: "An elegant lace headband in warm terracotta tones for easy everyday styling.", customFit: false, category: "Accessories", materials: "Soft cotton-blend yarn", careInstructions: "Hand wash in cold water. Lay flat to dry." },
  "lavender-edge-bandana": { name: "Lavender Edge Bandana", price: 650, description: "A delicate crochet bandana finished with a lavender border for a gentle pop of color.", customFit: false, category: "Accessories", materials: "Lightweight cotton yarn", careInstructions: "Hand wash in cold water. Lay flat to dry." },
  "autumn-hug-fingerless-mitts": { name: "Autumn Hug Fingerless Mitts", price: 900, description: "Cozy fingerless mitts designed to bring warmth and comfort on crisp days.", customFit: false, category: "Accessories", materials: "Wool-blend yarn for warmth", careInstructions: "Hand wash in cold water. Lay flat to dry." },
  "sunbeam-baby-blanket": { name: "Sunbeam Baby Blanket", price: 2200, description: "A soft and cozy handmade baby blanket designed for everyday comfort.", customFit: false, category: "Home Nesting", materials: "Hypoallergenic baby-grade cotton yarn", careInstructions: "Hand wash in lukewarm water. Tumble dry on low." },
  "mauve-mosaic-blanket": { name: "Mauve Mosaic Blanket", price: 5500, description: "A luxurious full-size blanket featuring a rich mauve mosaic pattern and detailed craftsmanship.", customFit: false, category: "Home Nesting", materials: "Premium chunky yarn blend for softness and warmth", careInstructions: "Hand wash in cold water. Lay flat to dry." },
  "lemon-grove-table-runner": { name: "Lemon Grove Table Runner", price: 3000, description: "A bright handcrafted table runner that brings a fresh, cheerful finish to your setting.", customFit: false, category: "Home Nesting", materials: "Fine cotton crochet thread", careInstructions: "Hand wash in cold water. Iron on low while slightly damp." },
  "flower-bouquet": { name: "Crochet Flower Bouquet", price: 1500, description: "A beautiful everlasting bouquet of handcrafted crochet flowers. Perfect as a gift or home décor that never wilts.", customFit: false, category: "Home Nesting", materials: "Cotton and acrylic blend yarn with wire stems for shaping", careInstructions: "Dust gently. Spot clean if needed. Keep away from direct sunlight to preserve colors." },
  "sunloom-bloom-cushion-cover": { name: "Sunloom Bloom Cushion Cover", price: 1200, description: "A blooming cushion cover that adds handcrafted warmth and texture to your home.", customFit: false, category: "Home Nesting", materials: "Cotton-acrylic blend yarn with zip closure", careInstructions: "Remove insert before washing. Hand wash in cold water." },
  "petal-knit-coaster-set": { name: "Petal Knit Coaster Set", price: 600, description: "A set of handcrafted coasters with petal-inspired texture for everyday tables.", customFit: false, category: "Home Nesting", materials: "100% cotton yarn, absorbent and durable", careInstructions: "Machine wash on gentle cycle. Lay flat to dry." },
  "amethyst-granny-square-coaster-set": { name: "Amethyst Granny Square Coaster Set", price: 700, description: "Classic granny square coasters in amethyst tones, handmade for charming everyday use.", customFit: false, category: "Home Nesting", materials: "100% cotton yarn, absorbent and durable", careInstructions: "Machine wash on gentle cycle. Lay flat to dry." },
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? allProducts[id] : null;
  const [measurements, setMeasurements] = useState("");
  const [agreed, setAgreed] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-foreground mb-4">Product not found</h1>
          <Link to="/shop-crochet"><Button variant="hero">Back to Shop</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {/* Breadcrumb */}
          <nav className="text-xs font-sans text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop-crochet" className="hover:text-primary">Shop Crochet</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Image */}
            <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-6xl opacity-30">🧶</span>
            </div>

            {/* Details */}
            <div>
              <span className="text-[10px] font-sans uppercase tracking-wider text-primary font-semibold">
                {product.category}
              </span>
              <h1 className="font-serif text-3xl font-bold text-foreground mt-1 mb-3">{product.name}</h1>
              <p className="text-2xl font-sans font-bold text-primary mb-4">
                ₹{product.price.toLocaleString("en-IN")}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{product.description}</p>

              {/* Custom Measurements */}
              {product.customFit && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <label className="text-sm font-sans font-medium text-foreground">
                      Enter your custom measurements *
                    </label>
                    <Dialog>
                      <DialogTrigger className="text-xs text-primary underline font-sans">
                        Size Guide
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="font-serif">Size Guide</DialogTitle>
                        </DialogHeader>
                        <div className="text-sm text-muted-foreground space-y-3 font-sans">
                          <p>Please provide the following measurements in inches or centimeters:</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Bust/Chest:</strong> Measure around the fullest part</li>
                            <li><strong>Waist:</strong> Measure around natural waistline</li>
                            <li><strong>Hips:</strong> Measure around the fullest part</li>
                            <li><strong>Length:</strong> Desired length of the garment</li>
                            <li><strong>Arm Length:</strong> From shoulder to wrist (if applicable)</li>
                          </ul>
                          <p className="text-primary font-medium">Tip: Have someone help you measure for the most accurate results.</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <textarea
                    value={measurements}
                    onChange={(e) => setMeasurements(e.target.value)}
                    placeholder="E.g., Bust: 36 inches, Waist: 30 inches, Hip: 38 inches, Length: 22 inches..."
                    className="w-full h-28 px-4 py-3 rounded-sm border border-input bg-background text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
              )}

              {/* Handmade Checkbox */}
              <div className="flex items-start gap-3 mb-6 p-4 bg-secondary/50 rounded-sm">
                <Checkbox
                  id="handmade-agree"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked === true)}
                  className="mt-0.5"
                />
                <label htmlFor="handmade-agree" className="text-xs text-muted-foreground leading-relaxed cursor-pointer font-sans">
                  I understand that since items are handmade, a 7–14 day crafting period applies and an unboxing video is required for any return/damage claims.
                </label>
              </div>

              <Button
                variant="hero"
                className="w-full"
                disabled={product.customFit && !measurements.trim()}
              >
                Add to Cart — ₹{product.price.toLocaleString("en-IN")}
              </Button>
              {product.customFit && !measurements.trim() && (
                <p className="text-xs text-destructive mt-2 font-sans">Please enter your measurements to continue.</p>
              )}
            </div>
          </div>

          {/* Accordion Details */}
          <div className="mt-12">
            <Accordion type="multiple" defaultValue={["craft"]}>
              <AccordionItem value="craft">
                <AccordionTrigger className="font-serif text-lg">The Craft (Materials)</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground font-sans leading-relaxed">
                  {product.materials}
                </AccordionContent>
              </AccordionItem>
              {product.customFit && (
                <AccordionItem value="sizing">
                  <AccordionTrigger className="font-serif text-lg">Sizing Guide</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground font-sans leading-relaxed">
                    <p className="mb-2">All our wearables are custom-made to your exact measurements. Here's what we need:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Bust / Chest circumference</li>
                      <li>Waist circumference</li>
                      <li>Hip circumference</li>
                      <li>Desired garment length</li>
                      <li>Arm length (for tops/jackets)</li>
                      <li>Inseam (for pants/shorts)</li>
                    </ul>
                    <p className="mt-3 text-primary font-medium">All measurements in inches or centimeters.</p>
                  </AccordionContent>
                </AccordionItem>
              )}
              <AccordionItem value="care">
                <AccordionTrigger className="font-serif text-lg">Care Instructions</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground font-sans leading-relaxed">
                  {product.careInstructions}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
