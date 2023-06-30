/** @format */

import Card from "@/app/components/Card"
import { projectData } from "../../data/projectData"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  return (
    <div id="projects" className="   sm:mx-16 mt-20 md:mt-[200px] py-20 md:min-h-screen">
      <div className="mx-auto w-fit -translate-y-10 text-center  lg:translate-y-2 lg:text-left xl:-translate-x-28 xl:translate-y-6">
        <h2 className="text-2xl font-bold text-teal-400 md:text-3xl  lg:text-4xl">
          Projects
        </h2>
        <p className="mt-4 font-semibold text-slate-300 lg:text-xl">
          Some of my works{" "}
        </p>
      </div>

      <div className="   mx-auto flex w-fit grid-flow-col grid-rows-[repeat(12,_minmax(10px,_40px))] flex-wrap  justify-center  gap-8   lg:grid lg:grid-cols-3 xl:grid-cols-4  ">
        {projectData.map((card) => {
          const {
            id,
            height,
            stagger,
            visibility,
            title,
            pitch,
            tech,
            images: { coverWeb },
          } = card

          let imgCSS = "xl:h-[130px] lg:h-[120px] object-fit "

          let flex

          if (height.includes("xl:row-span-6")) {
            imgCSS += "xl:!object-cover xl:!h-[340px]"

            if (height.includes("lg:row-span-5")) {
              imgCSS += " lg:!h-[340px]"
            }
          } else if (height.includes("xl:row-span-3")) {
            imgCSS += "lg:!h-[76px] lg:w-[76px] !object-cover xl:mt-2"
            flex = "lg:!flex-row "
          }

          return (
            <Card
              key={id}
              glow={true}
              customCSS={`${height}  ${stagger}  ${visibility}  hover:scale-[1.01]  active:scale-[0.99]  max-w-[400px]  `}
            >
              <Link href={id} className={`${flex} flex h-full flex-col gap-4`}>
                <Image
                  src={coverWeb}
                  alt={`cover picter for ${title} project`}
                  className={` ${imgCSS} rounded-lg `}
                ></Image>

                <div className={`overflow-hidden ${!flex && "mb-1"} `}>
                  <h4 className="font-semibold">{title}</h4>
                  <p className=" text-slate-300">{pitch}</p>
                </div>
              </Link>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
