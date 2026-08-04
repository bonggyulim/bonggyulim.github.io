import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const capabilities = [
  {
    title: "서비스·시스템 설계",
    description: "요구사항·MVP·시스템 구조·서버 간 데이터 계약 설계"
  },
  {
    title: "백엔드·AI 서버 구현",
    description: "Spring Boot 백엔드·FastAPI AI 서버 구현 및 연동"
  },
  {
    title: "비동기 처리·데이터 일관성",
    description: "상태 전이·트랜잭션·중복 처리·실패 재처리 설계"
  },
  {
    title: "에이전트·모델 서빙",
    description: "LangGraph 승인 워크플로와 자원·비용 기반 모델 서빙"
  },
  {
    title: "CI/CD·운영 배포",
    description: "Jenkins·GitHub Actions·AWS·K3s CI/CD·배포"
  }
];

const stackGroups = [
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "JPA", "Python", "FastAPI"]
  },
  {
    title: "AI / Agent",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-Learn",
      "YOLO",
      "Anomalib",
      "ONNX Runtime",
      "LLM",
      "RAG",
      "LangChain",
      "LangGraph"
    ]
  },
  {
    title: "Database / Storage",
    items: ["MariaDB", "PostgreSQL", "Redis", "ChromaDB", "MinIO", "Flyway"]
  },
  {
    title: "Infra / DevOps",
    items: [
      "Docker",
      "Linux",
      "Nginx",
      "AWS",
      "Amazon S3",
      "Amazon SQS",
      "K3s",
      "Traefik",
      "Jenkins",
      "GitHub Actions"
    ]
  },
];

const featuredProjectSlugs = ["pv-insight", "industrial-ai-platform"];

export default function Home() {
  const featuredProjects = featuredProjectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);

  return (
    <main>
      <section className="hero-section">
        <div className="page-shell hero-inner">
          <p className="eyebrow">BACKEND · AI SERVICE · AGENT WORKFLOW</p>
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
                <p>서비스 요구사항과 MVP를 시스템 구조·데이터 흐름·API로 구체화하고, 백엔드와 AI 서버를 연결해 운영 가능한 서비스로 구현해 왔습니다.</p>
                <p>
                  Spring Boot와 FastAPI를 기반으로 서비스 API와 AI 추론 서버를 구현했으며, 비동기 작업의 상태 전이·트랜잭션·데이터 일관성·인증과 권한을 고려해 처리 흐름을 설계했습니다.
                </p>
                <p>AI 기능은 정확도뿐 아니라 추론 시간·메모리 사용량·운영 비용·배포 환경을 기준으로 평가하고, Docker·Nginx 자체 호스팅과 AWS·K3s 환경에서 CI/CD와 배포를 수행했습니다.</p>
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
