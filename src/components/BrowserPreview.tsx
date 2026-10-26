import type { ProjectScreenshot } from "../data/projects";

type Props = {
  screenshot: ProjectScreenshot;
  hostname: string;
};

export default function BrowserPreview({ screenshot, hostname }: Props) {
  return (
    <div className="browser-preview">
      <div className="browser-preview-toolbar" aria-hidden="true">
        <span className="browser-preview-dots"><i /><i /><i /></span>
        <span className="browser-preview-address">{hostname}</span>
        <span className="browser-preview-spacer" />
      </div>
      <img
        src={screenshot.src}
        alt={screenshot.alt}
        width={screenshot.width}
        height={screenshot.height}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
