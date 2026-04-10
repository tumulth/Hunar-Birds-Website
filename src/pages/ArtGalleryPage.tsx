import { Link } from "react-router-dom";
import { useState } from "react";
import { artTypeLabels, artworks, formatPrice, type ArtType } from "@/data/artworks";
import { useSeo } from "@/hooks/useSeo";

const filters: Array<{ value: "all" | ArtType; label: string }> = [
  { value: "all", label: "All works" },
  { value: "landscape", label: artTypeLabels.landscape },
  { value: "portrait", label: artTypeLabels.portrait },
];

const ArtGalleryPage = () => {
  const [filter, setFilter] = useState<"all" | ArtType>("all");

  useSeo({
    title: "Art Gallery | Hunar Birds",
    description:
      "Explore original paintings and fine art prints from Hunar Birds, including landscapes and portraits for intimate spaces.",
    pathname: "/art-gallery",
  });

  const filteredArtworks =
    filter === "all"
      ? artworks
      : artworks.filter((artwork) => artwork.type === filter);

  return (
    <div className="min-h-screen bg-background px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            The Artist&apos;s Studio
          </p>
          <h1 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
            Fine Art Gallery
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            Original paintings and fine art prints chosen for homes that want a
            little more atmosphere, memory, and human touch.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setFilter(item.value)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                filter === item.value
                  ? "border-black bg-black text-white"
                  : "border-border bg-white text-foreground hover:border-black"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredArtworks.map((artwork) => (
            <Link
              key={artwork.id}
              to={`/art/${artwork.id}`}
              className="group overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <div className={`flex aspect-[4/3] items-end p-6 text-white ${artwork.paletteClassName}`}>
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-white/70">
                    {artTypeLabels[artwork.type]}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl">{artwork.title}</h2>
                </div>
              </div>

              <div className="space-y-4 p-6">
                <p className="text-sm leading-7 text-muted-foreground">
                  {artwork.description}
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                      Original
                    </p>
                    <p className="mt-2 font-semibold text-foreground">
                      {formatPrice(artwork.originalPrice)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                      Print
                    </p>
                    <p className="mt-2 font-semibold text-foreground">
                      {formatPrice(artwork.printPrice)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtGalleryPage;
