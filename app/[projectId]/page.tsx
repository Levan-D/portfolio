/** @format */
import { projectData } from "../data/projectData"
import ImageDisplay from "./components/ImageDisplay"
import Carousel from "../components/Caruosel"
import { Metadata, ResolvingMetadata } from "next"
import Description from "./components/Description"
import NotFound from "../not-found"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import Icon from "@mdi/react"
import { mdiArrowTopRight } from "@mdi/js"

type Props = {
  params: {
    projectId: string
  }
}

export async function generateMetadata(
  { params: { projectId } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = projectData.find(card => card.title === projectId)
  return {
    title: project?.title,
    description: project?.pitch,
    keywords: project?.tech,
    authors: [{ name: "Levan Dolidze" }],
    colorScheme: "dark",
    creator: "Levan Dolidze",
    publisher: "Levan Dolidze",

    openGraph: {
      title: `Levan Dolidze${" - " + project?.title}`,
      description: project?.pitch,
      url: `https://levandolidze.com/${projectId}`,
      siteName: "Levan Dolidze - Web Developer",
      images: [
        {
          url: "https://i.imgur.com/pKweUJY.png",
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  }
}

export default function ProjectsPage({ params: { projectId } }: Props) {
  const project = projectData.find(
    card => card.title.toLocaleLowerCase().replaceAll(" ", "-") === projectId
  )

  if (!project) return <NotFound />

  const { title, desc, tech, images, links } = project

  return (
    <div className=" my-16 ">
      <div className="select-none items-center justify-center gap-12 lg:flex">
        <div className="basis-2/5 ">
          <Description title={title} tech={tech} links={links} desc={desc} />
        </div>
        <div className="basis-3/5    ">
          <ImageDisplay images={images} />
        </div>
      </div>

      <div className=" my-16 select-none md:my-28">
        <Carousel>
          <>
            {projectData.map((project, i) => (
              <Link
                href={project.title.toLocaleLowerCase().replaceAll(" ", "-")}
                key={project.title + i}
                className={` group/title mb-2 flex  aspect-square  max-h-[200px] flex-shrink-0  flex-col rounded-lg  bg-slate-400 bg-opacity-50 p-2 duration-300 active:bg-slate-500 dark:bg-slate-700 dark:active:bg-slate-700 sm:hover:bg-slate-400 dark:sm:hover:bg-slate-600 lg:max-h-[250px]`}
              >
                <Image
                  src={project.images.coverWeb}
                  alt="project cover image"
                  className=" aspect-[4/3]  rounded object-cover "
                ></Image>

                <div className="mx-1 mt-2 flex grow items-center gap-1 ">
                  <h3 className=" -white line-clamp-1 text-xs  font-semibold duration-300 group-hover/title:text-white dark:group-hover/title:text-teal-300 dark:group-active/title:text-teal-400 md:text-sm xl:text-lg">
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
          </>
        </Carousel>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return projectData.map(card => ({
    projectId: card.title.toLowerCase().replaceAll(" ", "-"),
  }))
}
