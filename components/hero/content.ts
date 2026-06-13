export const hero = {
  title: ['SOFTWARE', 'ENGINEER'] as const,
  bio: 'Construindo sistemas, produtos e soluções para o mundo real.',
  highlights: [
    'ERP em +130 municípios',
    'Plataforma com +20 mil eventos',
    'Controle de +500 veículos',
    'Criador do Craftly',
  ] as const,
  cta: { label: 'OPEN TO WORK', href: 'mailto:contato@rafaelaquila.com' },
  socials: [
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/rafael-bit',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/rafael-aquila',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      href: 'https://instagram.com/orafaelaquila',
    },
    {
      id: 'twitter',
      label: 'Twitter',
      href: 'https://x.com/orafaelaquila',
    },
  ],
} as const;
