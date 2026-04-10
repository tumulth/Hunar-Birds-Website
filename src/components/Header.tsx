import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { buildWhatsAppUrl } from "@/data/site";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop Crochet", to: "/shop-crochet" },
  { label: "Art Gallery", to: "/art-gallery" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const customOrderUrl = buildWhatsAppUrl(
    "Hi Hunar Birds! I would love help with a custom order.",
  );

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-8">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src="/hunar-birds-logo.png"
            alt="Hunar Birds"
            className="h-10 md:h-12 object-contain"
          />
        </Link>

        {/* CENTER NAV (premium style) */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                  active
                    ? "text-black font-semibold"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <a
            href={customOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-black px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-black transition hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:inline-flex"
          >
            Custom Order
          </a>

          <button
            className="md:hidden text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (premium slide) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t"
          >
            <div className="flex flex-col items-center py-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm tracking-widest uppercase text-gray-600 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href={customOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-black px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-black transition hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Custom Order
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
