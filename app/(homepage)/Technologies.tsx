/** @format */
"use client"

import { useState } from "react"
import { techObj } from "../data/techData"
import Image from "next/image"
import Card from "@/app/components/Card/Card"
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver"
import Link from "next/link"
import { useAppSelector } from "@/lib/redux/hooks"

export default function Technologies() {
  const { screenWidth } = useAppSelector(state => state.global)
  const [isVisible, setIsVisible] = useState(false)

  const handleIntersect = () => {
    setIsVisible(true)
  }

  const ref = useIntersectionObserver(handleIntersect, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  })

  return (
    <div ref={ref} id="technologies" className="my-20 py-20">
      <div
        className={` ${
          isVisible
            ? " md:translate-x-0 md:opacity-100"
            : "md:translate-x-[800px] md:opacity-0"
        } mx-auto mb-20 w-fit max-w-sm text-center duration-500`}
      >
        <h2 className={` textSecondary text-2xl   font-bold   md:text-3xl lg:text-4xl`}>
          Technologies & Tools
        </h2>
        <p className="textTertiary mt-4 font-semibold lg:text-xl">
          These are some of the tools I use when building my projects
        </p>
      </div>

      <div
        className={` ${
          isVisible
            ? " md:translate-x-0 md:opacity-100"
            : "md:-translate-x-[800px] md:opacity-0"
        }  mx-auto w-fit duration-500`}
      >
        <Card sideLine>
          <div className=" flex  select-none flex-wrap justify-center gap-6 rounded-xl  px-0 py-10 md:max-w-xl  lg:max-w-3xl lg:px-12 lg:py-20  xl:max-w-5xl ">
            {techObj.map((item, i) => (
              <Link
                key={item.name + i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-end rounded-xl border border-transparent px-2  pb-2 pt-3 duration-300 active:scale-[0.95] sm:hover:-translate-y-2 sm:hover:border-slate-500 sm:hover:border-opacity-50 sm:hover:bg-slate-300 sm:hover:bg-opacity-50 sm:active:bg-slate-600 dark:sm:hover:bg-slate-600  md:px-4"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  height={screenWidth > 1024 ? 50 : 38}
                />

                <p className=" ld:text-base mt-2  whitespace-nowrap text-center text-sm font-semibold">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
