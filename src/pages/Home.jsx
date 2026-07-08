import { Link } from "react-router-dom";

const capabilities = [
  {
    title: "AI 서비스 아키텍처와 E2E 데이터 흐름 설계",
    description: "AI 모델 결과가 API, DB, 저장소, Worker, 사용자 기능으로 이어지도록 전체 흐름을 설계합니다."
  },
  {
    title: "모델 실험·서빙·운영 관리",
    description: "이상탐지 모델 실험 결과를 서비스 구조와 연결하고 버전과 운영 흐름을 관리합니다."
  },
  {
    title: "RAG / LLM / Agent 구조 구현",
    description: "RAG, LLM, LangGraph 기반 Agent 흐름과 검증·승인 중심의 구조를 구현합니다."
  },
  {
    title: "API와 백엔드 연동 설계",
    description: "FastAPI와 Spring Boot 기반으로 서비스 역할을 분리하고 API, DB, 저장소 연동을 설계합니다."
  },
  {
    title: "배포와 운영 환경 구성",
    description: "Docker, Nginx, AWS, K3s, Jenkins 기반으로 실행 환경과 배포 흐름을 구성합니다."
  }
];

const stackGroups = [
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "Python", "FastAPI", "Flask"]
  },
  {
    title: "AI / ML",
    items: ["PyTorch", "TensorFlow", "Scikit-Learn", "YOLO", "Anomalib", "RAG", "GraphRAG", "LangGraph", "LangChain"]
  },
  {
    title: "Database / Storage",
    items: ["MariaDB", "MySQL", "PostgreSQL", "Redis", "ChromaDB", "MinIO"]
  },
  {
    title: "Infra / DevOps",
    items: ["Docker", "Linux", "Nginx", "AWS", "Amazon S3", "Amazon SQS", "Kubernetes", "K3s", "Jenkins", "GitHub Actions"]
  },
  {
    title: "Collaboration",
    items: ["GitHub", "Jira", "Slack", "Notion"]
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="page-shell hero-inner">
          <p className="eyebrow">AI Backend Portfolio</p>
          <h1>백엔드와 AI 모델을 연결해 실제 서비스 형태로 구현하는 개발자입니다.</h1>
          <div className="hero-actions">
            <Link to="/projects" className="primary-button">
              프로젝트 보기
            </Link>
          </div>
        </div>
      </section>

      <div className="page-shell page-content">
        <section className="intro-grid">
          <div className="section-card prose-card">
            <div className="section-heading">
              <h2>소개</h2>
            </div>
            <div className="prose-block">
              <p>백엔드와 AI 모델을 연결해 실제 서비스 형태로 구현하는 AI 서비스 개발자입니다.</p>
              <p>
                FastAPI, Spring Boot, PostgreSQL, Docker 기반으로 API 서버와 분석 파이프라인을 구축했으며,
                YOLO·Anomalib 기반 이상탐지, RAG·LangGraph 기반 지식 에이전트 프로젝트를 진행했습니다.
              </p>
              <p>
                팀 프로젝트에서는 PL/PM 역할로 요구사항 정리, 아키텍처 설계, API/DB 설계, 배포 구조 정리를 담당했습니다.
              </p>
              <p>현재는 AI 분석 결과를 사용자 기능으로 연결하는 백엔드/AI 서비스 개발 역량을 중심으로 성장하고 있습니다.</p>
            </div>
          </div>

          <aside className="profile-card">
            <img className="profile-image" src="/assets/projects/bonggyulim.jpg" alt="프로필 이미지" />
            <strong>임봉규</strong>
            <span>Backend / AI Modeling / Agent Automation</span>
            <p>AI 분석 결과를 백엔드 시스템과 사용자 기능으로 연결하는 구조에 집중합니다.</p>
          </aside>
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
