/** @format */
"use client"

import { useState } from "react"
import { useAppSelector } from "@/lib/redux/hooks"
import Card from "@/app/components/Card/Card"
import { projectData } from "../data/projectData"
import Link from "next/link"
import Image from "next/image"
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver"
import StaggeredGrid from "@/app/components/StaggeredGrid"
import { ProjectsDataType } from "../data/projectData"

export default function Projects() {
  const { screenWidth } = useAppSelector(state => state.global)
  const [cardCount, setCardCount] = useState(4)

  const [isVisible, setIsVisible] = useState(false)

  const handleIntersect = () => {
    setIsVisible(true)
  }

  const ref = useIntersectionObserver(handleIntersect, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  })

  const handleMoreClick = () => {
    setCardCount(prevCount => Math.min(prevCount + 3, projectData.length))
  }

  const renderCard = (card: ProjectsDataType) => {
    const {
      title,
      pitch,
      images: { coverWeb, icon },
    } = card

    const link = title.toLocaleLowerCase().replaceAll(" ", "-")

    return (
      <Card glow className={`active:scale-[0.99]   sm:hover:scale-[1.01]    `}>
        <Link href={link} className={`  flex h-full flex-col gap-4`}>
          <div
            className={`${
              title.includes("Nexus") ? "flex-row gap-4" : "flex-col gap-2"
            }  flex `}
          >
            <Image
              src={icon && screenWidth > 1024 ? icon : coverWeb}
              alt={` cover picture for ${title} project`}
              className={`${
                title.includes("Nexus") && "h-20 w-20"
              }   mx-auto w-fit rounded-lg `}
            />

            <div className={`overflow-hidden  `}>
              <h3 className="font-semibold">{title}</h3>
              <p className={`  textTertiary	 line-clamp-4  text-sm  md:line-clamp-none `}>
                {pitch}
              </p>
            </div>
          </div>
        </Link>
      </Card>
    )
  }

  return (
    <div
      id="projects"
      className={` ${
        isVisible
          ? " md:translate-y-0 md:opacity-100"
          : "md:translate-y-[300px] md:opacity-0"
      }      mt-40 p-20 duration-500`}
      ref={ref}
    >
      <div className="mx-auto mb-12   w-fit   text-center lg:text-left  ">
        <h2 className="textSecondary text-2xl font-bold md:text-3xl  lg:text-4xl">
          Projects
        </h2>
        <p className="textTertiary mt-4 font-semibold lg:text-xl">Some of my works</p>
      </div>

      <div className="mx-auto w-fit  ">
        <StaggeredGrid
          staggered={screenWidth > 768}
          items={screenWidth > 768 ? projectData : projectData.slice(0, cardCount)}
          renderItem={renderCard}
          columns={screenWidth > 1024 ? 3 : screenWidth > 768 ? 2 : 1}
        />
        {screenWidth > 768 || cardCount >= projectData.length ? (
          <></>
        ) : (
          <button onClick={handleMoreClick} className="btnSecondary mx-auto mt-8   ">
            Show More
          </button>
        )}
      </div>
    </div>
  )
}
