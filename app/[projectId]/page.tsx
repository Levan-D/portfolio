/** @format */
import { projectData } from "../data/projectData"
import ImageDisplay from "./components/ImageDisplay"
import Carousel from "./components/Caruosel"
import Icon from "@mdi/react"
import { mdiGithub, mdiWeb } from "@mdi/js"
import Link from "next/link"
import { Metadata, ResolvingMetadata } from "next"
import { v4 as uuidv4 } from "uuid"

type Props = {
  params: {
    projectId: string
  }
}

export async function generateMetadata(
  { params: { projectId } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = projectData.find(card => card.id === projectId)

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

  if (!project) {
    return (
      <div className="mx-auto mt-[30vh]  w-fit">
        <h2 className="mb-4 text-center text-xl  font-semibold">
          Can&apos;t find the project you&apos;re looking for
        </h2>
        <Link href="/" className="btnSecondary mt-8 text-center">
          Return Home
        </Link>
      </div>
    )
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
    <div className=" my-16 ">
      <div className="items-center justify-center gap-12 lg:flex">
        <div className="mx-auto my-8  basis-2/5 md:w-2/3 lg:w-full">
          <h2 className="textSecondary text-center text-2xl font-bold  md:text-3xl lg:text-left lg:text-4xl ">
            {title}
          </h2>
          <p className=" textTertiary  mt-4 font-semibold  xl:text-lg">{desc}</p>
          <div className="  mt-4  flex flex-wrap  gap-4">
            {tech.map((tech: string) => (
              <div
                className="rounded-full bg-teal-100 px-4  py-1 text-sm font-semibold text-teal-800 xl:text-base "
                key={uuidv4()}
              >
                {tech}
              </div>
            ))}
          </div>

          <div className="textTertiary mt-4 flex gap-4 lg:block ">
            {links.github && (
              <Link
                target="_blank"
                className="btnTertiary flex w-fit items-center gap-2 lg:mb-2"
                href={links.github}
              >
                <Icon path={mdiGithub} size={1.2} />
                <div className="hidden lg:block">Github</div>
              </Link>
            )}
            {links.website && (
              <Link
                target="_blank"
                className="btnTertiary flex w-fit items-center gap-2 lg:mb-2"
                href={links.website}
              >
                <Icon path={mdiWeb} size={1.2} />
                <div className="hidden lg:block">{title}</div>
              </Link>
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
  return projectData.map(card => ({
    projectId: card.id.toString(),
  }))
}
