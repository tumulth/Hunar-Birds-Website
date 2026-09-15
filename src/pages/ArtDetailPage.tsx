import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import {
  artTypeLabels,
  formatPrice,
  getArtworkById,
  getRelatedArtworks,
} from "@/data/artworks";
import ProductCard from "@/components/ProductCard";
import { buildWhatsAppUrl } from "@/data/site";
import { products } from "@/data/products";
import { useSeo } from "@/hooks/useSeo";

const ArtDetailPage = () => {
  const { id } = useParams();
  const artwork = getArtworkById(id);
  const [selectedType, setSelectedType] = useState<"original" | "print">("original");

  useEffect(() => {
    setSelectedType("original");
  }, [id]);

  useSeo({
    title: artwork ? `${artwork.title} | Hunar Birds Art` : "Artwork not found | Hunar Birds",
    description: artwork?.description ?? "Browse original paintings and fine art prints from Hunar Birds.",
    pathname: artwork ? `/art/${artwork.id}` : "/art-gallery",
  });

  if (!artwork) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground">Artwork not found</h1>
          <Link
            to="/art-gallery"
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Back to the gallery
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedArtworks(artwork);
  const price =
    selectedType === "original" ? artwork.originalPrice : artwork.printPrice;
  const whatsappUrl = buildWhatsAppUrl(
    `Hi Hunar Birds! I am interested in the ${selectedType} version of ${artwork.title} for ${formatPrice(price)}.`,
  );

  return (
    <div className="min-h-screen bg-background px-6 py-12 md:px-10">
      <div className="mx-auto max-w-7xl space-y-12">
        <nav className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
          <Link to="/" className="transition hover:text-foreground">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/art-gallery" className="transition hover:text-foreground">
            Art Gallery
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{artwork.title}</span>
        </nav>

        <section className="grid gap-10 xl:grid-cols-[minmax(0,1.1fr)_minmax(25rem,0.9fr)]">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-muted shadow-sm">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="min-w-0 space-y-8">
            <div className="rounded-[2rem] border border-border bg-white/90 p-6 shadow-sm md:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
                {artTypeLabels[artwork.type]}
              </p>
              <h2 className="mt-3 font-serif text-3xl text-foreground">
                {artwork.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                {artwork.longDescription}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setSelectedType("original")}
                  className={`rounded-[1.5rem] border p-5 text-left transition ${
                    selectedType === "original"
                      ? "border-black bg-black text-white"
                      : "border-border bg-background text-foreground hover:border-black"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.28em] opacity-70">
                    Original painting
                  </p>
                  <p className="mt-3 text-lg font-semibold">
                    {formatPrice(artwork.originalPrice)}
                  </p>
                  <p className="mt-2 text-sm opacity-80">One-of-a-kind artwork</p>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedType("print")}
                  className={`rounded-[1.5rem] border p-5 text-left transition ${
                    selectedType === "print"
                      ? "border-black bg-black text-white"
                      : "border-border bg-background text-foreground hover:border-black"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.28em] opacity-70">
                    Fine art print
                  </p>
                  <p className="mt-3 text-lg font-semibold">
                    {formatPrice(artwork.printPrice)}
                  </p>
                  <p className="mt-2 text-sm opacity-80">{artwork.printSize}</p>
                </button>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-4 text-center text-sm font-medium uppercase tracking-[0.22em] text-white transition hover:bg-primary"
              >
                Enquire on WhatsApp
              </a>
            </div>

            <div className="min-w-0 rounded-[2rem] border border-border bg-white/90 p-6 shadow-sm md:p-8">
              <h2 className="font-serif text-2xl text-foreground">What to expect</h2>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
                <li className="flex min-w-0 items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <span className="min-w-0 break-words">Originals are packed carefully for safe delivery across India.</span>
                </li>
                <li className="flex min-w-0 items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <span className="min-w-0 break-words">Fine art prints are prepared after confirmation and usually take 5 to 7 days.</span>
                </li>
                <li className="flex min-w-0 items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <span className="min-w-0 break-words">Direct support is available if you need help choosing between an original and a print.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
              Pair with crochet
            </p>
            <h2 className="mt-2 font-serif text-3xl text-foreground">
              Handmade pieces with a similar mood
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
              Related artworks
            </p>
            <h2 className="mt-2 font-serif text-3xl text-foreground">
              Continue exploring the gallery
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.id}
                to={`/art/${item.id}`}
                className="group overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
                    {artTypeLabels[item.type]}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl text-foreground">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ArtDetailPage;
