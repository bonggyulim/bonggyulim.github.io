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
              "문서 CRUD·버전 관리부터 인덱싱 상태·RAG 반영까지 구현",
              "FastAPI 이미지 추론과 문서 검색·RAG·LLM 호출을 Spring과 연동",
              "검사·모델·문서·서버·관리자 화면 설계·React 구현"
            ]
          },
          {
            id: "design",
            group: "build",
            category: "DESIGN",
            title: "설계·의사결정",
            items: [
              "PM으로 요구사항·MVP·설계 기준을 정의하고 공동 설계문서 검토·통합",
              "Spring·FastAPI·DB·캐시·스토리지·벡터 DB의 책임과 데이터 흐름 설계",
              "검사·모델·문서·관리자 API·DB와 Spring–FastAPI 연동 규격 설계",
              "이상 탐지·문서 검색·RAG·LLM을 검사 결과 확인과 점검 안내 흐름으로 연결",
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
              "후보 비교, 속도·성능·경량화 최적화와 Teacher–Student 경량화 전략 수립",
              "검색 방식·프롬프트·LLM 비교를 위한 RAG 실험 기준 정의"
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
        legend: "검사·RAG Spring Boot → FastAPI AI Server　│　데이터 MariaDB · Redis · MinIO · ChromaDB　│　배포 Docker Compose · Nginx",
        renderInDetail: true
      },
      {
        id: "troubleshooting",
        title: "문제 해결",
        type: "problem_solution",
        card: {
          id: "serving-result-consistency",
          title: "실험 환경과 FastAPI 추론 결과 불일치 해결",
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
            title: "운영 예산 기반 서버 구성 및 Worker 확장 전략 검증",
            basis: "MVP 월 운영 예산 약 $107과 CPU ONNX 추론 조건을 기준으로 서버 구성을 결정했습니다.",
            validation: "동일 Node의 Worker 증설 효과를 확인한 뒤, 동일한 2 Workers를 두 Node에 분산해 확장 효과를 비교했습니다.",
            budgetDescription: "AWS Pricing Calculator로 단일 EC2 기반 MVP 운영환경의 월 비용을 먼저 산정하고, 이를 서버 구성의 기준으로 사용했습니다.",
            costRows: [
              ["EC2 + EBS", "t3.large / gp3 100GB", "$85.04"],
              ["RDS + Storage", "db.t4g.micro / gp3", "$20.87"],
              ["S3", "20GB / 소규모 요청", "$0.50"],
              ["ECR", "5GB 이미지 저장", "$0.50"],
              ["SQS", "Standard Queue / 1M", "$0.40"]
            ],
            totalCost: ["합계", "AWS Pricing Calculator", "$107.31 / month"],
            extraCost: ["별도 반영", "Public IPv4 / EIP", "+$3.65"],
            experimentSummary: "동일한 RGB·Thermal 각 100 Job을 기준으로 Worker 수와 Node 배치를 변경해 처리량을 비교했습니다.",
            comparisonOne: {
              title: "동일 Node에서 Worker 증설",
              scenario: "1 EC2 / 1 Worker → 1 EC2 / 2 Workers",
              rgb: ["0.368 → 0.398 jobs/s", "+8.2%"],
              thermal: ["1.247 → 1.528 jobs/s", "+22.5%"],
              cpuPeak: "RGB 99% · Thermal 96%",
              conclusion: "Worker 수를 늘렸지만 CPU 경합으로 처리량 증가가 제한됐습니다."
            },
            comparisonTwo: {
              title: "동일 2 Workers를 두 Node로 분산",
              scenario: "1 EC2 / 2 Workers → 2 EC2 / 2 Workers",
              rgb: ["0.398 → 0.786 jobs/s", "+97.5%"],
              thermal: ["1.528 → 2.550 jobs/s", "+66.9%"],
              conclusion: "Worker 수가 같아도 Node를 분산하자 처리량이 크게 증가했습니다."
            },
            baselineSummary: "Baseline → 최종 구성: RGB 처리시간 271.40s → 127.19s · -53.1%, Thermal 처리시간 80.19s → 39.21s · -51.1%",
            decision: "동일 Node에 Worker만 추가하면 CPU 경합으로 확장 효과가 제한됐습니다. 동일한 2 Workers를 두 Node에 분산했을 때 처리량이 크게 증가해, CPU 추론 환경에서는 Node 분산을 우선하는 확장 방식을 기준으로 정했습니다.",
            sourceUrl: "https://github.com/solar-ai-dev/pv-fusion/tree/develop/docs/benchmarks/worker-scaling"
          },
          {
            id: "thermal-model-experiments",
            kind: "thermal_experiment",
            title: "Thermal 데이터 정제 개선과 모델 실험",
            problem: "초기 Thermal 데이터는 약 7,500장에 원본과 증강 이미지가 혼재했고, 원천 데이터셋의 8-Class 라벨은 동일한 Thermal 결함을 Single/Multi 등으로 과도하게 세분화해 실제 서비스에 필요한 결함 판단 단위와 맞지 않았습니다.",
            problemEmphasis: ["약 7,500장에 원본과 증강 이미지가 혼재", "8-Class 라벨은 동일한 Thermal 결함을 Single/Multi 등으로 과도하게 세분화"],
            decision: "서비스 입력과 가까운 약 850장 Drone-view를 기준 데이터로 정리하고, Thermal 결함의 의미를 기준으로 8-Class를 HotSpot · Diode_ByPassed · String_Fault의 3-Class로 재정의했습니다. 이후 Stratified 3-Fold로 증강·전처리 후보를 비교하고, 최종 조합은 분리된 test set에서 Threshold를 검증해 추론 조건을 확정했습니다.",
            decisionEmphasis: ["약 850장 Drone-view", "HotSpot · Diode_ByPassed · String_Fault의 3-Class", "Stratified 3-Fold", "분리된 test set"],
            dataCards: [
              ["약 7,500장", "Raw + Augmentation 혼재", "Augmentation leakage 위험", ""],
              ["약 1,250장", "Raw-only 분리", "촬영 고도·거리 등 입력 조건 혼재", ""],
              ["약 850장", "Drone-view 선별", "공식 실험 기준", "teal"]
            ],
            dataSummary: "데이터 수를 최대한 늘리기보다 실제 서비스 입력 분포와 유사한 Drone-view를 공식 실험 기준으로 선택했습니다.",
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
            augmentationSummary: "각 단계의 Stratified 3-Fold 결과를 확인한 뒤 다음 증강 조건을 추가해 최종 조합을 선택했습니다.",
            classGroups: [
              ["HotSpot", "MultiHotSpot", "SingleHotSpot"],
              ["Diode_ByPassed", "MultiByPassed", "MultiDiode", "SingleByPassed", "SingleDiode"],
              ["String_Fault", "StringOpenCircuit", "StringReversedPolarity"]
            ],
            classSummary: "원천 데이터셋은 동일한 결함을 Single/Multi 등으로 과도하게 세분화하고 있어 실제 서비스에 필요한 Thermal 결함 판단 단위와 맞지 않았습니다. 이에 결함 유형의 의미를 기준으로 HotSpot · Diode_ByPassed · String_Fault의 3-Class로 Taxonomy를 재정의했습니다.",
            preprocess: [
              ["LAW", "Original Thermal", "전처리 없는 원본", "/assets/projects/LAW.png"],
              ["DUAL_EDGE", "Dual Edge", "Edge 강조", "/assets/projects/DUAL_EDGE.png"],
              ["MEDIAN_SHIFT", "Median Shift", "분포 변환", "/assets/projects/MEDIAN_SHIFT.png"],
              ["NLM_WEAK", "NLM Weak", "Noise 제거", "/assets/projects/NLM_WEAK.png"],
              ["GUIDED_FILTER_WEAK", "Guided Filter Weak", "Edge 보존 평활화", "/assets/projects/GUIDED_FILTER_WEAK.png"],
              ["LOWCUT_P15", "LOWCUT-P15", "밝기 하단 조정", "/assets/projects/LOWCUT_P15.png"]
            ],
            preprocessSummary: "노이즈 제거, 경계 보존, 밝기 분포 조정 등 여러 전처리를 비교했지만 최종 조합의 성능 개선으로 이어지지 않아 전처리를 추가하지 않았습니다.",
            preprocessSummaryEmphasis: ["최종 조합의 성능 개선으로 이어지지 않아 전처리를 추가하지 않았습니다."],
            finalDecision: "서비스 입력에 맞춰 데이터와 결함 Taxonomy를 정리하고, Stratified 3-Fold로 증강·전처리 후보를 비교했습니다. 최종 조합은 별도 test set에서 Threshold를 검증해 conf 0.55 / IoU 0.45를 선택하고, ONNX로 export해 ONNX Runtime CPU Worker에 적용했습니다.",
            finalDecisionEmphasis: ["conf 0.55 / IoU 0.45", "ONNX Runtime CPU Worker"]
          }
        ]
      }
    ]
  }
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
