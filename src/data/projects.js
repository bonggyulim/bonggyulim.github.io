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
    homeSummary: "제조 이미지 이상 탐지와 모델·Memory Bank 운영, 문서 RAG를 결합한 설비 점검 지원 플랫폼",
    description:
      "제조 이미지 이상 탐지와 카테고리별 Memory Bank 운영, 설비 문서 RAG 챗봇을 결합한 설비 점검 지원 플랫폼입니다. 이상 탐지 결과와 의심 위치를 시각화하고, 검사 이력을 관리하며 설비 문서 검색과 출처 기반 점검·대응 정보를 제공합니다.",
    descriptionEmphasis: ["Memory Bank 운영", "설비 문서 RAG 챗봇"],
    meta: [
      "2026.04.17 ~ 2026.05.15",
      "7인 팀 프로젝트",
      "PM"
    ],
    image: "/assets/projects/industrial-thumbnail.png?v=login-screen",
    imageFit: "cover",
    videoUrl: "/assets/projects/industrial-ai.mp4",
    videoPoster: "/assets/projects/industrial-thumbnail.png?v=login-screen",
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
      "Spring·FastAPI 비동기 검사·AI 추론 흐름 구현",
      "모델 버전·아티팩트·Memory Bank 운영 기능 구현",
      "문서 인덱싱 Job과 RAG 저장 상태 연동",
      "Docker·Nginx·GitHub Actions 기반 자체 호스팅 배포"
    ],
    sections: [
      {
        id: "role",
        title: "내 역할과 핵심 기여",
        type: "contribution_cards",
        layout: "role_rows",
        cards: [
          {
            id: "implementation",
            title: "핵심 기능 구현",
            items: [
              "검사 요청·AI 추론·결과 저장까지 비동기 검사 도메인 구현",
              "문서 업로드·버전·인덱싱 상태를 포함한 문서 관리 도메인 구현",
              "모델 버전·Artifact·Memory Bank 생성 및 적용 범위 관리 구현",
              "Spring–FastAPI AI 서빙 연동과 주요 React 서비스 화면 구현"
            ]
          },
          {
            id: "design",
            title: "설계·의사결정",
            items: [
              "요구사항 분석부터 MVP 범위·서비스 정책·설계 기준 정의",
              "Spring·FastAPI·DB·파일 저장소의 책임과 데이터 흐름 설계",
              "API·DB 모델과 Spring–FastAPI 간 추론 요청·응답 계약 설계",
              "카테고리별 Memory Bank 운영 구조와 AI 모델 평가·적용 기준 설계"
            ]
          },
          {
            id: "operations-deploy",
            title: "자체호스팅 배포·운영 관리",
            items: [
              "Docker Compose·Nginx·HTTPS 기반 자체호스팅 운영",
              "GitHub Actions 빌드·배포 자동화 및 기동 확인",
              "FastAPI·Redis·MinIO·ChromaDB 상태 조회",
              "Request ID·Log·비동기 Job 기반 장애 추적"
            ]
          }
        ]
      },
      {
        id: "architecture",
        title: "시스템 아키텍처",
        type: "architecture_overview",
        image: "/assets/projects/industrial-architecture.png",
        imageAlt: "Industrial AI Platform 시스템 아키텍처 다이어그램",
        externalUrl: "/assets/projects/industrial-architecture.png",
        legend: "서비스 Spring Boot ↔ FastAPI　│　데이터·AI MariaDB · Redis · MinIO · ChromaDB · LLM　│　운영 Docker Compose · Nginx · HTTPS",
        renderInDetail: true
      },
      {
        id: "troubleshooting",
        title: "핵심 문제 해결",
        type: "problem_solution",
        eyebrow: "ENGINEERING DECISIONS",
        cardOrder: ["category-scaling-strategy", "runtime-memory-bank-operations"],
        card: {
          id: "category-scaling-strategy",
          kind: "industrial_scaling",
          title: "신규 카테고리 대응 구조와 경량 모델 검증",
          problemLabel: "문제",
          problem: "신규 카테고리가 추가될 때마다 모델을 다시 학습하지 않고 빠르게 대응해야 했고, 검사 요청 증가에 대비해 추론 시간과 GPU 사용량을 줄이면서 판정 성능을 유지할 구조가 필요했습니다.",
          problemEmphasis: ["빠르게 대응", "추론 시간과 GPU 사용량을 줄이면서 판정 성능을 유지할 구조"],
          decision: "① Backbone 재사용 + 카테고리별 Memory Bank 분리\n② SPEED / PERFORMANCE 역할 분리\n③ Teacher–Student 경량화",
          decisionEmphasis: ["① Backbone 재사용 + 카테고리별 Memory Bank 분리", "② SPEED / PERFORMANCE 역할 분리", "③ Teacher–Student 경량화"],
          backboneFlow: {
            title: "1. Backbone 재사용 + 카테고리별 Memory Bank",
            image: "/assets/projects/memorybank.svg",
            imageAlt: "모델별 Backbone과 카테고리별 Memory Bank를 이용한 신규 카테고리 대응 구조 다이어그램",
            summary: "Backbone은 재사용하고 정상 Feature만 카테고리별 Memory Bank로 분리했습니다.\n신규 카테고리는 정상 이미지로 Memory Bank만 생성해 추가하도록 구성했습니다.",
            summaryEmphasis: ["카테고리별 Memory Bank로 분리"]
          },
          stageFlow: {
            title: "2. SPEED / PERFORMANCE 역할 분리",
            steps: [
              {
                type: "box2",
                primary: "속도형 SPEED",
                secondary: "빠른 1차 판정",
                note: { model: "WRN50 + PatchCore", reason: "처리 속도·GPU Memory 우선" }
              },
              { type: "queue", content: "재검토 큐" },
              {
                type: "box2",
                primary: "성능형 PERFORMANCE",
                secondary: "재검토·정밀 판정",
                note: { model: "DINOv2 + PatchCore", reason: "판정 성능·위치 설명력 우선" }
              }
            ],
            criteria: ["Image AUROC", "F1-score", "Throughput", "Peak GPU Memory", "PRO"],
            summary: "속도형 모델로 빠르게 1차 판정하고, 저신뢰·경계 구간 결과는 성능형 모델로 재검토·정밀 판정"
          },
          lightweightSection: {
            title: "3. Teacher–Student 경량화",
            summary: "기존 SPEED보다 효율적인 1차 판정 모델을 검토하기 위해 PERFORMANCE를 Teacher로 두고 Student를 학습했으며, 실제 운영 후보 평가는 기존 SPEED와 Student를 비교했습니다.",
            metrics: [
              { title: "Peak GPU Memory", beforeLabel: "SPEED", before: "89.8 MB", afterLabel: "Student", after: "84.2 MB", note: "약 6.2% 감소" },
              { title: "이미지 1장 평균 처리 시간", beforeLabel: "SPEED", before: "48.0 ms", afterLabel: "Student", after: "13.1 ms", note: "약 72.7% 단축" },
              { title: "Image AUROC", beforeLabel: "SPEED", before: "0.991", afterLabel: "Student", after: "0.995", note: "+0.4%p", scale: { min: 0.5, max: 1 } },
              { title: "F1-score", beforeLabel: "SPEED", before: "0.966", afterLabel: "Student", after: "0.959", note: "-0.7%p", scale: { min: 0.5, max: 1 } },
              { title: "PRO", beforeLabel: "SPEED", before: "0.779", afterLabel: "Student", after: "0.760", note: "-1.9%p", scale: { min: 0.5, max: 1 } }
            ],
            resultItems: [
              {
                text: "Memory Bank로 신규 카테고리 재학습 범위를 줄이고, SPEED/PERFORMANCE로 검사 비용을 분리했으며, Student는 기존 SPEED 대비 평균 처리시간 72.7% 단축·GPU Memory 6.2% 감소를 확인해 1차 판정 경량 후보로 선정했습니다.",
                emphasisPrimary: ["Memory Bank로 신규 카테고리 재학습 범위를 줄이고", "SPEED/PERFORMANCE로 검사 비용을 분리", "평균 처리시간 72.7% 단축·GPU Memory 6.2% 감소"],
                emphasisSecondary: ["1차 판정 경량 후보로 선정했습니다."]
              }
            ]
          }
        },
        additionalCards: [
          {
            id: "runtime-memory-bank-operations",
            kind: "industrial_runtime_alignment",
            title: "실험·서빙 추론 정합성 개선",
            problem:
              "PatchCore 모델을 서비스에 연결하는 과정에서 동일한 모델과 입력을 사용해도 실험 환경과 FastAPI 서버의 추론 결과가 달랐습니다. 실험에서는 Anomalib 기반 추론 경로를 사용했지만 서버에서는 별도 경로로 처리하고 있어 Anomaly Score와 판정 결과에 차이가 발생했습니다.",
            problemEmphasis: [
              "동일한 모델과 입력을 사용해도",
              "실험 환경과 FastAPI 서버의 추론 결과가 달랐습니다"
            ],
            decision:
              "모델 파일 자체보다 실험과 서버가 같은 추론 Runtime과 처리 기준을 사용하는지가 중요하다고 판단했습니다. FastAPI 서버도 Anomalib Runtime을 사용하도록 변경하고, 모델 로딩·전처리·Score/Anomaly Map 처리·Threshold 적용 경로를 실험 환경과 맞췄습니다.",
            decisionEmphasis: [
              "같은 추론 Runtime과 처리 기준",
              "FastAPI 서버도 Anomalib Runtime을 사용",
              "모델 로딩·전처리·Score/Anomaly Map 처리·Threshold 적용 경로"
            ],
            runtimeAlignment: {
              title: "01. 실험·서버 추론 Runtime 정렬",
              image: "/assets/projects/Model-Serving.png",
              imageAlt: "실험과 서버의 Anomalib Runtime 정렬 Before / After 다이어그램",
              summary: "실험과 서버의 Anomalib 추론 경로를 통일해 동일한 모델 로딩·전처리·후처리·Threshold 기준으로 실행되도록 정리했습니다.",
              summaryEmphasis: ["Anomalib 추론 경로를 통일", "동일한 모델 로딩·전처리·후처리·Threshold 기준"]
            },
            inferenceCriteria: {
              title: "02. 추론 실행 기준 정렬",
              items: [
                { title: "Model Loading", description: "실험과 서버에서 동일한 모델 Artifact와 Loader 기준 사용" },
                { title: "Input Processing", description: "입력 크기와 전처리 기준을 실험 환경과 동일하게 적용" },
                { title: "Inference Output", description: "Anomaly Score와 Anomaly Map을 동일한 Runtime 경로에서 생성" },
                { title: "Decision", description: "동일한 Threshold 기준으로 최종 판정" }
              ]
            },
            result:
              "실험과 서비스 환경의 Anomalib 추론 Runtime과 처리 기준을 일치시켜, 동일한 모델과 입력이 환경에 따라 다르게 처리되는 문제를 줄였습니다. 이를 통해 실험 결과를 서비스 추론 경로에서도 일관된 기준으로 재현할 수 있도록 정리했습니다.",
            resultEmphasis: ["Anomalib 추론 Runtime과 처리 기준을 일치시켜", "일관된 기준으로 재현"]
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
    summary: "드론 RGB·Thermal 이미지로 태양광 패널의 이상 후보를 탐지하고, 분석 결과와 조치 이력을 관리하는 플랫폼",
    homeSummary: "드론 RGB·열화상 이미지에서 태양광 패널 이상 후보를 탐지하고 후속 조치를 지원하는 플랫폼",
    description:
      "드론 RGB·Thermal 이미지에서 태양광 패널의 이상 후보를 탐지하고,\nBounding Box·Heatmap 등으로 결과를 시각화해 청소·재촬영·현장 점검·교체 검토 우선순위를 제공하며 분석 결과와 조치 이력을 관리하는 플랫폼입니다.",
    descriptionEmphasis: [
      "드론 RGB·Thermal 이미지에서 태양광 패널의 이상 후보를 탐지",
      "청소·재촬영·현장 점검·교체 검토 우선순위",
      "SQS 기반 비동기 분석",
      "ONNX Runtime CPU 추론",
      "AWS·K3s 환경"
    ],
    meta: [
      "2026.05.26 ~ 2026.07.05",
      "2인 팀 프로젝트",
      "월 운영비 $107.31"
    ],
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
        "ONNX Runtime",
        "YOLO26",
        "OpenCV",
        "AWS S3",
        "AWS SQS",
        "Docker",
        "K3s",
        "Jenkins",
        "AWS ECR",
        "Traefik"
      ],
    githubUrl: pvRepo,
    pptUrl: "https://drive.google.com/file/d/1aGiUSR2hrWWxOQss0XEdZAJtKm6wi4x0/view?usp=sharing",
    demoUrl: "",
    highlights: [
      "Spring Security OAuth2 기반 로그인·사용자 권한 검증",
      "발전소별 담당 데이터 접근 범위 검증",
      "SQS at-least-once 전제의 분석 Job 상태 안정화",
      "Thermal 모델 실험과 AWS·K3s 운영 배포 수행"
    ],
    heroHighlights: [
      {
        title: "SQS 분석 Job 안정화",
        description: "Active Job 중복 차단 · 상태 전이 · 재처리 정책"
      },
      {
        title: "CPU ONNX Worker",
        description: "Thermal ONNX 추론 · CPU 확장 적용"
      },
      {
        title: "AWS·K3s 운영 검증",
        description: "Jenkins·ECR·K3s 배포 + Worker 확장 실험"
      }
    ],
    sections: [
      {
        id: "role",
        title: "내 역할과 핵심 기여",
        type: "contribution_cards",
        layout: "role_rows",
        cards: [
          {
            id: "service-backend",
            title: "서비스·백엔드",
            items: [
              "사용자·권한·대시보드·관리자 기능 구현",
              "발전소 도메인과 이미지 분석·결과 조회 기능 구현",
              "SQS 기반 비동기 분석 처리의 중복 실행·재처리·결과 저장 흐름 안정화",
            ],
            emphasisIndex: 2
          },
          {
            id: "infrastructure-operations",
            title: "인프라·운영",
            items: [
              "AWS RDS·S3·SQS·EC2·K3s 운영환경 구성",
              "Traefik·HTTPS 기반 외부 라우팅 구성",
              "Jenkins 기반 테스트·빌드 → ECR Push → K3s Rollout 자동화",
              "운영 예산을 기준으로 서버 구성과 Worker 확장 방식 검증",
            ],
            emphasisIndex: 2
          },
          {
            id: "ai-pipeline",
            title: "AI 모델·분석 파이프라인",
            items: [
              "Thermal 데이터 검수 및 Stratified 3-Fold 기반 모델 실험",
              "Oversampling·증강·전처리와 Confidence/IoU 조건 비교",
              "ONNX 변환 및 ONNX Runtime CPU Worker 적용"
            ],
            emphasisIndex: 2
          }
        ]
      },
      {
        id: "architecture",
        title: "시스템 아키텍처",
        eyebrow: "ARCHITECTURE & CI·CD Pipeline",
        type: "architecture_overview",
        overviewCards: [
          {
            title: "요청·분석 흐름",
            flow: "Browser → Traefik → React → Spring Boot → SQS → AI Worker",
            description: "React 요청은 Spring Boot API를 거쳐 분석 Job으로 등록되고, SQS를 통해 AI Worker로 전달됩니다."
          },
          {
            title: "데이터 저장 구조",
            flow: "RDS PostgreSQL · S3",
            description: "서비스 및 분석 메타데이터는 RDS PostgreSQL, 원본·결과 이미지는 S3에 저장합니다."
          },
          {
            title: "배포 자동화",
            flow: "Jenkins → ECR → K3s Rollout",
            description: "Jenkins에서 이미지를 빌드·푸시하고, K3s 환경에서 ECR 이미지를 Rollout 배포합니다."
          }
        ],
        images: [
          {
            src: "/assets/projects/pv-insight-architecture.png",
            alt: "PV-Insight 시스템 아키텍처 다이어그램",
            label: "아키텍처",
            legend: "요청·분석 Spring Boot → SQS → AI Worker　│　데이터 RDS PostgreSQL · S3　│　배포 Jenkins → ECR → K3s"
          },
          {
            src: "/assets/projects/CICD-result.png",
            alt: "PV-Insight CI·CD Pipeline 결과 화면",
            label: "CI·CD Pipeline",
            legend: "CI/CD GitHub main → Jenkins　│　Test / Build → Docker Image　│　ECR Push → EC2·K3s Rollout"
          }
        ],
        renderInDetail: true
      },
      {
        id: "troubleshooting",
        title: "핵심 문제 해결",
        type: "problem_solution",
        eyebrow: "ENGINEERING DECISIONS",
        cardOrder: ["worker-scaling-strategy", "sqs-job-state-consistency", "thermal-model-experiments"],
        card: {
          id: "sqs-job-state-consistency",
          title: "SQS 비동기 분석의 멱등성과 상태 정합성",
          problem:
            "연속·동시 요청으로 동일 이미지의 중복 Job이 생성될 수 있고, SQS 메시지 재전달로 동일 Job이 반복 실행될 수 있으며, 분석 결과와 Job 완료 상태가 서로 어긋날 수 있었습니다.",
          problemEmphasis: ["중복 Job이 생성될 수 있고", "분석 결과와 Job 완료 상태가 서로 어긋날 수 있었습니다."],
          solution:
            "생성 단계는 DB 제약, 실행 단계는 조건부 상태 갱신, 완료 단계는 단일 DB 트랜잭션으로 나눠 중복 실행과 상태 불일치를 단계별로 제어하도록 설계했습니다.",
          solutionEmphasis: [
            "DB 제약",
            "조건부 상태 갱신",
            "단일 DB 트랜잭션"
          ],
          expandable: true,
          flowCode: `# 1. 동일 이미지에 진행 중인 분석 작업은 1개만 허용
DB 제약(Partial Unique Index)으로 동시 요청의 경쟁 조건 차단

# 2. 처리 대기 중인 작업만 Worker가 선점
조건부 갱신으로 작업을 원자적으로 선점
이미 선점된 작업은 재실행하지 않음

# 3. 결과 저장과 처리 완료를 한 Transaction으로 처리
분석 결과·결함 저장과 처리 완료 기록을 하나의 트랜잭션으로 처리

# 4. 처리 결과에 따라 메시지 삭제 / 재수신
재시도 불필요 상태는 메시지 삭제
재시도 가능 상태는 메시지를 유지해 재수신`,
          result:
            "DB 제약과 조건부 상태 갱신으로 분석 Job 생성·실행 경로의 멱등성을 확보하고, 분석 결과 저장과 Job 완료 상태 변경을 하나의 트랜잭션으로 처리해 실패·재처리 상황에서도 결과와 Job 상태의 정합성을 유지했습니다.",
          resultEmphasis: ["분석 Job 생성·실행 경로의 멱등성", "하나의 트랜잭션", "결과와 Job 상태의 정합성"],
          evidence: [
            {
              title: "Active Job DB 제약",
              url: "https://github.com/solar-ai-dev/pv-fusion/blob/de4e810faa34021c2d3c257ddd1c6cd590f0692a/backend/src/main/resources/db/migration/V8__add_unique_active_analysis_job_per_image.sql#L1-L3"
            },
            {
              title: "Job 처리 흐름",
              url: "https://github.com/solar-ai-dev/pv-fusion/blob/378b524e2dae099ba60d1f228e1d108c915b7262/ai-worker/app/application/analysis_job_processor.py#L59-L225"
            },
            {
              title: "조건부 상태 전이",
              url: "https://github.com/solar-ai-dev/pv-fusion/blob/378b524e2dae099ba60d1f228e1d108c915b7262/ai-worker/app/infrastructure/db/analysis_job_repository.py#L53-L117"
            },
            {
              title: "완료 Transaction",
              url: "https://github.com/solar-ai-dev/pv-fusion/blob/378f8892e9694d760d37a7058b9e57c697f12179/ai-worker/app/infrastructure/db/result_repository.py#L133-L220"
            },
            {
              title: "SQS ACK / Retry",
              url: "https://github.com/solar-ai-dev/pv-fusion/blob/378b524e2dae099ba60d1f228e1d108c915b7262/ai-worker/app/workers/sqs_worker.py#L104-L129"
            }
          ]
        },
        additionalCards: [
          {
            id: "worker-scaling-strategy",
            kind: "worker_scaling",
            title: "CPU 추론 확장 전략 검증",
            problem: "월 약 $107 규모의 MVP 운영 예산 안에서 EC2 t3.large 기반 CPU Worker로 AI 분석 Job을 처리해야 했습니다.\n분석 요청이 한 번에 많이 들어오면 SQS 작업 큐가 쌓이면서 전체 처리 완료까지 시간이 길어지는 문제가 있었습니다.",
            problemHighlights: ["$107 규모의 MVP 운영 예산", "SQS 작업 큐가 쌓이면서 전체 처리 완료까지 시간이 길어지는 문제"],
            decision: "추가 인프라 비용을 바로 늘리기보다 먼저 동일 Node에서 Worker 수를 늘려 병렬 처리 효과를 확인하기로 했습니다.\nWorker 증설만으로 충분하지 않을 경우에는 EC2 Node를 추가해 Worker를 분산하는 수평 확장 방식까지 비교해, 비용 대비 효과가 높은 확장 전략을 결정하기로 했습니다.",
            decisionHighlights: ["먼저 동일 Node에서 Worker 수를 늘려 병렬 처리 효과를 확인", "EC2 Node를 추가해 Worker를 분산하는 수평 확장 방식", "비용 대비 효과가 높은 확장 전략"],
            comparisonTitle: "실험 — Worker 증설 후 Node 분산 비교",
            comparisonHeaders: ["구성", "RGB 처리시간", "RGB 처리량", "Thermal 처리시간", "Thermal 처리량"],
            comparisonStages: [
              {
                title: "1차 — 동일 Node에서 Worker 증설",
                rows: [
                  ["1 EC2 / 1 Worker", "271.40s", "0.368 jobs/s", "80.19s", "1.247 jobs/s"],
                  ["1 EC2 / 2 Workers", "251.35s", "0.398 jobs/s", "65.43s", "1.528 jobs/s"]
                ],
                statuses: { "1 EC2 / 1 Worker": "Baseline" },
                description: "같은 Node에서 Worker를 1 → 2로 늘렸을 때 RGB 처리량은 8.2% 증가하는 데 그쳤고, 평균 추론시간은 2.45s → 4.60s, Node CPU Peak는 99%까지 상승했습니다.",
                descriptionHighlights: ["8.2% 증가", "99%"]
              },
              {
                title: "2차 — Worker를 Node별로 분산",
                rows: [
                  ["1 EC2 / 2 Workers", "251.35s", "0.398 jobs/s", "65.43s", "1.528 jobs/s"],
                  ["2 EC2 / 2 Workers", "127.19s", "0.786 jobs/s", "39.21s", "2.550 jobs/s"]
                ],
                statuses: { "2 EC2 / 2 Workers": "Selected" },
                description: "2개 Worker를 한 Node에 두는 대신 2개 Node에 분산하자 RGB·Thermal 모두 처리시간과 처리량이 크게 개선되었습니다.",
                descriptionHighlights: ["2개 Node에 분산하자 RGB·Thermal 모두 처리시간과 처리량이 크게 개선"]
              }
            ],
            summaryLabel: "성과",
            summaryMetricLines: [
              ["RGB 처리시간", "271.4s → 127.2s", "(-53.1%)"],
              ["RGB 처리량", "0.368 → 0.786 jobs/s", "(+113.6%)"],
              ["Thermal 처리시간", "80.2s → 39.2s", "(-51.1%)"],
              ["Thermal 처리량", "1.247 → 2.550 jobs/s", "(+104.5%)"]
            ],
            summaryTrailing: "동일 Node의 Worker 증설보다 Node를 추가해 Worker를 분산하는 방식이 CPU 추론 확장에 효과적임을 확인하고, Node 수평 확장을 우선 확장 전략으로 결정했습니다.",
            summaryTrailingEmphasis: ["Node를 추가해 Worker를 분산하는 방식이 CPU 추론 확장에 효과적임을 확인", "Node 수평 확장을 우선 확장 전략으로 결정했습니다."],
            sourceUrl: "https://github.com/solar-ai-dev/pv-fusion/tree/develop/docs/benchmarks/worker-scaling"
          },
          {
            id: "thermal-model-experiments",
            kind: "thermal_experiment",
            title: "Thermal 데이터 재정의와 단계별 실험",
            dataCards: [
              ["약 7,500장", "Raw + Augmentation 혼재", "", ""],
              ["약 1,250장", "Raw-only 분리", "", ""],
              ["약 850장", "Drone-view 선별", "", "teal"]
            ],
            dataSummary: "증강본을 분리하고 실제 서비스 입력과 유사한 Drone-view 이미지를 선별해 실험 데이터를 재구성",
            augmentationStages: [
              {
                step: "01",
                title: "Oversampling",
                metric: "F1 mean",
                before: "60.27%",
                after: "65.70%",
                delta: "+5.43%p"
              },
              {
                step: "02",
                title: "Rotation",
                metric: "mAP@0.5",
                before: "63.37%",
                after: "69.00%",
                delta: "+5.63%p"
              },
              {
                step: "03",
                title: "Flip",
                metric: "mAP@0.5",
                before: "69.00%",
                after: "70.49%",
                delta: "+1.49%p"
              },
              {
                step: "04",
                title: "Scale / Translate",
                metric: "mAP@0.5",
                before: "70.49%",
                after: "74.77%",
                delta: "+4.28%p"
              }
            ],
            classGroups: [
              ["HotSpot", "MultiHotSpot", "SingleHotSpot"],
              ["Diode_ByPassed", "MultiByPassed", "MultiDiode", "SingleByPassed", "SingleDiode"],
              ["String_Fault", "StringOpenCircuit", "StringReversedPolarity"]
            ],
            preprocess: [
              { id: "RAW", title: "RAW", note: "전처리 없는 원본", src: "/assets/projects/LAW.png" },
              { id: "DUAL_EDGE", title: "Dual Edge", note: "Edge 강조", src: "/assets/projects/DUAL_EDGE.png" },
              { id: "MEDIAN_SHIFT", title: "Median Shift", note: "분포 변환", src: "/assets/projects/MEDIAN_SHIFT.png" },
              { id: "NLM_WEAK", title: "NLM Weak", note: "Noise 제거", src: "/assets/projects/NLM_WEAK.png" },
              { id: "GUIDED_FILTER_WEAK", title: "Guided Filter", note: "Edge 보존 평활화", src: "/assets/projects/GUIDED_FILTER_WEAK.png" },
              { id: "LOWCUT_P15", title: "LOWCUT-P15", note: "밝기 하단 조정", src: "/assets/projects/LOWCUT_P15.png" }
            ],
            preprocessConclusion: "모든 전처리 후보가 RAW F1 77.16%를 넘지 못해 추가 전처리를 적용하지 않고 RAW 유지",
            finalDecision: "3개 Class 모두 목표 기준(F1 ≥85%, mAP@0.5 ≥80%) 충족 · Confidence 0.55 / IoU 0.45 확정",
            finalDecisionEmphasis: []
          }
        ]
      }
    ]
  },
  {
    slug: "mcp-api-agent",
    title: "MCP 기반 업무 자동화 Agent",
    detailPath: "/projects/mcp-api-agent",
    status: "completed",
    statusLabel: "완료",
    videoUrl: "/assets/projects/mcp-work-agent.mp4",
    videoPoster: "/assets/projects/MCP-API-Work-Agent-thumbnail.png",
    image: "/assets/projects/MCP-API-Work-Agent-thumbnail.png",
    imageFit: "cover",
    summary: "MCP와 외부 API를 통해 외부 시스템 정보를 조회하고 승인된 작업만 실행·검증하는 업무 Agent",
    homeSummary: "MCP 기반으로 다양한 외부 업무 시스템의 CRUD를 수행하는 업무 Agent 서비스",
    description:
      "MCP 기반으로 외부 업무 시스템의 READ / WRITE를 수행하는 업무 자동화 Agent입니다. 역할별 Multi-Agent로 판단 책임을 분리하고, 상태 기반 조건부 라우팅으로 실행 흐름을 제어했습니다. 외부 상태 변경은 Policy·Schema 검증과 사용자 승인 후 실행하고, 재조회로 결과를 검증하도록 설계했습니다.",
    descriptionEmphasis: [
      "READ / WRITE를 수행하는 업무 자동화 Agent",
      "역할별 Multi-Agent로 판단 책임을 분리",
      "상태 기반 조건부 라우팅",
      "Policy·Schema 검증과 사용자 승인",
      "재조회로 결과를 검증"
    ],
    meta: [
      "2026.08.05 ~ 진행중",
      "2인 팀 프로젝트"
    ],
    tags: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangSmith",
      "MCP",
      "Pydantic",
      "SQLAlchemy",
      "SQLite",
      "OAuth 2.0",
      "Gemini API",
      "Ollama"
    ],
    connectors: [
      "Gmail API",
      "Google Tasks API",
      "Google Calendar API",
      "GitHub API"
    ],
    githubUrl: "https://github.com/solar-ai-dev/mcp-work-agent",
    actionItems: [
      { key: "github", label: "GitHub", href: "https://github.com/solar-ai-dev/mcp-work-agent" }
    ],
    highlights: [
      "LangGraph 기반 판단·승인·실행 워크플로우 구현",
      "MCP·외부 API 연동으로 외부 시스템 조회·실행 처리",
      "정책·승인 단계와 실행 단계 책임 분리 설계",
      "실행 결과 검증 및 상태 전이 관리"
    ],
    sections: [
      {
        id: "role",
        title: "내 역할과 핵심 기여",
        type: "contribution_cards",
        layout: "role_rows",
        cards: [
          {
            id: "agent-architecture-workflow",
            title: "Agent 워크플로우 설계",
            emphasizeAll: true,
            items: [
              {
                text: "9B Local LLM의 판단 부담을 줄이기 위해 요청 이해·도구 선택·검색·분석·계획·검토 6개 역할로 분리"
              },
              {
                text: "Agent 결과를 Typed State에 반영하고 Supervisor가 상태에 따라 다음 단계·완료 여부를 재판단"
              },
              {
                text: "외부 조회·사용자 응답에 따라 재분기할 수 있도록 DAG가 아닌 State 기반 순환형 흐름으로 구성"
              }
            ],
            agentDetails: [
              {
                title: "요청 분석 Agent",
                description: "사용자 요청을 업무 단위로 분해하고 목표·대상·조건·제약을 State에 구조화"
              },
              {
                title: "도구 선택 Agent",
                description: "업무별 사용할 도구와 데이터를 결정"
              },
              {
                title: "컨텍스트 탐색 Agent",
                description: "구조화 Query로 Retrieval을 수행하고 필요한 근거만 선별"
              },
              {
                title: "업무 분석 Agent",
                description: "요청과 Context를 분석해 사실·관계·시간 조건·정보 부족·충돌 여부를 판단"
              },
              {
                title: "Planning Agent",
                description: "분석 결과를 바탕으로 답변을 만들거나, 실제 실행할 작업과 필요한 값을 계획"
              },
              {
                title: "검토 Agent",
                description: "만든 계획이 사용자 요청과 근거에 맞는지 다시 확인하고, 문제가 있으면 검색·계획·사용자 확인 단계로 되돌림"
              }
            ]
          },
          {
            id: "local-llm-quality-improvement",
            title: "Local LLM 판단 품질 보완",
            emphasizeAll: true,
            items: [
              {
                text: "Smoke 6/6 PASS를 기준으로 Validation 60·Stress 20·Holdout 12, 총 92개 평가셋으로 검증 범위 확대"
              },
              {
                text: "LangSmith Trace로 최초 오판 Node를 추적하고 Prompt·State·Schema·Validator·Model Setting으로 수정 책임 분리"
              }
            ]
          }
        ]
      },
      {
        id: "architecture",
        title: "시스템 아키텍처 & LangGraph 워크플로우",
        eyebrow: "LANGGRAPH",
        type: "architecture_overview",
        images: [
          {
            src: "/assets/projects/MCP-API-Work-Agent-acchitecture.png",
            alt: "MCP·API 기반 업무 Agent LangGraph 워크플로우 다이어그램",
            label: "LangGraph 워크플로우"
          }
        ],
        legend: null,
        renderInDetail: true
      },
      {
        id: "actual-use-cases",
        title: "ACTUAL USE CASES",
        eyebrow: "ACTUAL USE CASES",
        type: "use_case_carousel",
        description: "Production E2E 6개 Smoke로 검증한 Agent의 대표 업무 처리 시나리오",
        cases: [
          {
            id: "schedule-without-target",
            badge: "대상 없는 일정",
            title: "대상 미지정 일정 요청",
            dataSubtitle: "대상 미지정 요청 → 사용자 재질문 → WAITING_CONFIRMATION",
            description: "대상이 빠진 일정 요청을 임의로 조회하지 않고, 사용자에게 필요한 정보를 다시 질문한 사례입니다.",
            request: "그 일정 언제야?",
            dataTitle: "대상 미지정 일정 요청",
            dataContent: "“그 일정 언제야?” → 원하는 일정을 구체적으로 알려 달라는 확인 질문",
            verification: "target_resource 누락 · 외부 조회 0회 · WAITING_CONFIRMATION",
            screenshot: "/assets/projects/대상없는일정.png",
            screenshotAlt: "대상이 없는 일정 요청에 추가 정보를 요청하는 Agent 실행 화면",
            agentFlow: ["요청 분석"],
            agentCount: "1 / 6",
            agentCountLabel: "1 / 6 Agent · 1회 경유",
            keyOutputAgent: "요청 분석",
            keyOutput: "target_resource 누락 감지 → 추가 정보 요청 → WAITING_CONFIRMATION",
            traceUrl: "https://smith.langchain.com/public/b7d05fe4-04e1-4dcc-8c87-cc961e7f42b1/r",
            traceId: "01a0a13b-3847-7ec1-b7ae-e0ef88b1d591",
            agentOutputs: [
              ["요청 분석", "일정 대상이 특정되지 않아 확인 질문을 생성하고 실행을 중단"]
            ],
            tools: [],
            detail: "대상 단서가 없는 일정 요청을 임의의 Calendar Event에 연결하지 않고, 사용자가 대상을 구체화할 때까지 안전하게 대기하는 흐름을 검증했습니다.",
            outcome: "사용자 재질문 표시 · WAITING_CONFIRMATION · 외부 조회 없음",
          },
          {
            id: "selected-resource",
            badge: "선택 리소스",
            title: "선택한 일정 Context를 유지해 정확한 대상 조회",
            dataSubtitle: "프로젝트 검토 회의 · 2026-08-18 10:00~11:00",
            description: "사용자가 선택한 일정을 다른 일정과 혼동하지 않고 유지해, 프로젝트 검토 회의의 정확한 시간을 조회한 사례입니다.",
            request: "그 일정 언제야?",
            dataTitle: "프로젝트 검토 회의",
            dataContent: "2026년 8월 18일 오전 10:00~11:00 · Asia/Seoul",
            verification: "선택 Resource: 프로젝트 검토 회의 · 2026-08-18 10:00~11:00 · Asia/Seoul",
            screenshot: "/assets/projects/선택리소스.png",
            screenshotAlt: "선택한 일정 Context를 유지하는 Agent 실행 화면",
            agentFlow: ["요청 분석", "자료 경로 선택", "자료 검색", "계획 생성"],
            agentCount: "4 / 6",
            agentCountLabel: "4 / 6 Agent · 4회 경유",
            keyOutputAgent: "자료 검색",
            keyOutput: "선택 Resource identity 유지 → 해당 Calendar Event 조회",
            keyOutputNote: "2026-08-18 10:00~11:00 · Asia/Seoul",
            traceUrl: "https://smith.langchain.com/public/0ca002ce-bcaa-48ab-8667-e64c5cdf7f9f/r/01a09cea-39e2-7082-b3f2-045e306860a7?start_time=2026-09-13T22%3A36%3A31.073512Z",
            traceId: "01a09cea-39e2-7082-b3f2-045e306860a7",
            agentOutputs: [
              ["요청 분석", "선택된 Resource identity를 요청 Context로 유지"],
              ["자료 경로 선택", "선택 Event READ 경로 사용"],
              ["자료 검색", "선택 Resource의 최신 내용을 재조회"],
              ["계획 생성", "선택한 일정만 근거로 최종 응답 작성"]
            ],
            tools: ["calendar_get_event"],
            detail: "사용자가 선택한 Resource는 단순 UI Context가 아니라 후속 Agent가 재사용하는 identity로 유지되며, 대상 혼동 없이 동일 Resource를 조회하는지를 검증했습니다.",
            outcome: "선택 Resource identity 유지 · 정확한 대상 응답",
          },
          {
            id: "new-mail-draft",
            badge: "메일 신규 작성",
            title: "할 일·일정을 확인해 Gmail 초안 작성",
            dataSubtitle: "[Atlas 준비 상황] 할 일 및 일정 안내 Draft Preview",
            description: "Google Tasks와 Calendar에서 필요한 정보를 확인해 Gmail 초안을 만들고, 실제 저장이나 전송 전에 사용자 승인을 요청한 사례입니다.",
            request: "Atlas 할 일과 인쇄소 일정 보고 qhdrbdhkdwks@naver.com에 준비 상황을 알릴 메일을 Gmail 임시보관함에 저장해줘. 보내지는 마.",
            dataTitle: "[Atlas 준비 상황] 할 일 및 일정 안내",
            dataContent: "Atlas 할 일·인쇄소 일정 기반 Gmail Draft Preview · 승인 전 저장·전송 없음",
            screenshot: "/assets/projects/메일신규작성.png",
            screenshotAlt: "Gmail 초안 생성 승인을 보여 주는 Agent 실행 화면",
            agentFlow: ["요청 분석", "자료 경로 선택", "자료 검색", "계획 생성", "계획 검토"],
            agentCount: "5 / 6",
            agentCountLabel: "5 / 6 Agent · 5회 경유",
            keyOutputAgent: "계획 생성",
            keyOutput: "Atlas Tasks·Calendar 근거 → Gmail Draft Preview 생성 → WAITING_APPROVAL",
            keyOutputNote: "실제 전송 없음",
            traceUrl: "https://smith.langchain.com/public/788deade-d1b0-4a90-9564-594bfd035fd8/r/01a09cea-c73c-7921-b9cd-455d68fdfaa8?start_time=2026-09-13T22%3A37%3A07.260078Z",
            traceId: "01a09cea-c73c-7921-b9cd-455d68fdfaa8",
            agentOutputs: [
              ["요청 분석", "Tasks·Calendar 조회와 Gmail Draft CREATE 요구, SEND 금지 조건을 구조화"],
              ["자료 경로 선택", "Tasks·Calendar 조회 경로와 Gmail Draft CREATE 실행안을 분리"],
              ["자료 검색", "Atlas 할 일 상태와 인쇄소 일정을 근거로 확보"],
              ["계획 생성", "수신자·제목·본문을 포함한 Draft CREATE Preview 구성"],
              ["계획 검토", "근거·실행 범위·SEND 금지 조건을 검토"]
            ],
            tools: ["tasks_list_tasks", "calendar_list_events"],
            detail: "Tasks와 Calendar를 조회해 실제 업무 상태를 Draft에 반영하고, WRITE 실행안을 생성한 뒤 Review를 통과해야 사용자 승인 단계로 이동하도록 구성했습니다.",
            outcome: "Draft Preview 생성 · WAITING_APPROVAL · 승인 전 WRITE / SEND = 0",
          },
          {
            id: "multi-search",
            badge: "다건 검색",
            title: "Juniper 관련 메일 제목 26건 전체 조회",
            dataSubtitle: "Juniper 관련 메일 제목 26건 전체 회수",
            description: "검색 첫 페이지에서 끝내지 않고 다음 결과까지 이어서 조회해, Juniper 관련 메일 제목 26건을 모두 수집한 사례입니다.",
            request: "Juniper 단말 교체 준비 메일 제목들 전부 모아줘.",
            dataTitle: "Juniper 단말 교체 준비 관련 Gmail",
            dataContent: "Pagination을 끝까지 수행해 관련 메일 제목 26건 전체 회수",
            screenshot: "/assets/projects/다건검색.png",
            screenshotAlt: "Juniper 관련 메일을 다건 검색하는 Agent 실행 화면",
            agentFlow: ["요청 분석", "자료 경로 선택", "자료 검색 ×2", "계획 생성"],
            agentCount: "4 / 6",
            agentCountLabel: "4 / 6 Agent · 자료 검색 2회",
            keyOutputAgent: "자료 검색",
            keyOutput: "Pagination 반복 조회 → Juniper Gmail 제목 26 / 26건 수집",
            traceUrl: "https://smith.langchain.com/public/65facd3e-6c0b-4242-a24f-a3e55fd8138d/r/01a09ceb-b6e6-73c0-8b7b-bd88f63048f0?start_time=2026-09-13T22%3A38%3A08.613879Z",
            traceId: "01a09ceb-b6e6-73c0-8b7b-bd88f63048f0",
            agentOutputs: [
              ["요청 분석", "특정 한 건이 아닌 전체 Collection 조회 요청으로 판단"],
              ["자료 경로 선택", "Gmail Thread 검색 경로 선택"],
              ["자료 검색 · 1차", "첫 검색 결과를 정리하고 다음 페이지 존재 여부 확인"],
              ["자료 검색 · 2차", "다음 페이지를 이어서 조회해 전체 범위 완료 여부 확인"],
              ["계획 생성", "수집한 제목 전체를 사용자 응답으로 정리"]
            ],
            tools: ["gmail_search_threads"],
            detail: "ALL_ITEMS 요청으로 판단하고 Pagination을 완료할 때까지 조회해 독립 Thread 26건을 모두 회수하는지를 검증했습니다.",
            outcome: "26 / 26 전체 회수 · COMPLETED / SUCCESS",
          },
          {
            id: "complex-retrieval",
            badge: "복합 Retrieval",
            title: "여러 메일을 비교해 최종 출고일·담당자 판별",
            dataSubtitle: "후보 10건 비교 → [Atlas] 출고 일정 확정 → 8월 19일 오전 · 담당 지민",
            description: "관련 메일 후보와 상세 내용을 반복해서 비교해, 최종 출고일과 담당자가 명시된 최신 확정 메일을 찾아낸 사례입니다.",
            request: "메일에 나온 Atlas 물건이 언제 나가는지 최종 기준과 담당 확인해줘.",
            dataTitle: "[Atlas] 출고 일정 확정",
            dataContent: "후보 근거 10건과 상세 메일을 비교해 출고일 8월 19일 오전·담당자 지민 도출",
            screenshot: "/assets/projects/복합 Retrieval.png",
            screenshotAlt: "여러 메일 근거를 조회한 Agent 실행 화면",
            agentFlow: ["요청 분석", "자료 경로 선택", "자료 검색 ×13", "계획 생성"],
            agentCount: "4 / 6",
            agentCountLabel: "4 / 6 Agent · 자료 검색 13회",
            keyOutputAgent: "자료 검색",
            keyOutput: "후보 근거 10건 비교 → 최종 확정 근거 선택 → 8월 19일 오전 · 담당 지민",
            traceUrl: "https://smith.langchain.com/public/c187e6b8-a929-4771-a541-7e892b531995/r/01a09ced-a734-77c2-bd7b-adbace131eec?start_time=2026-09-13T22%3A40%3A15.665318Z",
            traceId: "01a09ced-a734-77c2-bd7b-adbace131eec",
            agentOutputs: [
              ["요청 분석", "Atlas 최종 출고 기준과 담당자 확인을 Gmail READ 요청으로 구조화"],
              ["자료 경로 선택", "Gmail Thread 검색·상세 조회 경로 확정"],
              ["자료 검색", "후보 검색 → 상세 조회 → 최신 확정 근거 선택"],
              ["계획 생성", "선택된 최신 근거를 기반으로 최종 답변 작성"]
            ],
            tools: ["gmail_search_threads", "gmail_get_thread"],
            detail: "단일 검색 결과를 바로 답으로 사용하지 않고, 여러 후보를 조회한 뒤 상세 내용을 비교해 최종 확정 근거까지 도달하는 Retrieval 흐름을 검증했습니다.",
            outcome: "출고일: 8월 19일 오전 · 담당자: 지민",
          },
          {
            id: "update-existing-draft",
            badge: "기존 초안 수정",
            title: "기존 Gmail Draft의 지정 내용만 수정 후 재조회 검증",
            dataSubtitle: "Quartz 납품 회신 검토에 지정 문장 1회 추가 · 재조회 검증",
            description: "기존 Gmail 초안의 제목·수신자·본문을 유지하면서 지정된 문장만 추가하고, 수정 결과를 Gmail에서 다시 확인한 사례입니다.",
            request: "임시보관함의 “Quartz 납품 회신 검토” 초안 끝에 “8월 21일 입고 준비를 확인 중입니다.”만 추가해줘. 보내지는 마.",
            dataTitle: "Quartz 납품 회신 검토",
            dataContent: "기존 초안 끝에 지정 문장을 1회 추가하고 SEND 없이 Provider 재조회 검증",
            screenshot: "/assets/projects/초안수정.png",
            screenshotAlt: "기존 Gmail 초안을 수정하는 Agent 실행 화면",
            agentFlow: ["요청 분석", "자료 경로 선택", "자료 검색", "계획 생성", "계획 검토", "사용자 승인", "작업 실행", "결과 검증"],
            agentCount: "5 / 6",
            agentCountLabel: "5 / 6 Agent · 실행·검증 포함 7단계",
            keyOutputAgent: "계획 생성",
            keyOutput: "기존 Draft 보존 → 지정 문장만 추가하는 UPDATE 실행안 생성",
            keyOutputNote: "승인 후 UPDATE → 재조회 VERIFIED",
            traceUrl: "https://smith.langchain.com/public/4d26d569-500b-46e9-8f66-7b17dc3c6ba9/r",
            traceId: "01a095d1-5613-7a92-a40b-f395212cfa15",
            agentOutputs: [
              ["요청 분석", "기존 Draft UPDATE 요청과 exact append 문장, SEND 금지 조건을 유지"],
              ["자료 경로 선택", "기존 Gmail Draft READ와 Draft UPDATE 실행안을 분리"],
              ["자료 검색", "기존 제목·수신자·본문·Thread를 확인"],
              ["계획 생성", "지정 문장만 추가하는 UPDATE Preview 생성"],
              ["계획 검토", "원문 보존 조건·SEND 금지·수정 범위를 검토"],
              ["작업 실행", "사용자 승인 후 Gmail Draft UPDATE 수행"],
              ["결과 검증", "Provider 재조회 결과를 승인 Snapshot과 비교해 VERIFIED 판정"]
            ],
            tools: ["gmail_search_drafts", "gmail_get_draft", "gmail_update_draft"],
            detail: "승인 후에는 Agent Flow와 분리된 Deterministic WRITE Pipeline에서 Preflight, Draft UPDATE, Provider 재조회, 승인 Snapshot 비교를 수행합니다.",
            writePipeline: ["WAITING_APPROVAL", "사용자 승인", "Preflight", "Gmail Draft UPDATE", "Provider 재조회", "승인 Snapshot 비교", "VERIFIED"],
            outcome: "기존 Draft UPDATE 완료 · 지정 문장만 추가 · SEND 없음 · Google 재조회 검증 완료",
          }
        ]
      },
      {
        id: "engineering-decisions",
        title: "ENGINEERING DECISIONS",
        eyebrow: "ENGINEERING DECISIONS",
        type: "mcp_engineering_decisions",
        tabs: [
          {
            id: "local-llm-quality",
            title: "Local LLM 품질 검증",
            problem:
              "9B급 Local LLM으로 복합 요청을 안정적으로 처리하기 위해 판단을 요청 이해·도구 선택·검색·분석·계획·검토의 6개 역할로 분리했습니다.\n그러나 단계를 세분화하면서 참고할 정보와 실행 대상을 혼동하거나, 불필요한 Tool을 선택하고, 검색 조건을 잘못 조합하는 판단 오류가 발생했습니다.",
            problemHighlights: ["요청 이해·도구 선택·검색·분석·계획·검토의 6개 역할", "참고할 정보와 실행 대상을 혼동하거나, 불필요한 Tool을 선택하고, 검색 조건을 잘못 조합하는 판단 오류"],
            decisionLabel: "개선 방향",
            decision:
              "LangSmith Trace에서 최초로 잘못 판단한 Node를 기준으로 원인을 구분하고, 모든 오류를 Prompt 예외 규칙으로 추가하지 않고 원인에 따라 수정 위치를 분리했습니다.\nPrompt·State·Schema·Validator·Model Setting의 책임을 나누어 수정하고 있습니다.",
            decisionHighlights: ["최초로 잘못 판단한 Node", "원인에 따라 수정 위치를 분리", "Prompt·State·Schema·Validator·Model Setting"],
            smokeTest: "6 / 6 PASS",
            validationTitle: "01. Production E2E Smoke Test",
            validationDescription: "주요 실패 유형을 대표하는 6개 E2E 시나리오를 실제 Production 경로에서 검증해, 재실행 없이 6 / 6 PASS를 확인했습니다.",
            validationDescriptionHighlights: ["6개 E2E 시나리오를 실제 Production 경로에서 검증", "6 / 6 PASS"],
            validationScenarios: [
              { name: "대상 없는 일정", topic: "불명확한 참조 처리", criteria: "대상을 임의로 추측하거나 조회하지 않고 사용자에게 구체화를 요청해 WAITING_CONFIRMATION 진입", highlights: ["사용자에게 구체화를 요청해 WAITING_CONFIRMATION 진입"], traceUrl: "https://smith.langchain.com/public/b7d05fe4-04e1-4dcc-8c87-cc961e7f42b1/r" },
              { name: "선택 리소스", topic: "선택 Context 전달 안정성", criteria: "선택한 Resource를 후속 단계까지 유지해 다른 대상으로 이동하지 않고 정확히 응답", highlights: ["다른 대상으로 이동하지 않고 정확히 응답"], traceUrl: "https://smith.langchain.com/public/0ca002ce-bcaa-48ab-8667-e64c5cdf7f9f/r/01a09cea-39e2-7082-b3f2-045e306860a7?start_time=2026-09-13T22%3A36%3A31.073512Z" },
              { name: "메일 신규 작성", topic: "복수 자료를 근거로 Gmail Draft 생성", criteria: "Tasks·Calendar 근거를 반영한 Draft Preview를 생성하고 승인 전 실제 저장·전송 금지", highlights: ["승인 전 실제 저장·전송 금지"], traceUrl: "https://smith.langchain.com/public/788deade-d1b0-4a90-9564-594bfd035fd8/r/01a09cea-c73c-7921-b9cd-455d68fdfaa8?start_time=2026-09-13T22%3A37%3A07.260078Z" },
              { name: "다건 검색", topic: "전체 범위 검색과 Pagination 완주", criteria: "중간 결과에서 조기 종료하지 않고 Juniper 메일 제목 26건 전체 회수", highlights: ["Juniper 메일 제목 26건 전체 회수"], traceUrl: "https://smith.langchain.com/public/65facd3e-6c0b-4242-a24f-a3e55fd8138d/r/01a09ceb-b6e6-73c0-8b7b-bd88f63048f0?start_time=2026-09-13T22%3A38%3A08.613879Z" },
              { name: "복합 Retrieval", topic: "여러 후보 근거를 비교해 최종 사실 판별", criteria: "여러 Gmail 근거 중 최신 확정 내용을 선택해 최종 출고일·담당자 도출", highlights: ["최신 확정 내용을 선택해 최종 출고일·담당자 도출"], traceUrl: "https://smith.langchain.com/public/c187e6b8-a929-4771-a541-7e892b531995/r/01a09ced-a734-77c2-bd7b-adbace131eec?start_time=2026-09-13T22%3A40%3A15.665318Z" },
              { name: "기존 초안 수정", topic: "기존 Resource를 보존한 부분 UPDATE", criteria: "기존 제목·수신자·본문·Thread를 유지하고 지정 문장만 1회 추가, 승인 전 전송 금지", highlights: ["지정 문장만 1회 추가, 승인 전 전송 금지"], traceUrl: "https://smith.langchain.com/public/4d26d569-500b-46e9-8f66-7b17dc3c6ba9/r" }
            ],
            metricsTitle: "02. 품질 평가셋 구성 및 반복 개선",
            metricsDescription: "Smoke Test 통과 후 대표 시나리오만으로는 전체 판단 품질을 확인하기 어렵다고 보고, 총 92개 시나리오를 Validation·Stress·Holdout으로 분리해 평가 범위를 확장했습니다.",
            metricsDescriptionHighlights: ["총 92개 시나리오를 Validation·Stress·Holdout으로 분리해 평가 범위를 확장"],
            metricsGridLabel: "평가셋 구성",
            metrics: [
              ["Validation · 60 Cases", null, null, "주요 기능과 일반적인 복합 요청의 판단 정확성 검증"],
              ["Stress · 20 Cases", null, null, "경계 조건·복합 조건에서의 판단 안정성 검증"],
              ["Holdout · 12 Cases", null, null, "수정 과정에 노출하지 않은 요청의 일반화 성능 검증"]
            ],
            metricsWorkflow: {
              title: "개선 방식",
              steps: ["LangSmith Trace에서 최초 오판 Node 추적", "원인별 책임 계층 수정", "Validation·Stress 재평가", "Holdout 일반화 검증"],
              description: "실패 원인을 Prompt · State · Schema · Validator · Model Setting 중 해당 책임 계층에 매핑해 수정하고, 동일 평가셋으로 개선 효과와 Regression을 반복 확인하고 있습니다.",
              descriptionHighlights: ["Prompt · State · Schema · Validator · Model Setting", "개선 효과와 Regression을 반복 확인"]
            },
            metricsResult: {
              title: "개선 결과",
              subtitle: "Baseline 기준 → 최종",
              items: [
                ["Validation · 60 Cases", "07/60 → 07/60"],
                ["Stress · 20 Cases", "00/20 → 00/20"],
                ["Holdout · 12 Cases", "02/12 → 02/12"]
              ]
            },
            summaryLabel: "최종 검증 예정",
            summary:
              "동일한 92개 평가셋을 기준으로 수정 전·후의 전체 Pass Rate·Holdout 성능·Regression 여부를 비교하고 있으며, 품질 안정화 후 최종 개선 수치를 반영할 예정입니다.",
            summaryEmphasis: ["전체 Pass Rate·Holdout 성능·Regression 여부", "최종 개선 수치"],
          },
          {
            id: "provider-api-performance",
            title: "Provider API 조회 성능 개선",
            problem:
              "Gmail Thread 20건의 표시용 Metadata를 완성하려면 목록 조회 후 각 Thread의 Detail 조회가 추가로 필요했습니다.\n기존 Individual / 3W에서는 List 1회 + Detail 20회로 물리 HTTP 요청이 총 21회 발생했고, 이 구간이 목록 조회 지연의 주요 병목이었습니다.",
            problemHighlights: ["List 1회 + Detail 20회", "21회 발생"],
            decisionLabel: "판단",
            decision:
              "Worker를 늘리면 응답 시간은 줄일 수 있지만, HTTP 요청 수와 CPU 비용은 거의 그대로 유지됐습니다.\n따라서 단순 Worker 증설보다 Batch로 HTTP fan-out 자체를 줄이는 것이 핵심이라고 판단했습니다.",
            decisionHighlights: ["HTTP 요청 수와 CPU 비용은 거의 그대로 유지됐습니다.", "Batch로 HTTP fan-out 자체를 줄이는 것이 핵심"],
            comparisonTitle: "실험 — Batch Size × Worker 조합 비교",
            comparisonIntro:
              "Batch Size × Worker 10개 조합을 각 100회 비교했습니다.\n먼저 count · order · metadata · next_page_token 정합성을 확인한 뒤 Provider p95 · 물리 HTTP 요청 수 · CPU · Error를 비교했습니다.",
            comparisonIntroHighlights: ["Batch Size × Worker 10개 조합을 각 100회 비교", "Provider p95 · 물리 HTTP 요청 수 · CPU · Error"],
            comparisonHeaders: ["구성", "물리 HTTP 요청", "Provider p95", "Provider CPU", "Error"],
            comparisonRows: [
              ["Individual / 3W", "21", "5.71s", "149.4ms/job", "0%"],
              ["Individual / 10W", "21", "2.90s", "143.6ms/job", "0%"],
              ["Batch 5 / 4W", "5", "2.01s", "56.0ms/job", "0%"],
              ["Batch 20 / 1W", "2", "2.00s", "33.1ms/job", "0%"]
            ],
            comparisonStatuses: { "Individual / 3W": "Baseline", "Batch 20 / 1W": "Selected" },
            comparisonDescription:
              "B20/W1은 B5/W4와 유사한 p95를 유지하면서 HTTP 요청 수와 CPU 사용량이 가장 낮았고, Worker 1개로 구성도 단순해 최종 선택했습니다.",
            comparisonDescriptionHighlights: ["B20/W1은 B5/W4와 유사한 p95를 유지하면서 HTTP 요청 수와 CPU 사용량이 가장 낮았고, Worker 1개로 구성도 단순해 최종 선택했습니다."],
            summaryLabel: "성과",
            summaryMetricLines: [
              ["물리 HTTP 요청", "21회 → 2회"],
              ["Provider CPU", "149.4 → 33.1ms/job", "(-77.8%)"],
              ["Production READ Node p95", "5.40s → 1.99s", "(-63.2%)"],
              ["Local API p95", "5.48s → 1.75s", "(-68.05%)"]
            ],
            summaryTrailing:
              "동일한 조회 결과와 Metadata 정합성을 유지한 채 Local API와 Production READ Node에서 각각 100회 재검증했으며, Error·Timeout·403/429는 발생하지 않았습니다.",
            summaryTrailingEmphasis: ["Error·Timeout·403/429는 발생하지 않았습니다."],
            fullResultsUrl: "https://github.com/solar-ai-dev/google-work-agent/tree/main/evaluation/results/gmail-metadata-hydration-20260914-7afac9f5"
          }
        ]
      }
    ]
  }
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
