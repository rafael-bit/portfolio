import { ProjectsCarousel } from './carousel';
import { projectsHeading, showcaseProjects } from './content';
import { ProjectItem } from './item';
import { ProjectsRing } from './ring';

export function Projects() {
  return (
    <section id="projects" className="projects" aria-labelledby="projects-heading">
      <ProjectsRing />
      <div className="projects__pixel" aria-hidden="true" />

      <div className="rail projects__rail">
        <div className="rail__body projects__body">
          <header className="projects__header">
            <h2 id="projects-heading" className="section-label projects__heading">
              <span className="section-label__muted projects__heading-muted">
                {projectsHeading.prefix}
              </span>
              {projectsHeading.label}
              <span className="section-label__muted projects__heading-muted">
                {projectsHeading.suffix}
              </span>
            </h2>
          </header>

          <div className="projects__carousel">
            <ProjectsCarousel />
          </div>

          <div className="projects__list">
            {showcaseProjects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
