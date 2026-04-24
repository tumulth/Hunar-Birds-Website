import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { products } from "@/data/products";
import { useSeo } from "@/hooks/useSeo";

const TestimonialsPage = () => {
  useSeo({
    title: "Reviews and Testimonials | Hunar Birds",
    description:
      "Read customer notes and product reviews for handmade crochet pieces from Hunar Birds.",
    pathname: "/testimonials",
  });

  return (
    <div className="min-h-screen bg-background px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="rounded-[2rem] border border-border bg-white/90 p-8 shadow-sm md:p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Customer notes
          </p>
          <h1 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            Reviews from handmade orders
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            Real product feedback collected around fit, finish, gifting, and
            everyday use.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="rounded-[1.75rem] border border-border bg-white/90 p-6 shadow-sm"
            >
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: product.review.rating }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 font-serif text-2xl leading-relaxed text-foreground">
                &quot;{product.review.quote}&quot;
              </blockquote>
              <p className="mt-5 text-sm text-muted-foreground">
                {product.review.name} from {product.review.location}
              </p>
              <Link
                to={`/product/${product.id}`}
                className="mt-5 inline-flex text-sm font-medium text-primary transition hover:underline"
              >
                View {product.name}
              </Link>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default TestimonialsPage;
