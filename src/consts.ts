import type { IconMap, SocialLink, Site } from '@/types';

export const SITE: Site = {
  title: 'Victor Griggi',
  description: 'Your description here.', // TODO: Add description
  href: 'https://victorgriggi.com',
  author: 'Victor',
  locale: 'pt-BR',
};

export const NAV_LINKS: SocialLink[] = [
  { href: '#hero', label: 'Início' },
  // { href: "#projects", label: "Projetos" },
  { href: '#manifest', label: 'Manifesto' },
  { href: '#pricing', label: 'Colaboração' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://github.com/vctorgriggi', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/victorgriggi/', label: 'LinkedIn' },
  { href: 'mailto:contato@victorgriggi.com', label: 'Email' },
];

export const ICON_MAP: IconMap = {
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Website: 'lucide:globe',
  RSS: 'lucide:rss',
  Email: 'lucide:mail',
  Out: 'lucide:external-link',
};
