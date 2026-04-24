import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/SiteFooter";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/FloatingWhatsAppButton";
import { ShopActionsProvider } from "./context/ShopActionsContext";

const Index = lazy(() => import("./pages/HomePage"));
const ShopCrochet = lazy(() => import("./pages/ShopCrochet"));
const ArtGallery = lazy(() => import("./pages/ArtGalleryPage"));
const ProductDetail = lazy(() => import("./pages/ProductDetailPage"));
const ArtDetail = lazy(() => import("./pages/ArtDetailPage"));
const About = lazy(() => import("./pages/AboutPage"));
const Contact = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ShippingReturns = lazy(() => import("./pages/ShippingReturns"));
const SizeGuide = lazy(() => import("./pages/SizeGuide"));
const Wishlist = lazy(() => import("./pages/WishlistPage"));
const InquiryBag = lazy(() => import("./pages/InquiryBagPage"));
const Testimonials = lazy(() => import("./pages/TestimonialsPage"));
const OrderTracking = lazy(() => import("./pages/OrderTrackingPage"));
const Journal = lazy(() => import("./pages/JournalPage"));
const JournalPost = lazy(() => import("./pages/JournalPostPage"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="flex min-h-[50vh] items-center justify-center px-6">
    <div className="rounded-full border border-border bg-white/80 px-5 py-3 text-sm text-muted-foreground shadow-sm">
      Loading page...
    </div>
  </div>
);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <ShopActionsProvider>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col">
              <a
                href="#main-content"
                className="sr-only absolute left-4 top-4 z-[60] rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                Skip to content
              </a>

              <Header />

              <main id="main-content" className="flex-1">
                <Suspense fallback={<RouteFallback />}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/shop-crochet" element={<ShopCrochet />} />
                    <Route path="/art-gallery" element={<ArtGallery />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/art/:id" element={<ArtDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/shipping-returns" element={<ShippingReturns />} />
                    <Route path="/size-guide" element={<SizeGuide />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/inquiry-bag" element={<InquiryBag />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/order-tracking" element={<OrderTracking />} />
                    <Route path="/journal" element={<Journal />} />
                    <Route path="/journal/:slug" element={<JournalPost />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>

              <Footer />
              <WhatsAppButton />

            </div>

            <Toaster />
            <Sonner />
          </ShopActionsProvider>

        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
