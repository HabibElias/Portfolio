import { MapPin } from "lucide-react";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Golang",
  "Node.js",
  "AI Integrations",
  "PHP",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Git",
  "HTML/CSS",
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-12">
          About
        </h2>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm a full-stack developer currently interning at ArkHive, where I
              build scalable web products and backend services. I enjoy turning
              complex requirements into clean, reliable user experiences.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              My main stack is Next.js and Golang, with a strong focus on AI
              integrations that add practical value to real-world products.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground pt-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Addis Ababa, Ethiopia</span>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
