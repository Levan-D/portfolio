/** @format */
"use client"

import { useState } from "react"
import Card from "@/app/components/Card"
import { projectData } from "../../data/projectData"
import Link from "next/link"
import Image from "next/image"
import { personalData } from "@/app/data/personalData"

export default function Projects() {
  const [cardCount, setCardCount] = useState(4)
  const projects = personalData.projects

  const handleMoreClick = () => {
    setCardCount(prevCount => Math.min(prevCount + 3, projectData.length))
  }

  const renderCards = (start: number, end: number) => {
    return projectData.slice(start, end).map(card => {
      const {
        id,
        height,
        stagger,
        visibility,
        title,
        pitch,
        tech,
        images: { coverWeb },
      } = card

      let imgCSS = "xl:h-[130px] lg:h-[120px] object-fit "
      let flex

      if (height.includes("xl:row-span-6")) {
        imgCSS += "xl:!object-cover xl:!h-[340px]"

        if (height.includes("lg:row-span-5")) {
          imgCSS += " lg:!h-[340px]"
        }
      } else if (height.includes("xl:row-span-3")) {
        imgCSS += "lg:!h-[76px] lg:w-[76px] !object-cover xl:mt-2"
        flex = "lg:!flex-row "
      }

      return (
        <Card
          key={id}
          glow={true}
          customCSS={`${height}  ${stagger}  ${visibility}  hover:scale-[1.01]  active:scale-[0.99]  max-w-[400px]  `}
        >
          <Link href={id} className={`${flex} flex h-full flex-col gap-4`}>
            <Image
              src={coverWeb}
              alt={`cover picter for ${title} project`}
              className={` ${imgCSS} rounded-lg `}
            ></Image>

            <div className={`overflow-hidden ${!flex && "mb-1"} `}>
              <h4 className="font-semibold">{title}</h4>
              <p className=" textTertiary">{pitch}</p>
            </div>
          </Link>
        </Card>
      )
    })
  }

  return (
    <div id="projects" className="   mt-20 py-20 sm:mx-16 md:mt-[200px] md:min-h-screen">
      <div className="mx-auto w-fit -translate-y-10 text-center  lg:translate-y-2 lg:text-left xl:-translate-x-28 xl:translate-y-6">
        <h2 className="textSecondary text-2xl font-bold md:text-3xl  lg:text-4xl">
          {projects.title}
        </h2>
        <p className="textTertiary mt-4 font-semibold lg:text-xl"> {projects.desc}</p>
      </div>

      <div className="mx-auto flex  w-fit  flex-wrap justify-center gap-8 lg:hidden ">
        {renderCards(0, cardCount)}
      </div>
      {cardCount < projectData.length && (
        <button
          onClick={handleMoreClick}
          className="btnSecondary mx-auto mt-8  lg:hidden  "
        >
          Show More
        </button>
      )}
      <div className="mx-auto hidden  grid-flow-col grid-rows-[repeat(12,_minmax(10px,_40px))] gap-8 lg:grid lg:grid-cols-3 xl:grid-cols-4">
        {renderCards(0, projectData.length)}
      </div>
    </div>
  )
}
