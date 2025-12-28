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
  { name: 'Node.js', icon: 'NodeJS' },
  { name: 'NestJS', icon: 'NestJS' },
  { name: 'PostgreSQL', icon: 'PostgreSQL' },
  { name: 'MySQL', icon: 'MySQL' },
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
    name: 'Página Única',
    description:
      'Solução enxuta para apresentar uma ideia, produto ou serviço com foco em um único objetivo.',
    price: 'A partir de R$ 1.400',
    features: [
      'Estrutura focada em conversão',
      'Design e desenvolvimento responsivo',
      'Implementação direta, sem arquitetura complexa',
      'CMS opcional para edição de conteúdo',
    ],
    note: 'CMS opcional (+R$ 400)',
  },
  {
    name: 'Website Estruturado',
    description:
      'Projeto completo de presença online, pensado para crescer, organizar conteúdo e sustentar o produto ao longo do tempo.',
    price: 'A partir de R$ 2.800',
    featured: true,
    features: [
      'Múltiplas páginas com hierarquia clara',
      'Arquitetura de navegação e conteúdo',
      'CMS incluso para gerenciamento',
      'Base preparada para evoluções futuras',
    ],
  },
  {
    name: 'Projeto Sob Medida',
    description:
      'Quando o problema exige decisões técnicas e estruturais fora de formatos pré-definidos.',
    price: 'Valor sob consulta',
    features: [
      'Escopo definido em conjunto',
      'Arquitetura personalizada',
      'Integrações e soluções específicas',
      'Foco em performance e manutenção',
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
