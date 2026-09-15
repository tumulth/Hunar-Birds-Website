import { Link } from "react-router-dom";
import { ArrowRight, Clock3, Heart, ShoppingBag, Star } from "lucide-react";
import { useShopActions } from "@/context/ShopActionsContext";
import {
  categoryLabels,
  formatPrice,
  getAverageRating,
  getProductImageAlt,
  stockStatusLabels,
  type Product,
} from "@/data/products";
import { getStockBadgeTone, getStockSummary } from "@/lib/delivery";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
  className?: string;
}

const ProductCard = ({ product, priority = false, className }: ProductCardProps) => {
  const hasHoverImage = product.images.length > 1;
  const rating = getAverageRating(product);
  const {
    addToInquiryBag,
    isFavorite,
    toggleFavorite,
  } = useShopActions();
  const saved = isFavorite(product.id);

  return (
    <Link
      to={`/product/${product.id}`}
      aria-label={`View details for ${product.name}`}
      className={cn(
        "group block rounded-[1.5rem] border border-border/80 bg-white/95 p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      <article className="h-full">
        <div className="relative overflow-hidden rounded-[1.1rem] bg-secondary">
          <img
            src={product.images[0]}
            alt={getProductImageAlt(product, 0)}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className={cn(
              "h-[250px] w-full object-cover transition duration-500 md:h-[320px]",
              hasHoverImage && "group-hover:opacity-0",
            )}
          />

          {hasHoverImage && (
            <img
              src={product.images[1]}
              alt={getProductImageAlt(product, 1)}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-[250px] w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100 md:h-[320px]"
            />
          )}

          <div className="absolute left-3 top-3 flex max-w-[calc(100%-4.5rem)] flex-wrap gap-2">
            {product.bestSeller && (
              <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground">
                Best seller
              </span>
            )}
            <span className={cn("rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em]", getStockBadgeTone(product.stockStatus))}>
              {stockStatusLabels[product.stockStatus]}
            </span>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              toggleFavorite(product.id);
            }}
            aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
            className={cn(
              "absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-foreground shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              saved && "text-primary",
            )}
          >
            <Heart className={cn("h-4 w-4", saved && "fill-primary")} />
          </button>
        </div>

        <div className="space-y-4 px-1 pb-1 pt-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                {categoryLabels[product.category]}
              </p>
              <h3 className="mt-2 font-serif text-xl leading-tight text-foreground">
                {product.name}
              </h3>
            </div>

            <p className="shrink-0 text-base font-semibold text-foreground">
              {formatPrice(product.priceInr)}
            </p>
          </div>

          <p className="text-sm leading-6 text-muted-foreground">
            {product.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2">
            {product.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary px-3 py-1 text-[11px] text-secondary-foreground"
              >
                {tag.replace("-", " ")}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-border/70 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span>{rating.toFixed(1)}</span>
              <span>{product.review.name}, {product.review.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4" />
              <span>{product.leadTime}</span>
            </div>
          </div>

          <p className="text-xs leading-5 text-muted-foreground">
            {getStockSummary(product)}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3 text-sm font-medium text-foreground">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                addToInquiryBag({
                  productId: product.id,
                  quantity: 1,
                });
              }}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.18em] transition hover:border-black hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <ShoppingBag className="h-4 w-4" />
              Add inquiry
            </button>
            <span className="inline-flex items-center gap-2 text-primary">
              View details
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
