import { Link, useParams } from "react-router-dom";
import { getJournalPostBySlug, journalPosts } from "@/data/journal";
import { useSeo } from "@/hooks/useSeo";

const JournalPostPage = () => {
  const { slug } = useParams();
  const post = getJournalPostBySlug(slug);

  useSeo({
    title: post ? `${post.title} | Hunar Birds Journal` : "Journal Post | Hunar Birds",
    description: post?.excerpt ?? "Read the Hunar Birds journal.",
    image: post?.image,
    pathname: post ? `/journal/${post.slug}` : "/journal",
  });

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground">Post not found</h1>
          <Link
            to="/journal"
            className="mt-6 inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-primary"
          >
            Back to journal
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = journalPosts.filter((candidate) => candidate.slug !== post.slug);

  return (
    <article className="min-h-screen bg-background px-6 py-16 md:px-10">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/journal"
          className="text-sm font-medium text-primary transition hover:underline"
        >
          Back to journal
        </Link>
        <header className="mt-8">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            {post.category} - {post.readTime}
          </p>
          <h1 className="mt-4 font-serif text-4xl text-foreground md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-lg">
            {post.excerpt}
          </p>
        </header>

        <img
          src={post.image}
          alt={post.title}
          className="mt-10 max-h-[520px] w-full rounded-[2rem] object-cover shadow-sm"
          loading="eager"
          decoding="async"
        />

        <div className="mt-10 space-y-8 rounded-[2rem] border border-border bg-white/90 p-8 shadow-sm md:p-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-3xl text-foreground">
                {section.heading}
              </h2>
              <p className="mt-4 text-sm leading-8 text-muted-foreground md:text-base">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        {relatedPosts.length > 0 && (
          <section className="mt-12">
            <h2 className="font-serif text-3xl text-foreground">
              More from the journal
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {relatedPosts.slice(0, 2).map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  to={`/journal/${relatedPost.slug}`}
                  className="rounded-[1.5rem] border border-border bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                    {relatedPost.category}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-foreground">
                    {relatedPost.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
};

export default JournalPostPage;
