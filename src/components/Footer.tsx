import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <h3 className="font-serif text-2xl font-bold mb-4">
            Hunar <span className="text-terracotta-light">Birds</span>
          </h3>
          <p className="text-sm opacity-70 leading-relaxed">
            Where skilled hands meet soulful art. Every piece tells a story of craftsmanship, love, and nature.
          </p>
        </div>

        <div>
          <h4 className="font-sans text-xs uppercase tracking-widest mb-4 opacity-50">Shop</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/shop-crochet" className="hover:opacity-100 transition-opacity">Crochet Wearables</Link></li>
            <li><Link to="/shop-crochet" className="hover:opacity-100 transition-opacity">Accessories</Link></li>
            <li><Link to="/shop-crochet" className="hover:opacity-100 transition-opacity">Home Nesting</Link></li>
            <li><Link to="/art-gallery" className="hover:opacity-100 transition-opacity">Art Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-xs uppercase tracking-widest mb-4 opacity-50">Help</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
            <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Hunar Birds</Link></li>
            <li><span className="cursor-default">Shipping & Returns</span></li>
            <li><span className="cursor-default">Size Guide</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-xs uppercase tracking-widest mb-4 opacity-50">Connect</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><a href="https://instagram.com" target="_blank" rel="noopener" className="hover:opacity-100 transition-opacity">Instagram</a></li>
            <li><a href="https://wa.me/" target="_blank" rel="noopener" className="hover:opacity-100 transition-opacity">WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs opacity-40">
        © {new Date().getFullYear()} Hunar Birds. All rights reserved. Handcrafted in India.
      </div>
    </div>
  </footer>
);

export default Footer;
