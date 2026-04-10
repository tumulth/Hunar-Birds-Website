import { Ruler, Scissors, Sparkles } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";

const steps = [
  {
    title: "Wearables",
    icon: Ruler,
    copy:
      "For tops and skirts, keep a soft measuring tape handy for bust, waist, hip, and preferred length. If you do not know the measurements, your usual ready-to-wear size is still a useful starting point.",
  },
  {
    title: "Adjustments",
    icon: Scissors,
    copy:
      "Custom fit requests can include strap length, skirt length, cuff snugness, or color changes. These details are confirmed before work begins so the final piece feels intentional.",
  },
  {
    title: "Home and accessories",
    icon: Sparkles,
    copy:
      "Bandanas, blankets, coasters, and decor pieces list their default dimensions on the product page. If you want a different size, send the required measurements before ordering.",
  },
] as const;

const SizeGuide = () => {
  useSeo({
    title: "Size Guide | Hunar Birds",
    description:
      "Use the Hunar Birds size guide to prepare measurements for custom crochet wearables, accessories, and home decor.",
    pathname: "/size-guide",
  });

  return (
    <div className="min-h-screen bg-background px-6 py-16 md:px-10">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Helpful before ordering
          </p>
          <h1 className="font-serif text-4xl text-foreground md:text-5xl">
            Size Guide
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            Because many Hunar Birds pieces are handmade to order, a few clear
            measurements can make the final fit dramatically better.
          </p>
        </div>

        <div className="grid gap-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <section
                key={step.title}
                className="rounded-[1.75rem] border border-border bg-white/90 p-6 shadow-sm md:p-8"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-full bg-secondary p-3 text-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-serif text-2xl text-foreground">
                    {step.title}
                  </h2>
                </div>
                <p className="text-sm leading-7 text-muted-foreground md:text-base">
                  {step.copy}
                </p>
              </section>
            );
          })}
        </div>

        <div className="rounded-[1.75rem] border border-border bg-secondary/50 p-6 md:p-8">
          <h2 className="font-serif text-2xl text-foreground">
            Quick measuring checklist
          </h2>
          <div className="mt-4 grid gap-3 text-sm leading-7 text-muted-foreground md:text-base">
            <p>1. Bust, waist, and hip for tops or skirts</p>
            <p>2. Preferred length from shoulder or waist</p>
            <p>3. Hand circumference for mitts or cuff-style accessories</p>
            <p>4. Cushion insert size or table length for home pieces</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
