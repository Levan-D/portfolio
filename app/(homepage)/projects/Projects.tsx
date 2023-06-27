/** @format */

import Card from "@/app/components/Card"
import { cardsData } from "./cardsData"
import { v4 as uuidv4 } from "uuid"

export default function Projects() {
  return (
    <div id="projects" className="   mx-16 mt-[200px] py-20 md:min-h-screen">
      <div className="mx-auto w-fit -translate-y-10 text-center  lg:translate-y-2 lg:text-left xl:-translate-x-28 xl:translate-y-6">
        <h2 className="text-2xl font-bold text-teal-400 md:text-3xl  lg:text-4xl">
          Projects
        </h2>
        <p className="mt-4 font-semibold text-slate-300 lg:text-xl">Some of my works </p>
      </div>

      <div className="   mx-auto flex w-fit grid-flow-col grid-rows-[repeat(12,_minmax(10px,_40px))] flex-wrap  justify-center  gap-8   lg:grid lg:grid-cols-3 xl:grid-cols-4  ">
        {cardsData.map(card => {
          const { height, stagger, visibility, title, desc, cover } = card

          return (
            <Card
              key={uuidv4()}
              glow={true}
              customCSS={`${height}  ${stagger}  ${visibility}  hover:scale-[1.01]    max-w-[400px]  `}
            >
              <div className="flex h-full flex-col ">
                <div className="grow">{cover}</div>
                <h4 className="font-semibold">{title}</h4>
                <p className="mb-2 text-slate-300">{desc}</p>
                <button>click me</button>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
