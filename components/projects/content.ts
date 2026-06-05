import type { TechIconId } from './tech-icons';

export type ShowcaseSkill = {
  label: string;
  icon: TechIconId;
};

function techSkills(items: { label: string; icon: TechIconId }[]): ShowcaseSkill[] {
  return items;
}

export type ShowcaseProject = {
  id: string;
  title: string;
  image: string;
  github: string;
  description: string;
  skillsLabel: string;
  skills: ShowcaseSkill[];
  reverse?: boolean;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
};

export const projectsHeading = {
  prefix: '.../',
  label: 'PROJECTS',
  suffix: '/...',
} as const;

export const projects: Project[] = [
  {
    id: 'meu-nascimento',
    title: 'Meu Nascimento',
    description:
      'Plataforma de listas de presentes para recém-nascidos, aniversários e outros eventos especiais, onde família e amigos podem participar e compartilhar o evento.',
    href: '#',
    image: '/work/meunascimento.png',
  },
  {
    id: 'nossa-vaquinha',
    title: 'Nossa Vaquinha',
    description:
      'Campanhas de vaquinha para crianças com necessidades específicas, onde família e amigos podem participar e compartilhar o evento.',
    href: '#',
    image: '/work/nossavaquinha.png',
  },
  {
    id: 'wsouza',
    title: 'W Souza',
    description:
      'Empresa de gestão escolar, com ferramentas de gestão de alunos, professores, turmas e matrículas.',
    href: '#',
    image: '/work/wsouza.png',
  },
  {
    id: 'comtrasil',
    title: 'Comtrasil',
    description:
      'Empresa de transporte de cargas, com ferramentas de gestão de rotas e veículos.',
    href: '#',
    image: '/work/comtrasil.png',
  },
];

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: 'craftly',
    title: 'Craftly',
    image: '/projects/craftly.png',
    github: 'https://github.com/rafael-bit/craftly',
    description:
      'Craftly é um site com componentes prontos, ferramentas de cores e ícones personalizáveis para desenvolvedores e designers.',
    skillsLabel: 'TECNOLOGIAS APLICADAS',
    skills: techSkills([
      { label: 'TypeScript', icon: 'typescript' },
      { label: 'Next.js', icon: 'nextjs' },
      { label: 'Tailwind CSS', icon: 'tailwind' },
    ]),
  },
  {
    id: 'cloud',
    title: 'CloudSpace',
    image: '/projects/cloud.png',
    github: 'https://github.com/rafael-bit/storage-management',
    description:
      'CloudSpace é uma aplicação de gestão de mídia com recursos como gestão de armazenamento. Desenvolvido com Next.js, Shadcn UI, Zod e Appwrite.',
    skillsLabel: 'TECNOLOGIAS APLICADAS',
    skills: techSkills([
      { label: 'TypeScript', icon: 'typescript' },
      { label: 'Next.js', icon: 'nextjs' },
      { label: 'Tailwind CSS', icon: 'tailwind' },
      { label: 'Shadcn', icon: 'shadcn' },
      { label: 'Zod', icon: 'zod' },
      { label: 'Appwrite', icon: 'appwrite' },
    ]),
    reverse: true,
  },
  {
    id: 'imgfill',
    title: 'ImgFill',
    image: '/projects/imgfill.png',
    github: 'https://github.com/rafael-bit/ImgFill',
    description:
      'ImgFill é uma ferramenta de IA para edição de imagens, com remoção de fundo, redimensionamento, melhoria de resolução e ajustes de cor.',
    skillsLabel: 'TECNOLOGIAS APLICADAS',
    skills: techSkills([
      { label: 'Next.js', icon: 'nextjs' },
      { label: 'Clerk', icon: 'clerk' },
      { label: 'Cloudinary', icon: 'cloudinary' },
      { label: 'Prisma', icon: 'prisma' },
      { label: 'Tailwind CSS', icon: 'tailwind' },
      { label: 'Stripe', icon: 'stripe' },
    ]),
  },
];
