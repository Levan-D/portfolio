/** @format */
"use client"
import { useState } from "react"
import { projectData } from "../data/projectData"
import Card from "../components/Card"
import Icon from "@mdi/react"
import { mdiLaptop, mdiCellphone } from "@mdi/js"
import Image from "next/image"

type Props = {
  params: {
    projectId: string
  }
}

export default function ProjectsPage({ params: { projectId } }: Props) {
  const [active, setActive] = useState("web")

  const project = projectData.find(card => card.id === projectId)

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
    images: { coverWeb, coverMobile, leftMobile, rightMobile },
  } = project

  return (
    <div className="block grow items-center justify-center gap-12 lg:flex ">
      <div className="basis-2/5">
        <h2 className="text-2xl font-bold text-teal-400 md:text-3xl  lg:text-4xl">
          {title}
        </h2>
        <p className="mt-4 font-semibold text-slate-300 lg:text-xl">{desc}</p>
        <div className="mt-4 flex gap-4">
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

      <div className="basis-3/5 select-none ">
        <Card sideLine={true} glimmer={false}>
          <div className="xl:px-8 xl:py-16 lg:py-8 xl:scale-[1] lg:scale-[0.85] scale-75">
            {mobile && (
              <div className="mb-12 flex justify-center gap-6 ">
                <button
                  onClick={() => setActive("web")}
                  className={`${
                    active === "web" && "!border-slate-300 !text-slate-300"
                  }  rounded-xl border-2 border-slate-400 p-2 text-slate-400 duration-300 hover:border-slate-300 hover:text-slate-300 active:border-slate-500 active:text-slate-500`}
                >
                  <Icon path={mdiLaptop} size={1} />
                </button>
                <button
                  onClick={() => setActive("mobile")}
                  className={`${
                    active === "mobile" && "!border-slate-300 !text-slate-300"
                  }  rounded-xl border-2 border-slate-400 px-2.5 py-2 text-slate-400 duration-300 hover:border-slate-300 hover:text-slate-300 active:border-slate-500 active:text-slate-500`}
                >
                  <Icon path={mdiCellphone} size={0.8} />
                </button>
              </div>
            )}

            <div className="relative ">
              <div
                className={` ${
                  active === "mobile" &&
                  "!visible !-translate-x-80 translate-y-6 -rotate-[15deg] "
                } collapse absolute left-1/2 z-10 mx-auto   aspect-[9/16] xl:max-h-[420px] lg:max-h-[240px] -translate-x-1/2 rounded-3xl bg-slate-600 p-2 transition-transform duration-500 ease-in-out `}
              >
                <Image
                  src={coverWeb}
                  alt="project's landing page image"
                  className=" h-full rounded-2xl object-cover"
                ></Image>
              </div>

              <div
                className={` ${
                  active === "mobile" &&
                  "!visible !translate-x-20 translate-y-6 rotate-[15deg] "
                } collapse absolute left-1/2 z-10 mx-auto   aspect-[9/16] xl:max-h-[420px] lg:max-h-[240px] -translate-x-1/2 rounded-3xl bg-slate-600 p-2 transition-transform duration-500 ease-in-out `}
              >
                <Image
                  src={coverWeb}
                  alt="project's landing page image"
                  className=" h-full rounded-2xl object-cover"
                ></Image>
              </div>

              <div
                className={` ${
                  active === "mobile" && "aspect-[9/16]"
                } relative z-20 mx-auto aspect-[16/9] xl:max-h-[420px] lg:max-h-[240px] rounded-3xl bg-slate-600 p-2 duration-300 ease-in-out`}
              >
                <Image
                  src={coverWeb}
                  alt="project's landing page image"
                  className=" h-full rounded-2xl object-cover"
                ></Image>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return projectData.map(card => ({
    projectId: card.id.toString(),
  }))
}
