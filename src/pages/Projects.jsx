import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main className="page-shell page-content">
      <section className="page-title-block">
        <p className="eyebrow">Projects</p>
        <h1>프로젝트</h1>
        <p>각 프로젝트의 역할, 시스템 구조, 핵심 구현 내용을 이력서와 발표 자료 사이의 밀도로 정리했습니다.</p>
      </section>

      <section className="content-section">
        <div className="projects-page-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="full" />
          ))}
        </div>
      </section>
    </main>
  );
}
