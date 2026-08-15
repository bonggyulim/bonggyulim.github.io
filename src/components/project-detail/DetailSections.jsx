import { useState } from "react";

const contributionGroups = [
  { id: "build", title: "설계·구현" },
  { id: "operate", title: "운영·배포" }
];

const sectionEyebrows = {
  contribution_cards: "CONTRIBUTION",
  contribution_summary: "CONTRIBUTION",
  problem_solution: "PROBLEM SOLVING"
};

const syntaxTokenPattern = /(#.*$|'[^']*'|\b(?:CREATE|UNIQUE|INDEX|ON|WHERE|IN|UPDATE|SET|AND|and|in|if|raise|with|as|or)\b|\b(?:save_result|save_defects|mark_succeeded|delete|cursor|commit|_insert_result|_insert_defects|_mark_job_succeeded|delete_message|rowcount)\b|\b(?:StateTransitionError|JobStateTransitionError)\b|\b[A-Za-z_][A-Za-z0-9_]*\b|==|!=|<=|>=|=>|->|[=:+\-*/()[\]{}.,])/g;
const syntaxKeywords = new Set(["CREATE", "UNIQUE", "INDEX", "ON", "WHERE", "IN", "UPDATE", "SET", "AND", "and", "in", "if", "raise", "with", "as", "or"]);
const syntaxFunctions = new Set(["save_result", "save_defects", "mark_succeeded", "delete", "cursor", "commit", "_insert_result", "_insert_defects", "_mark_job_succeeded", "delete_message", "rowcount"]);
const troubleshootingTabs = {
  "sqs-job-state-consistency": {
    title: "SQS 환경에서 분석 Job 중복 생성·실행 방지"
  },
  "worker-scaling-strategy": {
    title: "운영 예산 기반 서버 구성 및 Worker 확장 전략 검증"
  },
  "thermal-model-experiments": {
    title: "Thermal 데이터 정제 개선과 모델 실험"
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

function DetailSection({ id, className = "", type, title, description, hideEyebrow = false, children }) {
  if (!children) {
    return null;
  }

  return (
    <section id={id} className={`detail-content-section ${className}`.trim()}>
      {title ? (
        <header className="detail-section-heading">
          {!hideEyebrow && sectionEyebrows[type] ? <span>{sectionEyebrows[type]}</span> : null}
          <h2>{title}</h2>
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
          <p className="eyebrow">PROJECT DETAIL</p>
          <div className="detail-hero-head">
            <h1>{project.title}</h1>
            <span className={`status-badge ${project.status === "in_progress" ? "is-progress" : ""}`}>
              {project.statusLabel}
            </span>
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
      description={section.description}
      hideEyebrow={isRoleRowsLayout}
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
  return (
    <DetailSection
      id={id}
      type={section.type}
      title={section.title}
      description={section.description}
      className="detail-architecture-section"
    >
      <div className="detail-architecture-panel">
        <div className="detail-architecture-image-card">
          <a
            className="detail-architecture-image-link"
            href={section.externalUrl ?? section.image}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagnifyIcon />
          </a>
          <img src={section.image} alt={section.imageAlt ?? (section.title + " architecture diagram")} />
        </div>
        {section.legend ? (
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

function WorkerComparisonCard({ comparison, accent = "neutral", isFeatured = false }) {
  return (
    <article className={`detail-worker-comparison ${isFeatured ? "is-featured" : ""} is-${accent}`.trim()}>
      <header className="detail-worker-comparison-head">
        <strong>{comparison.title}</strong>
        <span>{comparison.scenario}</span>
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
      </div>
      <p className="detail-worker-comparison-conclusion">{comparison.conclusion}</p>
    </article>
  );
}

function WorkerScalingCard({ card }) {
  return (
    <article className="detail-problem-card detail-worker-card">
      <h3 className="detail-problem-title">{card.title}</h3>
      <div className="detail-problem-grid detail-problem-grid-compact">
        <FieldBlock label="기준"><EmphasizedText text={card.basis} phrases={card.basisEmphasis} /></FieldBlock>
        <FieldBlock label="검증"><EmphasizedText text={card.validation} phrases={card.validationEmphasis} /></FieldBlock>
      </div>
      <div className="detail-problem-details detail-worker-details">
        <section className="detail-worker-section">
          <h4>1. MVP 운영 예산 산정</h4>
          <p><EmphasizedText text={card.budgetDescription} /></p>
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
            <figure className="detail-cost-image"><img src="/assets/projects/pv-infra-cost.png" alt="AWS Pricing Calculator 운영 비용 산정" /></figure>
          </div>
        </section>

        <section className="detail-worker-section">
          <h4>2. 실험 조건</h4>
          <p>{card.experimentSummary}</p>
        </section>

        <section className="detail-worker-section">
          <h4>3. Worker 확장 방식 검증</h4>
          <div className="detail-worker-comparison-grid">
            <WorkerComparisonCard comparison={card.comparisonOne} accent="amber" />
            <WorkerComparisonCard comparison={card.comparisonTwo} accent="teal" isFeatured />
          </div>
          <p className="detail-worker-summary">{card.baselineSummary}</p>
        </section>

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
      <h3 className="detail-problem-title">{card.title}</h3>
      <div className="detail-problem-grid detail-problem-grid-compact">
        <FieldBlock label="문제"><EmphasizedText text={card.problem} phrases={card.problemEmphasis} /></FieldBlock>
        <FieldBlock label="실험·결정"><EmphasizedText text={card.decision} phrases={card.decisionEmphasis} /></FieldBlock>
      </div>
      <div className="detail-problem-details detail-thermal-details">
        <section className="detail-thermal-section">
          <h4>01. 서비스 입력 기준 데이터 정리</h4>
          <div className="detail-thermal-data-grid">
            {card.dataCards.map(([value, title, note, variant]) => (
              <div key={value} className={`detail-thermal-data-card ${variant ? `is-${variant}` : ""}`.trim()}>
                <strong>{value}</strong><span>{title}</span><small>{note}</small>
              </div>
            ))}
          </div>
          <p>{card.dataSummary}</p>
        </section>

        <section className="detail-thermal-section">
          <h4>02. Thermal 결함 Taxonomy 재정의</h4>
          <p className="detail-thermal-class-transition"><strong>원천 8-Class</strong><span> → </span><strong className="is-teal">서비스 기준 3-Class</strong></p>
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
          <p>{card.classSummary}</p>
        </section>

        <section className="detail-thermal-section">
          <h4>03. Stratified 3-Fold로 증강·전처리 후보 비교</h4>
          <div className="detail-thermal-stage-grid">
            {card.augmentationStages?.map((stage) => (
              <article key={stage.step} className="detail-thermal-stage-card">
                <span className="detail-thermal-stage-step">{stage.step}</span>
                <strong>{stage.title}</strong>
                <p className="detail-thermal-stage-metric">{stage.metric}</p>
                <div className="detail-thermal-stage-values">
                  <span>{stage.before}</span>
                  <span aria-hidden="true">→</span>
                  <span>{stage.after}</span>
                </div>
                <strong className="detail-problem-emphasis is-teal">{stage.delta}</strong>
              </article>
            ))}
          </div>
          <p>{card.augmentationSummary}</p>
        </section>

        <div className="detail-thermal-compare-grid">
          <section className="detail-thermal-section detail-thermal-preprocess-section">
            <h4>04. Thermal 전처리 후보 비교</h4>
            <div className="detail-thermal-image-grid">
              {card.preprocess.map(([id, title, note, src]) => (
                <figure key={id}>
                  <img src={src} alt={`${title} 전처리 결과`} />
                  <figcaption><strong>{title}</strong><span>{note}</span></figcaption>
                </figure>
              ))}
            </div>
            <p><EmphasizedText text={card.preprocessSummary} phrases={card.preprocessSummaryEmphasis} /></p>
          </section>

          <section className="detail-thermal-section detail-thermal-threshold-section">
            <h4>05. 분리된 test set에서 Threshold 검증</h4>
            <figure className="detail-thermal-tradeoff">
              <img src="/assets/projects/thermal_threshold_tradeoff.png" alt="Confidence Threshold Trade-off" />
            </figure>
            <p className="detail-thermal-threshold-note">최종 Threshold conf = 0.55, IoU = 0.45</p>
          </section>
        </div>

        <section className="detail-worker-decision"><h4>결정</h4><p><EmphasizedText text={card.finalDecision} phrases={card.finalDecisionEmphasis} /></p></section>
      </div>
    </article>
  );
}

function SqsTroubleshootingCard() {
  const codeBlocks = [
    {
      accent: "teal",
      title: "Active Job 중복 차단",
      description: "이미지당 QUEUED·RUNNING Job을 최대 1개로 제한해 중복 생성을 DB에서 차단",
      linkUrl: "https://github.com/solar-ai-dev/pv-fusion/blob/de4e810faa34021c2d3c257ddd1c6cd590f0692a/backend/src/main/resources/db/migration/V8__add_unique_active_analysis_job_per_image.sql#L1-L3",
      code: [
        "CREATE UNIQUE INDEX ux_analysis_jobs_one_active_per_image",
        "ON analysis_jobs (image_id)",
        "WHERE job_status IN ('QUEUED', 'RUNNING');"
      ].join("\n")
    },
    {
      accent: "blue",
      title: "조건부 Claim",
      description: "QUEUED 상태의 Job만 RUNNING으로 전환해 동일 Job의 중복 실행을 차단",
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
      <h3 className="detail-problem-title">SQS 환경에서 분석 Job 중복 생성·실행 방지</h3>

      <div className="detail-sqs-head-grid">
        <section className="detail-sqs-block">
          <strong>문제</strong>
          <p><strong>연속 요청과 SQS 재전달이 겹치면 동일 이미지의 분석 Job이 중복 생성·실행될 수 있었습니다.</strong></p>
        </section>
        <section className="detail-sqs-block detail-sqs-highlight">
          <strong>핵심 판단</strong>
          <p><strong>이미지당 Active Job은 최대 1개</strong>로 제한하고, Worker는 <code>QUEUED → RUNNING</code>을 조건부 Claim하도록 설계했습니다.</p>
        </section>
      </div>

      <div className="detail-sqs-visual-grid">
        <div className="detail-sqs-diagram-link" aria-hidden="true">
          <img className="detail-sqs-diagram" src="/assets/projects/diagram.png" alt="SQS Job 상태 안정화 다이어그램" />
        </div>

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
        <p><strong>DB 제약과 조건부 상태 전이로 동일 이미지의 Active Job 중복 생성과 동일 Job의 중복 실행을 방지했습니다.</strong></p>
      </section>
    </article>
  );
}

function TroubleshootingCard({ card }) {
  return (
    <article className="detail-problem-card">
      <h3 className="detail-problem-title">{card.title}</h3>
      <div className="detail-problem-grid">
        <FieldBlock label="문제">{card.problem}</FieldBlock>
        <FieldBlock label="판단·해결">{[card.decision, ...(card.implementation ?? [])].filter(Boolean)}</FieldBlock>
        <FieldBlock label="결과">{card.result}</FieldBlock>
      </div>
    </article>
  );
}

export function TroubleshootingSection({ id, section }) {
  const cards = [section.card, ...(section.additionalCards ?? [])].filter(Boolean);
  const [activeCardId, setActiveCardId] = useState(cards[0]?.id ?? null);

  if (!cards.length) {
    return null;
  }

  const activeCard = cards.find((card) => card.id === activeCardId) ?? cards[0];

  const handleTabChange = (cardId) => {
    setActiveCardId(cardId);
  };

  return (
    <DetailSection id={id} type={section.type} title={section.title} description={section.description}>
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
                    : <TroubleshootingCard card={card} />}
              </div>
            );
          })}
        </div>
      </div>
    </DetailSection>
  );
}
