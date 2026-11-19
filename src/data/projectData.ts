import type { StaticImageData } from 'next/image';

import cssMateCoverWeb from '@/assets/projects/css-mate-cover-web.png';
import cssMateCoverMobile from '@/assets/projects/css-mate-cover-mobile.png';
import cssMateLeftMobile from '@/assets/projects/css-mate-left-mobile.png';
import cssMateRightMobile from '@/assets/projects/css-mate-right-mobile.png';

import RNKCoverWeb from '@/assets/projects/RNK-cover-web.png';
import RNKIcon from '@/assets/projects/RNK-icon.png';

import TACoverWeb from '@/assets/projects/ta-launcher-cover-web.jpg';

import todoCoverWeb from '@/assets/projects/todo-cover-web.png';
import todoCoverMobile from '@/assets/projects/todo-cover-mobile.png';
import todoLeftMobile from '@/assets/projects/todo-left-mobile.png';
import todoRightMobile from '@/assets/projects/todo-right-mobile.png';

import portCoverWeb from '@/assets/projects/port-cover-web.png';
import portCoverMobile from '@/assets/projects/port-cover-mobile.png';
import portLeftMobile from '@/assets/projects/port-left-mobile.png';
import portRightMobile from '@/assets/projects/port-right-mobile.png';

import tetrisCoverWeb from '@/assets/projects/tetris-cover-web.png';

export type ProjectsDataType = {
  title: string;
  pitch: string;
  desc: string;
  tech: string[];
  images: {
    coverWeb: StaticImageData;
    coverMobile?: StaticImageData;
    leftMobile?: StaticImageData;
    rightMobile?: StaticImageData;
    icon?: StaticImageData;
  };
  links: {
    github?: string;
    website?: string;
  };
};

export const projectData: ProjectsDataType[] = [
  {
    title: 'CSS Mate',
    pitch:
      'CSS-Mate is a React application designed to help web developers with CSS & HTML rules.',
    desc: 'CSS-Mate is a React application designed to help web developers visualize CSS rules, access CSS cheat sheets, and assist with color theory. The application provides a user-friendly interface for exploring various CSS properties and their effects on web elements. It is intended to be an educational resource and productivity tool for both beginners and experienced developers.',
    tech: ['React', 'RTK', 'RRD', 'Tailwind', 'Express', 'Puppeteer'],
    images: {
      coverWeb: cssMateCoverWeb,
      coverMobile: cssMateCoverMobile,
      leftMobile: cssMateLeftMobile,
      rightMobile: cssMateRightMobile,
    },
    links: {
      github: 'https://github.com/Levan-D/css-mate',
      website: 'https://cssmate.online',
    },
  },
  {
    title: 'Totem Arts Launcher',
    pitch: 'Desktop game launcher for the Totem Arts community.',
    desc: "Desktop game launcher for the Totem Arts community. I rewrote the launcher's UI from Vue to React and built most of its features on top of the existing Electron core: login, game library, live server browser with ping, news feed and game launch.",
    tech: [
      'Electron',
      'React',
      'TypeScript',
      'Vite',
      'Redux Toolkit',
      'Tailwind',
      'zod',
      'Jest',
    ],
    images: {
      coverWeb: TACoverWeb,
    },
    links: {
      website: 'https://totemarts.games/',
    },
  },

  {
    title: 'React Nexus Kit',
    pitch:
      'React Nexus Kit (RNK) is an all-in-one solution that brings together a powerful set of React packages and includes prewritten boilerplate code to help you start your project swiftly.',
    desc: 'React Nexus Kit (RNK) is an all-in-one solution that brings together a powerful set of React packages and includes prewritten boilerplate code to help you start your project swiftly. It simplifies the setup process by automatically installing a Vite React TypeScript project, complete with essential libraries such as Redux Toolkit for state management, React Router DOM for routing, Tailwind CSS for styling, Axios for API requests, React Helmet for managing metadata, and the Vite SVGR plugin to seamlessly import SVGs as JSX components.',
    tech: ['React', 'Node.js', 'RTK', 'Tailwind', 'Axios'],
    images: {
      coverWeb: RNKCoverWeb,
      icon: RNKIcon,
    },
    links: {
      github: 'https://github.com/Levan-D/react-nexus-kit',
    },
  },

  {
    title: 'Task Manager',
    pitch:
      "Task Manager is a straightforward yet comprehensive task management tool. Built with React's interactive front-end and Go's robust backend.",
    desc: "Task Manager is a straightforward yet comprehensive task management tool. Built with React's interactive front-end and Go's robust backend, it aims to provide a reliable platform for daily to-dos. From basic CRUD operations, handy sorting features, to categorized task views, it facilitates an organized approach to task management. And with security as a priority, it comes with both user authentication and a guest login option.",
    tech: ['React', 'Axios', 'Go'],
    images: {
      coverWeb: todoCoverWeb,
      coverMobile: todoCoverMobile,
      leftMobile: todoLeftMobile,
      rightMobile: todoRightMobile,
    },
    links: {
      github: 'https://github.com/Levan-D/todo-frontend',
    },
  },

  {
    title: 'Tetris',
    pitch: 'A simple and fun implementation of the classic Tetris game.',
    desc: 'A simple and fun implementation of the classic Tetris game using JavaScript, HTML, and CSS. It aims to provide a nostalgic gaming experience to users while demonstrating clean code and good programming practices.',
    tech: ['Javascript'],
    images: {
      coverWeb: tetrisCoverWeb,
    },
    links: {},
  },

  {
    title: 'Levan Dolidze',
    pitch: 'This site: designed in Figma and built with Next.js.',
    desc: "The source code for this site, levandolidze.dev. Designed in Figma and built with Next.js, React, TypeScript and Tailwind CSS, with light and dark themes, keyboard and screen-reader support, and a contact form validated on both the client and the server. You're welcome to fork it and make it your own.",
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'React Hook Form',
      'zod',
      'Nodemailer',
    ],
    images: {
      coverWeb: portCoverWeb,
      coverMobile: portCoverMobile,
      leftMobile: portLeftMobile,
      rightMobile: portRightMobile,
    },
    links: {
      github: 'https://github.com/Levan-D/portfolio',
      website: 'https://levandolidze.dev',
    },
  },
];

export function getProjectSlug(project: ProjectsDataType) {
  return project.title.toLowerCase().replaceAll(' ', '-');
}

export function findProjectBySlug(slug: string) {
  return projectData.find((project) => getProjectSlug(project) === slug);
}
