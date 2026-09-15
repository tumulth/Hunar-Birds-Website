import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroCrochet from "@/assets/hero-crochet.jpg";
import heroArt from "@/assets/hero-art.jpg";

const fade = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const Index = () => {
  return (
    <div className="bg-white text-black">

      {/* HERO SPLIT */}
      <section className="grid md:grid-cols-2 min-h-[92vh]">

        {/* CROCHET */}
        <Link to="/shop-crochet" className="relative group overflow-hidden">
          <img
            src={heroCrochet}
            className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
            <p className="text-white/70 text-xs tracking-[0.4em] uppercase mb-4">
              The Weaver’s Nest
            </p>

            <h1 className="text-white text-5xl md:text-6xl font-serif mb-4">
              Crochet
            </h1>

            <p className="text-white/80 max-w-sm mb-8 text-sm">
              Handmade wearable pieces crafted with precision and soul.
            </p>

            <span className="border border-white text-white px-6 py-3 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition">
              Explore Collection
            </span>
          </div>
        </Link>

        {/* ART */}
        <Link to="/art-gallery" className="relative group overflow-hidden">
          <img
            src={heroArt}
            className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
            <p className="text-white/70 text-xs tracking-[0.4em] uppercase mb-4">
              The Artist’s Studio
            </p>

            <h1 className="text-white text-5xl md:text-6xl font-serif mb-4">
              Fine Art
            </h1>

            <p className="text-white/80 max-w-sm mb-8 text-sm">
              Original paintings and expressive artworks.
            </p>

            <span className="border border-white text-white px-6 py-3 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition">
              View Gallery
            </span>
          </div>
        </Link>

      </section>

      {/* BRAND STATEMENT */}
      <section className="py-24 px-6 text-center max-w-3xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fade}
          className="text-3xl md:text-4xl font-serif mb-6"
        >
          Crafted with Intention, Worn with Story
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          variants={fade}
          custom={1}
          className="text-gray-600 leading-relaxed"
        >
          Hunar Birds brings together handmade crochet and fine art —
          blending craftsmanship, individuality, and timeless aesthetics into every piece.
        </motion.p>
      </section>

      {/* FEATURE STRIP */}
      <section className="grid md:grid-cols-3 text-center border-t border-b">

        {[
          "Handmade in India",
          "Limited Pieces Only",
          "Custom Orders Available",
        ].map((item, i) => (
          <motion.div
            key={item}
            custom={i}
            initial="hidden"
            whileInView="show"
            variants={fade}
            className="py-10 text-sm tracking-widest uppercase text-gray-600"
          >
            {item}
          </motion.div>
        ))}

      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <motion.h3
          initial="hidden"
          whileInView="show"
          variants={fade}
          className="text-2xl font-serif mb-6"
        >
          Discover One-of-a-Kind Pieces
        </motion.h3>

        <Link
          to="/shop-crochet"
          className="border px-8 py-3 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition"
        >
          Shop Now
        </Link>
      </section>

    </div>
  );
};

export default Index;