export const contact = {
  cv: {
    label: 'Download CV',
    href: '/resume.pdf',
  },
  links: [
    {
      id: 'email',
      href: 'mailto:raquila743@gmail.com',
      label: 'E-mail',
    },
    {
      id: 'github',
      href: 'https://github.com/rafael-bit',
      label: 'GitHub',
    },
    {
      id: 'linkedin',
      href: 'https://linkedin.com/in/rafael-aquila',
      label: 'LinkedIn',
    },
  ],
} as const;

export type ContactLinkId = (typeof contact.links)[number]['id'];
