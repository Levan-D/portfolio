import React from "react"
import { projectData } from "@/app/data/projectData"
import Card from "@/app/components/Card"
import Image from "next/image"
import Link from "next/link"
import Icon from "@mdi/react"
import { mdiArrowTopRight } from "@mdi/js"

export default function Carousel() {
  return (
    <div className="h-[200px] lg:h-[300px] ">
      <Card glimmer={true} customCSS="">
        <div className="flex h-full w-full gap-4 overflow-x-auto overflow-y-hidden   ">
          {projectData.map((project) => (
            <Link
              href={project.id}
              key={project.id}
              className="  group/title mb-2 block flex flex-col  h-[calc(100%-8px)] aspect-square  rounded-lg bg-slate-700 bg-opacity-60 p-2 flex-shrink-0"
            >
              <Image
                src={project.images.coverWeb}
                alt="project cover image"
                className=" aspect-[4/3]  rounded object-cover "
              ></Image>

              <div className="mt-2 grow mx-1 flex items-center gap-1 ">
                <h4 className=" font-semibold lg:text-lg duration-300 group-hover/title:text-teal-300 group-active/title:text-teal-400">
                  {project.title}
                </h4>
                <Icon
                  path={mdiArrowTopRight}
                  size={0.6}
                  className="duration-300 ease-in group-hover/title:-translate-y-1 group-hover/title:translate-x-1 group-hover/title:text-teal-300 group-active/title:text-teal-400"
                />
              </div>
            </Link>
          ))}
        </div>
      </Card>
    </div>
  )
}
