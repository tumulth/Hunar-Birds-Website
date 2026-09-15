import { Link } from "react-router-dom";
import { buildWhatsAppUrl, siteConfig } from "@/data/site";

const SiteFooter = () => (
  <footer className="bg-foreground py-16 text-primary-foreground">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <h3 className="mb-4 font-serif text-2xl font-bold">
            Hunar <span className="text-terracotta-light">Birds</span>
          </h3>
          <p className="text-sm leading-relaxed opacity-70">
            Where skilled hands meet soulful art. Every piece tells a story of
            craftsmanship, care, and slow handmade beauty.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-sans text-xs uppercase tracking-widest opacity-50">
            Shop
          </h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li>
              <Link to="/shop-crochet" className="transition-opacity hover:opacity-100">
                Crochet Wearables
              </Link>
            </li>
            <li>
              <Link to="/shop-crochet" className="transition-opacity hover:opacity-100">
                Accessories
              </Link>
            </li>
            <li>
              <Link to="/shop-crochet" className="transition-opacity hover:opacity-100">
                Home Decor
              </Link>
            </li>
            <li>
              <Link to="/art-gallery" className="transition-opacity hover:opacity-100">
                Art Gallery
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="transition-opacity hover:opacity-100">
                Wishlist
              </Link>
            </li>
            <li>
              <Link to="/inquiry-bag" className="transition-opacity hover:opacity-100">
                Inquiry Bag
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-sans text-xs uppercase tracking-widest opacity-50">
            Help
          </h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li>
              <Link to="/contact" className="transition-opacity hover:opacity-100">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition-opacity hover:opacity-100">
                About Hunar Birds
              </Link>
            </li>
            <li>
              <Link to="/shipping-returns" className="transition-opacity hover:opacity-100">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link to="/size-guide" className="transition-opacity hover:opacity-100">
                Size Guide
              </Link>
            </li>
            <li>
              <Link to="/order-tracking" className="transition-opacity hover:opacity-100">
                Order Tracking
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="transition-opacity hover:opacity-100">
                Reviews
              </Link>
            </li>
            <li>
              <Link to="/journal" className="transition-opacity hover:opacity-100">
                Journal
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-sans text-xs uppercase tracking-widest opacity-50">
            Connect
          </h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-100"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={buildWhatsAppUrl(
                  "Hi Hunar Birds! I would love to know more about your handmade pieces.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-100"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-opacity hover:opacity-100"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-xs opacity-40">
        Copyright {new Date().getFullYear()} Hunar Birds. All rights reserved.
        Handcrafted in India.
      </div>
    </div>
  </footer>
);

export default SiteFooter;
