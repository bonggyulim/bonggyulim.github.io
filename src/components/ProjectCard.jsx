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
  const tags = isCompact ? project.tags.slice(0, 4) : project.tags.slice(0, 6);

  return (
    <article className={isCompact ? "home-project-card" : "projects-page-card"}>
      <Link className="project-card-link" to={`/projects/${project.slug}`}>
        {project.image ? (
          <figure className={`project-image ${isCompact ? "is-home" : "is-projects"}`}>
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

          <p className={isCompact ? "project-summary compact" : "project-summary expanded"}>{project.summary}</p>

          {!isCompact ? (
            <ul className="project-highlight-list">
              {project.highlights.slice(0, 3).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}

          <div className="tag-list">
            {tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>

      {!isCompact ? (
        <div className="projects-card-footer">
          <div className="card-link-row">
            <LinkChip href={project.githubUrl}>GitHub</LinkChip>
            <LinkChip href={project.pptUrl}>PPT</LinkChip>
          </div>
          <Link className="detail-inline-link" to={`/projects/${project.slug}`}>
            상세 보기
          </Link>
        </div>
      ) : (
        <div className="home-card-footer">
          <Link className="detail-inline-link" to={`/projects/${project.slug}`}>
            자세히 보기
          </Link>
        </div>
      )}
    </article>
  );
}
