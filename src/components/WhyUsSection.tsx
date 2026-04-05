import { CheckCircle, Clock, Award, Users } from "lucide-react";

const reasons = [
  { icon: Award, title: "Proven Track Record", desc: "4.8★ rating with 44+ happy clients across Cape Town." },
  { icon: Clock, title: "On-Time Delivery", desc: "We stick to deadlines and keep you informed every step of the way." },
  { icon: Users, title: "Skilled Team", desc: "Experienced tradesmen with years of construction expertise." },
  { icon: CheckCircle, title: "Quality Guaranteed", desc: "We stand behind every project with workmanship warranties." },
];

const WhyUsSection = () => (
  <section id="why-us" className="py-20 md:py-28 bg-primary">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-accent font-bold text-sm uppercase tracking-widest font-body mb-3">Why Choose Us</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">Built on Trust & Quality</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r) => (
          <div key={r.title} className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto">
              <r.icon className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-display text-lg font-bold text-primary-foreground">{r.title}</h3>
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
