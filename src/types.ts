import type { STACK_ICONS } from '@/data/icons';

// Site + Navigation
export interface Site {
  title: string;
  description: string;
  href: string;
  author: string;
  locale: string;
}

export interface NavLink {
  href: string;
  label: string;
  icon: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: string;
}

// Tech Skills + Stack
export type StackIconKey = keyof typeof STACK_ICONS;

export interface TechSkill {
  name: string;
  icon: StackIconKey;
}

export interface SkillCategory {
  label: string;
  iconName: 'Code' | 'Smartphone' | 'Palette';
  items: string[];
}

export interface StackItem {
  label: string;
  name: string;
  icon: StackIconKey;
}

// Projects + Process
export interface ProjectFormat {
  name: string;
  description: string;
  price: string;
  features: string[];
  featured?: boolean;
  note?: string;
}

export interface ProcessStep {
  title: string;
  text: string;
}
