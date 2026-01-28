/**
 * lucide (react components)
 */
import type { LucideIcon } from 'lucide-react';
import { Code, Smartphone, Palette, ChevronDown } from 'lucide-react';

export const LUCIDE_ICONS = {
  Code,
  Smartphone,
  Palette,
  ChevronDown,
} as const;

export type LucideIconName = keyof typeof LUCIDE_ICONS;
export type LucideIconComponent = LucideIcon;

/**
 * stack (svgs)
 */
import Astro from '@/assets/icons/astro.svg';
import Tailwind from '@/assets/icons/tailwind.svg';
import NextJS from '@/assets/icons/nextjs.svg';
import React from '@/assets/icons/react.svg';
import TypeScript from '@/assets/icons/typescript.svg';
import Vercel from '@/assets/icons/vercel.svg';

export const STACK_ICONS = {
  Astro,
  Tailwind,
  NextJS,
  React,
  TypeScript,
  Vercel,
} as const;

export type StackIconName = keyof typeof STACK_ICONS;

/**
 * ui
 */
export const ICONS = {
  Home: 'lucide:home',
  BookOpen: 'lucide:book-open',
  Handshake: 'lucide:handshake',

  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Mail: 'lucide:mail',

  ExternalLink: 'lucide:external-link',
  Check: 'lucide:check',
} as const;

export type IconName = keyof typeof ICONS;
