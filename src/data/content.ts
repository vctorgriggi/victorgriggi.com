import type {
  ProcessStep,
  Project,
  ProjectFormat,
  SkillCategory,
  StackItem,
  TechSkill,
} from '@/types';

// Tech Skills (usado no TechSkills.astro)
export const TECH_SKILLS: TechSkill[] = [
  { name: 'React', icon: 'React' },
  { name: 'TypeScript', icon: 'TypeScript' },
  { name: 'Next.js', icon: 'NextJS' },
  { name: 'Astro', icon: 'Astro' },
  { name: 'Tailwind CSS', icon: 'Tailwind' },
];

// Skill Categories (usado no SkillList.tsx)
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: 'Desenvolvimento Web',
    iconName: 'Code',
    items: [
      'Aplicações web e SPAs',
      'Integração com APIs e serviços externos',
      'Sites institucionais, landing pages e portfólios',
      'Projetos com várias telas e fluxos',
    ],
  },
  {
    label: 'Desenvolvimento Mobile',
    iconName: 'Smartphone',
    items: [
      'Apps com React Native',
      'Aplicações conectadas a serviços externos',
    ],
  },
  {
    label: 'UI/UX & Prototipação',
    iconName: 'Palette',
    items: [
      'Design de interface',
      'Prototipação antes do desenvolvimento',
      'Organização de fluxos e navegação',
    ],
  },
];

// Projects (usado no Projects.astro)
export const PROJECTS: Project[] = [
  {
    title: 'Next Supabase Template',
    description:
      'Production-ready Next.js + Supabase starter with auth, profiles, file uploads, and end-to-end type safety. Opinionated architecture for maintainable apps.',
    image: '/projects/next-supabase-template.png',
    preview: 'https://next-supabase-template-zeta.vercel.app/',
    repo: 'https://github.com/vctorgriggi/next-supabase-template',
  },
];

// Pricing Formats (usado no Pricing.astro)
export const PRICING_FORMATS: ProjectFormat[] = [
  {
    name: 'Começo',
    description:
      'Ideal para lançar rápido ou apresentar um serviço com foco total em conversão.',
    price: 'A partir de R$ 900',
    features: [
      'Estrutura direta, pensada para um único objetivo',
      'Design e desenvolvimento responsivo',
      'Entrega rápida (até 7 dias)',
      'Código limpo, sem complexidade desnecessária',
    ],
    note: 'CMS opcional (+R$ 300)',
  },
  {
    name: 'Base',
    description:
      'Para projetos que precisam crescer com organização desde o início.',
    price: 'A partir de R$ 2.400',
    featured: true,
    features: [
      'Estrutura pensada para múltiplos conteúdos e seções',
      'Arquitetura de navegação clara e escalável',
      'CMS incluso para autonomia na gestão',
      'Base sólida para evoluções futuras sem retrabalho',
    ],
    note: 'Escopo ajustado conforme complexidade e volume de conteúdo',
  },
  {
    name: 'Sistema',
    description:
      'Quando o site deixa de ser apenas apresentação e passa a ter lógica própria.',
    price: 'Valor sob consulta',
    features: [
      'Escopo e objetivos definidos em conjunto',
      'Arquitetura técnica personalizada',
      'Integrações específicas e regras de negócio',
      'Foco em performance, manutenção e escalabilidade',
    ],
  },
];

// Process Steps (usado no Process.astro)
export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: '1. Entendimento',
    text: 'Conversamos sobre o problema, o contexto e o que realmente precisa ser resolvido.',
  },
  {
    title: '2. Estrutura',
    text: 'Definição de escopo, arquitetura, fluxo e decisões técnicas antes da execução.',
  },
  {
    title: '3. Execução',
    text: 'Desenvolvimento com foco em clareza, performance e manutenção a longo prazo.',
  },
];

// Footer Stack (usado no Footer.astro)
export const FOOTER_STACK: StackItem[] = [
  { label: 'Feito com', name: 'Astro', icon: 'Astro' },
  { label: 'Estilizado com', name: 'Tailwind CSS', icon: 'Tailwind' },
  { label: 'Publicado com', name: 'Vercel', icon: 'Vercel' },
];
