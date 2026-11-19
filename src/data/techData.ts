import type { StaticImageData } from 'next/image';
import {
  siAntdesign,
  siCss,
  siFigma,
  siGit,
  siHtml5,
  siI18next,
  siJavascript,
  siJira,
  siMockserviceworker,
  siMui,
  siNextdotjs,
  siPostman,
  siPrisma,
  siRadixui,
  siReact,
  siReacthookform,
  siReactquery,
  siReactrouter,
  siRedux,
  siSass,
  siSentry,
  siShadcnui,
  siStyledcomponents,
  siSupabase,
  siTailwindcss,
  siTestinglibrary,
  siTypescript,
  siVite,
  siVitest,
  siZod,
  type SimpleIcon,
} from 'simple-icons';

// not in simple-icons, so it stays a raster logo
import editorjs from '@/assets/icons/editorjs.png';

export type TechLogoType = StaticImageData | SimpleIcon;

export type TechType = {
  name: string;
  logo: TechLogoType;
  url: string;
};

export const techData: TechType[] = [
  // core
  {
    name: 'HTML',
    logo: siHtml5,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: 'CSS',
    logo: siCss,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'JavaScript',
    logo: siJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'TypeScript',
    logo: siTypescript,
    url: 'https://www.typescriptlang.org',
  },
  { name: 'React', logo: siReact, url: 'https://react.dev' },
  { name: 'Next.js', logo: siNextdotjs, url: 'https://nextjs.org' },
  { name: 'React Router', logo: siReactrouter, url: 'https://reactrouter.com' },
  // state & data
  { name: 'Redux Toolkit', logo: siRedux, url: 'https://redux-toolkit.js.org' },
  {
    name: 'TanStack Query',
    logo: siReactquery,
    url: 'https://tanstack.com/query',
  },
  {
    name: 'React Hook Form',
    logo: siReacthookform,
    url: 'https://react-hook-form.com',
  },
  { name: 'Zod', logo: siZod, url: 'https://zod.dev' },
  // ui & styling
  { name: 'Tailwind', logo: siTailwindcss, url: 'https://tailwindcss.com' },
  { name: 'Sass', logo: siSass, url: 'https://sass-lang.com' },
  {
    name: 'styled-components',
    logo: siStyledcomponents,
    url: 'https://styled-components.com',
  },
  { name: 'Radix UI', logo: siRadixui, url: 'https://www.radix-ui.com' },
  { name: 'shadcn/ui', logo: siShadcnui, url: 'https://ui.shadcn.com' },
  { name: 'Ant Design', logo: siAntdesign, url: 'https://ant.design' },
  { name: 'MUI', logo: siMui, url: 'https://mui.com' },
  // editors
  { name: 'Editor.js', logo: editorjs, url: 'https://editorjs.io' },
  // backend
  { name: 'Supabase', logo: siSupabase, url: 'https://supabase.com' },
  { name: 'Prisma', logo: siPrisma, url: 'https://www.prisma.io' },
  // tooling
  { name: 'Vite', logo: siVite, url: 'https://vite.dev' },
  { name: 'Git', logo: siGit, url: 'https://git-scm.com' },
  { name: 'Sentry', logo: siSentry, url: 'https://sentry.io' },
  { name: 'i18next', logo: siI18next, url: 'https://www.i18next.com' },
  { name: 'Figma', logo: siFigma, url: 'https://www.figma.com' },
  {
    name: 'Jira',
    logo: siJira,
    url: 'https://www.atlassian.com/software/jira',
  },
  { name: 'Postman', logo: siPostman, url: 'https://www.postman.com' },
  // testing
  { name: 'Vitest', logo: siVitest, url: 'https://vitest.dev' },
  {
    name: 'Testing Library',
    logo: siTestinglibrary,
    url: 'https://testing-library.com',
  },
  { name: 'MSW', logo: siMockserviceworker, url: 'https://mswjs.io' },
];
