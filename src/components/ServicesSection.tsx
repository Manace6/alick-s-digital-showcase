import { Home, Paintbrush, Wrench, Hammer, Droplets, Shield } from "lucide-react";

const services = [
  { icon: Home, title: "New Construction", desc: "Custom residential and commercial builds from foundation to finish." },
  { icon: Hammer, title: "Renovations", desc: "Transform your space with expert kitchen, bathroom, and full-home renovations." },
  { icon: Shield, title: "Roofing", desc: "Roof repairs, replacements, and waterproofing to protect your investment." },
  { icon: Paintbrush, title: "Painting", desc: "Interior and exterior painting with premium finishes and attention to detail." },
  { icon: Droplets, title: "Plumbing", desc: "Professional plumbing installations, repairs, and maintenance services." },
  { icon: Wrench, title: "Maintenance", desc: "Ongoing property maintenance to keep your home or building in top shape." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-accent font-bold text-sm uppercase tracking-widest font-body mb-3">What We Do</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Our Services</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 transition-all group">
            <div className="w-14 h-14 rounded-md bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition">
              <s.icon className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
