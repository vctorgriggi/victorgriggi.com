import Astro from '@/assets/icons/astro.svg';
import Tailwind from '@/assets/icons/tailwind.svg';
import NextJS from '@/assets/icons/nextjs.svg';
import React from '@/assets/icons/react.svg';
import TypeScript from '@/assets/icons/typescript.svg';
import Vercel from '@/assets/icons/vercel.svg';

export const ICONS = {
  stack: {
    Astro,
    Tailwind,
    NextJS,
    React,
    TypeScript,
    Vercel,
  },
  ui: {
    Home: 'lucide:home',
    BookOpen: 'lucide:book-open',
    Handshake: 'lucide:handshake',

    GitHub: 'lucide:github',
    LinkedIn: 'lucide:linkedin',
    Mail: 'lucide:mail',

    Code: 'lucide:code',
    Smartphone: 'lucide:smartphone',
    Palette: 'lucide:palette',

    ExternalLink: 'lucide:external-link',
    Check: 'lucide:check',
  },
} as const;

export type StackIconName = keyof typeof ICONS.stack;
export type UIIconName = keyof typeof ICONS.ui;
