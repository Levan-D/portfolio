/** @format */
import { projectData } from "../data/projectData"
import ImageDisplay from "./components/ImageDisplay"
import Carousel from "./components/Caruosel"
import Icon from "@mdi/react"
import { mdiGithub, mdiWeb } from "@mdi/js"
import Link from "next/link"

type Props = {
  params: {
    projectId: string
  }
}

export default function ProjectsPage({ params: { projectId } }: Props) {
  const project = projectData.find((card) => card.id === projectId)

  if (!project) {
    return <div>Error: Project not found</div>
  }

  const {
    id,
    height,
    stagger,
    visibility,
    mobile,
    title,
    pitch,
    desc,
    tech,
    images,
    links,
  } = project

  return (
    <div className=" my-16 mt-36 lg:mt-16">
      <div className="items-center justify-center gap-12 lg:flex">
        <div className="mx-auto my-8  basis-2/5 md:w-2/3 lg:w-full">
          <h2 className="text-center text-2xl font-bold text-teal-400  md:text-3xl lg:text-left lg:text-4xl ">
            {title}
          </h2>
          <p className=" mt-4  font-semibold text-slate-300  lg:text-xl">
            {desc}
          </p>
          <div className=" mt-4 mt-4   flex  gap-4">
            {tech.map((tech: string) => (
              <div
                className="rounded-full  bg-teal-200 px-4 py-1 font-semibold text-teal-950 "
                key={tech}
              >
                {tech}
              </div>
            ))}
          </div>

          <div className="flex mt-4 gap-4 text-slate-300 ">
            <div>
              <Link target="_blank" className="duration-300 hover:text-teal-300 active:text-teal-400" href={links.github}>
                <Icon path={mdiGithub} size={1.2} />
              </Link>
            </div>
            {links.website && (
              <div>
                <Link target="_blank" className="duration-300 hover:text-teal-300 active:text-teal-400" href={links.website}>
                  <Icon path={mdiWeb} size={1.2} />
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="relative z-0 basis-3/5 select-none">
          <ImageDisplay mobile={mobile} images={images} />
        </div>
      </div>

      <div className=" my-16 select-none md:my-28">
        <Carousel />
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return projectData.map((card) => ({
    projectId: card.id.toString(),
  }))
}
