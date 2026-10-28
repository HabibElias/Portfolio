import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { additionalProjects, projects } from "../data/projects";
import ProjectBanner from "./ProjectBanner";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Selected work</h2>
            <p className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">Built for people.<br /><span className="text-muted-foreground">Grounded in purpose.</span></p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">A closer look at the problems, contributions, and technology behind selected web and mobile projects.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project) => (
            <article key={project.slug} className={`case-card group ${project.featured ? "md:col-span-2 case-card--featured" : ""}`}>
              <Link to={`/projects/${project.slug}`} className="case-card-visual" aria-label={`Read ${project.title} case study`}>
                <ProjectBanner project={project} />
              </Link>
              <div className="case-card-copy">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-5">
                  <span className="font-mono">{project.number}</span><span className="h-px w-6 bg-border" /><span>{project.category}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4"><Link to={`/projects/${project.slug}`} className="hover:underline underline-offset-4">{project.title}</Link></h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{project.summary}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => <span key={tech} className="text-xs rounded-full border border-border px-3 py-1">{tech}</span>)}
                </div>
                <Link to={`/projects/${project.slug}`} className="case-study-link">Read case study <ArrowRight size={16} aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-border">
          <div className="flex flex-wrap justify-between items-baseline gap-4 mb-8">
            <h3 className="text-xl font-semibold tracking-tight">Other selected work</h3>
            <a href="https://github.com/HabibElias" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">More on GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalProjects.map((project) => (
              <a key={project.title} href={project.href} target="_blank" rel="noopener noreferrer" className="additional-project group">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{project.category}</span>
                <h4 className="text-lg font-medium mt-3 mb-3 flex justify-between gap-5">{project.title}<ArrowUpRight size={19} className="shrink-0 mt-1 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" /></h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>
                <span className="text-xs text-muted-foreground">{project.tech.join(" · ")}<span className="block mt-4 text-foreground font-medium">View source on GitHub</span></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
