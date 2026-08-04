import { Link, useParams } from "react-router-dom";
import ProjectActionDock from "../components/ProjectActionDock";
import {
  ContributionSummarySection,
  ProjectDetailHero,
  TroubleshootingSection
} from "../components/project-detail/DetailSections";
import { getProjectBySlug } from "../data/projects";

function safeSectionId(section, index) {
  if (section.id) {
    return section.id;
  }

  const normalized = section.title
    ?.toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

  return normalized || `detail-section-${index + 1}`;
}

function renderSection(section) {
  const commonProps = {
    id: section.id,
    section
  };

  if (section.type === "contribution_summary" || section.type === "contribution_cards") {
    return <ContributionSummarySection key={section.id} {...commonProps} />;
  }

  if (section.type === "problem_solution") {
    return <TroubleshootingSection key={section.id} {...commonProps} />;
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

  const normalizedSections = (project.sections ?? [])
    .filter((section) => section && section.type)
    .map((section, index) => ({
      ...section,
      id: safeSectionId(section, index)
    }));
  const sections = normalizedSections.filter((section) => section.renderInDetail !== false);
  const visibleMeta = (project.meta ?? []).filter((item) => item !== project.roleScope);

  return (
    <main className="detail-page project-detail-page">
      <div className="detail-main">
        <ProjectDetailHero project={project} metaItems={visibleMeta} />

        {!project.videoUrl && project.image ? (
          <figure className="detail-image">
            <img src={project.image} alt={`${project.title} 대표 이미지`} />
          </figure>
        ) : null}

        {sections.map((section) => renderSection(section))}
      </div>
      <ProjectActionDock project={project} />
    </main>
  );
}
