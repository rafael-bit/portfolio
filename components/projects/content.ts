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

export const workHeading = {
  prefix: '.../',
  label: 'EXPERIENCE',
  suffix: '/...',
} as const;

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
      'Plataforma de listas de presentes e eventos especiais. +14.000 usuários, +20.000 eventos e atuação em liderança técnica do produto.',
    href: '#',
    image: '/work/meunascimento.png',
  },
  {
    id: 'nossa-vaquinha',
    title: 'Nossa Vaquinha',
    description:
      'Plataforma de campanhas solidárias para apoiar crianças e famílias, com páginas de arrecadação, metas e compartilhamento social.',
    href: '#',
    image: '/work/nossavaquinha.png',
  },
  {
    id: 'wsouza',
    title: 'WSouza',
    description:
      'ERP com gestão integrada de processos e operações. Utilizado por mais de 130 municípios.',
    href: '#',
    image: '/work/wsouza.png',
  },
  {
    id: 'comtrasil',
    title: 'Comtrasil',
    description:
      'Desenvolvimento de sistemas para gestão operacional e de monitoramento, incluindo solução de bloqueios para mais de 500 veículos.',
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
      'Biblioteca digital para acelerar o desenvolvimento de interfaces: componentes prontos para uso, paletas de cores e ícones personalizáveis num só lugar, pensada para quem precisa montar telas com mais rapidez e consistência visual.',
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
      'Plataforma para organizar e gerir ficheiros multimédia num painel centralizado. Permite fazer upload, visualizar, pesquisar e controlar o armazenamento com uma experiência fluida e interface moderna.',
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
      'Ferramenta de edição de imagens com IA para remover fundos, redimensionar, melhorar resolução e ajustar cores em poucos cliques. Projeto completo com autenticação, gestão de ficheiros e fluxo de pagamento integrado.',
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
