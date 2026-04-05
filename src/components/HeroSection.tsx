import { useState } from "react";
import { Star, MapPin, Phone } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
import { toast } from "sonner";

const HeroSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    toast.success("Thank you! We'll get back to you shortly.");
    setForm({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Alick Construction site in Cape Town" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-primary/75" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent" />
              ))}
              <span className="text-primary-foreground/90 text-sm font-body ml-1">4.8/5 — 44 Reviews</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary-foreground leading-tight">
              Cape Town's Trusted <span className="text-accent">Construction</span> Experts
            </h1>
            <p className="text-primary-foreground/80 text-lg font-body max-w-lg">
              From new builds to renovations and maintenance — Alick Construction delivers quality craftsmanship across the Cape Town area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-primary-foreground/70 text-sm font-body">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" />28 Military Rd, Seawinds</span>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" />062 087 3429</span>
            </div>
          </div>

          <div className="bg-popover/95 backdrop-blur rounded-lg p-6 md:p-8 shadow-2xl">
            <h2 className="text-2xl font-display font-bold text-foreground mb-1">Get a Free Quote</h2>
            <p className="text-muted-foreground text-sm font-body mb-6">We'll respond within 24 hours</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name *"
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                maxLength={20}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Select a Service</option>
                <option>New Construction</option>
                <option>Renovations</option>
                <option>Roofing</option>
                <option>Painting</option>
                <option>Plumbing</option>
                <option>Maintenance</option>
              </select>
              <textarea
                placeholder="Tell us about your project..."
                maxLength={1000}
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />
              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground py-3.5 rounded-md font-bold text-base hover:brightness-110 transition font-body"
              >
                Get My Free Quote →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
