import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Index from "./pages/Index";
import ShopCrochet from "./pages/ShopCrochet";
import ArtGallery from "./pages/ArtGallery";
import ProductDetail from "./pages/ProductDetail";
import ArtDetail from "./pages/ArtDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">

            <Header />

            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/shop-crochet" element={<ShopCrochet />} />
                <Route path="/art-gallery" element={<ArtGallery />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/art/:id" element={<ArtDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
            <WhatsAppButton />

          </div>

          <Toaster />
          <Sonner />

        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
