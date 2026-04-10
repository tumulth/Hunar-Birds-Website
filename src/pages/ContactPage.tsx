import { useState, type FormEvent } from "react";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, siteConfig } from "@/data/site";
import { useSeo } from "@/hooks/useSeo";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useSeo({
    title: "Contact Hunar Birds",
    description:
      "Contact Hunar Birds for custom crochet orders, sizing help, gifting requests, and art commissions.",
    pathname: "/contact",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const composedMessage = [
      "Hi Hunar Birds!",
      name && `My name is ${name}.`,
      email && `You can reach me at ${email}.`,
      message && message,
    ]
      .filter(Boolean)
      .join(" ");

    window.open(
      buildWhatsAppUrl(composedMessage),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="min-h-screen bg-background px-6 py-16 md:px-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Contact the maker
          </p>
          <h1 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
            Let&apos;s plan your order
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            Reach out for custom sizing, gifting, color changes, or art
            commissions. The fastest response is usually on WhatsApp.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <section className="rounded-[2rem] border border-border bg-white/90 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-foreground">WhatsApp</h2>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    Best for custom orders, fit guidance, and quick questions.
                  </p>
                  <a
                    href={buildWhatsAppUrl("Hi Hunar Birds! I would love help with an order.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-sm font-medium text-primary transition hover:underline"
                  >
                    Start a conversation
                  </a>
                </div>
              </div>
            </section>

            <section className="rounded-[2rem] border border-border bg-white/90 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-foreground">Email</h2>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    Better for commission briefs, gifting lists, or long-form notes.
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-3 inline-flex text-sm font-medium text-primary transition hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </section>

            <section className="rounded-[2rem] border border-border bg-white/90 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-foreground">From India</h2>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    Handmade in India with tracked shipping and direct support for each order.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-border bg-white/90 p-6 shadow-sm md:p-8"
          >
            <h2 className="font-serif text-3xl text-foreground">Send your details</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              This form opens a prefilled WhatsApp message so the conversation can continue directly.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="h-11 w-full rounded-full border border-input bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-11 w-full rounded-full border border-input bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  rows={6}
                  className="w-full rounded-[1.5rem] border border-input bg-background px-4 py-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Tell us about the piece you want, your size, or your gifting timeline."
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-primary"
            >
              Continue on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
