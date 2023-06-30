/** @format */
import { projectData } from "../data/projectData"
import ImageDisplay from "./components/ImageDisplay"
import Carousel from "./components/Caruosel"

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
  } = project

  return (
    <div className=" mt-36 lg:mt-16 my-16">
      <div className="items-center justify-center gap-12 lg:flex">
        <div className="basis-2/5  md:w-2/3 lg:w-full mx-auto">
          <h2 className="text-center text-2xl font-bold text-teal-400  md:text-3xl lg:text-left lg:text-4xl ">
            {title}
          </h2>
          <p className=" mt-4  font-semibold text-slate-300  lg:text-xl">
            {desc}
          </p>
          <div className=" mt-4 flex   gap-4  my-8">
            {tech.map((tech: string) => (
              <div
                className="rounded-full  bg-teal-200 px-4 py-1 font-semibold text-teal-950 "
                key={tech}
              >
                {tech}
              </div>
            ))}
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
