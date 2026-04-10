import { useState } from "react";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/ProductCard";
import {
  categoryLabels,
  products,
  shopFilterTags,
  type ProductCategory,
  type ProductStockStatus,
} from "@/data/products";
import { useSeo } from "@/hooks/useSeo";

const sortOptions = [
  { value: "featured", label: "Featured first" },
  { value: "newest", label: "Newest arrivals" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
] as const;

const stockOptions: Array<{ value: "all" | ProductStockStatus; label: string }> = [
  { value: "all", label: "Any availability" },
  { value: "ready-to-ship", label: "Ready to ship" },
  { value: "limited-ready", label: "Limited ready stock" },
  { value: "made-to-order", label: "Made to order" },
];

const categoryOptions: Array<{ value: "all" | ProductCategory; label: string }> = [
  { value: "all", label: "All pieces" },
  { value: "wearables", label: categoryLabels.wearables },
  { value: "accessories", label: categoryLabels.accessories },
  { value: "home", label: categoryLabels.home },
];

const ShopCrochet = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | ProductCategory>("all");
  const [activeTag, setActiveTag] =
    useState<(typeof shopFilterTags)[number]["value"]>("all");
  const [stockFilter, setStockFilter] = useState<"all" | ProductStockStatus>("all");
  const [sortBy, setSortBy] =
    useState<(typeof sortOptions)[number]["value"]>("featured");
  const [query, setQuery] = useState("");

  useSeo({
    title: "Crochet Collection | Hunar Birds",
    description:
      "Browse handmade crochet wearables, accessories, and home decor from Hunar Birds with search, filters, and custom-order details.",
    pathname: "/shop-crochet",
  });

  const normalizedQuery = query.trim().toLowerCase();

  let filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;
    const matchesTag =
      activeTag === "all" || product.tags.includes(activeTag);
    const matchesStock =
      stockFilter === "all" || product.stockStatus === stockFilter;
    const searchableText = [
      product.name,
      product.shortDescription,
      product.description,
      ...product.materials,
      ...product.tags,
      ...product.colorOptions,
    ]
      .join(" ")
      .toLowerCase();
    const matchesQuery =
      normalizedQuery.length === 0 || searchableText.includes(normalizedQuery);

    return matchesCategory && matchesTag && matchesStock && matchesQuery;
  });

  filteredProducts = [...filteredProducts].sort((left, right) => {
    if (sortBy === "price-asc") {
      return left.priceInr - right.priceInr;
    }

    if (sortBy === "price-desc") {
      return right.priceInr - left.priceInr;
    }

    if (sortBy === "newest") {
      return right.sortOrder - left.sortOrder;
    }

    if (left.featured !== right.featured) {
      return Number(right.featured) - Number(left.featured);
    }

    if (left.bestSeller !== right.bestSeller) {
      return Number(right.bestSeller) - Number(left.bestSeller);
    }

    return right.sortOrder - left.sortOrder;
  });

  const resetFilters = () => {
    setActiveCategory("all");
    setActiveTag("all");
    setStockFilter("all");
    setSortBy("featured");
    setQuery("");
  };

  return (
    <div className="min-h-screen bg-background px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl space-y-12">
        <section className="grid gap-8 rounded-[2rem] border border-border bg-white/80 p-8 shadow-sm md:grid-cols-[1.2fr_0.8fr] md:p-10">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              The Weaver&apos;s Nest
            </p>
            <h1 className="font-serif text-4xl text-foreground md:text-5xl">
              Crochet Collection
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
              Handmade wearables, giftable accessories, and home decor pieces
              designed for people who want something more personal than
              mass-produced shopping.
            </p>
          </div>

          <div className="grid gap-4 rounded-[1.5rem] bg-secondary/50 p-5 text-sm text-muted-foreground md:grid-cols-2">
            <div>
              <p className="text-3xl font-semibold text-foreground">
                {products.length}
              </p>
              <p className="mt-2 leading-6">Handmade pieces in the current collection</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-foreground">Custom</p>
              <p className="mt-2 leading-6">Fit and color requests are supported on many wearable pieces</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-foreground">India</p>
              <p className="mt-2 leading-6">Tracked shipping and direct maker support across India</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-foreground">Slow made</p>
              <p className="mt-2 leading-6">Every product page now includes care, dimensions, and lead times</p>
            </div>
          </div>
        </section>

        <section className="space-y-6 rounded-[2rem] border border-border bg-white/80 p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
                Find your piece
              </p>
              <h2 className="mt-2 font-serif text-2xl text-foreground">
                Search, sort, and filter
              </h2>
            </div>

            <div className="w-full md:max-w-sm">
              <label htmlFor="shop-search" className="sr-only">
                Search products
              </label>
              <Input
                id="shop-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by name, material, color, or style"
                className="h-11 rounded-full bg-background px-5"
              />
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex flex-wrap gap-3">
              {categoryOptions.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveCategory(filter.value)}
                  aria-pressed={activeCategory === filter.value}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    activeCategory === filter.value
                      ? "border-black bg-black text-white"
                      : "border-border bg-background text-muted-foreground hover:border-black hover:text-foreground"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
              <div className="space-y-2">
                <label htmlFor="tag-filter" className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Curated filter
                </label>
                <select
                  id="tag-filter"
                  value={activeTag}
                  onChange={(event) =>
                    setActiveTag(event.target.value as (typeof shopFilterTags)[number]["value"])
                  }
                  className="h-11 w-full rounded-full border border-input bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {shopFilterTags.map((tag) => (
                    <option key={tag.value} value={tag.value}>
                      {tag.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="stock-filter" className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Availability
                </label>
                <select
                  id="stock-filter"
                  value={stockFilter}
                  onChange={(event) =>
                    setStockFilter(event.target.value as "all" | ProductStockStatus)
                  }
                  className="h-11 w-full rounded-full border border-input bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {stockOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="sort-filter" className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Sort by
                </label>
                <select
                  id="sort-filter"
                  value={sortBy}
                  onChange={(event) =>
                    setSortBy(event.target.value as (typeof sortOptions)[number]["value"])
                  }
                  className="h-11 w-full rounded-full border border-input bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring md:min-w-[220px]"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-border/70 pt-5 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>
              Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> handmade pieces
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="self-start rounded-full border border-border px-4 py-2 text-foreground transition hover:border-black hover:bg-black hover:text-white"
            >
              Reset filters
            </button>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={index < 3}
            />
          ))}
        </section>

        {filteredProducts.length === 0 && (
          <section className="rounded-[2rem] border border-dashed border-border bg-white/80 p-10 text-center shadow-sm">
            <h2 className="font-serif text-3xl text-foreground">
              No products matched that combination
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
              Try a broader search, switch the availability filter, or reset the
              category and curated tags to see the full collection again.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Show the full collection
            </button>
          </section>
        )}
      </div>
    </div>
  );
};

export default ShopCrochet;
