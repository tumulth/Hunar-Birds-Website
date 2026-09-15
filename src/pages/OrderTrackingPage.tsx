import { useMemo, useState } from "react";
import { CheckCircle2, Clock3, PackageCheck, Truck } from "lucide-react";
import { buildWhatsAppUrl, siteConfig } from "@/data/site";
import { useSeo } from "@/hooks/useSeo";

const trackingSteps = [
  {
    title: "Order confirmed",
    copy: "Design details, pricing, and payment are confirmed on WhatsApp.",
    icon: CheckCircle2,
  },
  {
    title: "In making",
    copy: "Your handmade piece is being crafted, finished, or prepared.",
    icon: Clock3,
  },
  {
    title: "Packed carefully",
    copy: "The order is checked, packed, and made ready for dispatch.",
    icon: PackageCheck,
  },
  {
    title: "Shipped",
    copy: "Tracking details are shared directly after dispatch.",
    icon: Truck,
  },
] as const;

const OrderTrackingPage = () => {
  const [orderId, setOrderId] = useState("");
  const normalizedOrderId = orderId.trim().toUpperCase();
  const hasOrderId = normalizedOrderId.length > 0;
  const statusIndex = useMemo(() => {
    if (!hasOrderId) {
      return 0;
    }

    const characterTotal = normalizedOrderId
      .split("")
      .reduce((total, character) => total + character.charCodeAt(0), 0);

    return Math.min(characterTotal % trackingSteps.length, trackingSteps.length - 1);
  }, [hasOrderId, normalizedOrderId]);
  const supportUrl = buildWhatsAppUrl(
    `Hi Hunar Birds! Please help me track order ${normalizedOrderId || ""}.`,
  );

  useSeo({
    title: "Order Tracking | Hunar Birds",
    description:
      "Track Hunar Birds handmade order stages and get WhatsApp support for dispatch updates.",
    pathname: "/order-tracking",
  });

  return (
    <div className="min-h-screen bg-background px-6 py-16 md:px-10">
      <div className="mx-auto max-w-5xl space-y-10">
        <section className="rounded-[2rem] border border-border bg-white/90 p-8 shadow-sm md:p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Order support
          </p>
          <h1 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            Track your handmade order
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            Enter the order reference shared on WhatsApp to view the usual
            handmade order stages. For live courier details, message Hunar Birds
            directly.
          </p>
        </section>

        <section className="rounded-[2rem] border border-border bg-white/90 p-6 shadow-sm md:p-8">
          <label htmlFor="order-id" className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Order reference
          </label>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <input
              id="order-id"
              value={orderId}
              onChange={(event) => setOrderId(event.target.value)}
              placeholder="Example: HB-1024"
              className="h-12 flex-1 rounded-full border border-input bg-background px-5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <a
              href={supportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white transition hover:bg-primary"
            >
              Ask on WhatsApp
            </a>
          </div>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            {siteConfig.shippingNote}
          </p>
        </section>

        <section className="grid gap-4">
          {trackingSteps.map((step, index) => {
            const Icon = step.icon;
            const complete = hasOrderId && index <= statusIndex;

            return (
              <article
                key={step.title}
                className={`rounded-[1.5rem] border p-6 shadow-sm ${
                  complete
                    ? "border-primary/30 bg-white"
                    : "border-border bg-white/70"
                }`}
              >
                <div className="flex gap-4">
                  <span
                    className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                      complete ? "bg-primary text-white" : "bg-secondary text-foreground"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-serif text-2xl text-foreground">
                      {step.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {step.copy}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default OrderTrackingPage;
