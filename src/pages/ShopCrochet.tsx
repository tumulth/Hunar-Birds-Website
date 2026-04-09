import { Link } from "react-router-dom";

const products = [
  {
    id: "ocean-bloom-crochet-top",
    name: "Ocean Bloom Crochet Top",
    price: "₹2,800",
    image: "/products/ocean-bloom-crochet-top/1.png",
  },
  {
    id: "terracotta-lace-headband",
    name: "Terracotta Lace Headband",
    price: "₹900",
    image: "/products/terracotta-lace-headband/1.png",
  },
  {
    id: "sunbeam-baby-blanket",
    name: "Sunbeam Baby Blanket",
    price: "₹1,800",
    image: "/products/sunbeam-baby-blanket/1.png",
  },
  {
    id: "mauve-mosaic-blanket",
    name: "Mauve Mosaic Blanket",
    price: "₹2,200",
    image: "/products/mauve-mosaic-blanket/1.png",
  },
];

const ShopCrochet = () => {
  return (
    <div className="bg-white min-h-screen px-6 md:px-12 py-12 max-w-6xl mx-auto">

      <h1 className="text-3xl md:text-4xl font-serif mb-12 text-center">
        Crochet Collection
      </h1>

      <div className="grid md:grid-cols-3 gap-10">

        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>

            <div className="group cursor-pointer">

              {/* IMAGE */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* INFO */}
              <div className="mt-4">
                <h2 className="font-serif text-lg">{product.name}</h2>
                <p className="text-gray-600 text-sm">{product.price}</p>
              </div>

            </div>

          </Link>
        ))}

      </div>

    </div>
  );
};

export default ShopCrochet;