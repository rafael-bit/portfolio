import Image from 'next/image';
import type { ShowcaseProject } from './content';

type ProjectShowcaseMediaProps = {
  project: ShowcaseProject;
};

export function ProjectShowcaseMedia({ project }: ProjectShowcaseMediaProps) {
  return (
    <div className="projects__showcase-media">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="projects__showcase-img"
        sizes="(max-width: 849px) 100vw, 28rem"
      />
    </div>
  );
}
