import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">Alick Construction</h3>
          <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
            Quality construction, renovation, and maintenance services across the Cape Town area.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-bold text-primary-foreground mb-3">Contact</h4>
          <div className="space-y-2 text-primary-foreground/70 font-body text-sm">
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" />28 Military Rd, Seawinds, Cape Town, 7947</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" />062 087 3429</p>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-bold text-primary-foreground mb-3">Services</h4>
          <ul className="space-y-1 text-primary-foreground/70 font-body text-sm">
            {["New Construction", "Renovations", "Roofing", "Painting", "Plumbing", "Maintenance"].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-primary-foreground/40 font-body text-xs">
        © {new Date().getFullYear()} Alick Construction and Maintenance. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
