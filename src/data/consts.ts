import type { NavLink, SocialLink, Site } from '@/types';
import { ICONS } from './icons';

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
  { href: '#hero', label: 'Início', icon: ICONS.Home },
  { href: '#manifest', label: 'Manifesto', icon: ICONS.BookOpen },
  { href: '#pricing', label: 'Colaboração', icon: ICONS.Handshake },
];

// Social links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/vctorgriggi',
    label: 'GitHub',
    icon: ICONS.GitHub,
  },
  {
    href: 'https://www.linkedin.com/in/victorgriggi/',
    label: 'LinkedIn',
    icon: ICONS.LinkedIn,
  },
  {
    href: 'mailto:contato@victorgriggi.com',
    label: 'Email',
    icon: ICONS.Mail,
  },
];
