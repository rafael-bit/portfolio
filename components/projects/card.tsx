import Image from 'next/image';
import type { Project } from './content';

function IconExternal() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 10.5L10.5 3.5M10.5 3.5H5M10.5 3.5V9"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  return (
    <Image
      src={project.image}
      alt={project.title}
      fill
      className="projects__preview-img"
      sizes="(max-width: 850px) 50vw, 320px"
    />
  );
}

type ProjectCardProps = {
  project: Project;
  state: 'active' | 'side' | 'far';
};

export function ProjectCard({ project, state }: ProjectCardProps) {
  const active = state === 'active';
  const stateClass =
    state === 'active'
      ? 'projects__card--active'
      : state === 'side'
        ? 'projects__card--side'
        : 'projects__card--far';

  return (
    <article
      className={`projects__card ${stateClass}`}
      aria-hidden={!active}
    >
      <div className="projects__card-frame">
        <div className="projects__card-inner">
          <div className="projects__card-media">
            <ProjectPreview project={project} />
          </div>
          <div className="projects__card-body">
            <h3 className="projects__card-title">{project.title}</h3>
            <p className="projects__card-desc">{project.description}</p>
            <a
              href={project.href}
              className="projects__card-link"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={active ? 0 : -1}
            >
              Ver
              <IconExternal />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
