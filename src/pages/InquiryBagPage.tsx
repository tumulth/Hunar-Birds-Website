import { Link } from "react-router-dom";
import { CreditCard, Minus, Plus, Trash2 } from "lucide-react";
import { useShopActions } from "@/context/ShopActionsContext";
import { formatPrice } from "@/data/products";
import {
  buildUpiPaymentUrl,
  buildWhatsAppUrl,
  siteConfig,
} from "@/data/site";
import { getDeliveryEstimate } from "@/lib/delivery";
import { useSeo } from "@/hooks/useSeo";

function buildInquiryMessage(lines: ReturnType<typeof useShopActions>["inquiryLines"]) {
  const productLines = lines.map((line, index) => {
    const details = [
      `${index + 1}. ${line.quantity} x ${line.product.name}`,
      line.size ? `Size: ${line.size}` : "",
      line.color ? `Color: ${line.color}` : "",
      `Price: ${formatPrice(line.product.priceInr)} each`,
      `Availability: ${getDeliveryEstimate(line.product).short}`,
    ]
      .filter(Boolean)
      .join(" | ");

    return details;
  });

  return [
    "Hi Hunar Birds! I would like to inquire about these pieces:",
    ...productLines,
    "Please confirm availability, final total, delivery timeline, and Razorpay or UPI payment link.",
  ].join("\n");
}

const InquiryBagPage = () => {
  const {
    inquiryLines,
    inquiryCount,
    inquiryTotalInr,
    removeFromInquiryBag,
    updateInquiryQuantity,
    clearInquiryBag,
  } = useShopActions();
  const whatsappUrl = buildWhatsAppUrl(buildInquiryMessage(inquiryLines));
  const upiPaymentUrl = buildUpiPaymentUrl(
    inquiryTotalInr,
    "Hunar Birds inquiry bag",
  );

  useSeo({
    title: "Inquiry Bag | Hunar Birds",
    description:
      "Review selected handmade pieces and send one WhatsApp inquiry to Hunar Birds.",
    pathname: "/inquiry-bag",
  });

  return (
    <div className="min-h-screen bg-background px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="rounded-[2rem] border border-border bg-white/90 p-8 shadow-sm md:p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Cart-style inquiry
          </p>
          <h1 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            Inquiry Bag
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            Collect multiple pieces, adjust quantities, then send one clear
            WhatsApp message for availability, final total, and payment link.
          </p>
        </section>

        {inquiryLines.length > 0 ? (
          <section className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="space-y-4">
              {inquiryLines.map((line) => {
                const delivery = getDeliveryEstimate(line.product);

                return (
                  <article
                    key={line.key}
                    className="grid gap-5 rounded-[1.75rem] border border-border bg-white/90 p-4 shadow-sm sm:grid-cols-[140px_1fr]"
                  >
                    <Link
                      to={`/product/${line.product.id}`}
                      className="overflow-hidden rounded-[1.1rem] bg-secondary"
                    >
                      <img
                        src={line.product.images[0]}
                        alt={line.product.imageDescription}
                        className="h-40 w-full object-cover sm:h-full"
                        loading="lazy"
                        decoding="async"
                      />
                    </Link>

                    <div className="space-y-4">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <Link
                            to={`/product/${line.product.id}`}
                            className="font-serif text-2xl text-foreground transition hover:text-primary"
                          >
                            {line.product.name}
                          </Link>
                          <p className="mt-2 text-sm text-muted-foreground">
                            {formatPrice(line.product.priceInr)} each
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromInquiryBag(line.key)}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-destructive hover:text-destructive"
                          aria-label={`Remove ${line.product.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                        {line.size && (
                          <span className="rounded-full bg-secondary px-3 py-1">
                            Size: {line.size}
                          </span>
                        )}
                        {line.color && (
                          <span className="rounded-full bg-secondary px-3 py-1">
                            Color: {line.color}
                          </span>
                        )}
                        <span className="rounded-full bg-secondary px-3 py-1">
                          {delivery.short}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/70 pt-4">
                        <div className="inline-flex items-center rounded-full border border-border">
                          <button
                            type="button"
                            onClick={() =>
                              updateInquiryQuantity(line.key, line.quantity - 1)
                            }
                            className="inline-flex h-10 w-10 items-center justify-center text-foreground"
                            aria-label={`Decrease quantity for ${line.product.name}`}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-10 text-center text-sm font-medium">
                            {line.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateInquiryQuantity(line.key, line.quantity + 1)
                            }
                            className="inline-flex h-10 w-10 items-center justify-center text-foreground"
                            aria-label={`Increase quantity for ${line.product.name}`}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-sm font-semibold text-foreground">
                          {formatPrice(line.product.priceInr * line.quantity)}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <aside className="h-fit rounded-[1.75rem] border border-border bg-white/90 p-6 shadow-sm">
              <h2 className="font-serif text-2xl text-foreground">
                Inquiry summary
              </h2>
              <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between gap-4">
                  <span>Pieces</span>
                  <span className="font-medium text-foreground">{inquiryCount}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Estimated product total</span>
                  <span className="font-medium text-foreground">
                    {formatPrice(inquiryTotalInr)}
                  </span>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">
                Final shipping, customization, and payment are confirmed on
                WhatsApp before work begins.
              </p>
              <div className="mt-6 grid gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-primary"
                >
                  Send inquiry on WhatsApp
                </a>
                <a
                  href={siteConfig.razorpayPaymentLink || upiPaymentUrl || whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black px-6 py-3 text-sm font-medium text-foreground transition hover:bg-black hover:text-white"
                >
                  <CreditCard className="h-4 w-4" />
                  Razorpay / UPI link
                </a>
                <button
                  type="button"
                  onClick={clearInquiryBag}
                  className="text-sm font-medium text-muted-foreground transition hover:text-destructive"
                >
                  Clear inquiry bag
                </button>
              </div>
            </aside>
          </section>
        ) : (
          <section className="rounded-[2rem] border border-dashed border-border bg-white/90 p-10 text-center shadow-sm">
            <h2 className="font-serif text-3xl text-foreground">
              Your inquiry bag is empty
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
              Add products from the crochet collection and send one combined
              WhatsApp inquiry when you are ready.
            </p>
            <Link
              to="/shop-crochet"
              className="mt-6 inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-primary"
            >
              Browse crochet
            </Link>
          </section>
        )}
      </div>
    </div>
  );
};

export default InquiryBagPage;
