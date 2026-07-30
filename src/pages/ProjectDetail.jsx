import { Link, useParams } from "react-router-dom";
import ProjectActionDock from "../components/ProjectActionDock";
import { getProjectBySlug } from "../data/projects";

function CoreBlock({ section }) {
  return (
    <article className="detail-core-card">
      <h3>{section.title}</h3>
      <ul className="detail-card-list">
        {section.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function ContributionSection({ section }) {
  return (
    <section className="detail-section">
      <h2>{section.title}</h2>
      <div className="detail-core-grid detail-contribution-grid">
        {section.cards.map((card) => (
          <article key={card.title} className="detail-core-card detail-contribution-card">
            <h3>{card.title}</h3>
            <ul className="detail-card-list">
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ArchitectureSection({ project, section }) {
  return (
    <section className="detail-section">
      <h2>{section.title}</h2>
      <div className="detail-architecture-block">
        {project.architectureImage ? (
          <div className="detail-architecture-image">
            <img src={project.architectureImage} alt={`${project.title} 시스템 아키텍처`} />
          </div>
        ) : null}
        <p className="detail-architecture-copy">{section.description}</p>
        {section.scopeGroups ? (
          <div className="detail-scope-grid">
            {section.scopeGroups.map((group) => (
              <article key={group.title} className="detail-scope-card">
                <h3>{group.title}</h3>
                <ul className="detail-card-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProblemSolutionCard({ card }) {
  return (
    <article className="detail-problem-card">
      <h3>{card.title}</h3>
      <div className="detail-problem-grid">
        <div>
          <strong>문제</strong>
          <p>{card.problem}</p>
        </div>
        <div>
          <strong>해결</strong>
          <p>{card.solution}</p>
        </div>
        <div>
          <strong>결과</strong>
          <p>{card.result}</p>
        </div>
      </div>
    </article>
  );
}

function ProblemSolutionSection({ section }) {
  const cards = section.cards ?? [section.card];

  return (
    <section className="detail-section">
      <h2>{section.title}</h2>
      <div className={cards.length > 1 ? "detail-problem-stack" : ""}>
        {cards.map((card) => (
          <ProblemSolutionCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

function MetricSection({ section }) {
  return (
    <section className="detail-section">
      <h2>{section.title}</h2>
      <div className="detail-metric-grid is-compact">
        {section.metrics.map((metric) => (
          <article key={metric.label} className="detail-metric-card is-compact">
            <span className="detail-metric-label">{metric.label}</span>
            <strong className="detail-metric-value">{metric.value}</strong>
            {metric.caption ? <p className="detail-metric-caption">{metric.caption}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function EvidenceSection({ section }) {
  return (
    <section className="detail-section">
      <h2>{section.title}</h2>
      <div className="detail-evidence-block">
        <p>{section.description}</p>
        <div className="detail-evidence-grid">
          {section.links.map((link) => (
            <a key={link.label} className="detail-evidence-link" href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function renderSection(project, section) {
  if (section.type === "contribution_cards") {
    return <ContributionSection key={section.title} section={section} />;
  }

  if (section.type === "architecture") {
    return <ArchitectureSection key={section.title} project={project} section={section} />;
  }

  if (section.type === "problem_solution") {
    return <ProblemSolutionSection key={section.title} section={section} />;
  }

  if (section.type === "metric_grid") {
    return <MetricSection key={section.title} section={section} />;
  }

  if (section.type === "evidence") {
    return <EvidenceSection key={section.title} section={section} />;
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
          <Link to="/" className="primary-button">
            홈으로
          </Link>
        </section>
      </main>
    );
  }

  const listSections = project.sections.filter((section) => section.type === "list");
  const customSections = project.sections.filter((section) => section.type !== "list");

  return (
    <main className="page-shell page-content project-detail-page">
      <section className="detail-hero">
        <p className="eyebrow">PROJECT DETAIL</p>
        <div className="detail-hero-head">
          <h1>{project.title}</h1>
          <span className={`status-badge ${project.status === "in_progress" ? "is-progress" : ""}`}>
            {project.statusLabel}
          </span>
        </div>
        <p className="detail-summary">{project.description}</p>
        {project.meta ? (
          <div className="detail-meta-list">
            {project.meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ) : null}
        {project.roleScope ? <p className="detail-role-scope">{project.roleScope}</p> : null}
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

      {listSections.length > 0 ? (
        <section className="detail-section">
          <h2>프로젝트 핵심</h2>
          <div className="detail-core-grid">
            {listSections.map((section) => (
              <CoreBlock key={section.title} section={section} />
            ))}
          </div>
        </section>
      ) : null}

      {customSections.map((section) => renderSection(project, section))}
      <ProjectActionDock project={project} />
    </main>
  );
}
