import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What areas do you serve?", a: "We serve the greater Cape Town area including Seawinds, Mitchell's Plain, Muizenberg, and surrounding communities." },
  { q: "Do you offer free quotes?", a: "Yes! We provide free, no-obligation quotes for all projects. Simply fill out our contact form or call us directly." },
  { q: "How long does a typical renovation take?", a: "Timelines depend on the project scope. A bathroom renovation typically takes 2-3 weeks, while a full home renovation may take 6-12 weeks. We'll give you a clear timeline upfront." },
  { q: "Are you licensed and insured?", a: "Absolutely. Alick Construction is fully registered and insured, giving you peace of mind on every project." },
  { q: "What payment options do you offer?", a: "We offer flexible payment plans. A deposit is required to begin work, with progress payments as milestones are reached." },
  { q: "Do you handle the permits and approvals?", a: "Yes, we manage all necessary building permits and council approvals on your behalf so you don't have to worry about the paperwork." },
];

const FAQSection = () => (
  <section id="faq" className="py-20 md:py-28 bg-secondary">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-16">
        <p className="text-accent font-bold text-sm uppercase tracking-widest font-body mb-3">Got Questions?</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Frequently Asked Questions</h2>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="bg-popover border border-border rounded-lg px-6">
            <AccordionTrigger className="font-body font-bold text-foreground text-left text-base py-5 hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
