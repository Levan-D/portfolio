/** @format */
import type { StaticImageData } from "next/image"

import cssMateCoverWeb from "@/app/assets/projects/css-mate-cover-web.png"
import cssMateCoverMobile from "@/app/assets/projects/css-mate-cover-mobile.png"
import cssMateLeftMobile from "@/app/assets/projects/css-mate-left-mobile.png"
import cssMateRightMobile from "@/app/assets/projects/css-mate-right-mobile.png"

import RNKCoverWeb from "@/app/assets/projects/RNK-cover-web.png"
import RNKIcon from "@/app/assets/projects/RNK-icon.png"

import TACoverWeb from "@/app/assets/projects/ta-launcher-cover-web.jpg"

import todoCoverWeb from "@/app/assets/projects/todo-cover-web.png"
import todoCoverMobile from "@/app/assets/projects/todo-cover-mobile.png"
import todoLeftMobile from "@/app/assets/projects/todo-left-mobile.png"
import todoRightMobile from "@/app/assets/projects/todo-right-mobile.png"

import portCoverWeb from "@/app/assets/projects/port-cover-web.png"
import portCoverMobile from "@/app/assets/projects/port-cover-mobile.png"
import portLeftMobile from "@/app/assets/projects/port-left-mobile.png"
import portRightMobile from "@/app/assets/projects/port-right-mobile.png"

import tetrisCoverWeb from "@/app/assets/projects/tetris-cover-web.png"

export type ProjectsDataType = {
  id: string
  height: string
  stagger: string
  visibility: string
  mobile: boolean
  title: string
  pitch: string
  desc: string
  tech: string[]
  images: {
    coverWeb: StaticImageData
    coverMobile?: StaticImageData
    leftMobile?: StaticImageData
    rightMobile?: StaticImageData
    icon?: StaticImageData
  }
  links: {
    github?: string
    website?: string
  }
}

export const projectData: ProjectsDataType[] = [
  {
    id: "ef2f82cf-a5ef-4247-ba38-8cc23cbb46c2",
    height: "row-span-3 lg:row-span-5 xl:row-span-6 ",
    stagger: "   lg:translate-y-0 xl:-translate-y-10",
    visibility: "visible",
    mobile: true,
    title: "CSS Mate",
    pitch:
      "CSS-Mate is a React application designed to help web developers with CSS & HTML rules.",
    desc: "CSS-Mate is a React application designed to help web developers visualize CSS rules, access CSS cheat sheets, and assist with color theory. The application provides a user-friendly interface for exploring various CSS properties and their effects on web elements. It is intended to be an educational resource and productivity tool for both beginners and experienced developers.",
    tech: ["React", "RTK", "RRD", "Tailwind", "Express", "Puppeteer"],
    images: {
      coverWeb: cssMateCoverWeb,
      coverMobile: cssMateCoverMobile,
      leftMobile: cssMateLeftMobile,
      rightMobile: cssMateRightMobile,
    },
    links: {
      github: "https://github.com/Levan-D/css-mate",
      website: "https://cssmate.online",
    },
  },
  {
    id: "7a8a95e1-0a2f-4947-8de7-f93e004616f5",
    height: "row-span-3 lg:row-span-5 xl:row-span-6  ",
    stagger: "   lg:translate-y-0 xl:-translate-y-10",
    visibility: "visible",
    mobile: false,
    title: "Totem Arts Launcher",
    pitch:
      "Totem Arts Launcher blends modern design with robust functionality. The launcher provides an immersive desktop gaming experience.",
    desc: "Totem Arts Launcher blends modern design with robust functionality. Built atop the Electron with React for UI, the launcher provides an immersive desktop gaming experience. Users can smoothly authenticate their profiles, ensuring security and personalized game access. Designed with users in mind, the launcher interface is not only visually appealing but also ensures that game launch is a breeze.  ",
    tech: ["React", "Tailwind", "Jest", "Electron", "Axios", "React Toastify"],
    images: {
      coverWeb: TACoverWeb,
    },
    links: {
      website: "https://totemarts.games/",
    },
  },

  {
    id: "a1623c93-ef1f-4575-a6b7-ea5adb50d120",
    height: "row-span-2 xl:row-span-3",
    stagger: "   lg:translate-y-0 xl:translate-y-56",
    visibility: "visible",
    mobile: false,
    title: "React Nexus Kit",
    pitch:
      "React Nexus Kit (RNK) is an all-in-one solution that brings together a powerful set of React packages and includes prewritten boilerplate code to help you start your project swiftly.",
    desc: "React Nexus Kit (RNK) is an all-in-one solution that brings together a powerful set of React packages and includes prewritten boilerplate code to help you start your project swiftly. It simplifies the setup process by automatically installing a Vite React TypeScript project, complete with essential libraries such as Redux Toolkit for state management, React Router DOM for routing, Tailwind CSS for styling, Axios for API requests, React Helmet for managing metadata, and the Vite SVGR plugin to seamlessly import SVGs as JSX components.",
    tech: ["React", "Node.js", "RTK", "Tailwind", "Axios"],
    images: {
      coverWeb: RNKCoverWeb,
      icon: RNKIcon,
    },
    links: {
      github: "https://github.com/Levan-D/react-nexus-kit",
    },
  },

  {
    id: "5aa8e6c4-c9a6-455f-bf6e-c072cb721695",
    height: " row-span-3 lg:row-span-4 xl:row-span-6 ",
    stagger: "   lg:translate-y-20 xl:translate-y-56",
    visibility: "visible",
    mobile: true,
    title: "Task Manager",
    pitch:
      "Task Manager is a straightforward yet comprehensive task management tool. Built with React's interactive front-end and Go's robust backend.",
    desc: "Task Manager is a straightforward yet comprehensive task management tool. Built with React's interactive front-end and Go's robust backend, it aims to provide a reliable platform for daily to-dos. From basic CRUD operations, handy sorting features, to categorized task views, it facilitates an organized approach to task management. And with security as a priority, it comes with both user authentication and a guest login option.",
    tech: ["React", "Axios", "Go"],
    images: {
      coverWeb: todoCoverWeb,
      coverMobile: todoCoverMobile,
      leftMobile: todoLeftMobile,
      rightMobile: todoRightMobile,
    },
    links: {
      github: "https://github.com/Levan-D/todo-frontend",
    },
  },

  {
    id: "9cd7f7f8-7577-451c-9d24-c6e1c4d1a96e",
    height: "row-span-3 lg:row-span-4 xl:row-span-6 ",
    stagger: " lg:translate-y-20 xl:translate-y-28",
    visibility: "visible",
    mobile: false,
    title: "Tetris",
    pitch: "A simple and fun implementation of the classic Tetris game.",
    desc: "A simple and fun implementation of the classic Tetris game using JavaScript, HTML, and CSS. It aims to provide a nostalgic gaming experience to users while demonstrating clean code and good programming practices.",
    tech: ["Javascript"],
    images: {
      coverWeb: tetrisCoverWeb,
    },
    links: {
      github: "aaa",
      website: "ssss",
    },
  },

  {
    id: "4e283124-4d2b-4045-b6e5-1cf28ce82ab9",
    height: "row-span-3 lg:row-span-4 xl:row-span-6 ",
    stagger: " lg:translate-y-20 xl:translate-y-28",
    visibility: "visible",
    mobile: true,
    title: "Levan Dolidze",
    pitch: "Portfolio site designed in figma and built with Next.js.",
    desc: "The repository features the source code for my personal portfolio website at https://levandolidze.com/. Designed in Figma and built using Next.js. It offers customizable sections for personal details, a dedicated space for project highlights, and a contact form ready to be linked with Google OAuth. If you find it fitting, you're welcome to fork and tailor it for your own use.",
    tech: ["Next.js", "Tailwind", "nodemailer", "React Toastify"],
    images: {
      coverWeb: portCoverWeb,
      coverMobile: portCoverMobile,
      leftMobile: portLeftMobile,
      rightMobile: portRightMobile,
    },
    links: {
      github: "aaa",
      website: "ssss",
    },
  },

  {
    id: "1a1edb85-6188-407d-acb8-713f2aa4aa04",
    height: "row-span-2 lg:row-span-4 ",
    stagger: " lg:translate-y-10 xl:translate-y-0",
    visibility: "!hidden",
    mobile: true,
    title: "card title",
    pitch:
      "By default, Tailwind includes grid-template-row utilities for creating basic grids with up to 6 equal width rows. You can customize these values by editing theme.gridTemplateRows or theme.extend.gridTemplateRows in your tailwind.config.js file.",
    desc: "desc",
    tech: [""],
    images: {
      coverWeb: cssMateCoverWeb,
    },
    links: {
      github: "aaa",
      website: "ssss",
    },
  },

  {
    id: "ab758fed-de8d-408e-a903-87f81dcf1905",
    height: "row-span-2 lg:row-span-4 ",
    stagger: " lg:translate-y-10 xl:translate-y-0",
    visibility: "!hidden",
    mobile: true,
    title: "card title",
    pitch:
      "By default, Tailwind includes grid-template-row utilities for creating basic grids with up to 6 equal width rows. You can customize these values by editing theme.gridTemplateRows or theme.extend.gridTemplateRows in your tailwind.config.js file.",
    desc: "desc",
    tech: [""],
    images: {
      coverWeb: cssMateCoverWeb,
    },
    links: {
      github: "aaa",
      website: "ssss",
    },
  },

  {
    id: "214294e2-e05d-4478-9640-fe73a9dae164",
    height: "row-span-2 lg:row-span-4 ",
    stagger: " lg:translate-y-10 xl:translate-y-0",
    visibility: "!hidden",
    mobile: true,
    title: "card youyou",
    pitch:
      "By default, Tailwind includes grid-template-row utilities for creating basic grids with up to 6 equal width rows. You can customize these values by editing theme.gridTemplateRows or theme.extend.gridTemplateRows in your tailwind.config.js file.",
    desc: "desc",
    tech: [""],
    images: {
      coverWeb: cssMateCoverWeb,
    },
    links: {
      github: "https://www.youtube.com/",
    },
  },
]
