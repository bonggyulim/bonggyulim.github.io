import { useEffect, useState } from "react";

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

function ConnectorIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

const sectionIcons = {
  contribution_cards: ContributionIcon,
  contribution_summary: ContributionIcon,
  architecture_overview: ArchitectureIcon,
  problem_solution: ProblemSolvingIcon,
  use_case_carousel: ContributionIcon,
  mcp_engineering_decisions: ProblemSolvingIcon
};

const syntaxTokenPattern = /(#.*$|'[^']*'|\b(?:CREATE|UNIQUE|INDEX|ON|WHERE|IN|UPDATE|SET|AND|and|in|if|raise|with|as|or)\b|\b(?:save_result|save_defects|mark_succeeded|delete|cursor|commit|_insert_result|_insert_defects|_mark_job_succeeded|delete_message|rowcount)\b|\b(?:StateTransitionError|JobStateTransitionError)\b|\b[A-Za-z_][A-Za-z0-9_]*\b|==|!=|<=|>=|=>|->|[=:+\-*/()[\]{}.,])/g;
const syntaxKeywords = new Set(["CREATE", "UNIQUE", "INDEX", "ON", "WHERE", "IN", "UPDATE", "SET", "AND", "and", "in", "if", "raise", "with", "as", "or"]);
const syntaxFunctions = new Set(["save_result", "save_defects", "mark_succeeded", "delete", "cursor", "commit", "_insert_result", "_insert_defects", "_mark_job_succeeded", "delete_message", "rowcount"]);
const troubleshootingTabs = {
  "sqs-job-state-consistency": {
    title: "SQS 비동기 분석의 멱등성과 상태 정합성"
  },
  "worker-scaling-strategy": {
    title: "CPU 추론 Worker의 적정 확장 단위 검증"
  },
  "thermal-model-experiments": {
    title: "Thermal 데이터 재정의와 단계별 실험"
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

function ComparisonSection({ tab }) {
  if (!tab.comparisonRows?.length) {
    return null;
  }

  return (
    <section className="detail-mcp-comparison">
      <h4>{tab.comparisonTitle ?? "실험 결과"}</h4>
      <div className="detail-mcp-comparison-scroll">
        <table>
          <thead>
            <tr>
              {(tab.comparisonHeaders ?? ["구성", "HTTP 요청", "Node Latency", "목록 표시", "Error", "비고"]).map((header) => <th key={header}>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {tab.comparisonRows.map((row) => {
              const status = tab.comparisonStatuses?.[row[0]];

              return (
                <tr key={row[0]} className={status === "Selected" ? "is-selected" : ""}>
                  {row.map((value, index) => (
                    <td key={`${row[0]}-${index}`}>
                      {value}
                      {index === 0 && status ? <span className={`detail-mcp-comparison-status is-${status.toLowerCase()}`}>{status}</span> : null}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {tab.comparisonDescription ? (
        <p className="detail-mcp-comparison-description">
          <EmphasizedText text={tab.comparisonDescription} phrases={tab.comparisonDescriptionHighlights} />
        </p>
      ) : null}
    </section>
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
              <span className="detail-hero-connectors-label">
                <span className="detail-hero-connectors-icon">
                  <ConnectorIcon />
                </span>
                현재 Connector
              </span>
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
        {(card.items ?? []).map((item, index) => {
          const text = typeof item === "string" ? item : item.text;
          const highlights = typeof item === "string" ? [] : item.highlights;
          const isEmphasized = card.emphasizeAll || index === card.emphasisIndex;

          return (
            <li key={text} className={isEmphasized ? "is-emphasized" : ""}>
              {isEmphasized ? <strong>{text}</strong> : <EmphasizedText text={text} phrases={highlights} />}
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export function ArchitectureOverviewSection({ id, section }) {
  const images = section.images ?? (section.image ? [{ src: section.image, alt: section.imageAlt }] : []);
  const [pageIndex, setPageIndex] = useState(0);
  const current = images[pageIndex] ?? images[0];
  const hasMultiple = images.length > 1;
  const legend = current?.legend ?? section.legend;

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
        {legend === null ? null : legend ? (
          <p className="detail-architecture-legend">{legend}</p>
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
          { label: "초기 운영 조건", content: <EmphasizedText text={card.basis} phrases={["$107의 MVP 운영 예산", "EC2 t3.large 1대·CPU Worker 1개"]} /> },
          { label: "검증 질문", content: card.scalingNeed },
          { label: "비교 조건", content: card.comparisonNote }
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
            <p>단일 EC2의 적정 Worker 수와 Node 분산 방식은 무엇인가?</p>
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

        <a className="detail-worker-source-link" href={card.sourceUrl} target="_blank" rel="noopener noreferrer">실험 원본 보기 ↗</a>
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
              <h4 className="detail-thermal-step-heading">02. 서비스 기준 3-Class 재정의</h4>
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
        <span className="detail-thermal-bar-label">{metric.beforeLabel ?? "Teacher"}</span>
        <span className="detail-thermal-bar-value">{metric.before}</span>
        <span className="detail-thermal-bar-track">
          <span className="detail-thermal-bar-fill" style={{ width: `${Math.max(beforeRatio, 0) * 100}%` }} />
        </span>
      </div>
      <div className="detail-thermal-bar-row">
        <span className="detail-thermal-bar-label">{metric.afterLabel ?? "Student"}</span>
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
      <ContextRow leftLabel={card.problemLabel ?? "문제"} rightLabel="핵심 판단">
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

function IndustrialRuntimeAlignmentCard({ card }) {
  return (
    <article className="detail-problem-card detail-thermal-card">
      <ContextRow leftLabel="문제" rightLabel="핵심 판단">
        <p><EmphasizedText text={card.problem} phrases={card.problemEmphasis} /></p>
        <p><EmphasizedText text={card.decision} phrases={card.decisionEmphasis} /></p>
      </ContextRow>

      <div className="detail-problem-details detail-thermal-details">
        <section className="detail-thermal-section">
          <h4 className="detail-thermal-step-heading">{card.runtimeAlignment.title}</h4>
          <figure className="detail-runtime-image">
            <img src={card.runtimeAlignment.image} alt={card.runtimeAlignment.imageAlt} />
          </figure>
          <p><EmphasizedText text={card.runtimeAlignment.summary} phrases={card.runtimeAlignment.summaryEmphasis} /></p>
        </section>

        <section className="detail-thermal-section detail-runtime-criteria-section">
          <h4 className="detail-thermal-step-heading">{card.inferenceCriteria.title}</h4>
          <div className="detail-runtime-criteria-grid">
            {card.inferenceCriteria.items.map((item) => (
              <div key={item.title} className="detail-runtime-criteria-item">
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="detail-scaling-footer">
          <div className="detail-scaling-footer-block">
            <strong>결과</strong>
            <p><EmphasizedText text={card.result} phrases={card.resultEmphasis} /></p>
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
      title: "중복 Job 생성 차단",
      linkUrl: "https://github.com/solar-ai-dev/pv-fusion/blob/de4e810faa34021c2d3c257ddd1c6cd590f0692a/backend/src/main/resources/db/migration/V8__add_unique_active_analysis_job_per_image.sql#L1-L3",
      points: [
        "Partial Unique Index로 활성 Job 1개만 허용",
        "동시 요청 Race를 DB에서 차단"
      ],
      pointEmphasis: ["Partial Unique Index"]
    },
    {
      accent: "blue",
      title: "메시지 재전달 시 재실행 방지",
      linkUrl: "https://github.com/solar-ai-dev/pv-fusion/blob/378b524e2dae099ba60d1f228e1d108c915b7262/ai-worker/app/infrastructure/db/analysis_job_repository.py#L54-L68",
      points: [
        "조건부 상태 갱신으로 처리 가능한 Job만 선점",
        "이미 선점되거나 완료된 Job은 재실행하지 않음"
      ],
      pointEmphasis: ["조건부 상태 갱신"]
    },
    {
      accent: "green",
      title: "결과·Job 상태 정합성 유지",
      linkUrl: "https://github.com/solar-ai-dev/pv-fusion/blob/develop/ai-worker/app/infrastructure/db/result_repository.py#L149-L284",
      points: [
        "결과·결함 저장 + Job 완료 변경을 단일 Transaction으로 처리",
        "일부만 반영되는 상태 불일치 방지"
      ],
      pointEmphasis: ["단일 Transaction"]
    }
  ];

  return (
    <article className="detail-problem-card detail-sqs-card detail-sqs-flow-card">
      <ContextRow leftLabel="문제" rightLabel="핵심 판단">
        <p><EmphasizedText text="연속·동시 요청으로 동일 이미지의 중복 Job이 생성될 수 있고, SQS 메시지 재전달로 동일 Job이 반복 실행될 수 있으며, 분석 결과와 Job 완료 상태가 서로 어긋날 수 있었습니다." phrases={["중복 Job이 생성될 수 있고", "분석 결과와 Job 완료 상태가 서로 어긋날 수 있었습니다."]} /></p>
        <p><EmphasizedText text="생성 단계는 DB 제약, 실행 단계는 조건부 상태 갱신, 완료 단계는 단일 DB 트랜잭션으로 나눠 중복 실행과 상태 불일치를 단계별로 제어하도록 설계했습니다." phrases={["DB 제약", "조건부 상태 갱신", "단일 DB 트랜잭션"]} /></p>
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
                    <ExternalLinkIcon />
                    <div className="detail-sqs-code-card-head">
                      <strong>{block.title}</strong>
                    </div>
                    {block.description ? <p className="detail-sqs-code-card-description">{block.description}</p> : null}
                    <div className="detail-sqs-code-points">
                      <ul className="detail-card-list">
                        {block.points.map((point) => (
                          <li key={point}><EmphasizedText text={point} phrases={block.pointEmphasis} /></li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </a>
              ) : (
                <article key={block.title} className={`detail-sqs-code-card is-${block.accent}`.trim()}>
                  <div className="detail-sqs-code-card-head">
                    <strong>{block.title}</strong>
                  </div>
                  {block.description ? <p className="detail-sqs-code-card-description">{block.description}</p> : null}
                  <div className="detail-sqs-code-points">
                    <ul className="detail-card-list">
                      {block.points.map((point) => (
                        <li key={point}><EmphasizedText text={point} phrases={block.pointEmphasis} /></li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            ))}
          </div>
        </section>
      </div>

      <section className="detail-sqs-result">
        <h4>결과</h4>
        <p><EmphasizedText text="DB 제약과 조건부 상태 갱신으로 분석 Job 생성·실행 경로의 멱등성을 확보하고, 분석 결과 저장과 Job 완료 상태 변경을 하나의 트랜잭션으로 처리해 실패·재처리 상황에서도 결과와 Job 상태의 정합성을 유지했습니다." phrases={["분석 Job 생성·실행 경로의 멱등성", "하나의 트랜잭션", "결과와 Job 상태의 정합성"]} /></p>
      </section>
    </article>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="detail-sqs-code-card-link-icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path
        d="M11 3h6v6M17 3l-8 8M9 5H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
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
                      : card.kind === "industrial_runtime_alignment"
                        ? <IndustrialRuntimeAlignmentCard card={card} />
                      : <TroubleshootingCard card={card} />}
              </div>
            );
          })}
        </div>
      </div>
    </DetailSection>
  );
}

function UseCaseProcessing({ useCase }) {
  return (
    <div className="detail-use-case-processing">
      <section className="detail-use-case-meta-row">
        <strong>사용 Agent:</strong>
        <span>{useCase.agentCount.replace(/\s/g, "")}</span>
      </section>
      <section className="detail-use-case-workflow">
        <strong>처리흐름:</strong>
        <p>{useCase.agentFlow.join(" → ")}</p>
        {useCase.traceUrl ? (
          <a
            href={useCase.traceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="detail-use-case-trace-link is-icon"
            aria-label={`${useCase.badge} Trace 열기`}
            title="Trace 열기"
          >
            Trace <ExternalLinkIcon />
          </a>
        ) : null}
      </section>
    </div>
  );
}

export function UseCaseCarouselSection({ id, section }) {
  const cases = section.cases ?? [];
  const [selectedUseCaseIndex, setSelectedUseCaseIndex] = useState(null);
  const selectedUseCase = selectedUseCaseIndex === null ? null : cases[selectedUseCaseIndex];

  if (!cases.length) {
    return null;
  }

  useEffect(() => {
    if (!selectedUseCase) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedUseCaseIndex(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedUseCase]);

  return (
    <DetailSection id={id} type={section.type} title={section.title} eyebrow={section.eyebrow} description={section.description}>
      <div className="detail-use-case-gallery" role="list" aria-label="실제 업무 처리 예시">
        {cases.map((useCase, index) => (
          <button
            className="detail-use-case-preview"
            key={useCase.id}
            type="button"
            onClick={() => setSelectedUseCaseIndex(index)}
            aria-haspopup="dialog"
            aria-label={`${useCase.badge} 사례 크게 보기`}
          >
            <div className="detail-use-case-head">
              <h4 className="detail-use-case-title">{useCase.badge}</h4>
            </div>
            <figure className="detail-use-case-screen">
              {useCase.screenshot ? (
                <img src={useCase.screenshot} alt="" />
              ) : (
                <figcaption>실제 제품 화면 추가 예정</figcaption>
              )}
            </figure>
          </button>
        ))}
      </div>
      {selectedUseCase ? (
        <div className="detail-use-case-modal" role="presentation" onClick={() => setSelectedUseCaseIndex(null)}>
          <div
            className="detail-use-case-modal-content"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedUseCase.badge} 사례 상세`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="detail-use-case-modal-head">
              <div>
                <h4 className="detail-use-case-modal-title">{selectedUseCase.badge}</h4>
                <p className="detail-use-case-modal-subtitle">{selectedUseCase.description}</p>
              </div>
              <button type="button" onClick={() => setSelectedUseCaseIndex(null)} aria-label="사례 상세 닫기">닫기</button>
            </div>
            <div className="detail-use-case-modal-media">
              <figure className="detail-use-case-modal-screen">
                <img src={selectedUseCase.screenshot} alt={selectedUseCase.screenshotAlt ?? `${selectedUseCase.badge} 제품 화면`} />
              </figure>
              {selectedUseCaseIndex > 0 ? (
                <button
                  className="detail-use-case-modal-nav is-prev"
                  type="button"
                  aria-label={`${cases[selectedUseCaseIndex - 1].badge} 사례 보기`}
                  onClick={() => setSelectedUseCaseIndex(selectedUseCaseIndex - 1)}
                >
                  <span aria-hidden="true">‹</span>
                </button>
              ) : null}
              {selectedUseCaseIndex < cases.length - 1 ? (
                <button
                  className="detail-use-case-modal-nav is-next"
                  type="button"
                  aria-label={`${cases[selectedUseCaseIndex + 1].badge} 사례 보기`}
                  onClick={() => setSelectedUseCaseIndex(selectedUseCaseIndex + 1)}
                >
                  <span aria-hidden="true">›</span>
                </button>
              ) : null}
            </div>
            <UseCaseProcessing useCase={selectedUseCase} />
          </div>
        </div>
      ) : null}
    </DetailSection>
  );
}

export function EngineeringDecisionsSection({ id, section }) {
  const tabs = (section.tabs ?? []).filter((tab) => tab.id !== "local-llm-quality");
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id ?? null);
  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];

  if (!activeTab) {
    return null;
  }

  const handleKeyDown = (event, index) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === "ArrowLeft"
      ? (index - 1 + tabs.length) % tabs.length
      : event.key === "ArrowRight"
        ? (index + 1) % tabs.length
        : event.key === "Home"
          ? 0
          : tabs.length - 1;
    setActiveTabId(tabs[nextIndex].id);
  };

  return (
    <DetailSection id={id} type={section.type} title={section.title} eyebrow={section.eyebrow}>
      <div className="detail-mcp-decisions-shell">
        <div className="detail-troubleshooting-tabs detail-mcp-decision-tabs" role="tablist" aria-label="MCP Engineering Decisions 탭">
          {tabs.map((tab, index) => {
            const isActive = tab.id === activeTab.id;
            return (
              <button
                key={tab.id}
                type="button"
                className={`detail-troubleshooting-tab ${isActive ? "is-active" : ""}`.trim()}
                role="tab"
                aria-selected={isActive}
                aria-controls={`detail-panel-${tab.id}`}
                id={`detail-tab-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTabId(tab.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                <strong>{tab.title}</strong>
              </button>
            );
          })}
        </div>

        <div
          className="detail-mcp-decision-panel"
          role="tabpanel"
          id={`detail-panel-${activeTab.id}`}
          aria-labelledby={`detail-tab-${activeTab.id}`}
        >
          <article className="detail-problem-card detail-sqs-flow-card detail-mcp-decision-card">
            <ContextRow leftLabel="문제" rightLabel={activeTab.decisionLabel}>
              <p><EmphasizedText text={activeTab.problem} phrases={activeTab.problemHighlights} /></p>
              <p><EmphasizedText text={activeTab.decision} phrases={activeTab.decisionHighlights} /></p>
            </ContextRow>

            <div className="detail-mcp-decision-details">
              {activeTab.validationScenarios?.length ? (
                <section className="detail-mcp-comparison detail-mcp-validation">
                  <div className="detail-mcp-validation-head">
                    <div className="detail-mcp-validation-title-block">
                      <h4>{activeTab.validationTitle ?? "대표 검증 시나리오"}</h4>
                      {activeTab.validationDescription ? (
                        <p>
                          <EmphasizedText text={activeTab.validationDescription} phrases={activeTab.validationDescriptionHighlights} />
                        </p>
                      ) : null}
                    </div>
                    {activeTab.smokeTest ? <span className="detail-mcp-smoke-badge">{activeTab.smokeTest}</span> : null}
                  </div>
                  <div className="detail-mcp-validation-cards">
                    {activeTab.validationScenarios.map((scenario) => (
                      <article className="detail-mcp-validation-card" key={scenario.name}>
                        <div className="detail-mcp-validation-card-head">
                          <strong>{scenario.name}</strong>
                          {scenario.traceUrl ? (
                            <a
                              className="detail-mcp-validation-trace-link"
                              href={scenario.traceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              🔗 Trace 보기 ↗
                            </a>
                          ) : null}
                        </div>
                        <div className="detail-mcp-validation-purpose">
                          <span className="detail-mcp-validation-label">검증 목적</span>
                          <span className="detail-mcp-validation-topic">{scenario.topic}</span>
                        </div>
                          <p>
                            <span className="detail-mcp-validation-field">정상 기준</span>
                            <EmphasizedText text={scenario.criteria} phrases={scenario.highlights} />
                          </p>
                        </article>
                      ))}
                  </div>
                </section>
              ) : null}

              {activeTab.flow?.length ? (
                <div className="detail-mcp-experiment-flow" aria-label="성능 개선 실험 흐름">
                  {activeTab.flow.map((step, index) => (
                    <span key={step}>
                      {step}
                      {index < activeTab.flow.length - 1 ? <i aria-hidden="true">→</i> : null}
                    </span>
                  ))}
                </div>
              ) : null}

              <ComparisonSection tab={activeTab} />

              {activeTab.finalDecision ? (
                <section className="detail-mcp-final-decision">
                  <h4>최종 판단</h4>
                  <strong>{activeTab.finalDecision.selected}</strong>
                  <ul>
                    {activeTab.finalDecision.reasons.map((reason) => <li key={reason}>{reason}</li>)}
                  </ul>
                </section>
              ) : null}

              {activeTab.metrics?.length ? (
                <>
                  {activeTab.metricsTitle ? (
                    <div className="detail-mcp-metrics-head">
                      <h4 className="detail-mcp-metrics-title">{activeTab.metricsTitle}</h4>
                      {activeTab.metricsDescription ? (
                        <p>
                          <EmphasizedText text={activeTab.metricsDescription} phrases={activeTab.metricsDescriptionHighlights} />
                        </p>
                      ) : null}
                    </div>
                  ) : null}
                  <div className={`detail-mcp-metrics-layout ${activeTab.metricsWorkflow ? "has-workflow" : ""} ${activeTab.metricsResult ? "has-result" : ""}`.trim()}>
                    <div className="detail-mcp-metric-set">
                      {activeTab.metricsGridLabel ? (
                        <div className="detail-mcp-panel-heading">
                          <strong className="detail-mcp-panel-title">{activeTab.metricsGridLabel}</strong>
                        </div>
                      ) : null}
                      <div className={`detail-mcp-metric-grid ${activeTab.metrics.length === 3 ? "is-three" : ""} ${activeTab.metricsWorkflow ? "is-stacked" : ""}`.trim()}>
                        {activeTab.metrics.map(([label, before, after, note]) => (
                          <div className="detail-mcp-metric" key={label}>
                            <strong className="detail-mcp-panel-item-title">{label}</strong>
                            <div className={`detail-mcp-metric-values ${after ? "" : "is-detail"}`.trim()}>
                              {before ? <span>{before}{after ? <><i aria-hidden="true"> → </i>{after}</> : null}</span> : null}
                              {note ? <small>{note}</small> : null}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {activeTab.metricsWorkflow ? (
                      <>
                        <i className="detail-mcp-metrics-flow-arrow" aria-hidden="true">→</i>
                        <section className="detail-mcp-improvement-workflow">
                          <div className="detail-mcp-panel-heading">
                            <strong className="detail-mcp-panel-title">{activeTab.metricsWorkflow.title}</strong>
                          </div>
                          <div className="detail-mcp-improvement-workflow-steps">
                            {activeTab.metricsWorkflow.steps.map((step) => <span key={step}>{step}</span>)}
                          </div>
                          <p>
                            <EmphasizedText text={activeTab.metricsWorkflow.description} phrases={activeTab.metricsWorkflow.descriptionHighlights} />
                          </p>
                        </section>
                        {activeTab.metricsResult ? (
                          <>
                            <i className="detail-mcp-metrics-flow-arrow" aria-hidden="true">→</i>
                            <section className="detail-mcp-improvement-result">
                              <div className="detail-mcp-panel-heading detail-mcp-improvement-result-head">
                                <strong className="detail-mcp-panel-title">{activeTab.metricsResult.title}</strong>
                                <span className="detail-mcp-panel-subtitle">{activeTab.metricsResult.subtitle}</span>
                              </div>
                              <div className="detail-mcp-improvement-result-list">
                                {activeTab.metricsResult.items.map(([label, value]) => (
                                  <div key={label}>
                                    <strong className="detail-mcp-panel-item-title">{label}</strong>
                                    <span>{value}</span>
                                  </div>
                                ))}
                              </div>
                            </section>
                          </>
                        ) : null}
                      </>
                    ) : null}
                  </div>
                </>
              ) : null}

              {activeTab.summary ? (
                <section className="detail-scaling-footer">
                  <div className="detail-scaling-footer-block">
                    <strong>{activeTab.summaryLabel ?? "결과"}</strong>
                    <p><EmphasizedText text={activeTab.summary} phrases={activeTab.summaryEmphasis} /></p>
                  </div>
                </section>
              ) : null}

              {activeTab.fullResultsUrl ? (
                <a className="detail-mcp-results-link" href={activeTab.fullResultsUrl} target="_blank" rel="noopener noreferrer">
                  전체 실험 결과 · 측정 조건 · Raw Data 보기 ↗
                </a>
              ) : activeTab.fullResultsLabel ? (
                <span className="detail-mcp-results-link is-static">{activeTab.fullResultsLabel}</span>
              ) : null}
            </div>
          </article>
        </div>
      </div>
    </DetailSection>
  );
}
