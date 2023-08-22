/** @format */
"use client"

import { useState } from "react"
import { personalData } from "@/app/data/personalData"
import Card from "@/app/components/Card"
import { v4 as uuidv4 } from "uuid"
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver"

export default function Experience() {
  const exp = personalData.exp

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
    <div
      ref={ref}
      id="experience"
      className="  justify-items-center  py-20 md:min-h-screen lg:flex"
    >
      <div
        className={` ${
          isVisible
            ? " md:translate-x-0 md:opacity-100"
            : "md:-translate-x-[800px] md:opacity-0"
        }  top-0 mx-auto h-fit w-fit max-w-2xl  basis-1/2 py-20  duration-500 lg:sticky`}
      >
        <h2 className="textSecondary   text-2xl font-bold  md:text-3xl lg:text-4xl">
          {exp.title}
        </h2>
        <div className="textTertiary mt-4 font-semibold xl:text-lg">{exp.desc}</div>
      </div>

      <div
        className={` ${
          isVisible
            ? " md:translate-x-0 md:translate-y-0 md:opacity-100"
            : "md:translate-x-[800px] md:translate-y-[400px] md:opacity-0"
        } basis-1/2 duration-500  lg:mr-10`}
      >
        <div>
          {exp.pos.map(role => (
            <Card perspective customCSS="max-w-2xl mx-auto " key={uuidv4()}>
              <div className="px-4 py-2 ">
                <h3 className="  text-lg font-semibold">{role.title}</h3>

                <p className="textTertiary    text-sm  italic">{role.location}</p>

                <p className=" textTertiary mb-2  text-sm  ">{role.date}</p>
                <div className="textTertiary">{role.desc}</div>
                <div className="mt-4 flex flex-wrap gap-4">
                  {role.tech.map(tech => (
                    <div
                      className=" rounded-full bg-teal-100  px-3 py-0.5 text-sm font-semibold text-teal-800 "
                      key={uuidv4()}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
