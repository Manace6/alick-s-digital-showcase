import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, alt: "Completed residential build" },
  { src: g2, alt: "Kitchen renovation" },
  { src: g3, alt: "Commercial renovation" },
  { src: g4, alt: "Bathroom renovation" },
  { src: g5, alt: "Roofing work" },
  { src: g6, alt: "Exterior painting" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-accent font-bold text-sm uppercase tracking-widest font-body mb-3">Our Work</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Project Gallery</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img) => (
          <div key={img.alt} className="overflow-hidden rounded-lg group">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
