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

type ColType = { name: string; image: StaticImageData; url: string }[]

type TechObj = {
  [key: string]: ColType
}
const techObj: TechObj = {
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
  const arrayRender = (col: ColType) => {
    // using tailwind sccreen  to render same component with different logic for mobile view
    return (
      <div className="flex justify-center gap-4 md:my-4 xl:my-12">
        {col.map(item => {
          const content = (
            <div className="flex flex-col items-center justify-end rounded-xl border border-transparent px-4 pb-2 pt-3 duration-300 sm:hover:border-slate-500 sm:hover:border-opacity-50 sm:hover:bg-slate-600 sm:hover:bg-opacity-50  sm:active:bg-slate-600">
              <span className="hidden md:block">
                <Image src={item.image} alt={item.name} height={50} />
              </span>
              <span className="block md:hidden">
                <Image src={item.image} alt={item.name} height={38} />
              </span>
              <p className=" mt-2 whitespace-nowrap  text-center text-sm font-semibold md:text-base">
                {item.name}
              </p>
            </div>
          )

          return (
            <>
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block"
              >
                {content}
              </a>
              <span className="block sm:hidden" key={item.name}>
                {content}
              </span>
            </>
          )
        })}
      </div>
    )
  }

  const arrayRenderAll = () => {
    const flatArray = Object.values(techObj).flat()

    return flatArray.map((item, index) => <div key={index}>{arrayRender([item])} </div>)
  }

  return (
    <div id="technologies" className=" min-h-screen">
      <div className="mx-auto w-fit py-20 text-center">
        <h2 className="text-2xl font-bold text-teal-400 md:text-3xl  lg:text-4xl">
          Technologies & Tools
        </h2>
        <p className="mt-4 font-semibold text-slate-300 lg:text-xl">
          These are some of the tools I use
        </p>
        <p className="font-semibold text-slate-300 lg:text-xl">
          when building my projects
        </p>
      </div>

      <div className=" mx-auto hidden w-fit select-none rounded-xl bg-gradient-border p-0.5 xl:block">
        <div className=" rounded-xl bg-gradient-main px-20 py-10  ">
          {arrayRender(techObj.firstCol)}
          {arrayRender(techObj.secondCol)}
          {arrayRender(techObj.thirdCol)}
        </div>
      </div>

      <div className=" block w-fit select-none rounded-xl bg-gradient-border p-0.5 md:mx-12 xl:hidden">
        <div className="  flex  max-w-full flex-wrap justify-center gap-4  rounded-xl bg-gradient-main  p-4 md:p-8 lg:p-20 xl:hidden">
          {arrayRenderAll()}
        </div>
      </div>
    </div>
  )
}
