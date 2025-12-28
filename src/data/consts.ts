import type { IconMap, NavLink, SocialLink, Site } from '@/types';

// Site metadata
export const SITE: Site = {
  title: 'Victor Griggi',
  description:
    'Victor é um Desenvolvedor Frontend que constrói interfaces acessíveis e experiências digitais bem estruturadas, priorizando clareza, fluxo e manutenção.',
  href: 'https://victorgriggi.com',
  author: 'Victor',
  locale: 'pt-BR',
};

// Navigation links
export const NAV_LINKS: NavLink[] = [
  { href: '#hero', label: 'Início', icon: 'lucide:home' },
  { href: '#manifest', label: 'Manifesto', icon: 'lucide:book-open' },
  { href: '#pricing', label: 'Colaboração', icon: 'lucide:handshake' },
];

// Social links
export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://github.com/vctorgriggi', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/victorgriggi/', label: 'LinkedIn' },
  { href: 'mailto:contato@victorgriggi.com', label: 'Email' },
];

// Icon mapping for social links
export const ICON_MAP: IconMap = {
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Email: 'lucide:mail',
  Out: 'lucide:external-link',
};
