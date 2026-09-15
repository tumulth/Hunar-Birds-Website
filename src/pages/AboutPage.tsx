import aboutImage from "@/assets/about-craft.jpg";
import { useSeo } from "@/hooks/useSeo";

const AboutPage = () => {
  useSeo({
    title: "About Hunar Birds",
    description:
      "Learn about the story behind Hunar Birds, where handmade crochet and fine art meet slow craft and personal storytelling.",
    pathname: "/about",
  });

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={aboutImage}
          alt="Hands crocheting a handmade piece for Hunar Birds"
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/45 px-6 text-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">
              Our story
            </p>
            <h1 className="mt-4 font-serif text-4xl text-white md:text-6xl">
              Where skill takes flight
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-8 px-6 py-16 md:px-10 md:py-20">
        <article className="rounded-[2rem] border border-border bg-white/90 p-8 shadow-sm">
          <h2 className="font-serif text-3xl text-foreground">What does Hunar mean?</h2>
          <p className="mt-4 text-sm leading-8 text-muted-foreground md:text-base">
            Hunar is a Hindi and Urdu word that speaks to skill, artistry, and
            craft. It points to the kind of knowledge that lives in the hands:
            the kind that grows through repetition, patience, and care.
          </p>
        </article>

        <article className="rounded-[2rem] border border-border bg-white/90 p-8 shadow-sm">
          <h2 className="font-serif text-3xl text-foreground">Why Birds?</h2>
          <p className="mt-4 text-sm leading-8 text-muted-foreground md:text-base">
            Birds suggest freedom, movement, and nest-building with intention.
            That image feels close to the brand: handmade work that is rooted in
            nature, quietly detailed, and created with purpose.
          </p>
        </article>

        <article className="rounded-[2rem] border border-border bg-white/90 p-8 shadow-sm">
          <h2 className="font-serif text-3xl text-foreground">The craft behind the brand</h2>
          <p className="mt-4 text-sm leading-8 text-muted-foreground md:text-base">
            Hunar Birds was built around two slow practices: the meditative
            rhythm of crochet and the expressive energy of paint. Crochet pieces
            are often made to order, which means fit, color, and finish can be
            shaped around the person receiving them. Artworks are created with
            the same attention to texture and feeling.
          </p>
          <p className="mt-4 text-sm leading-8 text-muted-foreground md:text-base">
            In a world of mass production, the goal here is different. A Hunar
            Birds piece should feel considered, personal, and worth keeping.
          </p>
        </article>

        <article className="rounded-[2rem] border border-primary/20 bg-primary/5 p-8 text-center shadow-sm">
          <p className="font-serif text-2xl leading-relaxed text-foreground md:text-3xl">
            &quot;Where skilled hands meet soulful art - that is where Hunar Birds
            takes flight.&quot;
          </p>
        </article>
      </section>
    </div>
  );
};

export default AboutPage;
