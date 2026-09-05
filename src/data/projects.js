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
        card: {
          id: "category-scaling-strategy",
          kind: "industrial_scaling",
          title: "신규 카테고리 대응을 위한 모델 운영 구조·경량화 검증",
          problem: "신규 카테고리마다 모델을 다시 학습하지 않고 빠르게 대응할 수 있는 구조가 필요했습니다. 동시에 검사 요청 증가에 대비해 판정 성능뿐 아니라 추론 속도와 GPU 자원 사용량까지 고려해야 했습니다.",
          problemEmphasis: ["모델을 다시 학습하지 않고 빠르게 대응", "추론 속도와 GPU 자원 사용량"],
          decision: "공통 Backbone + 카테고리별 Memory Bank로 신규 카테고리 대응 구조를 설계하고, 속도형·성능형으로 검사 역할을 분리 → 기존 속도형보다 효율적인 1차 판정 모델을 만들기 위해 성능형을 Teacher로 둔 Student 경량화 검토",
          decisionEmphasis: ["공통 Backbone + 카테고리별 Memory Bank", "속도형·성능형으로 검사 역할을 분리", "성능형을 Teacher로 둔 Student 경량화 검토"],
          backboneFlow: {
            title: "01. 공통 Backbone + 카테고리별 Memory Bank — 카테고리 대응 구조",
            image: "/assets/projects/memorybank.svg",
            imageAlt: "공통 Backbone + 카테고리별 Memory Bank 카테고리 대응 구조 다이어그램",
            summary: "공통 Backbone으로 정상 이미지 Feature를 추출해 카테고리별 Memory Bank로 관리하고, 검사 Feature와 비교해 Anomaly Score·Heatmap 생성"
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
            criteria: ["F1-Score", "Latency", "GPU Memory Peak", "PRO"],
            summary: "속도형 모델로 빠르게 1차 판정하고, 저신뢰·경계 구간 결과는 성능형 모델로 재검토·정밀 판정"
          },
          lightweightSection: {
            title: "03. Teacher–Student 경량화 검증",
            summary: "기존 속도형보다 효율적인 1차 판정 모델을 만들기 위해 성능형을 Teacher로 두고 Student 경량화 검증",
            metrics: [
              { title: "Peak GPU Memory", before: "847.5 MB", after: "84.2 MB", note: "약 90% 절감" },
              { title: "Throughput", beforeLabel: "SPEED", before: "20.8 img/s", afterLabel: "Student", after: "76.4 img/s", note: "약 3.7배 향상" },
              { title: "Image AUROC", beforeLabel: "SPEED", before: "0.991", afterLabel: "Student", after: "0.995", note: "+0.4%p", scale: { min: 0.5, max: 1 } },
              { title: "F1-score", beforeLabel: "SPEED", before: "0.966", afterLabel: "Student", after: "0.959", note: "-0.7%p", scale: { min: 0.5, max: 1 } },
              { title: "PRO", beforeLabel: "SPEED", before: "0.779", afterLabel: "Student", after: "0.760", note: "-1.9%p", scale: { min: 0.5, max: 1 } }
            ],
            resultItems: [
              {
                text: "카테고리별 Memory Bank로 신규 품목 대응 구조를 유지하면서, Student는 기존 속도형 대비 처리량을 약 3.7배 높이고 성능 저하는 제한했습니다. 또한 Teacher 대비 Peak GPU Memory를 약 90% 절감해, 데이터가 축적된 카테고리의 1차 판정용 경량 대안으로 적용 가능성을 확인했습니다.",
                emphasisPrimary: ["처리량을 약 3.7배 높이고 성능 저하는 제한", "Peak GPU Memory를 약 90% 절감"],
                emphasisSecondary: ["1차 판정용 경량 대안"]
              }
            ]
          }
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
        image: "/assets/projects/pv-insight-architecture.png",
        imageAlt: "PV-Insight 시스템 아키텍처 다이어그램",
        externalUrl: "/assets/projects/pv-insight-architecture.png",
        renderInDetail: true
      },
      {
        id: "troubleshooting",
        title: "핵심 문제 해결",
        type: "problem_solution",
        cardOrder: ["worker-scaling-strategy", "sqs-job-state-consistency", "thermal-model-experiments"],
        card: {
          id: "sqs-job-state-consistency",
          title: "비동기 분석의 멱등성과 상태 정합성",
          problem:
            "연속·동시 요청으로 동일 이미지의 중복 Job이 생성될 수 있고, SQS 메시지 재전달로 동일 Job이 반복 실행될 수 있으며, 분석 결과와 Job 완료 상태가 서로 어긋날 수 있음",
          problemEmphasis: ["중복 Job", "메시지 재전달", "분석 결과와 Job 완료 상태"],
          solution:
            "생성 단계는 DB 제약, 실행 단계는 조건부 상태 갱신, 완료 단계는 DB 트랜잭션으로 문제를 분리해 제어",
          solutionEmphasis: [
            "DB 제약",
            "조건부 상태 갱신",
            "DB 트랜잭션"
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
            "DB 제약과 조건부 상태 갱신으로 중복 요청·메시지 재전달을 멱등하게 처리하고, 완료 처리를 하나의 트랜잭션으로 묶어 분석 결과와 Job 상태의 정합성을 유지",
          resultEmphasis: ["DB 제약", "조건부 상태 갱신", "하나의 트랜잭션"],
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
            title: "분석 Job 누적에 대비한 Worker 확장 전략 검증",
            basis: "월 약 $107의 MVP 운영 예산을 기준으로 t3.large 단일 Node·CPU Worker 1개를 Baseline으로 구성",
            scalingNeed: "분석 Job 누적 시 처리 용량을 어떻게 확장할지 Worker 복제와 Node 분산 방식 비교",
            comparisonNote: "RGB·Thermal 각 100 Job을 동일 조건으로 처리해 Worker 수와 Node 배치에 따른 처리량·CPU 경합 비교",
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
              rgb: ["0.368 → 0.398 jobs/s", "+8.2%"],
              thermal: ["1.247 → 1.528 jobs/s", "+22.5%"],
              conclusion: "동일 Node의 CPU 경합으로 Worker 증설 효과 제한 (CPU Peak ≈99%)"
            },
            comparisonTwo: {
              title: "1 EC2 / 2 Workers → 2 EC2 / 2 Workers",
              rgb: ["0.398 → 0.786 jobs/s", "+97.5%"],
              thermal: ["1.528 → 2.550 jobs/s", "+66.9%"],
              conclusion: "Worker 수를 유지한 채 Node를 분산하자 처리량이 크게 증가 (CPU Peak ≈76%)"
            },
            decision: "Worker 증설은 CPU 경합으로 효과가 제한됐고, Node 분산에서 처리량이 크게 증가해 이를 우선 확장 방식으로 결정",
            sourceUrl: "https://github.com/solar-ai-dev/pv-fusion/tree/develop/docs/benchmarks/worker-scaling"
          },
          {
            id: "thermal-model-experiments",
            kind: "thermal_experiment",
            title: "Thermal 데이터 기준 재정의와 단계별 모델 실험",
            dataCards: [
              ["약 7,500장", "Raw + Augmentation 혼재", "", ""],
              ["약 1,250장", "Raw-only 분리", "", ""],
              ["약 850장", "Drone-view 선별", "", "teal"]
            ],
            dataSummary: "증강본을 제거하고 실제 서비스 입력과 유사한 Drone-view 중심으로 실험 데이터 재구성",
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
    title: "MCP·API 기반 업무 Agent",
    detailPath: "/projects/mcp-api-agent",
    status: "completed",
    statusLabel: "완료",
    // TODO: 레이아웃 확인용 임시 영상 — 실제 시연 영상 준비되면 교체
    videoUrl: "/assets/projects/industrial-ai.mp4",
    videoPoster: "/assets/projects/industrial-thumbnail.png",
    // TODO: 메인 카드 썸네일 — 실제 데모 스크린샷 준비되면 교체 (현재는 아키텍처 다이어그램으로 대체)
    image: "/assets/projects/LangGraph.svg",
    imageFit: "contain",
    summary: "MCP와 외부 API를 통해 외부 시스템 정보를 조회하고 승인된 작업만 실행·검증하는 업무 Agent",
    homeSummary: "MCP 기반으로 다양한 외부 업무 시스템의 CRUD를 수행하는 업무 Agent 서비스",
    description:
      "MCP 기반으로 다양한 외부 업무 시스템의 CRUD를 수행하는 업무 Agent입니다. LangGraph 기반 역할별 Agent로 판단 책임을 분리하고, 외부 상태를 변경하는 작업은 정책·입력 구조·실행 조건 검증과 사용자 승인을 거쳐 수행하도록 설계했습니다.",
    descriptionEmphasis: [
      "CRUD를 수행하는 업무 Agent",
      "정책·입력 구조·실행 조건 검증과 사용자 승인"
    ],
    meta: [
      "2026.08.05 ~ 2026.08.20",
      "2인 팀 프로젝트"
    ],
    tags: [
      "Python",
      "FastAPI",
      "LangGraph",
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
            id: "implementation",
            title: "핵심 기능 구현",
            items: [
              "LangGraph 기반 역할별 Agent(Subgraph) 구조 구현",
              "Gmail·Tasks·Calendar READ / WRITE 기능 구현",
              "MCP 기반 외부 서비스 조회·실행 흐름 구현"
            ]
          },
          {
            id: "workflow-policy",
            title: "워크플로우·정책 설계",
            items: [
              "규칙 기반 흐름 제어와 상태 관리 구조 설계",
              "공통 정책과 Connector별 실행 정책 정의",
              "READ / WRITE 작업별 승인·근거·허용 도구 정책 적용"
            ]
          },
          {
            id: "output-control",
            title: "LLM 출력·실행 통제",
            items: [
              "구조화된 출력 스키마로 LLM 응답 형식과 허용 범위 제한",
              "LLM 출력값과 실제 실행 인자의 일치 여부 검증",
              "사용자 승인 → 외부 시스템 실행 → 결과 재조회·검증 흐름 구현"
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
        id: "troubleshooting",
        title: "핵심 문제 해결",
        type: "problem_solution",
        card: {
          id: "policy-execution-boundary",
          title: "판단·실행 책임 분리를 통한 승인되지 않은 작업 실행 방지",
          problem:
            "LLM의 의미 판단과 외부 시스템 실행을 분리하지 않으면, 정책 검증 없이 작업이 실행되거나 실행 결과를 신뢰하기 어려움",
          decision:
            "판단 → 정책 검증 → 승인 → 실행 → 결과 검증 책임을 분리하고, 단계 간 데이터는 Structured Output으로 전달",
          implementation: [
            "LLM 판단 결과를 Structured Output으로 고정해 정책 검증 단계에 전달",
            "정책에 부합하고 사용자가 승인한 요청만 MCP·외부 API로 실행",
            "실행 후 외부 시스템을 재조회해 실제 상태 변경 여부를 검증"
          ],
          result:
            "판단·정책·승인·실행·검증 책임을 분리해 승인되지 않은 외부 상태 변경을 차단하고, 실행 후 재조회로 실제 반영 여부를 확인하는 흐름 구성"
        }
      }
    ]
  }
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
