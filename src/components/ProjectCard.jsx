import { Link } from "react-router-dom";

function LinkChip({ href, children }) {
  if (!href) {
    return null;
  }

  return (
    <a
      className="card-link-chip"
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={(event) => event.stopPropagation()}
    >
      {children}
    </a>
  );
}

export default function ProjectCard({ project, variant = "compact" }) {
  const isCompact = variant === "compact";
  const detailPath = project.detailPath ?? `/projects/${project.slug}`;
  const tags = project.tags;
  const highlights = project.highlights.slice(0, 4);
  const compactSummary = project.homeSummary ?? project.summary;
  const imageFit = isCompact ? project.imageFit ?? "cover" : "cover";

  return (
    <article className={isCompact ? "home-project-card" : "projects-page-card"}>
      <Link className="project-card-link" to={detailPath}>
        {project.image ? (
          <figure className={`project-image ${isCompact ? "is-home" : "is-projects"} is-${imageFit}`}>
            <img src={project.image} alt={`${project.title} 대표 이미지`} />
          </figure>
        ) : null}

        <div className="project-card-body">
          <div className="project-card-head">
            <h3>{project.title}</h3>
            <span className={`status-badge ${project.status === "in_progress" ? "is-progress" : ""}`}>
              {project.statusLabel}
            </span>
          </div>

          <p className={isCompact ? "project-summary compact" : "project-summary expanded"}>
            {isCompact ? compactSummary : project.summary}
          </p>

          {!isCompact ? (
            <>
              <ul className="project-highlight-list">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="tag-list">
                {tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </Link>

      <div className={isCompact ? "home-card-footer" : "projects-card-footer"}>
        {isCompact ? null : (
          <div className="card-link-row">
            <LinkChip href={project.githubUrl}>GitHub</LinkChip>
            <LinkChip href={project.pptUrl}>PPT</LinkChip>
          </div>
        )}

        <Link className="detail-inline-link" to={detailPath}>
          상세 보기 {isCompact ? "→" : ""}
        </Link>
      </div>
    </article>
  );
}
