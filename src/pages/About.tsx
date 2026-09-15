import { motion } from "framer-motion";
import aboutImage from "@/assets/about-craft.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={aboutImage}
          alt="Artisan hands crocheting with terracotta and ivory yarn"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
          <motion.h1
            className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Story
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-8"
          >
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                What is "Hunar"?
              </h2>
              <p className="text-muted-foreground leading-relaxed font-sans">
                <em className="text-foreground font-serif">Hunar</em> — a word from Hindi and Urdu — means <strong>skill</strong>, <strong>artistry</strong>, and <strong>craft</strong>. It speaks of the quiet mastery that comes from years of dedicated practice, the kind of knowing that lives in the hands, not just the mind.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Why "Birds"?
              </h2>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Birds represent <strong>freedom</strong>, <strong>nature</strong>, and the ability to soar beyond boundaries. Like a bird weaving its nest with care and precision, we weave each piece with intention — creating something that is both functional and beautiful, rooted in nature yet reaching for the sky.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Our Craft
              </h2>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Hunar Birds was born from a love of handwork — the slow, meditative rhythm of the crochet hook and the bold, expressive sweep of the paintbrush. Every crochet piece is made to order with your exact measurements, ensuring a perfect fit. Every painting is a one-of-a-kind original, carrying the artist's soul in every brushstroke.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans mt-4">
                We believe that in a world of mass production, there is profound value in the handmade. Each piece takes 7–14 days to create — not because we're slow, but because we refuse to rush art. When you own a Hunar Birds creation, you own a piece of someone's time, skill, and heart.
              </p>
            </div>

            <div className="bg-secondary p-8 rounded-lg text-center">
              <p className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed">
                "Where skilled hands meet soulful art — that is where Hunar Birds takes flight."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
