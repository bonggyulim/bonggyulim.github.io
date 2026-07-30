export const projects = [
  {
    slug: "industrial-ai-platform",
    title: "Industrial-AI",
    detailPath: "/projects/industrial-ai-platform",
    status: "completed",
    statusLabel: "완료",
    summary:
      "제조 이미지 이상탐지와 모델·메모리뱅크 운영, 문서 검색·질의응답을 결합한 산업 AI 플랫폼 프로젝트입니다.",
    homeSummary:
      "제조 이미지 이상탐지와 문서 기반 운영 가이드를 제공하는 산업 AI 플랫폼",
    description:
      "제조 이미지 이상탐지와 모델·메모리뱅크 운영, 문서 검색·질의응답을 결합한 산업 AI 플랫폼입니다.",
    meta: ["2026.04.17 ~ 2026.05.15", "7인 팀 프로젝트", "PM·프로젝트 리드"],
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
    githubUrl: "https://github.com/human-team1/industrial-ai-platform",
    pptUrl: "https://drive.google.com/file/d/14WMw24gUADrO7AW1iBptb_xJ_hcLLzXH/view?usp=drive_link",
    demoUrl: "",
    highlights: [
      "Spring Backend와 FastAPI AI Server 책임 분리",
      "정상 이미지 기반 메모리뱅크 생성 및 추론 적용",
      "검사 결과·문서·모델 버전 통합 관리",
      "이상탐지 결과 기반 운영 가이드 제공"
    ],
    sections: [
      {
        title: "내 역할과 기여",
        type: "contribution_cards",
        cards: [
          {
            title: "서비스·시스템 설계",
            items: [
              "요구사항·MVP·사용자 흐름 정의",
              "시스템 아키텍처·ERD·API 설계",
              "Spring Backend와 FastAPI AI Server 책임 분리",
              "기능 연동 기준 수립 및 일정 조율"
            ]
          },
          {
            title: "백엔드·관리자 기능",
            items: [
              "검사 결과·문서·모델 버전 관리",
              "카테고리별 메모리뱅크 생성·삭제·비활성화",
              "로그 수집 및 관리자 페이지 구현",
              "Spring Backend와 AI Server 연동"
            ]
          },
          {
            title: "AI·RAG 설계 및 구현",
            items: [
              "FastAPI 기반 이상탐지 추론 서버 구현",
              "정상 이미지 기반 메모리뱅크 생성 서버 구현",
              "정확도·추론 속도·GPU 메모리 평가 기준 설계",
              "RAG·LLM 프롬프트 실험 및 LangGraph 흐름 설계"
            ]
          },
          {
            title: "인프라·배포",
            items: [
              "MariaDB·Redis·MinIO·ChromaDB Docker 구성",
              "GitHub Actions CI/CD 구축",
              "개인 GPU 서버 기반 자체 호스팅",
              "포트포워딩·Nginx HTTPS 외부 접속 환경 구축"
            ]
          }
        ]
      },
      {
        title: "시스템 아키텍처",
        type: "architecture",
        description:
          "React에서 사용자 요청과 결과 조회를 처리하고, Spring Backend가 인증·검색·이력·모델 및 메모리뱅크 관리 기능을 담당합니다. FastAPI AI Server는 이상탐지 추론, 메모리뱅크 생성, 문서 검색과 RAG 질의응답을 처리합니다.",
      },
      {
        title: "문제 해결 경험",
        type: "problem_solution",
        cards: [
          {
            title: "실험 환경과 서버 추론 결과 차이 개선",
            problem:
              "동일한 모델인데 Colab 실험과 FastAPI 서버에서 추론 결과가 다르게 나타났습니다.",
            solution:
              "Anomalib의 입력 처리와 전처리·추론·후처리 과정을 비교하고, 서버에 누락된 설정을 반영했습니다.",
            result:
              "실험 결과가 실제 서버 환경에서도 일관되게 재현되도록 개선했습니다."
          },
          {
            title: "신규 품목 적용을 위한 메모리뱅크 구조",
            problem:
              "새로운 품목이 추가될 때마다 모델 전체를 재학습하면 적용 시간과 운영 부담이 증가할 수 있었습니다.",
            solution:
              "공통 백본 모델과 카테고리별 메모리뱅크를 분리하고, 정상 이미지로 메모리뱅크를 생성할 수 있도록 구현했습니다.",
            result:
              "모델 전체를 다시 학습하지 않고 신규 품목을 이상탐지에 적용할 수 있는 구조를 마련했습니다."
          },
          {
            title: "자체 호스팅 배포 환경 안정화",
            problem:
              "인증서 경로 차이로 Nginx 컨테이너가 반복 재시작되는 문제가 발생했습니다.",
            solution:
              "인증서 디렉터리와 bind mount 경로를 통일하고 환경별 경로 설정을 정리했습니다.",
            result:
              "컨테이너 기동 오류를 해결하고 HTTPS 기반 외부 접속 환경을 안정화했습니다."
          }
        ]
      }
  
    ]
  },
  {
    slug: "pv-insight",
    title: "PV-Insight",
    detailPath: "/projects/pv-insight",
    status: "completed",
    statusLabel: "완료",
    summary: "드론 RGB·열화상 이미지에서 이상 후보를 선별하고 유지보수 우선순위를 제공하는 태양광 관리 플랫폼입니다.",
    homeSummary: "드론 RGB·열화상 기반 이상 탐지와 유지보수 우선순위 관리 플랫폼",
    description: "드론 RGB·열화상 이미지에서 이상 후보를 선별하고 유지보수 우선순위를 제공하는 태양광 관리 플랫폼입니다.",
    meta: ["2026.05.26 ~ 2026.07.05", "2인 팀 프로젝트", "백엔드·AI·프론트·배포 담당"],
    image: "/assets/projects/pv-insight-thumbnail.png",
    imageFit: "cover",
    videoUrl: "/assets/projects/pv-insight-v2.mp4",
    videoPoster: "/assets/projects/pv-insight-thumbnail.png",
    architectureImage: "/assets/projects/pv-insight-architecture.png",
    tags: ["Java", "Spring Boot", "JPA", "Flyway", "PostgreSQL", "Python", "FastAPI", "AWS S3", "AWS SQS", "Docker", "K3s", "Traefik", "Jenkins", "ONNX Runtime"],
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
          title: "내 역할과 기여",
          type: "contribution_cards",
          cards: [
            {
              title: "서비스·백엔드",
              items: [
                "사용자 인증·인가 기능 구현",
                "분석 Job 생성·상태 관리",
                "SQS 기반 비동기 분석 흐름 구현"
              ]
            },
            {
              title: "Thermal 모델·추론",
              items: [
                "Thermal 데이터 검수·전처리",
                "모델 실험 기준과 학습 방향 설계",
                "Thermal 모델 학습·평가 수행",
                "FastAPI·ONNX 기반 추론 서버 구현"
              ]
            },
            {
              title: "프론트엔드·대시보드",
              items: [
                "사용자 화면과 대시보드 구현",
                "RGB·Thermal 결과 조회 화면 구현",
                "백엔드 API 연동"
              ]
            },
            {
              title: "인프라·배포",
              items: [
                "Jenkins CI/CD 파이프라인 구축",
                "K3s 기반 서비스 워크로드 구성",
                "Traefik과 AWS 서비스 연동"
              ]
            }
          ]
        },
        {
          title: "시스템 아키텍처",
          type: "architecture",
          description:
            "Frontend에서 사용자 인증, 분석 요청과 결과 조회를 처리합니다. Spring Boot Backend는 사용자·분석 Job·결과 데이터를 관리하고, 분석 요청을 SQS를 통해 FastAPI AI Worker에 전달합니다. 원본과 결과 파일은 S3, 서비스 데이터와 Job 상태는 PostgreSQL에 저장합니다."
        },
        {
          title: "문제 해결 경험",
          type: "problem_solution",
          cards: [
            {
              title: "SQS 재수신에 대응한 멱등 처리",
              problem:
                "SQS 메시지가 재수신되면 동일 이미지가 중복 분석되고 Job 상태와 결과가 어긋날 수 있었습니다.",
              solution:
                "imageId 기준으로 중복 Job 생성을 차단하고, QUEUED 상태의 Job만 RUNNING으로 전환했습니다. 결과 저장과 상태 변경은 하나의 트랜잭션으로 처리했습니다.",
              result:
                "동일 메시지가 다시 전달돼도 결과가 한 번만 반영되도록 애플리케이션 멱등성을 확보했습니다."
            },
            {
              title: "Thermal 데이터 품질 검수와 실험 구성",
              problem:
                "외부 Thermal 데이터의 화질과 이상 유형이 일정하지 않아 그대로 학습하면 실험 결과의 신뢰도가 낮아질 수 있었습니다.",
              solution:
                "이미지를 수동 검수하고 학습에 사용할 데이터 기준을 정리했습니다. 데이터 특성과 서비스 조건을 기준으로 전처리·학습·평가 방향을 설계했습니다.",
              result:
                "품질이 낮거나 목적에 맞지 않는 데이터를 제외하고, 서비스 적용 가능성을 판단할 수 있는 실험 구성을 마련했습니다."
            }
          ]
        }
    ]
  }
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
