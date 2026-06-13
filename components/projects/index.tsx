import { ProjectsCarousel } from './carousel';
import { projectsHeading, showcaseProjects, workHeading } from './content';
import { ProjectItem } from './item';
import { ProjectsRing } from './ring';

export function Projects() {
  return (
    <section id="projects" className="projects" aria-labelledby="work-heading">
      <ProjectsRing />
      <div className="projects__pixel" aria-hidden="true" />

      <div className="rail projects__rail">
        <div className="rail__body projects__body">
          <div className="projects__work">
            <header className="projects__header">
              <h2 id="work-heading" className="section-label projects__heading">
                <span className="section-label__muted projects__heading-muted">
                  {workHeading.prefix}
                </span>
                {workHeading.label}
                <span className="section-label__muted projects__heading-muted">
                  {workHeading.suffix}
                </span>
              </h2>
            </header>

            <div className="projects__carousel">
              <ProjectsCarousel />
            </div>
          </div>

          <div className="projects__showcase">
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

            <div className="projects__list">
              {showcaseProjects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
