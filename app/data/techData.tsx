/** @format */
import { StaticImageData } from "next/image"

import html from "@/app/assets/icons/html.png"
import css from "@/app/assets/icons/css.png"
import tailwind from "@/app/assets/icons/tailwind.png"
import sass from "@/app/assets/icons/sass.png"
import antDesign from "@/app/assets/icons/antDesign.png"
import reactFlow from "@/app/assets/icons/reactFlow.png"
import i18next from "@/app/assets/icons/i18next.png"
import axios from "@/app/assets/icons/axios.png"
import javaScript from "@/app/assets/icons/javaScript.png"
import typeScript from "@/app/assets/icons/typeScript.png"
import react from "@/app/assets/icons/react.png"
import reactRouter from "@/app/assets/icons/reactRouter.png"
import reduxToolkit from "@/app/assets/icons/reduxToolkit.png"
import nextJS from "@/app/assets/icons/nextJS.png"
import prisma from "@/app/assets/icons/prisma.png"
import nodeJS from "@/app/assets/icons/nodeJS.png"
import photoshop from "@/app/assets/icons/photoshop.png"
import illustrator from "@/app/assets/icons/illustrator.png"
import figma from "@/app/assets/icons/figma.png"
import jira from "@/app/assets/icons/jira.png"
import git from "@/app/assets/icons/git.png"
import postman from "@/app/assets/icons/postman.png"
import editorjs from "@/app/assets/icons/editorjs.png"
import nextui from "@/app/assets/icons/nextui.png"
import hookForm from "@/app/assets/icons/hookform.png"

type ColType = { name: string; image: StaticImageData; url: string }[]

export const techObj: ColType = [
  { name: "HTML", image: html, url: "https://www.w3schools.com/html/default.asp" },
  { name: "CSS", image: css, url: "https://www.w3schools.com/css/default.asp" },
  { name: "Tailwind", image: tailwind, url: "https://tailwindcss.com" },
  { name: "Sass", image: sass, url: "https://sass-lang.com" },
  { name: "Ant Design", image: antDesign, url: "https://ant.design" },
  { name: "React Flow", image: reactFlow, url: "https://reactflow.dev" },
  { name: "i18next", image: i18next, url: "https://www.i18next.com" },
  { name: "Axios", image: axios, url: "https://axios-http.com" },

  {
    name: "JavaScript",
    image: javaScript,
    url: "https://www.w3schools.com/js/default.asp",
  },
  { name: "TypeScript", image: typeScript, url: "https://www.typescriptlang.org" },
  { name: "React", image: react, url: "https://react.dev" },
  { name: "React Router", image: reactRouter, url: "https://reactrouter.com/en/main" },
  { name: "Redux Toolkit", image: reduxToolkit, url: "https://redux-toolkit.js.org" },
  { name: "Next.js", image: nextJS, url: "https://nextjs.org" },
  { name: "NextUI", image: nextui, url: "https://nextui.org" },
  { name: "EditorJs", image: editorjs, url: "https://editorjs.io" },
  { name: "Prisma", image: prisma, url: "https://www.prisma.io" },
  { name: "Hook Form", image: hookForm, url: "https://react-hook-form.com/" },
  { name: "Node.js", image: nodeJS, url: "https://www.w3schools.com/nodejs" },

  {
    name: "Photoshop",
    image: photoshop,
    url: "https://www.adobe.com/products/photoshop.html",
  },
  {
    name: "Illustrator",
    image: illustrator,
    url: "https://www.adobe.com/products/illustrator.html",
  },
  { name: "Figma", image: figma, url: "https://www.figma.com" },
  { name: "Jira", image: jira, url: "https://jira.atlassian.com/" },
  { name: "Git", image: git, url: "https://git-scm.com/" },
  { name: "Postman", image: postman, url: "https://www.postman.com/" },
]
