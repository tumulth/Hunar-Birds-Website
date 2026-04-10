import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-craft.jpg";
import heroArt from "@/assets/hero-art.jpg";
import heroCrochet from "@/assets/hero-crochet.jpg";
import ProductCard from "@/components/ProductCard";
import { featuredProducts, products } from "@/data/products";
import { siteConfig } from "@/data/site";
import { useSeo } from "@/hooks/useSeo";

const processSteps = [
  {
    title: "Share your idea",
    copy:
      "Start with a product you like or send a reference. Hunar Birds helps refine color, fit, and the right style direction.",
  },
  {
    title: "Approve the details",
    copy:
      "Measurements, palette, lead time, and price are confirmed on WhatsApp before work begins, so there are no surprises later.",
  },
  {
    title: "Receive a handmade piece",
    copy:
      "Your order is crafted slowly, packed carefully, and shipped across India with direct maker support throughout the process.",
  },
] as const;

const testimonials = products.slice(0, 3).map((product) => ({
  id: product.id,
  quote: product.review.quote,
  name: product.review.name,
  location: product.review.location,
}));

const studioImages = products.slice(0, 4).map((product) => ({
  id: product.id,
  src: product.images[0],
  label: product.name,
}));

const HomePage = () => {
  useSeo({
    title: "Hunar Birds | Handmade Crochet and Fine Art from India",
    description:
      "Discover handmade crochet wearables, accessories, home decor, and original art from Hunar Birds. Custom orders, gifting pieces, and slow-made craftsmanship from India.",
    pathname: "/",
  });

  return (
    <div className="bg-background text-foreground">
      <section className="grid min-h-[92vh] md:grid-cols-2">
        <Link to="/shop-crochet" className="group relative overflow-hidden">
          <img
            src={heroCrochet}
            alt="Handmade crochet collection by Hunar Birds"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/35 transition group-hover:bg-black/45" />

          <div className="relative z-10 flex h-full flex-col justify-center px-8 py-14 text-white md:px-12">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">
              The Weaver&apos;s Nest
            </p>
            <h1 className="mt-6 max-w-md font-serif text-5xl md:text-6xl">
              Crochet with story, fit, and soul.
            </h1>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/80 md:text-base">
              Wearables, gifts, and home pieces handmade in India for people
              who want something more personal than ordinary shopping.
            </p>
            <span className="mt-8 inline-flex w-fit rounded-full border border-white px-6 py-3 text-xs uppercase tracking-[0.28em] transition group-hover:bg-white group-hover:text-black">
              Explore the collection
            </span>
          </div>
        </Link>

        <Link to="/art-gallery" className="group relative overflow-hidden">
          <img
            src={heroArt}
            alt="Fine art section by Hunar Birds"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/35 transition group-hover:bg-black/45" />

          <div className="relative z-10 flex h-full flex-col justify-center px-8 py-14 text-white md:px-12">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">
              The Artist&apos;s Studio
            </p>
            <h2 className="mt-6 max-w-md font-serif text-5xl md:text-6xl">
              Original art for intimate spaces.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/80 md:text-base">
              Explore original paintings and fine art prints shaped by mood,
              memory, and expressive mark-making.
            </p>
            <span className="mt-8 inline-flex w-fit rounded-full border border-white px-6 py-3 text-xs uppercase tracking-[0.28em] transition group-hover:bg-white group-hover:text-black">
              View the gallery
            </span>
          </div>
        </Link>
      </section>

      <section className="border-y border-border bg-white/80">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 text-center md:grid-cols-4 md:px-10">
          <div>
            <p className="text-sm font-semibold text-foreground">Handmade in India</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Slow-made pieces crafted with attention, not assembly-line speed.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Custom fit available</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Many wearables can be adjusted for size, length, and comfort.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Tracked shipping</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Support and dispatch updates are shared directly with every order.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Direct maker support</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Questions, custom requests, and styling help happen on WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Brand story
          </p>
          <h2 className="font-serif text-4xl text-foreground md:text-5xl">
            Crafted with intention, worn with story.
          </h2>
          <p className="text-sm leading-8 text-muted-foreground md:text-lg">
            Hunar Birds brings together handmade crochet and fine art - two
            practices grounded in patience, texture, and human touch. Every
            piece is built to feel personal, whether it lives in your wardrobe,
            your home, or on your wall.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-20">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Best sellers
            </p>
            <h2 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">
              Pieces people come back for
            </h2>
          </div>
          <Link
            to="/shop-crochet"
            className="text-sm font-medium text-primary transition hover:underline"
          >
            See the full collection
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.slice(0, 3).map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index === 0} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 md:grid-cols-[0.95fr_1.05fr] md:px-10 md:pb-20">
        <div className="overflow-hidden rounded-[2rem] border border-border shadow-sm">
          <img
            src={aboutImage}
            alt="Hands crafting a crochet piece for Hunar Birds"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="rounded-[2rem] border border-border bg-white/90 p-8 shadow-sm md:p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Meet the maker
          </p>
          <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
            Slow craft, direct conversation, and careful finishing.
          </h2>
          <p className="mt-5 text-sm leading-8 text-muted-foreground md:text-base">
            Hunar means skill, artistry, and craft. The work at Hunar Birds is
            built around that idea: careful hands, real conversation, and the
            belief that handmade objects should feel personal from the first
            message to the final package.
          </p>
          <p className="mt-4 text-sm leading-8 text-muted-foreground md:text-base">
            That is why custom sizing, color planning, and direct order support
            matter so much here. The process stays human all the way through.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex rounded-full border border-black px-6 py-3 text-sm font-medium text-foreground transition hover:bg-black hover:text-white"
          >
            Read the full story
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-20">
        <div className="rounded-[2rem] border border-border bg-white/90 p-8 shadow-sm md:p-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Custom orders
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
              How a custom order works
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.5rem] bg-secondary/60 p-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-foreground">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {step.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-20">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Customer love
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
            Real feedback from the collection
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-[1.75rem] border border-border bg-white/90 p-6 shadow-sm"
            >
              <blockquote className="font-serif text-2xl leading-relaxed text-foreground">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <p className="mt-5 text-sm text-muted-foreground">
                {testimonial.name} from {testimonial.location}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-20">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              From the studio
            </p>
            <h2 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">
              A more lived-in view of the brand
            </h2>
          </div>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary transition hover:underline"
          >
            Follow on Instagram
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {studioImages.map((image, index) => (
            <figure
              key={image.id}
              className={`overflow-hidden rounded-[1.5rem] border border-border bg-white shadow-sm ${
                index === 0 || index === 3 ? "lg:translate-y-6" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.label}
                className="h-72 w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                {image.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-white/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-14 text-center md:px-10">
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            Ready to discover a one-of-a-kind piece?
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            Browse the current crochet collection or start a direct conversation
            for custom sizing, gifting ideas, and made-to-order requests.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/shop-crochet"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-primary"
            >
              Shop crochet
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-black px-6 py-3 text-sm font-medium text-foreground transition hover:bg-black hover:text-white"
            >
              Ask about custom work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
