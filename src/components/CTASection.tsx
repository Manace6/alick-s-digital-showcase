import { Phone } from "lucide-react";

const CTASection = () => (
  <section className="py-20 md:py-28 bg-accent">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-accent-foreground mb-4">
        Ready to Start Your Project?
      </h2>
      <p className="text-accent-foreground/80 font-body text-lg max-w-xl mx-auto mb-8">
        Get in touch today for a free, no-obligation quote. Let's build something great together.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:0620873429"
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold text-base hover:bg-primary/90 transition font-body"
        >
          <Phone className="w-5 h-5" />
          Call 062 087 3429
        </a>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="inline-flex items-center justify-center bg-accent-foreground/10 border-2 border-accent-foreground text-accent-foreground px-8 py-4 rounded-md font-bold text-base hover:bg-accent-foreground/20 transition font-body"
        >
          Get a Free Quote
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
