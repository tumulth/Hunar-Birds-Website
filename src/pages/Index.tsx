import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroCrochet from "@/assets/hero-crochet.jpg";
import heroArt from "@/assets/hero-art.jpg";

const categories = [
  {
    title: "Crochet Wearables",
    description: "Custom-fit tops, skirts and baby sets made by hand",
    price: "From ₹2,500",
    items: ["Ocean Bloom Crochet Top", "Heritage Floral Knit Skirt", "Handmade Crochet Baby Frock Set"],
  },
  {
    title: "Crochet Accessories",
    description: "Handmade headbands, bandanas and fingerless mitts",
    price: "From ₹800",
    items: ["Terracotta Lace Headband", "Ocean Breeze Bandana", "Autumn Hug Fingerless Mitts"],
  },
  {
    title: "Home Nesting",
    description: "Cozy blankets, table accents and handcrafted home pieces",
    price: "From ₹600",
    items: ["Sunloom Bloom Cushion Cover", "Sunbeam Baby Blanket", "Mauve Mosaic Blanket", "Lemon Grove Table Runner", "Amethyst Granny Square Coaster Set"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Split Section */}
      <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[85vh]">
          {/* Crochet Side */}
          <Link to="/shop-crochet" className="relative group overflow-hidden cursor-pointer">
            <div className="absolute inset-0">
              <img
                src={heroCrochet}
                alt="Handmade crochet clothing and accessories by Hunar Birds"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors duration-500" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[42vh] md:min-h-[85vh] px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-primary-foreground/80 mb-3">
                  The Weaver's Nest
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                  Crochet
                </h2>
                <p className="font-sans text-sm text-primary-foreground/80 max-w-xs mx-auto mb-6">
                  Custom-fit handmade crochet wearables & home décor crafted with love
                </p>
                <Button variant="hero-outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground">
                  Explore Collection
                </Button>
              </motion.div>
            </div>
          </Link>

          {/* Art Side */}
          <Link to="/art-gallery" className="relative group overflow-hidden cursor-pointer">
            <div className="absolute inset-0">
              <img
                src={heroArt}
                alt="Original fine art paintings and portraits by Hunar Birds"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors duration-500" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[42vh] md:min-h-[85vh] px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-primary-foreground/80 mb-3">
                  The Artist's Studio
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                  Fine Art
                </h2>
                <p className="font-sans text-sm text-primary-foreground/80 max-w-xs mx-auto mb-6">
                  Original paintings & fine art prints — landscapes, portraits & more
                </p>
                <Button variant="hero-outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground">
                  View Gallery
                </Button>
              </motion.div>
            </div>
          </Link>
        </div>
      </section>

      {/* H1 & Intro */}
      <section className="py-20 md:py-28 text-center px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          custom={0}
        >
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Handmade Crochet & Original Art from India
          </h1>
          <p className="font-sans text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            At Hunar Birds, every stitch is intentional and every brushstroke tells a story.
            We create premium handmade crochet clothing, accessories, and one-of-a-kind fine art —
            all crafted with love and shipped from India.
          </p>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="pb-20 md:pb-28 px-4">
        <div className="container mx-auto">
          <motion.h2
            className="font-serif text-2xl md:text-3xl font-semibold text-center mb-14 text-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            Shop by Category
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                className="bg-card rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 border border-border"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{cat.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{cat.description}</p>
                <p className="text-primary font-sans font-semibold text-sm mb-4">{cat.price}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-sans bg-secondary text-secondary-foreground px-2 py-1 rounded-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Link to="/shop-crochet">
                  <Button variant="hero" size="sm" className="w-full">
                    Browse
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-secondary py-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Crafted with Care, Delivered with Love
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed mb-8">
              Every item is handmade to order with a 7–14 day crafting period. We take pride in our work
              and stand behind every piece that leaves our studio.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex flex-col items-center gap-2">
                <span className="text-2xl">✋</span>
                <span className="font-sans font-medium">100% Handmade</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-2xl">📏</span>
                <span className="font-sans font-medium">Custom Fit</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-2xl">🇮🇳</span>
                <span className="font-sans font-medium">Made in India</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-2xl">🎨</span>
                <span className="font-sans font-medium">Original Art</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 text-center px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Own Something Unique?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
            Browse our handmade collections or commission a custom piece.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/shop-crochet">
              <Button variant="hero">Shop Crochet</Button>
            </Link>
            <Link to="/art-gallery">
              <Button variant="hero-outline">View Art Gallery</Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
