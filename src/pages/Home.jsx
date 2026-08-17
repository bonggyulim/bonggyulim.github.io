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

const featuredProjectSlugs = ["pv-insight", "industrial-ai-platform", "mcp-api-agent"];

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
                <p>서비스 요구사항과 MVP를 시스템 구조와 데이터 흐름으로 구체화하고, AI 기능을 실제 서비스와 운영 환경에 연결해 구현해 왔습니다.</p>
                <p>
                  기능의 정상 동작뿐 아니라 데이터 정합성, 실패 조건, 자원 제약과 운영 가능성을 함께 검토합니다. AI 기능도 모델 성능만으로 판단하지 않고 실행 환경의 비용과 자원 사용량, 처리 성능을 기준으로 구조와 운영 방식을 결정합니다.
                </p>
                <p>최근에는 외부 시스템을 조회·변경하는 업무 Agent를 설계·구현하며, LLM의 의미 판단과 정책·승인·실행·결과 검증의 책임을 분리하고 있습니다.</p>
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
