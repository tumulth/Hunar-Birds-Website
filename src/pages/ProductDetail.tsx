import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Product not found
      </div>
    );
  }

  return (
    <div className="bg-white text-black min-h-screen px-6 md:px-12 py-12 max-w-6xl mx-auto">

      <div className="grid md:grid-cols-2 gap-12 items-start">

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-xl"
          />
        </motion.div>

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

          <a
            href={`https://wa.me/919819716635?text=${encodeURIComponent(
              `Hi! 👋 I'm interested in "${product.name}" priced at ${product.price}. Can you share more details?`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-8 py-3 text-xs tracking-widest uppercase hover:opacity-90 transition w-fit"
          >
            Order via WhatsApp
          </a>

          <div className="mt-10 space-y-3 text-sm text-gray-500">
            <p>• Handmade with premium yarn</p>
            <p>• Custom sizing available</p>
            <p>• Ships across India</p>
          </div>
        </motion.div>

      </div>

      <section className="mt-24 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-serif mb-4">
          Crafted by Hand, Not Mass Produced
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Every piece is individually crocheted with attention to detail,
          making each item truly unique.
        </p>
      </section>

    </div>
  );
};

export default ProductDetail;