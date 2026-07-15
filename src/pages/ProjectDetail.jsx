import { Link, useParams } from "react-router-dom";
import ProjectActionDock from "../components/ProjectActionDock";
import { getProjectBySlug } from "../data/projects";

const coreSectionTitles = new Set(["내 기여", "설계 및 구현 범위", "핵심 구현"]);

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
      </div>
    </section>
  );
}

function ProblemSolutionSection({ section }) {
  const { card } = section;

  return (
    <section className="detail-section">
      <h2>{section.title}</h2>
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

  const coreSections = project.sections.filter((section) => coreSectionTitles.has(section.title));
  const architectureSection = project.sections.find((section) => section.type === "architecture");
  const problemSection = project.sections.find((section) => section.type === "problem_solution");
  const metricSection = project.sections.find((section) => section.type === "metric_grid");

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

      <section className="detail-section">
        <h2>프로젝트 핵심</h2>
        <div className="detail-core-grid">
          {coreSections.map((section) => (
            <CoreBlock key={section.title} section={section} />
          ))}
        </div>
      </section>

      {architectureSection ? <ArchitectureSection project={project} section={architectureSection} /> : null}
      {problemSection ? <ProblemSolutionSection section={problemSection} /> : null}
      {metricSection ? <MetricSection section={metricSection} /> : null}
      <ProjectActionDock project={project} />
    </main>
  );
}
