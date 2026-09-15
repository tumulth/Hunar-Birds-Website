import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { useShopActions } from "@/context/ShopActionsContext";
import { useSeo } from "@/hooks/useSeo";

const WishlistPage = () => {
  const { favoriteProducts } = useShopActions();

  useSeo({
    title: "Wishlist | Hunar Birds",
    description:
      "Review your saved handmade crochet pieces from Hunar Birds.",
    pathname: "/wishlist",
  });

  return (
    <div className="min-h-screen bg-background px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="rounded-[2rem] border border-border bg-white/90 p-8 shadow-sm md:p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Saved pieces
          </p>
          <h1 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            Your Wishlist
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            Keep track of crochet pieces you want to revisit before starting an
            order conversation.
          </p>
        </section>

        {favoriteProducts.length > 0 ? (
          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {favoriteProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>
        ) : (
          <section className="rounded-[2rem] border border-dashed border-border bg-white/90 p-10 text-center shadow-sm">
            <h2 className="font-serif text-3xl text-foreground">
              No saved pieces yet
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
              Tap the heart on any product card or product page to save it here.
            </p>
            <Link
              to="/shop-crochet"
              className="mt-6 inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-primary"
            >
              Browse crochet
            </Link>
          </section>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
