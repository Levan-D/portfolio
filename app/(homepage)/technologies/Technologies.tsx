/** @format */
import Link from "next/link"

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

const techArray = {
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

import Image from "next/image"

export default function Technologies() {
  return (
    <div id="technologies" className="select-none">
      <div className="mx-auto w-fit py-20 text-center">
        <h2 className="text-5xl font-bold text-teal-400">Technologies & Tools</h2>
        <p className="mt-4 text-lg font-semibold text-slate-300">
          These are some of the tools I use
        </p>
        <p className="text-lg font-semibold text-slate-300">when building my projects</p>
      </div>

      <div className=" mx-auto w-fit rounded-xl bg-gradient-border p-0.5">
        <div className=" rounded-xl bg-gradient-main px-24  py-10">
          <div className="my-12 flex justify-center gap-4">
            {techArray.firstCol.map(tech => (
              <a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-transparent px-4 pb-2 pt-3 duration-300 hover:border-slate-500 hover:border-opacity-50 hover:bg-slate-600 hover:bg-opacity-50  active:bg-slate-600"
              >
                <div className="flex flex-col items-center justify-end">
                  <Image src={tech.image} alt={tech.name} />
                  <p className="mt-2 whitespace-nowrap text-center font-semibold">
                    {tech.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
          <div className="my-12 flex justify-center gap-4">
            {techArray.secondCol.map(tech => (
              <a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-transparent px-4 pb-2 pt-3 duration-300 hover:border-slate-500 hover:border-opacity-50 hover:bg-slate-600 hover:bg-opacity-50  active:bg-slate-600"
              >
                <div className="flex flex-col items-center justify-end">
                  <Image src={tech.image} alt={tech.name} />
                  <p className="mt-2 whitespace-nowrap text-center font-semibold">
                    {tech.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
          <div className="my-12 flex justify-center gap-4">
            {techArray.thirdCol.map(tech => (
              <a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-transparent px-4 pb-2 pt-3 duration-300 hover:border-slate-500 hover:border-opacity-50 hover:bg-slate-600 hover:bg-opacity-50  active:bg-slate-600"
              >
                <div className="flex flex-col items-center justify-end">
                  <Image src={tech.image} alt={tech.name} />
                  <p className="mt-2 whitespace-nowrap text-center font-semibold">
                    {tech.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
