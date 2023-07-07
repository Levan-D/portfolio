/** @format */

import React from "react"
import { projectData } from "@/app/data/projectData"
import Card from "@/app/components/Card"
import Image from "next/image"
import Link from "next/link"
import Icon from "@mdi/react"
import { mdiArrowTopRight } from "@mdi/js"

export default function Carousel() {
  return (
    <div className="h-[200px] lg:h-[250px] xl:h-[300px] ">
      <Card glimmer={true}>
        <div className="flex h-full w-full gap-4 overflow-x-auto overflow-y-hidden   ">
          {projectData.map(project => (
            <Link
              href={project.id}
              key={project.id}
              className={`${project.visibility} group/title mb-2  flex aspect-square h-[calc(100%-8px)]  flex-shrink-0 flex-col  rounded-lg bg-slate-400 bg-opacity-50 p-2 duration-300 active:bg-slate-500 dark:bg-slate-700 dark:active:bg-slate-700 sm:hover:bg-slate-400 dark:sm:hover:bg-slate-600`}
            >
              <Image
                src={project.images.coverWeb}
                alt="project cover image"
                className=" aspect-[4/3]  rounded object-cover "
              ></Image>

              <div className="mx-1 mt-2 flex grow items-center gap-1 ">
                <h3 className=" -white font-semibold duration-300 group-hover/title:text-white dark:group-hover/title:text-teal-300 dark:group-active/title:text-teal-400 xl:text-lg">
                  {project.title}
                </h3>
                <Icon
                  path={mdiArrowTopRight}
                  size={0.6}
                  className="duration-300 ease-in group-hover/title:-translate-y-1 group-hover/title:translate-x-1 group-hover/title:text-white dark:group-hover/title:text-teal-300  dark:group-active/title:text-teal-400"
                />
              </div>
            </Link>
          ))}
        </div>
      </Card>
    </div>
  )
}
