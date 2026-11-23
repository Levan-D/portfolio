import type { StaticImageData } from 'next/image';
import { REDFLAG_STACK, TOTEM_ARTS_STACK } from '@/data/stacks';

import redflagCoverWeb from '@/assets/projects/redflag-cover-web.webp';
import redflagSourcesWeb from '@/assets/projects/redflag-sources-web.webp';
import redflagMapWeb from '@/assets/projects/redflag-map-web.webp';
import redflagRfiDraftWeb from '@/assets/projects/redflag-rfi-draft-web.webp';
import redflagRfiTrackingWeb from '@/assets/projects/redflag-rfi-tracking-web.webp';
import redflagExporterWeb from '@/assets/projects/redflag-exporter-web.webp';
import redflagSectionsWeb from '@/assets/projects/redflag-sections-web.webp';
import redflagCoverMobile from '@/assets/projects/redflag-cover-mobile.webp';
import redflagLeftMobile from '@/assets/projects/redflag-left-mobile.webp';
import redflagRightMobile from '@/assets/projects/redflag-right-mobile.webp';

import TACoverWeb from '@/assets/projects/ta-launcher-cover-web.webp';

import animaCoverWeb from '@/assets/projects/anima-cover-web.webp';
import animaTracksWeb from '@/assets/projects/anima-tracks-web.webp';
import animaEqualizerWeb from '@/assets/projects/anima-equalizer-web.webp';
import animaLyricsWeb from '@/assets/projects/anima-lyrics-web.webp';
import animaRadioWeb from '@/assets/projects/anima-radio-web.webp';
import animaStationsWeb from '@/assets/projects/anima-stations-web.webp';
import animaDiscoverWeb from '@/assets/projects/anima-discover-web.webp';

import smashPattyCoverWeb from '@/assets/projects/smash-patty-cover-web.webp';
import smashPattyMenuWeb from '@/assets/projects/smash-patty-menu-web.webp';
import smashPattyLocationWeb from '@/assets/projects/smash-patty-location-web.webp';
import smashPattyCoverMobile from '@/assets/projects/smash-patty-cover-mobile.webp';
import smashPattyLeftMobile from '@/assets/projects/smash-patty-left-mobile.webp';
import smashPattyRightMobile from '@/assets/projects/smash-patty-right-mobile.webp';

import cramCoverWeb from '@/assets/projects/cram-cover-web.webp';
import cramQuizWeb from '@/assets/projects/cram-quiz-web.webp';
import cramEditingDarkWeb from '@/assets/projects/cram-editing-dark-web.webp';
import cramSearchWeb from '@/assets/projects/cram-search-web.webp';
import cramStudyWeb from '@/assets/projects/cram-study-web.webp';

import tetrisCoverWeb from '@/assets/projects/tetris-cover-web.webp';
import tetrisNukeWeb from '@/assets/projects/tetris-nuke-web.webp';
import tetrisPaintWeb from '@/assets/projects/tetris-paint-web.webp';
import tetrisPowerupsWeb from '@/assets/projects/tetris-powerups-web.webp';

export type ProjectsDataType = {
  title: string;
  pitch: string;
  desc: string;
  tech: string[];
  images: {
    // desktop screenshots; the first is the cover
    web: [StaticImageData, ...StaticImageData[]];
    coverMobile?: StaticImageData;
    leftMobile?: StaticImageData;
    rightMobile?: StaticImageData;
    icon?: StaticImageData;
  };
  links: {
    github?: string;
    website?: string;
    download?: string;
  };
};

export const projectData: ProjectsDataType[] = [
  {
    title: 'Redflag',
    pitch:
      'AI due diligence for real estate sites: zoning, code and permits, with every answer sourced.',
    desc: "Redflag is an AI due-diligence workspace for commercial real estate and construction teams. Before a site is bought or designed, someone has to work out what the local rules allow there: zoning, building code, utilities, permits, fees and timelines. Redflag does that research from an address and gives source-backed answers: a clear determination, the key factors behind it, and citations that open the exact passage in the city's code. Teams collaborate on the report: they edit answers, comment and assign follow-ups, bring in their own records like titles, easements and leases, and export it for clients. When the records can't answer something, Redflag emails the question to the city's planning or building office, and the reply lands back in the report.",
    tech: REDFLAG_STACK,
    images: {
      web: [
        redflagCoverWeb,
        redflagSourcesWeb,
        redflagMapWeb,
        redflagRfiDraftWeb,
        redflagRfiTrackingWeb,
        redflagSectionsWeb,
        redflagExporterWeb,
      ],
      coverMobile: redflagCoverMobile,
      leftMobile: redflagLeftMobile,
      rightMobile: redflagRightMobile,
    },
    links: {
      website: 'https://redflagdata.com',
    },
  },

  {
    title: 'anima',
    pitch: 'A desktop music player for the music library you already own.',
    desc: "anima is a Windows music player for the music you already own. Browse by artist, album, genre and track, on anything from a touch laptop to a TV across the room. Playback is gapless and bit-perfect, with WASAPI exclusive mode and a signal line that shows exactly what's happening to the sound. The parametric EQ is checked against the engine's real output to within 0.01 dB, and headphone correction fits it to a target curve from AutoEq measurements. Radio and mood stations pick from your own library using audio fingerprints made on your machine, and lyrics sync line by line. mpv does the audio, SQLite holds the library, and tests compare the actual output bytes.",
    tech: [
      'Electron',
      'React',
      'TypeScript',
      'SQLite',
      'mpv',
      'FFmpeg',
      'ONNX Runtime',
      'Zustand',
      'TanStack Query',
      'Zod',
      'Tailwind',
      'Vitest',
      'Playwright',
    ],
    images: {
      web: [
        animaCoverWeb,
        animaTracksWeb,
        animaLyricsWeb,
        animaEqualizerWeb,
        animaRadioWeb,
        animaStationsWeb,
        animaDiscoverWeb,
      ],
    },
    links: {
      github: 'https://github.com/Levan-D/anima',
      download: 'https://github.com/Levan-D/anima/releases/latest',
    },
  },

  {
    title: 'Smash Patty',
    pitch: 'Website for a smash-burger restaurant in Tbilisi.',
    desc: 'A one-page website for Smash Patty, a smash-burger spot in Tbilisi. Browse the burgers with a photo and nutrition for each, read the story behind the place, ask about catering, find the address and opening hours, and send a message straight to the restaurant.',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'Motion',
      'Nodemailer',
    ],
    images: {
      web: [smashPattyCoverWeb, smashPattyMenuWeb, smashPattyLocationWeb],
      coverMobile: smashPattyCoverMobile,
      leftMobile: smashPattyLeftMobile,
      rightMobile: smashPattyRightMobile,
    },
    links: {},
  },

  {
    title: 'Totem Arts Launcher',
    pitch: 'Desktop game launcher for the Totem Arts community.',
    desc: 'The desktop launcher for Totem Arts, the community studio behind free games like Renegade X and Firestorm. Sign in once, keep your games installed and updated, browse live servers with their ping and player counts, read the latest news, and jump straight into a match.',
    tech: TOTEM_ARTS_STACK,
    images: {
      web: [TACoverWeb],
    },
    links: {
      website: 'https://totemarts.games/',
    },
  },

  {
    title: 'Cram',
    pitch: 'A desktop app for studying from your own markdown notes.',
    desc: 'A reader and editor for a folder of markdown files, with full-text search, quizzes generated from your notes, a Pomodoro timer and a study heatmap. It uses CodeMirror instead of a WYSIWYG editor, so saving never reformats your file.',
    tech: [
      'Electron',
      'React',
      'TypeScript',
      'Zustand',
      'CodeMirror',
      'Vitest',
      'Playwright',
    ],
    images: {
      web: [
        cramCoverWeb,
        cramEditingDarkWeb,
        cramQuizWeb,
        cramSearchWeb,
        cramStudyWeb,
      ],
    },
    links: {
      github: 'https://github.com/Levan-D/cram',
      download: 'https://github.com/Levan-D/cram/releases/latest',
    },
  },

  {
    title: 'Tetris',
    pitch: 'An arcade-flavored Tetris you can play in the browser.',
    desc: 'Standard Tetris feel (7-bag randomizer, hold, lock delay, wall kicks, T-spins) plus five game modes, power-ups, sound effects generated in code and per-mode leaderboards.',
    tech: ['React', 'TypeScript', 'Vite', 'Zustand', 'Tailwind', 'Web Audio'],
    images: {
      web: [tetrisCoverWeb, tetrisNukeWeb, tetrisPaintWeb, tetrisPowerupsWeb],
    },
    links: {
      github: 'https://github.com/Levan-D/tetris-v2',
      website: 'https://levan-d.github.io/tetris-v2/',
    },
  },
];

export function getProjectSlug(project: ProjectsDataType) {
  return project.title.toLowerCase().replaceAll(' ', '-');
}

export function findProjectBySlug(slug: string) {
  return projectData.find((project) => getProjectSlug(project) === slug);
}
