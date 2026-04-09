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
    <div className="min-h-screen bg-[#fafafa]">

      {/* Premium Hero */}
      <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[90vh]">

          <Link to="/shop-crochet" className="relative group overflow-hidden">
            <img
              src={heroCrochet}
              alt="Handmade crochet products"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
              <p className="text-white/70 text-xs tracking-[0.3em] mb-3 uppercase">
                The Weaver's Nest
              </p>
              <h2 className="text-white text-5xl md:text-6xl font-serif mb-4">
                Crochet
              </h2>
              <p className="text-white/80 max-w-sm mb-6">
                Handmade wearable pieces crafted with detail and intention.
              </p>
              <Button className="rounded-full px-6 py-3 bg-white text-black hover:bg-white/90">
                Shop Collection
              </Button>
            </div>
          </Link>

          <Link to="/art-gallery" className="relative group overflow-hidden">
            <img
              src={heroArt}
              alt="Fine art paintings"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
              <p className="text-white/70 text-xs tracking-[0.3em] mb-3 uppercase">
                The Artist's Studio
              </p>
              <h2 className="text-white text-5xl md:text-6xl font-serif mb-4">
                Fine Art
              </h2>
              <p className="text-white/80 max-w-sm mb-6">
                Original paintings and expressive artworks.
              </p>
              <Button className="rounded-full px-6 py-3 bg-white text-black hover:bg-white/90">
                View Gallery
              </Button>
            </div>
          </Link>

        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
              className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition duration-300"
            >
              <h3 className="text-xl font-serif mb-2">{cat.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{cat.description}</p>
              <p className="font-semibold mb-4">{cat.price}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link to="/shop-crochet">
                <Button className="w-full rounded-full">
                  Browse
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Index;