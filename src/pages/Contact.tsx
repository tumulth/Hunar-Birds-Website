import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto text-sm font-sans">
            Have a question about custom orders, sizing, or commissions? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">WhatsApp</h3>
                <p className="text-sm text-muted-foreground font-sans">The fastest way to reach the maker</p>
                <a
                  href="https://wa.me/?text=Hi%20Hunar%20Birds!"
                  target="_blank"
                  rel="noopener"
                  className="text-sm text-primary font-sans font-medium hover:underline"
                >
                  Send a message →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">Email</h3>
                <p className="text-sm text-muted-foreground font-sans">For detailed inquiries and commissions</p>
                <span className="text-sm text-primary font-sans font-medium">hello@hunarbirds.com</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">Location</h3>
                <p className="text-sm text-muted-foreground font-sans">Handcrafted in India 🇮🇳</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="text-sm font-sans font-medium text-foreground block mb-1.5">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-sm border border-input bg-background text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-sans font-medium text-foreground block mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-sm border border-input bg-background text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-sm font-sans font-medium text-foreground block mb-1.5">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full px-4 py-3 rounded-sm border border-input bg-background text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Tell us about your custom order, question, or commission..."
              />
            </div>
            <Button variant="hero" className="w-full">Send Message</Button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
