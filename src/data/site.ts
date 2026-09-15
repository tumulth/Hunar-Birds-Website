export const siteConfig = {
  name: "Hunar Birds",
  description:
    "Handmade crochet wearables, accessories, home decor, and original art crafted with care in India.",
  shortDescription:
    "Boutique handmade crochet wearables, accessories, home decor, and art from India.",
  url: "https://hunar-birds-website.vercel.app",
  defaultOgImage: "/hunar-birds-logo.png",
  whatsappNumber: "919819716635",
  whatsappDisplayNumber: "+91 98197 16635",
  email: "hello@hunarbirds.com",
  country: "India",
  instagramUrl: "https://instagram.com",
  razorpayPaymentLink: "",
  upiId: "",
  securePaymentNote:
    "Razorpay payment links, UPI details, or bank transfer details are shared after order confirmation on WhatsApp.",
  shippingNote:
    "Tracked shipping is available across India, with careful packaging for every handmade piece.",
  returnPolicyNote:
    "Made-to-order pieces are eligible for support if they arrive damaged or different from the approved order details.",
  consultationNote:
    "Custom orders begin with a quick WhatsApp consultation about sizing, colors, and timeline.",
} as const;

export function buildAbsoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath}`;
}

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildUpiPaymentUrl(amountInr: number, note = "Hunar Birds order") {
  if (!siteConfig.upiId) {
    return "";
  }

  const params = new URLSearchParams({
    pa: siteConfig.upiId,
    pn: siteConfig.name,
    am: amountInr.toString(),
    cu: "INR",
    tn: note,
  });

  return `upi://pay?${params.toString()}`;
}
