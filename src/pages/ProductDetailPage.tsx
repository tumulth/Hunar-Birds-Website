import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Clock3, Palette, Ruler, ShieldCheck, Star, Truck } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import {
  categoryLabels,
  formatPrice,
  getAverageRating,
  getProductById,
  getProductImageAlt,
  getRelatedProducts,
  stockStatusLabels,
} from "@/data/products";
import { buildAbsoluteUrl, buildWhatsAppUrl, siteConfig } from "@/data/site";
import { useSeo } from "@/hooks/useSeo";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    setActiveImageIndex(0);
    setSelectedSize("");
  }, [id]);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground">Product not found</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            The handmade piece you were looking for is not in the current collection.
          </p>
          <Link
            to="/shop-crochet"
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Back to the collection
          </Link>
        </div>
      </div>
    );
  }

  const activeImage = product.images[activeImageIndex] ?? product.images[0];
  const relatedProducts = getRelatedProducts(product);
  const hasSizeOptions = product.sizes.length > 0;
  const rating = getAverageRating(product);
  const whatsappUrl = buildWhatsAppUrl(
    `Hi Hunar Birds! I would like to order ${product.name} for ${formatPrice(product.priceInr)}${
      selectedSize ? ` in size ${selectedSize}` : ""
    }. Please guide me on the next step.`,
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.seoDescription,
    image: product.images.map((image) => buildAbsoluteUrl(image)),
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    category: categoryLabels[product.category],
    material: product.materials.join(", "),
    offers: {
      "@type": "Offer",
      url: buildAbsoluteUrl(`/product/${product.id}`),
      priceCurrency: "INR",
      price: product.priceInr,
      availability:
        product.stockStatus === "ready-to-ship"
          ? "https://schema.org/InStock"
          : "https://schema.org/PreOrder",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating,
      reviewCount: 1,
    },
    review: {
      "@type": "Review",
      reviewBody: product.review.quote,
      author: {
        "@type": "Person",
        name: product.review.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: product.review.rating,
      },
    },
  };

  useSeo({
    title: `${product.name} | Hunar Birds`,
    description: product.seoDescription,
    image: product.images[0],
    pathname: `/product/${product.id}`,
    schema,
  });

  return (
    <div className="min-h-screen bg-background px-6 py-10 md:px-10 md:py-14">
      <div className="mx-auto max-w-7xl space-y-12">
        <nav className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
          <Link to="/" className="transition hover:text-foreground">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/shop-crochet" className="transition hover:text-foreground">
            Crochet
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 md:grid-cols-[90px_1fr]">
            <div className="order-2 flex gap-3 md:order-1 md:flex-col">
              {product.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className={`overflow-hidden rounded-2xl border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                    activeImageIndex === index
                      ? "border-black"
                      : "border-border hover:border-black/40"
                  }`}
                  aria-label={`Show image ${index + 1} for ${product.name}`}
                >
                  <img
                    src={image}
                    alt={getProductImageAlt(product, index)}
                    loading="lazy"
                    decoding="async"
                    className="h-24 w-20 object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="order-1 overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm md:order-2">
              <img
                src={activeImage}
                alt={getProductImageAlt(product, activeImageIndex)}
                className="h-full max-h-[720px] w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-border bg-white/90 p-6 shadow-sm md:p-8">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-secondary px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-secondary-foreground">
                  {categoryLabels[product.category]}
                </span>
                <span className="rounded-full bg-black px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white">
                  {stockStatusLabels[product.stockStatus]}
                </span>
                {product.bestSeller && (
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-primary">
                    Best seller
                  </span>
                )}
              </div>

              <h1 className="mt-5 font-serif text-4xl text-foreground">
                {product.name}
              </h1>
              <p className="mt-3 text-lg font-semibold text-foreground">
                {formatPrice(product.priceInr)}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  {rating.toFixed(1)}
                </span>
                <span>
                  {product.review.name}, {product.review.location}
                </span>
                <span>{product.collection}</span>
              </div>

              <p className="mt-6 text-sm leading-7 text-muted-foreground md:text-base">
                {product.description}
              </p>

              {hasSizeOptions && (
                <div className="mt-8 space-y-3">
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                    Select size
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`rounded-full border px-4 py-2 text-sm transition ${
                          selectedSize === size
                            ? "border-black bg-black text-white"
                            : "border-border bg-background text-foreground hover:border-black"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-secondary/60 p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Clock3 className="h-4 w-4" />
                    Lead time
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {product.leadTime}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-secondary/60 p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Palette className="h-4 w-4" />
                    Color options
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {product.colorOptions.join(", ")}
                  </p>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-4 text-center text-sm font-medium uppercase tracking-[0.22em] text-white transition hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Order via WhatsApp
              </a>

              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {siteConfig.consultationNote}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <section className="rounded-[2rem] border border-border bg-white/90 p-6 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Ruler className="h-4 w-4" />
                  Measurements and fit
                </div>
                <div className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                  {(hasSizeOptions ? product.sizes : product.dimensions).map((entry) => (
                    <p key={entry}>{entry}</p>
                  ))}
                </div>
                <Link
                  to="/size-guide"
                  className="mt-4 inline-flex text-sm font-medium text-primary transition hover:underline"
                >
                  View the size guide
                </Link>
              </section>

              <section className="rounded-[2rem] border border-border bg-white/90 p-6 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Truck className="h-4 w-4" />
                  Shipping and support
                </div>
                <div className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                  <p>{siteConfig.shippingNote}</p>
                  <p>{siteConfig.returnPolicyNote}</p>
                </div>
                <Link
                  to="/shipping-returns"
                  className="mt-4 inline-flex text-sm font-medium text-primary transition hover:underline"
                >
                  Read shipping and returns
                </Link>
              </section>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr_0.9fr]">
          <div className="rounded-[2rem] border border-border bg-white/90 p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-2xl text-foreground">Materials and care</h2>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Materials
                </p>
                <div className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                  {product.materials.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Care instructions
                </p>
                <div className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                  {product.care.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-white/90 p-6 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground">Customization</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {product.customizationNote}
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Best for: {product.suitableFor}
            </p>
          </div>

          <div className="rounded-[2rem] border border-border bg-white/90 p-6 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <ShieldCheck className="h-4 w-4" />
              Buyer confidence
            </div>
            <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              <p>{siteConfig.securePaymentNote}</p>
              <p>{siteConfig.shippingNote}</p>
              <p>{siteConfig.returnPolicyNote}</p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-border bg-white/90 p-6 shadow-sm md:p-8">
          <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
            Customer note
          </p>
          <blockquote className="mt-4 font-serif text-2xl leading-relaxed text-foreground">
            &quot;{product.review.quote}&quot;
          </blockquote>
          <p className="mt-4 text-sm text-muted-foreground">
            {product.review.name} from {product.review.location}
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
                You may also like
              </p>
              <h2 className="mt-2 font-serif text-3xl text-foreground">
                Related handmade pieces
              </h2>
            </div>
            <Link
              to="/shop-crochet"
              className="text-sm font-medium text-primary transition hover:underline"
            >
              Back to the full collection
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetailPage;
