import { ArrowRight, BookOpen, CalendarDays, GraduationCap, Music2, Users } from "lucide-react";
import type { Project } from "../data/projects";

type Props = { project: Project; className?: string };

export default function ProjectBanner({ project, className = "" }: Props) {
  return (
    <div className={`project-banner project-banner--${project.banner} ${className}`}>
      <div className="banner-grid" aria-hidden="true" />
      <div className="banner-topline">
        <span>{project.category}</span>
        <span>{project.number} / Selected work</span>
      </div>
      {project.banner === "driving" && (
        <div className="driving-art">
          <div className="banner-editorial">
            <span className="banner-eyebrow">Operations, connected</span>
            <p>From enrollment<br />to the open road.</p>
          </div>
          <div className="workflow-art" aria-label="Workflow overview: student management, scheduling, licensing and exams">
            <span className="workflow-caption">Workflow overview</span>
            <div><Users size={19} /><span>Students</span><ArrowRight size={16} /></div>
            <div><CalendarDays size={19} /><span>Scheduling</span><ArrowRight size={16} /></div>
            <div><GraduationCap size={19} /><span>Licensing & exams</span></div>
          </div>
        </div>
      )}
      {project.banner === "graduation" && (
        <div className="graduation-art">
          <div className="banner-editorial">
            <span className="banner-eyebrow">AASTU Christian Fellowship</span>
            <p>Every journey.<br />Worth remembering.</p>
          </div>
          <div className="book-art" aria-hidden="true">
            <div className="book-cover">
              <GraduationCap size={34} strokeWidth={1} />
              <span>THE GRADUATION BOOK</span>
              <strong>Class<br />of 2025.</strong>
              <div className="book-rule" />
              <span>Stories. Reflections. A new chapter.</span>
            </div>
          </div>
        </div>
      )}
      {project.banner === "baseleal" && (
        <div className="baseleal-art">
          <div className="banner-editorial">
            <Music2 size={28} strokeWidth={1.2} aria-hidden="true" />
            <p>One choir.<br />Always within reach.</p>
            <span className="banner-eyebrow">Lyrics · Gallery · Offline access</span>
          </div>
          <div className="phone-art">
            <img src="/baseleal.png" alt="Baseleal app home screen showing the choir gallery and lyrics collection" width="1080" height="2400" loading="lazy" />
          </div>
        </div>
      )}
      <div className="banner-bottomline">
        <span>{project.tech.join(" / ")}</span>
        {project.banner === "baseleal" ? <span>App preview</span> : <BookOpen size={16} aria-hidden="true" />}
      </div>
    </div>
  );
}
