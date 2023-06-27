/** @format */
import { v4 as uuidv4 } from "uuid"
import { techObj } from "./techData"
import type { ColType } from "./techData"
import Image from "next/image"
import Card from "@/app/components/Card"

const arrayRender = (col: ColType) => {
  // using tailwind screen  to render same component with different logic for mobile view
  return (
    <div className="flex justify-center gap-4 md:my-4 xl:my-12 ">
      {col.map(item => {
        const content = (
          <div className="flex flex-col items-center justify-end rounded-xl border border-transparent px-4 pb-2 pt-3 duration-300 sm:hover:-translate-y-2 sm:hover:border-slate-500 sm:hover:border-opacity-50 sm:hover:bg-slate-600 sm:hover:bg-opacity-50  sm:active:bg-slate-600">
            <span className="hidden lg:block">
              <Image src={item.image} alt={item.name} height={50} />
            </span>
            <span className="block lg:hidden">
              <Image src={item.image} alt={item.name} height={38} />
            </span>
            <p className=" mt-2 whitespace-nowrap  text-center text-sm font-semibold ld:text-base">
              {item.name}
            </p>
          </div>
        )

        return (
          <>
            <a
              key={uuidv4()}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block"
            >
              {content}
            </a>
            <span className="block sm:hidden" key={item.name}>
              {content}
            </span>
          </>
        )
      })}
    </div>
  )
}

const arrayRenderAll = () => {
  const flatArray = Object.values(techObj).flat()

  return flatArray.map((item, index) => <div key={index}>{arrayRender([item])} </div>)
}

export default function Technologies() {
  return (
    <div id="technologies" className=" py-20 md:min-h-screen">
      <div className="mx-auto w-fit py-20 text-center">
        <h2 className="text-2xl font-bold text-teal-400 md:text-3xl  lg:text-4xl">
          Technologies & Tools
        </h2>
        <p className="mt-4 font-semibold text-slate-300 lg:text-xl">
          These are some of the tools I use
        </p>
        <p className="font-semibold text-slate-300 lg:text-xl">
          when building my projects
        </p>
      </div>

      <Card customCSS=" mx-auto  !h-fit !w-fit   ">
        <>
          <div className="  hidden  select-none rounded-xl px-12  py-10 xl:block">
            {arrayRender(techObj.firstCol)}
            {arrayRender(techObj.secondCol)}
            {arrayRender(techObj.thirdCol)}
          </div>
          <div className="   flex lg:max-w-[800px] md:max-w-[600px] select-none flex-wrap  justify-center  gap-4 rounded-xl py-12 lg:mx-8    xl:hidden">
            {arrayRenderAll()}
          </div>
        </>
      </Card>
    </div>
  )
}
