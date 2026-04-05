import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="font-display text-xl md:text-2xl font-bold text-primary-foreground tracking-tight">
          Alick Construction
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["Services", "Why Us", "Gallery", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-primary-foreground/80 hover:text-accent transition-colors text-sm font-medium tracking-wide uppercase"
            >
              {item}
            </a>
          ))}
          <a
            href="tel:0620873429"
            className="flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-md font-bold text-sm hover:brightness-110 transition"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 px-4 pb-4">
          {["Services", "Why Us", "Gallery", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setOpen(false)}
              className="block py-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm font-medium uppercase"
            >
              {item}
            </a>
          ))}
          <a
            href="tel:0620873429"
            className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-md font-bold text-sm mt-2"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
