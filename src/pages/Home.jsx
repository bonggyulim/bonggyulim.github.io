import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const capabilities = [
  {
    title: "요구사항·시스템 설계",
    description: "요구사항·MVP를 구조·데이터 흐름·API·DB 계약으로 구체화"
  },
  {
    title: "서비스·비동기 처리",
    description: "Spring Boot·FastAPI 서비스와 비동기 처리·정합성 구현"
  },
  {
    title: "AI 모델 실험·서빙",
    description: "판정 성능·추론 자원·배포 조건 기반 모델 실험·서빙"
  },
  {
    title: "Agent 설계·구현",
    description: "LangGraph·MCP 기반 판단·승인·실행 워크플로우 설계"
  },
  {
    title: "배포·CI/CD",
    description: "Docker·AWS·K3s·Jenkins·GitHub Actions 기반 배포"
  }
];

const stackGroups = [
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "JPA", "Python", "FastAPI", "SQLAlchemy"]
  },
  {
    title: "AI / Agent",
    items: [
      "PyTorch",
      "Scikit-learn",
      "ONNX Runtime",
      "RAG",
      "LangGraph",
      "MCP",
      "Gemini",
      "Ollama"
    ]
  },
  {
    title: "Database / Storage",
    items: ["PostgreSQL", "MariaDB", "Redis", "SQLite", "MinIO", "ChromaDB", "Flyway"]
  },
  {
    title: "Infra / DevOps",
    items: [
      "Docker",
      "Linux",
      "AWS",
      "K3s",
      "Nginx",
      "Traefik",
      "Jenkins",
      "GitHub Actions"
    ]
  },
];

const featuredProjectSlugs = ["mcp-api-agent", "pv-insight", "industrial-ai-platform"];

export default function Home() {
  const featuredProjects = featuredProjectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);

  return (
    <main>
      <section className="hero-section">
        <div className="page-shell hero-inner">
          <p className="eyebrow">BACKEND · AI SERVICE · AGENT</p>
          <h1>서비스 요구사항과 운영 제약을 기준으로<br />AI 서비스를 설계·구현하는<br />백엔드 개발자입니다.</h1>
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
                <p>백엔드와 AI 기능을 연결해 서비스로 구현하고, 운영 제약까지 고려해 구조를 설계하는 AI 서비스 백엔드 개발자입니다.</p>
                <p>앱 개발에서 시작해 AI 모델 연동, 클라우드 배포와 비동기 처리, 최근에는 업무 자동화 Agent까지 개발 범위를 넓혀 왔습니다. 프로젝트마다 이전 경험에서 얻은 기준을 다음 설계에 반영하며, 기능 구현에 앞서 요구사항과 운영 조건을 구체화하는 방식으로 성장해 왔습니다.</p>
                <p>서비스를 설계할 때는 비용·처리량·데이터 상태·실패 조건 등 운영에 영향을 주는 요소를 먼저 확인합니다. 예상되는 병목이나 위험은 실험과 측정으로 검증하고, 그 결과를 바탕으로 구조와 운영 방향을 결정하며 개선 효과도 수치로 확인합니다.</p>
                <p>새로운 기술은 빠르게 학습하고 적용하되, 요구사항·운영 제약·검증 기준에 맞게 서비스 구조에 반영해 실제 개발 효율과 서비스 품질 향상으로 연결하는 것을 중요하게 생각합니다.</p>
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
