import { REDFLAG_STACK, TOTEM_ARTS_STACK } from '@/data/stacks';

export type ExperienceType = {
  title: string;
  subtitle: string;
  date: string;
  summary?: string;
  highlights: string[];
  tech: string[];
};

export const expData: ExperienceType[] = [
  {
    title: 'Frontend Developer, Acting Frontend Lead',
    subtitle: 'Motority • US (remote)',
    date: 'Nov 2023 – Nov 2026 (company closed)',
    summary:
      'Social platform for vehicle owners: vehicle profiles, logbook with stories and updates, community feed. Team of ~6 developers + PM.',
    highlights: [
      'Led the frontend, reporting directly to the PM: owned delivery end to end, coordinated with design and backend on each feature, delegated work and negotiated scope.',
      'Joined as one of the first hires after the spin-out and revived a legacy codebase untouched for 2+ years: got it building in under 2 months, migrated it to TypeScript, Redux Toolkit and Next.js, then rebuilt and launched it over the following year.',
      'Cut first-load JavaScript ~50% (770 KB to 375 KB gzipped) and eliminated layout shift (CLS, a Core Web Vital, from 0.11 to 0) by code-splitting third-party SDKs and replacing heavy UI libraries with lightweight in-house components.',
      'Moved data fetching to RTK Query with caching across ~200 endpoints, 22 APIs and 125 routes, cutting redundant network calls.',
      'Built a multi-brand landing platform from scratch, serving 82 car brands from one build: the subdomain picks the brand, with per-brand config, fonts and theming loaded at runtime.',
      'Built its admin CMS for brand teams, including a landing-page editor with live preview, a catalog editor, a media library with resumable chunked uploads (tus) and version history.',
      'Replaced a broken hand-written editor with Editor.js and wrote every custom plugin in TypeScript within one quarter.',
      'Shipped logbooks, the short-video feed, auth and social sign-in, Instagram integration, the design system and cross-client email templates.',
    ],
    tech: [
      'React',
      'TypeScript',
      'Next.js',
      'Vite',
      'Redux Toolkit',
      'RTK Query',
      'React Hook Form',
      'Editor.js',
      'Tailwind',
      'SCSS modules',
    ],
  },
  {
    title: 'React Developer',
    subtitle: 'COTT • Tbilisi, Georgia',
    date: 'Aug 2022 – Oct 2023',
    summary: 'London-based company, hospitality IPTV platform.',
    highlights: [
      "Rewrote and re-architected the platform's admin panel: state management, Ant Design UI and numerous API integrations.",
      "Designed the admin panel's mobile version.",
      'Built and refactored several in-house React apps for performance and maintainability, and evaluated new technologies for adoption.',
    ],
    tech: [
      'React',
      'Next.js',
      'TypeScript',
      'Redux Toolkit',
      'React Router',
      'Ant Design',
      'Tailwind',
      'i18next',
    ],
  },
  {
    title: 'React Developer',
    subtitle: 'Hyperdrive • Los Angeles, US (remote)',
    date: 'Oct 2022 – Jan 2023',
    highlights: [
      'Owned client-side architecture and built the MVP, including Google OAuth sign-in and Google Drive integration.',
    ],
    tech: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'React Router',
      'Tailwind',
      'Axios',
      'Jira',
    ],
  },
  {
    title: 'Front-End Developer',
    subtitle: 'Freelance',
    date: 'Feb 2020 – Apr 2022',
    highlights: [
      'Built, redesigned and refactored client interfaces in JavaScript and React, working directly with clients.',
    ],
    tech: ['JavaScript', 'React', 'HTML', 'CSS', 'Figma'],
  },
];

export const projectExpData: ExperienceType[] = [
  {
    title: 'Redflag',
    subtitle: 'AI due-diligence reports for architecture firms',
    date: '2024 – Present',
    summary:
      'B2B web app for architecture firms: enter a US address or parcel and get an AI-generated report on zoning, permitting and building codes.',
    highlights: [
      'Built the frontend end to end, turning backend APIs and rough prototypes into production features.',
      'Turned static AI reports into editable documents with a TipTap editor, including version history and per-section regeneration.',
      'Implemented threaded comments on reports with Liveblocks, and export to PDF and DOCX.',
      'Cut the production bundle 74% and report-page network requests ~80% through code-splitting and request deduplication.',
      'Built accessibility (WAI-ARIA) support across 31 UI areas: keyboard navigation, focus traps, accessible comboboxes and screen-reader live regions.',
      'Built the shared UI library, admin pages and product redesigns in an npm-workspaces monorepo.',
    ],
    tech: REDFLAG_STACK,
  },
  {
    title: 'Totem Arts Launcher',
    subtitle: 'Desktop game launcher for the Totem Arts community',
    date: '2023 – 2024',
    highlights: [
      "Rewrote the launcher's UI from Vue to React and built most of its features on top of the existing Electron core: login, game library, live server browser with ping, news feed and game launch.",
    ],
    tech: TOTEM_ARTS_STACK,
  },
];
