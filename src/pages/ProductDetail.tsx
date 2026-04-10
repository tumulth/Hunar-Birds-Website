import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center">
        Product not found
      </div>
    );
  }

  // SAFETY: fallback if images missing
  const images =
    product.images && product.images.length > 0
      ? product.images
      : ["/placeholder.svg"];

  const [activeImage, setActiveImage] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="bg-white text-black min-h-screen px-6 md:px-16 py-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">

        {/* LEFT - GALLERY */}
        <div className="flex gap-4">

          {/* THUMBNAILS */}
          <div className="flex flex-col gap-3">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="thumb"
                onClick={() => setActiveImage(img)}
                className={`w-16 h-20 object-cover cursor-pointer border ${
                  activeImage === img ? "border-black" : "border-gray-200"
                }`}
              />
            ))}
          </div>

          {/* MAIN IMAGE */}
          <div className="flex-1 overflow-hidden">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-[600px] object-cover transition duration-300 hover:scale-105"
            />
          </div>

        </div>

        {/* RIGHT - INFO */}
        <div className="max-w-md">

          <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
            {product.category}
          </p>

          <h1 className="text-2xl font-medium mb-2">
            {product.name}
          </h1>

          <p className="text-lg mb-6">
            {product.price}
          </p>

          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            {product.description}
          </p>

          {/* SIZE */}
          <div className="mb-8">
            <p className="text-xs tracking-widest mb-2">SIZE</p>
            <div className="flex gap-3 text-sm">
              {["XS", "S", "M", "L"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border px-3 py-1 transition ${
                    selectedSize === size
                      ? "border-black bg-black text-white"
                      : "border-gray-300 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* WHATSAPP CTA */}
          <a
            href={`https://wa.me/919819716635?text=${encodeURIComponent(
              `Hi! 👋 I'm interested in "${product.name}" priced at ${product.price}${
                selectedSize ? ` (Size: ${selectedSize})` : ""
              }.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center border border-black py-3 text-sm tracking-widest hover:bg-black hover:text-white transition"
          >
            ORDER VIA WHATSAPP
          </a>

          {/* DETAILS */}
          <div className="mt-10 border-t pt-6 text-sm text-gray-600 space-y-3">
            <p>• Handmade with premium yarn</p>
            <p>• Made to order (3–5 days)</p>
            <p>• Ships across India</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetail;