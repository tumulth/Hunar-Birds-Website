import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { id } = useParams();

  // TEMP DATA (replace later with real data)
  const product = {
    name: "Ocean Bloom Crochet Top",
    price: "₹2,800",
    image: "/placeholder.svg",
    description:
      "Handcrafted crochet top made with premium cotton yarn. Designed for comfort, elegance, and individuality.",
  };

  return (
    <div className="bg-white text-black min-h-screen px-6 md:px-12 py-12 max-w-6xl mx-auto">

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-xl"
          />
        </motion.div>

        {/* INFO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-3xl md:text-4xl font-serif mb-4">
            {product.name}
          </h1>

          <p className="text-xl mb-6">{product.price}</p>

          <p className="text-gray-600 leading-relaxed mb-8">
            {product.description}
          </p>

          {/* BUTTON */}
          <button className="border px-8 py-3 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition w-fit">
            Enquire on WhatsApp
          </button>

          {/* EXTRA DETAILS */}
          <div className="mt-10 space-y-3 text-sm text-gray-500">
            <p>• Handmade with premium yarn</p>
            <p>• Custom sizing available</p>
            <p>• Ships across India</p>
          </div>
        </motion.div>

      </div>

      {/* RELATED / STORY */}
      <section className="mt-24 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-serif mb-4">
          Crafted by Hand, Not Mass Produced
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Every piece is individually crocheted with attention to detail,
          making each item truly unique. No two are ever the same.
        </p>
      </section>

    </div>
  );
};

export default ProductDetail;
