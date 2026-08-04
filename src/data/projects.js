const industrialRepo = "https://github.com/human-team1/industrial-ai-platform";
const pvRepo = "https://github.com/solar-ai-dev/pv-fusion";

export const projects = [
  {
    slug: "industrial-ai-platform",
    title: "Industrial AI Platform",
    detailPath: "/projects/industrial-ai-platform",
    status: "completed",
    statusLabel: "완료",
    summary: "제조 이미지 이상 탐지와 모델·Memory Bank 운영, 문서 기반 RAG를 결합한 설비 점검 지원 플랫폼",
    homeSummary: "제조 이미지 이상 탐지, 모델·Memory Bank 운영과 문서 RAG를 결합한 설비 점검 지원 플랫폼",
    description:
      "제조 이미지 이상 탐지와 모델·Memory Bank 운영, 문서 기반 RAG를 결합한 설비 점검 지원 플랫폼입니다. 검사 결과와 이상 위치를 확인하고, 설비 문서를 검색해 점검·대응 정보를 조회할 수 있습니다.",
    meta: [
      "2026.04.17 ~ 2026.05.15",
      "7인 팀 프로젝트",
      "PM · 시스템·AI 구조 설계 · 백엔드·AI 서버·프론트엔드 구현 · 관리자 모니터링 · 실험 전략 수립 · 자체 호스팅 배포"
    ],
    roleScope:
      "PM · 시스템·AI 구조 설계 · 백엔드·AI 서버·프론트엔드 구현 · 관리자 모니터링 · 실험 전략 수립 · 자체 호스팅 배포",
    image: "/assets/projects/industrial-thumbnail.png",
    imageFit: "cover",
    videoUrl: "/assets/projects/industrial-ai.mp4",
    videoPoster: "/assets/projects/industrial-thumbnail.png",
    architectureImage: "/assets/projects/industrial-architecture.png",
    tags: [
      "Java",
      "Spring Boot",
      "FastAPI",
      "Python",
      "MariaDB",
      "Redis",
      "MinIO",
      "ChromaDB",
      "LangGraph",
      "Docker",
      "GitHub Actions",
      "Anomalib",
      "Nginx"
    ],
    githubUrl: industrialRepo,
    pptUrl: "https://drive.google.com/file/d/14WMw24gUADrO7AW1iBptb_xJ_hcLLzXH/view?usp=drive_link",
    demoUrl: "",
    highlights: [
      "Spring·FastAPI 비동기 검사와 AI 추론 흐름 구현",
      "모델 버전·아티팩트·Memory Bank 운영 기능 구현",
      "문서 인덱싱 Job과 RAG 저장 상태 연동",
      "Docker·Nginx·GitHub Actions 기반 자체 호스팅 배포"
    ],
    sections: [
      {
        id: "role",
        title: "내 역할과 핵심 기여",
        type: "contribution_cards",
        groupLabels: {
          build: "서비스 구현·설계",
          operate: "운영·배포"
        },
        cards: [
          {
            id: "implementation",
            group: "build",
            category: "IMPLEMENTATION",
            title: "핵심 기능 구현",
            items: [
              "이미지 업로드부터 AI 검사·결과 저장·이상 위치 시각화까지 검사 흐름 구현",
              "모델·버전·배포 상태와 품목별 Memory Bank 생성·적용·비활성화 구현",
              "문서 CRUD·버전 관리부터 인덱싱·벡터 저장·검색 반영까지 구현",
              "FastAPI 이미지 추론과 문서 검색·RAG·LLM 호출을 Spring에 연동",
              "검사·모델·문서·대시보드·관리자 화면 설계·React 구현"
            ]
          },
          {
            id: "design",
            group: "build",
            category: "DESIGN",
            title: "설계·의사결정",
            items: [
              "PM으로 요구사항·MVP·설계 기준을 정하고 공동 설계문서 검토·통합",
              "Spring·FastAPI·DB·캐시·스토리지·벡터 DB의 책임과 데이터 흐름 설계",
              "검사·모델·문서·관리자 API·DB와 Spring–FastAPI 연동 규격 설계",
              "이상 탐지·문서 검색·RAG·LLM을 검사·결과 확인·점검 안내 흐름에 배치",
              "정확도·속도·GPU 메모리를 기준으로 공통 Backbone·품목별 Memory Bank 운영 구조 설계"
            ]
          },
          {
            id: "operations",
            group: "operate",
            category: "ADMIN & MONITORING",
            title: "관리자 기능·시스템 모니터링",
            items: [
              "관리자 계정의 가입 승인·거절, 계정 상태·역할 변경 구현",
              "AI 서버·DB·저장소·캐시 연결 상태와 헬스체크 조회 구현",
              "서버 CPU·메모리 등 자원 상태와 사용량 추이 모니터링 구현",
              "운영 로그·요청 ID·모델 버전으로 검사·문서·AI 처리 장애와 결과 추적"
            ]
          },
          {
            id: "deploy",
            group: "operate",
            category: "DEPLOY",
            title: "CI/CD·자체 호스팅 배포",
            items: [
              "Docker Compose·Nginx로 운영 환경과 단일 HTTPS 진입점 구성",
              "외부 80·443만 개방하고 AI 서버·DB·캐시·스토리지를 내부망으로 격리",
              "GitHub Actions Self-hosted Runner로 빌드·설정 검증·서비스 재기동 자동화",
              "DDNS·포트포워딩·방화벽·TLS·도메인 연결로 외부 서비스 배포"
            ]
          },
          {
            id: "experiment",
            group: "operate",
            category: "EXPERIMENT",
            title: "실험 전략 수립",
            items: [
              "정확도·위치 탐지·추론 시간·GPU 메모리 기반 모델 평가 기준 수립",
              "후보 비교, 속도형·성능형 최적화, Teacher–Student 경량화 전략 수립",
              "검색 방식·프롬프트·LLM 비교를 위한 RAG 실험 기준 정의"
            ]
          }
        ]
      },
      {
        id: "troubleshooting",
        title: "핵심 문제 해결",
        type: "problem_solution",
        card: {
          id: "serving-result-consistency",
          title: "실험 환경과 FastAPI 추론 결과의 불일치 해결",
          problem: "같은 이미지와 모델을 사용했지만 실험 환경과 FastAPI 서버의 판정 결과가 다르게 나타났습니다.",
          decision: "",
          implementation: [
            "실험·서버의 입력 규격·전처리·Memory Bank·판정 기준 비교",
            "Spring 전달 모델 버전·파일·설정과 FastAPI 로딩 경로 점검",
            "실제 모델·추론 설정을 결과에서 확인하도록 연동 규격 정리"
          ],
          result: "동일한 모델·입력·전처리·판정 설정을 적용해 결과 재현성을 높였습니다."
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
    summary: "드론 RGB·Thermal 이미지를 구역 단위로 분석해 태양광 설비의 이상 후보와 조치 유형을 관리하는 점검 플랫폼",
    homeSummary: "드론 RGB·Thermal 이미지로 태양광 설비의 이상 후보와 후속 조치를 관리하는 점검 플랫폼",
    description:
      "드론 RGB·Thermal 이미지를 구역 단위로 분석해 태양광 설비의 이상 후보와 조치 유형을 관리하는 점검 플랫폼입니다. 발전소별 점검 결과와 반복 이상 이력을 확인하고 후속 조치를 관리할 수 있습니다.",
    meta: [
      "2026.05.26 ~ 2026.07.05",
      "2인 팀 프로젝트",
      "사용자·발전소·프론트엔드 구현 · 분석 처리 안정화 · Thermal 모델 실험·적용 · AWS·K3s 운영 배포"
    ],
    roleScope:
      "사용자·발전소·프론트엔드 구현 · 분석 처리 안정화 · Thermal 모델 실험·적용 · AWS·K3s 운영 배포",
    image: "/assets/projects/pv-insight-thumbnail.png",
    imageFit: "cover",
    videoUrl: "/assets/projects/pv-insight-v2.mp4",
    videoPoster: "/assets/projects/pv-insight-thumbnail.png",
    architectureImage: "/assets/projects/pv-insight-architecture.png",
    tags: [
      "Java",
      "Spring Boot",
      "JPA",
      "Flyway",
      "PostgreSQL",
      "Python",
      "FastAPI",
      "AWS S3",
      "AWS SQS",
      "Docker",
      "K3s",
      "Traefik",
      "Jenkins",
      "ONNX Runtime"
    ],
    serviceUrl: "https://app.pv-insight.com/",
    githubUrl: pvRepo,
    pptUrl: "https://drive.google.com/file/d/1aGiUSR2hrWWxOQss0XEdZAJtKm6wi4x0/view?usp=sharing",
    demoUrl: "",
    highlights: [
      "Google OAuth2와 세션 기반 사용자 승인·권한 구현",
      "발전소별 담당 데이터 접근 범위 검증",
      "SQS at-least-once 전제의 분석 Job 상태 안정화",
      "Thermal 모델 실험과 AWS·K3s 운영 배포 수행"
    ],
    sections: [
      {
        id: "role",
        title: "내 역할과 핵심 기여",
        type: "contribution_cards",
        groupLabels: {
          build: "서비스 구현·설계",
          operate: "안정성·배포"
        },
        cards: [
          {
            id: "implementation",
            group: "build",
            category: "IMPLEMENTATION",
            title: "핵심 기능 구현",
            items: [
              "Google OAuth2 신규 사용자 등록과 관리자 승인·거절·역할 변경 구현",
              "발전소·구역·설비 관리와 사용자별 데이터 접근 권한 구현",
              "점검·이미지·분석 결과 조회와 데이터·S3 파일 삭제 흐름 구현·보완",
              "대시보드·발전소·점검·분석 결과·관리자 화면 설계·React 구현",
              "운영 로그 기록과 사용자 작업·주요 변경 이력 조회 구현"
            ]
          },
          {
            id: "design",
            group: "build",
            category: "DESIGN",
            title: "설계·의사결정",
            items: [
              "사용자·권한·발전소·구역·설비 도메인과 접근 정책 설계",
              "Spring·AI Worker·RDS·S3·SQS의 책임과 분석 데이터 흐름 설계",
              "운영 AWS와 로컬 PostgreSQL·MinIO·LocalStack 실행 환경 분리",
              "분석 작업 중복·상태 변경·실패·재처리와 결과·파일 저장 정책 설계",
              "월 100달러 내외 비용과 CPU 추론을 기준으로 단일 EC2·K3s 운영 구조 설계"
            ]
          },
          {
            id: "operations",
            group: "operate",
            category: "RELIABILITY",
            title: "비동기 분석·데이터 일관성",
            items: [
              "DB 제약과 진행 작업 조회로 이미지당 분석 작업을 1개로 제한",
              "작업 상태·실패 유형별 SQS 재처리·복구 기준 관리",
              "분석 결과·결함·작업 상태를 한 트랜잭션으로 저장",
              "DB 삭제 후 S3 파일을 제거하고 작업·이미지·요청 ID로 실패 위치 추적",
              "사용자·권한·발전소·분석 작업 핵심 로직 단위 테스트 작성"
            ]
          },
          {
            id: "deploy",
            group: "operate",
            category: "DEPLOY",
            title: "AWS·K3s 운영 배포",
            items: [
              "단일 EC2 K3s에 Frontend·Backend·AI Worker를 분리 배치하고 Traefik으로 라우팅",
              "Jenkins에서 서비스별 검증 후 Docker 빌드·ECR 저장·K3s 배포 자동화",
              "RDS·S3·SQS 연동과 ConfigMap·Secret·IAM·Flyway로 설정·권한·DB 변경 관리",
              "외부 80·443만 개방하고 도메인·HTTPS·CloudWatch 구성 후 AI 분석까지 배포 검증"
            ]
          },
          {
            id: "experiment",
            group: "operate",
            category: "EXPERIMENT",
            title: "Thermal 모델·배포 적용",
            items: [
              "드론뷰 Thermal 데이터 품질 검수와 부적합 데이터 제외 후 학습 데이터 구성",
              "이상 유형별 모델 학습·평가로 F1 87.52~93.41, mAP@0.5 83.46~94.39 기록",
              "Confidence 0.55·IoU 0.45 선정 후 ONNX Runtime CPU 검증·AI Worker 적용"
            ]
          }
        ]
      },
      {
        id: "troubleshooting",
        title: "핵심 문제 해결",
        type: "problem_solution",
        card: {
          id: "sqs-job-state-consistency",
          title: "SQS 중복 전달과 분석 작업 상태 관리",
          problem:
            "SQS 재전달과 동시 요청으로 같은 이미지의 분석 작업이 중복되거나 완료 작업이 다시 처리될 수 있었습니다.",
          decision: "",
          implementation: [
            "이미지당 진행 중인 분석 작업을 1개로 제한",
            "DB 제약과 진행 작업 조회로 중복 생성 방지",
            "작업 상태 순서와 실패 유형별 재처리 기준 관리",
            "분석 결과·결함·작업 상태를 한 트랜잭션으로 저장"
          ],
          result: "중복 전달과 동시 요청에서도 분석 작업과 처리 상태의 일관성을 유지했습니다."
        }
      }
    ]
  }
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
