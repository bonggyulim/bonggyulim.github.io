const actionDefinitions = [
  {
    key: "service",
    label: "서비스",
    urlKey: "serviceUrl",
    ariaLabel: (title) => `${title} 서비스 열기`
  },
  {
    key: "github",
    label: "GitHub",
    urlKey: "githubUrl",
    ariaLabel: (title) => `${title} GitHub 열기`
  },
  {
    key: "ppt",
    label: "PPT",
    urlKey: "pptUrl",
    ariaLabel: (title) => `${title} 발표 자료 열기`
  }
];

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path
        d="M11 4h5v5M16 4l-7 7M8 6H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export default function ProjectActionDock({ project }) {
  const actions = actionDefinitions
    .map((definition) => ({
      ...definition,
      href: project[definition.urlKey]
    }))
    .filter((action) => action.href);

  if (actions.length === 0) {
    return null;
  }

  return (
    <nav
      className="project-action-dock floating-project-links"
      style={{ "--action-count": actions.length }}
      aria-label={`${project.title} 프로젝트 링크`}
    >
      {actions.map((action) => (
        <a
          key={action.key}
          className="project-action-link"
          href={action.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={action.ariaLabel(project.title)}
        >
          <span>{action.label}</span>
          <ExternalLinkIcon />
        </a>
      ))}
    </nav>
  );
}
