import { Link } from "react-router-dom";
import { journalPosts } from "@/data/journal";
import { useSeo } from "@/hooks/useSeo";

const JournalPage = () => {
  useSeo({
    title: "Journal | Hunar Birds",
    description:
      "Read Hunar Birds journal posts about handmade crochet care, custom orders, gifting, and slow craft.",
    pathname: "/journal",
  });

  return (
    <div className="min-h-screen bg-background px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="rounded-[2rem] border border-border bg-white/90 p-8 shadow-sm md:p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Blog and journal
          </p>
          <h1 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            Notes from the studio
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            Helpful reads on custom ordering, crochet care, gifting ideas, and
            living with handmade pieces.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {journalPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/journal/${post.slug}`}
              className="group overflow-hidden rounded-[1.75rem] border border-border bg-white/90 shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <article className="p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  {post.category}
                </p>
                <h2 className="mt-3 font-serif text-2xl text-foreground">
                  {post.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {post.excerpt}
                </p>
                <p className="mt-5 text-xs uppercase tracking-[0.22em] text-primary">
                  {post.readTime}
                </p>
              </article>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
};

export default JournalPage;
