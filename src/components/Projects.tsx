import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string | null;
};

const projects: Project[] = [
  {
    title: "Graduation Book — AASTU ECSF",
    description:
      "A digital graduation book for the AASTU Christian Fellowship to celebrate graduating students with an organized and accessible platform.",
    tech: ["Next.js", "Supabase"],
    github: "https://github.com/HabibElias",
    live: "https://digital-grad-book-2025.vercel.app/",
  },
  {
    title: "Anno Macchiato Management System",
    description:
      "A management system for Anno Macchiato Coffee House with order and withdrawal handling to streamline day-to-day operations.",
    tech: ["Vue.js", "Nuxt.js", "Drizzle"],
    github: "https://github.com/HabibElias/amcoffee-ms",
    live: "https://amcoffee-ms.vercel.app/",
  },
  {
    title: "Beria Book & Customer Management",
    description:
      "A church management app for book withdrawals, member records, and inventory tracking with clean UI and robust backend workflows.",
    tech: ["React.js", "Laravel (PHP)"],
    github: "https://github.com/HabibElias/Beria-cms",
    live: "https://berea-cms.vercel.app",
  },
  {
    title: "AASTU Choir GC Gallery",
    description: "A gallery for GC members of the AASTU Choir — 2025.",
    tech: ["React.js", "TypeScript", "Firebase", "Tailwind"],
    github: "https://github.com/HabibElias/Aastu-Choir-Gc-Gallery",
    live: "https://aastugc2025.vercel.app/",
  },
  {
    title: "Baseleal",
    description:
      "A lyrics application for Baseleal choir gospel songs.",
    tech: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/HabibElias/Baseleal",
    live: null,
  },
  {
    title: "Sharon Children Services",
    description:
      "A responsive website built for Sharon Children Service to improve their online presence and accessibility.",
    tech: ["React.js", "Flask"],
    github: "https://github.com/HabibElias/sharon",
    live: "https://sharon-children-service.vercel.app/",
  },
  {
    title: "Student Internship Portal",
    description:
      "A full-stack job and student matching portal bridging employers seeking talent and students searching for opportunities.",
    tech: ["React.js", "TypeScript", "PHP", "Tailwind"],
    github: "https://github.com/HabibElias/Student-Internship-Portal",
    live: null,
  },
  {
    title: "Amadoniyas Gem & Mineral World",
    description:
      "A showcase website built for a client to present Ethiopia's gemstones and minerals, featuring a catalog, ethical sourcing info, and client testimonials.",
    tech: ["Next.js", "Tailwind"],
    github: "https://github.com/HabibElias",
    live: "https://amadona.vercel.app",
  },
  {
    title: "FixList",
    description:
      "A developer tool for logging, categorizing, and tracking errors within projects to streamline issue resolution.",
    tech: ["React.js", "TypeScript", "Redux"],
    github: "https://github.com/HabibElias/FixList",
    live: "https://fixlist.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-12">
          Projects
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.live || project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-xl border border-border/50 hover:border-foreground/15 hover:bg-muted/30 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-medium text-sm leading-snug pr-6 group-hover:underline underline-offset-4 decoration-foreground/30">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-muted-foreground/60 bg-muted px-2 py-0.5 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/HabibElias"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            View all projects on GitHub
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
