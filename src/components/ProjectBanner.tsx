import { Music2 } from "lucide-react";
import type { Project } from "../data/projects";
import BrowserPreview from "./BrowserPreview";

type Props = { project: Project; className?: string };

export default function ProjectBanner({ project, className = "" }: Props) {
  const screenshot = project.screenshots?.[0];

  if (screenshot?.kind === "board") {
    return (
      <div className={`project-banner project-banner--board ${className}`}>
        <img src={screenshot.src} alt={screenshot.alt} width={screenshot.width} height={screenshot.height} loading="lazy" decoding="async" />
      </div>
    );
  }

  return (
    <div className={`project-banner project-banner--${project.banner} ${screenshot ? "project-banner--screenshot" : ""} ${className}`}>
      <div className="banner-grid" aria-hidden="true" />
      <div className="banner-topline">
        <span>{project.category}</span>
        <span>{project.number} / Selected work</span>
      </div>
      {screenshot && (
        <div className="browser-preview-stage">
          <BrowserPreview screenshot={screenshot} hostname={new URL(project.href).hostname} />
        </div>
      )}
      {!screenshot && project.banner === "baseleal" && (
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
        <span>{screenshot ? "Website preview" : "App preview"}</span>
      </div>
    </div>
  );
}
