/** @format */
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
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "Tailwind", image: tailwind },
    { name: "Sass", image: sass },
    { name: "Ant Design", image: antDesign },
    { name: "React Flow", image: reactFlow },
    { name: "i18next", image: i18next },
    { name: "Axios", image: axios },
  ],
  secondCol: [
    { name: "JavaScript", image: javaScript },
    { name: "TypeScript", image: typeScript },
    { name: "React", image: react },
    { name: "React Router", image: reactRouter },
    { name: "Redux Toolkit", image: reduxToolkit },
    { name: "Next.js", image: nextJS },
    { name: "Prisma", image: prisma },
    { name: "Node.js", image: nodeJS },
  ],
  thirdCol: [
    { name: "Photoshop", image: photoshop },
    { name: "Illustrator", image: illustrator },
    { name: "Figma", image: figma },
    { name: "Jira", image: jira },
    { name: "Git", image: git },
    { name: "Postman", image: postman },
  ],
}

import Image from "next/image"

export default function Technologies() {
  return (
    <div id="technologies" className="grid h-screen grid-cols-3">
      <div className="">
        <div className="flex gap-12">
          {techArray.firstCol.map(tech => (
            <div key={tech.name}>
              <Image src={tech.image}  alt={tech.name} />
              <div>{tech.name}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-12">
          {techArray.secondCol.map(tech => (
            <div key={tech.name}>
              <Image src={tech.image}  alt={tech.name} />
              <div>{tech.name}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-12">
          {techArray.thirdCol.map(tech => (
            <div key={tech.name}>
              <Image src={tech.image}  alt={tech.name} />
              <div>{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
