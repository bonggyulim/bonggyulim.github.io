export const projects = [
  {
    slug: "promptops-wiki-agent",
    title: "PromptOps Wiki Agent",
    status: "in_progress",
    statusLabel: "진행 중",
    summary: "Wiki 지식을 기반으로 작업 목적별 프롬프트 후보를 생성하고 검증·가지치기하는 PromptOps Agent 실험형 MVP입니다.",
    description:
      "프로젝트 규칙, 최신 기술 정리, 오류 해결 기록, 기존 프롬프트를 Wiki로 관리하고 그 지식을 기반으로 작업 목적별 프롬프트 후보를 생성하는 구조를 설계하고 있습니다.",
    image: "/assets/projects/promptops-thumbnail.png",
    videoUrl: "/assets/projects/promptops.mp4",
    videoPoster: "/assets/projects/promptops-thumbnail.png",
    architectureImage: "/assets/projects/promptops-architecture.png",
    tags: ["FastAPI", "PostgreSQL", "ChromaDB", "Neo4j", "Docker", "LangGraph", "RAG/LLM", "Hybrid Search", "GraphRAG", "PromptOps"],
    githubUrl: "https://github.com/bonggyulim/promptops-wiki-agent",
    pptUrl: "",
    demoUrl: "",
    highlights: [
      "Wiki Page / Revision 기반 지식 관리 구조 설계",
      "Prompt Candidate 생성, Verification, Branch Pruning 흐름 정의",
      "Human Approval 이후 Prompt Revision 저장 흐름 설계"
    ],
    sections: [
      {
        title: "개요",
        type: "paragraph",
        content:
          "PromptOps Wiki Agent는 프로젝트 규칙, 최신 기술 정리, 오류 해결 기록, 기존 프롬프트를 Wiki로 관리하고 그 지식을 기반으로 작업 목적별 프롬프트 후보를 생성하는 실험형 시스템입니다. 단순히 문서를 검색해 응답하는 RAG가 아니라, Wiki Context를 바탕으로 여러 후보를 만들고 검증한 뒤 실제 작업에 사용할 Prompt Revision으로 반영하는 흐름을 목표로 하고 있습니다."
      },
      {
        title: "설계 범위",
        type: "list",
        items: [
          "Wiki Page와 Wiki Revision 기반 지식 관리 구조 설계",
          "Wiki Context 기반 Prompt Candidate 생성 흐름 설계",
          "Prompt Verification과 Branch Pruning 구조 설계",
          "Human Approval 기반 최종 반영 흐름 정리",
          "Prompt Candidate, Verification, Branch, Revision 중심 MVP 구조 설계"
        ]
      },
      {
        title: "시스템 구조",
        type: "flow",
        description:
          "Wiki는 프롬프트 생성을 위한 기준 지식 저장소로 사용됩니다. 프로젝트 문서, 기술 정리, 오류 기록, 기존 프롬프트가 Wiki Page와 Wiki Revision으로 관리되며, 프롬프트 생성 시 관련 Wiki Context를 검색해 후보 프롬프트를 생성합니다.",
        flow: [
          "기본 문서 / 기술 정리 / 오류 기록",
          "LLM Wiki 지식화",
          "관련 Wiki Context 검색",
          "Prompt Candidate 생성",
          "Prompt Verification",
          "Prompt Branch Pruning",
          "Human Approval",
          "Prompt Revision 저장"
        ]
      },
      {
        title: "주요 구현 내용",
        type: "list",
        items: [
          "Backend 구조를 모듈 중심 도메인 구조로 구성",
          "Source, Wiki, Retrieval, Graph, Agent 영역 분리",
          "PostgreSQL, ChromaDB, Neo4j 기반 로컬 인프라 구성",
          "Wiki Page와 Wiki Revision 기반 지식 관리 구조 설계",
          "Hybrid Retrieval 기반 Wiki Context 검색 구조 설계",
          "LangGraph 기반 Agent Workflow Skeleton 구현",
          "Agent Run / Agent Step 저장 구조 구현",
          "Wiki Update Plan과 Approval Request 저장 구조 구현",
          "Approve / Reject API와 Workspace Ownership Guard 구현",
          "Prompt Candidate, Verification, Branch, Revision 중심 MVP 구조 설계"
        ]
      }
    ]
  },
  {
    slug: "industrial-ai-platform",
    title: "Industrial-AI",
    status: "completed",
    statusLabel: "완료",
    summary: "제조 이미지 이상탐지 모델 서빙과 운영 백엔드 구조를 연결한 팀 프로젝트입니다.",
    description:
      "PM/PL 역할과 함께 요구사항, MVP 범위, 시스템 구조, API 명세, ERD, 배포 문서 정리를 맡았고, Spring Boot와 FastAPI 역할 분리 구조를 중심으로 구현에 참여했습니다.",
    image: "/assets/projects/industrial-thumbnail.png",
    videoUrl: "/assets/projects/industrial-ai.mp4",
    videoPoster: "/assets/projects/industrial-thumbnail.png",
    architectureImage: "/assets/projects/industrial-architecture.png",
    tags: ["Spring Boot", "FastAPI", "Java", "Python", "MariaDB", "Redis", "MinIO", "ChromaDB", "Docker", "Nginx", "GitHub Actions", "RAG/LLM", "Anomalib"],
    githubUrl: "https://github.com/human-team1/industrial-ai-platform",
    pptUrl: "https://drive.google.com/file/d/14WMw24gUADrO7AW1iBptb_xJ_hcLLzXH/view?usp=drive_link",
    demoUrl: "",
    highlights: [
      "PM/PL 역할과 문서 기반 프로젝트 정리",
      "Spring Boot / FastAPI 역할 분리",
      "Docker, Nginx, GitHub Actions 기반 배포 구조 구성"
    ],
    sections: [
      {
        title: "개요",
        type: "paragraph",
        content:
          "Industrial-AI는 제조 이미지 이상탐지와 문서 검색형 보조 기능을 함께 다룬 프로젝트입니다. 모델 실험 결과를 실제 서비스 구조와 운영 흐름으로 연결하는 데 초점을 두었습니다."
      },
      {
        title: "담당 역할",
        type: "list",
        items: [
          "PM/PL 역할",
          "요구사항, MVP 범위, 시스템 아키텍처 정리",
          "API 명세, ERD, 실행 가이드, 배포 문서 정리",
          "Spring Boot와 FastAPI 역할 분리 설계"
        ]
      },
      {
        title: "시스템 구조",
        type: "flow",
        description:
          "Spring Boot는 인증, 사용자 요청, 검사 결과 관리 같은 운영 기능을 담당하고, FastAPI는 이상탐지 추론과 RAG 흐름을 담당합니다. MariaDB, Redis, MinIO, ChromaDB를 목적별로 분리해 운영 기능과 AI 처리 기능이 충돌하지 않도록 구성했습니다.",
        flow: [
          "Spring Boot 기반 운영 API",
          "FastAPI 기반 추론 / RAG 처리",
          "MariaDB, Redis, MinIO, ChromaDB 목적별 분리",
          "Anomalib 기반 추론 서빙 통합",
          "Docker / Nginx / GitHub Actions 기반 배포"
        ]
      },
      {
        title: "주요 구현 내용",
        type: "list",
        items: [
          "요구사항, MVP 범위, 시스템 구조, API 명세, ERD, 배포 문서 정리",
          "Spring Boot와 FastAPI 역할 분리 구조 구성",
          "MariaDB, Redis, MinIO, ChromaDB 목적별 분리",
          "Anomalib 기반 추론 / 서빙 통합부 개선",
          "Docker, Nginx, GitHub Actions 기반 배포 구조 적용"
        ]
      }
    ]
  },
  {
    slug: "pv-insight",
    title: "PV-Insight",
    status: "completed",
    statusLabel: "완료",
    summary: "RGB·열화상 이미지 분석과 AI Worker 기반 비동기 처리 구조를 설계한 프로젝트입니다.",
    description:
      "이미지 업로드부터 저장, 비동기 추론, Job 상태 관리, 결과 반환까지 이어지는 흐름을 설계했고, 중복 Job 차단과 Worker 멱등성 보강에 집중했습니다.",
    image: "/assets/projects/pv-insight-thumbnail.png",
    videoUrl: "/assets/projects/pv-insight.mp4",
    videoPoster: "/assets/projects/pv-insight-thumbnail.png",
    architectureImage: "/assets/projects/pv-insight-architecture.png",
    tags: ["Java", "Spring Boot", "JPA", "Flyway", "Python", "FastAPI", "PostgreSQL", "Docker", "AWS S3", "AWS SQS", "K3s", "Jenkins", "YOLO26", "OpenCV"],
    githubUrl: "https://github.com/solar-ai-dev/pv-fusion",
    pptUrl: "https://drive.google.com/file/d/1IflkKP2tEE-xONB0Iic6goMuGnZQCTgw/view?usp=drive_link",
    demoUrl: "",
    highlights: [
      "AI Worker 기반 비동기 분석 구조 구현",
      "중복 Job 차단과 Worker 멱등성 설계",
      "Docker, AWS, K3s, Jenkins 기반 배포 구조 적용"
    ],
    sections: [
      {
        title: "개요",
        type: "paragraph",
        content:
          "PV-Insight는 RGB와 열화상 이미지 분석을 위해 업로드, 저장, 비동기 추론, Job 상태 관리, 결과 반환까지 이어지는 처리 흐름을 설계한 프로젝트입니다. 모델 자체보다 안정적인 운영 흐름 설계에 더 집중했습니다."
      },
      {
        title: "담당 역할",
        type: "list",
        items: [
          "RGB·열화상 이미지 분석 흐름 설계",
          "이미지 업로드 및 저장소 구조 설계",
          "AI Worker 기반 비동기 분석 처리 구조 구현",
          "SQS 기반 Job 처리 안정성 보강"
        ]
      },
      {
        title: "시스템 구조",
        type: "flow",
        description:
          "이미지 업로드와 메타데이터 저장 이후 SQS에 작업을 적재하고, AI Worker가 비동기로 분석을 수행합니다. Job 상태 전이와 결과 저장을 분리해 중복 요청이나 Worker 재시도 상황에서도 상태가 어긋나지 않도록 구성했습니다.",
        flow: [
          "이미지 업로드 및 저장소 구조 설계",
          "AI Worker 기반 비동기 분석 처리",
          "SQS 기반 Job 처리 안정성 보강",
          "중복 Job 차단과 Worker 멱등성 설계",
          "Docker / AWS / K3s / Jenkins 기반 배포"
        ]
      },
      {
        title: "주요 구현 내용",
        type: "list",
        items: [
          "RGB·열화상 이미지 분석 흐름 설계",
          "이미지 업로드 및 저장소 구조 설계",
          "AI Worker 기반 비동기 분석 처리 구조 구현",
          "SQS 기반 Job 처리 안정성 보강",
          "중복 Job 차단, Worker 멱등성, transaction 처리 설계",
          "Docker, AWS, K3s, Jenkins 기반 배포 구조 적용"
        ]
      }
    ]
  }
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
