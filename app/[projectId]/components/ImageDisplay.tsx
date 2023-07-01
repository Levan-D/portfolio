"use client"

import { useState } from "react"
import Card from "../../components/Card"
import Icon from "@mdi/react"
import { mdiLaptop, mdiCellphone } from "@mdi/js"
import Image from "next/image"
import { StaticImageData } from "next/image"

type Props = {
  mobile: boolean
  images: {
    coverWeb: StaticImageData
    coverMobile?: StaticImageData
    leftMobile?: StaticImageData
    rightMobile?: StaticImageData
  }
}

export default function ImageDisplay({
  mobile,
  images: { coverWeb, coverMobile, leftMobile, rightMobile },
}: Props) {
  const [active, setActive] = useState("web")

  return (
    <Card sideLine={true} glimmer={false} customCSS=" ">
      <div className="md:scale-75 lg:scale-[0.85] lg:py-8 xl:scale-[1] xl:px-8 xl:py-16">
        {mobile && (
          <div className="mb-12 hidden justify-center  gap-6 md:flex ">
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
              "!-translate-x-56 translate-y-4 -rotate-[15deg] md:!visible md:!-translate-x-72 lg:!-translate-x-40  lg:translate-y-2  xl:!-translate-x-80 xl:translate-y-6 "
            } collapse absolute left-1/2 z-10 mx-auto   aspect-[9/16]  -translate-x-1/2 rounded-3xl bg-slate-600 p-2  transition-transform  duration-500 ease-in-out md:max-h-[400px] lg:max-h-[240px] xl:max-h-[420px] `}
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
              "!translate-x-14 translate-y-4 rotate-[15deg] md:!visible   md:!translate-x-16 lg:!translate-x-10 lg:translate-y-2 xl:!translate-x-20 xl:translate-y-6 "
            } collapse absolute left-1/2 z-10 mx-auto   aspect-[9/16]  -translate-x-1/2 rounded-3xl  bg-slate-600  p-2  transition-transform duration-500 ease-in-out md:max-h-[400px] lg:max-h-[240px] xl:max-h-[420px] `}
          >
            <Image
              src={coverWeb}
              alt="project's landing page image"
              className=" h-full rounded-2xl object-cover"
            ></Image>
          </div>

          <div
            className={` ${
              active === "mobile" && "md:aspect-[9/16]"
            } relative z-20 mx-auto aspect-[16/9] max-h-[500px] rounded-3xl bg-slate-600 md:p-2 duration-300 ease-in-out  md:max-h-[400px] lg:max-h-[240px] xl:max-h-[420px]`}
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
  )
}
