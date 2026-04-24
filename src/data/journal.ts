export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
}

export const journalPosts: JournalPost[] = [
  {
    slug: "how-custom-crochet-orders-work",
    title: "How Custom Crochet Orders Work",
    excerpt:
      "A simple guide to sizing, color choices, timelines, and what happens before a handmade piece is made for you.",
    date: "2026-04-10",
    readTime: "3 min read",
    category: "Custom orders",
    image: "/products/ocean-bloom-crochet-top/1.png",
    sections: [
      {
        heading: "Start with the piece",
        body:
          "Most custom orders begin from an existing Hunar Birds product. You can ask for a different color, a fit adjustment, or a gifting detail before the piece is made.",
      },
      {
        heading: "Confirm the practical details",
        body:
          "Measurements, color palette, deadline, and final price are confirmed on WhatsApp. This keeps the order personal while still making the process clear.",
      },
      {
        heading: "Approve, pay, and receive updates",
        body:
          "After confirmation, a Razorpay, UPI, or bank transfer option is shared. Progress and dispatch updates stay in the same WhatsApp conversation.",
      },
    ],
  },
  {
    slug: "care-for-handmade-crochet",
    title: "How to Care for Handmade Crochet",
    excerpt:
      "Gentle washing, drying, and storage habits that help crochet wearables and home pieces stay beautiful for longer.",
    date: "2026-04-08",
    readTime: "4 min read",
    category: "Care guide",
    image: "/products/sunloom-bloom-cushion-cover/1.png",
    sections: [
      {
        heading: "Wash gently",
        body:
          "Hand wash in cool water with mild detergent. Avoid twisting the piece, because crochet holds its shape best when handled softly.",
      },
      {
        heading: "Dry flat",
        body:
          "Roll the item in a towel to remove extra water, then dry it flat in shade. Hanging wet crochet can stretch the stitches.",
      },
      {
        heading: "Store with breathing room",
        body:
          "Fold wearables and blankets instead of hanging them. Keep pieces away from velcro, sharp jewelry, and damp storage.",
      },
    ],
  },
  {
    slug: "gift-ideas-under-1000",
    title: "Handmade Gift Ideas Under Rs. 1000",
    excerpt:
      "Small crochet pieces that feel thoughtful, personal, and easy to gift for birthdays, housewarmings, and return favors.",
    date: "2026-04-05",
    readTime: "2 min read",
    category: "Gift guide",
    image: "/products/petal-knit-coaster-set/1.png",
    sections: [
      {
        heading: "Coaster sets",
        body:
          "Crochet coasters are practical, pretty, and easy to personalize with colors for a home, event, or festive theme.",
      },
      {
        heading: "Bandanas and headbands",
        body:
          "Accessories work well when you want something wearable but do not know exact garment measurements.",
      },
      {
        heading: "Make it personal",
        body:
          "A color preference or tiny note can make a small handmade gift feel much more considered.",
      },
    ],
  },
];

export function getJournalPostBySlug(slug?: string) {
  return journalPosts.find((post) => post.slug === slug);
}
