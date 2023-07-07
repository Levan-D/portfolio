/** @format */
import { v4 as uuidv4 } from "uuid"
import { techObj } from "../../data/techData"
import Image from "next/image"
import Card from "@/app/components/Card"
import { personalData } from "@/app/data/personalData"

export default function Technologies() {
  const tech = personalData.tech

  return (
    <div id="technologies" className="mt-20  md:mt-48 md:min-h-screen">
      <div className="mx-auto w-fit max-w-sm py-20 text-center ">
        <h2 className="textSecondary   text-2xl font-bold  md:text-3xl lg:text-4xl">
          {tech.title}
        </h2>
        <div className="textTertiary mt-4 font-semibold lg:text-xl">{tech.desc}</div>
      </div>

      <Card sideLine={true} customCSS=" mx-auto  !h-fit !w-fit   ">
        <>
          <div className=" flex  max-w-xl select-none flex-wrap justify-center gap-6  rounded-xl px-0 py-10 md:px-6 lg:max-w-3xl lg:px-12 lg:py-20  xl:max-w-5xl ">
            {techObj.map(item => (
              <>
                <a
                  key={uuidv4()}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col items-center justify-end rounded-xl border border-transparent px-2  pb-2 pt-3 duration-300 active:scale-[0.95] sm:hover:-translate-y-2 sm:hover:border-slate-500 sm:hover:border-opacity-50 sm:hover:bg-slate-300 sm:hover:bg-opacity-50 sm:active:bg-slate-600 dark:sm:hover:bg-slate-600  md:px-4">
                    <span className="hidden lg:block">
                      <Image src={item.image} alt={item.name} height={50} />
                    </span>
                    <span className="block lg:hidden">
                      <Image src={item.image} alt={item.name} height={38} />
                    </span>
                    <p className=" ld:text-base mt-2  whitespace-nowrap text-center text-sm font-semibold">
                      {item.name}
                    </p>
                  </div>
                </a>
              </>
            ))}
          </div>
        </>
      </Card>
    </div>
  )
}
