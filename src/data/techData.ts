import type { StaticImageData } from 'next/image';
import {
  siAntdesign,
  siCss,
  siElectron,
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
  siSupabase,
  siTailwindcss,
  siTestinglibrary,
  siTypescript,
  siVite,
  siVitest,
  siZod,
  type SimpleIcon,
} from 'simple-icons';

// not in simple-icons, so these are image files
import editorjs from '@/assets/icons/editorjs.png';
import playwright from '@/assets/icons/playwright.svg';
import tiptap from '@/assets/icons/tiptap.png';
import zustand from '@/assets/icons/zustand.png';

// a one-color mark from the project's own logo, drawn like a simple-icon so it follows the theme
type PathIconType = Pick<SimpleIcon, 'path' | 'hex'> & { viewBox: string };

export type TechLogoType = StaticImageData | SimpleIcon | PathIconType;

export type TechType = {
  name: string;
  logo: TechLogoType;
  url: string;
  // for black image logos that would vanish on the dark card
  invertInDark?: boolean;
};

const fluentui: PathIconType = {
  hex: '242424',
  viewBox: '0 0 17 29',
  path: 'M8.17362 0.173779L0.678882 4.36611C0.259079 4.60094 0 5.03796 0 5.51127V23.7645C0 24.2378 0.25908 24.6748 0.678882 24.9096L7.83414 28.9121C8.28326 29.1633 8.84208 28.8459 8.84208 28.3395V19.5839L16.6606 15.2105C17.1131 14.9573 17.1131 14.3185 16.6606 14.0653L8.84208 9.69188L16.6606 5.31844C17.1131 5.06528 17.1131 4.42645 16.6606 4.17328L9.51054 0.173779C9.09635 -0.0579263 8.58781 -0.0579263 8.17362 0.173779Z',
};

const liveblocks: PathIconType = {
  hex: '000000',
  viewBox: '2 2 28 28',
  path: 'M21.657 8H2l5.657 5.6v7.733L21.657 8ZM10.343 24H30l-5.657-5.6v-7.733L10.343 24Z',
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
  { name: 'Zustand', logo: zustand, url: 'https://zustand.docs.pmnd.rs' },
  { name: 'Zod', logo: siZod, url: 'https://zod.dev' },
  // ui & styling
  { name: 'Tailwind', logo: siTailwindcss, url: 'https://tailwindcss.com' },
  { name: 'Sass', logo: siSass, url: 'https://sass-lang.com' },
  {
    name: 'Fluent UI',
    logo: fluentui,
    url: 'https://react.fluentui.dev',
  },
  { name: 'Radix UI', logo: siRadixui, url: 'https://www.radix-ui.com' },
  { name: 'shadcn/ui', logo: siShadcnui, url: 'https://ui.shadcn.com' },
  { name: 'Ant Design', logo: siAntdesign, url: 'https://ant.design' },
  { name: 'MUI', logo: siMui, url: 'https://mui.com' },
  // editors
  { name: 'Editor.js', logo: editorjs, url: 'https://editorjs.io' },
  {
    name: 'TipTap',
    logo: tiptap,
    url: 'https://tiptap.dev',
    invertInDark: true,
  },
  { name: 'Liveblocks', logo: liveblocks, url: 'https://liveblocks.io' },
  // backend
  { name: 'Supabase', logo: siSupabase, url: 'https://supabase.com' },
  { name: 'Prisma', logo: siPrisma, url: 'https://www.prisma.io' },
  // tooling
  { name: 'Vite', logo: siVite, url: 'https://vite.dev' },
  { name: 'Electron', logo: siElectron, url: 'https://www.electronjs.org' },
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
  { name: 'Playwright', logo: playwright, url: 'https://playwright.dev' },
];
