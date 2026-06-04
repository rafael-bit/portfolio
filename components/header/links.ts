export const links = [
  { href: '/', label: 'HOME', id: 'home' },
  { href: '/#about', label: 'ABOUT', id: 'about' },
  { href: '/#projects', label: 'PROJECTS', id: 'projects' },
  { href: '/#gallery', label: 'GALLERY', id: 'gallery' },
] as const;

export type NavLink = (typeof links)[number];
