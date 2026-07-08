import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";

const infoSectionTitles = new Set(["담당 역할", "설계 범위", "주요 구현 내용"]);

function LinkButton({ href, children }) {
  if (!href) {
    return null;
  }

  return (
    <a className="detail-link-button" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function InfoBlock({ section }) {
  return (
    <section className="detail-info-card">
      <h2>{section.title}</h2>
      <ul className="detail-card-list">
        {section.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function SystemSection({ project, section }) {
  return (
    <section className="detail-section">
      <div className={`system-split-section ${project.architectureImage ? "has-image" : "is-text-only"}`}>
        {project.architectureImage ? (
          <div className="system-image">
            <img src={project.architectureImage} alt={`${project.title} 시스템 구조`} />
          </div>
        ) : null}
        <div className="system-content">
          <h2>{section.title}</h2>
          <p>{section.description}</p>
          <ol className="detail-flow-list">
            {section.flow.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function GeneralSection({ section }) {
  if (section.type === "paragraph") {
    return (
      <section className="detail-section">
        <h2>{section.title}</h2>
        <div className="detail-card">
          <p>{section.content}</p>
        </div>
      </section>
    );
  }

  if (section.type === "list") {
    return (
      <section className="detail-section">
        <h2>{section.title}</h2>
        <div className="detail-card">
          <ul className="detail-list">
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return null;
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="page-shell page-content">
        <section className="section-card empty-state">
          <h1>프로젝트를 찾을 수 없습니다.</h1>
          <p>존재하지 않는 프로젝트이거나 아직 공개되지 않았습니다.</p>
          <Link to="/projects" className="primary-button">
            프로젝트 목록으로
          </Link>
        </section>
      </main>
    );
  }

  const topInfoSections = project.sections.filter((section) => infoSectionTitles.has(section.title));
  const mainSections = project.sections.filter((section) => !infoSectionTitles.has(section.title));

  return (
    <main className="page-shell page-content">
      <section className="detail-hero">
        <p className="eyebrow">Project Detail</p>
        <div className="detail-hero-head">
          <h1>{project.title}</h1>
          <span className={`status-badge ${project.status === "in_progress" ? "is-progress" : ""}`}>
            {project.statusLabel}
          </span>
        </div>
        <p className="detail-summary">{project.description}</p>
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {project.videoUrl ? (
        <section className="detail-video-section">
          <video className="detail-video" controls playsInline preload="metadata" poster={project.videoPoster}>
            <source src={project.videoUrl} type="video/mp4" />
            브라우저가 video 태그를 지원하지 않습니다.
          </video>
        </section>
      ) : null}

      {!project.videoUrl && project.image ? (
        <figure className="detail-image">
          <img src={project.image} alt={`${project.title} 대표 이미지`} />
        </figure>
      ) : null}

      {project.githubUrl || project.pptUrl ? (
        <section className="detail-section detail-links-section">
          <h2>관련 링크</h2>
          <div className="detail-link-row">
            <LinkButton href={project.githubUrl}>GitHub</LinkButton>
            <LinkButton href={project.pptUrl}>PPT</LinkButton>
          </div>
        </section>
      ) : null}

      <section className="detail-card-grid">
        {topInfoSections.map((section) => (
          <InfoBlock key={section.title} section={section} />
        ))}
      </section>

      {mainSections.map((section) =>
        section.type === "flow" ? (
          <SystemSection key={section.title} project={project} section={section} />
        ) : (
          <GeneralSection key={section.title} section={section} />
        )
      )}
    </main>
  );
}
