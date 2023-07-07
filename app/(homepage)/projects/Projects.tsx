/** @format */
"use client"

import { useState } from "react"
import { useAppSelector } from "@/lib/redux/hooks"
import Card from "@/app/components/Card"
import { projectData } from "../../data/projectData"
import Link from "next/link"
import Image from "next/image"
import { personalData } from "@/app/data/personalData"

export default function Projects() {
  const { screenWidth } = useAppSelector(state => state.global)
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
        images: { coverWeb, icon },
      } = card

      let imgCSS = " grow object-cover "
      let flex
      let text

      if (height.includes("lg:row-span-4")) {
        imgCSS += "lg:!h-[100px]"
      }

      if (height.includes("xl:row-span-3")) {
        imgCSS += "lg:!h-[76px] lg:w-[76px] w-full xl:mt-2 w-fit mx-auto"
        flex = "lg:!flex-row "
        text = "lg:!line-clamp-2 !line-clamp-none xl:!line-clamp-6	"
      }

      return (
        <Card
          key={id}
          glow={true}
          customCSS={`${height}  ${stagger}  ${visibility}  sm:hover:scale-[1.01]  active:scale-[0.99]  max-w-[400px]  `}
        >
          <Link href={id} className={`${flex} flex h-full flex-col gap-4`}>
            {icon && screenWidth > 1024 ? (
              <Image
                src={icon}
                alt={` cover picture for ${title} project`}
                className={` ${imgCSS} rounded-lg `}
              />
            ) : (
              <Image
                src={coverWeb}
                alt={` cover picture for ${title} project`}
                className={` ${imgCSS} rounded-lg `}
              />
            )}

            <div className={`overflow-hidden ${!flex && "mb-1"} `}>
              <h3 className="font-semibold">{title}</h3>
              <p
                className={` ${text} textTertiary	 text-sm lg:line-clamp-3 xl:line-clamp-4`}
              >
                {pitch}
              </p>
            </div>
          </Link>
        </Card>
      )
    })
  }

  return (
    <div id="projects" className="   mt-20 py-20 sm:mx-16 md:mt-[200px] md:min-h-screen">
      <div className="mx-auto w-fit -translate-y-10 text-center  lg:-translate-y-10 lg:text-left xl:-translate-x-20 xl:translate-y-6">
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
      <div className="mx-auto hidden w-fit  grid-flow-col grid-rows-[repeat(12,_minmax(10px,_40px))] gap-8 lg:grid lg:grid-cols-2 xl:grid-cols-3">
        {renderCards(0, projectData.length)}
      </div>
    </div>
  )
}
// change xl:grid-cols to 4 and fix title when you add projects. remember to change visibility in the data structure.
