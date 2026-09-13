import type { IconType } from 'react-icons';
import {
  SiAppwrite,
  SiClerk,
  SiCloudinary,
  SiExpo,
  SiFirebase,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiShadcnui,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
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
  | 'typescript'
  | 'expo'
  | 'react'
  | 'firebase'
  | 'vite'
  | 'supabase'
  | 'reactquery';

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
  expo: SiExpo,
  react: SiReact,
  firebase: SiFirebase,
  vite: SiVite,
  supabase: SiSupabase,
  reactquery: SiReactquery,
};

type TechIconProps = {
  id: TechIconId;
  size?: number;
};

export function TechIcon({ id, size = 28 }: TechIconProps) {
  const Icon = TECH_ICONS[id];
  return <Icon size={size} aria-hidden />;
}
