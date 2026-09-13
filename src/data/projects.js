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
      "7인 팀 프로젝트"
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
              "검사 도메인 구현",
              "문서 관리 도메인 구현",
              "모델·Memory Bank 적용 범위 관리 구현",
              "FastAPI AI 서빙 연동 및 React 화면 구현"
            ]
          },
          {
            id: "design",
            title: "설계·의사결정",
            items: [
              "요구사항·MVP·설계 기준 정의",
              "서버·저장소 책임과 데이터 흐름 설계",
              "API·DB·Spring–FastAPI 계약 설계",
              "Memory Bank 운영 구조·AI 평가 기준 설계"
            ]
          },
          {
            id: "operations-deploy",
            title: "자체호스팅 배포·운영 관리",
            items: [
              "Docker Compose·Nginx·HTTPS 운영환경",
              "GitHub Actions 빌드·배포 자동화",
              "Health·Resource 상태 조회",
              "Request ID·Log·비동기 작업 추적"
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
          problemLabel: "운영 과제",
          problem: "신규 카테고리마다 모델을 다시 학습하지 않고 빠르게 대응하면서, 검사 요청 증가에 대비해 판정 성능과 추론 속도·GPU 자원 사용량을 함께 고려할 구조가 필요했습니다.",
          problemEmphasis: ["모델을 다시 학습하지 않고 빠르게 대응", "추론 속도·GPU 자원 사용량"],
          decision: "Backbone은 유지하고 카테고리별 Memory Bank를 분리해 신규 카테고리에 대응했습니다. SPEED와 PERFORMANCE의 역할을 나누고, SPEED의 경량 대안으로 PERFORMANCE를 Teacher로 둔 Student 실험을 설계했습니다.",
          decisionEmphasis: ["Backbone은 유지", "카테고리별 Memory Bank", "SPEED와 PERFORMANCE의 역할을 나누고", "PERFORMANCE를 Teacher로 둔 Student 실험"],
          backboneFlow: {
            title: "01. Backbone 유지 + 카테고리별 Memory Bank 분리 — 신규 카테고리 대응 구조",
            image: "/assets/projects/memorybank.svg",
            imageAlt: "모델별 Backbone과 카테고리별 Memory Bank를 이용한 신규 카테고리 대응 구조 다이어그램",
            summary: "각 모델의 Backbone에서 정상 이미지 Feature를 추출해 카테고리별 Memory Bank로 관리하고, 검사 이미지의 Feature와 비교해 Anomaly Score와 Heatmap을 생성합니다."
          },
          stageFlow: {
            title: "02. 속도형·성능형 모델 역할 분리",
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
            title: "03. Teacher–Student 경량화 검증",
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
                text: "Student는 기존 SPEED 대비 이미지 1장 평균 처리 시간을 약 72.7% 단축하고 Peak GPU Memory를 약 6.2% 줄이면서 주요 판정·위치 성능을 유사한 수준으로 유지해, 빠른 1차 판정을 위한 경량 모델 후보로 선정했습니다.",
                emphasisPrimary: ["이미지 1장 평균 처리 시간을 약 72.7% 단축", "Peak GPU Memory를 약 6.2% 줄이면서", "주요 판정·위치 성능을 유사한 수준으로 유지"],
                emphasisSecondary: ["빠른 1차 판정을 위한 경량 모델 후보로 선정"]
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
      "드론 RGB·Thermal 이미지에서 태양광 패널의 이상 후보를 탐지하고, 분석 결과와 조치 이력을 관리하는 플랫폼입니다.",
    descriptionEmphasis: [
      "드론 RGB·Thermal 이미지에서 태양광 패널의 이상 후보를 탐지",
      "SQS 기반 비동기 분석",
      "ONNX Runtime CPU 추론",
      "AWS·K3s 환경"
    ],
    meta: [
      "2026.05.26 ~ 2026.07.05",
      "2인 팀 프로젝트"
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
    serviceUrl: "https://app.pv-insight.com/",
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
              "Jenkins → ECR → K3s CI/CD 파이프라인 적용",
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
            "연속·동시 요청으로 동일 이미지의 중복 Job이 생성될 수 있고, SQS 메시지 재전달로 동일 Job이 반복 실행될 수 있으며, 분석 결과와 Job 완료 상태가 서로 어긋날 수 있음",
          problemEmphasis: ["중복 Job", "메시지 재전달", "분석 결과와 Job 완료 상태"],
          solution:
            "생성 단계는 DB 제약, 실행 단계는 조건부 상태 갱신, 완료 단계는 단일 DB 트랜잭션으로 중복 실행과 상태 불일치를 단계별로 제어",
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
            title: "CPU 추론 Worker의 적정 확장 단위 검증",
            basis: "월 약 $107의 MVP 운영 예산을 기준으로 EC2 t3.large 1대·CPU Worker 1개를 Baseline으로 설정",
            scalingNeed: "CPU 기반 추론에서 동일 Node의 Worker 증설과 Node 수평 확장 중 어떤 방식이 처리 시간 개선에 유리한지 비교",
            comparisonNote: "RGB·Thermal 각 100 Job을 동일 조건으로 처리해 Worker 수와 Node 배치에 따른 처리 시간·CPU 사용률 비교",
            budgetDescription: "AWS Pricing Calculator로 단일 EC2 기반 MVP 운영환경의 월 비용을 산정",
            costRows: [
              ["EC2 + EBS", "t3.large / gp3 100GB", "$85.04"],
              ["RDS + Storage", "db.t4g.micro / gp3", "$20.87"],
              ["S3", "20GB / 소규모 요청", "$0.50"],
              ["ECR", "5GB 이미지 저장", "$0.50"],
              ["SQS", "Standard Queue / 1M", "$0.40"]
            ],
            totalCost: ["합계", "AWS Pricing Calculator", "$107.31 / month"],
            extraCost: ["별도 반영", "Public IPv4 / EIP", "+$3.65"],
            comparisonOne: {
              title: "1 EC2 / 1 Worker → 1 EC2 / 2 Workers",
              rgb: ["271.4s → 251.4s", "약 7.4% 단축"],
              thermal: ["80.2s → 65.4s", "약 18.4% 단축"],
              conclusion: "동일 Node의 CPU 경합으로 Worker 증설 효과 제한 (CPU Peak ≈99%)"
            },
            comparisonTwo: {
              title: "1 EC2 / 2 Workers → 2 EC2 / 2 Workers",
              rgb: ["251.4s → 127.2s", "약 49.4% 단축"],
              thermal: ["65.4s → 39.2s", "약 40.1% 단축"],
              conclusion: "Worker 수를 유지한 채 Node를 분산하자 처리 시간이 크게 감소 (CPU Peak ≈76%)"
            },
            decision: "동일 Node에서 Worker를 늘렸을 때는 CPU 경합으로 개선 폭이 제한적이었고, Worker를 Node별로 분산했을 때 처리 시간이 크게 줄었습니다. 이를 바탕으로 노드당 1 Worker를 유지하고 Node를 수평 확장하는 방향을 우선 확장 전략으로 결정했습니다.",
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
    // TODO: 레이아웃 확인용 임시 영상 — 실제 시연 영상 준비되면 교체
    videoUrl: "/assets/projects/industrial-ai.mp4",
    videoPoster: "/assets/projects/industrial-thumbnail.png",
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
      "2026.08.05 ~ 2026.08.20",
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
    actionItems: [
      { key: "installer", label: "설치 파일" },
      { key: "github", label: "GitHub" }
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
              "규칙 기반 Main Supervisor와 6개 역할 Agent 구조 설계",
              "DAG가 아닌 State 기반 조건부 라우팅·순환형 흐름 구성",
              "사용자 확인·승인·취소 기반 실행 흐름 설계",
              "LLM 판단과 외부 시스템 변경 권한 분리"
            ]
          },
          {
            id: "agent-runtime-safety",
            title: "Agent 구현·안정성 강화",
            emphasizeAll: true,
            items: [
              "Main Graph·6개 Subgraph의 상태 전이와 Control Node 구현",
              "공통 MCP/Port 연동 구조와 Gmail·Tasks·Calendar READ / WRITE 구현",
              "승인 -> 실행 -> 외부 상태 재조회·검증 구현",
              "응답 유실·실행 중단 시 중복 WRITE 방지와 복구 흐름 구현"
            ]
          }
        ]
      },
      {
        id: "architecture",
        title: "시스템 아키텍처 & LangGraph 워크플로우",
        eyebrow: "ARCHITECTURE & LANGGRAPH",
        type: "architecture_overview",
        images: [
          {
            src: "/assets/projects/MCP-API-Work-Agent-acchitecture.png",
            alt: "MCP·API 기반 업무 Agent 아키텍처 다이어그램",
            label: "아키텍처"
          },
          {
            src: "/assets/projects/LangGraph.svg",
            alt: "LangGraph 판단·승인·실행 워크플로우 다이어그램",
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
        cases: [
          {
            id: "gmail-read",
            badge: "Gmail READ",
            request: "이번 주에 받은 프로젝트 관련 메일을 찾아줘"
          },
          {
            id: "tasks-update",
            badge: "Tasks UPDATE",
            request: "진행 중인 포트폴리오 작업을 완료 처리해줘"
          },
          {
            id: "calendar-create",
            badge: "Calendar WRITE",
            request: "다음 주 화요일 오후 3시에 프로젝트 회의 일정 생성"
          },
          {
            id: "write-approval",
            badge: "WRITE 승인·검증",
            request: "선택한 업무 일정을 변경해줘"
          },
          {
            id: "combined-request",
            badge: "복합 요청",
            request: "오늘 마감인 업무와 관련 일정을 함께 확인해줘"
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
              "9B급 Local LLM으로 복합 요청을 처리하기 위해 판단 단계를 역할별로 분리했지만, Node 간 정보 전달에서 의미가 달라지거나 불필요한 Tool 선택·검색 조건 조합 오류가 발생했습니다.",
            decisionLabel: "개선 방향",
            decision:
              "실패 Trace에서 최초 오류 지점을 확인하고 원인에 따라 Prompt·State·Schema·Validator·모델 설정을 구분해 수정했습니다.",
            smokeTest: "E2E Smoke Test 6 / 6 PASS",
            metrics: [
              ["Validation", "XX/60", "XX/60"],
              ["Holdout", "XX/12", "XX/12"],
              ["Stress", "XX/20", "XX/20"],
              ["Total", "XX.X%", "XX.X%"]
            ],
            summary:
              "Smoke Test를 본 평가 진입 기준으로 사용하고 Validation·Holdout·Stress 총 92건으로 검증 범위를 확대했습니다. 개선 과정에서 사용하지 않은 Holdout 요청까지 별도로 평가해 주요 업무 흐름과 새로운 요청에 대한 대응력을 함께 확인했습니다."
          },
          {
            id: "provider-api-performance",
            title: "Provider API 조회 성능 개선",
            problem:
              "Gmail 목록 20개 조회에 List 1회와 Thread Detail 20회가 발생해 총 21회 외부 HTTP 요청이 필요했습니다. I/O Bound 특성을 고려해 3 Worker로 병렬 처리했지만, 외부 요청 수 자체는 줄지 않아 MCP Node와 사용자 목록 표시 지연이 남았습니다.",
            problemHighlights: ["20개 조회", "총 21회 외부 HTTP 요청", "3 Worker"],
            decisionLabel: "실험 설계",
            decision:
              "Provider 권장 Batch 범위 내에서 Batch Size × Worker 조합을 변경해 비교했습니다. MCP Node Latency·사용자 목록 표시 시간·외부 HTTP 요청 횟수·오류율·CPU / Memory·중첩 요청 시 Local API 응답성을 측정해 응답 시간·안정성·자원 사용량의 균형점을 선정했습니다.",
            decisionHighlights: ["Batch Size × Worker", "응답 시간·안정성·자원 사용량의 균형점 선정"],
            comparisonRows: [
              ["기존 1+N / 3W", "21", "XX.Xs", "XX.Xs", "XX%", "Baseline"],
              ["Batch 5 / 2W", "XX", "XX.Xs", "XX.Xs", "XX%", ""],
              ["Batch 10 / 2W", "XX", "XX.Xs", "XX.Xs", "XX%", ""],
              ["Batch XX / XXW", "XX", "XX.Xs", "XX.Xs", "XX%", "Selected"]
            ],
            summary:
              "Batch XX / XXW 조합을 최종 구성으로 선정했습니다. 외부 HTTP 요청을 21회 → XX회로 줄이고, MCP Node Latency를 XX.Xs → XX.Xs로 단축했습니다. 그 결과 사용자 목록 표시 시간이 XX.Xs → XX.Xs로 감소해 실제 사용자 체감 응답성을 개선했습니다.",
            summaryEmphasis: ["Batch XX / XXW", "21회 → XX회", "XX.Xs → XX.Xs"]
          }
        ]
      }
    ]
  }
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
