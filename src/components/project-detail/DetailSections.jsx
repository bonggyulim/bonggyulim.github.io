import { useState } from "react";

const contributionGroups = [
  { id: "build", title: "설계·구현" },
  { id: "operate", title: "운영·배포" }
];

const sectionEyebrows = {
  contribution_cards: "CONTRIBUTION",
  contribution_summary: "CONTRIBUTION",
  architecture_overview: "ARCHITECTURE",
  problem_solution: "PROBLEM SOLVING"
};

function ContributionIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <circle cx="10" cy="6.6" r="3.1" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.6 16.4c0-3.2 2.9-5.4 6.4-5.4s6.4 2.2 6.4 5.4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function ArchitectureIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <rect x="2.6" y="2.6" width="5.4" height="5.4" rx="1.3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="12" y="2.6" width="5.4" height="5.4" rx="1.3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="7.3" y="12" width="5.4" height="5.4" rx="1.3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5.3 8v2.2a1.6 1.6 0 0 0 1.6 1.6h1M14.7 8v2.2a1.6 1.6 0 0 1-1.6 1.6h-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
    </svg>
  );
}

function ProblemSolvingIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path
        d="M12.4 3.4a3.6 3.6 0 0 0-4.9 4.3L3 12.2v2.4h2.4l4.5-4.5a3.6 3.6 0 0 0 4.3-4.9l-2.3 2.3-1.7-.5-.5-1.7z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

const sectionIcons = {
  contribution_cards: ContributionIcon,
  contribution_summary: ContributionIcon,
  architecture_overview: ArchitectureIcon,
  problem_solution: ProblemSolvingIcon
};

const syntaxTokenPattern = /(#.*$|'[^']*'|\b(?:CREATE|UNIQUE|INDEX|ON|WHERE|IN|UPDATE|SET|AND|and|in|if|raise|with|as|or)\b|\b(?:save_result|save_defects|mark_succeeded|delete|cursor|commit|_insert_result|_insert_defects|_mark_job_succeeded|delete_message|rowcount)\b|\b(?:StateTransitionError|JobStateTransitionError)\b|\b[A-Za-z_][A-Za-z0-9_]*\b|==|!=|<=|>=|=>|->|[=:+\-*/()[\]{}.,])/g;
const syntaxKeywords = new Set(["CREATE", "UNIQUE", "INDEX", "ON", "WHERE", "IN", "UPDATE", "SET", "AND", "and", "in", "if", "raise", "with", "as", "or"]);
const syntaxFunctions = new Set(["save_result", "save_defects", "mark_succeeded", "delete", "cursor", "commit", "_insert_result", "_insert_defects", "_mark_job_succeeded", "delete_message", "rowcount"]);
const troubleshootingTabs = {
  "sqs-job-state-consistency": {
    title: "분석 Job 중복 생성·실행 및 재처리 안정화"
  },
  "worker-scaling-strategy": {
    title: "분석 Job 누적에 대비한 Worker 확장 전략 검증"
  },
  "thermal-model-experiments": {
    title: "Thermal 데이터 기준 재정의와 단계별 모델 실험"
  }
};

function HighlightedFlowCode({ code }) {
  return (
    <code>
      {code.split("\n").map((line, lineIndex, lines) => (
        <span key={`${lineIndex}-${line}`}>
          {(() => {
            const parts = [];
            let lastIndex = 0;
            const matcher = new RegExp(syntaxTokenPattern);
            let match;

            while ((match = matcher.exec(line)) !== null) {
              if (match.index > lastIndex) {
                parts.push(line.slice(lastIndex, match.index));
              }

              const token = match[0];
              let className = "";

              if (token.startsWith("#")) className = "is-comment";
              else if (token.startsWith("'")) className = "is-string";
              else if (syntaxKeywords.has(token)) className = "is-keyword";
              else if (syntaxFunctions.has(token)) className = "is-function";
              else if (token === "StateTransitionError") className = "is-class";
              else if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(token)) className = "is-identifier";
              else className = "is-operator";

              parts.push(
                className ? <span key={`${lineIndex}-${match.index}-${token}`} className={className}>{token}</span> : token
              );
              lastIndex = match.index + token.length;
            }

            if (lastIndex < line.length) {
              parts.push(line.slice(lastIndex));
            }

            return parts;
          })()}
          {lineIndex < lines.length - 1 ? "\n" : null}
        </span>
      ))}
    </code>
  );
}

function EmphasizedText({ text, phrases = [], emphasisClasses = {} }) {
  if (!phrases.length) {
    return text;
  }

  const expression = new RegExp(`(${phrases.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");

  return text.split(expression).map((part, index) =>
    phrases.includes(part) ? <strong key={`${index}-${part}`} className={`detail-problem-emphasis ${emphasisClasses[part] ?? ""}`.trim()}>{part}</strong> : part
  );
}

function DetailSection({ id, className = "", type, title, eyebrow, description, hideEyebrow = false, children }) {
  if (!children) {
    return null;
  }

  const Icon = sectionIcons[type];
  const eyebrowText = eyebrow ?? sectionEyebrows[type];

  return (
    <section id={id} className={`detail-content-section ${className}`.trim()}>
      {title ? (
        <header className="detail-section-heading">
          {!hideEyebrow && eyebrowText ? (
            <span className="detail-section-eyebrow">
              {Icon ? (
                <span className="detail-section-eyebrow-icon">
                  <Icon />
                </span>
              ) : null}
              {eyebrowText}
            </span>
          ) : null}
        </header>
      ) : null}
      {description ? <p className="detail-section-description">{description}</p> : null}
      {children}
    </section>
  );
}

function BulletList({ items, limit = 5, className = "" }) {
  const visibleItems = items?.slice(0, limit) ?? [];

  if (!visibleItems.length) {
    return null;
  }

  return (
    <ul className={`detail-card-list ${className}`.trim()}>
      {visibleItems.map((item, index) => (
        <li key={`${index}-${item.slice(0, 18)}`}>{item}</li>
      ))}
    </ul>
  );
}

export function ProjectDetailHero({ project, metaItems }) {
  return (
    <section className="detail-hero">
      <div className="detail-hero-grid">
        <div className="detail-hero-content">
          <div className="detail-hero-head">
            <h1>{project.title}</h1>
          </div>
          <p className="detail-summary"><EmphasizedText text={project.description} phrases={project.descriptionEmphasis} /></p>
          {metaItems?.length ? (
            <div className="detail-meta-list">
              {metaItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ) : null}
          {project.roleScope ? <p className="detail-role-scope">{project.roleScope}</p> : null}
          {project.tags?.length ? (
            <div className="tag-list detail-hero-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          {project.connectors?.length ? (
            <div className="detail-hero-connectors">
              <span className="detail-hero-connectors-label">현재 Connector</span>
              <div className="connector-badge-list">
                {project.connectors.map((tag) => (
                  <span key={tag} className="connector-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        {project.videoUrl ? (
          <section className="detail-video-section" aria-label={`${project.title} 시연 영상`}>
            <video className="detail-video" controls playsInline preload="metadata" poster={project.videoPoster}>
              <source src={project.videoUrl} type="video/mp4" />
              브라우저가 video 태그를 지원하지 않습니다.
            </video>
          </section>
        ) : null}
      </div>
    </section>
  );
}

export function ContributionSummarySection({ id, section }) {
  const cards = section.cards ?? [];

  if (!cards.length) {
    return null;
  }

  const isThreeColumnLayout = section.layout === "three_column_cards";
  const isRoleRowsLayout = section.layout === "role_rows";
  const experimentCards = cards.filter((card) => card.category === "EXPERIMENT");
  const mainCards = cards.filter((card) => card.category !== "EXPERIMENT");
  const groupedCards = contributionGroups
    .map((group) => ({
      ...group,
      title: section.groupLabels?.[group.id] ?? group.title,
      cards: mainCards.filter((card) => card.group === group.id)
    }))
    .filter((group) => group.cards.length);

  return (
    <DetailSection
      id={id}
      type={section.type}
      title={section.title}
      eyebrow={section.eyebrow}
      description={section.description}
    >
      <div className={isRoleRowsLayout ? "detail-contribution-role-rows" : "detail-contribution-panel"}>
        {isRoleRowsLayout ? (
          cards.map((card) => <ContributionRoleRow key={card.id ?? card.title} card={card} />)
        ) : isThreeColumnLayout ? (
          <div className="detail-contribution-three-column-grid">
            {cards.map((card) => (
              <ContributionItem key={card.id ?? card.title} card={card} />
            ))}
          </div>
        ) : groupedCards.length ? (
          <div className="detail-contribution-main-grid">
            {groupedCards.map((group) => (
              <div key={group.id} className="detail-contribution-column">
                <h3 className="detail-contribution-column-title">{group.title}</h3>
                {group.cards.map((card) => (
                  <ContributionItem key={card.id ?? card.title} card={card} />
                ))}
              </div>
            ))}
          </div>
        ) : null}
        {experimentCards.length ? (
          <div className="detail-experiment-section">
            {experimentCards.map((card) => (
              <ContributionItem key={card.id ?? card.title} card={card} isExperiment />
            ))}
          </div>
        ) : null}
      </div>
    </DetailSection>
  );
}

function ContributionItem({ card, isExperiment = false }) {
  const categoryClass = card.category ? `is-${card.category.toLowerCase()}` : "";
  const itemCountClass = isExperiment ? `is-count-${card.items?.length ?? 0}` : "";

  return (
    <section
      className={`detail-contribution-item ${categoryClass} ${isExperiment ? "is-experiment-section" : ""}`.trim()}
    >
      <div className="detail-contribution-item-header">
        {card.category ? <span className="detail-card-tag">{card.category}</span> : null}
        <h4>{card.title}</h4>
      </div>
      <BulletList items={card.items} className={itemCountClass} />
      {card.note ? (
        <p className="detail-contribution-note">
          {(Array.isArray(card.note) ? card.note : [card.note]).map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      ) : null}
    </section>
  );
}

function FieldBlock({ label, children }) {
  if (!children || (Array.isArray(children) && children.length === 0)) {
    return null;
  }

  const hasLeadText = Array.isArray(children) && label === "판단·해결";
  const leadText = hasLeadText ? children[0] : null;
  const listItems = hasLeadText ? children.slice(1) : children;

  const labelClass = {
    문제: "is-problem",
    "판단·해결": "is-decision",
    결과: "is-result"
  }[label];

  return (
    <div
      className={`detail-problem-block ${labelClass ?? ""} ${
        label === "결과" ? "detail-problem-result" : ""
      }`.trim()}
    >
      <strong className="detail-problem-label">{label}</strong>
      {leadText ? <p>{leadText}</p> : null}
      {Array.isArray(listItems) ? <BulletList items={listItems} /> : <p>{listItems}</p>}
    </div>
  );
}

function ContextRow({ leftLabel, rightLabel, children }) {
  const [leftContent, rightContent] = children;

  return (
    <div className="detail-context-row">
      <div className="detail-context-col">
        <strong className="detail-context-label">{leftLabel}</strong>
        {leftContent}
      </div>
      <div className="detail-context-col">
        <strong className="detail-context-label">{rightLabel}</strong>
        {rightContent}
      </div>
    </div>
  );
}

function TripleContextRow({ items }) {
  return (
    <div className="detail-context-row-triple">
      {items.map((item) => (
        <div className="detail-context-col" key={item.label}>
          <strong className="detail-context-label">{item.label}</strong>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

function ContributionRoleRow({ card }) {
  return (
    <article className="detail-contribution-role-row">
      <h3>{card.title}</h3>
      <ul>
        {(card.items ?? []).map((item, index) => (
          <li key={item} className={index === card.emphasisIndex ? "is-emphasized" : ""}>
            {index === card.emphasisIndex ? <strong>{item}</strong> : item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ArchitectureOverviewSection({ id, section }) {
  const images = section.images ?? (section.image ? [{ src: section.image, alt: section.imageAlt }] : []);
  const [pageIndex, setPageIndex] = useState(0);
  const current = images[pageIndex] ?? images[0];
  const hasMultiple = images.length > 1;

  if (!current) {
    return null;
  }

  const goPrev = () => setPageIndex((index) => (index - 1 + images.length) % images.length);
  const goNext = () => setPageIndex((index) => (index + 1) % images.length);

  return (
    <DetailSection
      id={id}
      type={section.type}
      title={section.title}
      eyebrow={section.eyebrow}
      description={section.description}
      className="detail-architecture-section"
    >
      <div className="detail-architecture-panel">
        <div className={`detail-architecture-image-row ${hasMultiple ? "has-multiple" : ""}`.trim()}>
          <div className="detail-architecture-image-card">
            <a
              className="detail-architecture-image-link"
              href={section.externalUrl ?? current.src}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagnifyIcon />
            </a>
            <img src={current.src} alt={current.alt ?? (section.title + " architecture diagram")} />
          </div>
          {hasMultiple ? (
            <div className="detail-architecture-pager" role="group" aria-label="아키텍처 이미지 페이지 이동">
              <button type="button" className="detail-architecture-pager-button" onClick={goPrev} aria-label="이전 이미지">
                ▲
              </button>
              <span className="detail-architecture-pager-count">
                <em>{pageIndex + 1}</em>
                <i>/</i>
                <em>{images.length}</em>
              </span>
              <button type="button" className="detail-architecture-pager-button" onClick={goNext} aria-label="다음 이미지">
                ▼
              </button>
            </div>
          ) : null}
        </div>
        {section.legend === null ? null : section.legend ? (
          <p className="detail-architecture-legend">{section.legend}</p>
        ) : (
          <p className="detail-architecture-legend">
            요청·분석 Spring Boot → SQS → AI Worker　│　데이터 RDS PostgreSQL · S3　│　배포 Jenkins → ECR → K3s
          </p>
        )}
      </div>
    </DetailSection>
  );
}

function MagnifyIcon() {
  return (
    <svg className="detail-architecture-image-link-icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <circle cx="9" cy="9" r="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12.8 12.8L16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  );
}

function WorkerTopologyCard({ topology }) {
  return (
    <section className={`detail-worker-topology is-${topology.variant}`}>
      <h5>{topology.title}</h5>
      <div className="detail-worker-metric-group">
        <strong>RGB</strong>
        {topology.rgb.map((metric) => <p key={metric}><EmphasizedText text={metric} phrases={topology.emphasis} emphasisClasses={topology.emphasisClasses} /></p>)}
      </div>
      <div className="detail-worker-metric-group">
        <strong>Thermal</strong>
        {topology.thermal.map((metric) => <p key={metric}><EmphasizedText text={metric} phrases={topology.emphasis} emphasisClasses={topology.emphasisClasses} /></p>)}
      </div>
      <span className="detail-worker-topology-label">{topology.label}</span>
    </section>
  );
}

function WorkerComparisonCard({ comparison, accent = "neutral" }) {
  return (
    <article className={`detail-worker-comparison is-${accent}`.trim()}>
      <header className="detail-worker-comparison-head">
        <span className="detail-worker-comparison-head-title">
          <strong>{comparison.title}</strong>
        </span>
      </header>
      <div className="detail-worker-comparison-metrics">
        <div>
          <strong>RGB</strong>
          <span>{comparison.rgb[0]}</span>
          <em className={accent === "teal" ? "is-teal" : "is-amber"}>{comparison.rgb[1]}</em>
        </div>
        <div>
          <strong>Thermal</strong>
          <span>{comparison.thermal[0]}</span>
          <em className={accent === "teal" ? "is-teal" : "is-amber"}>{comparison.thermal[1]}</em>
        </div>
        {comparison.cpuPeak ? (
          <div>
            <strong>CPU Peak</strong>
            <span>{comparison.cpuPeak}</span>
          </div>
        ) : null}
        {comparison.makespan ? (
          <div>
            <strong>Makespan</strong>
            <span>{comparison.makespan}</span>
          </div>
        ) : null}
      </div>
      <p className="detail-worker-comparison-conclusion">{comparison.conclusion}</p>
    </article>
  );
}

function WorkerScalingCard({ card }) {
  return (
    <article className="detail-problem-card detail-worker-card">
      <TripleContextRow
        items={[
          { label: "운영 기준", content: <EmphasizedText text={card.basis} phrases={["$107의 MVP 운영 예산", "t3.large 단일 Node·CPU Worker 1개"]} /> },
          { label: "확장 필요성", content: card.scalingNeed },
          { label: "비교", content: card.comparisonNote }
        ]}
      />
      <div className="detail-problem-details detail-worker-details">
        <div className="detail-worker-split">
          <section className="detail-worker-section detail-worker-cost-section detail-worker-split-cost">
            <h4>MVP 운영 예산 산정</h4>
            <div className="detail-cost-grid">
              <div className="detail-cost-table-wrap">
                <table className="detail-cost-table">
                  <thead><tr><th>항목</th><th>기준</th><th>월 예상 비용</th></tr></thead>
                  <tbody>
                    {card.costRows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}
                    <tr className="is-total">{card.totalCost.map((cell) => <td key={cell}>{cell}</td>)}</tr>
                    <tr>{card.extraCost.map((cell) => <td key={cell}>{cell}</td>)}</tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p><EmphasizedText text={card.budgetDescription} /></p>
          </section>

          <div className="detail-worker-split-bridge">
            <p>월 운영비 기준 · EC2 t3.large 1대 구성</p>
            <span className="detail-worker-split-bridge-arrow-down" aria-hidden="true"></span>
            <p>YOLO26s 640 · CPU ONNX 87.2 ± 0.9ms 참고</p>
            <span className="detail-worker-split-bridge-arrow-down" aria-hidden="true"></span>
            <p>Job 누적 시 처리 용량을 어떻게 확장할 것인가?</p>
            <span className="detail-worker-split-bridge-arrow" aria-hidden="true"></span>
          </div>

          <section className="detail-worker-section detail-worker-split-verification">
            <h4>Worker 확장 방식 검증</h4>
            <div className="detail-worker-comparison-stack">
              <WorkerComparisonCard comparison={card.comparisonOne} accent="amber" />
              <WorkerComparisonCard comparison={card.comparisonTwo} accent="teal" />
            </div>
          </section>
        </div>

        <section className="detail-worker-decision">
          <h4>결정</h4>
          <p>{card.decision}</p>
        </section>

        <a className="detail-worker-source-link" href={card.sourceUrl} target="_blank" rel="noopener noreferrer">실험 원본 보기</a>
      </div>
    </article>
  );
}

function ThermalExperimentCard({ card }) {
  return (
    <article className="detail-problem-card detail-thermal-card">
      <div className="detail-problem-details detail-thermal-details">
        <section className="detail-thermal-section">
          <div className="detail-thermal-merge-grid">
            <div className="detail-thermal-merge-col">
              <h4 className="detail-thermal-step-heading">01. 서비스 입력 기준 데이터 정제</h4>
              <div className="detail-thermal-data-flow">
                {card.dataCards.map(([value, title, , variant], index) => {
                  const step = (
                    <div key={value} className={`detail-thermal-data-step ${variant ? `is-${variant}` : ""}`.trim()}>
                      <strong>{value}</strong>
                      <span>{title}</span>
                    </div>
                  );

                  return index === 0 ? (
                    step
                  ) : (
                    [
                      <span key={`arrow-${value}`} className="detail-thermal-data-arrow" aria-hidden="true">→</span>,
                      step
                    ]
                  );
                })}
              </div>
              <p>{card.dataSummary}</p>
            </div>

            <div className="detail-thermal-merge-col">
              <h4 className="detail-thermal-step-heading">02. 서비스 3-Class 재정의</h4>
              <div className="detail-thermal-class-grid">
                {card.classGroups.map((group) => {
                  const [head, ...rest] = group;
                  const summary = rest.join(" · ");

                  return (
                    <div key={head}>
                      <strong>{head}</strong>
                      <span>{summary}</span>
                    </div>
                  );
                })}
              </div>
              <p className="detail-thermal-class-transition"><strong>원천 8-Class</strong><span> → </span><strong className="is-teal">서비스 기준 3-Class</strong></p>
            </div>
          </div>
        </section>

        <section className="detail-thermal-section detail-thermal-augment-section">
          <h4 className="detail-thermal-step-heading">03. Stratified 3-Fold 기반 오버샘플링과 데이터 증강 효과 검증</h4>
          <div className="detail-thermal-stage-grid">
            {card.augmentationStages?.map((stage) => (
              <article key={stage.step} className="detail-thermal-stage-card">
                <div className="detail-thermal-bar-row">
                  <span className="detail-thermal-bar-label">{stage.step === "01" ? "Raw" : "Before"}</span>
                  <span className="detail-thermal-bar-value">{stage.before}</span>
                  <span className="detail-thermal-bar-track">
                    <span className="detail-thermal-bar-fill" style={{ width: `${parseFloat(stage.before)}%` }} />
                  </span>
                </div>
                <div className="detail-thermal-bar-row">
                  <span className="detail-thermal-bar-label">{stage.title}</span>
                  <span className="detail-thermal-bar-value">{stage.after}</span>
                  <span className="detail-thermal-bar-track">
                    <span className="detail-thermal-bar-fill is-after" style={{ width: `${parseFloat(stage.after)}%` }} />
                  </span>
                </div>
                <p className="detail-thermal-bar-result">({stage.metric} : <strong className="detail-problem-emphasis is-teal">{stage.delta}</strong>)</p>
              </article>
            ))}
          </div>
        </section>

        <div className="detail-thermal-compare-grid">
          <section className="detail-thermal-section detail-thermal-preprocess-section">
            <h4 className="detail-thermal-step-heading">04. Thermal 전처리 후보 비교</h4>
            <div className="detail-thermal-image-grid">
              {card.preprocess.map(({ id, title, note, src }) => (
                <figure key={id}>
                  <img src={src} alt={`${title} 전처리 결과`} />
                  <figcaption><strong>{title}</strong><span> · {note}</span></figcaption>
                </figure>
              ))}
            </div>
            {card.preprocessConclusion ? <p>{card.preprocessConclusion}</p> : null}
          </section>

          <section className="detail-thermal-section detail-thermal-threshold-section">
            <h4 className="detail-thermal-step-heading">05. Test set 기반 Confidence Threshold 검증</h4>
            <figure className="detail-thermal-tradeoff">
              <img src="/assets/projects/thermal_threshold_tradeoff.png" alt="Confidence Threshold Trade-off" />
            </figure>
            <p>Precision·Recall·F1 균형을 기준으로 Confidence 0.55 선택 · IoU 0.45 적용</p>
          </section>
        </div>

        <section className="detail-worker-decision"><h4>결과</h4><p><EmphasizedText text={card.finalDecision} phrases={card.finalDecisionEmphasis} /></p></section>
      </div>
    </article>
  );
}

function ScalingFlowStep({ step }) {
  if (step.type === "box2") {
    return (
      <span className="detail-scaling-flow-box detail-scaling-flow-box-split">
        <span className="detail-scaling-flow-box-header">
          <strong>{step.primary}</strong>
          <span>{step.secondary}</span>
        </span>
        {step.note ? (
          <span className="detail-scaling-flow-box-details">
            <span className="detail-scaling-flow-box-detail">
              <strong>{step.note.model}</strong>
              <span>{step.note.reason}</span>
            </span>
          </span>
        ) : null}
      </span>
    );
  }

  if (step.type === "box") {
    return <span className="detail-scaling-flow-box">{step.content}</span>;
  }

  if (step.type === "queue") {
    return <span className="detail-scaling-flow-box detail-scaling-flow-queue-box">{step.content}</span>;
  }

  return <span className="detail-scaling-flow-text">{step.content}</span>;
}

function ScalingFlow({ steps }) {
  return (
    <div className="detail-scaling-flow">
      {steps.map((step, index) => (
        <div key={`${index}-${step.content ?? step.primary}`} className="detail-scaling-flow-item">
          {index > 0 ? <span className="detail-scaling-flow-arrow" aria-hidden="true">→</span> : null}
          <ScalingFlowStep step={step} />
        </div>
      ))}
    </div>
  );
}

function parseMetricValue(value) {
  const match = /[\d.]+/.exec(value);
  return match ? parseFloat(match[0]) : 0;
}

function ScalingMetricCard({ metric }) {
  const beforeNum = parseMetricValue(metric.before);
  const afterNum = parseMetricValue(metric.after);

  let beforeRatio;
  let afterRatio;
  if (metric.scale) {
    const { min, max } = metric.scale;
    beforeRatio = (beforeNum - min) / (max - min);
    afterRatio = (afterNum - min) / (max - min);
  } else {
    const max = Math.max(beforeNum, afterNum) || 1;
    beforeRatio = beforeNum / max;
    afterRatio = afterNum / max;
  }

  return (
    <article className="detail-scaling-metric-card">
      <p className="detail-scaling-card-title">{metric.title}</p>

      <div className="detail-thermal-bar-row">
        <span className="detail-thermal-bar-label">Before</span>
        <span className="detail-thermal-bar-value">{metric.before}</span>
        <span className="detail-thermal-bar-track">
          <span className="detail-thermal-bar-fill" style={{ width: `${Math.max(beforeRatio, 0) * 100}%` }} />
        </span>
      </div>
      <div className="detail-thermal-bar-row">
        <span className="detail-thermal-bar-label">After</span>
        <span className="detail-thermal-bar-value">{metric.after}</span>
        <span className="detail-thermal-bar-track">
          <span className="detail-thermal-bar-fill is-after" style={{ width: `${Math.max(afterRatio, 0) * 100}%` }} />
        </span>
      </div>

      {metric.scale ? (
        <div className="detail-scaling-metric-scale" aria-hidden="true">
          <span>{metric.scale.min.toFixed(1)}</span>
          <span>{metric.scale.max.toFixed(1)}</span>
        </div>
      ) : null}

      <p className="detail-scaling-metric-note">{metric.note}</p>
    </article>
  );
}

function IndustrialScalingCard({ card }) {
  const resultItems = card.lightweightSection.resultItems.map((item) => {
    const primary = item.emphasisPrimary ?? [];
    const secondary = item.emphasisSecondary ?? [];
    return {
      text: item.text,
      phrases: [...primary, ...secondary],
      emphasisClasses: Object.fromEntries([
        ...primary.map((phrase) => [phrase, "is-teal is-scaling-primary"]),
        ...secondary.map((phrase) => [phrase, "is-scaling-secondary"])
      ])
    };
  });

  return (
    <article className="detail-problem-card detail-thermal-card">
      <ContextRow leftLabel="문제" rightLabel="핵심 판단">
        <p><EmphasizedText text={card.problem} phrases={card.problemEmphasis} /></p>
        <p><EmphasizedText text={card.decision} phrases={card.decisionEmphasis} /></p>
      </ContextRow>

      <div className="detail-problem-details detail-thermal-details">
        <section className="detail-thermal-section">
          <div className="detail-thermal-merge-grid">
            <div className="detail-thermal-merge-col">
              <h4 className="detail-thermal-step-heading">{card.backboneFlow.title}</h4>
              <figure className="detail-thermal-tradeoff detail-backbone-image">
                <img src={card.backboneFlow.image} alt={card.backboneFlow.imageAlt} />
              </figure>
              <p>{card.backboneFlow.summary}</p>
            </div>

            <div className="detail-thermal-merge-col">
              <h4 className="detail-thermal-step-heading">{card.stageFlow.title}</h4>
              <ScalingFlow steps={card.stageFlow.steps} />
              <div className="detail-scaling-criteria">
                <span className="detail-scaling-criteria-label">평가 기준</span>
                {card.stageFlow.criteria.map((item) => (
                  <span key={item} className="detail-scaling-chip">{item}</span>
                ))}
              </div>
              {card.stageFlow.summary ? <p className="detail-scaling-flow-summary">{card.stageFlow.summary}</p> : null}
            </div>
          </div>
        </section>

        <section className="detail-thermal-section detail-thermal-augment-section">
          <h4 className="detail-thermal-step-heading">{card.lightweightSection.title}</h4>
          <p>{card.lightweightSection.summary}</p>
          <div className="detail-scaling-stage-grid">
            {card.lightweightSection.metrics.map((metric) => (
              <ScalingMetricCard key={metric.title} metric={metric} />
            ))}
          </div>
        </section>

        <section className="detail-scaling-footer">
          <div className="detail-scaling-footer-block">
            <strong>결과</strong>
            {resultItems.map((item, index) => (
              <p key={index}>
                <EmphasizedText text={item.text} phrases={item.phrases} emphasisClasses={item.emphasisClasses} />
              </p>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

function SqsTroubleshootingCard() {
  const codeBlocks = [
    {
      accent: "teal",
      title: "Active Job 생성 제어",
      description: "이미지당 QUEUED/RUNNING Active Job 1개를 Partial Unique Index로 보장",
      linkUrl: "https://github.com/solar-ai-dev/pv-fusion/blob/de4e810faa34021c2d3c257ddd1c6cd590f0692a/backend/src/main/resources/db/migration/V8__add_unique_active_analysis_job_per_image.sql#L1-L3",
      code: [
        "CREATE UNIQUE INDEX ux_analysis_jobs_one_active_per_image",
        "ON analysis_jobs (image_id)",
        "WHERE job_status IN ('QUEUED', 'RUNNING');"
      ].join("\n")
    },
    {
      accent: "blue",
      title: "실행 Claim",
      description: "QUEUED Job만 RUNNING으로 조건부 전이해 이미 선점·처리된 Job의 중복 실행 제어",
      linkUrl: "https://github.com/solar-ai-dev/pv-fusion/blob/378b524e2dae099ba60d1f228e1d108c915b7262/ai-worker/app/infrastructure/db/analysis_job_repository.py#L54-L68",
      code: [
        "UPDATE analysis_jobs",
        "SET job_status = 'RUNNING'",
        "WHERE id = ? AND job_status = 'QUEUED';",
        "",
        "if cursor.rowcount == 0:",
        "    raise JobStateTransitionError(...)"
      ].join("\n")
    }
  ];

  return (
    <article className="detail-problem-card detail-sqs-card detail-sqs-flow-card">
      <ContextRow leftLabel="문제" rightLabel="핵심 판단">
        <p>연속 요청에서는 동일 이미지의 Active Job이 중복 생성될 수 있고, SQS 재전달에서는 동일 Job이 다시 실행될 수 있음</p>
        <p>
          생성 단계는 <strong className="detail-problem-emphasis">DB 제약</strong>으로 Active Job을 제한하고, 실행 단계는 QUEUED → RUNNING{" "}
          <strong className="detail-problem-emphasis">조건부 Claim</strong>으로 중복 처리를 제어
        </p>
      </ContextRow>

      <div className="detail-sqs-visual-grid">
        <section className="detail-sqs-diagram-section">
          <h4>SQS 흐름도</h4>
          <div className="detail-sqs-diagram-link" aria-hidden="true">
            <img className="detail-sqs-diagram" src="/assets/projects/diagram.png" alt="SQS Job 상태 안정화 다이어그램" />
          </div>
        </section>

        <section className="detail-sqs-implementation">
          <h4>구현 근거</h4>
          <div className="detail-sqs-code-stack">
            {codeBlocks.map((block) => (
              block.linkUrl ? (
                <a
                  key={block.title}
                  className={`detail-sqs-code-card-link is-${block.accent}`.trim()}
                  href={block.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <article className={`detail-sqs-code-card is-${block.accent}`.trim()}>
                    <div className="detail-sqs-code-card-head">
                      <strong>{block.title}</strong>
                    </div>
                    <p className="detail-sqs-code-card-description">{block.description}</p>
                    <pre className="detail-sqs-code"><HighlightedFlowCode code={block.code} /></pre>
                  </article>
                </a>
              ) : (
                <article key={block.title} className={`detail-sqs-code-card is-${block.accent}`.trim()}>
                  <div className="detail-sqs-code-card-head">
                    <strong>{block.title}</strong>
                  </div>
                  <p className="detail-sqs-code-card-description">{block.description}</p>
                  <pre className="detail-sqs-code"><HighlightedFlowCode code={block.code} /></pre>
                </article>
              )
            ))}
          </div>
        </section>
      </div>

      <section className="detail-sqs-result">
        <h4>결과</h4>
        <p>Active Job 중복 생성·실행을 제어하고, 완료 Transaction과 실패 유형별 SQS 재처리 정책으로 Job 처리 정합성 강화</p>
      </section>
    </article>
  );
}

function TroubleshootingCard({ card }) {
  return (
    <article className="detail-problem-card detail-sqs-card detail-sqs-flow-card">
      <ContextRow leftLabel="문제" rightLabel="핵심 판단">
        <p>{card.problem}</p>
        <div>
          {card.decision ? <p>{card.decision}</p> : null}
          {card.implementation?.length ? <BulletList items={card.implementation} /> : null}
        </div>
      </ContextRow>

      <div className="detail-troubleshooting-middle" aria-hidden="true" />

      {card.result ? (
        <section className="detail-sqs-result">
          <h4>결과</h4>
          <p>{card.result}</p>
        </section>
      ) : null}
    </article>
  );
}

export function TroubleshootingSection({ id, section }) {
  const rawCards = [section.card, ...(section.additionalCards ?? [])].filter(Boolean);
  const cards = section.cardOrder
    ? section.cardOrder.map((cardId) => rawCards.find((card) => card.id === cardId)).filter(Boolean)
    : rawCards;
  const [activeCardId, setActiveCardId] = useState(cards[0]?.id ?? null);

  if (!cards.length) {
    return null;
  }

  const activeCard = cards.find((card) => card.id === activeCardId) ?? cards[0];

  const handleTabChange = (cardId) => {
    setActiveCardId(cardId);
  };

  return (
    <DetailSection id={id} type={section.type} title={section.title} eyebrow={section.eyebrow} description={section.description}>
      <div className="detail-troubleshooting-tabs-shell">
        <div className="detail-troubleshooting-tabs" role="tablist" aria-label="문제 해결 탭">
          {cards.map((card) => {
            const meta = troubleshootingTabs[card.id] ?? { title: card.title, subtitle: "" };
            const isActive = activeCardId === card.id;

            return (
              <button
                key={card.id ?? card.title}
                type="button"
                className={`detail-troubleshooting-tab ${isActive ? "is-active" : ""}`.trim()}
                role="tab"
                aria-selected={isActive}
                aria-controls={`detail-panel-${card.id}`}
                id={`detail-tab-${card.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => handleTabChange(card.id)}
              >
                <strong>{meta.title}</strong>
                {meta.subtitle ? <span>{meta.subtitle}</span> : null}
              </button>
            );
          })}
        </div>

        <div className="detail-troubleshooting-panel-wrap">
          {cards.map((card) => {
            if (card.id !== activeCard?.id) {
              return null;
            }

            return (
              <div
                key={card.id ?? card.title}
                className="detail-troubleshooting-panel"
                role="tabpanel"
                id={`detail-panel-${card.id}`}
                aria-labelledby={`detail-tab-${card.id}`}
              >
                {card.id === "sqs-job-state-consistency"
                  ? <SqsTroubleshootingCard />
                  : card.kind === "worker_scaling"
                  ? <WorkerScalingCard card={card} />
                  : card.kind === "thermal_experiment"
                    ? <ThermalExperimentCard card={card} />
                    : card.kind === "industrial_scaling"
                      ? <IndustrialScalingCard card={card} />
                      : <TroubleshootingCard card={card} />}
              </div>
            );
          })}
        </div>
      </div>
    </DetailSection>
  );
}
