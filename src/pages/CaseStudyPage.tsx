import { useEffect } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectBanner from "../components/ProjectBanner";

export default function CaseStudyPage() {
  const { slug } = useParams();
  const index = projects.findIndex((project) => project.slug === slug);
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  useEffect(() => {
    document.title = project ? `${project.title} | Habib Elias` : "Project not found | Habib Elias";
    return () => { document.title = "Habib Elias | Full Stack Developer"; };
  }, [project]);

  if (!project) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-32">
        <p className="text-sm text-muted-foreground mb-4">404 · Project not found</p>
        <h1 className="text-4xl font-semibold tracking-tight mb-8">Let’s get you back to the work.</h1>
        <Link to="/#projects" className="case-study-link"><ArrowLeft size={16} />Back to selected work</Link>
      </section>
    );
  }

  return (
    <article className="case-study-page">
      <div className="container mx-auto max-w-6xl px-6 md:px-8 pt-12 md:pt-20">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-12"><ArrowLeft size={16} aria-hidden="true" />Selected work</Link>
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-5">Case study {project.number} / {project.category}</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight max-w-4xl leading-[1.08]">{project.title}</h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-6 max-w-3xl">{project.summary}</p>
        <a href={project.href} target="_blank" rel="noopener noreferrer" className="case-study-link mt-8">{project.linkLabel}<ArrowUpRight size={17} aria-hidden="true" /></a>
        <dl className="grid sm:grid-cols-3 gap-6 border-t border-border pt-8 mt-12 mb-12">
          {[["My role", project.role], ["Context", project.context], ["Platform", project.platform]].map(([label, value]) => (
            <div key={label}><dt className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{label}</dt><dd className="text-sm leading-relaxed">{value}</dd></div>
          ))}
        </dl>
        <ProjectBanner project={project} className="case-study-banner rounded-2xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="case-study-section">
          <h2><span>01</span>The challenge</h2>
          <p>{project.challenge}</p>
        </div>
        <div className="case-study-section">
          <h2><span>02</span>My contribution</h2>
          <div>
            <p>{project.approach}</p>
            <div className="flex flex-wrap gap-2 mt-6">{project.tech.map((tech) => <span key={tech} className="rounded-full border border-border px-3 py-1 text-xs">{tech}</span>)}</div>
          </div>
        </div>
        <div className="case-study-section">
          <h2><span>03</span>The solution</h2>
          <div className="space-y-7">
            {project.capabilities.map((item) => (
              <div key={item.title} className="border-l-2 border-border pl-5">
                <h3 className="font-medium mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="case-study-section">
          <h2><span>04</span>The work delivered</h2>
          <p>{project.delivery}</p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pt-12 border-t border-border">
          <Link to="/#contact" className="text-sm text-muted-foreground hover:text-foreground">Have a project in mind? Let’s talk <ArrowUpRight className="inline-block ml-1" size={15} /></Link>
          <Link to={`/projects/${next.slug}`} className="case-study-next"><span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Next case study</span><span className="inline-flex items-center gap-4 font-medium">{next.title}<ArrowRight size={18} aria-hidden="true" /></span></Link>
        </div>
      </div>
    </article>
  );
}
