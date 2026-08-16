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
      "제조 이미지 이상 탐지와 카테고리별 Memory Bank 운영, 설비 문서 RAG 챗봇을 결합한 설비 점검 지원 플랫폼입니다. 정상 이미지 기반 Memory Bank 생성·적용, 검사 결과와 이상 위치 확인, 설비 문서 검색과 출처 기반 점검·대응 정보 조회를 지원합니다.",
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
        title: "문제 해결",
        type: "problem_solution",
        card: {
          id: "category-scaling-strategy",
          kind: "industrial_scaling",
          title: "신규 카테고리 확장을 고려한 탐지 구조·경량화 검증",
          problem: "신규 카테고리에 대응하면서 카테고리별 재학습을 줄이고, 추론 비용까지 고려한 운영 구조 필요",
          problemEmphasis: ["신규 카테고리", "카테고리별 재학습", "추론 비용"],
          decision: "공통 Backbone + 카테고리별 Memory Bank 및 SPEED → PERFORMANCE 2-Stage 운영 기준과 경량화 대안 검증",
          decisionEmphasis: ["공통 Backbone + 카테고리별 Memory Bank", "SPEED → PERFORMANCE", "경량화"],
          backboneFlow: {
            title: "01. 공통 Backbone + 카테고리별 Memory Bank — 카테고리 대응 구조",
            image: "/assets/projects/memorybank.svg",
            imageAlt: "공통 Backbone + 카테고리별 Memory Bank 카테고리 대응 구조 다이어그램",
            summary: "정상 이미지로 카테고리별 Memory Bank를 구축하고, 검사 시점에는 공통 Backbone으로 추출한 Feature를 비교해 카테고리별 이상 탐지 결과와 Score·Heatmap을 생성"
          },
          stageFlow: {
            title: "02. SPEED → PERFORMANCE 2-Stage 추론 기준",
            steps: [
              {
                type: "box2",
                primary: "SPEED",
                secondary: "빠른 1차 판정",
                note: { model: "WRN50 + PatchCore", reason: "처리 효율·GPU Memory 기준 우선" }
              },
              { type: "queue", content: "재검토 큐" },
              {
                type: "box2",
                primary: "PERFORMANCE",
                secondary: "정밀 재판정",
                note: { model: "DINOv2 기반", reason: "정확도·위치 성능 기준 우선" }
              }
            ],
            criteria: ["F1-Score", "Latency", "GPU Memory Peak", "PRO"]
          },
          lightweightSection: {
            title: "03. Teacher-Student 경량화 검증",
            summary: "카테고리·분석량 증가 시 Backbone + Memory Bank 구조의 GPU 메모리·추론 비용 확대 가능성을 고려해 경량 Student 구조 검증",
            metrics: [
              { title: "GPU Memory Peak", before: "847.48 MB", after: "87.26 MB", note: "약 90% 감소" },
              { title: "Image AUROC", before: "0.971", after: "0.995", note: "+2.4%p 개선", scale: { min: 0.5, max: 1 } },
              { title: "F1-Score", before: "0.914", after: "0.959", note: "+4.5%p 개선", scale: { min: 0.5, max: 1 } },
              { title: "Pixel AUROC", before: "0.985", after: "0.970", note: "-1.5%p 하락", scale: { min: 0.5, max: 1 } },
              { title: "PRO", before: "0.842", after: "0.708", note: "-13.4%p 하락", scale: { min: 0.5, max: 1 } }
            ],
            resultItems: [
              { text: "신규 카테고리의 Memory Bank 생성·적용·관리까지 이어지는 운영 구조 구축" },
              {
                text: "GPU Memory Peak 약 90% 절감, Image AUROC·F1 유지·개선 및 위치 설명력(PRO) Trade-off 확인",
                emphasisPrimary: ["GPU Memory Peak 약 90% 절감"],
                emphasisSecondary: ["Image AUROC·F1 유지·개선"]
              }
            ]
          },
          nextSteps: "축적된 Anomaly Heatmap·검사 결과를 활용한 결함 유형 분류로 확장"
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
    homeSummary: "드론 RGB·Thermal 이미지로 태양광 패널의 이상 후보와 후속 조치를 관리하는 점검 플랫폼",
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
      "Google OAuth2.0 + JWT 기반 사용자 인증·권한 구현",
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
              "비동기 분석 Job의 상태 전이·재처리·결과 저장 흐름 안정화",
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
          title: "SQS 환경에서 분석 Job 중복 생성·실행 방지",
          problem:
            "연속 요청과 SQS 재전달이 겹치면 동일 이미지의 분석 Job이 중복 생성·실행될 수 있었습니다.",
          problemEmphasis: ["연속 요청과 SQS 재전달이 겹치면 동일 이미지의 분석 Job이 중복 생성·실행"],
          solution:
            "이미지당 Active Job은 최대 1개로 제한하고, Worker는 QUEUED → RUNNING을 조건부 Claim하도록 설계했습니다.",
          solutionEmphasis: [
            "이미지당 Active Job은 최대 1개",
            "QUEUED → RUNNING"
          ],
          expandable: true,
          flowCode: `# 1. 동일 이미지의 Active Job은 1개만 허용
CREATE UNIQUE INDEX ...
ON analysis_jobs (image_id)
WHERE job_status IN ('QUEUED', 'RUNNING');

# 2. QUEUED Job만 Worker가 선점
UPDATE analysis_jobs
SET job_status = 'RUNNING'
WHERE id = job_id
  AND job_status = 'QUEUED';

if rowcount == 0:
    raise StateTransitionError()

# 3. 결과·결함·Job 성공 상태를 한 Transaction으로 처리
with db.cursor() as cursor:
    result_id = save_result(cursor, output)
    save_defects(cursor, result_id, output.defects)
    mark_succeeded(cursor, job_id)  # RUNNING → SUCCEEDED

db.commit()

# 4. 처리 결과에 따라 SQS ACK / Retry
if status in {"processed", "skipped"} or terminal:
    sqs.delete(message)

# non-terminal 실패는 삭제하지 않고
# Visibility Timeout 이후 재수신`,
          result:
            "DB 제약과 조건부 상태 전이로 동일 이미지의 Active Job 중복 생성과 동일 Job의 중복 실행을 방지했습니다.",
          resultEmphasis: ["DB 제약과 조건부 상태 전이", "동일 이미지의 Active Job 중복 생성과 동일 Job의 중복 실행"],
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
            title: "동시 분석 요청을 고려한 Worker 확장 전략 검증",
            basis: "월 약 $107 예산으로 t3.large 단일 Node·CPU Worker 1개 구성",
            scalingNeed: "분석 Job 누적에 대비해 Worker 처리 용량 확장 방식 검토",
            comparisonNote: "Worker 복제와 Node 분산을 RGB·Thermal 각 100 Job으로 비교",
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
              conclusion: "Worker 수를 늘렸지만 CPU 경합으로 처리량 증가가 제한 (CPU Peak: ≈99%)"
            },
            comparisonTwo: {
              title: "1 EC2 / 2 Workers → 2 EC2 / 2 Workers",
              rgb: ["0.398 → 0.786 jobs/s", "+97.5%"],
              thermal: ["1.528 → 2.550 jobs/s", "+66.9%"],
              conclusion: "Worker 수가 같아도 Node를 분산하자 처리량이 크게 증가 (CPU Peak≈76%)"
            },
            baselineSummary: "Baseline → 최종 구성: RGB 처리시간 271.40s → 127.19s · -53.1%, Thermal 처리시간 80.19s → 39.21s · -51.1%",
            decision: "Worker 증설은 CPU 경합으로 효과가 제한됐고, Node 분산에서 처리량이 크게 증가해 이를 우선 확장 방식으로 결정",
            sourceUrl: "https://github.com/solar-ai-dev/pv-fusion/tree/develop/docs/benchmarks/worker-scaling"
          },
          {
            id: "thermal-model-experiments",
            kind: "thermal_experiment",
            title: "Thermal 데이터 정제 개선과 모델 실험",
            dataCards: [
              ["약 7,500장", "Raw + Augmentation 혼재", "", ""],
              ["약 1,250장", "Raw-only 분리", "", ""],
              ["약 850장", "Drone-view 선별", "", "teal"]
            ],
            dataSummary: "증강본 제거 후 실제 서비스 입력과 유사한 Drone-view 중심 데이터로 재구성",
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
              ["LAW", "Original Thermal", "전처리 없는 원본", "/assets/projects/LAW.png"],
              ["DUAL_EDGE", "Dual Edge", "Edge 강조", "/assets/projects/DUAL_EDGE.png"],
              ["MEDIAN_SHIFT", "Median Shift", "분포 변환", "/assets/projects/MEDIAN_SHIFT.png"],
              ["NLM_WEAK", "NLM Weak", "Noise 제거", "/assets/projects/NLM_WEAK.png"],
              ["GUIDED_FILTER_WEAK", "Guided Filter Weak", "Edge 보존 평활화", "/assets/projects/GUIDED_FILTER_WEAK.png"],
              ["LOWCUT_P15", "LOWCUT-P15", "밝기 하단 조정", "/assets/projects/LOWCUT_P15.png"]
            ],
            finalDecision: "최종 Test set에서 F1 90.49% · mAP@0.5 90.45%로 목표 성능을 충족하고, Confidence 0.55 · IoU 0.45 운영 기준 확정",
            finalDecisionEmphasis: ["F1 90.49% · mAP@0.5 90.45%로 목표 성능을 충족", "Confidence 0.55 · IoU 0.45 운영 기준 확정"]
          }
        ]
      }
    ]
  }
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
