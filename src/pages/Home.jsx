import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const capabilities = [
  {
    title: "AI 서비스 아키텍처",
    description: "AI 모델 결과를 반영하는 API·DB·저장소·Worker 전체 흐름 설계"
  },
  {
    title: "모델 실험과 서빙",
    description: "이상 탐지 모델 실험·평가 및 모델 서빙 구조 구현"
  },
  {
    title: "RAG / LLM Agent",
    description: "RAG·LLM·LangGraph 기반 Agent 및 검증·승인 구조 구현"
  },
  {
    title: "API·DB·스토리지 연동",
    description: "FastAPI·Spring Boot 역할 분리와 데이터 저장·조회 구조 설계"
  },
  {
    title: "배포·운영 환경",
    description: "Docker·Nginx·AWS·K3s·Jenkins 기반 실행·배포 환경 구축"
  }
];

const stackGroups = [
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "JPA", "Python", "FastAPI", "Flask"]
  },
  {
    title: "AI / ML",
    items: ["PyTorch", "TensorFlow", "Scikit-Learn", "YOLO", "Anomalib", "OpenCV", "LLM", "RAG", "GraphRAG", "LangChain", "LangGraph"]
  },
  {
    title: "Database / Storage",
    items: ["MariaDB", "MySQL", "PostgreSQL", "Redis", "ChromaDB", "MinIO", "Firebase"]
  },
  {
    title: "Infra / DevOps",
    items: ["Docker", "Linux", "Nginx", "AWS", "Amazon S3", "Amazon SQS", "K3s", "Jenkins", "GitHub Actions"]
  },
  {
    title: "Collaboration / Knowledge",
    items: ["GitHub", "Jira", "Slack", "Notion", "Obsidian"]
  }
];

const featuredProjectSlugs = ["industrial-ai-platform", "pv-insight", "promptops-wiki-agent"];

export default function Home() {
  const featuredProjects = featuredProjectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);

  return (
    <main>
      <section className="hero-section">
        <div className="page-shell hero-inner">
          <p className="eyebrow">BACKEND · AI SERVICE · DEVOPS</p>
          <h1>서비스 구조를 설계하고<br />성능·비용·운영을 함께 고려해<br />AI 서비스를 구현하는 개발자입니다.</h1>
          <div className="hero-actions">
          </div>
        </div>
      </section>

      <div className="page-shell page-content">
        <section className="content-section">
          <div className="section-heading">
            <h2>소개</h2>
          </div>
          <div className="intro-grid">
            <div className="section-card prose-card">
              <div className="prose-block">
                <p>백엔드와 AI 모델을 연결해 실제 서비스 형태로 구현하는 AI 서비스 개발자입니다.</p>
                <p>
                  FastAPI, Spring Boot, PostgreSQL, Docker 기반으로 API 서버와 분석 파이프라인을 구축했으며,
                  YOLO·Anomalib 기반 이상탐지와 RAG·LangGraph 기반 지식 에이전트 프로젝트를 진행했습니다.
                </p>
                <p>팀 프로젝트에서는 PL/PM 역할로 요구사항 정리, 아키텍처 설계, API/DB 설계, 배포 구조 정리를 담당했습니다.</p>
                <p>현재는 AI 모델의 실험 결과가 API, DB, Worker, 사용자 기능으로 이어지는 구조를 설계하고 구현하는 데 집중하고 있습니다.</p>
              </div>
            </div>

            <aside className="profile-card">
              <img className="profile-image" src="/assets/projects/bonggyulim.jpg" alt="프로필 이미지" />
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <h2>핵심 역량</h2>
          </div>
          <div className="resume-capability-grid">
            {capabilities.map((item) => (
              <article key={item.title} className="section-card capability-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <h2>대표 프로젝트</h2>
          </div>
          <div className="featured-project-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} variant="compact" />
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <h2>기술 요약</h2>
          </div>
          <div className="stack-group-grid">
            {stackGroups.map((group) => (
              <article key={group.title} className="section-card stack-group-card">
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span key={item} className="tag-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
