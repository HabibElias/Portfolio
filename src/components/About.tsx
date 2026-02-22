import { MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-12">
          About
        </h2>

        <div className="space-y-6 max-w-3xl">
          <p className="text-lg leading-relaxed text-foreground/90">
            I'm a full-stack developer currently interning at ArkHive, where I
            build scalable web products and backend services. I enjoy turning
            complex requirements into clean, reliable user experiences.
          </p>
          <p className="text-lg leading-relaxed text-foreground/90">
            I focus on building practical products with modern frameworks,
            clean UI, and thoughtful user flows.
          </p>
          <div className="flex items-center gap-2 text-muted-foreground pt-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
