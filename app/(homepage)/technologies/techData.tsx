/** @format */
import { StaticImageData } from "next/image"

import html from "@/app/assets/html.png"
import css from "@/app/assets/css.png"
import tailwind from "@/app/assets/tailwind.png"
import sass from "@/app/assets/sass.png"
import antDesign from "@/app/assets/antDesign.png"
import reactFlow from "@/app/assets/reactFlow.png"
import i18next from "@/app/assets/i18next.png"
import axios from "@/app/assets/axios.png"

import javaScript from "@/app/assets/javaScript.png"
import typeScript from "@/app/assets/typeScript.png"
import react from "@/app/assets/react.png"
import reactRouter from "@/app/assets/reactRouter.png"
import reduxToolkit from "@/app/assets/reduxToolkit.png"
import nextJS from "@/app/assets/nextJS.png"
import prisma from "@/app/assets/prisma.png"
import nodeJS from "@/app/assets/nodeJS.png"

import photoshop from "@/app/assets/photoshop.png"
import illustrator from "@/app/assets/illustrator.png"
import figma from "@/app/assets/figma.png"
import jira from "@/app/assets/jira.png"
import git from "@/app/assets/git.png"
import postman from "@/app/assets/postman.png"

export type ColType = { name: string; image: StaticImageData; url: string }[]

type TechObj = {
  [key: string]: ColType
}
export const techObj: TechObj = {
  firstCol: [
    { name: "HTML", image: html, url: "https://www.w3schools.com/html/default.asp" },
    { name: "CSS", image: css, url: "https://www.w3schools.com/css/default.asp" },
    { name: "Tailwind", image: tailwind, url: "https://tailwindcss.com/" },
    { name: "Sass", image: sass, url: "https://sass-lang.com/" },
    { name: "Ant Design", image: antDesign, url: "https://ant.design/" },
    { name: "React Flow", image: reactFlow, url: "https://reactflow.dev/" },
    { name: "i18next", image: i18next, url: "https://www.i18next.com/" },
    { name: "Axios", image: axios, url: "https://axios-http.com/" },
  ],
  secondCol: [
    {
      name: "JavaScript",
      image: javaScript,
      url: "https://www.w3schools.com/js/default.asp",
    },
    { name: "TypeScript", image: typeScript, url: "https://www.typescriptlang.org/" },
    { name: "React", image: react, url: "https://react.dev/" },
    { name: "React Router", image: reactRouter, url: "https://reactrouter.com/en/main" },
    { name: "Redux Toolkit", image: reduxToolkit, url: "https://redux-toolkit.js.org/" },
    { name: "Next.js", image: nextJS, url: "https://nextjs.org/" },
    { name: "Prisma", image: prisma, url: "https://www.prisma.io/" },
    { name: "Node.js", image: nodeJS, url: "https://www.w3schools.com/nodejs/" },
  ],
  thirdCol: [
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
  ],
}
