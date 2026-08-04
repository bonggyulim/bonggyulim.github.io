const contributionGroups = [
  { id: "build", title: "설계·구현" },
  { id: "operate", title: "운영·배포" }
];

const sectionEyebrows = {
  contribution_cards: "CONTRIBUTION",
  contribution_summary: "CONTRIBUTION",
  problem_solution: "PROBLEM SOLVING"
};

function DetailSection({ id, className = "", type, title, description, children }) {
  if (!children) {
    return null;
  }

  return (
    <section id={id} className={`detail-content-section ${className}`.trim()}>
      {title ? (
        <header className="detail-section-heading">
          {sectionEyebrows[type] ? <span>{sectionEyebrows[type]}</span> : null}
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
          <p className="detail-summary">{project.description}</p>
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
    <DetailSection id={id} type={section.type} title={section.title} description={section.description}>
      <div className="detail-contribution-panel">
        {groupedCards.length ? (
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

export function TroubleshootingCard({ card }) {
  return (
    <article className="detail-problem-card">
      <h3 className="detail-problem-title">{card.title}</h3>
      <div className="detail-problem-grid">
        <FieldBlock label="문제">{card.problem}</FieldBlock>
        <FieldBlock label="판단·해결">{[card.decision, ...(card.implementation ?? [])]}</FieldBlock>
        <FieldBlock label="결과">{card.result}</FieldBlock>
      </div>
    </article>
  );
}

export function TroubleshootingSection({ id, section }) {
  const cards = section.card ? [section.card] : [];

  if (!cards.length) {
    return null;
  }

  return (
    <DetailSection id={id} type={section.type} title={section.title} description={section.description}>
      <div className="detail-troubleshooting-stack">
        {cards.map((card) => (
          <TroubleshootingCard key={card.id ?? card.title} card={card} />
        ))}
      </div>
    </DetailSection>
  );
}
