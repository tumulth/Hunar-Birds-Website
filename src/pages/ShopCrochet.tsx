import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

const filters = [
  { label: "All", value: "all" },
  { label: "Wearables", value: "wearables" },
  { label: "Accessories", value: "accessories" },
  { label: "Home Nesting", value: "home" },
];

const ShopCrochet = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts = products.filter((p) =>
    activeFilter === "all" ? true : p.category === activeFilter
  );

  return (
    <div className="min-h-screen bg-[#fafafa] px-6 md:px-12 py-16">

      <h1 className="text-3xl md:text-4xl font-serif text-center mb-10">
        Crochet Collection
      </h1>

      {/* FILTERS */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`px-5 py-2 rounded-full text-sm border transition ${
              activeFilter === f.value
                ? "bg-black text-white border-black"
                : "bg-white text-gray-600 border-gray-300 hover:border-black"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {filteredProducts.length === 0 && (
          <p className="col-span-3 text-center text-red-400">
            No products found
          </p>
        )}

        {filteredProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="group cursor-pointer">

              <div className="overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="mt-4 font-serif text-lg">
                {product.name}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                {product.price}
              </p>

              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">
                {product.category === "home"
                  ? "Home Nesting"
                  : product.category}
              </p>

            </div>
          </Link>
        ))}

      </div>
    </div>
  );
};

export default ShopCrochet;