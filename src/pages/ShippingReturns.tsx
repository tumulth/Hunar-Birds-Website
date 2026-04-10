import { Link } from "react-router-dom";
import { ShieldCheck, Truck, Undo2 } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import { siteConfig } from "@/data/site";

const sections = [
  {
    title: "Shipping",
    icon: Truck,
    points: [
      "Crochet orders usually ship in 2 to 7 days depending on whether the piece is ready to ship or made to order.",
      "Tracking details are shared as soon as the parcel is booked.",
      "Shipping is currently available across India.",
    ],
  },
  {
    title: "Returns and support",
    icon: Undo2,
    points: [
      "Made-to-order pieces are crafted specifically for the approved size and color details, so general returns are limited.",
      "If an item arrives damaged or incorrect, contact Hunar Birds within 48 hours with clear photos and the order details.",
      "Support is handled directly on WhatsApp to keep replacements and fixes fast and personal.",
    ],
  },
  {
    title: "Payment and order confirmation",
    icon: ShieldCheck,
    points: [
      "Orders are confirmed after design details are approved on WhatsApp.",
      siteConfig.securePaymentNote,
      "A clear lead time is shared before work begins so custom orders stay predictable.",
    ],
  },
] as const;

const ShippingReturns = () => {
  useSeo({
    title: "Shipping and Returns | Hunar Birds",
    description:
      "Read Hunar Birds shipping, return, and order confirmation details for handmade crochet pieces crafted in India.",
    pathname: "/shipping-returns",
  });

  return (
    <div className="min-h-screen bg-background px-6 py-16 md:px-10">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Trust and policies
          </p>
          <h1 className="font-serif text-4xl text-foreground md:text-5xl">
            Shipping and Returns
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            Handmade orders move a little differently from mass-produced products.
            This page keeps the process clear before you place an order.
          </p>
        </div>

        <div className="grid gap-6">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <section
                key={section.title}
                className="rounded-[1.75rem] border border-border bg-white/90 p-6 shadow-sm md:p-8"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-serif text-2xl text-foreground">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-3 text-sm leading-7 text-muted-foreground md:text-base">
                  {section.points.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="rounded-[1.75rem] border border-primary/20 bg-primary/5 p-6 text-center md:p-8">
          <h2 className="font-serif text-2xl text-foreground">
            Need help with a custom order?
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
            The fastest route is still a direct message. Share the product name,
            your size notes, and color idea, and Hunar Birds will guide you from there.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Contact the maker
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShippingReturns;
