/** @format */
import { projectData } from "../data/projectData"
import ImageDisplay from "./components/ImageDisplay"
import Carousel from "./components/Caruosel"
import { Metadata, ResolvingMetadata } from "next"
import Description from "./components/Description"
import NotFound from "../not-found"

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

  if (!project) return <NotFound />

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
          <Description title={title} tech={tech} links={links} desc={desc} />
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
