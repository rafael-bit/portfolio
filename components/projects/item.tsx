import type { ShowcaseProject } from './content';
import { IconGithub } from './icons';
import { ProjectShowcaseMedia } from './showcase-media';
import { TechIcon } from './tech-icons';

type ProjectItemProps = {
  project: ShowcaseProject;
};

export function ProjectItem({ project }: ProjectItemProps) {
  const reverse = project.reverse ?? false;

  return (
    <article
      className={
        reverse ? 'projects__item projects__item--reverse' : 'projects__item'
      }
    >
      <div className="projects__copy">
        <div className="projects__title-row">
          <h3 className="projects__item-title">{project.title}</h3>
          <a
            href={project.github}
            className="projects__github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub — ${project.title}`}
          >
            <IconGithub />
          </a>
        </div>

        <p className="projects__item-desc">{project.description}</p>

        <div className="projects__skills">
          <p className="projects__skills-label">{project.skillsLabel}</p>
          <ul className="projects__skills-list">
            {project.skills.map((skill) => (
              <li key={skill.label}>
                <span className="projects__skill" title={skill.label}>
                  <TechIcon id={skill.icon} size={28} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ProjectShowcaseMedia project={project} />
    </article>
  );
}
