import type { StackIconName } from '@/data/icons';

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
export interface TechSkill {
  name: string;
  icon: StackIconName;
}

export interface SkillCategory {
  label: string;
  iconName: 'Code' | 'Smartphone' | 'Palette';
  items: string[];
}

export interface StackItem {
  label: string;
  name: string;
  icon: StackIconName;
}

// Projects + Process
export interface Project {
  title: string;
  description: string;
  image: string;
  preview: string;
  repo?: string;
}

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
