import type { IconType } from 'react-icons';
import {
  SiAppwrite,
  SiClerk,
  SiCloudinary,
  SiNextdotjs,
  SiPrisma,
  SiShadcnui,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from 'react-icons/si';

export type TechIconId =
  | 'nextjs'
  | 'tailwind'
  | 'shadcn'
  | 'zod'
  | 'appwrite'
  | 'clerk'
  | 'cloudinary'
  | 'prisma'
  | 'stripe'
  | 'typescript';

const TECH_ICONS: Record<TechIconId, IconType> = {
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  shadcn: SiShadcnui,
  zod: SiZod,
  appwrite: SiAppwrite,
  clerk: SiClerk,
  cloudinary: SiCloudinary,
  prisma: SiPrisma,
  stripe: SiStripe,
  typescript: SiTypescript,
};

type TechIconProps = {
  id: TechIconId;
  size?: number;
};

export function TechIcon({ id, size = 28 }: TechIconProps) {
  const Icon = TECH_ICONS[id];
  return <Icon size={size} aria-hidden />;
}
