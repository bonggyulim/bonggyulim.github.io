export const projects = [
  {
    slug: "industrial-ai-platform",
    title: "Industrial-AI",
    detailPath: "/projects/industrial-ai-platform",
    status: "completed",
    statusLabel: "완료",
    summary: "제조 이미지 이상탐지 모델 서빙과 운영 백엔드 구조를 연결한 팀 프로젝트입니다.",
    homeSummary: "제조 이미지 이상 탐지와 문서 기반 점검 안내를 제공하는 AI 운영 플랫폼",
    description: "제조 이미지 이상 탐지와 문서 기반 점검 안내를 제공하는 AI 운영 플랫폼입니다.",
    image: "/assets/projects/industrial-thumbnail.png",
    imageFit: "cover",
    videoUrl: "/assets/projects/industrial-ai.mp4",
    videoPoster: "/assets/projects/industrial-thumbnail.png",
    architectureImage: "/assets/projects/industrial-architecture.png",
    tags: ["Java", "Spring Boot", "FastAPI", "Python", "MariaDB", "Redis", "MinIO", "ChromaDB", "LangGraph", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/human-team1/industrial-ai-platform",
    pptUrl: "https://drive.google.com/file/d/14WMw24gUADrO7AW1iBptb_xJ_hcLLzXH/view?usp=drive_link",
    demoUrl: "",
    highlights: [
      "Spring Backend와 FastAPI AI Server의 책임 분리",
      "서버 내 메모리 뱅크 생성 및 추론 적용",
      "점수·판정·Heatmap·모델 버전 통합 관리",
      "이상 탐지 결과 기반 RAG 점검 가이드 제공"
    ],
    sections: [
      {
        title: "내 기여",
        type: "list",
        items: [
          "프로젝트 리딩 및 요구사항·MVP·전체 시스템 설계",
          "Spring Boot 기반 백엔드 핵심 기능 구현",
          "이상 탐지 모델 실험 및 LangGraph 워크플로우 설계",
          "Docker·GitHub Actions 기반 CI/CD와 배포 환경 구축"
        ]
      },
      {
        title: "핵심 구현",
        type: "list",
        items: [
          "Spring Backend와 FastAPI AI Server의 책임 분리",
          "서버 내 메모리 뱅크 생성 및 추론 적용",
          "점수·판정·Heatmap·모델 버전 통합 관리",
          "이상 탐지 결과 기반 RAG 점검 가이드 제공"
        ]
      },
      {
        title: "시스템 아키텍처",
        type: "architecture",
        description:
          "React는 검사 요청과 결과 조회를 담당한다. Spring Backend는 인증·검사·결과 데이터를 관리하고, FastAPI AI Server는 메모리 뱅크 생성, 이상 탐지 추론과 RAG 처리를 수행한다."
      },
      {
        title: "문제 해결 경험",
        type: "problem_solution",
        card: {
          title: "실험과 서버 추론 결과 정합성 개선",
          problem: "동일한 모델인데도 Colab 실험과 FastAPI 서버의 추론 결과가 다르게 나타났다.",
          solution: "입력 형식과 Anomalib 전처리·후처리를 비교해 서버 추론 과정을 실험 환경과 동일하게 수정했다.",
          result: "실험 결과가 실제 서버에서도 일관되게 재현되도록 개선했다."
        }
      }
    ]
  },
  {
    slug: "pv-insight",
    title: "PV-Insight",
    detailPath: "/projects/pv-insight",
    status: "completed",
    statusLabel: "완료",
    summary: "RGB·열화상 이미지 분석과 AI Worker 기반 비동기 처리 구조를 설계·구현한 프로젝트입니다.",
    homeSummary: "드론 RGB·열화상 기반 이상 후보 분석과 유지보수 우선순위 관리 플랫폼",
    description: "드론 RGB·열화상 이미지를 분석해 이상 후보와 유지보수 우선순위를 제공하는 태양광 관리 플랫폼입니다.",
    image: "/assets/projects/pv-insight-thumbnail.png",
    imageFit: "cover",
    videoUrl: "/assets/projects/pv-insight-v2.mp4",
    videoPoster: "/assets/projects/pv-insight-thumbnail.png",
    architectureImage: "/assets/projects/pv-insight-architecture.png",
    tags: ["Java", "Spring Boot", "JPA", "Flyway", "FastAPI", "Python", "PostgreSQL", "AWS S3", "AWS SQS", "Docker", "K3s", "Traefik", "Jenkins", "ONNX Runtime"],
    serviceUrl: "https://app.pv-insight.com/",
    githubUrl: "https://github.com/solar-ai-dev/pv-fusion",
    pptUrl: "https://drive.google.com/file/d/1aGiUSR2hrWWxOQss0XEdZAJtKm6wi4x0/view?usp=sharing",
    demoUrl: "",
    highlights: [
      "RGB·Thermal 이미지의 독립 단건 분석 구조",
      "SQS 기반 비동기 분석 및 Job 상태 관리",
      "EC2·K3s 기반 서비스 컴포넌트 분리 배포"
    ],
    sections: [
      {
        title: "내 기여",
        type: "list",
        items: [
          "Thermal 데이터 기반 이상 탐지 모델링 및 실험",
          "사용자 인증·대시보드 백엔드 기능 구현",
          "Jenkins 기반 CI/CD 파이프라인 구축",
          "EC2·K3s·Traefik 기반 운영 환경 구성 및 실제 배포"
        ]
      },
      {
        title: "핵심 구현",
        type: "list",
        items: [
          "RGB·Thermal 이미지의 독립 단건 분석 구조",
          "SQS 기반 비동기 분석 및 Job 상태 관리",
          "EC2·K3s 기반 서비스 컴포넌트 분리 배포"
        ]
      },
      {
        title: "시스템 아키텍처",
        type: "architecture",
        description:
          "Backend가 이미지와 분석 Job을 관리하고 SQS로 AI Worker에 작업을 전달한다. 원본과 결과 파일은 S3에, 서비스 데이터와 작업 상태는 PostgreSQL에 저장한다."
      },
      {
        title: "문제 해결 경험",
        type: "problem_solution",
        card: {
          title: "SQS 재전달에 대응한 멱등 처리",
          problem: "SQS 메시지가 재전달되면 동일 이미지가 중복 분석되고 Job 상태와 결과가 어긋날 수 있었다.",
          solution: "imageId 기준 Job 제약, 조건부 상태 전환과 트랜잭션 저장을 적용했다.",
          result: "중복 메시지에도 결과가 한 번만 반영되도록 애플리케이션 수준의 멱등성을 확보했다."
        }
      }
    ]
  },
  {
    slug: "promptops-wiki-agent",
    title: "PromptOps Wiki Agent",
    detailPath: "/projects/promptops-wiki-agent",
    status: "in_progress",
    statusLabel: "진행 중",
    summary: "Obsidian Wiki 지식을 기반으로 프롬프트 후보를 생성·검증하고 Prompt Revision으로 관리하는 RAG/LLM Agent 시스템입니다.",
    homeSummary: "코딩 에이전트용 실행·검증 프롬프트와 Revision 관리 시스템",
    description: "프로젝트 지식을 기반으로 코딩 에이전트용 실행·검증 프롬프트와 Revision을 관리하는 PromptOps 시스템입니다.",
    image: "/assets/projects/promptops-thumbnail.png",
    imageFit: "contain",
    videoUrl: "/assets/projects/promptops.mp4",
    videoPoster: "/assets/projects/promptops-thumbnail.png",
    architectureImage: "/assets/projects/promptops-architecture.png",
    tags: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "LangGraph", "LangChain", "LangSmith", "Codex", "Obsidian", "ChromaDB"],
    githubUrl: "https://github.com/bonggyulim/promptops-wiki-agent",
    pptUrl: "",
    demoUrl: "",
    highlights: [
      "원본문서 기반 Wiki 지식층 생성",
      "실행 프롬프트와 검증 프롬프트 분리 관리",
      "Issue 기반 Prompt Compile",
      "Human Approval 및 Prompt Revision 이력 관리"
    ],
    sections: [
      {
        title: "설계 및 구현 범위",
        type: "list",
        items: [
          "Source·Wiki·Issue·Prompt 중심 도메인 구조 설계",
          "원본문서 기반 Wiki Page·Revision 생성 구조 구현",
          "Issue 기반 실행·검증 프롬프트 생성 구조 설계",
          "Human Approval·Prompt Revision 관리 Workflow 구현 중"
        ]
      },
      {
        title: "핵심 구현",
        type: "list",
        items: [
          "원본문서 기반 Wiki 지식층 생성",
          "실행 프롬프트와 검증 프롬프트 분리 관리",
          "Issue 기반 Prompt Compile",
          "Codex용 프로젝트 실행 지시문 생성",
          "Human Approval 및 Prompt Revision 이력 관리"
        ]
      },
      {
        title: "시스템 아키텍처",
        type: "architecture",
        description:
          "원본문서를 Wiki Page와 Revision으로 변환한다. Issue를 분석해 실행·검증 프롬프트를 생성하고, 승인 및 실행 결과를 Prompt Revision으로 기록한다."
      },
      {
        title: "현재 상태",
        type: "metric_grid",
        metrics: [
          {
            label: "도메인 설계",
            value: "완료"
          },
          {
            label: "Workflow",
            value: "구현 중"
          },
          {
            label: "Prompt MVP",
            value: "진행 중"
          }
        ]
      }
    ]
  }
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
